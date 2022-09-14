import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext({});

const AuthProvider = (props: any) => {
	const [loggedIn, setLoggedIn] = useState(false);
	const [error, setError] = useState("");

	useEffect(() => {
		// Pull saved state
		(async() => {
            if (await AsyncStorage.getItem("token")) {
                const token = await AsyncStorage.getItem("token");
    
                (async () => {
                    const check = await fetch(
                        `http://parentcloud.borne.io/`
                    );
                    const response = await check.json();
    
                    if (response.status === 200) {
                        if (response.details.role === "revoked") {
                            setLoggedIn(false);
                        } else {
                            setLoggedIn(response.token);
                            setError("");
                        }
                    } else {
                        setLoggedIn(false);
                        setError("");
                    }
                })();
            } else {
                setLoggedIn(false);
                setError("");
            }
        })();
	}, []);

	const login = (username: string, password: string) => {
		(async () => {
			if (username && password) {
				const login = await fetch(
					"http://parentcloud.borne.io/",
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							Accept: "application/json",
						},
						body: JSON.stringify({
							username: username,
							password: password,
						}),
					}
				);
				const response = await login.json();
				if (response.token) {
					if (response.details.role === "revoked") {
						setLoggedIn(false);
					} else {
						// localStorage.setItem(
						// 	"details",
						// 	JSON.stringify(response.details)
						// );
						// localStorage.setItem("token", response.token);
						setLoggedIn(response.token);
						setError("");
					}
				} else {
					setLoggedIn(false);
					setError(response.error);
				}
			} else {
				setLoggedIn(false);
			}
		})();
	};
	const logout = () => {
		// localStorage.removeItem("token");
		setLoggedIn(false);
	};

	const authContextValue = {
		login,
		logout,
		loggedIn,
		error,
		setError
	};

	return <AuthContext.Provider value={authContextValue} {...props} />;
};

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };