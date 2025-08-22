"use client";
import { useEffect, useState } from "react";
import { getProducts } from "@/services/productService";
import ProductCard from "@/components/products/productsInfo/ProductCard";
import ProductModalCard from "@/components/products/productsInfo/ProductModalCard";

export default function ProductPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProductModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const products = await getProducts();
        setData(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <p className="p-10 text-center text-gray-500">Loading products...</p>
    );
  }

  return (
    <>
      <ProductModalCard
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        product={selectedProduct}
      />

      <div className="bg-gray-50">
        <div className="lg:py-16 py-10 mx-auto max-w-screen-2xl px-3 sm:px-10">
          <div className="mb-10 flex justify-center">
            <div className="text-center w-full lg:w-2/5">
              <h2 className="text-xl lg:text-4xl mb-2 font-semibold text-black">
                Our Products
              </h2>
              <p className="text-base font-sans text-gray-600 leading-6 pb-5">
                See all our popular products this week. Choose your daily needs
                products from this list and get some special offers with free
                shipping.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-6 gap-2 md:gap-3 lg:gap-3">
            {data.map((item) => (
              <ProductCard
                key={item.id}
                title={item.title}
                price={item.price}
                stock={item.rating.count}
                imageUrl={item.image}
                onClick={() => openProductModal(item)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
