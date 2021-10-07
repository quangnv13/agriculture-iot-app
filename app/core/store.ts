import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";
import counterSliceReducer from "../features/counter/counterSlice";
import authSliceReducer from "../features/auth/authSlice";

export const store = configureStore({
  reducer: combineReducers({
    authSliceReducer,
    counterSliceReducer,
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
