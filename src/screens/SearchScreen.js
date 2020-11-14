import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'

export default function SearchScreen() {
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults()
    
    return (
        <View style={styles.background}>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={searchApi}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#fff'
    }
})
