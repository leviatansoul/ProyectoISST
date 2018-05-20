import React, { Component } from 'react'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions'; //Import your actions

import {StyleSheet,  View} from "react-native";

import {Card, CardItem, Icon, Text, Button, Container, Header, Content, Left, Right, Badge, Title, List, ListItem, Footer, FooterTab, Body} from 'native-base'




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

<<<<<<< HEAD
      <ListItem Rr>

       <Card>
            <CardItem>
            <Left>
            <Button transparent>
            <Icon name={this.state.icon2} style={[this.state.enabled]} />
            <Icon name="md-sad" style={[this.state.enabled]} />

            </Button>
                <Body>
                  <Text>{this.props.text}</Text>
                  <Text note>{this.props.topic}</Text>
                </Body>
              </Left>
              <Right>
              <Button transparent>
              <Icon name="md-happy" style={[this.state.enabled]} />
            <Icon name={this.state.icon} style={[this.state.enabled]} />
            </Button>
                </Right>
            </CardItem>
            <CardItem cardBody>
             </CardItem>
=======
      <ListItem style={{borderBottomWidth:0, margin:"auto"}}>

       <Card style={{marginLeft:18}}  >
            <CardItem>

              <View>
                <Text>{this.props.text}</Text>
                <Text note style={{marginTop:5}}>{this.props.topic}</Text>
              </View>

            </CardItem>
>>>>>>> 557fa05b3f5a6fcad3deba4614c43d805a161e01
            <CardItem>
              <Left>
              <Button transparent>
                  <Icon active name="md-clock" />
                  <Text note style={{color:'lightgrey'}}>{this.props.date}</Text>
                </Button>
              </Left>
              <Body>
<<<<<<< HEAD
                <Button transparent style={[this.state.enabled2]}>
=======
                <Button transparent style={[this.state.enabled2]}  onPress={() => this.props.contactar(this.props.autor)}>
>>>>>>> 557fa05b3f5a6fcad3deba4614c43d805a161e01
                  <Icon active name="chatbubbles"  />
                  <Text note style={{color:'lightgrey'}}>{this.props.autor}</Text>
                </Button>
              </Body>
              <Right>
              <Button transparent>
                  <Icon active name="md-heart" />
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
