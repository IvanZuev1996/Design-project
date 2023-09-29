import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { client, urlFor } from 'client';
import AppWrap from 'widgets/AppWrap/AppWrap';
import MotionWrap from 'widgets/MotionWrap/MotionWrap';
import cls from './AboutSection.module.scss';

interface AboutSectionProps {
    className?: string;
}

interface Service {
    title: string;
    description: string;
    imgUrl: string;
}

const AboutSection = ({ className }: AboutSectionProps) => {
    const [services, setServices] = useState<Service[]>([]);

    useEffect(() => {
        const query = '*[_type == "services"]';

        client.fetch(query).then((data) => setServices(data));
    }, []);

    return (
        <div>
            <h2 className={cls.mainText}>
                Нужен качественный дизайн?
                <span>Обратись к нам!</span>
            </h2>
            <div className={cls.services}>
                {services.map((item, index) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{
                            scale: 1.08,
                            boxShadow: '10px 10px 0 rgba(0, 0, 0, 0.2)'
                        }}
                        whileTap={{ scale: 1.03 }}
                        transition={{ duration: 0.2, type: 'tween' }}
                        className={cls.serviceItem}
                        key={item.title + index}
                        viewport={{ once: true }}
                    >
                        <img
                            src={String(urlFor(item.imgUrl))}
                            alt={item.title}
                        />
                        <h2 className={cls.itemTitle}>{item.title}</h2>
                        <p className={cls.itemDesc}>{item.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default AboutSection;
