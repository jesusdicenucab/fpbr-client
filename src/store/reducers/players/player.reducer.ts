import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPlayerState } from './player.interface';

const initialState: IPlayerState = {
  players: []
};

const playersSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    setPlayers: (state: IPlayerState, action: PayloadAction<IPlayerState>):void => {
      state.players = action.payload.players;
    }
  }
});

export const {setPlayers} = playersSlice.actions;

export default playersSlice.reducer;
