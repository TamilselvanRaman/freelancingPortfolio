import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env.local') });

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const REAL_PROJECT_TITLES = [
  'vasandhamherbals',
  'astroshastra',
  'lid travel website',
  'uni_brains – medical abortion consultation website',
  'unibrains ai'
];

async function purgeSampleProjects() {
  try {
    console.log('Logging in as admin...');
    await signInWithEmailAndPassword(auth, 'admin@portfolio.com', 'AdminPassword123');
    console.log('Logged in successfully!');

    const snapshot = await getDocs(collection(db, 'projects'));
    console.log('Purging sample projects from Firestore...');
    
    for (const document of snapshot.docs) {
      const title = (document.data().title || '').toLowerCase();
      const isReal = REAL_PROJECT_TITLES.some(rt => title.includes(rt));
      
      if (!isReal) {
        console.log(`Deleting sample project: ${document.id} | Title: ${document.data().title}`);
        await deleteDoc(doc(db, 'projects', document.id));
      } else {
        console.log(`Keeping real project: ${document.id} | Title: ${document.data().title}`);
      }
    }
    console.log('Done cleaning Firestore projects!');
  } catch (err) {
    console.error('Error during purge:', err);
  }
}

purgeSampleProjects();
