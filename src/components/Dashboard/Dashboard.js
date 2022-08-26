import React, { useState } from "react";
import Userfront from "@userfront/react";
import SearchBar from "../Searchbar/SearchBar.js";
import Loading from "../Loading/Loading.js";
import Header from "../Header/Header.js";

const Papa = require('papaparse');
// URL de Copie de DataPlugOnline.csv
const publicSpreadsheetUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vT1QGEpIxLSwBBJ-bbUEhsQuDOxMosn0fX6xTkHN7xGEcaYXa8bBihTNfHcevcf_7SokkepX0tMtnFW/pub?gid=0&single=true&output=csv";
//const publicSpreadsheetUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTzEdx3_SCVoD2y0TPyiEyvDUY_f5soB3DycpJ2j5zV83y7pnspYOABs2LmLEqD8R3OBfjd59Cj_wdz/pub?gid=1089429673&single=true&output=csv";


export default function Dashboard() {

    const [complete, setComplete] = useState(false);
    // Parsing CSV=>JSON avec publicSpreadsheetURL source du CSV
    // plus d'infos sur les paramètres : https://www.papaparse.com/docs#csv-to-json
    function init() {
        Papa.parse(publicSpreadsheetUrl, {
            worker: true,
            download: true,
            header: true,
            complete: function (results) {
                var data = results.data;
                global.catalogue = data;
                console.log("All done");
                //console.log(data);
                setComplete(true);
            }
        })
    };

    //console.log("Dashboard");
    init();

    if (complete === false) {
        // Affichage d'un message de chargement
        return(<div><Loading/></div>);
    } else {
        // Affichage de la barre de recherche après chargement des données 
        return (
            <div>
                <Header/>
                <SearchBar placeholder="Recherche..." data={global.catalogue} />
            </div>
        );
    };
}
