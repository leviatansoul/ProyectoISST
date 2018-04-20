import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Icon, Button, Container, Header, Content, Left, Right, Body, Title, Form, Item, Label, Input, Footer } from 'native-base'
import PasswordInputText from 'react-native-hide-show-password-input';

class Authentication extends Component {

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
                        <Text style={{fontSize:20, color: 'white'}}>Inicio de sesión</Text>
                    </Body>
                </Header>
                <Content>
                    <Form>
                        <Item floatingLabel>
                            <Label>Nick</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Contraseña</Label>
                            <Input secureTextEntry={true}/>
                        </Item>
                    </Form>
                </Content>
                    <Button block onPress={() => this.props.navigation.navigate('navigatorStack')}>
                        <Text style={{color: 'white'}}>IDENTIFICARSE</Text>
                    </Button>
            </Container>
        );
    }
}

export default Authentication
