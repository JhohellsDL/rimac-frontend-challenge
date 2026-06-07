import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
    isLoading?: boolean;
}

const SvgSpinner = () => (
    <svg aria-hidden="true" className="animate-spin h-5 w-5 text-current" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
);

const styles = {
    baseStyle: 'w-full py-4 px-6 rounded-full font-bold text-center transition-all duration-200 tracking-wide text-sm md:text-base flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed',
    variants: {
        primary: 'bg-gray-900 text-white hover:bg-gray-800 active:scale-[0.99]',
        secondary: 'bg-[#EF3340] text-white hover:bg-[#D12833] active:scale-[0.99]',
    },
} as const;

export const Button = ({
    children,
    variant = 'primary',
    isLoading = false,
    className,
    disabled,
    ...props
}: ButtonProps) => {
    return (
        <button
            className={clsx(styles.baseStyle, styles.variants[variant], className)}
            disabled={disabled || isLoading}
            aria-busy={isLoading}
            {...props}
        >
            {isLoading ? (
                <>
                    <SvgSpinner />
                    <span className="sr-only">Cargando...</span>
                </>
            ) : (
                children
            )}
        </button>
    );
};