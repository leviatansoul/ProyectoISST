import React, { Component } from 'react'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions'; //Import your actions

import {StyleSheet,  View} from "react-native";

import { Icon, Text, Button, Container, Header, Content, Left, Right, Badge, Title, List, ListItem, Footer, FooterTab, Body} from 'native-base'




export default class Pensamiento extends Component {
  render() {
    return (

      <ListItem Rr>

        <Body>
        <Text>{this.props.text}</Text>
        </Body>
        <Right>
          <Text note style={{color:'lightgrey'}}>{this.props.autor}</Text>
        </Right>

      </ListItem>


    );
  }
}
