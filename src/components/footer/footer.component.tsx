import { AttacksListComponent, PlayersListComponent } from '..';
import { TimerComponent } from '../timer/timer.component';
import './footer.style.css';

export const FooterComponent = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <PlayersListComponent />
        <div className='turn-timer-container'>
          <p className='text'>CHOOSE YOUR ATTACK</p>
          <TimerComponent />
        </div>
        <AttacksListComponent />
      </div>
    </div>
  )
}
