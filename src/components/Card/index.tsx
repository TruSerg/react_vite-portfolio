import { FC, MouseEvent, useContext } from 'react';
import { Card, Typography, Button } from 'antd';
import { Link } from 'react-router-dom';
const { Title } = Typography;

import { ThemeContext } from '../../context/ThemeContext';

import RateComponent from '../Rate';
import ImageComponent from '../Image';

import styles from './styles.module.scss';

interface ProjectCardProps {
	image: string;
	title: string;
	link: string;
	rate: number;
	skills: string[];
	handleClick: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
}

const ProjectCard: FC<ProjectCardProps> = ({
	image,
	title,
	link,
	rate,
	skills,
	handleClick,
}) => {
	const { themeMode } = useContext(ThemeContext);

	return (
		<Link
			className={styles.link}
			to={link}
			rel='noopener noreferrer'
			target='_blank'
		>
			<Card
				className={styles.card}
				hoverable
				cover={
					<ImageComponent
						className={styles.cardImg}
						src={image}
						alt='project image'
					/>
				}
			>
				<div className={`${styles.cardBody} ${styles[themeMode]}`}>
					<Title className={styles.cardBodyTitle} level={4}>
						{title}
					</Title>

					<div className={styles.cardBodyRate}>
						<RateComponent rateValue={rate} />
					</div>

					<ul className={styles.cardBodyList}>
						{skills.map(skill => (
							<li key={skill}>{skill}</li>
						))}
					</ul>

					<Button className={styles.cardBodyBtn} onClick={handleClick}>
						Details
					</Button>
				</div>
			</Card>
		</Link>
	);
};

export default ProjectCard;
