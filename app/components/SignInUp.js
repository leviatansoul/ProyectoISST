import React, { Component } from 'react'
import {View,  Alert, BackHandler, Linking, Image} from 'react-native'
import { Icon,Text, Button, Container, Header, Content, Left, Right, Body, Title, Form } from 'native-base'
import SafariView from 'react-native-safari-view'
import Expo from 'expo'
import colors from './colors';
//import { HandleFBLogin } from '../facebook/HandleFBLogin.js';


class SignInUp extends Component {

  constructor (props) {
    super(props)
    this.state = {
      loading: true };
  }

    componentDidMount() {
      BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
      Linking.addEventListener('url', this.handleOpenURL);
      // Launched from an external URL
      Linking.getInitialURL().then((url) => {
        if (url) {
          this.handleOpenURL({ url });
        }
      });
    }


  async componentWillMount () {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    Linking.removeEventListener('url', this.handleOpenURL);
    await Expo.Font.loadAsync({ //Se necesita hacer para que funcione NativeBase
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    })

    //vemos que pensamientos estan a menos de 20 km (20000 metros) y los metemos en el estado de esta clase
    //eso en versiones posteriores sera sacarlo de la bbdd y meterlo en el reducer
    //probar a cambiar las latitudes y longitudes de los pensamientos definidos a unas cercanas a las vuestras para ver q os funciona

    //LOGIN FACEBOOK PARA PAGINA WEB EN JS
    /*
    window.fbAsyncInit = function() {
    FB.init({
      appId      : 'ProyectoISST',
      cookie     : true,
      xfbml      : true,
      version    : '0'
    });

    FB.AppEvents.logPageView();

  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));
    */

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

    handleOpenURL = ({ url }) => {
      // Extract stringified user string out of the URL
      const [, user_string] = url.match(/user=([^#]+)/);
      this.setState({
        // Decode the user string and parse it into JSON
        user: JSON.parse(decodeURI(user_string))
      });
      if (Platform.OS === 'ios') {
        SafariView.dismiss();
      }
    };

    render () {
      if (this.state.loading ) {
        return <Expo.AppLoading />
      }
        return (
            <Container >
              <Image style={{position:"absolute",
                resizeMode: 'cover', height:"100%"}}
                     source={require('../images/fondointro4.png')}
              />
                <View style={{flex:1, flexDirection: 'column', justifyContent: 'space-around', alignItems: 'center', padding:50}}>

                  <View style={{flex:1 }}>

                  </View>
                    <View style={{flex:1,   flexDirection: 'column',
                      alignItems: 'center'}}>
                      <Image style={{height:100, width:80}}
                             source={require('../images/logoblanco.png')}
                      />
                      <Text style={{color:"white", fontSize:24}}>Pienso, luego me ubico</Text>
                    </View>
                    <View style={{flex:1 }}>

                    </View>
                    <View style={{flex:1}}>

                    </View>
                    <View style={{flex:1,    flexDirection: 'column',
                      alignItems: 'center'}}>
                      <View style={{marginTop:50}}>
                      <Button block rounded style={{backgroundColor:"#00cc99", width:"100%", height:50}} onPress={() => this.props.navigation.navigate('registrationShow')}>
                        <Text style={{color: 'white'}}>Empieza ahora</Text>
                      </Button>

                      <Button block transparent onPress={() => this.props.navigation.navigate('authenticationShow')}>
                        <Text style={{color: 'white'}}>Ya tengo una cuenta</Text>
                      </Button>
                      </View>
                    </View>

                </View>
            </Container>
        );
    }
}
export default SignInUp
