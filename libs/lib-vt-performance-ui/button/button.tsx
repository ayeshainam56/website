import {classNames} from '../../lib-vt-performance-utils';
import {MouseEventHandler, ReactNode} from 'react';

export type ButtonProps = {
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    expanded?: boolean;
    extraClasses?: string;
    children?: ReactNode | ReactNode[];
    variant?:
        | 'default'
        | 'primary'
        | 'outlined'
    onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
};

export function Button({
                           variant = 'default',
                           extraClasses = '',
                           disabled = false,
                           children,
                           onClick,
                           type,
                       }: ButtonProps) {

    function resolveClasses() {
        switch (variant) {
            case 'primary':
                return 'text-white stroke-white bg-gradient-to-r from-blue-900 to-blue-500 border-blue-300 hover:bg-gradient-to-l';
            case 'outlined':
                return 'text-blue-600 bg-transparent border-blue-900 hover:border-blue-600 hover:text-white hover:bg-blue-600';
            default:
                return 'text-white stroke-white bg-primary-normal border-primary-normal hover:bg-primary-hover hover:border-primary-hover active:bg-primary-normal active:border-primary-normal';
        }
    }

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={classNames(
                `px-3.5 p-3 flex items-center justify-center border rounded-[10px] ease-in-out duration-300 font-semibold text-base disabled:bg-grey-50 disabled:text-grey-400 cursor-pointer disabled:cursor-not-allowed disabled:stroke-grey-400 disabled:border-grey-400`,
                resolveClasses(),
                extraClasses
            )}
        >
            {children}
        </button>
    );
}
