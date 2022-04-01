import { Dispatch } from "redux";
import { FetchJakeActionTypes, JakeAction } from "../../types/Jake";
import axios from 'axios'

export const fetchJake = () => {
  return async (dispatch: Dispatch<JakeAction>) => {
    try {
      dispatch({ type: FetchJakeActionTypes.FETCH_JAKE });
      const response = await axios.get('https://api.chucknorris.io/jokes/random')
      dispatch({type:FetchJakeActionTypes.FETCH_JAKE_SUCCESS, payload:response.data})
      console.log("jake.ts");
      
    } catch (error) {
      dispatch({
        type: FetchJakeActionTypes.FETCH_JAKE_ERROR,
        payload: "Ошибка салам алейкум",
      });
    }
  };
};
