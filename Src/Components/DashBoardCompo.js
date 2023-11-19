import { Alert, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../Colors/Colors'
import { height, moderateScaleVertical, scale, textScale, width } from '../Styles/responsiveSize'
import { TextStyles } from '../Styles/ComnStyle'
import { ImageEnum, ImagePath, Navigate } from '../ConstantFiles'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useSafeAreaInsets,useSafeAreaFrame } from 'react-native-safe-area-context';


const DashBoardCompo = ({ data ,navigation}) => {

const insets = useSafeAreaInsets();
const frm = useSafeAreaFrame()
//     const bottomSafeAreaHeight = height - insets.bottom;
// const topSafeAreaHeight = height - insets.top;

// const finalWidth = width - (bottomSafeAreaHeight + topSafeAreaHeight)
console.log('insets.bottom: ---',height);

// console.log('insets.bottom: ---',insets.bottom,'\n insets.top :----- ',insets.top,'\n finalWidth : ---- ',finalWidth);
    const onCellSelected = () => {
        // if (data.navkey === Navigate.consulting){
        //     Alert.alert('Under working')
        //     return
        // }
        navigation.navigate(data.navkey)
    }

    return (
        <View style={styles.container}>
            <View style={styles.innerContainer} >
                <>
                    <TouchableHighlight
                        style={{}}
                        underlayColor={Colors.selectedBg}
                        onPress={onCellSelected}

                    >
                        <Image
                        style={{height:'100%',width:'100%'}}
                            source={data.icon}
                            resizeMode={'stretch'}
                        />
                        {/* </View> */}
                    </TouchableHighlight>
                    {/*<Text
                        style={{ ...TextStyles.medium, fontSize: textScale(14), paddingVertical: moderateScaleVertical(5),alignSelf:'center',height:0}}
                    >{data?.title}</Text>
    */}
                </>

            </View>
        </View>
    )
}

export default DashBoardCompo

const styles = StyleSheet.create({
    container: {
        height:(height*0.64) / 4,
        width:width*0.478,
        paddingHorizontal: 8,
        paddingVertical: 8,
        overflow: 'hidden'
    },
    innerContainer: {
        flex:1,
        overflow: 'hidden',

        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: Colors.app_White,
        shadowColor: Colors.app_Black,
        shadowRadius: 3,
        shadowOpacity: 0.4,
        borderRadius: 4,
        shadowOffset: { height: 0, width: 0 },
        elevation: 5,
    }

})