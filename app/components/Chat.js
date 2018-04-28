/*import React, { Component } from 'react'
import { View,  ListView} from 'react-native'
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';

import * as Actions from '../actions'; //Import your actions
import Message from './message';
import MessageItem from './messageParts/messageItem';

import MessageInput from './messageParts/messageInput';


import {
  sbGetOpenChannel,
  sbCreatePreviousMessageListQuery,
  sbAdjustMessageList
} from '../sendbirdActions'; */
/*
class Chat extends Component {


  constructor(props) {
    super(props);
    this.state = {
      previousMessageListQuery: null,
      textMessage: ''
    }
  }

  componentDidMount() {
    this.props.initChatScreen();
    this.props.navigation.setParams({ handleHeaderLeft: this._onBackButtonPress });

    const { channelUrl } = this.props.navigation.state.params;
    sbGetOpenChannel(channelUrl)
      .then((channel) => {
        this.props.navigation.setParams({ title: channel.name });
        this._componentInit();
      })
  }

  _componentInit = () => {
    const { channelUrl } = this.props.navigation.state.params;
    this.props.createChatHandler(channelUrl);
    this._getMessageList(true);
  }

  _onBackButtonPress = () => {
    const { channelUrl } = this.props.navigation.state.params;
    this.props.channelExit(channelUrl);
  }

  componentWillReceiveProps(props) {
    const { exit } = props;
    if (exit) {
      this.props.navigation.goBack();
    }
  }

  _onTextMessageChanged = (textMessage) => {
    this.setState({ textMessage });
  }

  _getMessageList = (init) => {
    if (!this.state.previousMessageListQuery && !init) {
      return;
    }
    const { channelUrl } = this.props.navigation.state.params;
    if (init) {
      sbCreatePreviousMessageListQuery(channelUrl)
        .then((previousMessageListQuery) => {
          this.setState({ previousMessageListQuery }, () => {
            this.props.getPrevMessageList(this.state.previousMessageListQuery);
          });
        })
        .catch((error) => this.props.navigation.goBack() );
    } else {
      this.props.getPrevMessageList(this.state.previousMessageListQuery);
    }
  }

  _onSendButtonPress = () => {
    if (this.state.textMessage) {
      const { channelUrl } = this.props.navigation.state.params;
      const { textMessage } = this.state;
      this.setState({ textMessage: '' }, () => {
        this.props.onSendButtonPress(channelUrl, textMessage);
        this.refs.chatSection.scrollTo({ y: 0 });
      });
    }
  }

  _renderList = (rowData) => {
    const { channel } = this.state;
    if (rowData.isUserMessage()) {
      return (
        <Message
          key={rowData.messageId ? rowData.messageId : rowData.reqId}
          isShow={rowData.sender.isShow}
          isUser={rowData.isUser}
          profileUrl={rowData.sender.profileUrl.replace('http://', 'https://')}
          nickname={rowData.sender.nickname}
          time={rowData.time}
          message={(
            <MessageItem
              isUser={rowData.isUser}
              message={rowData.message}
            />
          )}
        />
      )
    } else { // FileMessage/AdminMessage
      return (<View></View>)
    }
  }

  render() {
    return (
      <View style={styles.containerViewStyle}>
        <View style={styles.messageListViewStyle}>
          <ListView
            ref='chatSection'
            enableEmptySections={true}
            renderRow={this._renderList}
            dataSource={this.props.list}
            onEndReached={() => this._getMessageList(false)}
            onEndReachedThreshold={-100}
          />
        </View>
        <View style={styles.messageInputViewStyle}>
          <MessageInput
            onRightPress={this._onSendButtonPress}
            textMessage={this.state.textMessage}
            onChangeText={this._onTextMessageChanged}
          />
        </View>
      </View>
    )
  }
}

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
})


// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
  return {
    loading: state.contactosReducer.loading,
    contactos: state.contactosReducer.data

  }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/PruebaRedux.js)
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Chat); */
