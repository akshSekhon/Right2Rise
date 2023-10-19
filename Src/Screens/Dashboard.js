import { StyleSheet, Text, View, Image } from 'react-native'
import * as Components from '../Components/Index'

import React from 'react'
import { ImageEnum, ImagePath, Navigate } from '../Constants'
import { moderateScale, moderateScaleVertical, scale, width } from '../Styles/responsiveSize'
import En from '../Constants/En'
import Colors from '../Colors/Colors'
import { TextStyles } from '../Styles/ComnStyle'
import { FlatList } from 'react-native-gesture-handler'

const Dashboard = ({navigation}) => {


    const screenList = [
        { id: 1, icon: ImagePath.about_us, title: En.About_Us, navkey: Navigate.about_Us, bgColor: Colors.themePink },
        { id: 2, icon: ImagePath.training, title: En.Training, navkey: Navigate.training, bgColor: Colors.themeBlue },
        { id: 3, icon: ImagePath.consulting, title: En.Consulting, navkey: Navigate.consulting, bgColor: Colors.themeBlue },
        // { id: 4, icon: ImagePath.posh, title: En.POSH, navkey: Navigate.posh, bgColor: Colors.themePink },
        // { id: 5, icon: ImagePath.usdt, title: En.RKT_Foundation, navkey: Navigate.RKT_Foundation, bgColor: Colors.themePink },
        { id: 6, icon: ImagePath.downloads, title: En.Downloads, navkey: Navigate.downloads, bgColor: Colors.themeBlue },
        { id: 7, icon: ImagePath.videos, title: En.Videos, navkey: Navigate.videos, bgColor: Colors.themeBlue },
        { id: 8, icon: ImagePath.contact_us, title: En.Conact_US, navkey: Navigate.conact_US, bgColor: Colors.themePink },
        // { id: 5, icon: '', title: En.RKT_Foundation, navkey: '', bgColor: Colors.themePink },
    ]


    const listItem = ({ item }) => {
        return (
            <>
                <Components.DashBoardCompo
                    data={item}
                    navigation={navigation}
                />
            </>
        )
    }

    return (
        <Components.AppWrapper>
            <View style={styles.container}>
                {/* MARK: ---- Logo container */}
                <View style={{ paddingVertical: moderateScaleVertical(15), alignItems: 'center', paddingHorizontal: moderateScale(10) }}>
                    <Image source={ImagePath.logo}
                        resizeMode={ImageEnum.contain}
                        style={{ width: '100%', height: scale(200), }} />
                </View>
                <View style={{alignItems:'center',paddingVertical:moderateScaleVertical(15)}}>
                    <Text style={{color:'black'}}>(A part of ITF Global Pvt Ltd)</Text>
                </View>
                {/* MARK: ---- Text  A sliding demo text is to be displayed here with a transition. */}
                <View style={{ backgroundColor: Colors.darkWhite, paddingVertical: moderateScaleVertical(10), alignItems: 'center', justifyContent: 'center' }}>
                    <Text
                        style={TextStyles.italic}
                    >{En.dashBoardTitle} </Text>
                </View>
                {/* MARK: ---- Flat list  */}

                {/* <View style={{paddingHorizontal:5 }}> */}
                <FlatList
                    columnWrapperStyle={{ justifyContent: 'space-between', }}
                    data={screenList}
                    keyExtractor={item => item.id}
                    horizontal={false}
                    numColumns={2}
                    renderItem={listItem}
                />
                {/* </View> */}
                {/* <Components.DashBoardCompo/> */}
            </View>
        </Components.AppWrapper>

    )
}

export default Dashboard
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor:'red'
    }, imageThumbnail: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: width / 2,
        margin: 1
    },
})