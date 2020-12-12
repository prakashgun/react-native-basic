import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function CalcButton(
    {
        title,
        backgroundColor,
        color,
        style = {},
        onButtonPress = () => { }
    }
) {


    return (
        <TouchableOpacity
            style={
                [
                    styles.container,
                    { backgroundColor: backgroundColor },
                    { ...style }
                ]
            }
            onPress={() => onButtonPress(title)}
        >
            <Text style={[styles.text, { color: color }]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 80,
        height: 80,
        borderRadius: 40,
        margin: 5
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold'
    }
})
