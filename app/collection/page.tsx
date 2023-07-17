'use client'

import { useEffect, useState } from "react";
import * as fcl from "@onflow/fcl";
import * as t from "@onflow/types";
import {getNFTsScript} from "../../cadence/scripts/get_nfts";
fcl.config({
    "accessNode.api": "https://access-testnet.onflow.org",
    "discovery.wallet": "https://fcl-discovery.onflow.org/testnet/authn",
    
  })
const Collections = () => {
    const [nfts, setNFTs] = useState([]);

    useEffect(() => {
      getUserNFTs();
    }, [])
  
    const getUserNFTs = async () => {
        const result = await fcl.send([
            fcl.script(getNFTsScript),
            fcl.args([
                fcl.arg("0x03d237bb85924135", t.Address)
            ])
        ]).then(fcl.decode);
  
        console.log(result);
        setNFTs(result);
    }

  return (
    <div style={{backgroundColor: 'lightgreen'}}>
    {nfts.map(nft => (
        <div key={nft.id}>
            <h1>{nft.id}</h1>
            <img style={{width: "100px"}} src={`https://gateway.pinata.cloud/ipfs/${nft.ipfsHash}`} />
            
        </div>
    ))}
  </div>
  );
};

export default Collections;
