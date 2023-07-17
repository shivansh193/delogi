'use client'
import Navbar from "../components/navbar/Navbar";
import USERS from "../../test.json";
import ImageCreator from "../components/imageContainer";
import {mintNFT} from "../../cadence/transactions/mint_nft"
import * as fcl from "@onflow/fcl"
import * as t from "@onflow/types"
import {create} from 'ipfs-http-client';
import { useState } from "react";
import axios from "axios";
const client = create("https://ipfs.infura.io:5001/api/v0");

const About = () => {
  const userName = USERS[0].products;

  const [nameOfNFT, setNameOfNFT] = useState('');
  const [file, setFile] = useState<File | null>(null);


  const mint = async () => {

    if (file) {
        try {

            const formData = new FormData();
            formData.append("file", file);

            const resFile = await axios({
                method: "post",
                url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
                data: formData,
                headers: {
                    'pinata_api_key': "ec0dedbd0b82050c6f4a",
                    'pinata_secret_api_key': "40942e9ea54dd8c7d4ad6a180fad26069cbf174240cb6cdb4d9687d724d14475",
                    "Content-Type": "multipart/form-data"
                },
            });

        const hash = `ipfs://${resFile.data.IpfsHash}`;
         console.log(hash);
         console.log(`ipfs://${resFile.data.IpfsHash}`)
         const transactionId = await fcl.send([
          fcl.transaction(mintNFT),
          fcl.args([
            fcl.arg(hash, t.String),
            fcl.arg(nameOfNFT, t.String)
          ]),
          fcl.payer(fcl.authz),
          fcl.proposer(fcl.authz),
          fcl.authorizations([fcl.authz]),
          fcl.limit(9999)
        ]).then(fcl.decode);
    
        console.log(transactionId);
        return fcl.tx(transactionId).onceSealed(); 
//Take a look at your Pinata Pinned section, you will see a new file added to you list.   



        } catch (error) {
            console.log("Error sending File to IPFS: ")
            console.log(error)
        }
    }
}
  // const mint = async () => {

  //   try {
  //     const added = await client.add(file)
  //     const hash = added.path;

      
  //   } catch(error) {
  //     console.log('Error uploading file: ', error);
  //   }
  // }



  return (
    <div>
      <Navbar />
      <h1>About Us Page</h1>

      <div className="flex justify-center items-center h-screen">
      {/* <ImageCreator /> */}
    </div>

    <div>
        <input type="text" onChange={(e) => setNameOfNFT(e.target.value)} />
        <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />

        <button onClick={() => mint()}>Mint</button>
      </div>


    
    </div>
  );
};

export default About;



// 