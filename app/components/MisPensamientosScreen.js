import React, { Component } from 'react'
import { View, ListView} from 'react-native'
import { Icon, Text, Button, Container, Header, Content, Left, Right, Body, Title, List, ListItem } from 'native-base'
import Expo from 'expo'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions';
import Pensamiento from './Pensamiento' //Import your actions

class MisPensamientosScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: true};
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.appClick = this.appClick.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
  }
  appClick(visita) {
    let indice = this.props.pensamientos.indexOf(visita);
    console.log(indice);
    //  this.props.navigation.navigate('Detalles', { indice: indice, visits: this.state.visitas });

  }
  deleteRow(secId, rowId, rowMap) {
    rowMap[`${secId}${rowId}`].props.closeRow();
    const newData = [...this.props.pensamientos];
    newData.splice(rowId, 1);
    this.props.removeData(newData);
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
    return (
      <Container>

        <Content scrollEnabled={true}>
          <List
            dataSource={this.ds.cloneWithRows(this.props.pensamientos)}
            renderRow={data =>

              //hay que hacer algo si no hay nada guardado

              <Pensamiento autor={data.autor} text={data.text}/>
            }
            //  renderLeftHiddenRow={data =>
            //  <Button full onPress={() => alert(data)}>
            //    <Icon active name="information-circle" />
            //</Button>}
            renderRightHiddenRow={(data, secId, rowId, rowMap) =>
              <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                <Icon active name="trash" />
              </Button>}
            //leftOpenValue={75}
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
export default connect(mapStateToProps, mapDispatchToProps)(MisPensamientosScreen);
