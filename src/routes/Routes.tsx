import { Routes, Route, Navigate } from 'react-router-dom';

import { ROUTES } from './routeNames';

import HomePageContainer from '../pages/HomePage/containers/HomePageContainer';
import ProjectsPageContainer from '../pages/ProjectsPage/containers/ProjectsPageContainer';
import ContactsPageContainer from '../pages/ContactsPage/containers/ContactsPageContainer';
import ProjectDetailsPageContainer from '../pages/ProjectDetailsPage/containers/ProjectDetailsPageContainer';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path={ROUTES.HOME_PAGE} element={<HomePageContainer />} />
			<Route path={ROUTES.PROJECTS_PAGE} element={<ProjectsPageContainer />} />
			<Route path={ROUTES.CONTACTS_PAGE} element={<ContactsPageContainer />} />
			<Route
				path={ROUTES.PROJECT_DETAILS_PAGE}
				element={<ProjectDetailsPageContainer />}
			/>

			<Route path='*' element={<Navigate to={ROUTES.HOME_PAGE} />} />
		</Routes>
	);
};

export default AppRoutes;
