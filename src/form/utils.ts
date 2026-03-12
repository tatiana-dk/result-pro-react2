import type {Control} from './types.ts';

export const isTextInput = (input: Control) => {
    return input.type === 'text' ||
        input.type === 'email' ||
        input.type === 'password'
};

export const validateEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}