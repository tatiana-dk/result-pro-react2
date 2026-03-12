import { useCallback, useMemo, useRef, type ChangeEvent, type ChangeEventHandler, type SubmitEventHandler } from "react";
import { TextInput } from "./TextInput";
import {isTextInput, validateEmail, validatePassword, getControl, getControlValue} from './utils.ts';
import type {Control} from './types.ts';

interface SignupProps {
    onSubmit: (arg: Control[]) => void
};

const EMAIL_ERROR: string = 'Неверный email';
const PASSWORD_ERROR: string = 'Неверный пароль';

export function Signup({onSubmit}: SignupProps) {
    const inputs = useRef<Control[]>([
        {
            id: 1,
            name: 'name',
            label: 'Имя',
            type: 'text',
            value: '',
            placeholder: 'Введите Ваше имя'
        },
        {
            id: 2,
            name: 'nickname',
            label: 'Ник',
            type: 'text',
            value: '',
            placeholder: 'Ваш ник'
        },
        {
            id: 3,
            name: 'email',
            label: 'Email',
            type: 'email',
            value: '',
            placeholder: 'Ваш email'
        },
        // gender: '',
        {
            id: 5,
            name: 'password',
            label: 'Пароль',
            type: 'password',
            value: '',
            placeholder: 'Введите пароль'
        },
        {
            id: 6,
            name: 'repeat_password',
            label: 'Повторите пароль',
            type: 'password',
            value: '',
            placeholder: 'Повторите пароль'
        },
    ]);

    const handleChange: ChangeEventHandler = (event: ChangeEvent) => {
        const target = event.target as HTMLInputElement;
        inputs.current = inputs.current.map(c => c.name === target.name ? {...c, value: target.value} : c);
    };

    const handleSubmit: SubmitEventHandler = (event) => {
        event.preventDefault();
        validateForm();

        if (isFormValid)
            onSubmit(inputs.current);
    };

    const validateForm = useCallback(() => {
        const emailError = getEmailError();
        const passwordError = getPasswordError();
        setInputsErrors({emailError, passwordError});
    }, []);

    const getEmailError = useCallback(() => {
        const email = getControl(inputs.current, 'email');
        const emailValue = getControlValue(email);
        return validateEmail(emailValue) ? EMAIL_ERROR : '';
    }, []);

    const getPasswordError = useCallback(() => {
        const password = getControl(inputs.current, 'password');
        const passwordValue = getControlValue(password);

        const repeatPassword = getControl(inputs.current, 'repeat_password');
        const repeatPasswordValue = getControlValue(repeatPassword);

        return validatePassword(passwordValue, repeatPasswordValue) ? PASSWORD_ERROR : '';
    }, []);

    const setInputsErrors = useCallback(({emailError='', passwordError=''}: {emailError: string; passwordError: string }) => {
        inputs.current = inputs.current.map(c => {
            if (c.name === 'email')
                return {...c, error: emailError};

            if (c.name === 'password' || c.name === 'repeat_password')
                return {...c, error: passwordError};

            return c;
        });
    }, []);

    const isFormValid = useMemo((): boolean => !!inputs.current.find(c => c.error), [inputs.current]);

    return (
        <>
            <h2>Регистрация</h2>
            <form
                noValidate
                onChange={handleChange}
                onSubmit={handleSubmit}
            >
                {
                    inputs.current.map((input) => {
                        return (
                            (isTextInput(input)) && <TextInput key={input.id} {...input}/>
                        );
                    })
                }
                <button type="submit">Зарегистрироваться</button>
            </form>
        </>
    );
}