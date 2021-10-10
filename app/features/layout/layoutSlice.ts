import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../core/store";

export interface ILayoutState {
  topbarTitle: string;
}

const initialState: ILayoutState = {
  topbarTitle: "Bảng điều khiển",
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setTopbarTitle: (state, action: PayloadAction<ILayoutState>) => {
      const newState: ILayoutState = {
        ...state,
        topbarTitle: action.payload.topbarTitle,
      };
      return newState;
    },
  },
});

export const { setTopbarTitle } = layoutSlice.actions;
export const selectTopbarTitle = (state: RootState) =>
  state.layoutSliceReducer.topbarTitle;

export default layoutSlice.reducer;
