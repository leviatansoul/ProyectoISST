
import React, { Component } from 'react'
import { View, Text, Alert } from 'react-native'
import { Icon, Button, Container, Header, Content, Left, Right, Body, Title, Form, Item, Label, Input, Footer } from 'native-base'
//import PasswordInputText from 'react-native-hide-show-password-input';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions'; //Import your actions


class Authentication extends Component {

 constructor(props) {
        super(props);
         this.state = {
            nickname: '',
            password: '',};
     this.autenticarUsuario = this.autenticarUsuario.bind(this)
    }


autenticarUsuario(nickname, password){
//  this.props.navigation.navigate('navigatorStack'); //POR SI NO FUNCIONA EL FETCH

const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nick: nickname, password: password })
    };




      var url = "http://"+this.props.url+"/PCG/LoginServlet";
console.log(url);
  fetch(url, requestOptions)
      .then((response)=> {
          if (response.status >= 400) {
              throw new Error("Bad response from server");
          }
          return response.json();
      })
      .then((data)=> {
          console.log(data);
          if (data == "ok"){
            this.props.putNickname(nickname);

           this.props.sendbirdLogin( nickname, nickname, this.props.navigation );
         this.props.navigation.navigate('navigatorStack')
      }
      else{
        Alert.alert(
'Error',
'Nickname o password incorrectos',
[
 {text: 'OK', onPress: () => console.log('OK Pressed')},
],
{ cancelable: false }
)
       //this.props.navigation.navigate('authenticationShow')
      }

      });
      }
      /*const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ 'nickname': nickname, 'password': password })
          };

          return fetch('http://'+this.props.url+'/PCG/LoginServlet', requestOptions)
          .then((response)=> {

              if (response.status >= 400) {
                  throw new Error("Bad response from server");
              }
              return response.json();
          })
          .then((data)=> {
              console.log(data);
              if (data == "ok"){

             this.props.navigation.navigate('navigatorStack')
          }
          else
          this.props.navigation.navigate('authenticationShow')
              });*/


    render () {

        return (
            <Container>
                <Header style={{backgroundColor:"#00cc99"}}>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back' onPress={() => this.props.navigation.goBack()}/>
                        </Button>
                    </Left>
                    <Body>
                        <Title>Inicio de sesión</Title>
                    </Body>
                </Header>
              <Container style={{padding:50}}>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Nombre de usuario</Label>
                            <Input onChangeText={(text) => this.setState({nickname: text})} />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Contraseña</Label>
                            <Input secureTextEntry={true} onChangeText={(text) => this.setState({password: text})}/>
                        </Item>
                    </Form>
                </Content>
                    <Button block rounded style={{backgroundColor:"#00cc99"}} onPress={() =>{
                      if (this.state.nickname == "" || this.state.password == ""){
                         Alert.alert(
                'Error',
                'Nickname o password sin rellenar',
                [
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
              )
                      }
                      else {
                        this.autenticarUsuario(this.state.nickname, this.state.password)
                      }

                    } }>
                        <Text style={{color: 'white'}}>IDENTIFICARSE</Text>
                    </Button>
              </Container>
            </Container>
        );
    }
}

function mapStateToProps(state, props) {
    return {
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
export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
