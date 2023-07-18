import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import QrScanner from "./components/qrScanner";
import Image from "next/image";
import ContactInfo from "./components/contactInfo";

const Home = () => {

  return (
    <div>
      <Navbar />
      <h1 className="text-black text-4xl font-bold p-10 my-20 z-10">Welcome to the Delogi</h1>

      <div className="z-0">
        <Image
          src="/Navbar.jpg"
          alt="Banner"
          layout="responsive"
          width={1920}
          height={1080}
          objectFit="cover"
        />
      </div>



      <div className="w-50 h-200 "> < QrScanner /> </div>


      < ContactInfo />





    </div>

  );
};

export default Home;