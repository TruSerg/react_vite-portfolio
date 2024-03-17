import { FC } from 'react';

import styles from './styles.module.scss';

interface HeadingProps {
	className?: string;
	text: string;
	tag?: keyof JSX.IntrinsicElements;
}

const Heading: FC<HeadingProps> = ({ className, text, tag }) => {
	const Tag = tag ?? 'h1';

	return <Tag className={styles.mainTitle ?? className}>{text}</Tag>;
};

export default Heading;
