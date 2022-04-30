import React, { useState, useEffect, useContext, createContext } from 'react';
import nookies from 'nookies';
import { auth } from './firebase';
// import firebase from 'firebase/app';
import {
	GoogleAuthProvider,
	// onIdTokenChanged,
	onAuthStateChanged,
	signInWithPopup,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	signOut,
	User,
} from 'firebase/auth';
// import { useRouter } from 'next/router';

const AuthContext = createContext<any>({});
export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FunctionComponent<{}> = ({ children }) => {
	// const router = useRouter();
	const [user, setUser] = useState<User | any>();
	const [loading, setLoading] = useState(true);

	console.log(user);

	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-shadow
		const unsubscribe = onAuthStateChanged(auth, async (user) => {
			if (!user) {
				setUser(null);
				nookies.set(undefined, 'token', '', {});
			} else {
				const token = await user.getIdToken();
				nookies.set(undefined, 'token', token, {});
				setUser(user);
			}
			setLoading(false);
		});

		return () => {
			nookies.set(undefined, 'token', '', {});
			unsubscribe();
		};
	}, []);

	const authService = {
		signInWithGoogle: async () => {
			const provider = new GoogleAuthProvider();
			return signInWithPopup(auth, provider);
		},
		logInWithEmailAndPassword: async (email: string, password: string) => {
			return signInWithEmailAndPassword(auth, email, password);
		},

		signUpWithEmailAndPassword: async (email: string, password: string) => {
			return createUserWithEmailAndPassword(auth, email, password);
		},

		signOut: async () => {
			return signOut(auth);
		},
	};

	return (
		<AuthContext.Provider value={{ user, authService }}>
			{loading ? null : children}
		</AuthContext.Provider>
	);
};
