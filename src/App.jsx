import { useState } from 'react';
import Nav from './component/Nav';
import Banner from './component/Banner';
import Products from './component/Products';
import Footer from './component/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Nav />
      <Banner />
      <div id="technologies">
        <Products
          selectedProducts={selectedProducts}
          setSelectedProducts={setSelectedProducts}
        />
      </div>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default App;
