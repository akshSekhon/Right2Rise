import { Alert, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../Colors/Colors'
import { moderateScaleVertical, scale, textScale } from '../Styles/responsiveSize'
import { TextStyles } from '../Styles/ComnStyle'
import { ImageEnum, ImagePath, Navigate } from '../Constants'
import { TouchableHighlight } from 'react-native-gesture-handler'



const DashBoardCompo = ({ data ,navigation}) => {
    const onCellSelected = () => {
        if (data.navkey === Navigate.consulting){
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
                        style={{height: scale(125) }}
                        underlayColor={Colors.selectedBg}
                        onPress={onCellSelected}

                    >
                        <Image
                        style={{height:"100%", width:"100%"}}
                            source={data.icon}
                            resizeMode={ImageEnum.cover}
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
        // backgroundColor:'yellow',
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 10,
        overflow: 'hidden'
    },
    innerContainer: {
        // flex:1,
        overflow: 'hidden',

        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: Colors.app_White,
        shadowColor: Colors.app_Black,
        shadowRadius: 3,
        shadowOpacity: 0.4,
        borderRadius: 4,
        shadowOffset: { height: 0, width: 0 },
        elevation: 5,
    }

})