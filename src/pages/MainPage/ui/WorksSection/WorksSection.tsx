import { urlFor, client } from 'client';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { AiFillEye } from 'react-icons/ai';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { images } from 'shared/const';
import { Work } from 'shared/types';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Button } from 'shared/ui/Button/Button';
import AppWrap from 'widgets/AppWrap/AppWrap';
import cls from './WorksSection.module.scss';

interface AnimateCard {
    y: number;
    opacity: number;
}

const WorksSection = () => {
    const worksTypes: string[] = ['Логотипы', 'WEB-Дизайн', 'Дизайн', 'Все'];
    const [works, setWorks] = useState<Work[]>([]);
    const [filterWork, setFilterWork] = useState<Work[]>([]);
    const [activeFilter, setActiveFilter] = useState('All');
    const [animateCard, setAnimateCard] = useState<AnimateCard>({
        y: 0,
        opacity: 1
    });

    useEffect(() => {
        const query = '*[_type == "works"]';

        client.fetch(query).then((data) => {
            setWorks(data);
            setFilterWork(data);
        });
    }, []);

    const handleWorkFilter = (item: string) => {
        setActiveFilter(item);
        setAnimateCard({ y: 100, opacity: 0 });

        setTimeout(() => {
            setAnimateCard({ y: 0, opacity: 1 });

            if (item === 'All') {
                setFilterWork(works);
            } else {
                setFilterWork(works.filter((work) => work.tags.includes(item)));
            }
        }, 500);
    };
    return (
        <div className={cls.wrapper}>
            <h2>Наши работы!</h2>
            <div className={cls.filter}>
                {worksTypes.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleWorkFilter(item)}
                        className={`${cls.filterItem} ${
                            activeFilter === item ? cls.activeFilter : ''
                        }`}
                    >
                        {item}
                    </div>
                ))}
            </div>

            <motion.div
                animate={animateCard}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className={cls.portfolio}
            >
                {filterWork.slice(0, 10).map((work, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: [1, 1.06] }}
                        transition={{ duration: 0.17, delayChildren: 0.5 }}
                    >
                        <div className={cls.portfolioItem} key={index}>
                            <div className={cls.workImg}>
                                <img
                                    src={String(urlFor(work.imgUrl))}
                                    alt={work.title}
                                />

                                <motion.div
                                    whileHover={{
                                        opacity: [0, 1]
                                    }}
                                    transition={{
                                        duration: 0.1,
                                        ease: 'easeInOut',
                                        staggerChildren: 0.5
                                    }}
                                    className={cls.workHover}
                                >
                                    <AppLink
                                        to={`${RoutePath.service_details}${work._id}`}
                                        rel="noreferrer"
                                    >
                                        <motion.div
                                            whileInView={{ scale: [0, 1] }}
                                            whileHover={{ scale: [1, 1.05] }}
                                            transition={{ duration: 0.1 }}
                                            className="app__flex"
                                        >
                                            <AiFillEye />
                                        </motion.div>
                                    </AppLink>
                                    {work.figmaLink && (
                                        <a
                                            href={work.figmaLink || ''}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <motion.div
                                                whileInView={{ scale: [0, 1] }}
                                                whileHover={{
                                                    scale: [1, 1.05]
                                                }}
                                                transition={{ duration: 0.1 }}
                                                className={cls.icon}
                                            >
                                                <img
                                                    src={images.figma}
                                                    alt={work.title}
                                                />
                                            </motion.div>
                                        </a>
                                    )}
                                </motion.div>
                            </div>

                            <div className={cls.workContent}>
                                <h4 className="bold-text">{work.title}</h4>
                                <p className="p-text" style={{ marginTop: 10 }}>
                                    {work.description}
                                </p>

                                <div className={cls.workTag}>
                                    <p className="p-text">{work.tags[0]}</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default AppWrap(WorksSection, 'portfolio');
