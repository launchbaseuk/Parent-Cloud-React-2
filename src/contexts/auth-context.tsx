import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import getSubscriptions from "../functions/getSubscriptions";

const AuthContext = createContext({});

const AuthProvider = (props: any) => {
	const [loggedIn, setLoggedIn] = useState(false);
	const [sub, setSubscription] = useState(false);
	const [loadingUser, setLoadingUser] = useState(false);

	useEffect(() => {
		// Pull saved state
		(async() => {
			setLoadingUser(true);
            if (await AsyncStorage.getItem("token")) {
                const token = await AsyncStorage.getItem("token");
				const email = await AsyncStorage.getItem("user_email");
    
                (async () => {
                    const check = await fetch(
                        `https://hub.parent-cloud.com/wp-json/jwt-auth/v1/token/validate`, {
							method: "POST",
							headers: {
								Authorization: `Bearer ${token}`,
							}
						}
                    );
                    const response = await check.json();
					console.log(response)
                    if (response.data.status === 200) {
						let subscription = await getSubscriptions(email);
					
						setSubscription(subscription);
                        setLoggedIn(true);
						setLoadingUser(false);
                    } else {
                        setLoggedIn(false);
						setLoadingUser(false);
                    }
                })();
            } else {
                setLoggedIn(false);
				setLoadingUser(false);
            }
        })();
	}, []);

	const login = (username: string, password: string) => {
		(async () => {
			if (username && password) {
				const login = await fetch(
					"https://hub.parent-cloud.com/wp-json/jwt-auth/v1/token",
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
					let responseUserInfo: any = await fetch(`https://hub.parent-cloud.com/wp-json/mp/v1/members?search=${response.user_email}`, {
						headers: {
							"MEMBERPRESS-API-KEY": "8T5AkgBptM"
						}
					});
					responseUserInfo = await responseUserInfo.json();
					const display = responseUserInfo[0].first_name + " " + responseUserInfo[0].last_name;

					await AsyncStorage.setItem("token", response.token);
					await AsyncStorage.setItem("user_id", responseUserInfo[0].id.toString());
					await AsyncStorage.setItem("user_email", responseUserInfo[0].email);
					await AsyncStorage.setItem("user_nicename", responseUserInfo[0].nicename);
					await AsyncStorage.setItem("user_nameDisplay", display)
					
					let subscription = await getSubscriptions(responseUserInfo[0].email);
					
					setSubscription(subscription);
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
		loggedIn,
		sub,
		loadingUser
	};

	return <AuthContext.Provider value={authContextValue} {...props} />;
};

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };