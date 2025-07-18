import { NavLink } from 'react-router-dom';

const Header = () => {

  const isActiveLinkStyle = ({ isActive }) => {
    return (
      isActive
        ? "text-blue-600 font-semibold"
        : "text-gray-700 hover:text-blue-600" 
    )
  }

return (
  <header className="w-full">
    {/* Top Bar */}
    <section className="bg-gray-800 text-white text-sm px-4 py-2 flex justify-between items-center">
      <p>Get Thapa Membership, 30-day return or refund guarantee.</p>
      <div className="space-x-4">
        <NavLink to="#" className="text-blue-400 hover:underline">SIGN IN</NavLink>
        <NavLink to="#" className="text-blue-400 hover:underline">SIGN UP</NavLink>
      </div>
    </section>

    {/* Main Navigation */}
    <div className="bg-white shadow-md px-4 py-4 flex justify-between items-center">
      {/* Logo */}
      <div>
        <NavLink to="/" className="text-blue-600 font-semibold text-lg">ThapaFlix</NavLink>
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li>
            <NavLink to="/" className={isActiveLinkStyle}>HOME</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={isActiveLinkStyle}>ABOUT</NavLink>
          </li>
          <li>
            <NavLink to="/movie" className={isActiveLinkStyle}>MOVIES</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={isActiveLinkStyle}>CONTACT</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);
};

export default Header;
