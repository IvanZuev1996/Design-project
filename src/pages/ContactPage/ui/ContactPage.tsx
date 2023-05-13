import { Page } from 'widgets/Page/Page';
import Footer from 'widgets/Footer/Footer';
import cls from './ContactPage.module.scss';

const ContactPage = () => {
    const f = 1;
    return (
        <Page className={cls.Wrapper}>
            <Footer />
        </Page>
    );
};

export default ContactPage;
