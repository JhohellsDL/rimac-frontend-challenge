import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppHeader } from '../../components/layout/AppHeader';
import { useFetchPlans } from '../../hooks/useFetchPlans';
import { useAuth } from '../../context/AuthContext';
import { useFlow } from '../../context/FlowContext';
import { calculateAge } from '../../utils/calculateAge';
import type { Plan } from '../../models/Plan';
import { ButtonBack } from '../../components/ui/ButtonBack';
import { StepBar } from '../../components/layout/StepBar';
import IcAddUserLight from '../../assets/svg/IcAddUserLight';
import { IcProtectionLight } from '../../assets/svg/IcProtectionLight';
import { InsuredOptionCard } from '../../components/ui/InsuredOptionCard';
import { PlansResults } from './PlansResults';
import {
  DISCOUNT_SOMEONE_ELSE,
  InsuredType,
} from './plansView.constants';

export const PlansView = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { insuredType, setInsuredType, setSelectedPlan } = useFlow();

  const userAge = user?.birthDay ? calculateAge(user.birthDay) : undefined;
  const { plans, loading, error } = useFetchPlans(userAge);

  const firstName = user?.name?.split(' ')[0] ?? 'Usuario';

  const displayPrices = plans.map((plan) =>
    insuredType === InsuredType.FOR_SOMEONE_ELSE
      ? Math.round(plan.price * (1 - DISCOUNT_SOMEONE_ELSE))
      : plan.price
  );

  const handleSelectPlan = useCallback((plan: Plan) => {
    const idx = plans.indexOf(plan);
    setSelectedPlan({ ...plan, price: displayPrices[idx] });
    navigate('/resumen');
  }, [navigate, plans, setSelectedPlan, displayPrices]);

  const handleBack = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const handleSelectForMe = useCallback(() => setInsuredType(InsuredType.FOR_ME), [setInsuredType]);
  const handleSelectForSomeoneElse = useCallback(() => setInsuredType(InsuredType.FOR_SOMEONE_ELSE), [setInsuredType]);

  return (
    <div className="min-h-screen w-full bg-[#FAFBFF] flex flex-col font-sans">
      <AppHeader />
      <StepBar currentStep={1} />

      <main className="flex-1 w-full max-w-[1200px] mx-auto px-5 md:px-12 py-6 md:py-10">
        <ButtonBack onClick={handleBack} />

        <div className="md:text-center mb-8 mt-2 max-w-[544px] md:mx-auto flex flex-col gap-2">
          <div className="text-[#141938] text-[28px] md:text-[40px] font-bold font-br-sonoma tracking-[0.2px] leading-tight">
            {firstName} ¿Para quién deseas cotizar?
          </div>
          <div className="text-[#141938] text-[16px] font-br-sonoma">
            Selecciona la opción que se ajuste más a tus necesidades.
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center mb-10">
          <InsuredOptionCard
            id="btn-para-mi"
            selected={insuredType === InsuredType.FOR_ME}
            onClick={handleSelectForMe}
            icon={IcProtectionLight}
            title="Para mí"
            description="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
          />
          <InsuredOptionCard
            id="btn-para-alguien-mas"
            selected={insuredType === InsuredType.FOR_SOMEONE_ELSE}
            onClick={handleSelectForSomeoneElse}
            icon={IcAddUserLight}
            title="Para alguien más"
            description="Realiza una cotización para uno de tus familiares o cualquier persona."
          />
        </div>

        {insuredType !== null && (
          <PlansResults
            loading={loading}
            error={error}
            plans={plans}
            displayPrices={displayPrices}
            onSelect={handleSelectPlan}
          />
        )}
      </main>
    </div>
  );
};
