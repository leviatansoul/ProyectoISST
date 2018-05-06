import React, { Component } from 'react'
import { View,  ListView, ScrollView} from 'react-native'
import { Icon, Fab, Segment, Text, Button, Container, Header, Content, Left, Right, Body, Title, List, ListItem} from 'native-base'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import haversine from 'haversine-distance';
import FooterGlobal from "./FooterGlobal";
import Pensamiento from "./Pensamiento"

import * as Actions from '../actions'; //Import your actions
import Expo from 'expo'
import PublicarScreen from './PublicarScreen';

class HomeScreen extends Component {

//haversine es un paquete para calcular distancias a partir de coordenadas npm install haversine-distance


  constructor (props) {
    super(props)
    this.state = {pensamientosLoc: [],
      loading: true, active: 3 };
this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.appClick = this.appClick.bind(this);
    this.actualizaLista = this.actualizaLista.bind(this);
    this.putLike = this.putLike.bind(this);
    this.putDislike = this.putDislike.bind(this);
  }
  appClick(data) {

    fetch("http://192.168.1.130:8080/PCG/GuardarPensamientoServlet?nick="+this.props.nickname+"&pensId="+data.id)


.then((response)=> {
          if (response.status >= 400) {
              throw new Error("Bad response from server");
          }
          console.log("ok")
      });




  }
 async putLike (data, secId, rowId, rowMap){
    var url = "http://"+this.props.url+"/PCG/ValorarServlet?nick="+this.props.nickname+"&pens="+data.id+"&valor=true";
console.log(url);


  fetch(url)
      .then((response)=> {

          if (response.status >= 400) {
              throw new Error("Bad response from server");
          }
          else {
             rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.props.pensamientosLoc];
    newData.splice(rowId, 1);
    this.props.removeLocData(newData);
          }
      });
 }

 async putDislike (data, secId, rowId, rowMap){
    var url = "http://"+this.props.url+"/PCG/ValorarServlet?nick="+this.props.nickname+"&pens="+data.id+"&valor=false";

  fetch(url)
      .then((response)=> {

          if (response.status >= 400) {
              throw new Error("Bad response from server");
          }
          else {
             rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.props.pensamientosLoc];
    newData.splice(rowId, 1);
    this.props.removeLocData(newData);
          }
      });
 }

  async actualizaLista (dis) {
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
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    if (this.state.loading && this.props.loading) {
      return <Expo.AppLoading />
    }
    return (
      <Container>
        <Header>

          <Body>
          <Title>CERCA DE TI</Title>
          </Body>
          <Right />
        </Header>
        <Segment>
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
<Content scrollEnabled={true}>
<ScrollView>
  <List
              dataSource={this.ds.cloneWithRows(this.props.pensamientosLoc)}
              renderRow={(data) =>


            <Pensamiento likes={data.likes} autor={data.autor} text={data.text} date={data.date} topic={data.topic} enabled={true} like={false}/>



              }
              renderRightHiddenRow={(data, secId, rowId, rowMap) =>
                <Button full light onPress={_ => this.putLike(data, secId, rowId, rowMap)}>
                  <Icon active name="ios-thumbs-up" />
                </Button>}
              rightOpenValue={-75}
               renderLeftHiddenRow={(data, secId, rowId, rowMap) =>
                <Button full light onPress={_ => this.putDislike(data, secId, rowId, rowMap)}>
                  <Icon active name="ios-thumbs-down" />
                </Button>}
              leftOpenValue={75}
            />
            
            </ScrollView>

           
           
</Content>
<View style={{
   position: 'absolute',
   bottom: 30,
   right: 10,
   width: 100, 
   height: 100
  
}}>
<Button style={{marginRight:0, backgroundColor: '#5067FF',  borderRadius: 100}}  onPress={() => this.props.navigation.navigate('Publicar')}>
<Icon name="md-add" />
</Button>
</View>        
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
