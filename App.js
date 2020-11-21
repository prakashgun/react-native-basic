import 'react-native-gesture-handler'
import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LandingScreen from './components/auth/Landing'
import Register from "./components/auth/Register"
import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBL-WNauLddhXE-sEdI9VPn4SVam0Me664",
  authDomain: "learning-1526991794181.firebaseapp.com",
  databaseURL: "https://learning-1526991794181.firebaseio.com",
  projectId: "learning-1526991794181",
  storageBucket: "learning-1526991794181.appspot.com",
  messagingSenderId: "103963936367",
  appId: "1:103963936367:web:3007f3f995c00cd347af9a"
}


if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

const Stack = createStackNavigator()


export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      loaded: false
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true
        })
      } else {
        this.setState({
          loggedIn: true,
          loaded: true
        })
      }
    })
  }

  render() {
    const { loggedIn, loaded } = this.state

    if (!loaded) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      )
    }

    if (!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} />
          </Stack.Navigator>
        </NavigationContainer>
      )
    }

    return (
      <View>
        <Text>User logged in</Text>
      </View>
    )

  }
}

