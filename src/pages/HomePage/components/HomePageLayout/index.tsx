import { FC } from 'react';

import Heading from '../../../../components/Heading';
import Container from '../../../../components/Container';
import ImageComponent from '../../../../components/Image';
import DescriptionComponent from '../../../../components/Description';
import IconSvg from '../../../../components/IconSvg';

import MyPhotoLight from '/img/my-photo-white.jpeg';
import MyPhotoDark from '/img/my-photo-dark.jpeg';
import skills from '../../../../mock/skills.json';

import styles from './styles.module.scss';

interface HomePageLayoutProps {
	isDarkMode: boolean;
	themeMode: string;
}

const HomePageLayout: FC<HomePageLayoutProps> = ({ isDarkMode, themeMode }) => {
	const darkThemeColor = {
		color: '#e1e1e1',
	};

	const lightThemeColor = {
		color: '#37424e',
	};
	return (
		<main className={styles.main}>
			<Container>
				<Heading className={styles.mainTitle} text={'About me'} />

				<div className={styles.mainFlex}>
					<ImageComponent
						className={styles.mainFlexImg}
						src={isDarkMode ? MyPhotoDark : MyPhotoLight}
						alt='My photo'
					/>

					<div className={styles.mainFlexBody}>
						<Heading
							className={styles.mainFlexBodyTitle}
							style={isDarkMode ? darkThemeColor : lightThemeColor}
							tag={'h2'}
							text={'Hello and welcome!!!'}
						/>

						<div className={styles.mainFlexBodyDescription}>
							<DescriptionComponent>
								My name is{' '}
								<span
									className={`${styles.mainFlexBodyDescriptionText} ${styles[themeMode]}`}
								>
									Sergey
								</span>{' '}
								and I'm glad to see you on my portfolio. I'm a beginner
								Front-End Developer. I have been studying Front-end development
								for over two years. I'm really interested in it. I have started
								with studying{' '}
								<span
									className={`${styles.mainFlexBodyDescriptionText} ${styles[themeMode]}`}
								>
									Html
								</span>{' '}
								and{' '}
								<span
									className={`${styles.mainFlexBodyDescriptionText} ${styles[themeMode]}`}
								>
									Css
								</span>{' '}
								on my own. I reached great results and I realized that I was
								moving to the right direction. I decided to go on and I got a
								Front-end development course in IT-Shatle, where I learned{' '}
								<span
									className={`${styles.mainFlexBodyDescriptionText} ${styles[themeMode]}`}
								>
									JavaScript
								</span>{' '}
								and{' '}
								<span
									className={`${styles.mainFlexBodyDescriptionText} ${styles[themeMode]}`}
								>
									React
								</span>
								. My common framework (library) is{' '}
								<span
									className={`${styles.mainFlexBodyDescriptionText} ${styles[themeMode]}`}
								>
									React
								</span>
								. I don't have a commercial experience, but I have an extensive
								experience of creating my own projects and now I have the great
								portfolio, which shows my extensive experience. My portfolio is
								created via{' '}
								<span
									className={`${styles.mainFlexBodyDescriptionText} ${styles[themeMode]}`}
								>
									React
								</span>
								,{' '}
								<span
									className={`${styles.mainFlexBodyDescriptionText} ${styles[themeMode]}`}
								>
									Redux-toolkit
								</span>
								,{' '}
								<span
									className={`${styles.mainFlexBodyDescriptionText} ${styles[themeMode]}`}
								>
									Rtk-query
								</span>
								,{' '}
								<span
									className={`${styles.mainFlexBodyDescriptionText} ${styles[themeMode]}`}
								>
									Firebase
								</span>
								,{' '}
								<span
									className={`${styles.mainFlexBodyDescriptionText} ${styles[themeMode]}`}
								>
									Ant-design
								</span>
								,{' '}
								<span
									className={`${styles.mainFlexBodyDescriptionText} ${styles[themeMode]}`}
								>
									Scss
								</span>
								. There are many quality and useful projects there. I would be
								happy if you check them.
							</DescriptionComponent>
						</div>
					</div>
				</div>

				<Heading
					className={styles.mainSubtitle}
					style={isDarkMode ? darkThemeColor : lightThemeColor}
					tag={'h3'}
					text={'My current technical skills:'}
				/>

				<ul className={styles.mainList}>
					{skills?.map(({ id, icon, text }) => (
						<li key={id} className={styles.mainListFlex}>
							<IconSvg icon={icon} />
							<Heading
								className={styles.mainListFlexTitle}
								text={text}
								tag={'h3'}
							/>
						</li>
					))}
				</ul>
			</Container>
		</main>
	);
};

export default HomePageLayout;
