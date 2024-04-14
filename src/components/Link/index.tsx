import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightOutlined } from '@ant-design/icons';

import { ThemeContext } from '../../context/ThemeContext';

import styles from './styles.module.scss';

interface CustomLinkProps {
	link: string;
	text: string;
}

const CustomLink: FC<CustomLinkProps> = ({ link, text }) => {
	const { themeMode } = useContext(ThemeContext);

	return (
		<div className={`${styles.flex} ${styles[themeMode]}`}>
			<Link
				className={styles.flexLink}
				to={link}
				rel='noopener noreferrer'
				target='_blank'
			>
				{text}
			</Link>
			<ArrowRightOutlined className={styles.flexArrow} />
		</div>
	);
};
export default CustomLink;
