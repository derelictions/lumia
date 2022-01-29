import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { authContext } from '../lib/firebase';
import { ProviderId } from 'firebase/auth';
// import auth from 'firebase/auth';

const uiConfig = {
	signInSuccessUrl: '/',
	signInOptions: [ProviderId.GOOGLE, ProviderId.PASSWORD],
};

export default function LoginPage() {
	return (
		<div>
			<StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={authContext} />
		</div>
	);
}
