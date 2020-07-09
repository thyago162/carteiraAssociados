import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import Frente from './screens/Frente'

const menuRoutes = {
    Front: {
        name: 'Frente',
        screen: Frente,
        navigationOptions: {
            title: 'Frente',
            tabBarIcon: ({tintColor}) => 
            <Icon name="card-account-details" size={30} color={tintColor} />
        }
    },

    Back: {
        name: 'Verso',
        screen: Frente,
        navigationOptions: {
            title: 'Verso',
            tabBarIcon: ({tintColor}) => 
            <Icon name="card-bulleted" size={30} color={tintColor} />
        }
    },

    Logout: {
        name: 'Sair',
        screen: Frente,
        navigationOptions: {
            title: 'Sair',
            tabBarIcon: ({tintColor}) => 
            <Icon name="logout" size={30} color={tintColor} />
        }
    }
}

const MenuConfig = {
    initialRouteName: 'Frente',
    tabBarOptions: {
        showLabel: false,
    }
}

const MenuNavigator = createBottomTabNavigator(menuRoutes, MenuConfig)

export default MenuNavigator


