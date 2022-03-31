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
export const featchJakeReducer = (
  state = initState,
  action: JakeAction
): FeatchJakeState => {
  switch (action.type) {
    case FetchJakeActionTypes.FETCH_JAKE:
      return { loading: true, error: null, jake: [] };
    case FetchJakeActionTypes.FETCH_JAKE_SUCCESS:
      //тут настроить на принятие объекта
      return { loading: false, error: null, jake: action.payload };
    case FetchJakeActionTypes.FETCH_JAKE_ERROR:
      return { loading: false, error: action.payload, jake: [] };

    default:
      return state;
  }
};
