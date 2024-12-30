import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex items-center justify-between mx-4 py-3 lg:mx-44">
    <Link to="/">
      <img src="/nobgfavicon.png" alt="nobg-logo" className="invert w-14" />
    </Link>
        <button className="bg-zinc-800 text-white flex items-center gap-4 px-4 py-2 sm:px-8 sm:py-1 text-sm rounded-full">
          Get Started
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M5 12H19M19 12L13 6M19 12L13 18"
                stroke="#ffffff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </button>
      </div>
  );
}

export default Navbar;
