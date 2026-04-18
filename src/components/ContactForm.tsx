"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Button } from "./Button";
import { CheckCircle2, Loader2, Send, ChevronDown } from "lucide-react";

interface ContactFormProps {
  isModal?: boolean;
}

const projectTypes = [
  "Web Development",
  "App Development",
  "UI/UX Design",
  "SEO & Marketing"
];

export default function ContactForm({ isModal = false }: ContactFormProps) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    project: projectTypes[0],
    message: "",
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await addDoc(collection(db, "contact_submissions"), {
        ...formData,
        timestamp: serverTimestamp(),
      });
      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", project: projectTypes[0], message: "" });
    } catch (err: any) {
      console.error("Error adding document: ", err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const selectProject = (type: string) => {
    setFormData((prev) => ({ ...prev, project: type }));
    setDropdownOpen(false);
  };

  const textColor = isModal ? "text-slate-900" : "text-white";
  const labelColor = isModal ? "text-slate-500" : "text-slate-400";
  const inputBg = isModal ? "bg-slate-50" : "bg-white/5";
  const inputBorder = isModal ? "border-slate-200" : "border-white/10";
  const inputTextColor = isModal ? "text-slate-900" : "text-white";

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`w-full max-w-xl mx-auto py-12 px-6 rounded-3xl text-center ${isModal ? "" : "bg-white/5 backdrop-blur-sm border border-white/10"}`}
      >
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-emerald-500/20 rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-12 h-12 text-emerald-500" />
          </div>
        </div>
        <h3 className={`text-3xl font-bold mb-3 ${textColor}`}>Message Received</h3>
        <p className="text-slate-400 mb-10 max-w-sm mx-auto">
          Thank you for your interest. A strategic proposal will be sent to your inbox within 24 hours.
        </p>
        <Button
          onClick={() => setSuccess(false)}
          className={`${isModal ? "bg-slate-900 text-white" : "bg-emerald-500 text-white"} hover:opacity-90 rounded-full px-10 h-14 font-bold text-lg`}
        >
          Send Another
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="w-full max-w-xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className={`text-[10px] font-black ${labelColor} uppercase tracking-[0.2em] ml-1`}>
              Your Name
            </label>
            <input
              required
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className={`w-full ${inputBg} ${inputBorder} border ${inputTextColor} rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 transition-all placeholder:text-slate-500 font-medium`}
            />
          </div>
          <div className="space-y-2">
            <label className={`text-[10px] font-black ${labelColor} uppercase tracking-[0.2em] ml-1`}>
              Email Address
            </label>
            <input
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className={`w-full ${inputBg} ${inputBorder} border ${inputTextColor} rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 transition-all placeholder:text-slate-500 font-medium`}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className={`text-[10px] font-black ${labelColor} uppercase tracking-[0.2em] ml-1`}>
              Mobile Number
            </label>
            <input
              required
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className={`w-full ${inputBg} ${inputBorder} border ${inputTextColor} rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 transition-all placeholder:text-slate-500 font-medium`}
            />
          </div>

          {/* Custom Dropdown */}
          <div className="space-y-2 relative" ref={dropdownRef}>
            <label className={`text-[10px] font-black ${labelColor} uppercase tracking-[0.2em] ml-1`}>
              Project Type
            </label>
            <div 
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`w-full ${inputBg} ${inputBorder} border ${inputTextColor} rounded-2xl px-5 py-4 flex items-center justify-between cursor-pointer hover:border-emerald-500/50 transition-all group`}
            >
              <span className={formData.project ? "font-medium" : "text-slate-500 text-sm"}>
                {formData.project || "Select type"}
              </span>
              <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`} />
            </div>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className={`absolute z-50 left-0 right-0 mt-2 p-2 ${isModal ? "bg-white border-slate-200" : "bg-slate-900 border-white/10"} border rounded-2xl shadow-2xl overflow-hidden`}
                >
                  {projectTypes.map((type) => (
                    <div
                      key={type}
                      onClick={() => selectProject(type)}
                      className={`px-4 py-3 rounded-xl cursor-pointer transition-colors text-sm ${
                        formData.project === type 
                          ? (isModal ? "bg-emerald-50 text-emerald-600 font-bold" : "bg-emerald-500/10 text-emerald-400 font-bold")
                          : (isModal ? "hover:bg-slate-50 text-slate-700" : "hover:bg-white/5 text-slate-300")
                      }`}
                    >
                      {type}
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="space-y-2">
          <label className={`text-[10px] font-black ${labelColor} uppercase tracking-[0.2em] ml-1`}>
            Tell me about your project
          </label>
          <textarea
            required
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            placeholder="What are you looking to build?"
            className={`w-full ${inputBg} ${inputBorder} border ${inputTextColor} rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 transition-all placeholder:text-slate-500 font-medium resize-none`}
          />
        </div>

        {error && (
          <p className="text-red-400 text-sm font-bold text-center bg-red-400/10 py-3 rounded-xl border border-red-400/20">{error}</p>
        )}

        <Button
          disabled={loading}
          type="submit"
          className="w-full bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl py-8 text-xl font-black shadow-2xl shadow-emerald-500/30 group relative overflow-hidden"
        >
          {loading ? (
            <div className="flex items-center gap-3">
              <Loader2 className="w-6 h-6 animate-spin" />
              <span>Processing...</span>
            </div>
          ) : (
            <div className="flex items-center gap-3 relative z-10">
              <span>Send Message</span>
              <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </div>
          )}
          {/* Subtle button shine animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </Button>
      </form>
    </div>
  );
}
