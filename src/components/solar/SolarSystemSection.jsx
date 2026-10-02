// import { motion } from "motion/react";
// import {
//   Activity,
//   ArrowRight,
//   BatteryCharging,
//   Building2,
//   CircleGauge,
//   Gauge,
//   Leaf,
//   Network,
//   Radio,
//   ShieldCheck,
//   SolarPanel,
//   Sparkles,
//   Sun,
//   Zap,
// } from "lucide-react";

// /* =========================================================
//    DATA
// ========================================================= */

// const modules = {
//   solar: {
//     number: "01",
//     eyebrow: "Generación",
//     title: "Solar",
//     subtitle: "Producción fotovoltaica",
//     description:
//       "Generación renovable integrada directamente a la infraestructura energética de la operación.",
//     icon: SolarPanel,
//     tags: ["Autoconsumo", "Fuente renovable", "Generación local"],
//   },

//   bess: {
//     number: "02",
//     eyebrow: "Almacenamiento",
//     title: "BESS",
//     subtitle: "Flexibilidad energética",
//     description:
//       "Almacenamos energía para utilizarla estratégicamente cuando la operación realmente la necesita.",
//     icon: BatteryCharging,
//     tags: ["Carga", "Descarga", "Respaldo"],
//   },

//   operation: {
//     number: "03",
//     eyebrow: "Demanda",
//     title: "Operación",
//     subtitle: "Consumo energético",
//     description:
//       "La energía disponible se distribuye hacia procesos, infraestructura y cargas críticas.",
//     icon: Building2,
//     tags: ["Demanda", "Cargas críticas", "Continuidad"],
//   },
// };

// const footerSteps = [
//   {
//     number: "01",
//     title: "Generar",
//     text: "Energía renovable",
//     icon: Sun,
//   },
//   {
//     number: "02",
//     title: "Almacenar",
//     text: "Flexibilidad",
//     icon: BatteryCharging,
//   },
//   {
//     number: "03",
//     title: "Distribuir",
//     text: "Demanda",
//     icon: Network,
//   },
//   {
//     number: "04",
//     title: "Optimizar",
//     text: "Inteligencia",
//     icon: Gauge,
//   },
// ];

// /* =========================================================
//    ENERGY PULSES
// ========================================================= */

// function HorizontalPulse({ delay = 0, duration = 2.7, reverse = false }) {
//   return (
//     <motion.span
//       animate={{
//         left: reverse ? ["105%", "-5%"] : ["-5%", "105%"],
//         opacity: [0, 1, 1, 0],
//       }}
//       transition={{
//         duration,
//         delay,
//         repeat: Infinity,
//         repeatDelay: 0.5,
//         ease: "linear",
//       }}
//       className="
//         absolute
//         top-1/2
//         z-20
//         h-2
//         w-2
//         -translate-y-1/2
//         rounded-full
//         bg-[#B8F23A]
//         shadow-[0_0_14px_rgba(184,242,58,.95)]
//       "
//     />
//   );
// }

// function VerticalPulse({ delay = 0, duration = 2.5, reverse = false }) {
//   return (
//     <motion.span
//       animate={{
//         top: reverse ? ["105%", "-5%"] : ["-5%", "105%"],
//         opacity: [0, 1, 1, 0],
//       }}
//       transition={{
//         duration,
//         delay,
//         repeat: Infinity,
//         repeatDelay: 0.45,
//         ease: "linear",
//       }}
//       className="
//         absolute
//         left-1/2
//         z-20
//         h-2
//         w-2
//         -translate-x-1/2
//         rounded-full
//         bg-[#B8F23A]
//         shadow-[0_0_14px_rgba(184,242,58,.95)]
//       "
//     />
//   );
// }

// /* =========================================================
//    MODULE CARD
// ========================================================= */

// function EnergyModule({ data, className = "" }) {
//   const Icon = data.icon;

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 18 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true, amount: 0.25 }}
//       transition={{
//         duration: 0.65,
//         ease: [0.22, 1, 0.36, 1],
//       }}
//       className={`
//         group
//         relative
//         h-full
//         overflow-hidden
//         rounded-[16px]
//         border
//         border-white/[0.09]
//         bg-white/[0.045]
//         p-5
//         backdrop-blur-sm
//         transition-all
//         duration-500

//         hover:-translate-y-1
//         hover:border-[#B8F23A]/35
//         hover:bg-white/[0.065]

//         sm:p-6
//         ${className}
//       `}>
//       <div
//         className="
//           pointer-events-none
//           absolute
//           -right-16
//           -top-16
//           h-40
//           w-40
//           rounded-full
//           bg-[#B8F23A]/[0.05]
//           blur-[45px]
//           transition-all
//           duration-500

//           group-hover:bg-[#B8F23A]/[0.09]
//         "
//       />

//       <span
//         className="
//           pointer-events-none
//           absolute
//           -right-1
//           -top-5
//           text-[105px]
//           font-light
//           leading-none
//           tracking-[-0.09em]
//           text-[#B8F23A]/[0.045]
//         ">
//         {data.number}
//       </span>

//       <div
//         className="
//           relative
//           z-10
//           flex
//           h-full
//           flex-col
//         ">
//         <div className="flex items-start justify-between gap-5">
//           <span
//             className="
//               flex
//               h-12
//               w-12
//               shrink-0
//               items-center
//               justify-center
//               rounded-[11px]
//               border
//               border-[#B8F23A]/15
//               bg-[#B8F23A]/10
//               text-[#B8F23A]
//               transition-all
//               duration-300

//               group-hover:border-[#B8F23A]
//               group-hover:bg-[#B8F23A]
//               group-hover:text-[#10372E]
//             ">
//             <Icon size={20} strokeWidth={1.6} />
//           </span>

//           <div
//             className="
//               flex
//               items-center
//               gap-2
//               rounded-full
//               border
//               border-white/[0.06]
//               bg-white/[0.035]
//               px-3
//               py-1.5
//             ">
//             <span className="relative flex h-1.5 w-1.5">
//               <span
//                 className="
//                   absolute
//                   inset-0
//                   animate-ping
//                   rounded-full
//                   bg-[#B8F23A]/50
//                 "
//               />

//               <span
//                 className="
//                   relative
//                   h-1.5
//                   w-1.5
//                   rounded-full
//                   bg-[#B8F23A]
//                 "
//               />
//             </span>

//             <span
//               className="
//                 text-[6px]
//                 font-bold
//                 uppercase
//                 tracking-[0.16em]
//                 text-white/35
//               ">
//               Activo
//             </span>
//           </div>
//         </div>

//         <div className="mt-5">
//           <p
//             className="
//               text-[7px]
//               font-bold
//               uppercase
//               tracking-[0.2em]
//               text-[#B8F23A]
//             ">
//             {data.number} · {data.eyebrow}
//           </p>

//           <div
//             className="
//               mt-2
//               flex
//               flex-wrap
//               items-end
//               gap-x-3
//               gap-y-1
//             ">
//             <h3
//               className="
//                 text-[25px]
//                 font-medium
//                 leading-none
//                 tracking-[-0.045em]
//                 text-white
//               ">
//               {data.title}
//             </h3>

//             <span
//               className="
//                 text-[7px]
//                 font-medium
//                 uppercase
//                 tracking-[0.14em]
//                 text-white/25
//               ">
//               {data.subtitle}
//             </span>
//           </div>

//           <p
//             className="
//               mt-4
//               max-w-[390px]
//               text-[10px]
//               leading-[1.8]
//               text-white/40
//             ">
//             {data.description}
//           </p>
//         </div>

//         <div
//           className="
//             mt-auto
//             flex
//             flex-wrap
//             gap-2
//             border-t
//             border-white/[0.06]
//             pt-4
//           ">
//           {data.tags.map((tag) => (
//             <span
//               key={tag}
//               className="
//                 rounded-full
//                 border
//                 border-white/[0.07]
//                 bg-white/[0.035]
//                 px-3
//                 py-1.5
//                 text-[6px]
//                 font-semibold
//                 uppercase
//                 tracking-[0.13em]
//                 text-white/35
//               ">
//               {tag}
//             </span>
//           ))}
//         </div>
//       </div>
//     </motion.div>
//   );
// }

// /* =========================================================
//    MAIN COMPONENT
// ========================================================= */

// function SolarSystemSection() {
//   return (
//     <section
//       className="
//         relative
//         overflow-hidden
//         bg-[#10372E]
//         py-16
//         text-white
//         lg:py-20
//         xl:py-24
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
//           [background-image:linear-gradient(rgba(255,255,255,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.055)_1px,transparent_1px)]
//           [background-size:72px_72px]
//         "
//       />

//       <div
//         className="
//           pointer-events-none
//           absolute
//           inset-0
//           bg-[radial-gradient(circle_at_52%_52%,rgba(157,216,39,.12),transparent_35%)]
//         "
//       />

//       <div
//         className="
//           pointer-events-none
//           absolute
//           -right-[180px]
//           -top-[230px]
//           h-[600px]
//           w-[600px]
//           rounded-full
//           border
//           border-[#9DD827]/10
//         ">
//         <div
//           className="
//             absolute
//             inset-[13%]
//             rounded-full
//             border
//             border-white/[0.04]
//           "
//         />

//         <div
//           className="
//             absolute
//             inset-[29%]
//             rounded-full
//             border
//             border-[#9DD827]/10
//           "
//         />
//       </div>

//       <div
//         className="
//           pointer-events-none
//           absolute
//           -bottom-[220px]
//           -left-[170px]
//           h-[520px]
//           w-[520px]
//           rounded-full
//           bg-[#9DD827]/[0.045]
//           blur-[100px]
//         "
//       />

//       <span
//         className="
//           pointer-events-none
//           absolute
//           -right-8
//           bottom-[-28px]
//           hidden
//           select-none
//           text-[clamp(10rem,19vw,22rem)]
//           font-semibold
//           leading-none
//           tracking-[-0.09em]
//           text-white/[0.018]
//           xl:block
//         ">
//         FLOW
//       </span>

//       <div
//         className="
//           pointer-events-none
//           absolute
//           left-0
//           right-0
//           top-0
//           h-px
//           bg-gradient-to-r
//           from-transparent
//           via-[#B8F23A]/60
//           to-transparent
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
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.25 }}
//           transition={{
//             duration: 0.75,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="
//             grid
//             gap-8
//             lg:grid-cols-[1fr_420px]
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
//                   text-[#10372E]
//                   shadow-[0_0_30px_rgba(184,242,58,.12)]
//                 ">
//                 <Network size={17} strokeWidth={1.7} />
//               </span>

//               <div className="flex items-center gap-3">
//                 <span className="h-px w-8 bg-[#B8F23A]" />

//                 <p
//                   className="
//                     text-[8px]
//                     font-bold
//                     uppercase
//                     tracking-[0.22em]
//                     text-[#B8F23A]
//                   ">
//                   Sistema energético integrado
//                 </p>
//               </div>
//             </div>

//             <h2
//               className="
//                 mt-6
//                 max-w-[900px]
//                 text-[clamp(2.7rem,4.4vw,5.2rem)]
//                 font-normal
//                 leading-[0.93]
//                 tracking-[-0.06em]
//               ">
//               La energía no solo
//               <span className="block">se genera.</span>
//               <span className="block text-[#B8F23A]">Se dirige.</span>
//             </h2>
//           </div>

//           <div className="lg:pb-2">
//             <p
//               className="
//                 max-w-[420px]
//                 text-[13px]
//                 leading-7
//                 text-white/50
//               ">
//               Generación, almacenamiento, demanda e inteligencia operando como
//               una sola infraestructura para aprovechar mejor cada flujo de
//               energía.
//             </p>

//             <div
//               className="
//                 mt-5
//                 flex
//                 flex-wrap
//                 items-center
//                 gap-x-5
//                 gap-y-3
//               ">
//               <div className="flex items-center gap-3">
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

//                 <span
//                   className="
//                     text-[7px]
//                     font-semibold
//                     uppercase
//                     tracking-[0.17em]
//                     text-white/35
//                   ">
//                   Flujo energético inteligente
//                 </span>
//               </div>

//               <span
//                 className="
//                   hidden
//                   h-4
//                   w-px
//                   bg-white/10
//                   sm:block
//                 "
//               />

//               <div className="flex items-center gap-2">
//                 <Radio size={11} strokeWidth={1.6} className="text-[#B8F23A]" />

//                 <span
//                   className="
//                     text-[7px]
//                     uppercase
//                     tracking-[0.15em]
//                     text-white/25
//                   ">
//                   Monitoreo continuo
//                 </span>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* ===================================================
//             ENERGY MANAGEMENT BOARD
//         =================================================== */}

//         <motion.div
//           initial={{ opacity: 0, y: 28 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.1 }}
//           transition={{
//             duration: 0.8,
//             delay: 0.08,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="
//             relative
//             mt-12
//             overflow-hidden
//             rounded-[20px]
//             border
//             border-white/[0.08]
//             bg-[#0C3028]/85
//             shadow-[0_30px_90px_rgba(0,0,0,.18)]
//             backdrop-blur-xl
//             lg:mt-14
//           ">
//           <div
//             className="
//               pointer-events-none
//               absolute
//               inset-0
//               opacity-[0.13]
//               [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)]
//               [background-size:36px_36px]
//             "
//           />

//           <div
//             className="
//               pointer-events-none
//               absolute
//               left-1/2
//               top-[45%]
//               h-[420px]
//               w-[800px]
//               -translate-x-1/2
//               -translate-y-1/2
//               rounded-full
//               bg-[#9DD827]/[0.055]
//               blur-[100px]
//             "
//           />

//           {/* =================================================
//               BOARD HEADER
//           ================================================= */}

//           <div
//             className="
//               relative
//               z-20
//               flex
//               flex-col
//               gap-5
//               border-b
//               border-white/[0.07]
//               px-5
//               py-5

//               sm:flex-row
//               sm:items-center
//               sm:justify-between
//               sm:px-7

//               lg:px-8
//             ">
//             <div className="flex items-center gap-4">
//               <span
//                 className="
//                   flex
//                   h-9
//                   w-9
//                   items-center
//                   justify-center
//                   rounded-[9px]
//                   border
//                   border-[#B8F23A]/20
//                   bg-[#B8F23A]/10
//                   text-[#B8F23A]
//                 ">
//                 <Activity size={16} strokeWidth={1.7} />
//               </span>

//               <div>
//                 <div className="flex items-center gap-3">
//                   <p
//                     className="
//                       text-[8px]
//                       font-bold
//                       uppercase
//                       tracking-[0.2em]
//                       text-[#B8F23A]
//                     ">
//                     Energy Flow
//                   </p>

//                   <span
//                     className="
//                       rounded-full
//                       bg-[#B8F23A]/10
//                       px-2.5
//                       py-1
//                       text-[5px]
//                       font-bold
//                       uppercase
//                       tracking-[0.15em]
//                       text-[#B8F23A]
//                     ">
//                     Live system
//                   </span>
//                 </div>

//                 <p
//                   className="
//                     mt-1
//                     text-[7px]
//                     uppercase
//                     tracking-[0.15em]
//                     text-white/25
//                   ">
//                   Generación · almacenamiento · demanda · inteligencia
//                 </p>
//               </div>
//             </div>

//             <div
//               className="
//                 flex
//                 flex-wrap
//                 items-center
//                 gap-4
//                 sm:justify-end
//               ">
//               <div className="flex items-center gap-2">
//                 <span className="relative flex h-1.5 w-1.5">
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
//                       h-1.5
//                       w-1.5
//                       rounded-full
//                       bg-[#B8F23A]
//                     "
//                   />
//                 </span>

//                 <span
//                   className="
//                     text-[7px]
//                     font-bold
//                     uppercase
//                     tracking-[0.16em]
//                     text-white/40
//                   ">
//                   Sistema activo
//                 </span>
//               </div>

//               <span className="h-4 w-px bg-white/10" />

//               <span
//                 className="
//                   text-[7px]
//                   font-semibold
//                   tracking-[0.14em]
//                   text-white/25
//                 ">
//                 GRN / EN-01
//               </span>
//             </div>
//           </div>

//           {/* =================================================
//               DESKTOP ENERGY MAP
//           ================================================= */}

//           <div
//             className="
//               relative
//               z-10
//               hidden
//               px-7
//               py-8
//               lg:block
//               xl:px-9
//             ">
//             {/* =================================================
//                 FIRST ROW
//             ================================================= */}

//             <div
//               className="
//                 grid
//                 grid-cols-[1fr_120px_220px_120px_1fr]
//                 items-stretch
//               ">
//               <EnergyModule data={modules.solar} />

//               {/* SOLAR → HUB */}

//               <div className="relative flex items-center">
//                 <div
//                   className="
//                     relative
//                     h-px
//                     w-full
//                     bg-gradient-to-r
//                     from-[#B8F23A]/20
//                     via-[#B8F23A]/75
//                     to-[#B8F23A]
//                   ">
//                   <HorizontalPulse delay={0} />
//                   <HorizontalPulse delay={1.35} />

//                   <ArrowRight
//                     size={12}
//                     strokeWidth={1.5}
//                     className="
//                       absolute
//                       -right-1.5
//                       top-1/2
//                       -translate-y-1/2
//                       text-[#B8F23A]
//                     "
//                   />
//                 </div>
//               </div>

//               {/* HUB */}

//               <div className="relative flex items-center justify-center">
//                 <motion.div
//                   animate={{
//                     boxShadow: [
//                       "0 0 0 rgba(184,242,58,0)",
//                       "0 0 55px rgba(184,242,58,.15)",
//                       "0 0 0 rgba(184,242,58,0)",
//                     ],
//                   }}
//                   transition={{
//                     duration: 4,
//                     repeat: Infinity,
//                   }}
//                   className="
//                     relative
//                     flex
//                     h-[172px]
//                     w-[172px]
//                     items-center
//                     justify-center
//                     rounded-full
//                     border
//                     border-[#B8F23A]/30
//                     bg-[#10372E]
//                   ">
//                   <motion.span
//                     animate={{ rotate: 360 }}
//                     transition={{
//                       duration: 22,
//                       repeat: Infinity,
//                       ease: "linear",
//                     }}
//                     className="
//                       absolute
//                       inset-[10px]
//                       rounded-full
//                       border
//                       border-dashed
//                       border-[#B8F23A]/20
//                     "
//                   />

//                   <motion.span
//                     animate={{ rotate: -360 }}
//                     transition={{
//                       duration: 16,
//                       repeat: Infinity,
//                       ease: "linear",
//                     }}
//                     className="
//                       absolute
//                       inset-[25px]
//                       rounded-full
//                       border
//                       border-dashed
//                       border-white/[0.07]
//                     "
//                   />

//                   <span
//                     className="
//                       absolute
//                       left-1/2
//                       top-[8px]
//                       h-2
//                       w-2
//                       -translate-x-1/2
//                       rounded-full
//                       bg-[#B8F23A]
//                       shadow-[0_0_12px_rgba(184,242,58,.8)]
//                     "
//                   />

//                   <span
//                     className="
//                       absolute
//                       bottom-[8px]
//                       left-1/2
//                       h-2
//                       w-2
//                       -translate-x-1/2
//                       rounded-full
//                       bg-[#B8F23A]
//                     "
//                   />

//                   <span
//                     className="
//                       absolute
//                       left-[8px]
//                       top-1/2
//                       h-2
//                       w-2
//                       -translate-y-1/2
//                       rounded-full
//                       bg-[#B8F23A]
//                     "
//                   />

//                   <span
//                     className="
//                       absolute
//                       right-[8px]
//                       top-1/2
//                       h-2
//                       w-2
//                       -translate-y-1/2
//                       rounded-full
//                       bg-[#B8F23A]
//                     "
//                   />

//                   <div className="relative z-10 text-center">
//                     <span
//                       className="
//                         mx-auto
//                         flex
//                         h-12
//                         w-12
//                         items-center
//                         justify-center
//                         rounded-full
//                         bg-[#B8F23A]
//                         text-[#10372E]
//                       ">
//                       <Zap size={20} strokeWidth={1.8} />
//                     </span>

//                     <p
//                       className="
//                         mt-3
//                         text-[7px]
//                         font-bold
//                         uppercase
//                         tracking-[0.18em]
//                         text-[#B8F23A]
//                       ">
//                       Energy Hub
//                     </p>

//                     <p
//                       className="
//                         mt-1
//                         text-[6px]
//                         uppercase
//                         tracking-[0.13em]
//                         text-white/25
//                       ">
//                       Distribución
//                     </p>
//                   </div>
//                 </motion.div>

//                 <div
//                   className="
//                     absolute
//                     -top-4
//                     left-1/2
//                     -translate-x-1/2
//                     whitespace-nowrap
//                     rounded-full
//                     border
//                     border-white/[0.06]
//                     bg-[#0C3028]
//                     px-3
//                     py-1.5
//                   ">
//                   <span
//                     className="
//                       text-[5px]
//                       font-bold
//                       uppercase
//                       tracking-[0.16em]
//                       text-white/30
//                     ">
//                     Flujo bidireccional
//                   </span>
//                 </div>
//               </div>

//               {/* HUB → OPERATION */}

//               <div className="relative flex items-center">
//                 <div
//                   className="
//                     relative
//                     h-px
//                     w-full
//                     bg-gradient-to-r
//                     from-[#B8F23A]
//                     via-[#B8F23A]/75
//                     to-[#B8F23A]/20
//                   ">
//                   <HorizontalPulse delay={0.5} />
//                   <HorizontalPulse delay={1.85} />

//                   <ArrowRight
//                     size={12}
//                     strokeWidth={1.5}
//                     className="
//                       absolute
//                       -right-1.5
//                       top-1/2
//                       -translate-y-1/2
//                       text-[#B8F23A]
//                     "
//                   />
//                 </div>
//               </div>

//               <EnergyModule data={modules.operation} />
//             </div>

//             {/* =================================================
//                 HUB → SECOND ROW
//             ================================================= */}

//             <div
//               className="
//                 relative
//                 mx-auto
//                 h-12
//                 w-px
//                 bg-gradient-to-b
//                 from-[#B8F23A]
//                 to-[#B8F23A]/35
//               ">
//               <VerticalPulse delay={0.3} />
//             </div>

//             {/* =================================================
//                 SECOND ROW · SAME SIZE
//             ================================================= */}

//             <div
//               className="
//                 grid
//                 grid-cols-3
//                 items-stretch
//                 gap-5
//               ">
//               {/* =============================================
//                   STRATEGY
//               ============================================= */}

//               <div
//                 className="
//                   relative
//                   flex
//                   min-h-[310px]
//                   overflow-hidden
//                   rounded-[16px]
//                   border
//                   border-white/[0.07]
//                   bg-white/[0.025]
//                   p-6
//                 ">
//                 <div
//                   className="
//                     absolute
//                     right-0
//                     top-0
//                     h-36
//                     w-36
//                     bg-[radial-gradient(circle_at_top_right,rgba(184,242,58,.10),transparent_65%)]
//                   "
//                 />

//                 <div
//                   className="
//                     relative
//                     z-10
//                     flex
//                     w-full
//                     flex-col
//                   ">
//                   <div className="flex items-center gap-3">
//                     <CircleGauge
//                       size={17}
//                       strokeWidth={1.6}
//                       className="text-[#B8F23A]"
//                     />

//                     <p
//                       className="
//                         text-[7px]
//                         font-bold
//                         uppercase
//                         tracking-[0.18em]
//                         text-white/45
//                       ">
//                       Estrategia energética
//                     </p>
//                   </div>

//                   <div
//                     className="
//                       mt-7
//                       grid
//                       grid-cols-3
//                       divide-x
//                       divide-white/[0.06]
//                     ">
//                     {[
//                       ["PV", "Generar"],
//                       ["BESS", "Almacenar"],
//                       ["LOAD", "Consumir"],
//                     ].map(([code, label]) => (
//                       <div
//                         key={code}
//                         className="
//                           px-4
//                           first:pl-0
//                           last:pr-0
//                         ">
//                         <p
//                           className="
//                             text-[14px]
//                             font-medium
//                             tracking-[-0.02em]
//                             text-[#B8F23A]
//                           ">
//                           {code}
//                         </p>

//                         <p
//                           className="
//                             mt-2
//                             text-[6px]
//                             uppercase
//                             tracking-[0.13em]
//                             text-white/25
//                           ">
//                           {label}
//                         </p>
//                       </div>
//                     ))}
//                   </div>

//                   <p
//                     className="
//                       mt-7
//                       max-w-[420px]
//                       text-[9px]
//                       leading-6
//                       text-white/30
//                     ">
//                     Cada recurso participa dentro de una estrategia común para
//                     responder a las necesidades energéticas de la operación.
//                   </p>

//                   <div
//                     className="
//                       mt-auto
//                       grid
//                       grid-cols-3
//                       gap-2
//                       border-t
//                       border-white/[0.06]
//                       pt-5
//                     ">
//                     {["Generación", "Reserva", "Demanda"].map((item) => (
//                       <div
//                         key={item}
//                         className="
//                           rounded-[9px]
//                           border
//                           border-white/[0.05]
//                           bg-white/[0.025]
//                           px-3
//                           py-3
//                         ">
//                         <span
//                           className="
//                             text-[6px]
//                             font-semibold
//                             uppercase
//                             tracking-[0.12em]
//                             text-white/25
//                           ">
//                           {item}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* =============================================
//                   BESS · SAME SIZE
//               ============================================= */}

//               <EnergyModule data={modules.bess} className="min-h-[310px]" />

//               {/* =============================================
//                   CONTINUITY · SAME SIZE
//               ============================================= */}

//               <div
//                 className="
//                   relative
//                   flex
//                   min-h-[310px]
//                   overflow-hidden
//                   rounded-[16px]
//                   border
//                   border-white/[0.07]
//                   bg-white/[0.025]
//                   p-6
//                 ">
//                 <div
//                   className="
//                     pointer-events-none
//                     absolute
//                     -right-16
//                     -top-16
//                     h-44
//                     w-44
//                     rounded-full
//                     bg-[#B8F23A]/[0.035]
//                     blur-[50px]
//                   "
//                 />

//                 <div
//                   className="
//                     relative
//                     z-10
//                     flex
//                     w-full
//                     flex-col
//                   ">
//                   <div className="flex items-center gap-3">
//                     <ShieldCheck
//                       size={17}
//                       strokeWidth={1.6}
//                       className="text-[#B8F23A]"
//                     />

//                     <p
//                       className="
//                         text-[7px]
//                         font-bold
//                         uppercase
//                         tracking-[0.18em]
//                         text-white/45
//                       ">
//                       Continuidad operativa
//                     </p>
//                   </div>

//                   <div className="mt-7 space-y-4">
//                     {[
//                       ["Disponibilidad energética", "Activo"],
//                       ["Gestión de demanda", "Activo"],
//                       ["Respuesta del sistema", "Activo"],
//                     ].map(([label, status]) => (
//                       <div
//                         key={label}
//                         className="
//                           flex
//                           items-center
//                           justify-between
//                           gap-4
//                           border-b
//                           border-white/[0.05]
//                           pb-4
//                           last:border-0
//                         ">
//                         <span
//                           className="
//                             text-[7px]
//                             uppercase
//                             tracking-[0.11em]
//                             text-white/28
//                           ">
//                           {label}
//                         </span>

//                         <span
//                           className="
//                             flex
//                             items-center
//                             gap-2
//                             text-[6px]
//                             font-bold
//                             uppercase
//                             tracking-[0.13em]
//                             text-[#B8F23A]
//                           ">
//                           <span className="relative flex h-1.5 w-1.5">
//                             <span
//                               className="
//                                 absolute
//                                 inset-0
//                                 animate-ping
//                                 rounded-full
//                                 bg-[#B8F23A]/40
//                               "
//                             />

//                             <span
//                               className="
//                                 relative
//                                 h-1.5
//                                 w-1.5
//                                 rounded-full
//                                 bg-[#B8F23A]
//                               "
//                             />
//                           </span>

//                           {status}
//                         </span>
//                       </div>
//                     ))}
//                   </div>

//                   <div
//                     className="
//                       mt-auto
//                       grid
//                       grid-cols-2
//                       gap-2
//                       border-t
//                       border-white/[0.06]
//                       pt-5
//                     ">
//                     <div
//                       className="
//                         rounded-[9px]
//                         border
//                         border-white/[0.05]
//                         bg-white/[0.025]
//                         p-3
//                       ">
//                       <p
//                         className="
//                           text-[6px]
//                           font-bold
//                           uppercase
//                           tracking-[0.13em]
//                           text-[#B8F23A]
//                         ">
//                         Resiliencia
//                       </p>

//                       <p
//                         className="
//                           mt-1
//                           text-[6px]
//                           uppercase
//                           tracking-[0.1em]
//                           text-white/22
//                         ">
//                         Operación energética
//                       </p>
//                     </div>

//                     <div
//                       className="
//                         rounded-[9px]
//                         border
//                         border-white/[0.05]
//                         bg-white/[0.025]
//                         p-3
//                       ">
//                       <p
//                         className="
//                           text-[6px]
//                           font-bold
//                           uppercase
//                           tracking-[0.13em]
//                           text-[#B8F23A]
//                         ">
//                         Respuesta
//                       </p>

//                       <p
//                         className="
//                           mt-1
//                           text-[6px]
//                           uppercase
//                           tracking-[0.1em]
//                           text-white/22
//                         ">
//                         Coordinación activa
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* =================================================
//                 SECOND ROW → EMS
//             ================================================= */}

//             <div
//               className="
//                 relative
//                 mx-auto
//                 h-12
//                 w-px
//                 bg-gradient-to-b
//                 from-[#B8F23A]/30
//                 to-[#B8F23A]
//               ">
//               <VerticalPulse delay={0.8} />
//             </div>

//             {/* =================================================
//                 EMS
//             ================================================= */}

//             <div
//               className="
//                 relative
//                 overflow-hidden
//                 rounded-[18px]
//                 border
//                 border-[#B8F23A]/25
//                 bg-[#F1F7E7]
//                 text-[#10372E]
//                 shadow-[0_22px_60px_rgba(0,0,0,.14)]
//               ">
//               <div
//                 className="
//                   pointer-events-none
//                   absolute
//                   inset-0
//                   opacity-[0.35]
//                   [background-image:linear-gradient(rgba(16,55,46,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(16,55,46,.055)_1px,transparent_1px)]
//                   [background-size:32px_32px]
//                 "
//               />

//               <span
//                 className="
//                   pointer-events-none
//                   absolute
//                   -right-3
//                   -top-9
//                   text-[150px]
//                   font-light
//                   leading-none
//                   tracking-[-0.09em]
//                   text-[#78A500]/[0.07]
//                 ">
//                 04
//               </span>

//               <div
//                 className="
//                   relative
//                   z-10
//                   grid
//                   gap-7
//                   p-6
//                   xl:grid-cols-[1.2fr_1fr]
//                   xl:items-center
//                   xl:p-7
//                 ">
//                 <div className="flex items-start gap-5">
//                   <span
//                     className="
//                       flex
//                       h-14
//                       w-14
//                       shrink-0
//                       items-center
//                       justify-center
//                       rounded-[13px]
//                       bg-[#10372E]
//                       text-[#B8F23A]
//                       shadow-[0_12px_28px_rgba(16,55,46,.15)]
//                     ">
//                     <Gauge size={22} strokeWidth={1.6} />
//                   </span>

//                   <div>
//                     <div
//                       className="
//                         flex
//                         flex-wrap
//                         items-center
//                         gap-3
//                       ">
//                       <p
//                         className="
//                           text-[7px]
//                           font-bold
//                           uppercase
//                           tracking-[0.2em]
//                           text-[#72A000]
//                         ">
//                         04 · Inteligencia
//                       </p>

//                       <span
//                         className="
//                           flex
//                           items-center
//                           gap-2
//                           rounded-full
//                           bg-[#10372E]/[0.06]
//                           px-3
//                           py-1.5
//                         ">
//                         <span className="h-1.5 w-1.5 rounded-full bg-[#83B500]" />

//                         <span
//                           className="
//                             text-[6px]
//                             font-bold
//                             uppercase
//                             tracking-[0.14em]
//                             text-[#10372E]/55
//                           ">
//                           Optimización activa
//                         </span>
//                       </span>
//                     </div>

//                     <h3
//                       className="
//                         mt-2
//                         text-[clamp(1.5rem,2.2vw,2.25rem)]
//                         font-medium
//                         leading-none
//                         tracking-[-0.05em]
//                       ">
//                       Energy Management System
//                     </h3>

//                     <p
//                       className="
//                         mt-4
//                         max-w-[620px]
//                         text-[10px]
//                         leading-[1.8]
//                         text-[#10372E]/50
//                       ">
//                       El EMS observa generación, almacenamiento y demanda para
//                       coordinar los recursos energéticos y definir cómo debe
//                       responder el sistema en cada momento.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-3 gap-2">
//                   {[
//                     {
//                       icon: Activity,
//                       title: "Monitorear",
//                       text: "Visibilidad",
//                     },
//                     {
//                       icon: Network,
//                       title: "Coordinar",
//                       text: "Recursos",
//                     },
//                     {
//                       icon: Sparkles,
//                       title: "Optimizar",
//                       text: "Operación",
//                     },
//                   ].map((item) => {
//                     const Icon = item.icon;

//                     return (
//                       <div
//                         key={item.title}
//                         className="
//                           rounded-[11px]
//                           border
//                           border-[#10372E]/[0.07]
//                           bg-white/50
//                           p-4
//                         ">
//                         <Icon
//                           size={15}
//                           strokeWidth={1.6}
//                           className="text-[#79A800]"
//                         />

//                         <p
//                           className="
//                             mt-3
//                             text-[8px]
//                             font-bold
//                             uppercase
//                             tracking-[0.11em]
//                           ">
//                           {item.title}
//                         </p>

//                         <p
//                           className="
//                             mt-1
//                             text-[6px]
//                             uppercase
//                             tracking-[0.12em]
//                             text-[#10372E]/35
//                           ">
//                           {item.text}
//                         </p>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* =================================================
//               MOBILE / TABLET
//           ================================================= */}

//           <div
//             className="
//               relative
//               z-10
//               px-5
//               py-7
//               lg:hidden
//             ">
//             <EnergyModule data={modules.solar} />

//             <div
//               className="
//                 relative
//                 mx-auto
//                 h-10
//                 w-px
//                 bg-[#B8F23A]/40
//               ">
//               <VerticalPulse />
//             </div>

//             <div className="flex justify-center">
//               <div
//                 className="
//                   relative
//                   flex
//                   h-24
//                   w-24
//                   items-center
//                   justify-center
//                   rounded-full
//                   border
//                   border-[#B8F23A]/30
//                   bg-[#10372E]
//                 ">
//                 <motion.span
//                   animate={{ rotate: 360 }}
//                   transition={{
//                     duration: 18,
//                     repeat: Infinity,
//                     ease: "linear",
//                   }}
//                   className="
//                     absolute
//                     inset-2
//                     rounded-full
//                     border
//                     border-dashed
//                     border-[#B8F23A]/20
//                   "
//                 />

//                 <div className="relative z-10 text-center">
//                   <Zap
//                     size={19}
//                     strokeWidth={1.7}
//                     className="mx-auto text-[#B8F23A]"
//                   />

//                   <p
//                     className="
//                       mt-2
//                       text-[6px]
//                       font-bold
//                       uppercase
//                       tracking-[0.14em]
//                       text-[#B8F23A]
//                     ">
//                     Energy Hub
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div
//               className="
//                 relative
//                 mx-auto
//                 h-10
//                 w-px
//                 bg-[#B8F23A]/40
//               ">
//               <VerticalPulse delay={0.4} />
//             </div>

//             <div className="grid gap-4 sm:grid-cols-2">
//               <EnergyModule data={modules.bess} />
//               <EnergyModule data={modules.operation} />
//             </div>

//             <div
//               className="
//                 relative
//                 mx-auto
//                 h-10
//                 w-px
//                 bg-[#B8F23A]/40
//               ">
//               <VerticalPulse delay={0.7} />
//             </div>

//             <div
//               className="
//                 relative
//                 overflow-hidden
//                 rounded-[16px]
//                 border
//                 border-[#B8F23A]/25
//                 bg-[#F1F7E7]
//                 p-5
//                 text-[#10372E]
//               ">
//               <div className="flex items-start gap-4">
//                 <span
//                   className="
//                     flex
//                     h-12
//                     w-12
//                     shrink-0
//                     items-center
//                     justify-center
//                     rounded-[11px]
//                     bg-[#10372E]
//                     text-[#B8F23A]
//                   ">
//                   <Gauge size={19} strokeWidth={1.6} />
//                 </span>

//                 <div>
//                   <p
//                     className="
//                       text-[7px]
//                       font-bold
//                       uppercase
//                       tracking-[0.17em]
//                       text-[#70A000]
//                     ">
//                     04 · Inteligencia
//                   </p>

//                   <h3
//                     className="
//                       mt-2
//                       text-[21px]
//                       font-medium
//                       leading-none
//                       tracking-[-0.04em]
//                     ">
//                     Energy Management System
//                   </h3>

//                   <p
//                     className="
//                       mt-3
//                       text-[9px]
//                       leading-5
//                       text-[#10372E]/50
//                     ">
//                     Coordina generación, almacenamiento y demanda para optimizar
//                     el comportamiento energético de la operación.
//                   </p>
//                 </div>
//               </div>

//               <div
//                 className="
//                   mt-5
//                   grid
//                   grid-cols-3
//                   gap-2
//                   border-t
//                   border-[#10372E]/[0.07]
//                   pt-4
//                 ">
//                 {["Monitorear", "Coordinar", "Optimizar"].map((item) => (
//                   <span
//                     key={item}
//                     className="
//                       text-center
//                       text-[6px]
//                       font-bold
//                       uppercase
//                       tracking-[0.11em]
//                       text-[#10372E]/45
//                     ">
//                     {item}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* =================================================
//               BOARD FOOTER
//           ================================================= */}

//           <div
//             className="
//               relative
//               z-20
//               grid
//               border-t
//               border-white/[0.07]

//               sm:grid-cols-2
//               lg:grid-cols-4
//             ">
//             {footerSteps.map((item, index) => {
//               const Icon = item.icon;

//               return (
//                 <div
//                   key={item.number}
//                   className="
//                     group
//                     relative
//                     flex
//                     items-center
//                     gap-4
//                     border-b
//                     border-white/[0.06]
//                     px-5
//                     py-5
//                     transition-colors
//                     duration-300

//                     hover:bg-white/[0.025]

//                     sm:border-r
//                     lg:border-b-0
//                     lg:last:border-r-0
//                   ">
//                   <span
//                     className="
//                       flex
//                       h-9
//                       w-9
//                       shrink-0
//                       items-center
//                       justify-center
//                       rounded-[9px]
//                       bg-[#B8F23A]/10
//                       text-[#B8F23A]
//                     ">
//                     <Icon size={15} strokeWidth={1.6} />
//                   </span>

//                   <div>
//                     <div className="flex items-center gap-2">
//                       <span
//                         className="
//                           text-[6px]
//                           font-bold
//                           tracking-[0.14em]
//                           text-[#B8F23A]
//                         ">
//                         {item.number}
//                       </span>

//                       <p
//                         className="
//                           text-[8px]
//                           font-bold
//                           uppercase
//                           tracking-[0.14em]
//                           text-white/70
//                         ">
//                         {item.title}
//                       </p>
//                     </div>

//                     <p
//                       className="
//                         mt-1
//                         text-[6px]
//                         uppercase
//                         tracking-[0.12em]
//                         text-white/25
//                       ">
//                       {item.text}
//                     </p>
//                   </div>

//                   {index < footerSteps.length - 1 && (
//                     <ArrowRight
//                       size={11}
//                       strokeWidth={1.5}
//                       className="
//                         absolute
//                         right-4
//                         hidden
//                         text-[#B8F23A]/25
//                         lg:block
//                       "
//                     />
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         </motion.div>

//         {/* ===================================================
//             BOTTOM
//         =================================================== */}

//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{
//             duration: 0.8,
//             delay: 0.2,
//           }}
//           className="
//             mt-7
//             flex
//             flex-col
//             gap-5
//             sm:flex-row
//             sm:items-center
//             sm:justify-between
//           ">
//           <div className="flex items-center gap-3">
//             <Leaf size={13} strokeWidth={1.5} className="text-[#B8F23A]" />

//             <span
//               className="
//                 text-[7px]
//                 font-semibold
//                 uppercase
//                 tracking-[0.17em]
//                 text-white/30
//               ">
//               Un sistema. Múltiples flujos. Una sola estrategia energética.
//             </span>
//           </div>

//           <div className="flex items-center gap-3">
//             <span className="h-px w-10 bg-[#B8F23A]/40" />

//             <span
//               className="
//                 text-[7px]
//                 font-bold
//                 uppercase
//                 tracking-[0.19em]
//                 text-[#B8F23A]
//               ">
//               GRUNER Energy
//             </span>
//           </div>
//         </motion.div>
//       </div>

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
//           via-[#B8F23A]/30
//           to-transparent
//         "
//       />
//     </section>
//   );
// }

// export default SolarSystemSection;

import { motion } from "motion/react";
import {
  Activity,
  ArrowRight,
  BatteryCharging,
  Building2,
  CircleGauge,
  Gauge,
  Leaf,
  Network,
  Radio,
  ShieldCheck,
  SolarPanel,
  Sparkles,
  Sun,
  Zap,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const modules = {
  solar: {
    number: "01",
    eyebrow: "Generación",
    title: "Solar",
    subtitle: "Producción fotovoltaica",
    description:
      "Generación solar fotovoltaica integrada directamente a la infraestructura energética de la operación.",
    icon: SolarPanel,
    tags: ["Autoconsumo", "Fuente renovable", "Generación local"],
  },

  bess: {
    number: "02",
    eyebrow: "Almacenamiento",
    title: "BESS",
    subtitle: "Flexibilidad energética",
    description:
      "Almacenamos energía para utilizarla estratégicamente cuando la operación realmente la necesita.",
    icon: BatteryCharging,
    tags: ["Carga", "Descarga", "Respaldo"],
  },

  operation: {
    number: "03",
    eyebrow: "Demanda",
    title: "Operación",
    subtitle: "Consumo energético",
    description:
      "La energía disponible se distribuye hacia procesos, infraestructura y cargas críticas.",
    icon: Building2,
    tags: ["Demanda", "Cargas críticas", "Continuidad"],
  },
};

const footerSteps = [
  {
    number: "01",
    title: "Generar",
    text: "Energía renovable",
    icon: Sun,
  },
  {
    number: "02",
    title: "Almacenar",
    text: "Flexibilidad",
    icon: BatteryCharging,
  },
  {
    number: "03",
    title: "Distribuir",
    text: "Demanda",
    icon: Network,
  },
  {
    number: "04",
    title: "Optimizar",
    text: "Inteligencia",
    icon: Gauge,
  },
];

/* =========================================================
   ENERGY PULSES
========================================================= */

function HorizontalPulse({ delay = 0, duration = 2.7, reverse = false }) {
  return (
    <motion.span
      animate={{
        left: reverse ? ["105%", "-5%"] : ["-5%", "105%"],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatDelay: 0.5,
        ease: "linear",
      }}
      className="
        absolute
        top-1/2
        z-20
        h-2
        w-2
        -translate-y-1/2
        rounded-full
        bg-[#B8F23A]
        shadow-[0_0_14px_rgba(184,242,58,.95)]
      "
    />
  );
}

function VerticalPulse({ delay = 0, duration = 2.5, reverse = false }) {
  return (
    <motion.span
      animate={{
        top: reverse ? ["105%", "-5%"] : ["-5%", "105%"],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatDelay: 0.45,
        ease: "linear",
      }}
      className="
        absolute
        left-1/2
        z-20
        h-2
        w-2
        -translate-x-1/2
        rounded-full
        bg-[#B8F23A]
        shadow-[0_0_14px_rgba(184,242,58,.95)]
      "
    />
  );
}

/* =========================================================
   MODULE CARD
========================================================= */

function EnergyModule({ data, className = "" }) {
  const Icon = data.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`
        group
        relative
        h-full
        overflow-hidden
        rounded-[16px]
        border
        border-white/[0.09]
        bg-white/[0.045]
        p-5
        backdrop-blur-sm
        transition-all
        duration-500

        hover:-translate-y-1
        hover:border-[#B8F23A]/35
        hover:bg-white/[0.065]

        sm:p-6
        ${className}
      `}>
      <div
        className="
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-40
          w-40
          rounded-full
          bg-[#B8F23A]/[0.05]
          blur-[45px]
          transition-all
          duration-500

          group-hover:bg-[#B8F23A]/[0.09]
        "
      />

      <span
        className="
          pointer-events-none
          absolute
          -right-1
          -top-5
          text-[105px]
          font-light
          leading-none
          tracking-[-0.09em]
          text-[#B8F23A]/[0.045]
        ">
        {data.number}
      </span>

      <div
        className="
          relative
          z-10
          flex
          h-full
          flex-col
        ">
        <div className="flex items-start justify-between gap-5">
          <span
            className="
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-[11px]
              border
              border-[#B8F23A]/15
              bg-[#B8F23A]/10
              text-[#B8F23A]
              transition-all
              duration-300

              group-hover:border-[#B8F23A]
              group-hover:bg-[#B8F23A]
              group-hover:text-[#10372E]
            ">
            <Icon size={20} strokeWidth={1.6} />
          </span>

          <div
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-white/[0.06]
              bg-white/[0.035]
              px-3
              py-1.5
            ">
            <span className="relative flex h-1.5 w-1.5">
              <span
                className="
                  absolute
                  inset-0
                  animate-ping
                  rounded-full
                  bg-[#B8F23A]/50
                "
              />

              <span
                className="
                  relative
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-[#B8F23A]
                "
              />
            </span>

            <span
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-white/35
              ">
              Activo
            </span>
          </div>
        </div>

        <div className="mt-5">
          <p
            className="
              text-[11px]
              font-bold
              uppercase
              tracking-[0.2em]
              text-[#B8F23A]
            ">
            {data.number} · {data.eyebrow}
          </p>

          <div
            className="
              mt-2
              flex
              flex-wrap
              items-end
              gap-x-3
              gap-y-1
            ">
            <h3
              className="
                text-[25px]
                font-medium
                leading-none
                tracking-[-0.045em]
                text-white
              ">
              {data.title}
            </h3>

            <span
              className="
                text-[11px]
                font-medium
                uppercase
                tracking-[0.14em]
                text-white/25
              ">
              {data.subtitle}
            </span>
          </div>

          <p
            className="
              mt-4
              max-w-[390px]
              text-[13px]
              leading-[1.8]
              text-white/40
            ">
            {data.description}
          </p>
        </div>

        <div
          className="
            mt-auto
            flex
            flex-wrap
            gap-2
            border-t
            border-white/[0.06]
            pt-4
          ">
          {data.tags.map((tag) => (
            <span
              key={tag}
              className="
                rounded-full
                border
                border-white/[0.07]
                bg-white/[0.035]
                px-3
                py-1.5
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.13em]
                text-white/35
              ">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

function SolarSystemSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#10372E]
        py-16
        text-white
        lg:py-20
        xl:py-24
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
          [background-image:linear-gradient(rgba(255,255,255,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.055)_1px,transparent_1px)]
          [background-size:72px_72px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_52%_52%,rgba(157,216,39,.12),transparent_35%)]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[180px]
          -top-[230px]
          h-[600px]
          w-[600px]
          rounded-full
          border
          border-[#9DD827]/10
        ">
        <div
          className="
            absolute
            inset-[13%]
            rounded-full
            border
            border-white/[0.04]
          "
        />

        <div
          className="
            absolute
            inset-[29%]
            rounded-full
            border
            border-[#9DD827]/10
          "
        />
      </div>

      <div
        className="
          pointer-events-none
          absolute
          -bottom-[220px]
          -left-[170px]
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#9DD827]/[0.045]
          blur-[100px]
        "
      />

      <span
        className="
          pointer-events-none
          absolute
          -right-8
          bottom-[-28px]
          hidden
          select-none
          text-[clamp(10rem,19vw,22rem)]
          font-semibold
          leading-none
          tracking-[-0.09em]
          text-white/[0.018]
          xl:block
        ">
        FLOW
      </span>

      <div
        className="
          pointer-events-none
          absolute
          left-0
          right-0
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-[#B8F23A]/60
          to-transparent
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
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            grid
            gap-8
            lg:grid-cols-[1fr_420px]
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
                  text-[#10372E]
                  shadow-[0_0_30px_rgba(184,242,58,.12)]
                ">
                <Network size={17} strokeWidth={1.7} />
              </span>

              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#B8F23A]" />

                <p
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.22em]
                    text-[#B8F23A]
                  ">
                  Sistema energético integrado
                </p>
              </div>
            </div>

            <h2
              className="
                mt-6
                max-w-[900px]
                text-[clamp(2.7rem,4.4vw,5.2rem)]
                font-normal
                leading-[0.93]
                tracking-[-0.06em]
              ">
              La energía no solo
              <span className="block">se genera.</span>
              <span className="block text-[#B8F23A]">Se dirige.</span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p
              className="
                max-w-[420px]
                text-[13px]
                leading-7
                text-white/50
              ">
              Generación solar, almacenamiento BESS, demanda y gestión
              energética operando como una sola infraestructura para aprovechar
              mejor cada flujo de energía.
            </p>

            <div
              className="
                mt-5
                flex
                flex-wrap
                items-center
                gap-x-5
                gap-y-3
              ">
              <div className="flex items-center gap-3">
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

                <span
                  className="
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.17em]
                    text-white/35
                  ">
                  Flujo energético inteligente
                </span>
              </div>

              <span
                className="
                  hidden
                  h-4
                  w-px
                  bg-white/10
                  sm:block
                "
              />

              <div className="flex items-center gap-2">
                <Radio size={11} strokeWidth={1.6} className="text-[#B8F23A]" />

                <span
                  className="
                    text-[11px]
                    uppercase
                    tracking-[0.15em]
                    text-white/25
                  ">
                  Monitoreo continuo
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ===================================================
            ENERGY MANAGEMENT BOARD
        =================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 0.8,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mt-12
            overflow-hidden
            rounded-[20px]
            border
            border-white/[0.08]
            bg-[#0C3028]/85
            shadow-[0_30px_90px_rgba(0,0,0,.18)]
            backdrop-blur-xl
            lg:mt-14
          ">
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-[0.13]
              [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)]
              [background-size:36px_36px]
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-[45%]
              h-[420px]
              w-[800px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#9DD827]/[0.055]
              blur-[100px]
            "
          />

          {/* =================================================
              BOARD HEADER
          ================================================= */}

          <div
            className="
              relative
              z-20
              flex
              flex-col
              gap-5
              border-b
              border-white/[0.07]
              px-5
              py-5

              sm:flex-row
              sm:items-center
              sm:justify-between
              sm:px-7

              lg:px-8
            ">
            <div className="flex items-center gap-4">
              <span
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-[9px]
                  border
                  border-[#B8F23A]/20
                  bg-[#B8F23A]/10
                  text-[#B8F23A]
                ">
                <Activity size={16} strokeWidth={1.7} />
              </span>

              <div>
                <div className="flex items-center gap-3">
                  <p
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-[#B8F23A]
                    ">
                    Energy Flow
                  </p>

                  <span
                    className="
                      rounded-full
                      bg-[#B8F23A]/10
                      px-2.5
                      py-1
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-[#B8F23A]
                    ">
                    Live system
                  </span>
                </div>

                <p
                  className="
                    mt-1
                    text-[11px]
                    uppercase
                    tracking-[0.15em]
                    text-white/25
                  ">
                  Generación · almacenamiento · demanda · inteligencia
                </p>
              </div>
            </div>

            <div
              className="
                flex
                flex-wrap
                items-center
                gap-4
                sm:justify-end
              ">
              <div className="flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5">
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
                      h-1.5
                      w-1.5
                      rounded-full
                      bg-[#B8F23A]
                    "
                  />
                </span>

                <span
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-white/40
                  ">
                  Sistema activo
                </span>
              </div>

              <span className="h-4 w-px bg-white/10" />

              <span
                className="
                  text-[11px]
                  font-semibold
                  tracking-[0.14em]
                  text-white/25
                ">
                GRN / EN-01
              </span>
            </div>
          </div>

          {/* =================================================
              DESKTOP ENERGY MAP
          ================================================= */}

          <div
            className="
              relative
              z-10
              hidden
              px-7
              py-8
              lg:block
              xl:px-9
            ">
            {/* =================================================
                FIRST ROW
            ================================================= */}

            <div
              className="
                grid
                grid-cols-[1fr_120px_220px_120px_1fr]
                items-stretch
              ">
              <EnergyModule data={modules.solar} />

              {/* SOLAR → HUB */}

              <div className="relative flex items-center">
                <div
                  className="
                    relative
                    h-px
                    w-full
                    bg-gradient-to-r
                    from-[#B8F23A]/20
                    via-[#B8F23A]/75
                    to-[#B8F23A]
                  ">
                  <HorizontalPulse delay={0} />
                  <HorizontalPulse delay={1.35} />

                  <ArrowRight
                    size={12}
                    strokeWidth={1.5}
                    className="
                      absolute
                      -right-1.5
                      top-1/2
                      -translate-y-1/2
                      text-[#B8F23A]
                    "
                  />
                </div>
              </div>

              {/* HUB */}

              <div className="relative flex items-center justify-center">
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 0 rgba(184,242,58,0)",
                      "0 0 55px rgba(184,242,58,.15)",
                      "0 0 0 rgba(184,242,58,0)",
                    ],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                  className="
                    relative
                    flex
                    h-[172px]
                    w-[172px]
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#B8F23A]/30
                    bg-[#10372E]
                  ">
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 22,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="
                      absolute
                      inset-[10px]
                      rounded-full
                      border
                      border-dashed
                      border-[#B8F23A]/20
                    "
                  />

                  <motion.span
                    animate={{ rotate: -360 }}
                    transition={{
                      duration: 16,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="
                      absolute
                      inset-[25px]
                      rounded-full
                      border
                      border-dashed
                      border-white/[0.07]
                    "
                  />

                  <span
                    className="
                      absolute
                      left-1/2
                      top-[8px]
                      h-2
                      w-2
                      -translate-x-1/2
                      rounded-full
                      bg-[#B8F23A]
                      shadow-[0_0_12px_rgba(184,242,58,.8)]
                    "
                  />

                  <span
                    className="
                      absolute
                      bottom-[8px]
                      left-1/2
                      h-2
                      w-2
                      -translate-x-1/2
                      rounded-full
                      bg-[#B8F23A]
                    "
                  />

                  <span
                    className="
                      absolute
                      left-[8px]
                      top-1/2
                      h-2
                      w-2
                      -translate-y-1/2
                      rounded-full
                      bg-[#B8F23A]
                    "
                  />

                  <span
                    className="
                      absolute
                      right-[8px]
                      top-1/2
                      h-2
                      w-2
                      -translate-y-1/2
                      rounded-full
                      bg-[#B8F23A]
                    "
                  />

                  <div className="relative z-10 text-center">
                    <span
                      className="
                        mx-auto
                        flex
                        h-12
                        w-12
                        items-center
                        justify-center
                        rounded-full
                        bg-[#B8F23A]
                        text-[#10372E]
                      ">
                      <Zap size={20} strokeWidth={1.8} />
                    </span>

                    <p
                      className="
                        mt-3
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        text-[#B8F23A]
                      ">
                      Energy Hub
                    </p>

                    <p
                      className="
                        mt-1
                        text-[11px]
                        uppercase
                        tracking-[0.13em]
                        text-white/25
                      ">
                      Distribución
                    </p>
                  </div>
                </motion.div>

                <div
                  className="
                    absolute
                    -top-4
                    left-1/2
                    -translate-x-1/2
                    whitespace-nowrap
                    rounded-full
                    border
                    border-white/[0.06]
                    bg-[#0C3028]
                    px-3
                    py-1.5
                  ">
                  <span
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.16em]
                      text-white/30
                    ">
                    Flujo bidireccional
                  </span>
                </div>
              </div>

              {/* HUB → OPERATION */}

              <div className="relative flex items-center">
                <div
                  className="
                    relative
                    h-px
                    w-full
                    bg-gradient-to-r
                    from-[#B8F23A]
                    via-[#B8F23A]/75
                    to-[#B8F23A]/20
                  ">
                  <HorizontalPulse delay={0.5} />
                  <HorizontalPulse delay={1.85} />

                  <ArrowRight
                    size={12}
                    strokeWidth={1.5}
                    className="
                      absolute
                      -right-1.5
                      top-1/2
                      -translate-y-1/2
                      text-[#B8F23A]
                    "
                  />
                </div>
              </div>

              <EnergyModule data={modules.operation} />
            </div>

            {/* =================================================
                HUB → SECOND ROW
            ================================================= */}

            <div
              className="
                relative
                mx-auto
                h-12
                w-px
                bg-gradient-to-b
                from-[#B8F23A]
                to-[#B8F23A]/35
              ">
              <VerticalPulse delay={0.3} />
            </div>

            {/* =================================================
                SECOND ROW · SAME SIZE
            ================================================= */}

            <div
              className="
                grid
                grid-cols-3
                items-stretch
                gap-5
              ">
              {/* =============================================
                  STRATEGY
              ============================================= */}

              <div
                className="
                  relative
                  flex
                  min-h-[310px]
                  overflow-hidden
                  rounded-[16px]
                  border
                  border-white/[0.07]
                  bg-white/[0.025]
                  p-6
                ">
                <div
                  className="
                    absolute
                    right-0
                    top-0
                    h-36
                    w-36
                    bg-[radial-gradient(circle_at_top_right,rgba(184,242,58,.10),transparent_65%)]
                  "
                />

                <div
                  className="
                    relative
                    z-10
                    flex
                    w-full
                    flex-col
                  ">
                  <div className="flex items-center gap-3">
                    <CircleGauge
                      size={17}
                      strokeWidth={1.6}
                      className="text-[#B8F23A]"
                    />

                    <p
                      className="
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        text-white/45
                      ">
                      Estrategia energética
                    </p>
                  </div>

                  <div
                    className="
                      mt-7
                      grid
                      grid-cols-3
                      divide-x
                      divide-white/[0.06]
                    ">
                    {[
                      ["PV", "Generar"],
                      ["BESS", "Almacenar"],
                      ["LOAD", "Consumir"],
                    ].map(([code, label]) => (
                      <div
                        key={code}
                        className="
                          px-4
                          first:pl-0
                          last:pr-0
                        ">
                        <p
                          className="
                            text-[14px]
                            font-medium
                            tracking-[-0.02em]
                            text-[#B8F23A]
                          ">
                          {code}
                        </p>

                        <p
                          className="
                            mt-2
                            text-[11px]
                            uppercase
                            tracking-[0.13em]
                            text-white/25
                          ">
                          {label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <p
                    className="
                      mt-7
                      max-w-[420px]
                      text-[13px]
                      leading-6
                      text-white/30
                    ">
                    Cada recurso participa dentro de una estrategia común para
                    responder a las necesidades energéticas de la operación.
                  </p>

                  <div
                    className="
                      mt-auto
                      grid
                      grid-cols-3
                      gap-2
                      border-t
                      border-white/[0.06]
                      pt-5
                    ">
                    {["Generación", "Reserva", "Demanda"].map((item) => (
                      <div
                        key={item}
                        className="
                          rounded-[9px]
                          border
                          border-white/[0.05]
                          bg-white/[0.025]
                          px-3
                          py-3
                        ">
                        <span
                          className="
                            text-[11px]
                            font-semibold
                            uppercase
                            tracking-[0.12em]
                            text-white/25
                          ">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* =============================================
                  BESS · SAME SIZE
              ============================================= */}

              <EnergyModule data={modules.bess} className="min-h-[310px]" />

              {/* =============================================
                  CONTINUITY · SAME SIZE
              ============================================= */}

              <div
                className="
                  relative
                  flex
                  min-h-[310px]
                  overflow-hidden
                  rounded-[16px]
                  border
                  border-white/[0.07]
                  bg-white/[0.025]
                  p-6
                ">
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16
                    h-44
                    w-44
                    rounded-full
                    bg-[#B8F23A]/[0.035]
                    blur-[50px]
                  "
                />

                <div
                  className="
                    relative
                    z-10
                    flex
                    w-full
                    flex-col
                  ">
                  <div className="flex items-center gap-3">
                    <ShieldCheck
                      size={17}
                      strokeWidth={1.6}
                      className="text-[#B8F23A]"
                    />

                    <p
                      className="
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        text-white/45
                      ">
                      Continuidad operativa
                    </p>
                  </div>

                  <div className="mt-7 space-y-4">
                    {[
                      ["Disponibilidad energética", "Activo"],
                      ["Gestión de demanda", "Activo"],
                      ["Respuesta del sistema", "Activo"],
                    ].map(([label, status]) => (
                      <div
                        key={label}
                        className="
                          flex
                          items-center
                          justify-between
                          gap-4
                          border-b
                          border-white/[0.05]
                          pb-4
                          last:border-0
                        ">
                        <span
                          className="
                            text-[11px]
                            uppercase
                            tracking-[0.11em]
                            text-white/28
                          ">
                          {label}
                        </span>

                        <span
                          className="
                            flex
                            items-center
                            gap-2
                            text-[11px]
                            font-bold
                            uppercase
                            tracking-[0.13em]
                            text-[#B8F23A]
                          ">
                          <span className="relative flex h-1.5 w-1.5">
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
                                h-1.5
                                w-1.5
                                rounded-full
                                bg-[#B8F23A]
                              "
                            />
                          </span>

                          {status}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div
                    className="
                      mt-auto
                      grid
                      grid-cols-2
                      gap-2
                      border-t
                      border-white/[0.06]
                      pt-5
                    ">
                    <div
                      className="
                        rounded-[9px]
                        border
                        border-white/[0.05]
                        bg-white/[0.025]
                        p-3
                      ">
                      <p
                        className="
                          text-[11px]
                          font-bold
                          uppercase
                          tracking-[0.13em]
                          text-[#B8F23A]
                        ">
                        Resiliencia
                      </p>

                      <p
                        className="
                          mt-1
                          text-[11px]
                          uppercase
                          tracking-[0.1em]
                          text-white/22
                        ">
                        Operación energética
                      </p>
                    </div>

                    <div
                      className="
                        rounded-[9px]
                        border
                        border-white/[0.05]
                        bg-white/[0.025]
                        p-3
                      ">
                      <p
                        className="
                          text-[11px]
                          font-bold
                          uppercase
                          tracking-[0.13em]
                          text-[#B8F23A]
                        ">
                        Respuesta
                      </p>

                      <p
                        className="
                          mt-1
                          text-[11px]
                          uppercase
                          tracking-[0.1em]
                          text-white/22
                        ">
                        Coordinación activa
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                SECOND ROW → EMS
            ================================================= */}

            <div
              className="
                relative
                mx-auto
                h-12
                w-px
                bg-gradient-to-b
                from-[#B8F23A]/30
                to-[#B8F23A]
              ">
              <VerticalPulse delay={0.8} />
            </div>

            {/* =================================================
                EMS
            ================================================= */}

            <div
              className="
                relative
                overflow-hidden
                rounded-[18px]
                border
                border-[#B8F23A]/25
                bg-[#F1F7E7]
                text-[#10372E]
                shadow-[0_22px_60px_rgba(0,0,0,.14)]
              ">
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  opacity-[0.35]
                  [background-image:linear-gradient(rgba(16,55,46,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(16,55,46,.055)_1px,transparent_1px)]
                  [background-size:32px_32px]
                "
              />

              <span
                className="
                  pointer-events-none
                  absolute
                  -right-3
                  -top-9
                  text-[150px]
                  font-light
                  leading-none
                  tracking-[-0.09em]
                  text-[#78A500]/[0.07]
                ">
                04
              </span>

              <div
                className="
                  relative
                  z-10
                  grid
                  gap-7
                  p-6
                  xl:grid-cols-[1.2fr_1fr]
                  xl:items-center
                  xl:p-7
                ">
                <div className="flex items-start gap-5">
                  <span
                    className="
                      flex
                      h-14
                      w-14
                      shrink-0
                      items-center
                      justify-center
                      rounded-[13px]
                      bg-[#10372E]
                      text-[#B8F23A]
                      shadow-[0_12px_28px_rgba(16,55,46,.15)]
                    ">
                    <Gauge size={22} strokeWidth={1.6} />
                  </span>

                  <div>
                    <div
                      className="
                        flex
                        flex-wrap
                        items-center
                        gap-3
                      ">
                      <p
                        className="
                          text-[11px]
                          font-bold
                          uppercase
                          tracking-[0.2em]
                          text-[#72A000]
                        ">
                        04 · Inteligencia
                      </p>

                      <span
                        className="
                          flex
                          items-center
                          gap-2
                          rounded-full
                          bg-[#10372E]/[0.06]
                          px-3
                          py-1.5
                        ">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#83B500]" />

                        <span
                          className="
                            text-[11px]
                            font-bold
                            uppercase
                            tracking-[0.14em]
                            text-[#10372E]/55
                          ">
                          Optimización activa
                        </span>
                      </span>
                    </div>

                    <h3
                      className="
                        mt-2
                        text-[clamp(1.5rem,2.2vw,2.25rem)]
                        font-medium
                        leading-none
                        tracking-[-0.05em]
                      ">
                      Energy Management System
                    </h3>

                    <p
                      className="
                        mt-4
                        max-w-[620px]
                        text-[13px]
                        leading-[1.8]
                        text-[#10372E]/50
                      ">
                      El EMS observa generación, almacenamiento y demanda para
                      coordinar los recursos energéticos y definir cómo debe
                      responder el sistema en cada momento.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {[
                    {
                      icon: Activity,
                      title: "Monitorear",
                      text: "Visibilidad",
                    },
                    {
                      icon: Network,
                      title: "Coordinar",
                      text: "Recursos",
                    },
                    {
                      icon: Sparkles,
                      title: "Optimizar",
                      text: "Operación",
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="
                          rounded-[11px]
                          border
                          border-[#10372E]/[0.07]
                          bg-white/50
                          p-4
                        ">
                        <Icon
                          size={15}
                          strokeWidth={1.6}
                          className="text-[#79A800]"
                        />

                        <p
                          className="
                            mt-3
                            text-[11px]
                            font-bold
                            uppercase
                            tracking-[0.11em]
                          ">
                          {item.title}
                        </p>

                        <p
                          className="
                            mt-1
                            text-[11px]
                            uppercase
                            tracking-[0.12em]
                            text-[#10372E]/35
                          ">
                          {item.text}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              MOBILE / TABLET
          ================================================= */}

          <div
            className="
              relative
              z-10
              px-5
              py-7
              lg:hidden
            ">
            <EnergyModule data={modules.solar} />

            <div
              className="
                relative
                mx-auto
                h-10
                w-px
                bg-[#B8F23A]/40
              ">
              <VerticalPulse />
            </div>

            <div className="flex justify-center">
              <div
                className="
                  relative
                  flex
                  h-24
                  w-24
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#B8F23A]/30
                  bg-[#10372E]
                ">
                <motion.span
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    absolute
                    inset-2
                    rounded-full
                    border
                    border-dashed
                    border-[#B8F23A]/20
                  "
                />

                <div className="relative z-10 text-center">
                  <Zap
                    size={19}
                    strokeWidth={1.7}
                    className="mx-auto text-[#B8F23A]"
                  />

                  <p
                    className="
                      mt-2
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.14em]
                      text-[#B8F23A]
                    ">
                    Energy Hub
                  </p>
                </div>
              </div>
            </div>

            <div
              className="
                relative
                mx-auto
                h-10
                w-px
                bg-[#B8F23A]/40
              ">
              <VerticalPulse delay={0.4} />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <EnergyModule data={modules.bess} />
              <EnergyModule data={modules.operation} />
            </div>

            <div
              className="
                relative
                mx-auto
                h-10
                w-px
                bg-[#B8F23A]/40
              ">
              <VerticalPulse delay={0.7} />
            </div>

            <div
              className="
                relative
                overflow-hidden
                rounded-[16px]
                border
                border-[#B8F23A]/25
                bg-[#F1F7E7]
                p-5
                text-[#10372E]
              ">
              <div className="flex items-start gap-4">
                <span
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-[11px]
                    bg-[#10372E]
                    text-[#B8F23A]
                  ">
                  <Gauge size={19} strokeWidth={1.6} />
                </span>

                <div>
                  <p
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.17em]
                      text-[#70A000]
                    ">
                    04 · Inteligencia
                  </p>

                  <h3
                    className="
                      mt-2
                      text-[21px]
                      font-medium
                      leading-none
                      tracking-[-0.04em]
                    ">
                    Energy Management System
                  </h3>

                  <p
                    className="
                      mt-3
                      text-[12px]
                      leading-5
                      text-[#10372E]/50
                    ">
                    Coordina generación, almacenamiento y demanda para optimizar
                    el comportamiento energético de la operación.
                  </p>
                </div>
              </div>

              <div
                className="
                  mt-5
                  grid
                  grid-cols-3
                  gap-2
                  border-t
                  border-[#10372E]/[0.07]
                  pt-4
                ">
                {["Monitorear", "Coordinar", "Optimizar"].map((item) => (
                  <span
                    key={item}
                    className="
                      text-center
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.11em]
                      text-[#10372E]/45
                    ">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* =================================================
              BOARD FOOTER
          ================================================= */}

          <div
            className="
              relative
              z-20
              grid
              border-t
              border-white/[0.07]

              sm:grid-cols-2
              lg:grid-cols-4
            ">
            {footerSteps.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="
                    group
                    relative
                    flex
                    items-center
                    gap-4
                    border-b
                    border-white/[0.06]
                    px-5
                    py-5
                    transition-colors
                    duration-300

                    hover:bg-white/[0.025]

                    sm:border-r
                    lg:border-b-0
                    lg:last:border-r-0
                  ">
                  <span
                    className="
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-[9px]
                      bg-[#B8F23A]/10
                      text-[#B8F23A]
                    ">
                    <Icon size={15} strokeWidth={1.6} />
                  </span>

                  <div>
                    <div className="flex items-center gap-2">
                      <span
                        className="
                          text-[11px]
                          font-bold
                          tracking-[0.14em]
                          text-[#B8F23A]
                        ">
                        {item.number}
                      </span>

                      <p
                        className="
                          text-[11px]
                          font-bold
                          uppercase
                          tracking-[0.14em]
                          text-white/70
                        ">
                        {item.title}
                      </p>
                    </div>

                    <p
                      className="
                        mt-1
                        text-[11px]
                        uppercase
                        tracking-[0.12em]
                        text-white/25
                      ">
                      {item.text}
                    </p>
                  </div>

                  {index < footerSteps.length - 1 && (
                    <ArrowRight
                      size={11}
                      strokeWidth={1.5}
                      className="
                        absolute
                        right-4
                        hidden
                        text-[#B8F23A]/25
                        lg:block
                      "
                    />
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* ===================================================
            BOTTOM
        =================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="
            mt-7
            flex
            flex-col
            gap-5
            sm:flex-row
            sm:items-center
            sm:justify-between
          ">
          <div className="flex items-center gap-3">
            <Leaf size={13} strokeWidth={1.5} className="text-[#B8F23A]" />

            <span
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.17em]
                text-white/30
              ">
              Un sistema. Múltiples flujos. Una sola estrategia energética.
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#B8F23A]/40" />

            <span
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.19em]
                text-[#B8F23A]
              ">
              GRUNER Energy
            </span>
          </div>
        </motion.div>
      </div>

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
          via-[#B8F23A]/30
          to-transparent
        "
      />
    </section>
  );
}

export default SolarSystemSection;
