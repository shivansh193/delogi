'use client'

import ImageCreator from "../components/imageContainer"
import Navbar from "../components/navbar/Navbar"

const Test = () => {
  return (
    <div>
        <Navbar />
        
        <div className="flex justify-center items-center h-screen"> <ImageCreator/> </div>
        </div>
  )
}

export default Test