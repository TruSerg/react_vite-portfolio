import { FC, useContext } from 'react';
import { Loading3QuartersOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

import { ThemeContext } from '../../context/ThemeContext';

import styles from './styles.module.scss';

const Loader: FC = () => {
	const { themeMode } = useContext(ThemeContext);

	return (
		<div className={styles.loader}>
			<Spin
				className={styles.loaderSpin}
				indicator={
					<Loading3QuartersOutlined
						spin
						className={`${styles.loaderSpinIcon} ${styles[themeMode]}`}
					/>
				}
			/>
		</div>
	);
};

export default Loader;
