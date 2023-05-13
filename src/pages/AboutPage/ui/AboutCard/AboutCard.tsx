import { memo } from 'react';
import cls from './AboutCard.module.scss';

export interface Card {
    number: string;
    title: string;
    description: string;
}

const AboutCard = memo(({ description, number, title }: Card) => {
    const a = 1;
    return (
        <div className={cls.card}>
            <div>{number}</div>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
});

export default AboutCard;
