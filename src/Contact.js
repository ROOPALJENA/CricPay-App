import React, { useState } from 'react'

const Contact = () => {
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        address: "",
        message: "",
    })
    let name, value;
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;
        setUserData({ ...userData, [name]: value })
    }

    // Connect with Firebase
    const submitData = async (event) => {
        event.preventDefault();
        const { firstName, lastName, phone, email, address, message } = userData;
        if (firstName && lastName && phone && email && address && message) {
            const res = fetch('https://cricpay-default-rtdb.firebaseio.com/userDataRecords.json',
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        firstName,
                        lastName,
                        phone,
                        email,
                        address,
                        message,
                    })
                }
            )
            if (res) {
                setUserData({
                    firstName: "",
                    lastName: "",
                    phone: "",
                    email: "",
                    address: "",
                    message: "",
                })
                alert("Data Stored")
            }
            else {
                alert("Please fill up all the data");
            }
        }
        else {
            alert("Please fill up all the data");
        }

    }

    return (

        <>
            <section className="contactus-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg-10 mx-auto">
                            <div className="row">
                                <div className="contact-leftside col-12 col-lg-5">
                                    <h1 className="main-heading fw-bold">Connect With Our <br /> Sales Team</h1>
                                    <p className="main-hero-para">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique veniam earum quod magni velit praesentium repudiandae, omnis, ex alias aperiam temporibus harum debitis perferendis quaerat, odio ullam tenetur quasi non?
                                    </p>
                                    <figure>
                                        <img src="./images/Sales.jpg" alt="Contact Us Img" className="img-fluid" />
                                    </figure>
                                </div>


                                {/* Right Side Contact Form */}

                                <div className="contact-rightside col-12 col-lg-7">
                                    <form method="POST">
                                        <div className="row">
                                            <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="text"
                                                    name="firstName"
                                                    id=""
                                                    className="form-control"
                                                    placeholder="First Name"
                                                    value={userData.firstName}
                                                    onChange={postUserData}
                                                />
                                            </div>

                                            <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="text"
                                                    name="lastName"
                                                    id=""
                                                    className="form-control"
                                                    placeholder="Last Name"
                                                    value={userData.lastName}
                                                    onChange={postUserData}
                                                />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="text"
                                                    name="phone"
                                                    id=""
                                                    className="form-control"
                                                    placeholder="Phone Number"
                                                    value={userData.phone}
                                                    onChange={postUserData}
                                                />
                                            </div>

                                            <div className="col-12 col-lg-6 contact-input-field">
                                                <input type="text"
                                                    name="email"
                                                    id=""
                                                    className="form-control"
                                                    placeholder="Email ID"
                                                    value={userData.email}
                                                    onChange={postUserData}
                                                />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12 contact-input-field">
                                                <input type="text"
                                                    name="address"
                                                    id=""
                                                    className="form-control"
                                                    placeholder="Add Address"
                                                    value={userData.address}
                                                    onChange={postUserData}
                                                />
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12">
                                                <input type="text"
                                                    name="message"
                                                    id=""
                                                    className="form-control"
                                                    placeholder="Enter your Message"
                                                    value={userData.message}
                                                    onChange={postUserData}
                                                />
                                            </div>
                                        </div>

                                        <div class="form-check form-checkbox-style">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                            <label class="form-check-label" className="main-hero-para">
                                                I agree that the CricPay may connect me at the email address or phone number mentioned above.
                                            </label>
                                        </div>
                                        <button type="submit"
                                            className="btn btn-style w-100"
                                            onClick={submitData}>
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
