import { useParams } from 'react-router-dom';
import './attack.style.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export const AttackComponent = () => {

  const {playersOrder, totalPlayers} = useSelector((state: RootState) => state.playersOrder);

  const {myNumber} = useSelector((state: RootState) => state.myNumber);

  const {username} = useParams();

  let oponent;

  for (let count = 0; count < totalPlayers; count++) {
    if (playersOrder[count] === username) {
      oponent = playersOrder[count + 1] || playersOrder[0];
    }
  }

  return (
    <div className='attack-container'>
      <div>
        <p>{username}</p>
        <p>{myNumber}</p>
      </div>
      <div className='separator'></div>
      <div>
        <p>{oponent}</p>
        <p>???</p>
      </div>
    </div>
  );
}
