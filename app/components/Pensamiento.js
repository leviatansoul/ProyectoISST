import React, { Component } from 'react'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions'; //Import your actions

import {StyleSheet,  View} from "react-native";

import {Card, CardItem, Icon, Text, Button, Container, Header, Content, Left, Right, Badge, Title, List, ListItem, Footer, FooterTab, Body} from 'native-base'

import colors from './colors';


export default class Pensamiento extends Component {

  constructor (props) {
    super(props)
    this.state = {icon:"ios-thumbs-up", icon2: "ios-thumbs-down",
      enabled:styles.none, enabled2: styles.none};

  }

  async componentWillMount () {
    if(this.props.enabled){
      this.setState({icon: "md-arrow-forward", icon2: "md-arrow-back"});
      this.setState({enabled: styles.visible, enabled2:styles.visible});
    }
      if(this.props.like){
        this.setState({enabled: styles.none, enabled2:styles.visible});
      }
      if (!this.props.like && !this.props.enabled){
        this.setState({enabled: styles.none, enabled2:styles.none});

      }
    }



  render() {
    return (

      <ListItem style={{borderBottomWidth:0, margin:"auto"}}>

       <Card style={{marginLeft:18}}  >
            <CardItem>

              <View>
                <Text>{this.props.text}</Text>
                <Text note style={{marginTop:5}}>{this.props.topic}</Text>
              </View>

            </CardItem>
            <CardItem>
              <Left>
              <Button transparent>
                  <Icon active style={{color:colors.logo}} name="md-clock" />
                  <Text note style={{color:'lightgrey'}}>{this.props.date}</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent style={[this.state.enabled2]}  onPress={() => this.props.contactar(this.props.autor)}>
                  <Icon active name="chatbubbles"  />
                  <Text note style={{color:'lightgrey'}}>{this.props.autor}</Text>
                </Button>
              </Body>
              <Right>
              <Button transparent>
                  <Icon active name="md-heart" style={{color:colors.red}}/>
                  <Text note style={{color:'lightgrey'}}>{this.props.likes}</Text>
                </Button>

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
