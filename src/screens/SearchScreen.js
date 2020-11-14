import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SearchBar from '../components/SearchBar'

export default function SearchScreen() {
    const [term, setTerm] = useState('')

    return (
        <View style={styles.background}>
            <SearchBar 
                term={term} 
                onTermChange={newTerm => setTerm(newTerm)} 
                onTermSubmit={()=>console.log('trm was submitted')}
            />
            <Text>SearchScreen</Text>
            <Text>{term}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#fff'
    }
})
