import { useRef, useState } from 'react';
import { validateAttack } from '../../helpers';
import './controls.style.css';

interface InputEvent extends React.ChangeEvent<HTMLInputElement> {
  target: HTMLInputElement;
}

interface IAttack {
  // name: string;
  attack: number;
}

interface IValidAttack {
  valid: boolean;
  message: string;
}

export const ControlsComponent = () => {

  const [state, setState] = useState<IAttack>({attack: 0});

  const [attackIsValid, setAttackIsValid] = useState<IValidAttack>({valid: true, message: ''});

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClearInput = (e: React.MouseEvent) => {
    e.preventDefault();
    inputRef.current !== null ? inputRef.current.value = '' : null;
    setAttackIsValid({valid: true, message: ''});
  }

  const handleAttack = (e: React.MouseEvent) => {
    e.preventDefault();
    const {valid, message} = validateAttack(state.attack.toString());
    setAttackIsValid({valid, message});
    if (valid) {
      alert(state.attack);
    }
  }

  const handleChange = (e: InputEvent) => {
    e.preventDefault();
    setState({attack: parseInt(e.target.value)});
  }

  return (
    <div className='controls'>
      <button className='control-button' onClick={handleClearInput}>CLEAR</button>
      <div className='attack-controls'>
        <input id='choice' className={`control-input ${!attackIsValid.valid ? 'attack-not-valid' : ''}`} type="number" ref={inputRef} onChange={handleChange}/>
        {!attackIsValid.valid ? <p className='attack-is-not-valid'>{attackIsValid.message}</p> : null}
      </div>
      <button className='control-button' onClick={handleAttack}>ATTACK</button>
    </div>
  );
}
