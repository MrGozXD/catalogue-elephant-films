import React from "react";
import Userfront from "@userfront/react";

Userfront.init("6nz4zp8n");

const LoginForm = Userfront.build({
    toolId: "onlabo"
});

export default function Login() {
    return (
        <div>
            <h2>Login</h2>
            <LoginForm />
        </div>
    )
}

