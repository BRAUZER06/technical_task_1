// [{
//   categories: [],
//   created_at: "",
//   icon_url: "",
//   id: "",
//   updated_at: "",
//   url: "",
//   value: "",
// }],
import {
  FeatchJakeState,
  FetchJakeActionTypes,
  JakeAction,
} from "../../types/Jake";

const initState: FeatchJakeState = {
  jake: [],
  loading: false,
  error: null,
};
console.log("reducer");
export const featchJakeReducer = (
  state = initState,
  action: JakeAction
): FeatchJakeState => {
  console.log("reducer");
  switch (action.type) {
    case FetchJakeActionTypes.FETCH_JAKE: 
      return { ...state, loading: true, error: null, jake: [...state.jake] };
    //  или так ==>           return {...state, loading: true, error: null };

    case FetchJakeActionTypes.FETCH_JAKE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        jake: [...state.jake, action.payload],
      };

    case FetchJakeActionTypes.FETCH_JAKE_ERROR:
      return { loading: false, error: action.payload, jake: [] };

    default:
      return state;
  }
};
