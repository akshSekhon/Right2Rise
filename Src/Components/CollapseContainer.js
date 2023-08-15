import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextStyles } from '../Styles/ComnStyle'
import Colors from '../Colors/Colors'

const CollapseContiner = ({data}) => {
  return (
    <View>
      <Text style = {{...TextStyles.bold,color:Colors.themeBlue}}>{"Rule 1:"}</Text>

      <Text style = {TextStyles.regular}>{data.content}</Text>
    </View>
  )
}

export default CollapseContiner

const styles = StyleSheet.create({

container:{
  flex:1,backgroundColor:'red'
}


})