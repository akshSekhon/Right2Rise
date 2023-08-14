

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import { Constants } from "../Constants";
// import TabNavigator from "./TabNavigator";
import * as screens from "../Screens/index"
import DrowerNavigator from "./DrowerNavigator";
import { Navigate } from "../Constants";


const MainStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            
            <Stack.Screen name={Navigate.drower} component={DrowerNavigator} options={{ gestureEnabled: false }} />

            {/* {(isSplash) && <Stack.Screen name={Constants.splash} component={screens.SplashScreen}  options={{gestureEnabled: false}}/>} */}
            {/* <Stack.Screen name={Constants.dealsTab} component={TabNavigator} options={{ gestureEnabled: false }} /> */}
            {/* <Stack.Screen name={Constants.editProfile} component={screens.EditProfile} />
            <Stack.Screen name={Constants.createPassword} component={screens.CreatePassword} />
            <Stack.Screen name={Constants.chat} component={screens.Chat} />
            <Stack.Screen name={Constants.coinDetail} component={screens.coinDetail} />
            <Stack.Screen name={Constants.transfer} component={screens.Transfer} />
            <Stack.Screen name={Constants.withdraw} component={screens.Withdraw} />
            <Stack.Screen name={Constants.OfferDetail} component={screens.OfferDetail} />
            <Stack.Screen name={Constants.UpdateOffer} component={screens.UpdateOffer} /> */}

            
            
        </Stack.Navigator >

    )
}
export default MainStack;


