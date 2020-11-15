import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import yelp from '../api/yelp'

export default function ResultsShowScreen({ route, navigation }) {
    const { id } = route.params
    const [result, setResult] = useState(null)

    console.log(result)

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data)
    }

    useEffect(() => {
        getResult(id)
    }, [])

    if (!result) {
        return null
    }

    return (
        <View>
            <Text>{result.name}</Text>
            <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return (
                        <Image source={{ uri: item }} style={styles.image} />
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 300
    }
})
