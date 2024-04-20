import { useState, useEffect } from 'react';

const getStorageValue = (key: string, defaultValue: string) => {
	const saved = localStorage.getItem(key) as string;
	const initial = JSON.parse(saved);
	return initial ?? defaultValue;
};

const useLocalStorage = (key: string, defaultValue: string) => {
	const [value, setValue] = useState(() => {
		return getStorageValue(key, defaultValue);
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [key, value]);

	return [value, setValue];
};

export default useLocalStorage;
