import { combineReducers } from 'redux';

import {LOCATION_UPDATE, PUT_DATA, PUT_NICKNAME, REMOVE_DATA,
  SAVE_DATA, REMOVE_SAVED_DATA, REMOVE_LOC_DATA, UPDATE_FOOTER,
  CONTACTOS_UPDATE,PETICIONES_UPDATE, PUT_MI_DATA, LOGIN_SUCCESS,
  LOGIN_FAIL, INIT_MENU, DISCONNECT_SUCCESS, OPEN_CHANNEL_LIST_SUCCESS, OPEN_CHANNEL_LIST_FAIL} from "../actions/" //Import the actions types constant we defined in our actions

import {
  INIT_CHAT_SCREEN,
  CREATE_CHAT_HANDLER_SUCCESS,
  CREATE_CHAT_HANDLER_FAIL,
  MESSAGE_LIST_SUCCESS,
  MESSAGE_LIST_FAIL,
  SEND_MESSAGE_TEMPORARY,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_FAIL,
  CHANNEL_EXIT_SUCCESS,
  CHANNEL_EXIT_FAIL,
  MESSAGE_RECEIVED,
  MESSAGE_UPDATED,
  MESSAGE_DELETED
} from '../actions/';


let locationState = { latitude: null, longitude: null, error: null };

let misPensamientosState = { data:[{id: 0, date: "", idPens: 0, latitude:40.3385100, longitude: -3.38045, topic: "", text: 'Mi primer pensamiento', autor: 'Mirella', likes:0}]};
let pensamientosGuardadosState = { data:[ {id: 0, date: "", idPens: 0, latitude:40.3385100, longitude: -3.38045, topic: "", text: 'Mi primer pensamiento', autor: 'Mirella', likes:0}]};
let footerState = {itemSelected:1, badgeHome:0};
let nicknameState = {nickname: ""};

let urlState = {url: "192.168.1.49"};
let pensamientosLocState = { data:[ {id: 0, date: "", idPens: 0, latitude:40.3385100, longitude: -3.38045, topic: "", text: 'Mi primer pensamiento', autor: 'Mirella', likes: 0}]};


let ContactosState = {id: 18, data:[
  {id: 1, nick: 'leviatansoul', img: 'xxxx'}
], loading:true};

let PeticionesState = {id: 18, data:[
  {id: 1, nick: 'leviatansoul', img: 'xxxx'}
], loading:true};

const urlReducer = (state = urlState, action) => {
    switch (action.type) {

        default:
            return state;
    }
};

//LA CLAVE QUE ME VA A PERMITIR ACCEDER AL SERVER
const nicknameReducer = (state = nicknameState, action) => {
    switch (action.type) {

       case PUT_NICKNAME:
           state = Object.assign({}, state, {nickname: action.item});
           console.log(state);
              return state;
        default:
            return state;
    }
};

//ESTOS SON LOS QUE ESCRIBO
const misPensamientosReducer = (state = misPensamientosState, action) => {
    switch (action.type) {

       case PUT_MI_DATA:
           newState = action.item;
          state = Object.assign({}, state, { data: newState});
           console.log(state);
          return state;
        case REMOVE_DATA:

        //newState = state.filter(elemento => state.indexOf(elemento)!=action.id);
           state = Object.assign({}, state, { data: action.data });
              return state;
        default:
            return state;
    }
};
//ESTOS SON LOS QUE GUARDO
const pensamientosGuardadosReducer = (state = pensamientosGuardadosState, action) => {
    switch (action.type) {

       case SAVE_DATA:

           newState = action.item;
           state = Object.assign({}, state, { data: newState});
           console.log(state);
          return state;
        case REMOVE_SAVED_DATA:

        //newState = state.filter(elemento => state.indexOf(elemento)!=action.id);
           state = Object.assign({}, state, { data: action.data});
              return state;
        default:
            return state;
    }
};


//ESTOS LOS GENERALES, QUE FILTRO POR LOCALIZACION
const pensamientosLocReducer = (state = pensamientosLocState, action) => {
    switch (action.type) {
      case PUT_DATA:
         /* newState = state.data;
          pensamiento = action.item;
          pensamiento.id = state.id;
          newState.push(pensamiento);*/
          newState = action.item;
          state = Object.assign({}, state, { data: newState});
          console.log(state);
         return state;
         case REMOVE_LOC_DATA:

        //newState = state.filter(elemento => state.indexOf(elemento)!=action.id);
           state = Object.assign({}, state, { data: action.data});
              return state;
        default:
            return state;
    }
};


//contactos
const contactosReducer = (state = ContactosState, action) => {
  switch (action.type) {
    case CONTACTOS_UPDATE:

      state = Object.assign({}, state, { id: state.id++, data: action.data, loading:false});
      console.log(state);
      return state;
    default:
      return state;
  }
};

//Peticiones
const peticionesReducer = (state = PeticionesState, action) => {
  switch (action.type) {
    case PETICIONES_UPDATE:

      state = Object.assign({}, state, { id: state.id++, data: action.data, loading:false});
      console.log(state);
      return state;
    default:
      return state;
  }
};



const locationReducer = (state = locationState, action) => {
  switch (action.type) {
    case LOCATION_UPDATE:

        state = Object.assign({}, state, { latitude: action.latitude, longitude: action.longitude, error: null,});

      return state;
    default:
      return state;
  }
};


const footerReducer = (state = footerState, action) => {
  switch (action.type) {
    case UPDATE_FOOTER:

      state = Object.assign({}, state, { itemSelected: action.itemSelected});

      return state;
    default:
      return state;
  }
};


//SendBird
const INITIAL_STATE = {
  error: '',
  user: null
}

const MENU_STATE = {
  isDisconnected: false
}

const OPENCHANNELLIST_STATE = {
  list: []
}

const CHAT_STATE = {
  list: [
    { message: 'holi'}],
  exit:false
}

const sendBirdReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      state = Object.assign({}, state, { user: action.payload});

      return state;
    case LOGIN_FAIL:
      state = Object.assign({}, state, {  error: action.payload});
      return state;
    default:
      return state;
  }
};

const menuReducer = (state = MENU_STATE, action) => {
  switch (action.type) {
    case INIT_MENU:
      state = Object.assign({}, state, { isDisconnected: false});
      return state;
    case DISCONNECT_SUCCESS:
      state = Object.assign({}, state, { isDisconnected: true});
      return state;
    default:
      return state;
  }
};

const openChannelListReducer = (state = OPENCHANNELLIST_STATE, action) => {
  switch (action.type) {
    case OPEN_CHANNEL_LIST_SUCCESS:
      state = Object.assign({}, state, { list: action.list});
      console.log("Ha descargado algo");
      return state;
    case OPEN_CHANNEL_LIST_FAIL:
      return state;
    default:
      return state;
  }
};

const chatReducer = (state = CHAT_STATE, action) => {
  switch(action.type) {
    case INIT_CHAT_SCREEN:
      return state;
    case CREATE_CHAT_HANDLER_SUCCESS:
      return state;
    case CREATE_CHAT_HANDLER_FAIL:
      return state;
    case MESSAGE_LIST_SUCCESS:

      console.log("pasa lista a listl");
    action.list.forEach(function (elemento, indice, array) {
      //console.log(elemento, indice);

    });
      const sendSuccessListaa = action.list;
      state = Object.assign({}, state, { list: sendSuccessListaa});
      return state;
    case MESSAGE_LIST_FAIL:
      return state;
    case SEND_MESSAGE_TEMPORARY:
      //state = Object.assign({}, state, { list: [[action.message], state.list]});
      return state;
    case SEND_MESSAGE_SUCCESS:
      /*const newMessage = action.message;
      console.log("buh");
      const sendSuccessList = state.list.map((message) => {
        if (message.reqId && newMessage.reqId && message.reqId.toString() === newMessage.reqId.toString()) {
          return newMessage;
        } else {
          return message;
        }
      });
      console.log("no ha petado");
      console.log(sendSuccessList);
      //console.log(message.messageId)
      state = Object.assign({}, state, { list: sendSuccessList});*/
      const sendSuccessList = state.list.slice();
      sendSuccessList.reverse();
      sendSuccessList.push(action.message);
      sendSuccessList.reverse();
      state = Object.assign({}, state, { list: sendSuccessList});
      return state;
    case SEND_MESSAGE_FAIL:
      const newChatList = state.list.slice(1);
      state = Object.assign({}, state, { list: newChatList});
      return state;
    case CHANNEL_EXIT_SUCCESS:
      state = Object.assign({}, state, { exit: true});
      return state;
    case CHANNEL_EXIT_FAIL:
      state = Object.assign({}, state, { exit: false});
      return state;
    case MESSAGE_RECEIVED:
      const sendSuccessLista = [{message: "xxxxx"}];
     state = Object.assign({}, state, { list: sendSuccessLista});
      return state;
    case MESSAGE_UPDATED:
      const updatedMessage = action.payload;
      const updatedList = state.list.map((message) => {
        if (message.messageId === updatedMessage.messageId) {
          message = updatedMessage
        }
        return message
      });
      state = Object.assign({}, state, { list: updatedList});
      return state
    case MESSAGE_DELETED:
      const deletedList = state.list.filter((message) => {
        return message.messageId.toString() !== action.payload.toString();
      });
      state = Object.assign({}, state, { list: deletedList});
      return state;
    default:
      return state;
  }
};


// Combine all the reducers
const rootReducer = combineReducers({
  nicknameReducer,
    locationReducer,
    pensamientosGuardadosReducer,
    misPensamientosReducer,
    pensamientosLocReducer,
    contactosReducer,
    peticionesReducer,
    urlReducer,
    footerReducer,
    sendBirdReducer,
    menuReducer,
    openChannelListReducer,
    chatReducer
    // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
})

export default rootReducer;
