import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AppFonts from '../Constants/AppFonts'
import * as Components from '../Components/Index'
import Accordion from 'react-native-collapsible/Accordion';
import { moderateScale } from '../Styles/responsiveSize';
import Colors from '../Colors/Colors';

const Downloads = ({navigation}) => {
const [activeSections,setActiveSections] = useState([])
  const SECTIONS = [
    {
      title: 'First',
      content: 'Lorem content from first ipsum...',
    },
    {
      title: 'Second',
      content: 'Lorem content from second ipsum...',
    },
  ];
  const _renderSectionTitle = (section) => {
    return (
      <View style={styles.content}>
        {/* <Text>{section.content}</Text> */}
      </View>
    );
  };
const  _renderHeader = (section) => {
  return (
    <View style={styles.header}>
      <Components.CollapseHeader
      data = {section}
      />
    </View>
  );
};

const _renderContent = (section) => {
  return (
    <View style={{marginBottom:20}}>
    <Components.CollapseContainer
      data = {section}
      />  
        </View>
  );
};
const _updateSections = (activeSections) => {
  setActiveSections(activeSections)
 console.log('Active sessions are: =----', activeSections)
};
  return (
    <Components.AppWrapper>
   <View style={styles.container}>
      <Components.Header
      navigation={navigation}
      />
      {/* <Text style ={styles.font}>Downloads</Text> */}
      <View style ={styles.accordation}>
      <Accordion
      
    activeSections={activeSections}
    sections={SECTIONS}
    renderSectionTitle={_renderSectionTitle}
    renderHeader={_renderHeader}
    renderContent={_renderContent}
    onChange={_updateSections}
    underlayColor = {Colors.transparent}
    sectionContainerStyle={{
      // backgroundColor:'yellow',
      // paddingBottom:10,
      // paddingVertical:10,
      // paddingHorizontal:20,
      overflow:'hidden',
      // borderTopLeftRadius:25,
      // borderBottomRightRadius:25,
    }}
  />
</View>
 {/* <Components.CustomButton
 onPress = {()=>Alert.alert("Test Button")}
 bgColor={Colors.themePink}
  title = {"test"}
  /> */}
    </View>
    </Components.AppWrapper>
 

   
  )
}

export default Downloads

const styles = StyleSheet.create({

    container:{
        flex:1,
        // backgroundColor:'red'
    },
    font:{
      fontFamily:AppFonts.bold,

    },
    accordation:{
      marginTop:20,
        // backgroundColor:'red',
        paddingHorizontal:moderateScale(20)
    }
})