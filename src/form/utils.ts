import type {Control} from './types.ts';

export const isTextInput = (input: Control) => {
    return input.type === 'text' ||
        input.type === 'email' ||
        input.type === 'password'
};