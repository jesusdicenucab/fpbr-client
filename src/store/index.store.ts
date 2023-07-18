import { configureStore } from "@reduxjs/toolkit";
import attacksReducer from "./reducers/attacks/attacks.reducer";
import playerReducer from "./reducers/players/player.reducer";
import roundReducer from "./reducers/rounds/round.reducer";
import fetchingReducer from "./reducers/fetching/fetching.reducer";
import playerOrderReducer from "./reducers/players-order/player-order.reducer";
import myNumberSlice from './reducers/player-number/player-number.reducer';

export const store = configureStore({
  reducer: {
    attacks: attacksReducer,
    players: playerReducer,
    rounds: roundReducer,
    fetching: fetchingReducer,
    playersOrder: playerOrderReducer,
    myNumber: myNumberSlice
  }
});

export type RootState = ReturnType<typeof store.getState>;
