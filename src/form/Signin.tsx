export function Signin() {
    return (
        <>
            <h2>Авторизация</h2>
            <form>
                <div>
                    <input
                        type="email"
                        name="EMAIL"
                    />
                </div>
                <div>
                    <input
                        type="password"
                        name="PASSWORD"
                    />
                </div>
                <button type="submit">Войти</button>
            </form>
        </>
    );
}