import { useRef, WheelEvent } from 'react';
import {useSelector} from 'react-redux';
import './attack-list.style.css';
import { RootState } from '../../store';


export const AttacksListComponent = () => {

  const {attacks} = useSelector((state: RootState) => state.attacks);

  const miRef = useRef<HTMLDivElement>(null);

  const handleWheel = (e: WheelEvent<HTMLUListElement>) => {
    e.preventDefault(); // Evita la acción predeterminada de la rueda del mouse (en este caso, desplazarse hacia arriba o hacia abajo en la página)
    miRef.current?.scrollBy({ left: 0, top: e.deltaY, behavior: 'smooth' }); // Desplaza el contenido verticalmente en función de la dirección de la rueda del mouse
  };

  return (
    <div className='attacks-list-container'>
      <p className='attacks-text'>PREVIOUS ATTACKS</p>
      <ul className='attacks-box' onWheel={handleWheel}>
      {
        attacks.map((attack, index) => {
          return (
            <li key={index}>
              <p className='attacks-text'>{`${attack.attack_player} - ${attack.defender_player}`}</p>
              <p className='attacks-text'>{`${attack.attack_number} - D: ${attack.deaths} | I: ${attack.deaths}`}</p>
            </li>
          );
        })
      }
      </ul>
    </div>
  );
}
