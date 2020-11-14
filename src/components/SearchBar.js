import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

export default function SearchBar({ term, onTermChange, onTermSubmit }) {
    return (
        <View style={styles.backgroundStyle}>
            <FontAwesome name="search" style={styles.iconStyle} color="black" />
            <TextInput
                placeholder="Search"
                style={styles.inputStyle}
                value={term}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
                autoCapitalize="none"
                autoCorrect={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle: {
        marginTop: 15,
        backgroundColor: '#f0eeee',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row'
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
})
