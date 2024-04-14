import { useEffect, useState } from 'react';
import { themeModeChange } from '../store/getProjectDetailsSlice';
import { useAppDispatch } from './useStoreHooks';

const useToggleThemeMode = () => {
	const dispatch = useAppDispatch();
	const [themeMode, setThemeMode] = useState('light');

	useEffect(() => {
		document.documentElement.setAttribute('data-theme-mode', themeMode);

		themeMode === 'dark'
			? dispatch(themeModeChange(true))
			: dispatch(themeModeChange(false));
	}, [dispatch, themeMode]);

	const handleDarkModeChange = () => {
		setThemeMode(currentValue => {
			return currentValue === 'light' ? 'dark' : 'light';
		});
	};

	return { themeMode, handleDarkModeChange };
};

export default useToggleThemeMode;
