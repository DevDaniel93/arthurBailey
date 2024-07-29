import { Dimensions, StyleSheet } from "react-native";

export const { width, height } = Dimensions.get("window");
/* * Colors * */
export const COLORS = {
    defaultTextColor: "#000000",
    defaultBtnColor: "#ffffff",
    lightBackground: "#ffffff",
    darkBackground: "#000000",
    primary: "#004961",
    secondary: "#D8DFEB",
    purple: "#4e1789",
    lightPurple: "#871af6",
    darkPurple: "#382649",
    purpleShade: "#3c225d",
    textGrey: "#8a7e9a",
    textColor: "#B46BFF",
    brownGray: "#5d536a",
    black: "#000000",
    white: "#ffffff",
    blue: "#0037c1",
    gray: "#767577",
    star: "#FFD700",
    golden: "#FF8A00",
    trueGreen: "#1eaf08",
    halfWhite: "#eeeeee",
    charcoalGrey: "#4a4b4d",
    veryLightpink: "#ffeef2",
    transparent: "transparent",
    pink: "#d323a0",
    red: "#CA0000",
    cyan: '#21D4B4',
    lightGray: '#C0C0C0',
    backgroundGray: "#EFEFEF",
    yellowTxt: "#FFBF00",
};

export const getTheme = (theme) => {
    return theme === 'Light' ? LightTheme : DarkTheme;
};
const appTheme = { COLORS };

export default appTheme;

/* * Fonts * */
export const FONTFAMILY = {
    Bold: "Montserrat-Bold",
    Light: "Montserrat-Light",
    Medium: "Montserrat-Medium",
    Regular: "Montserrat-Regular",

    Ionicons: "Ionicons",
    AntDesign: "AntDesign",
    EvilIcons: "EvilIcons",
    Entypo: "Entypo",
    FontAwesome: "FontAwesome",
    Feather: "Feather",
    MaterialIcons: "MaterialIcons",
    MaterialCommunityIcons: "MaterialCommunityIcons",
    Octicons: "Octicons",
    SimpleLineIcons: "SimpleLineIcons",
    Fontisto: "Fontisto",
    BebasNeue: "BebasNeue",
    Poppins: 'Poppins',
    JostRegular: 'Jost-Regular',
    CenturyGothic: "Century-Gothic",
    RakkasRegular: "Rakkas-Regular",
    QwitcherGrypenBold: "QwitcherGrypen-Bold",
    QwitcherGrypenRegular: "QwitcherGrypen-Regular",
    BebasNeueRegular: "BebasNeue-Regular",
    RalewayThin: 'Raleway-Thin',
    RalewaySemiBold: 'Raleway-SemiBold',
    RalewayRegular: "Raleway-Regular",
    RalewayMedium: 'Raleway-Medium',
    RalewayLight: "Raleway-Light",
    RalewayHeavy: 'Raleway-Heavy',
    RalewayExtraLight: "Raleway-ExtraLight",
    RalewayBold: "Raleway-Bold",
    RalewayExtraBold: 'Raleway-ExtraBold',
    RakkasRegular: "Rakkas-Regular"

};

/* * Images * */
export const IMAGES = {
    icon: require("../assets/images/icon.png"),
    logo: require("../assets/images/logo.png"),
    logoWithBlackFont: require("../assets/images/logoWithBlackFont.png"),
    pattern: require("../assets/images/pattern.png"),
    logoBg: require("../assets/images/logoBg.png"),
    avatar: require("../assets/images/avatar.png"),
    user: require("../assets/images/user.png"),
    ProductImage: require("../assets/images/ProductImage.png"),
    CardBg: require("../assets/images/cardBg.png"),
    lockBg: require("../assets/images/lockBg.png"),
    lock: require("../assets/images/lock.png"),
    profileBg: require("../assets/images/profileBg.png"),
    starIcon: require("../assets/images/starIcon.png"),
    userIcon: require("../assets/images/userIcon.png"),
    bookIcon: require("../assets/images/bookIcon.png"),
    libraybgCard: require("../assets/images/libraybgCard.png"),
    invoiceBG: require("../assets/images/invoiceBG.png"),

};

/* * Screens * */
export const SCREENS = {

    Home: "Home",
    LoginAndSignUp: "LoginAndSignUp",
    ResetPassword: "ResetPassword",
    ContactUs: "ContactUs",
    TermsAndConditions: "TermsAndConditions",
    Profile: "Profile",
    EditProfile: "EditProfile",
    Drawer: "Drawer",
    library: "library",
    SavedBooks: "SavedBooks",
    MyInvoices: 'MyInvoices',
    Aboutus: 'Aboutus',
    BookDetail: "BookDetail",
    CheckOut: "CheckOut",
    MyCart: "MyCart",
    AudioPlayer: "AudioPlayer",
    ChapterList: "ChapterList",
    Chapter: "Chapter"



};

export const SIZES = {
    // global sizes
    five: height * 0.0055,
    ten: height * 0.011,
    fifteen: height * 0.017,
    twenty: height * 0.023,
    twentyWidth: width * 0.05,
    twentyFive: height * 0.03,
    twentyFiveWidth: width * 0.08,
    fifty: height * 0.075,
    fiftyWidth: width * 0.13,

    // font sizes
    h16: width * 0.034,
    h18: width * 0.038,
    h20: width * 0.042,
    h22: width * 0.048,
    h24: width * 0.055,
    body08: width * 0.024,
    body10: width * 0.028,
    body12: width * 0.032,
    body14: width * 0.036,
    body16: width * 0.04,
    body18: width * 0.045,
};

export const FONTS = {
    boldFont16: {
        fontFamily: FONTFAMILY.Bold,
        fontSize: SIZES.h16,
        color: COLORS.defaultTextColor,
    },
    boldFont18: {
        fontFamily: FONTFAMILY.Bold,
        fontSize: SIZES.h18,
        color: COLORS.defaultTextColor,
    },
    boldFont20: {
        fontFamily: FONTFAMILY.Bold,
        fontSize: SIZES.h20,
        color: COLORS.defaultTextColor,
    },
    boldFont22: {
        fontFamily: FONTFAMILY.Bold,
        fontSize: SIZES.h22,
        color: COLORS.defaultTextColor,
    },
    boldFont24: {
        fontFamily: FONTFAMILY.Bold,
        fontSize: SIZES.h24,
        color: COLORS.defaultTextColor,
    },
    semiBoldFont16: {
        fontFamily: FONTFAMILY.SemiBold,
        fontSize: SIZES.h16,
        color: COLORS.defaultTextColor,
    },
    semiBoldFont18: {
        fontFamily: FONTFAMILY.SemiBold,
        fontSize: SIZES.h18,
        color: COLORS.defaultTextColor,
    },
    semiBoldFont20: {
        fontFamily: FONTFAMILY.SemiBold,
        fontSize: SIZES.h20,
        color: COLORS.defaultTextColor,
    },
    semiBoldFont22: {
        fontFamily: FONTFAMILY.SemiBold,
        fontSize: SIZES.h22,
        color: COLORS.defaultTextColor,
    },
    semiBoldFont24: {
        fontFamily: FONTFAMILY.SemiBold,
        fontSize: SIZES.h24,
        color: COLORS.defaultTextColor,
    },
    mediumFont10: { fontFamily: FONTFAMILY.Medium, fontSize: SIZES.body10 },
    mediumFont12: { fontFamily: FONTFAMILY.Medium, fontSize: SIZES.body12 },
    mediumFont14: { fontFamily: FONTFAMILY.Medium, fontSize: SIZES.body14 },
    mediumFont16: { fontFamily: FONTFAMILY.Medium, fontSize: SIZES.body16 },
    mediumFont18: { fontFamily: FONTFAMILY.Medium, fontSize: SIZES.body18 },
    regularFont10: { fontFamily: FONTFAMILY.Regular, fontSize: SIZES.body10 },
    regularFont12: { fontFamily: FONTFAMILY.Regular, fontSize: SIZES.body12 },
    regularFont14: { fontFamily: FONTFAMILY.Regular, fontSize: SIZES.body14 },
    regularFont16: { fontFamily: FONTFAMILY.Regular, fontSize: SIZES.body16 },
    regularFont18: { fontFamily: FONTFAMILY.Regular, fontSize: SIZES.body18 },
    lightFont08: { fontFamily: FONTFAMILY.Light, fontSize: SIZES.body08 },
    lightFont10: { fontFamily: FONTFAMILY.Light, fontSize: SIZES.body10 },
    lightFont12: { fontFamily: FONTFAMILY.Light, fontSize: SIZES.body12 },
    lightFont14: { fontFamily: FONTFAMILY.Light, fontSize: SIZES.body14 },
    lightFont16: { fontFamily: FONTFAMILY.Light, fontSize: SIZES.body16 },
    lightFont18: { fontFamily: FONTFAMILY.Light, fontSize: SIZES.body18 },
};

export const STYLES = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: SIZES.fifteen,
        paddingTop: SIZES.twenty * 1.5,
        backgroundColor: COLORS.white
        // marginTop: 20

    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9,
    }

});

export const CONSTANTS = {


    API_URLS: {

        BASE: "https://custom3.mystagingserver.site/digi-cart-app/wp-json",
        LOGIN: "/api/login",
        REGISTER: "/api/register",
        FORGOT_PASSWORD: "/api/forgot_password",
        VERIFY_OTP: "/api/otp_verification",
        RESET_PASSWORD: "/api/reset_password",


    },


};