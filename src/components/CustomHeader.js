import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLORS, FONTFAMILY, IMAGES, SCREENS, SIZES } from '../constants'
import { useNavigation } from '@react-navigation/native'
import Icon, { IconType } from './Icons'
import { useSelector } from 'react-redux'

export default function CustomHeader(props) {
    const { label, logo } = props
    const cart = useSelector(state => state.Cart.cart)

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
                    navigation.navigate(SCREENS.MyCart)
                }}
                style={styles.icon}>
                {cart?.length > 0 &&
                    <View style={styles.cartContainer}>
                        <Text style={styles.cartText}>
                            {cart?.length}
                        </Text>
                    </View>
                }

                <Icon
                    color={COLORS.white}
                    name={"shopping-cart"}
                    style={{ transform: [{ rotateY: '180deg' }] }}
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
        marginTop: SIZES.ten,

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
    },
    cartContainer: {
        backgroundColor: COLORS.white,
        width: SIZES.twenty,
        height: SIZES.twenty,
        borderRadius: SIZES.twenty,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: -SIZES.five,
        right: -2,
        borderColor: COLORS.primary,
        borderWidth: 1
    },
    cartText: {
        color: COLORS.primary
    }
})