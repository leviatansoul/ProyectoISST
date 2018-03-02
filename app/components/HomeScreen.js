import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DrawerNavigator, DrawerItems} from 'react-navigation'
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Input
} from 'native-base'
import Expo from 'expo'
import * as firebase from 'firebase'
import ListComponent from './ListComponent'

class HomeScreen extends Component {
//static navigationOptions = {
//drawerIcon:( <Image source={require('./assets.....')})
//style={{height:24, width:24}})}

constructor (props) {
    super(props)
    this.state = {
      nuevo: '',
      loading: true,
      lista: []
    }
  }

  agregarItem = () => {
    let nuevo = this.state.nuevo
    nuevo = {id: nuevo, name: nuevo, done: false}
    firebase.database().ref('items').push(nuevo)
    this.state.lista.push(nuevo)
    this.setState({lista: this.state.lista})
    console.log(nuevo)
  }

  changeDone = (item) => {
    console.log(item)
    let updates = {}
    updates['/items/' + item.id] = item
    firebase.database().ref().update(updates)
  }

  borrar = (item) => {
    let updates = {}
    updates['/items/' + item.id] = null
    firebase.database().ref().update(updates)

  }

  listenForItems = (itemsRef) => { //No entiendo bien que hace esto
    itemsRef.on('value', (snap) => {

      // get children as an array
      var lista = []
      snap.forEach((child) => {
        lista.push({
          name: child.val().name,
          done: child.val().done,
          id: child.key
        })
      })

      this.setState({
        lista: lista
      })

    })
  }

  async componentWillMount () {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    })

    const itemsRef = firebase.database().ref('items')
    this.listenForItems(itemsRef)

    this.setState({loading: false})
  }
  render(){
    if (this.state.loading) {
     return <Expo.AppLoading />
   }
    return (
      <Container>
        <Header>
          <Left>
            <Icon name="menu" onPress={() =>
            this.props.navigation.navigate('DrawerOpen')}/>
          </Left>
          <Body>
          <Title>PCG</Title>
          </Body>
          <Right />
        </Header>

        <Content>

          <Input
            value={this.state.nuevo}
            placeholder='Que otra cosa necesitas?'
            onChangeText={nuevo => this.setState({nuevo})}
          />


          <View style={styles.container}>
            <ListComponent
              lista={this.state.lista}
              changeDone={this.changeDone}
              borrar={this.borrar}
            />
          </View>
        </Content>

        <Footer>
          <FooterTab>
            <Button full
                    onPress={this.agregarItem}>
              <Text>Agregar</Text>
            </Button>
          </FooterTab>
        </Footer>
            </Container>

    );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'stretch'
    },
    header: {
      marginTop: 25
    }
  })

  // Initialize Firebase
  const firebaseConfig = {
    apiKey: 'AIzaSyBC6qHY8rQhUK14ObU59JJOrEjtoQls9mM',
    authDomain: 'proyectoisst.firebaseapp.com',
    databaseURL: 'https://proyectoisst.firebaseio.com',
    projectId: 'proyectoisst',
    storageBucket: 'proyectoisst.appspot.com',
    messagingSenderId: '586417651847'
  }
  const firebaseApp = firebase.initializeApp(firebaseConfig)

  // Initialize Firebase

export default HomeScreen;
