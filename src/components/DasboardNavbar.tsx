import {Link} from "react-router-dom";

import icon128 from '../assets/img/128.png'
import {useEffect, useState} from "react";

function DasboardNavbar({user}: {user?: any}) {
    // i hate your bad screen sizes
    const [width, setWidth] = useState<number>(0);
    const threshold = 504;
    useEffect(() => {
        setWidth(window.innerWidth);
        const handleResizeWindow = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);

    return (
        <>
            <div id="navbar">
                <div className="content">
                    <Link to="/" className="logo"><img src={icon128}/></Link>
                    {
                        user?.demo ? (
                            <p className="demo-banner">
                                <h3>{width > threshold ? (<>This is a <b>DEMO</b> account</>): (<b>DEMO</b>) }</h3>
                            </p>
                        ) : (<></>)
                    }
                    <div className="spacer"></div>
                    <div className="tabs">
                        <Link to="/download" className="tab">Download</Link>
                        <Link to="/changelogs" className="tab">Changelogs</Link>
                        <Link to="/user" className="tab">Account</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DasboardNavbar
