import { RootState } from '../../store';
import './players-list.style.css';
import { useSelector } from 'react-redux';

export const PlayersListComponent = () => {

  const {players} = useSelector((state: RootState) => state.players);

  return (
    <ul className='players-list'>
      <li key={0} className='list-title'>
        <p className='player-text'>PLAYERS</p>
      </li>
      {
        players.map( (player, index) => {
          return (
            <li key={index + 1}>
              <p className='player-text players-title'>{player.username}</p>
            </li>
          )
        })
      }
    </ul>
  );
}
