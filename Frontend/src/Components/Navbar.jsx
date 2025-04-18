import React, { useEffect, useState ,useRef} from "react";
import { useLocation, Link } from "react-router-dom";
import Login from './Login.jsx'
import { useAuth } from "../context/AuthProvider";
import Logout from "./Logout.jsx";
import axios from 'axios';

function Navbar() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light"
  );
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const element = document.documentElement;

  const location = useLocation();
  
  useEffect(() => {
    const fetchBooks = async () => {
      if (searchTerm.trim() === '') {
        setFilteredBooks([]);
        setShowDropdown(false);
        return;
      }
      try {
        const res = await axios.get(`http://localhost:4001/book/search?name=${searchTerm}`);
        setFilteredBooks(res.data);
        setShowDropdown(true);
      } catch (error) {
        console.error("Search failed:", error);
      }
    };

    const delayDebounce = setTimeout(fetchBooks, 300); // debounce

    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [theme]);

  const isActive = (path) => location.pathname === path;

  const navItems = (
    <>
      <li className="mx-4">
        <Link
          to="/"
          className={isActive("/") ? "text-blue-500 font-semibold" : ""}
        >
          Home
        </Link>
      </li>
      <li className="mx-4">
        <Link
          to="/course"
          className={isActive("/course") ? "text-blue-500 font-semibold" : ""}
        >
          Course
        </Link>
      </li>
      <li className="mx-4">
        <Link
          to="/contact"
          className={isActive("/contact") ? "text-blue-500 font-semibold" : ""}
        >
          Contact
        </Link>
      </li>
      <li className="mx-4">
        <Link
          to="/about"
          className={isActive("/about") ? "text-blue-500 font-semibold" : ""}
        >
          About
        </Link>
      </li>
    </>
  );

  return (
    <div
      className={`w-full fixed top-0 left-0 right-0 z-50 
      ${sticky ? "shadow-md transition-all duration-300" : ""} 
      bg-base-200 dark:bg-slate-800 dark:text-white`}
    >
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="navbar min-h-[4rem] px-0 text-[1.3rem] justify-between">
          {/* Navbar Start */}
          <div className="navbar-start gap-2 ml-[-20px]">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost p-1 lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
                     fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round"
                        strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
              </div>
              <ul tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 dark:bg-slate-700 rounded-box w-48 text-[1rem]">
                {navItems}
              </ul>
            </div>
            <a className="text-3xl font-bold cursor-pointer whitespace-nowrap">BookStore</a>
          </div>

          {/* Navbar Center */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-[1.3rem]">
              {navItems}
            </ul>
          </div>

          {/* Navbar End */}
          <div className="navbar-end space-x-3 items-center">
            {/* Search Input */}
            <div className="hidden md:block">
              <label className="px-2 py-1 rounded-md flex items-center gap-2 border border-transparent focus-within:border-white transition-all duration-200">
              <nav className="relative">
      {/* your other nav stuff */}

      <div className="relative w-64" ref={dropdownRef}>
        <input
          type="text"
          placeholder="Search books..."
          className="border px-3 py-2 rounded w-full dark:text-black"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {showDropdown && filteredBooks.length > 0 && (
          <ul className="absolute z-50 w-full bg-white border mt-1 rounded shadow">
            {filteredBooks.map((book) => (
              <li key={book._id} className="px-4 py-2 hover:bg-gray-100 cursor-pointer dark:text-black">
                <Link to={`/books/${book._id}`}>{book.name}</Link>
              </li>
            ))}
          </ul>
        )}
        {showDropdown && filteredBooks.length === 0 && (
          <div className="absolute z-50 w-full bg-white border mt-1 rounded shadow px-4 py-2 text-gray-500">
            No books found
          </div>
        )}
      </div>
    </nav>

                <button className="w-15 h-10 grow text-base px-2 py-1  dark:bg-slate-800 dark:text-white outline-none border-none">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                     fill="currentColor" className="w-4 h-4 opacity-90">
                  <path fillRule="evenodd"
                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                        clipRule="evenodd" />
                </svg>
                </button>
              </label>
            </div>

            {/* Theme Toggle */}
            <label className="swap swap-rotate cursor-pointer">
              <input type="checkbox" className="theme-controller" />
              {/* Sun Icon */}
              <svg className="swap-off fill-current w-6 h-6"
                   xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 24 24"
                   onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,
                8.05,8.05,0,0,1-3.37.73A8.15,
                8.15,0,0,1,9.08,5.49a8.59,8.59,
                0,0,1,.25-2A1,1,0,0,0,8,2.36,
                10.14,10.14,0,1,0,22,14.05,
                1,1,0,0,0,21.64,13Zm-9.5,
                6.69A8.14,8.14,0,0,1,7.08,
                5.22v.27A10.15,10.15,0,0,
                0,17.22,15.63a9.79,9.79,
                0,0,0,2.1-.22A8.11,8.11,
                0,0,1,12.14,19.73Z" />
              </svg>

              {/* Moon Icon */}
              <svg className="swap-on fill-current w-6 h-6"
                   xmlns="http://www.w3.org/2000/svg"
                   viewBox="0 0 24 24"
                   onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                <path d="M5.64,17l-.71.71a1,1,0,0,0,
                    0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,
                    1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,
                    1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,
                    1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,
                    0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,
                    1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71
                    -.71A1,1,0,0,0,4.93,6.34Zm12,
                    .29a1,1,0,0,0,.7-.29l.71-.71a1,1,
                    0,1,0-1.41-1.41L17,5.64a1,1,0,0,
                    0,0,1.41A1,1,0,0,0,17.66,
                    7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,
                    1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,
                    1v1a1,1,0,0,0,2,0V20A1,1,0,0,
                    0,12,19ZM18.36,17A1,1,0,0,
                    0,17,18.36l.71.71a1,1,0,0,0,
                    1.41,0,1,1,0,0,0,0-1.41ZM12,
                    6.5A5.5,5.5,0,1,0,17.5,12,5.51,
                    5.51,0,0,0,12,6.5Zm0,9A3.5,
                    3.5,0,1,1,15.5,12,3.5,3.5,0,0,
                    1,12,15.5Z" />
              </svg>
            </label>
            {authUser ? (
              <Logout />
            ) : (
             <div className="">
                <a
                  className="bg-black text-white  ml-7 px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
                  onClick={() => {
                    const modal = document.getElementById("my_modal_3");
                    if (modal) modal.showModal();
                  }}
                  
                >
                  Login
                </a>
                <Login />
              </div> )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
