import { AttackComponent, ControlsComponent } from '..';
import './main.style.css';

export const MainComponent = () => {
  return (
    <div className='main-component'>
      <p className='on-battlefield'>ON BATTLEFIELD</p>
      <AttackComponent />
      <ControlsComponent />
    </div>
  );
}
