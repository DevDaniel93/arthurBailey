import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon, { IconType } from './Icons'
import { COLORS, SIZES, STYLES } from '../constants'

const UserNotes = (props) => {
    return (
        <View style={styles.container}>

            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <TouchableOpacity
                    onPress={() => { }}
                    style={[styles.IconContainer, STYLES.shadow]}>
                    <Icon
                        name={"delete"}
                        size={SIZES.twenty}
                        type={IconType.MaterialIcons}
                        color={COLORS.red}
                    />
                </TouchableOpacity>

                <Text style={styles.text}>
                    {props?.title}
                </Text>

                <TouchableOpacity
                    onPress={() => { }}
                    style={[styles.IconContainer, STYLES.shadow]}>
                    <Icon
                        name={"edit-3"}
                        size={SIZES.twenty}
                        type={IconType.Feather}
                        color={COLORS.red}
                    />
                </TouchableOpacity>
            </View>
            <Text style={{ textAlign: "center", paddingTop: SIZES.fifteen, color: COLORS.gray }}>
                {props?.description}
            </Text>
        </View>
    )
}

export default UserNotes

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 2,
        borderColor: COLORS.primary,
        backgroundColor: COLORS.white,
        padding: SIZES.fifteen,
        marginBottom: SIZES.ten
    },
    IconContainer: {
        backgroundColor: COLORS.white,
        borderRadius: 50,
        padding: 5
    },
    text: {
        fontSize: SIZES.twenty,
        fontWeight: "600",
        color: COLORS.black
    }
})