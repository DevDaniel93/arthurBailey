import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from '../../constants'
import CustomButton from '../../components/CustomButton'

const LoginAndSignUp = () => {
    return (
        <View style={styles.container}>
            <View style={styles.headerImage}>

            </View>
            <View style={styles.body}>
                <CustomButton disabled={true} btnStyle={{backgroundColor: COLORS.primary}} />
                <Text>dhfyduisgfb</Text>
            </View>
        </View>
    )
}

export default LoginAndSignUp

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: COLORS.backgroundGray
    },
    headerImage: {
        height: "35%",
        backgroundColor: COLORS.primary
    },
    body: {
        flex: 1,
        borderTopLeftRadius: SIZES.twentyFive + SIZES.ten,
        borderTopRightRadius: SIZES.twentyFive + SIZES.ten,
        backgroundColor: COLORS.white,
        padding:  SIZES.twentyFive + SIZES.ten,
        marginTop: -30,
    }
})