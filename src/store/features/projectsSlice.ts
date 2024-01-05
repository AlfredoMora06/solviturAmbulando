import { createSlice } from "@reduxjs/toolkit"
import { projectInfo } from "../../utils/ProjectsInfo"


const initialState = {
  items: [...projectInfo()]
}

export const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {}
})

export const getProjects = (state: any) => state.projects.items


export default projectSlice.reducer
