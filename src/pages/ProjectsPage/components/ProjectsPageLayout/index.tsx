import { FC, MouseEvent } from 'react';
import { SerializedError } from '@reduxjs/toolkit';

import { IProject } from '../../../../interfaces/getProjectsInterfaces';
import {
	IGetProjectsErrorObject,
	IGetProjectsDataErrorObject,
} from '../../../../interfaces/getProjectsErrorsInterfaces';

import Container from '../../../../components/Container';
import Heading from '../../../../components/Heading';
import ProjectCard from '../../../../components/Card';
import CustomSelect from '../../../../components/Select';
import Loader from '../../../../components/Loader';
import ErrorComponent from '../../../../components/ErrorComponent';

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
		e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
		arr: IProject[],
		projectId: number
	) => void;
}

const ProjectsPageLayout: FC<ProjectsPageLayoutProps> = ({
	projects,
	isLoading,
	isError,
	projectsError,
	handleProjectsCategoryChange,
	handleDetailsPage,
}) => {
	console.log(projectsError);

	return (
		<div className={styles.main}>
			<Container>
				<Heading className={styles.mainTitle} text={'Projects'} />
				{isLoading ? (
					<Loader />
				) : (
					<>
						{isError ? (
							<ErrorComponent error={projectsError} />
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
											handleClick={e => handleDetailsPage(e, projects, id)}
										/>
									))}
								</div>
							</>
						)}
					</>
				)}
			</Container>
		</div>
	);
};

export default ProjectsPageLayout;
