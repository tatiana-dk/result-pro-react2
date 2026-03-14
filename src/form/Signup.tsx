import { useRef, useState, type ChangeEvent, type ChangeEventHandler, type SubmitEventHandler } from "react";
import { TextInput } from "./TextInput.tsx";
import { RadioInput } from "./RadioInput.tsx";
import {isTextInput} from './utils.ts';
import type {Control} from './types.ts';
import { IconAt } from '@tabler/icons-react';

interface SignupProps {
    onSubmit: (arg: Control[]) => void
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
            placeholder: 'Ваш ник',
            icon: <IconAt color="#ababab" size={24} />
        },
        {
            id: 3,
            name: 'email',
            label: 'Email',
            type: 'email',
            value: '',
            placeholder: 'Ваш email'
        },
        {
            id: 4,
            name: 'gender',
            label: 'Пол',
            type: 'radio',
            value: '',
            placeholder: 'Ваш пол',
            options: [
                {
                    code: 'male',
                    label: 'Мужской'
                }, 
                {
                    code: 'female',
                    label: 'Женский'
                }
            ]
        },
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
        inputs.current = inputs.current.map(c => c.name === target.name ? {...c, value: target.value} : {...c});
    };

    const handleSubmit: SubmitEventHandler = (event) => {
        event.preventDefault();
        onSubmit(inputs.current);
    };

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
                            (isTextInput(input)) ?
                                <TextInput key={input.id} {...input}/> :
                                <RadioInput key={input.id} {...input}/>
                        );
                    })
                }
                <button type="submit">Зарегистрироваться</button>
            </form>
        </>
    );
}