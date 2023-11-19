import { StyleSheet, Text, View, Image } from 'react-native'
import * as Components from '../Components/Index'

import React from 'react'
import { ImageEnum, ImagePath, Navigate } from '../ConstantFiles'
import { height, moderateScale, moderateScaleVertical, scale, width } from '../Styles/responsiveSize'
import En from '../ConstantFiles/En'
import Colors from '../Colors/Colors'
import { TextStyles } from '../Styles/ComnStyle'
import { FlatList } from 'react-native-gesture-handler'

const Dashboard = ({ navigation }) => {


    const screenList = [
        { id: 1, icon: ImagePath.about_us, title: En.About_Us, navkey: Navigate.about_Us, bgColor: Colors.themePink },
        { id: 2, icon: ImagePath.training, title: En.Training, navkey: Navigate.training, bgColor: Colors.themeBlue },
        { id: 3, icon: ImagePath.consulting, title: En.Consulting, navkey: Navigate.consulting, bgColor: Colors.themeBlue },

        { id: 4, icon: ImagePath.trending_cases, title: En.Trending_Cases, navkey: Navigate.Trending_cases, bgColor: Colors.themePink },
        { id: 5, icon: ImagePath.upcoming, title: En.Upcoming_webinars, navkey: Navigate.Upcoming_Webinars, bgColor: Colors.themePink },

        { id: 6, icon: ImagePath.downloads, title: En.Downloads, navkey: Navigate.downloads, bgColor: Colors.themeBlue },
        { id: 7, icon: ImagePath.videos, title: En.Videos, navkey: Navigate.videos, bgColor: Colors.themeBlue },
        { id: 8, icon: ImagePath.contact_us, title: En.Conact_US, navkey: Navigate.conact_US, bgColor: Colors.themePink },
        // { id: 5, icon: '', title: En.RKT_Foundation, navkey: '', bgColor: Colors.themePink },
    ]


    const ListItem = ({ item }) => {
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
                <View style={{}}>
                    <View style={{ paddingVertical: moderateScaleVertical(15), alignItems: 'center', paddingHorizontal: moderateScale(10) }}>
                        <Image source={ImagePath.logo}
                            resizeMode={ImageEnum.contain}
                            style={{ width: '100%',height:height*0.2}} />
                    </View>
                </View>

                    <View style={{ alignItems: 'center', paddingVertical: moderateScaleVertical(15) }}>
                        <Text style={{ color: 'black' }}>(A part of ITF Global Pvt Ltd)</Text>
                    </View>
                    {/* MARK: ---- Text  A sliding demo text is to be displayed here with a transition. */}
                    <View style={{ backgroundColor: Colors.darkWhite, paddingVertical: moderateScaleVertical(10), alignItems: 'center', justifyContent: 'center' }}>
                        <Text
                            style={TextStyles.italic}
                        >{En.dashBoardTitle} </Text>
                    </View>
                    <View style={{height:height*0.8,paddingHorizontal:moderateScale(10) }} >

                    {/* MARK: ---- Flat list  */}

                    {/* <View style={{paddingHorizontal:5 }}> */}

                    <FlatList
                        columnWrapperStyle={{ justifyContent: 'space-between', }}
                        data={screenList}
                        keyExtractor={item => item.id}
                        horizontal={false}
                        numColumns={2}
                        renderItem={ListItem}
                    />
                </View>
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