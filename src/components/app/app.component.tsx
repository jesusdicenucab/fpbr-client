import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import jwt from 'jsonwebtoken';
import { RootState } from '../../store';
import socket from '../../socket/socket.client';
import './style.css';
import { IntegrationUrl, SECRET_KEY } from '../../config';
import axios from 'axios';

interface IProps {
  children: ReactNode;
}

export const ApplicationComponent = async ({children}: IProps) => {

  const {username} = useParams();

  const {players} = useSelector((state: RootState) => state.players);

  const {round} = useSelector((state: RootState) => state.rounds);

  if (round > 1) {
    let exist: boolean = false;
    console.log('players length', players.length, players);
    for (let count = 0; count < players.length; count++) {
      if (players[count].username === username) {
        console.log('ITERACION:', 'Cantidad de jugadores:', players.length, 'yo:', username, '| Jugador Iteracion:', players[count])
        exist = true;
        break;
      }
    }
    if (!exist) {
      console.log('ENTRA');
      alert('YOU LOOSE BRO');
      setTimeout(()=>{
        socket.disconnect();
        window.location.href = ('https://www.google.com');
      }, 5000);
    }
  }

  if (round > 1 && players.length === 1) {
    alert('YOU WON BRO');
    // const response = {user: username}
    // const token = jwt.sign(response, SECRET_KEY);
    // try {
    //   await axios.post(IntegrationUrl, token);
    // } catch(error){
    //   console.log(error);
    // }
    socket.disconnect();
  }

  return <div className='app'>{children}</div>
}
