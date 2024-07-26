import { FlatList, Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { COLORS, FONTFAMILY, height, SCREENS, SIZES, STYLES, width } from '../../constants'
import HeaderWithArrow from '../../components/HeaderWithArrow'
import { useDispatch, useSelector } from 'react-redux'
import { removeCartItem, selectTotalAmount } from '../../redux/slices/Cart'
import { Icon, IconType } from '../../components'
import CustomButton from '../../components/CustomButton'
import CustomModal from '../../components/CustomModal'
import LottieView from 'lottie-react-native'

export default function MyCart(props) {
    const { navigation } = props
    const cart = useSelector(state => state.Cart.cart)
    const totalAmount = useSelector(selectTotalAmount);
    const dispatch = useDispatch()
    const [isvisible, setIsvisible] = useState(false)
    const [selectCartid, setSelectCardId] = useState()
    const CartItem = ({ item }) => {
        return (
            <View style={styles.CartItemRow}>
                <View style={{ flexDirection: "row" }}>
                    <Image source={{ uri: item?.image }} style={[styles.img, STYLES.shadow]} />
                    <View style={{ justifyContent: "space-between", margin: SIZES.ten, marginVertical: SIZES.twenty }}>
                        <Text numberOfLines={2}
                            style={[styles.productText, { color: COLORS.black, }]}>
                            {item?.title}
                        </Text>
                        <Text numberOfLines={2}
                            style={[styles.productText, { color: COLORS.black, fontWeight: "400" }]}>
                            ({item?.type})
                        </Text>


                        <Text style={[styles.productText, { color: COLORS.primary, }]}>
                            Price: $ {item?.price}
                        </Text>

                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        setIsvisible(!isvisible)
                        setSelectCardId(item?.id)
                    }}
                    style={{ backgroundColor: COLORS.primary, justifyContent: "center", paddingHorizontal: SIZES.ten, borderRadius: SIZES.ten }}>
                    <Icon
                        name="trash-outline"
                        type={IconType.Ionicons}
                        color={COLORS.white}
                    />
                </TouchableOpacity>
            </View>

        )
    }
    return (
        <ScrollView style={STYLES.container}>
            <HeaderWithArrow label={"My Cart"} />

            <View >
                <FlatList
                    data={cart}
                    keyExtractor={item => item.id}
                    renderItem={CartItem}
                />
                {/* =======================================delete Modal========================== */}
                <CustomModal isvisible={isvisible}>
                    <Text style={[styles.modelText, { color: COLORS.defaultTextColor, }]}>
                        Are you sure you want to delete this item
                    </Text>
                    <LottieView
                        style={styles.lottie}
                        autoPlay={true}
                        loop={true}
                        source={{ uri: "https://lottie.host/cad44c0a-42df-41d3-b2a7-0315b6755a1d/4hxYp1Ue6b.json" }}
                    />
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <CustomButton btnStyle={[styles.btnStyle, { backgroundColor: COLORS.Background }]}
                            txtstyle={{ color: COLORS.primary }}
                            onPress={() => {
                                dispatch(removeCartItem(selectCartid));

                                setIsvisible(!isvisible)
                            }}
                            label={'Yes'}
                        />
                        <CustomButton btnStyle={styles.btnStyle1}
                            label={'No'}
                            onPress={() => {
                                setIsvisible(!isvisible)
                            }}
                        />
                    </View>
                </CustomModal>
            </View>

            <TouchableOpacity
                onPress={() => {
                    navigation.navigate(SCREENS.CheckOut)
                }}
                style={styles.checkoutBtn}>
                <Text style={styles.checkOutText}>
                    Checkout
                </Text>
                <Text style={styles.checkOutText}>
                    ${totalAmount}
                </Text>
            </TouchableOpacity>
            <View style={{ height: height * .08 }} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    CartItemRow: {
        flexDirection: "row",
        paddingVertical: SIZES.ten,
        borderBottomWidth: 1,
        justifyContent: "space-between"
    },
    img: {
        width: width * .22,
        height: height * .14,

        borderRadius: SIZES.five,
        resizeMode: "contain"
    },
    productText: {
        fontSize: SIZES.twenty - 3,
        width: width * .55,
        fontFamily: FONTFAMILY.Poppins,
        fontWeight: Platform.OS === "ios" ? "600" : "bold",
    },
    btnStyle: {
        width: "48%",
        backgroundColor: COLORS.white,
        borderWidth: 1,
        borderColor: COLORS.primary,
        padding: SIZES.ten

    },
    btnStyle1: {
        padding: SIZES.ten,
        width: "48%"
    },
    lottie: {
        width: SIZES.fifty * 3,
        height: SIZES.fifty * 3,
        alignSelf: "center"
    },
    checkoutBtn: {
        marginVertical: SIZES.ten,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: COLORS.primary,
        padding: SIZES.fifteen,
        borderRadius: SIZES.five,
    },
    checkOutText: {
        color: COLORS.white,
        fontSize: SIZES.twenty
    }
})