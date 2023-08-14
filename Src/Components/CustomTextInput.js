//import liraries
import React, { Component, isValidElement, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableHighlight, TouchableOpacity } from 'react-native';
import ImagePath from '../Constants/ImagePath';
import Colors from '../Colors/Colors';
import { CommonStyles } from '../Styles/ComnStyle';
// create a component
const CustomTextInput = ({
  textStyle,
  containerStyle,
  innerContainerStyle,
  placeholder,
  value,
  maxLength,
  onChangeText = () => { },
  secureTextEntry, leftImage, keyboardType,
  returnKeyType='done',
  imageEyeOpen = ImagePath.eyeOpen,
  imageEyeClose = ImagePath.eyeClose,
  isshowLeftImg = false,
  isTogleSecure = false,
  editable = true,
  isShowRightImage = false,
  rightImage,
  rightImageAction,

  ...props
}) => {

  const [secured, setSecured] = useState(true)
  return (
    <View style={{ ...styles.container, ...containerStyle }}>
      <View>
        <View style={{ ...CommonStyles.textfieldContainer, ...innerContainerStyle }}>
          {isshowLeftImg &&
            <Image style={CommonStyles.textInputImg} source={leftImage}/>
          }

          <TextInput
            // {...props}
            style={{...CommonStyles.textInput,...textStyle}} maxLength={maxLength}
            placeholder={placeholder} value={value}
            placeholderTextColor={Colors.placeholder}
            keyboardType={keyboardType}
            returnKeyType={returnKeyType}
            secureTextEntry={secureTextEntry === true && secured}
            onChangeText={onChangeText}
            editable={editable}
            
          // selectTextOnFocus={true}
          />
          {secureTextEntry === true &&
            <TouchableOpacity
              onPress={() => setSecured(!secured)}
              
            >
              {isTogleSecure &&
               <Image
               style={{ ...CommonStyles.textInputImg}}
               source={!secured ? imageEyeOpen : imageEyeClose} >
             </Image>
              }
            </TouchableOpacity>
            }

            {isShowRightImage &&
          <TouchableOpacity
          onPress={() => rightImageAction}
          >
               <Image
               style={{ ...CommonStyles.textInputImg}}
               source={rightImage}
               
               >
             </Image>
             </TouchableOpacity>
              }

        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    // marginHorizontal: 15,
  },
});

//make this component available to the app
export default CustomTextInput;
