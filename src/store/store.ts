import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import thunk from "redux-thunk"

import profileReducer from "./features/profileSlice"


const persistProfile = {
  key: "profile",
  storage,
}

export const storeReducers = {
  profile: persistReducer(persistProfile, profileReducer),
}

const reducers = combineReducers(storeReducers)

const store = configureStore({
  reducer: reducers,
  middleware: [thunk],
})

export default store
