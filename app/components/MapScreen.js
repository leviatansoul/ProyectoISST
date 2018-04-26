import React, { Component } from 'react'
import { View, ListView} from 'react-native'
import { Icon, Text, Button, Container, Header, Content, Left, Right, Body, Title, List, ListItem } from 'native-base'
import Expo from 'expo'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import FooterGlobal from "./FooterGlobal"

import * as Actions from '../actions';

class MapScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {pensamientosLoc: [],
      loading: true };

  }

  async componentWillMount () {
  await  navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        this.props.updateLocation(position.coords.latitude, position.coords.longitude);

          var url = "http://192.168.1.130:8080/PCG/PensamientosCercanosServlet?lat="+position.coords.latitude+"&lon="+position.coords.longitude;
  console.log(url);

  fetch(url)
      .then((response)=> {

          if (response.status >= 400) {
              throw new Error("Bad response from server");
          }
          return response.json();
      })
      .then((data)=> {
          console.log(data);


          this.props.putData(data);
          this.setState({pensamientosLoc: this.props.pensamientosLoc, loading: false});
     }
      );
        /*var pens = [];

        this.props.pensamientosLoc.map((pensamiento) => {
      if(haversine({lat: this.props.latitude, lon: this.props.longitude}, {lat: pensamiento.latitude, lon: pensamiento.longitude}) < 20000){
      pens.push(pensamiento);
        this.setState({pensamientosLoc: pens, loading: false});
      }
    })*/


      },
      (error) => {
        console.log(error);
    },
      )

    await Expo.Font.loadAsync({ //Se necesita hacer para que funcione NativeBase
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    })
    //vemos que pensamientos estan a menos de 20 km (20000 metros) y los metemos en el estado de esta clase
    //eso en versiones posteriores sera sacarlo de la bbdd y meterlo en el reducer
    //probar a cambiar las latitudes y longitudes de los pensamientos definidos a unas cercanas a las vuestras para ver q os funciona

    this.setState({loading: false})
  }

  render () {

    if (this.state.loading && this.props.loading) {
      return <Expo.AppLoading />
    }

return (
  <Container>
    <Header>

      <Body>
      <Title>MapScreen</Title>
      </Body>
      <Right />
    </Header>

<Content>






</Content>



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
export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);
