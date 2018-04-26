import React, { Component } from 'react'

import {  Container, Text,  Header,  Title,  Content,  Footer,  FooterTab,  Button,  Left,  Right,  Body,  Icon,  Input, Badge } from 'native-base'

import { DrawerNavigator, DrawerItems } from 'react-navigation'

import ConfigurationScreen from './ConfigurationScreen'
import PublicarScreen from './PublicarScreen'
import HomeScreen from './HomeScreen'
import PensamientosScreen from './PensamientosScreen'
import GuardadosScreen from './GuardadosScreen'
import ContactosScreen from './ContactosScreen'
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
    Pensamientos: {
        screen: PensamientosScreen
    },
    Contactos: {
        screen: ContactosScreen
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
