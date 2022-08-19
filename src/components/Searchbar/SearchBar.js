import React, { useState } from 'react'
import "./SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';
import Modal from '../Modal/Modal.js';

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const handleFilter =(event)=>{
    const searchWord = event.target.value;
    const newFilter = data.filter((value)=>{
      return (
        value.Nom.toLowerCase().includes(searchWord.toLowerCase()) || value['Code EAN'].includes(searchWord) || value['Titre original'].toLowerCase().includes(searchWord.toLowerCase())
      ) 
        /* filtre à réécrire => return true si searchWord match avec value.critèreX || value.critèreY || etc */
    });
    setFilteredData(newFilter);
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  
  const handleOpenModal=(value)=>{
    setSelectedArticle(value);
    setModalVisible(true);  
  };

  const handleCloseModal=()=>{
    setSelectedArticle(null);
    setModalVisible(false);
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
              <div className="Article">
                <button type="button" onClick={()=>handleOpenModal(value)}>
                  {value.Nom} EAN :{value['Code EAN']}
                </button>
              </div>
            );
          })}
          <Modal visible={modalVisible} cancel={handleCloseModal} >
            <h1>Hello World</h1>
            <h4>I am {selectedArticle && selectedArticle.Nom} </h4>
            <h4>Titre original : {selectedArticle && selectedArticle['Titre original']}</h4>
          </Modal>
        </div>
      )}
    </div>
  )
}

export default SearchBar