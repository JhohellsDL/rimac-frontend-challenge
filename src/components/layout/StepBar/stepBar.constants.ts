export interface StepBarProps {
  currentStep: 1 | 2;
}

export interface Step {
  number: 1 | 2;
  label: string;
}

export const STEPS: Step[] = [
  { number: 1, label: 'Planes y coberturas' },
  { number: 2, label: 'Resumen' },
];

export const TOTAL_STEPS = STEPS.length;
