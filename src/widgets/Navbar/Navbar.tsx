import { classNames } from 'shared/lib/helpers/classNames';
import Logo from 'shared/assets/icons/Logo.svg'
import MenuIcon from 'shared/assets/icons/Menu.svg'
import { Button } from 'shared/ui/Button/Button';
import { useState } from 'react';
import cls from './Navbar.module.scss';
import { Menu } from './Menu';
 
interface NavbarProps {
    className?: string;
    state: boolean;
    changeState: () => void;
}

export const Navbar = ({ className, changeState, state }: NavbarProps) => {
    const k = 1;
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={cls.left}>
                <Logo className={cls.logo}/>
                <div className={cls.links}>
                    <p>Портфолио</p>
                    <p>Услуги и цены</p>
                    <p>Мы</p>
                    <p>Контакты</p>
                </div>
            </div>
            <div className={cls.right}>
                <p className={cls.number}>+7 916 303-90-62</p>
                <Button className={cls.btn}>
                    Обсудить проект
                </Button>
                <Menu state={state} changeState={changeState}/>
            </div>
        </div>
    )
};