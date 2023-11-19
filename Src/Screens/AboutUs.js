import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AppFonts from '../ConstantFiles/AppFonts'
import * as Components from '../Components/Index'
import Accordion from 'react-native-collapsible/Accordion';
import { moderateScale } from '../Styles/responsiveSize';
import Colors from '../Colors/Colors';
import En from '../ConstantFiles/En';
import { CommonStyles } from '../Styles/ComnStyle';


const AboutUs = ({navigation}) => {
const [activeSections,setActiveSections] = useState([])
  const SECTIONS = [
    
    {
      title: 'Our Company',
      discription: 'Lorem content from first ipsum...',
    },
    {
      title: 'Our USP',
      discription: 'Lorem content from first ipsum...',
    },
    {
      title: 'Our Team',
      discription: 'Lorem content from second ipsum...',
    },
    {
      title: 'Core Belief',
      discription: 'Lorem content from second ipsum...',
    },{
      title: 'Vision',
      discription: 'Lorem content from second ipsum...',
    },{
      title: 'Mission',
      discription: 'Lorem content from second ipsum...',
    },{
      title: 'Business Model',
      discription: 'Lorem content from second ipsum...',
    },{
      title: 'Founder’s Profile',
      discription: 'Lorem content from second ipsum...',
    },{
      title: 'Accreditation',
      discription: 'Lorem content from second ipsum...',
    },{
      title: 'Company Brochure (PDF)',
      discription: 'Lorem content from second ipsum...',
    },
  ];

  const _renderSectionTitle = (section) => {
    return (
      <View style={styles.content}>
        {/* <Text>{section.content}</Text> */}
      </View>
    );
  };
      const  _renderHeader = (section,index,isActive,) => {
  return (
    <View style={{}}>
      <Components.CollapseHeader
      style={{backgroundColor:index%2 == 0 ?Colors.themePink:Colors.themeBlue
      }}
      isActive = {isActive}
      index={index}
      data = {section}
      />
    </View>
  );
};

// const _renderContent = (section) => {
//   return (
//     <View style={{marginBottom:20}}>
//     <Components.CollapseContainer
//     discription={section.discription}
//       data = {section}
//       />  
//         </View>
//   );
// };
const _renderContent = (section,index,isActive) => {
  return (
    <View style={{marginBottom:20}}>
    <Components.CollapseContainer
      isActive = {isActive}
      discription={section?.discription}
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