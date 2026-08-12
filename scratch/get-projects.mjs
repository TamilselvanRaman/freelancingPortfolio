import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
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

async function main() {
  console.log("Fetching collections/documents...");
  try {
    const colRef = collection(db, "projects");
    const snapshot = await getDocs(colRef);
    console.log(`Found ${snapshot.docs.length} documents in 'projects' collection`);
    
    const projects = [];
    snapshot.docs.forEach((doc) => {
      const data = doc.data();
      // Clean up base64 image data for viewing
      const cleanedData = {
        id: doc.id,
        title: data.title || "",
        description: data.description || "",
        longDescription: data.longDescription || "",
        featured: data.featured || false,
        technologies: data.technologies || [],
        order: data.order || 0,
        githubUrl: data.githubUrl || "",
        liveUrl: data.liveUrl || data.url || "",
        hasImage: !!data.imageUrl,
        imageLength: data.imageUrl ? data.imageUrl.length : 0,
        hasImages: !!data.images,
        imagesCount: data.images ? data.images.length : 0,
        outcome: data.outcome || ""
      };
      projects.push(cleanedData);
    });

    // Sort by order or title
    projects.sort((a, b) => (a.order || 0) - (b.order || 0));

    fs.writeFileSync(
      path.resolve(process.cwd(), "scratch/projects_cleaned.json"),
      JSON.stringify(projects, null, 2),
      "utf-8"
    );
    console.log("Wrote cleaned projects data to scratch/projects_cleaned.json");
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
  process.exit(0);
}

main();
