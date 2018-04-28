import React, { Component } from 'react';
import { View } from 'react-native';
import { MessageContainer } from './messageParts/MessageContainer';

class Message extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    return (
      <View style={styles.messageViewStyle}>
        <View style={{flexDirection: this.props.isUser ? 'row-reverse' : 'row', paddingLeft: 14, paddingRight: 14, paddingTop: 4}}>

          <MessageContainer
            isShow={this.props.isShow}
            isUser={this.props.isUser}
            nickname={this.props.nickname}
            message={this.props.message}
            time={this.props.time}
          />
        </View>
      </View>
    )
  }
}

const styles = {
  messageViewStyle: {
    transform: [{ scaleY: -1 }]
  }
};

export { Message };