import { FC } from 'react';

interface HeadingProps {
	className: string;
	text: string;
	tag?: keyof JSX.IntrinsicElements;
}

const Heading: FC<HeadingProps> = ({ className, text, tag }) => {
	const Tag = tag ?? 'h1';

	return <Tag className={className}>{text}</Tag>;
};

export default Heading;
