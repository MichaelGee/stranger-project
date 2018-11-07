import React from 'react'

const SearchBar = () => {
  return (
    <div>
    <div className="nav-wrapper">
      <form>
        <div className="input-field search ">
          <input type="search" placeholder="Search" required/>
          <label className="label-icon" for="search"><i className="material-icons">search</i></label>
          <i className="material-icons">close</i>
          <a id="search-btn" class="waves-effect waves-light btn">Search</a>
        </div>
      </form>
    </div>
  </div>
  );
}

export default SearchBar;