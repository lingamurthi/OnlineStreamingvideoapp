import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { HAMBURGER_ICON, USER_ICON, YOUTUBE_LOGO } from "../utils/constants";
import useSuggestion from "../hooks/useSuggestion";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggesstions, setSuggesstions] = useState([]);
  const [showsuggestions, setShowsuggestions] = useState(false);
  const dispatch = useDispatch();
  useSuggestion();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex md:col-span-1 col-span-4">
        <img
          onClick={toggleMenuHandler}
          className="h-8 cursor-pointer"
          src={HAMBURGER_ICON}
          alt="menu"
        />
        <a href="/">
          <img className="h-8 mx-2" src={YOUTUBE_LOGO} alt="youtube-logo" />
        </a>
      </div>

      <div className="md:col-span-10 px-10 col-span-7">
        <div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowsuggestions(true)}
            onBlur={() => setShowsuggestions(false)}
            className="px-5 w-[60%] md:w-1/2 border border-gray-400 p-2 rounded-l-full"
          />
          <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>

        {showsuggestions && (
          <div className="fixed bg-white py-2 px-2 w-[29rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggesstions.map((s, index) => (
                <li
                  key={index}
                  className="py-2 px-3 shadow-sm hover:bg-gray-100"
                >
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="md:col-span-1 col-span-1">
        <img className="h-8" alt="user" src={USER_ICON} />
      </div>
    </div>
  );
};

export default Head;
