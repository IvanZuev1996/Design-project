import { Page } from 'widgets/Page/Page';
import AboutSection from 'pages/MainPage/ui/Sections/AboutSection/AboutSection';
import Footer from 'widgets/Footer/Footer';
import { motion } from 'framer-motion';
import cls from './PricePage.module.scss';

const ContactPage = () => (
    <Page className={cls.Wrapper}>
        <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.8, delayChildren: 0.5 }}
            viewport={{ once: true }}
            className={cls.logo}
        >
            <AboutSection />
            <Footer />
        </motion.div>
    </Page>
);

export default ContactPage;
