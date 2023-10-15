//import liraries
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Colors from '../Colors/Colors';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { CommonStyles, TextStyles } from '../Styles/ComnStyle';

// create a component
const CustomButton = ({
    containerStyle, titleStyle, title, onPress,onDisablePress,
    bgColor = Colors.themeBlue,
    isdisable = false,
}) => {

    return (
        // <View>
        <TouchableHighlight
            style={{ ...CommonStyles.button,backgroundColor:bgColor,...styles.buttonStyle,...containerStyle}}
            underlayColor={Colors.app_White}
            onPress={!isdisable? onPress:onDisablePress}
            
        >
            
            {/* <View
                style={{...styles.linearGradiant,backgroundColor:bgColor}}
            > */}
                <Text style={{ ...TextStyles.btnTitle, ...titleStyle }} >
                    {title}
                </Text>
            {/* </View> */}

        </TouchableHighlight>
        // </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    linearGradiant: {
        height: '100%', width: '70%', justifyContent: 'center', alignItems: 'center'
    },
    buttonStyle: {
        paddingHorizontal:20, justifyContent:'center', alignItems: 'center',borderRadius:8
    },
});

//make this component available to the app
export default CustomButton;
