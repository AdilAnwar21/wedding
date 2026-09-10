"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { MapPin, Calendar, Clock } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loader for 2.5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  const lineVariants: Variants = {
    hidden: { width: 0 },
    visible: { width: "100%", transition: { duration: 1.2, ease: "easeInOut" as const } }
  };

  const MAP_URL = "https://www.google.com/maps/dir//City+Palace,+City+Place,+Wadakkanchery+Rd,+near+BSNL+Office,+Kechery,+Thrissur,+Eranellur,+Kerala+680501/@11.2145924,75.7952836,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba7eb031193fd99:0x6d037e92a97fc40!2m2!1d76.1227409!2d10.619994?entry=ttu&g_ep=EgoyMDI2MDkwNi4wIKXMDSoASAFQAw%3D%3D";

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" as const } }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0d3b37] text-white"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" as const }}
              className="text-center space-y-6"
            >
              <h1 className="font-arabic text-6xl md:text-8xl text-[#d4af37] tracking-wider drop-shadow-lg">
                السلام عليكم
              </h1>
              <p className="font-serif text-lg md:text-xl text-[#d4af37]/80 tracking-[0.2em] uppercase">
                Bismillah
              </p>
            </motion.div>
            <motion.div
              className="absolute bottom-20 w-32 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <main className="min-h-screen py-8 md:py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        {/* Main Card Container */}
        <div className="relative max-w-4xl w-full bg-white shadow-2xl overflow-hidden rounded-sm">
          
          {/* Gold Border Frame */}
          <div className="absolute inset-3 md:inset-5 border-[1px] border-[#d4af37]/40 pointer-events-none z-10" />
          <div className="absolute inset-4 md:inset-6 border-[1px] border-[#d4af37]/20 pointer-events-none z-10" />

          {/* Decorative Corner SVGs (Gold/Emerald) */}
          <div className="absolute top-0 left-0 w-40 md:w-64 h-40 md:h-64 opacity-80 pointer-events-none">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="fill-[#115e59]">
              <path d="M0,0 L200,0 C200,110.46 110.46,200 0,200 L0,0 Z" opacity="0.1"/>
              <path d="M0,0 L150,0 C150,82.84 82.84,150 0,150 L0,0 Z" opacity="0.2"/>
              <path d="M0,0 L100,0 C100,55.23 55.23,100 0,100 L0,0 Z" fill="#d4af37" opacity="0.3"/>
            </svg>
          </div>
          <div className="absolute bottom-0 right-0 w-40 md:w-64 h-40 md:h-64 opacity-80 pointer-events-none rotate-180">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="fill-[#115e59]">
              <path d="M0,0 L200,0 C200,110.46 110.46,200 0,200 L0,0 Z" opacity="0.1"/>
              <path d="M0,0 L150,0 C150,82.84 82.84,150 0,150 L0,0 Z" opacity="0.2"/>
              <path d="M0,0 L100,0 C100,55.23 55.23,100 0,100 L0,0 Z" fill="#d4af37" opacity="0.3"/>
            </svg>
          </div>

          <div className="relative z-20 py-20 md:py-32 px-6 md:px-16 text-center flex flex-col items-center">
            
            {/* Header */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} className="space-y-3 mb-16">
              <h2 className="font-arabic text-3xl md:text-4xl text-[#d4af37]">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</h2>
              <p className="uppercase tracking-[0.25em] text-xs md:text-sm text-emerald-900/60 font-semibold">
                In the name of Allah
                <br />
                The most Gracious, the most Merciful
              </p>
            </motion.div>

            {/* Groom's Parents */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} className="mb-12">
              <h3 className="text-xl md:text-2xl font-bold text-emerald-900 font-serif">Mr. Noushad M.P & Mrs. Afsath P.K</h3>
              <p className="text-sm md:text-base text-emerald-800/70 italic mt-2 leading-relaxed">
                (MP House, Padinjare Kunnath Parambu<br />Meenchanda Gate)
              </p>
            </motion.div>

            {/* Invitation Request */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} className="mb-16 relative w-full flex justify-center">
              <p className="text-base md:text-lg text-emerald-900/90 leading-relaxed max-w-xl font-medium px-4">
                Solicit your esteemed presence with family on the auspicious occasion of the marriage of our Son
              </p>
            </motion.div>

            {/* The Couple */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} className="w-full py-8 my-8 relative flex flex-col items-center justify-center">
              <motion.div variants={lineVariants} className="absolute top-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
              
              <h1 className="font-script text-6xl md:text-8xl lg:text-9xl text-emerald-900 drop-shadow-sm my-6 py-2">
                Muhammed Ridwan
              </h1>
              
              <div className="flex items-center gap-4 my-2">
                <div className="w-12 h-[1px] bg-[#d4af37]" />
                <span className="font-serif text-lg md:text-xl text-[#d4af37] italic">with</span>
                <div className="w-12 h-[1px] bg-[#d4af37]" />
              </div>

              <h1 className="font-script text-6xl md:text-8xl lg:text-9xl text-emerald-900 drop-shadow-sm my-6 py-2">
                Aneesha
              </h1>
              
              <motion.div variants={lineVariants} className="absolute bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
            </motion.div>

            {/* Bride's Parents */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} className="mb-20 mt-8">
              <p className="text-sm md:text-base text-emerald-800/70 italic max-w-md mx-auto leading-relaxed">
                (D/o Mr. Muhammed Ashraf, Mrs. Saleena.P,<br />Kayanikkal House, Mathottam)
              </p>
            </motion.div>

            {/* Date and Time (Boxed elegant design) */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} className="mb-20 w-full max-w-lg">
              <div className="border border-[#d4af37]/30 bg-[#d4af37]/5 p-8 md:p-10 rounded-sm">
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
                  <div className="text-center md:text-right">
                    <p className="text-sm md:text-base uppercase tracking-[0.2em] font-bold text-emerald-900">Sunday</p>
                    <p className="text-xs text-[#d4af37] tracking-widest mt-1">2026</p>
                  </div>
                  
                  <div className="text-6xl md:text-7xl font-bold font-serif gold-gradient">
                    18
                  </div>
                  
                  <div className="text-center md:text-left">
                    <p className="text-sm md:text-base uppercase tracking-[0.2em] font-bold text-emerald-900">October</p>
                    <p className="text-xs text-[#d4af37] tracking-widest mt-1">(1448 JA AWWAL 7)</p>
                  </div>
                </div>

                <div className="w-full h-[1px] bg-[#d4af37]/20 my-8" />

                <div className="flex flex-col items-center gap-4 text-emerald-900">
                  <div className="flex items-center gap-3 font-medium">
                    <Clock className="w-5 h-5 text-[#d4af37]" />
                    <span className="text-lg">12:00 noon &mdash; 3:00 pm</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 mt-2">
                    <div className="flex items-center gap-2 text-xl font-bold font-serif">
                      <MapPin className="w-6 h-6 text-[#d4af37]" />
                      <span>City Palace Auditorium</span>
                    </div>
                    <span className="text-sm text-emerald-800/70 uppercase tracking-widest">(B.C Road, Beypore)</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Location & QR */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} className="mb-20 flex flex-col items-center">
              <a 
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center transition-transform hover:scale-105"
              >
                <div className="p-4 bg-white shadow-xl border border-[#d4af37]/20 rounded-xl inline-block transition-shadow group-hover:shadow-[#d4af37]/20">
                  <QRCodeSVG 
                    value={MAP_URL} 
                    size={140} 
                    fgColor="#064e3b" 
                    level="Q"
                  />
                </div>
                <div className="mt-6 px-8 py-3 bg-[#d4af37] text-white rounded-full text-sm font-bold uppercase tracking-widest shadow-md group-hover:bg-[#bf953f] transition-colors">
                  Get Directions
                </div>
              </a>
            </motion.div>

            {/* Footer info */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeInUp} className="text-center border-t border-[#d4af37]/30 pt-12 w-full max-w-2xl">
              <p className="text-[#d4af37] italic font-serif text-lg md:text-xl mb-4">Sharing the happiness</p>
              <p className="text-emerald-900 font-bold text-lg md:text-xl uppercase tracking-widest mb-6">
                Marwan, Hammad, Hadhi, & Dear & Near
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-emerald-800/80 font-medium">
                <span className="uppercase text-xs tracking-[0.2em] text-[#d4af37]">Contact</span>
                <span className="text-lg">9847651902</span>
                <span className="hidden sm:inline text-[#d4af37]">•</span>
                <span className="text-lg">9947514544</span>
              </div>
            </motion.div>

          </div>
        </div>
      </main>
    </>
  );
}
