import React, { useEffect, useRef, useState } from "react";
import { AuthProvider } from "./src/contexts/auth-context";
import Entry from "./Entry";

export default function Providers() {
    return (
        <AuthProvider>
            <Entry />
        </AuthProvider>
    )
}
