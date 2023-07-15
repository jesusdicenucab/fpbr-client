import { MenuComponent } from '..';
import './head.style.css';

export const HeadComponent = () => {
  return (
    <div className='header'>
        <MenuComponent />
        <p className='room-name'>Nombre de la sala</p>
        <div></div>
    </div>
  );
}
