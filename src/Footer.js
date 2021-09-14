import React from 'react'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-10 mx-auto">
                            <div className="row">

                                <div className="col-6 col-lg-3">
                                    <h2>Company</h2>
                                    <ul>
                                        <li> <a href="#">About</a> </li>
                                        <li> <a href="#">About</a> </li>
                                        <li> <a href="#">About</a> </li>
                                        <li> <a href="#">About</a> </li>
                                    </ul>
                                </div>

                                <div className="col-6 col-lg-3">
                                    <h2>Support</h2>
                                    <ul>
                                        <li> <a href="#">About</a> </li>
                                        <li> <a href="#">About</a> </li>
                                        <li> <a href="#">About</a> </li>
                                        <li> <a href="#">About</a> </li>
                                    </ul>
                                </div>

                                <div className="col-6 col-lg-3">
                                    <h2>Services</h2>
                                    <ul>
                                        <li> <a href="#">About</a> </li>
                                        <li> <a href="#">About</a> </li>
                                        <li> <a href="#">About</a> </li>
                                        <li> <a href="#">About</a> </li>
                                    </ul>
                                </div>

                                <div className="col-6 col-lg-3">
                                    <h2>Follow Us</h2>
                                    <div className="row">
                                        <div className="col-3 mx-auto">
                                            <a href="https://www.facebook.com/roopal.jena.12/">
                                                <i className="fab fa-facebook fontawesome-style"></i>
                                            </a>
                                        </div>
                                        <div className="col-3 mx-auto">
                                            <a href="https://twitter.com/reactjs">
                                                <i className="fab fa-twitter fontawesome-style"></i>
                                            </a>
                                        </div>
                                        <div className="col-3 mx-auto">
                                            <a href="https://youtu.be/RGKi6LSPDLU">
                                                <i className="fab fa-youtube fontawesome-style"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <hr />
                            <div className="mt-5">
                                <p className="main-hero-para text-center w-100">
                                    Copyright @ 2021 CricPay. All rights reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
