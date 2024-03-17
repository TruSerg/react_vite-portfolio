import { FC } from 'react';

import styles from './styles.module.scss';

const Footer: FC = () => (
	<footer className={styles.footer}>
		<p className={styles.footerText}>© 2024 made by Sergey Trukhan</p>
	</footer>
);

export default Footer;
