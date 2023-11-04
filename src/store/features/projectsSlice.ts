import { createSlice } from "@reduxjs/toolkit"
import { projects } from "../../utils/ProjectsInfo"


const initialState = {
  items: [...projects]
}

export const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {}
})

export const getProjects = (state: any) => state.projects.items


export default projectSlice.reducer
