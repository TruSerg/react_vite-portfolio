import { FC, ReactNode } from 'react';

interface DescriptionComponentProps {
	className: string;
	text?: string;
	children?: ReactNode;
}

const DescriptionComponent: FC<DescriptionComponentProps> = ({
	className,
	text,
	children,
}) => {
	return <p className={className}>{text ?? children}</p>;
};

export default DescriptionComponent;
