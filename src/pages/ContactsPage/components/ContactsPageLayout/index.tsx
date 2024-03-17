import Container from '../../../../components/Container';
import Heading from '../../../../components/Heading';

import styles from './styles.module.scss'

const ContactsPageLayout = () => {
	return (
		<div className={styles.main}>
			<Container>
				<Heading text={'Contacts'} />
			</Container>
		</div>
	);
};

export default ContactsPageLayout;
