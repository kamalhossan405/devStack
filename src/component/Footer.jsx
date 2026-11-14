import FLogo from '../assets/logo-text.png';

const Footer = () => {
  return (
    <footer id="contact" className="mt-20 border-t border-slate-200 bg-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img src={FLogo} alt="Dev Stack" className="h-8 object-contain" />
            </div>

            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              Curated tools, technologies, and resources for developers building modern software.
            </p>

            <div className="flex items-center gap-4 mt-2 text-sm font-medium text-gray-600">
              <a
                href="https://github.com/kamalhossan405"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                GitHub
              </a>
              <a href="#" className="hover:text-blue-600 transition-colors">
                Twitter
              </a>
              <a
                href="https://www.linkedin.com/in/md-kamal-hossan/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-4">
              Product
            </h2>
            <ul className="flex flex-col gap-3 text-sm text-gray-500 font-medium">
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">Home</a>
              </li>
              <li>
                <a href="#technologies" className="hover:text-gray-900 transition-colors">Technologies</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">Projects</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-4">
              Company
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-500 font-medium">
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">About</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">Contact</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">Careers</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-4">
              Legal
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-500 font-medium">
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 font-medium gap-4">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-600 transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
