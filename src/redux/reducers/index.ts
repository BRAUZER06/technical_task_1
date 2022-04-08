import { combineReducers } from "redux";
import { featchJakeReducer } from "./featchJakeReducer";

export const rootReducer = combineReducers({
  jakeFeatch: featchJakeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
