import {type User, UserTemplate} from "../../types/User.ts";
import {useEffect, useState} from "react";
import "../../styles/dashboard.css"

function UserPage() {
    const [user, setUser] = useState<User>(UserTemplate);
    useEffect(() => setUser(
        localStorage.getItem("user") ?
        JSON.parse(localStorage.getItem("user") as string)
        : UserTemplate),
    []);
    // console.log(localStorage.getItem("user"));

    return (
        <>
            {/*// <!-- Account -->*/}
            <div id="account" className="page">
                <h1>Account</h1>
                <div className="content">
                    <div className="profile">
                        <img src={user.avatar}/>
                        <div className="info">
                            <h2>{user?.username}</h2>
                            <h4>UID {user.id} • @{user.discord?.username ?? "discord"}</h4>
                        </div>
                    </div>

                    <div className="customizations">
                        <div id="skin" className="customization">
                            <div className="line"></div>
                            <h3>Custom Skin</h3>
                            <img src={user.skin}/><br/>
                            <button id="upload-skin">Upload</button>
                            <div className="skin-types">
                                <button id="skin-default">Default</button>
                                <button id="skin-slim" className="disabled">Slim</button>
                            </div>
                        </div>

                        <div id="cape" className="customization">
                            <div className="line"></div>
                            <h3>Custom Cape</h3>
                            <img src={user.cape}/><br/>
                            <button id="upload-cape">Upload</button>
                            <button id="remove-cape" className="disabled">Remove</button>
                        </div>
                    </div>

                    <div id="customization-notice" className="section">
                        <span
                            className="subtle">Note: custom skins / capes are only visible to other Atmosphere users.</span>
                    </div>

                    <div className="section">
                        <h3>Request HWID Reset</h3>
                        <div className="spacer"></div>
                        <button id="hwid-reset">Request</button>
                    </div>

                    <div className="section">
                        <h3>Change Username</h3>
                        <div className="spacer"></div>
                        <button id="change-username">Change</button>
                    </div>

                    <div className="section">
                        <h3>Change Password</h3>
                        <div className="spacer"></div>
                        <button id="change-password">Change</button>
                    </div>

                    <div className="section">
                        <h3>Link Discord</h3>
                        <div className="spacer"></div>
                        <button>Link</button>
                    </div>
                </div>
            </div>

            <div id="modal">
                <div>
                    <h2>Title</h2>
                    <p>Description</p>
                    <button>Close</button>
                </div>
            </div>

            {/*<script src="script.js"></script>*/}
        </>
    )
}

export default UserPage
