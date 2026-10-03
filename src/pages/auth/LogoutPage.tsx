import {useEffect} from "react";
import {BASE_URL} from "../../consts.ts";

function LogoutPage() {
    useEffect(() => {
        fetch(`${BASE_URL()}/user/logout`)
        .then(res => {
            localStorage.removeItem("user");
            console.log(res);
        })
    }, []);

    return (<></>);
}

export default LogoutPage;
