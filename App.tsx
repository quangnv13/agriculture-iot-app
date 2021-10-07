import { registerRootComponent } from "expo";
import { extendTheme, NativeBaseProvider } from "native-base";
import React from "react";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { store } from "./app/core/store";
import { Main } from "./app/features/auth/Auth";

export default function App() {
  const theme = extendTheme({
    colors: {
      // Add new color
      primary: {
        50: "#f0fdf4",
        100: "#dcfce7",
        200: "#bbf7d0",
        300: "#86efac",
        400: "#4ade80",
        500: "#22c55e",
        600: "#16a34a",
        700: "#15803d",
        800: "#166534",
        900: "#14532d",
      },
      secondary: {
        50: "#ecfdf5",
        100: "#d1fae5",
        200: "#a7f3d0",
        300: "#6ee7b7",
        400: "#34d399",
        500: "#10b981",
        600: "#059669",
        700: "#047857",
        800: "#065f46",
        900: "#064e3b",
      },
      success: "#16a34a",
      warning: "#fef08a",
      error: "#ef4444",
    },
  });

  return (
    <NativeBaseProvider theme={theme}>
      <Provider store={store}>
        <Main></Main>
      </Provider>
    </NativeBaseProvider>
  );
}

registerRootComponent(App);
