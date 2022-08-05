import Userfront from "@userfront/react";

Userfront.init("6nz4zp8n");

const PasswordResetForm = Userfront.build({
  toolId: "kbklmr"
});

export default function Login() {
    return (
        <div>
            <h2>Password Reset</h2>
            <PasswordResetForm />
        </div>
    )
}