import React, { Component } from 'react'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions'; //Import your actions


import {View, Fab, Icon, Text, Button, Container, Header, Content, Left, Right, Badge, Title, List, ListItem, Footer, FooterTab} from 'native-base'




class FooterGlobal extends Component {
  render() {
    return (

        <Footer>
        
          <FooterTab >


            <Button vertical  onPress={() =>
             this.props.updateFooter(1, this.props.navigation)
            }  active ={this.props.itemSelected === 1}>

              <Icon name="eye" active ={this.props.itemSelected === 1}/>
              <Text>Home</Text>
            </Button>


            <Button vertical onPress={() =>
              this.props.updateFooter(2, this.props.navigation)
            }  active ={this.props.itemSelected === 2} >
              <Icon  name="md-finger-print" active ={this.props.itemSelected === 2} />
              <Text>Mios</Text>
            </Button>

            <Button vertical onPress={() =>
              this.props.updateFooter(3, this.props.navigation)}
              active ={this.props.itemSelected === 3}>
              <Icon name="star-half" active ={this.props.itemSelected === 3} />
              <Text>Favs</Text>
            </Button>

            <Button vertical onPress={() =>
              this.props.updateFooter(4, this.props.navigation)}
                    active ={this.props.itemSelected === 4}>
              <Icon name="person" active ={this.props.itemSelected === 4} />
              <Text>Contactos</Text>
            </Button>





          </FooterTab>
        
        </Footer>


    );
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
