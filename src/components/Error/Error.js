import React from "react";
import { Link } from "react-router-dom";

function Error() {
    return (
        <div className="Error">
            <h2>Error</h2>
            <Link to="/">Retour à la page d'accueil</Link>
        </div>
    );
}

export default Error
