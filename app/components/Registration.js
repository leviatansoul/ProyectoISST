import React, {Component, Fragment} from 'react'
import { View } from 'react-native'
import { Icon,Text, Button, Container, Header, Content, Left, Right, Body, Title, Form, Item, Label, Input, Footer } from 'native-base'
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

        };
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
                    <Button block onPress={() => this.props.navigation.navigate('signInUpStack')}>
                        <Text style={{color: 'white'}}>REGISTRARSE</Text>
                    </Button>
            </Container>
        );
    }
}

export default Registration
