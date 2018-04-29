import React, { Component } from 'react'
import { View,  ListView, FlatList} from 'react-native'
import { Icon, Button, Text, Container, Header,  Content, Left, Right, Body, Title, List,Segment, ListItem, Label, Input, Item, Form, Footer} from 'native-base'

import { Col, Row, Grid } from 'react-native-easy-grid'
import Expo from 'expo'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions'; //Import your actions
import FooterGlobal from "./FooterGlobal"

import { sbCreateOpenChannelListQuery } from '../sendbirdActions';
import SendBird from 'sendbird';

import {
  sbGetOpenChannel,
  sbCreatePreviousMessageListQuery,
  sbAdjustMessageList
} from '../sendbirdActions';

class ChatPrueba extends Component {

  constructor(props) {
    super(props);
    this.state = {
      channel: null,
      isLoading: false,
      previousMessageListQuery: null,
      textMessage: ''
    }


    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

   /* this._initOpenChannelList = this._initOpenChannelList.bind(this);
    this._getOpenChannelList = this._getOpenChannelList.bind(this);
    this._onListItemPress = this._onListItemPress.bind(this); */
    // this._handleScroll = this._handleScroll.bind(this);


     this._componentInit = this._componentInit.bind(this);
    // this._onBackButtonPress = this._onBackButtonPress.bind(this);
     this._onTextMessageChanged = this._onTextMessageChanged.bind(this);
     this._getMessageList = this._getMessageList.bind(this);
     this._onSendButtonPress = this._onSendButtonPress.bind(this);
    //  this._renderList = this._renderList.bind(this);


  }



  componentDidMount(){
    this.props.initChatScreen();
    console.log("entra al did");
    const { channelUrl } = this.props.navigation.state.params;
    sbGetOpenChannel(channelUrl)
      .then((channel) => {
        console.log("consigue el channel");
       // this.props.navigation.setParams({ title: channel.name });
        this._componentInit();
      })
  }


  _componentInit = () => {
    const { channelUrl } = this.props.navigation.state.params;
    console.log("entra a init");
    this.props.createChatHandler(channelUrl);
    this._getMessageList(true);
  }

  _onTextMessageChanged = (textMessage) => {
    this.setState({ textMessage });
  }

  _getMessageList = (init) => {
    if (!this.state.previousMessageListQuery && !init) {
      return;
    }

    console.log("entra a get Message list");
    const { channelUrl } = this.props.navigation.state.params;


    if (init) {
      sbCreatePreviousMessageListQuery(channelUrl)
        .then((previousMessageListQuery) => {
          this.setState({ previousMessageListQuery }, () => {

            console.log("vamossssss");
            this.props.getPrevMessageList(this.state.previousMessageListQuery);
          });
        })
        .catch((error) => this.props.navigation.goBack() );
    } else {
      this.props.getPrevMessageList(this.state.previousMessageListQuery);
    }
  }

  _onSendButtonPress = () => {
    if (this.state.textMessage) {

      const { channelUrl } = this.props.navigation.state.params;
     // const { textMessage } = this.state;
      const  textMessage  = this.state.textMessage;
      console.log("sip");
      this.setState({ textMessage: '' }, () => {
        this.props.onSendButtonPress(channelUrl, textMessage);

        setTimeout(() => this.refs.section.scrollToEnd(), 1000);


      });
    }
  }




/*
  _onListItemPress = (channelUrl) => {
    console.log("vamonos")
    console.log(channelUrl)
    // this.props.navigation.navigate('Chat');
    this.props.navigation.navigate(
      'Chat',
      { channelUrl: channelUrl }
    );
  } */




  render () {

    return(
      <Container >
        <Header>

          <Body>
          <Title>CHAT_PRUEBA</Title>
          </Body>
          <Right />
        </Header>

        <Content   >
          <Item rounded>
            <Input
              placeholder={'Your message'}
              value={this.state.textMessage}
              onChangeText={this._onTextMessageChanged}

            />
            <Icon

              onPress={() =>
                this._onSendButtonPress()}
              name='swap'
            />
          </Item>

              <ListView
                ref="section"
              //  ref={input =>  this.section = input}

                dataSource={this.ds.cloneWithRows(this.props.lista)}
                // dataSource={this.ds.cloneWithRows(this.props.contactos)}

                renderRow={data =>{
                  if (this.state.previousMessageListQuery !== null){
                    return(
                      <ListItem Rr >
                        <Body>

                        <Text>{data.message}</Text>

                        </Body>
                      </ListItem>
                    )
                  } else {
                    return(
                      <ListItem Rr >
                        <Body>

                        <Text>Texto</Text>

                        </Body>
                      </ListItem>
                    )
                  }



                }}

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
    lista: state.chatReducer.list ,
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
export default connect(mapStateToProps, mapDispatchToProps)(ChatPrueba);


