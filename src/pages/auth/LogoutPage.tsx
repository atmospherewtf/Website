import {useEffect} from "react";
import {BASE_URL} from "../../consts.ts";
import {useNavigate} from "react-router-dom";

function LogoutPage() {
    const router = useNavigate();

    useEffect(() => {
        fetch(`${BASE_URL()}/auth/logout`, {
            credentials: "include",
        }).then(_ => {
            localStorage.removeItem("user");
            // console.log(res);
            router("/");
        })
    }, []);

    return (<></>);
}

export default LogoutPage;
