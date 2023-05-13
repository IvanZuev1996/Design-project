import { Page } from 'widgets/Page/Page';
import { motion } from 'framer-motion';
import WorksSection from '../../MainPage/ui/WorksSection/WorksSection';
import cls from './PortfolioPage.module.scss';

const PortfolioPage = () => (
    <Page className={cls.Wrapper}>
        <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.8, delayChildren: 0.5 }}
            className={cls.logo}
        >
            <WorksSection isMain />
        </motion.div>
    </Page>
);

export default PortfolioPage;
