'use client'
import { useState } from 'react';

const ListedOrg = () => {
  const [showExistingProduct, setShowExistingProduct] = useState(false);
  const [showAddProduct, setShowAddProduct] = useState(false);

  const handleExistingProductClick = () => {
    setShowExistingProduct(true);
    setShowAddProduct(false);
  };

  const handleAddProductClick = () => {
    setShowExistingProduct(false);
    setShowAddProduct(true);
  };

  return (
    <div>
      <div className="flex justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4"
          onClick={handleExistingProductClick}
        >
          Access Existing Product
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleAddProductClick}
        >
          Add New Product
        </button>
      </div>

      {showExistingProduct && <div className="bg-black h-40 mt-4"></div>}

      {showAddProduct && (
        <div className="flex justify-center mt-4">
          <form className="w-full max-w-sm bg-white shadow-md rounded px-8 pt-6 pb-8">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="productName">
                Product Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="productName"
                type="text"
                placeholder="Enter product name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="startDate">
                Start Date
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="startDate"
                type="text"
                placeholder="Enter start date"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="numOfSteps">
                Number of Steps
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="numOfSteps"
                type="number"
                placeholder="Enter number of steps"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ListedOrg;
