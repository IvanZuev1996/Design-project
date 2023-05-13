import { lazy } from 'react';

export const PricePageAsync = lazy(
    () =>
        new Promise((resolve) => {
            // @ts-ignore
            // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
            setTimeout(() => resolve(import('./PricePage')), 1500);
        })
);
