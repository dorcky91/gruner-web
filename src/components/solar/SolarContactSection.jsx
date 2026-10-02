// import { motion } from "motion/react";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   BatteryCharging,
//   Check,
//   Mail,
//   SolarPanel,
//   Sparkles,
//   Zap,
// } from "lucide-react";

// /* =========================================================
//    DATA
// ========================================================= */

// const systems = [
//   {
//     icon: SolarPanel,
//     number: "01",
//     code: "PV",
//     label: "Solar Fotovoltaico",
//     text: "Generación",
//     description:
//       "Producción de energía limpia integrada al perfil de consumo de tu operación.",
//   },
//   {
//     icon: BatteryCharging,
//     number: "02",
//     code: "BESS",
//     label: "Almacenamiento",
//     text: "Flexibilidad",
//     description:
//       "Energía disponible cuando la operación realmente la necesita.",
//   },
//   {
//     icon: Zap,
//     number: "03",
//     code: "EMS",
//     label: "Gestión Energética",
//     text: "Inteligencia",
//     description:
//       "Control y optimización del flujo energético de toda la infraestructura.",
//   },
// ];

// const journey = [
//   {
//     number: "01",
//     title: "Analizamos",
//     text: "Tu demanda",
//   },
//   {
//     number: "02",
//     title: "Diseñamos",
//     text: "La solución",
//   },
//   {
//     number: "03",
//     title: "Integramos",
//     text: "La infraestructura",
//   },
// ];

// /* =========================================================
//    MAIN
// ========================================================= */

// function SolarContactSection() {
//   return (
//     <section
//       id="solar-contacto"
//       className="
//         relative
//         overflow-hidden
//         bg-white
//         py-20
//         text-[#143E33]

//         lg:py-24
//       ">
//       {/* =====================================================
//           VERY SUBTLE BACKGROUND
//       ===================================================== */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           inset-0
//           opacity-[0.22]
//           [background-image:linear-gradient(rgba(20,62,51,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(20,62,51,.025)_1px,transparent_1px)]
//           [background-size:76px_76px]
//         "
//       />

//       <div
//         className="
//           pointer-events-none
//           absolute
//           -right-[220px]
//           -top-[230px]
//           h-[520px]
//           w-[520px]
//           rounded-full
//           bg-[#B8F23A]/[0.08]
//           blur-[120px]
//         "
//       />

//       <div
//         className="
//           pointer-events-none
//           absolute
//           -bottom-[280px]
//           -left-[180px]
//           h-[480px]
//           w-[480px]
//           rounded-full
//           bg-[#143E33]/[0.025]
//           blur-[120px]
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
//             SMALL EYEBROW
//         =================================================== */}

//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 14,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//             amount: 0.3,
//           }}
//           transition={{
//             duration: 0.6,
//           }}
//           className="
//             mb-7
//             flex
//             items-center
//             gap-4
//           ">
//           <span className="h-px w-9 bg-[#9DD827]" />

//           <span
//             className="
//               text-[8px]
//               font-bold
//               uppercase
//               tracking-[0.22em]
//               text-[#78A500]
//             ">
//             Comencemos
//           </span>
//         </motion.div>

//         {/* ===================================================
//             MAIN SPLIT STAGE
//         =================================================== */}

//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 28,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//             amount: 0.15,
//           }}
//           transition={{
//             duration: 0.8,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="
//             relative
//             grid
//             items-stretch

//             lg:grid-cols-[1.08fr_.92fr]
//           ">
//           {/* =================================================
//               LEFT / GREEN EDITORIAL PANEL
//           ================================================= */}

//           <div
//             className="
//               relative
//               min-h-[590px]
//               overflow-hidden
//               rounded-[24px]
//               bg-[#10372E]
//               p-7
//               text-white
//               shadow-[0_30px_80px_rgba(16,55,46,.14)]

//               sm:p-9

//               lg:rounded-r-none
//               lg:p-11

//               xl:min-h-[630px]
//               xl:p-14
//             ">
//             {/* grid */}

//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 inset-0
//                 opacity-[0.12]
//                 [background-image:linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)]
//                 [background-size:44px_44px]
//               "
//             />

//             {/* glow */}

//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 -right-[120px]
//                 -top-[140px]
//                 h-[390px]
//                 w-[390px]
//                 rounded-full
//                 bg-[#B8F23A]/15
//                 blur-[100px]
//               "
//             />

//             {/* rings */}

//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 -bottom-[190px]
//                 -right-[150px]
//                 h-[480px]
//                 w-[480px]
//                 rounded-full
//                 border
//                 border-[#B8F23A]/[0.09]
//               ">
//               <div
//                 className="
//                   absolute
//                   inset-[14%]
//                   rounded-full
//                   border
//                   border-white/[0.045]
//                 "
//               />

//               <div
//                 className="
//                   absolute
//                   inset-[30%]
//                   rounded-full
//                   border
//                   border-[#B8F23A]/[0.07]
//                 "
//               />

//               <div
//                 className="
//                   absolute
//                   inset-[44%]
//                   rounded-full
//                   border
//                   border-white/[0.04]
//                 "
//               />
//             </div>

//             {/* huge word */}

//             <span
//               className="
//                 pointer-events-none
//                 absolute
//                 -bottom-8
//                 -left-3
//                 hidden
//                 select-none
//                 text-[clamp(8rem,13vw,14rem)]
//                 font-semibold
//                 leading-none
//                 tracking-[-0.09em]
//                 text-white/[0.018]

//                 xl:block
//               ">
//               GO
//             </span>

//             {/* content */}

//             <div
//               className="
//                 relative
//                 z-10
//                 flex
//                 h-full
//                 flex-col
//               ">
//               {/* TOP */}

//               <div
//                 className="
//                   flex
//                   items-center
//                   justify-between
//                   gap-5
//                 ">
//                 <div className="flex items-center gap-4">
//                   <span
//                     className="
//                       flex
//                       h-11
//                       w-11
//                       items-center
//                       justify-center
//                       rounded-[12px]
//                       bg-[#B8F23A]
//                       text-[#10372E]
//                     ">
//                     <Zap size={18} strokeWidth={1.7} />
//                   </span>

//                   <div>
//                     <p
//                       className="
//                         text-[8px]
//                         font-bold
//                         uppercase
//                         tracking-[0.2em]
//                         text-[#B8F23A]
//                       ">
//                       Hablemos de energía
//                     </p>

//                     <p
//                       className="
//                         mt-1
//                         text-[6px]
//                         font-semibold
//                         uppercase
//                         tracking-[0.14em]
//                         text-white/25
//                       ">
//                       Solar · Storage · Intelligence
//                     </p>
//                   </div>
//                 </div>

//                 <span className="relative flex h-2.5 w-2.5">
//                   <span
//                     className="
//                       absolute
//                       inset-0
//                       animate-ping
//                       rounded-full
//                       bg-[#B8F23A]/40
//                     "
//                   />

//                   <span
//                     className="
//                       relative
//                       h-2.5
//                       w-2.5
//                       rounded-full
//                       bg-[#B8F23A]
//                     "
//                   />
//                 </span>
//               </div>

//               {/* TITLE */}

//               <div
//                 className="
//                   my-auto
//                   py-12
//                 ">
//                 <p
//                   className="
//                     text-[7px]
//                     font-bold
//                     uppercase
//                     tracking-[0.2em]
//                     text-white/30
//                   ">
//                   Tu próximo proyecto energético
//                 </p>

//                 <h2
//                   className="
//                     mt-5
//                     max-w-[850px]
//                     text-[clamp(2.8rem,4.6vw,5.5rem)]
//                     font-normal
//                     leading-[0.91]
//                     tracking-[-0.065em]
//                   ">
//                   Tu operación puede
//                   <span className="block">consumir energía</span>
//                   <span
//                     className="
//                       relative
//                       inline-block
//                       text-[#B8F23A]
//                     ">
//                     de una mejor manera.
//                     <svg
//                       viewBox="0 0 500 20"
//                       preserveAspectRatio="none"
//                       className="
//                         absolute
//                         -bottom-2
//                         left-0
//                         h-[10px]
//                         w-[76%]
//                         opacity-45
//                       ">
//                       <motion.path
//                         d="M2 12 C120 3, 300 18, 498 7"
//                         fill="none"
//                         stroke="currentColor"
//                         strokeWidth="2"
//                         initial={{
//                           pathLength: 0,
//                         }}
//                         whileInView={{
//                           pathLength: 1,
//                         }}
//                         viewport={{
//                           once: true,
//                         }}
//                         transition={{
//                           duration: 1.2,
//                           delay: 0.4,
//                         }}
//                       />
//                     </svg>
//                   </span>
//                 </h2>

//                 <p
//                   className="
//                     mt-8
//                     max-w-[650px]
//                     text-[12px]
//                     leading-7
//                     text-white/48
//                   ">
//                   Conversemos sobre tu demanda, infraestructura y objetivos.
//                   Podemos ayudarte a identificar cómo Solar, almacenamiento y
//                   gestión energética pueden trabajar juntos dentro de tu
//                   operación.
//                 </p>
//               </div>

//               {/* ACTIONS */}

//               <div>
//                 <div
//                   className="
//                     flex
//                     flex-col
//                     gap-3

//                     sm:flex-row
//                     sm:items-center
//                   ">
//                   <a
//                     href="/contacto"
//                     className="
//                       group
//                       inline-flex
//                       min-h-[54px]
//                       items-center
//                       justify-between
//                       gap-8
//                       rounded-full
//                       bg-[#B8F23A]
//                       px-7
//                       text-[10px]
//                       font-bold
//                       uppercase
//                       tracking-[0.1em]
//                       text-[#10372E]
//                       transition-all
//                       duration-300

//                       hover:-translate-y-0.5
//                       hover:bg-white
//                       hover:shadow-[0_16px_35px_rgba(0,0,0,.15)]
//                     ">
//                     Hablar con un especialista
//                     <ArrowUpRight
//                       size={15}
//                       strokeWidth={1.7}
//                       className="
//                         transition-transform
//                         duration-300

//                         group-hover:-translate-y-0.5
//                         group-hover:translate-x-0.5
//                       "
//                     />
//                   </a>

//                   <a
//                     href="mailto:contacto@gruner.mx"
//                     className="
//                       group
//                       inline-flex
//                       min-h-[54px]
//                       items-center
//                       justify-center
//                       gap-3
//                       rounded-full
//                       border
//                       border-white/10
//                       px-6
//                       text-[9px]
//                       font-semibold
//                       text-white/55
//                       transition-all
//                       duration-300

//                       hover:border-white/25
//                       hover:bg-white/[0.05]
//                       hover:text-white
//                     ">
//                     <Mail
//                       size={14}
//                       strokeWidth={1.5}
//                       className="text-[#B8F23A]"
//                     />
//                     contacto@gruner.mx
//                   </a>
//                 </div>

//                 <div
//                   className="
//                     mt-7
//                     flex
//                     items-center
//                     gap-3
//                     border-t
//                     border-white/[0.07]
//                     pt-5
//                   ">
//                   <Sparkles
//                     size={11}
//                     strokeWidth={1.5}
//                     className="text-[#B8F23A]"
//                   />

//                   <span
//                     className="
//                       text-[6px]
//                       font-semibold
//                       uppercase
//                       tracking-[0.15em]
//                       text-white/25
//                     ">
//                     Ingeniería energética diseñada alrededor de tu operación
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* =================================================
//               RIGHT / WHITE PANEL
//           ================================================= */}

//           <div
//             className="
//               relative
//               z-20
//               mx-3
//               -mt-3
//               overflow-hidden
//               rounded-[22px]
//               border
//               border-[#143E33]/[0.07]
//               bg-white
//               p-6
//               shadow-[0_30px_80px_rgba(20,62,51,.13)]

//               sm:mx-6
//               sm:p-8

//               lg:my-7
//               lg:-ml-5
//               lg:mr-0
//               lg:mt-7
//               lg:rounded-[20px]
//               lg:p-9

//               xl:-ml-7
//               xl:p-10
//             ">
//             {/* subtle glow */}

//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 -right-[80px]
//                 -top-[100px]
//                 h-[260px]
//                 w-[260px]
//                 rounded-full
//                 bg-[#B8F23A]/[0.11]
//                 blur-[80px]
//               "
//             />

//             {/* tiny grid */}

//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 inset-0
//                 opacity-[0.22]
//                 [background-image:linear-gradient(rgba(20,62,51,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(20,62,51,.025)_1px,transparent_1px)]
//                 [background-size:38px_38px]
//               "
//             />

//             <div className="relative z-10">
//               {/* HEADER */}

//               <div
//                 className="
//                   flex
//                   items-start
//                   justify-between
//                   gap-5
//                 ">
//                 <div>
//                   <div className="flex items-center gap-3">
//                     <span className="h-px w-7 bg-[#9DD827]" />

//                     <p
//                       className="
//                         text-[7px]
//                         font-bold
//                         uppercase
//                         tracking-[0.19em]
//                         text-[#78A500]
//                       ">
//                       Energy Solution
//                     </p>
//                   </div>

//                   <h3
//                     className="
//                       mt-4
//                       max-w-[480px]
//                       text-[clamp(1.8rem,2.4vw,2.8rem)]
//                       font-normal
//                       leading-[0.98]
//                       tracking-[-0.045em]
//                     ">
//                     Tres tecnologías.
//                     <span className="block text-[#78A500]">
//                       Una sola estrategia.
//                     </span>
//                   </h3>
//                 </div>

//                 <span
//                   className="
//                     flex
//                     h-10
//                     w-10
//                     shrink-0
//                     items-center
//                     justify-center
//                     rounded-full
//                     bg-[#EDF5DF]
//                   ">
//                   <span className="relative flex h-2.5 w-2.5">
//                     <span
//                       className="
//                         absolute
//                         inset-0
//                         animate-ping
//                         rounded-full
//                         bg-[#83B500]/30
//                       "
//                     />

//                     <span
//                       className="
//                         relative
//                         h-2.5
//                         w-2.5
//                         rounded-full
//                         bg-[#83B500]
//                       "
//                     />
//                   </span>
//                 </span>
//               </div>

//               <p
//                 className="
//                   mt-5
//                   max-w-[520px]
//                   text-[10px]
//                   leading-6
//                   text-[#143E33]/42
//                 ">
//                 Construimos la arquitectura alrededor de las necesidades reales
//                 de consumo, continuidad y desempeño energético.
//               </p>

//               {/* =================================================
//                   SYSTEMS
//               ================================================= */}

//               <div
//                 className="
//                   mt-8
//                   space-y-3
//                 ">
//                 {systems.map((item, index) => {
//                   const Icon = item.icon;

//                   return (
//                     <motion.div
//                       key={item.number}
//                       initial={{
//                         opacity: 0,
//                         x: 15,
//                       }}
//                       whileInView={{
//                         opacity: 1,
//                         x: 0,
//                       }}
//                       viewport={{
//                         once: true,
//                       }}
//                       transition={{
//                         duration: 0.5,
//                         delay: index * 0.08,
//                       }}
//                       className="
//                         group
//                         relative
//                         overflow-hidden
//                         rounded-[14px]
//                         border
//                         border-[#143E33]/[0.075]
//                         bg-[#F8FAF5]
//                         p-4
//                         transition-all
//                         duration-300

//                         hover:-translate-y-0.5
//                         hover:border-[#9DD827]/45
//                         hover:bg-white
//                         hover:shadow-[0_12px_30px_rgba(20,62,51,.07)]
//                       ">
//                       <div
//                         className="
//                           flex
//                           items-start
//                           gap-4
//                         ">
//                         {/* icon */}

//                         <span
//                           className="
//                             flex
//                             h-12
//                             w-12
//                             shrink-0
//                             items-center
//                             justify-center
//                             rounded-[12px]
//                             bg-[#EAF3DC]
//                             text-[#78A500]
//                             transition-all
//                             duration-300

//                             group-hover:bg-[#B8F23A]
//                             group-hover:text-[#10372E]
//                           ">
//                           <Icon size={18} strokeWidth={1.6} />
//                         </span>

//                         {/* content */}

//                         <div
//                           className="
//                             min-w-0
//                             flex-1
//                           ">
//                           <div
//                             className="
//                               flex
//                               items-center
//                               justify-between
//                               gap-4
//                             ">
//                             <div className="flex items-center gap-2.5">
//                               <span
//                                 className="
//                                   text-[6px]
//                                   font-bold
//                                   tracking-[0.15em]
//                                   text-[#78A500]
//                                 ">
//                                 {item.number}
//                               </span>

//                               <span
//                                 className="
//                                   rounded-full
//                                   bg-[#EAF3DC]
//                                   px-2.5
//                                   py-1
//                                   text-[6px]
//                                   font-bold
//                                   uppercase
//                                   tracking-[0.13em]
//                                   text-[#6F9900]
//                                 ">
//                                 {item.code}
//                               </span>
//                             </div>

//                             <ArrowUpRight
//                               size={13}
//                               strokeWidth={1.5}
//                               className="
//                                 text-[#143E33]/20
//                                 transition-all
//                                 duration-300

//                                 group-hover:-translate-y-0.5
//                                 group-hover:translate-x-0.5
//                                 group-hover:text-[#78A500]
//                               "
//                             />
//                           </div>

//                           <h4
//                             className="
//                               mt-3
//                               text-[13px]
//                               font-semibold
//                               tracking-[-0.02em]
//                               text-[#143E33]
//                             ">
//                             {item.label}
//                           </h4>

//                           <p
//                             className="
//                               mt-1
//                               text-[7px]
//                               font-bold
//                               uppercase
//                               tracking-[0.13em]
//                               text-[#78A500]
//                             ">
//                             {item.text}
//                           </p>

//                           <p
//                             className="
//                               mt-2
//                               max-w-[420px]
//                               text-[9px]
//                               leading-5
//                               text-[#143E33]/38
//                             ">
//                             {item.description}
//                           </p>
//                         </div>
//                       </div>
//                     </motion.div>
//                   );
//                 })}
//               </div>

//               {/* =================================================
//                   CONNECTION
//               ================================================= */}

//               <div
//                 className="
//                   relative
//                   mt-6
//                   overflow-hidden
//                   rounded-[14px]
//                   bg-[#10372E]
//                   p-5
//                   text-white
//                 ">
//                 <div
//                   className="
//                     pointer-events-none
//                     absolute
//                     -right-10
//                     -top-10
//                     h-28
//                     w-28
//                     rounded-full
//                     bg-[#B8F23A]/15
//                     blur-[40px]
//                   "
//                 />

//                 <div
//                   className="
//                     relative
//                     z-10
//                     flex
//                     items-center
//                     justify-between
//                     gap-5
//                   ">
//                   <div>
//                     <p
//                       className="
//                         text-[6px]
//                         font-bold
//                         uppercase
//                         tracking-[0.16em]
//                         text-[#B8F23A]
//                       ">
//                       Integrated Energy
//                     </p>

//                     <p
//                       className="
//                         mt-2
//                         max-w-[330px]
//                         text-[10px]
//                         leading-5
//                         text-white/55
//                       ">
//                       Generación, almacenamiento y control trabajando como un
//                       mismo sistema.
//                     </p>
//                   </div>

//                   <div
//                     className="
//                       flex
//                       h-11
//                       w-11
//                       shrink-0
//                       items-center
//                       justify-center
//                       rounded-full
//                       bg-[#B8F23A]
//                       text-[#10372E]
//                     ">
//                     <Zap size={16} strokeWidth={1.7} />
//                   </div>
//                 </div>
//               </div>

//               {/* FOOTER */}

//               <div
//                 className="
//                   mt-6
//                   flex
//                   items-center
//                   justify-between
//                   gap-4
//                   border-t
//                   border-[#143E33]/[0.07]
//                   pt-5
//                 ">
//                 <div className="flex items-center gap-2.5">
//                   <Sparkles
//                     size={11}
//                     strokeWidth={1.5}
//                     className="text-[#78A500]"
//                   />

//                   <span
//                     className="
//                       text-[6px]
//                       font-semibold
//                       uppercase
//                       tracking-[0.14em]
//                       text-[#143E33]/30
//                     ">
//                     Diseñado alrededor de tu operación
//                   </span>
//                 </div>

//                 <span
//                   className="
//                     text-[6px]
//                     font-bold
//                     uppercase
//                     tracking-[0.17em]
//                     text-[#78A500]
//                   ">
//                   GRUNER
//                 </span>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* ===================================================
//             BOTTOM JOURNEY
//         =================================================== */}

//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 18,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//             amount: 0.3,
//           }}
//           transition={{
//             duration: 0.7,
//             delay: 0.1,
//           }}
//           className="
//             relative
//             z-30
//             mx-auto
//             mt-6
//             grid
//             max-w-[1250px]
//             overflow-hidden
//             rounded-[16px]
//             border
//             border-[#143E33]/[0.07]
//             bg-white
//             shadow-[0_18px_45px_rgba(20,62,51,.055)]

//             sm:grid-cols-3
//           ">
//           {journey.map((item, index) => (
//             <div
//               key={item.number}
//               className={`
//                 group
//                 relative
//                 flex
//                 items-center
//                 gap-4
//                 px-5
//                 py-5
//                 transition-colors
//                 duration-300

//                 hover:bg-[#F4F8ED]

//                 ${
//                   index > 0
//                     ? "border-t border-[#143E33]/[0.07] sm:border-l sm:border-t-0"
//                     : ""
//                 }
//               `}>
//               <span
//                 className="
//                   flex
//                   h-9
//                   w-9
//                   shrink-0
//                   items-center
//                   justify-center
//                   rounded-full
//                   bg-[#EAF3DC]
//                   text-[#78A500]
//                   transition-all
//                   duration-300

//                   group-hover:bg-[#B8F23A]
//                   group-hover:text-[#10372E]
//                 ">
//                 <Check size={13} strokeWidth={1.8} />
//               </span>

//               <div className="flex-1">
//                 <div className="flex items-center gap-2.5">
//                   <span
//                     className="
//                       text-[6px]
//                       font-bold
//                       tracking-[0.15em]
//                       text-[#78A500]
//                     ">
//                     {item.number}
//                   </span>

//                   <span
//                     className="
//                       h-px
//                       w-5
//                       bg-[#9DD827]
//                     "
//                   />
//                 </div>

//                 <p
//                   className="
//                     mt-1.5
//                     text-[8px]
//                     font-bold
//                     uppercase
//                     tracking-[0.13em]
//                     text-[#143E33]/70
//                   ">
//                   {item.title}
//                 </p>

//                 <p
//                   className="
//                     mt-1
//                     text-[6px]
//                     font-semibold
//                     uppercase
//                     tracking-[0.11em]
//                     text-[#143E33]/25
//                   ">
//                   {item.text}
//                 </p>
//               </div>

//               {index < journey.length - 1 && (
//                 <ArrowRight
//                   size={13}
//                   strokeWidth={1.4}
//                   className="
//                     hidden
//                     text-[#143E33]/15
//                     lg:block
//                   "
//                 />
//               )}
//             </div>
//           ))}
//         </motion.div>

//         {/* ===================================================
//             FINAL MICRO TEXT
//         =================================================== */}

//         <div
//           className="
//             mt-7
//             flex
//             flex-col
//             gap-4

//             sm:flex-row
//             sm:items-center
//             sm:justify-between
//           ">
//           <div className="flex items-center gap-3">
//             <span className="h-2 w-2 rounded-full bg-[#9DD827]" />

//             <span
//               className="
//                 text-[7px]
//                 font-semibold
//                 uppercase
//                 tracking-[0.16em]
//                 text-[#143E33]/30
//               ">
//               Solar PV · BESS · Energy Management
//             </span>
//           </div>

//           <div className="flex items-center gap-3">
//             <span className="h-px w-8 bg-[#9DD827]" />

//             <span
//               className="
//                 text-[7px]
//                 font-bold
//                 uppercase
//                 tracking-[0.18em]
//                 text-[#78A500]
//               ">
//               Better energy starts here
//             </span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default SolarContactSection;

import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  BatteryCharging,
  Check,
  Mail,
  SolarPanel,
  Sparkles,
  Zap,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const systems = [
  {
    icon: SolarPanel,
    number: "01",
    code: "PV",
    label: "Solar Fotovoltaico",
    text: "Generación",
    description:
      "Producción de energía limpia integrada al perfil de consumo de tu operación.",
  },
  {
    icon: BatteryCharging,
    number: "02",
    code: "BESS",
    label: "Almacenamiento",
    text: "Flexibilidad",
    description:
      "Energía disponible cuando la operación realmente la necesita.",
  },
  {
    icon: Zap,
    number: "03",
    code: "EMS",
    label: "Gestión Energética",
    text: "Inteligencia",
    description:
      "Control y optimización del flujo energético de toda la infraestructura.",
  },
];

const journey = [
  {
    number: "01",
    title: "Analizamos",
    text: "Tu demanda",
  },
  {
    number: "02",
    title: "Diseñamos",
    text: "La solución",
  },
  {
    number: "03",
    title: "Implementamos",
    text: "La infraestructura",
  },
];

/* =========================================================
   MAIN
========================================================= */

function SolarContactSection() {
  return (
    <section
      id="solar-contacto"
      className="
        relative
        overflow-hidden
        bg-white
        py-20
        text-[#143E33]

        lg:py-24
      ">
      {/* =====================================================
          VERY SUBTLE BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.22]
          [background-image:linear-gradient(rgba(20,62,51,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(20,62,51,.025)_1px,transparent_1px)]
          [background-size:76px_76px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[220px]
          -top-[230px]
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#B8F23A]/[0.08]
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-[280px]
          -left-[180px]
          h-[480px]
          w-[480px]
          rounded-full
          bg-[#143E33]/[0.025]
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
            SMALL EYEBROW
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 14,
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
            duration: 0.6,
          }}
          className="
            mb-7
            flex
            items-center
            gap-4
          ">
          <span className="h-px w-9 bg-[#9DD827]" />

          <span
            className="
              text-[11px]
              font-bold
              uppercase
              tracking-[0.22em]
              text-[#78A500]
            ">
            Comencemos
          </span>
        </motion.div>

        {/* ===================================================
            MAIN SPLIT STAGE
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 28,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            grid
            items-stretch

            lg:grid-cols-[1.08fr_.92fr]
          ">
          {/* =================================================
              LEFT / GREEN EDITORIAL PANEL
          ================================================= */}

          <div
            className="
              relative
              min-h-[590px]
              overflow-hidden
              rounded-[24px]
              bg-[#10372E]
              p-7
              text-white
              shadow-[0_30px_80px_rgba(16,55,46,.14)]

              sm:p-9

              lg:rounded-r-none
              lg:p-11

              xl:min-h-[630px]
              xl:p-14
            ">
            {/* grid */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                opacity-[0.12]
                [background-image:linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)]
                [background-size:44px_44px]
              "
            />

            {/* glow */}

            <div
              className="
                pointer-events-none
                absolute
                -right-[120px]
                -top-[140px]
                h-[390px]
                w-[390px]
                rounded-full
                bg-[#B8F23A]/15
                blur-[100px]
              "
            />

            {/* rings */}

            <div
              className="
                pointer-events-none
                absolute
                -bottom-[190px]
                -right-[150px]
                h-[480px]
                w-[480px]
                rounded-full
                border
                border-[#B8F23A]/[0.09]
              ">
              <div
                className="
                  absolute
                  inset-[14%]
                  rounded-full
                  border
                  border-white/[0.045]
                "
              />

              <div
                className="
                  absolute
                  inset-[30%]
                  rounded-full
                  border
                  border-[#B8F23A]/[0.07]
                "
              />

              <div
                className="
                  absolute
                  inset-[44%]
                  rounded-full
                  border
                  border-white/[0.04]
                "
              />
            </div>

            {/* huge word */}

            <span
              className="
                pointer-events-none
                absolute
                -bottom-8
                -left-3
                hidden
                select-none
                text-[clamp(8rem,13vw,14rem)]
                font-semibold
                leading-none
                tracking-[-0.09em]
                text-white/[0.018]

                xl:block
              ">
              GO
            </span>

            {/* content */}

            <div
              className="
                relative
                z-10
                flex
                h-full
                flex-col
              ">
              {/* TOP */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-5
                ">
                <div className="flex items-center gap-4">
                  <span
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-[12px]
                      bg-[#B8F23A]
                      text-[#10372E]
                    ">
                    <Zap size={18} strokeWidth={1.7} />
                  </span>

                  <div>
                    <p
                      className="
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.2em]
                        text-[#B8F23A]
                      ">
                      Hablemos de energía
                    </p>

                    <p
                      className="
                        mt-1
                        text-[11px]
                        font-semibold
                        uppercase
                        tracking-[0.14em]
                        text-white/25
                      ">
                      Solar · Storage · Intelligence
                    </p>
                  </div>
                </div>

                <span className="relative flex h-2.5 w-2.5">
                  <span
                    className="
                      absolute
                      inset-0
                      animate-ping
                      rounded-full
                      bg-[#B8F23A]/40
                    "
                  />

                  <span
                    className="
                      relative
                      h-2.5
                      w-2.5
                      rounded-full
                      bg-[#B8F23A]
                    "
                  />
                </span>
              </div>

              {/* TITLE */}

              <div
                className="
                  my-auto
                  py-12
                ">
                <p
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-white/30
                  ">
                  Tu próximo proyecto energético
                </p>

                <h2
                  className="
                    mt-5
                    max-w-[850px]
                    text-[clamp(2.8rem,4.6vw,5.5rem)]
                    font-normal
                    leading-[0.91]
                    tracking-[-0.065em]
                  ">
                  Tu operación puede
                  <span className="block">consumir energía</span>
                  <span
                    className="
                      relative
                      inline-block
                      text-[#B8F23A]
                    ">
                    de una mejor manera.
                    <svg
                      viewBox="0 0 500 20"
                      preserveAspectRatio="none"
                      className="
                        absolute
                        -bottom-2
                        left-0
                        h-[10px]
                        w-[76%]
                        opacity-45
                      ">
                      <motion.path
                        d="M2 12 C120 3, 300 18, 498 7"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
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
                          duration: 1.2,
                          delay: 0.4,
                        }}
                      />
                    </svg>
                  </span>
                </h2>

                <p
                  className="
                    mt-8
                    max-w-[650px]
                    text-[12px]
                    leading-7
                    text-white/48
                  ">
                  Conversemos sobre tu demanda, infraestructura y objetivos.
                  Podemos ayudarte a definir un proyecto llave en mano que
                  integre Solar Fotovoltaico, almacenamiento BESS y gestión
                  energética alrededor de las necesidades reales de tu
                  operación.
                </p>
              </div>

              {/* ACTIONS */}

              <div>
                <div
                  className="
                    flex
                    flex-col
                    gap-3

                    sm:flex-row
                    sm:items-center
                  ">
                  <a
                    href="/contacto"
                    className="
                      group
                      inline-flex
                      min-h-[54px]
                      items-center
                      justify-between
                      gap-8
                      rounded-full
                      bg-[#B8F23A]
                      px-7
                      text-[13px]
                      font-bold
                      uppercase
                      tracking-[0.1em]
                      text-[#10372E]
                      transition-all
                      duration-300

                      hover:-translate-y-0.5
                      hover:bg-white
                      hover:shadow-[0_16px_35px_rgba(0,0,0,.15)]
                    ">
                    Hablar con un especialista
                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.7}
                      className="
                        transition-transform
                        duration-300

                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                      "
                    />
                  </a>

                  <a
                    href="mailto:info@gruner.mx"
                    className="
                      group
                      inline-flex
                      min-h-[54px]
                      items-center
                      justify-center
                      gap-3
                      rounded-full
                      border
                      border-white/10
                      px-6
                      text-[12px]
                      font-semibold
                      text-white/55
                      transition-all
                      duration-300

                      hover:border-white/25
                      hover:bg-white/[0.05]
                      hover:text-white
                    ">
                    <Mail
                      size={14}
                      strokeWidth={1.5}
                      className="text-[#B8F23A]"
                    />
                    info@gruner.mx
                  </a>
                </div>

                <div
                  className="
                    mt-7
                    flex
                    items-center
                    gap-3
                    border-t
                    border-white/[0.07]
                    pt-5
                  ">
                  <Sparkles
                    size={11}
                    strokeWidth={1.5}
                    className="text-[#B8F23A]"
                  />

                  <span
                    className="
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.15em]
                      text-white/25
                    ">
                    Ingeniería energética diseñada alrededor de tu operación
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT / WHITE PANEL
          ================================================= */}

          <div
            className="
              relative
              z-20
              mx-3
              -mt-3
              overflow-hidden
              rounded-[22px]
              border
              border-[#143E33]/[0.07]
              bg-white
              p-6
              shadow-[0_30px_80px_rgba(20,62,51,.13)]

              sm:mx-6
              sm:p-8

              lg:my-7
              lg:-ml-5
              lg:mr-0
              lg:mt-7
              lg:rounded-[20px]
              lg:p-9

              xl:-ml-7
              xl:p-10
            ">
            {/* subtle glow */}

            <div
              className="
                pointer-events-none
                absolute
                -right-[80px]
                -top-[100px]
                h-[260px]
                w-[260px]
                rounded-full
                bg-[#B8F23A]/[0.11]
                blur-[80px]
              "
            />

            {/* tiny grid */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                opacity-[0.22]
                [background-image:linear-gradient(rgba(20,62,51,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(20,62,51,.025)_1px,transparent_1px)]
                [background-size:38px_38px]
              "
            />

            <div className="relative z-10">
              {/* HEADER */}

              <div
                className="
                  flex
                  items-start
                  justify-between
                  gap-5
                ">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="h-px w-7 bg-[#9DD827]" />

                    <p
                      className="
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.19em]
                        text-[#78A500]
                      ">
                      Energy Solution
                    </p>
                  </div>

                  <h3
                    className="
                      mt-4
                      max-w-[480px]
                      text-[clamp(1.8rem,2.4vw,2.8rem)]
                      font-normal
                      leading-[0.98]
                      tracking-[-0.045em]
                    ">
                    Tres tecnologías.
                    <span className="block text-[#78A500]">
                      Una sola estrategia.
                    </span>
                  </h3>
                </div>

                <span
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#EDF5DF]
                  ">
                  <span className="relative flex h-2.5 w-2.5">
                    <span
                      className="
                        absolute
                        inset-0
                        animate-ping
                        rounded-full
                        bg-[#83B500]/30
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
                </span>
              </div>

              <p
                className="
                  mt-5
                  max-w-[520px]
                  text-[13px]
                  leading-6
                  text-[#143E33]/42
                ">
                Construimos la arquitectura alrededor de las necesidades reales
                de consumo, continuidad y desempeño energético.
              </p>

              {/* =================================================
                  SYSTEMS
              ================================================= */}

              <div
                className="
                  mt-8
                  space-y-3
                ">
                {systems.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={item.number}
                      initial={{
                        opacity: 0,
                        x: 15,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.08,
                      }}
                      className="
                        group
                        relative
                        overflow-hidden
                        rounded-[14px]
                        border
                        border-[#143E33]/[0.075]
                        bg-[#F8FAF5]
                        p-4
                        transition-all
                        duration-300

                        hover:-translate-y-0.5
                        hover:border-[#9DD827]/45
                        hover:bg-white
                        hover:shadow-[0_12px_30px_rgba(20,62,51,.07)]
                      ">
                      <div
                        className="
                          flex
                          items-start
                          gap-4
                        ">
                        {/* icon */}

                        <span
                          className="
                            flex
                            h-12
                            w-12
                            shrink-0
                            items-center
                            justify-center
                            rounded-[12px]
                            bg-[#EAF3DC]
                            text-[#78A500]
                            transition-all
                            duration-300

                            group-hover:bg-[#B8F23A]
                            group-hover:text-[#10372E]
                          ">
                          <Icon size={18} strokeWidth={1.6} />
                        </span>

                        {/* content */}

                        <div
                          className="
                            min-w-0
                            flex-1
                          ">
                          <div
                            className="
                              flex
                              items-center
                              justify-between
                              gap-4
                            ">
                            <div className="flex items-center gap-2.5">
                              <span
                                className="
                                  text-[11px]
                                  font-bold
                                  tracking-[0.15em]
                                  text-[#78A500]
                                ">
                                {item.number}
                              </span>

                              <span
                                className="
                                  rounded-full
                                  bg-[#EAF3DC]
                                  px-2.5
                                  py-1
                                  text-[11px]
                                  font-bold
                                  uppercase
                                  tracking-[0.13em]
                                  text-[#6F9900]
                                ">
                                {item.code}
                              </span>
                            </div>

                            <ArrowUpRight
                              size={13}
                              strokeWidth={1.5}
                              className="
                                text-[#143E33]/20
                                transition-all
                                duration-300

                                group-hover:-translate-y-0.5
                                group-hover:translate-x-0.5
                                group-hover:text-[#78A500]
                              "
                            />
                          </div>

                          <h4
                            className="
                              mt-3
                              text-[13px]
                              font-semibold
                              tracking-[-0.02em]
                              text-[#143E33]
                            ">
                            {item.label}
                          </h4>

                          <p
                            className="
                              mt-1
                              text-[11px]
                              font-bold
                              uppercase
                              tracking-[0.13em]
                              text-[#78A500]
                            ">
                            {item.text}
                          </p>

                          <p
                            className="
                              mt-2
                              max-w-[420px]
                              text-[12px]
                              leading-5
                              text-[#143E33]/38
                            ">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* =================================================
                  CONNECTION
              ================================================= */}

              <div
                className="
                  relative
                  mt-6
                  overflow-hidden
                  rounded-[14px]
                  bg-[#10372E]
                  p-5
                  text-white
                ">
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-10
                    -top-10
                    h-28
                    w-28
                    rounded-full
                    bg-[#B8F23A]/15
                    blur-[40px]
                  "
                />

                <div
                  className="
                    relative
                    z-10
                    flex
                    items-center
                    justify-between
                    gap-5
                  ">
                  <div>
                    <p
                      className="
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.16em]
                        text-[#B8F23A]
                      ">
                      Integrated Energy
                    </p>

                    <p
                      className="
                        mt-2
                        max-w-[330px]
                        text-[13px]
                        leading-5
                        text-white/55
                      ">
                      Generación, almacenamiento y control trabajando como un
                      mismo sistema.
                    </p>
                  </div>

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#B8F23A]
                      text-[#10372E]
                    ">
                    <Zap size={16} strokeWidth={1.7} />
                  </div>
                </div>
              </div>

              {/* FOOTER */}

              <div
                className="
                  mt-6
                  flex
                  items-center
                  justify-between
                  gap-4
                  border-t
                  border-[#143E33]/[0.07]
                  pt-5
                ">
                <div className="flex items-center gap-2.5">
                  <Sparkles
                    size={11}
                    strokeWidth={1.5}
                    className="text-[#78A500]"
                  />

                  <span
                    className="
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.14em]
                      text-[#143E33]/30
                    ">
                    Diseñado alrededor de tu operación
                  </span>
                </div>

                <span
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.17em]
                    text-[#78A500]
                  ">
                  GRUNER
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ===================================================
            BOTTOM JOURNEY
        =================================================== */}

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
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            delay: 0.1,
          }}
          className="
            relative
            z-30
            mx-auto
            mt-6
            grid
            max-w-[1250px]
            overflow-hidden
            rounded-[16px]
            border
            border-[#143E33]/[0.07]
            bg-white
            shadow-[0_18px_45px_rgba(20,62,51,.055)]

            sm:grid-cols-3
          ">
          {journey.map((item, index) => (
            <div
              key={item.number}
              className={`
                group
                relative
                flex
                items-center
                gap-4
                px-5
                py-5
                transition-colors
                duration-300

                hover:bg-[#F4F8ED]

                ${
                  index > 0
                    ? "border-t border-[#143E33]/[0.07] sm:border-l sm:border-t-0"
                    : ""
                }
              `}>
              <span
                className="
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-[#EAF3DC]
                  text-[#78A500]
                  transition-all
                  duration-300

                  group-hover:bg-[#B8F23A]
                  group-hover:text-[#10372E]
                ">
                <Check size={13} strokeWidth={1.8} />
              </span>

              <div className="flex-1">
                <div className="flex items-center gap-2.5">
                  <span
                    className="
                      text-[11px]
                      font-bold
                      tracking-[0.15em]
                      text-[#78A500]
                    ">
                    {item.number}
                  </span>

                  <span
                    className="
                      h-px
                      w-5
                      bg-[#9DD827]
                    "
                  />
                </div>

                <p
                  className="
                    mt-1.5
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.13em]
                    text-[#143E33]/70
                  ">
                  {item.title}
                </p>

                <p
                  className="
                    mt-1
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.11em]
                    text-[#143E33]/25
                  ">
                  {item.text}
                </p>
              </div>

              {index < journey.length - 1 && (
                <ArrowRight
                  size={13}
                  strokeWidth={1.4}
                  className="
                    hidden
                    text-[#143E33]/15
                    lg:block
                  "
                />
              )}
            </div>
          ))}
        </motion.div>

        {/* ===================================================
            FINAL MICRO TEXT
        =================================================== */}

        <div
          className="
            mt-7
            flex
            flex-col
            gap-4

            sm:flex-row
            sm:items-center
            sm:justify-between
          ">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#9DD827]" />

            <span
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-[#143E33]/30
              ">
              Solar PV · BESS · Energy Management
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#9DD827]" />

            <span
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#78A500]
              ">
              Better energy starts here
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SolarContactSection;
