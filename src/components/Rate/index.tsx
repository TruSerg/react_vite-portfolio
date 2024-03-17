import { FC } from 'react';
import { Rate } from 'antd';

interface RateComponentProps {
	rateValue: number;
}

import styles from './styles.module.scss';

const RateComponent: FC<RateComponentProps> = ({ rateValue }) => (
	<Rate className={styles.rate} disabled allowHalf value={rateValue} />
);

export default RateComponent;
