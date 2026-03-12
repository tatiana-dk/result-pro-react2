import type {Control} from './types.ts';

export const isTextInput = (input: Control) => {
    return input.type === 'text' ||
        input.type === 'email' ||
        input.type === 'password'
};

export const validateEmail = (email: string): boolean => {
    if (typeof email !== 'string')
        return false;

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
};

export const validatePassword = (password: string, repeatPassword: string): boolean => {
    if (typeof password !== 'string' || typeof repeatPassword !== 'string')
        return false;

    return password === repeatPassword;
};

export const getControl = (inputs: Control[], name: string): Control | undefined => {
    return inputs.find(c => c.name === name);
};

export const getControlValue = (control: Control | undefined) => {
    return control && control.value ? control.value : '';
};