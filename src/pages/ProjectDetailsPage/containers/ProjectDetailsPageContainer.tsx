import { useAppSelector } from '../../../hooks/useStoreHooks';

import ProjectDetailsPageLayout from '../components/ProjectDetailsPageLayout';

const ProjectDetailsPageContainer = () => {
	const { projectDetailsData } = useAppSelector(
		state => state.getProjectDetails
	);

	const { title, image, link, description, rate, skills } = projectDetailsData;

	return (
		<ProjectDetailsPageLayout
			title={title}
			image={image}
			link={link}
			description={description}
			rate={rate}
			skills={skills}
		/>
	);
};

export default ProjectDetailsPageContainer;
