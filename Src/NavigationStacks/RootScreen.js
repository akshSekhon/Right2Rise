import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useSelector } from 'react-redux';
import AuthenticationStack from '../NavigationStacks/AuthenticationStack';
import MyDrawer from "./DrawerMenu";
import NavigationService from './NavigationService';


function RootScreen(props) {
    const userData = useSelector((state) => state?.auth?.userData)//token
    console.log('userData userData userData:----', userData);
    return (
        <NavigationContainer ref={(navigationRef) => {
            NavigationService.setTopLevelNavigator(navigationRef);
        }}
        >
            {userData?.loinStatus ? <MyDrawer /> : <AuthenticationStack />}
        </NavigationContainer>
    );
}
export default RootScreen;
