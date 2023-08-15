import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AppFonts from '../Constants/AppFonts'
import * as Components from '../Components/Index'
import Accordion from 'react-native-collapsible/Accordion';
import { moderateScale } from '../Styles/responsiveSize';
import Colors from '../Colors/Colors';
import En from '../Constants/En';
import { CommonStyles } from '../Styles/ComnStyle';

const AboutUs = ({navigation}) => {
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
const  _renderHeader = (section,index,isActive) => {
  return (
    <View style={styles.header}>
      <Components.CollapseHeader
      isActive = {isActive}
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
      centerheaderTitle={En.About_Us}
      navigation={navigation}
      />
      {/* <Text style ={styles.font}>Downloads</Text> */}
      {/* <View style ={styles.accordation}> */}
      <Accordion
                        activeSections={activeSections}
                        sections={SECTIONS}
                        renderSectionTitle={_renderSectionTitle}
                        renderHeader={_renderHeader}
                        renderContent={_renderContent}
                        onChange={_updateSections}
                        underlayColor={Colors.transparent}
                        renderAsFlatList={true}
                        containerStyle={{
                            ...CommonStyles.accordContainer,
                        }}
                        sectionContainerStyle={{
                            ...CommonStyles.accordSectContain
                        }}
                    />
</View>
 {/* <Components.CustomButton
 onPress = {()=>Alert.alert("Test Button")}
 bgColor={Colors.themePink}
  title = {"test"}
  /> */}
    {/* </View> */}
    </Components.AppWrapper>
 

   
  )
}

export default AboutUs

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