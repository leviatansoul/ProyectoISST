import React from 'react';
import { View,Text, Dimensions, Platform, Image, TextInput, Button} from 'react-native';


const { width } = Dimensions.get('window');

const MessageInput = (props) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <TextInput

        placeholder={'Your message'}

        value={props.textMessage}
        onChangeText={props.onChangeText}
        onFocus={props.onFocus}
      />
      <Button
        onPress={props.onRightPress}
      ><Text>Enviar</Text></Button>
    </View>
  )
}

export { MessageInput };