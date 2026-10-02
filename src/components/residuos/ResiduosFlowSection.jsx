// import { motion } from "motion/react";
// import {
//   ArrowRight,
//   Boxes,
//   Factory,
//   Flame,
//   Leaf,
//   Recycle,
//   Sparkles,
//   Trash2,
//   Zap,
// } from "lucide-react";

// /* =========================================================
//    OUTPUTS
// ========================================================= */

// const outputs = [
//   {
//     number: "01",
//     icon: Boxes,
//     title: "Materiales",
//     description: "Recursos recuperados para nuevos ciclos productivos.",
//   },
//   {
//     number: "02",
//     icon: Flame,
//     title: "Energía",
//     description: "Aprovechamiento del potencial energético del residuo.",
//   },
//   {
//     number: "03",
//     icon: Leaf,
//     title: "Recursos",
//     description: "Nuevos insumos con valor ambiental y productivo.",
//   },
// ];

// /* =========================================================
//    MATERIAL PARTICLE
// ========================================================= */

// function MaterialParticle({ delay = 0, size = 8, top = "50%" }) {
//   return (
//     <motion.span
//       animate={{
//         left: ["-4%", "104%"],
//         opacity: [0, 1, 1, 0],
//         rotate: [0, 180, 360],
//       }}
//       transition={{
//         duration: 4.8,
//         delay,
//         repeat: Infinity,
//         ease: "linear",
//       }}
//       style={{
//         width: size,
//         height: size,
//         top,
//       }}
//       className="
//         absolute
//         z-20
//         rounded-[2px]
//         bg-[#B8F23A]
//         shadow-[0_0_14px_rgba(184,242,58,.55)]
//       "
//     />
//   );
// }

// /* =========================================================
//    MAIN
// ========================================================= */

// function ResiduosFlowSection() {
//   return (
//     <section
//       id="residuos-flow"
//       className="
//         relative
//         overflow-hidden
//         bg-[#F3F6EF]
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
//           opacity-[0.26]
//           [background-image:linear-gradient(rgba(20,62,51,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(20,62,51,.025)_1px,transparent_1px)]
//           [background-size:72px_72px]
//         "
//       />

//       <div
//         className="
//           pointer-events-none
//           absolute
//           -right-[180px]
//           -top-[180px]
//           h-[500px]
//           w-[500px]
//           rounded-full
//           bg-[#B8F23A]/10
//           blur-[115px]
//         "
//       />

//       <div
//         className="
//           pointer-events-none
//           absolute
//           -bottom-[220px]
//           -left-[180px]
//           h-[430px]
//           w-[430px]
//           rounded-full
//           bg-[#143E33]/[0.035]
//           blur-[100px]
//         "
//       />

//       <span
//         className="
//           pointer-events-none
//           absolute
//           -right-5
//           bottom-[-35px]
//           hidden
//           select-none
//           text-[clamp(9rem,17vw,19rem)]
//           font-semibold
//           leading-none
//           tracking-[-0.09em]
//           text-[#143E33]/[0.018]

//           xl:block
//         ">
//         VALUE
//       </span>

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
//           initial={{
//             opacity: 0,
//             y: 20,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//             amount: 0.25,
//           }}
//           transition={{
//             duration: 0.7,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="
//             grid
//             gap-7

//             lg:grid-cols-[1fr_400px]
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
//                   Recuperación de valor
//                 </p>
//               </div>
//             </div>

//             <h2
//               className="
//                 mt-5
//                 max-w-[1000px]
//                 text-[clamp(2.8rem,4.5vw,5.4rem)]
//                 font-normal
//                 leading-[0.92]
//                 tracking-[-0.065em]
//               ">
//               El valor no desaparece.
//               <span className="block">Solo cambia</span>
//               <span className="block text-[#83B500]">de forma.</span>
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
//               Una estrategia de valorización identifica qué existe dentro del
//               residuo y diseña el proceso adecuado para recuperarlo.
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
//                 Materia → proceso → nuevo valor
//               </span>
//             </div>
//           </div>
//         </motion.div>

//         {/* ===================================================
//             TRANSFORMATION STAGE
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
//             amount: 0.1,
//           }}
//           transition={{
//             duration: 0.85,
//             delay: 0.08,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="
//             relative
//             mt-11
//             overflow-hidden
//             rounded-[26px]
//             bg-[#10372E]
//             text-white
//             shadow-[0_30px_90px_rgba(20,62,51,.14)]
//           ">
//           {/* DARK GRID */}

//           <div
//             className="
//               pointer-events-none
//               absolute
//               inset-0
//               opacity-[0.13]
//               [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)]
//               [background-size:42px_42px]
//             "
//           />

//           {/* CENTRAL GLOW */}

//           <div
//             className="
//               pointer-events-none
//               absolute
//               left-[50%]
//               top-[45%]
//               h-[480px]
//               w-[620px]
//               -translate-x-1/2
//               -translate-y-1/2
//               rounded-full
//               bg-[#B8F23A]/[0.075]
//               blur-[115px]
//             "
//           />

//           {/* =================================================
//               TOP CONTROL BAR
//           ================================================= */}

//           <div
//             className="
//               relative
//               z-20
//               flex
//               flex-col
//               gap-4
//               border-b
//               border-white/[0.08]
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
//                   flex
//                   h-9
//                   w-9
//                   items-center
//                   justify-center
//                   rounded-[9px]
//                   bg-[#B8F23A]/10
//                   text-[#B8F23A]
//                 ">
//                 <Factory size={15} strokeWidth={1.7} />
//               </span>

//               <div>
//                 <p
//                   className="
//                     text-[7px]
//                     font-bold
//                     uppercase
//                     tracking-[0.19em]
//                     text-[#B8F23A]
//                   ">
//                   Sistema de transformación
//                 </p>

//                 <p
//                   className="
//                     mt-1
//                     text-[6px]
//                     uppercase
//                     tracking-[0.13em]
//                     text-white/24
//                   ">
//                   Residuo · Separación · Recuperación · Valor
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-center gap-3">
//               <span className="relative flex h-2 w-2">
//                 <span
//                   className="
//                     absolute
//                     inset-0
//                     animate-ping
//                     rounded-full
//                     bg-[#B8F23A]/40
//                   "
//                 />

//                 <span
//                   className="
//                     relative
//                     h-2
//                     w-2
//                     rounded-full
//                     bg-[#B8F23A]
//                   "
//                 />
//               </span>

//               <span
//                 className="
//                   text-[6px]
//                   font-bold
//                   uppercase
//                   tracking-[0.14em]
//                   text-white/30
//                 ">
//                 Flujo activo
//               </span>
//             </div>
//           </div>

//           {/* =================================================
//               DESKTOP STAGE
//           ================================================= */}

//           <div
//             className="
//               relative
//               hidden
//               min-h-[560px]
//               overflow-hidden

//               lg:block
//             ">
//             {/* =================================================
//                 LEFT INPUT
//             ================================================= */}

//             <div
//               className="
//                 absolute
//                 bottom-[70px]
//                 left-[4%]
//                 top-[70px]
//                 w-[23%]
//               ">
//               <div
//                 className="
//                   relative
//                   flex
//                   h-full
//                   flex-col
//                   justify-between
//                   overflow-hidden
//                   rounded-[20px]
//                   border
//                   border-white/[0.08]
//                   bg-[#0C3028]/78
//                   p-6
//                   backdrop-blur-sm
//                 ">
//                 <span
//                   className="
//                     pointer-events-none
//                     absolute
//                     -right-4
//                     -top-8
//                     text-[140px]
//                     font-light
//                     leading-none
//                     tracking-[-0.09em]
//                     text-white/[0.025]
//                   ">
//                   01
//                 </span>

//                 <div className="relative z-10">
//                   <div className="flex items-start justify-between gap-4">
//                     <span
//                       className="
//                         flex
//                         h-14
//                         w-14
//                         items-center
//                         justify-center
//                         rounded-[14px]
//                         bg-white/[0.06]
//                         text-white/48
//                       ">
//                       <Trash2 size={24} strokeWidth={1.5} />
//                     </span>

//                     <span
//                       className="
//                         text-[7px]
//                         font-bold
//                         uppercase
//                         tracking-[0.15em]
//                         text-white/25
//                       ">
//                       Entrada
//                     </span>
//                   </div>

//                   <p
//                     className="
//                       mt-8
//                       text-[7px]
//                       font-bold
//                       uppercase
//                       tracking-[0.17em]
//                       text-[#B8F23A]
//                     ">
//                     Material de origen
//                   </p>

//                   <h3
//                     className="
//                       mt-3
//                       text-[clamp(2rem,2.8vw,3.2rem)]
//                       font-normal
//                       leading-[0.94]
//                       tracking-[-0.05em]
//                     ">
//                     Lo que hoy
//                     <span className="block">llamamos residuo.</span>
//                   </h3>

//                   <p
//                     className="
//                       mt-5
//                       max-w-[300px]
//                       text-[9px]
//                       leading-5
//                       text-white/34
//                     ">
//                     Corrientes urbanas, orgánicas o industriales con diferente
//                     composición y potencial de aprovechamiento.
//                   </p>
//                 </div>

//                 {/* ABSTRACT WASTE */}

//                 <div
//                   className="
//                     relative
//                     mt-8
//                     flex
//                     h-[95px]
//                     items-end
//                     gap-1.5
//                     overflow-hidden
//                     rounded-[12px]
//                     border
//                     border-white/[0.06]
//                     bg-black/10
//                     px-4
//                     pb-4
//                   ">
//                   {Array.from({ length: 15 }).map((_, index) => (
//                     <motion.span
//                       key={index}
//                       initial={{
//                         y: -30,
//                         opacity: 0,
//                         rotate: -20,
//                       }}
//                       whileInView={{
//                         y: 0,
//                         opacity: 1,
//                         rotate: index % 2 === 0 ? 8 : -8,
//                       }}
//                       viewport={{
//                         once: true,
//                       }}
//                       transition={{
//                         delay: 0.2 + index * 0.035,
//                         duration: 0.35,
//                       }}
//                       className={`
//                         block
//                         rounded-[2px]
//                         bg-white/[0.12]

//                         ${
//                           index % 4 === 0
//                             ? "h-8 w-5"
//                             : index % 3 === 0
//                               ? "h-5 w-7"
//                               : "h-6 w-4"
//                         }
//                       `}
//                     />
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* =================================================
//                 INPUT CONNECTOR
//             ================================================= */}

//             <div
//               className="
//                 absolute
//                 left-[27%]
//                 top-1/2
//                 h-[100px]
//                 w-[12%]
//                 -translate-y-1/2
//               ">
//               <div
//                 className="
//                   absolute
//                   left-0
//                   right-0
//                   top-1/2
//                   h-[2px]
//                   -translate-y-1/2
//                   bg-gradient-to-r
//                   from-white/10
//                   via-[#B8F23A]/65
//                   to-[#B8F23A]
//                 ">
//                 <MaterialParticle delay={0} top="47%" />
//                 <MaterialParticle delay={1.1} size={6} top="52%" />
//                 <MaterialParticle delay={2.2} size={5} top="42%" />
//               </div>

//               <ArrowRight
//                 size={18}
//                 strokeWidth={1.5}
//                 className="
//                   absolute
//                   right-[-5px]
//                   top-1/2
//                   -translate-y-1/2
//                   text-[#B8F23A]
//                 "
//               />
//             </div>

//             {/* =================================================
//                 TRANSFORMATION CORE
//             ================================================= */}

//             <div
//               className="
//                 absolute
//                 left-[48%]
//                 top-1/2
//                 z-20
//                 -translate-x-1/2
//                 -translate-y-1/2
//               ">
//               {/* OUTER HALO */}

//               <motion.div
//                 animate={{
//                   rotate: 360,
//                 }}
//                 transition={{
//                   duration: 28,
//                   repeat: Infinity,
//                   ease: "linear",
//                 }}
//                 className="
//                   relative
//                   flex
//                   h-[320px]
//                   w-[320px]
//                   items-center
//                   justify-center
//                   rounded-full
//                   border
//                   border-dashed
//                   border-[#B8F23A]/25
//                 ">
//                 {/* OUTER DOTS */}

//                 {[
//                   "left-1/2 top-[-5px] -translate-x-1/2",
//                   "bottom-[-5px] left-1/2 -translate-x-1/2",
//                   "left-[-5px] top-1/2 -translate-y-1/2",
//                   "right-[-5px] top-1/2 -translate-y-1/2",
//                 ].map((position) => (
//                   <span
//                     key={position}
//                     className={`
//                       absolute
//                       h-3
//                       w-3
//                       rounded-full
//                       bg-[#B8F23A]
//                       shadow-[0_0_18px_rgba(184,242,58,.65)]
//                       ${position}
//                     `}
//                   />
//                 ))}

//                 {/* SECOND RING */}

//                 <motion.div
//                   animate={{
//                     rotate: -360,
//                   }}
//                   transition={{
//                     duration: 18,
//                     repeat: Infinity,
//                     ease: "linear",
//                   }}
//                   className="
//                     absolute
//                     inset-[38px]
//                     rounded-full
//                     border
//                     border-[#B8F23A]/10
//                   "
//                 />

//                 {/* CORE */}

//                 <div
//                   className="
//                     relative
//                     flex
//                     h-[185px]
//                     w-[185px]
//                     flex-col
//                     items-center
//                     justify-center
//                     rounded-full
//                     bg-[#B8F23A]
//                     text-[#10372E]
//                     shadow-[0_0_70px_rgba(184,242,58,.16)]
//                   ">
//                   <Recycle size={42} strokeWidth={1.5} />

//                   <p
//                     className="
//                       mt-4
//                       text-[8px]
//                       font-bold
//                       uppercase
//                       tracking-[0.15em]
//                     ">
//                     Transformación
//                   </p>

//                   <p
//                     className="
//                       mt-2
//                       text-[6px]
//                       font-semibold
//                       uppercase
//                       tracking-[0.12em]
//                       opacity-55
//                     ">
//                     Recuperar · Valorizar
//                   </p>
//                 </div>
//               </motion.div>

//               {/* CORE LABEL */}

//               <div
//                 className="
//                   absolute
//                   -bottom-[74px]
//                   left-1/2
//                   -translate-x-1/2
//                   whitespace-nowrap
//                   text-center
//                 ">
//                 <p
//                   className="
//                     text-[7px]
//                     font-bold
//                     uppercase
//                     tracking-[0.17em]
//                     text-[#B8F23A]
//                   ">
//                   El proceso adecuado
//                 </p>

//                 <p
//                   className="
//                     mt-1
//                     text-[7px]
//                     text-white/28
//                   ">
//                   depende de cada corriente
//                 </p>
//               </div>
//             </div>

//             {/* =================================================
//                 OUTPUT CONNECTOR
//             ================================================= */}

//             <div
//               className="
//                 absolute
//                 left-[59%]
//                 right-[35%]
//                 top-1/2
//                 h-[2px]
//                 -translate-y-1/2
//                 bg-gradient-to-r
//                 from-[#B8F23A]
//                 via-[#B8F23A]/70
//                 to-white/10
//               ">
//               <motion.span
//                 animate={{
//                   left: ["0%", "100%"],
//                   opacity: [0, 1, 1, 0],
//                 }}
//                 transition={{
//                   duration: 3.2,
//                   repeat: Infinity,
//                   ease: "linear",
//                 }}
//                 className="
//                   absolute
//                   top-1/2
//                   h-2
//                   w-2
//                   -translate-y-1/2
//                   rounded-full
//                   bg-[#B8F23A]
//                   shadow-[0_0_16px_rgba(184,242,58,.9)]
//                 "
//               />
//             </div>

//             {/* =================================================
//                 OUTPUTS
//             ================================================= */}

//             <div
//               className="
//                 absolute
//                 bottom-[55px]
//                 right-[4%]
//                 top-[55px]
//                 w-[31%]
//               ">
//               <div className="flex h-full flex-col">
//                 <div>
//                   <p
//                     className="
//                       text-[7px]
//                       font-bold
//                       uppercase
//                       tracking-[0.18em]
//                       text-[#B8F23A]
//                     ">
//                     Valor recuperado
//                   </p>

//                   <h3
//                     className="
//                       mt-2
//                       max-w-[440px]
//                       text-[clamp(2rem,2.9vw,3.4rem)]
//                       font-normal
//                       leading-[0.95]
//                       tracking-[-0.05em]
//                     ">
//                     El residuo sale
//                     <span className="block text-[#B8F23A]">
//                       convertido en oportunidad.
//                     </span>
//                   </h3>
//                 </div>

//                 <div
//                   className="
//                     mt-7
//                     grid
//                     flex-1
//                     gap-3
//                   ">
//                   {outputs.map((output, index) => {
//                     const Icon = output.icon;

//                     return (
//                       <motion.div
//                         key={output.title}
//                         initial={{
//                           opacity: 0,
//                           x: 18,
//                         }}
//                         whileInView={{
//                           opacity: 1,
//                           x: 0,
//                         }}
//                         viewport={{
//                           once: true,
//                         }}
//                         transition={{
//                           duration: 0.5,
//                           delay: 0.3 + index * 0.08,
//                         }}
//                         className="
//                           group
//                           relative
//                           flex
//                           items-center
//                           gap-4
//                           overflow-hidden
//                           rounded-[14px]
//                           border
//                           border-white/[0.07]
//                           bg-white/[0.035]
//                           p-4
//                           transition-all
//                           duration-300

//                           hover:border-[#B8F23A]/25
//                           hover:bg-white/[0.055]
//                         ">
//                         <span
//                           className="
//                             flex
//                             h-12
//                             w-12
//                             shrink-0
//                             items-center
//                             justify-center
//                             rounded-full
//                             border
//                             border-[#B8F23A]/30
//                             bg-[#B8F23A]/[0.07]
//                             text-[#B8F23A]
//                             transition-all
//                             duration-300

//                             group-hover:bg-[#B8F23A]
//                             group-hover:text-[#10372E]
//                           ">
//                           <Icon size={18} strokeWidth={1.6} />
//                         </span>

//                         <div className="min-w-0 flex-1">
//                           <div className="flex items-center gap-3">
//                             <span
//                               className="
//                                 text-[6px]
//                                 font-bold
//                                 tracking-[0.14em]
//                                 text-[#B8F23A]
//                               ">
//                               {output.number}
//                             </span>

//                             <span className="h-px w-5 bg-[#B8F23A]/40" />
//                           </div>

//                           <p
//                             className="
//                               mt-1
//                               text-[14px]
//                               font-medium
//                               tracking-[-0.03em]
//                               text-white/78
//                             ">
//                             {output.title}
//                           </p>

//                           <p
//                             className="
//                               mt-1.5
//                               max-w-[310px]
//                               text-[7px]
//                               leading-4
//                               text-white/28
//                             ">
//                             {output.description}
//                           </p>
//                         </div>
//                       </motion.div>
//                     );
//                   })}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* =================================================
//               MOBILE
//           ================================================= */}

//           <div
//             className="
//               relative
//               z-10
//               p-5

//               lg:hidden
//             ">
//             {/* INPUT */}

//             <div
//               className="
//                 rounded-[16px]
//                 border
//                 border-white/[0.07]
//                 bg-white/[0.035]
//                 p-5
//               ">
//               <div className="flex items-center gap-4">
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
//                     border-white/10
//                     text-white/50
//                   ">
//                   <Trash2 size={20} strokeWidth={1.5} />
//                 </span>

//                 <div>
//                   <p
//                     className="
//                       text-[6px]
//                       font-bold
//                       uppercase
//                       tracking-[0.15em]
//                       text-[#B8F23A]
//                     ">
//                     01 · Residuo
//                   </p>

//                   <p
//                     className="
//                       mt-1
//                       text-[18px]
//                       font-medium
//                       tracking-[-0.035em]
//                     ">
//                     Material de origen
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div
//               className="
//                 mx-auto
//                 h-9
//                 w-px
//                 bg-[#B8F23A]/40
//               "
//             />

//             {/* CORE */}

//             <div
//               className="
//                 relative
//                 mx-auto
//                 flex
//                 h-[190px]
//                 w-[190px]
//                 items-center
//                 justify-center
//                 rounded-full
//                 border
//                 border-dashed
//                 border-[#B8F23A]/25
//               ">
//               <div
//                 className="
//                   flex
//                   h-[135px]
//                   w-[135px]
//                   flex-col
//                   items-center
//                   justify-center
//                   rounded-full
//                   bg-[#B8F23A]
//                   text-[#10372E]
//                 ">
//                 <Recycle size={34} strokeWidth={1.5} />

//                 <p
//                   className="
//                     mt-3
//                     text-[7px]
//                     font-bold
//                     uppercase
//                     tracking-[0.14em]
//                   ">
//                   Transformación
//                 </p>
//               </div>
//             </div>

//             <div
//               className="
//                 mx-auto
//                 h-9
//                 w-px
//                 bg-[#B8F23A]/40
//               "
//             />

//             {/* OUTPUTS */}

//             <div className="space-y-3">
//               {outputs.map((output) => {
//                 const Icon = output.icon;

//                 return (
//                   <div
//                     key={output.title}
//                     className="
//                       flex
//                       items-center
//                       gap-4
//                       rounded-[14px]
//                       border
//                       border-white/[0.07]
//                       bg-white/[0.035]
//                       p-4
//                     ">
//                     <span
//                       className="
//                         flex
//                         h-11
//                         w-11
//                         shrink-0
//                         items-center
//                         justify-center
//                         rounded-full
//                         bg-[#B8F23A]/10
//                         text-[#B8F23A]
//                       ">
//                       <Icon size={17} strokeWidth={1.6} />
//                     </span>

//                     <div>
//                       <p
//                         className="
//                           text-[6px]
//                           font-bold
//                           uppercase
//                           tracking-[0.14em]
//                           text-[#B8F23A]
//                         ">
//                         {output.number}
//                       </p>

//                       <p
//                         className="
//                           mt-1
//                           text-[15px]
//                           font-medium
//                           tracking-[-0.03em]
//                         ">
//                         {output.title}
//                       </p>

//                       <p
//                         className="
//                           mt-1
//                           text-[7px]
//                           leading-4
//                           text-white/30
//                         ">
//                         {output.description}
//                       </p>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* =================================================
//               BOTTOM STRIP
//           ================================================= */}

//           <div
//             className="
//               relative
//               z-20
//               grid
//               border-t
//               border-white/[0.08]
//               bg-[#0C3028]

//               sm:grid-cols-3
//             ">
//             {[
//               ["01", "Identificar", "Qué contiene"],
//               ["02", "Transformar", "Cómo recuperarlo"],
//               ["03", "Valorizar", "Dónde vuelve a servir"],
//             ].map(([number, title, text], index) => (
//               <div
//                 key={number}
//                 className={`
//                   flex
//                   items-center
//                   gap-4
//                   px-5
//                   py-5

//                   ${
//                     index > 0
//                       ? "border-t border-white/[0.06] sm:border-l sm:border-t-0"
//                       : ""
//                   }
//                 `}>
//                 <span
//                   className="
//                     text-[7px]
//                     font-bold
//                     tracking-[0.14em]
//                     text-[#B8F23A]
//                   ">
//                   {number}
//                 </span>

//                 <div>
//                   <p
//                     className="
//                       text-[8px]
//                       font-bold
//                       uppercase
//                       tracking-[0.13em]
//                       text-white/68
//                     ">
//                     {title}
//                   </p>

//                   <p
//                     className="
//                       mt-1
//                       text-[6px]
//                       uppercase
//                       tracking-[0.11em]
//                       text-white/22
//                     ">
//                     {text}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </motion.div>

//         {/* ===================================================
//             FINAL PUNCHLINE
//         =================================================== */}

//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 15,
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
//             delay: 0.1,
//           }}
//           className="
//             mt-6
//             flex
//             flex-col
//             gap-5
//             rounded-[15px]
//             border
//             border-[#143E33]/[0.07]
//             bg-white
//             px-5
//             py-5
//             shadow-[0_10px_30px_rgba(20,62,51,.035)]

//             sm:flex-row
//             sm:items-center
//             sm:justify-between
//           ">
//           <div className="flex items-center gap-4">
//             <span
//               className="
//                 flex
//                 h-9
//                 w-9
//                 shrink-0
//                 items-center
//                 justify-center
//                 rounded-full
//                 bg-[#EAF3DC]
//                 text-[#78A500]
//               ">
//               <Recycle size={14} strokeWidth={1.6} />
//             </span>

//             <div>
//               <p
//                 className="
//                   text-[6px]
//                   font-bold
//                   uppercase
//                   tracking-[0.15em]
//                   text-[#143E33]/30
//                 ">
//                 Circularidad
//               </p>

//               <p
//                 className="
//                   mt-1
//                   text-[11px]
//                   font-medium
//                   tracking-[-0.015em]
//                   text-[#143E33]/68
//                 ">
//                 El objetivo no es esconder el residuo. Es recuperar lo que
//                 todavía contiene.
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center gap-3">
//             <span
//               className="
//                 text-[7px]
//                 font-bold
//                 uppercase
//                 tracking-[0.17em]
//                 text-[#76A400]
//               ">
//               Residuo · Transformación · Valor
//             </span>

//             <ArrowRight
//               size={13}
//               strokeWidth={1.5}
//               className="text-[#83B500]"
//             />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default ResiduosFlowSection;

import { motion } from "motion/react";
import {
  ArrowRight,
  Boxes,
  Factory,
  Flame,
  Leaf,
  Recycle,
  Sparkles,
  Trash2,
  Zap,
} from "lucide-react";

/* =========================================================
   OUTPUTS
========================================================= */

const outputs = [
  {
    number: "01",
    icon: Boxes,
    title: "Materiales",
    description:
      "Materiales recuperados que pueden reincorporarse a nuevos ciclos productivos.",
  },
  {
    number: "02",
    icon: Flame,
    title: "Energía",
    description:
      "Aprovechamiento energético cuando la composición y la tecnología lo permiten.",
  },
  {
    number: "03",
    icon: Leaf,
    title: "Recursos",
    description:
      "Nuevos recursos o insumos derivados de corrientes aptas para valorización.",
  },
];

/* =========================================================
   MATERIAL PARTICLE
========================================================= */

function MaterialParticle({ delay = 0, size = 8, top = "50%" }) {
  return (
    <motion.span
      animate={{
        left: ["-4%", "104%"],
        opacity: [0, 1, 1, 0],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 4.8,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        width: size,
        height: size,
        top,
      }}
      className="
        absolute
        z-20
        rounded-[2px]
        bg-[#B8F23A]
        shadow-[0_0_14px_rgba(184,242,58,.55)]
      "
    />
  );
}

/* =========================================================
   MAIN
========================================================= */

function ResiduosFlowSection() {
  return (
    <section
      id="residuos-flow"
      className="
        relative
        overflow-hidden
        bg-[#F3F6EF]
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
          opacity-[0.26]
          [background-image:linear-gradient(rgba(20,62,51,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(20,62,51,.025)_1px,transparent_1px)]
          [background-size:72px_72px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[180px]
          -top-[180px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#B8F23A]/10
          blur-[115px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-[220px]
          -left-[180px]
          h-[430px]
          w-[430px]
          rounded-full
          bg-[#143E33]/[0.035]
          blur-[100px]
        "
      />

      <span
        className="
          pointer-events-none
          absolute
          -right-5
          bottom-[-35px]
          hidden
          select-none
          text-[clamp(9rem,17vw,19rem)]
          font-semibold
          leading-none
          tracking-[-0.09em]
          text-[#143E33]/[0.018]

          xl:block
        ">
        VALUE
      </span>

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
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            grid
            gap-7

            lg:grid-cols-[1fr_400px]
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
                  Recuperación de valor
                </p>
              </div>
            </div>

            <h2
              className="
                mt-5
                max-w-[1000px]
                text-[clamp(2.8rem,4.5vw,5.4rem)]
                font-normal
                leading-[0.92]
                tracking-[-0.065em]
              ">
              El valor no desaparece.
              <span className="block">Solo cambia</span>
              <span className="block text-[#83B500]">de forma.</span>
            </h2>
          </div>

          <div className="lg:pb-1">
            <p
              className="
                max-w-[400px]
                text-[14px]
                leading-7
                text-[#143E33]/46
              ">
              Una estrategia de valorización parte de la caracterización de cada
              corriente y define la ruta adecuada para recuperar materiales,
              energía o nuevos recursos cuando sea viable.
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
                Materia → proceso → nuevo valor
              </span>
            </div>
          </div>
        </motion.div>

        {/* ===================================================
            TRANSFORMATION STAGE
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
            amount: 0.1,
          }}
          transition={{
            duration: 0.85,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mt-11
            overflow-hidden
            rounded-[26px]
            bg-[#10372E]
            text-white
            shadow-[0_30px_90px_rgba(20,62,51,.14)]
          ">
          {/* DARK GRID */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-[0.13]
              [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)]
              [background-size:42px_42px]
            "
          />

          {/* CENTRAL GLOW */}

          <div
            className="
              pointer-events-none
              absolute
              left-[50%]
              top-[45%]
              h-[480px]
              w-[620px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#B8F23A]/[0.075]
              blur-[115px]
            "
          />

          {/* =================================================
              TOP CONTROL BAR
          ================================================= */}

          <div
            className="
              relative
              z-20
              flex
              flex-col
              gap-4
              border-b
              border-white/[0.08]
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
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-[9px]
                  bg-[#B8F23A]/10
                  text-[#B8F23A]
                ">
                <Factory size={15} strokeWidth={1.7} />
              </span>

              <div>
                <p
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.19em]
                    text-[#B8F23A]
                  ">
                  Sistema de transformación
                </p>

                <p
                  className="
                    mt-1
                    text-[11px]
                    uppercase
                    tracking-[0.13em]
                    text-white/24
                  ">
                  Residuo · Separación · Recuperación · Valor
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
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
                    h-2
                    w-2
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
                  tracking-[0.14em]
                  text-white/30
                ">
                Flujo activo
              </span>
            </div>
          </div>

          {/* =================================================
              DESKTOP STAGE
          ================================================= */}

          <div
            className="
              relative
              hidden
              min-h-[560px]
              overflow-hidden

              lg:block
            ">
            {/* =================================================
                LEFT INPUT
            ================================================= */}

            <div
              className="
                absolute
                bottom-[70px]
                left-[4%]
                top-[70px]
                w-[23%]
              ">
              <div
                className="
                  relative
                  flex
                  h-full
                  flex-col
                  justify-between
                  overflow-hidden
                  rounded-[20px]
                  border
                  border-white/[0.08]
                  bg-[#0C3028]/78
                  p-6
                  backdrop-blur-sm
                ">
                <span
                  className="
                    pointer-events-none
                    absolute
                    -right-4
                    -top-8
                    text-[140px]
                    font-light
                    leading-none
                    tracking-[-0.09em]
                    text-white/[0.025]
                  ">
                  01
                </span>

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-[14px]
                        bg-white/[0.06]
                        text-white/48
                      ">
                      <Trash2 size={24} strokeWidth={1.5} />
                    </span>

                    <span
                      className="
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.15em]
                        text-white/25
                      ">
                      Entrada
                    </span>
                  </div>

                  <p
                    className="
                      mt-8
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.17em]
                      text-[#B8F23A]
                    ">
                    Material de origen
                  </p>

                  <h3
                    className="
                      mt-3
                      text-[clamp(2rem,2.8vw,3.2rem)]
                      font-normal
                      leading-[0.94]
                      tracking-[-0.05em]
                    ">
                    Lo que hoy
                    <span className="block">llamamos residuo.</span>
                  </h3>

                  <p
                    className="
                      mt-5
                      max-w-[300px]
                      text-[12px]
                      leading-5
                      text-white/34
                    ">
                    Residuos sólidos urbanos, agroindustriales y de manejo
                    especial pueden requerir rutas distintas según su
                    composición y potencial de aprovechamiento.
                  </p>
                </div>

                {/* ABSTRACT WASTE */}

                <div
                  className="
                    relative
                    mt-8
                    flex
                    h-[95px]
                    items-end
                    gap-1.5
                    overflow-hidden
                    rounded-[12px]
                    border
                    border-white/[0.06]
                    bg-black/10
                    px-4
                    pb-4
                  ">
                  {Array.from({ length: 15 }).map((_, index) => (
                    <motion.span
                      key={index}
                      initial={{
                        y: -30,
                        opacity: 0,
                        rotate: -20,
                      }}
                      whileInView={{
                        y: 0,
                        opacity: 1,
                        rotate: index % 2 === 0 ? 8 : -8,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: 0.2 + index * 0.035,
                        duration: 0.35,
                      }}
                      className={`
                        block
                        rounded-[2px]
                        bg-white/[0.12]

                        ${
                          index % 4 === 0
                            ? "h-8 w-5"
                            : index % 3 === 0
                              ? "h-5 w-7"
                              : "h-6 w-4"
                        }
                      `}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* =================================================
                INPUT CONNECTOR
            ================================================= */}

            <div
              className="
                absolute
                left-[27%]
                top-1/2
                h-[100px]
                w-[12%]
                -translate-y-1/2
              ">
              <div
                className="
                  absolute
                  left-0
                  right-0
                  top-1/2
                  h-[2px]
                  -translate-y-1/2
                  bg-gradient-to-r
                  from-white/10
                  via-[#B8F23A]/65
                  to-[#B8F23A]
                ">
                <MaterialParticle delay={0} top="47%" />
                <MaterialParticle delay={1.1} size={6} top="52%" />
                <MaterialParticle delay={2.2} size={5} top="42%" />
              </div>

              <ArrowRight
                size={18}
                strokeWidth={1.5}
                className="
                  absolute
                  right-[-5px]
                  top-1/2
                  -translate-y-1/2
                  text-[#B8F23A]
                "
              />
            </div>

            {/* =================================================
                TRANSFORMATION CORE
            ================================================= */}

            <div
              className="
                absolute
                left-[48%]
                top-1/2
                z-20
                -translate-x-1/2
                -translate-y-1/2
              ">
              {/* OUTER HALO */}

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 28,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  relative
                  flex
                  h-[320px]
                  w-[320px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-dashed
                  border-[#B8F23A]/25
                ">
                {/* OUTER DOTS */}

                {[
                  "left-1/2 top-[-5px] -translate-x-1/2",
                  "bottom-[-5px] left-1/2 -translate-x-1/2",
                  "left-[-5px] top-1/2 -translate-y-1/2",
                  "right-[-5px] top-1/2 -translate-y-1/2",
                ].map((position) => (
                  <span
                    key={position}
                    className={`
                      absolute
                      h-3
                      w-3
                      rounded-full
                      bg-[#B8F23A]
                      shadow-[0_0_18px_rgba(184,242,58,.65)]
                      ${position}
                    `}
                  />
                ))}

                {/* SECOND RING */}

                <motion.div
                  animate={{
                    rotate: -360,
                  }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    absolute
                    inset-[38px]
                    rounded-full
                    border
                    border-[#B8F23A]/10
                  "
                />

                {/* CORE */}

                <div
                  className="
                    relative
                    flex
                    h-[185px]
                    w-[185px]
                    flex-col
                    items-center
                    justify-center
                    rounded-full
                    bg-[#B8F23A]
                    text-[#10372E]
                    shadow-[0_0_70px_rgba(184,242,58,.16)]
                  ">
                  <Recycle size={42} strokeWidth={1.5} />

                  <p
                    className="
                      mt-4
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                    ">
                    Transformación
                  </p>

                  <p
                    className="
                      mt-2
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.12em]
                      opacity-55
                    ">
                    Recuperar · Valorizar
                  </p>
                </div>
              </motion.div>

              {/* CORE LABEL */}

              <div
                className="
                  absolute
                  -bottom-[74px]
                  left-1/2
                  -translate-x-1/2
                  whitespace-nowrap
                  text-center
                ">
                <p
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.17em]
                    text-[#B8F23A]
                  ">
                  El proceso adecuado
                </p>

                <p
                  className="
                    mt-1
                    text-[11px]
                    text-white/28
                  ">
                  depende de cada corriente
                </p>
              </div>
            </div>

            {/* =================================================
                OUTPUT CONNECTOR
            ================================================= */}

            <div
              className="
                absolute
                left-[59%]
                right-[35%]
                top-1/2
                h-[2px]
                -translate-y-1/2
                bg-gradient-to-r
                from-[#B8F23A]
                via-[#B8F23A]/70
                to-white/10
              ">
              <motion.span
                animate={{
                  left: ["0%", "100%"],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 3.2,
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
                  shadow-[0_0_16px_rgba(184,242,58,.9)]
                "
              />
            </div>

            {/* =================================================
                OUTPUTS
            ================================================= */}

            <div
              className="
                absolute
                bottom-[55px]
                right-[4%]
                top-[55px]
                w-[31%]
              ">
              <div className="flex h-full flex-col">
                <div>
                  <p
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-[#B8F23A]
                    ">
                    Valor recuperado
                  </p>

                  <h3
                    className="
                      mt-2
                      max-w-[440px]
                      text-[clamp(2rem,2.9vw,3.4rem)]
                      font-normal
                      leading-[0.95]
                      tracking-[-0.05em]
                    ">
                    El residuo sale
                    <span className="block text-[#B8F23A]">
                      convertido en oportunidad.
                    </span>
                  </h3>
                </div>

                <div
                  className="
                    mt-7
                    grid
                    flex-1
                    gap-3
                  ">
                  {outputs.map((output, index) => {
                    const Icon = output.icon;

                    return (
                      <motion.div
                        key={output.title}
                        initial={{
                          opacity: 0,
                          x: 18,
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
                          delay: 0.3 + index * 0.08,
                        }}
                        className="
                          group
                          relative
                          flex
                          items-center
                          gap-4
                          overflow-hidden
                          rounded-[14px]
                          border
                          border-white/[0.07]
                          bg-white/[0.035]
                          p-4
                          transition-all
                          duration-300

                          hover:border-[#B8F23A]/25
                          hover:bg-white/[0.055]
                        ">
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
                            border-[#B8F23A]/30
                            bg-[#B8F23A]/[0.07]
                            text-[#B8F23A]
                            transition-all
                            duration-300

                            group-hover:bg-[#B8F23A]
                            group-hover:text-[#10372E]
                          ">
                          <Icon size={18} strokeWidth={1.6} />
                        </span>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-3">
                            <span
                              className="
                                text-[11px]
                                font-bold
                                tracking-[0.14em]
                                text-[#B8F23A]
                              ">
                              {output.number}
                            </span>

                            <span className="h-px w-5 bg-[#B8F23A]/40" />
                          </div>

                          <p
                            className="
                              mt-1
                              text-[14px]
                              font-medium
                              tracking-[-0.03em]
                              text-white/78
                            ">
                            {output.title}
                          </p>

                          <p
                            className="
                              mt-1.5
                              max-w-[310px]
                              text-[11px]
                              leading-4
                              text-white/28
                            ">
                            {output.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              MOBILE
          ================================================= */}

          <div
            className="
              relative
              z-10
              p-5

              lg:hidden
            ">
            {/* INPUT */}

            <div
              className="
                rounded-[16px]
                border
                border-white/[0.07]
                bg-white/[0.035]
                p-5
              ">
              <div className="flex items-center gap-4">
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
                    border-white/10
                    text-white/50
                  ">
                  <Trash2 size={20} strokeWidth={1.5} />
                </span>

                <div>
                  <p
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-[#B8F23A]
                    ">
                    01 · Residuo
                  </p>

                  <p
                    className="
                      mt-1
                      text-[18px]
                      font-medium
                      tracking-[-0.035em]
                    ">
                    Material de origen
                  </p>
                </div>
              </div>
            </div>

            <div
              className="
                mx-auto
                h-9
                w-px
                bg-[#B8F23A]/40
              "
            />

            {/* CORE */}

            <div
              className="
                relative
                mx-auto
                flex
                h-[190px]
                w-[190px]
                items-center
                justify-center
                rounded-full
                border
                border-dashed
                border-[#B8F23A]/25
              ">
              <div
                className="
                  flex
                  h-[135px]
                  w-[135px]
                  flex-col
                  items-center
                  justify-center
                  rounded-full
                  bg-[#B8F23A]
                  text-[#10372E]
                ">
                <Recycle size={34} strokeWidth={1.5} />

                <p
                  className="
                    mt-3
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.14em]
                  ">
                  Transformación
                </p>
              </div>
            </div>

            <div
              className="
                mx-auto
                h-9
                w-px
                bg-[#B8F23A]/40
              "
            />

            {/* OUTPUTS */}

            <div className="space-y-3">
              {outputs.map((output) => {
                const Icon = output.icon;

                return (
                  <div
                    key={output.title}
                    className="
                      flex
                      items-center
                      gap-4
                      rounded-[14px]
                      border
                      border-white/[0.07]
                      bg-white/[0.035]
                      p-4
                    ">
                    <span
                      className="
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#B8F23A]/10
                        text-[#B8F23A]
                      ">
                      <Icon size={17} strokeWidth={1.6} />
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
                        {output.number}
                      </p>

                      <p
                        className="
                          mt-1
                          text-[15px]
                          font-medium
                          tracking-[-0.03em]
                        ">
                        {output.title}
                      </p>

                      <p
                        className="
                          mt-1
                          text-[11px]
                          leading-4
                          text-white/30
                        ">
                        {output.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* =================================================
              BOTTOM STRIP
          ================================================= */}

          <div
            className="
              relative
              z-20
              grid
              border-t
              border-white/[0.08]
              bg-[#0C3028]

              sm:grid-cols-3
            ">
            {[
              ["01", "Identificar", "Qué contiene"],
              ["02", "Transformar", "Cómo recuperarlo"],
              ["03", "Valorizar", "Dónde vuelve a servir"],
            ].map(([number, title, text], index) => (
              <div
                key={number}
                className={`
                  flex
                  items-center
                  gap-4
                  px-5
                  py-5

                  ${
                    index > 0
                      ? "border-t border-white/[0.06] sm:border-l sm:border-t-0"
                      : ""
                  }
                `}>
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
                      text-white/68
                    ">
                    {title}
                  </p>

                  <p
                    className="
                      mt-1
                      text-[11px]
                      uppercase
                      tracking-[0.11em]
                      text-white/22
                    ">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ===================================================
            FINAL PUNCHLINE
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
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
            delay: 0.1,
          }}
          className="
            mt-6
            flex
            flex-col
            gap-5
            rounded-[15px]
            border
            border-[#143E33]/[0.07]
            bg-white
            px-5
            py-5
            shadow-[0_10px_30px_rgba(20,62,51,.035)]

            sm:flex-row
            sm:items-center
            sm:justify-between
          ">
          <div className="flex items-center gap-4">
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
              ">
              <Recycle size={14} strokeWidth={1.6} />
            </span>

            <div>
              <p
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-[#143E33]/30
                ">
                Circularidad
              </p>

              <p
                className="
                  mt-1
                  text-[11px]
                  font-medium
                  tracking-[-0.015em]
                  text-[#143E33]/68
                ">
                El objetivo no es esconder el residuo. Es recuperar lo que
                todavía contiene.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.17em]
                text-[#76A400]
              ">
              Residuo · Transformación · Valor
            </span>

            <ArrowRight
              size={13}
              strokeWidth={1.5}
              className="text-[#83B500]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ResiduosFlowSection;
