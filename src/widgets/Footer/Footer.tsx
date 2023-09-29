import React, { useState } from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { client } from 'client';
import { images } from 'shared/const';
import { Link } from 'react-router-dom';
import { Modal } from 'shared/ui/Modal/Modal';
import cls from './Footer.module.scss';

interface FormDataType {
    name: string;
    email: string;
    message: string;
    username: string;
}

const Footer = () => {
    const [formData, setFormData] = useState<FormDataType>({
        name: '',
        email: '',
        message: '',
        username: ''
    });
    const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const { username, email, message } = formData;

    const onClose = () => {
        setIsFormSubmitted(false);
        setFormData({
            name: '',
            email: '',
            message: '',
            username: ''
        });
    };

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleChangeTextArea = (
        e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        setLoading(true);

        const contact = {
            _type: 'contact',
            name: formData.username,
            email: formData.email,
            message: formData.message
        };

        client
            .create(contact)
            .then(() => {
                setLoading(false);
                setIsFormSubmitted(true);
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className={cls.wrapper}>
            <Modal
                isOpen={isFormSubmitted}
                onClose={onClose}
                className={cls.modal}
            >
                <AiOutlineCloseCircle
                    onClick={onClose}
                    className={cls.svgIcon}
                />
                <p>Спасибо за вашу заявку! Скоро мы свяжемся с вами</p>
            </Modal>
            <h2 className="head-text">Свяжитесь с нами для заказа!</h2>

            <div className={cls.footerCards}>
                <div className={cls.footerCard}>
                    <img src={images.email} alt="email" />
                    <Link to="mailto:ivan-zuev-97@mail.ru" className="p-text">
                        ivan-zuev-97@mail.ru
                    </Link>
                </div>
                <div className={cls.footerCard}>
                    <img src={images.mobile} alt="phone" />
                    <Link to="tel:+7 (916) 303-9062" className="p-text">
                        +7 (916) 303-9062
                    </Link>
                </div>
            </div>
            {!isFormSubmitted ? (
                <div className={cls.footerForm}>
                    <div className="app__flex">
                        <input
                            className="p-text"
                            type="text"
                            placeholder="Your Name"
                            name="username"
                            value={username}
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div className="app__flex">
                        <input
                            className="p-text"
                            type="email"
                            placeholder="Your Email"
                            name="email"
                            value={email}
                            onChange={handleChangeInput}
                        />
                    </div>
                    <div>
                        <textarea
                            className="p-text"
                            placeholder="Your Message"
                            value={message}
                            name="message"
                            onChange={handleChangeTextArea}
                        />
                    </div>
                    <button
                        type="button"
                        className="p-text"
                        onClick={handleSubmit}
                    >
                        {!loading ? 'Отправить форму' : 'Отправляем...'}
                    </button>
                </div>
            ) : (
                <div>
                    <h4 className="head-text">Спасибо за заказ!</h4>
                </div>
            )}
        </div>
    );
};

export default Footer;
