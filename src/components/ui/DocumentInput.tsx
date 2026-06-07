import { clsx } from 'clsx';
import React from 'react';

interface DocumentInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    documentType: string;
    onTypeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    error?: string;
}

const styles = {
    wrapper: 'flex flex-col w-full text-left',
    label: 'text-[#03050F] text-[14px] font-semibold leading-4 tracking-[0.2px] mb-1',
    inputWrapper: 'flex border-1 rounded-lg bg-white transition-colors h-14 items-center',
    inputFocusBorder: 'border-[#5B6375] focus-within:ring-1 focus-within:ring-[#08060D]',
    selectContainer: 'relative h-full w-[180px] flex items-center border-r-1 border-black',
    select: 'appearance-none bg-transparent text-[#08060D] w-full h-full pl-4 pr-6 outline-none font-medium text-base cursor-pointer',
    chevronIcon: 'absolute right-3 pointer-events-none',
    inputContainer: 'flex-1 px-4 h-full flex items-center',
    input: 'w-full bg-transparent text-[#08060D] outline-none text-base h-full',
    errorText: 'text-[#EF3340] text-xs mt-1 font-medium leading-4 tracking-[0.2px] animate-fadeIn',
};

const ChevronIcon = () => (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="#08060D" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M19 9l-7 7-7-7" />
    </svg>
);

export const DocumentInput = ({
    documentType,
    onTypeChange,
    error,
    className,
    id,
    ...props
}: DocumentInputProps) => {
    const inputId = id ?? 'document-input';

    return (
        <div className={clsx(styles.wrapper, className)}>
            <label htmlFor={inputId} className={styles.label}>
                Documento
            </label>
            <div
                className={clsx(
                    styles.inputWrapper,
                    error
                        ? 'border-[#EF3340]'
                        : styles.inputFocusBorder
                )}
            >
                <div className={styles.selectContainer}>
                    <select
                        value={documentType}
                        onChange={onTypeChange}
                        className={styles.select}
                        aria-label="Tipo de documento"
                    >
                        <option value="DNI">DNI</option>
                        <option value="CE">C.E.</option>
                    </select>
                    <div className={styles.chevronIcon}>
                        <ChevronIcon />
                    </div>
                </div>

                <div className={styles.inputContainer}>
                    <input
                        id={inputId}
                        type="text"
                        className={styles.input}
                        aria-invalid={!!error}
                        aria-describedby={error ? `${inputId}-error` : undefined}
                        {...props}
                    />
                </div>
            </div>

            {error && (
                <span id={`${inputId}-error`} className={styles.errorText} role="alert">
                    {error}
                </span>
            )}
        </div>
    );
};