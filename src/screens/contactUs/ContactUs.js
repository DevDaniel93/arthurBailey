import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SIZES, STYLES, height, width } from '../../constants'
import HeaderWithArrow from '../../components/HeaderWithArrow'
import EditText from '../../components/EditText'
import CustomButton from '../../components/CustomButton'
import { useDispatch, useSelector } from 'react-redux'
import { COLORS, getTheme, SCREENS } from '../../constants/theme'
import { Contactus } from '../../redux/slices/contactUs'
import { setLoading } from '../../redux/slices/utils'
import CustomModal from '../../components/CustomModal'
import { Icon, IconType } from '../../components'

export default function ContactUs(props) {

    // const user = useSelector(state => state.Auth.user)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [subject, setSubject] = useState("")
    const [message, setMessage] = useState("")
    const [isVisible, setIsVisible] = useState(false)
    const { navigation } = props

    // const sendQuery = async () => {
    //     try {

    //         const formData = new FormData()
    //         formData.append("name", name)
    //         formData.append("email", email)
    //         formData.append("subject", subject)
    //         formData.append("message", message)
    //         dispatch(setLoading(true))
    //         await dispatch(Contactus(formData))
    //         dispatch(setLoading(false))
    //         setSubject('')
    //         setMessage('')

    //     } catch (error) {
    //         dispatch(setLoading(false))

    //     }
    // }

    return (
        <View style={STYLES.container}>
            <HeaderWithArrow
                iconName={"list"}
                label={'Contact Us'}
                rightIconName={'shoppingcart'}
                rightIconType={IconType.AntDesign}
                rightIconSize={SIZES.twentyFive}
                rightIconContainerStyle={{ transform: [{ rotateY: '180deg' }] }}
            />
            <EditText
                value={name}
                onChangeText={setName}
                styleTxtArea={styles.textArea}
                placeholder={'Enter Your Name'}
                inputArea={styles.inputField}
            />
            <EditText
                styleTxtArea={styles.textArea}
                value={email}
                onChangeText={setEmail}
                placeholder={'Enter Your Email'}
                inputArea={styles.inputField}

            />
            <EditText
                value={subject}
                onChangeText={setSubject}
                styleTxtArea={styles.textArea}
                placeholder={'Enter Your Subject'}
                inputArea={styles.inputField}

            />
            <EditText
                value={message}
                onChangeText={setMessage}
                styleTxtArea={styles.textArea}
                inputArea={[styles.multiInput, styles.inputField]}
                multiline={true}
                style={styles.multiInputTxt}
                placeholder={'Enter Your Message'}
            />
            <CustomButton
                onPress={() => setIsVisible(true)}
                label={'Submit'}
            />

            <CustomModal isvisible={isVisible}>
                <Text style={[styles.modalText]}>
                    Your Message has been sent
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

const styles = StyleSheet.create({
    textArea: {
        marginTop: SIZES.twenty
    },
    multiInput: {
        height: height * .28,
        flex: 1
    },
    multiInputTxt: {
        height: height * .27,
        textAlignVertical: "top",
    },
    inputField: {
        borderWidth: 1,
        borderColor: COLORS.primary,
        backgroundColor: COLORS.white,
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

})