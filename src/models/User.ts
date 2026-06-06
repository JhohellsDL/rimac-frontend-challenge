export interface User {
    name: string;
    lastName: string;
    birthDay: string;
    phone: string;
}

export interface UserResponse {
    user: User;
}