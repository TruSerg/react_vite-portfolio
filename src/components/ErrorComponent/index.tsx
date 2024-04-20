import { FC, useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContext';

import Heading from '../Heading';
import ImageComponent from '../Image';
import CustomLink from '../Link';
import DialogComponent from '../DialogComponent';

import ErrorImageDark from '/img/error-img.png';
import ErrorImageLight from '/img/error.jpg';

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
				src={isDarkMode ? ErrorImageDark : ErrorImageLight}
				alt='Error'
			/>

			<div className={styles.errorWrapperBody}>
				<DialogComponent
					text={"Oh! I can't believe it! You can check my old portfolio."}
				/>
			</div>

			<CustomLink
				link={'https://truserg.github.io/portfolio'}
				text={'Old portfolio'}
			/>
		</div>
	);
};

export default ErrorComponent;
