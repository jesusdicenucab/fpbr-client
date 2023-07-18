import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IPlayersOrder {
  playersOrder: string[],
  totalPlayers: number
}

const initialState: IPlayersOrder = {
  playersOrder: [],
  totalPlayers: 0
};

const playersOrderSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    setPlayersOrder: (state, action: PayloadAction<string[]>):void => {
      state.playersOrder = action.payload;
    },
    setPlayersCount: (state, action: PayloadAction<number>):void => {
      state.totalPlayers = action.payload;
    }
  }
});

export const {setPlayersOrder, setPlayersCount} = playersOrderSlice.actions;

export default playersOrderSlice.reducer;
