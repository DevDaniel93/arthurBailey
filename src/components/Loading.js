import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'
import Modal from 'react-native-modal';
import { COLORS } from '../constants';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { FONTFAMILY, getTheme, height, SIZES, width } from '../constants/theme';
import LottieView from 'lottie-react-native';
export default function Loading(props) {

    return (
        <Modal

            animationIn={'slideInUp'}
            animationOut={'slideOutDown'}
            isVisible={props.loading}>
            <View style={styles.innerContainer}>

                <LottieView style={styles.animation} source={{ uri: "https://lottie.host/90cebbf7-1c66-4395-be8f-52c7fc761527/pw6PJB4s41.json" }} autoPlay loop />
                <Text style={{
                    color: COLORS.white,
                    fontSize: SIZES.fifty,
                    fontFamily: FONTFAMILY.QwitcherGrypenBold,
                }}>
                    Please wait
                </Text>
            </View>

        </Modal>
    )
}

const styles = StyleSheet.create({
    innerContainer: {
        // backgroundColor: COLORS.white,
        justifyContent: "center",
        alignItems: "center",

    },
    animation: {
        width: width * .6,
        height: width * .6,
        // backgroundColor: "red"
    }
})