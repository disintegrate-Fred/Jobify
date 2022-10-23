import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            This is a place for the youth to track ongoing job applications.
            Creating a job listing website has never been easier with Jobify.
            Getting organized is the first step to success.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="jobify" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
