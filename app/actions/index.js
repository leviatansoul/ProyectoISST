export const DATA_AVAILABLE = 'DATA_AVAILABLE';
export const COUNTER_INC = 'COUNTER_INC';
//export const REMOVE_DATA = 'REMOVE_DATA';
export const PUT_DATA = 'PUT_DATA';
export const LOCATION_UPDATE = 'LOCATION_UPDATE';

//Import the sample data
import Data from '../instructions.json';

export function getData(){
    return (dispatch) => {

        //Make API Call
        //For this example, I will be using the sample data in the json file
        //delay the retrieval [Sample reasons only]
        setTimeout(() => {
            var data  = Data.instructions;
            dispatch({type: DATA_AVAILABLE, data:data});
        }, 2000);

    };
}

export function incCounter(){
  return (dispatch) => {

    //Make API Call
    //For this example, I will be using the sample data in the json file
    //delay the retrieval [Sample reasons only]

      dispatch({type: COUNTER_INC});


  };
}

//export function removeData(id){
//  return (dispatch) => {

    //Make API Call
    //For this example, I will be using the sample data in the json file
    //delay the retrieval [Sample reasons only]

    //  dispatch({type: REMOVE_DATA, id: id});


//  };
//}
export function putData(item){
return (dispatch) => {

 dispatch( {type: PUT_DATA, item: item});


  };
}

export function updateLocation(){
  return (dispatch) => {
    dispatch({type: LOCATION_UPDATE});

  };
}
