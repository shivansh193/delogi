'use client'
import { useRouter } from 'next/navigation';

const ProductPage = () => {
  const router = useRouter();
  const productId = router.query.productId;

  if (productId) {
    // The productId query parameter is defined
  } else {
    // The productId query parameter is not defined
    return <div>Product ID not found</div>;
  }

  return (
    <div>
      <h1>Product Name: {productName}</h1>
    </div>
  );
};

export default ProductPage;