import { useEffect, useState } from "react";
import './timer.style.css';
import { useSelector } from 'react-redux';
import { RootState } from "../../store";

export const TimerComponent = () => {

  const [timer, setTimer] = useState(120); // Inicia el cronómetro con 2 minutos (120 segundos)

  const {isFetching} = useSelector((state: RootState) => state.fetching);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer(timer => timer - 1); // Actualiza el tiempo restante cada segundo
    }, 1000);

    if (timer === 0) {
      clearInterval(intervalId); // Detiene el cronómetro después de 2 minutos
    }

    return () => clearInterval(intervalId); // Limpia el intervalo después de que el componente se desmonte
  }, [timer]);

  const minutos = Math.floor(timer / 60);
  const segundos = timer % 60;

  return (
    <div className='timer'>
    {
      isFetching ? <span>Waiting for others players to attack</span>: `${{minutos}}:${segundos < 10 ? '0' : ''}${segundos}}`
    }
    </div>
  );
}
