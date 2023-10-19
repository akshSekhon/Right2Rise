import { Alert, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AppFonts from '../Constants/AppFonts'
import * as Components from '../Components/Index'
import { moderateScale } from '../Styles/responsiveSize';
import En from '../Constants/En';
import { FlatList } from 'react-native-gesture-handler';
import axios from 'axios';

const Videos = ({ navigation }) => {
  const [activeSections, setActiveSections] = useState([])
  const [apiData, setApiData] = useState()
  const [loading, setLoading] = useState(false)


  useEffect(() => { fetchVideos() },[])

  const fetchVideos = () => {
    setLoading(true)
    axios.get('http://right2rise.com/video', {

    })
      .then((response) => {
        const arr = response?.data?.result
        setApiData(arr)
        console.log('fetchVideos respons:-----', response);
        setLoading(false)
        // Alert.alert(response?.data.message)
      }
      )
      .catch((error) => {
        console.log('fetchVideos error:-----', JSON.stringify(error));
        setLoading(false)
        Alert.alert(JSON.stringify(error))
      });
  }

  const VideoItem = (data) => {
    return (
      <View style={styles.content}>
        <Components.VideoItem
          data={data}
          navigation={navigation}
        />
      </View>
    );
  };

  return (
    <Components.AppWrapper loading={loading}>
      <View style={styles.container}>
        <Components.Header
          centerheaderTitle={En.Videos}
          navigation={navigation}
        />
        <View style={styles.accordation}>
          <FlatList
            // columnWrapperStyle={{ justifyContent: 'space-between', }}
            data={apiData}
            keyExtractor={item => item.id}
            horizontal={false}
            // numColumns={2}
            renderItem={VideoItem}
          />
        </View>
      </View>
    </Components.AppWrapper>



  )
}

export default Videos

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