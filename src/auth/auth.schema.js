import { z } from 'zod';

export const registerSchema = z.object({  
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    username: z.string().min(1).max(30).regex(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
    confirmPassword: z.string().min(6, 'Confirm Password must be at least 6 characters long'),
}).refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords must match',
    path: ['confirmPassword'],
});

export const loginSchema = z.object({
    username: z.string().min(3).max(30),
    password: z.string().min(4)
})