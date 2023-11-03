import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  language: 'en',
}

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    resetProfile: () => initialState,
    updateLanguage: (state, action: {payload: string}) => {
      if(action.payload){
        state.language = action.payload    
      }
  },
  },
})

export const getProfile = (state: any) => state.profile


export const {
  resetProfile,
  updateLanguage,
} = profileSlice.actions


export default profileSlice.reducer
