import { useRef, type ChangeEvent, type ChangeEventHandler, type SubmitEventHandler } from "react";
import { TextInput } from "./TextInput.tsx";
import {isTextInput} from './utils.ts';
import type {Control} from './types.ts';

interface SigninProps {
    onSubmit: (arg: Control[]) => void
};

export function Signin({onSubmit}: SigninProps) {
    const inputs = useRef([
        {
            id: 1,
            name: 'email',
            label: 'Email',
            type: 'email',
            value: '',
            placeholder: 'Ваш email'
        },
        {
            id: 2,
            name: 'password',
            label: 'Пароль',
            type: 'password',
            value: '',
            placeholder: 'Введите пароль'
        },
    ]);

    const handleChange: ChangeEventHandler = (event: ChangeEvent) => {
        const target = event.target as HTMLInputElement;
        inputs.current = inputs.current.map(c => c.name === target.name ? {...c, value: target.value} : {...c});
    };

    const handleSubmit: SubmitEventHandler = (event) => {
        event.preventDefault();
        onSubmit(inputs.current);
    };

    return (
        <>
            <h2>Авторизация</h2>
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
                <button type="submit">Войти</button>
            </form>
        </>
    );
}