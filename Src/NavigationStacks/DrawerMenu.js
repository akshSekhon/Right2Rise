import * as React from 'react';
import { StyleSheet } from 'react-native';
import 'react-native-gesture-handler';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { Navigate } from '../ConstantFiles';
import * as screens from "../Screens/index";
// Import Custom Sidebar

import CustomSidebarMenu from '../Components/CustomSideBarMenu';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


function DashbaordScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName={screens.Dashboard} >
      <Stack.Screen name={Navigate.dashboard} component={screens.Dashboard} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
function LoginScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName={screens.Logins} >
      <Stack.Screen name={Navigate.logins} component={screens.Logins} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

function AboutScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName={screens.AboutUs} screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Navigate.about_Us} component={screens.AboutUs} />
    </Stack.Navigator>
  );
}

function TrainingScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName={screens.Training} screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Navigate.about_Us} component={screens.Training} />
    </Stack.Navigator>
  );
}
function PoshScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName={screens.Posh} screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Navigate.posh} component={screens.Posh} />
    </Stack.Navigator>
  );
}
function DownloadsScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName={screens.Downloads} screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Navigate.downloads} component={screens.Downloads} />
    </Stack.Navigator>
  );
}
function ConsultinsStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName={screens.Consulting} screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Navigate.downloads} component={screens.Consulting} />
    </Stack.Navigator>
  );
}
function VideosScreenStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName={screens.Videos} screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Navigate.videos} component={screens.Videos} />
      <Stack.Screen name={Navigate.VideoPlayerScreen} component={screens.VideoPlayerScreen} />
    </Stack.Navigator>
  );
}

function contactUsStack({ navigation }) {
  return (
    <Stack.Navigator initialRouteName={screens.ContactUs} screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Navigate.conact_US} component={screens.ContactUs} />
    </Stack.Navigator>
  );
}
function MyDrawer() {
  return (
    <Drawer.Navigator drawerContentOptions={{ itemStyle: { backgroundColor: "grey" }, }} screenOptions={{ headerShown: false }}
      drawerContent={(props) => <CustomSidebarMenu {...props} />}>
      <Drawer.Screen name={Navigate.dashboard} component={DashbaordScreenStack} />
      <Drawer.Screen name={Navigate.about_Us} component={AboutScreenStack} />
      <Drawer.Screen name={Navigate.training} component={TrainingScreenStack} />
      <Drawer.Screen name={Navigate.consulting} component={ConsultinsStack} />
      <Drawer.Screen name={Navigate.downloads} component={DownloadsScreenStack} />
      <Drawer.Screen name={Navigate.videos} component={VideosScreenStack} />
      <Drawer.Screen name={Navigate.conact_US} component={contactUsStack} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;

const styles = StyleSheet.create({
  iconStyle: {
    //flex: 1,
    alignItems: "center",
    width: 50,
    height: 35,
  }
})
