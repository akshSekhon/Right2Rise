import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import AppFonts from '../Constants/AppFonts'
import * as Components from '../Components/Index'
import { moderateScale } from '../Styles/responsiveSize';
import En from '../Constants/En';
import { FlatList } from 'react-native-gesture-handler';

const Videos = ({navigation}) => {
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
    <Components.AppWrapper>
   <View style={styles.container}>
      <Components.Header
      centerheaderTitle={En.Videos}
      navigation={navigation}
      />
      <View style ={styles.accordation}>
      <FlatList
                    // columnWrapperStyle={{ justifyContent: 'space-between', }}
                    data={SECTIONS}
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