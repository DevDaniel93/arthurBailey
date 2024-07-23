import React, { useState } from 'react'
import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import CustomButton from '../../components/CustomButton'
import { COLORS, IMAGES, SCREENS, SIZES } from '../../constants'
import EditText from '../../components/EditText'
import { IconType } from '../../components'

const LoginAndSignUp = (props) => {

    const [tabs, setTabs] = useState(0)
    const [userNameSignUp, setUserNameSignUp] = useState('')
    const [emailSignUp, setEmailSignUp] = useState('')
    const [passwordSignUp, setPasswordSignUp] = useState('')
    const [confirmPasswordSignUp, setConfirmPasswordSignUp] = useState('')
    const [emailLogin, setEmailLogin] = useState('')
    const [passwordLogin, setPasswordLogin] = useState('')
    const { navigation } = props

    return (
        <View style={styles.container}>
            <View style={styles.headerImage}>
                <ImageBackground
                    style={{ flex: 1, alignItems: "center", justifyContent: "center", bottom: SIZES.ten }}
                    source={IMAGES.logoBg}>
                    <Image source={IMAGES.logo} />

                </ImageBackground>
            </View>
            <View style={styles.body}>
                <View style={styles.tabs}>
                    <CustomButton
                        label={'Sign Up'}
                        txtstyle={{ color: tabs == 0 ? COLORS.white : COLORS.primary }}
                        onPress={() => setTabs(0)}
                        btnStyle={[styles.innerTab, { backgroundColor: tabs === 0 ? COLORS.primary : COLORS.secondary }]} />
                    <CustomButton
                        label={'Login'}
                        txtstyle={{ color: tabs == 1 ? COLORS.white : COLORS.primary }}
                        onPress={() => setTabs(1)}
                        btnStyle={[styles.innerTab, { backgroundColor: tabs === 1 ? COLORS.primary : COLORS.secondary }]} />
                </View>
                {tabs === 0 ?
                    <>
                        <EditText
                            styleTxtArea={styles.txtField}
                            placeholder={"User Name"}
                            value={userNameSignUp}
                            onChangeText={(txt) => setUserNameSignUp(txt)}
                            hasIcon={true}
                            name={'user-circle-o'}
                            type={IconType.FontAwesome}
                            color={COLORS.primary}
                        />
                        <EditText
                            styleTxtArea={styles.txtField}
                            placeholder={"Email"}
                            value={emailSignUp}
                            onChangeText={(txt) => setEmailSignUp(txt)}
                            hasIcon={true}
                            name={'mail'}
                            type={IconType.Foundation}
                            color={COLORS.primary}
                        />
                        <EditText
                            styleTxtArea={styles.txtField}
                            placeholder={"Password"}
                            value={passwordSignUp}
                            onChangeText={(txt) => setPasswordSignUp(txt)}
                            password
                            hasIcon={true}
                            name={'password'}
                            type={IconType.MaterialIcons}
                            color={COLORS.primary}
                        />
                        <EditText
                            styleTxtArea={[styles.txtField, { paddingBottom: SIZES.twenty }]}
                            placeholder={"Confirm Password"}
                            value={confirmPasswordSignUp}
                            onChangeText={(txt) => setConfirmPasswordSignUp(txt)}
                            password
                            hasIcon={true}
                            name={'password'}
                            type={IconType.MaterialIcons}
                            color={COLORS.primary}
                        />
                        <CustomButton label={"Sign Up"} />
                    </>
                    :
                    <>
                        <EditText
                            styleTxtArea={styles.txtField}
                            placeholder={"Email"}
                            value={emailLogin}
                            onChangeText={(txt) => setEmailLogin(txt)}
                            hasIcon={true}
                            name={'mail'}
                            type={IconType.Foundation}
                            color={COLORS.primary}
                        />
                        <EditText
                            styleTxtArea={{ paddingBottom: SIZES.ten }}
                            placeholder={"Password"}
                            value={passwordLogin}
                            onChangeText={(txt) => setPasswordLogin(txt)}
                            password
                            hasIcon={true}
                            name={'password'}
                            type={IconType.MaterialIcons}
                            color={COLORS.primary}
                        />
                        <TouchableOpacity
                            style={{ alignItems: "flex-end", paddingTop: SIZES.ten, paddingBottom: SIZES.twentyFive }}
                            onPress={() => navigation.navigate(SCREENS.ResetPassword)}
                        >
                            <Text
                                style={{ color: COLORS.primary, fontWeight: 700 }}
                            >Forgot Password?
                            </Text>
                        </TouchableOpacity>
                        <CustomButton
                            label={"Log In"}
                            onPress={() => navigation.navigate(SCREENS.ContactUs)}
                        />
                    </>
                }
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
        padding: SIZES.twentyFive + SIZES.ten,
        marginTop: -30,
    },
    tabs: {
        backgroundColor: COLORS.secondary,
        width: SIZES.fiftyWidth * 6.3,
        height: SIZES.twenty * 3,
        borderRadius: SIZES.ten,
        flexDirection: "row",
        justifyContent: 'space-around',
    },
    innerTab: {
        width: SIZES.fiftyWidth * 3,
        bottom: SIZES.ten / 2
    },
    txtField: {
        paddingTop: SIZES.ten,
        paddingBottom: SIZES.ten
    }
})