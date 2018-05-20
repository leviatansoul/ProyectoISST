import React, { Component } from 'react'
import { View, TextInput, ListView, Alert, Picker } from 'react-native'
import { Icon, Container, Header,  Content, Left, Right, Body, Title, Text, Button, Input, Footer} from 'native-base'
import ImagePicker from 'react-native-image-picker';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import FooterGlobal from "./FooterGlobal"

import * as Actions from '../actions'; //Import your actions

import colors from './colors';

class PublicarScreen extends Component {



  constructor(props) {
    super(props);
    this.state = {
      pensamiento: null,
      autor: 'Autor',
      tema:"General",
      image: ""
    };
   this.putData = this.putData.bind(this)
this.uploadImage = this.uploadImage.bind(this)

}

onValueChange(value: string) {
  this.setState({
    tema: value
  });
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

  putData (pensamiento){

    const requestOptionsPet = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nick: pensamiento.autor, text: pensamiento.text, lat: pensamiento.latitude, lon: pensamiento.longitude, topic: pensamiento.tema})
    };




    var url = "http://"+this.props.url+"/PCG/PublicarServlet";
    console.log(url);

    fetch(url, requestOptionsPet)
      .then((response)=> {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
       console.log(response.json());
      });


    }


uploadImage(){
var options = {
  title: 'Select Avatar',
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
}
  ImagePicker.showImagePicker(options, (response) => {
    if(response.didCancel){

    }else if(response.error){

    }else if (response.customButton){

    }else{
      this.setState({image: response.uri})
    }
  })
}


  render () {

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    return (
      <Container>
        <Container style={{padding:40}}>
        <Content padder>
      <Text>{this.props.latitude}</Text>
      <Text>{this.props.longitude}</Text>
      <Text>{this.props.error}</Text>

          <Picker
                iosHeader="Temas"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                headerBackButtonText="Volver"
                mode="dropdown"
                selectedValue={this.state.tema}
                onValueChange={this.onValueChange.bind(this)}
              >
                <Picker.Item label="General" value="General" />
                <Picker.Item label="Humor" value="Humor" />
                <Picker.Item label="Aficiones" value="Aficiones" />
                <Picker.Item label="Tecnología" value="Tecnología" />
              </Picker>
        <Input onChangeText={(text) => this.setState({pensamiento: text})}
        placeholder='Escribe un pensamiento'/>



</Content>
  <Button block rounded style={{backgroundColor:colors.logo}} onPress={() => {
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
      pensamiento = {text: this.state.pensamiento, autor: this.props.nickname, tema: this.state.tema, latitude: this.props.latitude, longitude: this.props.longitude, date: new Date()};
      this.putData(pensamiento);
      this.props.navigation.goBack();
    }}}>
    <Text>Publicar</Text>
  </Button>
        </Container>
      <FooterGlobal navigation={this.props.navigation}/>
      </Container>

    )
  }
}
// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
    return {
      nickname: state.nicknameReducer.nickname,
      latitude: state.locationReducer.latitude,
      longitude: state.locationReducer.longitude,
      error: state.locationReducer.error,
      url: state.urlReducer.url
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
