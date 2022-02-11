import React, { useState, useEffect, useContext, createContext } from 'react';
import nookies from 'nookies';
import { auth } from './firebase';
// import firebase from 'firebase/app';
import {
	GoogleAuthProvider,
	onIdTokenChanged,
	signInWithPopup,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut,
} from 'firebase/auth';

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

export const authService = {
	signInWithGoogle: async () => {
		const provider = new GoogleAuthProvider();
		return signInWithPopup(auth, provider).then((user) => {
            
        })
	},
	signInWithEmailAndPassword: async (email: string, password: string) => {
		return signInWithEmailAndPassword(auth, email, password);
	},
	signUpWithEmailAndPassword: async (email: string, password: string, rpassword: string) => {
		if (password !== rpassword) {
			throw new Error('Passwords do not match');
		} else {
			return createUserWithEmailAndPassword(auth, email, password);
		}
	},
	signOut: async () => {
		return signOut(auth);
	},
};

export const useAuth = () => useContext(AuthContext);
