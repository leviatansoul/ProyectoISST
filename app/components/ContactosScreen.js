import React, { Component } from 'react'
import { View,  ListView} from 'react-native'
import { Icon, Button, Text, Container, Header,  Content, Left, Right, Body, Title, List,Segment, ListItem } from 'native-base'
import Expo from 'expo'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions'; //Import your actions
import FooterGlobal from "./FooterGlobal"


class ContactosScreen extends Component {


  constructor(props) {
    super(props);
    this.state = {
      loading: true};
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.appClick = this.appClick.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
  }

  async componentWillMount () {
/*
    var url = "http://192.168.1.130:8080/PCG/PensamientosGuardadosServlet?nick="+this.props.nickname;
    console.log(url);

    fetch(url)
    .then((response)=> {

        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })
    .then((data)=> {
        console.log(data);

        this.props.updateContactos(data);

       }
     );
     */
this.props.updateContactos();

     this.setState({loading: false})


  }

  appClick(visita) {
    let indice = this.props.contactos.indexOf(visita);
    console.log(indice);
    //  this.props.navigation.navigate('Detalles', { indice: indice, visits: this.state.visitas });

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
          <Title>ContactosScreen</Title>
          </Body>
          <Right />
        </Header>
        <Content scrollEnabled={true}>

          <List
            dataSource={this.ds.cloneWithRows(this.props.contactos)}
            renderRow={data =>

              //hay que hacer algo si no hay nada guardado
              <ListItem Rr>

                <Body>
                <Text>{data.nick}</Text>
                </Body>
                <Right>
                  <Text note style={{color:'lightgrey'}}>{data.img}</Text>
                </Right>


              </ListItem>}
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
export default connect(mapStateToProps, mapDispatchToProps)(ContactosScreen);
