import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import * as screens from "../Screens/index";
import { Navigate } from "../ConstantFiles/index";

const AuthenticationStack = () => {

  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Navigate.logins} component={screens.Logins} />
    </Stack.Navigator >

  )
}
export default AuthenticationStack;