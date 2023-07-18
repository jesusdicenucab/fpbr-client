import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isFetching: false
};

const fetchingSlice = createSlice({
  name: 'fetching',
  initialState,
  reducers: {
    fetch: (state):void => {
      state.isFetching = true;
    },
    notFetch: (state):void => {
      state.isFetching = false;
    }
  }
});

export const {fetch, notFetch} = fetchingSlice.actions;

export default fetchingSlice.reducer;
