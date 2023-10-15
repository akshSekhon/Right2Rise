import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import NavigationService from './NavigationService';
import MainStack from './MainStack';
import AuthenticationStack from '../NavigationStacks/AuthenticationStack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Navigate } from '../Constants';
import * as screens from "../Screens/index"
import MyDrawer from "../Components/DrawerMenu";


function RootScreen (props) {
    return (
        <NavigationContainer >
            <MyDrawer/>
        </NavigationContainer>
    );
}
export default RootScreen;
