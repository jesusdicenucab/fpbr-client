import { useRef, useState } from 'react';
import { validateAttack } from '../../helpers';
import socket from '../../socket/socket.client';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { fetch } from '../../store/reducers/fetching/fetching.reducer';
import './controls.style.css';

interface InputEvent extends React.ChangeEvent<HTMLInputElement> {
  target: HTMLInputElement;
}

interface IValidAttack {
  valid: boolean;
  message: string;
}

export const ControlsComponent = () => {

  const {id, username} = useParams();

  const {round} = useSelector((state: RootState) => state.rounds);

  const {playersOrder, totalPlayers} = useSelector((state: RootState) => state.playersOrder);

  const {isFetching} = useSelector((state: RootState) => state.fetching);

  const dispatch = useDispatch();

  const [state, setState] = useState<number>(0);

  const [attackIsValid, setAttackIsValid] = useState<IValidAttack>({valid: true, message: ''});

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClearInput = (e: React.MouseEvent) => {
    e.preventDefault();
    inputRef.current !== null ? inputRef.current.value = '' : null;
    setAttackIsValid({valid: true, message: ''});
  }

  const handleAttack = (e: React.MouseEvent) => {
    e.preventDefault();
    const numberAttack: number = state;
    const {valid, message} = validateAttack(state.toString());
    setAttackIsValid({valid, message});
    if (valid) {
      let defenderUsername
      for (let count = 0; count < totalPlayers; count++) {
        if (playersOrder[count] === username) {
          defenderUsername = playersOrder[count + 1] || playersOrder[0];
        }
      }
      inputRef.current !== null ? inputRef.current.value = '' : null;
      dispatch(fetch());
      socket.emit('set-attacks-response', {
        gameId: id,
        attackerUsername: username,
        defenderUsername,
        numberAttack,
        round
      })
    }
  }

  const handleChange = (e: InputEvent) => {
    e.preventDefault();
    setState(parseInt(e.target.value));
  }

  return (
    <div className='controls'>
      <button className='control-button' onClick={handleClearInput}>CLEAR</button>
      <div className='attack-controls'>
        <input id='choice' className={`control-input ${!attackIsValid.valid ? 'attack-not-valid' : ''}`} type="number" ref={inputRef} onChange={handleChange}/>
        {!attackIsValid.valid ? <p className='attack-is-not-valid'>{attackIsValid.message}</p> : null}
      </div>
      <button className={`control-button ${isFetching ? 'fetching' : ''}`} onClick={handleAttack} disabled={isFetching}>ATTACK</button>
    </div>
  );
}
