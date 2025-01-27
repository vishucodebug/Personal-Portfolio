import "./PerProject.css";

import HTML from "../../assets/images/html.png";
import CSS from "../../assets/images/css.png";
import JS from "../../assets/images/js.png";
import Bootstrap from "../../assets/images/bootstrap.png";
import Nodejs from "../../assets/images/nodejs.png";
import EJS from "../../assets/images/icons8-ejs-480.png";
import Express from "../../assets/images/icons8-express-js-512.png";
import Mongo from "../../assets/images/mongo-db.png";
import MySQL from "../../assets/images/icons8-mysql-480.png";
import NotesAppImg from "../../assets/images/NotesAppImg.png";
import StayAway from "../../assets/images/StayAwayCover.png";

import SmallTechTools from "./SmallTechTools.jsx";
import ProjectImg from "../../assets/images/project-img.png";

function PerProject() {
  return (
    <div className=" PersProject">
      <div className="PerProject-card">
        <div className="img1">
          <img src={StayAway} alt="StayAway Img" loading="lazy" />
        </div>
        <div className="content">
          <h2>StayAway</h2>
          <p>Worked on</p>
          <p>
            <span>Front-end</span> <span>Back-end</span>
            <span>Database</span>
          </p>
          <p>Technology which I have used</p>
          <div className="SmallCards">
            <SmallTechTools img={HTML} title="HTML" />
            <SmallTechTools img={CSS} title="CSS" />
            <SmallTechTools img={Bootstrap} title="Bootstrap" />
            <SmallTechTools img={JS} title="JS" />
            <SmallTechTools img={Nodejs} title="Nodejs" />
            <SmallTechTools img={Express} title="Express" />
            <SmallTechTools img={EJS} title="EJS" />
            <SmallTechTools img={Mongo} title="MongoDB" />"
          </div>

          <div>
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal1"
            >
              Project Details
              <i className="fa-solid fa-angle-right"></i>
            </button>
            {/* <!-- Modal --> */}
            <div
              className="modal fade  "
              id="exampleModal1"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Project Details
                    </h1>
                  </div>
                  <div className="modal-body">
                    <div>
                      <h3>
                        A platform for listing and managing accommodations with
                        robust user interaction and secure features.
                      </h3>
                      <ul>
                        <li>
                          <strong>Owner Management</strong>
                          <ul>
                            <li>
                              Create, edit, and delete listings using Node.js
                              and Express.js.
                            </li>
                            <li>Data stored and retrieved from MongoDB.</li>
                          </ul>
                        </li>
                        <li>
                          <strong>User Interaction:</strong>
                          <ul>
                            <li>Submit reviews stored alongside listings.</li>
                            <li>
                              Search listings by location using MongoDB queries.
                            </li>
                            <li>
                              Predefined location cards trigger JavaScript to
                              fetch filtered results.
                            </li>
                            <li>
                              Real-time notifications for new reviews or
                              listings.
                            </li>
                          </ul>
                        </li>

                        <li>
                          Built using{" "}
                          <strong>
                            HTML, CSS, Bootstrap, Javascript, EJS{" "}
                          </strong>{" "}
                          (frontend), <strong>Node.js, Express</strong>{" "}
                          (backend), & <strong> MongoDB</strong> (database) also
                          various inbulit packages.
                        </li>
                        <li>
                          <strong>
                            Secure Authentication and Authorization:
                          </strong>
                          <ul>
                            <li>Server-side and client-side implementation.</li>
                            <li>Secure login and registration pages.</li>
                          </ul>
                        </li>
                        <li>
                          <strong>Error Handling:</strong>
                          <ul>
                            <li>
                              Middleware for error management using Node.js and
                              Express.js.
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

            <a href="https://stayaway-rvf3.onrender.com/home">
              Live
              <i className="fa-solid fa-angle-right"></i>
            </a>
            <a href="https://github.com/vishucodebug/StayAway/tree/main">
              Gitub
              <i className="fa-solid fa-angle-right"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="PerProject-card">
        <div className="img2">
          <img src={NotesAppImg} alt="Notes Application Image" loading="lazy" />
        </div>
        <div className="content">
          <h2>Notes Application</h2>
          <p>Worked on</p>
          <p>
            <span>Front-end</span> <span>Back-end</span>
            <span>Database</span>
          </p>
          <p>Technology which I have used</p>
          <div className="SmallCards">
            <SmallTechTools img={HTML} title="HTML" />
            <SmallTechTools img={CSS} title="CSS" />
            <SmallTechTools img={Bootstrap} title="Bootstrap" />
            <SmallTechTools img={JS} title="JS" />
            <SmallTechTools img={Nodejs} title="Nodejs" />
            <SmallTechTools img={Express} title="Express" />
            <SmallTechTools img={EJS} title="EJS" />
            <SmallTechTools img={MySQL} title="MySQL" />
          </div>

          <div>
            <button
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal2"
            >
              Project Details
              <i className="fa-solid fa-angle-right"></i>
            </button>
            {/* <!-- Modal --> */}
            <div
              className="modal fade  "
              id="exampleModal2"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">
                      Project Details
                    </h1>
                  </div>
                  <div className="modal-body">
                    <div>
                      <h3>
                        A responsive web app for creating, managing, and
                        organizing notes with ease.
                      </h3>
                      <ul>
                        <li>
                          <strong>Perform CRUD operations:</strong> Create,
                          Read, <strong>Search</strong>, and Delete notes.
                        </li>
                        <li>
                          Fully responsive design for seamless use across
                          devices.
                        </li>
                        <li>
                          Built using{" "}
                          <strong>HTML, CSS, Bootstrap, EJS </strong>{" "}
                          (frontend), <strong>Node.js, Express</strong>{" "}
                          (backend), & <strong> MySQL</strong> (database).
                        </li>
                        <li>
                          <strong> Future Enhancements:</strong>
                          <ul>
                            <li>
                              Implement user authentication for personalized
                              experiences.
                            </li>
                            <li>
                              Add tags/categories for better note organization.
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
            <a
              href="https://notes-application-z6p9.onrender.com"
              target="_blank"
            >
              Live
              <i className="fa-solid fa-angle-right"></i>
            </a>
            <a
              href="https://github.com/vishucodebug/Notes_Application"
              target="_blanlk"
            >
              Gitub
              <i className="fa-solid fa-angle-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerProject;
