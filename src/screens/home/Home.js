import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BookCard from '../../components/BookCard'

export default function Home() {
    return (
        <View style={{ justifyContent: 'space-evenly', alignItems: "center", flex: 1 , flexDirection: "row"}}>
            <BookCard />
        </View>
    )
}

const styles = StyleSheet.create({})