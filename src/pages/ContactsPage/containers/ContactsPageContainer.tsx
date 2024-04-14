import { useContext } from 'react';

import { ThemeContext } from '../../../context/ThemeContext';

import ContactsPageLayout from '../components/ContactsPageLayout';

const ContactsPageContainer = () => {
	const { isDarkMode } = useContext(ThemeContext);

	return <ContactsPageLayout isDarkMode={isDarkMode} />;
};

export default ContactsPageContainer;
