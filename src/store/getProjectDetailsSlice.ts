import { createSlice } from '@reduxjs/toolkit';
import { IProject } from '../interfaces/getProjectsInterfaces';

interface projectDetailsState {
	projectDetailsData: IProject;
}

const initialState: projectDetailsState = {
	projectDetailsData: {} as IProject,
};

const getProjectDetailsSlice = createSlice({
	name: 'projectDetails',
	initialState,

	reducers: {
		getProjectDetailsData: (state, { payload }) => {
			state.projectDetailsData = payload;
		},
	},
});

export const { getProjectDetailsData } = getProjectDetailsSlice.actions;

export default getProjectDetailsSlice.reducer;
