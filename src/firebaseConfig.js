import Firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: "AIzaSyD6uQ4QRy17OoA6gPAICXMaMq54xw24Gtw",
	authDomain: "playstationtlous.firebaseapp.com",
	databaseURL: "https://playstationtlous.firebaseio.com",
	projectId: "playstationtlous",
	storageBucket: "playstationtlous.appspot.com",
	messagingSenderId: "997643755571",
	appId: "1:997643755571:web:85fd79d87be5ef0bea8346",
	measurementId: "G-KZWDS4DYNM"
};

Firebase.initializeApp(firebaseConfig);

export default Firebase;
