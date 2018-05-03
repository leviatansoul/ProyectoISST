import React, { Component } from 'react'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions'; //Import your actions

import {StyleSheet,  View} from "react-native";

import {Card, CardItem, Icon, Text, Button, Container, Header, Content, Left, Right, Badge, Title, List, ListItem, Footer, FooterTab, Body} from 'native-base'




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

       <Card>
            <CardItem>
            <Left>
            <Button transparent>
            <Icon name={this.state.icon} style={[this.state.enabled]} />
            </Button>
                <Body>
                  <Text>{this.props.text}</Text>
                  <Text note>{this.props.topic}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
             </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text note style={{color:'lightgrey'}}>{this.props.autor}</Text>
                </Button>
              </Body>
              <Right>
                <Text>{this.props.date}</Text>
              </Right>
            </CardItem>
          </Card>

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