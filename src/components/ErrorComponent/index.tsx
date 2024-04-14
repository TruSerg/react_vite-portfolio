import { FC, useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContext';

import Heading from '../Heading';
import ErrorImage from '/img/error.jpg';
import ImageComponent from '../Image';
import DescriptionComponent from '../Description';
import CustomLink from '../Link';

import MyPhotoLight from '/img/my-photo-white.jpeg';
import MyPhotoDark from '/img/my-photo-dark.jpeg';

import styles from './styles.module.scss';

interface ErrorComponentProps {
	error: string | string[] | undefined;
}

const ErrorComponent: FC<ErrorComponentProps> = ({ error }) => {
	const { isDarkMode } = useContext(ThemeContext);

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
					src={isDarkMode ? MyPhotoDark : MyPhotoLight}
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
