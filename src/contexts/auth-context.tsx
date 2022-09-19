import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = createContext({});

const AuthProvider = (props: any) => {
	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		// Pull saved state
		(async() => {
            if (await AsyncStorage.getItem("token")) {
                const token = await AsyncStorage.getItem("token");
    
                (async () => {
                    const check = await fetch(
                        `https://parentcloud.borne.io/wp-json/jwt-auth/v1/token/validate`, {
							method: "POST",
							headers: {
								Authorization: `Bearer ${token}`,
							}
						}
                    );
                    const response = await check.json();
					console.log(response)
                    if (response.data.status === 200) {
                        setLoggedIn(true);
                    } else {
                        setLoggedIn(false);
                    }
                })();
            } else {
                setLoggedIn(false);
            }
        })();
	}, []);

	const login = (username: string, password: string) => {
		(async () => {
			if (username && password) {
				const login = await fetch(
					"https://parentcloud.borne.io/wp-json/jwt-auth/v1/token",
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
							Accept: "application/json",
						},
						body: JSON.stringify({
							"jwt_auth_expire": 123908425893047,
							username: username,
							password: password,
						}),
					}
				);
				const response = await login.json();
				console.log(response);

				if (response.token) {
					await AsyncStorage.setItem("token", response.token);
					await AsyncStorage.setItem("user_email", response.user_email);
					await AsyncStorage.setItem("user_nicename", response.user_nicename);
					console.log('done')
					setLoggedIn(true);
				} else {
					setLoggedIn(false);
				}
			} else {
				setLoggedIn(false);
			}
		})();
	};
	const logout = async () => {
		console.log('nice')
		await AsyncStorage.removeItem("token");
		await AsyncStorage.removeItem("user_email");
		await AsyncStorage.removeItem("user_nicename");
		setLoggedIn(false);
	};

	const authContextValue = {
		login,
		logout,
		loggedIn
	};

	return <AuthContext.Provider value={authContextValue} {...props} />;
};

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };