export const DISCOUNT_SOMEONE_ELSE = 0.05;

export const InsuredType = {
    FOR_ME: 'para-mi',
    FOR_SOMEONE_ELSE: 'para-alguien-mas'
} as const;

export type InsuredType = typeof InsuredType[keyof typeof InsuredType];
