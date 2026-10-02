// // import { motion } from "motion/react";

// // import heroImage from "../../assets/images/hero/hero-person.jpg";

// // /* =========================================================
// //    ICONOS
// // ========================================================= */

// // const ArrowRightIcon = ({ size = 20, className = "" }) => (
// //   <svg
// //     width={size}
// //     height={size}
// //     viewBox="0 0 24 24"
// //     fill="none"
// //     stroke="currentColor"
// //     strokeWidth="1.6"
// //     strokeLinecap="round"
// //     strokeLinejoin="round"
// //     className={className}
// //     aria-hidden="true">
// //     <path d="M5 12h14" />
// //     <path d="m13 6 6 6-6 6" />
// //   </svg>
// // );

// // const ArrowDownIcon = ({ size = 18, className = "" }) => (
// //   <svg
// //     width={size}
// //     height={size}
// //     viewBox="0 0 24 24"
// //     fill="none"
// //     stroke="currentColor"
// //     strokeWidth="1.5"
// //     strokeLinecap="round"
// //     strokeLinejoin="round"
// //     className={className}
// //     aria-hidden="true">
// //     <path d="M12 5v14" />
// //     <path d="m6 13 6 6 6-6" />
// //   </svg>
// // );

// // const LeafIcon = ({ size = 44 }) => (
// //   <svg
// //     width={size}
// //     height={size}
// //     viewBox="0 0 24 24"
// //     fill="none"
// //     stroke="currentColor"
// //     strokeWidth="1.15"
// //     strokeLinecap="round"
// //     strokeLinejoin="round"
// //     aria-hidden="true">
// //     <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 18 2 18 2c1 5-1 11-7 13" />
// //     <path d="M2 21c0-3 1.85-5.36 5.08-6.94C9.36 12.94 12 12 16 12" />
// //   </svg>
// // );

// // const SunIcon = ({ size = 44 }) => (
// //   <svg
// //     width={size}
// //     height={size}
// //     viewBox="0 0 24 24"
// //     fill="none"
// //     stroke="currentColor"
// //     strokeWidth="1.15"
// //     strokeLinecap="round"
// //     strokeLinejoin="round"
// //     aria-hidden="true">
// //     <circle cx="12" cy="12" r="4" />
// //     <path d="M12 2v2" />
// //     <path d="M12 20v2" />
// //     <path d="m4.93 4.93 1.41 1.41" />
// //     <path d="m17.66 17.66 1.41 1.41" />
// //     <path d="M2 12h2" />
// //     <path d="M20 12h2" />
// //     <path d="m6.34 17.66-1.41 1.41" />
// //     <path d="m19.07 4.93-1.41 1.41" />
// //   </svg>
// // );

// // const BoltIcon = ({ size = 44 }) => (
// //   <svg
// //     width={size}
// //     height={size}
// //     viewBox="0 0 24 24"
// //     fill="none"
// //     stroke="currentColor"
// //     strokeWidth="1.15"
// //     strokeLinecap="round"
// //     strokeLinejoin="round"
// //     aria-hidden="true">
// //     <path d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z" />
// //   </svg>
// // );

// // const RecycleIcon = ({ size = 44 }) => (
// //   <svg
// //     width={size}
// //     height={size}
// //     viewBox="0 0 24 24"
// //     fill="none"
// //     stroke="currentColor"
// //     strokeWidth="1.15"
// //     strokeLinecap="round"
// //     strokeLinejoin="round"
// //     aria-hidden="true">
// //     <path d="m7.5 4.27 2.21-2.21 2.21 2.21" />
// //     <path d="M9.71 2.06 7.2 6.4a2 2 0 0 0 1.73 3h3.13" />
// //     <path d="m16.5 19.73-2.21 2.21-2.21-2.21" />
// //     <path d="m14.29 21.94 2.51-4.34a2 2 0 0 0-1.73-3h-3.13" />
// //     <path d="m3.27 15.5-2.21-2.21 2.21-2.21" />
// //     <path d="M1.06 13.29h5.02a2 2 0 0 0 1.73-3L6.25 7.58" />
// //   </svg>
// // );

// // /* =========================================================
// //    SERVICIOS
// // ========================================================= */

// // const services = [
// //   {
// //     id: 1,
// //     icon: LeafIcon,
// //     title: "Consultoría de",
// //     subtitle: "Sostenibilidad",
// //     href: "/servicios/consultoria",
// //   },
// //   {
// //     id: 2,
// //     icon: SunIcon,
// //     title: "Solar FV &",
// //     subtitle: "BESS",
// //     href: "/energia/solar-fotovoltaico",
// //   },
// //   {
// //     id: 3,
// //     icon: BoltIcon,
// //     title: "Movilidad",
// //     subtitle: "eléctrica",
// //     href: "/energia/carga-rapida-de-vehiculos-electricos",
// //   },
// //   {
// //     id: 4,
// //     icon: RecycleIcon,
// //     title: "Valorización",
// //     subtitle: "de residuos",
// //     href: "/valorizacion-residuos-industriales",
// //   },
// // ];

// // /* =========================================================
// //    SISTEMA DE ENERGÍA
// // ========================================================= */

// // function EnergySystem() {
// //   const circles = [
// //     { r: 42, opacity: 0.38 },
// //     { r: 62, opacity: 0.31 },
// //     { r: 86, opacity: 0.25 },
// //     { r: 116, opacity: 0.19 },
// //     { r: 150, opacity: 0.15 },
// //     { r: 192, opacity: 0.11 },
// //     { r: 240, opacity: 0.075, dash: "3 8" },
// //     { r: 294, opacity: 0.05, dash: "3 10" },
// //   ];

// //   const nodes = [
// //     [290, 550, 4],
// //     [312, 485, 3],
// //     [326, 365, 3.5],
// //     [356, 300, 4],
// //     [384, 252, 3],
// //     [420, 195, 3.5],
// //     [466, 138, 4],
// //     [510, 92, 3],
// //   ];

// //   return (
// //     <div
// //       className="
// //         pointer-events-none
// //         absolute
// //         bottom-[1%]
// //         left-[27%]
// //         top-[1%]
// //         z-[15]
// //         hidden
// //         w-[34%]
// //         overflow-hidden

// //         lg:block

// //         xl:left-[28%]
// //         xl:w-[33%]

// //         2xl:left-[29%]
// //         2xl:w-[32%]

// //         [mask-image:linear-gradient(to_right,transparent_0%,black_5%,black_86%,transparent_100%)]
// //         [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_5%,black_86%,transparent_100%)]
// //       ">
// //       {/* GLOW */}

// //       <div
// //         className="
// //           absolute
// //           left-1/2
// //           top-1/2
// //           h-[460px]
// //           w-[460px]
// //           -translate-x-1/2
// //           -translate-y-1/2
// //           rounded-full
// //           bg-[#9DD827]/14
// //           blur-[140px]
// //         "
// //       />

// //       <svg
// //         viewBox="0 0 700 820"
// //         fill="none"
// //         preserveAspectRatio="xMidYMid meet"
// //         className="
// //           absolute
// //           left-1/2
// //           top-1/2
// //           h-[134%]
// //           w-[178%]
// //           max-w-none
// //           -translate-x-1/2
// //           -translate-y-1/2
// //         "
// //         aria-hidden="true">
// //         <defs>
// //           {/* GLOW CENTRAL */}

// //           <radialGradient
// //             id="heroEnergyCore"
// //             cx="0"
// //             cy="0"
// //             r="1"
// //             gradientUnits="userSpaceOnUse"
// //             gradientTransform="translate(350 420) rotate(90) scale(195)">
// //             <stop stopColor="#A8DD2B" stopOpacity=".20" />
// //             <stop offset=".45" stopColor="#95CF24" stopOpacity=".07" />
// //             <stop offset="1" stopColor="#82C91E" stopOpacity="0" />
// //           </radialGradient>

// //           {/* LÍNEA DE ENERGÍA */}

// //           <linearGradient
// //             id="heroEnergyStroke"
// //             x1="120"
// //             y1="790"
// //             x2="575"
// //             y2="0"
// //             gradientUnits="userSpaceOnUse">
// //             <stop stopColor="#82C91E" stopOpacity=".05" />
// //             <stop offset=".48" stopColor="#9DD827" stopOpacity=".65" />
// //             <stop offset="1" stopColor="#82C91E" stopOpacity=".08" />
// //           </linearGradient>
// //         </defs>

// //         {/* GLOW */}

// //         <circle cx="350" cy="420" r="195" fill="url(#heroEnergyCore)" />

// //         {/* =====================================================
// //             ÓRBITAS
// //         ===================================================== */}

// //         {circles.map((circle, index) => (
// //           <motion.circle
// //             key={circle.r}
// //             cx="350"
// //             cy="420"
// //             r={circle.r}
// //             stroke="#7FBF1E"
// //             strokeWidth={index < 3 ? 0.95 : 0.7}
// //             strokeOpacity={circle.opacity}
// //             strokeDasharray={circle.dash}
// //             initial={{
// //               opacity: 0,
// //               scale: 0.82,
// //             }}
// //             animate={{
// //               opacity: 1,
// //               scale: 1,
// //             }}
// //             transition={{
// //               duration: 1.3,
// //               delay: 0.3 + index * 0.06,
// //               ease: [0.22, 1, 0.36, 1],
// //             }}
// //             style={{
// //               transformOrigin: "350px 420px",
// //             }}
// //           />
// //         ))}

// //         {/* =====================================================
// //             CURVA PRINCIPAL
// //         ===================================================== */}

// //         <motion.path
// //           d="
// //             M95 805
// //             C190 710 245 620 272 520
// //             C300 420 295 335 360 245
// //             C420 165 470 95 585 0
// //           "
// //           stroke="url(#heroEnergyStroke)"
// //           strokeWidth="1.1"
// //           strokeLinecap="round"
// //           initial={{
// //             pathLength: 0,
// //             opacity: 0,
// //           }}
// //           animate={{
// //             pathLength: 1,
// //             opacity: 1,
// //           }}
// //           transition={{
// //             duration: 2,
// //             delay: 0.52,
// //             ease: [0.22, 1, 0.36, 1],
// //           }}
// //         />

// //         {/* =====================================================
// //             CURVA SECUNDARIA
// //         ===================================================== */}

// //         <motion.path
// //           d="
// //             M25 815
// //             C150 710 210 615 235 515
// //             C266 395 298 300 370 210
// //             C440 125 495 62 620 -35
// //           "
// //           stroke="#7FBF1E"
// //           strokeWidth=".6"
// //           strokeOpacity=".18"
// //           strokeLinecap="round"
// //           initial={{
// //             pathLength: 0,
// //           }}
// //           animate={{
// //             pathLength: 1,
// //           }}
// //           transition={{
// //             duration: 2.3,
// //             delay: 0.7,
// //             ease: [0.22, 1, 0.36, 1],
// //           }}
// //         />

// //         {/* =====================================================
// //             TERCERA CURVA
// //         ===================================================== */}

// //         <motion.path
// //           d="
// //             M165 820
// //             C255 730 300 650 315 565
// //             C335 455 350 370 405 285
// //             C455 205 505 145 625 66
// //           "
// //           stroke="#7FBF1E"
// //           strokeWidth=".5"
// //           strokeOpacity=".11"
// //           strokeLinecap="round"
// //           initial={{
// //             pathLength: 0,
// //           }}
// //           animate={{
// //             pathLength: 1,
// //           }}
// //           transition={{
// //             duration: 2.5,
// //             delay: 0.88,
// //             ease: [0.22, 1, 0.36, 1],
// //           }}
// //         />

// //         {/* =====================================================
// //             NÚCLEO
// //         ===================================================== */}

// //         <motion.circle
// //           cx="350"
// //           cy="420"
// //           r="8"
// //           fill="#9DD827"
// //           initial={{
// //             opacity: 0,
// //             scale: 0,
// //           }}
// //           animate={{
// //             opacity: 0.9,
// //             scale: 1,
// //           }}
// //           transition={{
// //             duration: 0.35,
// //             delay: 1.15,
// //           }}
// //         />

// //         {/* PULSO */}

// //         <motion.circle
// //           cx="350"
// //           cy="420"
// //           r="20"
// //           stroke="#9DD827"
// //           strokeWidth="1"
// //           animate={{
// //             r: [14, 26, 14],
// //             opacity: [0.08, 0.38, 0.08],
// //           }}
// //           transition={{
// //             duration: 3,
// //             repeat: Infinity,
// //             ease: "easeInOut",
// //           }}
// //         />

// //         {/* =====================================================
// //             NODOS
// //         ===================================================== */}

// //         {nodes.map(([cx, cy, r], index) => (
// //           <motion.circle
// //             key={`${cx}-${cy}`}
// //             cx={cx}
// //             cy={cy}
// //             r={r}
// //             fill="#95CF24"
// //             initial={{
// //               opacity: 0,
// //               scale: 0,
// //             }}
// //             animate={{
// //               opacity: [0.22, 0.68, 0.22],
// //               scale: 1,
// //             }}
// //             transition={{
// //               scale: {
// //                 delay: 0.95 + index * 0.05,
// //                 duration: 0.3,
// //               },

// //               opacity: {
// //                 delay: 1.15,
// //                 duration: 2.2 + index * 0.1,
// //                 repeat: Infinity,
// //               },
// //             }}
// //           />
// //         ))}
// //       </svg>
// //     </div>
// //   );
// // }

// // /* =========================================================
// //    HERO
// // ========================================================= */

// // function HeroSection() {
// //   return (
// //     <section
// //       className="
// //         relative
// //         min-h-[100svh]
// //         overflow-hidden
// //         bg-[#EEF3E6]
// //         text-[#16392D]
// //       ">
// //       {/* =====================================================
// //           BACKGROUND
// //       ===================================================== */}

// //       <div
// //         className="
// //           pointer-events-none
// //           absolute
// //           inset-0
// //           bg-[radial-gradient(circle_at_37%_46%,rgba(151,190,35,0.18),transparent_32%),radial-gradient(circle_at_72%_25%,rgba(190,220,114,0.16),transparent_28%),linear-gradient(135deg,#F3F7EB_0%,#EAF1DF_48%,#DFEAD3_100%)]
// //         "
// //       />

// //       {/* =====================================================
// //           GRID
// //       ===================================================== */}

// //       <div
// //         className="
// //           pointer-events-none
// //           absolute
// //           left-0
// //           top-[78px]
// //           h-[84%]
// //           w-[66%]
// //           opacity-[0.075]
// //           [background-image:linear-gradient(rgba(67,101,70,.28)_1px,transparent_1px),linear-gradient(90deg,rgba(67,101,70,.28)_1px,transparent_1px)]
// //           [background-size:34px_34px]
// //         "
// //       />

// //       {/* =====================================================
// //           GLOW SECUNDARIO
// //       ===================================================== */}

// //       <div
// //         className="
// //           pointer-events-none
// //           absolute
// //           right-[14%]
// //           top-[16%]
// //           h-[360px]
// //           w-[360px]
// //           rounded-full
// //           bg-[#BBD779]/12
// //           blur-[130px]
// //         "
// //       />

// //       {/* =====================================================
// //           ENERGY
// //       ===================================================== */}

// //       <EnergySystem />

// //       {/* =====================================================
// //           WRAPPER
// //       ===================================================== */}

// //       <div
// //         className="
// //           relative
// //           z-10
// //           mx-auto
// //           flex
// //           min-h-[100svh]
// //           max-w-[1760px]
// //           flex-col
// //           px-5
// //           pb-5
// //           pt-[112px]

// //           sm:px-8
// //           lg:px-12
// //           xl:px-16
// //           2xl:px-20
// //         ">
// //         {/* ===================================================
// //             MAIN
// //         =================================================== */}

// //         <div
// //           className="
// //             relative
// //             grid
// //             flex-1
// //             items-center
// //             gap-12
// //             py-8

// //             lg:grid-cols-[0.92fr_1.08fr]
// //             lg:gap-16

// //             xl:gap-20
// //           ">
// //           {/* =================================================
// //               LEFT
// //           ================================================= */}

// //           <div className="relative z-30 lg:pr-8 xl:pr-12">
// //             {/* EYEBROW */}

// //             <motion.div
// //               initial={{
// //                 opacity: 0,
// //                 y: 18,
// //               }}
// //               animate={{
// //                 opacity: 1,
// //                 y: 0,
// //               }}
// //               transition={{
// //                 duration: 0.65,
// //                 delay: 0.1,
// //               }}
// //               className="mb-7 flex items-center gap-4">
// //               <span className="h-px w-11 bg-[#7FA51C]" />

// //               <p
// //                 className="
// //                   text-[12px]
// //                   font-semibold
// //                   uppercase
// //                   tracking-[0.15em]
// //                   text-[#668419]
// //                   sm:text-xs
// //                 ">
// //                 Ingeniería / Energía / Sostenibilidad
// //               </p>
// //             </motion.div>

// //             {/* =================================================
// //                 TITLE
// //             ================================================= */}

// //             <motion.h1
// //               initial={{
// //                 opacity: 0,
// //                 y: 34,
// //               }}
// //               animate={{
// //                 opacity: 1,
// //                 y: 0,
// //               }}
// //               transition={{
// //                 duration: 0.9,
// //                 delay: 0.2,
// //                 ease: [0.22, 1, 0.36, 1],
// //               }}
// //               className="
// //                 max-w-[830px]
// //                 text-[clamp(4.2rem,6.25vw,8.5rem)]
// //                 font-normal
// //                 leading-[0.85]
// //                 tracking-[-0.073em]
// //                 text-[#16392D]
// //               ">
// //               <span className="block">Facilitamos</span>

// //               <span className="block">soluciones</span>

// //               <span className="block text-[#7FA51C]">sostenibles.</span>
// //             </motion.h1>

// //             {/* =================================================
// //                 DESCRIPTION
// //             ================================================= */}

// //             <motion.p
// //               initial={{
// //                 opacity: 0,
// //                 y: 22,
// //               }}
// //               animate={{
// //                 opacity: 1,
// //                 y: 0,
// //               }}
// //               transition={{
// //                 duration: 0.75,
// //                 delay: 0.42,
// //               }}
// //               className="
// //                 mt-8
// //                 max-w-[590px]
// //                 text-base
// //                 leading-7
// //                 text-[#426357]

// //                 sm:text-lg
// //                 sm:leading-8
// //               ">
// //               Consultoría, ingeniería y desarrollo de soluciones de
// //               sostenibilidad, energía, movilidad eléctrica y valorización de
// //               residuos para transformar operaciones y proyectos.
// //             </motion.p>

// //             {/* =================================================
// //                 CTA
// //             ================================================= */}

// //             <motion.a
// //               initial={{
// //                 opacity: 0,
// //                 y: 20,
// //               }}
// //               animate={{
// //                 opacity: 1,
// //                 y: 0,
// //               }}
// //               transition={{
// //                 duration: 0.7,
// //                 delay: 0.58,
// //               }}
// //               href="#servicios"
// //               className="
// //                 group
// //                 mt-10
// //                 inline-flex
// //                 items-center
// //                 gap-6
// //               ">
// //               <span
// //                 className="
// //                   flex
// //                   h-[70px]
// //                   w-[70px]
// //                   items-center
// //                   justify-center
// //                   rounded-full
// //                   border
// //                   border-[#7FA51C]
// //                   bg-[#EFF5E8]/80
// //                   text-[#6D8F19]
// //                   shadow-[0_14px_40px_rgba(75,105,41,.09)]
// //                   backdrop-blur-xl
// //                   transition-all
// //                   duration-300

// //                   group-hover:scale-105
// //                   group-hover:bg-[#7FA51C]
// //                   group-hover:text-white
// //                 ">
// //                 <ArrowRightIcon size={24} />
// //               </span>

// //               <span
// //                 className="
// //                   relative
// //                   pb-2
// //                   text-sm
// //                   font-medium
// //                   text-[#173329]

// //                   sm:text-base
// //                 ">
// //                 Explorar soluciones
// //                 <span
// //                   className="
// //                     absolute
// //                     bottom-0
// //                     left-0
// //                     h-px
// //                     w-full
// //                     origin-left
// //                     bg-[#7FA51C]
// //                     transition-transform
// //                     duration-300

// //                     group-hover:scale-x-75
// //                   "
// //                 />
// //               </span>
// //             </motion.a>
// //           </div>

// //           {/* =================================================
// //               FOTO
// //           ================================================= */}

// //           <motion.div
// //             initial={{
// //               opacity: 0,
// //               x: 48,
// //             }}
// //             animate={{
// //               opacity: 1,
// //               x: 0,
// //             }}
// //             transition={{
// //               duration: 1,
// //               delay: 0.25,
// //               ease: [0.22, 1, 0.36, 1],
// //             }}
// //             className="
// //               relative
// //               z-20
// //               min-h-[520px]

// //               lg:min-h-[665px]
// //               xl:min-h-[720px]
// //             ">
// //             {/* GLOW FOTO */}

// //             <div
// //               className="
// //                 pointer-events-none
// //                 absolute
// //                 -bottom-24
// //                 -left-20
// //                 h-[350px]
// //                 w-[350px]
// //                 rounded-full
// //                 bg-[#97BE23]/12
// //                 blur-[145px]
// //               "
// //             />

// //             {/* =================================================
// //                 IMAGE FRAME
// //             ================================================= */}

// //             <div
// //               className="
// //                 absolute
// //                 inset-0
// //                 overflow-hidden
// //                 border
// //                 border-[#718A3E]/22
// //                 bg-[#D8E4CC]
// //                 shadow-[0_35px_100px_rgba(44,72,57,.15)]

// //                 [border-radius:150px_22px_100px_100px]

// //                 xl:[border-radius:80px_24px_50px_50px]
// //               ">
// //               <motion.img
// //                 initial={{
// //                   scale: 1.06,
// //                 }}
// //                 animate={{
// //                   scale: 1,
// //                 }}
// //                 transition={{
// //                   duration: 2.2,
// //                   ease: [0.22, 1, 0.36, 1],
// //                 }}
// //                 src={heroImage}
// //                 alt="Profesional supervisando soluciones de energía sostenible"
// //                 className="
// //                   h-full
// //                   w-full
// //                   object-cover
// //                   object-center
// //                 "
// //               />

// //               {/* OVERLAY VERDE */}

// //               <div className="absolute inset-0 bg-[#183F30]/50" />

// //               {/* OVERLAY IZQUIERDO */}

// //               <div
// //                 className="
// //                   absolute
// //                   inset-0
// //                   bg-gradient-to-r
// //                   from-[#173B2D]/25
// //                   via-transparent
// //                   to-transparent
// //                 "
// //               />

// //               {/* OVERLAY INFERIOR */}

// //               <div
// //                 className="
// //                   absolute
// //                   inset-0
// //                   bg-gradient-to-t
// //                   from-[#102E23]/28
// //                   via-transparent
// //                   to-transparent
// //                 "
// //               />
// //             </div>

// //             {/* =================================================
// //                 CARD
// //             ================================================= */}

// //             <motion.div
// //               initial={{
// //                 opacity: 0,
// //                 y: 28,
// //               }}
// //               animate={{
// //                 opacity: 1,
// //                 y: 0,
// //               }}
// //               transition={{
// //                 duration: 0.8,
// //                 delay: 0.7,
// //               }}
// //               className="
// //                 absolute
// //                 bottom-[-1px]
// //                 right-[-1px]
// //                 z-30
// //                 w-[82%]
// //                 max-w-[470px]
// //                 border
// //                 border-[#7FA51C]/28
// //                 bg-[#F0F5E8]/92
// //                 px-8
// //                 py-8
// //                 shadow-[0_22px_70px_rgba(52,77,62,.12)]
// //                 backdrop-blur-2xl

// //                 [border-radius:50px_0_50px_0]

// //                 sm:px-10
// //                 sm:py-9
// //               ">
// //               <div className="flex items-center gap-3">
// //                 <span className="h-px w-8 bg-[#7FA51C]" />

// //                 <p
// //                   className="
// //                     text-[11px]
// //                     font-semibold
// //                     uppercase
// //                     tracking-[0.16em]
// //                     text-[#668419]
// //                   ">
// //                   Soluciones integrales
// //                 </p>
// //               </div>

// //               <h3
// //                 className="
// //                   mt-5
// //                   max-w-[350px]
// //                   text-[23px]
// //                   font-normal
// //                   leading-[1.28]
// //                   tracking-[-0.04em]
// //                   text-[#173329]

// //                   sm:text-[27px]
// //                 ">
// //                 Estrategia e ingeniería para convertir retos en soluciones
// //                 sostenibles.
// //               </h3>

// //               <a
// //                 href="#proyectos"
// //                 className="
// //                   group
// //                   mt-6
// //                   inline-flex
// //                   items-center
// //                   gap-4
// //                   text-sm
// //                   font-medium
// //                   text-[#527064]
// //                   transition

// //                   hover:text-[#668419]
// //                 ">
// //                 Conocer proyectos
// //                 <ArrowRightIcon
// //                   size={17}
// //                   className="
// //                     text-[#7FA51C]
// //                     transition-transform
// //                     duration-300

// //                     group-hover:translate-x-1
// //                   "
// //                 />
// //               </a>
// //             </motion.div>
// //           </motion.div>
// //         </div>

// //         {/* =====================================================
// //             SERVICES
// //         ===================================================== */}

// //         <motion.div
// //           id="servicios"
// //           initial={{
// //             opacity: 0,
// //             y: 25,
// //           }}
// //           animate={{
// //             opacity: 1,
// //             y: 0,
// //           }}
// //           transition={{
// //             duration: 0.8,
// //             delay: 0.82,
// //           }}
// //           className="
// //             relative
// //             z-30
// //             overflow-hidden
// //             border
// //             border-[#2E5947]/10
// //             bg-[#EDF3E5]/88
// //             shadow-[0_26px_80px_rgba(44,72,57,.08)]
// //             backdrop-blur-xl

// //             [border-radius:72px_72px_24px_24px]
// //           ">
// //           <div
// //             className="
// //               grid
// //               grid-cols-1

// //               sm:grid-cols-2
// //               xl:grid-cols-4
// //             ">
// //             {services.map((service, index) => {
// //               const Icon = service.icon;

// //               return (
// //                 <a
// //                   key={service.id}
// //                   href={service.href}
// //                   className={[
// //                     `
// //                       group
// //                       relative
// //                       flex
// //                       min-h-[145px]
// //                       items-center
// //                       gap-6
// //                       px-7
// //                       py-7
// //                       transition
// //                       duration-300

// //                       hover:bg-[#E5EEDB]/80
// //                     `,
// //                     index !== services.length - 1
// //                       ? "border-b border-[#264E3D]/10 sm:border-r xl:border-b-0"
// //                       : "",
// //                     index === 1 ? "sm:border-r-0 xl:border-r" : "",
// //                   ].join(" ")}>
// //                   <span
// //                     className="
// //                       shrink-0
// //                       text-[#7FA51C]
// //                       transition-transform
// //                       duration-300

// //                       group-hover:-translate-y-1
// //                       group-hover:scale-105
// //                     ">
// //                     <Icon size={46} />
// //                   </span>

// //                   <div>
// //                     <p
// //                       className="
// //                         text-sm
// //                         font-semibold
// //                         uppercase
// //                         tracking-[0.045em]
// //                         text-[#173329]
// //                       ">
// //                       {service.title}
// //                     </p>

// //                     {service.subtitle && (
// //                       <p
// //                         className="
// //                           mt-1
// //                           text-sm
// //                           font-semibold
// //                           uppercase
// //                           tracking-[0.045em]
// //                           text-[#173329]
// //                         ">
// //                         {service.subtitle}
// //                       </p>
// //                     )}

// //                     <span
// //                       className="
// //                         mt-5
// //                         block
// //                         h-[2px]
// //                         w-7
// //                         bg-[#7FA51C]
// //                         transition-all
// //                         duration-300

// //                         group-hover:w-14
// //                       "
// //                     />
// //                   </div>
// //                 </a>
// //               );
// //             })}
// //           </div>
// //         </motion.div>

// //         {/* =====================================================
// //             MOBILE
// //         ===================================================== */}

// //         <a
// //           href="#nosotros"
// //           className="
// //             mx-auto
// //             mt-5
// //             flex
// //             items-center
// //             gap-3
// //             text-[11px]
// //             font-medium
// //             uppercase
// //             tracking-[0.17em]
// //             text-[#587467]

// //             lg:hidden
// //           ">
// //           Descubrir
// //           <ArrowDownIcon size={16} className="text-[#7FA51C]" />
// //         </a>
// //       </div>
// //     </section>
// //   );
// // }

// // export default HeroSection;

// import { motion } from "motion/react";

// import heroImage from "../../assets/images/hero/hero-person.jpg";

// /* =========================================================
//    ICONOS
// ========================================================= */

// const ArrowRightIcon = ({ size = 20, className = "" }) => (
//   <svg
//     width={size}
//     height={size}
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.6"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className={className}
//     aria-hidden="true">
//     <path d="M5 12h14" />
//     <path d="m13 6 6 6-6 6" />
//   </svg>
// );

// const ArrowDownIcon = ({ size = 18, className = "" }) => (
//   <svg
//     width={size}
//     height={size}
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.5"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className={className}
//     aria-hidden="true">
//     <path d="M12 5v14" />
//     <path d="m6 13 6 6 6-6" />
//   </svg>
// );

// const LeafIcon = ({ size = 44 }) => (
//   <svg
//     width={size}
//     height={size}
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.15"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     aria-hidden="true">
//     <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 18 2 18 2c1 5-1 11-7 13" />
//     <path d="M2 21c0-3 1.85-5.36 5.08-6.94C9.36 12.94 12 12 16 12" />
//   </svg>
// );

// const SunIcon = ({ size = 44 }) => (
//   <svg
//     width={size}
//     height={size}
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.15"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     aria-hidden="true">
//     <circle cx="12" cy="12" r="4" />
//     <path d="M12 2v2" />
//     <path d="M12 20v2" />
//     <path d="m4.93 4.93 1.41 1.41" />
//     <path d="m17.66 17.66 1.41 1.41" />
//     <path d="M2 12h2" />
//     <path d="M20 12h2" />
//     <path d="m6.34 17.66-1.41 1.41" />
//     <path d="m19.07 4.93-1.41 1.41" />
//   </svg>
// );

// const BoltIcon = ({ size = 44 }) => (
//   <svg
//     width={size}
//     height={size}
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.15"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     aria-hidden="true">
//     <path d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z" />
//   </svg>
// );

// const RecycleIcon = ({ size = 44 }) => (
//   <svg
//     width={size}
//     height={size}
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.15"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     aria-hidden="true">
//     <path d="m7.5 4.27 2.21-2.21 2.21 2.21" />
//     <path d="M9.71 2.06 7.2 6.4a2 2 0 0 0 1.73 3h3.13" />
//     <path d="m16.5 19.73-2.21 2.21-2.21-2.21" />
//     <path d="m14.29 21.94 2.51-4.34a2 2 0 0 0-1.73-3h-3.13" />
//     <path d="m3.27 15.5-2.21-2.21 2.21-2.21" />
//     <path d="M1.06 13.29h5.02a2 2 0 0 0 1.73-3L6.25 7.58" />
//   </svg>
// );

// /* =========================================================
//    SERVICIOS
// ========================================================= */

// const services = [
//   {
//     id: 1,
//     icon: LeafIcon,
//     title: "Consultoría de",
//     subtitle: "Sostenibilidad",
//     href: "/servicios/consultoria",
//   },
//   {
//     id: 2,
//     icon: SunIcon,
//     title: "Solar FV &",
//     subtitle: "BESS",
//     href: "/energia/solar-fotovoltaico",
//   },
//   {
//     id: 3,
//     icon: BoltIcon,
//     title: "Movilidad",
//     subtitle: "eléctrica",
//     href: "/energia/carga-rapida-de-vehiculos-electricos",
//   },
//   {
//     id: 4,
//     icon: RecycleIcon,
//     title: "Valorización",
//     subtitle: "de residuos",
//     href: "/valorizacion-residuos-industriales",
//   },
// ];

// /* =========================================================
//    SISTEMA DE ENERGÍA
// ========================================================= */

// function EnergySystem() {
//   const circles = [
//     { r: 42, opacity: 0.38 },
//     { r: 62, opacity: 0.31 },
//     { r: 86, opacity: 0.25 },
//     { r: 116, opacity: 0.19 },
//     { r: 150, opacity: 0.15 },
//     { r: 192, opacity: 0.11 },
//     { r: 240, opacity: 0.075, dash: "3 8" },
//     { r: 294, opacity: 0.05, dash: "3 10" },
//   ];

//   const nodes = [
//     [290, 550, 4],
//     [312, 485, 3],
//     [326, 365, 3.5],
//     [356, 300, 4],
//     [384, 252, 3],
//     [420, 195, 3.5],
//     [466, 138, 4],
//     [510, 92, 3],
//   ];

//   return (
//     <div
//       className="
//         pointer-events-none
//         absolute
//         bottom-[1%]
//         left-[27%]
//         top-[1%]
//         z-[15]
//         hidden
//         w-[34%]
//         overflow-hidden

//         lg:block

//         xl:left-[28%]
//         xl:w-[33%]

//         2xl:left-[29%]
//         2xl:w-[32%]

//         [mask-image:linear-gradient(to_right,transparent_0%,black_5%,black_86%,transparent_100%)]
//         [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_5%,black_86%,transparent_100%)]
//       ">
//       {/* GLOW */}

//       <div
//         className="
//           absolute
//           left-1/2
//           top-1/2
//           h-[460px]
//           w-[460px]
//           -translate-x-1/2
//           -translate-y-1/2
//           rounded-full
//           bg-[#9DD827]/14
//           blur-[140px]
//         "
//       />

//       <svg
//         viewBox="0 0 700 820"
//         fill="none"
//         preserveAspectRatio="xMidYMid meet"
//         className="
//           absolute
//           left-1/2
//           top-1/2
//           h-[134%]
//           w-[178%]
//           max-w-none
//           -translate-x-1/2
//           -translate-y-1/2
//         "
//         aria-hidden="true">
//         <defs>
//           {/* GLOW CENTRAL */}

//           <radialGradient
//             id="heroEnergyCore"
//             cx="0"
//             cy="0"
//             r="1"
//             gradientUnits="userSpaceOnUse"
//             gradientTransform="translate(350 420) rotate(90) scale(195)">
//             <stop stopColor="#A8DD2B" stopOpacity=".20" />
//             <stop offset=".45" stopColor="#95CF24" stopOpacity=".07" />
//             <stop offset="1" stopColor="#82C91E" stopOpacity="0" />
//           </radialGradient>

//           {/* LÍNEA DE ENERGÍA */}

//           <linearGradient
//             id="heroEnergyStroke"
//             x1="120"
//             y1="790"
//             x2="575"
//             y2="0"
//             gradientUnits="userSpaceOnUse">
//             <stop stopColor="#82C91E" stopOpacity=".05" />
//             <stop offset=".48" stopColor="#9DD827" stopOpacity=".65" />
//             <stop offset="1" stopColor="#82C91E" stopOpacity=".08" />
//           </linearGradient>
//         </defs>

//         {/* GLOW */}

//         <circle cx="350" cy="420" r="195" fill="url(#heroEnergyCore)" />

//         {/* =====================================================
//             ÓRBITAS
//         ===================================================== */}

//         {circles.map((circle, index) => (
//           <motion.circle
//             key={circle.r}
//             cx="350"
//             cy="420"
//             r={circle.r}
//             stroke="#7FBF1E"
//             strokeWidth={index < 3 ? 0.95 : 0.7}
//             strokeOpacity={circle.opacity}
//             strokeDasharray={circle.dash}
//             initial={{
//               opacity: 0,
//               scale: 0.82,
//             }}
//             animate={{
//               opacity: 1,
//               scale: 1,
//             }}
//             transition={{
//               duration: 1.3,
//               delay: 0.3 + index * 0.06,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             style={{
//               transformOrigin: "350px 420px",
//             }}
//           />
//         ))}

//         {/* =====================================================
//             CURVA PRINCIPAL
//         ===================================================== */}

//         <motion.path
//           d="
//             M95 805
//             C190 710 245 620 272 520
//             C300 420 295 335 360 245
//             C420 165 470 95 585 0
//           "
//           stroke="url(#heroEnergyStroke)"
//           strokeWidth="1.1"
//           strokeLinecap="round"
//           initial={{
//             pathLength: 0,
//             opacity: 0,
//           }}
//           animate={{
//             pathLength: 1,
//             opacity: 1,
//           }}
//           transition={{
//             duration: 2,
//             delay: 0.52,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//         />

//         {/* =====================================================
//             CURVA SECUNDARIA
//         ===================================================== */}

//         <motion.path
//           d="
//             M25 815
//             C150 710 210 615 235 515
//             C266 395 298 300 370 210
//             C440 125 495 62 620 -35
//           "
//           stroke="#7FBF1E"
//           strokeWidth=".6"
//           strokeOpacity=".18"
//           strokeLinecap="round"
//           initial={{
//             pathLength: 0,
//           }}
//           animate={{
//             pathLength: 1,
//           }}
//           transition={{
//             duration: 2.3,
//             delay: 0.7,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//         />

//         {/* =====================================================
//             TERCERA CURVA
//         ===================================================== */}

//         <motion.path
//           d="
//             M165 820
//             C255 730 300 650 315 565
//             C335 455 350 370 405 285
//             C455 205 505 145 625 66
//           "
//           stroke="#7FBF1E"
//           strokeWidth=".5"
//           strokeOpacity=".11"
//           strokeLinecap="round"
//           initial={{
//             pathLength: 0,
//           }}
//           animate={{
//             pathLength: 1,
//           }}
//           transition={{
//             duration: 2.5,
//             delay: 0.88,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//         />

//         {/* =====================================================
//             NÚCLEO
//         ===================================================== */}

//         <motion.circle
//           cx="350"
//           cy="420"
//           r="8"
//           fill="#9DD827"
//           initial={{
//             opacity: 0,
//             scale: 0,
//           }}
//           animate={{
//             opacity: 0.9,
//             scale: 1,
//           }}
//           transition={{
//             duration: 0.35,
//             delay: 1.15,
//           }}
//         />

//         {/* PULSO */}

//         <motion.circle
//           cx="350"
//           cy="420"
//           r="20"
//           stroke="#9DD827"
//           strokeWidth="1"
//           animate={{
//             r: [14, 26, 14],
//             opacity: [0.08, 0.38, 0.08],
//           }}
//           transition={{
//             duration: 3,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />

//         {/* =====================================================
//             NODOS
//         ===================================================== */}

//         {nodes.map(([cx, cy, r], index) => (
//           <motion.circle
//             key={`${cx}-${cy}`}
//             cx={cx}
//             cy={cy}
//             r={r}
//             fill="#95CF24"
//             initial={{
//               opacity: 0,
//               scale: 0,
//             }}
//             animate={{
//               opacity: [0.22, 0.68, 0.22],
//               scale: 1,
//             }}
//             transition={{
//               scale: {
//                 delay: 0.95 + index * 0.05,
//                 duration: 0.3,
//               },

//               opacity: {
//                 delay: 1.15,
//                 duration: 2.2 + index * 0.1,
//                 repeat: Infinity,
//               },
//             }}
//           />
//         ))}
//       </svg>
//     </div>
//   );
// }

// /* =========================================================
//    HERO
// ========================================================= */

// function HeroSection() {
//   return (
//     <section
//       className="
//         relative
//         min-h-[100svh]
//         overflow-hidden
//         bg-[#EEF3E6]
//         text-[#16392D]
//       ">
//       {/* =====================================================
//           BACKGROUND
//       ===================================================== */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           inset-0
//           bg-[radial-gradient(circle_at_37%_46%,rgba(151,190,35,0.18),transparent_32%),radial-gradient(circle_at_72%_25%,rgba(190,220,114,0.16),transparent_28%),linear-gradient(135deg,#F3F7EB_0%,#EAF1DF_48%,#DFEAD3_100%)]
//         "
//       />

//       {/* =====================================================
//           GRID
//       ===================================================== */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           left-0
//           top-[78px]
//           h-[84%]
//           w-[66%]
//           opacity-[0.075]
//           [background-image:linear-gradient(rgba(67,101,70,.28)_1px,transparent_1px),linear-gradient(90deg,rgba(67,101,70,.28)_1px,transparent_1px)]
//           [background-size:34px_34px]
//         "
//       />

//       {/* =====================================================
//           GLOW SECUNDARIO
//       ===================================================== */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           right-[14%]
//           top-[16%]
//           h-[360px]
//           w-[360px]
//           rounded-full
//           bg-[#BBD779]/12
//           blur-[130px]
//         "
//       />

//       {/* =====================================================
//           ENERGY
//       ===================================================== */}

//       <EnergySystem />

//       {/* =====================================================
//           WRAPPER
//       ===================================================== */}

//       <div
//         className="
//           relative
//           z-10
//           mx-auto
//           flex
//           min-h-[100svh]
//           max-w-[1760px]
//           flex-col
//           px-5
//           pb-5
//           pt-[112px]

//           sm:px-8
//           lg:px-12
//           xl:px-16
//           2xl:px-20
//         ">
//         {/* ===================================================
//             MAIN
//         =================================================== */}

//         <div
//           className="
//             relative
//             grid
//             flex-1
//             items-center
//             gap-12
//             py-8

//             lg:grid-cols-[0.92fr_1.08fr]
//             lg:gap-16

//             xl:gap-20
//           ">
//           {/* =================================================
//               LEFT
//           ================================================= */}

//           <div className="relative z-30 lg:pr-8 xl:pr-12">
//             {/* EYEBROW */}

//             <motion.div
//               initial={{
//                 opacity: 0,
//                 y: 18,
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               transition={{
//                 duration: 0.65,
//                 delay: 0.1,
//               }}
//               className="mb-7 flex items-center gap-4">
//               <span className="h-px w-11 bg-[#7FA51C]" />

//               <p
//                 className="
//                   text-[12px]
//                   font-semibold
//                   uppercase
//                   tracking-[0.15em]
//                   text-[#668419]
//                   sm:text-xs
//                 ">
//                 Consultoría / Ingeniería / Sostenibilidad
//               </p>
//             </motion.div>

//             {/* =================================================
//                 TITLE
//             ================================================= */}

//             <motion.h1
//               initial={{
//                 opacity: 0,
//                 y: 34,
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               transition={{
//                 duration: 0.9,
//                 delay: 0.2,
//                 ease: [0.22, 1, 0.36, 1],
//               }}
//               className="
//                 max-w-[830px]
//                 text-[clamp(4.2rem,6.25vw,8.5rem)]
//                 font-normal
//                 leading-[0.85]
//                 tracking-[-0.073em]
//                 text-[#16392D]
//               ">
//               <span className="block">Facilitamos</span>

//               <span className="block">soluciones</span>

//               <span className="block text-[#7FA51C]">sostenibles.</span>
//             </motion.h1>

//             {/* =================================================
//                 DESCRIPTION
//             ================================================= */}

//             <motion.p
//               initial={{
//                 opacity: 0,
//                 y: 22,
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               transition={{
//                 duration: 0.75,
//                 delay: 0.42,
//               }}
//               className="
//                 mt-8
//                 max-w-[590px]
//                 text-base
//                 leading-7
//                 text-[#426357]

//                 sm:text-lg
//                 sm:leading-8
//               ">
//               Consultoría, ingeniería y desarrollo de soluciones de
//               sostenibilidad, energía, movilidad eléctrica y valorización de
//               residuos para transformar operaciones y proyectos.
//             </motion.p>

//             {/* =================================================
//                 CTA
//             ================================================= */}

//             <motion.a
//               initial={{
//                 opacity: 0,
//                 y: 20,
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               transition={{
//                 duration: 0.7,
//                 delay: 0.58,
//               }}
//               href="#servicios"
//               className="
//                 group
//                 mt-10
//                 inline-flex
//                 items-center
//                 gap-6
//               ">
//               <span
//                 className="
//                   flex
//                   h-[70px]
//                   w-[70px]
//                   items-center
//                   justify-center
//                   rounded-full
//                   border
//                   border-[#7FA51C]
//                   bg-[#EFF5E8]/80
//                   text-[#6D8F19]
//                   shadow-[0_14px_40px_rgba(75,105,41,.09)]
//                   backdrop-blur-xl
//                   transition-all
//                   duration-300

//                   group-hover:scale-105
//                   group-hover:bg-[#7FA51C]
//                   group-hover:text-white
//                 ">
//                 <ArrowRightIcon size={24} />
//               </span>

//               <span
//                 className="
//                   relative
//                   pb-2
//                   text-sm
//                   font-medium
//                   text-[#173329]

//                   sm:text-base
//                 ">
//                 Explorar soluciones
//                 <span
//                   className="
//                     absolute
//                     bottom-0
//                     left-0
//                     h-px
//                     w-full
//                     origin-left
//                     bg-[#7FA51C]
//                     transition-transform
//                     duration-300

//                     group-hover:scale-x-75
//                   "
//                 />
//               </span>
//             </motion.a>
//           </div>

//           {/* =================================================
//               FOTO
//           ================================================= */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               x: 48,
//             }}
//             animate={{
//               opacity: 1,
//               x: 0,
//             }}
//             transition={{
//               duration: 1,
//               delay: 0.25,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="
//               relative
//               z-20
//               min-h-[520px]

//               lg:min-h-[665px]
//               xl:min-h-[720px]
//             ">
//             {/* GLOW FOTO */}

//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 -bottom-24
//                 -left-20
//                 h-[350px]
//                 w-[350px]
//                 rounded-full
//                 bg-[#97BE23]/12
//                 blur-[145px]
//               "
//             />

//             {/* =================================================
//                 IMAGE FRAME
//             ================================================= */}

//             <div
//               className="
//                 absolute
//                 inset-0
//                 overflow-hidden
//                 border
//                 border-[#718A3E]/22
//                 bg-[#D8E4CC]
//                 shadow-[0_35px_100px_rgba(44,72,57,.15)]

//                 [border-radius:150px_22px_100px_100px]

//                 xl:[border-radius:80px_24px_50px_50px]
//               ">
//               <motion.img
//                 initial={{
//                   scale: 1.06,
//                 }}
//                 animate={{
//                   scale: 1,
//                 }}
//                 transition={{
//                   duration: 2.2,
//                   ease: [0.22, 1, 0.36, 1],
//                 }}
//                 src={heroImage}
//                 alt="Profesional supervisando soluciones de energía sostenible"
//                 className="
//                   h-full
//                   w-full
//                   object-cover
//                   object-center
//                 "
//               />

//               {/* OVERLAY VERDE */}

//               <div className="absolute inset-0 bg-[#183F30]/50" />

//               {/* OVERLAY IZQUIERDO */}

//               <div
//                 className="
//                   absolute
//                   inset-0
//                   bg-gradient-to-r
//                   from-[#173B2D]/25
//                   via-transparent
//                   to-transparent
//                 "
//               />

//               {/* OVERLAY INFERIOR */}

//               <div
//                 className="
//                   absolute
//                   inset-0
//                   bg-gradient-to-t
//                   from-[#102E23]/28
//                   via-transparent
//                   to-transparent
//                 "
//               />
//             </div>

//             {/* =================================================
//                 CARD
//             ================================================= */}

//             <motion.div
//               initial={{
//                 opacity: 0,
//                 y: 28,
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               transition={{
//                 duration: 0.8,
//                 delay: 0.7,
//               }}
//               className="
//                 absolute
//                 bottom-[-1px]
//                 right-[-1px]
//                 z-30
//                 w-[82%]
//                 max-w-[470px]
//                 border
//                 border-[#7FA51C]/28
//                 bg-[#F0F5E8]/92
//                 px-8
//                 py-8
//                 shadow-[0_22px_70px_rgba(52,77,62,.12)]
//                 backdrop-blur-2xl

//                 [border-radius:50px_0_50px_0]

//                 sm:px-10
//                 sm:py-9
//               ">
//               <div className="flex items-center gap-3">
//                 <span className="h-px w-8 bg-[#7FA51C]" />

//                 <p
//                   className="
//                     text-[11px]
//                     font-semibold
//                     uppercase
//                     tracking-[0.16em]
//                     text-[#668419]
//                   ">
//                   Soluciones integrales
//                 </p>
//               </div>

//               <h3
//                 className="
//                   mt-5
//                   max-w-[350px]
//                   text-[23px]
//                   font-normal
//                   leading-[1.28]
//                   tracking-[-0.04em]
//                   text-[#173329]

//                   sm:text-[27px]
//                 ">
//                 Estrategia e ingeniería para convertir retos en soluciones
//                 sostenibles.
//               </h3>

//               <a
//                 href="#proyectos"
//                 className="
//                   group
//                   mt-6
//                   inline-flex
//                   items-center
//                   gap-4
//                   text-sm
//                   font-medium
//                   text-[#527064]
//                   transition

//                   hover:text-[#668419]
//                 ">
//                 Explorar soluciones
//                 <ArrowRightIcon
//                   size={17}
//                   className="
//                     text-[#7FA51C]
//                     transition-transform
//                     duration-300

//                     group-hover:translate-x-1
//                   "
//                 />
//               </a>
//             </motion.div>
//           </motion.div>
//         </div>

//         {/* =====================================================
//             SERVICES
//         ===================================================== */}

//         <motion.div
//           id="servicios"
//           initial={{
//             opacity: 0,
//             y: 25,
//           }}
//           animate={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{
//             duration: 0.8,
//             delay: 0.82,
//           }}
//           className="
//             relative
//             z-30
//             overflow-hidden
//             border
//             border-[#2E5947]/10
//             bg-[#EDF3E5]/88
//             shadow-[0_26px_80px_rgba(44,72,57,.08)]
//             backdrop-blur-xl

//             [border-radius:72px_72px_24px_24px]
//           ">
//           <div
//             className="
//               grid
//               grid-cols-1

//               sm:grid-cols-2
//               xl:grid-cols-4
//             ">
//             {services.map((service, index) => {
//               const Icon = service.icon;

//               return (
//                 <a
//                   key={service.id}
//                   href={service.href}
//                   className={[
//                     `
//                       group
//                       relative
//                       flex
//                       min-h-[145px]
//                       items-center
//                       gap-6
//                       px-7
//                       py-7
//                       transition
//                       duration-300

//                       hover:bg-[#E5EEDB]/80
//                     `,
//                     index !== services.length - 1
//                       ? "border-b border-[#264E3D]/10 sm:border-r xl:border-b-0"
//                       : "",
//                     index === 1 ? "sm:border-r-0 xl:border-r" : "",
//                   ].join(" ")}>
//                   <span
//                     className="
//                       shrink-0
//                       text-[#7FA51C]
//                       transition-transform
//                       duration-300

//                       group-hover:-translate-y-1
//                       group-hover:scale-105
//                     ">
//                     <Icon size={46} />
//                   </span>

//                   <div>
//                     <p
//                       className="
//                         text-sm
//                         font-semibold
//                         uppercase
//                         tracking-[0.045em]
//                         text-[#173329]
//                       ">
//                       {service.title}
//                     </p>

//                     {service.subtitle && (
//                       <p
//                         className="
//                           mt-1
//                           text-sm
//                           font-semibold
//                           uppercase
//                           tracking-[0.045em]
//                           text-[#173329]
//                         ">
//                         {service.subtitle}
//                       </p>
//                     )}

//                     <span
//                       className="
//                         mt-5
//                         block
//                         h-[2px]
//                         w-7
//                         bg-[#7FA51C]
//                         transition-all
//                         duration-300

//                         group-hover:w-14
//                       "
//                     />
//                   </div>
//                 </a>
//               );
//             })}
//           </div>
//         </motion.div>

//         {/* =====================================================
//             MOBILE
//         ===================================================== */}

//         <a
//           href="#nosotros"
//           className="
//             mx-auto
//             mt-5
//             flex
//             items-center
//             gap-3
//             text-[11px]
//             font-medium
//             uppercase
//             tracking-[0.17em]
//             text-[#587467]

//             lg:hidden
//           ">
//           Descubrir
//           <ArrowDownIcon size={16} className="text-[#7FA51C]" />
//         </a>
//       </div>
//     </section>
//   );
// }

// export default HeroSection;

import { motion } from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Leaf,
  PlugZap,
  Recycle,
  SolarPanel,
} from "lucide-react";

import heroBg from "../../assets/images/hero/hero-person.jpg";

/* =========================================================
   DATA
========================================================= */

const services = [
  {
    number: "01",
    title: "Consultoría",
    subtitle: "Sostenibilidad",
    href: "/servicios/consultoria",
    icon: Leaf,
  },
  {
    number: "02",
    title: "Solar FV",
    subtitle: "& BESS",
    href: "/energia/solar-fotovoltaico",
    icon: SolarPanel,
  },
  {
    number: "03",
    title: "Movilidad",
    subtitle: "Eléctrica",
    href: "/energia/carga-rapida-de-vehiculos-electricos",
    icon: PlugZap,
  },
  {
    number: "04",
    title: "Valorización",
    subtitle: "de Residuos",
    href: "/valorizacion-residuos-industriales",
    icon: Recycle,
  },
];

/* =========================================================
   ENERGY SIGNAL
========================================================= */

function EnergyPulse({ delay = 0, reverse = false }) {
  return (
    <motion.span
      animate={{
        left: reverse ? ["100%", "0%"] : ["0%", "100%"],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 3.6,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
      className="
        absolute
        top-1/2
        h-1.5
        w-1.5
        -translate-y-1/2
        rounded-full
        bg-[#B8F23A]
        shadow-[0_0_16px_rgba(184,242,58,.95)]
      "
    />
  );
}

/* =========================================================
   ECOSYSTEM NODE
========================================================= */

function EcosystemNode({
  icon: Icon,
  number,
  title,
  subtitle,
  className = "",
  delay = 0.5,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={[
        `
          absolute
          z-30
          hidden
          min-w-[174px]

          xl:block
        `,
        className,
      ].join(" ")}>
      <div
        className="
          group
          rounded-[18px]
          border
          border-white/[0.08]
          bg-[#0B241E]/88
          p-4
          shadow-[0_22px_55px_rgba(0,0,0,.32)]
          backdrop-blur-xl
          transition-all
          duration-300

          hover:-translate-y-1
          hover:border-[#B8F23A]/28
        ">
        <div className="flex items-center gap-3.5">
          <span
            className="
              flex
              h-10
              w-10
              shrink-0
              items-center
              justify-center
              rounded-[11px]
              border
              border-[#B8F23A]/16
              bg-[#B8F23A]/[0.07]
              text-[#B8F23A]
            ">
            <Icon size={18} strokeWidth={1.5} />
          </span>

          <div>
            <span
              className="
                text-[11px]
                font-semibold
                tracking-[0.15em]
                text-[#B8F23A]
              ">
              {number}
            </span>

            <p className="mt-0.5 text-[13px] font-medium text-white/90">
              {title}
            </p>

            <p className="mt-0.5 text-[11px] text-white/35">{subtitle}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   MOBILE NODE
========================================================= */

function MobileNode({ icon: Icon, className = "" }) {
  return (
    <div
      className={[
        `
          absolute
          z-20
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-[16px]
          border
          border-[#B8F23A]/16
          bg-[#0C2922]/92
          text-[#B8F23A]
          shadow-[0_18px_45px_rgba(0,0,0,.24)]
          backdrop-blur-lg

          xl:hidden
        `,
        className,
      ].join(" ")}>
      <Icon size={22} strokeWidth={1.45} />
    </div>
  );
}

/* =========================================================
   GRUNER ECOSYSTEM
========================================================= */

function GrunerEcosystem() {
  return (
    <div
      className="
        relative
        mx-auto
        h-[500px]
        w-full
        max-w-[780px]

        sm:h-[560px]
        lg:h-[650px]
        xl:h-[700px]
        2xl:h-[740px]
      ">
      {/* AMBIENT GLOW */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[48%]
          h-[76%]
          w-[76%]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#8FCF16]/[0.08]
          blur-[105px]
        "
      />

      {/* LOCAL GLASS / IMAGE REVEAL */}

      <div
        className="
          pointer-events-none
          absolute
          inset-[5%]
          rounded-[44px]
          bg-[radial-gradient(circle_at_center,rgba(184,242,58,.035),transparent_66%)]
        "
      />

      {/* FLOOR */}

      <div
        className="
          pointer-events-none
          absolute
          inset-[8%]
          opacity-[0.19]
          [background-image:linear-gradient(rgba(184,242,58,.09)_1px,transparent_1px),linear-gradient(90deg,rgba(184,242,58,.09)_1px,transparent_1px)]
          [background-size:36px_36px]
          [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]
        "
      />

      {/* OUTER RING */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 52,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          left-1/2
          top-[48%]
          h-[390px]
          w-[390px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-dashed
          border-[#B8F23A]/12

          sm:h-[440px]
          sm:w-[440px]
          lg:h-[500px]
          lg:w-[500px]
        "
      />

      {/* INNER RING */}

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 38,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          left-1/2
          top-[48%]
          h-[290px]
          w-[290px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border
          border-[#B8F23A]/[0.09]

          sm:h-[325px]
          sm:w-[325px]
          lg:h-[365px]
          lg:w-[365px]
        "
      />

      {/* CONNECTIONS */}

      <div
        className="
          absolute
          left-1/2
          top-[48%]
          h-px
          w-[70%]
          -translate-x-1/2
          -translate-y-1/2
          -rotate-[31deg]
          bg-gradient-to-r
          from-transparent
          via-[#B8F23A]/45
          to-transparent
        ">
        <EnergyPulse />
      </div>

      <div
        className="
          absolute
          left-1/2
          top-[48%]
          h-px
          w-[70%]
          -translate-x-1/2
          -translate-y-1/2
          rotate-[31deg]
          bg-gradient-to-r
          from-transparent
          via-[#B8F23A]/45
          to-transparent
        ">
        <EnergyPulse delay={1.5} reverse />
      </div>

      <div
        className="
          absolute
          left-1/2
          top-[48%]
          h-px
          w-[56%]
          -translate-x-1/2
          -translate-y-1/2
          bg-gradient-to-r
          from-transparent
          via-[#B8F23A]/20
          to-transparent
        "
      />

      {/* =====================================================
          CENTRAL PLATFORM
      ===================================================== */}

      <motion.div
        initial={{ opacity: 0, scale: 0.82, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 1,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          left-1/2
          top-[48%]
          z-30
          h-[235px]
          w-[235px]
          -translate-x-1/2
          -translate-y-1/2

          sm:h-[265px]
          sm:w-[265px]
          lg:h-[290px]
          lg:w-[290px]
        ">
        <div
          className="
            absolute
            inset-[7%]
            rotate-45
            rounded-[34px]
            border
            border-[#B8F23A]/20
            bg-[#0D3028]/96
            shadow-[0_0_80px_rgba(184,242,58,.10),0_35px_75px_rgba(0,0,0,.32)]
            backdrop-blur-lg
          "
        />

        <div
          className="
            absolute
            inset-[18%]
            rotate-45
            rounded-[27px]
            border
            border-white/[0.06]
            bg-[#143E33]/96
          "
        />

        <motion.div
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(184,242,58,0)",
              "0 0 0 18px rgba(184,242,58,.045)",
              "0 0 0 0 rgba(184,242,58,0)",
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            left-1/2
            top-1/2
            flex
            h-[132px]
            w-[132px]
            -translate-x-1/2
            -translate-y-1/2
            flex-col
            items-center
            justify-center
            rounded-full
            border
            border-[#B8F23A]/22
            bg-[#0B2922]/98

            sm:h-[146px]
            sm:w-[146px]
            lg:h-[158px]
            lg:w-[158px]
          ">
          <span
            className="
              text-[44px]
              font-semibold
              leading-none
              tracking-[-0.08em]
              text-[#B8F23A]

              lg:text-[50px]
            ">
            G
          </span>

          <span
            className="
              mt-1
              text-[13px]
              font-semibold
              tracking-[0.10em]
              text-white
            ">
            GRUNER
          </span>

          <span
            className="
              mt-1.5
              text-[10px]
              uppercase
              tracking-[0.15em]
              text-white/32
            ">
            Integrated
          </span>
        </motion.div>

        {[
          "left-[4%] top-1/2",
          "right-[4%] top-1/2",
          "left-1/2 top-[4%]",
          "bottom-[4%] left-1/2",
        ].map((position) => (
          <span
            key={position}
            className={[
              `
                absolute
                h-2
                w-2
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#B8F23A]
                shadow-[0_0_13px_rgba(184,242,58,.75)]
              `,
              position,
            ].join(" ")}
          />
        ))}
      </motion.div>

      {/* DESKTOP NODES */}

      <EcosystemNode
        icon={Leaf}
        number="01"
        title="Consultoría"
        subtitle="Estrategia ESG"
        delay={0.52}
        className="left-[0%] top-[12%]"
      />

      <EcosystemNode
        icon={Recycle}
        number="04"
        title="Valorización"
        subtitle="Circularidad"
        delay={0.62}
        className="right-[0%] top-[13%]"
      />

      <EcosystemNode
        icon={SolarPanel}
        number="02"
        title="Solar + BESS"
        subtitle="Energía"
        delay={0.72}
        className="bottom-[8%] left-[2%]"
      />

      <EcosystemNode
        icon={PlugZap}
        number="03"
        title="Movilidad"
        subtitle="Infraestructura"
        delay={0.82}
        className="bottom-[8%] right-[1%]"
      />

      {/* MOBILE / TABLET NODES */}

      <MobileNode icon={Leaf} className="left-[7%] top-[16%]" />

      <MobileNode icon={Recycle} className="right-[7%] top-[16%]" />

      <MobileNode icon={SolarPanel} className="bottom-[15%] left-[9%]" />

      <MobileNode icon={PlugZap} className="bottom-[15%] right-[9%]" />

      {/* MICRO LABEL */}

      <div
        className="
          absolute
          bottom-[2%]
          left-1/2
          -translate-x-1/2
          whitespace-nowrap
          text-[10px]
          font-semibold
          uppercase
          tracking-[0.18em]
          text-white/22
        ">
        Strategy · Engineering · Implementation
      </div>
    </div>
  );
}

/* =========================================================
   HERO
========================================================= */

function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById("nosotros")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      className="
        relative
        min-h-[100svh]
        overflow-hidden
        bg-[#06110E]
        pt-[88px]
        text-white
      ">
      {/* =====================================================
          AMBIENT BACKGROUND IMAGE
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="
            h-full
            w-full
            object-cover
            object-center
            opacity-[0.70]
          "
        />

        {/* stronger left mask for text readability */}

        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(90deg,#06110E_0%,rgba(6,17,14,.97)_30%,rgba(6,17,14,.82)_57%,rgba(6,17,14,.58)_78%,rgba(6,17,14,.72)_100%)]
          "
        />

        {/* vertical fade */}

        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(180deg,rgba(6,17,14,.18)_0%,rgba(6,17,14,.08)_42%,rgba(6,17,14,.66)_100%)]
          "
        />
      </div>

      {/* =====================================================
          BACKGROUND SYSTEM
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_78%_38%,rgba(157,216,39,.10),transparent_30%),radial-gradient(circle_at_0%_0%,rgba(157,216,39,.045),transparent_23%)]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.07]
          [background-image:linear-gradient(rgba(255,255,255,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.055)_1px,transparent_1px)]
          [background-size:72px_72px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-[220px]
          top-[25%]
          h-[460px]
          w-[460px]
          rounded-full
          bg-[#143E33]/25
          blur-[120px]
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
            MAIN COMPOSITION
        =================================================== */}

        <div
          className="
            grid
            items-center
            gap-4
            py-8

            lg:min-h-[680px]
            lg:grid-cols-[.88fr_1.12fr]
            lg:gap-2
            lg:py-4

            xl:min-h-[720px]
            xl:grid-cols-[.82fr_1.18fr]

            2xl:min-h-[760px]
          ">
          {/* =================================================
              COPY
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              z-40
              max-w-[760px]

              lg:pr-4
            ">
            {/* EYEBROW */}

            <div className="flex items-center gap-4">
              <span className="h-px w-9 bg-[#B8F23A]" />

              <p
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#B8F23A]
                ">
                Estrategia · Ingeniería · Implementación
              </p>
            </div>

            {/* TITLE */}

            <h1
              className="
                mt-6
                text-[clamp(4.1rem,6.2vw,8.7rem)]
                font-normal
                leading-[0.84]
                tracking-[-0.075em]
              ">
              Facilitamos
              <span className="block text-[#B8F23A]">soluciones</span>
              <span className="block">sostenibles.</span>
            </h1>

            {/* DESCRIPTION */}

            <p
              className="
                mt-7
                max-w-[570px]
                text-[15px]
                leading-7
                text-white/58

                sm:text-[17px]
                sm:leading-8
              ">
              Integramos estrategia, ingeniería y tecnología para transformar
              retos de sostenibilidad, energía y operación en proyectos
              concretos.
            </p>

            {/* ACTIONS */}

            <div
              className="
                mt-8
                flex
                flex-wrap
                items-center
                gap-3
              ">
              <button
                type="button"
                onClick={scrollToAbout}
                className="
                  group
                  inline-flex
                  h-12
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  bg-[#B8F23A]
                  px-5
                  text-[13px]
                  font-medium
                  text-[#102E27]
                  transition-all
                  duration-300

                  hover:bg-white
                ">
                Conocer GRUNER
                <ArrowDownRight
                  size={16}
                  strokeWidth={1.7}
                  className="
                    transition-transform
                    duration-300

                    group-hover:translate-x-0.5
                    group-hover:translate-y-0.5
                  "
                />
              </button>

              <a
                href="#contacto"
                className="
                  group
                  inline-flex
                  h-12
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  border
                  border-white/15
                  bg-white/[0.015]
                  px-5
                  text-[13px]
                  font-medium
                  text-white/88
                  backdrop-blur-sm
                  transition-all
                  duration-300

                  hover:border-[#B8F23A]/55
                  hover:bg-white/[0.04]
                  hover:text-white
                ">
                Hablemos de tu proyecto
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.6}
                  className="
                    text-[#B8F23A]
                    transition-transform
                    duration-300

                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </a>
            </div>

            {/* SMALL STATEMENT */}

            <div
              className="
                mt-8
                flex
                max-w-[530px]
                items-center
                gap-4
                border-t
                border-white/[0.08]
                pt-5
              ">
              <span
                className="
                  h-2
                  w-2
                  shrink-0
                  rounded-full
                  bg-[#B8F23A]
                  shadow-[0_0_12px_rgba(184,242,58,.65)]
                "
              />

              <p
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.13em]
                  text-white/32
                ">
                De la estrategia a la implementación
              </p>
            </div>
          </motion.div>

          {/* =================================================
              ECOSYSTEM
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: 34 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              -mt-8

              lg:-mr-6
              lg:-mt-2

              xl:-mr-10
            ">
            <GrunerEcosystem />
          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM BRAND BAR
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.75,
            delay: 0.62,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mb-7
            flex
            flex-col
            gap-5
            border-t
            border-white/[0.09]
            py-5

            lg:flex-row
            lg:items-center
            lg:justify-between
          ">
          <div className="flex items-center gap-4">
            <span
              className="
                h-2
                w-2
                shrink-0
                rounded-full
                bg-[#B8F23A]
                shadow-[0_0_14px_rgba(184,242,58,.70)]
              "
            />

            <p
              className="
                text-[11px]
                font-medium
                uppercase
                tracking-[0.15em]
                text-white/42
              ">
              Estrategia · Ingeniería · Tecnología · Implementación
            </p>
          </div>

          <div
            className="
              flex
              flex-wrap
              items-center
              gap-x-7
              gap-y-4
            ">
            <div className="flex items-baseline gap-2">
              <span
                className="
                  text-[18px]
                  font-medium
                  tracking-[-0.03em]
                  text-white
                ">
                360°
              </span>

              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.12em]
                  text-white/28
                ">
                visión integral
              </span>
            </div>

            <span className="hidden h-5 w-px bg-white/10 sm:block" />

            <div className="flex items-baseline gap-2">
              <span
                className="
                  text-[13px]
                  font-medium
                  text-[#B8F23A]
                ">
                B Corp
              </span>

              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.12em]
                  text-white/28
                ">
                certificada
              </span>
            </div>

            <span className="hidden h-5 w-px bg-white/10 sm:block" />

            <a
              href="https://www.gruner.global/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar el sitio global de GRUNER"
              className="
                group
                inline-flex
                items-center
                gap-2
                text-[10px]
                font-medium
                uppercase
                tracking-[0.12em]
                text-white/35
                transition-colors

                hover:text-[#B8F23A]
              ">
              GRUNER Global
              <ArrowUpRight
                size={14}
                strokeWidth={1.6}
                className="
                  transition-transform

                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
