import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native'

import {  Container,  Header,  Title,  Content,  Footer,  FooterTab,  Button,  Left,  Right,  Body,  Icon,  Input} from 'native-base'
import store from './app/store'; //Import the store
import { DrawerNavigator, DrawerItems } from 'react-navigation'
import { StackNavigator } from 'react-navigation';
import ConfigurationScreen from './app/components/ConfigurationScreen'
import PublicarScreen from './app/components/PublicarScreen'
import HomeScreen from './app/components/HomeScreen'
import PensamientosScreen from './app/components/PensamientosScreen'
import GuardadosScreen from './app/components/GuardadosScreen'
import SignInUp from './app/components/SignInUp';
import MyDrawerNavigator from './app/components/MyDrawerNavigator';
import Authentication from './app/components/Authentication';
import Registration from './app/components/Registration';


export default class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <PrimaryNav  />
            </Provider>
    );
    }
}


const PrimaryNav = StackNavigator({
    signInUpStack: { screen: SignInUp },
    authenticationShow: { screen: Authentication },
    registrationShow: { screen: Registration },
    navigatorStack: { screen: MyDrawerNavigator }
}, {
    // Default config for all screens
    headerMode: 'none',
    //title: 'Main',
    initialRouteName: 'signInUpStack',
    //transitionConfig: noTransitionConfig
})