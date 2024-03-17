import { ReactNode, FC } from 'react';

import styles from './styles.module.scss';

interface ContainerProps {
	children: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
	return <div className={styles.container}>{children}</div>;
};

export default Container;
