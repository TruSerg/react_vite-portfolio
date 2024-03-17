import { useState } from 'react';

const useSelect = () => {
	const [projectsCategoryValue, setProjectsCategoryValue] =
		useState<string>('Apps');

	const handleProjectsCategoryChange = (value: string) => {
		setProjectsCategoryValue(value);
	};

	return {
		projectsCategoryValue,
		handleProjectsCategoryChange,
	};
};

export default useSelect;
