import React from "react";
import Userfront from "@userfront/react";
import { parsePath } from "history";

const Papa = require('papaparse');
const Tabletop = require('tabletop');

const publicSpreadsheetUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vT1QGEpIxLSwBBJ-bbUEhsQuDOxMosn0fX6xTkHN7xGEcaYXa8bBihTNfHcevcf_7SokkepX0tMtnFW/pub?gid=0&single=true&output=csv";
let catalogue=[];
function showInfo(data, tabletop) {
    // do something with the data
    console.log("Hello World ! dans showInfo");
    console.log(JSON.stringify(data, null, 2));
}

function init() {
    Papa.parse(publicSpreadsheetUrl, {
        worker: true,
        download: true,
        header: true,
        step : function(row){
           
            console.log("Row:", row.data);
        },
        complete: function () {
            console.log("All done !")
        }
    })
}




export default function Dashboard() {
    console.log("Dashboard");
    init();
    const userData = JSON.stringify(Userfront.user, null, 2);
    const catalogueFinal = JSON.stringify(catalogue[1],null,2);
    return (
        <div>
            <h2>Dashboard</h2>
            <pre>{userData}</pre>
            <pre>{catalogueFinal}</pre>
            <button onClick={Userfront.logout}>Logout</button>
        </div>
    );
}
