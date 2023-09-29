import { AppLink } from 'shared/ui/AppLink/AppLink';
import cls from './NotFoundPage.module.scss';

export const NotFoundPage = () => (
    <div className={cls.NotFoundPage}>
        <h1>Страница не найдена</h1>
        <AppLink to="/">На главную</AppLink>
    </div>
);
