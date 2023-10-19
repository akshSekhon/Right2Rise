import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextStyles } from '../Styles/ComnStyle'
import Colors from '../Colors/Colors'
import { moderateScale } from '../Styles/responsiveSize'

const CollapseContiner = ({data,discription}) => {
  return (
    <View style={{paddingTop:moderateScale(10)}}>
      {/* <Text style = {{...TextStyles.bold,color:Colors.themeBlue}}>{"Rule 1:"}</Text> */}
      <Text style = {TextStyles.regular}>{discription}</Text>
    </View>
  )
}

export default CollapseContiner

const styles = StyleSheet.create({

container:{
  flex:1,backgroundColor:'red'
}


})