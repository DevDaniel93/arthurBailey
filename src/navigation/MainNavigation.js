import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { COLORS, SCREENS } from "../constants";
import Home from "../screens/home/Home";
import LoginAndSignUp from "../screens/auth/LoginAndSignUp";
import ResetPassword from "../screens/auth/ResetPassword";
import ContactUs from "../screens/contactUs/ContactUs";
import TermsAndConditions from "../screens/content/TermsAndConditions";
import Profile from "../screens/profile/Profile";
import EditProfile from "../screens/profile/EditProfile";
import DrawerNavigator from "./drawer/DrawerNav";
import BookDetail from "../screens/book/BookDetail";
import CheckOut from "../screens/checkOut/CheckOut";
import MyCart from "../screens/checkOut/MyCart";
import AudioPlay from "../screens/playList/AudioPlay";
import ChapterList from "../screens/SavedBooks/ChapterList";
import Chapters from "../screens/SavedBooks/Chapters";



const Stack = createNativeStackNavigator();


export default function MainNavigation() {


    const screenOptions = {
        headerShown: false,
        animation: "slide_from_right",
        headerStyle: {
            color: COLORS.white
            // backgroundColor: '#121212',
        },
    };



    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={screenOptions}
                initialRouteName={SCREENS.LoginAndSignUp}
            >
                <Stack.Screen name={SCREENS.Drawer} component={DrawerNavigator} />
                <Stack.Screen name={SCREENS.LoginAndSignUp} component={LoginAndSignUp} />
                <Stack.Screen name={SCREENS.ResetPassword} component={ResetPassword} />
                <Stack.Screen name={SCREENS.EditProfile} component={EditProfile} />
                <Stack.Screen name={SCREENS.BookDetail} component={BookDetail} />
                <Stack.Screen name={SCREENS.CheckOut} component={CheckOut} />
                <Stack.Screen name={SCREENS.MyCart} component={MyCart} />
                <Stack.Screen name={SCREENS.AudioPlayer} component={AudioPlay} />
                <Stack.Screen name={SCREENS.ChapterList} component={ChapterList} />
                <Stack.Screen name={SCREENS.Chapter} component={Chapters} />

            </Stack.Navigator>


        </NavigationContainer>
    );
}
