import { Image, ImageBackground, StyleSheet, Text, View, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React from 'react'
import HeaderWithArrow from '../../components/HeaderWithArrow'
import { Icon, IconType } from '../../components'
import { COLORS, FONTFAMILY, height, IMAGES, SCREENS, SIZES, STYLES, width } from '../../constants'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import UserNotes from '../../components/UserNotes'
import CustomHeader from '../../components/CustomHeader'

const Profile = (props) => {

    const { navigation } = props

    const notesData = [
        { title: 'Lorem Ipsum', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " },
        { title: 'Lorem Ipsum', description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. " }
    ]
    const renderItem = ({ item }) => {
        return (
            <UserNotes
                title={item.title}
                description={item.description}
            />
        )
    }

    return (
        <ScrollView style={styles.container}>

            <ImageBackground style={styles.coverImg} source={IMAGES.profileBg}>
                <View style={styles.header}>

                    <CustomHeader />
                </View>
                {/* <HeaderWithArrow
                    iconName={"list"}
                    rightIconName={'shoppingcart'}
                    rightIconType={IconType.AntDesign}
                    rightIconSize={SIZES.twentyFive}
                    rightIconContainerStyle={{ transform: [{ rotateY: '180deg' }] }}
                    containerStyle={styles.header}
                /> */}
                <Image source={IMAGES.user} style={styles.img} resizeMode="contain" />
            </ImageBackground>

            <View style={styles.userInfoView}>
                <Text style={[styles.text, { fontSize: SIZES.twenty, color: COLORS.black }]}>John Doe</Text>
                <Text style={styles.text}>User since 05/06/2022</Text>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Icon
                        name={"location"}
                        size={SIZES.fifteen}
                        type={IconType.Entypo}
                    />
                    <Text style={styles.text}>  USA</Text>
                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate(SCREENS.EditProfile)}
                >
                    <Text style={styles.editBtn}>Edit Profile</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.notesHeading}>
                <View style={{ width: width / 3 }} />
                <Text style={{ fontSize: SIZES.twentyWidth, color: COLORS.black, width: width / 3, bottom: 2 }}>My Notes</Text>
                <TouchableOpacity style={{}}>
                    <Text style={{ fontSize: SIZES.fifteen + 1, color: COLORS.primary }}>Add Notes +</Text>
                </TouchableOpacity>
            </View>

            <View style={{ paddingHorizontal: SIZES.twenty }}>
                <View style={styles.separator} />
                <FlatList
                    data={notesData}
                    renderItem={renderItem}
                />
            </View>

        </ScrollView>

    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    coverImg: {
        width: width,
        borderBottomWidth: 4,
        borderColor: COLORS.primary,
        bottom: SIZES.twentyFive,
    },
    img: {
        width: height * .18,
        height: height * .18,
        borderRadius: SIZES.fifty * 3,
        borderWidth: 2,
        borderColor: COLORS.primary,
        alignSelf: "center",
        backgroundColor: "red",
        top: SIZES.fifty + SIZES.five
    },
    header: {
        marginTop: SIZES.twentyFive * 1.5,
        top: SIZES.twenty,
        marginHorizontal: SIZES.fifteen
    },
    notesHeading: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        paddingHorizontal: SIZES.twenty,
        top: SIZES.twenty
    },
    separator: {
        borderBottomWidth: 2,
        borderColor: COLORS.primary,
        padding: SIZES.fifteen,
        marginBottom: SIZES.ten
    },
    userInfoView: {
        marginTop: height * .05,
        alignItems: "center",
    },
    text: {
        marginTop: SIZES.ten,
        fontWeight: "500",
        color: COLORS.gray
    },
    editBtn: {
        color: COLORS.primary,
        textDecorationLine: "underline",
        fontWeight: "700",
        paddingTop: SIZES.ten
    }
})