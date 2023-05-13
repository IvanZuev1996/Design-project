import { Page } from 'widgets/Page/Page';
import Footer from 'widgets/Footer';
import AboutSection from './AboutSection';
import HeaderSection from './HeaderSection/HeaderSection';
import WorksSection from './WorksSection';
import SkillsSection from './SkillsSection/SkillsSection';
import TestimonialsSection from './TestimonialsSection/TestimonialsSection';

const MainPage = () => {
    const f = 1;
    return (
        <Page>
            <HeaderSection />
            <AboutSection />
            <WorksSection />
            <SkillsSection />
            <TestimonialsSection />
            <Footer />
        </Page>
    );
};

export default MainPage;
