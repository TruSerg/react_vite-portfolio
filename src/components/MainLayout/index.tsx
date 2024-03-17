import { ReactNode, FC } from 'react';

import Header from '../Header';
import Footer from '../Footer';

import style from './styles.module.scss';

interface MainLayoutProps {
	children: ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => (
	<div className={style.wrapper}>
		<Header />

		{children}

		<Footer />
	</div>
);

export default MainLayout;
