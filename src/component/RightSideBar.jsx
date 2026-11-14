const RightSideBar = ({ selectedProducts = [] }) => {
  return (
    <div className="p-4 border rounded-xl bg-white shadow-sm">
      <h2 className="text-xl font-bold">Your Stack</h2>
      <p className="text-sm text-gray-500">{selectedProducts.length} Selected</p>
    </div>
  );
};

export default RightSideBar;
