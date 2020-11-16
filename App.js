import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import IndexScreen from './src/screens/IndexScreen'
import {BlogProvider} from './src/context/BlogContext'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Index"
          component={IndexScreen}
          options={{ title: 'Blogs' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
