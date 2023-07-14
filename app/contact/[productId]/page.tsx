import { useRouter, usePageParams } from 'next/navigation';

const ProductPage = () => {
    const router = useRouter();
    const { getParam } = usePageParams();
  
    const productId = getParam('productId');

  // Replace this with your actual data fetching logic
  const getProductById = (productId: string) => {
    // Simulating data fetching with the provided test JSON data
    const jsonData = {
      username: 'Rohan',
      companyName: 'Cadbury',
      products: [
        { name: 'Dairy Milk', productId: '001' },
        { name: 'DM Silk', productId: '002' },
      ],
    };

    const product = jsonData.products.find((p) => p.productId === productId);

    return product ? product.name : 'Product Not Found';
  };

  const productName = getProductById(productId as string);

  return (
    <div>
      <h1>Product Name: {productName}</h1>
    </div>
  );
};

export default ProductPage;
