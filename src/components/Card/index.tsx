import { ChangeEvent, FC } from 'react';
import { Card, Typography, Button } from 'antd';
import { Link } from 'react-router-dom';
const { Title } = Typography;

import RateComponent from '../Rate';
import ImageComponent from '../Image';

import styles from './styles.module.scss';

interface ProjectCardProps {
	image: string;
	title: string;
	link: string;
	rate: number;
	skills: string[];
	handleClick: (e: ChangeEvent) => void;
}

const ProjectCard: FC<ProjectCardProps> = ({
	image,
	title,
	link,
	rate,
	skills,
	handleClick,
}) => (
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
			<div className={styles.cardBody}>
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

export default ProjectCard;
