import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-18 py-6 bg-[#C33838] shadow-sm">
      <Link to="/" className="text-lg font-semibold text-[#FFDB4C]">
        SpotlightOnTruth
      </Link>

      <div className="flex gap-8 text-white font-regular">
        <Link to="/regions" className="hover:text-[#FFDB4C] transition-colors">Regions</Link>
        <Link to="/articles" className="hover:text-[#FFDB4C] transition-colors">Articles</Link>
        <Link to="/merchandise" className="hover:text-[#FFDB4C] transition-colors">Merchandise</Link>
        <Link to="/about" className="hover:text-[#FFDB4C] transition-colors">About</Link>
      </div>

      <div className="flex gap-2">
        <Link
          to="/login"
          className="px-4 py-2 border border-white rounded-lg hover:bg-white text-white hover:text-[#C33838]"
        >
          Login
        </Link>
        <Link
          to="/signup"
          className="px-4 py-2 bg-[#FFDB4C] text-[#C33838] rounded-lg hover:bg-yellow-400"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;