import { classNames } from 'shared/lib/helpers/classNames';
import { ReactNode } from 'react';
import cls from './Page.module.scss';
 
interface PageProps {
    className?: string;
    children: ReactNode;
}
 
export const Page = ({ className, children }: PageProps) => (
    <div className={classNames(cls.Page, {}, [className])}>
        {children}
    </div>
);