import React, { Component } from 'react'
import { View,  ListView} from 'react-native'
import { Icon, Button, Text, Container, Header,  Content, Left, Right, Body, Title, List,Segment, ListItem, Label, Input, Item, Form} from 'native-base'
import Expo from 'expo'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions'; //Import your actions
import FooterGlobal from "./FooterGlobal"
import SendBird from 'sendbird';


class ChatLogin extends Component {



  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      nickname: '',
      error: ''
    }
    this._nicknameChanged = this._nicknameChanged.bind(this);
    this._onButtonPress = this._onButtonPress.bind(this);
    this._userIdChanged = this._userIdChanged.bind(this);
  }

  _userIdChanged  (userId)  {
    this.setState({ userId: userId });
  }

  _nicknameChanged (nickname)  {
    this.setState({ nickname: nickname });
  }

  _onButtonPress ()  {
    console.log('ENTER');
    var userId = this.state.userId;
    var nickname = this.state.nickname;
    var sb = new SendBird({ 'appId': '4D76C462-5631-4971-BDE9-4F2E3F5CADFC' });
    sb.connect(userId, (user, error) => {
      if (error) {
        this.setState({ error:error });
      } else {
        sb.updateCurrentUserInfo(nickname, null, (user, error) => {
          if (error) {
            this.setState({ error:error });
          } else {
            this.setState({
              userId: '',
              nickname: '',
              error: ''
            }, () => {
              this.props.navigation.navigate('Contactos');
            });
          }
        })
      }
    });
  }



  render () {

    return(
      <Container>
        <Header>

          <Body>
          <Title>ContactosScreen</Title>
          </Body>
          <Right />
        </Header>
        <Content>

        <Form >
          <Item>
            <Label>User ID</Label>
            <Input
              value={this.state.userId}
              onChangeText={this._userIdChanged}
            />
          </Item>
          <Item >
            <Label>Nickname</Label>
            <Input
              value={this.state.nickname}
              onChangeText={this._nicknameChanged}
            />
          </Item>

        </Form>

          <Button
            primary
            onPress={() =>
              this._onButtonPress()}>

            <Text>Submit</Text>
          </Button>


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
export default connect(mapStateToProps, mapDispatchToProps)(ChatLogin);

