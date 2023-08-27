import React from 'react'
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin, FaPhone, FaMailBulk, FaMousePointer } from 'react-icons/fa';


function ContactMe() {
    return (
        <div className='bg1 pb-5 pt-3 mt-2 ' id='contactme'>
            <div className="container">

                <h1 className="fs-9 fw-bold mb-1 pt-3 fontColour text-center">
                    Get in touch!
                </h1>
                <p className='text-center pb-4'>
                    You can contact me here.
                </p>

                <div className='row '>
                    <form className='col-lg-5 p-4 bg2 rounded-3'>

                        <div className="form-group pt-3">
                            <label for="exampleFormControlSelect1">Name</label>
                            <input type="text" className="form-control" name='name' />
                        </div>

                        <div className="form-group pt-4">
                            <label for="exampleFormControlInput1">Email address</label>
                            <input type="email" className="form-control" name='email' placeholder="name@example.com" />
                        </div>


                        <div className="form-group pt-4">
                            <label for="exampleFormControlTextarea1">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <button type="submit" className="btn btn-warning mt-4 mb-2">Submit</button>

                    </form>

                    <div className='col-lg-7'>

                        <div className='' style={{ marginLeft: '115px', marginTop: '8px' }}>

                            <div><FaMailBulk size={25} /> <span className='fs-2 p-1'>sriprasanth1122@gmail.com</span></div>
                            <br />

                            <div><FaPhone size={25} /> <span className='fs-2 p-1'>+91 9842885185</span></div>
                            <br />

                            <a href='https://github.com/sriprasanth1122' target={'blank'} style={{ textDecoration: "none" }}>
                                <FaGithub size={30} /> <span className='fs-2 p-1'>Github</span> <FaMousePointer />
                            </a>


                        </div>

                        <h1 className="fs-9 fw-bold mb-3 pr-3 pt-3 fontColour1 text-center">
                            Or
                        </h1>
                        <p className='text-center'>
                            You can DM me on socials too. If you prefer a Chat
                        </p>



                        <div className=" "  style={{ marginLeft: '115px'}}>
                            <a href="https://www.linkedin.com/in/sri-prasanth" target={'blank'}>
                                <button className="bg3 mt-3 btn-warning">
                                    <FaLinkedin size={25} /> Message on LinkedIn
                                </button>
                            </a>

                            <br />

                            {/* <button className="bg3 mt-4 btn-warning">
                                    <FaTwitter className='icons'/> DM on Twitter
                                </button> <br /> */}

                            <a href='https://www.instagram.com/alpha_._pilot/' target={'blank'}>
                                <button className="bg3 mt-3 btn-warning">
                                    <FaInstagram size={25} /> Message on Instagram
                                </button>
                            </a>
                        </div>



                    </div>
                </div>



            </div>
        </div>
    )
}

export default ContactMe

