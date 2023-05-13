import { memo } from 'react';
import { Page } from 'widgets/Page/Page';
import { motion } from 'framer-motion';
import Footer from 'widgets/Footer/Footer';
import cls from './AboutPage.module.scss';
import AboutCard, { Card } from './AboutCard/AboutCard';

const AboutPage = memo(() => {
    const cardsInfo: Card[] = [
        {
            description:
                'Отсутствие офиса, помогает нам оказывать услуги премиального качества, за более низкую цену',
            number: '1',
            title: 'Экономия'
        },
        {
            description:
                'У нас небольшая команда,а значит принятие решений занимает гораздо меньшее количество времени',
            number: '2',
            title: 'Скорость'
        },
        {
            description:
                'Сразу после начала работы, вы будете подключены к нашему удаленному офису, где напрямую сможете общаться с Дизайнером, Менеджером или же Руководителем агентства',
            number: '3',
            title: 'Прозрачность'
        },
        {
            description:
                'Мы будем предоставлять вам регулярные отчеты о стадии на которой, находится ваш дизайн',
            number: '4',
            title: 'Удобство'
        }
    ];
    return (
        <Page className={cls.wrapper}>
            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.8, delayChildren: 0.5 }}
                className={cls.logo}
            >
                <h1>Our Design</h1>
                <p>
                    Мы помогаем упаковывать бизнес по всему миру, и создаем
                    дизайн, который, остается актуальным и вызывает эмоции даже
                    в нашу эпоху фаст-фуд информации! Сотрудничая с
                    веб-студиями, креативными агентствами, издателями, а также
                    разработчиками мобильных игр и арбитражными командами со
                    всего земного шара, мы всегда помним о репутации, следим за
                    качеством, и предоставляем услуги высшего качества.
                </p>
            </motion.div>
            <h1>Наши преимущества!</h1>
            <div className={cls.cards}>
                {cardsInfo.map((card) => (
                    <AboutCard
                        description={card.description}
                        number={card.number}
                        title={card.title}
                        key={card.number}
                    />
                ))}
            </div>
            <Footer />
        </Page>
    );
});

export default AboutPage;
