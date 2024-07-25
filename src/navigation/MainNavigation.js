import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { COLORS, SCREENS } from "../constants";
import Home from "../screens/Home";
import LoginAndSignUp from "../screens/auth/LoginAndSignUp";
import ResetPassword from "../screens/auth/ResetPassword";
import ContactUs from "../screens/contactUs/ContactUs";
import TermsAndConditions from "../screens/content/TermsAndConditions";
import Profile from "../screens/profile/Profile";
import EditProfile from "../screens/profile/EditProfile";



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
                <Stack.Screen name={SCREENS.Home} component={Home} />
                <Stack.Screen name={SCREENS.LoginAndSignUp} component={LoginAndSignUp} />
                <Stack.Screen name={SCREENS.ResetPassword} component={ResetPassword} />
                <Stack.Screen name={SCREENS.ContactUs} component={ContactUs} />
                <Stack.Screen name={SCREENS.TermsAndConditions} component={TermsAndConditions} />
                <Stack.Screen name={SCREENS.Profile} component={Profile} />
                <Stack.Screen name={SCREENS.EditProfile} component={EditProfile} />

            </Stack.Navigator>


        </NavigationContainer>
    );
}
