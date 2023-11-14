import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppFonts from '../ConstantFiles/AppFonts'
import * as Components from '../Components/Index'
import Accordion from 'react-native-collapsible/Accordion';
import { moderateScale } from '../Styles/responsiveSize';
import Colors from '../Colors/Colors';
import En from '../ConstantFiles/En';
import { CommonStyles } from '../Styles/ComnStyle';
import axios from 'axios';

const Downloads = ({ navigation }) => {
  const [activeSections, setActiveSections] = useState([])
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

  const [apiData, setApiData] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => { fetchDowloadDetails() }, [])

  const fetchDowloadDetails = () => {
    setLoading(true)
    axios.get('http://right2rise.com/download', {

    })
      .then((response) => {
        const arr = response?.data?.result
        setApiData(arr)
        console.log('fetch fetchDowloadDetails respons arr :-----', arr);

        console.log('fetch fetchDowloadDetails respons data:-----', response?.data);
        setLoading(false)
        // Alert.alert(response?.data.message)
      }
      )
      .catch((error) => {
        console.log('fetch fetchDowloadDetails error:-----', JSON.stringify(error));
        setLoading(false)
        Alert.alert(JSON.stringify(error))
      });
  }



  const _renderSectionTitle = (section) => {
    return (
      <View style={styles.content}>
        {/* <Text>{section.content}</Text> */}
      </View>
    );
  };
  const _renderHeader = (section,index) => {
    return (
      <View style={styles.header}>
        <Components.CollapseHeader
      style={{backgroundColor:index%2 == 0 ?Colors.themePink:Colors.themeBlue}}
        
          data={section}

        />
      </View>
    );
  };

  const _renderContent = (section, index, isActive) => {
    return (
      <View style={{ marginBottom: 20 }}>
        <Components.CollapseContainer
          isActive={isActive}
          discription={section?.link}
          data={section}
        />
      </View>
    );
  };
  const _updateSections = (activeSections) => {
    setActiveSections(activeSections)
    console.log('Active sessions are: =----', activeSections)
  };
  return (
    <Components.AppWrapper loading={loading}>
      <View style={styles.container}>
        <Components.Header
          centerheaderTitle={En.Downloads}
          navigation={navigation}
        />
        {/* <Text style ={styles.font}>Downloads</Text> */}
        {/* <View style ={styles.accordation}> */}
        <Accordion
          activeSections={activeSections}
          sections={apiData}
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
        {/* </View> */}
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

  container: {
    flex: 1,
    // backgroundColor:'red'
  },
  font: {
    fontFamily: AppFonts.bold,

  },
  accordation: {
    marginTop: 20,
    // backgroundColor:'red',
    paddingHorizontal: moderateScale(20)
  }
})