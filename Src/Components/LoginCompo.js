import {StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LoginCompo = () => {
    return (
        <View style={styles.container}>
          <Text>Login Screen</Text>
        </View>
    )
}
export default LoginCompo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        overflow: 'hidden'
    }

})