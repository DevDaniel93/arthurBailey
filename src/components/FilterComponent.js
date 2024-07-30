import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Slider from '@react-native-community/slider';
import CheckBox from 'react-native-check-box';
import { COLORS, SIZES } from '../constants';

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

const FilterComponent = () => {
    const [priceRange, setPriceRange] = useState(150);
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleCategoryChange = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter(item => item !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.heading}>Filter & Categories</Text>
            <Text style={[styles.subHeading, { color: COLORS.black, textAlign: "center" }]}>Price Range</Text>
            <Slider
                style={styles.slider}
                minimumValue={150}
                maximumValue={5000}
                step={50}
                value={priceRange}
                onValueChange={value => setPriceRange(value)}
                minimumTrackTintColor="#1fb28a"
                maximumTrackTintColor="#d3d3d3"
                thumbTintColor="#b9e4c9"

            />
            <View style={styles.priceLabels}>
                <Text>{150}</Text>
                <Text>{5000}</Text>
            </View>
            <Text style={styles.subHeading}>Categories</Text>
            {categories.map(category => (
                <View key={category.value} style={styles.categoryContainer}>
                    <Text style={styles.categoryLabel}>{category.label}</Text>
                    <CheckBox

                        isChecked={selectedCategories.includes(category.value)}
                        onClick={() => handleCategoryChange(category.value)}
                    />
                </View>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: COLORS.white,
        position: "absolute"
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
        marginVertical: 5,
        justifyContent: "space-between"
    },
    categoryLabel: {
        fontSize: SIZES.fifteen * 1.2,
        marginLeft: 10,
        color: COLORS.black
    },
});

export default FilterComponent;
