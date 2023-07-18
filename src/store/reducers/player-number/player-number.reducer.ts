import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  myNumber: 0
};

const myNumberSlice = createSlice({
  name: 'myNumber',
  initialState,
  reducers: {
    setMyNumber: (state, action: PayloadAction<number>):void => {
      state.myNumber = action.payload;
    }
  }
});

export const {setMyNumber} = myNumberSlice.actions;

export default myNumberSlice.reducer;
