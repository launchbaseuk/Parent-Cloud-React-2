import React, { useEffect, useRef, useState } from "react";
import { AuthProvider, useAuth } from "./src/contexts/auth-context";
import App from "./App";
import { WithSplashScreen } from "./src/screens/Splash";

export default function Entry() {
    const [isAppReady, setIsAppReady] = useState<boolean>(false);
    const { loadingUser } = useAuth();
    
    useEffect(() => {
        if(loadingUser) {
            setIsAppReady(false);
        } else {
            setIsAppReady(true);
        }
    }, [loadingUser]);

    return (
        <WithSplashScreen isAppReady={isAppReady}>
            <App />
        </WithSplashScreen>
    )
}
