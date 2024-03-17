import Heading from '../../../../components/Heading';
import Container from '../../../../components/Container';
import ImageComponent from '../../../../components/Image';
import DescriptionComponent from '../../../../components/Description';

import MyPhoto from '/img/my-photo-white.jpeg';

import styles from './styles.module.scss';
import IconSvg from '../../../../components/IconSvg';

const HomePageLayout = () => {
	return (
		<main className={styles.main}>
			<Container>
				<Heading text={'About me'} />
				<div className={styles.mainFlex}>
					<ImageComponent
						className={styles.mainFlexImg}
						src={MyPhoto}
						alt='My photo'
					/>

					<div className={styles.mainFlexBody}>
						<Heading tag={'h3'} text={'Hello and welcome!!!'} />

						<DescriptionComponent className={styles.mainFlexBodyDescription}>
							<p>
								My name is{' '}
								<span className={styles.mainFlexBodyDescriptionText}>
									Sergey
								</span>{' '}
								and i'm glad to see you on my portfolio. I'm a beginner
								Front-End Developer. I have been studying Front-end development
								for over two years. I'm really interested in it. My common
								framework is React. I don't have a commercial experience, but i
								have an extensive experience of creating my own projects and now
								i have the great portfolio which shows my extensive experience.
								My portfolio is created via{' '}
								<span className={styles.mainFlexBodyDescriptionText}>
									React
								</span>
								,{' '}
								<span className={styles.mainFlexBodyDescriptionText}>
									Redux-toolkit
								</span>
								,{' '}
								<span className={styles.mainFlexBodyDescriptionText}>
									Rtk-query
								</span>
								,{' '}
								<span className={styles.mainFlexBodyDescriptionText}>
									Firebase
								</span>
								,{' '}
								<span className={styles.mainFlexBodyDescriptionText}>
									Ant-design
								</span>
								,{' '}
								<span className={styles.mainFlexBodyDescriptionText}>Scss</span>{' '}
								. There are many quality and useful projects there. I would be
								happy if you check them.
							</p>
						</DescriptionComponent>
					</div>
				</div>

				<div className={styles.mainTitle}>
					<Heading tag={'h3'} text={'My current technical skills:'} />
				</div>

				<ul className={styles.mainList}>
					<li className={styles.mainListFlex}>
						<IconSvg icon={'i-react'} />
						<Heading text={'React'} tag={'h3'} />
					</li>
					<li className={styles.mainListFlex}>
						<IconSvg icon={'i-next'} />
						<Heading text={'Next'} tag={'h3'} />
					</li>
					<li className={styles.mainListFlex}>
						<IconSvg icon={'i-redux'} />
						<Heading text={'Redux'} tag={'h3'} />
					</li>
					<li className={styles.mainListFlex}>
						<IconSvg icon={'i-js'} />
						<Heading text={'Java script'} tag={'h3'} />
					</li>
					<li className={styles.mainListFlex}>
						<IconSvg icon={'i-ts'} />
						<Heading text={'Type script'} tag={'h3'} />
					</li>
					<li className={styles.mainListFlex}>
						<IconSvg icon={'i-material-ui'} />
						<Heading text={'Material Ui'} tag={'h3'} />
					</li>
					<li className={styles.mainListFlex}>
						<IconSvg icon={'i-ant-design'} />
						<Heading text={'Ant Design'} tag={'h3'} />
					</li>
					<li className={styles.mainListFlex}>
						<IconSvg icon={'i-git'} />
						<Heading text={'Git'} tag={'h3'} />
					</li>
					<li className={styles.mainListFlex}>
						<IconSvg icon={'i-html'} />
						<Heading text={'Html'} tag={'h3'} />
					</li>
					<li className={styles.mainListFlex}>
						<IconSvg icon={'i-css'} />
						<Heading text={'Css'} tag={'h3'} />
					</li>
					<li className={styles.mainListFlex}>
						<IconSvg icon={'i-sass'} />
						<Heading text={'Scss'} tag={'h3'} />
					</li>
				</ul>
			</Container>
		</main>
	);
};

export default HomePageLayout;
