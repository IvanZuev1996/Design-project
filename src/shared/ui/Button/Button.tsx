import { ButtonHTMLAttributes, memo, ReactNode } from 'react';
import { classNames, Mods } from 'shared/lib/helpers/classNames';
import cls from './Button.module.scss';

export type JustifyType = 'center' | 'start' | 'end';

const justifyClasses: Record<JustifyType, string> = {
    center: cls.justifyCenter,
    start: cls.justifyStart,
    end: cls.justifyEnd
};

export enum ButtonTheme {
    OUTLINE = 'outline',
    BACKGROUND_BLUE = 'backgroundBlue',
    BACKGROUND_RED = 'backgroundRed'
}

export enum ButtonSize {
    XS = 'size_xs',
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
    disabled?: boolean;
    max?: boolean;
    justify?: JustifyType;
    children?: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
    const {
        className,
        theme = ButtonTheme.BACKGROUND_BLUE,
        children,
        square,
        justify = 'center',
        disabled,
        max,
        ...otherProps
    } = props;

    const mods: Mods = {
        [cls.square]: square,
        [cls.disabled]: disabled,
        [cls.max]: max
    };

    const classes = [
        className,
        cls[theme],
        justifyClasses[justify]
    ];

    return (
        <button
            type="button"
            className={classNames(cls.Button, mods, classes)}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
