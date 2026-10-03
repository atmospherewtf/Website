import "../../styles/dashboard.css"
import {useEffect, useState} from "react";
import type {User} from "../../types/User.ts";
import {useNavigate} from "react-router-dom";

function ChangelogPage() {
    const router = useNavigate();
    const [user, setUser] = useState<User>();
    useEffect(() => {
        setUser(
            localStorage.getItem("user")
                ? JSON.parse(localStorage.getItem("user") as string)
                : null
        );
    }, []);

    return user ? (
        <>
            {/*// <!-- Changelogs -->*/}
            <div id="changelogs" className="page">
                <h1>Changelogs</h1>
                <p>What are you doing here?</p>
            </div>
        </>
    ) : (<></>);
}

export default ChangelogPage
