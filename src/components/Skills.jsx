function Skill() {
    return (
        <div className=" mt-2 pt-6 pb-8 bg1">
            <div className="bg-holder z-index--1 bottom-0 d-none d-lg-block"
                style={{ backgroundImage: "url(assets/img/superhero/shape.png)", opacity: .5 }}>
            </div>

            <div className="container" id="skills">

                <h1 className="fs-9 fw-bold mb-8 text-center gradient">
                    Skill Sets
                </h1>

                <div className="row">

                    <div className="col-lg-2 col-sm-6 mb-3 text-center">
                        <img className="mb-3 ms-n3" src="assets/img/skills/html-5.png" width="110" alt="Feature" />
                        <h4 className="mb-3">HTML 5</h4>
                    </div>

                    <div className="col-lg-2 col-sm-6 mb-3 text-center">
                        <img className="mb-3 ms-n3" src="assets/img/skills/css-3.png" width="110" alt="Feature" />
                        <h4 className="mb-3">CSS 3</h4>
                    </div>

                    <div className="col-lg-2 col-sm-6 mb-3 text-center">
                        <img className="mb-3 ms-n3" src="assets/img/skills/bootstrap.png" width="110" alt="Feature" />
                        <h4 className="mb-3">Bootstrap</h4>
                    </div>

                    <div className="col-lg-2 col-sm-6 mb-3 text-center">
                        <img className="mb-3 ms-n3" src="assets/img/skills/js.png" width="110" alt="Feature" />
                        <h4 className="mb-3">JavaScript</h4>
                    </div>

                    <div className="col-lg-2 col-sm-6 mb-3 text-center">
                        <img className="mb-3 ms-n3" src="assets/img/skills/atom.png" width="110" alt="Feature" />
                        <h4 className="mb-3">React JS</h4>
                    </div>

                    <div className="col-lg-2 col-sm-6 mb-3 mt-4 text-center">
                        <img className="mb-3 ms-n3" src="assets/img/skills/nodejs.png" width="140" alt="Feature" />
                        <h4 className="mb-3">Node JS</h4>
                    </div>


                    <div className="col-lg-2 col-sm-6 mb-3 text-center">
                        <img className="mb-3 ms-n3" src="assets/img/skills/redux.png" width="110" alt="Feature" />
                        <h4 className="mb-3">Redux</h4>
                    </div>

                    <div className="col-lg-2 col-sm-6 mb-3 text-center">
                        <img className="mb-3 ms-n3" src="assets/img/skills/mongodb.png" width="110" alt="Feature" />
                        <h4 className="mb-3">MongoDB</h4>
                    </div>

                    <div className="col-lg-2 col-sm-6 mb-3 text-center">
                        <img className="mb-3 ms-n3" src="assets/img/skills/merge.png" width="110" alt="Feature" />
                        <h4 className="mb-3">Git</h4>
                    </div>

                    <div className="col-lg-2 col-sm-6 mb-3 text-center">
                        <img className="mb-3 ms-n3" src="assets/img/skills/github.png" width="110" alt="Feature" />
                        <h4 className="mb-3">GitHub</h4>
                    </div>

                    <div className="col-lg-2 col-sm-6 mb-3 text-center">
                        <img className="mb-3 ms-n3" src="assets/img/skills/netlify.png" width="110" alt="Feature" />
                        <h4 className="mb-3">Netlify</h4>
                    </div>

                    <div className="col-lg-2 col-sm-6 mb-3 text-center">
                        <img className="mb-3 ms-n3" src="assets/img/skills/visual-studio.png" width="110" alt="Feature" />
                        <h4 className="mb-3">Visual studio</h4>
                    </div>
                </div>

                {/* <div className="text-center"><a className="btn btn-warning" href="#!" role="button">SIGN UP NOW</a></div> */}
            </div>

        </div>

    )
}

{/* <div className="container">

<h1 className="fs-9 fw-bold mb-5 text-center">
    Skill Sets
</h1>

<div className="row">

    <div className='col-lg-6'>
        <div className="row">
            <div className="col-lg-4 col-sm-6 mb-3 text-center">
                <img className="mb-3 ms-n3" src="assets/img/skills/html-5.png" width="110" alt="Feature" />
                <h4 className="mb-3">HTML 5</h4>
            </div>

            <div className="col-lg-4 col-sm-6 mb-3 text-center">
                <img className="mb-3 ms-n3" src="assets/img/skills/css-3.png" width="110" alt="Feature" />
                <h4 className="mb-3">CSS 3</h4>
            </div>

            <div className="col-lg-4 col-sm-6 mb-3 text-center">
                <img className="mb-3 ms-n3" src="assets/img/skills/bootstrap.png" width="110" alt="Feature" />
                <h4 className="mb-3">Bootstrap</h4>
            </div>

            <div className="col-lg-4 col-sm-6 mb-3 text-center">
                <img className="mb-3 ms-n3" src="assets/img/skills/js.png" width="110" alt="Feature" />
                <h4 className="mb-3">JavaScript</h4>
            </div>

            <div className="col-lg-4 col-sm-6 mb-3 text-center">
                <img className="mb-3 ms-n3" src="assets/img/skills/atom.png" width="110" alt="Feature" />
                <h4 className="mb-3">React JS</h4>
            </div>

            <div className="col-lg-4 col-sm-6 mb-3 mt-4 text-center">
                <img className="mb-3 ms-n3" src="assets/img/skills/nodejs.png" width="140" alt="Feature" />
                <h4 className="mb-3">Node JS</h4>
            </div>
        </div>
    </div>

    <div className='col-lg-6'>

        <img className="img-fluid" src="assets/img/skills/skill.jpg" alt="" />

    </div>

</div>
<div className="row">
    <div className="col-lg-2 col-sm-6 mb-3 text-center">
        <img className="mb-3 ms-n3" src="assets/img/skills/redux.png" width="110" alt="Feature" />
        <h4 className="mb-3">Redux</h4>
    </div>

    <div className="col-lg-2 col-sm-6 mb-3 text-center">
        <img className="mb-3 ms-n3" src="assets/img/skills/mongodb.png" width="110" alt="Feature" />
        <h4 className="mb-3">MongoDB</h4>
    </div>

    <div className="col-lg-2 col-sm-6 mb-3 text-center">
        <img className="mb-3 ms-n3" src="assets/img/skills/merge.png" width="110" alt="Feature" />
        <h4 className="mb-3">Git</h4>
    </div>

    <div className="col-lg-2 col-sm-6 mb-3 text-center">
        <img className="mb-3 ms-n3" src="assets/img/skills/github.png" width="110" alt="Feature" />
        <h4 className="mb-3">GitHub</h4>
    </div>

    <div className="col-lg-2 col-sm-6 mb-3 text-center">
        <img className="mb-3 ms-n3" src="assets/img/skills/netlify.png" width="110" alt="Feature" />
        <h4 className="mb-3">Netlify</h4>
    </div>

    <div className="col-lg-2 col-sm-6 mb-3 text-center">
        <img className="mb-3 ms-n3" src="assets/img/skills/visual-studio.png" width="110" alt="Feature" />
        <h4 className="mb-3">Visual studio</h4>
    </div>
</div>

<div className="text-center"><a className="btn btn-warning" href="#!" role="button">SIGN UP NOW</a></div>

</div> */}

export default Skill




{/* <div className="container">

    <h1 className="fs-9 fw-bold mb-5 text-center">
        Skill Sets
    </h1>

    <div className="row">

        <div className="col-lg-2 col-sm-6 mb-3 text-center">
            <img className="mb-3 ms-n3" src="assets/img/skills/html-5.png" width="110" alt="Feature" />
            <h4 className="mb-3">HTML 5</h4>
        </div>

        <div className="col-lg-2 col-sm-6 mb-3 text-center">
            <img className="mb-3 ms-n3" src="assets/img/skills/css-3.png" width="110" alt="Feature" />
            <h4 className="mb-3">CSS 3</h4>
        </div>

        <div className="col-lg-2 col-sm-6 mb-3 text-center">
            <img className="mb-3 ms-n3" src="assets/img/skills/bootstrap.png" width="110" alt="Feature" />
            <h4 className="mb-3">Bootstrap</h4>
        </div>

        <div className="col-lg-2 col-sm-6 mb-3 text-center">
            <img className="mb-3 ms-n3" src="assets/img/skills/js.png" width="110" alt="Feature" />
            <h4 className="mb-3">JavaScript</h4>
        </div>

        <div className="col-lg-2 col-sm-6 mb-3 text-center">
            <img className="mb-3 ms-n3" src="assets/img/skills/atom.png" width="110" alt="Feature" />
            <h4 className="mb-3">React JS</h4>
        </div>

        <div className="col-lg-2 col-sm-6 mb-3 mt-4 text-center">
            <img className="mb-3 ms-n3" src="assets/img/skills/nodejs.png" width="140" alt="Feature" />
            <h4 className="mb-3">Node JS</h4>
        </div>


        <div className="col-lg-2 col-sm-6 mb-3 text-center">
            <img className="mb-3 ms-n3" src="assets/img/skills/redux.png" width="110" alt="Feature" />
            <h4 className="mb-3">Redux</h4>
        </div>

        <div className="col-lg-2 col-sm-6 mb-3 text-center">
            <img className="mb-3 ms-n3" src="assets/img/skills/mongodb.png" width="110" alt="Feature" />
            <h4 className="mb-3">MongoDB</h4>
        </div>

        <div className="col-lg-2 col-sm-6 mb-3 text-center">
            <img className="mb-3 ms-n3" src="assets/img/skills/merge.png" width="110" alt="Feature" />
            <h4 className="mb-3">Git</h4>
        </div>

        <div className="col-lg-2 col-sm-6 mb-3 text-center">
            <img className="mb-3 ms-n3" src="assets/img/skills/github.png" width="110" alt="Feature" />
            <h4 className="mb-3">GitHub</h4>
        </div>

        <div className="col-lg-2 col-sm-6 mb-3 text-center">
            <img className="mb-3 ms-n3" src="assets/img/skills/netlify.png" width="110" alt="Feature" />
            <h4 className="mb-3">Netlify</h4>
        </div>

        <div className="col-lg-2 col-sm-6 mb-3 text-center">
            <img className="mb-3 ms-n3" src="assets/img/skills/visual-studio.png" width="110" alt="Feature" />
            <h4 className="mb-3">Visual studio</h4>
        </div>
    </div>

    <div className="text-center"><a className="btn btn-warning" href="#!" role="button">SIGN UP NOW</a></div>
</div> */}

{/* <div className="col-lg-2 mb-3 text-center"></div> */ }

