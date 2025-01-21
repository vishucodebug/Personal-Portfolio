import "./ComProject.css";

import HTML from "../../assets/images/html.png";
import CSS from "../../assets/images/css.png";
import JS from "../../assets/images/js.png";
import Bootstrap from "../../assets/images/bootstrap.png";

import SmallTechTools from "./SmallTechTools.jsx";

import Ezybite from "../../assets/images/EzyBiteImg.png";
import RoadMech from "../../assets/images/RoadMech247.png";

function ComProject() {
  return (
    <div className=" ComProject">
      {/* First Div  */}
      <div className="Project-card">
        <div className="img1">
          <img src={Ezybite} alt="Image" />
        </div>
        <div className="content">
          <h2>EzyBite</h2>
          <p>Worked on</p>
          <p>
            <span>Website</span> <span>Admin</span>
          </p>
          <p>Technology which I have used</p>
          <div className="SmallCards">
            <SmallTechTools img={HTML} title="HTML" />
            <SmallTechTools img={CSS} title="CSS" />
            <SmallTechTools img={Bootstrap} title="Bootstrap" />
            <SmallTechTools img={JS} title="JS" />

            {/* <SmallTechTools img={Nodejs} title="Nodejs" />
          <SmallTechTools img={Express} title="Express" />
          <SmallTechTools img={EJS} title="EJS" />
          <SmallTechTools img={Mongo} title="Mongo" />" */}
          </div>

          <div className="goto">
            <a href="http://www.ezybite.com/How-It-Work" target="_blank">
              Go to Website
              <i className="fa-solid fa-angle-right"></i>
            </a>

            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              My Role
              <i className="fa-solid fa-angle-right"></i>
            </button>
            {/* <!-- Modal --> */}
            <div
              className="modal fade  "
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      My Role
                    </h1>
                  </div>
                  <div className="modal-body">
                    <div>
                      <h3>
                        Designed and developed web pages using Figma, HTML, CSS,
                        JavaScript, and Bootstrap.
                      </h3>
                      <ul>
                        <li>
                          <strong>Key Responsibilities</strong>
                          <ul>
                            <li>
                              <strong>UI/UX Design : </strong> Created
                              responsive designs in Figma.
                            </li>
                            <li>
                              <strong>Frontend Development : </strong>
                              Built web pages with HTML, CSS, JavaScript, and
                              Bootstrap.
                            </li>
                            <li>
                              <strong> Integration : </strong>
                              Worked with backend developers to integrate the
                              frontend.
                            </li>
                          </ul>
                        </li>
                        <li>
                          <strong>Skills Used</strong>
                          <ul>
                            <li>Figma, HTML, CSS, JavaScript, Bootstrap.</li>
                          </ul>
                        </li>
                        <li>
                          <strong>Outcome</strong>
                          <ul>
                            <li>
                              Delivered high-quality, pixel-perfect, and fully
                              responsive web pages, ensuring seamless
                              integration with backend functionalities for
                              optimal performance and user experience.
                            </li>
                          </ul>
                          
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Second Div  */}
      <div className="Project-card">
        <div className="img2">
          <img src={RoadMech} alt="Image" />
        </div>
        <div className="content">
          <h2>RoadMech24*7</h2>
          <p>Worked on</p>
          <p>
            <span>Website</span> <span>Admin</span>
          </p>
          <p>Technology which I have used</p>
          <div className="SmallCards">
            <SmallTechTools img={HTML} title="HTML" />
            <SmallTechTools img={CSS} title="CSS" />
            <SmallTechTools img={Bootstrap} title="Bootstrap" />
            <SmallTechTools img={JS} title="JS" />

            {/* <SmallTechTools img={Nodejs} title="Nodejs" />
          <SmallTechTools img={Express} title="Express" />
          <SmallTechTools img={EJS} title="EJS" />
          <SmallTechTools img={Mongo} title="Mongo" />" */}
          </div>

          <div className="goto">
            <a href="https://roadmech24x7.com" target="_blank">
              {" "}
              Go to Website
              <i className="fa-solid fa-angle-right"></i>
            </a>
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              My Role
              <i className="fa-solid fa-angle-right"></i>
            </button>
            {/* <!-- Modal --> */}
            <div
              className="modal fade  "
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      My Role
                    </h1>
                  </div>
                  <div className="modal-body">
                    <div>
                      <ul>
                        <li>
                          <i className="fa-brands fa-airbnb fa-rotate-90"></i>
                          Hello vishal maurya
                        </li>
                        <li>
                          <i className="fa-brands fa-airbnb fa-rotate-90"></i>
                          Hello vishal maurya
                        </li>
                        <li>
                          <i className="fa-brands fa-airbnb fa-rotate-90"></i>
                          Hello vishal maurya
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComProject;
