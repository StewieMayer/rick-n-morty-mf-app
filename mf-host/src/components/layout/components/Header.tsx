import LinkedInLogo from "@images/InBug-White.png";
import GithubLogo from "@images/github-mark-white.png";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-4 py-3 bg-black text-white">
      <h1 className="rounded p-2 text-2xl font-bold hover:bg-blue-600 transition-colors duration-300">
        <Link to="/">Rick & Morty Info</Link>
      </h1>
      <nav className="flex gap-1">
        <Link
          to="https://www.linkedin.com/in/antonioamayastc/"
          className="p-2 rounded hover:bg-blue-600 transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={LinkedInLogo} alt="Linkedin profile" className="w-9 h-8" />
        </Link>
        <Link
          to="https://github.com/StewieMayer?tab=repositories"
          className="p-2 rounded hover:bg-gray-600 transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={GithubLogo} alt="Github repositories" className="w-8 h-8" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
