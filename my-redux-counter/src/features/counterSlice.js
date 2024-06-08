import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
    toggled: false
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    increase: (state, action) => {
      state.count += action.payload;
    },
    toggle: (state) => {
      state.toggled = !state.toggled;
    }
  }
});

export const { increment, decrement, increase, toggle } = counterSlice.actions;

export default counterSlice.reducer;
