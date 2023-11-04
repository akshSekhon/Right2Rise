import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AppFonts from '../ConstantFiles/AppFonts'
import * as Components from '../Components/Index'
import Accordion from 'react-native-collapsible/Accordion';
import { moderateScale } from '../Styles/responsiveSize';
import Colors from '../Colors/Colors';
import En from '../ConstantFiles/En';
import { CommonStyles } from '../Styles/ComnStyle';

const Posh = ({navigation}) => {
const [activeSections,setActiveSections] = useState([])
  const SECTIONS = [
    {
      title: 'First',
      content: `POSH Act Prevention of Sexual Harassment POCO Act
      Offences Act POSH Act Prevention of Sexual Harassmen
      from Sexual Offences Act POSH Act Prevention of Sexua
      of Children from Sexual Offences Act POSH Act Prevent
      he Protection of Children from Sexual Offences Act POS
      POCSO Act The Protection of Children from Sexual Offe
      Harassment POCO Act The Protection of Children from...`,
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

const _renderContent = (section,index,isActive) => {
  return (
    <View style={{marginBottom:20}}>
    <Components.CollapseContainer
      isActive = {isActive}
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
      centerheaderTitle={En.POSH}
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

export default Posh

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