import React from "react";
import "./Search.css";
export default function Search() {
  return (
    <div className="row">
      <div className="col-10">
        <input
          type="search"
          placeholder="Search for a city"
          id="search-form"
          autoComplete="off"
        />
        <input type="submit" value="🔍 Search" id="search-button" />
      </div>
      <div className="col-2">
        <button>
          <span role="img" aria-label="Pin">
            📍
          </span>
          Current
        </button>
      </div>
    </div>
  );
}