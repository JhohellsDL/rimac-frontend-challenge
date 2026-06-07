import React from 'react';
import { clsx } from 'clsx';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}

const styles = {
    wrapper: 'flex flex-col w-full text-left',
    label: 'text-[#03050F] text-[14px] font-semibold font-br-sonoma leading-4 tracking-[0.2px] mb-1',
    inputWrapper: 'flex border-1 rounded-lg bg-white transition-colors h-14 items-center px-4',
    inputFocusBorder: 'border-[#5B6375] focus-within:ring-1 focus-within:ring-[#08060D]',
    input: 'w-full bg-transparent text-[##5E6488] outline-none text-base',
    error: 'text-[#EF3340] text-xs mt-1 font-medium font-br-sonoma leading-4 tracking-[0.2px] animate-fadeIn',
};

export const Input: React.FC<InputProps> = ({
    label,
    error,
    className,
    id,
    ...props
}) => {
    const inputId = id ?? label.toLowerCase().replace(/\s+/g, '-');

    return (
        <div className={clsx(styles.wrapper, className)}>
            <label htmlFor={inputId} className={styles.label}>
                {label}
            </label>
            <div
                className={clsx(
                    styles.inputWrapper,
                    error
                        ? 'border-[#EF3340]'
                        : styles.inputFocusBorder
                )}
            >
                <input
                    id={inputId}
                    className={styles.input}
                    aria-invalid={!!error}
                    aria-describedby={error ? `${inputId}-error` : undefined}
                    {...props}
                />
            </div>
            {error && (
                <span id={`${inputId}-error`} className={styles.error} role="alert">
                    {error}
                </span>
            )}
        </div>
    );
};