import { useState } from "react";

const SearchBar = ({
  placeholder,
  originalData,
  filterRestaurantsCallback,
}) => {
  const [text, setText] = useState("");

  return (
    <div className="search-box">
      <input
        type="text"
        placeholder={placeholder}
        className="search-input"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button
        className="search-btn"
        onClick={() => {
          const sd = originalData?.filter((data) =>
            data?.info?.name.toLowerCase().includes(text.toLowerCase())
          );
          filterRestaurantsCallback(sd);
        }}
      >
        Search
      </button>
    </div>
  );
};
export default SearchBar;
