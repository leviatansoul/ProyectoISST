<<<<<<< HEAD
<<<<<<< HEAD
import React, {Component, Fragment} from 'react'
import { View } from 'react-native'
import { Icon,Text, Button, Container, Header, Content, Left, Right, Body, Title, Form, Item, Label, Input, Footer, Toast } from 'native-base'
=======
﻿import React, {Component, Fragment} from 'react'
import { View, Alert  } from 'react-native'
import { Icon,Text, Button, Container, Header, Content, Left, Right, Body, Title, Form, Item, Label, Input, Footer, Toast} from 'native-base'
>>>>>>> 60ebfdc0f05e72c82b4851dbade22f69b99cfc98
import PasswordInputText from 'react-native-hide-show-password-input';
=======
﻿import React, {Component, Fragment} from 'react'
import { View, Alert  } from 'react-native'
import { Icon,Text, Button, Container, Header, Content, Left, Right, Body, Title, Form, Item, Label, Input, Footer, Toast} from 'native-base'
//import PasswordInputText from 'react-native-hide-show-password-input';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions'; //Import your actions
import colors from './colors';
>>>>>>> 557fa05b3f5a6fcad3deba4614c43d805a161e01

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions'; //Import your actions

class Registration extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            apellidos: '',
            correo: '',

            contraseña1: '',
            contraseña2: '',
            facebook: '',
            whatsapp: '',
<<<<<<< HEAD
<<<<<<< HEAD
        }
=======
=======
>>>>>>> 557fa05b3f5a6fcad3deba4614c43d805a161e01
            showToast: false,

        };
        this.registrarUsuario = this.registrarUsuario.bind(this)
<<<<<<< HEAD
>>>>>>> 60ebfdc0f05e72c82b4851dbade22f69b99cfc98
    }
registrarUsuario(){
    if (this.state.nickname == "" || this.state.contraseña1 == "" || this.state.contraseña2 == "" || this.state.contraseña1 != this.state.contraseña2)  {
        this.setState({showToast: true});


    }
=======
    }
registrarUsuario(){
    if (this.state.nickname == "" || this.state.contraseña1 == "" || this.state.contraseña2 == "" || this.state.contraseña1 != this.state.contraseña2)  {
        this.setState({showToast: true});


    }
>>>>>>> 557fa05b3f5a6fcad3deba4614c43d805a161e01
    else{
password = this.state.contraseña1
nickname = this.state.nickname

 url = "http://"+this.props.url+"/PCG/RegistroServlet?nick="+nickname+"&password="+password;

 fetch(url)
      .then((response)=> {
          if (response.status >= 400) {
              throw new Error("Bad response from server");
          }
          return response.json();
      })
      .then((data)=> {
          console.log(data);
           if (data == "hello from server"){
<<<<<<< HEAD
=======

>>>>>>> 557fa05b3f5a6fcad3deba4614c43d805a161e01

         this.props.navigation.navigate('authenticationShow')
      }
      else if (data == "already exists"){
         console.log("ya esxiste el usuario")

         this.props.navigation.navigate('registrationShow')
      }
      else {
        this.props.navigation.navigate('registrationShow')
      }

      });
}}

         this.props.navigation.navigate('authenticationShow')
      }
      else if (data == "already exists"){
         console.log("ya esxiste el usuario")

         this.props.navigation.navigate('registrationShow')
      }
      else {
        this.props.navigation.navigate('registrationShow')
      }

      });
}}

    render () {

        return (
            <Container>
                <Header style={{backgroundColor:colors.logo}}>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back' onPress={() => this.props.navigation.goBack()}/>
                        </Button>
                    </Left>
                    <Body>
                        <Title>Registro</Title>
                    </Body>
                </Header>
              <Container style={{padding:50}}>
                <Content>

                    <Form>
                        <Item floatingLabel>
                            <Label>Nombre de usuario</Label>
                            <Input onChangeText={(text) => this.setState({nickname: text})}/>
                        </Item>
                        <Item floatingLabel>
                            <Label>Contraseña</Label>
                            <Input secureTextEntry={true} onChangeText={(text) => this.setState({contraseña1: text})}/>
                        </Item>
                        <Item floatingLabel>
                            <Label>Repetir contraseña</Label>
                            <Input secureTextEntry={true} onChangeText={(text) => this.setState({contraseña2: text})}/>
                        </Item>

                    </Form>

                </Content>
<<<<<<< HEAD
<<<<<<< HEAD
                    <Button block onPress={() => this.props.navigation.goBack()}>
                        <Text style={{color: 'white'}}>REGISTRARSE</Text>
=======

                   <Button block onPress={() => {
=======

              <Button block rounded style={{marginBottom:20}} >
                <Text style={{color: 'white'}}>Registrarse con Facebook</Text>
              </Button>

                   <Button block rounded style={{backgroundColor:colors.logo}} onPress={() => {
>>>>>>> 557fa05b3f5a6fcad3deba4614c43d805a161e01
                  if (this.state.nickname == "" || this.state.contraseña1 == "" || this.state.contraseña2 == "" || this.state.contraseña1 != this.state.contraseña2)  {
                   Alert.alert(
                'Error',
                'Nickname o campos de contraseñas sin rellenar',
                [
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                { cancelable: false }
              ) }
                  else {
                   this.registrarUsuario()}
                  }}>

                    <Text style={{color: 'white'}}>REGISTRARSE</Text>
<<<<<<< HEAD
>>>>>>> 60ebfdc0f05e72c82b4851dbade22f69b99cfc98
=======
>>>>>>> 557fa05b3f5a6fcad3deba4614c43d805a161e01
                    </Button>
              </Container>
            </Container>
        );
    }
}

<<<<<<< HEAD
<<<<<<< HEAD
export default Registration
=======
=======
>>>>>>> 557fa05b3f5a6fcad3deba4614c43d805a161e01
function mapStateToProps(state, props) {
    return {
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
export default connect(mapStateToProps, mapDispatchToProps)(Registration);
<<<<<<< HEAD
>>>>>>> 60ebfdc0f05e72c82b4851dbade22f69b99cfc98
=======
>>>>>>> 557fa05b3f5a6fcad3deba4614c43d805a161e01
