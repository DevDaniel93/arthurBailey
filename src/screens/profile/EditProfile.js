import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Icon, IconType } from '../../components'
import CustomButton from '../../components/CustomButton'
import CustomModal from '../../components/CustomModal'
import EditText from '../../components/EditText'
import HeaderWithArrow from '../../components/HeaderWithArrow'
import UploadPhotoModal from '../../components/modal/UploadPhotoModal'
import { COLORS, IMAGES, SIZES, STYLES, height } from '../../constants'
import { getTheme, SCREENS } from '../../constants/theme'
import { ChangePassword, updateProfile } from '../../redux/slices/auth'
import { setLoading } from '../../redux/slices/utils'

export default function EditProfile(props) {

    const { navigation } = props
    const [isEdit, setIsEdit] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const [changePasswordModal, setChangePasswordModal] = useState(false)
    const [updatedModal, setUpdatedModal] = useState(false)
    const [image, setImage] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')


    const ProfilePic = () => {
        return (
            <View style={styles.imgConatiner}>
                <Image source={image !== "" ? { uri: image?.path } : IMAGES.user} style={styles.img} resizeMode="contain" />
                <TouchableOpacity
                    onPress={() => {
                        setIsVisible(!isVisible)
                    }}
                    style={styles.iconContainer}>
                    <Icon
                        name={"camera"}
                        type={IconType.Entypo}
                        color={COLORS.white}
                        size={SIZES.twenty}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    const handleChanges = async () => {
        navigation.goBack()
    }
    const UpdatePassword = async () => {
        setChangePasswordModal(false)
        setUpdatedModal(true)
    }

    return (
        <View style={[STYLES.container]}>
            <HeaderWithArrow label={'Edit Profile'} />
            <ProfilePic />
            <EditText
                value={name}
                onChangeText={(e) => {
                    setName(e)
                }}
                label={'Name'}
                inputArea={styles.inputField}
            />
            <EditText
                value={email}
                onChangeText={(e) => {
                    setEmail(e)
                }}
                label={'Email'}
                inputArea={styles.inputField}
            />
            <CustomButton
                onPress={handleChanges}
                btnStyle={{ marginTop: SIZES.twentyFive }}
                label={'Save Changes'}
            />
            <CustomButton
                onPress={() => {
                    setChangePasswordModal(!changePasswordModal)
                }}
                txtstyle={styles.txtstyle}
                btnStyle={styles.btnStyle}
                label={'Change Password'}
            />

            <UploadPhotoModal
                visibility={isVisible}
                onImageSelected={setImage}
                setVisibility={setIsVisible}
            />
            <CustomModal
                isvisible={changePasswordModal}
            >
                <Text style={styles.heading}>
                    {'Change Password'}
                </Text>
                <Icon
                    name={"cross"}
                    type={IconType.Entypo}
                    color={COLORS.primary}
                    size={SIZES.twentyFive}
                    style={{ position: "absolute", right: SIZES.fifteen, top: SIZES.fifteen }}
                    onPress={() => setChangePasswordModal(false)}
                />
                <EditText
                    value={oldPassword}
                    onChangeText={(e) => {
                        setOldPassword(e)
                    }}
                    password
                    label={'Enter Old Password'}
                    placeholder={"Enter Old Password"}

                />
                <EditText
                    value={newPassword}
                    onChangeText={(e) => {
                        setNewPassword(e)
                    }}
                    password
                    label={'Enter New Password'}
                    placeholder={"Enter New Password"}

                />
                <EditText
                    value={confirmPassword}
                    onChangeText={(e) => {
                        setConfirmPassword(e)
                    }}
                    password
                    label={'Confirm Password'}
                    placeholder={"Re-type New Password"}

                />
                <CustomButton
                    btnStyle={{ marginVertical: SIZES.fifteen }}
                    onPress={() =>  UpdatePassword()}
                    label={'Update'}
                />

            </CustomModal>
            <CustomModal isvisible={updatedModal}>
                <Text style={[styles.modalText]}>
                    Your Profile is Updated
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
                            setUpdatedModal(!updatedModal)
                            navigation.navigate(SCREENS.Profile)
                        }}
                        label={'Continue'}
                    />
                </View>
            </CustomModal>
        </View>
    )
}

const styles = StyleSheet.create({
    btnStyle: {

        borderColor: COLORS.primary,
        backgroundColor: COLORS.white,
        borderWidth: 3,

    },
    inputField: {
        borderWidth: 1,
        borderColor: COLORS.primary,
        backgroundColor: COLORS.white,
    },
    txtstyle: {
        color: COLORS.primary
    },
    img: {
        width: "100%",
        height: "100%",
        borderRadius: SIZES.fifty,
    },
    imgConatiner: {
        width: height * .15,
        height: height * .15,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: SIZES.twenty,
        alignSelf: "center",
        borderColor: COLORS.primary,
        borderWidth: 2,
        borderRadius: SIZES.fifty,
    },
    iconContainer: {
        backgroundColor: COLORS.primary,
        padding: SIZES.ten - 2,
        borderRadius: SIZES.fifty,
        position: "absolute",
        bottom: 0,
        right: 10
    },
    modalText: {
        color: COLORS.defaultTextColor,
        fontSize: SIZES.twenty,
        textAlign: "center",
        lineHeight: 100,
        fontWeight: "500",
    },
    modalIcon: {
        alignSelf: "center",
        paddingTop: SIZES.twenty * 2,
        paddingBottom: SIZES.twenty * 2
    },
    heading: {
        color: COLORS.defaultTextColor,
        alignSelf: "center",
        marginVertical: SIZES.fifteen,
        fontSize: SIZES.twenty,
        fontWeight: "600"
    }

})