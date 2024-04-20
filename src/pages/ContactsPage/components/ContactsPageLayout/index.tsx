import { FC } from 'react';

import Container from '../../../../components/Container';
import Heading from '../../../../components/Heading';
import IconSvg from '../../../../components/IconSvg';
import CustomLink from '../../../../components/Link';
import DialogComponent from '../../../../components/DialogComponent';

import links from '../../../../mock/links.json';

import styles from './styles.module.scss';

const ContactsPageLayout: FC = () => {
	return (
		<div className={styles.main}>
			<Container>
				<Heading className={styles.mainTitle} text={'Contacts'} />

				<div className={styles.mainTop}>
					<DialogComponent
						text={'If you want to contact me, you can do it via these links!'}
					/>
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
