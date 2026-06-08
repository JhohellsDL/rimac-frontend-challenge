import clsx from 'clsx';
import { STEPS, type StepBarProps } from './stepBar.constants';

export const StepBarDesktop = ({ currentStep }: StepBarProps) => {
  return (
    <div className="hidden md:flex items-center justify-center gap-4 py-4">
      {STEPS.map((step, i) => {
        const isActive = currentStep === step.number;
        const isPast = currentStep > step.number;

        return (
          <span key={`${step.number}`} className="contents">
            {i > 0 && (
              <span className="flex gap-[6px]">
                {Array.from({ length: 4 }).map((_, j) => (
                  <span key={`${step.number}-${j}`} className="w-[4px] h-[2px] rounded-full bg-[#4F4FFF]" />
                ))}
              </span>
            )}

            <span
              className={clsx(
                'w-[24px] h-[24px] rounded-full text-[12px] font-bold font-br-sonoma flex items-center justify-center shrink-0',
                isActive || isPast
                  ? 'bg-[#4F46E5] text-white'
                  : 'border-2 border-[#7981B2] text-[#7981B2]',
              )}
            >
              {step.number}
            </span>

            <span
              className={clsx(
                'text-[16px] font-br-sonoma',
                isActive || isPast
                  ? 'text-[#141938] font-bold'
                  : 'text-[#7981B2] font-semibold',
              )}
            >
              {step.label}
            </span>
          </span>
        );
      })}
    </div>
  );
};
