import React, { useEffect, useRef, useState } from "react";
import { AuthProvider } from "./src/contexts/auth-context";
import App from "./App";
import { WithSplashScreen } from "./src/screens/Splash";

export default function Entry() {
    const [isAppReady, setIsAppReady] = useState<boolean>(false);

    useEffect(() => {
        setIsAppReady(true);
    }, []);

    return (
        <WithSplashScreen isAppReady={isAppReady}>
            <AuthProvider>
                <App />
            </AuthProvider>
        </WithSplashScreen>
    )
}
