import { Alert, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../Colors/Colors'
import { moderateScale, moderateScaleVertical, scale, textScale } from '../Styles/responsiveSize'
import { TextStyles } from '../Styles/ComnStyle'
import { ImageEnum, ImagePath, Navigate } from '../ConstantFiles'
import { TouchableHighlight } from 'react-native-gesture-handler'
import NavigationService from '../NavigationStacks/NavigationService'

const VideoItem = ({ data, navigation }) => {
    const onCellSelected = () => {
       NavigationService.navigate(Navigate.VideoPlayerScreen,data)
    }

    console.log('VideoItem VideoItem :---',data);
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer} >
                <>
                    <TouchableHighlight
                        style={{ paddingHorizontal: moderateScale(15) }}
                        underlayColor={Colors.selectedBg}
                        onPress={onCellSelected}
                    >
                        <View style={styles.content}>
                            <Text
                                numberOfLines={1}
                                style={{ ...TextStyles.medium, fontSize: textScale(14),flex:1 }}
                            >{data?.item?.title}</Text>

                            
                            <Image
                                style={{width: scale(35),backgroundColor:'red',height:'80%' }}
                                // source={ImagePath.youtube}
                                source={{uri:data?.item?.image}}
                                resizeMode={ImageEnum.contain}
                            />
                        </View>
                    </TouchableHighlight>
                </>

            </View>
        </View>
    )
}

export default VideoItem

const styles = StyleSheet.create({
    container: {
        // backgroundColor:'yellow',
        flex: 1,
        paddingHorizontal: moderateScale(10),
        paddingVertical: moderateScale(10),
        overflow: 'hidden'
    },
    innerContainer: {
        overflow: 'hidden',
        backgroundColor: Colors.app_White,
        shadowColor: Colors.themePink,
        borderRadius: 100,
        borderWidth: 1.2,
        shadowRadius: 12,
        shadowOpacity: 0.4,
        shadowOffset: { height: 0, width: 0 },
        elevation: 6,
    }, content: {
        gap: 10,
        justifyContent: 'space-evenly',
        alignItems:'center',
        flexDirection: 'row',
        paddingHorizontal: moderateScale(8),
        paddingVertical: moderateScaleVertical(8)
    }

})