import Logo from '../assets/logo-text.png';

const Nav = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img src={Logo} alt="Dev Stack" className="h-9 object-contain" />
        </a>

        <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <li>
            <a href="#home" className="hover:text-blue-600 transition-colors">Home</a>
          </li>
          <li>
            <a href="#technologies" className="hover:text-blue-600 transition-colors">Technologies</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          <button className="btn btn-ghost btn-sm rounded-full text-slate-700">Log In</button>
          <button className="btn btn-primary btn-sm rounded-full px-5">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
