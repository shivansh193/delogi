import Navbar from "../components/navbar/Navbar";
import USERS from "../../test.json";
import ImageCreator from "../components/imageContainer";

const About = () => {
  const userName = USERS[0].products;

  return (
    <div>
      <Navbar />
      <h1>About Us Page</h1>

      <div className="flex justify-center items-center h-screen">
      <ImageCreator />
    </div>
    
    </div>
  );
};

export default About;