import { FlatList, ScrollView, StyleSheet, Text, View, Platform } from 'react-native'
import React from 'react'
import BookCard from '../../components/BookCard'
import { COLORS, FONTFAMILY, SIZES, STYLES } from '../../constants'
import SearchFilter from '../../components/SearchFilter'
import CustomHeader from '../../components/CustomHeader'

export default function Home() {
    return (
        <ScrollView style={STYLES.container}>
            <CustomHeader logo />

            <Text style={styles.heading}>
                Welcome Back, <Text style={{ color: COLORS.primary }}>John Doe
                </Text>
            </Text>
            <Text style={styles.subHeading}>
                Here is the updated list of new books form
                <Text style={{ fontWeight: Platform.OS === "ios" ? "600" : "bold", }}>
                    {" "}Arthur Bailey
                </Text>

            </Text>
            <Text style={styles.heading}>
                My Books
            </Text>
            <SearchFilter />

            <FlatList
                style={{ marginBottom: SIZES.fifty }}
                data={[1, 2, 3, 4]}
                keyExtractor={item => item.toString()}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between', }}
                renderItem={({ item }) => <BookCard item={item} />}
            />



        </ScrollView>
    )
}

const styles = StyleSheet.create({
    heading: {
        marginTop: SIZES.ten,
        fontSize: SIZES.twenty,
        fontWeight: Platform.OS === "ios" ? "600" : "bold",
        color: COLORS.black,
        fontFamily: FONTFAMILY.Poppins
    },
    subHeading: {
        color: COLORS.black,
        fontSize: SIZES.fifteen
    }
})