import React, { createContext, useState, useCallback, useMemo } from 'react';
import type { ReactNode } from 'react';
import type { Plan } from '../models/Plan';
import { createUseContext } from './createUseContext';

export interface FlowState {
  insuredType: 'para-mi' | 'para-alguien-mas' | null;
  insuredBirthDate: string | null; 
  selectedPlan: Plan | null;
}

interface FlowContextType extends FlowState {
  setInsuredType: (type: FlowState['insuredType']) => void;
  setInsuredBirthDate: (date: string | null) => void;
  setSelectedPlan: (plan: Plan | null) => void;
  reset: () => void;
}

const FlowContext = createContext<FlowContextType | undefined>(undefined);

export const FlowProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [insuredType, setInsuredType] = useState<FlowState['insuredType']>(null);
  const [insuredBirthDate, setInsuredBirthDate] = useState<string | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  const reset = useCallback(() => {
    setInsuredType(null);
    setInsuredBirthDate(null);
    setSelectedPlan(null);
  }, []);

  const value = useMemo(() => ({
    insuredType,
    insuredBirthDate,
    selectedPlan,
    setInsuredType,
    setInsuredBirthDate,
    setSelectedPlan,
    reset,
  }), [
    insuredType,
    insuredBirthDate,
    selectedPlan,
    reset,
  ]);

  return <FlowContext.Provider value={value}>{children}</FlowContext.Provider>;
};

export const useFlow = createUseContext(FlowContext, 'Flow');