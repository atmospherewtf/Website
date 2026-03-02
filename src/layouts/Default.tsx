import {Suspense, useEffect, useState} from "react";

import ErrorBoundary from "../components/ErrorBoundary.tsx";
import Navbar from "../components/Navbar.tsx";
import {Outlet, useLocation} from "react-router-dom";
import DasboardNavbar from "../components/DasboardNavbar.tsx";
import {BASE_URL} from "../consts.ts";
import {type User, UserTemplate} from "../types/User.ts";

function DefaultLayout({ authed = false, }: { authed?: boolean; }) {
    const location = useLocation();
    const [user, setUser] = useState<User>(UserTemplate);

    useEffect(() => {
        fetch(`${BASE_URL}/user/@me`, {
            credentials: "include",
        }).then(res => {
            if (res.status != 200) return;
            return res.json()
        }).then(data => {
            setUser({
                demo: false,
                id: data.username,
                username: data.username,
                discord: data.discord ? {
                    id: data.discord.discID,
                    username: data.discord.username,
                } : null,
                avatar: data.discord ? data.discord.avatar : UserTemplate.avatar,
                skin: data.profile?.skinData ?? UserTemplate.skin,
                cape: data.profile?.capeData ?? UserTemplate.cape,
                // ...data,
            });
        })
    }, [location.pathname]);
    useEffect(() => {
        console.log(location.pathname);
    }, [location.pathname]);
    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
    }, [user]);
    console.log(user);

    return (
        <>
            <ErrorBoundary>
            {!authed ? <Navbar/> : <DasboardNavbar user={user}/>}
            {/*{children}*/}
            <Suspense>
                <Outlet />
            </Suspense>
            {/*{!noFooter ? <Footer /> : <></>}*/}
            </ErrorBoundary>
        </>
    );
}

export default DefaultLayout