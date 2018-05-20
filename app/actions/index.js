
export const REMOVE_DATA = 'REMOVE_DATA';
export const PUT_DATA = 'PUT_DATA';
export const PUT_NICKNAME = 'PUT_NICKNAME';
export const SAVE_DATA = 'SAVE_DATA';
export const REMOVE_SAVED_DATA = 'REMOVE_SAVED_DATA';
export const REMOVE_LOC_DATA = 'REMOVE_LOC_DATA';
export const LOCATION_UPDATE = 'LOCATION_UPDATE';
export const UPDATE_FOOTER = "UPDATE_FOOTER";
export const CONTACTOS_UPDATE = "CONTACTOS_UPDATE";

export const PETICIONES_UPDATE = "PETICIONES_UPDATE";
export const PUT_MI_DATA = "PUT_MI_DATA";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const DISCONNECT_SUCCESS = "DISCONNECT_SUCCESS";
export const INIT_MENU = "INIT_MENU";
export const OPEN_CHANNEL_LIST_SUCCESS = 'open_channel_list_success';
export const OPEN_CHANNEL_LIST_FAIL = 'open_channel_list_fail';


export const INIT_CHAT_SCREEN = 'INIT_CHAT_SCREEN';
export const CREATE_CHAT_HANDLER_SUCCESS = 'CREATE_CHAT_HANDLER_SUCCESS';
export const CREATE_CHAT_HANDLER_FAIL = 'CREATE_CHAT_HANDLER_FAIL';
export const MESSAGE_LIST_SUCCESS = 'MESSAGE_LIST_SUCCESS';
export const MESSAGE_LIST_FAIL = 'MESSAGE_LIST_FAIL';
export const SEND_MESSAGE_TEMPORARY = 'SEND_MESSAGE_TEMPORARY';
export const SEND_MESSAGE_SUCCESS = 'SEND_MESSAGE_SUCCESS';
export const SEND_MESSAGE_FAIL = 'SEND_MESSAGE_FAIL';
export const CHANNEL_EXIT_SUCCESS = 'CHANNEL_EXIT_SUCCESS';
export const CHANNEL_EXIT_FAIL = 'CHANNEL_EXIT_FAIL';
export const MESSAGE_RECEIVED = 'MESSAGE_RECEIVED';
export const MESSAGE_UPDATED = 'MESSAGE_UPDATED';
export const MESSAGE_DELETED = 'MESSAGE_DELETED';


import { sbConnect, sbDisconnect, sbCreateOpenChannelListQuery, sbGetOpenChannelList, sbAddChannel, sbGetOpenChannel,
  sbOpenChannelEnter, sbGetGroupChannelUrl,
  sbGetMessageList,
  sbSendTextMessage,
  sbOpenChannelExit, sbGetGroupChannel, sbCreateGroupChannel} from '../sendbirdActions';
import SendBird from 'sendbird';

export function removeData(data){
  return (dispatch) => {

    //Make API Call
    //For this example, I will be using the sample data in the json file
    //delay the retrieval [Sample reasons only]

     dispatch({type: REMOVE_DATA, data: data});


 };
}
export function removeLocData(data){
  return (dispatch) => {

    //Make API Call
    //For this example, I will be using the sample data in the json file
    //delay the retrieval [Sample reasons only]

     dispatch({type: REMOVE_LOC_DATA, data: data});


 };
}
export function removeSavedData(data){
  return (dispatch) => {

    //Make API Call
    //For this example, I will be using the sample data in the json file
    //delay the retrieval [Sample reasons only]

     dispatch({type: REMOVE_SAVED_DATA, data: data});


 };
}
export function putData(item){
return (dispatch) => {

 dispatch( {type: PUT_DATA, item: item});


  };
}
export function putMiData(item){
return (dispatch) => {

 dispatch( {type: PUT_MI_DATA, item: item});


  };
}
export function putNickname(item){
return (dispatch) => {

 dispatch( {type: PUT_NICKNAME, item: item});


  };
  }
export function saveData(item){
return (dispatch) => {

 dispatch( {type: SAVE_DATA, item: item});


  };
}


export function updateLocation(latitude,longitude){
  return (dispatch) => {
    dispatch({type: LOCATION_UPDATE, latitude: latitude, longitude: longitude});

  };
}

export function updateContactos(data){

  //Hacer peticiones asíncronas
  /* var url = "http://192.168.1.137/PCG/LoginServlet?nick="+nickname+"&password="+password;
   console.log(url);

   fetch(url)
   .then((response)=> {

   if (response.status >= 400) {
   throw new Error("Bad response from server");
   }
   return response.json();
   }) */



  /*var data2 = [
   {id: 1, nick: 'leviatansoul', img: 'xxxx'},{id: 2, nick: 'Gallu', img: 'xxxx'}
   ]; */

  return (dispatch) => {
    dispatch({type: CONTACTOS_UPDATE, data: data});

  };
}

export function updatePeticiones(data){

  //Hacer peticiones asíncronas
  /* var url = "http://192.168.1.137/PCG/LoginServlet?nick="+nickname+"&password="+password;
   console.log(url);

   fetch(url)
   .then((response)=> {

   if (response.status >= 400) {
   throw new Error("Bad response from server");
   }
   return response.json();
   }) */



  /*var data2 = [
   {id: 1, nick: 'leviatansoul', img: 'xxxx'},{id: 2, nick: 'Gallu', img: 'xxxx'}
   ]; */

  return (dispatch) => {
    dispatch({type: PETICIONES_UPDATE, data: data});

  };
}

export function updateFooter(itemSelected, navigation){
  return (dispatch) => {

    if(itemSelected === 1){
      navigation.navigate('Home');
    }

    if(itemSelected === 2){
      navigation.navigate('Publicados');
    }

    if(itemSelected === 3){
      navigation.navigate('Favoritos');
    }

    if(itemSelected === 4){
      navigation.navigate('Mapa');
    }

    if(itemSelected === 5){
      navigation.navigate('Contactos');
    }
  /*  if(itemSelected === 5){
      navigation.navigate('ChatLogin');
    }*/

    dispatch({type: UPDATE_FOOTER, itemSelected: itemSelected});

  };
}

export function sendbirdLogin( userId, nickname, navigation ) {
  return (dispatch) => {
    sbConnect(userId, nickname)
      .then((user) => {
        navigation.navigate('Menu');
        dispatch({
          type: LOGIN_SUCCESS,
          payload: user
        })
        sbAddChannel()
      })
      .catch((error) => {
       // navigation.navigate('Contactos');
        dispatch({
          type: LOGIN_FAIL,
          payload: error
        })
      });
  }
}


export function initMenu (){
  return (dispatch) => {
    dispatch({type: INIT_MENU});

  };

}

export function createGroupChannelPeticiones (user1, user2){ //Action para crear nuevo group channel
  return (dispatch) => {
    sbCreateGroupChannel(user1, user2);
    dispatch({type: "CREATE_GROUPCHANNEL"});

  };

}

export function getGroupChannel (user1, user2, navigation){ //Action para abrir chat
  return (dispatch) => {

    sbGetGroupChannel(user1,user2)
      .then((url)=>{
        navigation.navigate(
          'Chat',
          { channelUrl: url }
        );
        }
      );

    dispatch({type: "CHAT_GROUPCHANNEL"});

  };

}

export function sendbirdLogout (navigation)  {
  return (dispatch) => {
    sbDisconnect()
      .then(() => {
        navigation.navigate('ChatLogin')
        dispatch({type: DISCONNECT_SUCCESS})
      });
  }
}

export function getOpenChannelList  (openChannelListQuery)  { //Este sobra
  return (dispatch) => {
    if (openChannelListQuery.hasNext) {
      sbGetOpenChannelList(openChannelListQuery)
        .then((channels) => {
          console.log("entra OPENCHANLELISTSUCCESS")
        dispatch({
          type: OPEN_CHANNEL_LIST_SUCCESS,
          list: channels
        })})
        .catch((error) => dispatch({ type: OPEN_CHANNEL_LIST_FAIL }))
    } else {
      dispatch({ type: OPEN_CHANNEL_LIST_FAIL });
    }
  }
}


export function initChatScreen ()  {
  const sb = SendBird.getInstance();
  sb.removeAllChannelHandlers();
  return { type: INIT_CHAT_SCREEN }
}

export function createChatHandler (channelUrl)  {
  return (dispatch) => {
   /* sbGetOpenChannel(channelUrl)
      .then((channel) => {
        sbOpenChannelEnter(channel)
          .then((channel) => { */
    sbGetGroupChannelUrl(channelUrl)
      .then((channel) => {

            registerHandler(channelUrl, dispatch);

            console.log("crea el handler succes");
            dispatch({ type: CREATE_CHAT_HANDLER_SUCCESS });

      })
      .catch( (error) => dispatch({ type: CREATE_CHAT_HANDLER_FAIL }) );
  }
}

export function registerHandler  (channelUrl, dispatch) {
  const sb = SendBird.getInstance();
  let channelHandler = new sb.ChannelHandler();

  console.log("Entra al registro hanler");

  channelHandler.onMessageReceived = (channel, message) => {
    if (channel.url === channelUrl) {
      dispatch({
        type: MESSAGE_RECEIVED,
        payload: message
      })
    }
  }
  channelHandler.onMessageUpdated = (channel, message) => {
    if (channel.url === channelUrl) {
      dispatch({
        type: MESSAGE_UPDATED,
        payload: message
      })
    }
  }
  channelHandler.onMessageDeleted = (channel, messageId) => {
    if (channel.url === channelUrl) {
      dispatch({
        type: MESSAGE_DELETED,
        payload: messageId
      })
    }
  }

  sb.addChannelHandler(channelUrl, channelHandler);
}

export function getPrevMessageList (previousMessageListQuery) {
  return (dispatch) => {
    if (previousMessageListQuery.hasMore) {
      sbGetMessageList(previousMessageListQuery)
        .then((messages) => {

          console.log("success prev message list");
          dispatch({
            type: MESSAGE_LIST_SUCCESS,
            list: messages
          });
        })
        .catch( (error) => dispatch({ type: MESSAGE_LIST_FAIL }) )
    } else {
      dispatch({ type: MESSAGE_LIST_FAIL });
    }
  }
}

export function onSendButtonPress  (channelUrl, textMessage) {
  return (dispatch) => {
    sbGetGroupChannelUrl(channelUrl)
      .then((channel) => {
        const messageTemp = sbSendTextMessage(channel, textMessage, (message, error) => {
          if (error) {
            dispatch({ type: SEND_MESSAGE_FAIL });
          } else {
            console.log("ole");
            dispatch({
              type: SEND_MESSAGE_SUCCESS,
              message: message
            });
          }
        });
        dispatch({
          type: SEND_MESSAGE_TEMPORARY,
          message: messageTemp
        });
      })
      .catch( (error) => dispatch({ type: SEND_MESSAGE_FAIL }) )
  }
}

export function channelExit  (channelUrl) {
  return (dispatch) => {
    sbGetOpenChannel(channelUrl)
      .then((channel) => {
        sbOpenChannelExit(channel)
          .then((response) => dispatch({ type: CHANNEL_EXIT_SUCCESS }))
          .catch((error) => dispatch({ type: CHANNEL_EXIT_FAIL }))
      })
      .catch((error) => dispatch({ type: CHANNEL_EXIT_FAIL }))
  }
}
