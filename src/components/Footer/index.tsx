import { FC, useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContext';

import styles from './styles.module.scss';

const Footer: FC = () => {
	const { themeMode } = useContext(ThemeContext);

	return (
		<footer className={`${styles.footer} ${styles[themeMode]}`}>
			<p className={styles.footerText}>© 2024 made by Sergey Trukhan</p>
		</footer>
	);
};

export default Footer;
