import { lazy } from 'react';

export const PortfolioPageAsync = lazy(
    () =>
        new Promise((resolve) => {
            // @ts-ignore
            // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
            setTimeout(() => resolve(import('./PortfolioPage')), 1500);
        })
);
