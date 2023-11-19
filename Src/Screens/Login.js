import { Alert, Button, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import AppFonts from '../ConstantFiles/AppFonts';
import * as Components from '../Components/Index';
import { moderateScale, moderateScaleVertical, scale, textScale } from '../Styles/responsiveSize';
import Colors from '../Colors/Colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import En from '../ConstantFiles/En';
import { CommonStyles, TextStyles } from '../Styles/ComnStyle';
import { flingHandlerName } from 'react-native-gesture-handler/lib/typescript/handlers/FlingGestureHandler';
import { TextInput } from 'react-native-gesture-handler';
import { ImageEnum, ImagePath, Navigate } from '../ConstantFiles';
import auth from '@react-native-firebase/auth';
import messaging from '@react-native-firebase/messaging';
import actions from '../redux/actions';
import CountryPicker from "react-native-country-picker-modal";
import DeviceCountry,{TYPE_TELEPHONY,TYPE_CONFIGURATION,TYPE_ANY,} from 'react-native-device-country';
import { getCountryWithCountryCode } from '../Utilities/helper';
const LoginScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(false);

  const [showOtpInput, setShowOtpInput] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [confirmation, setConfirmation] = useState(null); // Initialize confirmation state
  const [otp, setOtp] = useState('');
  // const [countryCode, setCountryCode] = useState('IN');
  const [dialCode, setDialCode] = useState('');
  const [selectedCountry, setSelectedCountry] = useState({});

  const [isVisible, setIsVisible] = useState(false)

  // console.log(navigation)

  // const redirectMain = () => {
  //   navigation.navigate(Navigate.dashboard)
  // }


  useEffect(() => {
    // getLocale()
    getCurrentCountry()
    getFcmToken()
  }, []);

  // function getLocale (){
  // DeviceCountry.getCountryCode(TYPE_TELEPHONY)
  // .then((result) => {
  //   console.log(result);
  //   console.log('getCountryCode getCountryCode result:---',result);
  //   // {"code": "PT", "type": "telephony"}
  // })
  // .catch((e) => {
  //   console.log(e);
  //   console.log('getCountryCode (getCountryCode error:---',e);

  // });
  // }
  const getCurrentCountry = async () => {
     await getCountryWithCountryCode(undefined,function(contry){
      // console.log('getCountryWithCountryCode :---',contry)
      setSelectedCountry(contry)
      const callingCode = contry?.callingCode[0] ? `+${contry?.callingCode[0]}`:''
      setDialCode(callingCode)
    })
    
  }

  const onSelectCountry = async (cntry) => {
    setIsVisible(false)
    console.log('selected country :---', cntry);
    const callingCode = cntry?.callingCode[0] ? `+${cntry?.callingCode[0]}`:''
    setDialCode(callingCode)
    setSelectedCountry(cntry)
  }

  const handleSendOTP = async () => {

    if (dialCode.trim() === '') {
      Alert.alert('Alert', 'Please select country Code');
      return;
    }
    else if (phoneNumber.trim() === '') {
      Alert.alert('Alert', 'Please enter a phone number.');
      return;
    }
    setLoading(true)
const finalNumber = dialCode.concat(phoneNumber)
console.log('finalNumberfinalNumber',finalNumber);
    try {
      const confirmationResult = await auth().signInWithPhoneNumber(
        finalNumber,
      );
      console.log('signInWithPhoneNumber confirmationResult : ---', confirmationResult);
      setConfirmation(confirmationResult); // Set confirmation result in state
      setLoading(false)

      // After sending OTP, set showOtpInput to true to display the OTP input field.
      setShowOtpInput(true);
    } catch (error) {
      setLoading(false)

      Alert.alert('Error', 'Failed to send OTP. Please try again.');
      console.error(error);
    }
  };

  const handleLogin = async () => {
    if (otp.trim() === '') {
      Alert.alert('Error', 'Please enter email.');
      return;
    }
    else if (confirmation) {
      setLoading(true);
      try {
        // Confirm the OTP using the confirmation state
        const verify = await confirmation.confirm(otp).then(async (res) => {
          console.log('confirmation verify res : ---', res);
          const loinStatus = { loinStatus: true, detail: res }
          await actions.setUserDataToLocal(loinStatus)
          setLoading(false)
        }).catch((err) => {
          setLoading(false)
          console.log('confirmation verify err : ---', err);
          Alert.alert(JSON.stringify(err?.error));
        })
        // {"additionalUserInfo": {"isNewUser": false}, "user": {"displayName": null, "email": null, "emailVerified": false, "isAnonymous": false, "metadata": [Object], "multiFactor": [Object], "phoneNumber": "+918968776687", "photoURL": null, "providerData": [Array], "providerId": "firebase", "tenantId": null, "uid": "t3IRd0AEN6VaYUpeV78CZoyUgEG3"}}

        // The user is now signed in, and you can navigate to the desired screen.

      } catch (error) {
        setLoading(false)

        Alert.alert('Error', 'Failed to verify OTP. Please try again.');
        console.error(error);
      }
    } else {
      setLoading(false)

      Alert.alert('Error', 'Please send OTP first.');
    }
    // }
  };

  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber) {
    console.log('signInWithPhoneNumber phoneNumber :---', phoneNumber);
  }
  const getFcmToken = async () => {
    try {
      const token = await messaging().getToken();
      // await setItem('FCM_TOKEN', token).then(cb => {
      //   console.log('FCM ', cb);
      //   // saveFcmTokenToRedux(token);
      // });
      console.log('FCM token:: ------ ', token);
    } catch (error) {
      console.log(error, 'fcm error in creating token');
    }
  };


  async function confirmCode() {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
    }
  }

const renderIcon =()=>(
  <View style={{flex:1}}>
<View style={{flexDirection:'row',height:'100%',alignItems:'center',paddingLeft:2,gap:4,}}>
<Image style={{height:scale(35),width:scale(35),borderRadius:17.5}} resizeMode ={'contain'}source={{uri:selectedCountry?.flag ? selectedCountry?.flag :Image.resolveAssetSource(ImagePath.about_menu).uri}}/>
<Text style={{ color: Colors.text_lightBlack,fontSize: textScale(16),fontFamily: AppFonts.regular,lineHeight:20}}>+{selectedCountry && selectedCountry?.callingCode?.length ?selectedCountry?.callingCode[0]:'91'}</Text>
</View>
</View>
)
  return (
    <Components.AppWrapper loading={loading}>
        <KeyboardAwareScrollView 
        showsVerticalScrollIndicator ={false}
        showsHorizontalScrollIndicator={false}
        style={{ paddingTop: moderateScaleVertical(0) }}>

      <View style={styles.container}>
        <View style={{ paddingVertical: moderateScaleVertical(15), alignItems: 'center', paddingHorizontal: moderateScale(10) }}>
          <Image source={ImagePath.logo}
            resizeMode={ImageEnum.contain}
            style={{ width: '100%', height: scale(200), }} />
            <View style={{ alignItems: 'center', paddingVertical: moderateScaleVertical(15) }}>
          <Text style={{ color: Colors.themeBlue, fontFamily: AppFonts.italic }}>Enter your details to Logins</Text>
        </View>

        </View>

        {/* { (!confirm) &&
      <Button
        title="Phone Number Sign In"
        onPress={() => signInWithPhoneNumber('+1 650-555-3434')}
      />
  } */}
        
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
                value={name}
                onChangeText={(val) => setName(val)}
              />
            </View>



            {/* Contact_no container */}
            <View
              style={styles.fieldContainer}

            >
              <Text style={{ ...TextStyles.regularMedium, ...styles.fieldName, flex: 0 }}>
                {En.Phone}
              </Text>
              <Components.CustomTextInput
                containerStyle={{ flex: 1 }}
                textStyle={{paddingLeft:4,lineHeight:20}}
                maxLength={15}
                onPressLeftImage={()=>setIsVisible(true)}
                isshowLeftImg
                // leftImage={selectedCountry?.flag ? selectedCountry?.flag :Image.resolveAssetSource(ImagePath.about_menu).uri}
                renderLeftImage={renderIcon}
                value={phoneNumber}
                keyboardType={'phone-pad'}
                onChangeText={(val) => setPhoneNumber(val)}
              />
            </View>



            {/* MARK: --- Submit button */}
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: moderateScaleVertical(20) }}>
              <Components.CustomButton
                containerStyle={{ ...styles.buttonSubmit, marginHorizontal: moderateScale(30) }}
                titleStyle={{ fontSize: textScale(15) }}

                onPress={() => handleSendOTP()}
                bgColor={Colors.themePink}
                title={En.otp}
              />
            </View>

            {/* Name container */}
            {showOtpInput && <>
              <View
                style={styles.fieldContainer}
              >
                <Text style={{ ...TextStyles.regularMedium, ...styles.fieldName }}>
                  {En.enterOtp}
                </Text>
                <Components.CustomTextInput
                  containerStyle={{ flex: 1 }}
                  keyboardType={'number-pad'}
                  value={otp}
                  onChangeText={(val) => setOtp(val)}
                />

              </View>
              <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: moderateScaleVertical(30) }}>
                <Components.CustomButton
                  containerStyle={styles.buttonSubmit}
                  onPress={handleLogin}
                  bgColor={Colors.themeBlue}
                  titleStyle={{ fontSize: textScale(16) }}
                  title={En.Submit}
                />
              </View>
            </>
            }

          </View>
      </View>
      </KeyboardAwareScrollView>

      <CountryPicker
        visible={isVisible}
        withFlag={true}
        withFlagButton={false}
        onSelect={(country) =>
          onSelectCountry(country)
        }
        withModal={true}
        onClose={() => setIsVisible(false)}
        withEmoji={false}
        countryCode={dialCode}
        withCountryNameButton={false}
        preferredCountries={['IN']}
        withFilter
      />
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
    textAlign: 'center',
    fontFamily: AppFonts.italic
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