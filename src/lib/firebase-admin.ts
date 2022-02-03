import admin from 'firebase-admin';
const serviceAccount = require('../../lumia-a59ba-firebase-adminsdk-2f110-9561feafa6.json');

export const verifyIdToken = (idToken: string) => {
	if (!admin.apps.length) {
		admin.initializeApp({
			credential: admin.credential.cert(serviceAccount),
		});
	}
	return admin
		.auth()
		.verifyIdToken(idToken)
		.catch((error) => {
			throw new Error(error);
		});
};
