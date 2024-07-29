import { Image, ImageBackground, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTFAMILY, height, SCREENS, SIZES, STYLES, width } from '../../constants'
import HeaderWithArrow from '../../components/HeaderWithArrow'
import { retry } from 'react-native-track-player/lib/src/trackPlayer'

export default function ChapterList(props) {
    const { navigation } = props
    const [tab, setTab] = useState(0)
    const EBookItem = () => {
        return (
            <TouchableOpacity
                onPress={() => {
                    if (tab === 0) {
                        navigation.navigate(SCREENS.Chapter)
                    }
                    else {

                        navigation.navigate(SCREENS.AudioPlayer)
                    }
                }}
                style={styles.row}>
                <ImageBackground
                    source={{ uri: "https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg" }}
                    style={tab === 0 ? styles.img : styles.cdImg}
                    imageStyle={{ borderRadius: tab === 0 ? SIZES.five : SIZES.fifty, }}
                    resizeMode="cover"
                >
                    {
                        tab === 1 &&
                        <View style={styles.cdDot} />
                    }
                </ImageBackground>
                <View style={{ flex: 1, height: "100%", padding: SIZES.ten }}>
                    <Text style={styles.title}>
                        Chapter 1
                    </Text>
                    <Text style={styles.desc}>
                        Lorem ipsum is a dummy
                    </Text>

                </View>
            </TouchableOpacity>
        )
    }
    const TabBtn = ({ onPress, label, btnStyle, textStyle }) => {
        return (
            <TouchableOpacity
                onPress={onPress}
                style={btnStyle}>
                <Text style={textStyle}>
                    {label}
                </Text>
            </TouchableOpacity>
        )
    }
    return (
        <View style={STYLES.container}>

            <HeaderWithArrow label={"Chapters"} />
            <View style={styles.tabContainer}>
                <TabBtn label={"E-Book"}
                    btnStyle={[styles.btnStyle, { backgroundColor: tab === 0 ? COLORS.primary : COLORS.white, }]}
                    textStyle={[styles.textStyle, { color: tab === 0 ? COLORS.white : COLORS.primary, }]}
                    onPress={() => {
                        setTab(0)
                    }}
                />
                <TabBtn
                    label={"Audiobook"}
                    btnStyle={[styles.btnStyle, { backgroundColor: tab === 1 ? COLORS.primary : COLORS.white, }]}
                    textStyle={[styles.textStyle, { color: tab === 1 ? COLORS.white : COLORS.primary, }]}
                    onPress={() => {
                        setTab(1)
                    }}
                />
            </View>
            <EBookItem />
            <EBookItem />
            <EBookItem />
        </View>
    )
}

const styles = StyleSheet.create({
    tabContainer: {
        marginVertical: SIZES.ten,
        backgroundColor: COLORS.white,
        flexDirection: "row",
        padding: SIZES.fifteen,
        borderRadius: SIZES.fifty,
        justifyContent: "space-between",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,

    },
    btnStyle: {

        padding: SIZES.ten,
        width: width * .4,
        alignItems: "center",
        borderRadius: SIZES.twenty,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 6.68,

        elevation: 11,
    },
    textStyle: {

        fontSize: SIZES.fifteen,
        fontWeight: Platform.OS === "ios" ? "600" : "bold",
    },

    row: {
        flexDirection: "row",
        alignItems: "center",
        paddingBottom: SIZES.ten,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.gray,
        marginTop: SIZES.ten

    },
    img: {
        width: SIZES.fifty * 1,
        height: SIZES.fifty * 1.3,
        borderRadius: SIZES.ten,

    },
    title: {
        fontWeight: Platform.OS === "ios" ? "600" : "bold",
        color: COLORS.black,
        fontSize: SIZES.twenty,
        fontFamily: FONTFAMILY.Poppins
    },
    desc: {
        marginTop: SIZES.ten,
        color: COLORS.black,
        fontSize: SIZES.twenty,
        fontFamily: FONTFAMILY.Poppins
    },
    cdImg: {
        width: SIZES.fifty,
        height: SIZES.fifty,
        justifyContent: "center",
        alignItems: "center",

    },
    cdDot: {
        width: SIZES.twenty,
        height: SIZES.twenty,
        backgroundColor: COLORS.white,
        borderRadius: SIZES.twenty
    }
})