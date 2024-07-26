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
        <View style={styles.container}>
            <ImageBackground
                source={IMAGES.pattern}
                style={styles.InnerConatiner}>
                <Image
                    style={styles.imageCover}
                    source={{ uri: item?.image }}
                />
                <View
                >
                    <Text numberOfLines={2} style={styles.txt}>{item?.title}</Text>
                    <CustomButton
                        onPress={() => {
                            navigation.navigate(SCREENS.BookDetail, { data: item })
                        }}

                        label={"Details"} btnStyle={styles.btn} txtstyle={styles.btnTxt} />
                </View>
            </ImageBackground>
        </View>
    )
}

export default BookCard

const styles = StyleSheet.create({
    container: {
        marginTop: SIZES.twenty,
        width: width * .45,
        height: height * .35,
        justifyContent: "flex-end"
    },
    txt: {
        color: COLORS.white,
        textAlign: "center",
        fontWeight: "600",
        lineHeight: 20,
        fontFamily: FONTFAMILY.Poppins
    },
    InnerConatiner: {
        justifyContent: "flex-end",
        backgroundColor: COLORS.primary,
        width: width * .45,
        height: height * .28,
        borderRadius: SIZES.five,
        padding: SIZES.fifteen
    },
    btn: {
        backgroundColor: COLORS.white,

        padding: SIZES.ten

    },
    btnTxt: {
        color: COLORS.primary
    },
    imageCover: {
        width: "80%",
        alignSelf: "center",
        borderRadius: SIZES.five,
        height: height * .22,
        marginBottom: SIZES.ten
    }

})