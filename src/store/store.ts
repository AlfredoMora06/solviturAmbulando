import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import thunk from "redux-thunk"

import profileReducer from "./features/profileSlice"
import projectsReducer from "./features/projectsSlice"



const persistProfile = {
  key: "profile",
  storage,
}

const persistProjects = {
  key: "projects",
  storage,
}


export const storeReducers = {
  profile: persistReducer(persistProfile, profileReducer),
  projects: persistReducer(persistProjects, projectsReducer),

}

const reducers = combineReducers(storeReducers)

const store = configureStore({
  reducer: reducers,
  middleware: [thunk],
})

export default store
