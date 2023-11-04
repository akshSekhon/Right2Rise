//import liraries
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, Platform, Image, Alert } from 'react-native';
import VideoPlayer from 'react-native-video-controls';
import Video from 'react-native-video';
import { ImageEnum, ImagePath } from '../ConstantFiles';
import * as Components from '../Components/Index'
import Colors from '../Colors/Colors';
import { moderateScale, scale } from '../Styles/responsiveSize';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NavigationService from '../NavigationStacks/NavigationService';
import { isValidUrl } from '../Utilities/helper';
import { TextStyles } from '../Styles/ComnStyle';

// create a component
const VideoPlayerScreen = ({ navigation, route }) => {
  const lastScreenData = route?.params
  const videoItem = lastScreenData?.item
  console.log('videoItem videoItem:--', videoItem);

  const [videoUrl, setVideoUrl] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const url = JSON.stringify(videoItem?.link)
    if (isValidUrl(url)) {
      setLoading(false)
      setVideoUrl(url)
    } else {
      setLoading(false)
      // Alert.alert('Alert', 'Invalid video link', [
      //   {text: 'OK', onPress: () => NavigationService.goBack()},
      // ]);
    }
  })

  return (
    <Components.AppWrapper loading={loading}
    >

      <View style={styles.container}>

        {Platform.OS == 'ios' && (
          <>
            <TouchableOpacity style={{ paddingHorizontal: 10, paddingEnd: scale(25), flexDirection: 'row', }}
              onPress={() => NavigationService.goBack()}
            >
              <Image source={ImagePath.arrowLeftGray} resizeMode={ImageEnum.contain} style={{ height: scale(25), width: scale(25), tintColor: Colors.app_White }} />
              <Text style={{ ...TextStyles.medium, color: Colors.text_White, flex: 1, textAlign: 'center' }}>{videoItem?.title ? videoItem?.title : ''}</Text>
            </TouchableOpacity>
            <Video
              source={{
                uri: videoItem?.link,
              }}
              paused={false}
              style={{ paddingHorizontal: 5 }}
              repeat={true}
              // resizeMode={ImageEnum.cover}
              controls={true}
            />
          </>
        )}

        {Platform.OS == 'android' && (
          <>

            <VideoPlayer
              navigator={navigation}
              resizeMode={ImageEnum.cover}
              title={videoItem?.title}
              source={{
                // uri:'https://youtu.be/GKbzdfQeiFc?si=U_7ylMHTvKgD92rc'
                uri: videoUrl,
              }}
            //  navigator={this.props.navigator}
            //   videoStyle={{backgroundColor:'red'}}
            // style={{ paddingHorizontal:moderateScale(5)}}
            />
          </>
        )}

      </View>
    </Components.AppWrapper>
  );
};
export default VideoPlayerScreen
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: moderateScale(5),
    backgroundColor: Colors.app_Black
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#2c3e50',
  },
});
