
import React, { useState, useEffect } from 'react'
import { Alert, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View, Platform } from 'react-native'
import { Icon, IconType } from '../../components'
import CustomButton from '../../components/CustomButton'
import CustomModal from '../../components/CustomModal'
import HeaderWithArrow from '../../components/HeaderWithArrow'
import { COLORS, FONTFAMILY, height, IMAGES, SCREENS, SIZES, width } from '../../constants'
import { useDispatch, useSelector } from 'react-redux'
import { addCart } from '../../redux/slices/Cart'
import { ErrorAlert, SuccessAlert } from '../../utils/utils'
import VideoPlayer from 'react-native-video-controls'
import CheckBox from 'react-native-check-box';

export default function BookDetail(props) {
    const { navigation, route } = props
    const { data } = route?.params
    const dispatch = useDispatch()
    const [isVisible, setIsVisible] = useState(false)
    const [addToCartModal, setAddToCartModal] = useState(false)
    const [selectedOption, setSelectedOptions] = useState([]);




    const addToCart = async () => {
        try {
            if (selectedOption?.length > 0) {
                if (selectedOption.includes("E-book")) {
                    const cartItem =
                    {
                        id: data?.id,
                        title: data?.title,
                        image: data?.image,
                        type: "E-book",
                        price: data?.price,
                        arthur: data?.arthur,
                        rating: data?.rating,
                        pages: data?.pages,
                        readers: data?.readers,
                        description: data?.description
                    }


                    dispatch(addCart(cartItem))

                }
                if (selectedOption.includes("audio")) {
                    const cartItem =
                    {
                        id: data?.id,
                        title: data?.title,
                        image: data?.image,
                        type: "audio",
                        price: data?.price,
                        arthur: data?.arthur,
                        rating: data?.rating,
                        pages: data?.pages,
                        readers: data?.readers,
                        description: data?.description
                    }
                    dispatch(addCart(cartItem))

                }
                SuccessAlert("Add to cart successfully")
                navigation.goBack()
                setAddToCartModal(!addToCartModal)
            }
            else {
                ErrorAlert("Please select a Book type")
            }



            // dispatch(addCart(data))

        } catch (error) {
            console.log("error", error)
        }
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

    const CartOption = ({ type }) => {
        return (
            <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", }}>
                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                        <Image source={{ uri: data?.image }}
                            resizeMode="cover"
                            style={type !== "audio" ? {
                                width: SIZES.fifty,
                                height: SIZES.fifty * 1.3
                            } : {
                                width: SIZES.fifty,
                                height: SIZES.fifty,
                                borderRadius: SIZES.fifty
                            }} />
                        {
                            type === "audio" &&
                            <View style={styles.cdDot} />
                        }

                    </View>
                    <View style={{ padding: SIZES.ten, width: width * .55, }}>
                        <Text numberOfLines={1} style={{ marginBottom: SIZES.ten, fontSize: SIZES.fifteen * 1.1, color: COLORS.black, fontWeight: "600" }}>
                            {data?.title}
                        </Text>
                        <Text style={{ fontSize: SIZES.fifteen * 1.1, color: COLORS.black, fontWeight: "600" }}>
                            Price:  {data?.price}
                        </Text>
                    </View>
                </View>
                <View style={{ alignItems: "flex-end" }}>
                    <CheckBox
                        checkBoxColor={COLORS.primary}
                        isChecked={selectedOption.includes(type)}
                        onClick={() => handleCartOption(type)}
                    />
                </View>



            </View>
        )
    }

    const handleCartOption = (Option) => {
        if (selectedOption.includes(Option)) {
            setSelectedOptions(selectedOption.filter(item => item !== Option));
        } else {
            setSelectedOptions([...selectedOption, Option]);
        }
    }
    return (
        <ScrollView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <ImageBackground
                blurRadius={8}
                source={{ uri: data?.image }}
                style={styles.imageCover}
            >
                <HeaderWithArrow IconStyle={{ backgroundColor: COLORS.white, opacity: 0.6 }} iconColor={COLORS.black} />
                <View style={{ flexDirection: "row", marginTop: SIZES.twenty }}>
                    <Image
                        style={styles.book}
                        source={{ uri: data?.image }}
                    />
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 1, width: "100%", justifyContent: "center", alignItems: "center" }}>
                            <Option image={IMAGES.starIcon} value={data?.rating} label={"Rating"} />
                            <Option image={IMAGES.bookIcon} value={data?.pages} label={"Pages"} />
                            <Option image={IMAGES.userIcon} value={data?.readers} label={"Readers"} />
                        </View>
                        <View style={[styles.heartIcon, { backgroundColor: COLORS.black + 30 }]}>
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
                <Image
                    source={IMAGES.bookCoverBottom}
                    style={{ width: width, height: height * .14, position: "absolute", bottom: -10, }}
                    resizeMode="stretch"
                />
            </ImageBackground>
            <View style={{ flex: 1, padding: SIZES.fifteen, backgroundColor: COLORS.white }}>
                <Text style={styles.heading}>
                    {data?.title}
                </Text>
                <Text style={styles.Subheading}>
                    By {data?.arthur} {" "}
                    <Text
                        style={{
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
                    {data?.description}
                </Text>
                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                    <CustomButton
                        onPress={() => setAddToCartModal(!addToCartModal)}
                        label={"Add to Cart"}
                        btnStyle={{ width: width * .35 }} />
                    <CustomButton
                        label={"Watch Trailer"}
                        btnStyle={styles.btn} txtstyle={styles.btnTxt}
                        iconLeft={{ name: "caretright", type: IconType.AntDesign, color: COLORS.white, size: SIZES.twenty, style: styles.trailerIcon }}
                        onPress={() => setIsVisible(true)}
                    />
                    <TouchableOpacity
                        onPress={() => navigation.navigate(SCREENS.AudioPlayer, { cdImage: data?.image, bookTitle: data?.title })}
                        style={{
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
            {/* =======================Video player modal========================== */}
            <CustomModal isvisible={isVisible}
                modalStyle={{
                    padding: 0,
                }}
            >
                <View style={{ height: height / 3, }}>
                    <TouchableOpacity
                        onPress={() => setIsVisible(false)}
                        style={{
                            position: "absolute",
                            left: SIZES.ten,
                            top: SIZES.ten,
                            zIndex: 1000
                        }}>
                        <Icon
                            name={"cross"}
                            type={IconType.Entypo}
                            color={COLORS.white}
                        />
                    </TouchableOpacity>
                    <VideoPlayer
                        source={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
                        disableBack={true}
                        disableFullscreen={true}
                    />
                </View>
            </CustomModal>
            {/* =======================Add to cart modal========================== */}
            <CustomModal isvisible={addToCartModal}
                modalStyle={{
                    // padding: 0,
                    backgroundColor: COLORS.white
                }}
            >
                <View>
                    <TouchableOpacity
                        onPress={() => setAddToCartModal(false)}
                        style={{
                            position: "absolute",
                            left: SIZES.ten,
                            zIndex: 1000

                        }}>
                        <Icon
                            name={"cross"}
                            type={IconType.Entypo}
                            color={COLORS.black}
                        />
                    </TouchableOpacity>

                    <Text style={styles.cartHeader}>
                        Book Format
                    </Text>
                    <View style={{ paddingVertical: SIZES.twenty }} >
                        <CartOption type={"E-book"} />
                        <View style={{ borderWidth: 1, marginVertical: SIZES.fifteen, borderColor: COLORS.primary }} />
                        <CartOption type={"audio"} />
                        <CustomButton
                            onPress={() => {
                                addToCart()
                            }}
                            btnStyle={{ marginTop: SIZES.twenty }}
                            label={"Confirm"}
                        />
                    </View>


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
        zIndex: 1000,
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
        zIndex: 1000,
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
    },
    content: {
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
    cartHeader: {
        color: COLORS.black,
        fontFamily: FONTFAMILY.Poppins,
        fontSize: SIZES.fifteen * 1.2,
        fontWeight: "bold",
        textAlign: "center"

    },
    cdDot: {
        width: SIZES.twenty,
        height: SIZES.twenty,
        borderRadius: SIZES.twentyFive,
        backgroundColor: COLORS.white,
        position: "absolute",
        zIndex: 1000
    }
})
