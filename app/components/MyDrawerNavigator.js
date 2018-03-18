import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import {  Container,  Header,  Title,  Content,  Footer,  FooterTab,  Button,  Left,  Right,  Body,  Icon,  Input} from 'native-base'

import { DrawerNavigator, DrawerItems } from 'react-navigation'

import ConfigurationScreen from './ConfigurationScreen'
import PublicarScreen from './PublicarScreen'
import HomeScreen from './HomeScreen'
import PensamientosScreen from './PensamientosScreen'
import GuardadosScreen from './GuardadosScreen'


export default class MyDrawerNavigator extends Component {
    render() {
        return (
            <MyNavigator />
    );
    }
}

const CustomDrawerContentComponent = (props) => (
    <Container>
        <Header style={{height: 200, backgroundColor: 'white'}}>
            <Body>
                <Text>Elige donde quieres ir</Text>
            </Body>
        </Header>
        <Content>
            <DrawerItems {...props}/>
        </Content>
    </Container>
)

const MyNavigator = DrawerNavigator({
    Todos: {
        screen: HomeScreen
    },
    Publicar: {
        screen: PublicarScreen
    },
    Configuracion: {
        screen: ConfigurationScreen
    },
    MisPensamientos: {
        screen: PensamientosScreen
    },
    Guardados: {
        screen: GuardadosScreen
    },
}, {
    initialRouteName: 'Todos',
    drawerPosition: 'left',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
})

