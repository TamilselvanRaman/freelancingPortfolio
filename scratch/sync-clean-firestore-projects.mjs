import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, getDocs, updateDoc, doc, setDoc } from 'firebase/firestore';
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

const CLEAN_PROJECTS = [
  {
    id: "vasandham-herbals",
    title: "Vasandhamherbals",
    description: "A full-stack herbal product e-commerce platform with Firebase backend, secure authentication, and Razorpay payment integration.",
    longDescription: "A complete herbal skincare e-commerce ecosystem built with React 18, Vite, and Tailwind CSS. Features dynamic cart state management, Firebase Authentication, Zoho inventory synchronization, and Razorpay payment gateway integration.",
    featured: true,
    technologies: ["React.js", "Vite", "Tailwind CSS", "Firebase", "Razorpay"],
    order: 0,
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    imageUrl: "/projectImages/vasandhamherbels.png",
    outcome: "Increased mobile store conversion rate by 45%.",
    hidden: false
  },
  {
    id: "astro-shastra",
    title: "AstroShastra",
    description: "A sophisticated spiritual consultation platform bridging ancient Vedic wisdom with modern technology. Features include real-time horoscope generation and birth chart analysis.",
    longDescription: "A high-fidelity Vedic astrology platform built with Next.js and TypeScript. Includes algorithmic real-time horoscope charts generation, automated kundali birth chart computations, and lead management control consoles.",
    featured: true,
    technologies: ["Next.js", "Firebase", "Tailwind CSS", "TypeScript"],
    order: 1,
    githubUrl: "",
    liveUrl: "https://nakshatrahub.in/",
    imageUrl: "/projectImages/VedicAstrology.png",
    outcome: "Facilitated over 1,500+ consultations with a 4.9/5 user satisfaction rate.",
    hidden: false
  },
  {
    id: "lid-travel-website",
    title: "LID Travel Website",
    description: "A premium travel and tourism platform showcase prepared for client review.",
    longDescription: "An interactive travel booking landing page showcase featuring smooth animations, mobile-responsive layout decks, and simulation pathways for pricing and packages.",
    featured: false,
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    order: 2,
    githubUrl: "https://github.com/TamilselvanRaman/lidtravelwebsite",
    liveUrl: "https://tamilselvanraman.github.io/lidtravelwebsite/",
    imageUrl: "/projectImages/lidtravelwebsite.png",
    outcome: "Presented and approved by client for design and layout validation.",
    hidden: false
  },
  {
    id: "uni-brains",
    title: "UniBrains AI",
    description: "An intelligent autonomous AI research and expense allocation assistant platform.",
    longDescription: "A cutting-edge AI orchestration workspace built with React, Next.js, and Python. Features automated bill splitting calculations, smart document parsing, and semantic search algorithms.",
    featured: true,
    technologies: ["Next.js", "Python", "FastAPI", "Tailwind CSS", "OpenAI"],
    order: 3,
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    imageUrl: "/projectImages/UNI_BRAINS.png",
    outcome: "Reduced expense reconciliation time by 60%.",
    hidden: false
  }
];

async function syncCleanProjects() {
  try {
    console.log("Logging in as admin...");
    await signInWithEmailAndPassword(auth, "admin@portfolio.com", "AdminPassword123");
    console.log("Logged in successfully!");

    // Clear existing docs
    const snapshot = await getDocs(collection(db, "projects"));
    console.log(`Clearing ${snapshot.docs.length} old documents...`);
    for (const docSnap of snapshot.docs) {
      await updateDoc(doc(db, "projects", docSnap.id), { hidden: true });
    }

    // Set clean project docs
    for (const proj of CLEAN_PROJECTS) {
      console.log(`Syncing clean project doc: ${proj.id}...`);
      await setDoc(doc(db, "projects", proj.id), proj, { merge: true });
    }

    console.log("Done syncing clean projects to Firestore!");
  } catch (err) {
    console.error("Error during sync:", err);
  }
}

syncCleanProjects();
