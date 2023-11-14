//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";

// create a component
const YoutubePlayer = () => {
    return (
        <View style={styles.container}>
            <Text>YoutubePlayer</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default YoutubePlayer;
