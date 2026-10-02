// import { motion } from "motion/react";
// import {
//   ArrowDown,
//   ArrowUpRight,
//   BarChart3,
//   Leaf,
//   Recycle,
//   ShieldCheck,
// } from "lucide-react";
// import { useState } from "react";

// /* =========================================================
//    CAPABILITIES
// ========================================================= */

// const capabilities = [
//   {
//     number: "01",
//     icon: Leaf,
//     label: "ESG",
//     title: "Estrategia ESG",
//     headline: "Sostenibilidad que guía decisiones.",
//     description:
//       "Integramos criterios ambientales, sociales y de gobernanza en la estrategia y operación del negocio.",
//   },
//   {
//     number: "02",
//     icon: BarChart3,
//     label: "Descarbonización",
//     title: "Descarbonización",
//     headline: "Medir. Reducir. Transformar.",
//     description:
//       "Diseñamos rutas claras para reducir emisiones, gestionar riesgos climáticos y avanzar hacia objetivos Net Zero.",
//   },
//   {
//     number: "03",
//     icon: Recycle,
//     label: "Circularidad",
//     title: "Circularidad",
//     headline: "Recursos que vuelven a generar valor.",
//     description:
//       "Transformamos materiales, residuos y procesos en nuevas oportunidades para una operación más eficiente y resiliente.",
//   },
//   {
//     number: "04",
//     icon: ShieldCheck,
//     label: "Estrategia",
//     title: "Estrategia",
//     headline: "Impacto que se convierte en acción.",
//     description:
//       "Conectamos análisis, prioridades y ejecución para convertir compromisos de sostenibilidad en resultados medibles.",
//   },
// ];

// /* =========================================================
//    ENERGY NETWORK
// ========================================================= */

// function EnergyNetwork() {
//   return (
//     <div
//       className="
//         pointer-events-none
//         absolute
//         inset-0
//         hidden
//         lg:block
//       ">
//       <svg
//         viewBox="0 0 760 760"
//         fill="none"
//         className="
//           absolute
//           left-1/2
//           top-1/2
//           h-[118%]
//           w-[118%]
//           -translate-x-1/2
//           -translate-y-1/2
//         "
//         aria-hidden="true">
//         <defs>
//           <radialGradient
//             id="consultoriaGlow"
//             cx="0"
//             cy="0"
//             r="1"
//             gradientUnits="userSpaceOnUse"
//             gradientTransform="translate(390 370) rotate(90) scale(245)">
//             <stop stopColor="#B9EB48" stopOpacity=".28" />
//             <stop offset=".52" stopColor="#7FA51C" stopOpacity=".08" />
//             <stop offset="1" stopColor="#7FA51C" stopOpacity="0" />
//           </radialGradient>

//           <linearGradient
//             id="consultoriaPath"
//             x1="90"
//             y1="680"
//             x2="670"
//             y2="70"
//             gradientUnits="userSpaceOnUse">
//             <stop stopColor="#7FA51C" stopOpacity="0" />
//             <stop offset=".45" stopColor="#A7DA2C" stopOpacity=".85" />
//             <stop offset="1" stopColor="#7FA51C" stopOpacity=".05" />
//           </linearGradient>
//         </defs>

//         <circle cx="390" cy="370" r="245" fill="url(#consultoriaGlow)" />

//         {[120, 170, 225, 285].map((radius, index) => (
//           <motion.circle
//             key={radius}
//             cx="390"
//             cy="370"
//             r={radius}
//             stroke="#7FA51C"
//             strokeWidth={index < 2 ? 1 : 0.65}
//             strokeOpacity={[0.26, 0.18, 0.11, 0.065][index]}
//             strokeDasharray={index === 3 ? "3 10" : undefined}
//             initial={{
//               opacity: 0,
//               scale: 0.85,
//             }}
//             animate={{
//               opacity: 1,
//               scale: 1,
//             }}
//             transition={{
//               duration: 1.15,
//               delay: 0.3 + index * 0.08,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             style={{
//               transformOrigin: "390px 370px",
//             }}
//           />
//         ))}

//         <motion.path
//           d="
//             M80 690
//             C175 595 235 505 285 415
//             C335 325 390 260 455 195
//             C520 130 585 83 690 28
//           "
//           stroke="url(#consultoriaPath)"
//           strokeWidth="1.25"
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
//             duration: 1.9,
//             delay: 0.55,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//         />

//         <motion.path
//           d="
//             M140 735
//             C225 625 280 535 325 455
//             C370 375 425 300 490 235
//             C555 170 610 125 700 78
//           "
//           stroke="#7FA51C"
//           strokeWidth=".55"
//           strokeOpacity=".16"
//           strokeLinecap="round"
//           initial={{
//             pathLength: 0,
//           }}
//           animate={{
//             pathLength: 1,
//           }}
//           transition={{
//             duration: 2.2,
//             delay: 0.7,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//         />
//       </svg>
//     </div>
//   );
// }

// /* =========================================================
//    CAPABILITY BUTTON
// ========================================================= */

// function CapabilityButton({
//   item,
//   active,
//   onClick,
//   className = "",
//   delay = 0,
// }) {
//   const Icon = item.icon;

//   return (
//     <motion.button
//       type="button"
//       onClick={onClick}
//       initial={{
//         opacity: 0,
//         y: 14,
//         scale: 0.92,
//       }}
//       animate={{
//         opacity: 1,
//         y: 0,
//         scale: 1,
//       }}
//       transition={{
//         duration: 0.6,
//         delay,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//       className={[
//         `
//           absolute
//           z-30
//           hidden
//           items-center
//           gap-3
//           rounded-[15px]
//           border
//           px-4
//           py-3
//           text-left
//           backdrop-blur-xl
//           transition-all
//           duration-300

//           lg:flex
//         `,
//         active
//           ? `
//               border-[#7FA51C]
//               bg-[#7FA51C]
//               text-white
//               shadow-[0_16px_48px_rgba(127,165,28,.20)]
//             `
//           : `
//               border-[#7FA51C]/15
//               bg-[#E8F0DC]/75
//               text-[#17392E]
//               shadow-[0_14px_38px_rgba(45,73,59,.06)]

//               hover:border-[#7FA51C]/35
//               hover:bg-[#DFEBCF]/90
//               hover:shadow-[0_16px_42px_rgba(127,165,28,.12)]
//             `,
//         className,
//       ].join(" ")}>
//       <span
//         className={[
//           `
//             flex
//             h-9
//             w-9
//             shrink-0
//             items-center
//             justify-center
//             rounded-[10px]
//             transition-all
//             duration-300
//           `,
//           active ? "bg-white/15 text-white" : "bg-[#7FA51C]/14 text-[#6F9417]",
//         ].join(" ")}>
//         <Icon size={17} strokeWidth={1.6} />
//       </span>

//       <div>
//         <span
//           className={[
//             `
//               block
//               text-[8px]
//               font-semibold
//               tracking-[0.13em]
//             `,
//             active ? "text-white/55" : "text-[#6F9417]/70",
//           ].join(" ")}>
//           {item.number}
//         </span>

//         <span
//           className="
//             mt-0.5
//             block
//             whitespace-nowrap
//             text-[12px]
//             font-medium
//           ">
//           {item.label}
//         </span>
//       </div>
//     </motion.button>
//   );
// }

// /* =========================================================
//    CONSULTORIA HERO
// ========================================================= */

// function ConsultoriaHero() {
//   const [activeCapability, setActiveCapability] = useState(0);

//   const activeItem = capabilities[activeCapability];

//   return (
//     <section
//       className="
//         relative
//         min-h-[100svh]
//         overflow-hidden
//         bg-[#EFF4E7]
//         pt-[88px]
//         text-[#17392E]
//       ">
//       {/* =====================================================
//           GLOBAL BACKGROUND
//       ===================================================== */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           inset-0
//           bg-[radial-gradient(circle_at_72%_38%,rgba(167,218,44,.22),transparent_31%),radial-gradient(circle_at_10%_84%,rgba(127,165,28,.11),transparent_24%),linear-gradient(135deg,#F6F9F1_0%,#EEF3E7_47%,#E5EEDB_100%)]
//         "
//       />

//       <div
//         className="
//           pointer-events-none
//           absolute
//           inset-0
//           opacity-[0.04]
//           [background-image:linear-gradient(rgba(45,82,65,.28)_1px,transparent_1px),linear-gradient(90deg,rgba(45,82,65,.28)_1px,transparent_1px)]
//           [background-size:42px_42px]
//         "
//       />

//       {/* =====================================================
//           ENERGY BANDS
//       ===================================================== */}

//       <motion.div
//         initial={{
//           opacity: 0,
//           x: 140,
//           rotate: 15,
//         }}
//         animate={{
//           opacity: 1,
//           x: 0,
//           rotate: 15,
//         }}
//         transition={{
//           duration: 1.35,
//           delay: 0.15,
//           ease: [0.22, 1, 0.36, 1],
//         }}
//         className="
//           pointer-events-none
//           absolute
//           -right-[16%]
//           top-[-18%]
//           hidden
//           h-[145%]
//           w-[46%]
//           rounded-[48%]
//           bg-gradient-to-b
//           from-[#A7DA2C]/28
//           via-[#7FA51C]/14
//           to-transparent

//           lg:block
//         "
//       />

//       <div
//         className="
//           pointer-events-none
//           absolute
//           right-[1%]
//           top-[5%]
//           hidden
//           h-[92%]
//           w-[38%]
//           rotate-[11deg]
//           rounded-[45%]
//           border
//           border-[#7FA51C]/13

//           lg:block
//         "
//       />

//       <div
//         className="
//           pointer-events-none
//           absolute
//           -right-[1%]
//           top-[2%]
//           hidden
//           select-none
//           text-[clamp(10rem,21vw,24rem)]
//           font-semibold
//           leading-none
//           tracking-[-0.1em]
//           text-[#7FA51C]/[0.035]

//           lg:block
//         ">
//         ESG
//       </div>

//       {/* =====================================================
//           WRAPPER
//       ===================================================== */}

//       <div
//         className="
//           relative
//           z-10
//           mx-auto
//           flex
//           min-h-[calc(100svh-88px)]
//           max-w-[1760px]
//           flex-col
//           px-5
//           pb-8

//           sm:px-8
//           lg:px-12
//           xl:px-16
//           2xl:px-20
//         ">
//         {/* ===================================================
//             HERO BODY
//         =================================================== */}

//         <div
//           className="
//             grid
//             flex-1
//             items-center
//             gap-12
//             py-10

//             lg:grid-cols-[1.03fr_.97fr]
//             lg:gap-10

//             xl:grid-cols-[1.06fr_.94fr]
//             xl:gap-14
//           ">
//           {/* =================================================
//               LEFT CONTENT
//           ================================================= */}

//           <div
//             className="
//               relative
//               z-30
//               max-w-[880px]
//             ">
//             <motion.div
//               initial={{
//                 opacity: 0,
//                 y: 15,
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               transition={{
//                 duration: 0.6,
//               }}
//               className="
//                 flex
//                 flex-wrap
//                 items-center
//                 gap-3
//               ">
//               <span
//                 className="
//                   flex
//                   h-9
//                   items-center
//                   rounded-full
//                   bg-[#7FA51C]
//                   px-4
//                   text-[9px]
//                   font-semibold
//                   uppercase
//                   tracking-[0.15em]
//                   text-white
//                 ">
//                 Servicios
//               </span>

//               <span className="text-[10px] font-semibold text-[#819088]">
//                 /
//               </span>

//               <span
//                 className="
//                   text-[10px]
//                   font-semibold
//                   uppercase
//                   tracking-[0.15em]
//                   text-[#668819]
//                 ">
//                 Consultoría de sostenibilidad
//               </span>
//             </motion.div>

//             <motion.h1
//               initial={{
//                 opacity: 0,
//                 y: 40,
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               transition={{
//                 duration: 0.9,
//                 delay: 0.1,
//                 ease: [0.22, 1, 0.36, 1],
//               }}
//               className="
//                 mt-9
//                 max-w-[860px]
//                 text-[clamp(3.9rem,5.65vw,7.1rem)]
//                 font-normal
//                 leading-[0.86]
//                 tracking-[-0.073em]
//                 text-[#15382D]
//               ">
//               Sostenibilidad
//               <span className="block">que mueve</span>
//               <span className="block text-[#7FA51C]">decisiones.</span>
//             </motion.h1>

//             <motion.div
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
//                 delay: 0.26,
//               }}
//               className="
//                 mt-8
//                 max-w-[620px]
//               ">
//               <p
//                 className="
//                   text-base
//                   leading-8
//                   text-[#47675A]

//                   sm:text-lg
//                 ">
//                 Integramos sostenibilidad, estrategia y conocimiento técnico
//                 para convertir retos ambientales y sociales en decisiones de
//                 negocio.
//               </p>

//               <p
//                 className="
//                   mt-4
//                   max-w-[580px]
//                   text-sm
//                   leading-7
//                   text-[#72867D]
//                 ">
//                 Desde la estrategia ESG hasta la descarbonización, circularidad
//                 y gestión del desempeño.
//               </p>
//             </motion.div>

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
//                 duration: 0.7,
//                 delay: 0.42,
//               }}
//               className="
//                 mt-8
//                 flex
//                 flex-wrap
//                 items-center
//                 gap-6
//               ">
//               <a
//                 href="#soluciones-consultoria"
//                 className="
//                   group
//                   inline-flex
//                   items-center
//                   gap-4
//                 ">
//                 <span
//                   className="
//                     flex
//                     h-13
//                     w-13
//                     items-center
//                     justify-center
//                     rounded-full
//                     bg-[#7FA51C]
//                     text-white
//                     shadow-[0_12px_35px_rgba(127,165,28,.18)]
//                     transition-all
//                     duration-300

//                     group-hover:bg-[#17392E]
//                   ">
//                   <ArrowDown size={18} strokeWidth={1.6} />
//                 </span>

//                 <span
//                   className="
//                     text-[13px]
//                     font-medium
//                     text-[#17392E]
//                   ">
//                   Explorar soluciones
//                 </span>
//               </a>
//             </motion.div>

//             <motion.div
//               initial={{
//                 opacity: 0,
//               }}
//               animate={{
//                 opacity: 1,
//               }}
//               transition={{
//                 duration: 0.7,
//                 delay: 0.6,
//               }}
//               className="
//                 mt-9
//                 flex
//                 max-w-[620px]
//                 items-start
//                 gap-4
//                 border-t
//                 border-[#355E4A]/10
//                 pt-5
//               ">
//               <span
//                 className="
//                   mt-1.5
//                   h-2
//                   w-2
//                   shrink-0
//                   rounded-full
//                   bg-[#9DD827]
//                 "
//               />

//               <p
//                 className="
//                   text-[12px]
//                   leading-6
//                   text-[#627A70]
//                 ">
//                 Análisis, desarrollo e implementación conectados para
//                 transformar la sostenibilidad en desempeño.
//               </p>
//             </motion.div>
//           </div>

//           {/* =================================================
//               RIGHT VISUAL
//           ================================================= */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               x: 42,
//             }}
//             animate={{
//               opacity: 1,
//               x: 0,
//             }}
//             transition={{
//               duration: 0.95,
//               delay: 0.16,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="
//               relative
//               min-h-[560px]

//               lg:min-h-[630px]
//               xl:min-h-[690px]
//             ">
//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 left-[53%]
//                 top-[46%]
//                 h-[460px]
//                 w-[460px]
//                 -translate-x-1/2
//                 -translate-y-1/2
//                 rounded-full
//                 bg-[#A7DA2C]/11
//                 blur-[125px]
//               "
//             />

//             <EnergyNetwork />

//             {/* =================================================
//                 CENTRAL INTERACTIVE CORE
//             ================================================= */}

//             <motion.div
//               layout
//               className="
//                 absolute
//                 left-[53%]
//                 top-[46%]
//                 z-20
//                 flex
//                 h-[300px]
//                 w-[300px]
//                 -translate-x-1/2
//                 -translate-y-1/2
//                 items-center
//                 justify-center
//                 rounded-full
//                 border
//                 border-[#7FA51C]/24
//                 bg-[#F7F9F3]/48
//                 shadow-[0_35px_100px_rgba(84,119,43,.12)]
//                 backdrop-blur-[8px]

//                 xl:h-[330px]
//                 xl:w-[330px]
//               ">
//               <div
//                 className="
//                   flex
//                   h-[245px]
//                   w-[245px]
//                   items-center
//                   justify-center
//                   rounded-full
//                   border
//                   border-[#7FA51C]/18

//                   xl:h-[270px]
//                   xl:w-[270px]
//                 ">
//                 <motion.div
//                   key={activeItem.number}
//                   initial={{
//                     opacity: 0,
//                     scale: 0.92,
//                   }}
//                   animate={{
//                     opacity: 1,
//                     scale: 1,
//                   }}
//                   transition={{
//                     duration: 0.35,
//                   }}
//                   className="
//                     flex
//                     h-[190px]
//                     w-[190px]
//                     flex-col
//                     items-center
//                     justify-center
//                     rounded-full
//                     bg-[#7FA51C]
//                     p-5
//                     text-center
//                     text-white
//                     shadow-[0_20px_65px_rgba(83,120,23,.24)]

//                     xl:h-[205px]
//                     xl:w-[205px]
//                   ">
//                   <span
//                     className="
//                       text-[8px]
//                       font-semibold
//                       uppercase
//                       tracking-[0.17em]
//                       text-white/60
//                     ">
//                     {activeItem.title}
//                   </span>

//                   <p
//                     className="
//                       mt-3
//                       text-[27px]
//                       font-normal
//                       leading-[0.92]
//                       tracking-[-0.055em]

//                       xl:text-[31px]
//                     ">
//                     {activeItem.headline}
//                   </p>

//                   <span
//                     className="
//                       mt-4
//                       flex
//                       h-8
//                       w-8
//                       items-center
//                       justify-center
//                       rounded-full
//                       bg-white/12
//                     ">
//                     <ArrowUpRight size={15} strokeWidth={1.6} />
//                   </span>
//                 </motion.div>
//               </div>
//             </motion.div>

//             {/* =================================================
//                 CLICKABLE DESKTOP NODES
//             ================================================= */}

//             <CapabilityButton
//               item={capabilities[0]}
//               active={activeCapability === 0}
//               onClick={() => setActiveCapability(0)}
//               delay={0.7}
//               className="
//                 left-[2%]
//                 top-[17%]
//               "
//             />

//             <CapabilityButton
//               item={capabilities[1]}
//               active={activeCapability === 1}
//               onClick={() => setActiveCapability(1)}
//               delay={0.8}
//               className="
//                 right-[0%]
//                 top-[14%]
//               "
//             />

//             <CapabilityButton
//               item={capabilities[2]}
//               active={activeCapability === 2}
//               onClick={() => setActiveCapability(2)}
//               delay={0.9}
//               className="
//                 left-[0%]
//                 bottom-[17%]
//               "
//             />

//             <CapabilityButton
//               item={capabilities[3]}
//               active={activeCapability === 3}
//               onClick={() => setActiveCapability(3)}
//               delay={1}
//               className="
//                 right-[4%]
//                 bottom-[15%]
//               "
//             />

//             {/* =================================================
//                 ACTIVE DESCRIPTION
//             ================================================= */}

//             <motion.div
//               key={`description-${activeItem.number}`}
//               initial={{
//                 opacity: 0,
//                 y: 12,
//               }}
//               animate={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               transition={{
//                 duration: 0.35,
//               }}
//               className="
//                 absolute
//                 bottom-[2%]
//                 left-1/2
//                 z-30
//                 hidden
//                 w-[390px]
//                 -translate-x-1/2
//                 rounded-[18px]
//                 border
//                 border-[#7FA51C]/13
//                 bg-[#E8F0DC]/78
//                 px-5
//                 py-4
//                 shadow-[0_15px_50px_rgba(45,73,59,.07)]
//                 backdrop-blur-xl

//                 xl:block
//               ">
//               <div
//                 className="
//                   flex
//                   items-start
//                   gap-3
//                 ">
//                 <span
//                   className="
//                     mt-1
//                     h-2
//                     w-2
//                     shrink-0
//                     rounded-full
//                     bg-[#7FA51C]
//                   "
//                 />

//                 <p
//                   className="
//                     text-[12px]
//                     leading-6
//                     text-[#526D60]
//                   ">
//                   {activeItem.description}
//                 </p>
//               </div>
//             </motion.div>

//             {/* =================================================
//                 MOBILE INTERACTION
//             ================================================= */}

//             <div
//               className="
//                 absolute
//                 inset-x-0
//                 bottom-0
//                 grid
//                 grid-cols-2
//                 gap-2

//                 lg:hidden
//               ">
//               {capabilities.map((item, index) => {
//                 const Icon = item.icon;
//                 const active = activeCapability === index;

//                 return (
//                   <button
//                     key={item.number}
//                     type="button"
//                     onClick={() => setActiveCapability(index)}
//                     className={[
//                       `
//                         flex
//                         items-center
//                         gap-3
//                         rounded-[14px]
//                         border
//                         p-3
//                         text-left
//                         backdrop-blur-xl
//                         transition-all
//                         duration-300
//                       `,
//                       active
//                         ? `
//                             border-[#7FA51C]
//                             bg-[#7FA51C]
//                             text-white
//                           `
//                         : `
//                             border-[#7FA51C]/15
//                             bg-[#E8F0DC]/80
//                             text-[#17392E]
//                           `,
//                     ].join(" ")}>
//                     <span
//                       className={[
//                         `
//                           flex
//                           h-9
//                           w-9
//                           shrink-0
//                           items-center
//                           justify-center
//                           rounded-[10px]
//                         `,
//                         active
//                           ? "bg-white/15 text-white"
//                           : "bg-[#7FA51C]/14 text-[#6F9417]",
//                       ].join(" ")}>
//                       <Icon size={17} strokeWidth={1.6} />
//                     </span>

//                     <div>
//                       <span
//                         className={[
//                           `
//                             block
//                             text-[8px]
//                             font-semibold
//                             tracking-[0.12em]
//                           `,
//                           active ? "text-white/55" : "text-[#6F9417]/70",
//                         ].join(" ")}>
//                         {item.number}
//                       </span>

//                       <span
//                         className="
//                           mt-0.5
//                           block
//                           text-[11px]
//                           font-medium
//                         ">
//                         {item.label}
//                       </span>
//                     </div>
//                   </button>
//                 );
//               })}
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ConsultoriaHero;

import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  BarChart3,
  Leaf,
  Recycle,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";

/* =========================================================
   CAPABILITIES
========================================================= */

const capabilities = [
  {
    number: "01",
    icon: Leaf,
    label: "ESG",
    title: "Estrategia ESG",
    headline: "Sostenibilidad que guía decisiones.",
    description:
      "Integramos criterios ambientales, sociales y de gobernanza en la estrategia y operación del negocio.",
  },
  {
    number: "02",
    icon: BarChart3,
    label: "Descarbonización",
    title: "Descarbonización",
    headline: "Medir. Reducir. Transformar.",
    description:
      "Diseñamos rutas claras para reducir emisiones, gestionar riesgos climáticos y avanzar hacia objetivos Net Zero.",
  },
  {
    number: "03",
    icon: Recycle,
    label: "Circularidad",
    title: "Circularidad",
    headline: "Recursos que vuelven a generar valor.",
    description:
      "Transformamos materiales, residuos y procesos en nuevas oportunidades para una operación más eficiente y resiliente.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    label: "Impacto",
    title: "Impacto",
    headline: "Desempeño que se puede demostrar.",
    description:
      "Conectamos gestión ambiental, clima e impacto social con métricas y resultados que fortalecen el desempeño sostenible.",
  },
];

/* =========================================================
   ENERGY NETWORK
========================================================= */

function EnergyNetwork() {
  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        hidden
        lg:block
      ">
      <svg
        viewBox="0 0 760 760"
        fill="none"
        className="
          absolute
          left-1/2
          top-1/2
          h-[118%]
          w-[118%]
          -translate-x-1/2
          -translate-y-1/2
        "
        aria-hidden="true">
        <defs>
          <radialGradient
            id="consultoriaGlow"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(390 370) rotate(90) scale(245)">
            <stop stopColor="#B9EB48" stopOpacity=".28" />
            <stop offset=".52" stopColor="#7FA51C" stopOpacity=".08" />
            <stop offset="1" stopColor="#7FA51C" stopOpacity="0" />
          </radialGradient>

          <linearGradient
            id="consultoriaPath"
            x1="90"
            y1="680"
            x2="670"
            y2="70"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#7FA51C" stopOpacity="0" />
            <stop offset=".45" stopColor="#A7DA2C" stopOpacity=".85" />
            <stop offset="1" stopColor="#7FA51C" stopOpacity=".05" />
          </linearGradient>
        </defs>

        <circle cx="390" cy="370" r="245" fill="url(#consultoriaGlow)" />

        {[120, 170, 225, 285].map((radius, index) => (
          <motion.circle
            key={radius}
            cx="390"
            cy="370"
            r={radius}
            stroke="#7FA51C"
            strokeWidth={index < 2 ? 1 : 0.65}
            strokeOpacity={[0.26, 0.18, 0.11, 0.065][index]}
            strokeDasharray={index === 3 ? "3 10" : undefined}
            initial={{
              opacity: 0,
              scale: 0.85,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.15,
              delay: 0.3 + index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              transformOrigin: "390px 370px",
            }}
          />
        ))}

        <motion.path
          d="
            M80 690
            C175 595 235 505 285 415
            C335 325 390 260 455 195
            C520 130 585 83 690 28
          "
          stroke="url(#consultoriaPath)"
          strokeWidth="1.25"
          strokeLinecap="round"
          initial={{
            pathLength: 0,
            opacity: 0,
          }}
          animate={{
            pathLength: 1,
            opacity: 1,
          }}
          transition={{
            duration: 1.9,
            delay: 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
        />

        <motion.path
          d="
            M140 735
            C225 625 280 535 325 455
            C370 375 425 300 490 235
            C555 170 610 125 700 78
          "
          stroke="#7FA51C"
          strokeWidth=".55"
          strokeOpacity=".16"
          strokeLinecap="round"
          initial={{
            pathLength: 0,
          }}
          animate={{
            pathLength: 1,
          }}
          transition={{
            duration: 2.2,
            delay: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </svg>
    </div>
  );
}

/* =========================================================
   CAPABILITY BUTTON
========================================================= */

function CapabilityButton({
  item,
  active,
  onClick,
  className = "",
  delay = 0,
}) {
  const Icon = item.icon;

  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{
        opacity: 0,
        y: 14,
        scale: 0.92,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={[
        `
          absolute
          z-30
          hidden
          items-center
          gap-3
          rounded-[15px]
          border
          px-4
          py-3
          text-left
          backdrop-blur-xl
          transition-all
          duration-300

          lg:flex
        `,
        active
          ? `
              border-[#7FA51C]
              bg-[#7FA51C]
              text-white
              shadow-[0_16px_48px_rgba(127,165,28,.20)]
            `
          : `
              border-[#7FA51C]/15
              bg-[#E8F0DC]/75
              text-[#17392E]
              shadow-[0_14px_38px_rgba(45,73,59,.06)]

              hover:border-[#7FA51C]/35
              hover:bg-[#DFEBCF]/90
              hover:shadow-[0_16px_42px_rgba(127,165,28,.12)]
            `,
        className,
      ].join(" ")}>
      <span
        className={[
          `
            flex
            h-9
            w-9
            shrink-0
            items-center
            justify-center
            rounded-[10px]
            transition-all
            duration-300
          `,
          active ? "bg-white/15 text-white" : "bg-[#7FA51C]/14 text-[#6F9417]",
        ].join(" ")}>
        <Icon size={17} strokeWidth={1.6} />
      </span>

      <div>
        <span
          className={[
            `
              block
              text-[10px]
              font-semibold
              tracking-[0.13em]
            `,
            active ? "text-white/55" : "text-[#6F9417]/70",
          ].join(" ")}>
          {item.number}
        </span>

        <span
          className="
            mt-0.5
            block
            whitespace-nowrap
            text-[13px]
            font-medium
          ">
          {item.label}
        </span>
      </div>
    </motion.button>
  );
}

/* =========================================================
   CONSULTORIA HERO
========================================================= */

function ConsultoriaHero() {
  const [activeCapability, setActiveCapability] = useState(0);

  const activeItem = capabilities[activeCapability];

  return (
    <section
      className="
        relative
        min-h-[100svh]
        overflow-hidden
        bg-[#EFF4E7]
        pt-[88px]
        text-[#17392E]
      ">
      {/* =====================================================
          GLOBAL BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_72%_38%,rgba(167,218,44,.22),transparent_31%),radial-gradient(circle_at_10%_84%,rgba(127,165,28,.11),transparent_24%),linear-gradient(135deg,#F6F9F1_0%,#EEF3E7_47%,#E5EEDB_100%)]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.04]
          [background-image:linear-gradient(rgba(45,82,65,.28)_1px,transparent_1px),linear-gradient(90deg,rgba(45,82,65,.28)_1px,transparent_1px)]
          [background-size:42px_42px]
        "
      />

      {/* =====================================================
          ENERGY BANDS
      ===================================================== */}

      <motion.div
        initial={{
          opacity: 0,
          x: 140,
          rotate: 15,
        }}
        animate={{
          opacity: 1,
          x: 0,
          rotate: 15,
        }}
        transition={{
          duration: 1.35,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          pointer-events-none
          absolute
          -right-[16%]
          top-[-18%]
          hidden
          h-[145%]
          w-[46%]
          rounded-[48%]
          bg-gradient-to-b
          from-[#A7DA2C]/28
          via-[#7FA51C]/14
          to-transparent

          lg:block
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[1%]
          top-[5%]
          hidden
          h-[92%]
          w-[38%]
          rotate-[11deg]
          rounded-[45%]
          border
          border-[#7FA51C]/13

          lg:block
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[1%]
          top-[2%]
          hidden
          select-none
          text-[clamp(10rem,21vw,24rem)]
          font-semibold
          leading-none
          tracking-[-0.1em]
          text-[#7FA51C]/[0.035]

          lg:block
        ">
        ESG
      </div>

      {/* =====================================================
          WRAPPER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[calc(100svh-88px)]
          max-w-[1760px]
          flex-col
          px-5
          pb-8

          sm:px-8
          lg:px-12
          xl:px-16
          2xl:px-20
        ">
        {/* ===================================================
            HERO BODY
        =================================================== */}

        <div
          className="
            grid
            flex-1
            items-center
            gap-12
            py-10

            lg:grid-cols-[1.03fr_.97fr]
            lg:gap-10

            xl:grid-cols-[1.06fr_.94fr]
            xl:gap-14
          ">
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <div
            className="
              relative
              z-30
              max-w-[880px]
            ">
            <motion.div
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="
                flex
                flex-wrap
                items-center
                gap-3
              ">
              <span
                className="
                  flex
                  h-9
                  items-center
                  rounded-full
                  bg-[#7FA51C]
                  px-4
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-white
                ">
                Servicios
              </span>

              <span className="text-[11px] font-semibold text-[#819088]">
                /
              </span>

              <span
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-[#668819]
                ">
                Consultoría de sostenibilidad
              </span>
            </motion.div>

            <motion.h1
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-9
                max-w-[860px]
                text-[clamp(3.9rem,5.65vw,7.1rem)]
                font-normal
                leading-[0.86]
                tracking-[-0.073em]
                text-[#15382D]
              ">
              Sostenibilidad
              <span className="block">que mueve</span>
              <span className="block text-[#7FA51C]">decisiones.</span>
            </motion.h1>

            <motion.div
              initial={{
                opacity: 0,
                y: 22,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.75,
                delay: 0.26,
              }}
              className="
                mt-8
                max-w-[620px]
              ">
              <p
                className="
                  text-base
                  leading-8
                  text-[#47675A]

                  sm:text-lg
                ">
                Analizamos, desarrollamos e implementamos soluciones de
                sostenibilidad que conectan conocimiento técnico, estrategia y
                decisiones de negocio.
              </p>

              <p
                className="
                  mt-4
                  max-w-[580px]
                  text-sm
                  leading-7
                  text-[#72867D]
                ">
                Desde ESG y descarbonización hasta circularidad, gestión
                ambiental, clima, naturaleza e impacto social.
              </p>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.42,
              }}
              className="
                mt-8
                flex
                flex-wrap
                items-center
                gap-6
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
                    flex
                    h-13
                    w-13
                    items-center
                    justify-center
                    rounded-full
                    bg-[#7FA51C]
                    text-white
                    shadow-[0_12px_35px_rgba(127,165,28,.18)]
                    transition-all
                    duration-300

                    group-hover:bg-[#17392E]
                  ">
                  <ArrowDown size={18} strokeWidth={1.6} />
                </span>

                <span
                  className="
                    text-[13px]
                    font-medium
                    text-[#17392E]
                  ">
                  Explorar soluciones
                </span>
              </a>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.7,
                delay: 0.6,
              }}
              className="
                mt-9
                flex
                max-w-[620px]
                items-start
                gap-4
                border-t
                border-[#355E4A]/10
                pt-5
              ">
              <span
                className="
                  mt-1.5
                  h-2
                  w-2
                  shrink-0
                  rounded-full
                  bg-[#9DD827]
                "
              />

              <p
                className="
                  text-[13px]
                  leading-6
                  text-[#627A70]
                ">
                Análisis, desarrollo e implementación conectados para
                transformar la sostenibilidad en desempeño.
              </p>
            </motion.div>
          </div>

          {/* =================================================
              RIGHT VISUAL
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 42,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.95,
              delay: 0.16,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              min-h-[560px]

              lg:min-h-[630px]
              xl:min-h-[690px]
            ">
            <div
              className="
                pointer-events-none
                absolute
                left-[53%]
                top-[46%]
                h-[460px]
                w-[460px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-[#A7DA2C]/11
                blur-[125px]
              "
            />

            <EnergyNetwork />

            {/* =================================================
                CENTRAL INTERACTIVE CORE
            ================================================= */}

            <motion.div
              layout
              className="
                absolute
                left-[53%]
                top-[46%]
                z-20
                flex
                h-[300px]
                w-[300px]
                -translate-x-1/2
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border
                border-[#7FA51C]/24
                bg-[#F7F9F3]/48
                shadow-[0_35px_100px_rgba(84,119,43,.12)]
                backdrop-blur-[8px]

                xl:h-[330px]
                xl:w-[330px]
              ">
              <div
                className="
                  flex
                  h-[245px]
                  w-[245px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#7FA51C]/18

                  xl:h-[270px]
                  xl:w-[270px]
                ">
                <motion.div
                  key={activeItem.number}
                  initial={{
                    opacity: 0,
                    scale: 0.92,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="
                    flex
                    h-[190px]
                    w-[190px]
                    flex-col
                    items-center
                    justify-center
                    rounded-full
                    bg-[#7FA51C]
                    p-5
                    text-center
                    text-white
                    shadow-[0_20px_65px_rgba(83,120,23,.24)]

                    xl:h-[205px]
                    xl:w-[205px]
                  ">
                  <span
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.17em]
                      text-white/60
                    ">
                    {activeItem.title}
                  </span>

                  <p
                    className="
                      mt-3
                      text-[27px]
                      font-normal
                      leading-[0.92]
                      tracking-[-0.055em]

                      xl:text-[31px]
                    ">
                    {activeItem.headline}
                  </p>

                  <span
                    className="
                      mt-4
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      bg-white/12
                    ">
                    <ArrowUpRight size={15} strokeWidth={1.6} />
                  </span>
                </motion.div>
              </div>
            </motion.div>

            {/* =================================================
                CLICKABLE DESKTOP NODES
            ================================================= */}

            <CapabilityButton
              item={capabilities[0]}
              active={activeCapability === 0}
              onClick={() => setActiveCapability(0)}
              delay={0.7}
              className="
                left-[2%]
                top-[17%]
              "
            />

            <CapabilityButton
              item={capabilities[1]}
              active={activeCapability === 1}
              onClick={() => setActiveCapability(1)}
              delay={0.8}
              className="
                right-[0%]
                top-[14%]
              "
            />

            <CapabilityButton
              item={capabilities[2]}
              active={activeCapability === 2}
              onClick={() => setActiveCapability(2)}
              delay={0.9}
              className="
                left-[0%]
                bottom-[17%]
              "
            />

            <CapabilityButton
              item={capabilities[3]}
              active={activeCapability === 3}
              onClick={() => setActiveCapability(3)}
              delay={1}
              className="
                right-[4%]
                bottom-[15%]
              "
            />

            {/* =================================================
                ACTIVE DESCRIPTION
            ================================================= */}

            <motion.div
              key={`description-${activeItem.number}`}
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.35,
              }}
              className="
                absolute
                bottom-[2%]
                left-1/2
                z-30
                hidden
                w-[390px]
                -translate-x-1/2
                rounded-[18px]
                border
                border-[#7FA51C]/13
                bg-[#E8F0DC]/78
                px-5
                py-4
                shadow-[0_15px_50px_rgba(45,73,59,.07)]
                backdrop-blur-xl

                xl:block
              ">
              <div
                className="
                  flex
                  items-start
                  gap-3
                ">
                <span
                  className="
                    mt-1
                    h-2
                    w-2
                    shrink-0
                    rounded-full
                    bg-[#7FA51C]
                  "
                />

                <p
                  className="
                    text-[13px]
                    leading-6
                    text-[#526D60]
                  ">
                  {activeItem.description}
                </p>
              </div>
            </motion.div>

            {/* =================================================
                MOBILE INTERACTION
            ================================================= */}

            <div
              className="
                absolute
                inset-x-0
                bottom-0
                grid
                grid-cols-2
                gap-2

                lg:hidden
              ">
              {capabilities.map((item, index) => {
                const Icon = item.icon;
                const active = activeCapability === index;

                return (
                  <button
                    key={item.number}
                    type="button"
                    onClick={() => setActiveCapability(index)}
                    className={[
                      `
                        flex
                        items-center
                        gap-3
                        rounded-[14px]
                        border
                        p-3
                        text-left
                        backdrop-blur-xl
                        transition-all
                        duration-300
                      `,
                      active
                        ? `
                            border-[#7FA51C]
                            bg-[#7FA51C]
                            text-white
                          `
                        : `
                            border-[#7FA51C]/15
                            bg-[#E8F0DC]/80
                            text-[#17392E]
                          `,
                    ].join(" ")}>
                    <span
                      className={[
                        `
                          flex
                          h-9
                          w-9
                          shrink-0
                          items-center
                          justify-center
                          rounded-[10px]
                        `,
                        active
                          ? "bg-white/15 text-white"
                          : "bg-[#7FA51C]/14 text-[#6F9417]",
                      ].join(" ")}>
                      <Icon size={17} strokeWidth={1.6} />
                    </span>

                    <div>
                      <span
                        className={[
                          `
                            block
                            text-[10px]
                            font-semibold
                            tracking-[0.12em]
                          `,
                          active ? "text-white/55" : "text-[#6F9417]/70",
                        ].join(" ")}>
                        {item.number}
                      </span>

                      <span
                        className="
                          mt-0.5
                          block
                          text-[12px]
                          font-medium
                        ">
                        {item.label}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ConsultoriaHero;
