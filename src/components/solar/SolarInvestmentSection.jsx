// // import { AnimatePresence, motion } from "motion/react";
// // import {
// //   ArrowUpRight,
// //   BadgeDollarSign,
// //   Building2,
// //   HandCoins,
// //   Landmark,
// //   RefreshCw,
// //   Sparkles,
// //   WalletCards,
// // } from "lucide-react";
// // import { useState } from "react";

// // const investmentModels = [
// //   {
// //     id: "compra-directa",
// //     number: "01",
// //     short: "CAPEX",
// //     title: "Compra Directa",
// //     headline: "La infraestructura es tuya desde el inicio.",
// //     description:
// //       "Implica realizar la inversión total del proyecto y conservar directamente los beneficios económicos generados por el sistema.",
// //     note: "Es el modelo indicado para organizaciones que buscan propiedad inmediata del activo y capturar directamente el valor del proyecto.",
// //     icon: WalletCards,
// //     points: [
// //       "Propiedad del sistema",
// //       "Inversión inicial completa",
// //       "Beneficios económicos directos",
// //     ],
// //   },
// //   {
// //     id: "financiamiento",
// //     number: "02",
// //     short: "FIN",
// //     title: "Financiamiento",
// //     headline: "Distribuye la inversión en el tiempo.",
// //     description:
// //       "El proyecto se financia mediante crédito y la inversión se paga en mensualidades, reduciendo el desembolso inicial.",
// //     note: "Permite implementar infraestructura energética con una estructura financiera distinta a una compra directa.",
// //     icon: Landmark,
// //     points: [
// //       "Pago en mensualidades",
// //       "Menor inversión inicial",
// //       "Propiedad del activo",
// //     ],
// //   },
// //   {
// //     id: "ppa",
// //     number: "03",
// //     short: "PPA",
// //     title: "PPA",
// //     headline: "Ahorro energético sin inversión inicial.",
// //     description:
// //       "El esquema permite acceder a energía solar mediante un acuerdo de compra de energía, generando ahorro respecto a la tarifa eléctrica sin realizar la inversión inicial del sistema.",
// //     note: "Al concluir el contrato, el esquema puede contemplar que el sistema pase a propiedad del cliente.",
// //     icon: HandCoins,
// //     points: [
// //       "Sin inversión inicial",
// //       "Pago por energía",
// //       "Ahorro desde la operación",
// //     ],
// //   },
// //   {
// //     id: "arrendamiento",
// //     number: "04",
// //     short: "LEASE",
// //     title: "Arrendamiento",
// //     headline: "Transforma inversión en una mensualidad.",
// //     description:
// //       "Con poca inversión inicial, el proyecto puede estructurarse mediante pagos de arrendamiento y opción de adquisición a valor residual al finalizar el periodo.",
// //     note: "Es una alternativa para organizaciones que prefieren distribuir el costo del sistema y mantener flexibilidad financiera.",
// //     icon: RefreshCw,
// //     points: [
// //       "Baja inversión inicial",
// //       "Pago periódico",
// //       "Opción de compra final",
// //     ],
// //   },
// // ];

// // function SolarInvestmentSection() {
// //   const [activeId, setActiveId] = useState(investmentModels[0].id);

// //   const activeModel =
// //     investmentModels.find((model) => model.id === activeId) ||
// //     investmentModels[0];

// //   const ActiveIcon = activeModel.icon;

// //   return (
// //     <section
// //       id="solar-inversion"
// //       className="
// //         relative
// //         overflow-hidden
// //         bg-[#F7F9F4]
// //         py-20
// //         text-[#143E33]
// //         lg:py-24
// //       ">
// //       {/* =====================================================
// //           BACKGROUND
// //       ===================================================== */}

// //       <div
// //         className="
// //           pointer-events-none
// //           absolute
// //           inset-0
// //           opacity-[0.3]
// //           [background-image:linear-gradient(rgba(20,62,51,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(20,62,51,.035)_1px,transparent_1px)]
// //           [background-size:72px_72px]
// //         "
// //       />

// //       <div
// //         className="
// //           pointer-events-none
// //           absolute
// //           -right-[170px]
// //           -top-[180px]
// //           h-[520px]
// //           w-[520px]
// //           rounded-full
// //           bg-[#9DD827]/10
// //           blur-[110px]
// //         "
// //       />

// //       <span
// //         className="
// //           pointer-events-none
// //           absolute
// //           -right-4
// //           bottom-[-25px]
// //           hidden
// //           select-none
// //           text-[clamp(9rem,17vw,19rem)]
// //           font-semibold
// //           leading-none
// //           tracking-[-0.09em]
// //           text-[#143E33]/[0.018]
// //           xl:block
// //         ">
// //         VALUE
// //       </span>

// //       {/* =====================================================
// //           CONTAINER
// //       ===================================================== */}

// //       <div
// //         className="
// //           relative
// //           z-10
// //           mx-auto
// //           max-w-[1760px]
// //           px-5
// //           sm:px-8
// //           lg:px-12
// //           xl:px-16
// //           2xl:px-20
// //         ">
// //         {/* ===================================================
// //             HEADER
// //         =================================================== */}

// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true, amount: 0.25 }}
// //           transition={{
// //             duration: 0.75,
// //             ease: [0.22, 1, 0.36, 1],
// //           }}
// //           className="
// //             grid
// //             gap-8
// //             lg:grid-cols-[1fr_420px]
// //             lg:items-end
// //           ">
// //           <div>
// //             <div className="flex items-center gap-4">
// //               <span
// //                 className="
// //                   flex
// //                   h-10
// //                   w-10
// //                   items-center
// //                   justify-center
// //                   rounded-full
// //                   bg-[#9DD827]
// //                   text-[#143E33]
// //                 ">
// //                 <BadgeDollarSign size={17} strokeWidth={1.6} />
// //               </span>

// //               <div className="flex items-center gap-3">
// //                 <span className="h-px w-8 bg-[#83B500]" />

// //                 <p
// //                   className="
// //                     text-[8px]
// //                     font-bold
// //                     uppercase
// //                     tracking-[0.22em]
// //                     text-[#76A400]
// //                   ">
// //                   Esquemas de inversión
// //                 </p>
// //               </div>
// //             </div>

// //             <h2
// //               className="
// //                 mt-6
// //                 max-w-[900px]
// //                 text-[clamp(2.7rem,4.3vw,5rem)]
// //                 font-normal
// //                 leading-[0.94]
// //                 tracking-[-0.06em]
// //               ">
// //               La tecnología puede ser la misma.
// //               <span className="block text-[#83B500]">
// //                 La forma de invertir no.
// //               </span>
// //             </h2>
// //           </div>

// //           <div className="lg:pb-2">
// //             <p
// //               className="
// //                 max-w-[420px]
// //                 text-[13px]
// //                 leading-7
// //                 text-[#143E33]/48
// //               ">
// //               GRUNER contempla distintas estructuras para desarrollar un
// //               proyecto solar según las necesidades financieras y operativas de
// //               cada organización.
// //             </p>

// //             <div className="mt-5 flex items-center gap-3">
// //               <Sparkles
// //                 size={12}
// //                 strokeWidth={1.5}
// //                 className="text-[#83B500]"
// //               />

// //               <span
// //                 className="
// //                   text-[7px]
// //                   font-bold
// //                   uppercase
// //                   tracking-[0.17em]
// //                   text-[#143E33]/35
// //                 ">
// //                 Flexibilidad financiera
// //               </span>
// //             </div>
// //           </div>
// //         </motion.div>

// //         {/* ===================================================
// //             COMPARATOR
// //         =================================================== */}

// //         <div
// //           className="
// //             mt-14
// //             overflow-hidden
// //             rounded-[20px]
// //             border
// //             border-[#143E33]/[0.08]
// //             bg-white
// //             shadow-[0_25px_70px_rgba(20,62,51,.07)]
// //           ">
// //           <div
// //             className="
// //               grid
// //               lg:grid-cols-[.72fr_1.28fr]
// //             ">
// //             {/* =================================================
// //                 SELECTOR
// //             ================================================= */}

// //             <div
// //               className="
// //                 border-b
// //                 border-[#143E33]/[0.08]
// //                 bg-[#EEF3E7]
// //                 lg:border-b-0
// //                 lg:border-r
// //               ">
// //               <div
// //                 className="
// //                   flex
// //                   items-center
// //                   justify-between
// //                   border-b
// //                   border-[#143E33]/[0.08]
// //                   px-6
// //                   py-5
// //                 ">
// //                 <span
// //                   className="
// //                     text-[7px]
// //                     font-bold
// //                     uppercase
// //                     tracking-[0.18em]
// //                     text-[#143E33]/35
// //                   ">
// //                   Modelo financiero
// //                 </span>

// //                 <span
// //                   className="
// //                     text-[7px]
// //                     font-bold
// //                     tracking-[0.15em]
// //                     text-[#78A500]
// //                   ">
// //                   01—04
// //                 </span>
// //               </div>

// //               {investmentModels.map((model) => {
// //                 const Icon = model.icon;
// //                 const isActive = model.id === activeId;

// //                 return (
// //                   <button
// //                     key={model.id}
// //                     type="button"
// //                     onClick={() => setActiveId(model.id)}
// //                     className={`
// //                       group
// //                       relative
// //                       flex
// //                       w-full
// //                       items-center
// //                       gap-4
// //                       border-b
// //                       border-[#143E33]/[0.07]
// //                       px-5
// //                       py-5
// //                       text-left
// //                       transition-all
// //                       duration-400
// //                       last:border-b-0

// //                       ${
// //                         isActive
// //                           ? "bg-[#143E33] text-white"
// //                           : "text-[#143E33] hover:bg-[#E3ECD7]"
// //                       }
// //                     `}>
// //                     <span
// //                       className={`
// //                         flex
// //                         h-11
// //                         w-11
// //                         shrink-0
// //                         items-center
// //                         justify-center
// //                         rounded-[11px]
// //                         transition-all
// //                         duration-300

// //                         ${
// //                           isActive
// //                             ? "bg-[#B8F23A] text-[#143E33]"
// //                             : "bg-white text-[#78A500] group-hover:bg-[#9DD827] group-hover:text-[#143E33]"
// //                         }
// //                       `}>
// //                       <Icon size={18} strokeWidth={1.6} />
// //                     </span>

// //                     <div className="min-w-0 flex-1">
// //                       <div className="flex items-center gap-3">
// //                         <span
// //                           className={`
// //                             text-[6px]
// //                             font-bold
// //                             tracking-[0.15em]

// //                             ${isActive ? "text-[#B8F23A]" : "text-[#143E33]/25"}
// //                           `}>
// //                           {model.number}
// //                         </span>

// //                         <span
// //                           className={`
// //                             text-[6px]
// //                             font-bold
// //                             uppercase
// //                             tracking-[0.15em]

// //                             ${isActive ? "text-white/35" : "text-[#78A500]"}
// //                           `}>
// //                           {model.short}
// //                         </span>
// //                       </div>

// //                       <p className="mt-1.5 text-[14px] font-medium">
// //                         {model.title}
// //                       </p>
// //                     </div>

// //                     <ArrowUpRight
// //                       size={14}
// //                       strokeWidth={1.5}
// //                       className={`
// //                         shrink-0
// //                         transition-transform
// //                         duration-300
// //                         group-hover:-translate-y-0.5
// //                         group-hover:translate-x-0.5

// //                         ${isActive ? "text-[#B8F23A]" : "text-[#143E33]/25"}
// //                       `}
// //                     />

// //                     {isActive && (
// //                       <motion.span
// //                         layoutId="investment-indicator"
// //                         className="
// //                           absolute
// //                           bottom-0
// //                           left-0
// //                           top-0
// //                           w-[3px]
// //                           bg-[#B8F23A]
// //                         "
// //                       />
// //                     )}
// //                   </button>
// //                 );
// //               })}
// //             </div>

// //             {/* =================================================
// //                 ACTIVE MODEL
// //             ================================================= */}

// //             <div
// //               className="
// //                 relative
// //                 min-h-[520px]
// //                 overflow-hidden
// //                 p-7

// //                 sm:p-9
// //                 lg:p-10
// //                 xl:p-12
// //               ">
// //               {/* number */}

// //               <AnimatePresence mode="wait">
// //                 <motion.span
// //                   key={`investment-number-${activeModel.number}`}
// //                   initial={{
// //                     opacity: 0,
// //                     x: 30,
// //                   }}
// //                   animate={{
// //                     opacity: 1,
// //                     x: 0,
// //                   }}
// //                   exit={{
// //                     opacity: 0,
// //                     x: -20,
// //                   }}
// //                   className="
// //                     pointer-events-none
// //                     absolute
// //                     -right-3
// //                     -top-8
// //                     text-[170px]
// //                     font-light
// //                     leading-none
// //                     tracking-[-0.09em]
// //                     text-[#7FAE00]/[0.06]
// //                   ">
// //                   {activeModel.number}
// //                 </motion.span>
// //               </AnimatePresence>

// //               <div
// //                 className="
// //                   relative
// //                   z-10
// //                   flex
// //                   h-full
// //                   flex-col
// //                 ">
// //                 <AnimatePresence mode="wait">
// //                   <motion.div
// //                     key={activeModel.id}
// //                     initial={{
// //                       opacity: 0,
// //                       y: 16,
// //                     }}
// //                     animate={{
// //                       opacity: 1,
// //                       y: 0,
// //                     }}
// //                     exit={{
// //                       opacity: 0,
// //                       y: -8,
// //                     }}
// //                     transition={{
// //                       duration: 0.42,
// //                     }}>
// //                     <div
// //                       className="
// //                         flex
// //                         items-start
// //                         justify-between
// //                         gap-5
// //                       ">
// //                       <span
// //                         className="
// //                           flex
// //                           h-13
// //                           w-13
// //                           items-center
// //                           justify-center
// //                           rounded-[13px]
// //                           bg-[#EAF3DC]
// //                           text-[#78A500]
// //                         ">
// //                         <ActiveIcon size={21} strokeWidth={1.6} />
// //                       </span>

// //                       <div
// //                         className="
// //                           flex
// //                           items-center
// //                           gap-3
// //                           rounded-full
// //                           border
// //                           border-[#143E33]/[0.08]
// //                           bg-[#F5F8F1]
// //                           px-4
// //                           py-2
// //                         ">
// //                         <span className="h-2 w-2 rounded-full bg-[#9DD827]" />

// //                         <span
// //                           className="
// //                             text-[6px]
// //                             font-bold
// //                             uppercase
// //                             tracking-[0.16em]
// //                             text-[#143E33]/45
// //                           ">
// //                           {activeModel.short}
// //                         </span>
// //                       </div>
// //                     </div>

// //                     <p
// //                       className="
// //                         mt-12
// //                         text-[8px]
// //                         font-bold
// //                         uppercase
// //                         tracking-[0.2em]
// //                         text-[#76A400]
// //                       ">
// //                       {activeModel.title}
// //                     </p>

// //                     <h3
// //                       className="
// //                         mt-4
// //                         max-w-[780px]
// //                         text-[clamp(2.2rem,3.4vw,4.2rem)]
// //                         font-normal
// //                         leading-[0.95]
// //                         tracking-[-0.055em]
// //                       ">
// //                       {activeModel.headline}
// //                     </h3>

// //                     <p
// //                       className="
// //                         mt-6
// //                         max-w-[700px]
// //                         text-[12px]
// //                         leading-7
// //                         text-[#143E33]/50
// //                       ">
// //                       {activeModel.description}
// //                     </p>

// //                     {/* points */}

// //                     <div
// //                       className="
// //                         mt-8
// //                         grid
// //                         gap-3
// //                         sm:grid-cols-3
// //                       ">
// //                       {activeModel.points.map((point, index) => (
// //                         <div
// //                           key={point}
// //                           className="
// //                             relative
// //                             overflow-hidden
// //                             rounded-[12px]
// //                             border
// //                             border-[#143E33]/[0.08]
// //                             bg-[#F7F9F4]
// //                             p-4
// //                           ">
// //                           <span
// //                             className="
// //                               text-[7px]
// //                               font-bold
// //                               tracking-[0.14em]
// //                               text-[#78A500]
// //                             ">
// //                             0{index + 1}
// //                           </span>

// //                           <p
// //                             className="
// //                               mt-4
// //                               text-[8px]
// //                               font-semibold
// //                               uppercase
// //                               tracking-[0.12em]
// //                               text-[#143E33]/55
// //                             ">
// //                             {point}
// //                           </p>

// //                           <span
// //                             className="
// //                               absolute
// //                               bottom-0
// //                               left-0
// //                               h-[2px]
// //                               w-8
// //                               bg-[#9DD827]
// //                             "
// //                           />
// //                         </div>
// //                       ))}
// //                     </div>
// //                   </motion.div>
// //                 </AnimatePresence>

// //                 {/* FOOTER NOTE */}

// //                 <div
// //                   className="
// //                     mt-auto
// //                     pt-9
// //                   ">
// //                   <div
// //                     className="
// //                       flex
// //                       flex-col
// //                       gap-5
// //                       border-t
// //                       border-[#143E33]/[0.08]
// //                       pt-6

// //                       sm:flex-row
// //                       sm:items-center
// //                       sm:justify-between
// //                     ">
// //                     <div>
// //                       <p
// //                         className="
// //                           text-[7px]
// //                           font-bold
// //                           uppercase
// //                           tracking-[0.17em]
// //                           text-[#143E33]/30
// //                         ">
// //                         Enfoque
// //                       </p>

// //                       <p
// //                         className="
// //                           mt-2
// //                           max-w-[620px]
// //                           text-[10px]
// //                           leading-6
// //                           text-[#143E33]/45
// //                         ">
// //                         {activeModel.note}
// //                       </p>
// //                     </div>

// //                     <div
// //                       className="
// //                         flex
// //                         shrink-0
// //                         items-center
// //                         gap-3
// //                       ">
// //                       <Building2
// //                         size={14}
// //                         strokeWidth={1.5}
// //                         className="text-[#78A500]"
// //                       />

// //                       <span
// //                         className="
// //                           text-[6px]
// //                           font-bold
// //                           uppercase
// //                           tracking-[0.16em]
// //                           text-[#76A400]
// //                         ">
// //                         GRUNER Energy
// //                       </span>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // export default SolarInvestmentSection;

// import { AnimatePresence, motion } from "motion/react";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   BadgeDollarSign,
//   Building2,
//   Check,
//   HandCoins,
//   Landmark,
//   RefreshCw,
//   Sparkles,
//   WalletCards,
//   Zap,
// } from "lucide-react";
// import { useState } from "react";

// /* =========================================================
//    DATA
// ========================================================= */

// const investmentModels = [
//   {
//     id: "compra-directa",
//     number: "01",
//     short: "CAPEX",
//     title: "Compra Directa",
//     headline: "La infraestructura es tuya desde el inicio.",
//     description:
//       "Implica realizar la inversión total del proyecto y conservar directamente los beneficios económicos generados por el sistema.",
//     note: "Es el modelo indicado para organizaciones que buscan propiedad inmediata del activo y capturar directamente el valor del proyecto.",
//     icon: WalletCards,

//     investmentLevel: 92,
//     ownershipLevel: 100,
//     flexibilityLevel: 38,

//     investmentLabel: "Alta inversión inicial",
//     ownershipLabel: "Propiedad inmediata",
//     strategy: "Activo propio",

//     points: [
//       "Propiedad del sistema",
//       "Inversión inicial completa",
//       "Beneficios económicos directos",
//     ],
//   },

//   {
//     id: "financiamiento",
//     number: "02",
//     short: "FIN",
//     title: "Financiamiento",
//     headline: "Distribuye la inversión en el tiempo.",
//     description:
//       "El proyecto se financia mediante crédito y la inversión se paga en mensualidades, reduciendo el desembolso inicial.",
//     note: "Permite implementar infraestructura energética con una estructura financiera distinta a una compra directa.",
//     icon: Landmark,

//     investmentLevel: 52,
//     ownershipLevel: 88,
//     flexibilityLevel: 68,

//     investmentLabel: "Inversión distribuida",
//     ownershipLabel: "Propiedad del activo",
//     strategy: "Financiamiento",

//     points: [
//       "Pago en mensualidades",
//       "Menor inversión inicial",
//       "Propiedad del activo",
//     ],
//   },

//   {
//     id: "ppa",
//     number: "03",
//     short: "PPA",
//     title: "PPA",
//     headline: "Ahorro energético sin inversión inicial.",
//     description:
//       "El esquema permite acceder a energía solar mediante un acuerdo de compra de energía, generando ahorro respecto a la tarifa eléctrica sin realizar la inversión inicial del sistema.",
//     note: "Al concluir el contrato, el esquema puede contemplar que el sistema pase a propiedad del cliente.",
//     icon: HandCoins,

//     investmentLevel: 10,
//     ownershipLevel: 32,
//     flexibilityLevel: 94,

//     investmentLabel: "Sin inversión inicial",
//     ownershipLabel: "Propiedad diferida",
//     strategy: "Energy as a service",

//     points: [
//       "Sin inversión inicial",
//       "Pago por energía",
//       "Ahorro desde la operación",
//     ],
//   },

//   {
//     id: "arrendamiento",
//     number: "04",
//     short: "LEASE",
//     title: "Arrendamiento",
//     headline: "Transforma inversión en una mensualidad.",
//     description:
//       "Con poca inversión inicial, el proyecto puede estructurarse mediante pagos de arrendamiento y opción de adquisición a valor residual al finalizar el periodo.",
//     note: "Es una alternativa para organizaciones que prefieren distribuir el costo del sistema y mantener flexibilidad financiera.",
//     icon: RefreshCw,

//     investmentLevel: 28,
//     ownershipLevel: 58,
//     flexibilityLevel: 84,

//     investmentLabel: "Baja inversión inicial",
//     ownershipLabel: "Opción de compra",
//     strategy: "Leasing energético",

//     points: [
//       "Baja inversión inicial",
//       "Pago periódico",
//       "Opción de compra final",
//     ],
//   },
// ];

// /* =========================================================
//    METER
// ========================================================= */

// function MetricBar({ label, value, activeKey }) {
//   return (
//     <div>
//       <div
//         className="
//           mb-2
//           flex
//           items-center
//           justify-between
//           gap-4
//         ">
//         <span
//           className="
//             text-[6px]
//             font-bold
//             uppercase
//             tracking-[0.14em]
//             text-[#143E33]/32
//           ">
//           {label}
//         </span>

//         <span
//           className="
//             text-[7px]
//             font-bold
//             tracking-[0.12em]
//             text-[#76A400]
//           ">
//           {value}%
//         </span>
//       </div>

//       <div
//         className="
//           relative
//           h-[5px]
//           overflow-hidden
//           rounded-full
//           bg-[#143E33]/[0.06]
//         ">
//         <motion.div
//           key={`${activeKey}-${label}`}
//           initial={{ width: 0 }}
//           animate={{ width: `${value}%` }}
//           transition={{
//             duration: 0.8,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="
//             absolute
//             inset-y-0
//             left-0
//             rounded-full
//             bg-gradient-to-r
//             from-[#7FAE00]
//             to-[#B8F23A]
//           "
//         />
//       </div>
//     </div>
//   );
// }

// /* =========================================================
//    MAIN
// ========================================================= */

// function SolarInvestmentSection() {
//   const [activeId, setActiveId] = useState(investmentModels[0].id);

//   const activeModel =
//     investmentModels.find((model) => model.id === activeId) ||
//     investmentModels[0];

//   const ActiveIcon = activeModel.icon;

//   return (
//     <section
//       id="solar-inversion"
//       className="
//         relative
//         overflow-hidden
//         bg-white
//         py-20
//         text-[#143E33]

//         lg:py-24
//       ">
//       {/* =====================================================
//           BACKGROUND
//       ===================================================== */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           inset-0
//           opacity-[0.24]
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
//           h-[520px]
//           w-[520px]
//           rounded-full
//           bg-[#B8F23A]/[0.09]
//           blur-[115px]
//         "
//       />

//       <div
//         className="
//           pointer-events-none
//           absolute
//           -bottom-[250px]
//           -left-[170px]
//           h-[470px]
//           w-[470px]
//           rounded-full
//           bg-[#143E33]/[0.025]
//           blur-[110px]
//         "
//       />

//       {/* HUGE TYPOGRAPHY */}

//       <span
//         className="
//           pointer-events-none
//           absolute
//           -right-5
//           bottom-[-30px]
//           hidden
//           select-none
//           text-[clamp(9rem,17vw,20rem)]
//           font-semibold
//           leading-none
//           tracking-[-0.09em]
//           text-[#143E33]/[0.018]

//           xl:block
//         ">
//         MODEL
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
//                   text-[#143E33]
//                 ">
//                 <BadgeDollarSign size={17} strokeWidth={1.6} />
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
//                   Esquemas de inversión
//                 </p>
//               </div>
//             </div>

//             <h2
//               className="
//                 mt-6
//                 max-w-[950px]
//                 text-[clamp(2.8rem,4.4vw,5.2rem)]
//                 font-normal
//                 leading-[0.93]
//                 tracking-[-0.06em]
//               ">
//               La solución energética
//               <span className="block">puede ser la misma.</span>
//               <span className="block text-[#83B500]">
//                 La estrategia financiera no.
//               </span>
//             </h2>
//           </div>

//           <div className="lg:pb-2">
//             <p
//               className="
//                 max-w-[420px]
//                 text-[12px]
//                 leading-7
//                 text-[#143E33]/45
//               ">
//               Elegimos la estructura alrededor de las necesidades financieras,
//               operativas y estratégicas de cada organización.
//             </p>

//             <div
//               className="
//                 mt-5
//                 flex
//                 items-center
//                 gap-3
//               ">
//               <Sparkles
//                 size={12}
//                 strokeWidth={1.5}
//                 className="text-[#83B500]"
//               />

//               <span
//                 className="
//                   text-[7px]
//                   font-bold
//                   uppercase
//                   tracking-[0.17em]
//                   text-[#143E33]/35
//                 ">
//                 Investment flexibility
//               </span>
//             </div>
//           </div>
//         </motion.div>

//         {/* ===================================================
//             EXPERIENCE
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
//             duration: 0.8,
//             delay: 0.08,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="
//             relative
//             mt-14
//             grid
//             overflow-hidden
//             rounded-[22px]
//             border
//             border-[#143E33]/[0.07]
//             bg-white
//             shadow-[0_28px_80px_rgba(20,62,51,.08)]

//             lg:grid-cols-[380px_1fr]
//           ">
//           {/* =================================================
//               DARK SELECTOR
//           ================================================= */}

//           <aside
//             className="
//               relative
//               overflow-hidden
//               bg-[#10372E]
//               p-5
//               text-white

//               sm:p-6
//               lg:min-h-[650px]
//               lg:p-7
//             ">
//             {/* grid */}

//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 inset-0
//                 opacity-[0.12]
//                 [background-image:linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)]
//                 [background-size:38px_38px]
//               "
//             />

//             {/* glow */}

//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 -right-24
//                 -top-24
//                 h-[280px]
//                 w-[280px]
//                 rounded-full
//                 bg-[#B8F23A]/15
//                 blur-[80px]
//               "
//             />

//             {/* BIG NUMBER */}

//             <AnimatePresence mode="wait">
//               <motion.span
//                 key={`side-number-${activeModel.number}`}
//                 initial={{
//                   opacity: 0,
//                   x: -20,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   x: 0,
//                 }}
//                 exit={{
//                   opacity: 0,
//                   x: 15,
//                 }}
//                 className="
//                   pointer-events-none
//                   absolute
//                   -left-4
//                   -top-7
//                   text-[150px]
//                   font-light
//                   leading-none
//                   tracking-[-0.09em]
//                   text-[#B8F23A]/[0.045]
//                 ">
//                 {activeModel.number}
//               </motion.span>
//             </AnimatePresence>

//             <div
//               className="
//                 relative
//                 z-10
//                 flex
//                 h-full
//                 flex-col
//               ">
//               {/* HEADER */}

//               <div
//                 className="
//                   flex
//                   items-center
//                   justify-between
//                   gap-4
//                 ">
//                 <div>
//                   <p
//                     className="
//                       text-[7px]
//                       font-bold
//                       uppercase
//                       tracking-[0.19em]
//                       text-[#B8F23A]
//                     ">
//                     Investment Models
//                   </p>

//                   <p
//                     className="
//                       mt-1
//                       text-[6px]
//                       uppercase
//                       tracking-[0.13em]
//                       text-white/25
//                     ">
//                     Select strategy
//                   </p>
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

//               {/* NAV */}

//               <div
//                 className="
//                   mt-9
//                   space-y-2
//                 ">
//                 {investmentModels.map((model) => {
//                   const Icon = model.icon;
//                   const isActive = activeId === model.id;

//                   return (
//                     <button
//                       key={model.id}
//                       type="button"
//                       onClick={() => setActiveId(model.id)}
//                       className={`
//                         group
//                         relative
//                         flex
//                         w-full
//                         items-center
//                         gap-4
//                         overflow-hidden
//                         rounded-[13px]
//                         border
//                         p-4
//                         text-left
//                         transition-all
//                         duration-350

//                         ${
//                           isActive
//                             ? `
//                               border-[#B8F23A]/25
//                               bg-[#B8F23A]
//                               text-[#10372E]
//                             `
//                             : `
//                               border-white/[0.06]
//                               bg-white/[0.025]
//                               text-white

//                               hover:border-white/15
//                               hover:bg-white/[0.05]
//                             `
//                         }
//                       `}>
//                       <span
//                         className={`
//                           flex
//                           h-10
//                           w-10
//                           shrink-0
//                           items-center
//                           justify-center
//                           rounded-[10px]
//                           transition-all
//                           duration-300

//                           ${
//                             isActive
//                               ? "bg-[#10372E] text-[#B8F23A]"
//                               : "bg-[#B8F23A]/10 text-[#B8F23A]"
//                           }
//                         `}>
//                         <Icon size={16} strokeWidth={1.6} />
//                       </span>

//                       <div className="min-w-0 flex-1">
//                         <div className="flex items-center gap-2.5">
//                           <span
//                             className={`
//                               text-[6px]
//                               font-bold
//                               tracking-[0.14em]

//                               ${
//                                 isActive
//                                   ? "text-[#10372E]/45"
//                                   : "text-[#B8F23A]"
//                               }
//                             `}>
//                             {model.number}
//                           </span>

//                           <span
//                             className={`
//                               text-[6px]
//                               font-bold
//                               uppercase
//                               tracking-[0.13em]

//                               ${
//                                 isActive ? "text-[#10372E]/45" : "text-white/25"
//                               }
//                             `}>
//                             {model.short}
//                           </span>
//                         </div>

//                         <p
//                           className="
//                             mt-1.5
//                             text-[12px]
//                             font-semibold
//                           ">
//                           {model.title}
//                         </p>
//                       </div>

//                       <ArrowRight
//                         size={13}
//                         strokeWidth={1.5}
//                         className={`
//                           transition-transform
//                           duration-300

//                           group-hover:translate-x-0.5

//                           ${isActive ? "text-[#10372E]" : "text-white/20"}
//                         `}
//                       />
//                     </button>
//                   );
//                 })}
//               </div>

//               {/* SIDE FOOTER */}

//               <div
//                 className="
//                   mt-auto
//                   pt-9
//                 ">
//                 <div
//                   className="
//                     border-t
//                     border-white/[0.07]
//                     pt-5
//                   ">
//                   <div
//                     className="
//                       flex
//                       items-center
//                       gap-3
//                     ">
//                     <Zap
//                       size={12}
//                       strokeWidth={1.6}
//                       className="text-[#B8F23A]"
//                     />

//                     <span
//                       className="
//                         text-[6px]
//                         font-semibold
//                         uppercase
//                         tracking-[0.14em]
//                         text-white/25
//                       ">
//                       La estructura correcta también genera valor
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </aside>

//           {/* =================================================
//               RIGHT EXPERIENCE
//           ================================================= */}

//           <div
//             className="
//               relative
//               min-h-[650px]
//               overflow-hidden
//               bg-[#F8FAF5]
//               p-6

//               sm:p-8
//               lg:p-9
//               xl:p-11
//             ">
//             {/* fine grid */}

//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 inset-0
//                 opacity-[0.25]
//                 [background-image:linear-gradient(rgba(20,62,51,.026)_1px,transparent_1px),linear-gradient(90deg,rgba(20,62,51,.026)_1px,transparent_1px)]
//                 [background-size:38px_38px]
//               "
//             />

//             {/* glow */}

//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 -right-[80px]
//                 -top-[100px]
//                 h-[300px]
//                 w-[300px]
//                 rounded-full
//                 bg-[#B8F23A]/[0.10]
//                 blur-[90px]
//               "
//             />

//             {/* number */}

//             <AnimatePresence mode="wait">
//               <motion.span
//                 key={`main-number-${activeModel.number}`}
//                 initial={{
//                   opacity: 0,
//                   x: 30,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   x: 0,
//                 }}
//                 exit={{
//                   opacity: 0,
//                   x: -20,
//                 }}
//                 className="
//                   pointer-events-none
//                   absolute
//                   -right-4
//                   -top-12
//                   text-[190px]
//                   font-light
//                   leading-none
//                   tracking-[-0.095em]
//                   text-[#7FAE00]/[0.055]
//                 ">
//                 {activeModel.number}
//               </motion.span>
//             </AnimatePresence>

//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeModel.id}
//                 initial={{
//                   opacity: 0,
//                   y: 15,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 exit={{
//                   opacity: 0,
//                   y: -10,
//                 }}
//                 transition={{
//                   duration: 0.45,
//                   ease: [0.22, 1, 0.36, 1],
//                 }}
//                 className="
//                   relative
//                   z-10
//                   flex
//                   h-full
//                   flex-col
//                 ">
//                 {/* TOP */}

//                 <div
//                   className="
//                     flex
//                     items-start
//                     justify-between
//                     gap-5
//                   ">
//                   <span
//                     className="
//                       flex
//                       h-13
//                       w-13
//                       items-center
//                       justify-center
//                       rounded-[14px]
//                       bg-[#143E33]
//                       text-[#B8F23A]
//                       shadow-[0_12px_30px_rgba(20,62,51,.12)]
//                     ">
//                     <ActiveIcon size={21} strokeWidth={1.6} />
//                   </span>

//                   <div
//                     className="
//                       flex
//                       items-center
//                       gap-3
//                       rounded-full
//                       border
//                       border-[#143E33]/[0.07]
//                       bg-white
//                       px-4
//                       py-2.5
//                       shadow-[0_5px_18px_rgba(20,62,51,.035)]
//                     ">
//                     <span
//                       className="
//                         h-2
//                         w-2
//                         rounded-full
//                         bg-[#9DD827]
//                       "
//                     />

//                     <span
//                       className="
//                         text-[6px]
//                         font-bold
//                         uppercase
//                         tracking-[0.16em]
//                         text-[#143E33]/42
//                       ">
//                       {activeModel.strategy}
//                     </span>
//                   </div>
//                 </div>

//                 {/* HEADLINE */}

//                 <div className="mt-11">
//                   <div className="flex items-center gap-3">
//                     <span className="h-px w-8 bg-[#9DD827]" />

//                     <p
//                       className="
//                         text-[7px]
//                         font-bold
//                         uppercase
//                         tracking-[0.19em]
//                         text-[#78A500]
//                       ">
//                       {activeModel.short} · {activeModel.title}
//                     </p>
//                   </div>

//                   <h3
//                     className="
//                       mt-5
//                       max-w-[850px]
//                       text-[clamp(2.3rem,3.5vw,4.5rem)]
//                       font-normal
//                       leading-[0.93]
//                       tracking-[-0.06em]
//                     ">
//                     {activeModel.headline}
//                   </h3>

//                   <p
//                     className="
//                       mt-6
//                       max-w-[720px]
//                       text-[11px]
//                       leading-7
//                       text-[#143E33]/48
//                     ">
//                     {activeModel.description}
//                   </p>
//                 </div>

//                 {/* =================================================
//                     INVESTMENT SPECTRUM
//                 ================================================= */}

//                 <div
//                   className="
//                     mt-8
//                     grid
//                     gap-5

//                     xl:grid-cols-[1fr_290px]
//                   ">
//                   {/* METERS */}

//                   <div
//                     className="
//                       rounded-[16px]
//                       border
//                       border-[#143E33]/[0.07]
//                       bg-white
//                       p-5
//                       shadow-[0_10px_30px_rgba(20,62,51,.035)]

//                       sm:p-6
//                     ">
//                     <div
//                       className="
//                         flex
//                         items-center
//                         justify-between
//                         gap-5
//                       ">
//                       <div>
//                         <p
//                           className="
//                             text-[7px]
//                             font-bold
//                             uppercase
//                             tracking-[0.18em]
//                             text-[#78A500]
//                           ">
//                           Investment Spectrum
//                         </p>

//                         <p
//                           className="
//                             mt-1
//                             text-[6px]
//                             uppercase
//                             tracking-[0.13em]
//                             text-[#143E33]/25
//                           ">
//                           Perfil del esquema
//                         </p>
//                       </div>

//                       <span
//                         className="
//                           flex
//                           h-9
//                           w-9
//                           items-center
//                           justify-center
//                           rounded-full
//                           bg-[#EDF5DF]
//                           text-[#78A500]
//                         ">
//                         <BadgeDollarSign size={15} strokeWidth={1.6} />
//                       </span>
//                     </div>

//                     <div
//                       className="
//                         mt-7
//                         space-y-6
//                       ">
//                       <MetricBar
//                         label="Inversión inicial"
//                         value={activeModel.investmentLevel}
//                         activeKey={activeModel.id}
//                       />

//                       <MetricBar
//                         label="Propiedad"
//                         value={activeModel.ownershipLevel}
//                         activeKey={activeModel.id}
//                       />

//                       <MetricBar
//                         label="Flexibilidad"
//                         value={activeModel.flexibilityLevel}
//                         activeKey={activeModel.id}
//                       />
//                     </div>

//                     <div
//                       className="
//                         mt-7
//                         grid
//                         grid-cols-3
//                         gap-2
//                         border-t
//                         border-[#143E33]/[0.07]
//                         pt-5
//                       ">
//                       {[
//                         activeModel.investmentLabel,
//                         activeModel.ownershipLabel,
//                         activeModel.strategy,
//                       ].map((item, index) => (
//                         <div
//                           key={`${item}-${index}`}
//                           className="
//                             rounded-[9px]
//                             bg-[#F4F7EF]
//                             px-3
//                             py-3
//                           ">
//                           <span
//                             className="
//                               text-[6px]
//                               font-semibold
//                               uppercase
//                               tracking-[0.1em]
//                               text-[#143E33]/38
//                             ">
//                             {item}
//                           </span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>

//                   {/* DECISION SIGNAL */}

//                   <div
//                     className="
//                       relative
//                       overflow-hidden
//                       rounded-[16px]
//                       bg-[#143E33]
//                       p-5
//                       text-white
//                       shadow-[0_16px_40px_rgba(20,62,51,.12)]
//                     ">
//                     <div
//                       className="
//                         pointer-events-none
//                         absolute
//                         -right-12
//                         -top-12
//                         h-36
//                         w-36
//                         rounded-full
//                         bg-[#B8F23A]/15
//                         blur-[45px]
//                       "
//                     />

//                     <div className="relative z-10">
//                       <div
//                         className="
//                           flex
//                           items-center
//                           justify-between
//                           gap-4
//                         ">
//                         <div>
//                           <p
//                             className="
//                               text-[6px]
//                               font-bold
//                               uppercase
//                               tracking-[0.16em]
//                               text-[#B8F23A]
//                             ">
//                             Decision Signal
//                           </p>

//                           <p
//                             className="
//                               mt-1
//                               text-[6px]
//                               uppercase
//                               tracking-[0.11em]
//                               text-white/25
//                             ">
//                             Modelo activo
//                           </p>
//                         </div>

//                         <span
//                           className="
//                             relative
//                             flex
//                             h-2
//                             w-2
//                           ">
//                           <span
//                             className="
//                               absolute
//                               inset-0
//                               animate-ping
//                               rounded-full
//                               bg-[#B8F23A]/40
//                             "
//                           />

//                           <span
//                             className="
//                               relative
//                               h-2
//                               w-2
//                               rounded-full
//                               bg-[#B8F23A]
//                             "
//                           />
//                         </span>
//                       </div>

//                       <p
//                         className="
//                           mt-8
//                           text-[22px]
//                           font-light
//                           leading-[1]
//                           tracking-[-0.045em]
//                           text-[#B8F23A]
//                         ">
//                         {activeModel.short}
//                       </p>

//                       <p
//                         className="
//                           mt-3
//                           text-[11px]
//                           font-medium
//                           leading-5
//                           text-white/70
//                         ">
//                         {activeModel.title}
//                       </p>

//                       <p
//                         className="
//                           mt-4
//                           text-[9px]
//                           leading-5
//                           text-white/35
//                         ">
//                         {activeModel.note}
//                       </p>

//                       <div
//                         className="
//                           mt-7
//                           border-t
//                           border-white/[0.08]
//                           pt-5
//                         ">
//                         <div className="flex items-center gap-3">
//                           <Sparkles
//                             size={11}
//                             strokeWidth={1.5}
//                             className="text-[#B8F23A]"
//                           />

//                           <span
//                             className="
//                               text-[6px]
//                               font-semibold
//                               uppercase
//                               tracking-[0.13em]
//                               text-white/25
//                             ">
//                             Estrategia adaptable
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* =================================================
//                     BENEFITS
//                 ================================================= */}

//                 <div
//                   className="
//                     mt-6
//                     grid
//                     gap-2

//                     sm:grid-cols-3
//                   ">
//                   {activeModel.points.map((point, index) => (
//                     <div
//                       key={point}
//                       className="
//                         group
//                         relative
//                         overflow-hidden
//                         rounded-[11px]
//                         border
//                         border-[#143E33]/[0.07]
//                         bg-white
//                         p-4
//                         transition-all
//                         duration-300

//                         hover:border-[#9DD827]/40
//                         hover:shadow-[0_8px_24px_rgba(20,62,51,.05)]
//                       ">
//                       <div className="flex items-start gap-3">
//                         <span
//                           className="
//                             flex
//                             h-7
//                             w-7
//                             shrink-0
//                             items-center
//                             justify-center
//                             rounded-full
//                             bg-[#EDF5DF]
//                             text-[#78A500]
//                             transition-all
//                             duration-300

//                             group-hover:bg-[#B8F23A]
//                             group-hover:text-[#10372E]
//                           ">
//                           <Check size={11} strokeWidth={2} />
//                         </span>

//                         <div>
//                           <span
//                             className="
//                               text-[6px]
//                               font-bold
//                               tracking-[0.14em]
//                               text-[#78A500]
//                             ">
//                             0{index + 1}
//                           </span>

//                           <p
//                             className="
//                               mt-2
//                               text-[7px]
//                               font-semibold
//                               uppercase
//                               tracking-[0.11em]
//                               text-[#143E33]/48
//                             ">
//                             {point}
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* =================================================
//                     BOTTOM
//                 ================================================= */}

//                 <div
//                   className="
//                     mt-auto
//                     pt-8
//                   ">
//                   <div
//                     className="
//                       flex
//                       flex-col
//                       gap-5
//                       border-t
//                       border-[#143E33]/[0.07]
//                       pt-5

//                       sm:flex-row
//                       sm:items-center
//                       sm:justify-between
//                     ">
//                     <div className="flex items-center gap-3">
//                       <Building2
//                         size={13}
//                         strokeWidth={1.5}
//                         className="text-[#78A500]"
//                       />

//                       <span
//                         className="
//                           text-[6px]
//                           font-bold
//                           uppercase
//                           tracking-[0.15em]
//                           text-[#143E33]/30
//                         ">
//                         Estructura diseñada alrededor del proyecto
//                       </span>
//                     </div>

//                     <a
//                       href="/contacto"
//                       className="
//                         group
//                         inline-flex
//                         items-center
//                         gap-3
//                         text-[7px]
//                         font-bold
//                         uppercase
//                         tracking-[0.15em]
//                         text-[#76A400]
//                       ">
//                       Evaluar mi proyecto
//                       <span
//                         className="
//                           flex
//                           h-8
//                           w-8
//                           items-center
//                           justify-center
//                           rounded-full
//                           border
//                           border-[#143E33]/10
//                           transition-all
//                           duration-300

//                           group-hover:border-[#9DD827]
//                           group-hover:bg-[#B8F23A]
//                           group-hover:text-[#10372E]
//                         ">
//                         <ArrowUpRight
//                           size={12}
//                           strokeWidth={1.5}
//                           className="
//                             transition-transform
//                             duration-300

//                             group-hover:-translate-y-0.5
//                             group-hover:translate-x-0.5
//                           "
//                         />
//                       </span>
//                     </a>
//                   </div>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </motion.div>

//         {/* ===================================================
//             FINAL MICRO
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
//               CAPEX · Financing · PPA · Lease
//             </span>
//           </div>

//           <div className="flex items-center gap-3">
//             <span className="h-px w-9 bg-[#9DD827]" />

//             <span
//               className="
//                 text-[7px]
//                 font-bold
//                 uppercase
//                 tracking-[0.18em]
//                 text-[#76A400]
//               ">
//               One solution. Multiple investment paths.
//             </span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default SolarInvestmentSection;

import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeDollarSign,
  Building2,
  Check,
  HandCoins,
  Landmark,
  RefreshCw,
  Sparkles,
  WalletCards,
  Zap,
} from "lucide-react";
import { useState } from "react";

/* =========================================================
   DATA
========================================================= */

const investmentModels = [
  {
    id: "compra-directa",
    number: "01",
    short: "CAPEX",
    title: "Compra Directa",
    headline: "La infraestructura es tuya desde el inicio.",
    description:
      "Implica realizar la inversión total del proyecto y conservar directamente los beneficios económicos generados por el sistema.",
    note: "Es el modelo indicado para organizaciones que buscan propiedad inmediata del activo y capturar directamente el valor del proyecto.",
    icon: WalletCards,

    investmentLabel: "Inversión inicial completa",
    ownershipLabel: "Propiedad inmediata",
    paymentLabel: "Inversión directa",
    strategy: "Activo propio",

    points: [
      "Propiedad del sistema",
      "Inversión inicial completa",
      "Beneficios económicos directos",
    ],
  },

  {
    id: "financiamiento",
    number: "02",
    short: "FIN",
    title: "Financiamiento",
    headline: "Distribuye la inversión en el tiempo.",
    description:
      "El proyecto se financia mediante crédito y la inversión se paga en mensualidades, reduciendo el desembolso inicial.",
    note: "Permite implementar infraestructura energética con una estructura financiera distinta a una compra directa.",
    icon: Landmark,

    investmentLabel: "Inversión distribuida",
    ownershipLabel: "Propiedad del activo",
    paymentLabel: "Pago en mensualidades",
    strategy: "Financiamiento",

    points: [
      "Pago en mensualidades",
      "Menor inversión inicial",
      "Propiedad del activo",
    ],
  },

  {
    id: "ppa",
    number: "03",
    short: "PPA",
    title: "PPA",
    headline: "Ahorro energético sin inversión inicial.",
    description:
      "El esquema permite acceder a energía solar mediante un acuerdo de compra de energía, generando ahorro respecto a la tarifa eléctrica sin realizar la inversión inicial del sistema.",
    note: "Al concluir el contrato, el esquema puede contemplar que el sistema pase a propiedad del cliente.",
    icon: HandCoins,

    investmentLabel: "Sin inversión inicial",
    ownershipLabel: "Puede ser diferida",
    paymentLabel: "Pago por energía",
    strategy: "PPA",

    points: [
      "Sin inversión inicial",
      "Pago por energía",
      "Ahorro desde la operación",
    ],
  },

  {
    id: "arrendamiento",
    number: "04",
    short: "LEASE",
    title: "Arrendamiento",
    headline: "Transforma inversión en una mensualidad.",
    description:
      "Con poca inversión inicial, el proyecto puede estructurarse mediante pagos de arrendamiento y opción de adquisición a valor residual al finalizar el periodo.",
    note: "Es una alternativa para organizaciones que prefieren distribuir el costo del sistema y mantener flexibilidad financiera.",
    icon: RefreshCw,

    investmentLabel: "Baja inversión inicial",
    ownershipLabel: "Opción de compra",
    paymentLabel: "Pago periódico",
    strategy: "Arrendamiento",

    points: [
      "Baja inversión inicial",
      "Pago periódico",
      "Opción de compra final",
    ],
  },
];

/* =========================================================
   METER
========================================================= */

function ModelFact({ label, value }) {
  return (
    <div
      className="
        flex
        items-start
        justify-between
        gap-5
        border-b
        border-[#143E33]/[0.07]
        py-4
      ">
      <span
        className="
          text-[11px]
          font-bold
          uppercase
          tracking-[0.14em]
          text-[#143E33]/42
        ">
        {label}
      </span>

      <span
        className="
          max-w-[220px]
          text-right
          text-[13px]
          font-semibold
          leading-5
          text-[#76A400]
        ">
        {value}
      </span>
    </div>
  );
}

/* =========================================================
   MAIN
========================================================= */

function SolarInvestmentSection() {
  const [activeId, setActiveId] = useState(investmentModels[0].id);

  const activeModel =
    investmentModels.find((model) => model.id === activeId) ||
    investmentModels[0];

  const ActiveIcon = activeModel.icon;

  return (
    <section
      id="solar-inversion"
      className="
        relative
        overflow-hidden
        bg-white
        py-20
        text-[#143E33]

        lg:py-24
      ">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.24]
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
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#B8F23A]/[0.09]
          blur-[115px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-[250px]
          -left-[170px]
          h-[470px]
          w-[470px]
          rounded-full
          bg-[#143E33]/[0.025]
          blur-[110px]
        "
      />

      {/* HUGE TYPOGRAPHY */}

      <span
        className="
          pointer-events-none
          absolute
          -right-5
          bottom-[-30px]
          hidden
          select-none
          text-[clamp(9rem,17vw,20rem)]
          font-semibold
          leading-none
          tracking-[-0.09em]
          text-[#143E33]/[0.018]

          xl:block
        ">
        MODEL
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
                  text-[#143E33]
                ">
                <BadgeDollarSign size={17} strokeWidth={1.6} />
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
                  Esquemas de inversión
                </p>
              </div>
            </div>

            <h2
              className="
                mt-6
                max-w-[950px]
                text-[clamp(2.8rem,4.4vw,5.2rem)]
                font-normal
                leading-[0.93]
                tracking-[-0.06em]
              ">
              La solución energética
              <span className="block">puede ser la misma.</span>
              <span className="block text-[#83B500]">
                La estrategia financiera no.
              </span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p
              className="
                max-w-[420px]
                text-[12px]
                leading-7
                text-[#143E33]/45
              ">
              Elegimos la estructura alrededor de las necesidades financieras,
              operativas y estratégicas de cada organización.
            </p>

            <div
              className="
                mt-5
                flex
                items-center
                gap-3
              ">
              <Sparkles
                size={12}
                strokeWidth={1.5}
                className="text-[#83B500]"
              />

              <span
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.17em]
                  text-[#143E33]/35
                ">
                Investment flexibility
              </span>
            </div>
          </div>
        </motion.div>

        {/* ===================================================
            EXPERIENCE
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
            duration: 0.8,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mt-14
            grid
            overflow-hidden
            rounded-[22px]
            border
            border-[#143E33]/[0.07]
            bg-white
            shadow-[0_28px_80px_rgba(20,62,51,.08)]

            lg:grid-cols-[380px_1fr]
          ">
          {/* =================================================
              DARK SELECTOR
          ================================================= */}

          <aside
            className="
              relative
              overflow-hidden
              bg-[#10372E]
              p-5
              text-white

              sm:p-6
              lg:min-h-[650px]
              lg:p-7
            ">
            {/* grid */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                opacity-[0.12]
                [background-image:linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)]
                [background-size:38px_38px]
              "
            />

            {/* glow */}

            <div
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-[280px]
                w-[280px]
                rounded-full
                bg-[#B8F23A]/15
                blur-[80px]
              "
            />

            {/* BIG NUMBER */}

            <AnimatePresence mode="wait">
              <motion.span
                key={`side-number-${activeModel.number}`}
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: 15,
                }}
                className="
                  pointer-events-none
                  absolute
                  -left-4
                  -top-7
                  text-[150px]
                  font-light
                  leading-none
                  tracking-[-0.09em]
                  text-[#B8F23A]/[0.045]
                ">
                {activeModel.number}
              </motion.span>
            </AnimatePresence>

            <div
              className="
                relative
                z-10
                flex
                h-full
                flex-col
              ">
              {/* HEADER */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-4
                ">
                <div>
                  <p
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.19em]
                      text-[#B8F23A]
                    ">
                    Investment Models
                  </p>

                  <p
                    className="
                      mt-1
                      text-[11px]
                      uppercase
                      tracking-[0.13em]
                      text-white/25
                    ">
                    Select strategy
                  </p>
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

              {/* NAV */}

              <div
                className="
                  mt-9
                  space-y-2
                ">
                {investmentModels.map((model) => {
                  const Icon = model.icon;
                  const isActive = activeId === model.id;

                  return (
                    <button
                      key={model.id}
                      type="button"
                      onClick={() => setActiveId(model.id)}
                      className={`
                        group
                        relative
                        flex
                        w-full
                        items-center
                        gap-4
                        overflow-hidden
                        rounded-[13px]
                        border
                        p-4
                        text-left
                        transition-all
                        duration-350

                        ${
                          isActive
                            ? `
                              border-[#B8F23A]/25
                              bg-[#B8F23A]
                              text-[#10372E]
                            `
                            : `
                              border-white/[0.06]
                              bg-white/[0.025]
                              text-white

                              hover:border-white/15
                              hover:bg-white/[0.05]
                            `
                        }
                      `}>
                      <span
                        className={`
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-[10px]
                          transition-all
                          duration-300

                          ${
                            isActive
                              ? "bg-[#10372E] text-[#B8F23A]"
                              : "bg-[#B8F23A]/10 text-[#B8F23A]"
                          }
                        `}>
                        <Icon size={16} strokeWidth={1.6} />
                      </span>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2.5">
                          <span
                            className={`
                              text-[11px]
                              font-bold
                              tracking-[0.14em]

                              ${
                                isActive
                                  ? "text-[#10372E]/45"
                                  : "text-[#B8F23A]"
                              }
                            `}>
                            {model.number}
                          </span>

                          <span
                            className={`
                              text-[11px]
                              font-bold
                              uppercase
                              tracking-[0.13em]

                              ${
                                isActive ? "text-[#10372E]/45" : "text-white/25"
                              }
                            `}>
                            {model.short}
                          </span>
                        </div>

                        <p
                          className="
                            mt-1.5
                            text-[12px]
                            font-semibold
                          ">
                          {model.title}
                        </p>
                      </div>

                      <ArrowRight
                        size={13}
                        strokeWidth={1.5}
                        className={`
                          transition-transform
                          duration-300

                          group-hover:translate-x-0.5

                          ${isActive ? "text-[#10372E]" : "text-white/20"}
                        `}
                      />
                    </button>
                  );
                })}
              </div>

              {/* SIDE FOOTER */}

              <div
                className="
                  mt-auto
                  pt-9
                ">
                <div
                  className="
                    border-t
                    border-white/[0.07]
                    pt-5
                  ">
                  <div
                    className="
                      flex
                      items-center
                      gap-3
                    ">
                    <Zap
                      size={12}
                      strokeWidth={1.6}
                      className="text-[#B8F23A]"
                    />

                    <span
                      className="
                        text-[11px]
                        font-semibold
                        uppercase
                        tracking-[0.14em]
                        text-white/25
                      ">
                      La estructura correcta también genera valor
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* =================================================
              RIGHT EXPERIENCE
          ================================================= */}

          <div
            className="
              relative
              min-h-[650px]
              overflow-hidden
              bg-[#F8FAF5]
              p-6

              sm:p-8
              lg:p-9
              xl:p-11
            ">
            {/* fine grid */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                opacity-[0.25]
                [background-image:linear-gradient(rgba(20,62,51,.026)_1px,transparent_1px),linear-gradient(90deg,rgba(20,62,51,.026)_1px,transparent_1px)]
                [background-size:38px_38px]
              "
            />

            {/* glow */}

            <div
              className="
                pointer-events-none
                absolute
                -right-[80px]
                -top-[100px]
                h-[300px]
                w-[300px]
                rounded-full
                bg-[#B8F23A]/[0.10]
                blur-[90px]
              "
            />

            {/* number */}

            <AnimatePresence mode="wait">
              <motion.span
                key={`main-number-${activeModel.number}`}
                initial={{
                  opacity: 0,
                  x: 30,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -20,
                }}
                className="
                  pointer-events-none
                  absolute
                  -right-4
                  -top-12
                  text-[190px]
                  font-light
                  leading-none
                  tracking-[-0.095em]
                  text-[#7FAE00]/[0.055]
                ">
                {activeModel.number}
              </motion.span>
            </AnimatePresence>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeModel.id}
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                }}
                transition={{
                  duration: 0.45,
                  ease: [0.22, 1, 0.36, 1],
                }}
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
                    items-start
                    justify-between
                    gap-5
                  ">
                  <span
                    className="
                      flex
                      h-13
                      w-13
                      items-center
                      justify-center
                      rounded-[14px]
                      bg-[#143E33]
                      text-[#B8F23A]
                      shadow-[0_12px_30px_rgba(20,62,51,.12)]
                    ">
                    <ActiveIcon size={21} strokeWidth={1.6} />
                  </span>

                  <div
                    className="
                      flex
                      items-center
                      gap-3
                      rounded-full
                      border
                      border-[#143E33]/[0.07]
                      bg-white
                      px-4
                      py-2.5
                      shadow-[0_5px_18px_rgba(20,62,51,.035)]
                    ">
                    <span
                      className="
                        h-2
                        w-2
                        rounded-full
                        bg-[#9DD827]
                      "
                    />

                    <span
                      className="
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.16em]
                        text-[#143E33]/42
                      ">
                      {activeModel.strategy}
                    </span>
                  </div>
                </div>

                {/* HEADLINE */}

                <div className="mt-11">
                  <div className="flex items-center gap-3">
                    <span className="h-px w-8 bg-[#9DD827]" />

                    <p
                      className="
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.19em]
                        text-[#78A500]
                      ">
                      {activeModel.short} · {activeModel.title}
                    </p>
                  </div>

                  <h3
                    className="
                      mt-5
                      max-w-[850px]
                      text-[clamp(2.3rem,3.5vw,4.5rem)]
                      font-normal
                      leading-[0.93]
                      tracking-[-0.06em]
                    ">
                    {activeModel.headline}
                  </h3>

                  <p
                    className="
                      mt-6
                      max-w-[720px]
                      text-[11px]
                      leading-7
                      text-[#143E33]/48
                    ">
                    {activeModel.description}
                  </p>
                </div>

                {/* =================================================
                    INVESTMENT SPECTRUM
                ================================================= */}

                <div
                  className="
                    mt-8
                    grid
                    gap-5

                    xl:grid-cols-[1fr_290px]
                  ">
                  {/* METERS */}

                  <div
                    className="
                      rounded-[16px]
                      border
                      border-[#143E33]/[0.07]
                      bg-white
                      p-5
                      shadow-[0_10px_30px_rgba(20,62,51,.035)]

                      sm:p-6
                    ">
                    <div
                      className="
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
                            tracking-[0.18em]
                            text-[#78A500]
                          ">
                          Investment Spectrum
                        </p>

                        <p
                          className="
                            mt-1
                            text-[11px]
                            uppercase
                            tracking-[0.13em]
                            text-[#143E33]/25
                          ">
                          Perfil del esquema
                        </p>
                      </div>

                      <span
                        className="
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-full
                          bg-[#EDF5DF]
                          text-[#78A500]
                        ">
                        <BadgeDollarSign size={15} strokeWidth={1.6} />
                      </span>
                    </div>

                    <div
                      className="
                        mt-7
                        space-y-6
                      ">
                      <ModelFact
                        label="Inversión"
                        value={activeModel.investmentLabel}
                      />

                      <ModelFact
                        label="Propiedad"
                        value={activeModel.ownershipLabel}
                      />

                      <ModelFact
                        label="Forma de pago"
                        value={activeModel.paymentLabel}
                      />
                    </div>

                    <div
                      className="
                        mt-7
                        grid
                        grid-cols-3
                        gap-2
                        border-t
                        border-[#143E33]/[0.07]
                        pt-5
                      ">
                      {[
                        activeModel.investmentLabel,
                        activeModel.ownershipLabel,
                        activeModel.strategy,
                      ].map((item, index) => (
                        <div
                          key={`${item}-${index}`}
                          className="
                            rounded-[9px]
                            bg-[#F4F7EF]
                            px-3
                            py-3
                          ">
                          <span
                            className="
                              text-[11px]
                              font-semibold
                              uppercase
                              tracking-[0.1em]
                              text-[#143E33]/38
                            ">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* DECISION SIGNAL */}

                  <div
                    className="
                      relative
                      overflow-hidden
                      rounded-[16px]
                      bg-[#143E33]
                      p-5
                      text-white
                      shadow-[0_16px_40px_rgba(20,62,51,.12)]
                    ">
                    <div
                      className="
                        pointer-events-none
                        absolute
                        -right-12
                        -top-12
                        h-36
                        w-36
                        rounded-full
                        bg-[#B8F23A]/15
                        blur-[45px]
                      "
                    />

                    <div className="relative z-10">
                      <div
                        className="
                          flex
                          items-center
                          justify-between
                          gap-4
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
                            Decision Signal
                          </p>

                          <p
                            className="
                              mt-1
                              text-[11px]
                              uppercase
                              tracking-[0.11em]
                              text-white/25
                            ">
                            Modelo activo
                          </p>
                        </div>

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
                      </div>

                      <p
                        className="
                          mt-8
                          text-[22px]
                          font-light
                          leading-[1]
                          tracking-[-0.045em]
                          text-[#B8F23A]
                        ">
                        {activeModel.short}
                      </p>

                      <p
                        className="
                          mt-3
                          text-[11px]
                          font-medium
                          leading-5
                          text-white/70
                        ">
                        {activeModel.title}
                      </p>

                      <p
                        className="
                          mt-4
                          text-[12px]
                          leading-5
                          text-white/35
                        ">
                        {activeModel.note}
                      </p>

                      <div
                        className="
                          mt-7
                          border-t
                          border-white/[0.08]
                          pt-5
                        ">
                        <div className="flex items-center gap-3">
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
                              tracking-[0.13em]
                              text-white/25
                            ">
                            Estrategia adaptable
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* =================================================
                    BENEFITS
                ================================================= */}

                <div
                  className="
                    mt-6
                    grid
                    gap-2

                    sm:grid-cols-3
                  ">
                  {activeModel.points.map((point, index) => (
                    <div
                      key={point}
                      className="
                        group
                        relative
                        overflow-hidden
                        rounded-[11px]
                        border
                        border-[#143E33]/[0.07]
                        bg-white
                        p-4
                        transition-all
                        duration-300

                        hover:border-[#9DD827]/40
                        hover:shadow-[0_8px_24px_rgba(20,62,51,.05)]
                      ">
                      <div className="flex items-start gap-3">
                        <span
                          className="
                            flex
                            h-7
                            w-7
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-[#EDF5DF]
                            text-[#78A500]
                            transition-all
                            duration-300

                            group-hover:bg-[#B8F23A]
                            group-hover:text-[#10372E]
                          ">
                          <Check size={11} strokeWidth={2} />
                        </span>

                        <div>
                          <span
                            className="
                              text-[11px]
                              font-bold
                              tracking-[0.14em]
                              text-[#78A500]
                            ">
                            0{index + 1}
                          </span>

                          <p
                            className="
                              mt-2
                              text-[11px]
                              font-semibold
                              uppercase
                              tracking-[0.11em]
                              text-[#143E33]/48
                            ">
                            {point}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* =================================================
                    BOTTOM
                ================================================= */}

                <div
                  className="
                    mt-auto
                    pt-8
                  ">
                  <div
                    className="
                      flex
                      flex-col
                      gap-5
                      border-t
                      border-[#143E33]/[0.07]
                      pt-5

                      sm:flex-row
                      sm:items-center
                      sm:justify-between
                    ">
                    <div className="flex items-center gap-3">
                      <Building2
                        size={13}
                        strokeWidth={1.5}
                        className="text-[#78A500]"
                      />

                      <span
                        className="
                          text-[11px]
                          font-bold
                          uppercase
                          tracking-[0.15em]
                          text-[#143E33]/30
                        ">
                        Estructura diseñada alrededor del proyecto
                      </span>
                    </div>

                    <a
                      href="/contacto"
                      className="
                        group
                        inline-flex
                        items-center
                        gap-3
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.15em]
                        text-[#76A400]
                      ">
                      Evaluar mi proyecto
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
                          transition-all
                          duration-300

                          group-hover:border-[#9DD827]
                          group-hover:bg-[#B8F23A]
                          group-hover:text-[#10372E]
                        ">
                        <ArrowUpRight
                          size={12}
                          strokeWidth={1.5}
                          className="
                            transition-transform
                            duration-300

                            group-hover:-translate-y-0.5
                            group-hover:translate-x-0.5
                          "
                        />
                      </span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* ===================================================
            FINAL MICRO
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
              CAPEX · Financing · PPA · Lease
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="h-px w-9 bg-[#9DD827]" />

            <span
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#76A400]
              ">
              One solution. Multiple investment paths.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SolarInvestmentSection;
