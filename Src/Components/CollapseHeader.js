import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { height, moderateScale, moderateScaleVertical, scale } from '../Styles/responsiveSize'
import Colors from '../Colors/Colors'
import { TextStyles } from '../Styles/ComnStyle'
import { ImageEnum, ImagePath } from '../Constants'

const CollapseHeader = ({ data }) => {
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text
                    style={{ ...TextStyles.medium, ...styles.headerTitle }}
                >{data.title}</Text>
                <Image
                    source={ImagePath.arrowDwn}
                    resizeMode={ImageEnum.contain}
                    style={{ ...styles.icon }}

                />
            </View>

        </View>
    )
}

export default CollapseHeader

const styles = StyleSheet.create({

    container: {
        paddingBottom: moderateScaleVertical(15),
        backgroundColor: Colors.app_White,
        overflow:'hidden'
    },
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor:Colors.themeBlue,
        paddingVertical: moderateScaleVertical(15),
        paddingHorizontal: moderateScale(20),
        borderTopLeftRadius: scale(25),
        borderBottomRightRadius: scale(25),
        borderBottomLeftRadius:3,
        borderTopRightRadius:3,
        shadowColor: Colors.shadowColor,
        elevation: 6,
        shadowRadius: 14,

    }, headerTitle: {
        color: Colors.text_White
    }, icon: {
        height: scale(25),
        width: scale(25),
        // transform:[{ rotate: '180deg'}]
    }

})