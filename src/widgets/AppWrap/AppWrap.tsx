import { SocialMedia } from '../SocialMedia/SocialMedia';
import { NavigationDots } from '../NavigationDots/NavigationDots';
import 'app/styles/index.scss';

export const AppWrap = (
    Component: (props: any) => JSX.Element,
    idName: string,
    classNames?: string
) =>
    function HOC() {
        return (
            <div id={idName} className={`app__container ${classNames}`}>
                <SocialMedia />
                <div className="app__wrapper app__flex">
                    <Component />

                    <div className="copyright">
                        <p className="p-text">@2023 Our Design</p>
                        <p className="p-text">Все права защищены</p>
                    </div>
                </div>
                <NavigationDots active={idName} />
            </div>
        );
    };

export default AppWrap;
