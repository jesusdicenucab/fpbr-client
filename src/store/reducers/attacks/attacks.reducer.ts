import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAttack, IAttackState } from './attack.interface';

const initialState: IAttackState = {
  attacks: []
};

const attacksSlice = createSlice({
  name: 'attacks',
  initialState,
  reducers: {
    addAttack: (state: IAttackState, action: PayloadAction<IAttackState>):void => {
      action.payload.attacks.forEach((attack: IAttack) => {
        state.attacks.push(attack);
      });
    }
  }
});

export const {addAttack} = attacksSlice.actions;

export default attacksSlice.reducer;
