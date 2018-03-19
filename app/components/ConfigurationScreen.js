import React, { Component } from 'react'
import { View } from 'react-native'
import { Icon, Text, Button, Container, Header, Content, Left, Right, Body, Title } from 'native-base'

class ConfigurationScreen extends Component {
  render () {

    return (
      <Container>
        <Header>
          <Left>
            <Icon name="menu" onPress={() =>
              this.props.navigation.navigate('DrawerOpen')}/>
          </Left>
          <Body>
          <Title>Configuracion</Title>
          </Body>
          <Right />
        </Header>

      </Container>
    )
  }
}
export default ConfigurationScreen
