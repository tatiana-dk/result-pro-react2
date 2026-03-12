import { useRef, type ChangeEvent, type ChangeEventHandler, type SubmitEventHandler } from "react";
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
        inputs.current = inputs.current.map(c => c.name === target.name ? {...c, value: target.value} : c);
    };

    const handleSubmit: SubmitEventHandler = (event) => {
        event.preventDefault();
        onSubmit(inputs.current);
    };

    return (
        <>
            <h2>Авторизация</h2>
            <form
                onChange={handleChange}
                onSubmit={handleSubmit}
            >
                <div>
                    <input
                        type="email"
                        name="email"
                    />
                </div>
                <div>
                    <input
                        type="password"
                        name="password"
                    />
                </div>
                <button type="submit">Войти</button>
            </form>
        </>
    );
}