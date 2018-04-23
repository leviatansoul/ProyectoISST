
export const REMOVE_DATA = 'REMOVE_DATA';
export const PUT_DATA = 'PUT_DATA';
export const PUT_NICKNAME = 'PUT_NICKNAME';
export const SAVE_DATA = 'SAVE_DATA';
export const REMOVE_SAVED_DATA = 'REMOVE_SAVED_DATA';
export const LOCATION_UPDATE = 'LOCATION_UPDATE';
export const UPDATE_FOOTER = "UPDATE_FOOTER";
export const CONTACTOS_UPDATE = "CONTACTOS_UPDATE";


export function removeData(data){
  return (dispatch) => {

    //Make API Call
    //For this example, I will be using the sample data in the json file
    //delay the retrieval [Sample reasons only]

     dispatch({type: REMOVE_DATA, data: data});


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


/*
  var data = [
    {id: 1, nick: 'Mi primer Contacto', img: 'xxxx'},{id: 2, nick: 'Diego Gallu', img: 'xxxx'}
  ];
*/
  return (dispatch) => {
    dispatch({type: CONTACTOS_UPDATE, data: data});

  };
}

export function updateFooter(itemSelected, navigation){
  return (dispatch) => {

    if(itemSelected === 1){
      navigation.navigate('Home');
    }

    if(itemSelected === 2){
      navigation.navigate('Publicar');
    }

    if(itemSelected === 3){
      navigation.navigate('Pensamientos');
    }

    if(itemSelected === 4){
      navigation.navigate('Contactos');
    }

    dispatch({type: UPDATE_FOOTER, itemSelected: itemSelected});

  };
}
