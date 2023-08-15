import { Alert, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../Colors/Colors'
import { moderateScale, moderateScaleVertical, scale, textScale } from '../Styles/responsiveSize'
import { TextStyles } from '../Styles/ComnStyle'
import { ImageEnum, ImagePath, Navigate } from '../Constants'
import { TouchableHighlight } from 'react-native-gesture-handler'

const VideoItem = ({ data, navigation }) => {
    const onCellSelected = () => {
        if (data.navkey === Navigate.consulting) {
            Alert.alert('Under working')
            return
        }
        navigation.navigate(data.navkey)
    }
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer} >
                <>
                    <TouchableHighlight
                        style={{ paddingHorizontal: moderateScale(14) }}
                        underlayColor={Colors.selectedBg}
                        onPress={onCellSelected}
                    >
                        <View style={styles.content}>
                            <Text
                                numberOfLines={1}
                                style={{ ...TextStyles.medium, fontSize: textScale(14), paddingVertical: moderateScaleVertical(5), }}
                            >{"efsd vmnkskldf lkgjsfn gjdfj ggf mdglkhj"}</Text>
                            <Image
                                style={{ height: scale(30), width: scale(35), alignSelf: 'center' }}
                                source={ImagePath.youtube}
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
        flexDirection: 'row',
        paddingHorizontal: moderateScale(8),
        paddingVertical: moderateScaleVertical(8)
    }

})