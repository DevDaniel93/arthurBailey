import { View, Text } from 'react-native';
import React from 'react';
import CustomDrawer from './CustomDrawer';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../../screens/home/Home';
import { SCREENS } from '../../constants';
import Library from '../../screens/library/Library';
import SavedBooks from '../../screens/SavedBooks/SavedBooks';
import MyInvoices from '../../screens/MyInvoices/MyInvoices';
import Profile from '../../screens/profile/Profile';
import AboutUs from '../../screens/content/AboutUs';
import ContactUs from '../../screens/contactUs/ContactUs';
import TermsAndConditions from '../../screens/content/TermsAndConditions';


const Drawer = createDrawerNavigator();
export default function DrawerNavigator() {
    return (

        <Drawer.Navigator drawerContent={(props) => <CustomDrawer{...props} />}>
            <Drawer.Screen name={SCREENS.Home} component={Home} options={{ headerShown: false, headerTitle: '' }} />
            <Drawer.Screen name={SCREENS.library} component={Library} options={{ headerShown: false, headerTitle: '' }} />
            <Drawer.Screen name={SCREENS.SavedBooks} component={SavedBooks} options={{ headerShown: false, headerTitle: '' }} />
            <Drawer.Screen name={SCREENS.MyInvoices} component={MyInvoices} options={{ headerShown: false, headerTitle: '' }} />
            <Drawer.Screen name={SCREENS.Profile} component={Profile} options={{ headerShown: false, headerTitle: '' }} />
            <Drawer.Screen name={SCREENS.Aboutus} component={AboutUs} options={{ headerShown: false, headerTitle: '' }} />
            <Drawer.Screen name={SCREENS.ContactUs} component={ContactUs} options={{ headerShown: false, headerTitle: '' }} />
            <Drawer.Screen name={SCREENS.TermsAndConditions} component={TermsAndConditions} options={{ headerShown: false, headerTitle: '' }} />

        </Drawer.Navigator>
    )
}