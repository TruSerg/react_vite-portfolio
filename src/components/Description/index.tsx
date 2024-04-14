import { FC, ReactNode, useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContext';

import styles from './styles.module.scss';

interface DescriptionComponentProps {
	text?: string;
	children?: ReactNode;
}

const DescriptionComponent: FC<DescriptionComponentProps> = ({
	text,
	children,
}) => {
	const { themeMode } = useContext(ThemeContext);

	return (
		<div className={`${styles.description} ${styles[themeMode]}`}>
			{text ?? children}
		</div>
	);
};

export default DescriptionComponent;
