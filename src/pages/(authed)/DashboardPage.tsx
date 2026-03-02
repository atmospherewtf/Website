import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

import "../../styles/dashboard.css"

function DashboardPage() {
    const router = useNavigate();

    useEffect(() => {
        router("/user");
    }, []);

    return (<></>);
}

export default DashboardPage
