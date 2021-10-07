import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../core/store";

export interface ICounterState {
  value: number;
}

const initialState: ICounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state) => {
      const newState: ICounterState = { ...state, value: state.value + 1 };
      return newState;
    },
    decrease: (state) => {
      const newState: ICounterState = { ...state, value: state.value - 1 };
      return newState;
    },
    increaseByAmount: (state, action: PayloadAction<number>) => {
      const newState: ICounterState = {
        ...state,
        value: state.value + action.payload,
      };
      return newState;
    },
  },
});

export const { increase, decrease, increaseByAmount } = counterSlice.actions;
export const selectCount = (state: RootState) =>
  state.counterSliceReducer.value;

export default counterSlice.reducer;
