import type { RouteRecord } from 'vite-react-ssg'

import IndexPage from "./pages/IndexPage.tsx";
import PrivacyPage from "./pages/legal/PrivacyPage.tsx";
import TosPage from "./pages/legal/TosPage.tsx";
import MediaPage from "./pages/MediaPage.tsx";

import LoginPage from "./pages/auth/LoginPage.tsx";
import RegisterPage from "./pages/auth/RegisterPage.tsx";
import LogoutPage from "./pages/auth/LogoutPage.tsx";

import DashboardPage from "./pages/(authed)/DashboardPage.tsx";
import UserPage from "./pages/(authed)/UserPage.tsx";
import DownloadPage from "./pages/(authed)/DownloadPage.tsx";
import ChangelogPage from "./pages/(authed)/ChangelogPage.tsx";

import './styles/global/base.css'
import './styles/global/navbar.css'
import './styles/global/footer.css'
import DefaultLayout from "./layouts/Default.tsx";
import PurchasePage from './pages/PurchasePage.tsx';

export const routes: RouteRecord[] = [
    {
        path: "/",
        element: <DefaultLayout/>,
        children: [
            {
                path: "/",
                element: <IndexPage/>
            },
            {
                path: "/media",
                element: <MediaPage/>,
            },
            {
                path: "/privacy",
                element: <PrivacyPage/>,
            },
            {
                path: "/tos",
                element: <TosPage/>,
            },

            {
                path: "/login",
                element: <LoginPage/>,
            },
            {
                path: "/register",
                element: <RegisterPage/>,
            },
            {
                path: "/logout",
                element: <LogoutPage/>,
            },

            {
                path: "/purchase",
                element: <PurchasePage/>,
            }
        ],
    },

    {
        path: "/",
        element: <DefaultLayout authed={true}/>,
        children: [
            {
                path: "/dashboard",
                element: <DashboardPage/>
            },
            {
                path: "/user",
                element: <UserPage/>
            },
            {
                path: "/changelogs",
                element: <ChangelogPage/>
            },
            {
                path: "/download",
                element: <DownloadPage/>,
            },
        ],
    },

    {
        path: "*",
        element: <IndexPage/>
    },
]