import { FC, ReactNode, createContext, useEffect, useState } from 'react';

import { useLocalStorage } from '../hooks';
import detectDarkMode from '../utils/detectDarkMode';

interface ThemeContextProps {
	isDarkMode: boolean;
	themeMode: string;
	handleDarkModeChange: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
	isDarkMode: false,
	themeMode: 'light',
	handleDarkModeChange: () => '',
});

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
	const [themeMode, setThemeMode] = useLocalStorage(
		'themeMode',
		detectDarkMode()
	);
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		themeMode === 'dark' ? setIsDarkMode(true) : setIsDarkMode(false);
	}, [themeMode, isDarkMode]);

	useEffect(() => {
		window
			.matchMedia('(prefers-color-scheme: dark)')
			.addEventListener('change', event => {
				const newColorScheme = event.matches ? 'dark' : 'light';
				setThemeMode(newColorScheme);
			});
	}, [setThemeMode]);

	const handleDarkModeChange = () => {
		setThemeMode((currentValue: string) => {
			return currentValue === 'light' ? 'dark' : 'light';
		});
	};

	return (
		<ThemeContext.Provider
			value={{ isDarkMode, themeMode, handleDarkModeChange }}
		>
			{children}
		</ThemeContext.Provider>
	);
};
