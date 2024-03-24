import { FC, ReactNode } from 'react';

import styles from './styles.module.scss';

interface DescriptionComponentProps {
	text?: string;
	children?: ReactNode;
}

const DescriptionComponent: FC<DescriptionComponentProps> = ({
	text,
	children,
}) => {
	return <div className={styles.description}>{text ?? children}</div>;
};

export default DescriptionComponent;
