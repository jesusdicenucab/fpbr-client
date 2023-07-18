import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IRound } from './round.interface';

const initialState: IRound = {
  round: 1
};

const roundsSlice = createSlice({
  name: 'players',
  initialState,
  reducers: {
    setRound: (state: IRound, action: PayloadAction<IRound>):void => {
      state.round = action.payload.round;
    }
  }
});

export const {setRound} = roundsSlice.actions;

export default roundsSlice.reducer;
