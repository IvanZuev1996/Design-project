import { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { client, urlFor } from 'client';
import AppWrap from 'widgets/AppWrap/AppWrap';
import MotionWrap from 'widgets/MotionWrap/MotionWrap';
import { Brand, Testimonial } from 'shared/types';
import cls from './TestimonialsSection.module.scss';

const TestimonialsSection = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [brands, setBrands] = useState<Brand[]>([]);

    const handleClick = (index: number) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const query = '*[_type == "testimonials"]';
        const brandsQuery = '*[_type == "brands"]';

        client.fetch(query).then((data) => {
            setTestimonials(data);
        });

        client.fetch(brandsQuery).then((data) => {
            setBrands(data);
        });
    }, []);

    return (
        <div className={cls.wrapper}>
            <h1 className={cls.headText}>Отзывы о нас!</h1>

            {testimonials.length && (
                <>
                    <div className={cls.testimonialItem}>
                        {testimonials[currentIndex].imgurl && (
                            <img
                                src={String(
                                    urlFor(testimonials[currentIndex].imgurl)
                                )}
                                alt={testimonials[currentIndex].name}
                            />
                        )}
                        <div className={cls.testimonialContent}>
                            <p className="p-text">
                                {testimonials[currentIndex].feedback}
                            </p>
                            <div>
                                <h4 className="bold-text">
                                    {testimonials[currentIndex].name}
                                </h4>
                                <h5 className="p-text">
                                    {testimonials[currentIndex].company}
                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className={cls.testimonialBtns}>
                        <div
                            className="app__flex"
                            onClick={() =>
                                handleClick(
                                    currentIndex === 0
                                        ? testimonials.length - 1
                                        : currentIndex - 1
                                )
                            }
                        >
                            <HiChevronLeft />
                        </div>

                        <div
                            className="app__flex"
                            onClick={() =>
                                handleClick(
                                    currentIndex === testimonials.length - 1
                                        ? 0
                                        : currentIndex + 1
                                )
                            }
                        >
                            <HiChevronRight />
                        </div>
                    </div>
                </>
            )}

            <div className={cls.testimonialsBrands}>
                {brands.map((brand) => (
                    <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        key={brand._id}
                    >
                        <img
                            src={String(urlFor(brand.imgUrl)) || ''}
                            alt={brand.name}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default AppWrap(
    MotionWrap(TestimonialsSection, 'app__testimonial'),
    'testimonials',
    'app__whitebg'
);
