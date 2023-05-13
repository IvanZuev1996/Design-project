import { memo, useEffect, useState } from 'react';
import { Page } from 'widgets/Page/Page';
import { urlFor, client } from 'client';
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import { AiFillEye } from 'react-icons/ai';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { images } from 'shared/const';
import { Experience, Skill, Work } from 'shared/types';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import AppWrap from 'widgets/AppWrap/AppWrap';
import MotionWrap from 'widgets/MotionWrap/MotionWrap';
import cls from './SkillSections.module.scss';

const SkillsSection = () => {
    const [experiences, setExperiences] = useState<Experience[]>([]);
    const [skills, setSkills] = useState<Skill[]>([]);

    useEffect(() => {
        const query: string = '*[_type == "experiences"]';
        const skillsQuery: string = '*[_type == "skills"]';

        client.fetch(query).then((data) => {
            setExperiences(data);
        });

        client.fetch(skillsQuery).then((data) => {
            setSkills(data);
        });
    }, []);

    return (
        <Page className={cls.pageWrapper}>
            <h2 className={cls.headText}>ПО и наши последние проекты!</h2>

            <div className={cls.skillsContainer}>
                <motion.div className={cls.skillsList}>
                    {skills.map((skill) => (
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className={cls.skillsItem}
                            key={skill._id + skill.name}
                        >
                            <div
                                className={cls.imageWrapper}
                                style={{
                                    backgroundColor: skill.bgColor || ''
                                }}
                            >
                                <img
                                    src={String(urlFor(skill.icon))}
                                    alt={skill.name}
                                />
                            </div>
                            <p className="p-text">{skill.name}</p>
                        </motion.div>
                    ))}
                </motion.div>
                <div className={cls.skillsExp}>
                    {experiences.map((experience) => (
                        <motion.div
                            className={cls.skillsExpItem}
                            key={experience._id + experience.year}
                        >
                            <div className={cls.skillsExpYear}>
                                <p className="bold-text">{experience.year}</p>
                            </div>
                            <motion.div className={cls.skillsExpWorks}>
                                {experience.works.map((work) => (
                                    <div key={work._id + work.name}>
                                        <motion.div
                                            whileInView={{ opacity: [0, 1] }}
                                            transition={{ duration: 0.5 }}
                                            className={cls.skillsExpWork}
                                            data-tip
                                            data-for={work.name}
                                        >
                                            <h4 className="bold-text">
                                                {work.name}
                                            </h4>
                                            <p className="p-text">
                                                {work.company}
                                            </p>
                                        </motion.div>
                                        <Tooltip
                                            id={work.name}
                                            className={cls.skillsTooltip}
                                        >
                                            {work.desc}
                                        </Tooltip>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Page>
    );
};

export default AppWrap(
    MotionWrap(SkillsSection, 'app__skills'),
    'services',
    'app__whitebg'
);
