import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS, SCREENS } from "../constants";
import Home from "../screens/Home";



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
                initialRouteName={SCREENS.Home}
            >
                <Stack.Screen name={SCREENS.Home} component={Home} />

            </Stack.Navigator>


        </NavigationContainer>
    );
}
