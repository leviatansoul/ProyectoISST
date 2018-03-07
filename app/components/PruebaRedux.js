'use strict';
import {  Container,  Header,  Title,  Content,  Footer,  FooterTab,  Button,  Left,  Right,  Body,  Icon,  Input} from 'native-base'
import Expo from 'expo'

import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    View,
    Text,
    ActivityIndicator,

} from 'react-native';

import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions'; //Import your actions

class PruebaRedux extends Component {
    constructor(props) {
        super(props);

      this.state = {
        loading: true
      }

        this.renderItem = this.renderItem.bind(this);
    }

    componentDidMount() {
        this.props.getData(); //call our action
    }


  async componentWillMount () {
    await Expo.Font.loadAsync({ //Se necesita hacer para que funcione NativeBase
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    })
    this.setState({loading: false})
  }

    render() {
        if (this.props.loading && this.state.loading) {
            return (
                <View style={styles.activityIndicatorContainer}>
                    <ActivityIndicator animating={true}/>
                </View>
            );
        } else {
            return (
            <Container>
                <Header>
                    <Left>
                        <Icon name="menu" onPress={() =>
                          this.props.navigation.navigate('DrawerOpen')}/>
                    </Left>
                    <Body>
                    <Title>PruebaRedux</Title>
                    </Body>
                    <Right />
                </Header>
                <Body>
                <View style={{flex:1}}>
                    <View style={{flex:1, paddingTop:20}}>
                        <Text>{this.props.counter}</Text>
                    </View>
                  <View style={{flex:1}}>
                    <Button  onPress={this.props.incCounter}>
                      <Text>INCREMENTA</Text>
                    </Button>

                  </View>
                    <View style={{flex:1, backgroundColor: '#F5F5F5', paddingTop:20}}>
                        <FlatList
                          ref='listRef'
                          data={this.props.data}
                          renderItem={this.renderItem}
                          keyExtractor={(item, index) => index}/>
                    </View>
                </View>
                </Body>

            </Container>

            );
        }
    }

    renderItem({item, index}) {
        return (
            <View style={styles.row}>
                <Text style={styles.title}>
                    {(parseInt(index) + 1)}{". "}{item.title}
                </Text>
                <Text style={styles.description}>
                    {item.description}
                </Text>
            </View>
        )
    }
};



// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
    return {
        loading: state.dataReducer.loading,
        data: state.dataReducer.data,
        counter: state.counterReducer.counter
    }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/PruebaRedux.js)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(PruebaRedux);

const styles = StyleSheet.create({
    activityIndicatorContainer:{
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },

    row:{
        borderBottomWidth: 1,
        borderColor: "#ccc",
        padding: 10
    },

    title:{
        fontSize: 15,
        fontWeight: "600"
    },

    description:{
        marginTop: 5,
        fontSize: 14,
    }
});