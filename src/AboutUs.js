import React, { useState } from 'react'
import HowToUseApp from './API/HowToUse'

const AboutUs = () => {
    const [aboutData, setAboutData] = useState(HowToUseApp);
    return (
        <>

            <section className="common-section our-services">
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-12 col-lg-5 text-center our-services-leftside-img">
                            <img src="./images/Pay.jpg" alt="How to use the App..." />
                        </div>

                        {/*  1st Section Right Side data */}
                        <div className="col-12 col-lg-7 our-services-list">
                            <h3 className="mini-title">
                                --AVAILABLE @ GOOGLE PLAY AND IOS APP STORE ONLY
                            </h3>
                            <h1 className="main-heading">How to use the APP? </h1>

                            {aboutData.map((curElem) => {
                                const { id, title, info } = curElem
                                return (<>
                                    <div className="row our-services-info" key={id}>
                                        <div className="col-1 our-services-number">{id}</div>
                                        <div className="col-10 our-services-data">
                                            <h2>{title}</h2>
                                            <p className="main-hero-para">{info}</p>
                                        </div>
                                    </div>
                                </>)
                            })}


                            <br />
                            <button className="btn-style btn-style-border">Learn More</button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2nd part of the Section */}
            <section className="common-section our-services our-services-rightside">
                <div className="container mb-5">
                    <div className="row">

                        {/*  2nd Section Right Side data */}
                        <div className="col-12 col-lg-7 our-services-rightside-content
                         d-flex justify-content-center align-items-start flex-column ">
                            <h3 className="mini-title">
                                --SUPPORT IN ANY LANGUAGES
                            </h3>
                            <h1 className="main-heading">World Class Support is <br /> Available 24/7 </h1>

                            {aboutData.map((curElem) => {
                                const { id, title, info } = curElem
                                return (<>
                                    <div className="row our-services-info" key={id}>
                                        <div className="col-1 our-services-number">{id}</div>
                                        <div className="col-10 our-services-data">
                                            <h2>{title}</h2>
                                            <p className="main-hero-para">{info}</p>
                                        </div>
                                    </div>
                                </>
                                )
                            })}


                            <br />
                            <button className="btn-style btn-style-border">Learn More</button>
                        </div>
                        <div className="col-12 col-lg-5 our-services-rightside-img">
                            <img src="./images/Support24-7.jpg" alt="Support Available 24/7" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutUs
