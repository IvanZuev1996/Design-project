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
        path: RoutePath.main
    },
    {
        title: 'Мы',
        path: RoutePath.about
    },
    {
        title: 'Портфолио',
        path: RoutePath.portfolio
    },
    {
        title: 'Услуги и цены',
        path: RoutePath.services
    },
    {
        title: 'Контакты',
        path: RoutePath.contacts
    }
];

export const NavigationDots = ({ active }: NavigationDotsProps) => (
    <div className="app__navigation">
        {navbarLinks.map((item, index) => (
            <a
                href={`#${item.path.slice(1)}`}
                key={item.path + index}
                className="app__navigation-dot"
                style={
                    active === item.path.slice(1)
                        ? { backgroundColor: '#313BAC' }
                        : {}
                }
            />
        ))}
    </div>
);

export default NavigationDots;
