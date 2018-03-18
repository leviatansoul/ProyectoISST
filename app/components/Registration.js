import React, {Component, Fragment} from 'react'
import { View, Text } from 'react-native'
import { Icon, Button, Container, Header, Content, Left, Right, Body, Title, Form, Item, Label, Input, Footer } from 'native-base'
import PasswordInputText from 'react-native-hide-show-password-input';

class Registration extends Component {
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
                        <Text  style={{fontSize:20, color: 'white'}}>Registro</Text>
                    </Body>
                </Header>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Nombre</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel>
                            <Label>Apellidos</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel>
                            <Label>Correo electrónico</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel>
                            <Label>Nickname</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel>
                            <Label>Contraseña</Label>
                            <Input secureTextEntry={true}/>
                        </Item>
                        <Item floatingLabel>
                            <Label>Repetir contraseña</Label>
                            <Input secureTextEntry={true}/>
                        </Item>
                        <Item floatingLabel>
                            <Label>Facebook (opcional)</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label>WhatsApp (opcional)</Label>
                            <Input />
                        </Item>
                    </Form>
                </Content>
                <Footer>
                    <Button transparent onPress={() => this.props.navigation.navigate('signInUpStack')}>
                        <Text style={{color: 'white'}}>REGISTRARSE</Text>
                    </Button>
                </Footer>
            </Container>
        );
    }
}

export default Registration