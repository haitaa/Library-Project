import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constans";
import "../styles/Form.css";

function Form({ route, method }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [age, setAge] = useState("");
    const [tcNo, setTcNo] = useState("");
    const navigate = useNavigate();

    const name = method === "login" ? "Login" : "Register";

    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();

        try {
            if (method === "register") {
                const res = await api.post(route, {
                    email,
                    password,
                    tcNo,
                    username,
                    first_name,
                    last_name,
                    age,
                });
                navigate("/login");
            } else if (method === "login") {
                const res = await api.post(route, { email, password });
                console.log(res);
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
                navigate("/");
            }
        } catch (error) {
            alert(error);
        } finally {
            setLoading(false);
        }
    };

    const renderRegisterContent = () => {
        return (
            <>
                <input
                    className="form-input"
                    type="text"
                    value={tcNo}
                    onChange={(e) => setTcNo(e.target.value)}
                    placeholder="TC No"
                />
                <input
                    className="form-input"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                />
                <input
                    className="form-input"
                    type="text"
                    value={first_name}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                />
                <input
                    className="form-input"
                    type="text"
                    value={last_name}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                />
                <input
                    className="form-input"
                    type="text"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    placeholder="Age"
                />
            </>
        );
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <h1>{name}</h1>
            <input
                className="form-input"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            {name === "Register" && renderRegisterContent()}
            <input
                className="form-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button className="form-button" type="submit">
                {name}
            </button>
        </form>
    );
}

export default Form;
