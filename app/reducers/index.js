import { combineReducers } from 'redux';

import { DATA_AVAILABLE, COUNTER_INC } from "../actions/" //Import the actions types constant we defined in our actions

let dataState = { data: [], loading:true, counter:0 };

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

// Combine all the reducers
const rootReducer = combineReducers({
    dataReducer,
    counterReducer
    // ,[ANOTHER REDUCER], [ANOTHER REDUCER] ....
})

export default rootReducer;