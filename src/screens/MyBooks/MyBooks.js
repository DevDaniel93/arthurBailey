import { FlatList, Image, ImageBackground, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import CustomHeader from '../../components/CustomHeader'
import { COLORS, CONSTANTS, FONTFAMILY, height, IMAGES, SCREENS, SIZES, STYLES, width } from '../../constants'
import SearchFilter from '../../components/SearchFilter'
import { Icon, IconType } from '../../components'
import FilterModal from '../../components/FilterModal'
import { myBooks } from '../../redux/slices/Books'
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../components/Loading'


export default function MyBooks(props) {
    const token = useSelector((state) => state?.Auth?.token)
    const dispatch = useDispatch()
    const [search, setSearch] = useState('')
    const [data, setData] = useState([])
    const [filterProducts, setFilterProducts] = useState(data)
    const [loading, setLoading] = useState(false)
    console.log(filterProducts)
    const getMyBooks = async () => {
        try {
            setLoading(true)
            const response = await dispatch(myBooks(token))
            console.log(response?.data)
            setData(response?.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        getMyBooks()
    }, [])
    const filterProductsBySearch = (searchText) => {
        if (searchText !== "") {
            const filtered = data.filter(data =>
                data?.title.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilterProducts(filtered);
        } else {
            setFilterProducts(data);
        }
    }
    useEffect(() => {
        filterProductsBySearch(search);
    }, [search, data]);

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
    const LibraryCard = ({ item }) => {
        console.log({ item })
        return (
            <View style={{ marginTop: SIZES.twenty, flexDirection: "row", alignItems: "center" }}>
                <Image
                    source={IMAGES.libraybgCard}
                    style={styles.card}
                />

                <Image
                    source={{ uri: CONSTANTS.API_URLS.IMAGE_BASE + item?.cover }}
                    style={styles.img}
                />
                <View style={styles.content}>
                    <Text numberOfLines={1} style={styles.heading}>
                        {item?.title}
                    </Text>
                    <Text numberOfLines={1} style={styles.Subheading}>
                        By {item?.author}
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate(SCREENS.ChapterList, { id: item?.id })
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
                <StarRating rating={item?.rating} />

            </View>
        )
    }
    const onReset = () => {

    }
    const onApply = (products) => {

    };
    const onCancel = () => {
        if (modal.current) {
            modal.current.close();
        }
    };

    const modal = React.useRef(null);
    return (
        <View style={{ flex: 1 }}>
            <Loading loading={loading} />

            <ScrollView style={[STYLES.container, { paddingBottom: SIZES.fifty }]}>
                <CustomHeader label={"My Books"} />
                <View style={{ flexDirection: "row", alignItems: "center", width: "85%" }}>
                    <SearchFilter
                        value={search}
                        onChangeText={(e) => {
                            setSearch(e);
                        }}
                    />

                    <TouchableOpacity

                        onPress={() => {
                            if (modal.current) {
                                modal.current.open();
                            }
                        }}
                        style={styles.icon}>
                        <Icon
                            name={"filter"}
                            type={IconType.AntDesign}
                            color={COLORS.white}
                            size={SIZES.twenty}
                        />
                    </TouchableOpacity>
                </View>
                <FlatList
                    style={{ marginBottom: SIZES.fifty }}
                    data={filterProducts}
                    keyExtractor={item => item.toString()}

                    renderItem={LibraryCard}
                />

                <View style={{ height: height * .05 }} />
            </ScrollView >
            <FilterModal modalizeRef={modal} onApply={onApply} onResetAll={onReset} onCancel={onCancel} />
        </View>
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