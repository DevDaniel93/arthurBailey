import React, { useState, useImperativeHandle, forwardRef } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Slider from '@react-native-community/slider';
import CheckBox from 'react-native-check-box';
import { COLORS, height, SIZES, width } from '../constants';
import Animated, {
    useAnimatedGestureHandler,
    useSharedValue,
    useAnimatedStyle,
    withSpring,
} from 'react-native-reanimated';
import { PanGestureHandler } from 'react-native-gesture-handler';

const categories = [
    { label: 'Best Seller', value: 'bestSeller' },
    { label: 'Most Sold', value: 'mostSold' },
    { label: 'Thriller', value: 'thriller' },
    { label: 'Sci-fi', value: 'sciFi' },
    { label: 'Mystery', value: 'mystery' },
    { label: 'History', value: 'history' },
    { label: 'Short Stories', value: 'shortStories' },
    { label: 'Romance', value: 'romance' },
    { label: 'Biography', value: 'biography' },
    { label: 'Crime', value: 'crime' },
    { label: 'Social Science', value: 'socialScience' },
    { label: 'Horror', value: 'horror' },
    { label: 'Poetry', value: 'poetry' },
];

const SCREEN_WIDTH = width * 1;
const DRAWER_WIDTH = width * .6;


const FilterComponent = forwardRef((props, ref) => {
    const [priceRange, setPriceRange] = useState(150);
    const [selectedCategories, setSelectedCategories] = useState([]);

    useImperativeHandle(ref, () => ({
        openDrawer,
    }));
    const handleCategoryChange = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter(item => item !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };
    const translateX = useSharedValue(SCREEN_WIDTH);

    const gestureHandler = useAnimatedGestureHandler({
        onStart: (_, ctx) => {
            ctx.startX = translateX.value;
        },
        onActive: (event, ctx) => {
            translateX.value = ctx.startX + event.translationX;
            if (translateX.value < SCREEN_WIDTH - DRAWER_WIDTH) {
                translateX.value = SCREEN_WIDTH - DRAWER_WIDTH;
            } else if (translateX.value > SCREEN_WIDTH) {
                translateX.value = SCREEN_WIDTH;
            }
        },
        onEnd: (_) => {
            if (translateX.value < SCREEN_WIDTH - DRAWER_WIDTH / 2) {
                translateX.value = withSpring(SCREEN_WIDTH - DRAWER_WIDTH);
            } else {
                translateX.value = withSpring(SCREEN_WIDTH);
            }
        },
    });

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: translateX.value }],
        };
    });

    const openDrawer = () => {
        translateX.value = withSpring(SCREEN_WIDTH - DRAWER_WIDTH);
    };

    return (
        <PanGestureHandler onGestureEvent={gestureHandler}>
            <Animated.View style={[styles.drawer, animatedStyle]}>
                <ScrollView style={styles.container}>
                    <Text style={styles.heading}>Filter & Categories</Text>
                    <Text style={[styles.subHeading, { color: COLORS.black, textAlign: "center" }]}>Price Range</Text>
                    <Slider
                        style={styles.slider}
                        minimumValue={150}
                        maximumValue={5000}
                        step={100}
                        value={priceRange}
                        onValueChange={value => setPriceRange(value)}
                        minimumTrackTintColor="#1fb28a"
                        maximumTrackTintColor={COLORS.primary}
                        thumbTintColor={COLORS.primary}

                    />
                    <View style={styles.priceLabels}>
                        <Text style={{ color: COLORS.black }}>{priceRange}</Text>
                        <Text style={{ color: COLORS.black }}>{5000}</Text>
                    </View>
                    <Text style={styles.subHeading}>Categories</Text>
                    {categories.map(category => (
                        <View key={category.value} style={styles.categoryContainer}>
                            <Text style={styles.categoryLabel}>{category.label}</Text>
                            <CheckBox
                                checkBoxColor={COLORS.primary}
                                isChecked={selectedCategories.includes(category.value)}
                                onClick={() => handleCategoryChange(category.value)}
                            />
                        </View>
                    ))}
                </ScrollView>
            </Animated.View>
        </PanGestureHandler>
    );
});

const styles = StyleSheet.create({
    drawer: {
        flex: 1,
        height: height,
        position: 'absolute',
        top: 0,
        bottom: 0,
        // right: 0,
        width: DRAWER_WIDTH,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        padding: 20,
        zIndex: 1000,

    },
    container: {
        flex: 1,
        padding: 20,
        right: 0,
        width: DRAWER_WIDTH,
        marginRight: SIZES.twentyFive,
        // margin: SIZES.twenty,
        backgroundColor: COLORS.white,
        // borderWidth: 1,
        position: "absolute",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
    },
    heading: {
        fontSize: SIZES.twenty,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: "center",
        color: COLORS.primary
    },
    subHeading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 10,
        color: COLORS.primary
    },
    slider: {
        width: '100%',
        height: 40,
    },
    priceLabels: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    categoryContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: SIZES.ten,
        justifyContent: "space-between"
    },
    categoryLabel: {
        fontSize: SIZES.fifteen * 1.2,
        marginLeft: 10,
        color: COLORS.black
    },
});

export default FilterComponent;
