import './players-list.style.css';

const players = ['ARGENTINA', 'POLONIA', 'ALEMANIA', 'INGLATERRA'];

export const PlayersListComponent = () => {
  return (
    <ul className='players-list'>
      <li key={0} className='list-title'>
        <p className='player-text'>PLAYERS</p>
      </li>
      {
        players.map( (player, index) => {
          return (
            <li key={index + 1}>
              <p className='player-text players-title'>{player}</p>
            </li>
          )
        })
      }
    </ul>
  );
}
