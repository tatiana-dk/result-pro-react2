import { useRef, type ChangeEvent, type ChangeEventHandler, type SubmitEventHandler } from "react";

interface SignupProps {
    onSubmit: (arg: {}) => void
};

export function Signup({onSubmit}: SignupProps) {
    const inputs = useRef({
        name: '',
        nickname: '',
        email: '',
        gender: '',
        password: '',
        repeatPassword: ''
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
            <h2>Регистрация</h2>
            <form
                onChange={handleChange}
                onSubmit={handleSubmit}
            >
                {
                    Object.keys(inputs.current).map((key) => {
                        return (
                            <div>
                                <input
                                    type={key}
                                    name={key}
                                />
                            </div>
                        );
                    })
                }
                <button type="submit">Зарегистрироваться</button>
            </form>
        </>
    );
}