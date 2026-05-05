import { useState } from 'react'

export default function AuthModal({ onClose }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [isLogin, setIsLogin] = useState(true);

    async function handleSubmit() {
        if (!email || !password) {
            return;
        }
        setLoading(true);
        try {
            console.log("Signing in/ Signing up");
            onClose();

        } catch (error) {
            console.log("Error: ", error.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <div className="field">
                <label>Email</label>
                <input
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}

                />
            </div>
            <div className="field">
                <label>Password</label>
                <input
                    type="password"
                    placeholder="********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleSubmit()}

                />
            </div>

            <button className="btn-primary" onClick={handleSubmit} disabled={loading}>
                {loading ? "Please wait..." : isLogin ? "Sign in" : "Create account"}
            </button>

            <div className="auth-toggle">
                {isLogin ? "Don't have an account? " : "Already have an account?"}
                <span onClick={() => setIsLogin((value) => !value)}>
                    {isLogin ? "Create account" : "Sign in"}
                </span>
            </div>
        </div>
    )
}
