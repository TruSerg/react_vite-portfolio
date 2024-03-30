import { FC } from 'react';
import { SerializedError } from '@reduxjs/toolkit';

import {
	IGetProjectsDataErrorObject,
	IGetProjectsErrorObject,
} from '../../interfaces/getProjectsErrorsInterfaces';

import Heading from '../Heading';
import ErrorImage from '/img/error.jpg';
import ImageComponent from '../Image';
import DescriptionComponent from '../Description';
import CustomLink from '../Link';

import MyPhoto from '/img/my-photo-white.jpeg';

import styles from './styles.module.scss';

interface ErrorComponentProps {
	error:
		| IGetProjectsErrorObject
		| IGetProjectsDataErrorObject
		| SerializedError
		| undefined;
}

const ErrorComponent: FC<ErrorComponentProps> = ({ error }) => {
	return (
		<div className={styles.errorWrapper}>
			<div className={styles.errorWrapperTitle}>
				<Heading
					tag='h2'
					className={styles.errorWrapperTitleText}
					text={`${error}`}
				/>
			</div>

			<ImageComponent
				className={styles.errorWrapperImg}
				src={ErrorImage}
				alt='Error'
			/>

			<div className={styles.errorWrapperBody}>
				<ImageComponent
					className={styles.errorWrapperBodyImg}
					src={MyPhoto}
					alt={'my photo'}
				/>

				<div className={styles.errorWrapperBodyDescription}>
					<DescriptionComponent
						text={"Oh! I can't believe it! You can check my old portfolio."}
					/>
				</div>
			</div>
			<CustomLink
				link={'https://truserg.github.io/portfolio'}
				text={'Old portfolio'}
			/>
		</div>
	);
};

export default ErrorComponent;
