import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Slider from 'react-native-slider';
import { useDispatch } from 'react-redux';
import { Modalize } from 'react-native-modalize';
import { COLORS, FONTS, height, SIZES } from '../constants';
import Icon, { IconType } from './Icons';
import CustomButton from './CustomButton';
import CheckBox from 'react-native-check-box';




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


export default function FilterModal(props) {
    const { modalizeRef, onApply, onCancel, onResetAll } = props;
    const dispatch = useDispatch()
    const [selectedCategories, setSelectedCategories] = useState([]);




    const [minprice, setMinPrice] = useState(1);
    const [maxprice, setMaxPrice] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState(null);


    const onReset = () => {
        setMaxPrice(1);
        setMinPrice(1);
        setSelectedCategory(null);
        onResetAll()
        onCancel()

    };

    const checkDisabled = () => {
        if ((minprice < maxprice) || selectedCategory !== null) {
            return false;
        } else {
            return true;
        }
    };

    const RenderHeader = () => (
        <View style={styles.headerStyle}>
            <View style={{ flex: 0.2 }}>
                <Icon
                    name="x"
                    type={IconType.Octicons}
                    onPress={onCancel}
                    style={{
                        color: COLORS.black,
                        fontSize: SIZES.twentyFive * 1.1,
                    }}
                />
            </View>

            <View style={{ flex: 1, alignItems: 'center' }}>
                <Text style={[FONTS.boldFont22, { color: COLORS.black }]}>Filter</Text>
            </View>

            <TouchableOpacity
                onPress={onReset}
                style={{ flex: 0.2, alignItems: 'flex-end' }}>
                <Text style={[FONTS.mediumFont14, { color: COLORS.black }]}>Reset</Text>
            </TouchableOpacity>
        </View>
    );
    const handleCategoryChange = (category) => {
        if (selectedCategories.includes(category)) {
            setSelectedCategories(selectedCategories.filter(item => item !== category));
        } else {
            setSelectedCategories([...selectedCategories, category]);
        }
    };



    return (
        <Modalize
            ref={modalizeRef}
            withHandle={false}
            modalHeight={height * 0.7}
            modalStyle={[styles.modalStyle, { backgroundColor: COLORS.white }]}
            HeaderComponent={<RenderHeader />}
            scrollViewProps={{ showsVerticalScrollIndicator: false }}>

            <View style={{ marginTop: SIZES.twentyFive }}>
                <Text style={[FONTS.mediumFont18, { color: COLORS.black }]}>Minimum Price</Text>
                <Slider
                    step={1}
                    value={minprice}
                    minimumValue={1}
                    maximumValue={5000}
                    trackStyle={{ height: 2.5 }}
                    thumbTintColor={COLORS.primary}
                    maximumTrackTintColor={COLORS.black}
                    minimumTrackTintColor={COLORS.primary}
                    onValueChange={val => setMinPrice(val)}
                    style={styles.sliderStyle}
                />
                <View style={styles.flexRow}>
                    <Text style={[FONTS.mediumFont12, { color: COLORS.black }]}>
                        ${minprice}
                    </Text>
                    <Text style={[FONTS.mediumFont12, { color: COLORS.black }]}>
                        $5,000
                    </Text>
                </View>
            </View>
            <View style={{ marginTop: SIZES.twentyFive }}>
                <Text style={[FONTS.mediumFont18, { color: COLORS.black }]}>Maximum Price</Text>
                <Slider
                    step={1}
                    value={maxprice}
                    minimumValue={1}
                    maximumValue={5000}
                    trackStyle={{ height: 2.5 }}
                    thumbTintColor={COLORS.primary}
                    maximumTrackTintColor={COLORS.black}
                    minimumTrackTintColor={COLORS.primary}
                    onValueChange={val => setMaxPrice(val)}
                    style={styles.sliderStyle}
                />
                <View style={styles.flexRow}>
                    <Text style={[FONTS.mediumFont12, { color: COLORS.black }]}>
                        ${maxprice}
                    </Text>
                    <Text style={[FONTS.mediumFont12, { color: COLORS.black }]}>
                        $5,000
                    </Text>
                </View>
            </View>
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

            <CustomButton
                label="Apply"
                onPress={() => {
                    onCancel();
                    // getPro()
                    // onReset();
                }}
                btnStyle={styles.btnStyle}
                disabled={checkDisabled()}
            />
            <View style={{ height: height * .13 }} />

        </Modalize>
    );
}

const styles = StyleSheet.create({
    modalStyle: {
        paddingVertical: SIZES.twenty,
        paddingHorizontal: SIZES.twenty,
        borderTopLeftRadius: SIZES.twentyFive,
        borderTopColor: COLORS.primary,
        borderTopRightRadius: SIZES.twentyFive,
        borderWidth: 1

    },
    headerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    flexRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    sliderStyle: {
        width: '100%',
        marginTop: SIZES.ten,
    },
    itemsContainer: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: SIZES.twenty,
    },
    itemStyle1: {
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: COLORS.primary,
        borderRadius: SIZES.fifteen,
        paddingVertical: SIZES.fifteen,
        paddingHorizontal: SIZES.twenty,
        backgroundColor: COLORS.primary,
        marginRight: SIZES.twentyFive,
        marginBottom: SIZES.twentyFive,
    },
    itemStyle2: {
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: COLORS.gray,
        borderRadius: SIZES.fifteen,
        paddingVertical: SIZES.fifteen,
        paddingHorizontal: SIZES.twenty,
        backgroundColor: COLORS.white,
        marginRight: SIZES.twentyFive,
        marginBottom: SIZES.twentyFive,
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

