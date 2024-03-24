import { FC } from 'react';

import Container from '../../../../components/Container';
import Heading from '../../../../components/Heading';
import RateComponent from '../../../../components/Rate';
import CustomLink from '../../../../components/Link';
import BackButton from '../../../../components/Buttons/BackButton';
import ImageComponent from '../../../../components/Image';
import DescriptionComponent from '../../../../components/Description';
import IconSvg from '../../../../components/IconSvg';

import styles from './styles.module.scss';

interface ProjectDetailsPageLayoutProps {
	title: string;
	image: string;
	link: string;
	description: string | undefined;
	rate: number;
	skills: string[];
	icons: string[];
}

const ProjectDetailsPageLayout: FC<ProjectDetailsPageLayoutProps> = ({
	title,
	image,
	link,
	description,
	rate,
	skills,
	icons,
}) => {
	return (
		<div className={styles.main}>
			<Container>
				<div className={styles.mainTop}>
					<BackButton />

					<Heading className={styles.mainTopTitle} text={title} />
				</div>

				<div className={styles.mainFlex}>
					<div className={styles.mainFlexLeft}>
						<ImageComponent
							className={styles.mainFlexLeftImg}
							src={image}
							alt='project image'
						/>
					</div>

					<div className={styles.mainFlexRight}>
						<ul className={styles.mainFlexRightSkills}>
							{skills?.map(skill => (
								<li className={styles.mainFlexRightSkillsText} key={skill}>
									{skill}
								</li>
							))}
						</ul>

						<div className={styles.mainFlexRightDescription}>
							<DescriptionComponent text={description} />
						</div>

						<div className={styles.mainFlexRightRate}>
							<RateComponent rateValue={rate} />
						</div>

						<ul className={styles.mainFlexRightList}>
							{icons?.map(icon => (
								<li key={icon} className={styles.mainFlexRightListItem}>
									<IconSvg icon={icon} />
								</li>
							))}
						</ul>

						<CustomLink link={link} text={'Show project'} />
					</div>
				</div>
			</Container>
		</div>
	);
};

export default ProjectDetailsPageLayout;
