import React, { useState } from 'react'
import "./SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const handleFilter =(event)=>{
    const searchWord = event.target.value;
    const newFilter = data.filter((value)=>{
      return (
        value.Nom.toLowerCase().includes(searchWord.toLowerCase()) || value['Code EAN'].includes(searchWord) 
      ) 
        /* filtre à réécrire => return true si searchWord match avec value.critèreX || value.critèreY || etc */
    });
    setFilteredData(newFilter);
  };



  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text" placeholder={placeholder} onChange={handleFilter} />
        <div className="searchIcon">
          <SearchIcon />
        </div>
      </div>
      {filteredData.length !==0 && (
        <div className="dataResult">
          {filteredData.map((value, key) => {
            return (
              <a className="dataItem" href='https://github.com/MrGozXD' target="_blank">
                <p>{value.Nom} EAN :{value['Code EAN']}</p> 
              </a>
            );
          })}
        </div>
      )}
    </div>
  )
}

export default SearchBar