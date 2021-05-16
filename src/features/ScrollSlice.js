/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const scrollSlice = createSlice({
  name: 'scrollCount',
  initialState: {
    value: 5,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    defaultValue: (state, action) => {
      state.value = action;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, defaultValue } = scrollSlice.actions;

export default scrollSlice.reducer;
