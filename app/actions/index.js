
export const REMOVE_DATA = 'REMOVE_DATA';
export const PUT_DATA = 'PUT_DATA';
export const LOCATION_UPDATE = 'LOCATION_UPDATE';


export function removeData(data){
  return (dispatch) => {

    //Make API Call
    //For this example, I will be using the sample data in the json file
    //delay the retrieval [Sample reasons only]

     dispatch({type: REMOVE_DATA, data: data});


 };
}
export function putData(item){
return (dispatch) => {

 dispatch( {type: PUT_DATA, item: item});


  };
}


export function updateLocation(latitude,longitude){
  return (dispatch) => {
    dispatch({type: LOCATION_UPDATE, latitude: latitude, longitude: longitude});

  };
}
