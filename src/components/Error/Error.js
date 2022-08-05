import React from "react";
import { Link } from "react-router-dom";

function Error() {
    return (
        <div className="Error">
            <h2>Error</h2>
            <Link to="/">Back to root</Link>
        </div>
    );
}

export default Error
