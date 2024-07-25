import { StyleSheet, TouchableOpacity, View, TextInput } from 'react-native'
import React, { useState } from 'react'

import Icon, { IconType } from './Icons'
import { COLORS, SIZES } from '../constants'


export default function SearchFilter(props) {


    return (

        <View style={styles.InnerConatiner}>

            <Icon
                name={"search"}
                type={IconType.Feather}
                style={styles.icon}
            />

            <TextInput
                style={styles.TextInput}
                placeholderTextColor={COLORS.gray}
                placeholder='Search books by book title'
                {...props}
            />
        </View>

    )
}

const styles = StyleSheet.create({

    InnerConatiner: {
        borderWidth: 1,
        flexDirection: "row",
        borderRadius: SIZES.five,
        alignItems: "center",
        marginRight: SIZES.fifteen,
        borderColor: COLORS.lightGray,
        marginTop: SIZES.ten
    },
    iconContiner: {
        backgroundColor: COLORS.primary,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: SIZES.ten,
        paddingHorizontal: SIZES.fifteen,
        borderRadius: SIZES.five
    },
    icon: {
        color: COLORS.lightGray,
        marginHorizontal: SIZES.ten
    },
    TextInput: {
        color: COLORS.black,
        flex: 1,

    }
})
