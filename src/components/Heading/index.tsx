import { CSSProperties, FC } from 'react';

interface HeadingProps {
	className: string;
	style?: CSSProperties | undefined;
	text: string;
	tag?: keyof JSX.IntrinsicElements;
}

const Heading: FC<HeadingProps> = ({ className, style, text, tag }) => {
	const Tag = tag ?? 'h1';

	return <Tag className={className} style={style}>{text}</Tag>;
};

export default Heading;
