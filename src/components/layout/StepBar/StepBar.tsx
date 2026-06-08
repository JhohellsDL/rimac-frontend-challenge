import { StepBarDesktop } from './StepBarDesktop';
import { StepBarMobile } from './StepBarMobile';
import { type StepBarProps } from './stepBar.constants';

export const StepBar = ({ currentStep }: StepBarProps) => {
  return (
    <div className="w-full bg-[#EDEFFC]">
      <StepBarDesktop currentStep={currentStep} />
      <StepBarMobile currentStep={currentStep} />
    </div>
  );
};
