import { FC } from 'react';
import { Loading3QuartersOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

import styles from './styles.module.scss';

const Loader: FC = () => (
	<div className={styles.loader}>
		<Spin
			className={styles.loaderSpin}
			indicator={
				<Loading3QuartersOutlined spin className={styles.loaderSpinIcon} />
			}
		/>
	</div>
);

export default Loader;
