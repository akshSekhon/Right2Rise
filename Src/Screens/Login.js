import { Alert, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import React, { useState } from 'react';
import AppFonts from '../Constants/AppFonts';
import * as Components from '../Components/Index';
import { moderateScale, moderateScaleVertical, scale } from '../Styles/responsiveSize';
import Colors from '../Colors/Colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import En from '../Constants/En';
import { CommonStyles, TextStyles } from '../Styles/ComnStyle';
import { flingHandlerName } from 'react-native-gesture-handler/lib/typescript/handlers/FlingGestureHandler';
import { TextInput } from 'react-native-gesture-handler';
import { ImageEnum, ImagePath, Navigate } from '../Constants';

const LoginScreen = ({ navigation }) => {
  const [activeSections, setActiveSections] = useState([])
  console.log(navigation)

  const redirectMain = () => {
    navigation.navigate(Navigate.dashboard)
  }

  return (
    <Components.AppWrapper>
      <View style={styles.container}>
      <View style={{ paddingVertical: moderateScaleVertical(15), alignItems: 'center', paddingHorizontal: moderateScale(10) }}>
                    <Image source={ImagePath.logo}
                        resizeMode={ImageEnum.contain}
                        style={{ width: '100%', height: scale(200), }} />
                </View>
                <View style={{alignItems:'center',paddingVertical:moderateScaleVertical(15)}}>
                    <Text style={{color:Colors.themeBlue}}>Enter your details to Logins</Text>
                </View>

        <KeyboardAwareScrollView style={{ paddingTop: moderateScaleVertical(30) }}>
          <View style={{ gap: moderateScaleVertical(20), marginHorizontal: moderateScale(15) }}>
            {/* Name container */}
            <View
              style={styles.fieldContainer}

            >
              <Text style={{ ...TextStyles.regularMedium, ...styles.fieldName }}>
                {En.Name}
              </Text>
              <Components.CustomTextInput
                containerStyle={{ flex: 1 }}
              />
            </View>



            {/* Contact_no container */}
            <View
              style={styles.fieldContainer}

            >
              <Text style={{ ...TextStyles.regularMedium, ...styles.fieldName ,flex:0}}>
                {En.Phone}
              </Text>
              <Components.CustomTextInput
                containerStyle={{ flex: 1 }}
              />
            </View>



            {/* MARK: --- Submit button */}
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: moderateScaleVertical(20) }}>
              <Components.CustomButton
                containerStyle={{...styles.buttonSubmit,marginHorizontal:moderateScale(30)}}
                onPress={redirectMain}
                bgColor={Colors.themePink}
                title={En.otp}
              />
            </View>

                        {/* Name container */}
                        <View
              style={styles.fieldContainer}

            >
              <Text style={{ ...TextStyles.regularMedium, ...styles.fieldName }}>
                {En.enterOtp}
              </Text>
              <Components.CustomTextInput
                containerStyle={{ flex: 1 }}
              />

              
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: moderateScaleVertical(30) }}>
              <Components.CustomButton
                containerStyle={styles.buttonSubmit}
                onPress={() => Alert.alert("Test Button")}
                bgColor={Colors.themeBlue}
                title={En.Submit}
              />
            </View>


          </View>


        </KeyboardAwareScrollView>



      </View>
    </Components.AppWrapper>



  )
}

export default LoginScreen

const styles = StyleSheet.create({

  container: {
    flex: 1,
    // backgroundColor:'red'
  },
  fieldContainer: {
    flexDirection: 'row', flex: 1, gap: moderateScale(10), alignItems: 'center'
  }
  , fieldName: {
    color: Colors.themeBlue,
   // width: moderateScale(110),
    textAlign: 'center'
  }, discriptionContainer: {
    flex: 1,
    backgroundColor: Colors.app_Bg, borderRadius: 10,
    borderColor: Colors.themePink, borderWidth: 1.2,
    height: moderateScale(150), paddingHorizontal: moderateScale(10), paddingVertical: moderateScaleVertical(5)
  },
  buttonSubmit: {
    // marginTop:moderateScaleVertical(50),
    // marginHorizontal:moderateScale(25),
    alignSelf: 'center',
    width: '48%',
    height: moderateScaleVertical(45)
  }, socialMediaContainer: {
    justifyContent: 'space-around', flexDirection: 'row'
    , paddingHorizontal: moderateScale(20)
  }

})