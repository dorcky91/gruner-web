// import { motion } from "motion/react";
// import {
//   ArrowDownRight,
//   ArrowUpRight,
//   Leaf,
//   SolarPanel,
//   Zap,
// } from "lucide-react";

// import solarMain from "../../assets/images/solar/solar-main.jpg";
// import solarDetail01 from "../../assets/images/solar/solar-detail-01.jpg";
// import solarDetail02 from "../../assets/images/solar/solar-detail-02.jpg";

// function SolarHero() {
//   const handleScroll = () => {
//     document
//       .getElementById("solar-capabilities")
//       ?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <section
//       className="
//         relative
//         overflow-hidden
//         bg-[#F5F7F1]
//         pt-[105px]
//         text-[#143E33]
//         lg:pt-[115px]
//       ">
//       {/* =====================================================
//           BACKGROUND · ENERGY GRID
//       ===================================================== */}

//       {/* BASE GLOW */}
//       <div
//         className="
//           pointer-events-none
//           absolute
//           inset-0
//           bg-[radial-gradient(circle_at_78%_28%,rgba(157,216,39,.16),transparent_27%)]
//         "
//       />

//       {/* SECONDARY GLOW */}
//       <div
//         className="
//           pointer-events-none
//           absolute
//           -left-[15%]
//           top-[35%]
//           h-[520px]
//           w-[520px]
//           rounded-full
//           bg-[#9DD827]/[0.045]
//           blur-[120px]
//         "
//       />

//       {/* =====================================================
//           TECHNICAL GRID
//       ===================================================== */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           inset-0
//           opacity-[0.42]
//           [background-image:linear-gradient(rgba(20,62,51,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(20,62,51,.055)_1px,transparent_1px)]
//           [background-size:72px_72px]
//         "
//       />

//       {/* GRID FADE */}
//       <div
//         className="
//           pointer-events-none
//           absolute
//           inset-0
//           bg-[radial-gradient(ellipse_at_center,transparent_15%,#F5F7F1_82%)]
//         "
//       />

//       {/* =====================================================
//           LARGE ENERGY ORBIT
//       ===================================================== */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           right-[-11vw]
//           top-[2%]
//           hidden
//           aspect-square
//           w-[58vw]
//           rounded-full
//           border
//           border-[#7FAE00]/[0.10]
//           xl:block
//         ">
//         <div
//           className="
//             absolute
//             inset-[9%]
//             rounded-full
//             border
//             border-[#143E33]/[0.045]
//           "
//         />

//         <div
//           className="
//             absolute
//             inset-[21%]
//             rounded-full
//             border
//             border-[#9DD827]/[0.10]
//           "
//         />

//         {/* NODE 01 */}
//         <div
//           className="
//             absolute
//             left-[9%]
//             top-[29%]
//             flex
//             items-center
//             gap-3
//           ">
//           <span
//             className="
//               relative
//               flex
//               h-3
//               w-3
//               items-center
//               justify-center
//             ">
//             <span
//               className="
//                 absolute
//                 inset-0
//                 animate-ping
//                 rounded-full
//                 bg-[#9DD827]/30
//               "
//             />

//             <span
//               className="
//                 relative
//                 h-2
//                 w-2
//                 rounded-full
//                 bg-[#86B900]
//               "
//             />
//           </span>

//           <span
//             className="
//               text-[7px]
//               font-bold
//               uppercase
//               tracking-[0.18em]
//               text-[#6F9700]/55
//             ">
//             Generación
//           </span>
//         </div>

//         {/* NODE 02 */}
//         <div
//           className="
//             absolute
//             bottom-[13%]
//             left-[34%]
//             flex
//             items-center
//             gap-3
//           ">
//           <span className="h-2 w-2 rounded-full bg-[#9DD827]" />

//           <span
//             className="
//               text-[7px]
//               font-bold
//               uppercase
//               tracking-[0.18em]
//               text-[#6F9700]/50
//             ">
//             Storage
//           </span>
//         </div>

//         {/* NODE 03 */}
//         <div
//           className="
//             absolute
//             right-[6%]
//             top-[42%]
//             h-2
//             w-2
//             rounded-full
//             bg-[#143E33]/20
//           "
//         />
//       </div>

//       {/* =====================================================
//           HORIZONTAL ENERGY PATH
//       ===================================================== */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           left-[5%]
//           right-[5%]
//           top-[61%]
//           hidden
//           h-px
//           overflow-hidden
//           xl:block
//         ">
//         <div
//           className="
//             absolute
//             inset-0
//             bg-gradient-to-r
//             from-transparent
//             via-[#7FAE00]/20
//             to-transparent
//           "
//         />

//         <motion.div
//           animate={{
//             x: ["-100%", "700%"],
//           }}
//           transition={{
//             duration: 8,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//           className="
//             absolute
//             top-0
//             h-px
//             w-[15%]
//             bg-gradient-to-r
//             from-transparent
//             via-[#9DD827]
//             to-transparent
//           "
//         />
//       </div>

//       {/* =====================================================
//           VERTICAL ARCHITECTURAL LINES
//       ===================================================== */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           bottom-0
//           left-[7%]
//           top-0
//           hidden
//           w-px
//           bg-[#143E33]/[0.045]
//           xl:block
//         "
//       />

//       <div
//         className="
//           pointer-events-none
//           absolute
//           bottom-0
//           left-[50%]
//           top-0
//           hidden
//           w-px
//           bg-[#143E33]/[0.025]
//           xl:block
//         "
//       />

//       <div
//         className="
//           pointer-events-none
//           absolute
//           bottom-0
//           right-[7%]
//           top-0
//           hidden
//           w-px
//           bg-[#143E33]/[0.045]
//           xl:block
//         "
//       />

//       {/* =====================================================
//           SIDE LABEL
//       ===================================================== */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           bottom-[6%]
//           left-[2.5%]
//           hidden
//           origin-left
//           -rotate-90
//           items-center
//           gap-4
//           2xl:flex
//         ">
//         <span
//           className="
//             text-[7px]
//             font-bold
//             uppercase
//             tracking-[0.28em]
//             text-[#143E33]/20
//           ">
//           Integrated Energy Infrastructure
//         </span>

//         <span className="h-px w-10 bg-[#9DD827]/50" />
//       </div>

//       {/* =====================================================
//           TOP TECH LABEL
//       ===================================================== */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           right-[8%]
//           top-[130px]
//           hidden
//           items-center
//           gap-4
//           xl:flex
//         ">
//         <span
//           className="
//             text-[7px]
//             font-semibold
//             uppercase
//             tracking-[0.18em]
//             text-[#143E33]/20
//           ">
//           Energy System
//         </span>

//         <span className="h-px w-8 bg-[#9DD827]/60" />

//         <span
//           className="
//             text-[7px]
//             font-bold
//             tracking-[0.15em]
//             text-[#7FAE00]/50
//           ">
//           01—03
//         </span>
//       </div>

//       {/* =====================================================
//           GIANT TYPOGRAPHY
//       ===================================================== */}

//       <span
//         className="
//           pointer-events-none
//           absolute
//           -left-[1.5vw]
//           top-[100px]
//           hidden
//           select-none
//           text-[clamp(9rem,17vw,20rem)]
//           font-semibold
//           leading-none
//           tracking-[-0.09em]
//           text-[#143E33]/[0.018]
//           2xl:block
//         ">
//         ENERGY
//       </span>

//       {/* =====================================================
//           SIGNATURE ENERGY FLOW
//       ===================================================== */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           inset-0
//           z-[2]
//           hidden
//           overflow-hidden
//           xl:block
//         ">
//         <svg
//           viewBox="0 0 1600 900"
//           preserveAspectRatio="none"
//           className="
//             absolute
//             inset-0
//             h-full
//             w-full
//           ">
//           <defs>
//             <linearGradient
//               id="energyFlowGradient"
//               x1="0%"
//               y1="0%"
//               x2="100%"
//               y2="0%">
//               <stop offset="0%" stopColor="#9DD827" stopOpacity="0" />

//               <stop offset="25%" stopColor="#9DD827" stopOpacity="0.15" />

//               <stop offset="58%" stopColor="#9DD827" stopOpacity="0.85" />

//               <stop offset="100%" stopColor="#9DD827" stopOpacity="0" />
//             </linearGradient>

//             <filter id="energyGlow">
//               <feGaussianBlur stdDeviation="4" result="blur" />

//               <feMerge>
//                 <feMergeNode in="blur" />
//                 <feMergeNode in="SourceGraphic" />
//               </feMerge>
//             </filter>
//           </defs>

//           {/* BASE CURVE */}
//           <path
//             d="
//               M -100 650
//               C 260 610,
//                 390 460,
//                 690 480
//               C 960 500,
//                 1040 680,
//                 1320 570
//               C 1470 510,
//                 1540 400,
//                 1710 390
//             "
//             fill="none"
//             stroke="#143E33"
//             strokeOpacity="0.05"
//             strokeWidth="1"
//           />

//           {/* ACTIVE ENERGY CURVE */}
//           <motion.path
//             d="
//               M -100 650
//               C 260 610,
//                 390 460,
//                 690 480
//               C 960 500,
//                 1040 680,
//                 1320 570
//               C 1470 510,
//                 1540 400,
//                 1710 390
//             "
//             fill="none"
//             stroke="url(#energyFlowGradient)"
//             strokeWidth="2"
//             strokeLinecap="round"
//             filter="url(#energyGlow)"
//             initial={{
//               pathLength: 0,
//               opacity: 0,
//             }}
//             animate={{
//               pathLength: 1,
//               opacity: 1,
//             }}
//             transition={{
//               pathLength: {
//                 duration: 2.2,
//                 delay: 0.7,
//                 ease: [0.22, 1, 0.36, 1],
//               },
//               opacity: {
//                 duration: 0.8,
//                 delay: 0.6,
//               },
//             }}
//           />
//         </svg>

//         {/* ENERGY CORE */}
//         <motion.div
//           initial={{
//             opacity: 0,
//             scale: 0.5,
//           }}
//           animate={{
//             opacity: 1,
//             scale: 1,
//           }}
//           transition={{
//             duration: 0.8,
//             delay: 1.5,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="
//             absolute
//             left-[48.5%]
//             top-[51%]
//           ">
//           <motion.span
//             animate={{
//               scale: [1, 2.3, 1],
//               opacity: [0.25, 0, 0.25],
//             }}
//             transition={{
//               duration: 3.4,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             className="
//               absolute
//               -inset-4
//               rounded-full
//               border
//               border-[#9DD827]/50
//             "
//           />

//           <motion.span
//             animate={{
//               scale: [1, 1.7, 1],
//               opacity: [0.35, 0.05, 0.35],
//             }}
//             transition={{
//               duration: 2.8,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             className="
//               absolute
//               -inset-2
//               rounded-full
//               bg-[#9DD827]/15
//               blur-[2px]
//             "
//           />

//           <span
//             className="
//               relative
//               flex
//               h-4
//               w-4
//               items-center
//               justify-center
//               rounded-full
//               bg-[#9DD827]
//               shadow-[0_0_25px_rgba(157,216,39,.75)]
//             ">
//             <span
//               className="
//                 h-1.5
//                 w-1.5
//                 rounded-full
//                 bg-[#143E33]
//               "
//             />
//           </span>
//         </motion.div>
//       </div>

//       {/* =====================================================
//           CONTAINER
//       ===================================================== */}

//       <div
//         className="
//           relative
//           z-10
//           mx-auto
//           max-w-[1760px]
//           px-5
//           sm:px-8
//           lg:px-12
//           xl:px-16
//           2xl:px-20
//         ">
//         <div
//           className="
//             grid
//             gap-10
//             pb-14

//             lg:grid-cols-[.88fr_1.12fr]
//             lg:items-center
//             lg:gap-12
//             lg:pb-16

//             xl:grid-cols-[.82fr_1.18fr]
//             xl:gap-16
//           ">
//           {/* =================================================
//               LEFT
//           ================================================= */}

//           <motion.div
//             initial={{ opacity: 0, y: 25 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{
//               duration: 0.8,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="
//               relative
//               z-20
//               py-7
//               lg:py-10
//             ">
//             {/* EYEBROW */}

//             <div className="flex items-center gap-4">
//               <span
//                 className="
//                   flex
//                   h-11
//                   w-11
//                   shrink-0
//                   items-center
//                   justify-center
//                   rounded-full
//                   bg-[#9DD827]
//                   text-[#143E33]
//                   shadow-[0_10px_28px_rgba(157,216,39,.16)]
//                 ">
//                 <SolarPanel size={18} strokeWidth={1.6} />
//               </span>

//               <div>
//                 <div className="flex items-center gap-3">
//                   <span className="h-px w-7 bg-[#83B500]" />

//                   <p
//                     className="
//                       text-[9px]
//                       font-bold
//                       uppercase
//                       tracking-[0.2em]
//                       text-[#77A500]
//                     ">
//                     Energía
//                   </p>
//                 </div>

//                 <p
//                   className="
//                     mt-1.5
//                     text-[9px]
//                     font-medium
//                     uppercase
//                     tracking-[0.13em]
//                     text-[#143E33]/40
//                   ">
//                   Solar Fotovoltaico & BESS
//                 </p>
//               </div>
//             </div>

//             {/* TITLE */}

//             <h1
//               className="
//                 mt-9
//                 max-w-[720px]
//                 text-[clamp(3.5rem,5.5vw,6.7rem)]
//                 font-normal
//                 leading-[0.87]
//                 tracking-[-0.07em]
//                 text-[#143E33]
//               ">
//               Energía que
//               <span className="block">transforma</span>
//               <span className="block text-[#84B500]">la manera</span>
//               <span className="block">de operar.</span>
//             </h1>

//             {/* =================================================
//                 ENERGY SIGNATURE
//             ================================================= */}

//             <motion.div
//               initial={{
//                 opacity: 0,
//                 x: -20,
//               }}
//               animate={{
//                 opacity: 1,
//                 x: 0,
//               }}
//               transition={{
//                 duration: 0.8,
//                 delay: 0.55,
//               }}
//               className="
//                 mt-7
//                 flex
//                 items-center
//                 gap-4
//               ">
//               {/* SYMBOL */}

//               <div
//                 className="
//                   relative
//                   flex
//                   h-8
//                   w-8
//                   shrink-0
//                   items-center
//                   justify-center
//                 ">
//                 <motion.span
//                   animate={{
//                     rotate: 360,
//                   }}
//                   transition={{
//                     duration: 14,
//                     repeat: Infinity,
//                     ease: "linear",
//                   }}
//                   className="
//                     absolute
//                     inset-0
//                     rounded-full
//                     border
//                     border-dashed
//                     border-[#83B500]/40
//                   "
//                 />

//                 <span
//                   className="
//                     h-2
//                     w-2
//                     rounded-full
//                     bg-[#9DD827]
//                     shadow-[0_0_14px_rgba(157,216,39,.7)]
//                   "
//                 />
//               </div>

//               {/* ENERGY LINE */}

//               <div
//                 className="
//                   relative
//                   h-px
//                   w-14
//                   shrink-0
//                   overflow-hidden
//                   bg-[#143E33]/10
//                 ">
//                 <motion.span
//                   animate={{
//                     x: ["-100%", "200%"],
//                   }}
//                   transition={{
//                     duration: 2.5,
//                     repeat: Infinity,
//                     ease: "linear",
//                   }}
//                   className="
//                     absolute
//                     inset-y-0
//                     left-0
//                     w-7
//                     bg-gradient-to-r
//                     from-transparent
//                     via-[#9DD827]
//                     to-transparent
//                   "
//                 />
//               </div>

//               {/* SIGNATURE TEXT */}

//               <div>
//                 <p
//                   className="
//                     text-[8px]
//                     font-bold
//                     uppercase
//                     tracking-[0.22em]
//                     text-[#75A300]
//                   ">
//                   Energy in motion
//                 </p>

//                 <p
//                   className="
//                     mt-1
//                     text-[7px]
//                     font-medium
//                     uppercase
//                     tracking-[0.14em]
//                     text-[#143E33]/30
//                   ">
//                   Generation · Storage · Intelligence
//                 </p>
//               </div>
//             </motion.div>

//             {/* DESCRIPTION */}

//             <div
//               className="
//                 mt-7
//                 grid
//                 max-w-[650px]
//                 grid-cols-[3px_1fr]
//                 gap-5
//               ">
//               <span
//                 className="
//                   h-full
//                   min-h-[68px]
//                   w-[3px]
//                   rounded-full
//                   bg-[#9DD827]
//                 "
//               />

//               <p
//                 className="
//                   max-w-[590px]
//                   text-[15px]
//                   leading-7
//                   text-[#143E33]/60
//                   sm:text-[16px]
//                   sm:leading-8
//                 ">
//                 Integramos generación fotovoltaica y almacenamiento BESS para
//                 crear sistemas energéticos más eficientes, resilientes y
//                 preparados para las necesidades de cada operación.
//               </p>
//             </div>

//             {/* CTA */}

//             <div
//               className="
//                 mt-8
//                 flex
//                 flex-wrap
//                 items-center
//                 gap-x-7
//                 gap-y-4
//               ">
//               <button
//                 type="button"
//                 onClick={handleScroll}
//                 className="
//                   group
//                   inline-flex
//                   min-h-[54px]
//                   items-center
//                   gap-7
//                   rounded-full
//                   bg-[#143E33]
//                   px-7
//                   text-[12px]
//                   font-semibold
//                   text-white
//                   shadow-[0_14px_32px_rgba(20,62,51,.14)]
//                   transition-all
//                   duration-300

//                   hover:-translate-y-0.5
//                   hover:bg-[#9DD827]
//                   hover:text-[#143E33]
//                 ">
//                 Explorar solución
//                 <ArrowDownRight
//                   size={17}
//                   strokeWidth={1.6}
//                   className="
//                     transition-transform
//                     duration-300
//                     group-hover:translate-x-0.5
//                     group-hover:translate-y-0.5
//                   "
//                 />
//               </button>

//               <a
//                 href="/contacto"
//                 className="
//                   group
//                   inline-flex
//                   min-h-[54px]
//                   items-center
//                   gap-3
//                   text-[11px]
//                   font-semibold
//                   text-[#143E33]
//                 ">
//                 Hablar con un especialista
//                 <span
//                   className="
//                     flex
//                     h-8
//                     w-8
//                     items-center
//                     justify-center
//                     rounded-full
//                     border
//                     border-[#143E33]/10
//                     text-[#78A500]
//                     transition-all
//                     duration-300

//                     group-hover:border-[#9DD827]
//                     group-hover:bg-[#9DD827]
//                     group-hover:text-[#143E33]
//                   ">
//                   <ArrowUpRight size={14} strokeWidth={1.6} />
//                 </span>
//               </a>
//             </div>

//             {/* MICRO INFO */}

//             <div
//               className="
//                 mt-10
//                 flex
//                 flex-wrap
//                 items-center
//                 gap-x-6
//                 gap-y-3
//                 border-t
//                 border-[#143E33]/[0.08]
//                 pt-5
//               ">
//               <div className="flex items-center gap-3">
//                 <span className="relative flex h-2.5 w-2.5">
//                   <span
//                     className="
//                       absolute
//                       inset-0
//                       animate-ping
//                       rounded-full
//                       bg-[#9DD827]/35
//                     "
//                   />

//                   <span
//                     className="
//                       relative
//                       h-2.5
//                       w-2.5
//                       rounded-full
//                       bg-[#83B500]
//                     "
//                   />
//                 </span>

//                 <span
//                   className="
//                     text-[8px]
//                     font-semibold
//                     uppercase
//                     tracking-[0.16em]
//                     text-[#143E33]/40
//                   ">
//                   Generación + almacenamiento
//                 </span>
//               </div>

//               <span
//                 className="
//                   hidden
//                   h-4
//                   w-px
//                   bg-[#143E33]/10
//                   sm:block
//                 "
//               />

//               <div className="flex items-center gap-2">
//                 <Leaf size={13} strokeWidth={1.6} className="text-[#83B500]" />

//                 <span
//                   className="
//                     text-[8px]
//                     font-semibold
//                     uppercase
//                     tracking-[0.16em]
//                     text-[#143E33]/40
//                   ">
//                   Descarbonización
//                 </span>
//               </div>
//             </div>
//           </motion.div>

//           {/* =================================================
//               RIGHT / IMAGE
//           ================================================= */}

//           <motion.div
//             initial={{ opacity: 0, x: 35 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{
//               duration: 0.9,
//               delay: 0.08,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="
//               relative
//               min-h-[500px]
//               sm:min-h-[570px]
//               lg:min-h-[610px]
//               xl:min-h-[640px]
//             ">
//             {/* =================================================
//                 MAIN IMAGE
//             ================================================= */}

//             <div
//               className="
//                 absolute
//                 inset-0
//                 overflow-hidden
//                 rounded-[16px]
//                 bg-[#DDE5D7]
//                 shadow-[0_28px_70px_rgba(20,62,51,.11)]
//               ">
//               <img
//                 src={solarMain}
//                 alt="Proyecto de energía solar fotovoltaica GRUNER"
//                 className="
//                   h-full
//                   w-full
//                   object-cover
//                   transition-transform
//                   duration-[1800ms]
//                   hover:scale-[1.025]
//                 "
//               />

//               <div
//                 className="
//                   pointer-events-none
//                   absolute
//                   inset-0
//                   bg-gradient-to-t
//                   from-[#0E2F27]/65
//                   via-[#0E2F27]/5
//                   to-transparent
//                 "
//               />

//               {/* IMAGE TOP */}

//               <div
//                 className="
//                   absolute
//                   left-5
//                   right-5
//                   top-5
//                   flex
//                   items-start
//                   justify-between
//                   gap-4
//                   sm:left-7
//                   sm:right-7
//                   sm:top-7
//                 ">
//                 <div
//                   className="
//                     flex
//                     items-center
//                     gap-3
//                     rounded-full
//                     border
//                     border-white/25
//                     bg-white/90
//                     px-4
//                     py-2.5
//                     shadow-[0_8px_25px_rgba(0,0,0,.06)]
//                     backdrop-blur-xl
//                   ">
//                   <span className="h-2 w-2 rounded-full bg-[#83B500]" />

//                   <span
//                     className="
//                       text-[8px]
//                       font-bold
//                       uppercase
//                       tracking-[0.15em]
//                       text-[#143E33]
//                     ">
//                     Solar Fotovoltaico
//                   </span>
//                 </div>

//                 <span
//                   className="
//                     rounded-full
//                     border
//                     border-white/25
//                     bg-[#143E33]/70
//                     px-4
//                     py-2.5
//                     text-[8px]
//                     font-semibold
//                     uppercase
//                     tracking-[0.14em]
//                     text-white
//                     backdrop-blur-xl
//                   ">
//                   GRUNER Energy
//                 </span>
//               </div>

//               {/* =================================================
//                   TECH POINTS OVER IMAGE
//               ================================================= */}

//               <div
//                 className="
//                   pointer-events-none
//                   absolute
//                   inset-0
//                   hidden
//                   xl:block
//                 ">
//                 {/* PV NODE */}

//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.7 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.6, delay: 1.1 }}
//                   className="
//                     absolute
//                     left-[25%]
//                     top-[36%]
//                   ">
//                   <span className="relative flex h-4 w-4">
//                     <motion.span
//                       animate={{
//                         scale: [1, 2, 1],
//                         opacity: [0.45, 0, 0.45],
//                       }}
//                       transition={{
//                         duration: 3,
//                         repeat: Infinity,
//                       }}
//                       className="
//                         absolute
//                         inset-0
//                         rounded-full
//                         bg-[#B6ED35]
//                       "
//                     />

//                     <span
//                       className="
//                         relative
//                         m-auto
//                         h-2.5
//                         w-2.5
//                         rounded-full
//                         border-2
//                         border-white
//                         bg-[#9DD827]
//                         shadow-[0_0_18px_rgba(157,216,39,.8)]
//                       "
//                     />
//                   </span>

//                   <div
//                     className="
//                       absolute
//                       left-4
//                       top-2
//                       w-16
//                       border-t
//                       border-white/45
//                     "
//                   />

//                   <div
//                     className="
//                       absolute
//                       left-[80px]
//                       top-[-10px]
//                       whitespace-nowrap
//                       rounded-[8px]
//                       border
//                       border-white/20
//                       bg-[#143E33]/65
//                       px-3
//                       py-2
//                       backdrop-blur-md
//                     ">
//                     <p
//                       className="
//                         text-[6px]
//                         font-bold
//                         uppercase
//                         tracking-[0.16em]
//                         text-[#C6ED72]
//                       ">
//                       PV Generation
//                     </p>

//                     <p
//                       className="
//                         mt-1
//                         text-[7px]
//                         text-white/55
//                       ">
//                       Producción solar
//                     </p>
//                   </div>
//                 </motion.div>

//                 {/* ENERGY MANAGEMENT NODE */}

//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.7 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.6, delay: 1.35 }}
//                   className="
//                     absolute
//                     right-[23%]
//                     top-[49%]
//                   ">
//                   <span className="relative flex h-4 w-4">
//                     <motion.span
//                       animate={{
//                         scale: [1, 2, 1],
//                         opacity: [0.4, 0, 0.4],
//                       }}
//                       transition={{
//                         duration: 3.4,
//                         repeat: Infinity,
//                         delay: 0.5,
//                       }}
//                       className="
//                         absolute
//                         inset-0
//                         rounded-full
//                         bg-[#B6ED35]
//                       "
//                     />

//                     <span
//                       className="
//                         relative
//                         m-auto
//                         h-2.5
//                         w-2.5
//                         rounded-full
//                         border-2
//                         border-white
//                         bg-[#9DD827]
//                         shadow-[0_0_18px_rgba(157,216,39,.8)]
//                       "
//                     />
//                   </span>

//                   <div
//                     className="
//                       absolute
//                       right-4
//                       top-2
//                       w-14
//                       border-t
//                       border-white/45
//                     "
//                   />

//                   <div
//                     className="
//                       absolute
//                       right-[70px]
//                       top-[-10px]
//                       whitespace-nowrap
//                       rounded-[8px]
//                       border
//                       border-white/20
//                       bg-[#143E33]/65
//                       px-3
//                       py-2
//                       backdrop-blur-md
//                     ">
//                     <p
//                       className="
//                         text-[6px]
//                         font-bold
//                         uppercase
//                         tracking-[0.16em]
//                         text-[#C6ED72]
//                       ">
//                       Energy Management
//                     </p>

//                     <p
//                       className="
//                         mt-1
//                         text-[7px]
//                         text-white/55
//                       ">
//                       Gestión inteligente
//                     </p>
//                   </div>
//                 </motion.div>
//               </div>

//               {/* =================================================
//                   IMAGE BOTTOM
//               ================================================= */}

//               <div
//                 className="
//                   absolute
//                   bottom-0
//                   left-0
//                   right-0
//                   p-6
//                   sm:p-8
//                   xl:p-9
//                 ">
//                 <div
//                   className="
//                     flex
//                     flex-col
//                     gap-5
//                     sm:flex-row
//                     sm:items-end
//                     sm:justify-between
//                   ">
//                   <div>
//                     <p
//                       className="
//                         text-[8px]
//                         font-semibold
//                         uppercase
//                         tracking-[0.18em]
//                         text-[#C6ED72]
//                       ">
//                       Infraestructura energética
//                     </p>

//                     <h2
//                       className="
//                         mt-3
//                         max-w-[500px]
//                         text-[clamp(1.8rem,2.7vw,3rem)]
//                         font-normal
//                         leading-[0.95]
//                         tracking-[-0.05em]
//                         text-white
//                       ">
//                       Generar energía es solo
//                       <span className="block text-[#C6ED72]">
//                         el principio.
//                       </span>
//                     </h2>
//                   </div>

//                   <div className="flex shrink-0 items-center gap-3">
//                     <span
//                       className="
//                         text-[8px]
//                         font-semibold
//                         uppercase
//                         tracking-[0.14em]
//                         text-white/50
//                       ">
//                       Solar / BESS
//                     </span>

//                     <span className="h-px w-10 bg-white/30" />

//                     <span className="h-2 w-2 rounded-full bg-[#9DD827]" />
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* =================================================
//                 DETAIL IMAGE 01
//             ================================================= */}

//             <div
//               className="
//                 absolute
//                 -left-6
//                 bottom-[23%]
//                 hidden
//                 h-[140px]
//                 w-[108px]
//                 overflow-hidden
//                 rounded-[10px]
//                 border-[5px]
//                 border-[#F5F7F1]
//                 bg-white
//                 shadow-[0_18px_45px_rgba(20,62,51,.12)]
//                 xl:block
//               ">
//               <img
//                 src={solarDetail01}
//                 alt=""
//                 className="h-full w-full object-cover"
//               />
//             </div>

//             {/* =================================================
//                 DETAIL IMAGE 02
//             ================================================= */}

//             <div
//               className="
//                 absolute
//                 -right-5
//                 top-[25%]
//                 hidden
//                 h-[115px]
//                 w-[90px]
//                 overflow-hidden
//                 rounded-[10px]
//                 border-[5px]
//                 border-[#F5F7F1]
//                 bg-white
//                 shadow-[0_18px_45px_rgba(20,62,51,.12)]
//                 2xl:block
//               ">
//               <img
//                 src={solarDetail02}
//                 alt=""
//                 className="h-full w-full object-cover"
//               />
//             </div>

//             {/* =================================================
//                 SYSTEM STATUS
//             ================================================= */}

//             <div
//               className="
//                 absolute
//                 -left-5
//                 top-[15%]
//                 hidden
//                 rounded-[13px]
//                 border
//                 border-[#143E33]/[0.07]
//                 bg-white/95
//                 p-4
//                 shadow-[0_16px_40px_rgba(20,62,51,.09)]
//                 backdrop-blur-xl
//                 xl:block
//               ">
//               <p
//                 className="
//                   text-[7px]
//                   font-bold
//                   uppercase
//                   tracking-[0.16em]
//                   text-[#143E33]/35
//                 ">
//                 Sistema
//               </p>

//               <div className="mt-3 flex items-center gap-3">
//                 <span
//                   className="
//                     flex
//                     h-9
//                     w-9
//                     items-center
//                     justify-center
//                     rounded-[9px]
//                     bg-[#EEF5E1]
//                     text-[#7FAC00]
//                   ">
//                   <Zap size={16} strokeWidth={1.6} />
//                 </span>

//                 <div>
//                   <p className="text-[12px] font-semibold text-[#143E33]">
//                     Solar + BESS
//                   </p>

//                   <div className="mt-1 flex items-center gap-2">
//                     <span className="h-1.5 w-1.5 rounded-full bg-[#9DD827]" />

//                     <span
//                       className="
//                         text-[7px]
//                         uppercase
//                         tracking-[0.12em]
//                         text-[#143E33]/40
//                       ">
//                       Integrado
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* =====================================================
//           BOTTOM ENERGY ACCENT
//       ===================================================== */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           bottom-0
//           left-0
//           right-0
//           h-px
//           bg-gradient-to-r
//           from-transparent
//           via-[#9DD827]/50
//           to-transparent
//         "
//       />
//     </section>
//   );
// }

// export default SolarHero;

import { motion } from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Leaf,
  SolarPanel,
  Zap,
} from "lucide-react";

import solarMain from "../../assets/images/solar/solar-main.jpg";
import solarDetail01 from "../../assets/images/solar/solar-detail-01.jpg";
import solarDetail02 from "../../assets/images/solar/solar-detail-02.jpg";

function SolarHero() {
  const handleScroll = () => {
    document
      .getElementById("solar-capabilities")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F5F7F1]
        pt-[105px]
        text-[#143E33]
        lg:pt-[115px]
      ">
      {/* =====================================================
          BACKGROUND · ENERGY GRID
      ===================================================== */}

      {/* BASE GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_78%_28%,rgba(157,216,39,.16),transparent_27%)]
        "
      />

      {/* SECONDARY GLOW */}
      <div
        className="
          pointer-events-none
          absolute
          -left-[15%]
          top-[35%]
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#9DD827]/[0.045]
          blur-[120px]
        "
      />

      {/* =====================================================
          TECHNICAL GRID
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.42]
          [background-image:linear-gradient(rgba(20,62,51,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(20,62,51,.055)_1px,transparent_1px)]
          [background-size:72px_72px]
        "
      />

      {/* GRID FADE */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(ellipse_at_center,transparent_15%,#F5F7F1_82%)]
        "
      />

      {/* =====================================================
          LARGE ENERGY ORBIT
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-11vw]
          top-[2%]
          hidden
          aspect-square
          w-[58vw]
          rounded-full
          border
          border-[#7FAE00]/[0.10]
          xl:block
        ">
        <div
          className="
            absolute
            inset-[9%]
            rounded-full
            border
            border-[#143E33]/[0.045]
          "
        />

        <div
          className="
            absolute
            inset-[21%]
            rounded-full
            border
            border-[#9DD827]/[0.10]
          "
        />

        {/* NODE 01 */}
        <div
          className="
            absolute
            left-[9%]
            top-[29%]
            flex
            items-center
            gap-3
          ">
          <span
            className="
              relative
              flex
              h-3
              w-3
              items-center
              justify-center
            ">
            <span
              className="
                absolute
                inset-0
                animate-ping
                rounded-full
                bg-[#9DD827]/30
              "
            />

            <span
              className="
                relative
                h-2
                w-2
                rounded-full
                bg-[#86B900]
              "
            />
          </span>

          <span
            className="
              text-[11px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-[#6F9700]/55
            ">
            Generación
          </span>
        </div>

        {/* NODE 02 */}
        <div
          className="
            absolute
            bottom-[13%]
            left-[34%]
            flex
            items-center
            gap-3
          ">
          <span className="h-2 w-2 rounded-full bg-[#9DD827]" />

          <span
            className="
              text-[11px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-[#6F9700]/50
            ">
            Storage
          </span>
        </div>

        {/* NODE 03 */}
        <div
          className="
            absolute
            right-[6%]
            top-[42%]
            h-2
            w-2
            rounded-full
            bg-[#143E33]/20
          "
        />
      </div>

      {/* =====================================================
          HORIZONTAL ENERGY PATH
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[5%]
          right-[5%]
          top-[61%]
          hidden
          h-px
          overflow-hidden
          xl:block
        ">
        <div
          className="
            absolute
            inset-0
            bg-gradient-to-r
            from-transparent
            via-[#7FAE00]/20
            to-transparent
          "
        />

        <motion.div
          animate={{
            x: ["-100%", "700%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            top-0
            h-px
            w-[15%]
            bg-gradient-to-r
            from-transparent
            via-[#9DD827]
            to-transparent
          "
        />
      </div>

      {/* =====================================================
          VERTICAL ARCHITECTURAL LINES
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-[7%]
          top-0
          hidden
          w-px
          bg-[#143E33]/[0.045]
          xl:block
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-[50%]
          top-0
          hidden
          w-px
          bg-[#143E33]/[0.025]
          xl:block
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          right-[7%]
          top-0
          hidden
          w-px
          bg-[#143E33]/[0.045]
          xl:block
        "
      />

      {/* =====================================================
          SIDE LABEL
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-[6%]
          left-[2.5%]
          hidden
          origin-left
          -rotate-90
          items-center
          gap-4
          2xl:flex
        ">
        <span
          className="
            text-[11px]
            font-bold
            uppercase
            tracking-[0.28em]
            text-[#143E33]/20
          ">
          Integrated Energy Infrastructure
        </span>

        <span className="h-px w-10 bg-[#9DD827]/50" />
      </div>

      {/* =====================================================
          TOP TECH LABEL
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-[8%]
          top-[130px]
          hidden
          items-center
          gap-4
          xl:flex
        ">
        <span
          className="
            text-[11px]
            font-semibold
            uppercase
            tracking-[0.18em]
            text-[#143E33]/20
          ">
          Energy System
        </span>

        <span className="h-px w-8 bg-[#9DD827]/60" />
      </div>

      {/* =====================================================
          GIANT TYPOGRAPHY
      ===================================================== */}

      <span
        className="
          pointer-events-none
          absolute
          -left-[1.5vw]
          top-[100px]
          hidden
          select-none
          text-[clamp(9rem,17vw,20rem)]
          font-semibold
          leading-none
          tracking-[-0.09em]
          text-[#143E33]/[0.018]
          2xl:block
        ">
        ENERGY
      </span>

      {/* =====================================================
          SIGNATURE ENERGY FLOW
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-[2]
          hidden
          overflow-hidden
          xl:block
        ">
        <svg
          viewBox="0 0 1600 900"
          preserveAspectRatio="none"
          className="
            absolute
            inset-0
            h-full
            w-full
          ">
          <defs>
            <linearGradient
              id="energyFlowGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%">
              <stop offset="0%" stopColor="#9DD827" stopOpacity="0" />

              <stop offset="25%" stopColor="#9DD827" stopOpacity="0.15" />

              <stop offset="58%" stopColor="#9DD827" stopOpacity="0.85" />

              <stop offset="100%" stopColor="#9DD827" stopOpacity="0" />
            </linearGradient>

            <filter id="energyGlow">
              <feGaussianBlur stdDeviation="4" result="blur" />

              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* BASE CURVE */}
          <path
            d="
              M -100 650
              C 260 610,
                390 460,
                690 480
              C 960 500,
                1040 680,
                1320 570
              C 1470 510,
                1540 400,
                1710 390
            "
            fill="none"
            stroke="#143E33"
            strokeOpacity="0.05"
            strokeWidth="1"
          />

          {/* ACTIVE ENERGY CURVE */}
          <motion.path
            d="
              M -100 650
              C 260 610,
                390 460,
                690 480
              C 960 500,
                1040 680,
                1320 570
              C 1470 510,
                1540 400,
                1710 390
            "
            fill="none"
            stroke="url(#energyFlowGradient)"
            strokeWidth="2"
            strokeLinecap="round"
            filter="url(#energyGlow)"
            initial={{
              pathLength: 0,
              opacity: 0,
            }}
            animate={{
              pathLength: 1,
              opacity: 1,
            }}
            transition={{
              pathLength: {
                duration: 2.2,
                delay: 0.7,
                ease: [0.22, 1, 0.36, 1],
              },
              opacity: {
                duration: 0.8,
                delay: 0.6,
              },
            }}
          />
        </svg>

        {/* ENERGY CORE */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 1.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            absolute
            left-[48.5%]
            top-[51%]
          ">
          <motion.span
            animate={{
              scale: [1, 2.3, 1],
              opacity: [0.25, 0, 0.25],
            }}
            transition={{
              duration: 3.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              -inset-4
              rounded-full
              border
              border-[#9DD827]/50
            "
          />

          <motion.span
            animate={{
              scale: [1, 1.7, 1],
              opacity: [0.35, 0.05, 0.35],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              -inset-2
              rounded-full
              bg-[#9DD827]/15
              blur-[2px]
            "
          />

          <span
            className="
              relative
              flex
              h-4
              w-4
              items-center
              justify-center
              rounded-full
              bg-[#9DD827]
              shadow-[0_0_25px_rgba(157,216,39,.75)]
            ">
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#143E33]
              "
            />
          </span>
        </motion.div>
      </div>

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1760px]
          px-5
          sm:px-8
          lg:px-12
          xl:px-16
          2xl:px-20
        ">
        <div
          className="
            grid
            gap-10
            pb-14

            lg:grid-cols-[.88fr_1.12fr]
            lg:items-center
            lg:gap-12
            lg:pb-16

            xl:grid-cols-[.82fr_1.18fr]
            xl:gap-16
          ">
          {/* =================================================
              LEFT
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              z-20
              py-7
              lg:py-10
            ">
            {/* EYEBROW */}

            <div className="flex items-center gap-4">
              <span
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#9DD827]
                  text-[#143E33]
                  shadow-[0_10px_28px_rgba(157,216,39,.16)]
                ">
                <SolarPanel size={18} strokeWidth={1.6} />
              </span>

              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-7 bg-[#83B500]" />

                  <p
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-[#77A500]
                    ">
                    Energía
                  </p>
                </div>

                <p
                  className="
                    mt-1.5
                    text-[11px]
                    font-medium
                    uppercase
                    tracking-[0.13em]
                    text-[#143E33]/40
                  ">
                  Solar Fotovoltaico & BESS
                </p>
              </div>
            </div>

            {/* TITLE */}

            <h1
              className="
                mt-9
                max-w-[720px]
                text-[clamp(3.5rem,5.5vw,6.7rem)]
                font-normal
                leading-[0.87]
                tracking-[-0.07em]
                text-[#143E33]
              ">
              Energía que
              <span className="block">transforma</span>
              <span className="block text-[#84B500]">la manera</span>
              <span className="block">de operar.</span>
            </h1>

            {/* =================================================
                ENERGY SIGNATURE
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: -20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.55,
              }}
              className="
                mt-7
                flex
                items-center
                gap-4
              ">
              {/* SYMBOL */}

              <div
                className="
                  relative
                  flex
                  h-8
                  w-8
                  shrink-0
                  items-center
                  justify-center
                ">
                <motion.span
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    absolute
                    inset-0
                    rounded-full
                    border
                    border-dashed
                    border-[#83B500]/40
                  "
                />

                <span
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-[#9DD827]
                    shadow-[0_0_14px_rgba(157,216,39,.7)]
                  "
                />
              </div>

              {/* ENERGY LINE */}

              <div
                className="
                  relative
                  h-px
                  w-14
                  shrink-0
                  overflow-hidden
                  bg-[#143E33]/10
                ">
                <motion.span
                  animate={{
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    absolute
                    inset-y-0
                    left-0
                    w-7
                    bg-gradient-to-r
                    from-transparent
                    via-[#9DD827]
                    to-transparent
                  "
                />
              </div>

              {/* SIGNATURE TEXT */}

              <div>
                <p
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.22em]
                    text-[#75A300]
                  ">
                  Energy in motion
                </p>

                <p
                  className="
                    mt-1
                    text-[11px]
                    font-medium
                    uppercase
                    tracking-[0.14em]
                    text-[#143E33]/30
                  ">
                  Generation · Storage · Intelligence
                </p>
              </div>
            </motion.div>

            {/* DESCRIPTION */}

            <div
              className="
                mt-7
                grid
                max-w-[650px]
                grid-cols-[3px_1fr]
                gap-5
              ">
              <span
                className="
                  h-full
                  min-h-[68px]
                  w-[3px]
                  rounded-full
                  bg-[#9DD827]
                "
              />

              <p
                className="
                  max-w-[590px]
                  text-[15px]
                  leading-7
                  text-[#143E33]/60
                  sm:text-[16px]
                  sm:leading-8
                ">
                Integramos generación solar fotovoltaica, almacenamiento BESS y
                gestión energética para crear sistemas más eficientes,
                resilientes y preparados para las necesidades de cada operación.
              </p>
            </div>

            {/* CTA */}

            <div
              className="
                mt-8
                flex
                flex-wrap
                items-center
                gap-x-7
                gap-y-4
              ">
              <button
                type="button"
                onClick={handleScroll}
                className="
                  group
                  inline-flex
                  min-h-[54px]
                  items-center
                  gap-7
                  rounded-full
                  bg-[#143E33]
                  px-7
                  text-[12px]
                  font-semibold
                  text-white
                  shadow-[0_14px_32px_rgba(20,62,51,.14)]
                  transition-all
                  duration-300

                  hover:-translate-y-0.5
                  hover:bg-[#9DD827]
                  hover:text-[#143E33]
                ">
                Explorar solución
                <ArrowDownRight
                  size={17}
                  strokeWidth={1.6}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:translate-y-0.5
                  "
                />
              </button>

              <a
                href="/contacto"
                className="
                  group
                  inline-flex
                  min-h-[54px]
                  items-center
                  gap-3
                  text-[11px]
                  font-semibold
                  text-[#143E33]
                ">
                Hablar con un especialista
                <span
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#143E33]/10
                    text-[#78A500]
                    transition-all
                    duration-300

                    group-hover:border-[#9DD827]
                    group-hover:bg-[#9DD827]
                    group-hover:text-[#143E33]
                  ">
                  <ArrowUpRight size={14} strokeWidth={1.6} />
                </span>
              </a>
            </div>

            {/* MICRO INFO */}

            <div
              className="
                mt-10
                flex
                flex-wrap
                items-center
                gap-x-6
                gap-y-3
                border-t
                border-[#143E33]/[0.08]
                pt-5
              ">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span
                    className="
                      absolute
                      inset-0
                      animate-ping
                      rounded-full
                      bg-[#9DD827]/35
                    "
                  />

                  <span
                    className="
                      relative
                      h-2.5
                      w-2.5
                      rounded-full
                      bg-[#83B500]
                    "
                  />
                </span>

                <span
                  className="
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-[#143E33]/40
                  ">
                  Generación + almacenamiento
                </span>
              </div>

              <span
                className="
                  hidden
                  h-4
                  w-px
                  bg-[#143E33]/10
                  sm:block
                "
              />

              <div className="flex items-center gap-2">
                <Leaf size={13} strokeWidth={1.6} className="text-[#83B500]" />

                <span
                  className="
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-[#143E33]/40
                  ">
                  Descarbonización
                </span>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT / IMAGE
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              min-h-[500px]
              sm:min-h-[570px]
              lg:min-h-[610px]
              xl:min-h-[640px]
            ">
            {/* =================================================
                MAIN IMAGE
            ================================================= */}

            <div
              className="
                absolute
                inset-0
                overflow-hidden
                rounded-[16px]
                bg-[#DDE5D7]
                shadow-[0_28px_70px_rgba(20,62,51,.11)]
              ">
              <img
                src={solarMain}
                alt="Proyecto de energía solar fotovoltaica GRUNER"
                className="
                  h-full
                  w-full
                  object-cover
                  transition-transform
                  duration-[1800ms]
                  hover:scale-[1.025]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#0E2F27]/65
                  via-[#0E2F27]/5
                  to-transparent
                "
              />

              {/* IMAGE TOP */}

              <div
                className="
                  absolute
                  left-5
                  right-5
                  top-5
                  flex
                  items-start
                  justify-between
                  gap-4
                  sm:left-7
                  sm:right-7
                  sm:top-7
                ">
                <div
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-white/25
                    bg-white/90
                    px-4
                    py-2.5
                    shadow-[0_8px_25px_rgba(0,0,0,.06)]
                    backdrop-blur-xl
                  ">
                  <span className="h-2 w-2 rounded-full bg-[#83B500]" />

                  <span
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-[#143E33]
                    ">
                    Solar Fotovoltaico
                  </span>
                </div>

                <span
                  className="
                    rounded-full
                    border
                    border-white/25
                    bg-[#143E33]/70
                    px-4
                    py-2.5
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.14em]
                    text-white
                    backdrop-blur-xl
                  ">
                  GRUNER Energy
                </span>
              </div>

              {/* =================================================
                  TECH POINTS OVER IMAGE
              ================================================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  hidden
                  xl:block
                ">
                {/* PV NODE */}

                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="
                    absolute
                    left-[25%]
                    top-[36%]
                  ">
                  <span className="relative flex h-4 w-4">
                    <motion.span
                      animate={{
                        scale: [1, 2, 1],
                        opacity: [0.45, 0, 0.45],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                      }}
                      className="
                        absolute
                        inset-0
                        rounded-full
                        bg-[#B6ED35]
                      "
                    />

                    <span
                      className="
                        relative
                        m-auto
                        h-2.5
                        w-2.5
                        rounded-full
                        border-2
                        border-white
                        bg-[#9DD827]
                        shadow-[0_0_18px_rgba(157,216,39,.8)]
                      "
                    />
                  </span>

                  <div
                    className="
                      absolute
                      left-4
                      top-2
                      w-16
                      border-t
                      border-white/45
                    "
                  />

                  <div
                    className="
                      absolute
                      left-[80px]
                      top-[-10px]
                      whitespace-nowrap
                      rounded-[8px]
                      border
                      border-white/20
                      bg-[#143E33]/65
                      px-3
                      py-2
                      backdrop-blur-md
                    ">
                    <p
                      className="
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.16em]
                        text-[#C6ED72]
                      ">
                      PV Generation
                    </p>

                    <p
                      className="
                        mt-1
                        text-[11px]
                        text-white/55
                      ">
                      Producción solar
                    </p>
                  </div>
                </motion.div>

                {/* ENERGY MANAGEMENT NODE */}

                <motion.div
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.35 }}
                  className="
                    absolute
                    right-[23%]
                    top-[49%]
                  ">
                  <span className="relative flex h-4 w-4">
                    <motion.span
                      animate={{
                        scale: [1, 2, 1],
                        opacity: [0.4, 0, 0.4],
                      }}
                      transition={{
                        duration: 3.4,
                        repeat: Infinity,
                        delay: 0.5,
                      }}
                      className="
                        absolute
                        inset-0
                        rounded-full
                        bg-[#B6ED35]
                      "
                    />

                    <span
                      className="
                        relative
                        m-auto
                        h-2.5
                        w-2.5
                        rounded-full
                        border-2
                        border-white
                        bg-[#9DD827]
                        shadow-[0_0_18px_rgba(157,216,39,.8)]
                      "
                    />
                  </span>

                  <div
                    className="
                      absolute
                      right-4
                      top-2
                      w-14
                      border-t
                      border-white/45
                    "
                  />

                  <div
                    className="
                      absolute
                      right-[70px]
                      top-[-10px]
                      whitespace-nowrap
                      rounded-[8px]
                      border
                      border-white/20
                      bg-[#143E33]/65
                      px-3
                      py-2
                      backdrop-blur-md
                    ">
                    <p
                      className="
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.16em]
                        text-[#C6ED72]
                      ">
                      Energy Management
                    </p>

                    <p
                      className="
                        mt-1
                        text-[11px]
                        text-white/55
                      ">
                      Gestión inteligente
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* =================================================
                  IMAGE BOTTOM
              ================================================= */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  p-6
                  sm:p-8
                  xl:p-9
                ">
                <div
                  className="
                    flex
                    flex-col
                    gap-5
                    sm:flex-row
                    sm:items-end
                    sm:justify-between
                  ">
                  <div>
                    <p
                      className="
                        text-[11px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-[#C6ED72]
                      ">
                      Infraestructura energética
                    </p>

                    <h2
                      className="
                        mt-3
                        max-w-[500px]
                        text-[clamp(1.8rem,2.7vw,3rem)]
                        font-normal
                        leading-[0.95]
                        tracking-[-0.05em]
                        text-white
                      ">
                      Generar energía es solo
                      <span className="block text-[#C6ED72]">
                        el principio.
                      </span>
                    </h2>
                  </div>

                  <div className="flex shrink-0 items-center gap-3">
                    <span
                      className="
                        text-[11px]
                        font-semibold
                        uppercase
                        tracking-[0.14em]
                        text-white/50
                      ">
                      Solar / BESS
                    </span>

                    <span className="h-px w-10 bg-white/30" />

                    <span className="h-2 w-2 rounded-full bg-[#9DD827]" />
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                DETAIL IMAGE 01
            ================================================= */}

            <div
              className="
                absolute
                -left-6
                bottom-[23%]
                hidden
                h-[140px]
                w-[108px]
                overflow-hidden
                rounded-[10px]
                border-[5px]
                border-[#F5F7F1]
                bg-white
                shadow-[0_18px_45px_rgba(20,62,51,.12)]
                xl:block
              ">
              <img
                src={solarDetail01}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>

            {/* =================================================
                DETAIL IMAGE 02
            ================================================= */}

            <div
              className="
                absolute
                -right-5
                top-[25%]
                hidden
                h-[115px]
                w-[90px]
                overflow-hidden
                rounded-[10px]
                border-[5px]
                border-[#F5F7F1]
                bg-white
                shadow-[0_18px_45px_rgba(20,62,51,.12)]
                2xl:block
              ">
              <img
                src={solarDetail02}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>

            {/* =================================================
                SYSTEM STATUS
            ================================================= */}

            <div
              className="
                absolute
                -left-5
                top-[15%]
                hidden
                rounded-[13px]
                border
                border-[#143E33]/[0.07]
                bg-white/95
                p-4
                shadow-[0_16px_40px_rgba(20,62,51,.09)]
                backdrop-blur-xl
                xl:block
              ">
              <p
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-[#143E33]/35
                ">
                Sistema
              </p>

              <div className="mt-3 flex items-center gap-3">
                <span
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-[9px]
                    bg-[#EEF5E1]
                    text-[#7FAC00]
                  ">
                  <Zap size={16} strokeWidth={1.6} />
                </span>

                <div>
                  <p className="text-[12px] font-semibold text-[#143E33]">
                    Solar + BESS
                  </p>

                  <div className="mt-1 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#9DD827]" />

                    <span
                      className="
                        text-[11px]
                        uppercase
                        tracking-[0.12em]
                        text-[#143E33]/40
                      ">
                      Integrado
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* =====================================================
          BOTTOM ENERGY ACCENT
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-[#9DD827]/50
          to-transparent
        "
      />
    </section>
  );
}

export default SolarHero;
