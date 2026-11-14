import BannerLogo from '../assets/banner-stack.png';

const Banner = () => {
  return (
    <section id="home" className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50 border-b border-slate-100">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-6 text-center md:text-left">
            <span className="inline-block rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold text-blue-600 ring-1 ring-blue-500/20">
              Modern Tech Stack Builder
            </span>

            <h1 className="font-black text-slate-900 text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
              Build Your Ideal{' '}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            <p className="text-slate-500 text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
              Explore frontend, backend, database, and tooling options, compare them
              side by side, and put together the stack that fits your next project.
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-2">
              <a
                href="#technologies"
                className="btn btn-primary rounded-xl px-6 text-white shadow-lg shadow-blue-500/25"
              >
                Explore Technologies
              </a>
              <button className="btn btn-outline rounded-xl px-6 text-slate-700">
                Learn More
              </button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative max-w-md w-full">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-cyan-400/20 to-blue-500/20 blur-2xl -z-10" />
              <img
                src={BannerLogo}
                alt="Development Stack"
                className="w-full object-contain rounded-2xl drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
