import { createSlice } from "@reduxjs/toolkit"
import { projects } from "../../utils/ProjectsInfo"


const initialState = {
  projects: projects
}

export const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {}
})

export const getProjects = (state: any) => state.projects


export default projectSlice.reducer
