import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
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
const auth = getAuth(app);

// Default admin details
const adminEmail = "[EMAIL_ADDRESS]";
const adminPassword = "[PASSWORD]";

async function main() {
  console.log(`Creating Admin user in Firebase Authentication...`);
  console.log(`Email: ${adminEmail}`);
  console.log(`Password: ${adminPassword}`);
  
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, adminEmail, adminPassword);
    console.log("Successfully created admin user with UID:", userCredential.user.uid);
    console.log("\nYou can now log in at /admin using these credentials.");
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      console.log("\n[Info]: This admin email is already registered in Firebase. You can log in with it directly.");
    } else {
      console.error("Failed to create admin user:", error);
    }
  }
  process.exit(0);
}

main();
