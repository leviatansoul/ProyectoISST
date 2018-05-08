import React, { Component } from 'react'
import { View,  ListView, FlatList} from 'react-native'
import { Icon, Button, Text, Container, Header,  Content, Left, Right, Body, Title, List,Segment, ListItem, Tab, Tabs  } from 'native-base'

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions'; //Import your actions
import FooterGlobal from "./FooterGlobal"

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

    <ListItem Rr onPress={() =>
      this._onPressItemPeticiones(item.nick)}>

      <Body>

      <Text>{item.nick}</Text>

      </Body>
      <Right>
        <Text note style={{color:'lightgrey'}}>{item.img}</Text>
      </Right>


    </ListItem>
  );
  async componentWillMount () {

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
    this.props.createGroupChannelPeticiones(id,this.props.nickname);
  };





  render () {

    return(
      <Container>
        <Header>

          <Body>
          <Title>ContactosScreen</Title>
          </Body>
          <Right />
        </Header>
        <Content scrollEnabled={true}>

          <Tabs initialPage={0}>
            <Tab heading="Contactos">
              <FlatList
                data={this.props.contactos}

                keyExtractor={this._keyExtractor}
                renderItem={ this._renderItem        }
                //  renderLeftHiddenRow={data =>
                //  <Button full onPress={() => alert(data)}>
                //    <Icon active name="information-circle" />
                //</Button>}

              />
            </Tab>
            <Tab heading="Peticiones">
              <FlatList
                data={this.props.contactos}

                keyExtractor={this._keyExtractor}
                renderItem={ this._renderItemPeticiones  }
                //  renderLeftHiddenRow={data =>
                //  <Button full onPress={() => alert(data)}>
                //    <Icon active name="information-circle" />
                //</Button>}

              />
            </Tab>

          </Tabs>



        </Content>

        <FooterGlobal navigation={this.props.navigation}/>
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
