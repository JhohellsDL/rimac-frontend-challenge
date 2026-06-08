import { useCallback } from "react";
import IcHomeLight from "../../assets/IcHomeLight";
import type { Plan } from "../../models/Plan";
import { Button } from "../common/Button";

interface PlanCardProps {
    plan: Plan;
    displayPrice: number;
    onSelect: (plan: Plan) => void;
}

export const PlanCard = ({ plan, displayPrice, onSelect }: PlanCardProps) => {

    const handleSelect = useCallback(() => {
        onSelect(plan);
    }, [onSelect, plan]);

    return (
        < div className="bg-white rounded-3xl px-8 pt-[68px] pb-[32px] flex flex-col max-w-[288px] shadow-lg shadow-[#CCD1EE]/[0.5]" >
            <div className='w-full flex-row flex gap-4 justify-between'>
                <div className='flex-1 flex flex-col gap-4'>
                    <div className="text-[#03050F] text-[24px] font-bold font-br-sonoma tracking-tighter">
                        {plan.name}
                    </div>

                    <div className='w-full flex-col flex gap-1'>
                        <div className="text-[#7981B2] text-[12px] font-bold font-br-sonoma uppercase tracking-[0.5px]">
                            Costo del plan
                        </div>
                        <p className="text-[#03050F] text-[24px] font-bold font-br-sonoma">
                            ${displayPrice} <span className="text-[20px] font-semibold font-br-sonoma">al mes</span>
                        </p>
                    </div>
                </div>
                <IcHomeLight width={56} height={56} />
            </div>

            <div className="w-full h-[1px] bg-[#D7DBF5] mb-6 mt-6" />

            <ul className="flex flex-col gap-6 flex-1">
                {plan.description.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                        <span className="shrink-0 text-[#141938] text-[13px] font-bold font-br-sonoma">•</span>
                        <div className="text-[#141938] text-[16px] font-br-sonoma leading-snug" dangerouslySetInnerHTML={{ __html: item }} />
                    </li>
                ))}
            </ul>

            <Button
                type="button"
                id={`btn-select-plan-${plan.name.replace(/\s+/g, '-').toLowerCase()}`}
                onClick={handleSelect}
                variant='secondary'
                className="mt-8"
            >Seleccionar Plan</Button>
        </div >

    )
};   