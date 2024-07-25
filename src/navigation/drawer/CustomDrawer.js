
// import React, { useState, useEffect } from 'react';
// import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Switch } from 'react-native';
// import { DrawerContentScrollView } from '@react-navigation/drawer';
// import { DrawerActions, useNavigation } from '@react-navigation/native';
// import { useDispatch, useSelector } from 'react-redux';

// import { COLORS, FONTFAMILY, SCREENS, SIZES } from '../../constants';
// import { Menu } from '../../constants/DrawerMenu';
// import { Icon, IconType } from '../../components';
// import CustomHeader from '../../components/CustomHeader';
// import CustomModal from '../../components/CustomModal';
// import LottieView from 'lottie-react-native';
// import CustomButton from '../../components/CustomButton';
// import { getTheme } from '../../constants/theme';
// import { toggleTheme } from '../../redux/slices/theme';
// import { useTranslation } from 'react-i18next';
// import { DeleteAccount, removeProfile } from '../../redux/slices/auth';

// const CustomDrawer = (props) => {
//     const navigation = useNavigation();
//     const { t, i18n } = useTranslation();
//     const theme = useSelector(state => state.Theme.theme);
//     const user = useSelector(state => state.Auth.user);
//     const currentTheme = getTheme(theme);
//     const dispatch = useDispatch();
//     const [isvisible, setIsvisible] = useState(false);
//     const [isvisibleDeleteModal, setIsvisibleDeleteModal] = useState(false);
//     const [selectedMenu, setSelectedMenu] = useState([]);
//     const [isvisibleLanguageModal, setIsvisibleLanguageModal] = useState(false);
//     const [isEnabled, setIsEnabled] = useState(false);

//     const toggleSwitch = () => {
//         if (theme === 'Light') {
//             dispatch(toggleTheme("Dark"));
//         } else {
//             dispatch(toggleTheme("Light"));
//         }
//         setIsEnabled(previousState => !previousState);
//     }

//     useEffect(() => {
//         if (theme === "Dark") {
//             setIsEnabled(true);
//         }
//     }, [theme]);
//     useEffect(() => {
//         if (user === null) {
//             const filterMenu = Menu.slice(0, 9)
//             setSelectedMenu(filterMenu);
//         }
//         else {
//             setSelectedMenu(Menu);
//         }
//     }, [user]);


//     const handleDeleteAccount = async () => {
//         try {
//             setIsvisibleDeleteModal(false); // Close the modal
//             const formData = new FormData()
//             formData.append("user_id", user?.user_id)

//             dispatch(DeleteAccount(formData));
//             navigation.dispatch(DrawerActions.closeDrawer()); // Close the drawer explicitly
//             navigation.reset({
//                 index: 0,
//                 routes: [{ name: SCREENS.Login }], // Reset navigation state
//             });
//         } catch (e) {
//             console.error(e);
//         }
//     };
//     const handleLogout = async () => {
//         try {
//             setIsvisible(false); // Close the modal
//             dispatch(removeProfile());
//             navigation.dispatch(DrawerActions.closeDrawer()); // Close the drawer explicitly
//             navigation.reset({
//                 index: 0,
//                 routes: [{ name: SCREENS.Login }], // Reset navigation state
//             });
//         } catch (e) {
//             console.error(e);
//         }
//     };

//     const handleNavigation = (route) => {
//         navigation.dispatch(DrawerActions.closeDrawer()); // Close the drawer before navigating
//         if (route === "logout") {
//             setIsvisible(!isvisible);
//         } else if (route === "Delete_Account") {
//             setIsvisibleDeleteModal(!isvisible);
//         } else if (route === SCREENS.profile) {
//             navigation.navigate(user !== null ? route : SCREENS.Login);
//         } else if (route === "language") {
//             setIsvisibleLanguageModal(!isvisibleLanguageModal);
//         } else {
//             navigation.navigate(route);
//         }
//     };

//     const getTranslatedMenu = () => {
//         return selectedMenu.map((item) => ({
//             ...item,
//             label: t(item.labelKey)
//         }));
//     };

//     const translatedMenu = getTranslatedMenu();

//     return (
//         <DrawerContentScrollView {...props} contentContainerStyle={[styles.container, { backgroundColor: currentTheme.Background }]}>
//             <View style={{ marginHorizontal: SIZES.fifteen }}>
//                 <CustomHeader />
//                 <View style={[styles.line, { borderColor: currentTheme.defaultTextColor }]} />

//                 <ScrollView>
//                     {translatedMenu.map((item) => (
//                         <TouchableOpacity
//                             key={item.route}
//                             style={styles.drawerItem}
//                             onPress={() => handleNavigation(item.route)}
//                         >
//                             <Icon name={item.icon} type={item.type} style={styles.Icon} />
//                             <Text style={{ color: currentTheme.defaultTextColor, fontSize: SIZES.fifteen + 2, fontWeight: '600', fontFamily: 'Poppins-Regular' }}>
//                                 {item.label}
//                             </Text>
//                         </TouchableOpacity>
//                     ))}
//                 </ScrollView>

//                 {/* Language Selection Modal */}
//                 <CustomModal isvisible={isvisibleLanguageModal}>
//                     <Text style={[styles.modelText, { color: currentTheme.defaultTextColor }]}>
//                         Select <Text style={{ color: COLORS.primary }}>Language</Text>
//                     </Text>
//                     <TouchableOpacity
//                         style={[styles.languageContainer, { borderColor: currentTheme.primary }]}
//                         onPress={() => {
//                             i18n.changeLanguage("en");
//                             setIsvisibleLanguageModal(!isvisibleLanguageModal);
//                         }}
//                     >
//                         <Text style={{ color: currentTheme.defaultTextColor, fontSize: SIZES.fifteen }}>English</Text>
//                     </TouchableOpacity>
//                     <TouchableOpacity
//                         style={[styles.languageContainer, { borderColor: currentTheme.primary }]}
//                         onPress={() => {
//                             i18n.changeLanguage("fr");
//                             setIsvisibleLanguageModal(!isvisibleLanguageModal);
//                         }}
//                     >
//                         <Text style={{ color: currentTheme.defaultTextColor, fontSize: SIZES.fifteen }}>French</Text>
//                     </TouchableOpacity>
//                 </CustomModal>

//                 {/* Logout Confirmation Modal */}
//                 <CustomModal isvisible={isvisible}>
//                     <Text style={[styles.modelText, { color: currentTheme.defaultTextColor }]}>
//                         {t('Are you sure you want to')} <Text style={{ color: COLORS.primary }}>{t('logout')}?</Text>
//                     </Text>
//                     <LottieView
//                         style={styles.lottie}
//                         autoPlay={true}
//                         loop={true}
//                         source={{ uri: "https://lottie.host/a8f4bc1d-03fa-470e-a682-8b4b459891c0/eJWI4xDtOG.json" }}
//                     />
//                     <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
//                         <CustomButton
//                             btnStyle={[styles.btnStyle, { backgroundColor: currentTheme.Background }]}
//                             txtstyle={{ color: COLORS.primary }}
//                             onPress={handleLogout}
//                             label={t('Yes')}
//                         />
//                         <CustomButton
//                             btnStyle={styles.btnStyle1}
//                             label={t('No')}
//                             onPress={() => setIsvisible(!isvisible)}
//                         />
//                     </View>
//                 </CustomModal>
//                 {/* Delete Account Confirmation Modal */}
//                 <CustomModal isvisible={isvisibleDeleteModal}>
//                     <Text style={[styles.modelText, { color: currentTheme.defaultTextColor }]}>
//                         {t('Are you sure you want to')} <Text style={{ color: COLORS.primary, fontWeight: "600" }}>{t('Delete Account')}?</Text>
//                     </Text>
//                     <LottieView
//                         style={styles.lottie}
//                         autoPlay={true}
//                         loop={true}
//                         source={{ uri: "https://lottie.host/7c1e5e1a-f4a8-4dbf-8ab4-9dc72b5f973c/e5AR6z4eBW.json" }}
//                     />
//                     <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
//                         <CustomButton
//                             btnStyle={[styles.btnStyle, { backgroundColor: currentTheme.Background }]}
//                             txtstyle={{ color: COLORS.primary }}
//                             onPress={handleDeleteAccount}
//                             label={t('Yes')}
//                         />
//                         <CustomButton
//                             btnStyle={styles.btnStyle1}
//                             label={t('No')}
//                             onPress={() => setIsvisibleDeleteModal(!isvisibleDeleteModal)}
//                         />
//                     </View>
//                 </CustomModal>

//                 <View style={{ flexDirection: "row", marginTop: SIZES.twentyFive, alignItems: "center" }}>
//                     <Text style={[styles.toggleText, { color: currentTheme.defaultTextColor }]}>
//                         {theme} mode
//                     </Text>
//                     <Switch
//                         trackColor={{ false: '#767577', true: currentTheme.gray }}
//                         thumbColor={isEnabled ? currentTheme.primary : '#f4f3f4'}
//                         ios_backgroundColor="#3e3e3e"
//                         onValueChange={toggleSwitch}
//                         value={isEnabled}
//                     />
//                 </View>
//             </View>
//         </DrawerContentScrollView>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'space-between',
//     },
//     line: {
//         borderWidth: 1,
//         borderColor: COLORS.black,
//     },
//     drawerItem: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         fontFamily: 'Poppins',
//         marginTop: SIZES.twentyFive,
//     },
//     Icon: {
//         color: COLORS.primary,
//         fontSize: SIZES.twentyFive,
//         fontWeight: "700",
//         paddingRight: SIZES.fifteen,
//     },
//     btnStyle: {
//         width: "48%",
//         borderWidth: 1,
//         borderColor: COLORS.primary,
//         padding: SIZES.ten,
//     },
//     btnStyle1: {
//         padding: SIZES.ten,
//         width: "48%",
//     },
//     modelText: {
//         color: COLORS.defaultTextColor,
//         fontSize: SIZES.fifteen + 2,
//         textAlign: "center",
//         lineHeight: 30,
//         fontWeight: "500",
//         fontFamily: FONTFAMILY.Poppins,
//     },
//     lottie: {
//         width: SIZES.fifty * 3,
//         height: SIZES.fifty * 3,
//         alignSelf: "center",
//     },
//     toggleText: {
//         fontSize: SIZES.twenty - 2,
//         marginRight: SIZES.ten,
//         fontWeight: "600",
//         fontFamily: FONTFAMILY.Poppins,
//     },
//     languageContainer: {
//         borderWidth: 1,
//         padding: SIZES.ten,
//         borderRadius: SIZES.ten,
//         marginTop: SIZES.ten,
//     },
// });

// export default CustomDrawer;

import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, FlatList } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';



import { useNavigation } from '@react-navigation/native';

import { useDispatch, useSelector } from 'react-redux';
import { COLORS, FONTFAMILY, height, SCREENS, SIZES } from '../../constants/theme';
import { Icon, IconType } from '../../components';
import { Menu } from '../../constants/DrawerMenu';


export default CustomDrawer = (props) => {
    const navigation = useNavigation();
    const dispatch = useDispatch()

    const [userData, setUserData] = useState(null);
    const [seletedItem, setSeletedItem] = useState(null);


    const Option = ({ item }) => {

        return (
            <TouchableOpacity style={[styles.drawerItem, { backgroundColor: seletedItem === item?.labelKey ? COLORS.primary : COLORS.white }]}
                onPress={() => {
                    setSeletedItem(item?.labelKey)
                    if (item?.labelKey === "Sign out") {

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
        backgroundColor: COLORS.black + 50, // Adjust the opacity as needed
    },
    drawerHeader: {
        backgroundColor: COLORS.primary + 50,
        height: height * .25,
        resizeMode: "cover",
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: SIZES.ten,
    },
    userProfile: {
        flexDirection: 'row',
        alignItems: 'center',
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
    Icon: {
        color: "#FF3836",
        fontSize: 20,
        fontWeight: "700",
        paddingRight: 10,
    },
    drawerIcon: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "700",
        paddingRight: 10,
    },
    item: {
        fontFamily: FONTFAMILY.Poppins,
        fontSize: SIZES.twenty - 2,
        fontWeight: "400"
    }
});
