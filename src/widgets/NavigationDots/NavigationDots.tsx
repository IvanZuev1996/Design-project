/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */

import 'app/styles/index.scss';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface NavigationDotsProps {
    active: string;
}

const navbarLinks = [
    {
        title: 'Home',
        path: ''
    },
    {
        title: 'Мы',
        path: 'about'
    },
    {
        title: 'Портфолио',
        path: 'portfolio'
    },
    {
        title: 'Услуги и цены',
        path: 'services'
    },
    {
        title: 'Отзывы',
        path: 'testimonials'
    },
    {
        title: 'Контакты',
        path: 'contact'
    }
];

export const NavigationDots = ({ active }: NavigationDotsProps) => (
    <div className="app__navigation">
        {navbarLinks.map((item, index) => (
            <a
                href={`#${item.path}`}
                key={item.path + index}
                className="app__navigation-dot"
                style={
                    active === item.path ? { backgroundColor: '#313BAC' } : {}
                }
            />
        ))}
    </div>
);

export default NavigationDots;
