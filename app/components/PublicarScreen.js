import React, { Component } from 'react'
import { View, Text, TextInput, ListView, Button, Alert } from 'react-native'
import { Icon, Container, Header,  Content, Left, Right, Body, Title} from 'native-base'

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions'; //Import your actions


class PublicarScreen extends Component {



  constructor(props) {
    super(props);
    this.state = {
      pensamiento: null,
      autor: 'Autor'
    };
}


  componentDidMount() {

  navigator.geolocation.getCurrentPosition(
    (position) => {
      //console.log(position.coords.latitude);
      //console.log(position.coords.longitude);
      this.props.updateLocation(position.coords.latitude, position.coords.longitude);
      console.log(position);
    },
    (error) => {
      console.log(error);
  },
    );


  }

  render () {

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
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

        <Text>{this.props.latitude}</Text>
        <Text>{this.props.longitude}</Text>
        <Text>{this.props.error}</Text>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({pensamiento: text})}
        placeholder='Escribe un pensamiento'/>
      <Button onPress={() => {
          if (this.props.latitude === null || this.props.longitude === null){
              Alert.alert(
                'Error',
                'No se ha podido obtener la localización, comprueba que tienes el GPS activado.',
                [
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
              )
          } else {
          pensamiento = {text: this.state.pensamiento, autor: this.state.autor, latitude: this.props.latitude, longitude: this.props.longitude, date: new Date()};
          console.log(pensamiento);
          this.props.putData(pensamiento);
        }}} title="Publicar"
  />

      </Container>
    )
  }
}
// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
    return {
      latitude: state.locationReducer.latitude,
      longitude: state.locationReducer.longitude,
      error: state.locationReducer.error
    }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/PruebaRedux.js)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(PublicarScreen);
