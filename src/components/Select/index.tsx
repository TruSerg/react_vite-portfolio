import { FC } from 'react';
import { Select, Space } from 'antd';
import { DefaultOptionType } from 'antd/es/cascader';

import styles from './styles.module.scss';

interface CustomSelectProps {
	defaultValue: string;
	selectOptionsList: DefaultOptionType[];
	handleChange: (value: string) => void;
}

const CustomSelect: FC<CustomSelectProps> = ({
	defaultValue,
	selectOptionsList,
	handleChange,
}) => {
	return (
		<Space wrap>
			<Select
				className={styles.select}
				defaultValue={defaultValue}
				onChange={handleChange}
				options={selectOptionsList}
			/>
		</Space>
	);
};

export default CustomSelect;
