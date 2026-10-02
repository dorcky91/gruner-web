// import { motion } from "motion/react";
// import {
//   ArrowDownRight,
//   ArrowRight,
//   Factory,
//   Flame,
//   Leaf,
//   Recycle,
//   Sparkles,
//   Wind,
//   Zap,
// } from "lucide-react";

// /* =========================================================
//    DATA — CONTENIDO BASADO EN GRUNER
// ========================================================= */

// const solutions = [
//   {
//     number: "01",
//     title: "Plantas de selección",
//     shortTitle: "Selección",
//     eyebrow: "Residuos sólidos urbanos",
//     description:
//       "Tratamiento mecánico de residuos sólidos urbanos para separar materiales valorizables.",
//     result: "Materiales valorizables",
//     icon: Recycle,
//   },
//   {
//     number: "02",
//     title: "Plantas de biogás",
//     shortTitle: "Biogás",
//     eyebrow: "Digestión anaerobia",
//     description:
//       "Aprovechamiento de residuos mediante procesos de digestión anaerobia para la generación de biogás.",
//     result: "Biogás",
//     icon: Zap,
//   },
//   {
//     number: "03",
//     title: "Termovalorización",
//     shortTitle: "Termovalorización",
//     eyebrow: "Valorización energética",
//     description:
//       "Valorización térmica de residuos sólidos urbanos, residuos de manejo especial y residuos agroindustriales.",
//     result: "Energía",
//     icon: Flame,
//   },
//   {
//     number: "04",
//     title: "Compostaje",
//     shortTitle: "Compostaje",
//     eyebrow: "Residuos biodegradables",
//     description:
//       "Tratamiento biológico de residuos biodegradables para la obtención de composta y biofertilizante.",
//     result: "Composta · Biofertilizante",
//     icon: Leaf,
//   },
//   {
//     number: "05",
//     title: "Desgasificación",
//     shortTitle: "Desgasificación",
//     eyebrow: "Rellenos sanitarios",
//     description:
//       "Soluciones para rellenos sanitarios que integran valorización de biogás, tratamiento de lixiviados, sellado y clausura.",
//     result: "Gestión integral",
//     icon: Wind,
//   },
// ];

// /* =========================================================
//    SMALL NODE
// ========================================================= */

// function RouteNode({ active = false }) {
//   return (
//     <span className="relative flex h-5 w-5 items-center justify-center">
//       {active && (
//         <motion.span
//           animate={{
//             scale: [1, 2.1, 1],
//             opacity: [0.3, 0, 0.3],
//           }}
//           transition={{
//             duration: 2.4,
//             repeat: Infinity,
//             ease: "easeOut",
//           }}
//           className="
//             absolute
//             h-5
//             w-5
//             rounded-full
//             bg-[#B8F23A]
//           "
//         />
//       )}

//       <span
//         className={`
//           relative
//           z-10
//           block
//           rounded-full
//           border-[3px]
//           border-white
//           shadow-[0_0_0_1px_rgba(20,62,51,.08)]

//           ${active ? "h-3 w-3 bg-[#B8F23A]" : "h-2.5 w-2.5 bg-[#143E33]"}
//         `}
//       />
//     </span>
//   );
// }

// /* =========================================================
//    MAIN
// ========================================================= */

// function ResiduosStreamsSection() {
//   return (
//     <section
//       id="residuos-streams"
//       className="
//         relative
//         overflow-hidden
//         bg-[#F4F7F1]
//         py-16
//         text-[#143E33]

//         lg:py-20
//       ">
//       {/* =====================================================
//           BACKGROUND
//       ===================================================== */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           inset-0
//           opacity-[0.22]
//           [background-image:linear-gradient(rgba(20,62,51,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(20,62,51,.025)_1px,transparent_1px)]
//           [background-size:72px_72px]
//         "
//       />

//       <div
//         className="
//           pointer-events-none
//           absolute
//           -left-[220px]
//           top-[35%]
//           h-[500px]
//           w-[500px]
//           rounded-full
//           bg-[#B8F23A]/[0.07]
//           blur-[130px]
//         "
//       />

//       <div
//         className="
//           pointer-events-none
//           absolute
//           -right-[200px]
//           top-[-170px]
//           h-[520px]
//           w-[520px]
//           rounded-full
//           bg-[#B8F23A]/[0.08]
//           blur-[130px]
//         "
//       />

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
//         {/* ===================================================
//             HEADER
//         =================================================== */}

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.25 }}
//           transition={{
//             duration: 0.7,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="
//             grid
//             gap-8

//             lg:grid-cols-[1fr_410px]
//             lg:items-end
//           ">
//           <div>
//             <div className="flex items-center gap-4">
//               <span
//                 className="
//                   flex
//                   h-10
//                   w-10
//                   items-center
//                   justify-center
//                   rounded-full
//                   bg-[#B8F23A]
//                   text-[#143E33]
//                 ">
//                 <Recycle size={17} strokeWidth={1.7} />
//               </span>

//               <div className="flex items-center gap-3">
//                 <span className="h-px w-8 bg-[#83B500]" />

//                 <p
//                   className="
//                     text-[8px]
//                     font-bold
//                     uppercase
//                     tracking-[0.22em]
//                     text-[#76A400]
//                   ">
//                   Valorización de residuos
//                 </p>
//               </div>
//             </div>

//             <h2
//               className="
//                 mt-5
//                 max-w-[1050px]
//                 text-[clamp(2.8rem,4.6vw,5.5rem)]
//                 font-normal
//                 leading-[0.92]
//                 tracking-[-0.065em]
//               ">
//               Un residuo no tiene
//               <span className="block">un solo destino.</span>
//               <span className="block text-[#83B500]">Tiene posibilidades.</span>
//             </h2>
//           </div>

//           <div className="lg:pb-1">
//             <p
//               className="
//                 max-w-[400px]
//                 text-[11px]
//                 leading-6
//                 text-[#143E33]/46
//               ">
//               Diferentes tecnologías permiten seleccionar, transformar,
//               aprovechar o gestionar cada corriente según sus características.
//             </p>

//             <div className="mt-4 flex items-center gap-3">
//               <Sparkles
//                 size={11}
//                 strokeWidth={1.5}
//                 className="text-[#83B500]"
//               />

//               <span
//                 className="
//                   text-[7px]
//                   font-bold
//                   uppercase
//                   tracking-[0.16em]
//                   text-[#143E33]/30
//                 ">
//                 Cinco rutas de valorización
//               </span>
//             </div>
//           </div>
//         </motion.div>

//         {/* ===================================================
//             EDITORIAL MAP
//         =================================================== */}

//         <motion.div
//           initial={{ opacity: 0, y: 28 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.08 }}
//           transition={{
//             duration: 0.85,
//             delay: 0.08,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="
//             relative
//             mt-11
//             overflow-hidden
//             rounded-[30px]
//             border
//             border-[#143E33]/[0.07]
//             bg-white
//             shadow-[0_30px_90px_rgba(20,62,51,.07)]
//           ">
//           {/* =================================================
//               TOP BAR
//           ================================================= */}

//           <div
//             className="
//               relative
//               z-30
//               flex
//               flex-col
//               gap-4
//               border-b
//               border-[#143E33]/[0.07]
//               px-6
//               py-5

//               sm:flex-row
//               sm:items-center
//               sm:justify-between
//               lg:px-8
//             ">
//             <div className="flex items-center gap-4">
//               <span
//                 className="
//                   text-[7px]
//                   font-bold
//                   uppercase
//                   tracking-[0.18em]
//                   text-[#78A500]
//                 ">
//                 Rutas tecnológicas
//               </span>

//               <span className="hidden h-px w-10 bg-[#143E33]/10 sm:block" />

//               <span
//                 className="
//                   hidden
//                   text-[6px]
//                   uppercase
//                   tracking-[0.14em]
//                   text-[#143E33]/25

//                   sm:block
//                 ">
//                 Del residuo al aprovechamiento
//               </span>
//             </div>

//             <div className="flex items-center gap-3">
//               <span className="relative flex h-2 w-2">
//                 <span
//                   className="
//                     absolute
//                     inset-0
//                     animate-ping
//                     rounded-full
//                     bg-[#9DD827]/30
//                   "
//                 />

//                 <span
//                   className="
//                     relative
//                     h-2
//                     w-2
//                     rounded-full
//                     bg-[#83B500]
//                   "
//                 />
//               </span>

//               <span
//                 className="
//                   text-[6px]
//                   font-bold
//                   uppercase
//                   tracking-[0.14em]
//                   text-[#143E33]/28
//                 ">
//                 05 soluciones
//               </span>
//             </div>
//           </div>

//           {/* =================================================
//               DESKTOP MAP
//           ================================================= */}

//           <div
//             className="
//               relative
//               hidden
//               min-h-[790px]
//               overflow-hidden

//               lg:block
//             ">
//             {/* ===============================================
//                 DARK LANDSCAPE
//             =============================================== */}

//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 bottom-0
//                 right-0
//                 top-[42%]
//                 w-[67%]
//                 bg-[#10372E]
//                 [clip-path:polygon(20%_0,100%_0,100%_100%,0_100%)]
//               "
//             />

//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 bottom-0
//                 right-0
//                 top-[42%]
//                 w-[67%]
//                 opacity-[0.12]
//                 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)]
//                 [background-size:38px_38px]
//                 [clip-path:polygon(20%_0,100%_0,100%_100%,0_100%)]
//               "
//             />

//             {/* ===============================================
//                 GIANT BACKGROUND NUMBERS
//             =============================================== */}

//             <span
//               className="
//                 pointer-events-none
//                 absolute
//                 -left-5
//                 top-[50px]
//                 select-none
//                 text-[210px]
//                 font-light
//                 leading-none
//                 tracking-[-0.1em]
//                 text-[#143E33]/[0.025]
//               ">
//               01
//             </span>

//             <span
//               className="
//                 pointer-events-none
//                 absolute
//                 left-[37%]
//                 top-[105px]
//                 select-none
//                 text-[180px]
//                 font-light
//                 leading-none
//                 tracking-[-0.1em]
//                 text-[#143E33]/[0.025]
//               ">
//               02
//             </span>

//             <span
//               className="
//                 pointer-events-none
//                 absolute
//                 right-[2%]
//                 top-[260px]
//                 select-none
//                 text-[190px]
//                 font-light
//                 leading-none
//                 tracking-[-0.1em]
//                 text-white/[0.025]
//               ">
//               03
//             </span>

//             {/* ===============================================
//                 MASTER ROUTE
//             =============================================== */}

//             <svg
//               viewBox="0 0 1500 790"
//               preserveAspectRatio="none"
//               className="
//                 pointer-events-none
//                 absolute
//                 inset-0
//                 z-10
//                 h-full
//                 w-full
//               ">
//               {/* ghost line */}

//               <path
//                 d="
//                   M 90 260
//                   C 240 210, 350 210, 465 275
//                   C 575 335, 655 265, 750 225
//                   C 860 180, 980 240, 1030 340
//                   C 1080 440, 995 510, 900 555
//                   C 800 605, 810 685, 925 700
//                   C 1080 720, 1200 655, 1400 600
//                 "
//                 fill="none"
//                 stroke="#143E33"
//                 strokeOpacity="0.08"
//                 strokeWidth="8"
//                 strokeLinecap="round"
//               />

//               {/* lime route */}

//               <motion.path
//                 d="
//                   M 90 260
//                   C 240 210, 350 210, 465 275
//                   C 575 335, 655 265, 750 225
//                   C 860 180, 980 240, 1030 340
//                   C 1080 440, 995 510, 900 555
//                   C 800 605, 810 685, 925 700
//                   C 1080 720, 1200 655, 1400 600
//                 "
//                 fill="none"
//                 stroke="#B8F23A"
//                 strokeWidth="2.5"
//                 strokeLinecap="round"
//                 initial={{
//                   pathLength: 0,
//                 }}
//                 whileInView={{
//                   pathLength: 1,
//                 }}
//                 viewport={{
//                   once: true,
//                 }}
//                 transition={{
//                   duration: 2,
//                   delay: 0.25,
//                   ease: [0.22, 1, 0.36, 1],
//                 }}
//               />
//             </svg>

//             {/* ===============================================
//                 01 SELECCIÓN
//             =============================================== */}

//             <motion.div
//               initial={{
//                 opacity: 0,
//                 x: -25,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 x: 0,
//               }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 0.65,
//                 delay: 0.12,
//               }}
//               className="
//                 absolute
//                 left-[6%]
//                 top-[95px]
//                 z-20
//                 w-[25%]
//               ">
//               <div className="flex items-start justify-between gap-5">
//                 <div>
//                   <p
//                     className="
//                       text-[8px]
//                       font-bold
//                       uppercase
//                       tracking-[0.18em]
//                       text-[#78A500]
//                     ">
//                     01 / RSU
//                   </p>

//                   <h3
//                     className="
//                       mt-3
//                       max-w-[280px]
//                       text-[34px]
//                       font-medium
//                       leading-[0.94]
//                       tracking-[-0.05em]
//                     ">
//                     Plantas de
//                     <span className="block">selección</span>
//                   </h3>
//                 </div>

//                 <span
//                   className="
//                     flex
//                     h-13
//                     w-13
//                     shrink-0
//                     items-center
//                     justify-center
//                     rounded-full
//                     bg-[#EEF3E9]
//                     text-[#78A500]
//                   ">
//                   <Recycle size={20} strokeWidth={1.55} />
//                 </span>
//               </div>

//               <p
//                 className="
//                   mt-5
//                   max-w-[330px]
//                   text-[9px]
//                   leading-5
//                   text-[#143E33]/42
//                 ">
//                 {solutions[0].description}
//               </p>

//               <div className="mt-5 flex items-center gap-3">
//                 <RouteNode active />

//                 <span
//                   className="
//                     text-[6px]
//                     font-bold
//                     uppercase
//                     tracking-[0.13em]
//                     text-[#78A500]
//                   ">
//                   {solutions[0].result}
//                 </span>
//               </div>
//             </motion.div>

//             {/* ===============================================
//                 02 BIOGÁS
//             =============================================== */}

//             <motion.div
//               initial={{
//                 opacity: 0,
//                 y: -22,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 0.65,
//                 delay: 0.2,
//               }}
//               className="
//                 absolute
//                 left-[38%]
//                 top-[70px]
//                 z-20
//                 w-[24%]
//               ">
//               <p
//                 className="
//                   text-[8px]
//                   font-bold
//                   uppercase
//                   tracking-[0.18em]
//                   text-[#78A500]
//                 ">
//                 02 / Digestión anaerobia
//               </p>

//               <div className="mt-3 flex items-center gap-4">
//                 <h3
//                   className="
//                     text-[34px]
//                     font-medium
//                     leading-none
//                     tracking-[-0.05em]
//                   ">
//                   Biogás
//                 </h3>

//                 <span
//                   className="
//                     flex
//                     h-11
//                     w-11
//                     items-center
//                     justify-center
//                     rounded-full
//                     bg-[#B8F23A]
//                     text-[#10372E]
//                   ">
//                   <Zap size={17} strokeWidth={1.6} />
//                 </span>
//               </div>

//               <p
//                 className="
//                   mt-5
//                   max-w-[315px]
//                   text-[9px]
//                   leading-5
//                   text-[#143E33]/42
//                 ">
//                 {solutions[1].description}
//               </p>

//               <div className="mt-5 flex items-center gap-3">
//                 <RouteNode />

//                 <span
//                   className="
//                     text-[6px]
//                     font-bold
//                     uppercase
//                     tracking-[0.13em]
//                     text-[#78A500]
//                   ">
//                   {solutions[1].result}
//                 </span>
//               </div>
//             </motion.div>

//             {/* ===============================================
//                 03 TERMOVALORIZACIÓN — HERO MOMENT
//             =============================================== */}

//             <motion.div
//               initial={{
//                 opacity: 0,
//                 scale: 0.96,
//                 y: 20,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 scale: 1,
//                 y: 0,
//               }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 0.75,
//                 delay: 0.26,
//                 ease: [0.22, 1, 0.36, 1],
//               }}
//               className="
//                 absolute
//                 right-[5%]
//                 top-[215px]
//                 z-30
//                 w-[29%]
//               ">
//               <div
//                 className="
//                   relative
//                   overflow-hidden
//                   rounded-[25px]
//                   bg-[#B8F23A]
//                   p-7
//                   text-[#10372E]
//                   shadow-[0_24px_60px_rgba(0,0,0,.12)]
//                 ">
//                 <span
//                   className="
//                     pointer-events-none
//                     absolute
//                     -right-3
//                     -top-10
//                     text-[150px]
//                     font-light
//                     leading-none
//                     tracking-[-0.09em]
//                     text-[#10372E]/[0.055]
//                   ">
//                   03
//                 </span>

//                 <div className="relative z-10">
//                   <div className="flex items-start justify-between gap-5">
//                     <div>
//                       <p
//                         className="
//                           text-[7px]
//                           font-bold
//                           uppercase
//                           tracking-[0.17em]
//                           text-[#10372E]/55
//                         ">
//                         Valorización energética
//                       </p>

//                       <h3
//                         className="
//                           mt-3
//                           text-[35px]
//                           font-medium
//                           leading-[0.94]
//                           tracking-[-0.055em]
//                         ">
//                         Termo
//                         <span className="block">valorización</span>
//                       </h3>
//                     </div>

//                     <span
//                       className="
//                         flex
//                         h-14
//                         w-14
//                         shrink-0
//                         items-center
//                         justify-center
//                         rounded-full
//                         bg-[#10372E]
//                         text-[#B8F23A]
//                       ">
//                       <Flame size={22} strokeWidth={1.55} />
//                     </span>
//                   </div>

//                   <p
//                     className="
//                       mt-6
//                       max-w-[360px]
//                       text-[9px]
//                       leading-5
//                       text-[#10372E]/60
//                     ">
//                     {solutions[2].description}
//                   </p>

//                   <div
//                     className="
//                       mt-6
//                       flex
//                       items-center
//                       justify-between
//                       border-t
//                       border-[#10372E]/10
//                       pt-5
//                     ">
//                     <span
//                       className="
//                         text-[6px]
//                         font-bold
//                         uppercase
//                         tracking-[0.14em]
//                         text-[#10372E]/55
//                       ">
//                       Resultado
//                     </span>

//                     <div className="flex items-center gap-3">
//                       <span
//                         className="
//                           text-[8px]
//                           font-bold
//                           uppercase
//                           tracking-[0.15em]
//                         ">
//                         {solutions[2].result}
//                       </span>

//                       <ArrowRight size={14} strokeWidth={1.7} />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>

//             {/* ===============================================
//                 04 COMPOSTAJE
//             =============================================== */}

//             <motion.div
//               initial={{
//                 opacity: 0,
//                 x: -22,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 x: 0,
//               }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 0.65,
//                 delay: 0.34,
//               }}
//               className="
//                 absolute
//                 bottom-[75px]
//                 left-[37%]
//                 z-20
//                 w-[25%]
//                 text-white
//               ">
//               <div className="flex items-start gap-4">
//                 <span
//                   className="
//                     flex
//                     h-13
//                     w-13
//                     shrink-0
//                     items-center
//                     justify-center
//                     rounded-full
//                     bg-white/[0.07]
//                     text-[#B8F23A]
//                   ">
//                   <Leaf size={20} strokeWidth={1.55} />
//                 </span>

//                 <div>
//                   <p
//                     className="
//                       text-[7px]
//                       font-bold
//                       uppercase
//                       tracking-[0.17em]
//                       text-[#B8F23A]
//                     ">
//                     04 / Biodegradables
//                   </p>

//                   <h3
//                     className="
//                       mt-2
//                       text-[32px]
//                       font-medium
//                       leading-none
//                       tracking-[-0.05em]
//                     ">
//                     Compostaje
//                   </h3>
//                 </div>
//               </div>

//               <p
//                 className="
//                   mt-5
//                   max-w-[340px]
//                   text-[9px]
//                   leading-5
//                   text-white/40
//                 ">
//                 {solutions[3].description}
//               </p>

//               <div className="mt-5 flex items-center gap-3">
//                 <RouteNode active />

//                 <span
//                   className="
//                     text-[6px]
//                     font-bold
//                     uppercase
//                     tracking-[0.13em]
//                     text-[#B8F23A]
//                   ">
//                   {solutions[3].result}
//                 </span>
//               </div>
//             </motion.div>

//             {/* ===============================================
//                 05 DESGASIFICACIÓN
//             =============================================== */}

//             <motion.div
//               initial={{
//                 opacity: 0,
//                 x: 25,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 x: 0,
//               }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 0.65,
//                 delay: 0.42,
//               }}
//               className="
//                 absolute
//                 bottom-[68px]
//                 right-[5%]
//                 z-20
//                 w-[27%]
//                 text-white
//               ">
//               <div className="flex items-start justify-between gap-5">
//                 <div>
//                   <p
//                     className="
//                       text-[7px]
//                       font-bold
//                       uppercase
//                       tracking-[0.17em]
//                       text-[#B8F23A]
//                     ">
//                     05 / Rellenos sanitarios
//                   </p>

//                   <h3
//                     className="
//                       mt-2
//                       text-[32px]
//                       font-medium
//                       leading-none
//                       tracking-[-0.05em]
//                     ">
//                     Desgasificación
//                   </h3>
//                 </div>

//                 <span
//                   className="
//                     flex
//                     h-12
//                     w-12
//                     shrink-0
//                     items-center
//                     justify-center
//                     rounded-full
//                     border
//                     border-white/[0.08]
//                     bg-white/[0.04]
//                     text-[#B8F23A]
//                   ">
//                   <Wind size={19} strokeWidth={1.55} />
//                 </span>
//               </div>

//               <p
//                 className="
//                   mt-5
//                   max-w-[365px]
//                   text-[9px]
//                   leading-5
//                   text-white/40
//                 ">
//                 {solutions[4].description}
//               </p>

//               <div className="mt-5 flex items-center gap-3">
//                 <RouteNode />

//                 <span
//                   className="
//                     text-[6px]
//                     font-bold
//                     uppercase
//                     tracking-[0.13em]
//                     text-[#B8F23A]
//                   ">
//                   {solutions[4].result}
//                 </span>
//               </div>
//             </motion.div>

//             {/* ===============================================
//                 LEFT BOTTOM MESSAGE
//             =============================================== */}

//             <div
//               className="
//                 absolute
//                 bottom-[75px]
//                 left-[6%]
//                 z-20
//                 max-w-[300px]
//               ">
//               <p
//                 className="
//                   text-[7px]
//                   font-bold
//                   uppercase
//                   tracking-[0.17em]
//                   text-[#78A500]
//                 ">
//                 Un sistema · múltiples rutas
//               </p>

//               <p
//                 className="
//                   mt-3
//                   text-[23px]
//                   font-medium
//                   leading-[1]
//                   tracking-[-0.045em]
//                 ">
//                 El valor aparece
//                 <span className="block text-[#83B500]">
//                   cuando el residuo encuentra el proceso adecuado.
//                 </span>
//               </p>
//             </div>
//           </div>

//           {/* =================================================
//               MOBILE
//           ================================================= */}

//           <div className="relative p-5 lg:hidden">
//             <div className="relative">
//               {/* vertical route */}

//               <div
//                 className="
//                   absolute
//                   bottom-8
//                   left-[23px]
//                   top-8
//                   w-px
//                   bg-gradient-to-b
//                   from-[#B8F23A]
//                   via-[#83B500]
//                   to-[#143E33]
//                 "
//               />

//               <div className="space-y-3">
//                 {solutions.map((solution, index) => {
//                   const Icon = solution.icon;
//                   const highlight = index === 2;

//                   return (
//                     <motion.div
//                       key={solution.number}
//                       initial={{
//                         opacity: 0,
//                         y: 15,
//                       }}
//                       whileInView={{
//                         opacity: 1,
//                         y: 0,
//                       }}
//                       viewport={{ once: true }}
//                       transition={{
//                         duration: 0.5,
//                         delay: index * 0.05,
//                       }}
//                       className="
//                         relative
//                         grid
//                         grid-cols-[48px_1fr]
//                         gap-3
//                       ">
//                       <div
//                         className="
//                           relative
//                           z-10
//                           flex
//                           justify-center
//                           pt-6
//                         ">
//                         <span
//                           className={`
//                             flex
//                             h-5
//                             w-5
//                             items-center
//                             justify-center
//                             rounded-full
//                             border-[4px]
//                             border-white

//                             ${highlight ? "bg-[#B8F23A]" : "bg-[#143E33]"}
//                           `}
//                         />
//                       </div>

//                       <div
//                         className={`
//                           relative
//                           overflow-hidden
//                           rounded-[17px]
//                           p-5

//                           ${
//                             highlight
//                               ? "bg-[#B8F23A] text-[#10372E]"
//                               : index >= 3
//                                 ? "bg-[#10372E] text-white"
//                                 : "border border-[#143E33]/[0.07] bg-[#F5F7F2]"
//                           }
//                         `}>
//                         <span
//                           className={`
//                             absolute
//                             -right-2
//                             -top-5
//                             text-[75px]
//                             font-light
//                             leading-none
//                             tracking-[-0.08em]

//                             ${
//                               highlight
//                                 ? "text-[#10372E]/[0.05]"
//                                 : index >= 3
//                                   ? "text-white/[0.035]"
//                                   : "text-[#143E33]/[0.035]"
//                             }
//                           `}>
//                           {solution.number}
//                         </span>

//                         <div className="relative z-10">
//                           <div className="flex items-center gap-3">
//                             <span
//                               className={`
//                                 flex
//                                 h-10
//                                 w-10
//                                 shrink-0
//                                 items-center
//                                 justify-center
//                                 rounded-full

//                                 ${
//                                   highlight
//                                     ? "bg-[#10372E] text-[#B8F23A]"
//                                     : index >= 3
//                                       ? "bg-white/[0.07] text-[#B8F23A]"
//                                       : "bg-white text-[#78A500]"
//                                 }
//                               `}>
//                               <Icon size={16} strokeWidth={1.6} />
//                             </span>

//                             <div>
//                               <p
//                                 className={`
//                                   text-[6px]
//                                   font-bold
//                                   uppercase
//                                   tracking-[0.14em]

//                                   ${
//                                     highlight
//                                       ? "text-[#10372E]/50"
//                                       : index >= 3
//                                         ? "text-[#B8F23A]"
//                                         : "text-[#78A500]"
//                                   }
//                                 `}>
//                                 {solution.number} · {solution.eyebrow}
//                               </p>

//                               <h3
//                                 className="
//                                   mt-1
//                                   text-[20px]
//                                   font-medium
//                                   tracking-[-0.04em]
//                                 ">
//                                 {solution.title}
//                               </h3>
//                             </div>
//                           </div>

//                           <p
//                             className={`
//                               mt-4
//                               text-[8px]
//                               leading-5

//                               ${
//                                 highlight
//                                   ? "text-[#10372E]/58"
//                                   : index >= 3
//                                     ? "text-white/38"
//                                     : "text-[#143E33]/42"
//                               }
//                             `}>
//                             {solution.description}
//                           </p>

//                           <div
//                             className="
//                               mt-4
//                               flex
//                               items-center
//                               gap-3
//                             ">
//                             <span
//                               className={`
//                                 h-px
//                                 w-7

//                                 ${
//                                   highlight ? "bg-[#10372E]/30" : "bg-[#B8F23A]"
//                                 }
//                               `}
//                             />

//                             <span
//                               className={`
//                                 text-[6px]
//                                 font-bold
//                                 uppercase
//                                 tracking-[0.13em]

//                                 ${
//                                   highlight
//                                     ? "text-[#10372E]/60"
//                                     : index >= 3
//                                       ? "text-[#B8F23A]"
//                                       : "text-[#78A500]"
//                                 }
//                               `}>
//                               {solution.result}
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     </motion.div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>

//           {/* =================================================
//               FINAL BAND
//           ================================================= */}

//           <div
//             className="
//               relative
//               z-30
//               grid
//               border-t
//               border-white/[0.07]
//               bg-[#0D3028]
//               text-white

//               lg:grid-cols-[1fr_auto]
//               lg:items-center
//             ">
//             <div
//               className="
//                 px-6
//                 py-6

//                 lg:px-8
//               ">
//               <p
//                 className="
//                   text-[7px]
//                   font-bold
//                   uppercase
//                   tracking-[0.17em]
//                   text-[#B8F23A]
//                 ">
//                 Valorización de residuos
//               </p>

//               <p
//                 className="
//                   mt-2
//                   max-w-[920px]
//                   text-[clamp(1.2rem,1.7vw,1.9rem)]
//                   font-medium
//                   leading-[1.05]
//                   tracking-[-0.035em]
//                   text-white/80
//                 ">
//                 Seleccionar. Transformar. Aprovechar.
//                 <span className="text-[#B8F23A]">
//                   {" "}
//                   Gestionar cada corriente con la tecnología adecuada.
//                 </span>
//               </p>
//             </div>

//             <div
//               className="
//                 flex
//                 items-center
//                 gap-4
//                 border-t
//                 border-white/[0.07]
//                 px-6
//                 py-5

//                 lg:border-l
//                 lg:border-t-0
//                 lg:px-8
//               ">
//               <span
//                 className="
//                   text-[7px]
//                   font-bold
//                   uppercase
//                   tracking-[0.16em]
//                   text-[#B8F23A]
//                 ">
//                 Residuo → Proceso → Aprovechamiento
//               </span>

//               <ArrowDownRight
//                 size={14}
//                 strokeWidth={1.5}
//                 className="text-[#B8F23A]"
//               />
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default ResiduosStreamsSection;

import { motion } from "motion/react";
import {
  ArrowDownRight,
  ArrowRight,
  Factory,
  Flame,
  Leaf,
  Recycle,
  Sparkles,
  Wind,
  Zap,
} from "lucide-react";

/* =========================================================
   DATA — CONTENIDO BASADO EN GRUNER
========================================================= */

const solutions = [
  {
    number: "01",
    title: "Plantas de selección",
    shortTitle: "Selección",
    eyebrow: "Residuos sólidos urbanos",
    description:
      "Procesamiento y selección de residuos sólidos urbanos para separar materiales con potencial de valorización.",
    result: "Materiales valorizables",
    icon: Recycle,
  },
  {
    number: "02",
    title: "Plantas de biogás",
    shortTitle: "Biogás",
    eyebrow: "Digestión anaerobia",
    description:
      "Aprovechamiento de corrientes orgánicas mediante digestión anaerobia para producir biogás y recuperar valor energético.",
    result: "Biogás",
    icon: Zap,
  },
  {
    number: "03",
    title: "Termovalorización",
    shortTitle: "Termovalorización",
    eyebrow: "Valorización energética",
    description:
      "Valorización térmica de residuos sólidos urbanos, de manejo especial y agroindustriales cuando la composición y el proyecto lo permiten.",
    result: "Energía",
    icon: Flame,
  },
  {
    number: "04",
    title: "Compostaje",
    shortTitle: "Compostaje",
    eyebrow: "Residuos biodegradables",
    description:
      "Tratamiento biológico de residuos biodegradables para producir composta y biofertilizantes aprovechables.",
    result: "Composta · Biofertilizante",
    icon: Leaf,
  },
  {
    number: "05",
    title: "Desgasificación",
    shortTitle: "Desgasificación",
    eyebrow: "Rellenos sanitarios",
    description:
      "Soluciones para rellenos sanitarios que pueden integrar captación y valorización de biogás, tratamiento de lixiviados, sellado y clausura según el alcance del proyecto.",
    result: "Gestión integral",
    icon: Wind,
  },
];

/* =========================================================
   SMALL NODE
========================================================= */

function RouteNode({ active = false }) {
  return (
    <span className="relative flex h-5 w-5 items-center justify-center">
      {active && (
        <motion.span
          animate={{
            scale: [1, 2.1, 1],
            opacity: [0.3, 0, 0.3],
          }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: "easeOut",
          }}
          className="
            absolute
            h-5
            w-5
            rounded-full
            bg-[#B8F23A]
          "
        />
      )}

      <span
        className={`
          relative
          z-10
          block
          rounded-full
          border-[3px]
          border-white
          shadow-[0_0_0_1px_rgba(20,62,51,.08)]

          ${active ? "h-3 w-3 bg-[#B8F23A]" : "h-2.5 w-2.5 bg-[#143E33]"}
        `}
      />
    </span>
  );
}

/* =========================================================
   MAIN
========================================================= */

function ResiduosStreamsSection() {
  return (
    <section
      id="residuos-streams"
      className="
        relative
        overflow-hidden
        bg-[#F4F7F1]
        py-16
        text-[#143E33]

        lg:py-20
      ">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.22]
          [background-image:linear-gradient(rgba(20,62,51,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(20,62,51,.025)_1px,transparent_1px)]
          [background-size:72px_72px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-[220px]
          top-[35%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#B8F23A]/[0.07]
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[200px]
          top-[-170px]
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#B8F23A]/[0.08]
          blur-[130px]
        "
      />

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
        {/* ===================================================
            HEADER
        =================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            grid
            gap-8

            lg:grid-cols-[1fr_410px]
            lg:items-end
          ">
          <div>
            <div className="flex items-center gap-4">
              <span
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-[#B8F23A]
                  text-[#143E33]
                ">
                <Recycle size={17} strokeWidth={1.7} />
              </span>

              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#83B500]" />

                <p
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.22em]
                    text-[#76A400]
                  ">
                  Valorización de residuos
                </p>
              </div>
            </div>

            <h2
              className="
                mt-5
                max-w-[1050px]
                text-[clamp(2.8rem,4.6vw,5.5rem)]
                font-normal
                leading-[0.92]
                tracking-[-0.065em]
              ">
              Un residuo no tiene
              <span className="block">un solo destino.</span>
              <span className="block text-[#83B500]">Tiene posibilidades.</span>
            </h2>
          </div>

          <div className="lg:pb-1">
            <p
              className="
                max-w-[400px]
                text-[11px]
                leading-6
                text-[#143E33]/46
              ">
              Cada corriente requiere una ruta tecnológica distinta. La
              selección depende de su composición, objetivo de valorización y
              condiciones operativas del proyecto.
            </p>

            <div className="mt-4 flex items-center gap-3">
              <Sparkles
                size={11}
                strokeWidth={1.5}
                className="text-[#83B500]"
              />

              <span
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-[#143E33]/30
                ">
                Cinco rutas de valorización
              </span>
            </div>
          </div>
        </motion.div>

        {/* ===================================================
            EDITORIAL MAP
        =================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08 }}
          transition={{
            duration: 0.85,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mt-11
            overflow-hidden
            rounded-[30px]
            border
            border-[#143E33]/[0.07]
            bg-white
            shadow-[0_30px_90px_rgba(20,62,51,.07)]
          ">
          {/* =================================================
              TOP BAR
          ================================================= */}

          <div
            className="
              relative
              z-30
              flex
              flex-col
              gap-4
              border-b
              border-[#143E33]/[0.07]
              px-6
              py-5

              sm:flex-row
              sm:items-center
              sm:justify-between
              lg:px-8
            ">
            <div className="flex items-center gap-4">
              <span
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#78A500]
                ">
                Rutas tecnológicas
              </span>

              <span className="hidden h-px w-10 bg-[#143E33]/10 sm:block" />

              <span
                className="
                  hidden
                  text-[11px]
                  uppercase
                  tracking-[0.14em]
                  text-[#143E33]/25

                  sm:block
                ">
                Del residuo al aprovechamiento
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
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
                    bg-[#83B500]
                  "
                />
              </span>

              <span
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.14em]
                  text-[#143E33]/28
                ">
                05 soluciones
              </span>
            </div>
          </div>

          {/* =================================================
              DESKTOP MAP
          ================================================= */}

          <div
            className="
              relative
              hidden
              min-h-[790px]
              overflow-hidden

              lg:block
            ">
            {/* ===============================================
                DARK LANDSCAPE
            =============================================== */}

            <div
              className="
                pointer-events-none
                absolute
                bottom-0
                right-0
                top-[42%]
                w-[67%]
                bg-[#10372E]
                [clip-path:polygon(20%_0,100%_0,100%_100%,0_100%)]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                bottom-0
                right-0
                top-[42%]
                w-[67%]
                opacity-[0.12]
                [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)]
                [background-size:38px_38px]
                [clip-path:polygon(20%_0,100%_0,100%_100%,0_100%)]
              "
            />

            {/* ===============================================
                GIANT BACKGROUND NUMBERS
            =============================================== */}

            <span
              className="
                pointer-events-none
                absolute
                -left-5
                top-[50px]
                select-none
                text-[210px]
                font-light
                leading-none
                tracking-[-0.1em]
                text-[#143E33]/[0.025]
              ">
              01
            </span>

            <span
              className="
                pointer-events-none
                absolute
                left-[37%]
                top-[105px]
                select-none
                text-[180px]
                font-light
                leading-none
                tracking-[-0.1em]
                text-[#143E33]/[0.025]
              ">
              02
            </span>

            <span
              className="
                pointer-events-none
                absolute
                right-[2%]
                top-[260px]
                select-none
                text-[190px]
                font-light
                leading-none
                tracking-[-0.1em]
                text-white/[0.025]
              ">
              03
            </span>

            {/* ===============================================
                MASTER ROUTE
            =============================================== */}

            <svg
              viewBox="0 0 1500 790"
              preserveAspectRatio="none"
              className="
                pointer-events-none
                absolute
                inset-0
                z-10
                h-full
                w-full
              ">
              {/* ghost line */}

              <path
                d="
                  M 90 260
                  C 240 210, 350 210, 465 275
                  C 575 335, 655 265, 750 225
                  C 860 180, 980 240, 1030 340
                  C 1080 440, 995 510, 900 555
                  C 800 605, 810 685, 925 700
                  C 1080 720, 1200 655, 1400 600
                "
                fill="none"
                stroke="#143E33"
                strokeOpacity="0.08"
                strokeWidth="8"
                strokeLinecap="round"
              />

              {/* lime route */}

              <motion.path
                d="
                  M 90 260
                  C 240 210, 350 210, 465 275
                  C 575 335, 655 265, 750 225
                  C 860 180, 980 240, 1030 340
                  C 1080 440, 995 510, 900 555
                  C 800 605, 810 685, 925 700
                  C 1080 720, 1200 655, 1400 600
                "
                fill="none"
                stroke="#B8F23A"
                strokeWidth="2.5"
                strokeLinecap="round"
                initial={{
                  pathLength: 0,
                }}
                whileInView={{
                  pathLength: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 2,
                  delay: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </svg>

            {/* ===============================================
                01 SELECCIÓN
            =============================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: -25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.65,
                delay: 0.12,
              }}
              className="
                absolute
                left-[6%]
                top-[95px]
                z-20
                w-[25%]
              ">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-[#78A500]
                    ">
                    01 / RSU
                  </p>

                  <h3
                    className="
                      mt-3
                      max-w-[280px]
                      text-[34px]
                      font-medium
                      leading-[0.94]
                      tracking-[-0.05em]
                    ">
                    Plantas de
                    <span className="block">selección</span>
                  </h3>
                </div>

                <span
                  className="
                    flex
                    h-13
                    w-13
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#EEF3E9]
                    text-[#78A500]
                  ">
                  <Recycle size={20} strokeWidth={1.55} />
                </span>
              </div>

              <p
                className="
                  mt-5
                  max-w-[330px]
                  text-[12px]
                  leading-5
                  text-[#143E33]/42
                ">
                {solutions[0].description}
              </p>

              <div className="mt-5 flex items-center gap-3">
                <RouteNode active />

                <span
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.13em]
                    text-[#78A500]
                  ">
                  {solutions[0].result}
                </span>
              </div>
            </motion.div>

            {/* ===============================================
                02 BIOGÁS
            =============================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: -22,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.65,
                delay: 0.2,
              }}
              className="
                absolute
                left-[38%]
                top-[70px]
                z-20
                w-[24%]
              ">
              <p
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#78A500]
                ">
                02 / Digestión anaerobia
              </p>

              <div className="mt-3 flex items-center gap-4">
                <h3
                  className="
                    text-[34px]
                    font-medium
                    leading-none
                    tracking-[-0.05em]
                  ">
                  Biogás
                </h3>

                <span
                  className="
                    flex
                    h-11
                    w-11
                    items-center
                    justify-center
                    rounded-full
                    bg-[#B8F23A]
                    text-[#10372E]
                  ">
                  <Zap size={17} strokeWidth={1.6} />
                </span>
              </div>

              <p
                className="
                  mt-5
                  max-w-[315px]
                  text-[12px]
                  leading-5
                  text-[#143E33]/42
                ">
                {solutions[1].description}
              </p>

              <div className="mt-5 flex items-center gap-3">
                <RouteNode />

                <span
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.13em]
                    text-[#78A500]
                  ">
                  {solutions[1].result}
                </span>
              </div>
            </motion.div>

            {/* ===============================================
                03 TERMOVALORIZACIÓN — HERO MOMENT
            =============================================== */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.75,
                delay: 0.26,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                absolute
                right-[5%]
                top-[215px]
                z-30
                w-[29%]
              ">
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[25px]
                  bg-[#B8F23A]
                  p-7
                  text-[#10372E]
                  shadow-[0_24px_60px_rgba(0,0,0,.12)]
                ">
                <span
                  className="
                    pointer-events-none
                    absolute
                    -right-3
                    -top-10
                    text-[150px]
                    font-light
                    leading-none
                    tracking-[-0.09em]
                    text-[#10372E]/[0.055]
                  ">
                  03
                </span>

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p
                        className="
                          text-[11px]
                          font-bold
                          uppercase
                          tracking-[0.17em]
                          text-[#10372E]/55
                        ">
                        Valorización energética
                      </p>

                      <h3
                        className="
                          mt-3
                          text-[35px]
                          font-medium
                          leading-[0.94]
                          tracking-[-0.055em]
                        ">
                        Termo
                        <span className="block">valorización</span>
                      </h3>
                    </div>

                    <span
                      className="
                        flex
                        h-14
                        w-14
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#10372E]
                        text-[#B8F23A]
                      ">
                      <Flame size={22} strokeWidth={1.55} />
                    </span>
                  </div>

                  <p
                    className="
                      mt-6
                      max-w-[360px]
                      text-[12px]
                      leading-5
                      text-[#10372E]/60
                    ">
                    {solutions[2].description}
                  </p>

                  <div
                    className="
                      mt-6
                      flex
                      items-center
                      justify-between
                      border-t
                      border-[#10372E]/10
                      pt-5
                    ">
                    <span
                      className="
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.14em]
                        text-[#10372E]/55
                      ">
                      Resultado
                    </span>

                    <div className="flex items-center gap-3">
                      <span
                        className="
                          text-[11px]
                          font-bold
                          uppercase
                          tracking-[0.15em]
                        ">
                        {solutions[2].result}
                      </span>

                      <ArrowRight size={14} strokeWidth={1.7} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* ===============================================
                04 COMPOSTAJE
            =============================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: -22,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.65,
                delay: 0.34,
              }}
              className="
                absolute
                bottom-[75px]
                left-[37%]
                z-20
                w-[25%]
                text-white
              ">
              <div className="flex items-start gap-4">
                <span
                  className="
                    flex
                    h-13
                    w-13
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-white/[0.07]
                    text-[#B8F23A]
                  ">
                  <Leaf size={20} strokeWidth={1.55} />
                </span>

                <div>
                  <p
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.17em]
                      text-[#B8F23A]
                    ">
                    04 / Biodegradables
                  </p>

                  <h3
                    className="
                      mt-2
                      text-[32px]
                      font-medium
                      leading-none
                      tracking-[-0.05em]
                    ">
                    Compostaje
                  </h3>
                </div>
              </div>

              <p
                className="
                  mt-5
                  max-w-[340px]
                  text-[12px]
                  leading-5
                  text-white/40
                ">
                {solutions[3].description}
              </p>

              <div className="mt-5 flex items-center gap-3">
                <RouteNode active />

                <span
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.13em]
                    text-[#B8F23A]
                  ">
                  {solutions[3].result}
                </span>
              </div>
            </motion.div>

            {/* ===============================================
                05 DESGASIFICACIÓN
            =============================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: 25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.65,
                delay: 0.42,
              }}
              className="
                absolute
                bottom-[68px]
                right-[5%]
                z-20
                w-[27%]
                text-white
              ">
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.17em]
                      text-[#B8F23A]
                    ">
                    05 / Rellenos sanitarios
                  </p>

                  <h3
                    className="
                      mt-2
                      text-[32px]
                      font-medium
                      leading-none
                      tracking-[-0.05em]
                    ">
                    Desgasificación
                  </h3>
                </div>

                <span
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/[0.08]
                    bg-white/[0.04]
                    text-[#B8F23A]
                  ">
                  <Wind size={19} strokeWidth={1.55} />
                </span>
              </div>

              <p
                className="
                  mt-5
                  max-w-[365px]
                  text-[12px]
                  leading-5
                  text-white/40
                ">
                {solutions[4].description}
              </p>

              <div className="mt-5 flex items-center gap-3">
                <RouteNode />

                <span
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.13em]
                    text-[#B8F23A]
                  ">
                  {solutions[4].result}
                </span>
              </div>
            </motion.div>

            {/* ===============================================
                LEFT BOTTOM MESSAGE
            =============================================== */}

            <div
              className="
                absolute
                bottom-[75px]
                left-[6%]
                z-20
                max-w-[300px]
              ">
              <p
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.17em]
                  text-[#78A500]
                ">
                Un sistema · múltiples rutas
              </p>

              <p
                className="
                  mt-3
                  text-[23px]
                  font-medium
                  leading-[1]
                  tracking-[-0.045em]
                ">
                El valor aparece
                <span className="block text-[#83B500]">
                  cuando el residuo encuentra el proceso adecuado.
                </span>
              </p>
            </div>
          </div>

          {/* =================================================
              MOBILE
          ================================================= */}

          <div className="relative p-5 lg:hidden">
            <div className="relative">
              {/* vertical route */}

              <div
                className="
                  absolute
                  bottom-8
                  left-[23px]
                  top-8
                  w-px
                  bg-gradient-to-b
                  from-[#B8F23A]
                  via-[#83B500]
                  to-[#143E33]
                "
              />

              <div className="space-y-3">
                {solutions.map((solution, index) => {
                  const Icon = solution.icon;
                  const highlight = index === 2;

                  return (
                    <motion.div
                      key={solution.number}
                      initial={{
                        opacity: 0,
                        y: 15,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.05,
                      }}
                      className="
                        relative
                        grid
                        grid-cols-[48px_1fr]
                        gap-3
                      ">
                      <div
                        className="
                          relative
                          z-10
                          flex
                          justify-center
                          pt-6
                        ">
                        <span
                          className={`
                            flex
                            h-5
                            w-5
                            items-center
                            justify-center
                            rounded-full
                            border-[4px]
                            border-white

                            ${highlight ? "bg-[#B8F23A]" : "bg-[#143E33]"}
                          `}
                        />
                      </div>

                      <div
                        className={`
                          relative
                          overflow-hidden
                          rounded-[17px]
                          p-5

                          ${
                            highlight
                              ? "bg-[#B8F23A] text-[#10372E]"
                              : index >= 3
                                ? "bg-[#10372E] text-white"
                                : "border border-[#143E33]/[0.07] bg-[#F5F7F2]"
                          }
                        `}>
                        <span
                          className={`
                            absolute
                            -right-2
                            -top-5
                            text-[75px]
                            font-light
                            leading-none
                            tracking-[-0.08em]

                            ${
                              highlight
                                ? "text-[#10372E]/[0.05]"
                                : index >= 3
                                  ? "text-white/[0.035]"
                                  : "text-[#143E33]/[0.035]"
                            }
                          `}>
                          {solution.number}
                        </span>

                        <div className="relative z-10">
                          <div className="flex items-center gap-3">
                            <span
                              className={`
                                flex
                                h-10
                                w-10
                                shrink-0
                                items-center
                                justify-center
                                rounded-full

                                ${
                                  highlight
                                    ? "bg-[#10372E] text-[#B8F23A]"
                                    : index >= 3
                                      ? "bg-white/[0.07] text-[#B8F23A]"
                                      : "bg-white text-[#78A500]"
                                }
                              `}>
                              <Icon size={16} strokeWidth={1.6} />
                            </span>

                            <div>
                              <p
                                className={`
                                  text-[11px]
                                  font-bold
                                  uppercase
                                  tracking-[0.14em]

                                  ${
                                    highlight
                                      ? "text-[#10372E]/50"
                                      : index >= 3
                                        ? "text-[#B8F23A]"
                                        : "text-[#78A500]"
                                  }
                                `}>
                                {solution.number} · {solution.eyebrow}
                              </p>

                              <h3
                                className="
                                  mt-1
                                  text-[20px]
                                  font-medium
                                  tracking-[-0.04em]
                                ">
                                {solution.title}
                              </h3>
                            </div>
                          </div>

                          <p
                            className={`
                              mt-4
                              text-[11px]
                              leading-5

                              ${
                                highlight
                                  ? "text-[#10372E]/58"
                                  : index >= 3
                                    ? "text-white/38"
                                    : "text-[#143E33]/42"
                              }
                            `}>
                            {solution.description}
                          </p>

                          <div
                            className="
                              mt-4
                              flex
                              items-center
                              gap-3
                            ">
                            <span
                              className={`
                                h-px
                                w-7

                                ${
                                  highlight ? "bg-[#10372E]/30" : "bg-[#B8F23A]"
                                }
                              `}
                            />

                            <span
                              className={`
                                text-[11px]
                                font-bold
                                uppercase
                                tracking-[0.13em]

                                ${
                                  highlight
                                    ? "text-[#10372E]/60"
                                    : index >= 3
                                      ? "text-[#B8F23A]"
                                      : "text-[#78A500]"
                                }
                              `}>
                              {solution.result}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* =================================================
              FINAL BAND
          ================================================= */}

          <div
            className="
              relative
              z-30
              grid
              border-t
              border-white/[0.07]
              bg-[#0D3028]
              text-white

              lg:grid-cols-[1fr_auto]
              lg:items-center
            ">
            <div
              className="
                px-6
                py-6

                lg:px-8
              ">
              <p
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.17em]
                  text-[#B8F23A]
                ">
                Valorización de residuos
              </p>

              <p
                className="
                  mt-2
                  max-w-[920px]
                  text-[clamp(1.2rem,1.7vw,1.9rem)]
                  font-medium
                  leading-[1.05]
                  tracking-[-0.035em]
                  text-white/80
                ">
                Seleccionar. Transformar. Aprovechar.
                <span className="text-[#B8F23A]">
                  {" "}
                  Gestionar cada corriente con la tecnología adecuada.
                </span>
              </p>
            </div>

            <div
              className="
                flex
                items-center
                gap-4
                border-t
                border-white/[0.07]
                px-6
                py-5

                lg:border-l
                lg:border-t-0
                lg:px-8
              ">
              <span
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-[#B8F23A]
                ">
                Residuo → Proceso → Aprovechamiento
              </span>

              <ArrowDownRight
                size={14}
                strokeWidth={1.5}
                className="text-[#B8F23A]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ResiduosStreamsSection;
