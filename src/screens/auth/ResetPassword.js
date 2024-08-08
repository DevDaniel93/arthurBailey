import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon, IconType } from '../../components'
import CustomButton from '../../components/CustomButton'
import CustomModal from '../../components/CustomModal'
import EditText from '../../components/EditText'
import HeaderWithArrow from '../../components/HeaderWithArrow'
import OtpInput from '../../components/OtpInput'
import { COLORS, SCREENS, SIZES, STYLES } from '../../constants'
import { useDispatch } from 'react-redux'
import Loading from '../../components/Loading'
import { ResendCode, ResetPwd, VerifyEmail, VerifyOTP } from '../../redux/slices/auth'

const ResetPassword = (props) => {
    const dispatch = useDispatch()
    const [moveToNext, setMoveToNext] = useState(0)
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [email, setEmail] = useState('')
    const [otp, setOtp] = useState('')
    const [isVisible, setIsVisible] = useState(false)
    const { navigation } = props
    const [loading, setLoading] = useState(false)

    const handleCodeFilled = (code) => {
        setOtp(code)
    }

    // ====================== Forgot password==========================
    const Forgotpassword = async () => {
        try {
            setLoading(true)
            const data = {
                email: email
            }
            await dispatch(VerifyEmail(data))
            setMoveToNext(1)
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
    }
    // ====================== resend code==========================
    const resendCode = async () => {
        try {
            setLoading(true)
            const data = {
                email: email
            }
            await dispatch(ResendCode(data))

            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
    }

    // ====================== OTP Verify=========================
    const OtpVerify = async () => {
        try {
            setLoading(true)
            const data = {
                email: email,
                otp: otp
            }
            await dispatch(VerifyOTP(data))
            setMoveToNext(2)
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
    }
    // ====================== reset Password=========================
    const resetPassword = async () => {
        try {
            setLoading(true)
            const data = {
                email: email,
                otp: otp,
                password: password,
                password_confirmation: confirmPassword
            }
            await dispatch(ResetPwd(data))
            setIsVisible(true)
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
    }

    return (
        <View style={STYLES.container}>
            <Loading loading={loading} />
            <HeaderWithArrow label={"Reset Password"} />
            {moveToNext === 0 ?
                <View style={{ flex: 1 }}>
                    <Text style={styles.heading}>
                        Forgot password
                    </Text>
                    <Text style={styles.subHeading}>
                        Please enter your email to reset the password
                    </Text>
                    <EditText
                        label={"Enter Your Email"}
                        placeholder={"Enter Your Email"}
                        value={email}
                        onChangeText={(txt) => setEmail(txt)}
                        styleTxtArea={{ paddingBottom: SIZES.ten }}
                        labelTxtStyle={{ fontWeight: "700", fontSize: SIZES.fifteen + 3, paddingBottom: SIZES.ten }}
                        inputArea={styles.editTxt}
                    />
                    <CustomButton
                        onPress={async () =>
                            Forgotpassword()}
                        label={"Continue"}
                    />
                </View>
                : moveToNext === 1 ?
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 1 }}>
                            <Text
                                style={styles.heading}>
                                Check your email
                            </Text>
                            <Text
                                style={styles.subHeading2}>
                                We sent a reset link to demo@gmail.com {"\n"}enter 5 digit code that mentioned in the email
                            </Text>
                            <OtpInput codeLength={5}
                                onCodeFilled={handleCodeFilled}
                            />

                            <CustomButton
                                btnStyle={{ marginVertical: SIZES.ten }}
                                onPress={() => OtpVerify()}
                                label={'Continue'}
                            />
                            <View
                                style={{ flexDirection: "row", alignSelf: "center" }}>
                                <Text
                                    style={{ textAlign: "center", paddingTop: SIZES.twenty, fontSize: SIZES.fifteen + 1, fontWeight: "600", }}>
                                    Haven’t got the email yet?
                                </Text>
                                <TouchableOpacity
                                    onPress={() => resendCode()}
                                    style={{ justifyContent: "flex-end" }}>
                                    <Text
                                        style={{ color: COLORS.primary, textDecorationLine: 'underline', fontSize: SIZES.fifteen + 1, fontWeight: "600", }}>
                                        {" "}Resend code
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    </View>
                    :
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.heading}>
                                Set a new password
                            </Text>
                            <Text style={styles.subHeading2}>
                                Create a new password. Ensure it differs from previous ones for security
                            </Text>
                            <EditText
                                label={'Password'}
                                placeholder={'Enter Your Password'}
                                value={password}
                                onChangeText={(txt) => setPassword(txt)}
                                password
                                styleTxtArea={{ paddingTop: SIZES.fifteen }}
                                labelTxtStyle={styles.labels}
                                inputArea={styles.editTxt}
                            />
                            <EditText
                                label={'Confirm Password'}
                                placeholder={'Confirm Your Password'}
                                value={confirmPassword}
                                onChangeText={(txt) => setConfirmPassword(txt)}
                                password
                                styleTxtArea={{ paddingTop: SIZES.ten, paddingBottom: SIZES.fifteen }}
                                labelTxtStyle={styles.labels}
                                inputArea={styles.editTxt}
                            />
                            {
                                confirmPassword !== '' && password !== confirmPassword &&
                                <Text style={[styles.notMatchTxt, { color: COLORS.red }]}>
                                    Passwords Do Not Match
                                </Text >
                            }
                            <CustomButton
                                btnStyle={styles.btn}
                                label={'Update Password'}
                                onPress={() =>
                                    resetPassword()
                                }
                            />
                        </View >

                    </View >
            }
            <CustomModal
                modalStyle={{ backgroundColor: COLORS.white }}
                isvisible={isVisible}>
                <Text style={[styles.modalText]}>
                    Your Password Is Updated!
                </Text>
                <Icon
                    style={styles.modalIcon}
                    name={"checkcircleo"}
                    size={SIZES.fifty * 2}
                    type={IconType.AntDesign}
                    color={COLORS.primary}
                />
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <CustomButton
                        btnStyle={{ width: "100%" }}
                        onPress={() => {
                            setIsVisible(!isVisible)
                            navigation.navigate(SCREENS.LoginAndSignUp)
                        }}
                        label={'Continue'}
                    />
                </View>
            </CustomModal>
        </View>
    )
}

export default ResetPassword

const styles = StyleSheet.create({
    heading: {
        marginTop: SIZES.twenty * 2,
        fontSize: SIZES.twenty + 2,
        fontWeight: "700",
        color: COLORS.black

    },
    subHeading: {
        paddingTop: SIZES.fifteen,
        paddingBottom: SIZES.fifteen,
        fontSize: SIZES.fifteen + 2,
        fontWeight: "600",
    },
    subHeading2: {
        marginTop: SIZES.fifteen,
        fontSize: SIZES.fifteen + 1,
    },
    modalText: {
        color: COLORS.defaultTextColor,
        fontSize: SIZES.twenty,
        textAlign: "center",
        lineHeight: 30,
        fontWeight: "500",
    },
    modalIcon: {
        alignSelf: "center",
        paddingTop: SIZES.twenty * 2,
        paddingBottom: SIZES.twenty * 2
    },
    editTxt: {
        borderWidth: 1,
        borderColor: COLORS.primary,
        backgroundColor: COLORS.white
    },
    labels: {
        fontSize: SIZES.fifteen + 1,
        fontWeight: "700"
    },
})