import { Image, ImageBackground, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef } from 'react'
import CustomHeader from '../../components/CustomHeader'
import { COLORS, FONTFAMILY, height, IMAGES, SCREENS, SIZES, STYLES, width } from '../../constants'
import SearchFilter from '../../components/SearchFilter'
import { Icon, IconType } from '../../components'

import FilterComponent from '../../components/FilterComponent'


export default function MyBooks(props) {
    const filterRef = useRef();

    const handleOpenDrawer = () => {
        filterRef.current?.openDrawer();
    };

    const { navigation } = props
    const StarRating = ({ rating, maxRating = 5 }) => {
        // Validate the rating
        const validRating = Math.min(Math.max(rating, 0), maxRating);

        return (
            <View style={styles.container}>
                {Array.from({ length: maxRating }).map((_, index) => (
                    <Icon
                        key={index}
                        name='star'
                        type={IconType.MaterialCommunityIcons}
                        color={index < validRating ? COLORS.white : COLORS.gray}
                        size={SIZES.twenty}
                        containerStyle={styles.star}
                    />
                ))}
            </View>
        );
    };
    const LibraryCard = () => {
        return (
            <View style={{ marginTop: SIZES.twenty, flexDirection: "row", alignItems: "center" }}>
                <Image
                    source={IMAGES.libraybgCard}
                    style={styles.card}
                />

                <Image
                    source={{ uri: "https://marketplace.canva.com/EAFaQMYuZbo/1/0/1003w/canva-brown-rusty-mystery-novel-book-cover-hG1QhA7BiBU.jpg" }}
                    style={styles.img}
                />
                <View style={styles.content}>
                    <Text numberOfLines={1} style={styles.heading}>
                        how to Overcome devil kjbaks asjkbjd asjd  ajs
                    </Text>
                    <Text numberOfLines={1} style={styles.Subheading}>
                        By Arthur Bailey
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate(SCREENS.ChapterList)
                        }}
                    >
                        <Text numberOfLines={1} style={[styles.heading, { textDecorationLine: "underline" }]}>
                            View Detail
                        </Text>
                    </TouchableOpacity>
                    {/* <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity style={styles.addToCart}>
                            <Text style={{ color: COLORS.black }}>
                                Add to Cart
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{ marginLeft: SIZES.ten }}
                        >
                            <Icon
                                name={"bookmark-alt"}
                                type={IconType.Fontisto}
                                color={COLORS.white}
                                size={SIZES.twentyFive}

                            />
                        </TouchableOpacity>
                    </View> */}

                </View>
                <StarRating rating={4} />

            </View>
        )
    }
    return (
        <ScrollView style={[STYLES.container, { paddingBottom: SIZES.fifty }]}>


            <FilterComponent ref={filterRef} />

            <CustomHeader label={"My Books"} />
            <View style={{ flexDirection: "row", alignItems: "center", width: "85%" }}>
                <SearchFilter />

                <TouchableOpacity
                    onPress={handleOpenDrawer}
                    style={styles.icon}>
                    <Icon
                        name={"filter"}
                        type={IconType.AntDesign}
                        color={COLORS.white}
                        size={SIZES.twenty}
                    />
                </TouchableOpacity>
            </View>
            <LibraryCard />
            <LibraryCard />
            <LibraryCard />
            <LibraryCard />
            <LibraryCard />
            <LibraryCard />
            <View style={{ height: height * .05 }} />
        </ScrollView >
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
        width: width * .93,
        height: height * .15,

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
        height: height * .13,
        padding: SIZES.five,
        justifyContent: 'space-around',

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
    addToCart: {
        backgroundColor: COLORS.white,
        paddingVertical: SIZES.five,
        paddingHorizontal: SIZES.twentyFive,
        borderRadius: SIZES.twenty
    },

})