import { TOTAL_STEPS, type StepBarProps } from './stepBar.constants';

export const StepBarMobile = ({ currentStep }: StepBarProps) => {
  const progressWidth = `${(currentStep / TOTAL_STEPS) * 100}%`;

  return (
    <div className="flex md:hidden items-center px-6 gap-4 py-4 border-b border-[#D7DBF5] bg-[#FAFBFF]">
      <button
        type="button"
        aria-label="Volver"
        className="w-6 h-6 rounded-full border-2 border-[#4F4FFF] flex items-center justify-center shrink-0"
      >
        
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#4F4FFF"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <div className="flex flex-row items-center gap-4 flex-1">
        <span className="text-[10px] font-bold text-[#03050F] font-br-sonoma tracking-[0.2px] uppercase shrink-0">
          PASO {currentStep} DE {TOTAL_STEPS}
        </span>
        <div className="flex-1 bg-[#D7DBF5] rounded-full h-[6px]">
          <div
            className="bg-[#4F4FFF] h-[6px] rounded-full transition-all duration-300"
            style={{ width: progressWidth }}
          />
        </div>
      </div>
    </div>
  );
};
