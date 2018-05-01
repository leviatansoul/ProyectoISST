import React, {Component, Fragment} from 'react'
import { View, Alert  } from 'react-native'
import { Icon,Text, Button, Container, Header, Content, Left, Right, Body, Title, Form, Item, Label, Input, Footer, Toast} from 'native-base'
import PasswordInputText from 'react-native-hide-show-password-input';

class Registration extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            apellidos: '',
            correo: '',
            nickname: '',
            contraseña1: '',
            contraseña2: '',
            facebook: '',
            whatsapp: '',
            showToast: false,

        };
        this.registrarUsuario = this.registrarUsuario.bind(this)
    }
registrarUsuario(){
    if (this.state.nickname == "" || this.state.contraseña1 == "" || this.state.contraseña2 == "" || this.state.contraseña1 != this.state.contraseña2)  {
        this.setState({showToast: true});


    }
    else{
password = this.state.contraseña1
nickname = this.state.nickname

 url = "http://192.168.1.40/PCG/RegistroServlet?nick="+nickname+"&password="+password;

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


         this.props.navigation.navigate('authenticationShow')
      }
      else if (data == "already exists"){
         console.log("ya existe el usuario")    

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
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='arrow-back' onPress={() => this.props.navigation.goBack()}/>
                        </Button>
                    </Left>
                    <Body>
                        <Title>Registro</Title>
                    </Body>
                </Header>
                <Content>

                    <Form>
                        <Item floatingLabel>
                            <Label>Nombre</Label>
                            <Input onChangeText={(text) => this.setState({nombre: text})}/>
                        </Item>
                        <Item floatingLabel>
                            <Label>Apellidos</Label>
                            <Input onChangeText={(text) => this.setState({apellidos: text})}/>
                        </Item>
                        <Item floatingLabel>
                            <Label>Correo electrónico</Label>
                            <Input onChangeText={(text) => this.setState({correo: text})}/>
                        </Item>
                        <Item floatingLabel>
                            <Label>Nickname</Label>
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
                        <Item floatingLabel>
                            <Label>Facebook (opcional)</Label>
                            <Input onChangeText={(text) => this.setState({facebook: text})}/>
                        </Item>
                        <Item floatingLabel last>
                            <Label>WhatsApp (opcional)</Label>
                            <Input onChangeText={(text) => this.setState({whatsapp: text})}/>
                        </Item>
                    </Form>

                </Content>

                   <Button block onPress={() => {
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
                    </Button>
            </Container>
        );
    }
}

export default Registration
