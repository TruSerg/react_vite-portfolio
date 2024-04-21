import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';

import { ROUTES } from '../../routes/routeNames';

import { ThemeContext } from '../../context/ThemeContext';

import Container from '../Container';
import IconSvg from '../IconSvg';
import ButtonDarkModeToggle from '../Buttons/ButtonDarkModeToggle';

import styles from './styles.module.scss';

const Header: FC = () => {
	const { isDarkMode, themeMode, handleDarkModeChange } =
		useContext(ThemeContext);

	const logoLightMode = {
		filter: 'none',
		transition: 'filter 0.3s ease-in-out',
	};

	const logoDarkMode = {
		filter: 'sepia(30%)',
	};

	return (
		<header className={`${styles.header} ${styles[themeMode]}`}>
			<Container>
				<div className={styles.headerBody}>
					<Link
						to={ROUTES.HOME_PAGE}
						className={styles.headerBodyLogo}
						style={isDarkMode ? logoDarkMode : logoLightMode}
					>
						<IconSvg icon={'i-logo'} />
					</Link>

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

					<div className={styles.headerBodyBtn}>
						<ButtonDarkModeToggle handleChange={handleDarkModeChange} />
					</div>
				</div>
			</Container>
		</header>
	);
};

export default Header;
