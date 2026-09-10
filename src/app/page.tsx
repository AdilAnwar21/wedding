"use client";

import { motion } from "framer-motion";
import { QrCode, MapPin, Calendar, Clock } from "lucide-react";

export default function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  return (
    <main className="min-h-screen relative overflow-hidden bg-[#fdfbf7] flex flex-col items-center py-12 sm:py-24 px-4 sm:px-6 lg:px-8">
      {/* Decorative corners - top left */}
      <div className="absolute top-0 left-0 w-32 sm:w-48 h-32 sm:h-48 opacity-70 pointer-events-none">
        <svg viewBox="0 0 100 100" className="fill-emerald-800/20">
          <path d="M0,0 L100,0 C100,55.23 55.23,100 0,100 L0,0 Z" />
        </svg>
      </div>
      {/* Decorative corners - bottom right */}
      <div className="absolute bottom-0 right-0 w-32 sm:w-48 h-32 sm:h-48 opacity-70 pointer-events-none rotate-180">
        <svg viewBox="0 0 100 100" className="fill-emerald-800/20">
          <path d="M0,0 L100,0 C100,55.23 55.23,100 0,100 L0,0 Z" />
        </svg>
      </div>

      <div className="max-w-3xl w-full mx-auto text-center z-10 space-y-16">
        
        {/* Bismillah */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp}
          className="space-y-2 text-emerald-800/80 uppercase tracking-widest text-xs sm:text-sm font-medium"
        >
          <p>In the name of allah</p>
          <p>the most Gracious the Most Merciful</p>
        </motion.div>

        {/* Groom's Parents */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp}
          className="space-y-2"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-emerald-900 tracking-wide">Mr. Noushad M.P & Mrs. Afsath P.K</h2>
          <p className="text-sm sm:text-base text-emerald-800/70 italic">
            (MP House, Padinjare Kunnath Parambu<br />Meenchanda Gate)
          </p>
        </motion.div>

        {/* Invitation Text */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp}
        >
          <p className="text-base sm:text-lg text-emerald-800/90 leading-relaxed max-w-xl mx-auto">
            Solicit your esteemed presence with family on the auspicious occasion of the marriage of our Son
          </p>
        </motion.div>

        {/* The Couple */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp}
          className="py-8 space-y-6"
        >
          <h1 className="font-script text-5xl sm:text-7xl lg:text-8xl text-emerald-700 tracking-wide">
            Muhammed Ridwan
          </h1>
          <p className="font-serif text-lg sm:text-xl text-emerald-800/60 italic">with</p>
          <h1 className="font-script text-5xl sm:text-7xl lg:text-8xl text-emerald-700 tracking-wide">
            Aneesha
          </h1>
        </motion.div>

        {/* Bride's Parents */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp}
          className="space-y-2"
        >
          <p className="text-sm sm:text-base text-emerald-800/70 italic max-w-md mx-auto">
            (D/o Mr. Muhammed Ashraf, Mrs. Saleena.P,<br />Kayanikkal House, Mathottam)
          </p>
        </motion.div>

        {/* Date & Time block */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp}
          className="py-8 border-y border-emerald-800/20 max-w-lg mx-auto flex flex-col items-center justify-center space-y-6"
        >
          <div className="flex items-center gap-6 text-emerald-900">
            <div className="text-right">
              <p className="text-sm sm:text-base uppercase tracking-widest font-bold">Sunday</p>
            </div>
            <div className="text-5xl sm:text-6xl font-bold font-serif text-emerald-800">
              18
            </div>
            <div className="text-left">
              <p className="text-sm sm:text-base uppercase tracking-widest font-bold">October</p>
              <p className="text-sm sm:text-base text-emerald-800/80">2026</p>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-emerald-800/60 uppercase tracking-widest">(1448 JA AWWAL 7)</p>
          
          <div className="flex flex-col items-center gap-2 pt-4">
            <div className="flex items-center gap-2 text-emerald-800/90 font-medium">
              <Clock className="w-4 h-4" />
              <span>Between 12:00 noon & 3:00 pm</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-900 font-bold text-lg text-center">
              <MapPin className="w-5 h-5 text-emerald-700" />
              <span>at City Palace Auditorium</span>
            </div>
            <span className="text-sm text-emerald-800/70">(B.C Road, Beypore)</span>
          </div>
        </motion.div>

        {/* Location & QR */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp}
          className="flex flex-col items-center space-y-4 pt-4"
        >
          <div className="p-4 bg-white shadow-sm border border-emerald-100 rounded-xl inline-block">
            <QrCode className="w-24 h-24 text-emerald-800" strokeWidth={1} />
          </div>
          <p className="text-xs uppercase tracking-widest text-emerald-800/60 font-medium">scan for location</p>
        </motion.div>

        {/* Footer info */}
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp}
          className="pt-12 space-y-4"
        >
          <p className="text-emerald-800/80 italic font-medium">Sharing the happiness :</p>
          <p className="text-emerald-900 font-semibold text-lg">Marwan, Hammad, Hadhi, & Dear & Near</p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-emerald-800/70">
            <span>Contact : 9847651902</span>
            <span className="hidden sm:inline">•</span>
            <span>9947514544</span>
          </div>
        </motion.div>

      </div>
    </main>
  );
}
