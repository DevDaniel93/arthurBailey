import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '../../components/CustomButton'
import { COLORS, SIZES, width } from '../../constants'

const AboutUs = (props) => {
    const { navigation } = props
    return (
        <View style={styles.container}>

            <Text style={styles.heading
            }>Mobile App Terms and Conditions</Text>
            <CustomButton
                label={"Agree & Continue"}
                onPress={() => navigation.goBack()}
                btnStyle={styles.btn}
            />
        </View>
    )
}

export default AboutUs

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightBackground
    },
    btn: {
        width: width * 0.8,
        alignSelf: "center",
        position: "absolute",
        top: SIZES.fifty * 11.5,
        borderRadius: SIZES.five,
        borderWidth: 1,
        borderColor: COLORS.primary
    },
    heading: {
        color: COLORS.black,
        marginTop: SIZES.twentyFive * 2,
        marginHorizontal: SIZES.twentyFive,
        fontSize: SIZES.twenty

    }
})