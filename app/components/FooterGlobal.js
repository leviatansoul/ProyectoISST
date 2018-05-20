import React, { Component } from 'react'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions'; //Import your actions


import {View, Fab, Icon, Text, Button, Container, Header, Content, Left, Right, Badge, Title, List, ListItem, Footer, FooterTab} from 'native-base'
import colors from './colors';




class FooterGlobal extends Component {
  render() {
    console.log(this.props.itemSelectede);
    if(this.props.itemSelectede === "1"){
      return(
        <Footer style={{backgroundColor:colors.logo}}>

          <Container>
          <View style={{backgroundColor:"#ffffff", flex:1, flexDirection:"row", justifyContent: 'space-between', paddingLeft:8}} >

            <View style={{flex:1, alignItems:"center"}}>
              <Button transparent  vertical  onPress={() =>
                this.props.updateFooter(1, this.props.navigation)
              }  >

                <Icon style={{color:colors.logo}} name="eye" active />
                <Text style={{color:colors.logo, fontSize: 10}}>Home</Text>
              </Button>
            </View>

            <View style={{flex:1, alignItems:"center"}}>
              <Button transparent vertical onPress={() =>
                this.props.updateFooter(2, this.props.navigation)
              }   >
                <Icon style={{color:colors.gray}} name="md-finger-print"  />
                <Text style={{color:colors.gray, fontSize: 10}}>Mios</Text>
              </Button>
            </View>

            <View style={{flex:1, alignItems:"center"}}>

              <Button transparent  vertical onPress={() =>
                this.props.updateFooter(3, this.props.navigation)}
                     >
                <Icon style={{color:colors.gray}} name="star-half"  />
                <Text style={{color:colors.gray, fontSize: 10}}>Favs</Text>
              </Button>
            </View>

            <View style={{flex:1, alignItems:"center"}}>
              <Button transparent  vertical onPress={() =>
                this.props.updateFooter(4, this.props.navigation)}
                      >
                <Icon style={{color:colors.gray}} name="map"/>
                <Text style={{color:colors.gray, fontSize: 10}}>Mapa</Text>
              </Button>

            </View>

            <View style={{flex:1, alignItems:"center"}}>

              <Button transparent vertical onPress={() =>
                this.props.updateFooter(5, this.props.navigation)}
                     >
                <Icon style={{color:colors.gray}} name="person"  />
                <Text style={{color:colors.gray, fontSize: 10}}>Chat</Text>
              </Button>

            </View>






          </View>
          </Container>
        </Footer>
      );
    } else if (this.props.itemSelectede === "2"){
      return(
      <Footer style={{backgroundColor:colors.logo}}>

        <Container>
          <View style={{backgroundColor:"#ffffff", flex:1, flexDirection:"row",   justifyContent: 'space-between', paddingLeft:8}} >

            <View style={{flex:1, alignItems:"center"}}>
              <Button transparent  vertical  onPress={() =>
                this.props.updateFooter(1, this.props.navigation)
              }  >

                <Icon style={{color:colors.gray}} name="eye" active />
                <Text style={{color:colors.gray, fontSize: 10}}>Home</Text>
              </Button>
            </View>

            <View style={{flex:1, alignItems:"center"}}>
              <Button transparent vertical onPress={() =>
                this.props.updateFooter(2, this.props.navigation)
              }   >
                <Icon style={{color:colors.logo}} name="md-finger-print"  />
                <Text style={{color:colors.logo, fontSize: 10}}>Mios</Text>
              </Button>
            </View>

            <View style={{flex:1, alignItems:"center"}}>

              <Button transparent  vertical onPress={() =>
                this.props.updateFooter(3, this.props.navigation)}
                      >
                <Icon style={{color:colors.gray}} name="star-half" />
                <Text style={{color:colors.gray, fontSize: 10}}>Favs</Text>
              </Button>
            </View>

            <View style={{flex:1, alignItems:"center"}}>
              <Button transparent  vertical onPress={() =>
                this.props.updateFooter(4, this.props.navigation)}
                     >
                <Icon style={{color:colors.gray}} name="map"  />
                <Text style={{color:colors.gray, fontSize: 10}}>Mapa</Text>
              </Button>

            </View>

            <View style={{flex:1, alignItems:"center"}}>

              <Button transparent vertical onPress={() =>
                this.props.updateFooter(5, this.props.navigation)}
                     >
                <Icon style={{color:colors.gray}} name="person"  />
                <Text style={{color:colors.gray, fontSize: 10}}>Chat</Text>
              </Button>

            </View>






          </View>
        </Container>
      </Footer>)
    }else if (this.props.itemSelectede === "3"){
      return(
      <Footer style={{backgroundColor:colors.logo}}>

        <Container>
          <View style={{backgroundColor:"#ffffff", flex:1, flexDirection:"row",   justifyContent: 'space-between', paddingLeft:8}} >

            <View style={{flex:1, alignItems:"center"}}>
              <Button transparent  vertical  onPress={() =>
                this.props.updateFooter(1, this.props.navigation)
              }  >

                <Icon style={{color:colors.gray}} name="eye" active />
                <Text style={{color:colors.gray, fontSize: 10}}>Home</Text>
              </Button>
            </View>

            <View style={{flex:1, alignItems:"center"}}>
              <Button transparent vertical onPress={() =>
                this.props.updateFooter(2, this.props.navigation)
              }   >
                <Icon style={{color:colors.gray}} name="md-finger-print"  />
                <Text style={{color:colors.gray, fontSize: 10}}>Mios</Text>
              </Button>
            </View>

            <View style={{flex:1, alignItems:"center"}}>

              <Button transparent  vertical onPress={() =>
                this.props.updateFooter(3, this.props.navigation)}
                      >
                <Icon style={{color:colors.logo}} name="star-half"  />
                <Text style={{color:colors.logo, fontSize: 10}}>Favs</Text>
              </Button>
            </View>

            <View style={{flex:1, alignItems:"center"}}>
              <Button transparent  vertical onPress={() =>
                this.props.updateFooter(4, this.props.navigation)}
                    >
                <Icon style={{color:colors.gray}} name="map"  />
                <Text style={{color:colors.gray, fontSize: 10}}>Mapa</Text>
              </Button>

            </View>

            <View style={{flex:1, alignItems:"center"}}>

              <Button transparent vertical onPress={() =>
                this.props.updateFooter(5, this.props.navigation)}
                      >
                <Icon style={{color:colors.gray}} name="person" />
                <Text style={{color:colors.gray, fontSize: 10}}>Chat</Text>
              </Button>

            </View>






          </View>
        </Container>
      </Footer> )
    }else if (this.props.itemSelectede === "4"){
      return(
      <Footer style={{backgroundColor:colors.logo}}>

        <Container>
          <View style={{backgroundColor:"#ffffff", flex:1, flexDirection:"row",   justifyContent: 'space-between', paddingLeft:8}} >

            <View style={{flex:1, alignItems:"center"}}>
              <Button transparent  vertical  onPress={() =>
                this.props.updateFooter(1, this.props.navigation)
              }  >

                <Icon style={{color:colors.gray}} name="eye" active />
                <Text style={{color:colors.gray, fontSize: 10}}>Home</Text>
              </Button>
            </View>

            <View style={{flex:1, alignItems:"center"}}>
              <Button transparent vertical onPress={() =>
                this.props.updateFooter(2, this.props.navigation)
              }  active ={this.props.itemSelected === 2} >
                <Icon style={{color:colors.gray}} name="md-finger-print" active ={this.props.itemSelected === 2} />
                <Text style={{color:colors.gray, fontSize: 10}}>Mios</Text>
              </Button>
            </View>

            <View style={{flex:1, alignItems:"center"}}>

              <Button transparent  vertical onPress={() =>
                this.props.updateFooter(3, this.props.navigation)}
                      active ={this.props.itemSelected === 3}>
                <Icon style={{color:colors.gray}} name="star-half" active ={this.props.itemSelected === 3} />
                <Text style={{color:colors.gray, fontSize: 10}}>Favs</Text>
              </Button>
            </View>

            <View style={{flex:1, alignItems:"center"}}>
              <Button transparent  vertical onPress={() =>
                this.props.updateFooter(4, this.props.navigation)}
                      active ={this.props.itemSelected === 4}>
                <Icon style={{color:colors.logo}} name="map" active ={this.props.itemSelected === 4} />
                <Text style={{color:colors.logo, fontSize: 10}}>Mapa</Text>
              </Button>

            </View>

            <View style={{flex:1, alignItems:"center"}}>

              <Button transparent vertical onPress={() =>
                this.props.updateFooter(5, this.props.navigation)}
                      active ={this.props.itemSelected === 5}>
                <Icon style={{color:colors.gray}} name="person" active ={this.props.itemSelected === 5} />
                <Text style={{color:colors.gray, fontSize: 10}}>Chat</Text>
              </Button>

            </View>






          </View>
        </Container>
      </Footer>
      );
    }else if (this.props.itemSelectede === "5"){
      return(
      <Footer style={{backgroundColor:colors.logo}}>

        <Container>
          <View style={{backgroundColor:"#ffffff", flex:1, flexDirection:"row",   justifyContent: 'space-between', paddingLeft:8}} >

            <View style={{flex:1, alignItems:"center"}}>
              <Button transparent  vertical  onPress={() =>
                this.props.updateFooter(1, this.props.navigation)
              }  >

                <Icon style={{color:colors.gray}} name="eye" active />
                <Text style={{color:colors.gray, fontSize: 10}}>Home</Text>
              </Button>
            </View>

            <View style={{flex:1, alignItems:"center"}}>
              <Button transparent vertical onPress={() =>
                this.props.updateFooter(2, this.props.navigation)
              }   >
                <Icon style={{color:colors.gray}} name="md-finger-print"  />
                <Text style={{color:colors.gray, fontSize: 10}}>Mios</Text>
              </Button>
            </View>

            <View style={{flex:1, alignItems:"center"}}>

              <Button transparent  vertical onPress={() =>
                this.props.updateFooter(3, this.props.navigation)}
                      >
                <Icon style={{color:colors.gray}} name="star-half"  />
                <Text style={{color:colors.gray, fontSize: 10}}>Favs</Text>
              </Button>
            </View>

            <View style={{flex:1, alignItems:"center"}}>
              <Button transparent  vertical onPress={() =>
                this.props.updateFooter(4, this.props.navigation)}
                      >
                <Icon style={{color:colors.gray}} name="map"  />
                <Text style={{color:colors.gray, fontSize: 10}}>Mapa</Text>
              </Button>

            </View>

            <View style={{flex:1, alignItems:"center"}}>

              <Button transparent vertical onPress={() =>
                this.props.updateFooter(5, this.props.navigation)}
                     >
                <Icon style={{color:colors.logo}} name="person"  />
                <Text style={{color:colors.logo, fontSize: 10}}>Chat</Text>
              </Button>

            </View>






          </View>
        </Container>
      </Footer>
      );
    }

  }
}

function mapStateToProps(state, props) {
  return {
    itemSelected: state.footerReducer.itemSelected
  }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/PruebaRedux.js)
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(FooterGlobal);
