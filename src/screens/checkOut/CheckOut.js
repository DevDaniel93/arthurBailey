import { FlatList, Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { COLORS, FONTFAMILY, height, SCREENS, SIZES, STYLES, width } from '../../constants'
import HeaderWithArrow from '../../components/HeaderWithArrow'
import EditText from '../../components/EditText'
import PhoneTextInput from '../../components/PhoneTextInput'
import CustomDropDownPicker from '../../components/CustomDropDownPicker'
import countries from './countries'
import cardValidator from 'card-validator'
import CustomButton from '../../components/CustomButton'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCart, selectTotalAmount } from '../../redux/slices/Cart'
import CustomModal from '../../components/CustomModal'
import { Icon, IconType } from '../../components'
export default function CheckOut(props) {
    const { navigation } = props
    const [phone, setPhone] = useState('');
    const [countryCode, setCountryCode] = useState('+1');
    const [flag, setFlag] = useState('US');
    const [stateList, setStateList] = useState([])
    const [state, setState] = useState('');
    const [cardNoAuth, setCardNoAuth] = useState('');
    const cart = useSelector(state => state.Cart.cart)
    const totalAmount = useSelector(selectTotalAmount);
    const [Error, setError] = useState('');
    const [expiryAuth, setExpiryAuth] = useState('');
    const [cvcAuth, setCvcAuth] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const dispatch = useDispatch()
    const handleState = () => {
        try {
            const filter = countries.filter((item) => item.code === flag)
            setStateList(filter[0]?.states)
        } catch (error) {

        }
    }
    const validateCardNumber = (number) => {
        let sum = 0;
        let shouldDouble = false;

        // Start from the rightmost digit and move left
        for (let i = number.length - 1; i >= 0; i--) {
            let digit = parseInt(number.charAt(i), 10);

            if (shouldDouble) {
                digit *= 2;
                if (digit > 9) {
                    digit -= 9; // Subtract 9 from numbers greater than 9
                }
            }

            sum += digit;
            shouldDouble = !shouldDouble; // Alternate between doubling and not doubling
        }

        return (sum % 10 === 0); // Valid if the sum is divisible by 10
    };
    const handleCardNumberChange = (text) => {
        // Format the credit card number
        const formattedText = text.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim();
        setCardNoAuth(formattedText);

        // Remove spaces for validation
        const cardNumber = formattedText.replace(/\s/g, '');

        // Validate card number using Luhn algorithm
        const isValid = validateCardNumber(cardNumber);

        if (!isValid) {
            setError('InvalidCardNumber');
        } else {
            setError('');
        }
    };
    // ================================handle Card Exipre date============================
    const handleExpiryChange = (text) => {
        const formattedText = text.replace(/^(\d{2})(\d{2})$/, '$1/$2');
        setExpiryAuth(formattedText);
    };
    // ================================handle Card CVV ============================

    const handleCvvChange = (text) => {
        setCvcAuth(text);
    };
    useEffect(() => {
        handleState()

    }, [state, flag]);
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
                            style={[styles.productText, { color: COLORS.gray, }]}>
                            ({item?.type})
                        </Text>


                        <Text style={[styles.productText, { color: COLORS.black, }]}>
                            Price: $ {item?.price}
                        </Text>

                    </View>
                </View>

            </View>

        )
    }
    return (

        <ScrollView
            showsVerticalScrollIndicator={false}
            style={STYLES.container}>
            <HeaderWithArrow label={"Check out"} />
            <FlatList
                data={cart}
                keyExtractor={item => item.id}
                renderItem={CartItem}
            />
            <Text style={styles.Heading}>
                Personal Information
            </Text>
            <EditText
                inputArea={{ backgroundColor: COLORS.white }}
                label={"Full Name"}
                placeholder={"Enter Full name"} />
            <PhoneTextInput phone={phone}
                setFlag={setFlag}
                setPhone={setPhone}
                setCountryCode={setCountryCode} />
            <CustomDropDownPicker
                label={'State'}
                list={stateList.map(state => ({ label: state.name, value: state.code }))}
                // list={stateList}
                required
                value={state}
                width={"100%"}
                placeholder={'Select State'}
                zIndex={1000}
                onChangeValue={setState}
            />
            <EditText
                inputArea={{ backgroundColor: COLORS.white }}
                label={"City"}
                placeholder={"Enter Full name"} />
            <EditText
                inputArea={{ backgroundColor: COLORS.white }}
                label={"Street Address *"}
                placeholder={"Enter Full name"} />
            <EditText
                inputArea={{ backgroundColor: COLORS.white }}
                label={"Postal Code *"}
                placeholder={"Enter Full name"} />
            <Text style={styles.Heading}>
                Credit Card Details*
            </Text>
            <EditText
                inputArea={{ backgroundColor: COLORS.white }}
                label={'CardNumber'}
                required
                placeholder={'CardNumber'}
                value={cardNoAuth}
                onChangeText={handleCardNumberChange}

                keyboardType="numeric"
                maxLength={19}
            />
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <EditText
                    styleTxtArea={{ width: width * .43 }}
                    inputArea={{ backgroundColor: COLORS.white, }}
                    label={'Expiration'}
                    placeholder={'MMYY'}
                    keyboardType="numeric"
                    value={expiryAuth}
                    onChangeText={handleExpiryChange}
                    maxLength={5}
                />
                <EditText
                    styleTxtArea={{ width: width * .43 }}
                    inputArea={{ backgroundColor: COLORS.white }}
                    required
                    label={'CVV'}
                    placeholder={'CVV'}
                    keyboardType="numeric"
                    value={cvcAuth}
                    onChangeText={handleCvvChange}
                    maxLength={3}
                />
            </View>


            <CustomButton
                label={"Confirm"}
                onPress={() => {
                    setIsVisible(!isVisible)
                }}
            />
            <CustomModal isvisible={isVisible}
                modalStyle={{
                    padding: 0,
                }}
            >

                <View style={{ height: height / 3, backgroundColor: COLORS.white, padding: SIZES.twentyFive, justifyContent: "center", }}>


                    <Text style={styles.ModalHeading}>
                        Thank You
                    </Text>
                    <Text style={styles.Modalcontent}>
                        For choosing us. Your order is successfully placed, you will soon receive confirmation mail from us.
                    </Text>
                    <CustomButton
                        label={"Continue"}
                        onPress={() => {
                            dispatch(emptyCart())
                            setIsVisible(false)
                            navigation.navigate(SCREENS.Drawer)
                        }}
                    />

                </View>
            </CustomModal>

            <View style={{ height: height * .05 }} />

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    Heading: {
        color: COLORS.primary,
        fontSize: SIZES.twenty,
        fontFamily: FONTFAMILY.Poppins,
        fontWeight: Platform.OS === "ios" ? "600" : "bold",
        borderBottomWidth: 2,
        borderColor: COLORS.lightGray,
        paddingVertical: SIZES.ten,

    },
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
    ModalHeading: {
        fontFamily: FONTFAMILY.QwitcherGrypenBold,
        fontSize: SIZES.fifty,
        color: COLORS.black,
        textAlign: "center"
    },
    Modalcontent: {
        fontFamily: FONTFAMILY.JostRegular,
        fontSize: SIZES.fifteen,
        color: COLORS.black,
        textAlign: "center",
        marginVertical: SIZES.ten

    },

})