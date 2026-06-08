import type { Plan } from '../../models/Plan';
import { IconUsers } from '../../assets/IconUsers';

interface SummaryCardProps {
  fullName: string;
  dni: string | undefined;
  phone: string | undefined;
  selectedPlan: Plan | null;
}

export const SummaryCard = ({ fullName, dni, phone, selectedPlan }: SummaryCardProps) => (
  <div className="bg-white rounded-2xl p-6 md:p-8 flex flex-col gap-6 shadow-lg shadow-[#CCD1EE]">
    <div className="flex flex-col gap-2">
      <p className="text-[#141938] text-[10px] font-bold font-br-sonoma uppercase tracking-widest">
        Precios calculados para:
      </p>
      <div className="flex items-center gap-2 text-[#141938] text-[20px] font-bold font-br-sonoma">
        <IconUsers />
        {fullName}
      </div>
    </div>

    <hr className="border-[#CCD1EE]" />

    <div className="flex flex-col gap-1.5">
      <p className="text-[#141938] text-[16px] font-bold font-br-sonoma">Responsable de pago</p>
      <p className="text-[#141938] text-[14px] font-br-sonoma">
        DNI: {dni ?? '—'}
      </p>
      <p className="text-[#03050F] text-[14px] font-br-sonoma">
        Celular: {phone ?? '—'}
      </p>
    </div>

    {selectedPlan && (
      <div className="flex flex-col gap-1.5">
        <p className="text-[#141938] text-[16px] font-bold font-br-sonoma">Plan elegido</p>
        <p className="text-[#141938] text-[14px] font-br-sonoma">
          {selectedPlan.name}
        </p>
        <p className="text-[#141938] text-[14px] font-br-sonoma">
          Costo del Plan: ${selectedPlan.price} al mes
        </p>
      </div>
    )}
  </div>
);
