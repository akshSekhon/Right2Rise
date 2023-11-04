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

const Training = ({ navigation }) => {
  const [activeSections, setActiveSections] = useState([])
  const [apiData, setApiData] = useState()
  const [loading, setLoading] = useState(false)

  useEffect(() => { fetchDeatails() }, [])

  const fetchDeatails = () => {
    setLoading(true)
    axios.get('http://right2rise.com/training', {

    })
      .then((response) => {
        const arr = response?.data?.result
        setApiData(arr)
        console.log('fetch training respons arr :-----', arr);

        console.log('fetch training respons data:-----', response?.data);
        setLoading(false)
        // Alert.alert(response?.data.message)
      }
      )
      .catch((error) => {
        console.log('fetch training error:-----', JSON.stringify(error));
        setLoading(false)
        Alert.alert(JSON.stringify(error))
      });
  }

  const _renderSectionTitle = (section) => {
    return (
      <View style={styles.content}>
        {/* <Text>{section?.description}</Text> */}
      </View>
    );
  };
  const _renderHeader = (section, index, isActive) => {
    return (
      <View style={styles.header}>
        <Components.CollapseHeader
          isActive={isActive}
          data={section}
        />
      </View>
    );
  };

  const _renderContent = (section) => {
    return (
      <View style={{ marginBottom: 20 }}>
        <Components.CollapseContainer
          data={section}
          discription={section?.description}
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
          centerheaderTitle={En.Training}
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

export default Training

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