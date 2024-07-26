import React, { useRef, useState } from 'react'
import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon, IconType } from '../../components'
import CustomButton from '../../components/CustomButton'
import CustomModal from '../../components/CustomModal'
import HeaderWithArrow from '../../components/HeaderWithArrow'
import { COLORS, FONTFAMILY, height, IMAGES, SCREENS, SIZES, width } from '../../constants'
import Video from 'react-native-video'

export default function BookDetail(props) {
    const { navigation, route } = props
    const [isVisible, setIsVisible] = useState(false)
    const videoRef = useRef(null);
    const background = { uri: 'https://www.dailymotion.com/video/x92n340' };

    const onBuffer = () => {

    }
    const onError = () => {

    }



    const Option = ({ image, value, label }) => {
        return (
            <View style={{ flexDirection: "row", alignItems: "flex-end", marginTop: SIZES.ten }}>
                <Image source={image} style={{ width: SIZES.twentyFive, height: SIZES.twentyFive }} />
                <Text style={{ fontSize: SIZES.twenty, fontWeight: "bold", color: COLORS.white, marginHorizontal: SIZES.five }}>
                    {value}
                </Text>
                <Text style={{ color: COLORS.white, fontSize: SIZES.fifteen }}>
                    {label}
                </Text>
            </View>
        )
    }

    return (
        <ScrollView style={{ flex: 1 }}>
            <ImageBackground
                blurRadius={8}
                source={{ uri: "https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg" }}
                style={styles.imageCover}
            >
                <HeaderWithArrow IconStyle={{ backgroundColor: COLORS.white, opacity: 0.6 }} iconColor={COLORS.black} />
                <View style={{ flexDirection: "row", marginTop: SIZES.twenty, }}>
                    <Image
                        style={styles.book}
                        source={{ uri: "https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg" }}
                    />
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 1, width: "100%", justifyContent: "center", alignItems: "center" }}>
                            <Option image={IMAGES.starIcon} value={"4.7"} label={"Rating"} />
                            <Option image={IMAGES.bookIcon} value={"132"} label={"Pages"} />
                            <Option image={IMAGES.userIcon} value={"320"} label={"Readers"} />
                        </View>
                        <View style={styles.heartIcon}>
                            <TouchableOpacity
                                style={styles.backIcon}>
                                <Icon
                                    name={"heart"}
                                    color={COLORS.red}
                                    type={IconType.AntDesign}
                                    size={SIZES.twenty}

                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
            <View style={{ flex: 1, padding: SIZES.fifteen }}>
                <Text style={styles.heading}>
                    Genesis Commentary: Part 1
                </Text>
                <Text style={styles.Subheading}>
                    By Arthur Bailey {" "}
                    <Text
                        onPress={() => navigation.navigate(SCREENS.Aboutus)} style={{
                            textDecorationLine: "underline",
                            fontWeight: Platform.OS === "ios" ? "600" : "bold",
                            color: COLORS.primary
                        }}>
                        About Author
                    </Text>
                </Text>
                <Text style={styles.heading}>
                    Description
                </Text>
                <Text style={styles.content}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <CustomButton
                        label={"Add to Cart"}
                        btnStyle={{ width: width * .35 }} />
                    <CustomButton
                        label={"Watch Trailer"}
                        btnStyle={styles.btn} txtstyle={styles.btnTxt}
                        iconLeft={{ name: "caretright", type: IconType.AntDesign, color: COLORS.white, size: SIZES.twenty, style: styles.trailerIcon }}
                        onPress={() => setIsVisible(true)}
                    />
                    <TouchableOpacity style={{
                        width: SIZES.fifty * .7,
                        height: SIZES.fifty * .7,
                        borderWidth: 2,
                        borderColor: COLORS.primary,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: SIZES.fifty
                    }}>
                        <Icon
                            name={"headphones"}
                            type={IconType.Feather}
                            color={COLORS.primary}
                            size={SIZES.twentyFive}
                        />
                    </TouchableOpacity>
                </View>

            </View>
            <CustomModal isvisible={isVisible} modalStyle={{ background: "red" }}>
                <View style={{ height: height / 3, backgroundColor: "pink" }}>

                    <Video
                        // Can be a URL or a local file.
                        source={background}
                        // Store reference  
                        ref={videoRef}
                        // Callback when remote video is buffering                                      
                        onBuffer={onBuffer}
                        // Callback when video cannot be loaded              
                        onError={onError}
                        style={styles.backgroundVideo}
                    />
                </View>
            </CustomModal>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    imageCover: {
        padding: SIZES.twenty,
        width: width,
        height: height * .5,
        resizeMode: "cover"
    },
    backIcon: {
        backgroundColor: COLORS.white,
        borderRadius: SIZES.twenty,
        width: SIZES.fifty * .5,
        height: SIZES.fifty * .5,
        justifyContent: "center",
        alignItems: "center"
    },
    book: {
        resizeMode: "cover",
        width: width * .5,
        height: height * .38,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    heartIcon: {
        backgroundColor: "#F1F1F1" + 90,
        position: "absolute",
        bottom: 0,
        right: -SIZES.twenty,
        paddingRight: SIZES.twentyFive * 1.5,
        padding: SIZES.ten,
        borderTopLeftRadius: SIZES.twentyFive,
        borderBottomLeftRadius: SIZES.twentyFive
    },
    heading: {
        color: COLORS.black,
        fontSize: SIZES.twenty,
        fontWeight: Platform.OS === "ios" ? "600" : "bold",
        marginBottom: SIZES.five,
        fontFamily: FONTFAMILY.Poppins
    },
    Subheading: {
        color: COLORS.black,
        fontSize: SIZES.fifteen + 3,
        marginBottom: SIZES.ten,
        fontFamily: FONTFAMILY.Poppins,
        letterSpacing: 2
    }, content: {
        color: COLORS.black,
        fontSize: SIZES.fifteen,
        lineHeight: 22,
        fontFamily: FONTFAMILY.Poppins
    },
    btn: {
        backgroundColor: COLORS.white,
        borderWidth: 2,
        width: width * .35,
        borderColor: COLORS.primary

    },
    btnTxt: {
        color: COLORS.primary,
        left: SIZES.twentyWidth
    },
    trailerIcon: {
        backgroundColor: COLORS.black,
        width: 30,
        height: 30
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },

})