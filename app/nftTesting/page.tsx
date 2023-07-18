'use client'
import Navbar from "../components/navbar/Navbar";
import USERS from "../../test.json";
import ImageCreator from "../components/imageContainer";

import * as fcl from "@onflow/fcl"
import * as t from "@onflow/types"
import {create} from 'ipfs-http-client';
import { useState } from "react";
import axios from "axios";


const About = () => {


  const [nameOfNFT, setNameOfNFT] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const[hash, setHash] = useState("");
  
  const[list, setList]=useState([])
  var newArray: any[]=[]
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
         console.log(list)
         newArray=list.append(hash)
            console.log(newArray)
        


        } catch (error) {
            console.log("Error sending File to IPFS: ")
            console.log(error)
        }
    }
}

  async function getList() {

    const result = await fcl.query({
      cadence: `
      import StepsListing from 0x01

      pub fun main(): [String]{
        return StepsListing.showArray()
      }
      `,
      args: (arg, t) => []
    });

    setList(result);
  }
  
  async function changeArray() {
    const transactionId = await fcl.mutate({
      cadence: `
      import StepsListing from 0x01

      transaction(step: [String]) {
      
        prepare(acct: AuthAccount) {}
      
        execute {
          StepsListing.updateArray(_step: step)
        }
      }
      
      `,
      args: (arg, t) => [
        arg(newArray, t.Array)
      ],
      proposer: fcl.authz,
      payer: fcl.authz,
      authorizations: [fcl.authz],
      limit: 999
    });

    console.log('Transaction Id', transactionId);
  }


  
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



