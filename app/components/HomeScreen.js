import React, { Component } from 'react'
import { View, Text, ListView} from 'react-native'
import { Icon, Button, Container, Header, Content, Left, Right, Body, Title, List, ListItem } from 'native-base'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions'; //Import your actions
import Expo from 'expo'

class HomeScreen extends Component {

  constructor (props) {
    super(props)
    this.state = {
      loading: true };
this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.appClick = this.appClick.bind(this);
  }
  appClick(visita) {
      let indice = this.props.pensamientosLoc.indexOf(visita);
      console.log(indice);
      this.props.putData(visita);

  }


  async componentWillMount () {
    await Expo.Font.loadAsync({ //Se necesita hacer para que funcione NativeBase
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    })
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
          <Left>
            <Icon name="menu" onPress={() =>
              this.props.navigation.navigate('DrawerOpen')}/>
          </Left>
          <Body>
          <Title>HomeScreen</Title>
          </Body>
          <Right />
        </Header>
<Content scrollEnabled={true}>
  <List
              dataSource={this.ds.cloneWithRows(this.props.pensamientosLoc)}
              renderRow={data =>
                <ListItem>
                  <Text> {data} </Text>
                </ListItem>}
              renderRightHiddenRow={data =>
                <Button full light onPress={() => this.appClick(data)}>
                  <Icon active name="download" />
                </Button>}
              rightOpenValue={-75}
            />
</Content>
      </Container>

    )
  }
}
// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
    return {
        loading: state.pensamientosLocReducer.loading,
        pensamientosLoc: state.pensamientosLocReducer.data,
        pensamientos: state.pensamientosReducer.data

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
