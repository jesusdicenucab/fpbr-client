import { useRef, WheelEvent } from 'react';
import './attack-list.style.css';

const attacks = [
  {
    attacker: 'ARGENTINA',
    defendant: 'INGLATERRA',
    attack: '12456: 3D | 1I',
  },
  {
    attacker: 'INGLATERRA',
    defendant: 'ALEMANIA',
    attack: '12456: 3D | 1I',
  },
  {
    attacker: 'ALEMANIA',
    defendant: 'POLONIA',
    attack: '12456: 3D | 1I',
  },
  {
    attacker: 'POLONIA',
    defendant: 'ARGENTINA',
    attack: '12456: 3D | 1I',
  },
  {
    attacker: 'ARGENTINA',
    defendant: 'INGLATERRA',
    attack: '12456: 3D | 1I',
  },
  {
    attacker: 'ARGENTINA',
    defendant: 'INGLATERRA',
    attack: '12456: 3D | 1I',
  }
]

export const AttacksListComponent = () => {

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
              <p className='attacks-text'>{`${attack.attacker} - ${attack.defendant}`}</p>
              <p className='attacks-text'>{attack.attack}</p>
            </li>
          );
        })
      }
      </ul>
    </div>
  );
}
