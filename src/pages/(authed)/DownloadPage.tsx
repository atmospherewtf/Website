import "../../styles/dashboard.css"

function DownloadPage() {

    return (
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
                        <p><span className="accent">?</span> Users Online</p>
                        <button>Coming Soon</button>
                        <button className="grey">Changelogs</button>
                    </div>

                    <div className="product">
                        <div className="line"></div>
                        <h2>Atmosphere 1.21.11</h2>
                        <h4>Fabric 1.21.11 Mod</h4>
                        <p>Last Updated: XX/XX/26</p>
                        <p><span className="accent">?</span> Users Online</p>
                        <button>Coming Soon</button>
                        <button className="grey">Changelogs</button>
                    </div>
                </div>

                <div className="other-downloads">

                    <h4>Other Downloads</h4>
                    <div className="download">
                        <p>Branding Assets</p>
                        <div className="spacer"></div>
                        <a>Download</a>
                    </div>

                    <div className="download">
                        <p>Old Atmosphere (2024)</p>
                        <div className="spacer"></div>
                        <a>Download</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DownloadPage
