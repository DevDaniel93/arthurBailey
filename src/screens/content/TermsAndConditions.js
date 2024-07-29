import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton'
import { COLORS, SIZES, STYLES, width } from '../../constants'
import CustomHeader from '../../components/CustomHeader'

const TermsAndConditions = (props) => {
    const { navigation } = props
    return (
        <View style={STYLES.container}>
            <CustomHeader label={"Terms and Condition"} />
            <CustomButton
                label={"Agree & Continue"}
                onPress={() => navigation.goBack()}
                btnStyle={styles.btn}
            />
        </View>
    )
}

export default TermsAndConditions

const styles = StyleSheet.create({

    btn: {
        width: width * 0.8,
        alignSelf: "center",
        position: "absolute",
        top: SIZES.fifty * 11.5,
        borderRadius: SIZES.five,
        borderWidth: 1,
        borderColor: COLORS.primary
    }
})