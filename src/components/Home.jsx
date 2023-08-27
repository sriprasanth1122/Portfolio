function Home() {
    return (
        <section className=" bg1 pt-5 pb-5" id="home">

            <div className="container">

                <div className="row align-items-center">

                    <div className="col-md-6 text-md-start text-center py-6">
                        <h1 className="mb-4 fs-9 fw-bold namefont">Hello,<br /> I'm Sri Prasanth</h1>

                        <p className="mb-6 lead text-secondary">Passionate about implementing and launching new projects. Ability to translate business requirements into
                            technical solutions.
                        </p>

                        <div className="text-center text-md-start">

                            <a className="btn btn-primary me-3 btn-lg"
                                href="#projects" role="button"
                                style={{
                                    backgroundColor: "#f5dcfa",
                                    border: "none",
                                    color: "#91226e",
                                }}
                            >
                                See my work
                            </a>
                            <a className="btn btn me-3 btn-lg"
                                href="#contactme" role="button"
                                style={{
                                    borderColor: '#b1236d',
                                    color: '#91226e',
                                }}
                            >
                                Hire me
                            </a>

                        </div>

                    </div>

                    <div className="col-md-6 text-end">
                        <img
                            className="pt-7 pt-md-0 img-fluid"
                            src="assets/img/home/home.png"
                            style={{
                                // marginLeft: '20px',
                                // borderStyle: 'solid',
                                // borderColor: '#bfe7ff',
                                // borderWidth: '5px',
                                // borderRadius: '40px',
                                // boxShadow: '10px 10px 10px grey'
                            }}
                        />
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Home