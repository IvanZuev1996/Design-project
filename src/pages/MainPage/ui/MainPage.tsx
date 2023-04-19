import { memo } from 'react';
import { Page } from 'widgets/Page/Page';
import Image1 from 'shared/assets/icons/design1.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import cls from './MainPage.module.scss';

const MainPage = memo(() => {
    const f = 1;
    return (
        <Page className={cls.wrapper}>
            <div className={cls.contentCard}>
                <div className={cls.textBlock}>
                    <p className={cls.logoText}>OurDesign</p>
                    <p className={cls.text}>
                        Мы помогаем зарабатывать в интернете
                    </p>
                    <Button theme={ButtonTheme.OUTLINE} className={cls.button}>
                        Обсудить проект
                    </Button>
                    <div className={cls.paginationDots}>
                        <span className={cls.active} />
                        <span />
                        <span />
                    </div>
                </div>
                <div className={cls.imageWrapper}>
                    <p className={cls.numberOfImage}>01.</p>
                    <p className={cls.textOnImage}>Графический дизайн</p>
                    <Image1 className={cls.image} />
                </div>
            </div>
        </Page>
    );
});

export default MainPage;
