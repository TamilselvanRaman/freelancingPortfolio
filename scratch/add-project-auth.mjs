import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth, signInAnonymously } from "firebase/auth";
import fs from "fs";
import path from "path";

// Read env file
const envPath = path.resolve(process.cwd(), ".env.local");
const envContent = fs.readFileSync(envPath, "utf-8");
const envVars = {};
envContent.split("\n").forEach((line) => {
  const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
  if (match) {
    const key = match[1];
    let value = match[2] || "";
    if (value.startsWith('"') && value.endsWith('"')) {
      value = value.slice(1, -1);
    }
    envVars[key] = value;
  }
});

const firebaseConfig = {
  apiKey: envVars.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: envVars.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: envVars.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: envVars.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: envVars.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: envVars.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: envVars.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

async function main() {
  const newProject = {
    title: "LID Travel Website",
    description: "A travel website demo prepared for a client review.",
    longDescription: "A premium travel and tourism platform demo showcasing interactive trip listings, responsive layouts, booking flow simulations, and high-fidelity user experiences tailored for modern client demonstrations.",
    featured: false,
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "UI/UX Demo"],
    order: 13,
    githubUrl: "https://github.com/TamilselvanRaman/lidtravelwebsite",
    liveUrl: "https://tamilselvanraman.github.io/lidtravelwebsite/",
    imageUrl: "",
    images: [],
    outcome: "Presented to client for design and layout validation."
  };

  console.log("Authenticating anonymously...");
  try {
    const userCredential = await signInAnonymously(auth);
    console.log("Authenticated with UID:", userCredential.user.uid);
    
    console.log("Adding new project to Firestore 'projects' collection...");
    const docRef = await addDoc(collection(db, "projects"), newProject);
    console.log("Successfully added project with ID:", docRef.id);
  } catch (error) {
    console.error("Operation failed:", error);
  }
  process.exit(0);
}

main();
