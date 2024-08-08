import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Platform, ScrollView, StyleSheet, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import BookCard from '../../components/BookCard'
import CustomHeader from '../../components/CustomHeader'
import SearchFilter from '../../components/SearchFilter'
import { COLORS, FONTFAMILY, SIZES, STYLES } from '../../constants'
import { getBooks } from '../../redux/slices/Books'
import Loading from '../../components/Loading'

export default function Home() {
    const dispatch = useDispatch()
    const token = useSelector((state) => state?.Auth?.token)
    const [search, setSearch] = useState('')
    const [data, setData] = useState([])
    const [filterProducts, setFilterProducts] = useState(data)
    const [loading, setLoading] = useState(false)


    const getallBooks = async () => {
        try {
            setLoading(true)
            const response = await dispatch(getBooks(token))
            console.log(response?.data)
            setData(response?.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        getallBooks()
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
            <SearchFilter
                value={search}
                onChangeText={(e) => {
                    setSearch(e);
                }}
            />



            {loading ?

                <ActivityIndicator size={"large"} style={{ marginTop: SIZES.fifty }} />
                :
                <FlatList
                    style={{ marginBottom: SIZES.fifty }}
                    data={filterProducts}
                    keyExtractor={item => item.toString()}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: 'space-between', }}
                    renderItem={({ item }) => <BookCard item={item} />}
                />

            }





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