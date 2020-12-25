import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { CardSection } from './common'

export default function ListItem({ library }) {
    return (
        <CardSection>
            <Text style={styles.titleStyle}>{library.title}</Text>
        </CardSection>
    )
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
})
