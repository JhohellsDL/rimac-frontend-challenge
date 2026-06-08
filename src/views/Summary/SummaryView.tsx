import { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { AppHeader } from '../../components/layout/AppHeader';
import { useAuth } from '../../context/AuthContext';
import { useFlow } from '../../context/FlowContext';
import { ButtonBack } from '../../components/ui/ButtonBack';
import { SummaryCard } from '../../components/ui/SummaryCard';

export const SummaryView = () => {
  const navigate = useNavigate();
  const { user, userAuthData } = useAuth();
  const { selectedPlan } = useFlow();

  const fullName = useMemo(
    () => (user ? `${user.name} ${user.lastName}` : '—'),
    [user]
  );

  const handleBack = useCallback(() => {
    navigate('/planes');
  }, [navigate]);

  return (
    <div className="min-h-screen w-full bg-[#FAFBFF] flex flex-col font-sans">
      <AppHeader />

      <main className="flex-1 w-full max-w-[1200px] mx-auto px-5 md:px-12 py-6 md:py-10">
        <ButtonBack onClick={handleBack} />

        <div className="max-w-[928px] mx-auto w-full">
          <div className={clsx(
            'text-[#03050F] font-bold font-br-sonoma leading-tight',
            'text-center md:text-left',
            'text-[32px] md:text-[40px]',
            'mb-8 mt-[32px]',
          )}>
            Resumen del seguro
          </div>

          <SummaryCard
            fullName={fullName}
            dni={userAuthData?.dni}
            phone={userAuthData?.phone}
            selectedPlan={selectedPlan}
          />
        </div>
      </main>
    </div>
  );
};
