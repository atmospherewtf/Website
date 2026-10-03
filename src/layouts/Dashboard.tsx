import {Suspense} from "react";

import ErrorBoundary from "../components/ErrorBoundary.tsx";
import DashboardNavbar from "../components/DasboardNavbar.tsx";
import Footer from "../components/Footer.tsx";

import {Outlet} from "react-router-dom";

function DashboardLayout() {

    return (
        <>
            <ErrorBoundary>
            <DashboardNavbar/>
            <Suspense>
                <Outlet />
            </Suspense>
            {/*{children}*/}
            {/*<Footer />*/}
            </ErrorBoundary>
        </>
    );
}

export default DashboardLayout