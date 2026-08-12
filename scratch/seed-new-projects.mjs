import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
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

const astroShastra = {
  title: "AstroShastra",
  description: "A sophisticated spiritual consultation platform bridging ancient Vedic wisdom with modern technology. Features include real-time horoscope generation, automated birth chart analysis, and a comprehensive admin ecosystem for lead management.",
  longDescription: "A high-fidelity Vedic astrology platform built with Next.js and TypeScript. Includes algorithmic real-time horoscope charts generation, automated kundali/birth chart computations, secure Firebase auth gateways, lead management control consoles, and dynamic email notifications integration.",
  technologies: ["Next.js", "Firebase", "Tailwind CSS", "TypeScript"],
  order: 2,
  githubUrl: "",
  liveUrl: "https://nakshatrahub.in/",
  imageUrl: "", // Left blank or local fallback
  outcome: "Facilitated over 1,500+ consultations with a 4.9/5 user satisfaction rate.",
  featured: true,
  hidden: false
};

const lidTravel = {
  title: "LID Travel Website",
  description: "A premium travel and tourism platform showcase prepared for client review.",
  longDescription: "An interactive travel booking landing page showcase featuring smooth animations, mobile-responsive layout decks, grid-based travel location highlights, and simulation pathways for pricing and packages.",
  technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Client Demo"],
  order: 13,
  githubUrl: "https://github.com/TamilselvanRaman/lidtravelwebsite",
  liveUrl: "https://tamilselvanraman.github.io/lidtravelwebsite/",
  imageUrl: "",
  outcome: "Presented and approved by client for design and layout validation.",
  featured: false,
  hidden: false
};

async function seed() {
  console.log("Authenticating as admin...");
  try {
    await signInWithEmailAndPassword(auth, "admin@portfolio.com", "AdminPassword123");
    console.log("Authenticated successfully!");
    
    console.log("Seeding projects into Firestore...");
    await setDoc(doc(collection(db, "projects"), "astro-shastra"), astroShastra);
    console.log("Successfully seeded AstroShastra!");

    await setDoc(doc(collection(db, "projects"), "lid-travel-website"), lidTravel);
    console.log("Successfully seeded LID Travel Website!");
  } catch (error) {
    console.error("Failed to seed projects:", error);
  }
  process.exit(0);
}

seed();
