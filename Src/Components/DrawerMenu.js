import 'react-native-gesture-handler';
import * as React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as screens from "../Screens/index"
import { Navigate } from '../Constants';
// Import Custom Sidebar

import { Screen } from 'react-native-screens';
import { navigate } from '@react-navigation/compat/lib/typescript/src/NavigationActions';
import CustomSidebarMenu from './CustomSideBarMenu';
import { ImagePath } from '../Constants';
import { height } from '../Styles/responsiveSize';
import DrawerOptions from './DrawerOptions';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


function DashbaordScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName={screens.Dashboard} >
      <Stack.Screen
        name={Navigate.dashboard}
        component={screens.Dashboard}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}
function LoginScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName={screens.Logins} >
      <Stack.Screen
        name={Navigate.logins}
        component={screens.Logins}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
}

function AboutScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName={screens.AboutUs}
      screenOptions={{
        headerShown:false
      }}>
      <Stack.Screen
        name={Navigate.about_Us}
        component={screens.AboutUs}
      />
    </Stack.Navigator>
  );
}

function TrainingScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName={screens.Training}
      screenOptions={{
        headerShown:false
      }}>
      <Stack.Screen
        name={Navigate.about_Us}
        component={screens.Training}
      />
    </Stack.Navigator>
  );
}
function PoshScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName={screens.Posh}
      screenOptions={{
        headerShown:false
      }}>
      <Stack.Screen
        name={Navigate.posh}
        component={screens.Posh}
      />
    </Stack.Navigator>
  );
}
function DownloadsScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName={screens.Downloads}
      screenOptions={{
        headerShown:false
      }}>
      <Stack.Screen
        name={Navigate.downloads}
        component={screens.Downloads}
      />
    </Stack.Navigator>
  );
}
function ConsultinsStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName={screens.Consulting}
      screenOptions={{
        headerShown:false
      }}>
      <Stack.Screen
        name={Navigate.downloads}
        component={screens.Consulting}
      />
    </Stack.Navigator>
  );
}
function VideosScreenStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName={screens.Videos}
      screenOptions={{
        headerShown:false
      }}>
      <Stack.Screen
        name={Navigate.videos}
        component={screens.Videos}
      />
    </Stack.Navigator>
  );
}

function contactUsStack({ navigation }) {
  return (
    <Stack.Navigator
      initialRouteName={screens.ContactUs}
      screenOptions={{
        headerShown:false
      }}>
      <Stack.Screen
        name={Navigate.conact_US}
        component={screens.ContactUs}
      />
    </Stack.Navigator>
  );
}
function MyDrawer() {
  return (
      <Drawer.Navigator
        drawerContentOptions={{
          itemStyle: {backgroundColor:"grey"},
        }}
        screenOptions={{headerShown:false}}
        drawerContent={(props) => <CustomSidebarMenu {...props} />}>
        <Drawer.Screen
          name={Navigate.dashboard}
          // options={{ drawerLabel: 'Dashbaord' }}
          component={DashbaordScreenStack}
        />
        <Drawer.Screen name={Navigate.about_Us}
          component={AboutScreenStack}
          // options={
          //   { drawerLabel:'', drawerIcon: ({ focused, size }) => (<DrawerOptions menuLabel={"About us"} imageName={ImagePath.about_nav} />)}           
          // }
        />
        <Drawer.Screen
          name={Navigate.training}
          component={TrainingScreenStack}
          // options={
          //   { drawerLabel:'Training', drawerContentStyle:{backgroundColor:"Green"}, drawerIcon: ({ focused, size }) => (<Image resizeMode={'contain'}  style={{ ...styles.iconStyle}} source={ImagePath.training_nav}/>)}           
          // }
        />
         <Drawer.Screen
          name={Navigate.consulting}
          component={ConsultinsStack}
          // options={
          //   { drawerLabel:'', drawerIcon: ({ focused, size }) => (<Image resizeMode={'contain'}  style={{ ...styles.iconStyle}} source={ImagePath.download_nav}/>)}           
          // }
        />
        <Drawer.Screen
          name={Navigate.downloads}
          component={DownloadsScreenStack}
          // options={
          //   { drawerLabel:'', drawerIcon: ({ focused, size }) => (<Image resizeMode={'contain'}  style={{ ...styles.iconStyle}} source={ImagePath.download_nav}/>)}           
          // }
        />
        <Drawer.Screen
          name={Navigate.videos}
          component={VideosScreenStack}
          // options={
          //   { drawerLabel:'', drawerIcon: ({ focused, size }) => (<Image resizeMode={'contain'}  style={{ ...styles.iconStyle}} source={ImagePath.videos_nav}/>)}           
          // }
        /> 
          <Drawer.Screen
          name={Navigate.conact_US}
          component={contactUsStack}
          // options={
          //   { drawerLabel:'', drawerIcon: ({ focused, size }) => (<Image resizeMode={'contain'}  style={{ ...styles.iconStyle}} source={ImagePath.videos_nav}/>)}           
          // }
        /> 
      </Drawer.Navigator>
  );
}

export default MyDrawer;

const styles = StyleSheet.create({
  iconStyle: {
    //flex: 1,
    alignItems: "center",
    width:50,
    height:35,
  }
})

/*import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Navigate } from '../Constants';
import * as screens from "../Screens/index"
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName={Navigate.dashboard}  screenOptions={{headerShown: false}}
    >
      <Drawer.Screen name={Navigate.dashboard} component={screens.Dashboard} />
      <Drawer.Screen name={Navigate.about_Us} component={screens.AboutUs} />
      <Drawer.Screen name={Navigate.training} component={screens.Training} />
      <Drawer.Screen name={Navigate.downloads} component={screens.Downloads} />
      <Drawer.Screen name={Navigate.posh} component={screens.Posh} />
      <Drawer.Screen name={Navigate.RKT_Foundation} component={screens.RKTFoundation} />
      <Drawer.Screen name={Navigate.videos} component={screens.Videos} />




    </Drawer.Navigator>
  );
}

export default MyDrawer;*/