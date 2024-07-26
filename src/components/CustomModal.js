import React from 'react'
import { StyleSheet, View, } from 'react-native'
import ReactNativeModal from 'react-native-modal'
import { COLORS, SIZES } from '../constants'

export default function CustomModal(props) {
    const { isvisible } = props
    return (
        <ReactNativeModal
            isVisible={isvisible}

        >
            <View style={[styles.innerContainer, props.modalStyle]}>
                {props.children}
            </View>
        </ReactNativeModal>
    )
}

const styles = StyleSheet.create({
    innerContainer: {
        padding: SIZES.twenty,
        borderRadius: SIZES.ten,
        borderColor: COLORS.primary,
        borderTopWidth: 4,
        borderBottomWidth: 4
    }
})