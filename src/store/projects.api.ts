import {
	BaseQueryFn,
	FetchArgs,
	createApi,
	fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

import { BASE_URI } from '../const';
import { IProject } from '../interfaces/getProjectsInterfaces';
import {
	IGetProjectsDataErrorObject,
	IGetProjectsErrorObject,
} from '../interfaces/getProjectsErrorsInterfaces';

export const projectsApi = createApi({
	reducerPath: 'projects/api',
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URI,
		mode: 'cors',
		prepareHeaders: headers => {
			headers.set('Access-Control-Allow-Origin', '*');
			return headers;
		},
	}) as BaseQueryFn<
		string | FetchArgs,
		unknown,
		IGetProjectsErrorObject | IGetProjectsDataErrorObject,
		unknown
	>,
	endpoints: builder => ({
		getProjects: builder.query<IProject[], string>({
			query: () => 'appsList.json',
		}),
		changeProjects: builder.query<IProject[], string>({
			query: value => `${value}`,
		}),
	}),
});

export const { useGetProjectsQuery, useLazyChangeProjectsQuery } = projectsApi;
