import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

import Footer from "../components/Footer.tsx";
import iconBig from '../assets/img/Big.png'
import paymentEthereum from '../assets/img/payment/ethereum.png'
import paymentLtc from '../assets/img/payment/ltc.png'
import paymentMore from '../assets/img/payment/more.png'
import paymentStripe from '../assets/img/payment/stripe.png'

import "../styles/main.css"
import {BASE_URL} from "../consts.ts";

function IndexPage() {
    const [splash, setSplash] = useState("");

    useEffect(() => {
        fetch(`${BASE_URL}/splash`, {
            credentials: "include",
        })
        .then(res => res.text())
        .then(data => setSplash(data))
    }, [])

    return (
        <>
            <div id="main">
                <img src={iconBig}/>
                <h1>Atmosphere</h1>
                <p>{splash}</p>
                <div className="buttons">
                    <a href="#purchase">
                        <button>Purchase</button>
                    </a>
                    <a href="https://discord.gg/YdHGZcKtER">
                        <button>Discord</button>
                    </a>
                </div>
            </div>

            <div id="media">
                <h2>Media</h2>
                <div className="videos">
                    <iframe src="https://www.youtube.com/embed/ZxRmyfYnqi8" width="426" height="240" frameBorder="0"
                            allowFullScreen referrerPolicy="strict-origin-when-cross-origin"></iframe>
                    <iframe src="https://www.youtube.com/embed/yBYm9tJwZ-4" width="426" height="240" frameBorder="0"
                            allowFullScreen referrerPolicy="strict-origin-when-cross-origin"></iframe>
                    <iframe src="https://www.youtube.com/embed/1NClSmkxRAs" width="426" height="240" frameBorder="0"
                            allowFullScreen referrerPolicy="strict-origin-when-cross-origin"></iframe>
                    <iframe src="https://www.youtube.com/embed/R7IvocIYnjI" width="426" height="240" frameBorder="0"
                            allowFullScreen referrerPolicy="strict-origin-when-cross-origin"></iframe>
                </div>
            </div>

            <div id="testimonials">
                <h2>Testimonials</h2>
                <div className="list">
                    <div>
                        <b>liquidsquid</b>
                        <p className="italic">"HE'S HACKING HE'S RUINING THE GAME!"</p><br/>
                        <p className="subtle">15/02/25</p>
                    </div>

                    <div>
                        <b>bukky</b>
                        <p className="italic">"ARE YOU SPAWNING ITEMS-"</p><br/>
                        <p className="subtle">20/02/25</p>
                    </div>

                    <div>
                        <b>final</b>
                        <p className="italic">"Chinese Adjust"</p><br/>
                        <p className="subtle">??/??/25</p>
                    </div>

                    <div>
                        <b>CalculusHvH</b>
                        <p className="italic">"Terrifying Client"</p><br/>
                        <p className="subtle">24/02/26</p>
                    </div>

                    <div>
                        <b>auth</b>
                        <p className="italic">"atmosphere is forged from the souls of 400 creative indian soldiers<br/>who
                            sacrificed their blood sweat and tears to create this beautiful masterpiece"</p>
                        <p className="subtle">24/02/26</p>
                    </div>
                </div>
            </div>

            <div id="purchase">
                <h2>Purchase</h2>
                {/*// <!--        <p class="notice">Can't do crypto? Check out our list of <a>official resellers</a>.</p>-->*/}

                <div className="purchase-options">
                    <div className="purchase-option">
                        <div className="line"></div>
                        <div className="content">
                            <h3>Monthly</h3>
                            <h4>$X.XX / month</h4>
                            <p>Access to the product during active subscription time*</p>
                            <div className="spacer"></div>
                            <div className="bottom">
                                <p className="subtle">(Litecoin / Ethereum / +More)</p>
                                <div className="payments">
                                    <img src={paymentLtc} alt="litecoin"/>
                                    <img src={paymentEthereum} alt="ethereum"/>
                                    <img src={paymentMore} alt="more"/>
                                </div>
                                <button>Coming Soon</button>
                                {/*// <!-- Purchase -->*/}
                            </div>
                        </div>
                    </div>

                    <div className="purchase-option">
                        <div className="line"></div>
                        <div className="content">
                            <h3>Reseller</h3>
                            <h4>$X.XX / month</h4>
                            <p>Access to the product via a third-party reseller</p>
                            <div className="spacer"></div>
                            <div className="bottom">
                                <p className="subtle">(Stripe)</p>
                                <div className="payments">
                                    <img src={paymentStripe} alt="stripe"/>
                                </div>
                                <button>Coming Soon</button>
                                {/*// <!-- Learn More -->*/}
                            </div>
                        </div>
                    </div>

                </div>

                <p className="subtle">*Any purchases made must be in compliance with our <Link to="/tos">terms of
                    service</Link>.</p>
            </div>
            <Footer />
        </>
    );
}

export default IndexPage
