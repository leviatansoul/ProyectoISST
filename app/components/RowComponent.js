import React, { Component } from 'react'
import { Container, Content, List, ListItem, Text, Icon, Badge, Left, Body, Right, Switch } from 'native-base'
import { TouchableWithoutFeedback, Animated, Alert } from 'react-native'

const ACTION_TIMER = 400

class RowComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      done: false,
      pressAction: new Animated.Value(0),
      item: null
    }
  }

  componentWillMount () {
    this._value = 0
    this.state.pressAction.addListener((v) => this._value = v.value)
  }

  changeDone = (item) => {
//        this.setState({done:!this.state.done});
    console.log(item)

  }
  pressIn = () => {
    Animated.timing(this.state.pressAction, {
      duration: ACTION_TIMER,
      toValue: 1
    }).start(this.animationActionComplete)
  }

  animationActionComplete = () => {
    const message = '¿Seguro que quieres eliminarlo?'
    if (this._value === 1) {
      Alert.alert(
        'ELIMINAR',
        message,
        [
          {
            text: 'Borrar',
            onPress: this.borrar
          },
          {
            text: 'Cancelar',
            onPress: null
          }
        ]
      )
    }
  }

  borrar = () => {
    this.props.borrar(this.props.item)
  }

  render () {
    return (
      <TouchableWithoutFeedback
        onPressIn={this.pressIn}
        onPressOut={this.pressOut}
      >
        <ListItem icon>
          <Left>
            <Icon name="pizza"/>
          </Left>
          <Body>
          <Text>{this.props.item.name}</Text>
          </Body>

          <Right>
            <Switch onValueChange={() => {
              this.props.item.done = !this.props.item.done
              this.props.changeDone(this.props.item)
            }} value={this.props.item.done}/>
          </Right>
        </ListItem>
      </TouchableWithoutFeedback>

    )
  }

}

export default RowComponent
