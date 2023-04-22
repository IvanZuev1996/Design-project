import { classNames } from 'shared/lib/helpers/classNames';
import cls from './Footer.module.scss';

interface FooterProps {
    className?: string;
}

export const Footer = ({ className }: FooterProps) => {
    const f = 1;
    return <div className={classNames(cls.Footer, {}, [className])} />;
};
