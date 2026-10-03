import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import "../../styles/dashboard.css"
import type {User} from "../../types/User.ts";

function DashboardPage() {
    const router = useNavigate();
    useEffect(() => router("/user"), []);
    return (<></>);
}

export default DashboardPage
