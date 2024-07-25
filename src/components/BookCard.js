import React, { useState } from 'react'
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { COLORS, FONTFAMILY, SIZES, STYLES, height, width } from '../constants'
import { IMAGES, SCREENS } from '../constants/theme'
import Icon, { IconType } from './Icons'
import CustomButton from './CustomButton'

const BookCard = ({ item }) => {
    const navigation = useNavigation()


    return (
        <View style={{ backgroundColor: "pink", height: height * .4 }}>
            <View style={{ height: "20%" }} />

            <ImageBackground
                source={IMAGES.logoBg}
                style={styles.container}
            >
                <Image source={IMAGES.ProductImage} style={styles.img} />
                <View style={styles.description}>
                    <Text style={styles.txt}>How To Overcome The Devil</Text>
                    <CustomButton label={"Details"} btnStyle={styles.btn} txtstyle={styles.btnTxt} />
                </View>

            </ImageBackground>
        </View>
    )
}

export default BookCard

const styles = StyleSheet.create({
    container: {
        width: width * .45,
        height: height * .35,
        backgroundColor: COLORS.primary,
        borderRadius: 10,
        // marginBottom: SIZES.twenty + 6,
        // paddingHorizontal: 15,
        // paddingTop: 15,
        // paddingBottom: 5,
        // justifyContent: 'space-between'
    },
    img: {
        width: "80%",
        height: "100%",
        borderRadius: 10,
        backgroundColor: COLORS.gray,
        bottom: 100,
        position: "absolute",
        alignSelf: "center"
    },
    btn: {
        // bottom: 80,
        backgroundColor: COLORS.white,
        width: "80%",
        alignSelf: 'center',
    },
    btnTxt: {
        color: COLORS.primary
    },
    starContainer: {
        position: "absolute",
        padding: SIZES.five,
        borderRadius: SIZES.twentyFive,
        right: SIZES.twentyFive,
        top: SIZES.twentyFive,
        backgroundColor: COLORS.white
    },
    addContainer: {
        position: "absolute",
        padding: SIZES.five,
        borderRadius: SIZES.twentyFive,
        alignItems: "center",
        justifyContent: "center",
        left: SIZES.fifty * 1.85,
        bottom: SIZES.five,
        backgroundColor: COLORS.black
    },
    detail: {
        alignSelf: "center",
        width: "98%",
    },
    txt: {
        fontFamily: FONTFAMILY.Poppins,
        fontSize: 14,
        fontWeight: "800",
        // bottom: 80,
        textAlign: "center",
        color: COLORS.white
    },
    price: {
        fontFamily: FONTFAMILY.Poppins,
        fontWeight: "700",
        fontSize: 12
    },
    category: {
        fontFamily: FONTFAMILY.Poppins,
        fontWeight: "700",
        fontSize: 12
    },
    rating: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    description: {
        // borderWidth: 2,
        top: "70%"
    }

})