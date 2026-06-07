import React from 'react';
import { clsx } from 'clsx';
import { CheckIcon } from '../../assets/svg/CheckIcon';

interface CheckboxProps {
    checked: boolean;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    label: string;
    error?: string;
}

const s = {
    box: (checked: boolean) => clsx(
        'w-5 h-5 rounded-[4px] border flex items-center justify-center shrink-0 transition-colors',
        checked ? 'bg-[#08060D] border-[#08060D] text-white' : 'border-[#5B6375] border-2'
    ),
    label: 'text-[14px] md:text-[14px] text-[#0A051E] font-regular font-br-sonoma tracking-[0.2px]',
    error: 'text-[#EF3340] text-xs mt-1 ml-8 font-medium',
}

export const Checkbox = ({ checked, onChange, label, error }: CheckboxProps) => (
    <div className="flex flex-col">
        <label className="flex items-center gap-3 cursor-pointer">
            <input
                type="checkbox"
                checked={checked}
                onChange={onChange}
                className="sr-only"
            />
            <span className={s.box(checked)} aria-hidden="true">
                {checked && <CheckIcon />}
            </span>
            <span className={s.label}>{label}</span>
        </label>
        {error && <span className={s.error}>{error}</span>}
    </div>
);