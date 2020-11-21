import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default function Landing({ navigation }) {
    return (
        <View>
            <Button
                title="Login"
                onPress={() => navigation.navigate('Login')}
            />
            <Button
                title="Register"
                onPress={() => navigation.navigate('Register')}
            />
        </View>
    )
}

const styles = StyleSheet.create({})
