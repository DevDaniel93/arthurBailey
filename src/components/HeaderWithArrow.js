import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS, SIZES } from '../constants'
import Icon, { IconType } from './Icons'
import { useNavigation } from '@react-navigation/native'
// import { useSelector } from 'react-redux'
// import { getTheme } from '../constants/theme'

export default function HeaderWithArrow(props) {
    const navigation = useNavigation()
    // const theme = useSelector(state => state.Theme.theme)
    // const currentTheme = getTheme(theme)
    return (
        <View style={[styles.row, props?.containerStyle]}>
            <TouchableOpacity
                onPress={() => {
                    props.iconName ? {} //onpress of some icon other than back
                        : navigation.goBack()
                }}
                style={styles.IconContainer}>
                <Icon
                    name={props.iconName ? props?.iconName : "chevron-back"}
                    size={props.iconSize ? props?.iconSize : SIZES.twentyFive}
                    type={props.iconType ? props?.iconType : IconType.Ionicons}
                    color={COLORS.white}
                />
            </TouchableOpacity>
            {props.label &&
                <Text style={[styles.text, {
                    //  color: currentTheme.defaultTextColor,
                }]}>
                    {props.label}
                </Text>}
            {props.rightIconName &&
                <TouchableOpacity
                    onPress={() => { }}
                    style={[styles.IconContainer, { right: 0, position: "absolute" }, props?.rightIconContainerStyle]}>
                    <Icon
                        name={props?.rightIconName}
                        size={props?.rightIconSize}
                        type={props?.rightIconType}
                        color={COLORS.white}
                    />
                </TouchableOpacity>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: SIZES.twenty,
        marginHorizontal: SIZES.five,
    },
    IconContainer: {
        backgroundColor: COLORS.primary,
        padding: SIZES.five,
        borderRadius: SIZES.fifty
    },
    text: {
        color: COLORS.black,
        fontSize: SIZES.twenty + 2,
        marginLeft: SIZES.fiftyWidth + SIZES.twenty * 2,
        fontWeight: "700",

    }
})