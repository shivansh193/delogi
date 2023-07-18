'use client'
import { useQRCode } from 'next-qrcode';


const Gen=()=> {
  const { Canvas } = useQRCode();
const productId="Hello"
const stepId="Hello1"
  return (
    <Canvas
      text={`http://delogi/${productId}/${stepId}`}
      options={{
        level: 'M',
        margin: 3,
        scale: 4,
        width: 200,
        color: {
          dark: '#010599FF',
          light: '#FFBF60FF',
        },
      }}
    />
  );
}

export default Gen;