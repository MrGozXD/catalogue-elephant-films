import React, { useState } from 'react'
import "./SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';
import Modal from '../Modal/Modal.js';

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const handleFilter = (event) => {
    const searchWord = event.target.value;
    const newFilter = data.filter((value) => {
      return (
        value.Nom.toLowerCase().includes(searchWord.toLowerCase()) || value['Code EAN'].includes(searchWord) || value['Titre original'].toLowerCase().includes(searchWord.toLowerCase())
      )
      /* filtre à réécrire => return true si searchWord match avec value.critèreX || value.critèreY || etc */
    });
    setFilteredData(newFilter);
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleOpenModal = (value) => {
    setSelectedArticle(value);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
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
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.map((value, key) => {
            return (
              <div className="Article">
                <button type="button" onClick={() => handleOpenModal(value)}>
                  {value.Nom} EAN :{value['Code EAN']}
                </button>
              </div>
            );
          })}
          <Modal visible={modalVisible} cancel={handleCloseModal} >
            <h1>{selectedArticle && selectedArticle.Nom}</h1>
            <div className="Infos">
              <h4>EAN :</h4>
              <h4>Référence :</h4>
              <h4>Référence 2 :</h4>
              <h4>Référence 3 :</h4>
              <h4>Désignation :</h4>
              <h4>Code Type :</h4>
              <h4>Type :</h4>
              <h4>Cat Gestion :</h4>
              <h4>Tarif :</h4>
              <h4>Tarif 2 :</h4>
              <h4>Tarif 3 :</h4>
              <h4>Tarif 4 :</h4>
              <h4>Date de sortie :</h4>
              <h4>Code Etat :</h4>
              <h4>Date de retrait :</h4>
              <h4>Seuil alerte :</h4>
              <h4>Titre original : {selectedArticle && selectedArticle['Titre original']}</h4>
              <h4>Année :</h4>
              <h4>Durée :</h4>
              <h4>Info complémentaire :</h4>
              <h4>Vidéo url :</h4>
              <h4>Sell Off :</h4>
              <h4>SKU Ebay :</h4>
              <h4>SKU Cdiscount :</h4>
              <h4>Studio :</h4>
              <h4>Edition :</h4>
              <h4>Saga :</h4>
              <h4>Genre</h4>
              <h4>Catégorie</h4>
              <h4>Collection/Licence</h4>
              <h4>Bande-annonce :</h4>
              <h4>Réalisateur :</h4>
              <h4>Scénariste :</h4>
              <h4>Acteur :</h4>
              <h4>Musique :</h4>
              <h4>Nationalité :</h4>
              <h4>Couleur/NB :</h4>
              <h4>Format d'image :</h4>
              <h4>Format Vidéo :</h4>
              <h4>Langues Audio Dolby Digital :</h4>
              <h4>Langues Audio DTS</h4>
              <h4>Bonus :</h4>
              <h4>Contenu :</h4>
              <h4>Visa :</h4>
              <h4>Sous-titres :</h4>
              <h4>Nb rondelles :</h4>
              <h4>Titre page :</h4>
              <h4>ASIN :</h4>
              <h4>FNSKU-1 :</h4>
              <h4>FNSKU-2 :</h4>
              <h4>Info référencement :</h4>
              <h4>Saison :</h4>
              <h4>Nb. épisodes :</h4>
              <h4>Titres des épisodes :</h4>
              <h4>Commentaires :</h4>
              <div className="Description">
                <h4>{selectedArticle && selectedArticle['Résumé']}</h4>
              </div>

            </div>
          </Modal>
        </div>
      )}
    </div>
  )
}

export default SearchBar