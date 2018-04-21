import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Icon, Button, Container, Header, Content, Left, Right, Body, Title, Form, Item, Label, Input, Footer } from 'native-base'
import PasswordInputText from 'react-native-hide-show-password-input';

class Authentication extends Component {

 constructor(props) {
        super(props);
         this.state = {
            nickname: '',
            password: '',};
     this.autenticarUsuario = this.autenticarUsuario.bind(this)
    }

autenticarUsuario(nickname, password){

  this.props.navigation.navigate('navigatorStack'); //BORRAR
  /*
      var url = "http://192.168.1.137/PCG/LoginServlet?nick="+nickname+"&password="+password;
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
          if (data == "ok"){
             
         this.props.navigation.navigate('navigatorStack')
      }
      else
      this.props.navigation.navigate('authenticationShow')
      }); */
}

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
                        <Title>Inicio de sesión</Title>
                    </Body>
                </Header>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Nick</Label>
                            <Input onChangeText={(text) => this.setState({nickname: text})} />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Contraseña</Label>
                            <Input secureTextEntry={true} onChangeText={(text) => this.setState({password: text})}/>
                        </Item>
                    </Form>
                </Content>
                    <Button block onPress={() => this.autenticarUsuario(this.state.nickname, this.state.password)}>
                        <Text style={{color: 'white'}}>IDENTIFICARSE</Text>
                    </Button>
            </Container>
        );
    }
}

export default Authentication
