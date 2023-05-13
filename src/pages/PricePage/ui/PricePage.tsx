import { Page } from 'widgets/Page/Page';
import AboutSection from 'pages/MainPage/ui/AboutSection/AboutSection';
import Footer from 'widgets/Footer/Footer';
import { motion } from 'framer-motion';
import cls from './PricePage.module.scss';

const ContactPage = () => {
    const f = 1;
    return (
        <Page className={cls.Wrapper}>
            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.8, delayChildren: 0.5 }}
                className={cls.logo}
            >
                <AboutSection className={cls.about} />
                <Footer />
            </motion.div>
        </Page>
    );
};

export default ContactPage;
