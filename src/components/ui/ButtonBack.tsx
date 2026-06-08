import clsx from 'clsx';
import { IconBackButton } from '../../assets/svg/IconBackButton';

interface IButtonBack {
    className?: string;
    onClick: () => void;
}

export const ButtonBack = ({ className, onClick }: IButtonBack) => (
    <button
        type="button"
        onClick={onClick}
        className={clsx('hidden md:flex items-center gap-2 group', className)}
    >
        <span className={clsx("w-6 h-6 rounded-full border-3 border-[#4F4FFF] flex items-center justify-center shrink-0")}>
            <IconBackButton width={12} height={12} strokeWidth={3} />
        </span>
        <span className="text-[#4F4FFF] text-[18px] font-semibold font-br-sonoma group-hover:underline">
            Volver
        </span>
    </button>
);
