import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Frente from './src/screens/Frente';
import Verso from './src/screens/Verso';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            
            let iconName;
            if (route.name === 'Frente') {
              iconName = focused ? "card-account-details" : "card-account-details-outline"
            } else if (route.name === 'Verso') {
              iconName = focused ? "card-bulleted" : "card-bulleted-outline"
            } else if (route.name === 'Sair') {
              iconName = focused ? "logout" : "logout-variant"
            }
            
            return <Icon name={iconName} size={size} color={color} />
          }

        })}

        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray'
        }}
      >
        <Tab.Screen name="Frente" component={Frente} />
        <Tab.Screen name="Verso" component={Verso} />
        <Tab.Screen name="Sair" component={Frente} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}