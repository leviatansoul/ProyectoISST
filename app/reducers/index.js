import { combineReducers } from 'redux';

import {LOCATION_UPDATE, PUT_DATA, REMOVE_DATA, SAVE_DATA, REMOVE_SAVED_DATA} from "../actions/" //Import the actions types constant we defined in our actions



let locationState = { latitude: null, longitude: null, error: null };

let misPensamientosState = {id: 1, data: [], loading:true};
let pensamientosGuardadosState = {id: 1, data: [], loading:true};

let pensamientosLocState = {id: 18, data:[
  {id: 1, text: 'Mi primer pensamiento', autor: 'Mirella', latitude:40.3385100, longitude: -3.38045, date: '01/03/2018'},
  {id: 2, text: 'Mi segundo pensamiento', autor: 'Mirella', latitude: 45.333333, longitude:-10.30000, date: '01/03/2018' },
  {id: 3, text: 'Mi tercer pensamiento', autor: 'Mirella', latitude: 0, longitude: 0, date: '01/03/2018' },
  {id: 4, text: 'Mi cuarto pensamiento', autor: 'Mirella', latitude: 0, longitude: 0, date: '01/03/2018' },
  {id: 5, text: 'Mi quinto pensamiento', autor: 'Mirella', latitude: 0, longitude: 0, date: '01/03/2018'},
  {id: 6, text: 'Mi sexto pensamiento', autor: 'Mirella', latitude: 0, longitude: 0, date: '01/03/2018' },
  {id: 7, text: 'Mi septimo pensamiento', autor: 'Mirella', latitude: 0, longitude: 0, date: '01/03/2018' },
  {id: 8, text: 'Mi octavo pensamiento', autor: 'Mirella', latitude: 0, longitude: 0, date: '01/03/2018' },
  {id: 9, text: 'Mi noveno pensamiento', autor: 'Mirella', latitude: 0, longitude: 0, date: '01/03/2018' },
  {id: 10, text: 'Mi decimo pensamiento', autor: 'Mirella', latitude: 0, longitude: 0, date: '01/03/2018' },
  {id: 11, text: 'Mi 11 pensamiento', autor: 'Mirella', latitude: 0, longitude: 0, date: '01/03/2018' },
  {id: 12, text: 'Mi 12 pensamiento', autor: 'Mirella', latitude: 0, longitude: 0, date: '01/03/2018' },
  {id: 13, text: 'Este pensamiento he decidido hacerlo un poco mas largo jeje', autor: 'Mirella', latitude: 0, longitude: 0, date: '01/03/2018' },
  {id: 14, text: 'Mi 14 pensamiento', autor: 'Mirella', latitude: 0, longitude: 0, date: '01/03/2018' },
  {id: 15, text: 'Mi 15 pensamiento', autor: 'Mirella', latitude: 0, longitude: 0, date: '01/03/2018' },
  {id: 16, text: 'Mi 16 pensamiento', autor: 'Mirella', latitude: 0, longitude: 0, date: '01/03/2018' },
  {id: 17, text: 'Mi 17 pensamiento', autor: 'Mirella', latitude: 0, longitude: 0, date: '01/03/2018' }
], loading:true};

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
          newState = state.data;
          pensamiento = action.item;
          pensamiento.id = state.id;
          newState.push(pensamiento);
          state = Object.assign({}, state, { id: state.id++, data: newState, loading:false});
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

// Combine all the reducers
const rootReducer = combineReducers({
    locationReducer,
    pensamientosGuardadosReducer,
    misPensamientosReducer,
    pensamientosLocReducer
    // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
})

export default rootReducer;
