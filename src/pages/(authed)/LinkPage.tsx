import {type User} from "../../types/User.ts";
import {useEffect, useState} from "react";
import "../../styles/dashboard.css"
import {useNavigate} from "react-router-dom";
import {BASE_URL} from "../../consts.ts";

function LinkPage() {
    const router = useNavigate();
    const [user, setUser] = useState<User>();
    useEffect(() => {
        setUser(
            localStorage.getItem("user")
                ? JSON.parse(localStorage.getItem("user") as string)
                : null
        );
    }, []);

    useEffect(() => {
        if (!user) router("/login");
        window.location.href = `${BASE_URL()}/discord/link`;
    }, []);

    return (<></>);
}

export default LinkPage;
