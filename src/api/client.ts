import { API_BASE_URL } from '../constants/api';

export class ApiError extends Error {
    readonly status: number;

    constructor(
        status: number,
        message: string
    ) {
        super(message);
        this.status = status;
        this.name = 'ApiError';
    }
}

class ApiClient {
    private readonly baseUrl: string;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    async get<T>(endpoint: string, signal?: AbortSignal): Promise<T> {
        let response: Response;

        try {
            response = await fetch(`${this.baseUrl}${endpoint}`, { signal });
        } catch (err) {
            if (err instanceof DOMException && err.name === 'AbortError') {
                throw err;
            }
            throw new Error('Error de red: no se pudo conectar al servidor');
        }

        if (!response.ok) {
            throw new ApiError(
                response.status,
                `Error ${response.status}: ${response.statusText}`
            );
        }

        return response.json() as Promise<T>;
    }
}

export const apiClient = new ApiClient(API_BASE_URL);