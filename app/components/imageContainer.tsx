'use client'
import { useRef, useState } from 'react';
import html2canvas from 'html2canvas';

const ImageCreator = ({ handleImageSave }) => {
  const imageRef = useRef(null);
  const [generatedImage, setGeneratedImage] = useState('');

  const handlePrint = () => {
    const imageContainer = imageRef.current;

    html2canvas(imageContainer).then((canvas) => {
      const dataUrl = canvas.toDataURL('image/jpeg');

      setGeneratedImage(dataUrl);
      handleImageSave(dataUrl);
    });
  };

  return (
    <div>
      <div ref={imageRef} className="relative">
        <img src="Navbar.jpg" alt="Background Image" />

        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold">
          Dairy Milk
        </h1>
      </div>

      <button onClick={handlePrint} className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4">
        Create Image
      </button>
    </div>
  );
};

export default ImageCreator;
