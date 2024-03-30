import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '../../../routes/routeNames';

import { useAppSelector } from '../../../hooks/useStoreHooks';

import ProjectDetailsPageLayout from '../components/ProjectDetailsPageLayout';

const ProjectDetailsPageContainer = () => {
	const navigate = useNavigate();

	const { projectDetailsData } = useAppSelector(
		state => state.getProjectDetails
	);

	const { title, image, link, description, rate, skills, icons } =
		projectDetailsData;

	useEffect(() => {
		if (Object.keys(projectDetailsData).length === 0) {
			navigate(ROUTES.PROJECTS_PAGE);
		}
	}, [navigate, projectDetailsData]);

	return (
		<ProjectDetailsPageLayout
			title={title}
			image={image}
			link={link}
			description={description}
			rate={rate}
			skills={skills}
			icons={icons}
		/>
	);
};

export default ProjectDetailsPageContainer;
