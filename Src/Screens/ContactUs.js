import { Alert, Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import React, { useState } from 'react';
import AppFonts from '../ConstantFiles/AppFonts';
import * as Components from '../Components/Index';
import { moderateScale, moderateScaleVertical, scale } from '../Styles/responsiveSize';
import Colors from '../Colors/Colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import En from '../ConstantFiles/En';
import { CommonStyles, TextStyles } from '../Styles/ComnStyle';
import { flingHandlerName } from 'react-native-gesture-handler/lib/typescript/handlers/FlingGestureHandler';
import { TextInput } from 'react-native-gesture-handler';
import { ImageEnum, ImagePath } from '../ConstantFiles';
import axios from 'axios';
import { isValidEmail, isValidText } from '../Utilities/helper';

const ContactUs = ({ navigation }) => {
  const [activeSections, setActiveSections] = useState([])
  const [loading, setLoading] = useState(false)
const [contactDetails,setContactDetails] = useState({name:'',email:'',phone:'',company:'',requirement:''})


  const SocialMediaButton = ({ item = ImagePath.ellipse }) => {
    console.log('Items are : ---', item)
    return (
      <>
        <TouchableHighlight
          style={{ borderRadius: 100 }}
        >
          <Image
            style={{ height: scale(45), width: scale(45) }}
            source={item}
            resizeMode={ImageEnum.contain} />

        </TouchableHighlight>
      </>
    )
  }

const onSubmin = ()=>{
if (!isValidText('name',contactDetails.name)){
  console.log('name :--- ',contactDetails.name);
  return
}

else if (!isValidEmail(contactDetails.email)){
  return
}
else if (!isValidText('phone number',contactDetails.phone)){
  return
}
else if (!isValidText('company',contactDetails.company)){
  return
}
else if (!isValidText('requirements',contactDetails.requirement)){
  return
}
else{
  let payload = {...contactDetails,phone:Number(contactDetails.phone)}
  console.log('requestToContactUs payload :---- ',payload);
  requestToContactUs(payload)
}
}


  const requestToContactUs = (params) => {
    setLoading(true)
    axios.post('https://right2rise.com/contact', {
      params
    })
      .then((response) => {
        // const arr = response?.data?.result
        // setApiData(arr)
        console.log('fetch requestToContactUs respons :-----', response);
        setContactDetails({name:'',email:'',phone:'',company:'',requirement:''})
        setLoading(false)
        navigation.goBack()
        // Alert.alert(response?.data.message)
      }
      )
      .catch((error) => {
        console.log('fetch requestToContactUs error:-----', JSON.stringify(error));
        setLoading(false)
        Alert.alert(JSON.stringify(error))
      });
  }


  return (
    <Components.AppWrapper loading={loading}>
      <View style={styles.container}>
        <Components.Header
          navigation={navigation}
          centerheaderTitle={En.Conact_US}
        />

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
                value={contactDetails?.name ?? ''}
                onChangeText={(val)=> setContactDetails({...contactDetails,name:val})}
              />
            </View>

            {/* Email container */}
            <View
              style={styles.fieldContainer}

            >
              <Text style={{ ...TextStyles.regularMedium, ...styles.fieldName }}>
                {En.Email}
              </Text>
              <Components.CustomTextInput
                containerStyle={{ flex: 1 }}
                value={contactDetails?.email ?? ''}
                onChangeText={(val)=> setContactDetails({...contactDetails,email:val})}
              />
            </View>


            {/* Contact_no container */}
            <View
              style={styles.fieldContainer}

            >
              <Text style={{ ...TextStyles.regularMedium, ...styles.fieldName }}>
                {En.Contact_no}
              </Text>
              <Components.CustomTextInput
                containerStyle={{ flex: 1 }}
                value={contactDetails?.phone ?? ''}
                keyboardType={'phone-pad'}
                onChangeText={(val)=> setContactDetails({...contactDetails,phone:val})}
              />
            </View>

            {/* Company container */}
            <View
              style={styles.fieldContainer}
            >
              <Text style={{ ...TextStyles.regularMedium, ...styles.fieldName }}>
                {En.Company}
              </Text>
              <Components.CustomTextInput
                containerStyle={{ flex: 1 }}
                value={contactDetails?.company ?? ''}
                onChangeText={(val)=>setContactDetails({...contactDetails,company:val})}
              />
            </View>

            {/* Requirements container */}
            <View
              style={{ ...styles.fieldContainer, alignItems: 'flex-start' }}

            >
              <Text style={{ ...TextStyles.regularMedium, ...styles.fieldName, marginTop: moderateScale(10) }}>
                {En.Requirements}
              </Text>

              <View
                style={styles.discriptionContainer}
              >
                <TextInput
                  style={{ ...CommonStyles.textInput, flex: 1 }}
                  multiline
                  textAlignVertical='top'
                  placeholderTextColor={Colors.placeholder}
                  value={contactDetails?.requirement ?? ''}
                  onChangeText={(val)=> setContactDetails({...contactDetails,requirement:val})}
                />
              </View>

            </View>

            {/* MARK: --- Submit button */}
            <View style={{ justifyContent: 'center', marginTop: moderateScaleVertical(30) }}>
              <Components.CustomButton
                containerStyle={styles.buttonSubmit}
                onPress={onSubmin}
                bgColor={Colors.themeBlue}
                title={En.Submit}
              />
            </View>
          </View>


          {/* MARK: Footer Container */}
          <View style={{ gap: moderateScaleVertical(10), marginBottom: moderateScaleVertical(10), marginTop: moderateScaleVertical(25) }}>
            {/* MARK  : --- Social login Buttons */}
            <View style={styles.socialMediaContainer}>
              <SocialMediaButton item={ImagePath.bitcoin} />
              <SocialMediaButton item={ImagePath.etherium} />
              <SocialMediaButton item={ImagePath.usdt} />
              <SocialMediaButton item={ImagePath.ellipse} />
            </View>


            {/* MARK: --- Bootom link text container*/}
            <View>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 3 }}>
                <Text style={{ ...TextStyles.bold, color: Colors.themePink, fontSize: scale(15) }}>{En.Visit_Our_Website}</Text>
                <Text style={{ fontFamily: AppFonts.boldItaliuc, color: Colors.themeBlue, fontSize: scale(15) }}>{En.Link_RightToRIse}</Text>
                <Image
                  style={{ height: scale(20), width: scale(20) }}
                  source={ImagePath.lock}
                  resizeMode={ImageEnum.contain}
                />
              </View>
            </View>
          </View>
          {/* MARK: ----- End footer */}
        </KeyboardAwareScrollView>



      </View>
    </Components.AppWrapper>



  )
}

export default ContactUs

const styles = StyleSheet.create({

  container: {
    flex: 1,
    // backgroundColor:'red'
  },
  fieldContainer: {
    flexDirection: 'row', flex: 1, gap: moderateScale(0), alignItems: 'center'
  }
  , fieldName: {
    color: Colors.themeBlue,
    width: moderateScale(110),
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