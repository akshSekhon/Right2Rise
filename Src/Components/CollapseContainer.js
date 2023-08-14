import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CollapseContiner = ({data}) => {
  return (
    <View>
      <Text>{data.content}</Text>
    </View>
  )
}

export default CollapseContiner

const styles = StyleSheet.create({

container:{
  flex:1,backgroundColor:'red'
}


})