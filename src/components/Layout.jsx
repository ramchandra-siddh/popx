import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
const Layout = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const pages = ["/welcome", "/login", "/register", "/account"];
  const currentIndex = pages.indexOf(location.pathname);
  const isValidPage = currentIndex !== -1;

  // if (currentIndex === -1) return <div>Invalid Page</div>;

  const goToPage = (index) => {
    if (index !== currentIndex) {
      navigate(pages[index]);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-[380px] h-[600px] bg-gray-50 shadow-lg rounded-md p-4 text-center border border-gray-400 flex flex-col justify-between">
        {/* Main Scrollable Content for file*/}
        <div className="overflow-y-auto flex-grow">{children}</div>

        {/* Navigation Footer */}
        {isValidPage && (
          <div className="flex justify-center items-center mt-4 space-x-6">
            <button
              onClick={() => navigate("/welcome")}
              className="text-lg"
              title="Home"
            >
              <IoMdHome />
            </button>
            <button
              onClick={() => goToPage(Math.max(0, currentIndex - 1))}
              disabled={currentIndex === 0}
              className="text-lg"
            >
              &lt;
            </button>
            <span>
              {currentIndex + 1} of {pages.length}
            </span>
            <button
              onClick={() =>
                goToPage(Math.min(pages.length - 1, currentIndex + 1))
              }
              disabled={currentIndex === pages.length - 1}
              className="text-lg"
            >
              &gt;
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Layout;
