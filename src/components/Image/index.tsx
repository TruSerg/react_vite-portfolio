import { FC } from 'react';
import { Image } from 'antd';

interface ImageComponentProps {
	className: string;
	src: string;
	alt: string;
}
const ImageComponent: FC<ImageComponentProps> = ({ className, src, alt }) => (
	<Image className={className} src={src} alt={alt} preview={false} />
);

export default ImageComponent;
