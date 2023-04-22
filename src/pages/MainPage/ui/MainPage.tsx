import { memo } from 'react';
import { Page } from 'widgets/Page/Page';
import cls from './MainPage.module.scss';
import AboutSection from './AboutSection/AboutSection';
import HeaderSection from './HeaderSection/HeaderSection';
import WorksSection from './WorksSection/WorksSection';

const MainPage = memo(() => {
    const f = 1;
    return (
        <Page>
            <HeaderSection />
            <AboutSection />
            <WorksSection />
        </Page>
    );
});

export default MainPage;
