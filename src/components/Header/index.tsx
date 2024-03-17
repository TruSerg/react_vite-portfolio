import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../routes/routeNames';

import Container from '../Container';

import styles from './styles.module.scss';

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Container>
				<nav className={styles.headerMenu}>
					<ul className={styles.headerMenuList}>
						<li className={styles.headerMenuListLink}>
							<Link to={ROUTES.HOME_PAGE}>About me</Link>
						</li>
						<li className={styles.headerMenuListLink}>
							<Link to={ROUTES.PROJECTS_PAGE}>Projects</Link>
						</li>
						<li className={styles.headerMenuListLink}>
							<Link to={ROUTES.CONTACTS_PAGE}>Contacts</Link>
						</li>
					</ul>
				</nav>
			</Container>
		</header>
	);
};

export default Header;
