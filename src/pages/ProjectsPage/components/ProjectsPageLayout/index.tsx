import { ChangeEvent, FC } from 'react';
import { SerializedError } from '@reduxjs/toolkit';

import { IProject } from '../../../../interfaces/getProjectsInterfaces';
import {
	IGetProjectsDataErrorObject,
	IGetProjectsErrorObject,
} from '../../../../interfaces/getProjectsErrorsInterfaces';

import Container from '../../../../components/Container';
import Heading from '../../../../components/Heading';
import ProjectCard from '../../../../components/Card';
import CustomSelect from '../../../../components/Select';
import Loader from '../../../../components/Loader';

import selectOptionsArray from '../../../../mock/selectOptions.json';

import styles from './styles.module.scss';

interface ProjectsPageLayoutProps {
	projects: IProject[] | undefined;
	isLoading: boolean;
	isFetching: boolean;
	isError: boolean;
	projectsError:
		| IGetProjectsErrorObject
		| IGetProjectsDataErrorObject
		| SerializedError
		| undefined;
	handleProjectsCategoryChange: (value: string) => void;
	handleDetailsPage: (
		e: ChangeEvent,
		arr: IProject[],
		projectId: number
	) => void;
}

const ProjectsPageLayout: FC<ProjectsPageLayoutProps> = ({
	projects,
	isLoading,
	isFetching,
	isError,
	projectsError,
	handleProjectsCategoryChange,
	handleDetailsPage,
}) => {
	return (
		<div className={styles.main}>
			<Container>
				<Heading text={'Projects'} />
				{isLoading || isFetching ? (
					<Loader />
				) : (
					<>
						<div className={styles.mainSelectArea}>
							<span className={styles.mainSelectAreaText}>
								Choose type of projects:
							</span>
							<CustomSelect
								defaultValue='Apps'
								selectOptionsList={selectOptionsArray}
								handleChange={handleProjectsCategoryChange}
							/>
						</div>

						<div className={styles.mainGrid}>
							{projects?.map(({ id, image, title, link, rate, skills }) => (
								<ProjectCard
									key={id}
									image={image}
									title={title}
									link={link}
									rate={rate}
									skills={skills}
									handleClick={(e) => handleDetailsPage(e, projects, id)}
								/>
							))}
						</div>
					</>
				)}
			</Container>
		</div>
	);
};

export default ProjectsPageLayout;
