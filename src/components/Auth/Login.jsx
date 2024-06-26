import AuthLayout from './layout/AuthLayout';
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
const Login = () => {
    const { login } = useAuth()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);


    return (
        <AuthLayout>
            <section className="w-1/3" >
                <h1 className='text-center mb-3 text-xl'>Welcome Back</h1>
                {error && <div className="alert alert-error mb-3">{error}</div>}
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        login({
                            username, password
                        }).then((res) => {
                            if (res.error) {
                                setError(res.error)
                                setTimeout(() => {
                                    setError(null)
                                }, 5000);
                            }
                        })
                    }}
                    className="space-y-4">
                    <label className="input input-bordered  flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                        <input type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="grow input-primary"
                            required
                            name="username"
                            id="username"
                            placeholder="Username" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            required
                            className="grow input-primary" />
                    </label>
                    <button
                        type="submit"

                        className="btn btn-primary">
                        Login
                    </button>
                    <Link to="/register" className="text-center underline">Don&apos;t have an account? Register</Link>
                </form>
            </section>
        </AuthLayout>


    )
}

export default Login