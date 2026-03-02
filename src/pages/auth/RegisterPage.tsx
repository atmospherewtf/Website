import {Link, useNavigate} from "react-router-dom";

import "../../styles/form.css"

function RegisterPage() {
    const router = useNavigate();

    return (
        <>
            <div className="box">
                <div className="line"></div>
                <h2>Register</h2>
                <div className="field"><input type="text" placeholder="username"/><i
                    className="fa-solid fa-user"></i></div>
                <div className="field"><input type="text" placeholder="password"/><i
                    className="fa-solid fa-lock"></i></div>
                <div className="field"><input type="text" placeholder="invite"/><i className="fa-solid fa-key"></i>
                </div>
                <div className="cf-turnstile" data-sitekey="0x4AAAAAAB-eqatgpeXCV0xt"></div>
                <button onClick={() => router("/dashboard")}>Register</button>
                <p className="subtle">Already have an account? <Link to="/login">Login</Link></p>
            </div>

            <Link to="/" className="domain">atmosphere.wtf</Link>
            <script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>
        </>
    )
}

export default RegisterPage
