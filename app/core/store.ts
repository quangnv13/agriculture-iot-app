import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import authSliceReducer from "../features/auth/authSlice";
import layoutSliceReducer from "../features/layout/layoutSlice";

export const store = configureStore({
  reducer: combineReducers({
    authSliceReducer,
    layoutSliceReducer,
  }),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
