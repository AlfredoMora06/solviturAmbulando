import { createSlice } from "@reduxjs/toolkit"
import { ProjectInfo } from "../../utils/ProjectsInfo"


const initialState = {
  items: [...ProjectInfo()]
}

export const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {}
})

export const getProjects = (state: any) => state.projects.items


export default projectSlice.reducer
