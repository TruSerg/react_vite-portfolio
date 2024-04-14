import { FC, ReactNode, createContext, useEffect, useState } from 'react';

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
	const [themeMode, setThemeMode] = useState('light');
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		themeMode === 'dark' ? setIsDarkMode(true) : setIsDarkMode(false);
	}, [themeMode, isDarkMode]);

	const handleDarkModeChange = () => {
		setThemeMode(currentValue => {
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
