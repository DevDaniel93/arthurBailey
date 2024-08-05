
import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, FlatList, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { COLORS, FONTFAMILY, height, IMAGES, SCREENS, SIZES, width } from '../../constants/theme';
import { Icon, IconType } from '../../components';
import { Menu } from '../../constants/DrawerMenu';
import CustomModal from '../../components/CustomModal';
import CustomButton from '../../components/CustomButton';


export default CustomDrawer = (props) => {
    const navigation = useNavigation();
    const dispatch = useDispatch()

    const [userData, setUserData] = useState(null);
    const [signOutModal, setSignOutModal] = useState(false);
    const [seletedItem, setSeletedItem] = useState(null);


    const Option = ({ item }) => {

        return (
            <TouchableOpacity style={[styles.drawerItem, { backgroundColor: seletedItem === item?.labelKey ? COLORS.primary : COLORS.white }]}
                onPress={() => {
                    setSeletedItem(item?.labelKey)
                    if (item?.labelKey === "Sign out") {
                        setSignOutModal(!signOutModal)
                    }
                    else {
                        navigation.navigate(item?.route)
                    }
                }}
            >
                <Icon
                    name={item?.icon}
                    type={item?.type}
                    style={{ marginRight: SIZES.ten }}
                    color={seletedItem === item?.labelKey ? COLORS.white : COLORS.primary}
                />
                <Text style={[styles.item, { color: seletedItem === item?.labelKey ? COLORS.white : COLORS.primary }]}>
                    {item?.labelKey}</Text>
            </TouchableOpacity>

        )
    }


    return (
        <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
            <View style={styles.drawerItems}>
                <ImageBackground
                    source={{ uri: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTogYGn-QLnFxkpzAqLMQwY0hvZs4GdpOxl1g&s` }}
                    style={styles.drawerHeader}>

                    <View style={styles.overlay} />

                    <View style={styles.userProfileInfo}>
                        <Text style={styles.userName}>Taimoor</Text>
                        <Text style={styles.userEmail}>Taimoor@yopmail.com</Text>
                    </View>
                </ImageBackground>
                <FlatList
                    data={Menu}
                    keyExtractor={item => item?.type}
                    renderItem={Option}
                />

            </View>
            <CustomModal
                isvisible={signOutModal}
                modalStyle={{ backgroundColor: COLORS.white }}
            >
                <View>
                    <Image source={IMAGES.logoWithBlackFont} style={styles.img} />
                    <Text style={styles.text}>
                        Are you sure you want to Sign out?
                    </Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <CustomButton
                            onPress={() => {
                                navigation.navigate(SCREENS.LoginAndSignUp)
                                setSignOutModal(!signOutModal)
                            }}
                            btnStyle={styles?.btnStyle}
                            label={"yes"}
                        />
                        <CustomButton
                            onPress={() => {
                                setSignOutModal(!signOutModal)
                            }}
                            txtstyle={{ color: COLORS.primary }}
                            btnStyle={[styles?.btnStyle, { backgroundColor: COLORS.white }]}
                            label={"No"}
                        />
                    </View>


                </View>
            </CustomModal>

        </DrawerContentScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'column',
        paddingTop: 0,
        borderRightWidth: 5,
        borderColor: COLORS.primary,
        backgroundColor: COLORS.lightBackground,

    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: COLORS.black + 50,
    },
    drawerHeader: {
        backgroundColor: COLORS.primary + 50,
        height: height * .25,
        resizeMode: "cover",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: SIZES.ten,
    },


    userProfileInfo: {
        marginLeft: 10,
    },
    userName: {
        textAlign: "center",
        color: COLORS.white,
        fontSize: SIZES.twenty,
        fontFamily: FONTFAMILY.Poppins,
        fontWeight: '700',
        textTransform: "capitalize",
        marginBottom: 5,
    },
    userEmail: {
        textAlign: "center",
        color: COLORS.white,
        fontSize: SIZES.fifteen,
        fontFamily: FONTFAMILY.Poppins,
    },
    drawerItems: {
        justifyContent: 'flex-start'
    },

    drawerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: SIZES.ten,
        padding: SIZES.fifteen,
        backgroundColor: "red",
        marginRight: SIZES.twenty,
        borderTopRightRadius: SIZES.five,
        borderBottomRightRadius: SIZES.five
    }
    ,
    text: {
        color: COLORS.black,
        fontSize: SIZES.twenty,
        textAlign: "center",
        marginVertical: SIZES.ten,
        fontFamily: FONTFAMILY.Poppins
    }
    ,
    item: {
        fontFamily: FONTFAMILY.Poppins,
        fontSize: SIZES.twenty - 2,
        fontWeight: "400"
    },
    btnStyle: {
        width: width * .38,
        borderColor: COLORS.primary,
        borderWidth: 1
    },
    img: {
        alignSelf: "center",
        width: width * .5,
        height: width * .2,
        resizeMode: "contain"
    }
});
