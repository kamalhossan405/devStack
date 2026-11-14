import { useState, useEffect } from 'react';
import LeftSideBar from './LeftSideBar';
import RightSideBar from './RightSideBar';

const Products = ({ selectedProducts, setSelectedProducts }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/product.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to load technologies');
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        setLoading(false);
      });
  }, []);

  return (
    <section className="py-12 bg-slate-50/50">
      <div className="container mx-auto px-4 mb-8">
        <h1 className="font-black text-4xl text-slate-900">
          Explore the <span className="text-blue-600">Technologies</span>
        </h1>
        <p className="font-light text-xl text-gray-500 mt-3">
          Pick technologies across categories to build your ideal stack.
        </p>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 xl:col-span-9">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <span className="loading loading-spinner loading-lg text-primary"></span>
            </div>
          ) : (
            <LeftSideBar
              products={products}
              selectedProducts={selectedProducts}
              setSelectedProducts={setSelectedProducts}
            />
          )}
        </div>

        <div className="lg:col-span-4 xl:col-span-3">
          <RightSideBar
            selectedProducts={selectedProducts}
            setSelectedProducts={setSelectedProducts}
          />
        </div>
      </div>
    </section>
  );
};

export default Products;
