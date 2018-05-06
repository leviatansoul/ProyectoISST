import React, { Component } from 'react'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions'; //Import your actions

import {StyleSheet,  View} from "react-native";

import { Icon, Text, Button, Container, Header, Content, Left, Right, Badge, Title, List, ListItem, Footer, FooterTab, Body} from 'native-base'




export default class Pensamiento extends Component {

  constructor (props) {
    super(props)
    this.state = {icon:"md-heart-outline",
      enabled:styles.none};
  }

  async componentWillMount () {
    if(this.props.enabled){
      this.setState({icon: "md-heart-outline"});
      this.setState({enabled: styles.visible});
      if(this.props.like){
        this.setState({icon: "md-heart"});
      }
    }

  }

  render() {
    return (

      <ListItem Rr>

        <Body>
        <Text>{this.props.text}</Text>
        </Body>
        <Right>
          <Text note style={{color:'lightgrey'}}>{this.props.autor}</Text>

          <Icon name={this.state.icon} style={[this.state.enabled]} />
        </Right>

      </ListItem>


    );
  }
}

const styles = StyleSheet.create({
  none: {
    display: "none"
  },
  visible: {
    display: "flex"
  }
});