import { FC } from 'react';

import sprite from '../../static/sprite.svg';

import styles from './styles.module.scss';

interface IconSvgProps {
	icon: string;
}

const IconSvg: FC<IconSvgProps> = ({ icon }) => (
	<svg className={styles.iconSvg}>
		<use href={sprite + `#${icon}`} />
	</svg>
);

export default IconSvg;
