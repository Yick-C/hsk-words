import { useState } from 'react'

export default function AuthModal() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div>AuthModal</div>
    )
}
