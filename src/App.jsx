import Nav from "./Component/Navbar.jsx";
import Sec1 from "./Component/Sec-1.jsx";
import Sec2 from "./Component/Sec-2.jsx";
import Sec3Services from "./Component/Sec-3-service.jsx";
import Sec4About from "./Component/Sec-4-about.jsx";
import Sec5Hobbies from "./Component/Sec-5-hobbies.jsx";
import Sec6Technology from "./Component/Sec-6-technology.jsx";
import Sec7Experience from "./Component/Sec-7-experience.jsx";
import Sec8Education from "./Component/Sec-8-education.jsx";
import Sec9Project from "./Component/Sec-9-Project.jsx";
import Sec10Testimonials from "./Component/Sec-10-Testimonials.jsx";
import Sec11ConnectWithMe from "./Component/Sec-11-ConnectWithMe.jsx";
import Footer from "./Component/footer.jsx";

import "./App.css";

function App() {
  return (
    <div className="mainDiv">
      <Nav />
      <Sec1 />
      <Sec2 />
      <Sec3Services />
      <Sec4About />
      <Sec5Hobbies />
      <Sec6Technology />
      <Sec7Experience />
      <Sec8Education />
      <Sec9Project />
      {/* <Sec10Testimonials /> */}
      <Sec11ConnectWithMe />
      <Footer />
    </div>
  );
}

export default App;
