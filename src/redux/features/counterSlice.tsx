import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface TypeInitialState{
    count:number
}
const initialState:TypeInitialState = {
  count: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    incrementByValue: (state, action:PayloadAction<number>) => {
      state.count = state.count + action.payload;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
  },
});

export default counterSlice.reducer;

export const { increment, decrement, incrementByValue } = counterSlice.actions;
