import React, { Component } from 'react'
import { View, ListView, ActivityIndicator, StyleSheet } from 'react-native'
import { Icon, Text, Button, Container, Header, Content, Left, Right, Body, Title, List, ListItem } from 'native-base'
import Expo from 'expo'
import { MapView } from 'expo';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import FooterGlobal from "./FooterGlobal"
//import {Marker} from 'react-native-maps'

import * as Actions from '../actions';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  loading: {
    flex: 2,
    justifyContent: 'center'
  },
});



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

          var url = "http://192.168.43.188/PCG/PensamientosCercanosServlet?lat="+position.coords.latitude+"&lon="+position.coords.longitude+"&dist=20"+"&nick="+this.props.nickname;
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

      },
      (error) => {
        console.log(error);
    },
      )

    await Expo.Font.loadAsync({ //Se necesita hacer para que funcione NativeBase
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    })
  }

  render () {

    if (this.state.loading) {
      return (

<View style= {styles.container}>

  <ActivityIndicator size="large" color="#0000ff" style= {styles.loading}/>

  <FooterGlobal navigation={this.props.navigation}/>


</View>

);
} else {

return (
<View style= {styles.container}>

  <MapView style={styles.map} initialRegion={{
      latitude: this.props.latitude,
      longitude: this.props.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  >
  <MapView.Circle center={{latitude: this.props.latitude, longitude: this.props.longitude}} radius={20000} strokeColor={'#0000ff'} />
  {this.state.pensamientosLoc.map(marker => (
    <MapView.Marker
      coordinate={{latitude: parseFloat(marker.latitude), longitude: parseFloat(marker.longitude)}}
      title={marker.text}
      description={marker.autor}
      key={marker.id}
      />
  )
)}

  </MapView>

  <FooterGlobal navigation={this.props.navigation}/>

</View>
);


}

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
      pensamientosLoc: state.pensamientosLocReducer.data,
      loading: state.pensamientosLocReducer.loading
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
