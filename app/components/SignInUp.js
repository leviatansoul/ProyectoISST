import React, { Component } from 'react'
import {View, Text, Alert, BackHandler} from 'react-native'
import { Icon, Button, Container, Header, Content, Left, Right, Body, Title, Form } from 'native-base'

class SignInUp extends Component {

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    handleBackButton() {
        Alert.alert(
            '¿Quieres salir de la aplicación?',
            '',
            [
                {text: 'Sí', onPress: () => BackHandler.exitApp()},
                {text: 'No', style: 'cancel'},
            ],
            { cancelable: false }
        )
        return true
    }

    render () {

        return (
            <Container>
                <Header>
                    <Body >
                    <Text style={{fontSize:20, color: 'white'}}>PCG</Text>
                    </Body>
                </Header>
                <View style={{flex:1, flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', paddingTop:40}}>
                    <View style={{flex:1, paddingTop:20}}>
                        <Text>ICONO</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Button block onPress={() => this.props.navigation.navigate('authenticationShow')}>
                            <Text style={{color: 'white'}}>Identificarse</Text>
                        </Button>
                    </View>
                    <View style={{flex:1}}>
                        <Button block onPress={() => this.props.navigation.navigate('registrationShow')}>
                            <Text style={{color: 'white'}}>Registrarse</Text>
                        </Button>
                    </View>
                </View>
            </Container>
        );
    }
}
export default SignInUp