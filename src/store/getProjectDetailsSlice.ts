import { createSlice } from '@reduxjs/toolkit';
import { IProject } from '../interfaces/getProjectsInterfaces';

interface projectDetailsState {
	projectDetailsData: IProject;
	isDarkTheme: boolean;
}

const initialState: projectDetailsState = {
	projectDetailsData: {} as IProject,
	isDarkTheme: false,
};

const getProjectDetailsSlice = createSlice({
	name: 'projectDetails',
	initialState,

	reducers: {
		getProjectDetailsData: (state, { payload }) => {
			state.projectDetailsData = payload;
		},
		themeModeChange: (state, { payload }) => {
			state.isDarkTheme = payload;
		},
	},
});

export const { getProjectDetailsData, themeModeChange } =
	getProjectDetailsSlice.actions;

export default getProjectDetailsSlice.reducer;
