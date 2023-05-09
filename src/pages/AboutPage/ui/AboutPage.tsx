import { memo } from 'react';
import { Page } from 'widgets/Page/Page';
import { images } from 'shared/const';
import { motion } from 'framer-motion';
import cls from './AboutPage.module.scss';

const AboutPage = memo(() => {
    const a = 1;
    return (
        <Page className={cls.wrapper}>
            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.8, delayChildren: 0.5 }}
                className={cls.logo}
            >
                <images.aboutPhoto />
                <h1>Our Design</h1>
            </motion.div>
        </Page>
    );
});

export default AboutPage;
