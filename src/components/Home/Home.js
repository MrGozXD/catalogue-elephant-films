import React from "react";
import Userfront from "@userfront/react";

Userfront.init("6nz4zp8n"); //identifiant compte Userfront

const SignupForm = Userfront.build({
  toolId: "bkdmon",
});

export default function Home() {
    return (
        <div>
            <h2>Home</h2>
            <SignupForm/>
        </div>
    )
}

