import { FC, useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContext';

import DescriptionComponent from '../Description';
import ImageComponent from '../Image';

import MyPhotoLight from '/img/my-photo-white.jpeg';
import MyPhotoDark from '/img/my-photo-dark.jpeg';

import styles from './styles.module.scss';

interface DialogComponentProps {
	text: string;
}

const DialogComponent: FC<DialogComponentProps> = ({ text }) => {
	const { isDarkMode } = useContext(ThemeContext);

	return (
		<div className={styles.dialog}>
			<ImageComponent
				className={styles.dialogImg}
				src={isDarkMode ? MyPhotoDark : MyPhotoLight}
				alt={'my photo'}
			/>

			<div className={styles.dialogDescription}>
				<DescriptionComponent text={text} />
			</div>
		</div>
	);
};

export default DialogComponent;
