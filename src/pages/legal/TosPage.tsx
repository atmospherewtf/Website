import "../../styles/legal.css"

import Footer from "../../components/Footer.tsx";

function TosPage() {
    return (
        <>
            <div className="header">
                <h1>Terms Of Service</h1>
                <h3>Last Updated: 03/10/25</h3>
            </div>

            <div className="text-content">
                <h2 data-heading="Acceptance of Terms" dir="auto">Acceptance of Terms</h2>
                <p dir="auto">Any and all access to, and or interaction with, Atmosphere, Apollo and related content / services will here by be called <code className="code-styler-inline">the service</code>.<br/>
                    Any interaction with <code className="code-styler-inline">the service</code> means you are bound to the terms outlined and remain responsible for your compliance with <code className="code-styler-inline">the service</code> and local laws.<br/>
                    If you do not agree, you are not permitted to interact with <code className="code-styler-inline">the service</code>.<br/>
                    These terms may update without notice and your interaction with <code className="code-styler-inline">the service</code> indicates your agreement with any revisions.</p>
                <h2 data-heading="Ownership" dir="auto">Ownership</h2>
                <ul>
                    <li dir="auto">Users have a license to use <code className="code-styler-inline">the service</code>, Atmosphere retains all ownership rights to <code className="code-styler-inline">the service</code>.</li>
                    <li dir="auto">Termination is defined as the refusal, deletion or takedown of any and all information / access  to <code className="code-styler-inline">the service</code> and any person(s) related.</li>
                    <li dir="auto">Atmosphere reserves the right at any moment to terminate a given users access to <code className="code-styler-inline">the service</code> without reason.</li>
                    <li dir="auto">Compensation for termination, reversal of any decisions made, or downtime / maintenance is possible but not guaranteed.</li>
                </ul>
                <h2 data-heading="Enforcement" dir="auto">Enforcement</h2>
                <ul>
                    <li dir="auto">Use <code className="code-styler-inline">the service</code> in accordance to applicable laws and regulations.</li>
                    <li dir="auto">You are responsible for your use of <code className="code-styler-inline">the service</code>.</li>
                    <li dir="auto">Any sharing of downloads, access, licenses, links to content owned by Atmosphere, information the user is privy to or gains access to through <code className="code-styler-inline">the service</code>, is grounds for termination.</li>
                    <li dir="auto">Multiple personal presences across the service for one given person is grounds for termination.</li>
                    <li dir="auto">Sale, transfer or loss of account access, registration or keys is grounds for termination.</li>
                    <li dir="auto">You may not reverse engineer, seek description of internal workings, attempt to circumvent systems, tamper or misuse <code className="code-styler-inline">the service</code>, this is grounds for termination.</li>
                    <li dir="auto">You may not use <code className="code-styler-inline">the service</code> in ways you do not have the permission to use it.</li>
                    <li dir="auto">You may not use services provided you do not have permission to use.</li>
                    <li dir="auto">When creating and sharing media content of <code className="code-styler-inline">the service</code>, any attempt to misrepresent <code className="code-styler-inline">the service</code>,  reveal information you are privy to, sharing a link to files owned by Atmosphere or any distribution of the <code className="code-styler-inline">the service</code> is grounds for termination.</li>
                </ul>
                <h2 data-heading="Cloud Content" dir="auto">Cloud Content</h2>
                <ul>
                    <li dir="auto">You retain ownership of any content uploaded to <code className="code-styler-inline">the service</code>.</li>
                    <li dir="auto">By uploading content to the <code className="code-styler-inline">service</code> you grant us a non-exclusive license to share, host, display and distribute the content.</li>
                    <li dir="auto">Do not upload or distribute content you do not have the rights to or content that is malicious, harmful, unlawful or infringing.</li>
                    <li dir="auto">Do not use <code className="code-styler-inline">the service</code> to harass, spam or host irrelevant content to <code className="code-styler-inline">the service</code>.</li>
                </ul>
            </div>
        </>
    );
}

export default TosPage
