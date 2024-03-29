import { MouseEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { IProject } from '../../../interfaces/getProjectsInterfaces';
import { ROUTES } from '../../../routes/routeNames';

import {
	useGetProjectsQuery,
	useLazyChangeProjectsQuery,
} from '../../../store/projects.api';
import { getProjectDetailsData } from '../../../store/getProjectDetailsSlice';

import { useAppDispatch } from '../../../hooks/useStoreHooks';
import { useSelect } from '../../../hooks';
import { getRequestErrors } from '../../../utils/getRequestErrors.ts';

import ProjectsPageLayout from '../components/ProjectsPageLayout';

const ProjectsPageContainer = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const { projectsCategoryValue, handleProjectsCategoryChange } = useSelect();

	const {
		data: apps,
		isLoading: isAppsLoading,
		isFetching: isAppsFetching,
		isError: isAppsError,
		error: appsListError,
	} = useGetProjectsQuery('');

	const [
		fetchChangeProjects,
		{
			data: projectsList,
			isLoading: isProjectsLoading,
			isFetching: isProjectsFetching,
			isError: isProjectsError,
			error: projectsListError,
		},
	] = useLazyChangeProjectsQuery();

	useEffect(() => {
		fetchChangeProjects(projectsCategoryValue);
	}, [fetchChangeProjects, projectsCategoryValue]);

	const handleGoToDetailsPage = (
		e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
		arr: IProject[],
		projectId: number
	) => {
		e.preventDefault();

		const arrCopy = [...arr];

		const projectDetails = arrCopy.find(item => item.id === projectId);

		dispatch(getProjectDetailsData(projectDetails));

		navigate(ROUTES.PROJECT_DETAILS_PAGE);
	};

	const appsError = getRequestErrors(appsListError);
	const projectsError = getRequestErrors(projectsListError);

	return (
		<ProjectsPageLayout
			projects={projectsList ?? apps}
			isLoading={isAppsLoading ?? isProjectsLoading}
			isFetching={isAppsFetching ?? isProjectsFetching}
			isError={isAppsError ?? isProjectsError}
			projectsError={appsError ?? projectsError}
			handleProjectsCategoryChange={handleProjectsCategoryChange}
			handleDetailsPage={handleGoToDetailsPage}
		/>
	);
};

export default ProjectsPageContainer;
