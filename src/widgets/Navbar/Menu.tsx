import MenuIcon from 'shared/assets/icons/Menu.svg';
import { classNames } from 'shared/lib/helpers/classNames';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
    state: boolean;
    changeState: () => void;
}

export const Menu = ({ className, changeState, state }: NavbarProps) => (
    <div className={cls.menu}>
        <MenuIcon
            onClick={() => changeState()}
            className={classNames(cls.icon, { [cls.activeIcon]: state }, [
                className
            ])}
        />
        {state && (
            <div className={cls.menuContent}>
                <p>Портфолио</p>
                <p>Услуги и цены</p>
                <p>Мы</p>
                <p>Контакты</p>
            </div>
        )}
    </div>
);
