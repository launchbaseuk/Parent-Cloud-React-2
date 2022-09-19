import React from "react";
import { AuthProvider } from "./src/contexts/auth-context";
import App from "./App";

export default function Entry() {
    return (
        <AuthProvider>
            <App />
        </AuthProvider>
    )
}