import {Suspense, useEffect, useState} from "react";

import ErrorBoundary from "../components/ErrorBoundary.tsx";
import Navbar from "../components/Navbar.tsx";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import DasboardNavbar from "../components/DashboardNavbar.tsx";
import {BASE_URL} from "../consts.ts";
import {type User, UserTemplate} from "../types/User.ts";
import Footer from "../components/Footer.tsx";
import {fetchAsset} from "../utils/discord.ts";

function DefaultLayout({ authed = false, }: { authed?: boolean; }) {
    const router = useNavigate();
    const location = useLocation();
    const [footer, setFooter] = useState<boolean>(true);

    const [user, setUser] = useState<User>();
    useEffect(() => {
        setUser(
            localStorage.getItem("user")
                ? JSON.parse(localStorage.getItem("user") as string)
                : null
        );
    }, []);

    const fetchDiscordAvatar = async (discord: any) => {
        const avatarExtension =
            discord.avatar &&
            discord.avatar.startsWith("a_")
                ? "gif"
                : "webp";

        const avatarSize = avatarExtension === "gif" ? "64" : "256";
        return await fetchAsset(
            `https://cdn.discordapp.com/avatars/${discord.discID}/${discord.avatar}.${avatarExtension}?size=${avatarSize}`
        );
    }

    useEffect(() => {
        console.log(location.pathname);
        setFooter(!["/login", "/register"].includes(location.pathname));

        fetch(`${BASE_URL()}/user/@me`, {
            credentials: "include",
        }).then(res => {
            if (res.status === 401 || res.status === 403)
                return localStorage.removeItem("user");
            if (res.status != 200)
                return;

            return res.json();
        }).then(async data => {
            if (!data) return;
            const tmp = {
                id: data.id,
                username: data.username,
                discord: data.discord ? {
                    id: data.discord.discID,
                    username: data.discord.username,
                } : null,
                avatar: data.discord?.avatar ? await fetchDiscordAvatar(data.discord) ?? UserTemplate.avatar : UserTemplate.avatar,
                skin: data.profile?.skinData ?? UserTemplate.skin,
                cape: data.profile?.capeData ?? UserTemplate.cape,
                // ...data,
            };
            setUser(tmp);
            localStorage.setItem("user", JSON.stringify(tmp));
            // window.location.reload();
        });
    }, [location.pathname]);
    console.log(user);

    useEffect(() => {
        if (authed && !user) return router("/login");
    }, []);

    return (
        <>
            <ErrorBoundary>
            {!authed ? <Navbar/> : <DasboardNavbar/>}
            {/*{children}*/}
            <Suspense>
                <Outlet />
            </Suspense>
            {footer && <Footer isAuthed={authed}/>}
            </ErrorBoundary>
        </>
    );
}

export default DefaultLayout