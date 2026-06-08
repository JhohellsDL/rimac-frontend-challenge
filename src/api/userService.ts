import { apiClient } from './client';
import type { User } from '../models/User';

export const userService = {
  getUser(signal?: AbortSignal): Promise<User> {
    return apiClient.get<User>('/user.json', signal);
  }
};
