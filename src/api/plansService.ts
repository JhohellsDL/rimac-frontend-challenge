import { apiClient } from './client';
import type { PlansResponse } from '../models/Plan';

export const plansService = {
  getPlans(): Promise<PlansResponse> {
    return apiClient.get<PlansResponse>('/plans.json');
  }
};
