// import { motion } from "motion/react";
// import {
//   ArrowUpRight,
//   BarChart3,
//   Compass,
//   Globe2,
//   Layers3,
//   Network,
//   Sparkles,
// } from "lucide-react";

// /* =========================================================
//    STEPS
// ========================================================= */

// const steps = [
//   {
//     number: "01",
//     icon: Compass,
//     title: "Análisis",
//     text: "Entendemos el contexto, los riesgos, las oportunidades y las prioridades reales de la organización.",
//   },
//   {
//     number: "02",
//     icon: Layers3,
//     title: "Estrategia",
//     text: "Convertimos los hallazgos en una hoja de ruta clara, priorizada y alineada con los objetivos del negocio.",
//   },
//   {
//     number: "03",
//     icon: BarChart3,
//     title: "Ejecución",
//     text: "Acompañamos la implementación, medición y evolución de las iniciativas para generar resultados tangibles.",
//   },
// ];

// /* =========================================================
//    GLOBAL CAPABILITIES
// ========================================================= */

// const globalCapabilities = [
//   "Estrategia ESG",
//   "Net Zero",
//   "Circularidad",
//   "Clima",
//   "Reporting",
//   "Cadena de suministro",
// ];

// /* =========================================================
//    CONNECTION VISUAL
// ========================================================= */

// function AllianceConnectionVisual() {
//   return (
//     <div
//       className="
//         relative
//         mx-auto
//         min-h-[430px]
//         w-full
//         max-w-[720px]

//         sm:min-h-[500px]
//         lg:min-h-[560px]
//       ">
//       {/* =====================================================
//           AMBIENT GLOWS
//       ===================================================== */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           left-[8%]
//           top-[24%]
//           h-[250px]
//           w-[250px]
//           rounded-full
//           bg-[#9DD827]/12
//           blur-[95px]

//           sm:h-[340px]
//           sm:w-[340px]
//         "
//       />

//       <div
//         className="
//           pointer-events-none
//           absolute
//           bottom-[4%]
//           right-[3%]
//           h-[230px]
//           w-[230px]
//           rounded-full
//           bg-white/7
//           blur-[90px]

//           sm:h-[320px]
//           sm:w-[320px]
//         "
//       />

//       {/* =====================================================
//           SVG CONNECTIONS
//       ===================================================== */}

//       <svg
//         viewBox="0 0 700 560"
//         fill="none"
//         className="
//           pointer-events-none
//           absolute
//           inset-0
//           h-full
//           w-full
//         "
//         aria-hidden="true">
//         <defs>
//           <linearGradient
//             id="allianceLine"
//             x1="150"
//             y1="350"
//             x2="560"
//             y2="210"
//             gradientUnits="userSpaceOnUse">
//             <stop stopColor="#9DD827" stopOpacity=".12" />
//             <stop offset=".48" stopColor="#B8EB50" stopOpacity=".9" />
//             <stop offset="1" stopColor="#9DD827" stopOpacity=".12" />
//           </linearGradient>

//           <radialGradient
//             id="allianceNode"
//             cx="0"
//             cy="0"
//             r="1"
//             gradientUnits="userSpaceOnUse"
//             gradientTransform="translate(354 277) rotate(90) scale(85)">
//             <stop stopColor="#B8EB50" stopOpacity=".28" />
//             <stop offset="1" stopColor="#B8EB50" stopOpacity="0" />
//           </radialGradient>
//         </defs>

//         {/* BACK ORBITS */}

//         <motion.ellipse
//           cx="350"
//           cy="280"
//           rx="278"
//           ry="190"
//           stroke="#9DD827"
//           strokeOpacity=".1"
//           strokeWidth="1"
//           initial={{ opacity: 0, scale: 0.85 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           viewport={{ once: true }}
//           transition={{
//             duration: 1,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           style={{ transformOrigin: "350px 280px" }}
//         />

//         <motion.ellipse
//           cx="350"
//           cy="280"
//           rx="224"
//           ry="146"
//           stroke="#9DD827"
//           strokeOpacity=".07"
//           strokeWidth="1"
//           strokeDasharray="4 10"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{
//             duration: 1,
//             delay: 0.15,
//           }}
//         />

//         {/* MAIN CONNECTION */}

//         <motion.path
//           d="
//             M145 346
//             C240 322 275 294 350 278
//             C430 260 472 225 562 205
//           "
//           stroke="url(#allianceLine)"
//           strokeWidth="2"
//           strokeLinecap="round"
//           initial={{ pathLength: 0 }}
//           whileInView={{ pathLength: 1 }}
//           viewport={{ once: true }}
//           transition={{
//             duration: 1.6,
//             delay: 0.3,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//         />

//         {/* SECONDARY CONNECTION */}

//         <motion.path
//           d="
//             M152 370
//             C235 382 294 340 352 298
//             C417 250 484 246 555 230
//           "
//           stroke="#9DD827"
//           strokeOpacity=".18"
//           strokeWidth=".8"
//           strokeDasharray="4 9"
//           initial={{ pathLength: 0 }}
//           whileInView={{ pathLength: 1 }}
//           viewport={{ once: true }}
//           transition={{
//             duration: 1.9,
//             delay: 0.45,
//           }}
//         />

//         {/* CENTRAL GLOW */}

//         <circle cx="350" cy="278" r="85" fill="url(#allianceNode)" />

//         {[
//           [218, 326],
//           [296, 298],
//           [350, 278],
//           [421, 249],
//           [492, 225],
//         ].map(([cx, cy], index) => (
//           <motion.circle
//             key={`${cx}-${cy}`}
//             cx={cx}
//             cy={cy}
//             r={index === 2 ? 5 : 3}
//             fill="#B8EB50"
//             initial={{
//               opacity: 0,
//               scale: 0,
//             }}
//             whileInView={{
//               opacity: 1,
//               scale: 1,
//             }}
//             viewport={{ once: true }}
//             transition={{
//               duration: 0.35,
//               delay: 0.85 + index * 0.09,
//             }}
//           />
//         ))}
//       </svg>

//       {/* =====================================================
//           GRUNER WORLD
//       ===================================================== */}

//       <motion.div
//         initial={{
//           opacity: 0,
//           x: -40,
//           scale: 0.92,
//         }}
//         whileInView={{
//           opacity: 1,
//           x: 0,
//           scale: 1,
//         }}
//         viewport={{
//           once: true,
//           amount: 0.4,
//         }}
//         transition={{
//           duration: 0.8,
//           ease: [0.22, 1, 0.36, 1],
//         }}
//         className="
//           absolute
//           left-[2%]
//           top-[42%]
//           z-10
//           flex
//           h-[155px]
//           w-[155px]
//           -translate-y-1/2
//           flex-col
//           items-center
//           justify-center
//           rounded-full
//           border
//           border-[#9DD827]/25
//           bg-[#1D493A]
//           text-center
//           shadow-[0_25px_70px_rgba(0,0,0,.18)]

//           sm:h-[200px]
//           sm:w-[200px]

//           lg:h-[225px]
//           lg:w-[225px]
//         ">
//         <span
//           className="
//             text-[8px]
//             font-semibold
//             uppercase
//             tracking-[0.18em]
//             text-[#9DD827]
//           ">
//           México
//         </span>

//         <p
//           className="
//             mt-3
//             text-[24px]
//             font-semibold
//             tracking-[-0.05em]
//             text-white

//             sm:text-[32px]
//           ">
//           GRUNER
//         </p>

//         <span
//           className="
//             mt-3
//             h-px
//             w-8
//             bg-[#9DD827]
//           "
//         />

//         <p
//           className="
//             mt-3
//             hidden
//             max-w-[125px]
//             text-[10px]
//             leading-5
//             text-white/45

//             sm:block
//           ">
//           Estrategia y ejecución local
//         </p>
//       </motion.div>

//       {/* =====================================================
//           CENTER CORE
//       ===================================================== */}

//       <motion.div
//         initial={{
//           opacity: 0,
//           scale: 0.7,
//         }}
//         whileInView={{
//           opacity: 1,
//           scale: 1,
//         }}
//         viewport={{
//           once: true,
//           amount: 0.5,
//         }}
//         transition={{
//           duration: 0.7,
//           delay: 0.45,
//           ease: [0.22, 1, 0.36, 1],
//         }}
//         className="
//           absolute
//           left-1/2
//           top-1/2
//           z-20
//           flex
//           h-[74px]
//           w-[74px]
//           -translate-x-1/2
//           -translate-y-1/2
//           items-center
//           justify-center
//           rounded-full
//           border
//           border-[#B8EB50]/35
//           bg-[#B8EB50]
//           text-[#17392E]
//           shadow-[0_0_0_12px_rgba(184,235,80,.06),0_16px_50px_rgba(0,0,0,.18)]

//           sm:h-[88px]
//           sm:w-[88px]
//         ">
//         <Network size={25} strokeWidth={1.6} />
//       </motion.div>

//       {/* =====================================================
//           ANTHESIS WORLD
//       ===================================================== */}

//       <motion.div
//         initial={{
//           opacity: 0,
//           x: 40,
//           scale: 0.92,
//         }}
//         whileInView={{
//           opacity: 1,
//           x: 0,
//           scale: 1,
//         }}
//         viewport={{
//           once: true,
//           amount: 0.4,
//         }}
//         transition={{
//           duration: 0.8,
//           delay: 0.1,
//           ease: [0.22, 1, 0.36, 1],
//         }}
//         className="
//           absolute
//           right-[1%]
//           top-[29%]
//           z-10
//           flex
//           h-[165px]
//           w-[165px]
//           flex-col
//           items-center
//           justify-center
//           rounded-full
//           border
//           border-white/14
//           bg-white/[0.075]
//           text-center
//           backdrop-blur-xl
//           shadow-[0_25px_70px_rgba(0,0,0,.12)]

//           sm:h-[210px]
//           sm:w-[210px]

//           lg:h-[235px]
//           lg:w-[235px]
//         ">
//         <span
//           className="
//             text-[8px]
//             font-semibold
//             uppercase
//             tracking-[0.18em]
//             text-white/40
//           ">
//           Global
//         </span>

//         <p
//           className="
//             mt-3
//             text-[23px]
//             font-medium
//             tracking-[-0.05em]
//             text-white

//             sm:text-[31px]
//           ">
//           Anthesis
//         </p>

//         <span
//           className="
//             mt-3
//             h-px
//             w-8
//             bg-[#B8EB50]
//           "
//         />

//         <p
//           className="
//             mt-3
//             hidden
//             max-w-[130px]
//             text-[10px]
//             leading-5
//             text-white/45

//             sm:block
//           ">
//           Red internacional de especialistas
//         </p>
//       </motion.div>

//       {/* =====================================================
//           MICRO LABELS
//       ===================================================== */}

//       <motion.div
//         initial={{
//           opacity: 0,
//           y: 12,
//         }}
//         whileInView={{
//           opacity: 1,
//           y: 0,
//         }}
//         viewport={{ once: true }}
//         transition={{
//           duration: 0.6,
//           delay: 1,
//         }}
//         className="
//           absolute
//           bottom-[6%]
//           left-[17%]
//           hidden
//           rounded-full
//           border
//           border-white/10
//           bg-white/[0.055]
//           px-4
//           py-2
//           text-[9px]
//           uppercase
//           tracking-[0.14em]
//           text-white/50
//           backdrop-blur-lg

//           sm:block
//         ">
//         Ejecución
//       </motion.div>

//       <motion.div
//         initial={{
//           opacity: 0,
//           y: 12,
//         }}
//         whileInView={{
//           opacity: 1,
//           y: 0,
//         }}
//         viewport={{ once: true }}
//         transition={{
//           duration: 0.6,
//           delay: 1.1,
//         }}
//         className="
//           absolute
//           bottom-[12%]
//           right-[14%]
//           hidden
//           rounded-full
//           border
//           border-white/10
//           bg-white/[0.055]
//           px-4
//           py-2
//           text-[9px]
//           uppercase
//           tracking-[0.14em]
//           text-white/50
//           backdrop-blur-lg

//           sm:block
//         ">
//         Expertise
//       </motion.div>
//     </div>
//   );
// }

// /* =========================================================
//    CONSULTORIA INTRO
// ========================================================= */

// function ConsultoriaIntroSection() {
//   return (
//     <section
//       className="
//         relative
//         overflow-hidden
//         bg-[#F5F8F0]
//         py-24
//         text-[#17392E]

//         lg:py-32
//       ">
//       {/* =====================================================
//           BACKGROUND
//       ===================================================== */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           inset-0
//           bg-[radial-gradient(circle_at_88%_22%,rgba(157,216,39,.14),transparent_24%),radial-gradient(circle_at_8%_82%,rgba(127,165,28,.09),transparent_26%)]
//         "
//       />

//       <div
//         className="
//           pointer-events-none
//           absolute
//           inset-0
//           opacity-[0.035]
//           [background-image:linear-gradient(rgba(45,82,65,.28)_1px,transparent_1px),linear-gradient(90deg,rgba(45,82,65,.28)_1px,transparent_1px)]
//           [background-size:42px_42px]
//         "
//       />

//       {/* =====================================================
//           WRAPPER
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

//         <div
//           className="
//             grid
//             gap-12

//             lg:grid-cols-[.6fr_1.4fr]
//             lg:items-end
//             lg:gap-20
//           ">
//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 18,
//             }}
//             whileInView={{
//               opacity: 1,
//               y: 0,
//             }}
//             viewport={{
//               once: true,
//               amount: 0.4,
//             }}
//             transition={{
//               duration: 0.7,
//             }}>
//             <div className="flex items-center gap-4">
//               <span
//                 className="
//                   flex
//                   h-10
//                   w-10
//                   items-center
//                   justify-center
//                   rounded-full
//                   bg-[#7FA51C]
//                   text-[10px]
//                   font-semibold
//                   text-white
//                 ">
//                 01
//               </span>

//               <span className="h-px w-10 bg-[#7FA51C]" />

//               <p
//                 className="
//                   text-[10px]
//                   font-semibold
//                   uppercase
//                   tracking-[0.18em]
//                   text-[#688A1B]
//                 ">
//                 Nuestro enfoque
//               </p>
//             </div>

//             <p
//               className="
//                 mt-8
//                 max-w-[430px]
//                 text-sm
//                 leading-7
//                 text-[#61786E]

//                 sm:text-base
//               ">
//               La sostenibilidad deja de ser una intención cuando se convierte en
//               estrategia, decisiones y ejecución.
//             </p>
//           </motion.div>

//           <motion.h2
//             initial={{
//               opacity: 0,
//               y: 32,
//             }}
//             whileInView={{
//               opacity: 1,
//               y: 0,
//             }}
//             viewport={{
//               once: true,
//               amount: 0.3,
//             }}
//             transition={{
//               duration: 0.85,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="
//               max-w-[1150px]
//               text-[clamp(3.2rem,5.4vw,7rem)]
//               font-normal
//               leading-[0.9]
//               tracking-[-0.065em]
//             ">
//             De la estrategia
//             <span className="block text-[#7FA51C]">a la implementación.</span>
//           </motion.h2>
//         </div>

//         {/* =====================================================
//             MAIN CONTENT
//         ===================================================== */}

//         <div
//           className="
//             mt-16
//             grid
//             gap-10

//             lg:grid-cols-[.82fr_1.18fr]
//             lg:gap-14

//             xl:gap-20
//           ">
//           {/* =================================================
//               STATEMENT
//           ================================================= */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               x: -25,
//             }}
//             whileInView={{
//               opacity: 1,
//               x: 0,
//             }}
//             viewport={{
//               once: true,
//               amount: 0.3,
//             }}
//             transition={{
//               duration: 0.8,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="
//               relative
//               overflow-hidden
//               rounded-[22px]
//               bg-[#17392E]
//               p-8
//               text-white
//               shadow-[0_28px_80px_rgba(40,68,54,.12)]

//               sm:p-10
//               xl:p-12
//             ">
//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 -right-24
//                 -top-24
//                 h-[340px]
//                 w-[340px]
//                 rounded-full
//                 bg-[#9DD827]/16
//                 blur-[105px]
//               "
//             />

//             <div className="relative z-10">
//               <p
//                 className="
//                   text-[10px]
//                   font-semibold
//                   uppercase
//                   tracking-[0.17em]
//                   text-[#9DD827]
//                 ">
//                 Consultoría con propósito
//               </p>

//               <h3
//                 className="
//                   mt-7
//                   max-w-[620px]
//                   text-[clamp(2.2rem,3.3vw,4.2rem)]
//                   font-normal
//                   leading-[1]
//                   tracking-[-0.055em]
//                 ">
//                 No entregamos únicamente diagnósticos.
//               </h3>

//               <p
//                 className="
//                   mt-7
//                   max-w-[590px]
//                   text-sm
//                   leading-7
//                   text-white/65

//                   sm:text-base
//                 ">
//                 Acompañamos a las organizaciones para convertir información
//                 compleja en decisiones claras, estrategias accionables y
//                 proyectos capaces de evolucionar con el negocio.
//               </p>

//               <div
//                 className="
//                   mt-10
//                   border-t
//                   border-white/10
//                   pt-7
//                 ">
//                 <p className="text-[13px] leading-6 text-white/80">
//                   Estrategia + conocimiento técnico + implementación.
//                 </p>

//                 <span
//                   className="
//                     mt-5
//                     block
//                     h-[2px]
//                     w-14
//                     bg-[#9DD827]
//                   "
//                 />
//               </div>
//             </div>
//           </motion.div>

//           {/* =================================================
//               STEPS
//           ================================================= */}

//           <div className="grid gap-3">
//             {steps.map((step, index) => {
//               const Icon = step.icon;

//               return (
//                 <motion.div
//                   key={step.number}
//                   initial={{
//                     opacity: 0,
//                     y: 22,
//                   }}
//                   whileInView={{
//                     opacity: 1,
//                     y: 0,
//                   }}
//                   viewport={{
//                     once: true,
//                     amount: 0.3,
//                   }}
//                   transition={{
//                     duration: 0.7,
//                     delay: index * 0.08,
//                     ease: [0.22, 1, 0.36, 1],
//                   }}
//                   className="
//                     group
//                     grid
//                     gap-6
//                     rounded-[18px]
//                     border
//                     border-[#355E4A]/10
//                     bg-[#ECF2E4]/72
//                     p-6
//                     transition-all
//                     duration-300

//                     hover:border-[#7FA51C]/30
//                     hover:bg-[#E5EED8]

//                     sm:grid-cols-[auto_1fr_auto]
//                     sm:items-center
//                     sm:p-7
//                   ">
//                   <span
//                     className="
//                       flex
//                       h-12
//                       w-12
//                       items-center
//                       justify-center
//                       rounded-[13px]
//                       bg-[#7FA51C]/10
//                       text-[#7FA51C]
//                       transition-all
//                       duration-300

//                       group-hover:bg-[#7FA51C]
//                       group-hover:text-white
//                     ">
//                     <Icon size={20} strokeWidth={1.6} />
//                   </span>

//                   <div>
//                     <div className="flex items-center gap-3">
//                       <span
//                         className="
//                           text-[9px]
//                           font-semibold
//                           tracking-[0.14em]
//                           text-[#7FA51C]
//                         ">
//                         {step.number}
//                       </span>

//                       <h3
//                         className="
//                           text-[22px]
//                           font-medium
//                           tracking-[-0.035em]
//                           text-[#17392E]

//                           sm:text-[25px]
//                         ">
//                         {step.title}
//                       </h3>
//                     </div>

//                     <p
//                       className="
//                         mt-3
//                         max-w-[670px]
//                         text-sm
//                         leading-6
//                         text-[#657C71]
//                       ">
//                       {step.text}
//                     </p>
//                   </div>

//                   <span
//                     className="
//                       hidden
//                       h-10
//                       w-10
//                       items-center
//                       justify-center
//                       rounded-full
//                       border
//                       border-[#7FA51C]/20
//                       text-[#7FA51C]
//                       transition-all
//                       duration-300

//                       group-hover:bg-[#7FA51C]
//                       group-hover:text-white

//                       sm:flex
//                     ">
//                     <ArrowUpRight size={16} strokeWidth={1.6} />
//                   </span>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>

//         {/* =====================================================
//             ANTHESIS — GLOBAL CONNECTION
//         ===================================================== */}

//         <div
//           className="
//             relative
//             mt-24
//             overflow-hidden
//             rounded-[28px]
//             bg-[#102F27]
//             text-white

//             lg:mt-32
//           ">
//           {/* ===================================================
//               BACKGROUND
//           =================================================== */}

//           <div
//             className="
//               pointer-events-none
//               absolute
//               inset-0
//               bg-[radial-gradient(circle_at_78%_42%,rgba(157,216,39,.13),transparent_28%),radial-gradient(circle_at_22%_70%,rgba(157,216,39,.08),transparent_24%)]
//             "
//           />

//           <div
//             className="
//               pointer-events-none
//               absolute
//               inset-0
//               opacity-[0.05]
//               [background-image:linear-gradient(rgba(255,255,255,.13)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.13)_1px,transparent_1px)]
//               [background-size:44px_44px]
//             "
//           />

//           {/* GIANT GLOBAL WORD */}

//           <div
//             className="
//               pointer-events-none
//               absolute
//               -right-[3%]
//               -top-[7%]
//               hidden
//               select-none
//               text-[clamp(10rem,17vw,19rem)]
//               font-semibold
//               leading-none
//               tracking-[-0.08em]
//               text-white/[0.025]

//               lg:block
//             ">
//             GLOBAL
//           </div>

//           <div
//             className="
//               relative
//               z-10
//               grid

//               lg:grid-cols-[.83fr_1.17fr]
//             ">
//             {/* =================================================
//                 EDITORIAL CONTENT
//             ================================================= */}

//             <motion.div
//               initial={{
//                 opacity: 0,
//                 x: -30,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 x: 0,
//               }}
//               viewport={{
//                 once: true,
//                 amount: 0.3,
//               }}
//               transition={{
//                 duration: 0.8,
//                 ease: [0.22, 1, 0.36, 1],
//               }}
//               className="
//                 relative
//                 z-20
//                 flex
//                 flex-col
//                 justify-center
//                 p-8

//                 sm:p-10
//                 lg:p-12
//                 xl:p-16
//               ">
//               <div className="flex items-center gap-4">
//                 <span
//                   className="
//                     flex
//                     h-10
//                     w-10
//                     items-center
//                     justify-center
//                     rounded-full
//                     bg-[#9DD827]
//                     text-[#17392E]
//                   ">
//                   <Globe2 size={17} strokeWidth={1.7} />
//                 </span>

//                 <div>
//                   <p
//                     className="
//                       text-[9px]
//                       font-semibold
//                       uppercase
//                       tracking-[0.18em]
//                       text-[#9DD827]
//                     ">
//                     Alianza estratégica
//                   </p>

//                   <p
//                     className="
//                       mt-1
//                       text-[10px]
//                       text-white/35
//                     ">
//                     GRUNER × Anthesis
//                   </p>
//                 </div>
//               </div>

//               <h3
//                 className="
//                   mt-9
//                   max-w-[680px]
//                   text-[clamp(2.6rem,4.3vw,5.6rem)]
//                   font-normal
//                   leading-[0.93]
//                   tracking-[-0.06em]
//                 ">
//                 Pensar global.
//                 <span
//                   className="
//                     block
//                     text-[#B8EB50]
//                   ">
//                   Actuar donde importa.
//                 </span>
//               </h3>

//               <p
//                 className="
//                   mt-7
//                   max-w-[610px]
//                   text-[15px]
//                   leading-7
//                   text-white/57

//                   sm:text-[17px]
//                 ">
//                 Nuestra alianza con Anthesis conecta el conocimiento global con
//                 la experiencia local de GRUNER para abordar retos de
//                 sostenibilidad con mayor profundidad, especialización y
//                 capacidad de ejecución.
//               </p>

//               {/* CAPABILITIES */}

//               <div
//                 className="
//                   mt-9
//                   flex
//                   max-w-[620px]
//                   flex-wrap
//                   gap-2
//                 ">
//                 {globalCapabilities.map((item) => (
//                   <span
//                     key={item}
//                     className="
//                       rounded-full
//                       border
//                       border-white/10
//                       bg-white/[0.045]
//                       px-4
//                       py-2.5
//                       text-[10px]
//                       font-medium
//                       text-white/62
//                       backdrop-blur-lg
//                       transition-all
//                       duration-300

//                       hover:border-[#9DD827]/25
//                       hover:bg-[#9DD827]/10
//                       hover:text-white
//                     ">
//                     {item}
//                   </span>
//                 ))}
//               </div>

//               {/* CTA */}

//               <div
//                 className="
//                   mt-10
//                   flex
//                   flex-wrap
//                   items-center
//                   gap-5
//                 ">
//                 <a
//                   href="#soluciones-consultoria"
//                   className="
//                     group
//                     inline-flex
//                     items-center
//                     gap-4
//                   ">
//                   <span
//                     className="
//                       text-[12px]
//                       font-medium
//                       text-white
//                     ">
//                     Explorar capacidades
//                   </span>

//                   <span
//                     className="
//                       flex
//                       h-11
//                       w-11
//                       items-center
//                       justify-center
//                       rounded-full
//                       bg-[#9DD827]
//                       text-[#17392E]
//                       transition-all
//                       duration-300

//                       group-hover:rotate-45
//                       group-hover:bg-white
//                     ">
//                     <ArrowUpRight size={16} strokeWidth={1.6} />
//                   </span>
//                 </a>

//                 <span
//                   className="
//                     hidden
//                     h-px
//                     w-16
//                     bg-white/12

//                     sm:block
//                   "
//                 />

//                 <div
//                   className="
//                     flex
//                     items-center
//                     gap-2
//                   ">
//                   <Sparkles size={13} className="text-[#9DD827]" />

//                   <span
//                     className="
//                       text-[9px]
//                       uppercase
//                       tracking-[0.13em]
//                       text-white/35
//                     ">
//                     Especialización conectada
//                   </span>
//                 </div>
//               </div>
//             </motion.div>

//             {/* =================================================
//                 VISUAL NETWORK
//             ================================================= */}

//             <div
//               className="
//                 relative
//                 border-t
//                 border-white/[0.07]
//                 px-4
//                 py-8

//                 sm:px-8

//                 lg:border-l
//                 lg:border-t-0
//                 lg:px-6
//                 lg:py-8
//               ">
//               <AllianceConnectionVisual />
//             </div>
//           </div>

//           {/* ===================================================
//               FOOT LINE
//           =================================================== */}

//           <div
//             className="
//               relative
//               z-20
//               mx-8
//               flex
//               flex-col
//               gap-4
//               border-t
//               border-white/[0.07]
//               py-5

//               sm:mx-10
//               sm:flex-row
//               sm:items-center
//               sm:justify-between

//               lg:mx-12

//               xl:mx-16
//             ">
//             <p
//               className="
//                 text-[9px]
//                 uppercase
//                 tracking-[0.15em]
//                 text-white/30
//               ">
//               Conocimiento global · Implementación local
//             </p>

//             <div className="flex items-center gap-3">
//               <span
//                 className="
//                   relative
//                   flex
//                   h-2
//                   w-2
//                 ">
//                 <span
//                   className="
//                     absolute
//                     inset-0
//                     animate-ping
//                     rounded-full
//                     bg-[#9DD827]/40
//                   "
//                 />

//                 <span
//                   className="
//                     relative
//                     h-2
//                     w-2
//                     rounded-full
//                     bg-[#9DD827]
//                   "
//                 />
//               </span>

//               <span
//                 className="
//                   text-[9px]
//                   uppercase
//                   tracking-[0.14em]
//                   text-white/35
//                 ">
//                 México conectado con expertise internacional
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ConsultoriaIntroSection;

import { motion } from "motion/react";
import {
  ArrowUpRight,
  BarChart3,
  Compass,
  Globe2,
  Layers3,
  Network,
  Sparkles,
} from "lucide-react";

/* =========================================================
   STEPS
========================================================= */

const steps = [
  {
    number: "01",
    icon: Compass,
    title: "Análisis",
    text: "Entendemos el contexto, los riesgos, las oportunidades y las prioridades reales de la organización.",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Estrategia",
    text: "Convertimos los hallazgos en una hoja de ruta clara, priorizada y alineada con los objetivos del negocio.",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Ejecución",
    text: "Acompañamos la implementación, medición y evolución de las iniciativas para generar resultados tangibles.",
  },
];

/* =========================================================
   GLOBAL CAPABILITIES
========================================================= */

const globalCapabilities = [
  "Estrategia ESG",
  "Net Zero",
  "Circularidad",
  "Clima",
  "Reporting",
  "Cadena de suministro",
];

/* =========================================================
   CONNECTION VISUAL
========================================================= */

function AllianceConnectionVisual() {
  return (
    <div
      className="
        relative
        mx-auto
        min-h-[430px]
        w-full
        max-w-[720px]

        sm:min-h-[500px]
        lg:min-h-[560px]
      ">
      {/* =====================================================
          AMBIENT GLOWS
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[8%]
          top-[24%]
          h-[250px]
          w-[250px]
          rounded-full
          bg-[#9DD827]/12
          blur-[95px]

          sm:h-[340px]
          sm:w-[340px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[4%]
          right-[3%]
          h-[230px]
          w-[230px]
          rounded-full
          bg-white/7
          blur-[90px]

          sm:h-[320px]
          sm:w-[320px]
        "
      />

      {/* =====================================================
          SVG CONNECTIONS
      ===================================================== */}

      <svg
        viewBox="0 0 700 560"
        fill="none"
        className="
          pointer-events-none
          absolute
          inset-0
          h-full
          w-full
        "
        aria-hidden="true">
        <defs>
          <linearGradient
            id="allianceLine"
            x1="150"
            y1="350"
            x2="560"
            y2="210"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#9DD827" stopOpacity=".12" />
            <stop offset=".48" stopColor="#B8EB50" stopOpacity=".9" />
            <stop offset="1" stopColor="#9DD827" stopOpacity=".12" />
          </linearGradient>

          <radialGradient
            id="allianceNode"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(354 277) rotate(90) scale(85)">
            <stop stopColor="#B8EB50" stopOpacity=".28" />
            <stop offset="1" stopColor="#B8EB50" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* BACK ORBITS */}

        <motion.ellipse
          cx="350"
          cy="280"
          rx="278"
          ry="190"
          stroke="#9DD827"
          strokeOpacity=".1"
          strokeWidth="1"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ transformOrigin: "350px 280px" }}
        />

        <motion.ellipse
          cx="350"
          cy="280"
          rx="224"
          ry="146"
          stroke="#9DD827"
          strokeOpacity=".07"
          strokeWidth="1"
          strokeDasharray="4 10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.15,
          }}
        />

        {/* MAIN CONNECTION */}

        <motion.path
          d="
            M145 346
            C240 322 275 294 350 278
            C430 260 472 225 562 205
          "
          stroke="url(#allianceLine)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.6,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        {/* SECONDARY CONNECTION */}

        <motion.path
          d="
            M152 370
            C235 382 294 340 352 298
            C417 250 484 246 555 230
          "
          stroke="#9DD827"
          strokeOpacity=".18"
          strokeWidth=".8"
          strokeDasharray="4 9"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.9,
            delay: 0.45,
          }}
        />

        {/* CENTRAL GLOW */}

        <circle cx="350" cy="278" r="85" fill="url(#allianceNode)" />

        {[
          [218, 326],
          [296, 298],
          [350, 278],
          [421, 249],
          [492, 225],
        ].map(([cx, cy], index) => (
          <motion.circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r={index === 2 ? 5 : 3}
            fill="#B8EB50"
            initial={{
              opacity: 0,
              scale: 0,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.35,
              delay: 0.85 + index * 0.09,
            }}
          />
        ))}
      </svg>

      {/* =====================================================
          GRUNER WORLD
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          x: -40,
          scale: 0.92,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.4,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          left-[2%]
          top-[42%]
          z-10
          flex
          h-[155px]
          w-[155px]
          -translate-y-1/2
          flex-col
          items-center
          justify-center
          rounded-full
          border
          border-[#9DD827]/25
          bg-[#1D493A]
          text-center
          shadow-[0_25px_70px_rgba(0,0,0,.18)]

          sm:h-[200px]
          sm:w-[200px]

          lg:h-[225px]
          lg:w-[225px]
        ">
        <span
          className="
            text-[11px]
            font-semibold
            uppercase
            tracking-[0.18em]
            text-[#9DD827]
          ">
          México
        </span>

        <p
          className="
            mt-3
            text-[24px]
            font-semibold
            tracking-[-0.05em]
            text-white

            sm:text-[32px]
          ">
          GRUNER
        </p>

        <span
          className="
            mt-3
            h-px
            w-8
            bg-[#9DD827]
          "
        />

        <p
          className="
            mt-3
            hidden
            max-w-[125px]
            text-[12px]
            leading-5
            text-white/55

            sm:block
          ">
          Estrategia y ejecución local
        </p>
      </motion.div>

      {/* =====================================================
          CENTER CORE
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        transition={{
          duration: 0.7,
          delay: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          left-1/2
          top-1/2
          z-20
          flex
          h-[74px]
          w-[74px]
          -translate-x-1/2
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-[#B8EB50]/35
          bg-[#B8EB50]
          text-[#17392E]
          shadow-[0_0_0_12px_rgba(184,235,80,.06),0_16px_50px_rgba(0,0,0,.18)]

          sm:h-[88px]
          sm:w-[88px]
        ">
        <Network size={25} strokeWidth={1.6} />
      </motion.div>

      {/* =====================================================
          ANTHESIS WORLD
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          x: 40,
          scale: 0.92,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          scale: 1,
        }}
        viewport={{
          once: true,
          amount: 0.4,
        }}
        transition={{
          duration: 0.8,
          delay: 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          right-[1%]
          top-[29%]
          z-10
          flex
          h-[165px]
          w-[165px]
          flex-col
          items-center
          justify-center
          rounded-full
          border
          border-white/14
          bg-white/[0.075]
          text-center
          backdrop-blur-xl
          shadow-[0_25px_70px_rgba(0,0,0,.12)]

          sm:h-[210px]
          sm:w-[210px]

          lg:h-[235px]
          lg:w-[235px]
        ">
        <span
          className="
            text-[11px]
            font-semibold
            uppercase
            tracking-[0.18em]
            text-white/50
          ">
          Global
        </span>

        <p
          className="
            mt-3
            text-[23px]
            font-medium
            tracking-[-0.05em]
            text-white

            sm:text-[31px]
          ">
          Anthesis
        </p>

        <span
          className="
            mt-3
            h-px
            w-8
            bg-[#B8EB50]
          "
        />

        <p
          className="
            mt-3
            hidden
            max-w-[130px]
            text-[12px]
            leading-5
            text-white/55

            sm:block
          ">
          Red internacional de especialistas
        </p>
      </motion.div>

      {/* =====================================================
          MICRO LABELS
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          y: 12,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: 1,
        }}
        className="
          absolute
          bottom-[6%]
          left-[17%]
          hidden
          rounded-full
          border
          border-white/10
          bg-white/[0.055]
          px-4
          py-2
          text-[11px]
          uppercase
          tracking-[0.14em]
          text-white/55
          backdrop-blur-lg

          sm:block
        ">
        Ejecución
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          y: 12,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: 1.1,
        }}
        className="
          absolute
          bottom-[12%]
          right-[14%]
          hidden
          rounded-full
          border
          border-white/10
          bg-white/[0.055]
          px-4
          py-2
          text-[11px]
          uppercase
          tracking-[0.14em]
          text-white/55
          backdrop-blur-lg

          sm:block
        ">
        Expertise
      </motion.div>
    </div>
  );
}

/* =========================================================
   CONSULTORIA INTRO
========================================================= */

function ConsultoriaIntroSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F5F8F0]
        py-24
        text-[#17392E]

        lg:py-32
      ">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_88%_22%,rgba(157,216,39,.14),transparent_24%),radial-gradient(circle_at_8%_82%,rgba(127,165,28,.09),transparent_26%)]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
          [background-image:linear-gradient(rgba(45,82,65,.28)_1px,transparent_1px),linear-gradient(90deg,rgba(45,82,65,.28)_1px,transparent_1px)]
          [background-size:42px_42px]
        "
      />

      {/* =====================================================
          WRAPPER
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

        <div
          className="
            grid
            gap-12

            lg:grid-cols-[.6fr_1.4fr]
            lg:items-end
            lg:gap-20
          ">
          <motion.div
            initial={{
              opacity: 0,
              y: 18,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.4,
            }}
            transition={{
              duration: 0.7,
            }}>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#7FA51C]" />

              <p
                className="
                  text-[12px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#688A1B]
                ">
                Nuestro enfoque
              </p>
            </div>

            <p
              className="
                mt-8
                max-w-[430px]
                text-sm
                leading-7
                text-[#61786E]

                sm:text-base
              ">
              La sostenibilidad deja de ser una intención cuando se convierte en
              estrategia, decisiones y ejecución.
            </p>
          </motion.div>

          <motion.h2
            initial={{
              opacity: 0,
              y: 32,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              max-w-[1150px]
              text-[clamp(3.2rem,5.4vw,7rem)]
              font-normal
              leading-[0.9]
              tracking-[-0.065em]
            ">
            De la estrategia
            <span className="block text-[#7FA51C]">a la implementación.</span>
          </motion.h2>
        </div>

        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}

        <div
          className="
            mt-16
            grid
            gap-10

            lg:grid-cols-[.82fr_1.18fr]
            lg:gap-14

            xl:gap-20
          ">
          {/* =================================================
              STATEMENT
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              overflow-hidden
              rounded-[22px]
              bg-[#17392E]
              p-8
              text-white
              shadow-[0_28px_80px_rgba(40,68,54,.12)]

              sm:p-10
              xl:p-12
            ">
            <div
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-[340px]
                w-[340px]
                rounded-full
                bg-[#9DD827]/16
                blur-[105px]
              "
            />

            <div className="relative z-10">
              <p
                className="
                  text-[12px]
                  font-semibold
                  uppercase
                  tracking-[0.17em]
                  text-[#9DD827]
                ">
                Consultoría con propósito
              </p>

              <h3
                className="
                  mt-7
                  max-w-[620px]
                  text-[clamp(2.2rem,3.3vw,4.2rem)]
                  font-normal
                  leading-[1]
                  tracking-[-0.055em]
                ">
                No entregamos únicamente diagnósticos.
              </h3>

              <p
                className="
                  mt-7
                  max-w-[590px]
                  text-sm
                  leading-7
                  text-white/65

                  sm:text-base
                ">
                Analizamos, desarrollamos e implementamos soluciones de
                sostenibilidad para convertir información compleja en decisiones
                claras, estrategias accionables y proyectos capaces de
                evolucionar con el negocio.
              </p>

              <div
                className="
                  mt-10
                  border-t
                  border-white/10
                  pt-7
                ">
                <p className="text-[13px] leading-6 text-white/80">
                  Análisis + desarrollo + implementación.
                </p>

                <span
                  className="
                    mt-5
                    block
                    h-[2px]
                    w-14
                    bg-[#9DD827]
                  "
                />
              </div>
            </div>
          </motion.div>

          {/* =================================================
              STEPS
          ================================================= */}

          <div className="grid gap-3">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={step.number}
                  initial={{
                    opacity: 0,
                    y: 22,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.3,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    group
                    grid
                    gap-6
                    rounded-[18px]
                    border
                    border-[#355E4A]/10
                    bg-[#ECF2E4]/72
                    p-6
                    transition-all
                    duration-300

                    hover:border-[#7FA51C]/30
                    hover:bg-[#E5EED8]

                    sm:grid-cols-[auto_1fr_auto]
                    sm:items-center
                    sm:p-7
                  ">
                  <span
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-[13px]
                      bg-[#7FA51C]/10
                      text-[#7FA51C]
                      transition-all
                      duration-300

                      group-hover:bg-[#7FA51C]
                      group-hover:text-white
                    ">
                    <Icon size={20} strokeWidth={1.6} />
                  </span>

                  <div>
                    <div className="flex items-center gap-3">
                      <span
                        className="
                          text-[11px]
                          font-semibold
                          tracking-[0.14em]
                          text-[#7FA51C]
                        ">
                        {step.number}
                      </span>

                      <h3
                        className="
                          text-[22px]
                          font-medium
                          tracking-[-0.035em]
                          text-[#17392E]

                          sm:text-[25px]
                        ">
                        {step.title}
                      </h3>
                    </div>

                    <p
                      className="
                        mt-3
                        max-w-[670px]
                        text-sm
                        leading-6
                        text-[#657C71]
                      ">
                      {step.text}
                    </p>
                  </div>

                  <span
                    className="
                      hidden
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#7FA51C]/20
                      text-[#7FA51C]
                      transition-all
                      duration-300

                      group-hover:bg-[#7FA51C]
                      group-hover:text-white

                      sm:flex
                    ">
                    <ArrowUpRight size={16} strokeWidth={1.6} />
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* =====================================================
            ANTHESIS — GLOBAL CONNECTION
        ===================================================== */}

        <div
          className="
            relative
            mt-24
            overflow-hidden
            rounded-[28px]
            bg-[#102F27]
            text-white

            lg:mt-32
          ">
          {/* ===================================================
              BACKGROUND
          =================================================== */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              bg-[radial-gradient(circle_at_78%_42%,rgba(157,216,39,.13),transparent_28%),radial-gradient(circle_at_22%_70%,rgba(157,216,39,.08),transparent_24%)]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-[0.05]
              [background-image:linear-gradient(rgba(255,255,255,.13)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.13)_1px,transparent_1px)]
              [background-size:44px_44px]
            "
          />

          {/* GIANT GLOBAL WORD */}

          <div
            className="
              pointer-events-none
              absolute
              -right-[3%]
              -top-[7%]
              hidden
              select-none
              text-[clamp(10rem,17vw,19rem)]
              font-semibold
              leading-none
              tracking-[-0.08em]
              text-white/[0.025]

              lg:block
            ">
            GLOBAL
          </div>

          <div
            className="
              relative
              z-10
              grid

              lg:grid-cols-[.83fr_1.17fr]
            ">
            {/* =================================================
                EDITORIAL CONTENT
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                z-20
                flex
                flex-col
                justify-center
                p-8

                sm:p-10
                lg:p-12
                xl:p-16
              ">
              <div className="flex items-center gap-4">
                <span
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-[#9DD827]
                    text-[#17392E]
                  ">
                  <Globe2 size={17} strokeWidth={1.7} />
                </span>

                <div>
                  <p
                    className="
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                      text-[#9DD827]
                    ">
                    Alianza estratégica
                  </p>

                  <p
                    className="
                      mt-1
                      text-[12px]
                      text-white/45
                    ">
                    GRUNER × Anthesis
                  </p>
                </div>
              </div>

              <h3
                className="
                  mt-9
                  max-w-[680px]
                  text-[clamp(2.6rem,4.3vw,5.6rem)]
                  font-normal
                  leading-[0.93]
                  tracking-[-0.06em]
                ">
                Pensar global.
                <span
                  className="
                    block
                    text-[#B8EB50]
                  ">
                  Actuar donde importa.
                </span>
              </h3>

              <p
                className="
                  mt-7
                  max-w-[610px]
                  text-[15px]
                  leading-7
                  text-white/57

                  sm:text-[17px]
                ">
                Nuestra alianza con Anthesis conecta el conocimiento global con
                la experiencia local de GRUNER para abordar retos de
                sostenibilidad con mayor profundidad, especialización y
                capacidad de ejecución.
              </p>

              {/* CAPABILITIES */}

              <div
                className="
                  mt-9
                  flex
                  max-w-[620px]
                  flex-wrap
                  gap-2
                ">
                {globalCapabilities.map((item) => (
                  <span
                    key={item}
                    className="
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.045]
                      px-4
                      py-2.5
                      text-[13px]
                      font-medium
                      text-white/70
                      backdrop-blur-lg
                      transition-all
                      duration-300

                      hover:border-[#9DD827]/25
                      hover:bg-[#9DD827]/10
                      hover:text-white
                    ">
                    {item}
                  </span>
                ))}
              </div>

              {/* CTA */}

              <div
                className="
                  mt-10
                  flex
                  flex-wrap
                  items-center
                  gap-5
                ">
                <a
                  href="#soluciones-consultoria"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-4
                  ">
                  <span
                    className="
                      text-[13px]
                      font-medium
                      text-white
                    ">
                    Explorar capacidades
                  </span>

                  <span
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      bg-[#9DD827]
                      text-[#17392E]
                      transition-all
                      duration-300

                      group-hover:rotate-45
                      group-hover:bg-white
                    ">
                    <ArrowUpRight size={16} strokeWidth={1.6} />
                  </span>
                </a>

                <span
                  className="
                    hidden
                    h-px
                    w-16
                    bg-white/12

                    sm:block
                  "
                />

                <div
                  className="
                    flex
                    items-center
                    gap-2
                  ">
                  <Sparkles size={13} className="text-[#9DD827]" />

                  <span
                    className="
                      text-[11px]
                      uppercase
                      tracking-[0.13em]
                      text-white/45
                    ">
                    Especialización conectada
                  </span>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                VISUAL NETWORK
            ================================================= */}

            <div
              className="
                relative
                border-t
                border-white/[0.07]
                px-4
                py-8

                sm:px-8

                lg:border-l
                lg:border-t-0
                lg:px-6
                lg:py-8
              ">
              <AllianceConnectionVisual />
            </div>
          </div>

          {/* ===================================================
              FOOT LINE
          =================================================== */}

          <div
            className="
              relative
              z-20
              mx-8
              flex
              flex-col
              gap-4
              border-t
              border-white/[0.07]
              py-5

              sm:mx-10
              sm:flex-row
              sm:items-center
              sm:justify-between

              lg:mx-12

              xl:mx-16
            ">
            <p
              className="
                text-[11px]
                uppercase
                tracking-[0.15em]
                text-white/40
              ">
              Conocimiento global · Implementación local
            </p>

            <div className="flex items-center gap-3">
              <span
                className="
                  relative
                  flex
                  h-2
                  w-2
                ">
                <span
                  className="
                    absolute
                    inset-0
                    animate-ping
                    rounded-full
                    bg-[#9DD827]/40
                  "
                />

                <span
                  className="
                    relative
                    h-2
                    w-2
                    rounded-full
                    bg-[#9DD827]
                  "
                />
              </span>

              <span
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.14em]
                  text-white/45
                ">
                México conectado con expertise internacional
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConsultoriaIntroSection;
