import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import { registerRootComponent } from "expo";
import { extendTheme, NativeBaseProvider, Toast, ToastProvider, View } from "native-base";
import React, { FC } from "react";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import { useAppSelector } from "./app/core/hooks";
import { store } from "./app/core/store";
import { AuthScreen } from "./app/features/auth/Auth";
import { selectLoginStatus } from "./app/features/auth/authSlice";
import { Layout } from "./app/features/layout/Layout";

const StackNavigator = createStackNavigator();
//Main
const Main = () => {
  const navigationOptions: StackNavigationOptions = {
    headerShown: false,
  };

  const isLogged = useAppSelector(selectLoginStatus);

  return (
    <NavigationContainer>
      <StackNavigator.Navigator screenOptions={navigationOptions}>
        {isLogged ? (
          <StackNavigator.Screen
            name="Layout"
            component={Layout}
          ></StackNavigator.Screen>
        ) : (
          <StackNavigator.Screen
            name="Auth"
            component={AuthScreen}
          ></StackNavigator.Screen>
        )}
      </StackNavigator.Navigator>
    </NavigationContainer>
  );
};

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
