// import {useNavigate} from "react-router-dom";

import icon128 from '../assets/img/128.png'
import {Link} from "react-router-dom";
// import iconBig from '../assets/img/Big.png'

function Navbar() {
    return (
        <>
            <div id="navbar">
                <div className="content">
                    <Link to="/" className="logo"><img src={icon128}/></Link>
                    <div className="spacer"></div>
                    <div className="tabs">
                        <a href="/#purchase" className="tab">Purchase</a>
                        <Link to="/login" className="tab">Dashboard</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
