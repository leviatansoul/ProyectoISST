import React, { Component } from 'react'

import {  Container, Text,  Header,  Title,  Content,  Footer,  FooterTab,  Button,  Left,  Right,  Body,  Icon,  Input, Badge } from 'native-base'

import { DrawerNavigator, DrawerItems } from 'react-navigation'

import ConfigurationScreen from './ConfigurationScreen'
import PublicarScreen from './PublicarScreen'
import HomeScreen from './HomeScreen'
import MisPensamientosScreen from './MisPensamientosScreen'

import GuardadosScreen from './GuardadosScreen'
import ContactosScreen from './ContactosScreen'
import ChatLogin from './ChatLogin'
import Menu from './Menu'
import OpenChannel from './OpenChannel'
import Chat from './ChatPrueba'

import MapScreen from './MapScreen'


export default class MyDrawerNavigator extends Component {
    render() {
        return (
          <Container>
              <MyNavigator />

          </Container>

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
    Home: {
        screen: HomeScreen
    },
    Publicar: {
        screen: PublicarScreen
    },
    Configuracion: {
        screen: ConfigurationScreen
    },
    Publicados: {
        screen: MisPensamientosScreen
    },
    Favoritos: {
        screen: GuardadosScreen
    },
    Contactos: {
        screen: ContactosScreen
    },

  ChatLogin: {
    screen: ChatLogin
  },
  Menu: {
      screen: Menu
  },
  OpenChannel: {
      screen: OpenChannel
  },
  Chat: {
      screen: Chat
  },
  Mapa: {
        screen: MapScreen
  }

}, {
    initialRouteName: 'Home',
    drawerPosition: 'left',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle'
})
