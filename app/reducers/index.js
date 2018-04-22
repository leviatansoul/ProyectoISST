import { combineReducers } from 'redux';

import {LOCATION_UPDATE, PUT_DATA, PUT_NICKNAME, REMOVE_DATA, SAVE_DATA, REMOVE_SAVED_DATA, UPDATE_FOOTER, CONTACTOS_UPDATE} from "../actions/" //Import the actions types constant we defined in our actions



let locationState = { latitude: null, longitude: null, error: null };

let misPensamientosState = {id: 1, data: [], loading:true};
let pensamientosGuardadosState = {id: 1, data: [], loading:true};
let footerState = {itemSelected:1, badgeHome:0};
let nicknameState = {nickname: "default"};
let pensamientosLocState = { data:[ {id: 1, text: 'Mi primer pensamiento', autor: 'Mirella', latitude:40.3385100, longitude: -3.38045, date: '01/03/2018'}]};

let ContactosState = {id: 18, data:[
  {id: 1, nick: 'Mi primer Contacto', img: 'xxxx'}
], loading:true};


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

       case PUT_DATA:
           newState = state.data;
           pensamiento = action.item;
           pensamiento.id = state.id;
           newState.push(pensamiento);
           state = Object.assign({}, state, { id: state.id++, data: newState, loading:false});
           console.log(state);
          return state;
        case REMOVE_DATA:

        //newState = state.filter(elemento => state.indexOf(elemento)!=action.id);
           state = Object.assign({}, state, { data: action.data, loading:false });
              return state;
        default:
            return state;
    }
};
//ESTOS SON LOS QUE GUARDO
const pensamientosGuardadosReducer = (state = pensamientosGuardadosState, action) => {
    switch (action.type) {

       case SAVE_DATA:
           newState = state.data;
           pensamiento = action.item;
           pensamiento.id = state.id;
           newState.push(pensamiento);
           state = Object.assign({}, state, { id: state.id++, data: newState, loading:false});
           console.log(state);
          return state;
        case REMOVE_SAVED_DATA:

        //newState = state.filter(elemento => state.indexOf(elemento)!=action.id);
           state = Object.assign({}, state, { data: action.data, loading:false });
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

// Combine all the reducers
const rootReducer = combineReducers({
  nicknameReducer,
    locationReducer,
    pensamientosGuardadosReducer,
    misPensamientosReducer,
    pensamientosLocReducer,
    contactosReducer,
    footerReducer
    // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
})

export default rootReducer;
