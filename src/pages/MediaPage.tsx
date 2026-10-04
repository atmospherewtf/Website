import "../styles/main.css"
import Footer from "../components/Footer.tsx";


function MediaPage() {

    return (
        <>
            <div className="header">
                <h1>Media Guidelines</h1>
                <h3>Last Updated: 03/10/26</h3>
            </div>

            {/*// <!-- Automatically converted from Obsidian markdown file. -->*/}
            <div className="text-content">
                <p>Failure to comply with these guidelines, intentional or not, may result in your access to the software being revoked permanently. If you have any questions about these guidelines please ask them before use.</p>

                <h4>Definitions</h4>
                <ul>
                    <li>&quot;(The) client&quot; - The custom Minecraft 1.8.8 client, everything contained within the &#39;Atmosphere 0.XX&#39; window.</li>
                </ul>
                <h2>Media Contents Guidelines</h2>
                <p><em>What am I <strong>allowed</strong> to show in my video?</em></p>
                <ul>
                    <li>Any and all interfaces within the client including in-game and menu interfaces.</li>
                    <li>Any and all modules available in the build of the client you have been granted access to.</li>
                    <li>Any external content/discussion related to the client that has not been specifically marked as confidential (eg. Discord chat messages, other videos).</li>
                </ul>
                <p><em>What am I <strong>not allowed</strong> to show in my video?</em></p>
                <ul>
                    <li>Any technical information related to your acquisition of the client build you have been given access to (eg. download links, authentication setup, etc.).</li>
                    <li>Client behavior that has been marked as unintentional by the developers of the client (if not possible, please wait until the issue is resolved via update).</li>
                </ul>
                <h2>Bugs / Unintended Client Behavior</h2>
                <p>If you suspect the client is behaving in an unintended way, please report the issue to developers via a support ticket. If it is confirmed by the developers of the client that the behavior you have described is indeed unintentional, please refrain from showing it in your content until the issue is resolved. If the behavior is intended you are free to show it in your content.</p>
                <h2>Hack vs Hack (HvH) Fights</h2>
                <p>You are permitted to show any portion of a an HvH encounter whether the outcome is favorable to the client or otherwise.</p>
                <h2>General Usage Restrictions</h2>
                <ul>
                    <li>Do not under any circumstances attempt to debug, decompile or otherwise tamper with the client in any way.</li>
                    <li>Do not share any files obtained during your acquisition to any online platform (this includes malware analysis services such as VirusTotal or similar, such services store the contents of the files uploaded on their servers which could lead to unauthorized access to your build of the client and you being punished as a result)</li>
                </ul>
                <h2>Failure To Comply &amp; Punishments</h2>
                <p>If the contents of your video are deemed to be breaking these guidelines you may be asked by the Developers of the client to post and/or pin a comment related to the issue or remove portions of your video altogether using the site&#39;s editing features depending on the severity. Failure to do so may result in your access to the client being revoked.</p>
                <p>If you are in any way related to the unauthorized access of the client by an unintended party your access to the client will be immediately revoked until a resolution has been reached.</p>
            </div>
        </>
    );
}

export default MediaPage
