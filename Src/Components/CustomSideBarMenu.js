// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import React from 'react';
import {SafeAreaView,View,StyleSheet, Image,Text,Linking} from 'react-native';

import {DrawerContentScrollView, DrawerItemList, DrawerItem,} from '@react-navigation/drawer';
import { ImagePath } from '../Constants';


const CustomSidebarMenu = (props) => {
  const BASE_PATH =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
  const proileImage = 'react_logo.png';

  return (
    <SafeAreaView style={styles.container}>
      {/*Top Large Image */}
      <Image
        source={ImagePath.logo}
        style={styles.sideMenuProfileIcon}
      />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  container: {
    width:'100%',
    height:'100%'
  },

});

export default CustomSidebarMenu;
