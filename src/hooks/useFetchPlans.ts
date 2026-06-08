
import { useState, useEffect } from 'react';
import type { Plan } from '../models/Plan';
import { plansService } from '../api/plansService';

export const useFetchPlans = (userAge?: number) => {
    const [plans, setPlans] = useState<Plan[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();

        const fetchPlans = async () => {
            try {
                setLoading(true);
                const data = await plansService.getPlans(controller.signal);

                let filteredPlans = data.list;
                if (userAge !== undefined) {
                    filteredPlans = data.list.filter((plan) => userAge <= plan.age);
                }

                setPlans(filteredPlans);
                setError(null);
            } catch (err) {
                if (err instanceof DOMException && err.name === 'AbortError') {
                    return;
                }
                setError('No se pudieron cargar los planes de cobertura. Inténtalo de nuevo.');
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false);
                }
            }
        };

        fetchPlans();

        return () => {
            controller.abort();
        };
    }, [userAge]);

    return { plans, loading, error };
};