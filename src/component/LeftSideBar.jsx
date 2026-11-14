import { toast } from 'react-toastify';

const LeftSideBar = ({ products = [], selectedProducts = [], setSelectedProducts }) => {
  const handleAddToStack = (product) => {
    const isAlreadySelected = selectedProducts.some((item) => item.id === product.id);

    if (isAlreadySelected) {
      toast.warning(`${product.name} is already in your stack!`);
      return;
    }

    setSelectedProducts([...selectedProducts, product]);
    toast.success(`${product.name} added to stack!`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {products.map((product) => {
        const isSelected = selectedProducts.some((item) => item.id === product.id);

        return (
          <div
            key={product.id}
            className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl"
          >
            <div>
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-50 p-3 ring-1 ring-slate-200 transition group-hover:bg-cyan-50">
                  <img
                    src={product.icon}
                    alt={product.name}
                    className="h-10 w-10 object-contain"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/40?text=Tech';
                    }}
                  />
                </div>

                <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold text-cyan-600 border border-cyan-100">
                  {product.badge}
                </span>
              </div>

              <div className="mt-5">
                <h2 className="text-2xl font-bold text-slate-900 transition group-hover:text-cyan-600">
                  {product.name}
                </h2>
                <p className="mt-2 min-h-[72px] text-sm leading-6 text-slate-500">
                  {product.description}
                </p>
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2 border-y border-slate-100 py-3 text-xs sm:text-sm font-semibold text-slate-700">
                <div className="flex items-center">
                  <span className="truncate">{product.category}</span>
                </div>
                <div className="flex items-center justify-center text-center">
                  <span className="truncate">{product.difficulty}</span>
                </div>
                <div className="flex items-center justify-end gap-1 text-amber-500 font-bold">
                  <span>★</span>
                  <span className="text-slate-800">{product.rating}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-2">
              <button
                type="button"
                onClick={() => handleAddToStack(product)}
                disabled={isSelected}
                className={`w-full py-2.5 px-4 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-slate-100 text-slate-400 cursor-not-allowed border border-slate-200'
                    : 'bg-slate-900 text-white hover:bg-cyan-600 shadow-sm active:scale-95'
                }`}
              >
                {isSelected ? '✓ In Your Stack' : 'Add to Stack'}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LeftSideBar;
