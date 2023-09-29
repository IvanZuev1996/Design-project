import { Page } from 'widgets/Page/Page';
import Footer from 'widgets/Footer';
import AboutSection from '../Sections/AboutSection';
import HeaderSection from '../Sections/HeaderSection/HeaderSection';
import WorksSection from '../Sections/WorksSection';
import SkillsSection from '../Sections/SkillsSection/SkillsSection';
import TestimonialsSection from '../Sections/TestimonialsSection/TestimonialsSection';

const MainPage = () => (
    <Page>
        <HeaderSection />
        <AboutSection />
        <WorksSection />
        <SkillsSection />
        <TestimonialsSection />
        <Footer />
    </Page>
);

export default MainPage;
