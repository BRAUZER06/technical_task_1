export interface FeatchJakeState {
  jake: any[];
  loading: boolean;
  error: null | string;
}

export enum FetchJakeActionTypes {
  FETCH_JAKE = "FETCH_JAKE",
  FETCH_JAKE_SUCCESS = "FETCH_JAKE_SUCCESS",
  FETCH_JAKE_ERROR = "FETCH_JAKE_ERROR",
}

interface FetchJakeAction {
  type: FetchJakeActionTypes.FETCH_JAKE;
}
 interface FetchJakeSuccessAction {
  type: FetchJakeActionTypes.FETCH_JAKE_SUCCESS;
  payload: any[];
}

 interface FetchJakeErrorAction {
  type: FetchJakeActionTypes.FETCH_JAKE_ERROR;
  payload: string;
}
export type JakeAction =
  | FetchJakeAction
  | FetchJakeSuccessAction
  | FetchJakeErrorAction;
