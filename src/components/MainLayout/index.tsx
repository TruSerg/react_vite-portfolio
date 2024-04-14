import { ReactNode, FC, useContext } from 'react';
import { ConfigProvider, theme } from 'antd';

import { ThemeContext } from '../../context/ThemeContext';

import Header from '../Header';
import Footer from '../Footer';

import styles from './styles.module.scss';

interface MainLayoutProps {
	children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
	const { isDarkMode, themeMode } = useContext(ThemeContext);

	return (
		<ConfigProvider
			theme={{
				algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
			}}
		>
			<div className={`${styles.wrapper} ${styles[themeMode]}`}>
				<Header />

				{children}

				<Footer />
			</div>
		</ConfigProvider>
	);
};

export default MainLayout;
