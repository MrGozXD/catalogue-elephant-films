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
                <button className="buttonArticle" type="button" onClick={() => handleOpenModal(value)}>
                  {value.Nom} EAN :{value['Code EAN']}
                </button>
              </div>
            );
          })}
          <Modal visible={modalVisible} cancel={handleCloseModal} >
            <h1>{selectedArticle && selectedArticle.Nom}</h1>
            <div className="Infos">
              <h2>EAN : <span>Lorem ipsum </span></h2>
              <h2>Référence :</h2>
              <h2>Référence 2 :</h2>
              <h2>Référence 3 :</h2>
              <h2>Désignation :</h2>
              <h2>Code Type :</h2>
              <h2>Type :</h2>
              <h2>Cat Gestion :</h2>
              <h2>Tarif :</h2>
              <h2>Tarif 2 :</h2>
              <h2>Tarif 3 :</h2>
              <h2>Tarif 4 :</h2>
              <h2>Date de sortie :</h2>
              <h2>Code Etat :</h2>
              <h2>Date de retrait :</h2>
              <h2>Seuil alerte :</h2>
              <h2>Titre original : {selectedArticle && selectedArticle['Titre original']}</h2>
              <h2>Année :</h2>
              <h2>Durée :</h2>
              <h2>Info complémentaire :</h2>
              <h2>Vidéo url :</h2>
              <h2>Sell Off :</h2>
              <h2>SKU Ebay :</h2>
              <h2>SKU Cdiscount :</h2>
              <h2>Studio :</h2>
              <h2>Edition :</h2>
              <h2>Saga :</h2>
              <h2>Genre</h2>
              <h2>Catégorie</h2>
              <h2>Collection/Licence</h2>
              <h2>Bande-annonce :</h2>
              <h2>Réalisateur :</h2>
              <h2>Scénariste :</h2>
              <h2>Acteur :</h2>
              <h2>Musique :</h2>
              <h2>Nationalité :</h2>
              <h2>Couleur/NB :</h2>
              <h2>Format d'image :</h2>
              <h2>Format Vidéo :</h2>
              <h2>Langues Audio Dolby Digital :</h2>
              <h2>Langues Audio DTS</h2>
              <h2>Bonus :</h2>
              <h2>Contenu :</h2>
              <h2>Visa :</h2>
              <h2>Sous-titres :</h2>
              <h2>Nb rondelles :</h2>
              <h2>Titre page :</h2>
              <h2>ASIN :</h2>
              <h2>FNSKU-1 :</h2>
              <h2>FNSKU-2 :</h2>
              <h2>Info référencement :</h2>
              <h2>Saison :</h2>
              <h2>Nb. épisodes :</h2>
              <h2>Titres des épisodes :</h2>
              <h2>Commentaires :</h2>
              <div className="Description">
                Pellentesque a aliquam elit. Nam sit amet orci molestie, sollicitudin quam non, sagittis ante. Sed ornare erat sit amet augue finibus, bibendum tincidunt magna gravida. Nullam quam quam, ultrices ac ultricies eu, placerat nec lectus. Donec ornare lacus eu nisi vulputate, ut semper arcu vestibulum. Pellentesque suscipit, erat sit amet feugiat porttitor, nisi orci efficitur tellus, vel vehicula ipsum sem vitae neque. Sed ullamcorper urna id sapien rutrum scelerisque. Ut id gravida sem, porta consequat odio. Sed euismod mauris erat, sit amet dapibus justo lacinia eget. Nullam pretium scelerisque quam, ac auctor elit blandit nec. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras justo eros, eleifend id venenatis non, laoreet et purus. Suspendisse vulputate at risus at iaculis.
              </div>

            </div>
          </Modal>
        </div>
      )}
    </div>
  )
}

export default SearchBar