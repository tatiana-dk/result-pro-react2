import { useRef, type ChangeEvent, type ChangeEventHandler, type SubmitEventHandler } from "react";

interface SigninProps {
    onSubmit: (arg: {}) => void
};

export function Signin({onSubmit}: SigninProps) {
    const inputs = useRef({
        email: '',
        password: ''
    });

    const handleChange: ChangeEventHandler = (event: ChangeEvent) => {
        const target = event.target as HTMLInputElement;

        inputs.current = {
            ...inputs.current,
            [target.name]: target.value
        };
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