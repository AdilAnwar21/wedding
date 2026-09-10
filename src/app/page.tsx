"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { MapPin, Clock, ChevronDown } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";

// Reusable component for continuous scroll animations (parallax-like)
const ScrollSection = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.5 0.5"] // starts when top of element hits bottom of screen, ends when middle hits middle
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  return (
    <section ref={ref} className={`w-full flex flex-col items-center justify-center px-6 ${className}`}>
      <motion.div style={{ opacity, y }} className="w-full flex flex-col items-center justify-center">
        {children}
      </motion.div>
    </section>
  );
};

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  const MAP_URL = "https://www.google.com/maps/dir//City+Palace,+City+Place,+Wadakkanchery+Rd,+near+BSNL+Office,+Kechery,+Thrissur,+Eranellur,+Kerala+680501/@11.2145924,75.7952836,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3ba7eb031193fd99:0x6d037e92a97fc40!2m2!1d76.1227409!2d10.619994?entry=ttu&g_ep=EgoyMDI2MDkwNi4wIKXMDSoASAFQAw%3D%3D";

  // For the first section (intro), we use a different scroll effect so it fades out as we scroll down
  const introRef = useRef<HTMLElement>(null);
  const { scrollYProgress: introProgress } = useScroll({
    target: introRef,
    offset: ["0 0", "1 0"] // starts when top hits top, ends when bottom hits top
  });
  const introOpacity = useTransform(introProgress, [0, 1], [1, 0]);
  const introY = useTransform(introProgress, [0, 1], [0, -100]);

  // For the couple names, we can give them a slightly different scroll speed for a cool parallax effect
  const coupleRef = useRef<HTMLElement>(null);
  const { scrollYProgress: coupleProgress } = useScroll({
    target: coupleRef,
    offset: ["0 1", "0.6 0.5"] 
  });
  const coupleOpacity = useTransform(coupleProgress, [0, 1], [0, 1]);
  const groomX = useTransform(coupleProgress, [0, 1], [-100, 0]);
  const brideX = useTransform(coupleProgress, [0, 1], [100, 0]);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0d3b37] text-white"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-center space-y-8"
            >
              <h1 className="font-arabic text-6xl md:text-8xl text-[#d4af37] tracking-wider drop-shadow-lg">
                السلام عليكم
              </h1>
              <p className="font-serif text-lg md:text-xl text-[#d4af37]/80 tracking-[0.3em] uppercase">
                Bismillah
              </p>
            </motion.div>
            <motion.div
              className="absolute bottom-20 w-48 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative min-h-screen bg-transparent overflow-hidden selection:bg-[#d4af37]/30 selection:text-emerald-900">
        
        {/* Fixed Background Elements (Frames stay on screen while content scrolls) */}
        <div className="fixed inset-0 pointer-events-none z-0 p-4 md:p-8">
          <div className="w-full h-full border-[1px] border-[#d4af37]/40 rounded-sm relative">
            <div className="absolute inset-2 border-[1px] border-[#d4af37]/20" />
            
            {/* Top Left Corner */}
            <div className="absolute -top-1 -left-1 w-24 h-24 md:w-32 md:h-32 opacity-80">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="fill-[#115e59]">
                <path d="M0,0 L200,0 C200,110.46 110.46,200 0,200 L0,0 Z" opacity="0.1"/>
                <path d="M0,0 L150,0 C150,82.84 82.84,150 0,150 L0,0 Z" opacity="0.2"/>
                <path d="M0,0 L100,0 C100,55.23 55.23,100 0,100 L0,0 Z" fill="#d4af37" opacity="0.4"/>
              </svg>
            </div>
            {/* Bottom Right Corner */}
            <div className="absolute -bottom-1 -right-1 w-24 h-24 md:w-32 md:h-32 opacity-80 rotate-180">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="fill-[#115e59]">
                <path d="M0,0 L200,0 C200,110.46 110.46,200 0,200 L0,0 Z" opacity="0.1"/>
                <path d="M0,0 L150,0 C150,82.84 82.84,150 0,150 L0,0 Z" opacity="0.2"/>
                <path d="M0,0 L100,0 C100,55.23 55.23,100 0,100 L0,0 Z" fill="#d4af37" opacity="0.4"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Scrolling Content container */}
        <div className="relative z-10 w-full flex flex-col pt-12 md:pt-0">
          
          {/* Section 1: Intro (Fades out when scrolling down) */}
          <section ref={introRef} className="min-h-screen flex flex-col items-center justify-center text-center relative px-4">
            <motion.div style={{ opacity: introOpacity, y: introY }} className="space-y-6">
              <h2 className="font-arabic text-4xl md:text-5xl text-[#d4af37]">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</h2>
              <div className="space-y-2">
                <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-emerald-900 font-bold">
                  In the name of Allah
                </p>
                <p className="uppercase tracking-[0.2em] text-[10px] md:text-xs text-emerald-900/70 font-medium">
                  The most Gracious, the most Merciful
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              style={{ opacity: introOpacity }}
              className="absolute bottom-16 flex flex-col items-center gap-2 text-[#d4af37] animate-bounce"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-80">Scroll</span>
              <ChevronDown className="w-5 h-5 opacity-80" />
            </motion.div>
          </section>

          {/* Section 2: Groom's Parents & Invitation */}
          <ScrollSection className="min-h-[70vh] text-center space-y-12">
            <div>
              <h3 className="text-2xl md:text-4xl font-bold text-emerald-900 font-serif tracking-wide">Mr. Noushad M.P & Mrs. Afsath P.K</h3>
              <p className="text-base md:text-lg text-emerald-800/80 italic mt-4 leading-relaxed max-w-md mx-auto">
                (MP House, Padinjare Kunnath Parambu,<br />Meenchanda Gate)
              </p>
            </div>
            
            <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto" />
            
            <p className="text-xl md:text-3xl text-emerald-900/90 leading-loose max-w-2xl font-serif px-4">
              Solicit your esteemed presence with family on the auspicious occasion of the marriage of our Son
            </p>
          </ScrollSection>

          {/* Section 3: The Couple (Special Parallax Animation) */}
          <section ref={coupleRef} className="min-h-[90vh] flex flex-col items-center justify-center py-20 px-4 relative w-full overflow-hidden">
            <motion.div style={{ opacity: coupleOpacity }} className="w-full flex flex-col items-center justify-center">
              <div className="absolute top-0 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
              
              <motion.h1 style={{ x: groomX }} className="font-script text-7xl md:text-[8rem] lg:text-[11rem] text-emerald-900 drop-shadow-sm text-center py-4 leading-none">
                Muhammed<br className="md:hidden" /> Ridwan
              </motion.h1>
              
              <div className="flex items-center gap-6 my-8 md:my-16">
                <div className="w-16 md:w-32 h-[1px] bg-[#d4af37]" />
                <span className="font-serif text-2xl md:text-4xl text-[#d4af37] italic">with</span>
                <div className="w-16 md:w-32 h-[1px] bg-[#d4af37]" />
              </div>

              <motion.h1 style={{ x: brideX }} className="font-script text-7xl md:text-[8rem] lg:text-[11rem] text-emerald-900 drop-shadow-sm text-center py-4 leading-none">
                Aneesha
              </motion.h1>
              
              <div className="absolute bottom-0 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
            </motion.div>
          </section>

          {/* Section 4: Bride's Parents */}
          <ScrollSection className="min-h-[50vh] text-center">
            <p className="text-lg md:text-xl text-emerald-800/80 italic max-w-lg mx-auto leading-relaxed">
              (D/o Mr. Muhammed Ashraf, Mrs. Saleena.P,<br />Kayanikkal House, Mathottam)
            </p>
          </ScrollSection>

          {/* Section 5: Date & Time */}
          <ScrollSection className="min-h-[80vh]">
            <div className="relative w-full max-w-2xl mx-auto border border-[#d4af37]/40 bg-white/60 backdrop-blur-sm p-10 md:p-16 rounded-sm shadow-xl">
              
              {/* Corner accents for the box */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#d4af37] -translate-x-1 -translate-y-1" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#d4af37] translate-x-1 -translate-y-1" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#d4af37] -translate-x-1 translate-y-1" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#d4af37] translate-x-1 translate-y-1" />

              <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
                <div className="text-center md:text-right">
                  <p className="text-xl md:text-2xl uppercase tracking-[0.2em] font-bold text-emerald-900">Sunday</p>
                  <p className="text-base text-[#d4af37] tracking-widest mt-2">2026</p>
                </div>
                
                <div className="text-8xl md:text-9xl font-bold font-serif gold-gradient">
                  18
                </div>
                
                <div className="text-center md:text-left">
                  <p className="text-xl md:text-2xl uppercase tracking-[0.2em] font-bold text-emerald-900">October</p>
                  <p className="text-sm text-[#d4af37] tracking-[0.1em] mt-2 whitespace-nowrap">(1448 JA AWWAL 7)</p>
                </div>
              </div>

              <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent my-10 md:my-12" />

              <div className="flex flex-col items-center gap-6 text-emerald-900">
                <div className="flex items-center gap-4 font-medium text-xl md:text-2xl">
                  <Clock className="w-6 h-6 md:w-8 md:h-8 text-[#d4af37]" />
                  <span>12:00 noon &mdash; 3:00 pm</span>
                </div>
              </div>
            </div>
          </ScrollSection>

          {/* Section 6: Location & Footer */}
          <ScrollSection className="min-h-screen pt-12 pb-24 flex flex-col justify-between">
            <div className="flex flex-col items-center mb-16">
              <div className="flex flex-col items-center gap-4 mt-4 mb-12 text-center">
                <div className="flex items-center gap-3 text-3xl md:text-4xl font-bold font-serif text-emerald-900">
                  <MapPin className="w-8 h-8 md:w-10 md:h-10 text-[#d4af37]" />
                  <span>City Palace Auditorium</span>
                </div>
                <span className="text-base md:text-lg text-emerald-800/80 uppercase tracking-[0.15em]">(B.C Road, Beypore)</span>
              </div>

              <a 
                href={MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center transition-transform hover:scale-105 duration-300"
              >
                <div className="p-6 bg-white shadow-2xl border border-[#d4af37]/30 rounded-xl inline-block transition-shadow group-hover:shadow-[#d4af37]/50">
                  <QRCodeSVG 
                    value={MAP_URL} 
                    size={180} 
                    fgColor="#064e3b" 
                    level="Q"
                  />
                </div>
                <div className="mt-8 px-12 py-5 bg-[#d4af37] text-white rounded-full text-base font-bold uppercase tracking-widest shadow-lg group-hover:bg-[#bf953f] group-hover:shadow-xl transition-all">
                  Get Directions
                </div>
              </a>
            </div>

            {/* Footer */}
            <div className="text-center w-full max-w-3xl mt-auto">
              <div className="w-40 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mb-10" />
              <p className="text-[#d4af37] italic font-serif text-2xl md:text-3xl mb-8">Sharing the happiness</p>
              <p className="text-emerald-900 font-bold text-xl md:text-2xl uppercase tracking-[0.15em] mb-10 leading-relaxed">
                Marwan, Hammad, Hadhi, & Dear & Near
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-emerald-800/90 font-medium">
                <span className="uppercase text-base tracking-[0.2em] text-[#d4af37]">Contact</span>
                <span className="text-xl md:text-2xl tracking-wider font-serif">9847651902</span>
                <span className="hidden sm:inline text-[#d4af37]">•</span>
                <span className="text-xl md:text-2xl tracking-wider font-serif">9947514544</span>
              </div>
            </div>
          </ScrollSection>

        </div>
      </main>
    </>
  );
}
