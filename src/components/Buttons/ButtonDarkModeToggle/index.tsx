import { FC, useContext } from 'react';
import { SunOutlined, MoonOutlined } from '@ant-design/icons';
import { Switch, Space } from 'antd';

import { ThemeContext } from '../../../context/ThemeContext';

interface ButtonDarkModeToggleProps {
	handleChange: () => void;
}

const ButtonDarkModeToggle: FC<ButtonDarkModeToggleProps> = ({
	handleChange,
}) => {
	const { themeMode } = useContext(ThemeContext);

	return (
		<Space direction='vertical'>
			<Switch
				onClick={handleChange}
				checkedChildren={<SunOutlined />}
				unCheckedChildren={<MoonOutlined />}
				checked={themeMode === 'light' ? true : false}
			/>
		</Space>
	);
};

export default ButtonDarkModeToggle;
