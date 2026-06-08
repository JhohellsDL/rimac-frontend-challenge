import type { ComponentType } from 'react';
import clsx from 'clsx';
import { IconCheck } from '../../assets/svg/IconCheck';

interface InsuredOptionCardProps {
  id: string;
  selected: boolean;
  onClick: () => void;
  icon: ComponentType;
  title: string;
  description: string;
}

export const InsuredOptionCard = ({
  id,
  selected,
  onClick,
  icon: Icon,
  title,
  description,
}: InsuredOptionCardProps) => (
  <button
    type="button"
    id={id}
    onClick={onClick}
    className={clsx(
      'relative w-full md:w-[260px] rounded-3xl border-[3px] px-6 pt-4 pb-10',
      'text-left flex flex-col gap-2 transition-all duration-200 bg-white',
      'shadow-lg shadow-[#CCD1EE]/[0.5]',
      selected ? 'border-[#03050F]' : 'border-transparent',
    )}
  >
    <div className={clsx(
      'absolute top-4 right-6 w-6 h-6 rounded-full border-2',
      'flex items-center justify-center transition-all duration-200',
      selected ? 'border-transparent' : 'border-[#CCD1EE]',
    )}>
      {selected && <IconCheck />}
    </div>

    <div className="flex flex-col gap-2">
      <div className="items-center md:items-start flex flex-row md:flex-col gap-2 mt-4">
        <div className="[&>svg]:w-8 [&>svg]:h-8 md:[&>svg]:w-12 md:[&>svg]:h-12">
          <Icon />
        </div>
        <div className="text-[#141938] text-[20px] font-bold font-br-sonoma tracking-tighter">
          {title}
        </div>
      </div>
      <div className="text-[#141938] text-[11px] font-normal font-br-sonoma leading-snug">
        {description}
      </div>
    </div>
  </button>
);
