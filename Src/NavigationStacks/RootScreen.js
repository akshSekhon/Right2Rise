import React from 'react'

// import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import NavigationService from './NavigationService';
import MainStack from './MainStack';
import AuthenticationStack from '../NavigationStacks/AuthenticationStack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Constants } from '../Constants';


function RootScreen (props) {
    const Stack = createNativeStackNavigator();

    return (

        <NavigationContainer ref={(navigatorRef) => {
            NavigationService.setTopLevelNavigator(navigatorRef);
        }}>
        {/* <Stack.Screen name={Constants.splash} component={SplashScreen}  options={{gestureEnabled: false}}/> */}
        {(false) ? <>{MainStack()}</> : <>{AuthenticationStack()}</>}
        {/* {userLoginStatus?.token ? <>{MainStack()}</> : <>{AuthenticationStack()}</>} */}
      </NavigationContainer>


    );

}
export default RootScreen;
