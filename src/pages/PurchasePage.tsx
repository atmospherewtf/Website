import "../styles/main.css"
import Footer from "../components/Footer.tsx";
import { Pay } from "0xtrails";


function PurchasePage() {

    return (
        <>
            <div className="header">
                <h1>Purchase</h1>
                <h3>Page in development blo</h3>
            </div>

                <Pay
                    buttonText="yep"
                    apiKey="AQAAAAAAAMEgBlnSBa8OqNZGfutxwpT-qcw"
                    to={{
                        recipient: "0x2848276FCdEC66CbB9d553510d71e0723306221e",
                        token: "pol",
                        chain: "polygon",
                        amount: "2.5",
                        calldata: "0xff8080",
                        supportedChains: ["polygon"],
                        supportedTokensByChain: [
                            {
                                "chain": "polygon",
                                "tokens": ["pol"]
                            }
                        ]
                    }}
                    theme="dark"
                    customCss={`
                        --trails-primary: #8080ff;
                        --trails-primary-hover: #4040aa;
                        --trails-border-radius-widget: 0px;
                        --trails-border-radius-button: 0px;
                        --trails-border-radius-input: 0px;
                        --trails-border-radius-dropdown: 0px;
                        --trails-border-radius-container: 0px;
                        --trails-border-radius-list: 0px;
                        --trails-border-radius-list-button: 0px;
                        --trails-border-radius-large-button: 0px;

                        --trails-font-family: "Inter", sans-serif;
                        --trails-widget-border: solid 1px #272727;
                        --trails-bg-primary: #191919;
                        --trails-bg-secondary: #0f0f0f;
                        --trails-bg-tertiary: #0f0f0f;
                        --trails-bg-card: #0f0f0f;
                        --trails-bg-overlay: #0f0f0f;
                        --trails-bg-secondary-hover: #272727;
                        --color-gray-900: #0f0f0f;
                        --color-gray-800: #0f0f0f;
                        --color-gray-700: #272727;

                        --trails-text-primary: #fff;
                        --trails-text-secondary: #fff;
                        --trails-text-tertiary: #fff;
                        --trails-text-muted: #aaa;

                    `}
                    onPaymentSuccess={({sessionId})=>console.log(sessionId)}
                />
            <div className="text-content">
            </div>
            <Footer />
        </>
    );
}

export default PurchasePage
