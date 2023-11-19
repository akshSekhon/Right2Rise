import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { height, moderateScale, moderateScaleVertical, scale } from '../Styles/responsiveSize'
import Colors from '../Colors/Colors'
import { TextStyles } from '../Styles/ComnStyle'
import { ImageEnum, ImagePath } from '../ConstantFiles'

const CollapseHeader = ({ data,isActive,style,index}) => {
    // console.log('CollapseHeader isActive isActive: --- ',isActive)

    return (
        <View style={styles.container}>
            {/* <View style={{...styles.innerContainer,}}> */}
        <ImageBackground style={{...styles.innerContainer,}} source={index%2 == 0 ? ImagePath.pinkBgImage:ImagePath.blueBgImage} resizeMode='stretch'>

                <Text
                    style={{ ...TextStyles.medium, ...styles.headerTitle }}
                >{data?.title}</Text>
                <Image
                    source={ImagePath.down_arrow_fill}
                    resizeMode={ImageEnum.center}
                    style={{ ...styles.icon,transform:isActive?[{ rotate: '180deg'}]: [{ rotate: '0deg'}]}}
                />
            </ImageBackground>

            {/* </View> */}
        </View>
    )
}

export default CollapseHeader

const styles = StyleSheet.create({

    container: {
        // paddingBottom: moderateScaleVertical(15),
        backgroundColor: Colors.app_White,
        overflow:'hidden',  
  
    },
    innerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor:Colors.themeBlue,
        paddingVertical: moderateScaleVertical(15),
        paddingHorizontal: moderateScale(20),
        borderTopLeftRadius: scale(25),
        borderBottomRightRadius: scale(25),
        borderBottomLeftRadius:3,
        borderTopRightRadius:3,
        shadowColor: Colors.shadowColor,
        // elevation: 6,
        shadowRadius: 14,
        overflow:'hidden',  


    }, headerTitle: {
        color: Colors.text_White
    }, icon: {
        tintColor:Colors.app_White,
        height: scale(28),
        width: scale(28),
        // transform:[{ rotate: '180deg'}]
    }

})