import { client, urlFor } from 'client';
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { images } from 'shared/const';
import { classNames } from 'shared/lib/helpers/classNames';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import { Work } from 'shared/types';
import { Page } from 'widgets/Page/Page';
import cls from './ServiceDetailsPage.module.scss';

interface ServiceDetailsProps {
    className?: string;
}

const ServiceDetails = ({ className }: ServiceDetailsProps) => {
    const [card, setCard] = useState<Work | undefined>(undefined);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        const query = `*[_id == "${id}"]`;
        setIsLoading(true);

        client.fetch<Work[]>(query).then((data) => {
            setCard(data[0]);
            setIsLoading(false);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const validate = (title: string | undefined) => {
        if (title && !isLoading) {
            return title;
        }
        if (!title && !isLoading) {
            return 'К сожалению, такого проекта не существует';
        }

        return '';
    };

    return (
        <LazyMotion features={domAnimation}>
            <Page className={cls.detailsWrapper}>
                <m.div
                    whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className={cls.textBlock}
                >
                    <h2>{validate(card?.title)}</h2>
                    <p>{card?.description || ''}</p>
                </m.div>
                <m.div
                    animate={{ opacity: [0, 1] }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <Page className={classNames('', {}, [className])}>
                        {card?.imgUrl && (
                            <img
                                src={String(urlFor(card?.imgUrl))}
                                alt={card?.title}
                                className={cls.image}
                            />
                        )}
                    </Page>
                </m.div>

                {card?.figmaLink && (
                    <m.div
                        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className={cls.linksBlock}
                    >
                        <h2>
                            Смотрите наш проект в
                            <Link to={card.figmaLink} target="_blank">
                                Figma!
                            </Link>
                        </h2>
                        <img
                            src={images.figma}
                            alt="figma"
                            className={cls.icon}
                        />
                    </m.div>
                )}
                <div className={cls.tags}>
                    {card?.tags.map((item, index) => (
                        <m.div
                            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className={cls.tag}
                            viewport={{ once: true }}
                            key={index}
                        >
                            {item}
                        </m.div>
                    ))}
                </div>
            </Page>
        </LazyMotion>
    );
};

export default ServiceDetails;
