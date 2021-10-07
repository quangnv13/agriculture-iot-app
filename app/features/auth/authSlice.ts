import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../core/store";

type User = {
  username: string;
  password: string;
  fullName?: string;
};
const USERS: User[] = [
  {
    username: "admin",
    password: "123456",
    fullName: "Nguyễn Văn Quang",
  },
  {
    username: "hinh",
    password: "123456",
    fullName: "Trần Đình Hinh",
  },
];

export interface IAuthState {
  isLogged: boolean;
  message?: string;
  username?: string;
  fullName?: string;
}

const initialState: IAuthState = {
  isLogged: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      const user = USERS.find(
        (user) =>
          user.username === action.payload?.username &&
          user.password === action.payload?.password
      );
      const newState: IAuthState = user
        ? {
            ...state,
            isLogged: true,
            username: user.username,
            fullName: user.fullName,
          }
        : {
            ...state,
            isLogged: false,
            message: "Tên tài khoản hoặc mật khẩu không đúng",
          };
      return newState;
    },
    register: (state, action: PayloadAction<User>) => {
      const user = USERS.find(
        (user) => user.username === action.payload?.username
      );

      if (!user) {
        if (
          !action.payload?.username ||
          (!action.payload?.password && !action.payload?.fullName)
        ) {
          return {
            ...state,
            message: "Vui lòng nhập đầy đủ các trường bắt buộc",
          };
        }
        const newUser: User = {
          username: action.payload?.username,
          password: action.payload?.password,
          fullName: action.payload?.fullName,
        };
      }
      return { ...state, message: "Tên tài khoản đã tồn tại" };
    },
  },
});

export const { login, register } = authSlice.actions;
export const selectLoginStatus = (state: RootState) =>
  state.authSliceReducer.isLogged;

export default authSlice.reducer;