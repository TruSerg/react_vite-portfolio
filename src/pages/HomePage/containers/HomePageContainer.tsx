import { useContext } from 'react';

import { ThemeContext } from '../../../context/ThemeContext';

import HomePageLayout from '../components/HomePageLayout';

const HomePageContainer = () => {
	const { isDarkMode, themeMode } = useContext(ThemeContext);

	return <HomePageLayout isDarkMode={isDarkMode} themeMode={themeMode} />;
};

export default HomePageContainer;
