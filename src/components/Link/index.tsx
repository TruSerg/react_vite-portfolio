import { FC } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightOutlined } from '@ant-design/icons';

import styles from './styles.module.scss';

interface CustomLinkProps {
	link: string;
	text: string;
}

const CustomLink: FC<CustomLinkProps> = ({ link, text }) => (
	<div className={styles.flex}>
		<Link
			className={styles.flexLink}
			to={link}
			rel='noopener noreferrer'
			target='_blank'
		>
			{text}
		</Link>
		<ArrowRightOutlined />
	</div>
);
export default CustomLink;
