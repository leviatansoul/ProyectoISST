import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native'

import {  Container,  Header,  Title,  Content,  Footer,  FooterTab,  Button,  Left,  Right,  Body,  Icon,  Input} from 'native-base'
import store from './app/store'; //Import the store
import { DrawerNavigator, DrawerItems } from 'react-navigation'

import ConfigurationScreen from './app/components/ConfigurationScreen'
import PublicarScreen from './app/components/PublicarScreen'
import HomeScreen from './app/components/HomeScreen'
import PensamientosScreen from './app/components/PensamientosScreen'

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <MyApp />
            </Provider>
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

const MyApp = DrawerNavigator({

  Todos: {
    screen: HomeScreen
  },
  Publicar: {
    screen: PublicarScreen
  },
  Configuracion: {
    screen: ConfigurationScreen
  },
  Guardados: {
    screen: PensamientosScreen
  },

}, {
  initialRouteName: 'Todos',
  drawerPosition: 'left',
  contentComponent: CustomDrawerContentComponent,
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle'
})
