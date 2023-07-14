import Navbar from "../components/navbar/Navbar";
import USERS from "../../test.json";

const About = () => {
  const userName = USERS[0].products;

  return (
    <div>
      <Navbar />
      <h1>About Us Page</h1>
    
    </div>
  );
};

export default About;