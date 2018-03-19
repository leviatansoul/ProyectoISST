import React, { Component } from 'react'
import { View,  ListView} from 'react-native'
import { Icon, Button, Text, Container, Header,  Content, Left, Right, Body, Title, List,Segment, ListItem } from 'native-base'
import Expo from 'expo'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions'; //Import your actions
import MisPensamientos from "./MisPensamientosScreen"
import Guardados from "./GuardadosScreen"
import FooterGlobal from "./FooterGlobal"


class PensamientosScreen extends Component {


  constructor(props) {
    super(props);
    this.state = {
      active: '1'
    };
  }

render () {

if(this.state.active === "1"){
  return (


    <Container>
      <Header>

        <Segment>
          <Button
            first active={this.state.active === "1"}
            onPress={() => this.setState({active:"1"})}
          >
            <Text >Propios</Text>
          </Button>
          <Button
            last active={this.state.active === "2"}
            onPress={() => this.setState({active:"2"})}
          >
            <Text>Guardados</Text>
          </Button>
        </Segment>


      </Header>
      <Content >
        <MisPensamientos />
      </Content>
      <FooterGlobal navigation={this.props.navigation}/>
    </Container>
  );
}else {
  return (


    <Container>
      <Header>

        <Segment>
          <Button
            first active={this.state.active === "1"}
            onPress={() => this.setState({active:"1"})}
          >
            <Text>Propios</Text>
          </Button>
          <Button
            last active={this.state.active === "2"}
            onPress={() => this.setState({active:"2"})}
          >
            <Text>Guardados</Text>
          </Button>
        </Segment>
      </Header>
      <Content >
        <Guardados />
      </Content>
      <FooterGlobal navigation={this.props.navigation}/>
    </Container>
  );
}


  }
}
// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
    return {
        loading: state.misPensamientosReducer.loading,
        pensamientos: state.misPensamientosReducer.data

    }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/PruebaRedux.js)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(PensamientosScreen);
