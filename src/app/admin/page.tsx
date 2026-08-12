"use client";

import React, { useState, useEffect } from "react";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged, 
  User 
} from "firebase/auth";
import { 
  collection, 
  getDocs, 
  doc, 
  setDoc, 
  deleteDoc, 
  getDoc,
  updateDoc
} from "firebase/firestore";
import { app, db } from "@/lib/firebase";
import { 
  Loader2, 
  Lock, 
  LogOut, 
  FolderGit2, 
  Plus, 
  Edit, 
  Trash2, 
  Home as HomeIcon, 
  Eye, 
  EyeOff,
  LayoutGrid, 
  TrendingUp, 
  Check, 
  AlertCircle,
  CreditCard,
  GripVertical,
  Upload,
  X
} from "lucide-react";
import { useRouter } from "next/navigation";

// Initialize Firebase Auth
const auth = getAuth(app);

// Premium Tailwind Styles
const inputStyle = "w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/20 text-slate-800 dark:text-slate-100 placeholder:text-slate-400";
const labelStyle = "text-[11px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest block mb-2";

// Utility to compress images before saving as Base64 to Firestore (max 1MB limit)
const compressImage = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target?.result as string;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const MAX_WIDTH = 800;
        const MAX_HEIGHT = 800;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx?.drawImage(img, 0, 0, width, height);
        
        const dataUrl = canvas.toDataURL("image/jpeg", 0.7); // 70% quality JPEG
        resolve(dataUrl);
      };
      img.onerror = (error) => reject(error);
    };
    reader.onerror = (error) => reject(error);
  });
};

export default function AdminPanel() {
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  
  // Login credentials
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  // App settings/sections content state
  const [activeTab, setActiveTab] = useState("projects");
  const [projects, setProjects] = useState<any[]>([]);
  const [loadingProjects, setLoadingProjects] = useState(false);
  const [saveLoading, setSaveLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // Project Form State
  const [editingProjectId, setEditingProjectId] = useState<string | null>(null);
  const [projectForm, setProjectForm] = useState({
    title: "",
    description: "",
    longDescription: "",
    technologies: "",
    order: 0,
    githubUrl: "",
    liveUrl: "",
    imageUrl: "",
    outcome: "",
    featured: false,
    hidden: false
  });

  // Hero Section Form State
  const [heroForm, setHeroForm] = useState({
    title: "We build websites that grow your business",
    subtitle: "I'm Tamil Selvan, a full-stack developer turning complex problems into elegant, high-performing digital solutions.",
    buttonText: "Let's Create Something Amazing"
  });

  // Services Form State
  const [servicesList, setServicesList] = useState([
    {
      id: "01",
      title: "Web Development",
      description: "High-performance, fully responsive websites and web apps built with Next.js, React, Node.js, and Firebase. Engineered for speed, scalability, and real business impact.",
      tags: "Next.js, React, Node.js, Firebase"
    },
    {
      id: "02",
      title: "UI/UX Design",
      description: "Clean, minimal, and conversion-focused interfaces. Every pixel is designed to guide your users naturally — from first click to final action.",
      tags: "Figma, Tailwind CSS, Framer Motion, GSAP"
    },
    {
      id: "03",
      title: "App Development",
      description: "Cross-platform mobile apps with smooth UX and native-level performance. Built with React Native and modern backend integrations for iOS and Android.",
      tags: "React Native, Expo, REST APIs, Firebase"
    }
  ]);

  // Results Section Form State
  const [resultsForm, setResultsForm] = useState({
    title: "Websites built for real business results",
    subtitle: "Websites optimized for real results.",
    stats: [
      { label: "OnPage SEO", desc: "Ready to be found on Google." },
      { label: "Tracking & Analytics", desc: "Track user statistics, marketing cookies and more." },
      { label: "100% Responsive", desc: "Optimized for desktop, tablet, mobile and everything in between." },
      { label: "ROI-First", desc: "So you get the most out of your ad budget." }
    ]
  });

  // Pricing Section Form State
  const [pricingForm, setPricingForm] = useState({
    title: "Pricing.",
    subtitle: "Clear, upfront packages tailored to your business stage. No hidden fees, no lock-ins.",
    plans: [
      {
        name: "Starter Plan",
        price: "₹3,999",
        features: "1-2 Page Website, Mobile Responsive, WhatsApp Integration"
      },
      {
        name: "Growth Plan",
        price: "₹6,999",
        features: "Business / Ecommerce Website, Up to 15 Products, Modern UI Design"
      },
      {
        name: "Ecommerce Plan",
        price: "₹11,999",
        features: "Full Ecommerce Setup, Payment Gateway (Razorpay), Up to 30 Products"
      }
    ]
  });

  const router = useRouter();

  // Drag and Drop refs
  const dragItem = React.useRef<number | null>(null);
  const dragOverItem = React.useRef<number | null>(null);

  // Track Auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthLoading(false);
      
      if (currentUser) {
        fetchProjects();
        fetchSectionsContent();
      }
    });
    return () => unsubscribe();
  }, []);

  // Fetch projects from Firestore
  const fetchProjects = async () => {
    setLoadingProjects(true);
    try {
      const colRef = collection(db, "projects");
      const snapshot = await getDocs(colRef);
      const list: any[] = [];
      snapshot.docs.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });
      list.sort((a, b) => (a.order || 0) - (b.order || 0));
      setProjects(list);
    } catch (err) {
      console.error("Error fetching projects:", err);
    } finally {
      setLoadingProjects(false);
    }
  };

  // Fetch sections content (with dynamic fallback to static default text)
  const fetchSectionsContent = async () => {
    try {
      const heroDoc = await getDoc(doc(db, "sections_content", "hero"));
      if (heroDoc.exists()) {
        setHeroForm(heroDoc.data() as any);
      }
      
      const servicesDoc = await getDoc(doc(db, "sections_content", "services"));
      if (servicesDoc.exists()) {
        const data = servicesDoc.data();
        if (data.list) {
          setServicesList(data.list);
        }
      }

      const resultsDoc = await getDoc(doc(db, "sections_content", "results"));
      if (resultsDoc.exists()) {
        setResultsForm(resultsDoc.data() as any);
      }

      const pricingDoc = await getDoc(doc(db, "sections_content", "pricing"));
      if (pricingDoc.exists()) {
        setPricingForm(pricingDoc.data() as any);
      }
    } catch (err) {
      console.error("Error fetching sections content (using static fallbacks):", err);
    }
  };

  // Handle Login submission
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");
    setLoginLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
      console.error("Login failed:", err);
      setLoginError(err.message || "Invalid credentials. Please try again.");
    } finally {
      setLoginLoading(false);
    }
  };

  // Handle Logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (err) {
      console.error("Logout failed:", err);
    }
  };

  // Create or Update Project
  const handleProjectSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaveLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const techsArray = projectForm.technologies
        .split(",")
        .map((t) => t.trim())
        .filter((t) => t.length > 0);

      const payload = {
        title: projectForm.title,
        description: projectForm.description,
        longDescription: projectForm.longDescription,
        technologies: techsArray,
        order: Number(projectForm.order),
        githubUrl: projectForm.githubUrl,
        liveUrl: projectForm.liveUrl,
        imageUrl: projectForm.imageUrl,
        outcome: projectForm.outcome,
        featured: projectForm.featured,
        hidden: projectForm.hidden
      };

      const projectDocRef = doc(
        collection(db, "projects"),
        editingProjectId || undefined
      );

      await setDoc(projectDocRef, payload);
      setSuccessMsg(editingProjectId ? "Project updated successfully!" : "New project added successfully!");
      
      // Reset form
      setEditingProjectId(null);
      setProjectForm({
        title: "",
        description: "",
        longDescription: "",
        technologies: "",
        order: 0,
        githubUrl: "",
        liveUrl: "",
        imageUrl: "",
        outcome: "",
        featured: false,
        hidden: false
      });

      fetchProjects();
    } catch (err: any) {
      console.error("Error saving project:", err);
      setErrorMsg(err.message || "Failed to save project. Ensure Firestore write rules allow access.");
    } finally {
      setSaveLoading(false);
    }
  };

  // Edit project button click handler
  const startEditProject = (proj: any) => {
    setEditingProjectId(proj.id);
    setProjectForm({
      title: proj.title || "",
      description: proj.description || "",
      longDescription: proj.longDescription || "",
      technologies: Array.isArray(proj.technologies) ? proj.technologies.join(", ") : proj.technologies || "",
      order: proj.order || 0,
      githubUrl: proj.githubUrl || "",
      liveUrl: proj.liveUrl || "",
      imageUrl: proj.imageUrl || "",
      outcome: proj.outcome || "",
      featured: proj.featured || false,
      hidden: proj.hidden || false
    });
  };

  // Delete project handler
  const handleDeleteProject = async (id: string) => {
    if (!confirm("Are you sure you want to delete this project?")) return;
    
    setLoadingProjects(true);
    try {
      await deleteDoc(doc(db, "projects", id));
      setSuccessMsg("Project deleted successfully!");
      fetchProjects();
    } catch (err: any) {
      console.error("Error deleting project:", err);
      setErrorMsg(err.message || "Failed to delete project.");
    } finally {
      setLoadingProjects(false);
    }
  };

  // Save Hero section configs
  const handleSaveHero = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaveLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      await setDoc(doc(db, "sections_content", "hero"), heroForm);
      setSuccessMsg("Hero section content saved successfully! Refresh home page to view updates.");
    } catch (err: any) {
      console.error("Error saving hero content:", err);
      setErrorMsg(err.message || "Failed to save Hero section content. Check database rules.");
    } finally {
      setSaveLoading(false);
    }
  };

  // Save Services section configs
  const handleSaveServices = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaveLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      await setDoc(doc(db, "sections_content", "services"), { list: servicesList });
      setSuccessMsg("Services section content saved successfully! Refresh home page to view updates.");
    } catch (err: any) {
      console.error("Error saving services content:", err);
      setErrorMsg(err.message || "Failed to save Services content. Check database rules.");
    } finally {
      setSaveLoading(false);
    }
  };

  const handleDragStart = (e: React.DragEvent, index: number) => {
    dragItem.current = index;
  };

  const handleDragEnter = (e: React.DragEvent, index: number) => {
    dragOverItem.current = index;
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDragEnd = async () => {
    if (dragItem.current === null || dragOverItem.current === null) return;
    if (dragItem.current === dragOverItem.current) return;

    // Rearrange state locally first
    const listCopy = [...projects];
    const draggedItem = listCopy[dragItem.current];
    listCopy.splice(dragItem.current, 1);
    listCopy.splice(dragOverItem.current, 0, draggedItem);

    // Re-assign index order based on their new position
    const updatedList = listCopy.map((proj, idx) => ({
      ...proj,
      order: idx
    }));

    setProjects(updatedList);
    
    // Reset refs
    dragItem.current = null;
    dragOverItem.current = null;

    // Save to Firestore!
    setSaveLoading(true);
    try {
      const batchPromises = updatedList.map((proj) => {
        const docRef = doc(db, "projects", proj.id);
        return updateDoc(docRef, { order: proj.order });
      });
      await Promise.all(batchPromises);
      setSuccessMsg("Projects order updated and saved successfully!");
    } catch (err: any) {
      console.error("Error saving updated order to Firestore:", err);
      setErrorMsg("Failed to sync project order to Firestore database.");
    } finally {
      setSaveLoading(false);
    }
  };

  const toggleProjectVisibility = async (proj: any) => {
    setLoadingProjects(true);
    try {
      const docRef = doc(db, "projects", proj.id);
      await updateDoc(docRef, { hidden: !proj.hidden });
      setSuccessMsg(`Project '${proj.title}' is now ${!proj.hidden ? 'hidden' : 'visible'} on the main page.`);
      fetchProjects();
    } catch (err: any) {
      console.error("Error toggling visibility:", err);
      setErrorMsg("Failed to toggle visibility.");
    } finally {
      setLoadingProjects(false);
    }
  };

  const handleServiceChange = (index: number, key: string, value: string) => {
    const updated = [...servicesList];
    updated[index] = { ...updated[index], [key]: value };
    setServicesList(updated);
  };

  const handleResultsStatChange = (index: number, key: string, value: string) => {
    const updatedStats = [...resultsForm.stats];
    updatedStats[index] = { ...updatedStats[index], [key]: value };
    setResultsForm({ ...resultsForm, stats: updatedStats });
  };

  const handlePricingPlanChange = (index: number, key: string, value: string) => {
    const updatedPlans = [...pricingForm.plans];
    updatedPlans[index] = { ...updatedPlans[index], [key]: value };
    setPricingForm({ ...pricingForm, plans: updatedPlans });
  };

  // Save Results configs
  const handleSaveResults = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaveLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      await setDoc(doc(db, "sections_content", "results"), resultsForm);
      setSuccessMsg("Results section content saved successfully! Refresh home page to view updates.");
    } catch (err: any) {
      console.error("Error saving results content:", err);
      setErrorMsg(err.message || "Failed to save Results content. Check database rules.");
    } finally {
      setSaveLoading(false);
    }
  };

  // Save Pricing configs
  const handleSavePricing = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaveLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      await setDoc(doc(db, "sections_content", "pricing"), pricingForm);
      setSuccessMsg("Pricing section content saved successfully! Refresh home page to view updates.");
    } catch (err: any) {
      console.error("Error saving pricing content:", err);
      setErrorMsg(err.message || "Failed to save Pricing content. Check database rules.");
    } finally {
      setSaveLoading(false);
    }
  };

  // Render Loader if auth state is loading
  if (authLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 dark:bg-slate-900">
        <div className="flex flex-col items-center gap-3">
          <Loader2 className="w-12 h-12 text-emerald-500 animate-spin" />
          <span className="text-slate-500 text-xs font-bold tracking-widest uppercase">Initializing Admin Console...</span>
        </div>
      </div>
    );
  }

  // Render Login state if not authenticated
  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 dark:bg-slate-900 p-4 transition-colors">
        <div className="w-full max-w-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-2xl rounded-3xl overflow-hidden p-8">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center text-emerald-500 border border-emerald-500/20">
              <Lock className="w-8 h-8" />
            </div>
          </div>
          <h2 className="text-2xl font-black text-center text-slate-900 dark:text-white tracking-tight leading-none mb-2">
            Portfolio Admin Access
          </h2>
          <p className="text-slate-400 dark:text-slate-500 text-xs font-semibold text-center mb-8 uppercase tracking-widest">
            Authentication Required
          </p>

          {loginError && (
            <div className="mb-6 p-4 bg-rose-500/5 border border-rose-500/20 text-rose-500 rounded-xl text-xs font-bold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label className={labelStyle}>Admin Email</label>
              <input
                required
                type="email"
                placeholder="admin@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputStyle}
              />
            </div>
            <div>
              <label className={labelStyle}>Password</label>
              <input
                required
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={inputStyle}
              />
            </div>
            <button
              disabled={loginLoading}
              type="submit"
              className="w-full bg-slate-900 text-white dark:bg-white dark:text-slate-900 rounded-xl h-12 font-bold hover:opacity-90 flex items-center justify-center gap-2 transition-all mt-6 shadow-lg shadow-slate-950/10"
            >
              {loginLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Logging in...</span>
                </>
              ) : (
                <span>Access Console</span>
              )}
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Render Admin Dashboard state
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 flex flex-col transition-colors duration-300">
      
      {/* Top Admin Header */}
      <header className="sticky top-0 z-40 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700/60 px-6 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
          <h1 className="text-lg font-black tracking-tight uppercase">Portfolio Console</h1>
          <span className="text-[10px] font-bold bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 px-2 py-0.5 rounded text-slate-500 dark:text-slate-400">
            Admin Mode
          </span>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => router.push("/")}
            className="text-xs font-bold text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
          >
            Go to Site
          </button>
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-1.5 px-3 py-2 bg-rose-500/10 hover:bg-rose-500 text-rose-600 hover:text-white text-xs font-bold rounded-xl transition-all border border-rose-500/10"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </header>

      {/* Admin Panel Workspace */}
      <div className="flex-1 max-w-7xl w-full mx-auto p-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Sidebar Tabs Navigation */}
        <aside className="lg:col-span-3 space-y-2">
          <div className="p-3 bg-slate-200/40 dark:bg-slate-850 rounded-2xl border border-slate-200/60 dark:border-slate-800 space-y-1">
            {[
              { id: "projects", label: "Manage Projects", icon: FolderGit2 },
              { id: "hero", label: "Hero Content", icon: HomeIcon },
              { id: "services", label: "Services Content", icon: LayoutGrid },
              { id: "results", label: "Results Content", icon: TrendingUp },
              { id: "pricing", label: "Pricing Content", icon: CreditCard }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  setSuccessMsg("");
                  setErrorMsg("");
                }}
                className={`w-full flex items-center gap-2.5 px-4 py-3 rounded-xl text-xs font-black transition-all ${
                  activeTab === tab.id
                    ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md"
                    : "hover:bg-slate-100 dark:hover:bg-slate-805 text-slate-600 dark:text-slate-400"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </aside>

        {/* Content Workspace Area */}
        <main className="lg:col-span-9 space-y-6">
          
          {/* Notifications alerts */}
          {successMsg && (
            <div className="p-4 bg-emerald-500/5 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-2xl text-xs font-bold flex items-center gap-2">
              <Check className="w-4 h-4 shrink-0" />
              <span>{successMsg}</span>
            </div>
          )}

          {errorMsg && (
            <div className="p-4 bg-rose-500/5 border border-rose-500/20 text-rose-500 rounded-2xl text-xs font-bold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* TAB 1: Projects Editor */}
          {activeTab === "projects" && (
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
              
              {/* Form Column - Left */}
              <div className="xl:col-span-7 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 rounded-[2rem] p-6 sm:p-8 space-y-6 shadow-sm">
                <div>
                  <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                    {editingProjectId ? "Edit Project Details" : "Create New Project"}
                  </h2>
                  <p className="text-slate-400 dark:text-slate-500 text-xs font-medium mt-1">
                    All inputs map dynamically to the homepage cards.
                  </p>
                </div>

                <form onSubmit={handleProjectSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelStyle}>Project Title</label>
                      <input
                        required
                        type="text"
                        placeholder="My Project"
                        value={projectForm.title}
                        onChange={(e) => setProjectForm({...projectForm, title: e.target.value})}
                        className={inputStyle}
                      />
                    </div>
                    <div>
                      <label className={labelStyle}>Sort Order (Index)</label>
                      <input
                        required
                        type="number"
                        placeholder="0"
                        value={projectForm.order}
                        onChange={(e) => setProjectForm({...projectForm, order: Number(e.target.value)})}
                        className={inputStyle}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelStyle}>Summary Description</label>
                    <textarea
                      required
                      placeholder="Short summary displayed on the card..."
                      rows={3}
                      value={projectForm.description}
                      onChange={(e) => setProjectForm({...projectForm, description: e.target.value})}
                      className={inputStyle}
                    />
                  </div>

                  <div>
                    <label className={labelStyle}>Long Details / Case Study Description</label>
                    <textarea
                      placeholder="Full details shown in the read case study modal..."
                      rows={5}
                      value={projectForm.longDescription}
                      onChange={(e) => setProjectForm({...projectForm, longDescription: e.target.value})}
                      className={inputStyle}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelStyle}>Technologies (Comma Separated)</label>
                      <input
                        required
                        type="text"
                        placeholder="React, Next.js, Firebase"
                        value={projectForm.technologies}
                        onChange={(e) => setProjectForm({...projectForm, technologies: e.target.value})}
                        className={inputStyle}
                      />
                    </div>
                    <div>
                      <label className={labelStyle}>Outcome Metric / Impact</label>
                      <input
                        type="text"
                        placeholder="45% increase in conversion rates"
                        value={projectForm.outcome}
                        onChange={(e) => setProjectForm({...projectForm, outcome: e.target.value})}
                        className={inputStyle}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelStyle}>Github Repo URL</label>
                      <input
                        type="url"
                        placeholder="https://github.com/..."
                        value={projectForm.githubUrl}
                        onChange={(e) => setProjectForm({...projectForm, githubUrl: e.target.value})}
                        className={inputStyle}
                      />
                    </div>
                    <div>
                      <label className={labelStyle}>Live Site / Demo URL</label>
                      <input
                        type="url"
                        placeholder="https://my-site.com"
                        value={projectForm.liveUrl}
                        onChange={(e) => setProjectForm({...projectForm, liveUrl: e.target.value})}
                        className={inputStyle}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelStyle}>Project Cover Image</label>
                    <div className="space-y-3">
                      <div className="flex flex-col sm:flex-row items-center gap-3">
                        <label className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs rounded-xl cursor-pointer transition-all shadow-sm shadow-emerald-500/10">
                          <Upload className="w-4 h-4" />
                          <span>Upload Image File</span>
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={async (e) => {
                              const file = e.target.files?.[0];
                              if (file) {
                                if (file.size > 5 * 1024 * 1024) {
                                  alert("Image is very large. Please select an image under 5MB.");
                                  return;
                                }
                                try {
                                  const compressedDataUrl = await compressImage(file);
                                  setProjectForm({ ...projectForm, imageUrl: compressedDataUrl });
                                } catch (error) {
                                  console.error("Error compressing image:", error);
                                  alert("Failed to process image.");
                                }
                              }
                            }}
                          />
                        </label>
                        <span className="text-[11px] text-slate-400 font-semibold">Or enter image URL / local path:</span>
                      </div>

                      <input
                        type="text"
                        placeholder="/projectImages/VedicAstrology.png or https://..."
                        value={projectForm.imageUrl}
                        onChange={(e) => setProjectForm({...projectForm, imageUrl: e.target.value})}
                        className={inputStyle}
                      />

                      {/* Live Image Preview */}
                      {projectForm.imageUrl && (
                        <div className="relative mt-2 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-slate-900 h-36 w-full sm:w-64 group">
                          <img
                            src={projectForm.imageUrl}
                            alt="Cover preview"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                            }}
                          />
                          <button
                            type="button"
                            onClick={() => setProjectForm({ ...projectForm, imageUrl: "" })}
                            className="absolute top-2 right-2 p-1.5 bg-slate-900/80 hover:bg-rose-600 text-white rounded-full transition-colors"
                            title="Remove Image"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-2">
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="featured"
                        checked={projectForm.featured}
                        onChange={(e) => setProjectForm({...projectForm, featured: e.target.checked})}
                        className="w-4 h-4 text-emerald-500 border-slate-350 rounded focus:ring-emerald-500/20"
                      />
                      <label htmlFor="featured" className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        Feature this project (displays in top tab)
                      </label>
                    </div>

                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        id="hidden"
                        checked={projectForm.hidden}
                        onChange={(e) => setProjectForm({...projectForm, hidden: e.target.checked})}
                        className="w-4 h-4 text-emerald-500 border-slate-350 rounded focus:ring-emerald-500/20"
                      />
                      <label htmlFor="hidden" className="text-xs font-bold text-slate-700 dark:text-slate-300">
                        Hide / Disable (do not show on live site)
                      </label>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 mt-8">
                    <button
                      disabled={saveLoading}
                      type="submit"
                      className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl h-12 px-6 font-bold flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-500/10"
                    >
                      {saveLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : null}
                      <span>{editingProjectId ? "Update Project" : "Add Project"}</span>
                    </button>
                    {editingProjectId && (
                      <button
                        type="button"
                        onClick={() => {
                          setEditingProjectId(null);
                          setProjectForm({
                            title: "",
                            description: "",
                            longDescription: "",
                            technologies: "",
                            order: 0,
                            githubUrl: "",
                            liveUrl: "",
                            imageUrl: "",
                            outcome: "",
                            featured: false,
                            hidden: false
                          });
                        }}
                        className="px-5 h-12 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-xl text-xs font-bold transition-all text-slate-500 dark:text-slate-400"
                      >
                        Cancel Edit
                      </button>
                    )}
                  </div>
                </form>
              </div>

              {/* List Column - Right */}
              <div className="xl:col-span-5 space-y-4">
                <h3 className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-widest block mb-2">
                  Existing Projects ({projects.length})
                </h3>

                {loadingProjects ? (
                  <div className="flex justify-center py-12">
                    <Loader2 className="w-8 h-8 text-emerald-500 animate-spin" />
                  </div>
                ) : (
                  <div className="space-y-3 max-h-[70vh] overflow-y-auto pr-2">
                    <p className="text-[10px] text-slate-400 dark:text-slate-500 italic mb-2">
                      💡 Tip: Drag and drop cards to change display order.
                    </p>
                    {projects.map((proj, index) => (
                      <div 
                        key={proj.id} 
                        draggable
                        onDragStart={(e) => handleDragStart(e, index)}
                        onDragEnter={(e) => handleDragEnter(e, index)}
                        onDragEnd={handleDragEnd}
                        onDragOver={handleDragOver}
                        className={`p-4 bg-white dark:bg-slate-800 border ${editingProjectId === proj.id ? 'border-emerald-450' : 'border-slate-200 dark:border-slate-700/60'} rounded-2xl shadow-sm flex items-center justify-between gap-4 cursor-grab active:cursor-grabbing hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors`}
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <div className="text-slate-350 dark:text-slate-600 cursor-grab shrink-0">
                            <GripVertical className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider block">
                              Order {proj.order} {proj.featured && "• Featured"} {proj.hidden && <span className="text-rose-500 font-extrabold ml-1 bg-rose-500/10 px-1 py-0.5 rounded">DISABLED/HIDDEN</span>}
                            </span>
                            <h4 className="font-bold text-sm text-slate-900 dark:text-white truncate">
                              {proj.title}
                            </h4>
                          </div>
                        </div>
                        <div className="flex items-center gap-1.5 shrink-0">
                          <button
                            onClick={() => toggleProjectVisibility(proj)}
                            className={`p-2 rounded-lg transition-colors ${proj.hidden ? 'bg-rose-50 hover:bg-rose-100 text-rose-500' : 'bg-slate-50 hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-850 text-slate-500 hover:text-slate-800 dark:hover:text-white'}`}
                            title={proj.hidden ? "Show project on main page" : "Hide project from main page"}
                          >
                            {proj.hidden ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                          </button>
                          <button
                            onClick={() => startEditProject(proj)}
                            className="p-2 bg-slate-50 hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-850 text-slate-500 hover:text-slate-800 dark:hover:text-white rounded-lg transition-colors"
                            title="Edit project"
                          >
                            <Edit className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleDeleteProject(proj.id)}
                            className="p-2 bg-rose-50 hover:bg-rose-100/60 text-rose-500 rounded-lg transition-colors"
                            title="Delete project"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

            </div>
          )}

          {/* TAB 2: Hero Editor */}
          {activeTab === "hero" && (
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 rounded-[2rem] p-6 sm:p-8 space-y-6 shadow-sm max-w-2xl">
              <div>
                <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Edit Hero Section Content
                </h2>
                <p className="text-slate-400 dark:text-slate-500 text-xs font-medium mt-1">
                  Updates the hero header and subtexts instantly.
                </p>
              </div>

              <form onSubmit={handleSaveHero} className="space-y-5">
                <div>
                  <label className={labelStyle}>Hero Title Heading</label>
                  <textarea
                    required
                    placeholder="We build websites that grow your business"
                    rows={3}
                    value={heroForm.title}
                    onChange={(e) => setHeroForm({...heroForm, title: e.target.value})}
                    className={inputStyle}
                  />
                </div>

                <div>
                  <label className={labelStyle}>Hero Subtext Paragraph</label>
                  <textarea
                    required
                    placeholder="Subtext explanation..."
                    rows={4}
                    value={heroForm.subtitle}
                    onChange={(e) => setHeroForm({...heroForm, subtitle: e.target.value})}
                    className={inputStyle}
                  />
                </div>

                <div>
                  <label className={labelStyle}>CTA Button Text</label>
                  <input
                    required
                    type="text"
                    placeholder="Let's Create Something Amazing"
                    value={heroForm.buttonText}
                    onChange={(e) => setHeroForm({...heroForm, buttonText: e.target.value})}
                    className={inputStyle}
                  />
                </div>

                <div className="pt-4">
                  <button
                    disabled={saveLoading}
                    type="submit"
                    className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl h-12 px-6 font-bold flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-500/10"
                  >
                    {saveLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : null}
                    <span>Save Hero Content</span>
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* TAB 3: Services Editor */}
          {activeTab === "services" && (
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 rounded-[2rem] p-6 sm:p-8 space-y-6 shadow-sm max-w-3xl">
              <div>
                <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Edit Services Section Content
                </h2>
                <p className="text-slate-400 dark:text-slate-500 text-xs font-medium mt-1">
                  Edit descriptions and tech stacks for each of the three columns.
                </p>
              </div>

              <form onSubmit={handleSaveServices} className="space-y-8">
                {servicesList.map((service, index) => (
                  <div key={service.id} className="p-5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl space-y-4">
                    <span className="text-[9px] font-black bg-emerald-500 text-white px-2 py-0.5 rounded uppercase tracking-wider">
                      Service {service.id}
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelStyle}>Service Title</label>
                        <input
                          required
                          type="text"
                          value={service.title}
                          onChange={(e) => handleServiceChange(index, "title", e.target.value)}
                          className={inputStyle}
                        />
                      </div>
                      <div>
                        <label className={labelStyle}>Featured Tech Tags (Comma Separated)</label>
                        <input
                          required
                          type="text"
                          value={service.tags}
                          onChange={(e) => handleServiceChange(index, "tags", e.target.value)}
                          className={inputStyle}
                        />
                      </div>
                    </div>
                    <div>
                      <label className={labelStyle}>Description Details</label>
                      <textarea
                        required
                        rows={3}
                        value={service.description}
                        onChange={(e) => handleServiceChange(index, "description", e.target.value)}
                        className={inputStyle}
                      />
                    </div>
                  </div>
                ))}

                <div className="pt-2">
                  <button
                    disabled={saveLoading}
                    type="submit"
                    className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl h-12 px-6 font-bold flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-500/10"
                  >
                    {saveLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : null}
                    <span>Save Services Content</span>
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* TAB 4: Results Editor */}
          {activeTab === "results" && (
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 rounded-[2rem] p-6 sm:p-8 space-y-6 shadow-sm max-w-3xl">
              <div>
                <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Edit Results Section Content
                </h2>
                <p className="text-slate-400 dark:text-slate-500 text-xs font-medium mt-1">
                  Configure titles and the key business features listed in Section 4.
                </p>
              </div>

              <form onSubmit={handleSaveResults} className="space-y-6">
                <div className="grid grid-cols-1 gap-5">
                  <div>
                    <label className={labelStyle}>Section Main Headline</label>
                    <input
                      required
                      type="text"
                      value={resultsForm.title}
                      onChange={(e) => setResultsForm({...resultsForm, title: e.target.value})}
                      className={inputStyle}
                    />
                  </div>
                  <div>
                    <label className={labelStyle}>Section Subtitle</label>
                    <input
                      required
                      type="text"
                      value={resultsForm.subtitle}
                      onChange={(e) => setResultsForm({...resultsForm, subtitle: e.target.value})}
                      className={inputStyle}
                    />
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-700">
                  <h3 className={labelStyle}>Editable Stats Cards</h3>
                  {resultsForm.stats.map((stat, index) => (
                    <div key={index} className="p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={labelStyle}>Stat/Feature Title</label>
                        <input
                          required
                          type="text"
                          value={stat.label}
                          onChange={(e) => handleResultsStatChange(index, "label", e.target.value)}
                          className={inputStyle}
                        />
                      </div>
                      <div>
                        <label className={labelStyle}>Stat/Feature Description</label>
                        <input
                          required
                          type="text"
                          value={stat.desc}
                          onChange={(e) => handleResultsStatChange(index, "desc", e.target.value)}
                          className={inputStyle}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <button
                    disabled={saveLoading}
                    type="submit"
                    className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl h-12 px-6 font-bold flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-500/10"
                  >
                    {saveLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : null}
                    <span>Save Results Content</span>
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* TAB 5: Pricing Editor */}
          {activeTab === "pricing" && (
            <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 rounded-[2rem] p-6 sm:p-8 space-y-6 shadow-sm max-w-3xl">
              <div>
                <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                  Edit Pricing Section Content
                </h2>
                <p className="text-slate-400 dark:text-slate-500 text-xs font-medium mt-1">
                  Configure packages, prices, and features shown in Section 5.
                </p>
              </div>

              <form onSubmit={handleSavePricing} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelStyle}>Section Headline</label>
                    <input
                      required
                      type="text"
                      value={pricingForm.title}
                      onChange={(e) => setPricingForm({...pricingForm, title: e.target.value})}
                      className={inputStyle}
                    />
                  </div>
                  <div>
                    <label className={labelStyle}>Section Subtitle</label>
                    <input
                      required
                      type="text"
                      value={pricingForm.subtitle}
                      onChange={(e) => setPricingForm({...pricingForm, subtitle: e.target.value})}
                      className={inputStyle}
                    />
                  </div>
                </div>

                <div className="space-y-6 pt-4 border-t border-slate-100 dark:border-slate-700">
                  <h3 className={labelStyle}>Pricing Packages</h3>
                  {pricingForm.plans.map((plan, index) => (
                    <div key={index} className="p-5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl space-y-4">
                      <span className="text-[9px] font-black bg-emerald-500 text-white px-2 py-0.5 rounded uppercase tracking-wider">
                        Package {index + 1}: {plan.name}
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className={labelStyle}>Plan Display Name</label>
                          <input
                            required
                            type="text"
                            value={plan.name}
                            onChange={(e) => handlePricingPlanChange(index, "name", e.target.value)}
                            className={inputStyle}
                          />
                        </div>
                        <div>
                          <label className={labelStyle}>Price Tag</label>
                          <input
                            required
                            type="text"
                            value={plan.price}
                            onChange={(e) => handlePricingPlanChange(index, "price", e.target.value)}
                            className={inputStyle}
                          />
                        </div>
                      </div>
                      <div>
                        <label className={labelStyle}>Included Features (Comma Separated)</label>
                        <input
                          required
                          type="text"
                          value={plan.features}
                          onChange={(e) => handlePricingPlanChange(index, "features", e.target.value)}
                          className={inputStyle}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <button
                    disabled={saveLoading}
                    type="submit"
                    className="bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl h-12 px-6 font-bold flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-500/10"
                  >
                    {saveLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : null}
                    <span>Save Pricing Content</span>
                  </button>
                </div>
              </form>
            </div>
          )}

        </main>

      </div>
    </div>
  );
}
