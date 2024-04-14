import { FC } from 'react';
import { SunOutlined, MoonOutlined } from '@ant-design/icons';
import { Switch, Space } from 'antd';

interface ButtonDarkModeToggleProps {
	handleChange: () => void;
}

const ButtonDarkModeToggle: FC<ButtonDarkModeToggleProps> = ({
	handleChange,
}) => (
	<Space direction='vertical'>
		<Switch
			onClick={handleChange}
			checkedChildren={<SunOutlined />}
			unCheckedChildren={<MoonOutlined />}
			defaultChecked
		/>
	</Space>
);

export default ButtonDarkModeToggle;
