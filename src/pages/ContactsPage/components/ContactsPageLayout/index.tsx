import { FC } from 'react';

import Container from '../../../../components/Container';
import Heading from '../../../../components/Heading';
import IconSvg from '../../../../components/IconSvg';
import CustomLink from '../../../../components/Link';
import ImageComponent from '../../../../components/Image';
import DescriptionComponent from '../../../../components/Description';

import MyPhotoLight from '/img/my-photo-white.jpeg';
import MyPhotoDark from '/img/my-photo-dark.jpeg';
import links from '../../../../mock/links.json';

import styles from './styles.module.scss';

interface ContactsPageLayoutProps {
	isDarkMode: boolean;
}

const ContactsPageLayout: FC<ContactsPageLayoutProps> = ({ isDarkMode }) => {
	return (
		<div className={styles.main}>
			<Container>
				<Heading className={styles.mainTitle} text={'Contacts'} />

				<div className={styles.mainTop}>
					<ImageComponent
						className={styles.mainTopImg}
						src={isDarkMode ? MyPhotoDark : MyPhotoLight}
						alt={'my photo'}
					/>

					<div className={styles.mainTopDescription}>
						<DescriptionComponent
							text={'If you want to contact me, you can do it via these links!'}
						/>
					</div>
				</div>
				<ul className={styles.mainList}>
					{links.map(({ id, icon, text, link }) => (
						<li key={id} className={styles.mainListItem}>
							<IconSvg icon={icon} />
							<CustomLink link={link} text={text} />
						</li>
					))}
				</ul>
			</Container>
		</div>
	);
};

export default ContactsPageLayout;
