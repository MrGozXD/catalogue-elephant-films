import React from "react";
import Userfront from "@userfront/react";
import { parsePath } from "history";

const Papa = require('papaparse');
const Tabletop = require('tabletop');

var publicSpreadsheetUrl = '126kFg-K5C5uQoGR6fVGYhThdLY31HcDjfxaThD4LdY4';

function showInfo(data, tabletop) {
    // do something with the data
    console.log("Hello World ! dans showInfo");
    console.log(JSON.stringify(data, null, 2));
}

function init() {
    Papa.parse(publicSpreadsheetUrl, {
        download: true,
        header: true,
        complete: function (results) {
            var data = results.data
            console.log(data)
        }
    })
}




export default function Dashboard() {
    console.log("Dashboard");
    init();
    const userData = JSON.stringify(Userfront.user, null, 2);
    return (
        <div>
            <h2>Dashboard</h2>
            <pre>{userData}</pre>
            <button onClick={Userfront.logout}>Logout</button>
        </div>
    );
}
