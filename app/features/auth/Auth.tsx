import {
  createStackNavigator, StackNavigationProp
} from "@react-navigation/stack";
import React, { FC } from "react";
import { Login } from "./Login";
import { Register } from "./Register";

const AuthStackNavigator = createStackNavigator();

type AuthScreenProps = {
  navigation: StackNavigationProp<any>;
};

const AuthScreen: FC<AuthScreenProps> = (props: AuthScreenProps) => {
  return (
    <AuthStackNavigator.Navigator screenOptions={{ headerShown: false }}>
      <AuthStackNavigator.Screen name="Login" component={Login} />
      <AuthStackNavigator.Screen name="Register" component={Register} />
    </AuthStackNavigator.Navigator>
  );
};

export { AuthScreen };
