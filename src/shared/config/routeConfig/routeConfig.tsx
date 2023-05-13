import { AboutPage } from 'pages/AboutPage';
import { ContactPage } from 'pages/ContactPage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { PortfolioPage } from 'pages/PortfolioPage';
import { PricePage } from 'pages/PricePage';
import { ServiceDetailsPage } from 'pages/ServiceDetailsPage';
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
    SERVICE_DETAILS = 'service_details',
    // last page
    NOT_FOUND = 'not_found'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.CONTACTS]: '/contacts',
    [AppRoutes.PORTFOLIO]: '/portfolio',
    [AppRoutes.SERVICES]: '/services',
    [AppRoutes.SERVICE_DETAILS]: '/services/', // + :id
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
        element: <ContactPage />
    },
    [AppRoutes.PORTFOLIO]: {
        path: RoutePath.portfolio,
        element: <PortfolioPage />
    },
    [AppRoutes.SERVICES]: {
        path: RoutePath.services,
        element: <PricePage />
    },
    [AppRoutes.SERVICE_DETAILS]: {
        path: `${RoutePath.service_details}:id`,
        element: <ServiceDetailsPage />
    },
    // last route
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />
    }
};
