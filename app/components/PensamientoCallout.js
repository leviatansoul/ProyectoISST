import React, { Component } from 'react'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions'; //Import your actions

import {StyleSheet,  View, Dimensions} from "react-native";

import {Card, CardItem, Icon, Text, Button, Container, Header, Content, Left, Right, Badge, Title, List, ListItem, Footer, FooterTab, Body} from 'native-base'




export default class Pensamiento extends Component {

  constructor (props) {
    super(props)
    this.state = {icon:"ios-thumbs-up", icon2: "ios-thumbs-down"};

  }

  async componentWillMount () {


    }



  render() {
    return (
      <View>

         <View style={{width: Dimensions.get('window').width * 0.8}}>
           <Text style={{alignItems: 'center', flexDirection:'column'}}>{this.props.text}</Text>
           <Text note>{this.props.topic}</Text>
         </View>
         <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
         <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon active name="md-clock" />
                  <Text note style={{color:'lightgrey'}}>{this.props.date}</Text>
         </View>

        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                      <Icon active name="chatbubbles"  />
                      <Text note style={{color:'lightgrey'}}>{this.props.autor}</Text>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Icon active name="md-heart" />
                  <Text note style={{color:'lightgrey'}}>{this.props.likes}</Text>
      </View>
      </View>
      </View>
    );
  }
}
