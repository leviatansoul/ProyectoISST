import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Icon, Button, Container, Header, Content, Left, Right, Body, Title } from 'native-base'
import Expo from 'expo'

class HomeScreen extends Component {


  constructor (props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  async componentWillMount () {
    await Expo.Font.loadAsync({ //Se necesita hacer para que funcione NativeBase
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    })
    this.setState({loading: false})
  }


  render () {
    if (this.state.loading) {
      return <Expo.AppLoading />
    }
    return (
      <Container>
        <Header>
          <Left>
            <Icon name="menu" onPress={() =>
              this.props.navigation.navigate('DrawerOpen')}/>
          </Left>
          <Body>
          <Title>HomeScreen</Title>
          </Body>
          <Right />
        </Header>

      </Container>
    )
  }
}
export default HomeScreen
