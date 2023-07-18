import { RouterProvider } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { routes } from './routes';
import socket from './socket/socket.client';
import { addAttack } from './store/reducers/attacks/attacks.reducer';
import { setPlayers } from './store/reducers/players/player.reducer';
import { setRound } from './store/reducers/rounds/round.reducer';
import { IResponseObject } from './interfaces/responses.interface';
import { IPlayer, IPlayerState } from './store/reducers/players/player.interface';
import { notFetch } from './store/reducers/fetching/fetching.reducer';
import { setPlayersCount, setPlayersOrder } from './store/reducers/players-order/player-order.reducer';
import { RootState } from './store';

const App = (): JSX.Element => {

  const dispatch = useDispatch();

  const {totalPlayers} = useSelector((state: RootState) => state.playersOrder)

  useEffect(() => {

    socket.on('get-attacks-response', (response: IResponseObject) => {
      dispatch(addAttack(response.attacks));
      dispatch(setPlayers(response.players));
      dispatch(setRound(response.round));
      dispatch(notFetch());
      if (response.attacks.attacks.length !== totalPlayers) {
        dispatch(setPlayersOrder(response.players.players.map((player: IPlayer) => player.username)));
        dispatch(setPlayersCount(response.players.players.length));
      }
    });

    socket.on('set-players', (response: IPlayerState) => {
      dispatch(setPlayers(response));
      dispatch(setPlayersOrder(response.players.map((player: IPlayer) => player.username)));
      dispatch(setPlayersCount(response.players.length));
    });

  }, [socket]);

  return <RouterProvider router={routes} />
}

export default App;
