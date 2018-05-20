import React, { Component } from 'react'
import { View,  ListView} from 'react-native'
import { Icon, Button, Text, Container, Header,  Content, Left, Right, Body, Title, List,Segment, ListItem, Label, Input, Item, Form} from 'native-base'
<<<<<<< HEAD
import Expo from 'expo'
=======
//import Expo from 'expo'
>>>>>>> 557fa05b3f5a6fcad3deba4614c43d805a161e01
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions'; //Import your actions
import FooterGlobal from "./FooterGlobal"

import { sbCreateOpenChannelListQuery } from '../sendbirdActions';
import SendBird from 'sendbird';

class OpenChannel extends Component {

  constructor(props) {
    super(props);
    this.state = {
      refresh: false,
      openChannelListQuery: null,
      list: [],
      openChannelList: []
    }


    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    this.deleteRow = this.deleteRow.bind(this);
    this._initOpenChannelList = this._initOpenChannelList.bind(this);
   this._getOpenChannelList = this._getOpenChannelList.bind(this);
    this._onListItemPress = this._onListItemPress.bind(this);
   // this._handleScroll = this._handleScroll.bind(this);

  }



  componentDidMount(){
    this._initOpenChannelList();
  }


  _initOpenChannelList  ()  {
    this._getOpenChannelList(true);
  }

  _getOpenChannelList  (init) {
    console.log("entra en getOpenChannelList");
    if (init) {
      const openChannelListQuery = sbCreateOpenChannelListQuery();
      this.setState({ openChannelListQuery }, () => {
        this.props.getOpenChannelList(this.state.openChannelListQuery);
      });
    } else {
      this.props.getOpenChannelList(this.state.openChannelListQuery);
    }
  }



  _onListItemPress = (channelUrl) => {
    console.log("vamonos")
    console.log(channelUrl)
   // this.props.navigation.navigate('Chat');
    this.props.navigation.navigate(
      'Chat',
      { channelUrl: channelUrl }
    );
  }

  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.props.contactos];
    newData.splice(rowId, 1);
    this.props.removeSavedData(newData);
  }


  render () {

    return(
      <Container>
        <Header>

          <Body>
          <Title>OPENCHANNEL</Title>
          </Body>
          <Right />
        </Header>
        <Content scrollEnabled={true}>



          <List
            dataSource={this.ds.cloneWithRows(this.props.lista)}

            renderRow={data =>
            <ListItem Rr onPress={ () => this._onListItemPress(data.url) }>
              <Body>

              <Text>{data.name}</Text>

              </Body>
            </ListItem>}

            renderRightHiddenRow={(data, secId, rowId, rowMap) =>
              <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                <Icon active name="trash" />
              </Button>}
            rightOpenValue={-75}

          />



        </Content>


        <FooterGlobal navigation={this.props.navigation}/>
      </Container>
    );


  }
}

/*
 const styles = {
 containerViewStyle: {
 backgroundColor: '#fff',
 flex: 1
 },
 menuViewStyle: {
 marginLeft: 0,
 marginRight: 0
 },
 buttonStyle: {
 justifyContent: 'flex-start',
 paddingLeft: 14
 }
 }; */

// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
  return {
    lista: state.openChannelListReducer.list,
    contactos: state.contactosReducer.data

  }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/PruebaRedux.js)
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}


//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(OpenChannel);


