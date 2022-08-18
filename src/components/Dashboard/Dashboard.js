import React from "react";
import Userfront from "@userfront/react";
import SearchBar from "../Searchbar/SearchBar.js";

const Papa = require('papaparse');
const publicSpreadsheetUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vT1QGEpIxLSwBBJ-bbUEhsQuDOxMosn0fX6xTkHN7xGEcaYXa8bBihTNfHcevcf_7SokkepX0tMtnFW/pub?gid=0&single=true&output=csv";

function init() {
    Papa.parse(publicSpreadsheetUrl, {
        worker: true,
        download: true,
        header: true,
        complete: function (results) {
            var data = results.data;
            global.catalogue=data;
            console.log("All done");
            console.log(data)
        }
    })
}

export default function Dashboard() {
    console.log("Dashboard");
    init();
    //const userData = JSON.stringify(Userfront.user, null, 2);
    //const catalogueFinal = JSON.stringify(global.catalogue[1],null,2);
    return (
        <div>
            <h2>Dashboard</h2>
            <SearchBar placeholder="Recherche..." data={global.catalogue}/>
            <button onClick={Userfront.logout}>Logout</button>
        </div>
    );
}
