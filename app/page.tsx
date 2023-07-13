import Navbar from "./components/navbar/Navbar";
import QrScanner from "./components/qrScanner";

const Home = () => {
  return (
    <div>
      <Navbar /> 
      {/* <div className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('/background.jpg')" }}> */}
      <h1 className="text-black text-4xl font-bold p-10 ">Welcome to the Delogi Next.js App!</h1>

      < QrScanner/>



    </div>
    // </div>
  );
};

export default Home;