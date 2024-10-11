import { ReactElement } from 'react';

type IconProps<T> = {
    size?: number;
    color?: string;
    className?: string;
} & T;

export type IconType<T> = (props: IconProps<T>) => ReactElement | null;

export const withDefaultProps =
    <T,>(Icon: IconType<T>) =>
    ({ size = 24, color = 'currentColor', ...props }: IconProps<T>): JSX.Element => (
        <Icon size={size} color={color} {...(props as IconProps<T>)} />
    );
