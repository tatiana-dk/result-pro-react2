import type {Control} from './types.ts';

export const isTextInput = (input: Control): boolean => {
    return input.type === 'text' ||
        input.type === 'email' ||
        input.type === 'password';
};

export const isRadioInput = (input: Control): boolean => {
    return input.type === 'radio';
};