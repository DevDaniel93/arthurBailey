import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import CustomHeader from '../../components/CustomHeader'
import { COLORS, height, IMAGES, SIZES, STYLES, width } from '../../constants'
import SearchFilter from '../../components/SearchFilter'
import { Icon, IconType } from '../../components'

export default function Library() {
    return (
        <ScrollView style={STYLES.container}>
            <CustomHeader label={"Library"} />
            <View style={{ flexDirection: "row", alignItems: "center", width: "85%" }}>
                <SearchFilter />
                <TouchableOpacity
                    style={styles.icon}>
                    <Icon
                        name={"filter"}
                        type={IconType.AntDesign}
                        color={COLORS.white}
                        size={SIZES.twenty}
                    />
                </TouchableOpacity>
            </View>
            <View style={{ justifyContent: "center", marginTop: SIZES.twenty }}>
                <Image
                    source={IMAGES.libraybgCard}
                    style={styles.card}
                    resizeMode="cover"
                />

                {/* </ImageBackground> */}
                <Image
                    source={{ uri: "https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg" }}
                    style={styles.img}

                />
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    icon: {
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.fifty,
        width: SIZES.fifty * .7,
        height: SIZES.fifty * .7,
        justifyContent: "center",
        alignItems: "center"
    },
    card: {
        width: "100%",
        height: height * .13,
        position: "absolute",

    },
    img: {
        resizeMode: "contain",
        height: height * .2,
        width: width * .3,
        marginLeft: SIZES.fifteen
    }
})