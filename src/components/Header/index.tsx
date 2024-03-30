import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../routes/routeNames';

import Container from '../Container';
import IconSvg from '../IconSvg';

import styles from './styles.module.scss';

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Container>
				<div className={styles.headerBody}>
					<IconSvg icon={'i-logo'} />
					<nav className={styles.headerBodyMenu}>
						<ul className={styles.headerBodyMenuList}>
							<li className={styles.headerBodyMenuListLink}>
								<Link to={ROUTES.HOME_PAGE}>About me</Link>
							</li>
							<li className={styles.headerBodyMenuListLink}>
								<Link to={ROUTES.PROJECTS_PAGE}>Projects</Link>
							</li>
							<li className={styles.headerBodyMenuListLink}>
								<Link to={ROUTES.CONTACTS_PAGE}>Contacts</Link>
							</li>
						</ul>
					</nav>
				</div>
			</Container>
		</header>
	);
};

export default Header;
