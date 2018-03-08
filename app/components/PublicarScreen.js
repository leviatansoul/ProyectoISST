import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Icon, Button, Container, Header, Content, Left, Right, Body, Title } from 'native-base'

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions'; //Import your actions


class PublicarScreen extends Component {



  constructor(props) {
    super(props);
}


  componentDidMount() {

  this.props.updateLocation();

  }

  render () {

    return (
      <Container>
        <Header>
          <Left>
            <Icon name="menu" onPress={() =>
              this.props.navigation.navigate('DrawerOpen')}/>
          </Left>
          <Body>
          <Title>Publicar</Title>
          </Body>
          <Right />
        </Header>

      </Container>
    )
  }
}
// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
    return {
        loading: state.dataReducer.loading,
        data: state.dataReducer.data,
        counter: state.counterReducer.counter
    }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/PruebaRedux.js)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(PublicarScreen);
