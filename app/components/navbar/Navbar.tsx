'use client'
import Link from 'next/link';
import Image from 'next/image';
import * as fcl from "@onflow/fcl"
import { useEffect, useState } from 'react';

fcl.config({
  "accessNode.api": "https://access-testnet.onflow.org",
  "discovery.wallet": "https://fcl-discovery.onflow.org/testnet/authn",
})

interface User {
  loggedIn: boolean;
  addr: string;
}

const Navbar = () => {
  const [user, setUser] = useState<User>({ loggedIn: false, addr: '' });

  useEffect(() => {
    fcl.currentUser().subscribe(setUser);
  }, []);

  const handleLogout = () => {
    fcl.unauthenticate();
  };

  return (
    <nav className="relative bg-yellow-400 rounded-b-lg z-10">
      {/* <div className="absolute inset-0"> */}
      {/* <Image src="/Nav.jpg" alt="Navbar Background" width={1920} height={130}
        objectFit="cover"
        /> */}
      {/* </div> */}
      {/* <div className="relative z-10"> */}
      {/* <div className="flex items-center justify-center"> */}
      {/* </div> */}
      <div className="flex space-x-6 px-4">
        <Link href="/">
          {/* <div className="flex items-center cursor-pointer"> */}
          {/* <div className="w-12 h-12"> */}
          <Image src="/DeLogi.png" alt="Logo" width={100} height={100} />
          {/* </div> */}
          {/* </div> */}
        </Link>
        <div className="flex justify-center items-end space-x-6 w-full">
          <div className="cursor-pointer">
            <Link href="/consumers">
              <span>Consumers</span>
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link href="/organisation">
              <span>Organisation</span>
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link href="/test">
              <span>Test</span>
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link href="/aboutus">
              <span>About Us</span>
            </Link>
          </div>
          <div className="cursor-pointer">
            <Link href="/contactUs">
              <span>Contact Us</span>
            </Link>
          </div>
          <div className="cursor-pointer">
            {/* add a field with user.address */}
            {!user.addr ? (
              <button onClick={fcl.authenticate}>Login</button>
            ) : (
              <>
                <span className="bg-yellow-500 px-6 py-6 rounded-bl-lg">Logged In Address: {user.addr}</span>
                <button onClick={handleLogout} className="bg-yellow-100  px-2 py-6 rounded-br-lg">Logout</button>
              </>
            )}
          </div>
        </div>
      </div>
      {/* </div> */}
    </nav>
  );
};

export default Navbar;