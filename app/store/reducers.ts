// src/app/reducers.ts
import { combineReducers } from "@reduxjs/toolkit";
import { countrySlice } from "./other/countrySlice";
import { demoCounterSlice } from "./other/demoCounterSlice";
import { userSlice } from "./user/userSlice";

const rootReducer = combineReducers({
  countrySlice: countrySlice.reducer,
  userSlice: userSlice.reducer,
  demoCounterSlice: demoCounterSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
