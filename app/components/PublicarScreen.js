import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Icon, Button, Container, Header, Content, Left, Right, Body, Title } from 'native-base'

class PublicarScreen extends Component {
  render () {
    return (
      <Container>
        <Header>
          <Left>
            <Icon name="menu" onPress={() =>
              this.props.navigation.navigate('DrawerOpen')}/>
          </Left>
          <Body>
          <Title>Publicar</Title>
          </Body>
          <Right />
        </Header>

      </Container>
    )
  }
}
export default PublicarScreen
