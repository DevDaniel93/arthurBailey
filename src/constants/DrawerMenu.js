import { IconType } from "../components";
import ContactUs from "../screens/contactUs/ContactUs";
import AboutUs from "../screens/content/AboutUs";
import TermsAndConditions from "../screens/content/TermsAndConditions";
import Home from "../screens/home/Home";
import Library from "../screens/MyBooks/MyBooks";
import MyInvoices from "../screens/MyInvoices/MyInvoices";
import Profile from "../screens/profile/Profile";
import SavedBooks from "../screens/SavedBooks/SavedBooks";
import { SCREENS } from "./theme";


export const Menu = [
    { route: SCREENS.Home, labelKey: 'Home', type: IconType.AntDesign, icon: 'home', component: Home, },
    { route: SCREENS.library, labelKey: 'Library', type: IconType.Ionicons, icon: 'library-outline', component: Library, },
    { route: SCREENS.SavedBooks, labelKey: 'Saved Books', type: IconType.Feather, icon: 'bookmark', component: SavedBooks, },
    { route: SCREENS.MyInvoices, labelKey: 'My Invoices', type: IconType.FontAwesome5, icon: 'file-invoice', component: MyInvoices, },
    { route: SCREENS.Profile, labelKey: 'My Profile', type: IconType.FontAwesome, icon: 'user-circle-o', component: Profile, },
    { route: SCREENS.Aboutus, labelKey: 'About us', type: IconType.AntDesign, icon: 'infocirlceo', component: AboutUs, },
    { route: SCREENS.ContactUs, labelKey: 'Contact us', type: IconType.AntDesign, icon: 'contacts', component: ContactUs, },
    { route: SCREENS.TermsAndConditions, labelKey: 'Terms & Conditions', type: IconType.AntDesign, icon: 'exception1', component: TermsAndConditions, },
    { route: 'Signout', labelKey: 'Sign out', type: IconType.Octicons, icon: 'sign-in', component: Home, },
];