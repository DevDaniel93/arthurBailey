import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONTFAMILY, IMAGES, SIZES } from '../constants'
import { useNavigation } from '@react-navigation/native'
import Icon, { IconType } from './Icons'

export default function CustomHeader(props) {
    const { label, logo } = props

    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => {
                    navigation.openDrawer()
                }}
                style={styles.icon}>
                <Icon
                    name={"list"}
                    color={COLORS.white}
                    type={IconType.Feather}
                />
            </TouchableOpacity>
            {label && <Text style={styles.txt}>
                {label}
            </Text>}
            {logo &&
                <Image source={IMAGES.logoWithBlackFont} style={styles.img} />
            }

            <TouchableOpacity
                onPress={() => {
                    // navigation.navigate(user !== null ? SCREENS.profile : SCREENS.Login)
                }}
                style={styles.icon}>
                <Icon
                    color={COLORS.white}
                    name={"shopping-cart"}
                    type={IconType.Feather}
                />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: SIZES.twenty,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: SIZES.ten

    },
    icon: {
        backgroundColor: COLORS.primary,
        justifyContent: "center",
        alignItems: "center",
        width: SIZES.twentyFive + SIZES.fifteen,
        height: SIZES.twentyFive + SIZES.fifteen,
        borderRadius: SIZES.twenty
    },
    txt: {
        fontWeight: "bold",
        fontFamily: FONTFAMILY.Poppins,
        fontSize: SIZES.twenty,
        color: COLORS.black
    }, img: {
        resizeMode: "contain",
        height: SIZES.twentyFive * 2.2,
        width: SIZES.fifty * 3,
    }
})