function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light sticky-top bg " data-navbar-on-scroll="data-navbar-on-scroll">
            <div className="container">
                <a className="navbar-brand" href="index.html">
                    <img src="assets\img\logo\signature (5).png" height="51" alt="logo" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                    </span>
                </button>
                <div className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item"><a className="nav-link" aria-current="page" href="#home"><h5>Home</h5></a></li>
                        <li className="nav-item"><a className="nav-link" aria-current="page" href="#about"><h5>About</h5></a></li>
                        <li className="nav-item"><a className="nav-link" aria-current="page" href="#skills"><h5>Skills</h5></a></li>
                        <li className="nav-item"><a className="nav-link" aria-current="page" href="#projects"><h5>Projects</h5></a></li>
                    </ul>
                    <div className="d-flex ms-lg-4">
                        <a
                            className="btn btn-danger"
                            href="#contactme"
                            style={{
                                backgroundColor: '#1f5aaa',
                                border:'none',
                            }}
                        >
                            Contact me
                        </a>

                        <a
                            className="btn btn-primary ms-3"
                            href="#!"
                            style={{
                                backgroundColor:'#a1236d',
                                border:'none',
                            }}
                        >
                            Resume
                        </a>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default NavBar