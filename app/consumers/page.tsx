import Navbar from "../components/navbar/Navbar";
import QrScanner from "../components/qrScanner";

const Consumers = () => {
  return (
    <div>
      <Navbar />
  
      <div className=" my-12 mx-12 "> <QrScanner/></div>
      
    </div>
  );
};

export default Consumers;