import { apiClient } from './client';
import type { UserResponse } from '../models/User';

export const userService = {
  getUser(signal?: AbortSignal): Promise<UserResponse> {
    return apiClient.get<UserResponse>('/user.json', signal);
  }
};
