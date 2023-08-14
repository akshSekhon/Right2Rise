import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerItems from './DrawerItems';
import { ImagePath, Navigate } from '../Constants';
import { Dashboard, Downloads } from '../Screens';
// const Drawer = createDrawerNavigator();

const DrowerNavigator = () => {
  return (
    <View>
{/* <Drawer.Navigator
       drawerType="front"
       initialRouteName={Navigate.downloads}
       drawerContentOptions={{
         activeTintColor: '#e91e63',
         itemStyle: { marginVertical: 10 },
       }}
> */}


{/* <Drawer.Navigator initialRouteName={Navigate.downloads}>
        <Drawer.Screen name={Navigate.downloads} component={Downloads} />
        <Drawer.Screen name={Navigate.dashboard} component={Dashboard} />
      </Drawer.Navigator> */}
{/* {
         DrawerItems.map(drawer=><Drawer.Screen
           key={drawer.name}
           name={drawer.name}
           options={{ drawerIcon:({focused})=>drawer.icon}}
           component={
            drawer.name===Navigate.dashboard ? Dashboard: Downloads
          }
         />)
       } */}
{/* </Drawer.Navigator> */}
    </View>
  )
}

export default DrowerNavigator

const styles = StyleSheet.create({})