import React, { useState, useEffect, useContext, createContext } from 'react';
import nookies from 'nookies';
import { auth } from './firebase';
// import firebase from 'firebase/app';
import { onIdTokenChanged } from 'firebase/auth';

const AuthContext = createContext({});

export const AuthProvider: React.FunctionComponent<{}> = ({ children }) => {
	const [user, setUser] = useState(null);
	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-shadow
		return onIdTokenChanged(auth, async (user) => {
			if (!user) {
				setUser(null);
				nookies.set(undefined, 'token', '', {});
			} else {
				const token = await user.getIdToken();
				nookies.set(undefined, 'token', token, {});
			}
		});
	}, []);

	return (
		<AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
