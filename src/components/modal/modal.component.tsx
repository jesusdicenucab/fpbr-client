import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import socket from '../../socket/socket.client';
import './modal.style.css';
import { validateAttack } from '../../helpers';
import { useDispatch } from 'react-redux';
import { setMyNumber } from '../../store/reducers/player-number/player-number.reducer';

interface IModalProps {
  isOpen: boolean;
  onClose: (status: boolean) => void
}

interface IValidAttack {
  valid: boolean;
  message: string;
}

export const ModalComponent = ({ isOpen, onClose }: IModalProps) => {

  const {id, username} = useParams();

  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState<string>('');

  const [attackIsValid, setAttackIsValid] = useState<IValidAttack>({valid: true, message: ''});

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const attackChoice = parseInt(inputValue.trim());
    const {valid, message} = validateAttack(attackChoice.toString());
    setAttackIsValid({valid, message});
    if (valid) {
      setInputValue('');
      dispatch(setMyNumber(attackChoice));
      socket.emit('set-player-number', {gameId: id, username, playerNumber: attackChoice});
      onClose(false);
    }
    setAttackIsValid({message, valid});
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Introduce un número</h2>
        <form onSubmit={handleSubmit}>
          <input type="number" value={inputValue} onChange={handleInputChange} />
          <button type="submit" disabled={!inputValue.trim()}>
            Enter
          </button>
          {!attackIsValid.valid ? <p className='attack-is-not-valid'>{attackIsValid.message}</p> : null}
        </form>
      </div>
    </div>
  );
};
