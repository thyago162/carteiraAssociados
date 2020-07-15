import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';

import storeConfig from './src/store/storeConfig'
import Login from './src/screens/Login';
import Frente from './src/screens/Frente';
import Verso from './src/screens/Verso';
import Sair from './src/screens/Logout';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const store = storeConfig()


export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login" headerMode="none">
            <Stack.Screen name="Home">
              {() => (
                <Tab.Navigator initialRouteName="Frente"

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
                  <Tab.Screen name="Sair" component={Sair} />
                </Tab.Navigator>

              )}

            </Stack.Screen>
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>

        </NavigationContainer>
      </Provider>
    )

  }
}
