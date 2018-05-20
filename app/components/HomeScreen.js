import React, { Component } from 'react'
import { View,  ListView, ScrollView, ActivityIndicator, StyleSheet, Image} from 'react-native'
import { Icon, Fab, Segment, Text, Button, Container,DeckSwiper,Card, CardItem, Header, Content, Left, Right, Body, Title, List, ListItem} from 'native-base'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import haversine from 'haversine-distance';
import FooterGlobal from "./FooterGlobal";
import Pensamiento from "./PensamientoTinder"

import * as Actions from '../actions'; //Import your actions
//import Expo from 'expo'
import PublicarScreen from './PublicarScreen';
import colors from './colors';


class HomeScreen extends Component {

//haversine es un paquete para calcular distancias a partir de coordenadas npm install haversine-distance


  constructor (props) {
    super(props)
    this.state = {pensamientosLoc: [],
      loading: true, active: 3, loadingPens:true };
this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.appClick = this.appClick.bind(this);
    this.actualizaLista = this.actualizaLista.bind(this);
    this.putLike = this.putLike.bind(this);
    this.putDislike = this.putDislike.bind(this);
    this.contactar = this.contactar.bind(this);
  }
  appClick(data) {

    var url = "http://"+this.props.url+"/PCG/GuardarPensamientoServlet?nick="+this.props.nickname+"&pensId="+data.id;


    fetch(url)


.then((response)=> {
          if (response.status >= 400) {
              throw new Error("Bad response from server");
          }
          console.log("ok")
      });




  }
  async contactar (autor){
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nick1: this.props.nickname, nick2: autor })
  };




    var url = "http://"+this.props.url+"/PCG/ContactarServlet";
console.log(url);
fetch(url, requestOptions)
    .then((response)=> {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })
    .then((data)=> {
        console.log(data);
        if (data == "creada"){

            Alert.alert(
      'Genial',
      'Peticion enviada',
      [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: false }
      )
    }
    else {
      Alert.alert(
'Error',
'Ya has contactado con el usuario',
[
{text: 'OK', onPress: () => console.log('OK Pressed')},
],
{ cancelable: false }
)
     }

    });
  }
 async putLike (data){
  const requestOptionsPet = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nick: this.props.nickname, pens: data.id, valor:"true"})
  };




  var url = "http://"+this.props.url+"/PCG/ValorarServlet";
  console.log(url);

  fetch(url, requestOptionsPet)
    .then((response)=> {

          if (response.status >= 400) {
              throw new Error("Bad response from server");
          }
          else {
   /* const newData = [...this.props.pensamientosLoc];
    newData.splice(0, 1);
    this.props.removeLocData(newData); */
          }
      });
 }

 async putDislike (data){
  const requestOptionsPet = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nick: this.props.nickname, pens: data.id, valor:"false"})
  };




  var url = "http://"+this.props.url+"/PCG/ValorarServlet";
  console.log(url);

  fetch(url, requestOptionsPet)
    .then((response)=> {

          if (response.status >= 400) {
              throw new Error("Bad response from server");
          }
          else {
  /*           rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.props.pensamientosLoc];
    newData.splice(rowId, 1);
    this.props.removeLocData(newData); */
          }
      });
 }

  async actualizaLista (dis) {
   this.setState({loadingPens:true});
    if (dis === 1){
      this.setState({active: 1});
    }
    else if (dis === 5){
      this.setState({active: 2});
    }
    else {
      this.setState({active: 3});
    }
 console.log(this.props.url);
 var url = "http://"+this.props.url+"/PCG/PensamientosCercanosServlet?lat="+this.props.latitude+"&lon="+this.props.longitude+"&dist="+dis+"&nick="+this.props.nickname;
console.log(url);

  fetch(url)
      .then((response)=> {

          if (response.status >= 400) {
              throw new Error("Bad response from server");
          }
          return response.json();
      })
      .then((data)=> {
          this.props.putData(data);
          this.setState({pensamientosLoc: this.props.pensamientosLoc});

          this.setState({loadingPens:false});
     }
      );

}

  async componentWillMount() {
  await  navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        this.props.updateLocation(position.coords.latitude, position.coords.longitude);

          var url = "http://"+this.props.url+"/PCG/PensamientosCercanosServlet?lat="+position.coords.latitude+"&lon="+position.coords.longitude+"&dist=20&nick="+this.props.nickname;
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
          this.setState({pensamientosLoc: this.props.pensamientosLoc, loadingPens: false});
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

  /*  await Expo.Font.loadAsync({ //Se necesita hacer para que funcione NativeBase
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    }) */
    //vemos que pensamientos estan a menos de 20 km (20000 metros) y los metemos en el estado de esta clase
    //eso en versiones posteriores sera sacarlo de la bbdd y meterlo en el reducer
    //probar a cambiar las latitudes y longitudes de los pensamientos definidos a unas cercanas a las vuestras para ver q os funciona

    this.setState({loading: false})
  }


  render () {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    if (this.state.loading && this.props.loading) {
//      return <Expo.AppLoading />
    }

    if (this.state.loadingPens) {
      return (
        <Container>
          <Header style={{backgroundColor: colors.logo}}>

            <Body>
            <Title>PENSAMIENTOS CERCANOS</Title>
            </Body>
            <Right />
          </Header>
          <Segment style={{backgroundColor: colors.logo}}>
            <Button first active={this.state.active === 1} onPress={() => this.actualizaLista(1)}>
              <Text>1 km</Text>
            </Button>
            <Button active={this.state.active === 2} onPress={() => this.actualizaLista(5)}>
              <Text>5 km</Text>
            </Button>
            <Button last active={this.state.active === 3} onPress={() => this.actualizaLista(20)}>
              <Text>20 km</Text>
            </Button>
          </Segment>
          <View style={styles.container}>

            <ActivityIndicator size="large" color="#00cc99" style={styles.loading}/>
            <View style={{
              position: 'absolute',
              bottom: 30,
              right: 5,
              width: 100,
              height: 100

            }}>
              <Button rounded style={{marginRight: 0, backgroundColor: colors.logo, borderRadius: 100}}
                      onPress={() => this.props.navigation.navigate('Publicar')}>
                <Image style={{height:50, width:40}}
                       source={require('../images/logoblanco.png')}
                />
              </Button>
            </View>


            <FooterGlobal navigation={this.props.navigation}/>
          </View>
        </Container>
      );
    } else {

    return (
      <Container>
        <Header style={{backgroundColor:colors.logo}}>

          <Body>
          <Title>PENSAMIENTOS CERCANOS</Title>
          </Body>
          <Right />
        </Header>
        <Segment style={{backgroundColor:colors.logo}}>
          <Button first active={this.state.active === 1} onPress={() => this.actualizaLista(1)}>
            <Text >1 km</Text>
          </Button>
          <Button active={this.state.active === 2} onPress={() => this.actualizaLista(5)}>
            <Text>5 km</Text>
          </Button>
          <Button last active={this.state.active === 3} onPress={() => this.actualizaLista(20)}>
            <Text>20 km</Text>
          </Button>
        </Segment>
        <Container style={{padding: 20, flex: 1}}>
          <View style={{
            flex: 1,
            flexDirection: 'column'
          }}>
            <View style={{flex: 3}}>
              <DeckSwiper style={{flex: 1, borderWidth: 5}}
                          dataSource={this.props.pensamientosLoc}
                          looping={false}
                          renderEmpty={() =>
                            console.log("Fin")
                          }

                          onSwipeRight={(data) => {
                            console.log("Derecha")
                            this.putLike(data)
                          }
                          }
                          onSwipeLeft={(data) => {
                            console.log("Izquierda")
                             this.putDislike(data)
                          }
                          }
                          renderItem={data =>

                            <Pensamiento contactar={this.contactar} likes={data.likes} autor={data.autor}
                                         text={data.text} date={data.date} topic={data.topic} enabled={true}
                                         like={false}/>


                          }
              />
            </View>
            <View style={{flex: 1}}/>
          </View>


        </Container>
        <View style={{
          position: 'absolute',
          bottom: 30,
          right: 5,
          width: 100,
          height: 100

        }}>
          <Button rounded style={{marginRight: 0, backgroundColor: colors.logo, borderRadius: 100}}
                  onPress={() => this.props.navigation.navigate('Publicar')}>
            <Image style={{height:50, width:40}}
                   source={require('../images/logoblanco.png')}
            />
          </Button>
        </View>
        <FooterGlobal navigation={this.props.navigation}/>
      </Container>

    )
  }
  }
}
// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
    return {
        nickname: state.nicknameReducer.nickname,
        loading: state.pensamientosLocReducer.loading,
        pensamientosLoc: state.pensamientosLocReducer.data,
        url: state.urlReducer.url,
        latitude: state.locationReducer.latitude,
        longitude: state.locationReducer.longitude
    }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/PruebaRedux.js)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

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
