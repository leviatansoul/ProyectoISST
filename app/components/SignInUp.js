import React, { Component } from 'react'
import {View,  Alert, BackHandler} from 'react-native'
import { Icon,Text, Button, Container, Header, Content, Left, Right, Body, Title, Form } from 'native-base'
import Expo from 'expo'


class SignInUp extends Component {

  constructor (props) {
    super(props)
    this.state = {
      loading: true };
  }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
    }


  async componentWillMount () {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    await Expo.Font.loadAsync({ //Se necesita hacer para que funcione NativeBase
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    })
    //vemos que pensamientos estan a menos de 20 km (20000 metros) y los metemos en el estado de esta clase
    //eso en versiones posteriores sera sacarlo de la bbdd y meterlo en el reducer
    //probar a cambiar las latitudes y longitudes de los pensamientos definidos a unas cercanas a las vuestras para ver q os funciona

    this.setState({loading: false})
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
      if (this.state.loading ) {
        return <Expo.AppLoading />
      }
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