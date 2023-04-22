import { classNames } from 'shared/lib/helpers/classNames';
import cls from './AboutSection.module.scss';

interface AboutSectionProps {
    className?: string;
}

export const AboutSection = ({ className }: AboutSectionProps) => {
    const f = 1;
    return (
        <div className={classNames(cls.AboutSection, {}, [className])}>
            About section
        </div>
    );
};
