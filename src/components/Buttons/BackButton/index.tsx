import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';

import style from './styles.module.scss';

const BackButton: FC = () => {
	const navigate = useNavigate();
	const goBack = () => navigate(-1);

	return (
		<Button className={style.button} onClick={goBack}>
			<ArrowLeftOutlined className={style.buttonIcon} />
		</Button>
	);
};

export default BackButton;
