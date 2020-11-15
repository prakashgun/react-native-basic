import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

export default function SearchScreen() {
    const [term, setTerm] = useState('')
    const [searchApi, results, errorMessage] = useResults()

    const filterResultsByPrice = (price) => {
        // Price can be '$' or '$$' or '$$$'
        return results.filter(result => {
            return result.price === price
        })
    }

    return (
        <View style={styles.background}>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={searchApi}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList
                    title="Cost Effective"
                    results={filterResultsByPrice('$')}
                />
                <ResultsList
                    title="Bit Pricier"
                    results={filterResultsByPrice('$$')}
                />
                <ResultsList
                    title="Big Spender"
                    results={filterResultsByPrice('$$$')}
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#fff',
        flex: 1
    }
})
