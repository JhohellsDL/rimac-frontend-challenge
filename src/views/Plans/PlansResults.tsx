import { MobileCarousel } from "../../components/ui/MobileCarousel";
import { PlanCard } from "../../components/ui/PlanCard";
import { PlanCardSkeleton } from "../../components/ui/PlanCardSkeleton";
import type { Plan } from "../../models/Plan";

interface PlansResultsProps {
    loading: boolean;
    error: string | null;
    plans: Plan[];
    displayPrices: number[];
    onSelect: (plan: Plan) => void;
}

export const PlansResults = ({ loading, error, plans, displayPrices, onSelect }: PlansResultsProps) => {
    if (loading) {
        return (
            <>
                <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => <PlanCardSkeleton key={i} />)}
                </div>
                <div className="flex flex-col gap-4 md:hidden">
                    <PlanCardSkeleton />
                </div>
            </>
        );
    }

    return (
        <>
            {error && (
                <div className="bg-red-50 text-[#EF3340] p-4 rounded-xl text-sm font-semibold border border-red-200 mb-6">
                    {error}
                </div>
            )}
            <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-2">
                {plans.map((plan, i) => (
                    <PlanCard
                        key={plan.name}
                        plan={plan}
                        displayPrice={displayPrices[i]}
                        onSelect={onSelect}
                    />
                ))}
            </div>
            {plans.length > 0 && (
                <MobileCarousel
                    plans={plans}
                    displayPrices={displayPrices}
                    onSelect={onSelect}
                />
            )}
        </>
    );
};
