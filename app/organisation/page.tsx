'use client'
import React, { useState } from 'react';
import Navbar from "../components/navbar/Navbar";
import NewOrg from '../newOrg/page';
import ListedOrg from '../listedOrg/[companyName]/page';

const Organisation = () => {
  const [showNewOrg, setShowNewOrg] = useState(false);
  const [showListedOrg, setShowListedOrg] = useState(false);

  const handleNewOrgClick = () => {
    setShowNewOrg(true);
    setShowListedOrg(false);
  };

  const handleExistingClick = () => {
    setShowNewOrg(false);
    setShowListedOrg(true);
  };

  return (
    <div>
      <Navbar />
      <div className="flex justify-center mt-10">
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg mr-4" onClick={handleNewOrgClick}>
          List a new Organisation
        </button>
        <button className="bg-blue-500 text-white px-6 py-3 rounded-lg" onClick={handleExistingClick}>
          Access Existing Organisation
        </button>
      </div>

      <div className="mt-10 bg-gray-200 p-4">
        {showNewOrg && <NewOrg />}
        {showListedOrg && <ListedOrg />}
      </div>
    </div>
  );
};

export default Organisation;
