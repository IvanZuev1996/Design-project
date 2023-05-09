import { classNames } from 'shared/lib/helpers/classNames';
import { motion, MotionProps } from 'framer-motion';
import { images } from 'shared/const';
import 'app/styles/index.scss';
import AppWrap from 'widgets/AppWrap/AppWrap';
import cls from './HeaderSection.module.scss';

interface HeaderSectionProps {
    className?: string;
}

const scaleVariants: MotionProps = {
    whileInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 0.6,
            ease: 'easeInOut'
        }
    }
};

const HeaderSection = ({ className }: HeaderSectionProps) => {
    const technologys: string[] = [
        images.figma,
        images.photoshop,
        images.illustator
    ];
    return (
        <section className={classNames(cls.HeaderSection, {}, [className])}>
            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className={cls.info}
            >
                <div className={cls.badge}>
                    <div className={cls.badgeCMP}>
                        <span>👋</span>
                        <div>
                            <p className={cls.pText}>
                                Добро пожаловать в организацию
                            </p>
                            <h1 className={cls.headText}>Our Design</h1>
                        </div>
                    </div>

                    <div className={cls.tagCMP}>
                        <p className="p-text">Оформление ваших проектов</p>
                        <p className="p-text">
                            Создание web-дизайна для ваших приложений
                        </p>
                    </div>
                </div>
            </motion.div>

            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.8, delayChildren: 0.5 }}
                className={cls.mainImage}
            >
                <img src={images.mainPhoto} alt="desig" className="" />
                <motion.img
                    whileInView={{ scale: [0, 0.5] }}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    src={images.circle}
                    alt="profile_circle"
                    className={cls.overlayCircle}
                />
            </motion.div>

            <motion.div
                whileInView={scaleVariants.whileInView}
                className={cls.infoCircles}
            >
                {technologys.map((item, index) => (
                    <div className={cls.infoCircleCMP} key={index}>
                        <img src={item} alt="circleInfo" />
                    </div>
                ))}
            </motion.div>
        </section>
    );
};

export default AppWrap(HeaderSection, '');
