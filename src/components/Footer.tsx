// import {useNavigate} from "react-router-dom";

// import icon128 from '../assets/img/128.png'
// import iconBig from '../assets/img/Big.png'

import {Link} from "react-router-dom";

function Footer() {
    return (
        <>
            <div id="footer">
                <div className="content">
                    <div>© Atmosphere 2026. All rights reserved.</div>
                    <div className="spacer"></div>
                    <div className="right">
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/tos">Terms Of Service</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
