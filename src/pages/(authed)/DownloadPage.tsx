import "../../styles/dashboard.css"
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {BASE_URL} from "../../consts.ts";
import type {User} from "../../types/User.ts";

function DownloadPage() {
    const router = useNavigate();
    const [stats, setStats] = useState<{[key: string]: any}>();
    const [user, setUser] = useState<User>();
    useEffect(() => {
        setUser(
            localStorage.getItem("user")
                ? JSON.parse(localStorage.getItem("user") as string)
                : null
        );
    }, []);

    const fetchStats = () => {
        fetch(`${BASE_URL()}/stats`, {
            credentials: "include",
        }).then(r => {
            if (r.status != 200)
                return router("/");

            return r.json();
        }).then(async r => setStats(await r));
    }

    useEffect(() => {
        fetchStats();
        const interval = setInterval(fetchStats, 10000);
        return () => clearInterval(interval);
    }, []);

    return user ? (
        <>
            {/*// <!-- Downloads -->*/}
            <div id="download" className="page">
                <h1>Downloads</h1>
                <div className="primary-products">
                    <div className="product">
                        <div className="line"></div>
                        <h2>Atmosphere 1.8</h2>
                        <h4>Minecraft 1.8.8 Client</h4>
                        <p>Last Updated: XX/XX/26</p>
                        <p><span className="accent">{stats?.total_launches ?? "?"}</span> Total Downloads</p>
                        <button>Coming Soon</button>
                        <button className="grey">Changelogs</button>
                    </div>

                    <div className="product">
                        <div className="line"></div>
                        <h2>Atmosphere 1.21.11</h2>
                        <h4>Fabric 1.21.11 Mod</h4>
                        <p>Last Updated: XX/XX/26</p>
                        <p><span className="accent">?</span> Total Downloads</p>
                        <button>Coming Soon</button>
                        <button className="grey">Changelogs</button>
                    </div>
                </div>

                <div className="other-downloads">

                    <h4>Other Downloads</h4>
                    <div className="download">
                        <p>Branding Assets</p>
                        <div className="spacer"></div>
                        <a href={BASE_URL() + "/Branding_Assets.zip"}>Download</a>
                    </div>

                    <div className="download">
                        <p>Old Atmosphere (2024)</p>
                        <div className="spacer"></div>
                        <a className="disabled">Download</a>
                    </div>
                </div>
            </div>
        </>
    ) : (<></>);
}

export default DownloadPage
