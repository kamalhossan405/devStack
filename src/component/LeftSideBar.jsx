const LeftSideBar = ({ products = [] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="p-4 border rounded-xl bg-white shadow-sm">
          <p className="font-bold">{product.name}</p>
        </div>
      ))}
    </div>
  );
};

export default LeftSideBar;
