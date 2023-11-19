import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AppFonts from '../ConstantFiles/AppFonts'
import * as Components from '../Components/Index'
import Accordion from 'react-native-collapsible/Accordion';
import { moderateScale } from '../Styles/responsiveSize';
import Colors from '../Colors/Colors';
import En from '../ConstantFiles/En';
import { CommonStyles } from '../Styles/ComnStyle';

const Trending_cases = ({navigation}) => {
const [activeSections,setActiveSections] = useState([])
  const SECTIONS = [
    {
      title: 'First',
      content: `Lorem content from second ipsum...`,
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
const  _renderHeader = (section,index) => {
  return (
    <View style={styles.header}>
      <Components.CollapseHeader
      style={{backgroundColor:index %2 == 0 ?Colors.themePink:Colors.themeBlue}}
      data = {section}
      index={index}
      />
    </View>
  );
};

const _renderContent = (section,index,isActive) => {
  return (
    <View style={{marginBottom:20}}>
    <Components.CollapseContainer
      isActive = {isActive}
      discription={section.content}
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
      centerheaderTitle={En.Trending_Cases}
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

export default Trending_cases

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