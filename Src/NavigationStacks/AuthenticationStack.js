import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import * as screens from "../Screens/index"

import { Navigate } from "../Constants/index";

const AuthenticationStack = () => {

  const Stack = createNativeStackNavigator();


  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>

      <Stack.Screen name={Navigate.dashboard} component={screens.Dashboard} />
      <Stack.Screen name={Navigate.about_Us} component={screens.AboutUs} />
      <Stack.Screen name={Navigate.downloads} component={screens.Downloads} />
      <Stack.Screen name={Navigate.conact_US} component={screens.ContactUs} />
      <Stack.Screen name={Navigate.posh} component={screens.Posh} />
      <Stack.Screen name={Navigate.training} component={screens.Training} />
      <Stack.Screen name={Navigate.RKT_Foundation} component={screens.RKTFoundation} />
      <Stack.Screen name={Navigate.videos} component={screens.Videos} />



      



      {/* {(isSplash) && <Stack.Screen name={Constants.splash} component={screens.SplashScreen}  options={{gestureEnabled: false}}/>} */}

      {/* <Stack.Screen name={Constants.splash} component={SplashScreen}  options={{gestureEnabled: false}}/> */}
      {/* <Stack.Screen name={Constants.login} component={Login}/>
      <Stack.Screen name={Constants.forgotPassword} component={ForgotPassword}/>
      <Stack.Screen name={Constants.signUp} component={SignUp} />
      <Stack.Screen name={Constants.createPassword} component={CreatePassword} />
      <Stack.Screen name={Constants.OtpVerify} component={OtpVerify} /> */}
      </Stack.Navigator >

  )
} 
export default AuthenticationStack;