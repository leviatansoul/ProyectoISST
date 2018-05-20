import React, { Component } from 'react'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions'; //Import your actions

import {StyleSheet,  View} from "react-native";

import {Card, CardItem, Icon, Text, Button, Container, Header, Content, Left, Right, Badge, Title, List, ListItem, Footer, FooterTab, Body} from 'native-base'

<<<<<<< HEAD
=======
import colors from './colors';
>>>>>>> 01ccd2aa0c8090b13002b9fc1a646d1b7845614a



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


       <Card  >
            <CardItem>
            <Left>
            <Button transparent>
            <Icon name={this.state.icon2} style={[this.state.enabled]} />
            <Icon name="md-sad" style={[this.state.enabled]} />

            </Button>

              </Left>
              <Body>
                <Text/>

              </Body>
              <Right>
              <Button transparent>
              <Icon name="md-happy" style={[this.state.enabled]} />
            <Icon name={this.state.icon} style={[this.state.enabled]} />
            </Button>
                </Right>
            </CardItem>
         <CardItem>

           <Body>
           <Text/>
           <Text/>
           <Text/>
           <Text/>
           <Text/>
           </Body>
         </CardItem>
            <CardItem cardBody>
              <View style={{
                flex: 1,
                flexDirection: 'column',
                alignItems: 'center',
<<<<<<< HEAD
                padding: 10

              }}>
                <Text style={{fontSize:32}}>{this.props.text}</Text>
=======
                padding: 20

              }}>
                <Text style={{fontSize:28}}>{this.props.text}</Text>
>>>>>>> 01ccd2aa0c8090b13002b9fc1a646d1b7845614a
                <Text note>{this.props.topic}</Text>
              </View>
             </CardItem>

         <CardItem>

           <Body>
           <Text/>
           <Text/>
           <Text/>
           <Text/>
           </Body>
         </CardItem>

            <CardItem>
              <Left>
              <Button transparent>
<<<<<<< HEAD
                  <Icon active name="md-clock" />
=======
                  <Icon active name="md-clock" style={{color:colors.logo}}/>
>>>>>>> 01ccd2aa0c8090b13002b9fc1a646d1b7845614a
                  <Text note style={{color:'lightgrey'}}>{this.props.date}</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent style={[this.state.enabled2]}  onPress={() => this.props.contactar(this.props.autor)}>
<<<<<<< HEAD
                  <Icon active name="chatbubbles"  />
=======
                  <Icon active name="chatbubbles" style={{color:colors.logo}} />
>>>>>>> 01ccd2aa0c8090b13002b9fc1a646d1b7845614a
                  <Text note style={{color:'lightgrey'}}>{this.props.autor}</Text>
                </Button>
              </Body>
              <Right>
              <Button transparent>
<<<<<<< HEAD
                  <Icon active name="md-heart" />
=======
                  <Icon active name="md-heart" style={{color:colors.red}}/>
>>>>>>> 01ccd2aa0c8090b13002b9fc1a646d1b7845614a
                  <Text note style={{color:'lightgrey'}}>{this.props.likes}</Text>
                </Button>

              </Right>
            </CardItem>

          </Card>



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
