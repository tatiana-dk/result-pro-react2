import { useRef, type ChangeEvent, type ChangeEventHandler, type SubmitEventHandler } from "react";
import { TextInput } from "./TextInput";
import type {Control} from './types.ts';

interface SignupProps {
    onSubmit: (arg: Control[]) => void
};

const isTextInput = (input: Control) => {
    return input.type === 'text' ||
        input.type === 'email' ||
        input.type === 'password'
};

export function Signup({onSubmit}: SignupProps) {
    const inputs = useRef([
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
            name: 'password',
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
        onSubmit(inputs.current);
    };

    return (
        <>
            <h2>Регистрация</h2>
            <form
                onChange={handleChange}
                onSubmit={handleSubmit}
            >
                {
                    inputs.current.map((input) => {
                        return (
                            (isTextInput(input)) && <TextInput {...input}/>
                        );
                    })
                }
                <button type="submit">Зарегистрироваться</button>
            </form>
        </>
    );
}