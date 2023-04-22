import { AboutPage } from 'pages/AboutPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { RouteProps } from 'react-router-dom';

export type AppRouteProps = RouteProps & {
    authOnly?: boolean;
};

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PORTFOLIO = 'portfolio',
    SERVICES = 'services',
    CONTACTS = 'contacts',
    // last page
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.CONTACTS]: '/contacts',
    [AppRoutes.PORTFOLIO]: '/portfolio',
    [AppRoutes.SERVICES]: '/services',
    // Последний маршрут отрабатывает в случае если ни один из других маршрутов не отработал
    [AppRoutes.NOT_FOUND]: '*'
};

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />
    },
    [AppRoutes.CONTACTS]: {
        path: RoutePath.contacts,
        element: <AboutPage />
    },
    [AppRoutes.PORTFOLIO]: {
        path: RoutePath.portfolio,
        element: <AboutPage />
    },
    [AppRoutes.SERVICES]: {
        path: RoutePath.services,
        element: <AboutPage />
    },
    // last route
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />
    }
};
