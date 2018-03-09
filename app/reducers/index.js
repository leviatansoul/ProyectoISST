import { combineReducers } from 'redux';

import { DATA_AVAILABLE, COUNTER_INC, LOCATION_UPDATE, PUT_DATA} from "../actions/" //Import the actions types constant we defined in our actions

let dataState = { data: [], loading:true, counter:0 };

let locationState = { latitude: 0, longitude: 0, error: null };

let pensamientosState = {data: ["yo", "tu", "el"], loading:true};

let pensamientosLocState = {data: ["primera", "segunda", "tercera", "primera", "segunda", "tercera", "primera", "segunda", "tercera", "primera", "segunda", "tercera", "primera", "segunda", "tercera"], loading:true};

const pensamientosReducer = (state = pensamientosState, action) => {
    switch (action.type) {

       case PUT_DATA:
           newState = state.data;
           newState.push(action.item);
           state = Object.assign({}, state, { data: newState, loading:false});
          return state;
        //case REMOVE_DATA:
          //  state = Object.assign({}, state, { data: {state.filter(elemento => indexOf(elemento)!=action.id); }, loading:false });
              //  return state;
        default:
            return state;
    }
};
const pensamientosLocReducer = (state = pensamientosLocState, action) => {
    switch (action.type) {

        default:
            return state;
    }
};
const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case DATA_AVAILABLE:
            state = Object.assign({}, state, { data: action.data, loading:false });
            return state;
        default:
            return state;
    }
};

const counterReducer = (state = dataState, action) => {
  switch (action.type) {
    case COUNTER_INC:
      state = Object.assign({}, state, { counter: dataState.counter++ });
      return state;
    default:
      return state;
  }
};

const locationReducer = (state = locationState, action) => {
  switch (action.type) {
    case LOCATION_UPDATE:
      navigator.geolocation.getCurrentPosition(
        (position) => {
        state = Object.assign({}, state, { latitude: position.coords.latitude,
        longitude: position.coords.longitude, error: null,});
        },
        (error) => {
        state = Object.assign({}, state, { error: error.message,});
      },
        );
      return state;
    default:
      return state;
  }
};

// Combine all the reducers
const rootReducer = combineReducers({
    dataReducer,
    counterReducer,
    locationReducer,
    pensamientosReducer,
    pensamientosLocReducer
    // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
})

export default rootReducer;
