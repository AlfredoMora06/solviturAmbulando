import { resetProfile } from "./features/profileSlice"

import { storeReducers } from "./store"

const storeResetActions: any = {
  profile: resetProfile,
}


// we need to check that all store items are represented here
function compareResetToStore() {
  // first compare store to reset actions
  for (let reducerKey of Object.keys(storeReducers)) {
    if (!storeResetActions[reducerKey]) {
      const message = `NEED TO ADD RESET ACTION TO resetStoreService: ${reducerKey}`
      console.log(message)
      throw new Error(message)
    }
  }
  // then compare reset actions to store
  for (let resetKey of Object.keys(storeResetActions)) {
    // @ts-ignore
    if (!storeReducers[resetKey]) {
      const message = `NEED TO ADD REDUCER TO store: ${resetKey}`
      console.log(message)
      throw new Error(message)
    }
  }
}

compareResetToStore()

export const resetStore = (dispatch: any) => {
  for (let resetAction of Object.keys(storeResetActions)) {
    dispatch(storeResetActions[resetAction]())
  }
}

