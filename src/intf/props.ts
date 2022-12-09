import { IBook } from "@intf";

/**
 * ExtraInfo组件参数类型
 *
 * @interface IExtraInfoProps
 */
interface IExtraInfoProps {
    record: IBook;
}

/**
 * ExtSelect组件参数类型
 *
 * @interface IExtSelectProps
 */
interface IExtSelectProps {
    closeTip: () => void;
}

/**
 * Logo组件参数类型
 *
 * @interface ILogoProps
 */
interface ILogoProps {
    width: string;
    color: string | undefined;
    className?: string;
}

/**
 * ProjTitle组件参数类型
 *
 * @interface IProjTitleProps
 */
interface IProjTitleProps {
    className: string;
}

/**
 * Topbar组件参数类型
 *
 * @interface ITopbarProps
 */
interface ITopbarProps {
    page: string;
}

/**
 * zLibsvg组件参数类型
 *
 * @interface IZLibProps
 */
interface IZLibProps {
    width: string;
    color: string | undefined;
}

export type {
    IExtraInfoProps,
    IExtSelectProps,
    ILogoProps,
    IProjTitleProps,
    ITopbarProps,
    IZLibProps,
};
