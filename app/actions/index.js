export const DATA_AVAILABLE = 'DATA_AVAILABLE';
export const COUNTER_INC = 'COUNTER_INC';

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