import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/Footer/Footer';
import Navigation from '../components/Navigation/Navigation';
import AboutPage from '../components/_AboutPage/AboutPage';
import ContactPage from '../components/_ContactPage/ContactPage';
import HomePage from '../components/_HomePage/HomePage';
import ProjectsPage from '../components/_ProjectsPage/ProjectsPage';
import data from '../assets/projects.json';
import { getPlaiceholder } from 'plaiceholder';
import { ProjectCardProps } from '../components/_ProjectsPage/ProjectCard/ProjectCard';
import GeometricBackground from '../components/GeometricBackground/GeometricBackground';
interface props {
  imagesData: ProjectCardProps[];
}
const MarkovskiDev: NextPage<props> = ({ imagesData }) => {
  return (
    <>
      <Head>
        <title>Markovski Dev</title>
        <meta
          name="description"
          content="Leonardo Markovski is Front-End Developer focused on creating web applications using best practices."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;1,300&display=swap"
          rel="stylesheet"
          crossOrigin="true"
        />
      </Head>
      <div className="pages-wrapper">
        {/* <GeometricBackground /> */}
        <Navigation />
        <HomePage />
        <AboutPage />
        <ProjectsPage data={imagesData} />
        <ContactPage />
        <Footer />
      </div>
    </>
  );
};

export default MarkovskiDev;

export async function getStaticProps() {
  const images_data = await Promise.all(
    data.map(async (data) => {
      const images = data.imgSrc;

      const imagesData = await Promise.all(
        images.map(async (imgItem) => {
          const { base64, img } = await getPlaiceholder(imgItem);
          return {
            ...img,
            base64: base64,
          };
        })
      );

      return { ...data, imgSrc: imagesData };
    })
  );

  return {
    props: {
      imagesData: images_data,
    },
  };
}
