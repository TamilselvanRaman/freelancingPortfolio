"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionContainer from "../SectionContainer";

const testimonials = [
  {
    content: "Tamil Selvan transformed our vision into reality. The UI quality is exceptional, and the web app loads incredibly fast. Professional, communicative, and delivered ahead of schedule.",
    author: "Sarah J.",
    role: "Startup Founder",
    rating: 5,
  },
  {
    content: "One of the best developers I've worked with. He understood exactly what we needed and built a scalable solution that our users love. Highly recommend for any serious project.",
    author: "Michael T.",
    role: "Product Manager",
    rating: 5,
  }
];

export default function Testimonials() {
  return (
    <SectionContainer id="testimonials" bg="white">
      {/* Header Row */}
      <div className="flex flex-col md:flex-row md:items-end gap-4 mb-8">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight"
        >
          Feedback.
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="hidden md:block w-px h-10 bg-slate-300 mx-2 mb-2"
        />
        <motion.p 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl md:text-2xl text-slate-500 mb-1"
        >
          What clients have to say.
        </motion.p>
      </div>
      
      <hr className="border-slate-200 mb-12" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-slate-50 rounded-3xl p-8 md:p-10 relative"
          >
            <Quote className="absolute top-8 right-8 h-12 w-12 text-green-100 rotate-180" />
            
            <div className="flex gap-1 mb-6">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            
            <p className="text-slate-700 text-lg leading-relaxed mb-8 relative z-10">
              "{testimonial.content}"
            </p>
            
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-xl">
                {testimonial.author.charAt(0)}
              </div>
              <div>
                <h4 className="font-semibold text-slate-900">{testimonial.author}</h4>
                <p className="text-sm text-slate-500">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}
