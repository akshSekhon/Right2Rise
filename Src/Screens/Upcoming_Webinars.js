import { Alert, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AppFonts from '../ConstantFiles/AppFonts'
import * as Components from '../Components/Index'
import Accordion from 'react-native-collapsible/Accordion';
import { moderateScale, moderateScaleVertical, scale } from '../Styles/responsiveSize';
import Colors from '../Colors/Colors';
import En from '../ConstantFiles/En';
import { ImageEnum, ImagePath } from '../ConstantFiles';
import { CommonStyles } from '../Styles/ComnStyle';

const Upcoming_Webinars = ({ navigation }) => {
    const [activeSections, setActiveSections] = useState([])
    const SECTIONS = [
        {
            title: 'First',
            content: 'Lorem content from first ipsum...',
        },
        {
            title: 'Second',
            content: 'Lorem content from second ipsum...',
        },
        {
            title: 'First',
            content: 'Lorem content from first ipsum...',
        },
        {
            title: 'Second',
            content: 'Lorem content from second ipsum...',
        },
        {
            title: 'First',
            content: 'Lorem content from first ipsum...',
        },
        {
            title: 'Second',
            content: 'Lorem content from second ipsum...',
        },
        {
            title: 'First',
            content: 'Lorem content from first ipsum...',
        },
        {
            title: 'Second',
            content: 'Lorem content from second ipsum...',
        },
        {
            title: 'First',
            content: 'Lorem content from first ipsum...',
        },
        {
            title: 'Second',
            content: 'Lorem content from second ipsum...',
        },
        {
            title: 'First',
            content: 'Lorem content from first ipsum...',
        },
        {
            title: 'Second',
            content: 'Lorem content from second ipsum...',
        },
        {
            title: 'First',
            content: 'Lorem content from first ipsum...',
        },
        {
            title: 'Second',
            content: 'Lorem content from second ipsum...',
        },
    ];
    const _renderSectionTitle = (section) => {
        return (
            <View style={styles.content}>
                {/* <Text>{section.content}</Text> */}
            </View>
        );
    };
    const _renderHeader = (section, index, isActive) => {
        console.log("is active ; -----", isActive)
        return (
            <View style={styles.header}>
                <Components.CollapseHeader
                    style={{ backgroundColor: index % 2 == 0 ? Colors.themePink : Colors.themeBlue }}

                    isActive={isActive}
                    data={section}
                />
            </View>
        );
    };

    const _renderContent = (section) => {
        return (
            <View style={{ marginBottom: 20 }}>
                <Components.CollapseContainer
                    data={section}
                />
            </View>
        );
    };
    const _updateSections = (activeSections) => {
        setActiveSections(activeSections)
        console.log('Active sessions are: =----', activeSections)
    };
    return (
        <Components.AppWrapper>
            <View style={styles.container}>
                <Components.Header
                    centerheaderTitle={En.Upcoming_webinars}
                    navigation={navigation}
                />
                {/* MARK: --- Image container */}

                <View style={{ paddingVertical: moderateScaleVertical(25), alignItems: 'center', paddingHorizontal: moderateScale(10), }}>
                    <Image source={ImagePath.logo}
                        resizeMode={ImageEnum.contain}
                        style={{ height: scale(115), width: scale(115), borderRadius: 100, backgroundColor: Colors.lightGreyTxt }} />
                </View>
                {/* <Text style ={styles.font}>Downloads</Text> */}
                <Accordion
                    activeSections={activeSections}
                    sections={SECTIONS}
                    renderSectionTitle={_renderSectionTitle}
                    renderHeader={_renderHeader}
                    renderContent={_renderContent}
                    onChange={_updateSections}
                    underlayColor={Colors.transparent}
                    renderAsFlatList={true}
                    containerStyle={{
                        ...CommonStyles.accordContainer,
                    }}
                    sectionContainerStyle={{
                        ...CommonStyles.accordSectContain
                    }}
                />
            </View>
            {/* <Components.CustomButton
 onPress = {()=>Alert.alert("Test Button")}
 bgColor={Colors.themePink}
  title = {"test"}
  /> */}
            {/* </View> */}
        </Components.AppWrapper>



    )
}

export default Upcoming_Webinars

const styles = StyleSheet.create({

    container: {
        flex: 1,
        // backgroundColor:'red'
    },
    font: {
        fontFamily: AppFonts.bold,

    },
})