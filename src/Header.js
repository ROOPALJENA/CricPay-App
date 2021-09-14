import React from 'react'

const Header = () => {
    return (
        <>
            <header>
                <section className="container main-hero-container">
                    <div className="row">
                        <div className="col-12 col-lg-6 header-left-side 
                        d-flex justify-content-center flex-column align-items-start
                        order-lg-first order-last">
                            <h1 className="display-2">
                                Online Payment Made <br /> Easy For You.
                            </h1>
                            <p className="main-hero-para">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, sint accusantium explicabo inventore delectus non assumenda. Minima eius odio quod? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus nisi minima eligendi quas eveniet eaque corporis quis, quo placeat, dolorum, optio alias perspiciatis perferendis autem! Pariatur explicabo placeat qui fuga.
                            </p>
                            <h3>Get early access for you.</h3>
                            <div className="input-group mt-3">
                                <input type="text" className="rounded-pill w-75 w-lg-75 me-3 p-2 form-control-text"
                                    placeholder="Enter your Email" />
                                <button className="input-group-button">Get it now</button>
                            </div>
                        </div>

                        {/* Main header right side */}
                        <div className="col-12 col-lg-6 header-right-side
                        d-flex justify-content-center align-items-center main-herosection-images
                        order-md-first order-sm-first">
                            <img src="./images/Bg-2.jpg" alt="heroImg" className="img-fluid" />
                            <img src="./images/Bg-6.jpg" alt="heroImg" className="img-fluid main-hero-img2" />
                        </div>
                    </div>
                </section>
            </header>
        </>
    )
}

export default Header
