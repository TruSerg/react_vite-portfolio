import { configureStore } from '@reduxjs/toolkit';

import { projectsApi } from './projects.api';

import getProjectDetailsReducer from './getProjectDetailsSlice';

export const store = configureStore({
	reducer: {
		[projectsApi.reducerPath]: projectsApi.reducer,
		getProjectDetails: getProjectDetailsReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(projectsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
