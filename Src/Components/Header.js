
//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Alert } from 'react-native';
import { height, moderateScale, moderateScaleVertical } from '../Styles/responsiveSize';
import Colors from '../Colors/Colors';
import { TouchableHighlight } from 'react-native-gesture-handler';
import { ImagePath, Titles } from '../Constants';
import { TextStyles } from '../Styles/ComnStyle';
import En from '../Constants/En';

// create a component
const BackBtnHeader = ({navigation,centerheaderTitle = 'Dashboard'}) => {
  function onPressBack() {
    // Alert.alert("press options")
    navigation.goBack()
  }
  return (
    <View style={{ ...styles.container, }}>
      <View style={{ ...styles.innerContainer, }}>
        <View style={{ flexDirection: "row", alignItems: 'center', paddingHorizontal: moderateScale(0) }}>
          {/* MARK : -- Option Button */}
          <View style={styles.options}>
            <TouchableHighlight

              underlayColor={Colors.selectedBg}
              onPress={onPressBack}
            >
              <Image source={ImagePath.filterBtack} style={styles.arrowBack} />
            </TouchableHighlight>
          </View>

          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', 
          paddingRight: moderateScale(20), gap: moderateScale(3),paddingVertical:moderateScaleVertical(12)}}>

            {/* MARK : --- App name Right2Rise */}
            <View style={{ flexDirection: 'row' }}>
              <Text style={{ ...TextStyles.bold, color: Colors.themePink }}>
                Rigth
                {En.Right}
              </Text>
              <Text style={{ ...TextStyles.bold, color: Colors.themeBlue }}>
                {En.toRise}
              </Text>
            </View>

            {/* MARK: ---- Bottom Screen Title */}

            <View style={{}}>
              <Text style={{ ...TextStyles.bold, color: Colors.text_Black }}>
                {centerheaderTitle}
              </Text>
              <View style={{ height: 1.5, borderRadius: 1, backgroundColor: Colors.themePink }} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {

  },
  innerContainer: {
    paddingTop:moderateScale(3),
    overflow: 'hidden',
    backgroundColor:Colors.app_Bg,
    shadowColor: Colors.app_Black,
    shadowRadius: 3,
    shadowOpacity: 0.4,
    borderRadius: 4,
    shadowOffset: { height: 0, width: 0 },
    elevation: 5,
  }

  , options: {
    marginLeft: moderateScale(10),
    alignItems: 'center',
    // marginTop: moderateScale(5),
    // marginBottom: moderateScale(5),
    padding:4
  }

  ,
  userName: {
    color: Colors.darkGrayTxt,
    marginRight: moderateScale(5)
  }, arrowBack: {
    height: moderateScale(25),
    width: moderateScale(25),
    resizeMode: 'contain',
    marginRight: moderateScale(5),
  },
  headerTitle: {
    alignSelf: 'center',
    color: Colors.text_Black,
    justifyContent: 'center',
    // paddingEnd: moderateScale(50)

  }
});

//make this component available to the app
export default BackBtnHeader;
