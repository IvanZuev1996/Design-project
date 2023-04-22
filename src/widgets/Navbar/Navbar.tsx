import { classNames } from 'shared/lib/helpers/classNames';
import Logo from 'shared/assets/icons/Logo.svg';
import { Button } from 'shared/ui/Button/Button';
import { useState } from 'react';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const [toggle, setToggle] = useState(false);

    const navbarLinks = [
        {
            title: 'Портфолио',
            path: RoutePath.portfolio
        },
        {
            title: 'Услуги и цены',
            path: RoutePath.services
        },
        {
            title: 'Мы',
            path: RoutePath.about
        },
        {
            title: 'Контакты',
            path: RoutePath.contacts
        }
    ];

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.left}>
                <AppLink to={RoutePath.main}>
                    <Logo className={cls.logo} />
                </AppLink>
                <ul className={cls.links}>
                    {navbarLinks.map((link) => (
                        <AppLink key={link.path} to={link.path}>
                            {link.title}
                        </AppLink>
                    ))}
                </ul>
            </div>
            <div className={cls.right}>
                <p className={cls.number}>+7 916 303-90-62</p>
                <Button className={cls.btn}>Обсудить проект</Button>
            </div>
            <div className={cls['app__navbar-menu']}>
                <HiMenuAlt4
                    onClick={() => setToggle(true)}
                    className={classNames('', { [cls.disabled]: toggle })}
                />

                {toggle && (
                    <motion.div
                        whileInView={{ x: [200, 0] }}
                        transition={{ duration: 0.55, ease: 'easeOut' }}
                    >
                        <HiX onClick={() => setToggle(false)} />
                        <ul>
                            {navbarLinks.map((link) => (
                                <AppLink key={link.path} to={link.path}>
                                    {link.title}
                                </AppLink>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </div>
        </div>
    );
};
