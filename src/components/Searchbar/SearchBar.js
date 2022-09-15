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
        value['Désignation'].toLowerCase().includes(searchWord.toLowerCase()) || value['EAN'].includes(searchWord) || value['Titre original'].toLowerCase().includes(searchWord.toLowerCase()) || value['ASIN'].toLowerCase().includes(searchWord.toLowerCase())
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
                <button className="buttonArticle" type="button" onClick={() => handleOpenModal(value)}>
                  {value['Désignation']}
                </button>
              </div>
            );
          })}
          <Modal visible={modalVisible} cancel={handleCloseModal} >
            <h1>{selectedArticle && selectedArticle['Désignation']}</h1>
            <div className="Infos">
              <h2>EAN : <span>{selectedArticle && selectedArticle[1]} </span></h2>
              <h2>Référence : <span>{selectedArticle && selectedArticle["Référence"]} </span></h2>
              <h2>Référence 2 : <span>{selectedArticle && selectedArticle["Référence 2"]} </span></h2>
              <h2>Référence 3 : <span>{selectedArticle && selectedArticle["Référence 3"]} </span></h2>
              <h2>Désignation : <span>{selectedArticle && selectedArticle["Désignation"]} </span></h2>
              <h2>Code Type : <span>{selectedArticle && selectedArticle.EAN} </span></h2>
              <h2>Type : <span>{selectedArticle && selectedArticle["Type"]} ({selectedArticle && selectedArticle["Code Type"]}) </span></h2>
              <h2>Cat Gestion : <span>{selectedArticle && selectedArticle["Cat Gestion"]} </span></h2>
              <h2>Tarif : <span>{selectedArticle && selectedArticle["Tarif"]} ({selectedArticle && selectedArticle["Code Tarif"]}) </span></h2>
              <h2>Tarif 2 : <span>{selectedArticle && selectedArticle["Tarif 2"]} ({selectedArticle && selectedArticle["Code Tarif 2"]}) </span></h2>
              <h2>Tarif 3 : <span>{selectedArticle && selectedArticle["Tarif 3"]} ({selectedArticle && selectedArticle["Code Tarif 3"]}) </span></h2>
              <h2>Tarif 4 : <span>{selectedArticle && selectedArticle["Tarif 4"]} ({selectedArticle && selectedArticle["Code Tarif 4"]}) </span></h2>
              <h2>Date de sortie : <span>{selectedArticle && selectedArticle["Date de sortie"]} </span></h2>
              <h2>Etat : <span>{selectedArticle && selectedArticle["Etat"]} ({selectedArticle && selectedArticle["Code Etat"]}) </span></h2>
              <h2>Date de retrait : <span>{selectedArticle && selectedArticle["Date de retrait"]} </span></h2>
              <h2>Seuil alerte : <span>{selectedArticle && selectedArticle["Seuil alerte"]} </span></h2>
              <h2>Titre original : <span>{selectedArticle && selectedArticle["Titre original"]}</span></h2>
              <h2>Année : <span>{selectedArticle && selectedArticle["Année"]} </span></h2>
              <h2>Durée : <span>{selectedArticle && selectedArticle["Durée"]} </span></h2>
              <h2>Info complémentaire : <span>{selectedArticle && selectedArticle["Info complémentaire"]} </span></h2>
              <h2>Vidéo URL : <span> <a href={selectedArticle && selectedArticle["Vidéo URL"]} target="_blank" rel="noopener noreferrer">{selectedArticle && selectedArticle["Vidéo URL"]}</a></span></h2>
              <h2>Sell Off : <span>{selectedArticle && selectedArticle["Sell Off"]} </span></h2>
              <h2>SKU Ebay : <span>{selectedArticle && selectedArticle["SKU Ebay"]} </span></h2>
              <h2>SKU Cdiscount : <span>{selectedArticle && selectedArticle["SKU Cdiscount"]} </span></h2>
              <h2>Studio : <span>{selectedArticle && selectedArticle["Studio"]} </span></h2>
              <h2>Edition : <span>{selectedArticle && selectedArticle["Edition"]} </span></h2>
              <h2>Saga : <span>{selectedArticle && selectedArticle["Saga"]} </span></h2>
              <h2>Genre : <span>{selectedArticle && selectedArticle["Genre"]} </span></h2>
              <h2>Catégorie : <span>{selectedArticle && selectedArticle["Catégorie"]} </span></h2>
              <h2>Collection/Licence : <span>{selectedArticle && selectedArticle["Collection/Licence"]} </span></h2>
              <h2>Bande-annonce : <span><a href={selectedArticle && selectedArticle["Bande-annonce"]} target="_blank" rel="noopener noreferrer">{selectedArticle && selectedArticle["Bande-annonce"]}</a></span></h2>
              <h2>Réalisateur : <span>{selectedArticle && selectedArticle["Réalisateur"]} </span></h2>
              <h2>Scénariste : <span>{selectedArticle && selectedArticle["Scénariste"]} </span></h2>
              <h2>Acteur : <span>{selectedArticle && selectedArticle["Acteur"]} </span></h2>
              <h2>Musique : <span>{selectedArticle && selectedArticle["Musique"]} </span></h2>
              <h2>Nationalité : <span>{selectedArticle && selectedArticle["Nationalité"]} </span></h2>
              <h2>Couleur/NB : <span>{selectedArticle && selectedArticle["Couleur/NB"]} </span></h2>
              <h2>Format d'image : <span>{selectedArticle && selectedArticle["Format d'image"]} </span></h2>
              <h2>Format Vidéo : <span>{selectedArticle && selectedArticle["Format Vidéo"]} </span></h2>
              <h2>Langues Audio Dolby Digital : <span>{selectedArticle && selectedArticle["Langues Audio Dolby Digital"]} </span></h2>
              <h2>Langues Audio DTS : <span>{selectedArticle && selectedArticle["Langues Audio DTS"]} </span></h2>
              <h2>Bonus : <span>{selectedArticle && selectedArticle["Bonus"]} </span></h2>
              <h2>Contenu : <span>{selectedArticle && selectedArticle["Contenu"]} </span></h2>
              <h2>Visa : <span>{selectedArticle && selectedArticle["Visa"]} </span></h2>
              <h2>Sous-titres : <span>{selectedArticle && selectedArticle["Sous-titres"]} </span></h2>
              <h2>Nb rondelles : <span>{selectedArticle && selectedArticle["Nb rondelles"]} </span></h2>
              <h2>Titre page : <span>{selectedArticle && selectedArticle["Titre page"]} </span></h2>
              <h2>ASIN : <span>{selectedArticle && selectedArticle["ASIN"]} </span></h2>
              <h2>FNSKU-1 : <span>{selectedArticle && selectedArticle["FNSKU-1"]} </span></h2>
              <h2>FNSKU-2 : <span>{selectedArticle && selectedArticle["FNSKU-2"]} </span></h2>
              <h2>Info référencement : <span>{selectedArticle && selectedArticle["Info référencemt"]} </span></h2>
              <h2>RCA : <span>{selectedArticle && selectedArticle["RCA"]} </span></h2>
              <h2>Saison : <span>{selectedArticle && selectedArticle["Saison"]} </span></h2>
              <h2>Nb. épisodes : <span>{selectedArticle && selectedArticle["Nb. épisodes"]} </span></h2>
              <h2>Titres des épisodes : <span>{selectedArticle && selectedArticle["Titres des épisodes"]} </span></h2>
              <h2>Commentaires : <span>{selectedArticle && selectedArticle["Commentaires"]} </span></h2>
              <div className="Description">
                {selectedArticle && selectedArticle['Description']}
              </div>
            </div>
          </Modal>
        </div>
      )}
    </div>
  )
}


// Ajouter les images, tester ça : https://codesandbox.io/s/fbs9e8?file=/src/App.jsx 
export default SearchBar
