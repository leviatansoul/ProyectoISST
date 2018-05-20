import React, { Component } from 'react'
import { View,  ListView} from 'react-native'
import { Icon, Button, Text, Container, Header,  Content, Left, Right, Body, Title, List,Segment, ListItem, Label, Input, Item, Form} from 'native-base'
//import Expo from 'expo'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions'; //Import your actions
import FooterGlobal from "./FooterGlobal"
import SendBird from 'sendbird';

class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userId: '',
      nickname: ''
    }

    this._onDisconnectButtonPress = this._onDisconnectButtonPress.bind(this);
  }

  componentWillMount() {
    this.props.initMenu();
  }

  /*
  componentWillReceiveProps(props) {
    const { isDisconnected } = props;
    if (isDisconnected) {
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Login' })
        ]
      })
      this.setState({ isLoading: false }, () => {
        this.props.navigation.dispatch(resetAction);
      })
    }
  } */
  _onOpenChannelPress  ()  {
    this.props.navigation.navigate('OpenChannel');
  }

  _onDisconnectButtonPress  ()  {
    this.props.sendbirdLogout(this.props.navigation);
  }

  render () {

    return(
      <Container>
        <Header>

          <Body>
          <Title>Menu</Title>
          </Body>
          <Right />
        </Header>
        <Content>


          <Button
            primary
            onPress={() =>
              this._onOpenChannelPress()}>

            <Text>openchannel</Text>
          </Button>

          <Button
            primary
            onPress={() =>
              this._onDisconnectButtonPress()}>

            <Text>Submit</Text>
          </Button>


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
    isDisconnected: state.menuReducer.isDisconnected

  }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/PruebaRedux.js)
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}


//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Menu);


