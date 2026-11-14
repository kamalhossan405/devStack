import { RxCross2 } from 'react-icons/rx';
import { toast } from 'react-toastify';

const RightSideBar = ({ selectedProducts = [], setSelectedProducts }) => {
  const handleRemoveItem = (product) => {
    setSelectedProducts(selectedProducts.filter((item) => item.id !== product.id));
    toast.info(`${product.name} removed from stack!`);
  };

  const handleRemoveAll = () => {
    setSelectedProducts([]);
    toast.error('All technologies removed from stack!');
  };

  if (selectedProducts.length === 0) {
    return (
      <aside className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="font-bold text-2xl text-slate-900">Your Stack</h2>
        <p className="mt-1 text-sm text-slate-500">No technologies selected yet.</p>

        <div className="mt-6 flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-200 py-10 px-4 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400 mb-3 text-xl">
            ⚡
          </div>
          <p className="font-semibold text-slate-700">Your stack is empty.</p>
          <p className="mt-1 text-xs text-slate-400 max-w-[200px]">
            Pick technologies from the left to start building your custom stack!
          </p>
        </div>
      </aside>
    );
  }

  return (
    <aside className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between pb-4 border-b border-slate-100">
        <div>
          <h2 className="font-bold text-2xl text-slate-900">Your Stack</h2>
          <p className="mt-1 text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full inline-block">
            {selectedProducts.length} {selectedProducts.length === 1 ? 'Technology' : 'Technologies'} Selected
          </p>
        </div>
      </div>

      <div className="mt-4 space-y-3 max-h-[500px] overflow-y-auto pr-1">
        {selectedProducts.map((product) => (
          <div
            key={product.id}
            className="group flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/60 p-3 transition-all duration-200 hover:border-cyan-200 hover:bg-cyan-50/30"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-white p-2 border border-slate-200">
                <img
                  src={product.icon}
                  alt={product.name}
                  className="h-7 w-7 object-contain"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/28?text=Tech';
                  }}
                />
              </div>

              <div>
                <h3 className="font-bold text-sm text-slate-800 group-hover:text-cyan-700">
                  {product.name}
                </h3>
                <p className="text-xs text-slate-400">{product.category}</p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => handleRemoveItem(product)}
              className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:bg-red-50 hover:text-red-500 transition-colors cursor-pointer"
              title={`Remove ${product.name}`}
            >
              <RxCross2 className="text-lg" />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100">
        <button
          type="button"
          onClick={handleRemoveAll}
          className="w-full rounded-xl bg-red-50 py-2.5 text-sm font-semibold text-red-600 hover:bg-red-500 hover:text-white transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
        >
          Remove All
        </button>
      </div>
    </aside>
  );
};

export default RightSideBar;
