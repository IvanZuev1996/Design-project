import { memo } from 'react';
import { classNames } from 'shared/lib/helpers/classNames';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}

export const NotFoundPage = memo(({ className }: NotFoundPageProps) => (
    <div>Страница не найдена</div>
));
