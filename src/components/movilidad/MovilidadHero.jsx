// import { motion } from "motion/react";
// import {
//   ArrowDownRight,
//   ArrowUpRight,
//   BatteryCharging,
//   CarFront,
//   Gauge,
//   MapPin,
//   PlugZap,
//   RadioTower,
//   Zap,
// } from "lucide-react";

// function MovilidadHero() {
//   const handleScroll = () => {
//     document
//       .getElementById("movilidad-capabilities")
//       ?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <section
//       className="
//         relative
//         overflow-hidden
//         bg-[#F4F7F0]
//         pt-[105px]
//         text-[#143E33]
//         lg:pt-[115px]
//       ">
//       {/* =====================================================
//           BACKGROUND
//       ===================================================== */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           inset-0
//           opacity-[0.35]
//           [background-image:linear-gradient(rgba(20,62,51,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(20,62,51,.04)_1px,transparent_1px)]
//           [background-size:72px_72px]
//         "
//       />

//       <div
//         className="
//           pointer-events-none
//           absolute
//           right-[-12%]
//           top-[6%]
//           h-[620px]
//           w-[620px]
//           rounded-full
//           bg-[#9DD827]/12
//           blur-[110px]
//         "
//       />

//       <div
//         className="
//           pointer-events-none
//           absolute
//           -left-[180px]
//           bottom-[-220px]
//           h-[500px]
//           w-[500px]
//           rounded-full
//           bg-[#143E33]/[0.035]
//           blur-[110px]
//         "
//       />

//       {/* GIANT TYPE */}

//       <span
//         className="
//           pointer-events-none
//           absolute
//           -right-4
//           top-[110px]
//           hidden
//           select-none
//           text-[clamp(10rem,18vw,20rem)]
//           font-semibold
//           leading-none
//           tracking-[-0.09em]
//           text-[#143E33]/[0.018]
//           2xl:block
//         ">
//         MOVE
//       </span>

//       {/* =====================================================
//           ORBITS
//       ===================================================== */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           right-[-7vw]
//           top-[4%]
//           hidden
//           aspect-square
//           w-[52vw]
//           rounded-full
//           border
//           border-[#7FAE00]/10
//           xl:block
//         ">
//         <div
//           className="
//             absolute
//             inset-[11%]
//             rounded-full
//             border
//             border-[#143E33]/[0.05]
//           "
//         />

//         <div
//           className="
//             absolute
//             inset-[25%]
//             rounded-full
//             border
//             border-[#9DD827]/10
//           "
//         />
//       </div>

//       {/* =====================================================
//           MAIN CONTAINER
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
//             pb-16

//             lg:grid-cols-[.86fr_1.14fr]
//             lg:items-center
//             lg:gap-12

//             xl:grid-cols-[.8fr_1.2fr]
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
//               py-8
//               lg:py-10
//             ">
//             {/* EYEBROW */}

//             <div className="flex items-center gap-4">
//               <span
//                 className="
//                   flex
//                   h-11
//                   w-11
//                   items-center
//                   justify-center
//                   rounded-full
//                   bg-[#9DD827]
//                   text-[#143E33]
//                   shadow-[0_10px_28px_rgba(157,216,39,.17)]
//                 ">
//                 <PlugZap size={18} strokeWidth={1.6} />
//               </span>

//               <div>
//                 <div className="flex items-center gap-3">
//                   <span className="h-px w-8 bg-[#83B500]" />

//                   <p
//                     className="
//                       text-[9px]
//                       font-bold
//                       uppercase
//                       tracking-[0.2em]
//                       text-[#77A500]
//                     ">
//                     Movilidad Eléctrica
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
//                   Infraestructura de carga · Gestión energética
//                 </p>
//               </div>
//             </div>

//             {/* TITLE */}

//             <h1
//               className="
//                 mt-9
//                 max-w-[760px]
//                 text-[clamp(3.5rem,5.6vw,6.8rem)]
//                 font-normal
//                 leading-[0.87]
//                 tracking-[-0.07em]
//               ">
//               La movilidad
//               <span className="block">eléctrica necesita</span>
//               <span className="block text-[#84B500]">
//                 energía que responda.
//               </span>
//             </h1>

//             {/* DESCRIPTION */}

//             <div
//               className="
//                 mt-8
//                 grid
//                 max-w-[670px]
//                 grid-cols-[3px_1fr]
//                 gap-5
//               ">
//               <span
//                 className="
//                   min-h-[75px]
//                   w-[3px]
//                   rounded-full
//                   bg-[#9DD827]
//                 "
//               />

//               <p
//                 className="
//                   text-[15px]
//                   leading-7
//                   text-[#143E33]/60
//                   sm:text-[16px]
//                   sm:leading-8
//                 ">
//                 Diseñamos infraestructura de carga rápida para vehículos
//                 eléctricos integrando red, almacenamiento y gestión energética
//                 en una sola solución.
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

//             {/* MICRO DATA */}

//             <div
//               className="
//                 mt-10
//                 grid
//                 max-w-[690px]
//                 grid-cols-3
//                 divide-x
//                 divide-[#143E33]/[0.08]
//                 border-t
//                 border-[#143E33]/[0.08]
//                 pt-5
//               ">
//               {[
//                 ["DCFC", "Carga rápida"],
//                 ["600 kW", "Alta potencia"],
//                 ["24/7", "Infraestructura"],
//               ].map(([value, label]) => (
//                 <div
//                   key={value}
//                   className="
//                     px-4
//                     first:pl-0
//                   ">
//                   <p
//                     className="
//                       text-[13px]
//                       font-medium
//                       tracking-[-0.025em]
//                       text-[#78A500]
//                     ">
//                     {value}
//                   </p>

//                   <p
//                     className="
//                       mt-1
//                       text-[6px]
//                       font-semibold
//                       uppercase
//                       tracking-[0.13em]
//                       text-[#143E33]/30
//                     ">
//                     {label}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </motion.div>

//           {/* =================================================
//               RIGHT EXPERIENCE
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
//               min-h-[520px]
//               sm:min-h-[590px]
//               lg:min-h-[630px]
//               xl:min-h-[660px]
//             ">
//             {/* =================================================
//                 MAIN DARK PANEL
//             ================================================= */}

//             <div
//               className="
//                 absolute
//                 inset-0
//                 overflow-hidden
//                 rounded-[18px]
//                 bg-[#10372E]
//                 shadow-[0_28px_70px_rgba(20,62,51,.14)]
//               ">
//               {/* grid */}

//               <div
//                 className="
//                   absolute
//                   inset-0
//                   opacity-[0.15]
//                   [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)]
//                   [background-size:42px_42px]
//                 "
//               />

//               {/* glow */}

//               <div
//                 className="
//                   absolute
//                   -right-[120px]
//                   -top-[100px]
//                   h-[380px]
//                   w-[380px]
//                   rounded-full
//                   bg-[#9DD827]/15
//                   blur-[90px]
//                 "
//               />

//               {/* top */}

//               <div
//                 className="
//                   absolute
//                   left-6
//                   right-6
//                   top-6
//                   flex
//                   items-center
//                   justify-between
//                   gap-5
//                   sm:left-8
//                   sm:right-8
//                   sm:top-8
//                 ">
//                 <div className="flex items-center gap-3">
//                   <span className="relative flex h-2.5 w-2.5">
//                     <span
//                       className="
//                         absolute
//                         inset-0
//                         animate-ping
//                         rounded-full
//                         bg-[#B8F23A]/40
//                       "
//                     />

//                     <span
//                       className="
//                         relative
//                         h-2.5
//                         w-2.5
//                         rounded-full
//                         bg-[#B8F23A]
//                       "
//                     />
//                   </span>

//                   <span
//                     className="
//                       text-[7px]
//                       font-bold
//                       uppercase
//                       tracking-[0.18em]
//                       text-[#B8F23A]
//                     ">
//                     Charging Network
//                   </span>
//                 </div>

//                 <span
//                   className="
//                     rounded-full
//                     border
//                     border-white/10
//                     bg-white/[0.04]
//                     px-4
//                     py-2
//                     text-[6px]
//                     font-bold
//                     uppercase
//                     tracking-[0.14em]
//                     text-white/35
//                   ">
//                   System Online
//                 </span>
//               </div>

//               {/* =================================================
//                   CHARGING CORE
//               ================================================= */}

//               <div
//                 className="
//                   absolute
//                   left-1/2
//                   top-[43%]
//                   flex
//                   h-[235px]
//                   w-[235px]
//                   -translate-x-1/2
//                   -translate-y-1/2
//                   items-center
//                   justify-center
//                   rounded-full
//                   border
//                   border-[#B8F23A]/25
//                 ">
//                 <motion.div
//                   animate={{ rotate: 360 }}
//                   transition={{
//                     duration: 24,
//                     repeat: Infinity,
//                     ease: "linear",
//                   }}
//                   className="
//                     absolute
//                     inset-[12px]
//                     rounded-full
//                     border
//                     border-dashed
//                     border-[#B8F23A]/20
//                   "
//                 />

//                 <motion.div
//                   animate={{ rotate: -360 }}
//                   transition={{
//                     duration: 17,
//                     repeat: Infinity,
//                     ease: "linear",
//                   }}
//                   className="
//                     absolute
//                     inset-[34px]
//                     rounded-full
//                     border
//                     border-dashed
//                     border-white/[0.08]
//                   "
//                 />

//                 <div
//                   className="
//                     relative
//                     z-10
//                     flex
//                     h-[125px]
//                     w-[125px]
//                     flex-col
//                     items-center
//                     justify-center
//                     rounded-full
//                     bg-[#B8F23A]
//                     text-[#10372E]
//                     shadow-[0_0_60px_rgba(184,242,58,.13)]
//                   ">
//                   <PlugZap size={29} strokeWidth={1.5} />

//                   <p
//                     className="
//                       mt-3
//                       text-[26px]
//                       font-light
//                       leading-none
//                       tracking-[-0.05em]
//                     ">
//                     600
//                   </p>

//                   <span
//                     className="
//                       mt-1
//                       text-[7px]
//                       font-bold
//                       uppercase
//                       tracking-[0.16em]
//                     ">
//                     kW
//                   </span>
//                 </div>

//                 {/* nodes */}

//                 <span
//                   className="
//                     absolute
//                     left-1/2
//                     top-[8px]
//                     h-2
//                     w-2
//                     -translate-x-1/2
//                     rounded-full
//                     bg-[#B8F23A]
//                   "
//                 />

//                 <span
//                   className="
//                     absolute
//                     bottom-[8px]
//                     left-1/2
//                     h-2
//                     w-2
//                     -translate-x-1/2
//                     rounded-full
//                     bg-[#B8F23A]
//                   "
//                 />

//                 <span
//                   className="
//                     absolute
//                     left-[8px]
//                     top-1/2
//                     h-2
//                     w-2
//                     -translate-y-1/2
//                     rounded-full
//                     bg-[#B8F23A]
//                   "
//                 />

//                 <span
//                   className="
//                     absolute
//                     right-[8px]
//                     top-1/2
//                     h-2
//                     w-2
//                     -translate-y-1/2
//                     rounded-full
//                     bg-[#B8F23A]
//                   "
//                 />
//               </div>

//               {/* =================================================
//                   FLOATING NODES
//               ================================================= */}

//               <div
//                 className="
//                   absolute
//                   left-[7%]
//                   top-[25%]
//                   hidden
//                   xl:block
//                 ">
//                 <TechNode
//                   icon={RadioTower}
//                   code="GRID"
//                   title="Conexión"
//                   subtitle="Red eléctrica"
//                 />
//               </div>

//               <div
//                 className="
//                   absolute
//                   right-[7%]
//                   top-[24%]
//                   hidden
//                   xl:block
//                 ">
//                 <TechNode
//                   icon={BatteryCharging}
//                   code="BESS"
//                   title="Storage"
//                   subtitle="Respaldo energético"
//                 />
//               </div>

//               <div
//                 className="
//                   absolute
//                   bottom-[26%]
//                   left-[8%]
//                   hidden
//                   xl:block
//                 ">
//                 <TechNode
//                   icon={CarFront}
//                   code="EV"
//                   title="Vehicle"
//                   subtitle="Carga rápida"
//                 />
//               </div>

//               <div
//                 className="
//                   absolute
//                   bottom-[25%]
//                   right-[8%]
//                   hidden
//                   xl:block
//                 ">
//                 <TechNode
//                   icon={Gauge}
//                   code="EMS"
//                   title="Control"
//                   subtitle="Gestión energética"
//                 />
//               </div>

//               {/* =================================================
//                   ENERGY FLOW
//               ================================================= */}

//               <div
//                 className="
//                   absolute
//                   bottom-[120px]
//                   left-[8%]
//                   right-[8%]
//                 ">
//                 <div
//                   className="
//                     relative
//                     h-px
//                     bg-gradient-to-r
//                     from-transparent
//                     via-[#B8F23A]/55
//                     to-transparent
//                   ">
//                   <motion.span
//                     animate={{
//                       left: ["0%", "96%"],
//                       opacity: [0, 1, 1, 0],
//                     }}
//                     transition={{
//                       duration: 4,
//                       repeat: Infinity,
//                       ease: "linear",
//                     }}
//                     className="
//                       absolute
//                       top-1/2
//                       h-2
//                       w-2
//                       -translate-y-1/2
//                       rounded-full
//                       bg-[#B8F23A]
//                       shadow-[0_0_15px_rgba(184,242,58,.9)]
//                     "
//                   />
//                 </div>
//               </div>

//               {/* =================================================
//                   BOTTOM SYSTEM BAR
//               ================================================= */}

//               <div
//                 className="
//                   absolute
//                   bottom-0
//                   left-0
//                   right-0
//                   grid
//                   border-t
//                   border-white/[0.08]
//                   bg-[#0C3028]/80
//                   backdrop-blur-lg

//                   sm:grid-cols-3
//                 ">
//                 {[
//                   ["01", "Carga", "DC Fast"],
//                   ["02", "Energía", "Smart Storage"],
//                   ["03", "Control", "Demand Mgmt"],
//                 ].map(([number, title, text]) => (
//                   <div
//                     key={number}
//                     className="
//                       flex
//                       items-center
//                       gap-3
//                       border-b
//                       border-white/[0.06]
//                       px-5
//                       py-5
//                       last:border-b-0

//                       sm:border-b-0
//                       sm:border-r
//                       sm:last:border-r-0
//                     ">
//                     <span
//                       className="
//                         text-[7px]
//                         font-bold
//                         tracking-[0.14em]
//                         text-[#B8F23A]
//                       ">
//                       {number}
//                     </span>

//                     <div>
//                       <p
//                         className="
//                           text-[8px]
//                           font-bold
//                           uppercase
//                           tracking-[0.13em]
//                           text-white/70
//                         ">
//                         {title}
//                       </p>

//                       <p
//                         className="
//                           mt-1
//                           text-[6px]
//                           uppercase
//                           tracking-[0.11em]
//                           text-white/25
//                         ">
//                         {text}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* =================================================
//                 FLOATING STATUS
//             ================================================= */}

//             <div
//               className="
//                 absolute
//                 -left-5
//                 top-[13%]
//                 hidden
//                 rounded-[13px]
//                 border
//                 border-[#143E33]/[0.07]
//                 bg-white/95
//                 p-4
//                 shadow-[0_16px_40px_rgba(20,62,51,.10)]
//                 backdrop-blur-xl
//                 xl:block
//               ">
//               <div className="flex items-center gap-3">
//                 <span
//                   className="
//                     flex
//                     h-9
//                     w-9
//                     items-center
//                     justify-center
//                     rounded-[9px]
//                     bg-[#EDF5DF]
//                     text-[#78A500]
//                   ">
//                   <Zap size={16} strokeWidth={1.7} />
//                 </span>

//                 <div>
//                   <p
//                     className="
//                       text-[7px]
//                       font-bold
//                       uppercase
//                       tracking-[0.15em]
//                       text-[#143E33]/35
//                     ">
//                     Power
//                   </p>

//                   <p
//                     className="
//                       mt-1
//                       text-[12px]
//                       font-semibold
//                       text-[#143E33]
//                     ">
//                     High-Speed Charging
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* =================================================
//                 LOCATION
//             ================================================= */}

//             <div
//               className="
//                 absolute
//                 -right-4
//                 bottom-[18%]
//                 hidden
//                 rounded-[12px]
//                 border
//                 border-[#143E33]/[0.07]
//                 bg-white/95
//                 px-4
//                 py-3
//                 shadow-[0_14px_35px_rgba(20,62,51,.08)]
//                 backdrop-blur-xl
//                 2xl:flex
//                 2xl:items-center
//                 2xl:gap-3
//               ">
//               <MapPin size={14} strokeWidth={1.6} className="text-[#78A500]" />

//               <div>
//                 <p
//                   className="
//                     text-[6px]
//                     font-bold
//                     uppercase
//                     tracking-[0.14em]
//                     text-[#143E33]/28
//                   ">
//                   Infrastructure
//                 </p>

//                 <p
//                   className="
//                     mt-1
//                     text-[9px]
//                     font-semibold
//                     text-[#143E33]
//                   ">
//                   Grid · Storage · EV
//                 </p>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* bottom accent */}

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
//           via-[#9DD827]/45
//           to-transparent
//         "
//       />
//     </section>
//   );
// }

// /* =========================================================
//    TECH NODE
// ========================================================= */

// function TechNode({ icon: Icon, code, title, subtitle }) {
//   return (
//     <div
//       className="
//         flex
//         min-w-[128px]
//         items-center
//         gap-3
//         rounded-[11px]
//         border
//         border-white/[0.08]
//         bg-white/[0.04]
//         p-3
//         backdrop-blur-lg
//       ">
//       <span
//         className="
//           flex
//           h-9
//           w-9
//           items-center
//           justify-center
//           rounded-[9px]
//           bg-[#B8F23A]/10
//           text-[#B8F23A]
//         ">
//         <Icon size={15} strokeWidth={1.6} />
//       </span>

//       <div>
//         <p
//           className="
//             text-[6px]
//             font-bold
//             uppercase
//             tracking-[0.14em]
//             text-[#B8F23A]
//           ">
//           {code}
//         </p>

//         <p
//           className="
//             mt-1
//             text-[8px]
//             font-semibold
//             text-white/70
//           ">
//           {title}
//         </p>

//         <p
//           className="
//             mt-0.5
//             text-[6px]
//             text-white/25
//           ">
//           {subtitle}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default MovilidadHero;

import { motion } from "motion/react";
import {
  ArrowDownRight,
  ArrowUpRight,
  BatteryCharging,
  CarFront,
  Gauge,
  MapPin,
  PlugZap,
  RadioTower,
  Zap,
} from "lucide-react";

function MovilidadHero() {
  const handleScroll = () => {
    document
      .getElementById("movilidad-capabilities")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F4F7F0]
        pt-[105px]
        text-[#143E33]
        lg:pt-[115px]
      ">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.35]
          [background-image:linear-gradient(rgba(20,62,51,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(20,62,51,.04)_1px,transparent_1px)]
          [background-size:72px_72px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-12%]
          top-[6%]
          h-[620px]
          w-[620px]
          rounded-full
          bg-[#9DD827]/12
          blur-[110px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-[180px]
          bottom-[-220px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#143E33]/[0.035]
          blur-[110px]
        "
      />

      {/* GIANT TYPE */}

      <span
        className="
          pointer-events-none
          absolute
          -right-4
          top-[110px]
          hidden
          select-none
          text-[clamp(10rem,18vw,20rem)]
          font-semibold
          leading-none
          tracking-[-0.09em]
          text-[#143E33]/[0.018]
          2xl:block
        ">
        MOVE
      </span>

      {/* =====================================================
          ORBITS
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          right-[-7vw]
          top-[4%]
          hidden
          aspect-square
          w-[52vw]
          rounded-full
          border
          border-[#7FAE00]/10
          xl:block
        ">
        <div
          className="
            absolute
            inset-[11%]
            rounded-full
            border
            border-[#143E33]/[0.05]
          "
        />

        <div
          className="
            absolute
            inset-[25%]
            rounded-full
            border
            border-[#9DD827]/10
          "
        />
      </div>

      {/* =====================================================
          MAIN CONTAINER
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
            pb-16

            lg:grid-cols-[.86fr_1.14fr]
            lg:items-center
            lg:gap-12

            xl:grid-cols-[.8fr_1.2fr]
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
              py-8
              lg:py-10
            ">
            {/* EYEBROW */}

            <div className="flex items-center gap-4">
              <span
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  bg-[#9DD827]
                  text-[#143E33]
                  shadow-[0_10px_28px_rgba(157,216,39,.17)]
                ">
                <PlugZap size={18} strokeWidth={1.6} />
              </span>

              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#83B500]" />

                  <p
                    className="
                      text-[12px]
                      font-bold
                      uppercase
                      tracking-[0.2em]
                      text-[#77A500]
                    ">
                    Movilidad Eléctrica
                  </p>
                </div>

                <p
                  className="
                    mt-1.5
                    text-[12px]
                    font-medium
                    uppercase
                    tracking-[0.13em]
                    text-[#143E33]/40
                  ">
                  Infraestructura de carga · Gestión energética
                </p>
              </div>
            </div>

            {/* TITLE */}

            <h1
              className="
                mt-9
                max-w-[760px]
                text-[clamp(3.5rem,5.6vw,6.8rem)]
                font-normal
                leading-[0.87]
                tracking-[-0.07em]
              ">
              La movilidad
              <span className="block">eléctrica necesita</span>
              <span className="block text-[#84B500]">
                energía que responda.
              </span>
            </h1>

            {/* DESCRIPTION */}

            <div
              className="
                mt-8
                grid
                max-w-[670px]
                grid-cols-[3px_1fr]
                gap-5
              ">
              <span
                className="
                  min-h-[75px]
                  w-[3px]
                  rounded-full
                  bg-[#9DD827]
                "
              />

              <p
                className="
                  text-[15px]
                  leading-7
                  text-[#143E33]/60
                  sm:text-[16px]
                  sm:leading-8
                ">
                Desarrollamos soluciones inteligentes de carga rápida DCFC Nivel
                3 y Nivel 4, integrando red eléctrica, almacenamiento, energías
                renovables y gestión energética en una sola infraestructura.
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
                  text-[13px]
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

            {/* MICRO DATA */}

            <div
              className="
                mt-10
                grid
                max-w-[690px]
                grid-cols-3
                divide-x
                divide-[#143E33]/[0.08]
                border-t
                border-[#143E33]/[0.08]
                pt-5
              ">
              {[
                ["DCFC", "Nivel 3 / 4"],
                ["Hasta 600 kW", "Alta potencia"],
                ["< 30 min", "Carga completa"],
              ].map(([value, label]) => (
                <div
                  key={value}
                  className="
                    px-4
                    first:pl-0
                  ">
                  <p
                    className="
                      text-[13px]
                      font-medium
                      tracking-[-0.025em]
                      text-[#78A500]
                    ">
                    {value}
                  </p>

                  <p
                    className="
                      mt-1
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.13em]
                      text-[#143E33]/30
                    ">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* =================================================
              RIGHT EXPERIENCE
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
              min-h-[520px]
              sm:min-h-[590px]
              lg:min-h-[630px]
              xl:min-h-[660px]
            ">
            {/* =================================================
                MAIN DARK PANEL
            ================================================= */}

            <div
              className="
                absolute
                inset-0
                overflow-hidden
                rounded-[18px]
                bg-[#10372E]
                shadow-[0_28px_70px_rgba(20,62,51,.14)]
              ">
              {/* grid */}

              <div
                className="
                  absolute
                  inset-0
                  opacity-[0.15]
                  [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)]
                  [background-size:42px_42px]
                "
              />

              {/* glow */}

              <div
                className="
                  absolute
                  -right-[120px]
                  -top-[100px]
                  h-[380px]
                  w-[380px]
                  rounded-full
                  bg-[#9DD827]/15
                  blur-[90px]
                "
              />

              {/* top */}

              <div
                className="
                  absolute
                  left-6
                  right-6
                  top-6
                  flex
                  items-center
                  justify-between
                  gap-5
                  sm:left-8
                  sm:right-8
                  sm:top-8
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
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-[#B8F23A]
                    ">
                    Charging Network
                  </span>
                </div>

                <span
                  className="
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.04]
                    px-4
                    py-2
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.14em]
                    text-white/35
                  ">
                  System Online
                </span>
              </div>

              {/* =================================================
                  CHARGING CORE
              ================================================= */}

              <div
                className="
                  absolute
                  left-1/2
                  top-[43%]
                  flex
                  h-[235px]
                  w-[235px]
                  -translate-x-1/2
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#B8F23A]/25
                ">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 24,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    absolute
                    inset-[12px]
                    rounded-full
                    border
                    border-dashed
                    border-[#B8F23A]/20
                  "
                />

                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 17,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    absolute
                    inset-[34px]
                    rounded-full
                    border
                    border-dashed
                    border-white/[0.08]
                  "
                />

                <div
                  className="
                    relative
                    z-10
                    flex
                    h-[125px]
                    w-[125px]
                    flex-col
                    items-center
                    justify-center
                    rounded-full
                    bg-[#B8F23A]
                    text-[#10372E]
                    shadow-[0_0_60px_rgba(184,242,58,.13)]
                  ">
                  <PlugZap size={29} strokeWidth={1.5} />

                  <p
                    className="
                      mt-3
                      text-[26px]
                      font-light
                      leading-none
                      tracking-[-0.05em]
                    ">
                    600
                  </p>

                  <span
                    className="
                      mt-1
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.16em]
                    ">
                    kW
                  </span>
                </div>

                {/* nodes */}

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
              </div>

              {/* =================================================
                  FLOATING NODES
              ================================================= */}

              <div
                className="
                  absolute
                  left-[7%]
                  top-[25%]
                  hidden
                  xl:block
                ">
                <TechNode
                  icon={RadioTower}
                  code="GRID"
                  title="Conexión"
                  subtitle="Red eléctrica"
                />
              </div>

              <div
                className="
                  absolute
                  right-[7%]
                  top-[24%]
                  hidden
                  xl:block
                ">
                <TechNode
                  icon={BatteryCharging}
                  code="BESS"
                  title="Storage"
                  subtitle="Respaldo + demanda"
                />
              </div>

              <div
                className="
                  absolute
                  bottom-[26%]
                  left-[8%]
                  hidden
                  xl:block
                ">
                <TechNode
                  icon={CarFront}
                  code="EV"
                  title="Vehicle"
                  subtitle="Carga rápida"
                />
              </div>

              <div
                className="
                  absolute
                  bottom-[25%]
                  right-[8%]
                  hidden
                  xl:block
                ">
                <TechNode
                  icon={Gauge}
                  code="EMS"
                  title="Control"
                  subtitle="Gestión energética"
                />
              </div>

              {/* =================================================
                  ENERGY FLOW
              ================================================= */}

              <div
                className="
                  absolute
                  bottom-[120px]
                  left-[8%]
                  right-[8%]
                ">
                <div
                  className="
                    relative
                    h-px
                    bg-gradient-to-r
                    from-transparent
                    via-[#B8F23A]/55
                    to-transparent
                  ">
                  <motion.span
                    animate={{
                      left: ["0%", "96%"],
                      opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="
                      absolute
                      top-1/2
                      h-2
                      w-2
                      -translate-y-1/2
                      rounded-full
                      bg-[#B8F23A]
                      shadow-[0_0_15px_rgba(184,242,58,.9)]
                    "
                  />
                </div>
              </div>

              {/* =================================================
                  BOTTOM SYSTEM BAR
              ================================================= */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  grid
                  border-t
                  border-white/[0.08]
                  bg-[#0C3028]/80
                  backdrop-blur-lg

                  sm:grid-cols-3
                ">
                {[
                  ["01", "Carga", "DC Fast"],
                  ["02", "Energía", "Storage + Renewables"],
                  ["03", "Control", "Demand Response"],
                ].map(([number, title, text]) => (
                  <div
                    key={number}
                    className="
                      flex
                      items-center
                      gap-3
                      border-b
                      border-white/[0.06]
                      px-5
                      py-5
                      last:border-b-0

                      sm:border-b-0
                      sm:border-r
                      sm:last:border-r-0
                    ">
                    <span
                      className="
                        text-[11px]
                        font-bold
                        tracking-[0.14em]
                        text-[#B8F23A]
                      ">
                      {number}
                    </span>

                    <div>
                      <p
                        className="
                          text-[11px]
                          font-bold
                          uppercase
                          tracking-[0.13em]
                          text-white/70
                        ">
                        {title}
                      </p>

                      <p
                        className="
                          mt-1
                          text-[11px]
                          uppercase
                          tracking-[0.11em]
                          text-white/25
                        ">
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* =================================================
                FLOATING STATUS
            ================================================= */}

            <div
              className="
                absolute
                -left-5
                top-[13%]
                hidden
                rounded-[13px]
                border
                border-[#143E33]/[0.07]
                bg-white/95
                p-4
                shadow-[0_16px_40px_rgba(20,62,51,.10)]
                backdrop-blur-xl
                xl:block
              ">
              <div className="flex items-center gap-3">
                <span
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-[9px]
                    bg-[#EDF5DF]
                    text-[#78A500]
                  ">
                  <Zap size={16} strokeWidth={1.7} />
                </span>

                <div>
                  <p
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-[#143E33]/35
                    ">
                    Power
                  </p>

                  <p
                    className="
                      mt-1
                      text-[12px]
                      font-semibold
                      text-[#143E33]
                    ">
                    High-Speed Charging
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                LOCATION
            ================================================= */}

            <div
              className="
                absolute
                -right-4
                bottom-[18%]
                hidden
                rounded-[12px]
                border
                border-[#143E33]/[0.07]
                bg-white/95
                px-4
                py-3
                shadow-[0_14px_35px_rgba(20,62,51,.08)]
                backdrop-blur-xl
                2xl:flex
                2xl:items-center
                2xl:gap-3
              ">
              <MapPin size={14} strokeWidth={1.6} className="text-[#78A500]" />

              <div>
                <p
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.14em]
                    text-[#143E33]/28
                  ">
                  Infrastructure
                </p>

                <p
                  className="
                    mt-1
                    text-[12px]
                    font-semibold
                    text-[#143E33]
                  ">
                  Grid · Storage · EV
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* bottom accent */}

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
          via-[#9DD827]/45
          to-transparent
        "
      />
    </section>
  );
}

/* =========================================================
   TECH NODE
========================================================= */

function TechNode({ icon: Icon, code, title, subtitle }) {
  return (
    <div
      className="
        flex
        min-w-[128px]
        items-center
        gap-3
        rounded-[11px]
        border
        border-white/[0.08]
        bg-white/[0.04]
        p-3
        backdrop-blur-lg
      ">
      <span
        className="
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-[9px]
          bg-[#B8F23A]/10
          text-[#B8F23A]
        ">
        <Icon size={15} strokeWidth={1.6} />
      </span>

      <div>
        <p
          className="
            text-[11px]
            font-bold
            uppercase
            tracking-[0.14em]
            text-[#B8F23A]
          ">
          {code}
        </p>

        <p
          className="
            mt-1
            text-[11px]
            font-semibold
            text-white/70
          ">
          {title}
        </p>

        <p
          className="
            mt-0.5
            text-[11px]
            text-white/25
          ">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

export default MovilidadHero;
