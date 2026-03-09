export function Signin() {
    return (
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
    );
}