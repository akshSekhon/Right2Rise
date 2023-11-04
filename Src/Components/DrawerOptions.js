//import liraries
import React, { Component, isValidElement, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableHighlight, TouchableOpacity, Pressable, Alert } from 'react-native';
import ImagePath from '../ConstantFiles/ImagePath';
import Colors from '../Colors/Colors';
import { CommonStyles,TextStyles } from '../Styles/ComnStyle';
import { Navigate } from '../ConstantFiles';
import { FlatList } from 'react-native-gesture-handler';
import { moderateScale, moderateScaleVertical, textScale } from '../Styles/responsiveSize';
import actions from '../redux/actions';

// create a component
const DrawerOptions = ({ menuLabel, imageName, focus, containerStyle, props }) => {
    const { state, navigation, descriptors } = props
    const [selected, setSelected] = useState(Navigate.dashboard);
    const { routes, index } = state;
    const TabInx = index;
    const renderColor = (currentTab) =>
        currentTab === selected ? Colors.themeBlue : Colors.app_White;
    const handlePress = (activeTab, index) => {
        if (state.index !== index) setSelected(activeTab);
        navigation.navigate(activeTab);
    };

const imagsObj = {
    'Downloads':{inactiveIcon:ImagePath.download_menu},
    'Dashboard':{inactiveIcon:ImagePath.dashboardIcon},
    'About Us':{inactiveIcon:ImagePath.about_menu},
    'Training':{inactiveIcon:ImagePath.training_menu},
    'Consulting':{inactiveIcon:ImagePath.consulting_menu},
    'Videos':{inactiveIcon:ImagePath.videos_menu},
    'Contact Us':{inactiveIcon:ImagePath.contact_menu},
}

    const ItemView = ({item,index}) => {
const imgIcon = Object.hasOwn(imagsObj,item?.name) ? imagsObj[item.name].inactiveIcon:ImagePath.demoPerson

        return (
            <Pressable onPress={()=>handlePress(item?.name, index)} style={{paddingStart:moderateScale(15),backgroundColor:item.name == selected ? Colors.themeBlue:'white',...styles.container }} >
                <View style={{ flexDirection: "row", flex: 1,alignItems:'center',gap:10 }}>
                    <Image
                        style={{ ...CommonStyles.textInputImg }}
                        source={imgIcon}

                    />
                    {/* </Image> */}
                    <Text style={{...TextStyles.medium,fontSize:textScale(16),color:item.name == selected ? Colors.text_White:Colors.themeBlue}}>{item?.name}</Text>
                </View>
            </Pressable>
        )
    }

    return (
        <View style={{ ...styles.container }} >


            <FlatList
                // columnWrapperStyle={{ justifyContent: 'space-between', }}
                data={routes}
                keyExtractor={item => item?.id}
                // horizontal={false}
                // numColumns={2}
                ItemSeparatorComponent={<View style={{height:10}}/>}
                renderItem={ItemView}
            />
                   <Pressable onPress={()=> actions.clearLoginData()} style={{paddingStart:moderateScale(15),backgroundColor: Colors.app_White,...styles.container }} >
                <View style={{ flexDirection: "row", flex: 1,alignItems:'center',gap:10 }}>
                    <Image
                        style={{ ...CommonStyles.textInputImg }}
                        source={ImagePath.bitcoin}

                    />
                    {/* </Image> */}
                    <Text style={{...TextStyles.medium,fontSize:textScale(16),color:Colors.themeBlue}}>{'Log out'}</Text>
                </View>
            </Pressable>

        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        // marginHorizontal: 15,
        // backgroundColor: "green",
        paddingVertical:moderateScaleVertical(10),
    
    },
});

//make this component available to the app
export default DrawerOptions;
