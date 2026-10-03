import {Link, useNavigate} from "react-router-dom";

import "../../styles/form.css"
import {useEffect, useState} from "react";
import {BASE_URL} from "../../consts.ts";

function RegisterPage() {
    const router = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [invite, setInvite] = useState("");

    useEffect(() => {
        fetch(`${BASE_URL()}/user/@me`, {
            credentials: "include",
        }).then(res => {
            if (res.status == 200) return router("/dashboard")
        });
    }, []);

    function submit() {
        fetch(`${BASE_URL()}/auth/register`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
                invite: invite,
            }),
        }).then(async (res) => {
            if (res.status !== 200) return;
            let data = await res.json();
            document.cookie = `token=${data.session};max-age=604800;samesite=none;secure;`;
            // hack - race condition on useeffect for layout on redirect or sum
            window.location.reload();
            // router("/dashboard");
        });
    }

    return (
        <>
            <div className="box">
                <div className="line"></div>
                <h2>Register</h2>
                <div className="field">
                    <input type="text" placeholder="username" onChange={(event) => setUsername(event.target.value)}/>
                    <i className="fa-solid fa-user"></i></div>
                <div className="field">
                    <input type="password" placeholder="password" onChange={(event) => setPassword(event.target.value)}/>
                    <i className="fa-solid fa-lock"></i>
                </div>
                <div className="field">
                    <input type="text" placeholder="invite" onChange={(event) => setInvite(event.target.value)}/>
                    <i className="fa-solid fa-key"></i>
                </div>
                <div className="cf-turnstile" data-sitekey="0x4AAAAAAB-eqatgpeXCV0xt"></div>
                <button onClick={() => submit()}>Register</button>
                <p className="subtle">Already have an account? <Link to="/login">Login</Link></p>
            </div>

            <Link to="/" className="domain">atmosphere.wtf</Link>
            <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
        </>
    )
}

export default RegisterPage
