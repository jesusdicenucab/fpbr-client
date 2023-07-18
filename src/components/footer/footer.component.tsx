import { AttacksListComponent, PlayersListComponent } from '..';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';
import './footer.style.css';

export const FooterComponent = () => {

  const {isFetching} = useSelector((state: RootState) => state.fetching);

  return (
    <div className='footer'>
      <div className='footer-container'>
        <PlayersListComponent />
        <div className='turn-timer-container'>
          {isFetching ? <p className='text'>Waiting for others players to attack</p> : <p className='text'>CHOOSE YOUR ATTACK</p>}
          {/* <TimerComponent /> */}
        </div>
        <AttacksListComponent />
      </div>
    </div>
  )
}
