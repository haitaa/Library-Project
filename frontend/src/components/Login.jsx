import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

function Login({ routes }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await api.post(routes, {
                email: email,
                password: password,
            });

            if (response.status === 200) {
                const { access, refresh } = response.data;
                localStorage.setItem("access_token", access);
                localStorage.setItem("refresh_token", refresh);
                navigate("/");
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setError("Invalid username or password");
            } else {
                setError("An error occurred. Please try again later.");
            }
        }
    };

    return (
        <div>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
}

export default Login;
