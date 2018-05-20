import React, { Component } from 'react'
import { View,  ListView, FlatList} from 'react-native'
import { Icon, Button, Text, Container, Header,  Content, Left, Right, Body, Title, List, Segment, ListItem, Tab, Tabs  } from 'native-base'

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions'; //Import your actions
import FooterGlobal from "./FooterGlobal";
import colors from './colors';


import { sbCreateGroupChannel, sbGetGroupChannel} from '../sendbirdActions';

class ContactosScreen extends Component {


  constructor(props) {
    super(props);
    this.state = {
      loading: true};
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    this._keyExtractor = this._keyExtractor.bind(this);
    this._renderItem = this._renderItem.bind(this);
    this._renderItemPeticiones = this._renderItemPeticiones.bind(this);

    this._updateContactos = this._updateContactos.bind(this);
    this._updatePeticiones = this._updatePeticiones.bind(this);
  }

  _updateContactos () {

    console.log("contact");
    var url = "http://"+this.props.url+"/PCG/ContactosServlet?nick="+this.props.nickname;
    console.log(url);

    fetch(url)
      .then((response)=> {

        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then((data)=> {

          this.props.updateContactos(data);

        }
      );

  }

  _updatePeticiones () {
    console.log("entrapet");
    var urlpet = "http://"+this.props.url+"/PCG/PeticionesServlet?nick="+this.props.nickname;
    console.log(urlpet);

    fetch(urlpet)
      .then((response)=> {

        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then((data)=> {

          this.props.updatePeticiones(data);

        }
      );
  }
  _keyExtractor = (item, index) => item.id;

  _renderItem = ({item}) => (

    <ListItem Rr  onPress={() =>
      this._onPressItem(item.nick)}>

      <Body>

      <Text>{item.nick}</Text>

      </Body>
      <Right>
        <Text note style={{color:'lightgrey'}}>{item.img}</Text>
      </Right>


    </ListItem>
  );

  _renderItemPeticiones = ({item}) => (

    <ListItem  >
      <Left>
        <Button danger onPress={() =>
          this._onPressDeleteItemPeticiones(item.nick)}><View><Icon name="close" active  /></View></Button>
      </Left>

      <Body>
      <Text>{item.nick}</Text>
      </Body>

      <Right>
        <Button success style={{overflow:"visible"}} onPress={() =>
          this._onPressItemPeticiones(item.nick)}><View ><Icon name="md-checkmark" active /></View></Button>
      </Right>

    </ListItem>
  );
  async componentWillMount () {


    this._updatePeticiones();

    this._updateContactos();


     this.setState({loading: false})


  }

  _onPressItem = (id: string) => {
    // updater functions are preferred for transactional updates
    console.log(id);
    console.log(this.props.nickname);
    this.props.getGroupChannel(id, this.props.nickname, this.props.navigation);
  };

  _onPressItemPeticiones = (id: string) => {
    // updater functions are preferred for transactional updates
    console.log(id);
    console.log(this.props.nickname);

    //Aceptar peticion

    const requestOptionsPet = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nick2: this.props.nickname, nick1: id, action: "true" })
    };




    var url = "http://"+this.props.url+"/PCG/AceptarServlet";
    console.log(url);

    fetch(url, requestOptionsPet)
      .then((response)=> {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then((data)=> {
        console.log(data);

        this.props.createGroupChannelPeticiones(id,this.props.nickname);
        this._updatePeticiones();
        this._updateContactos();

        console.log("Creado");



      });

  };

  _onPressDeleteItemPeticiones = (id: string) => {
    // updater functions are preferred for transactional updates
    console.log(id);
    console.log(this.props.nickname);

    //Aceptar peticion

    const requestOptionsPet = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nick2: this.props.nickname, nick1: id, action: "true" })
    };


    var url = "http://"+this.props.url+"/PCG/BorrarContactoServlet";
    console.log(url);

    fetch(url, requestOptionsPet)
      .then((response)=> {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then((data)=> {
        console.log(data);
        this._updatePeticiones();
        console.log("Borrado");



      });

  };





  render () {

    return(
      <Container>
        <Header style={{backgroundColor: colors.logo}}>

          <Body>
          <Title>CHAT</Title>
          </Body>
          <Right />
        </Header>
        <Content >

          <Tabs  activeTabStyle={{backgroundColor:colors.logo}} tabBarUnderlineStyle={{backgroundColor:colors.logo}} initialPage={0} >
            <Tab heading="Contactos" >
              <Container scrollEnabled={true}>
              <FlatList
                data={this.props.contactos}

                keyExtractor={this._keyExtractor}
                renderItem={ this._renderItem        }
                //  renderLeftHiddenRow={data =>
                //  <Button full onPress={() => alert(data)}>
                //    <Icon active name="information-circle" />
                //</Button>}

              />
              </Container>
            </Tab>
            <Tab heading="Peticiones">
              <Container scrollEnabled={true}>
              <FlatList
                data={this.props.peticiones}

                keyExtractor={this._keyExtractor}
                renderItem={ this._renderItemPeticiones  }
               //  renderLeftHiddenRow={data =>
                // <Button full onPress={_ => deletePeticion(data)}>
                 // <Icon active name="information-circle" />
              //</Button>}

              />
              </Container>
            </Tab>

          </Tabs>



        </Content>

        <FooterGlobal navigation={this.props.navigation} itemSelectede="5"/>
      </Container>
    );


  }
}
// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
  return {
    loading: state.contactosReducer.loading,
    contactos: state.contactosReducer.data,
    peticiones: state.peticionesReducer.data,
    nickname: state.nicknameReducer.nickname,
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
export default connect(mapStateToProps, mapDispatchToProps)(ContactosScreen);
