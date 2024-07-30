import { Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CustomHeader from '../../components/CustomHeader'
import { COLORS, FONTFAMILY, height, IMAGES, SIZES, STYLES, width } from '../../constants'
import { Icon, IconType } from '../../components'

export default function MyInvoices() {
    const InvoiceCard = () => {
        return (
            <View style={{ marginTop: SIZES.twenty, flexDirection: "row", alignItems: "center" }}>
                <Image
                    source={IMAGES.invoiceBG}
                    style={styles.card}
                />

                <Image
                    source={{ uri: "https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg" }}
                    style={styles.img}
                />
                <View style={styles.content}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>

                        <Text numberOfLines={1} style={styles.heading}>
                            Lorem Ipsum
                        </Text>
                        <TouchableOpacity style={styles.btn}>
                            <Icon
                                type={IconType.Octicons}
                                name={"download"}
                                color={COLORS.red}
                                size={SIZES.twenty}
                            />

                        </TouchableOpacity>
                    </View>
                    <Text numberOfLines={1} style={styles.Subheading}>
                        Date: 18/4/2024
                    </Text>
                    <Text numberOfLines={1} style={styles.Subheading}>
                        Price: $56
                    </Text>
                    <Text numberOfLines={1} style={styles.Subheading}>
                        Book Type: E-Book & Audio Book
                    </Text>
                    <Text numberOfLines={1} style={styles.Subheading}>
                        Payment Method: Paypal
                    </Text>


                </View>


            </View>
        )
    }
    return (
        <ScrollView
            style={[STYLES.container,]}
            showsVerticalScrollIndicator={false}
        >
            <CustomHeader label={"Invoices"} />
            <InvoiceCard />
            <InvoiceCard />
            <InvoiceCard />
            <View style={{ height: height * .05 }} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    card: {
        width: "100%",
        height: height * .18,
        // backgroundColor: "red",
        position: "absolute",
        resizeMode: "stretch"

    },
    img: {
        resizeMode: "contain",
        height: height * .2,
        width: width * .3,
        marginLeft: SIZES.ten
    },
    content: {
        height: height * .15,
        padding: SIZES.five,
        justifyContent: "space-between",

    },
    heading: {
        width: width * .4,
        color: COLORS.white,
        fontWeight: Platform.OS === "ios" ? "600" : "bold",
        fontSize: SIZES.fifteen,
        fontFamily: FONTFAMILY.Poppins
    },
    Subheading: {
        width: width * .5,
        color: COLORS.white,
        fontSize: SIZES.fifteen - 2,
        fontFamily: FONTFAMILY.Poppins
    },
    btn: {
        backgroundColor: COLORS.white,
        width: SIZES.twentyFive * 1.2,
        height: SIZES.twentyFive * 1.2,
        borderRadius: SIZES.fifty,
        justifyContent: "center",
        alignItems: "center"
    }
})