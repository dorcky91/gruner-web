// // import { motion } from "motion/react";
// // import {
// //   ArrowDown,
// //   ArrowUpRight,
// //   Check,
// //   ClipboardCheck,
// //   Hammer,
// //   PlayCircle,
// //   SearchCheck,
// //   Sparkles,
// // } from "lucide-react";

// // /* =========================================================
// //    PROCESS DATA
// // ========================================================= */

// // const processSteps = [
// //   {
// //     number: "01",
// //     code: "DISCOVER",
// //     title: "Diagnóstico",
// //     headline: "Entender antes de diseñar.",
// //     description:
// //       "Analizamos consumo, demanda, infraestructura disponible, restricciones técnicas y objetivos energéticos.",
// //     icon: SearchCheck,
// //     meta: [
// //       "Perfil de consumo",
// //       "Demanda energética",
// //       "Infraestructura existente",
// //     ],
// //   },
// //   {
// //     number: "02",
// //     code: "DESIGN",
// //     title: "Ingeniería",
// //     headline: "Convertir datos en arquitectura.",
// //     description:
// //       "Definimos arquitectura solar, almacenamiento, capacidades, integración eléctrica y estrategia de control.",
// //     icon: ClipboardCheck,
// //     meta: ["Solar + BESS", "Integración eléctrica", "Estrategia de control"],
// //   },
// //   {
// //     number: "03",
// //     code: "BUILD",
// //     title: "Implementación",
// //     headline: "Llevar la solución al terreno.",
// //     description:
// //       "Coordinamos suministro, construcción, integración y puesta en marcha de la infraestructura energética.",
// //     icon: Hammer,
// //     meta: ["Construcción", "Integración", "Puesta en marcha"],
// //   },
// //   {
// //     number: "04",
// //     code: "OPERATE",
// //     title: "Operación",
// //     headline: "Mantener el valor en movimiento.",
// //     description:
// //       "Monitoreamos el desempeño del sistema y acompañamos su operación para mantener el valor energético en el tiempo.",
// //     icon: PlayCircle,
// //     meta: ["Monitoreo", "Desempeño", "Acompañamiento"],
// //   },
// // ];

// // /* =========================================================
// //    COMPONENT
// // ========================================================= */

// // function SolarProcessSection() {
// //   return (
// //     <section
// //       id="solar-proceso"
// //       className="
// //         relative
// //         overflow-hidden
// //         bg-[#F7F9F4]
// //         py-20
// //         text-[#143E33]

// //         lg:py-24
// //         xl:py-28
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
// //           -right-[160px]
// //           -top-[180px]
// //           h-[500px]
// //           w-[500px]
// //           rounded-full
// //           bg-[#9DD827]/10
// //           blur-[110px]
// //         "
// //       />

// //       <div
// //         className="
// //           pointer-events-none
// //           absolute
// //           -bottom-[220px]
// //           -left-[180px]
// //           h-[480px]
// //           w-[480px]
// //           rounded-full
// //           bg-[#143E33]/[0.035]
// //           blur-[110px]
// //         "
// //       />

// //       {/* BIG TYPOGRAPHY */}

// //       <span
// //         className="
// //           pointer-events-none
// //           absolute
// //           -right-8
// //           top-[35%]
// //           hidden
// //           select-none
// //           text-[clamp(10rem,18vw,21rem)]
// //           font-semibold
// //           leading-none
// //           tracking-[-0.09em]
// //           text-[#143E33]/[0.018]

// //           xl:block
// //         ">
// //         BUILD
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
// //           initial={{ opacity: 0, y: 24 }}
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
// //                 <Sparkles size={16} strokeWidth={1.6} />
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
// //                   Del análisis a la operación
// //                 </p>
// //               </div>
// //             </div>

// //             <h2
// //               className="
// //                 mt-6
// //                 max-w-[900px]
// //                 text-[clamp(2.8rem,4.5vw,5.3rem)]
// //                 font-normal
// //                 leading-[0.93]
// //                 tracking-[-0.06em]
// //               ">
// //               Cada proyecto
// //               <span className="block">sigue un camino.</span>
// //               <span className="block text-[#83B500]">
// //                 Nosotros lo conectamos.
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
// //               Acompañamos el proyecto desde la definición de la oportunidad
// //               hasta la implementación y operación de la infraestructura
// //               energética.
// //             </p>

// //             <div
// //               className="
// //                 mt-5
// //                 flex
// //                 items-center
// //                 gap-3
// //               ">
// //               <span className="relative flex h-2.5 w-2.5">
// //                 <span
// //                   className="
// //                     absolute
// //                     inset-0
// //                     animate-ping
// //                     rounded-full
// //                     bg-[#9DD827]/35
// //                   "
// //                 />

// //                 <span
// //                   className="
// //                     relative
// //                     h-2.5
// //                     w-2.5
// //                     rounded-full
// //                     bg-[#83B500]
// //                   "
// //                 />
// //               </span>

// //               <span
// //                 className="
// //                   text-[7px]
// //                   font-bold
// //                   uppercase
// //                   tracking-[0.17em]
// //                   text-[#143E33]/35
// //                 ">
// //                 Ingeniería con continuidad
// //               </span>
// //             </div>
// //           </div>
// //         </motion.div>

// //         {/* ===================================================
// //             JOURNEY
// //         =================================================== */}

// //         <div
// //           className="
// //             relative
// //             mt-16

// //             lg:mt-20
// //           ">
// //           {/* =================================================
// //               CENTRAL AXIS DESKTOP
// //           ================================================= */}

// //           <div
// //             className="
// //               pointer-events-none
// //               absolute
// //               bottom-0
// //               left-1/2
// //               top-0
// //               hidden
// //               w-px
// //               -translate-x-1/2
// //               bg-[#143E33]/10

// //               lg:block
// //             ">
// //             <motion.div
// //               initial={{ height: "0%" }}
// //               whileInView={{ height: "100%" }}
// //               viewport={{ once: true, amount: 0.1 }}
// //               transition={{
// //                 duration: 2.2,
// //                 ease: [0.22, 1, 0.36, 1],
// //               }}
// //               className="
// //                 absolute
// //                 left-0
// //                 top-0
// //                 w-px
// //                 bg-gradient-to-b
// //                 from-[#9DD827]
// //                 via-[#83B500]
// //                 to-[#9DD827]/20
// //               "
// //             />

// //             {/* MOVING ENERGY */}

// //             <motion.span
// //               animate={{
// //                 top: ["0%", "96%"],
// //                 opacity: [0, 1, 1, 0],
// //               }}
// //               transition={{
// //                 duration: 5,
// //                 repeat: Infinity,
// //                 repeatDelay: 0.8,
// //                 ease: "linear",
// //               }}
// //               className="
// //                 absolute
// //                 left-1/2
// //                 h-2.5
// //                 w-2.5
// //                 -translate-x-1/2
// //                 rounded-full
// //                 bg-[#9DD827]
// //                 shadow-[0_0_18px_rgba(157,216,39,.75)]
// //               "
// //             />
// //           </div>

// //           {/* =================================================
// //               STEPS
// //           ================================================= */}

// //           <div className="space-y-8 lg:space-y-4">
// //             {processSteps.map((step, index) => {
// //               const Icon = step.icon;
// //               const isLeft = index % 2 === 0;

// //               return (
// //                 <motion.article
// //                   key={step.number}
// //                   initial={{
// //                     opacity: 0,
// //                     y: 30,
// //                   }}
// //                   whileInView={{
// //                     opacity: 1,
// //                     y: 0,
// //                   }}
// //                   viewport={{
// //                     once: true,
// //                     amount: 0.25,
// //                   }}
// //                   transition={{
// //                     duration: 0.7,
// //                     delay: index * 0.06,
// //                     ease: [0.22, 1, 0.36, 1],
// //                   }}
// //                   className="
// //                     relative
// //                     grid
// //                     gap-5

// //                     lg:min-h-[300px]
// //                     lg:grid-cols-[1fr_100px_1fr]
// //                     lg:items-center
// //                   ">
// //                   {/* =========================================
// //                       LEFT AREA
// //                   ========================================= */}

// //                   <div
// //                     className={`
// //                       ${
// //                         isLeft
// //                           ? "lg:col-start-1 lg:text-right"
// //                           : "lg:col-start-3"
// //                       }
// //                     `}>
// //                     {/* number */}

// //                     <span
// //                       className="
// //                         block
// //                         text-[clamp(4.5rem,7vw,8rem)]
// //                         font-light
// //                         leading-[0.8]
// //                         tracking-[-0.085em]
// //                         text-[#83B500]/18
// //                       ">
// //                       {step.number}
// //                     </span>

// //                     <div
// //                       className={`
// //                         mt-3
// //                         flex
// //                         items-center
// //                         gap-3

// //                         ${isLeft ? "lg:justify-end" : ""}
// //                       `}>
// //                       {isLeft && (
// //                         <span
// //                           className="
// //                             hidden
// //                             h-px
// //                             w-8
// //                             bg-[#9DD827]
// //                             lg:block
// //                           "
// //                         />
// //                       )}

// //                       <span
// //                         className="
// //                           text-[7px]
// //                           font-bold
// //                           uppercase
// //                           tracking-[0.2em]
// //                           text-[#76A400]
// //                         ">
// //                         {step.code}
// //                       </span>

// //                       {!isLeft && (
// //                         <span
// //                           className="
// //                             hidden
// //                             h-px
// //                             w-8
// //                             bg-[#9DD827]
// //                             lg:block
// //                           "
// //                         />
// //                       )}
// //                     </div>

// //                     <h3
// //                       className="
// //                         mt-4
// //                         text-[clamp(2rem,3vw,3.4rem)]
// //                         font-normal
// //                         leading-[0.95]
// //                         tracking-[-0.055em]
// //                         text-[#143E33]
// //                       ">
// //                       {step.title}
// //                     </h3>

// //                     <p
// //                       className="
// //                         mt-3
// //                         text-[13px]
// //                         font-medium
// //                         tracking-[-0.02em]
// //                         text-[#143E33]/65
// //                       ">
// //                       {step.headline}
// //                     </p>
// //                   </div>

// //                   {/* =========================================
// //                       CENTER NODE
// //                   ========================================= */}

// //                   <div
// //                     className="
// //                       relative
// //                       z-10
// //                       hidden
// //                       items-center
// //                       justify-center
// //                       lg:flex
// //                     ">
// //                     <motion.div
// //                       whileInView={{
// //                         scale: [0.8, 1],
// //                         opacity: [0, 1],
// //                       }}
// //                       viewport={{ once: true }}
// //                       transition={{
// //                         duration: 0.5,
// //                         delay: index * 0.09,
// //                       }}
// //                       className="
// //                         relative
// //                         flex
// //                         h-16
// //                         w-16
// //                         items-center
// //                         justify-center
// //                         rounded-full
// //                         border
// //                         border-[#9DD827]/40
// //                         bg-[#F7F9F4]
// //                         text-[#77A500]
// //                         shadow-[0_10px_30px_rgba(20,62,51,.08)]
// //                       ">
// //                       <span
// //                         className="
// //                           absolute
// //                           inset-[5px]
// //                           rounded-full
// //                           border
// //                           border-dashed
// //                           border-[#83B500]/15
// //                         "
// //                       />

// //                       <Icon
// //                         size={20}
// //                         strokeWidth={1.55}
// //                         className="relative z-10"
// //                       />

// //                       <span
// //                         className="
// //                           absolute
// //                           -right-1
// //                           top-1/2
// //                           h-2
// //                           w-2
// //                           -translate-y-1/2
// //                           rounded-full
// //                           bg-[#9DD827]
// //                         "
// //                       />
// //                     </motion.div>

// //                     {/* CONNECTION ARM LEFT */}

// //                     <div
// //                       className={`
// //                         absolute
// //                         top-1/2
// //                         hidden
// //                         h-px
// //                         w-[42px]
// //                         -translate-y-1/2
// //                         bg-[#143E33]/10

// //                         lg:block

// //                         ${isLeft ? "-left-[42px]" : "-right-[42px]"}
// //                       `}>
// //                       <span
// //                         className={`
// //                           absolute
// //                           top-1/2
// //                           h-1.5
// //                           w-1.5
// //                           -translate-y-1/2
// //                           rounded-full
// //                           bg-[#9DD827]

// //                           ${isLeft ? "left-0" : "right-0"}
// //                         `}
// //                       />
// //                     </div>
// //                   </div>

// //                   {/* =========================================
// //                       DETAIL AREA
// //                   ========================================= */}

// //                   <div
// //                     className={`
// //                       relative
// //                       border-t
// //                       border-[#143E33]/10
// //                       pt-5

// //                       lg:border-t-0
// //                       lg:pt-0

// //                       ${
// //                         isLeft
// //                           ? "lg:col-start-3"
// //                           : "lg:col-start-1 lg:row-start-1 lg:text-right"
// //                       }
// //                     `}>
// //                     {/* mobile icon */}

// //                     <div
// //                       className="
// //                         mb-5
// //                         flex
// //                         h-11
// //                         w-11
// //                         items-center
// //                         justify-center
// //                         rounded-full
// //                         bg-[#EAF3DD]
// //                         text-[#78A500]

// //                         lg:hidden
// //                       ">
// //                       <Icon size={18} strokeWidth={1.6} />
// //                     </div>

// //                     <p
// //                       className="
// //                         max-w-[470px]
// //                         text-[11px]
// //                         leading-6
// //                         text-[#143E33]/45

// //                         lg:max-w-[430px]
// //                       ">
// //                       {step.description}
// //                     </p>

// //                     {/* TAGS */}

// //                     <div
// //                       className={`
// //                         mt-5
// //                         flex
// //                         flex-wrap
// //                         gap-2

// //                         ${!isLeft ? "lg:justify-end" : ""}
// //                       `}>
// //                       {step.meta.map((item) => (
// //                         <span
// //                           key={item}
// //                           className="
// //                             inline-flex
// //                             items-center
// //                             gap-2
// //                             rounded-full
// //                             border
// //                             border-[#143E33]/[0.07]
// //                             bg-white
// //                             px-3
// //                             py-2
// //                             text-[6px]
// //                             font-semibold
// //                             uppercase
// //                             tracking-[0.13em]
// //                             text-[#143E33]/40
// //                             shadow-[0_5px_18px_rgba(20,62,51,.03)]
// //                           ">
// //                           <Check
// //                             size={9}
// //                             strokeWidth={2}
// //                             className="text-[#82B400]"
// //                           />

// //                           {item}
// //                         </span>
// //                       ))}
// //                     </div>

// //                     {/* small footer */}

// //                     <div
// //                       className={`
// //                         mt-6
// //                         flex
// //                         items-center
// //                         gap-3

// //                         ${!isLeft ? "lg:justify-end" : ""}
// //                       `}>
// //                       <span className="h-px w-7 bg-[#9DD827]" />

// //                       <span
// //                         className="
// //                           text-[6px]
// //                           font-bold
// //                           uppercase
// //                           tracking-[0.17em]
// //                           text-[#76A400]
// //                         ">
// //                         GRUNER / {step.number}
// //                       </span>

// //                       <ArrowUpRight
// //                         size={12}
// //                         strokeWidth={1.5}
// //                         className="text-[#78A500]"
// //                       />
// //                     </div>
// //                   </div>
// //                 </motion.article>
// //               );
// //             })}
// //           </div>
// //         </div>

// //         {/* ===================================================
// //             FINAL RESULT
// //         =================================================== */}

// //         <motion.div
// //           initial={{ opacity: 0, y: 22 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           viewport={{ once: true, amount: 0.25 }}
// //           transition={{
// //             duration: 0.75,
// //             delay: 0.1,
// //           }}
// //           className="
// //             relative
// //             mt-16
// //             overflow-hidden
// //             rounded-[18px]
// //             bg-[#143E33]
// //             p-7
// //             text-white
// //             shadow-[0_22px_60px_rgba(20,62,51,.12)]

// //             sm:p-8
// //             lg:mt-20
// //             lg:p-10
// //           ">
// //           {/* GRID */}

// //           <div
// //             className="
// //               pointer-events-none
// //               absolute
// //               inset-0
// //               opacity-[0.13]
// //               [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)]
// //               [background-size:40px_40px]
// //             "
// //           />

// //           {/* GLOW */}

// //           <div
// //             className="
// //               pointer-events-none
// //               absolute
// //               -right-[100px]
// //               -top-[120px]
// //               h-[320px]
// //               w-[320px]
// //               rounded-full
// //               bg-[#9DD827]/15
// //               blur-[80px]
// //             "
// //           />

// //           <div
// //             className="
// //               relative
// //               z-10
// //               grid
// //               gap-8

// //               lg:grid-cols-[1fr_auto_1fr]
// //               lg:items-center
// //             ">
// //             {/* LEFT */}

// //             <div>
// //               <div className="flex items-center gap-3">
// //                 <span className="h-px w-8 bg-[#B8F23A]" />

// //                 <p
// //                   className="
// //                     text-[7px]
// //                     font-bold
// //                     uppercase
// //                     tracking-[0.2em]
// //                     text-[#B8F23A]
// //                   ">
// //                   Resultado
// //                 </p>
// //               </div>

// //               <h3
// //                 className="
// //                   mt-4
// //                   max-w-[600px]
// //                   text-[clamp(2rem,3vw,3.6rem)]
// //                   font-normal
// //                   leading-[0.95]
// //                   tracking-[-0.055em]
// //                 ">
// //                 Un proyecto conectado
// //                 <span className="block text-[#B8F23A]">
// //                   de principio a fin.
// //                 </span>
// //               </h3>
// //             </div>

// //             {/* CENTER */}

// //             <div
// //               className="
// //                 hidden
// //                 h-24
// //                 w-px
// //                 bg-white/10
// //                 lg:block
// //               "
// //             />

// //             {/* RIGHT */}

// //             <div
// //               className="
// //                 grid
// //                 gap-3
// //                 sm:grid-cols-4
// //               ">
// //               {[
// //                 ["01", "Analizar"],
// //                 ["02", "Diseñar"],
// //                 ["03", "Construir"],
// //                 ["04", "Operar"],
// //               ].map(([number, label]) => (
// //                 <div
// //                   key={number}
// //                   className="
// //                     group
// //                     rounded-[12px]
// //                     border
// //                     border-white/[0.07]
// //                     bg-white/[0.035]
// //                     p-4
// //                     transition-all
// //                     duration-300

// //                     hover:border-[#B8F23A]/30
// //                     hover:bg-white/[0.055]
// //                   ">
// //                   <span
// //                     className="
// //                       text-[8px]
// //                       font-bold
// //                       tracking-[0.15em]
// //                       text-[#B8F23A]
// //                     ">
// //                     {number}
// //                   </span>

// //                   <p
// //                     className="
// //                       mt-3
// //                       text-[8px]
// //                       font-semibold
// //                       uppercase
// //                       tracking-[0.12em]
// //                       text-white/60
// //                     ">
// //                     {label}
// //                   </p>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>

// //           {/* bottom */}

// //           <div
// //             className="
// //               relative
// //               z-10
// //               mt-8
// //               flex
// //               flex-col
// //               gap-5
// //               border-t
// //               border-white/10
// //               pt-6

// //               sm:flex-row
// //               sm:items-center
// //               sm:justify-between
// //             ">
// //             <div className="flex items-center gap-3">
// //               <span className="relative flex h-2 w-2">
// //                 <span
// //                   className="
// //                     absolute
// //                     inset-0
// //                     animate-ping
// //                     rounded-full
// //                     bg-[#B8F23A]/40
// //                   "
// //                 />

// //                 <span
// //                   className="
// //                     relative
// //                     h-2
// //                     w-2
// //                     rounded-full
// //                     bg-[#B8F23A]
// //                   "
// //                 />
// //               </span>

// //               <span
// //                 className="
// //                   text-[7px]
// //                   font-semibold
// //                   uppercase
// //                   tracking-[0.16em]
// //                   text-white/30
// //                 ">
// //                 Continuidad técnica durante todo el proyecto
// //               </span>
// //             </div>

// //             <div className="flex items-center gap-3">
// //               <span className="h-px w-9 bg-[#B8F23A]/50" />

// //               <span
// //                 className="
// //                   text-[7px]
// //                   font-bold
// //                   uppercase
// //                   tracking-[0.19em]
// //                   text-[#B8F23A]
// //                 ">
// //                 End-to-end energy infrastructure
// //               </span>
// //             </div>
// //           </div>
// //         </motion.div>

// //         {/* ===================================================
// //             SCROLL INDICATOR
// //         =================================================== */}

// //         <div
// //           className="
// //             mt-8
// //             flex
// //             justify-center
// //           ">
// //           <motion.div
// //             animate={{ y: [0, 5, 0] }}
// //             transition={{
// //               duration: 2,
// //               repeat: Infinity,
// //             }}
// //             className="
// //               flex
// //               flex-col
// //               items-center
// //               gap-2
// //               text-[#7FAE00]
// //             ">
// //             <span
// //               className="
// //                 text-[6px]
// //                 font-bold
// //                 uppercase
// //                 tracking-[0.2em]
// //                 text-[#143E33]/25
// //               ">
// //               Siguiente
// //             </span>

// //             <ArrowDown size={14} strokeWidth={1.5} />
// //           </motion.div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // export default SolarProcessSection;

// import { AnimatePresence, motion } from "motion/react";
// import {
//   Activity,
//   ArrowLeft,
//   ArrowRight,
//   BatteryCharging,
//   Check,
//   ChevronRight,
//   ClipboardCheck,
//   Cpu,
//   Gauge,
//   Hammer,
//   Layers3,
//   PlayCircle,
//   Radar,
//   SearchCheck,
//   SolarPanel,
//   Sparkles,
//   Zap,
// } from "lucide-react";
// import { useState } from "react";

// /* =========================================================
//    DATA
// ========================================================= */

// const processSteps = [
//   {
//     id: "diagnostico",
//     number: "01",
//     code: "DISCOVER",
//     label: "Diagnóstico",
//     title: "Primero entendemos la energía.",
//     description:
//       "Analizamos cómo consume energía la operación, dónde están los puntos críticos y qué oportunidades existen antes de definir cualquier solución.",
//     icon: SearchCheck,

//     details: [
//       "Perfil de consumo",
//       "Demanda máxima",
//       "Infraestructura existente",
//       "Restricciones técnicas",
//     ],

//     metric: "BASE",
//     metricLabel: "Línea de referencia",

//     visualTitle: "Energy Mapping",
//     visualSubtitle: "Lectura inicial de la operación",
//   },

//   {
//     id: "ingenieria",
//     number: "02",
//     code: "DESIGN",
//     label: "Ingeniería",
//     title: "Diseñamos cómo debe comportarse.",
//     description:
//       "Convertimos la información energética en una arquitectura que conecta generación fotovoltaica, almacenamiento, cargas y estrategia de control.",
//     icon: ClipboardCheck,

//     details: [
//       "Dimensionamiento solar",
//       "Capacidad BESS",
//       "Integración eléctrica",
//       "Lógica de operación",
//     ],

//     metric: "SYS",
//     metricLabel: "Arquitectura energética",

//     visualTitle: "System Architecture",
//     visualSubtitle: "Solar · BESS · EMS · Load",
//   },

//   {
//     id: "implementacion",
//     number: "03",
//     code: "BUILD",
//     label: "Implementación",
//     title: "La ingeniería se convierte en infraestructura.",
//     description:
//       "Coordinamos suministro, construcción, integración eléctrica, configuración de equipos y puesta en marcha del sistema energético.",
//     icon: Hammer,

//     details: ["Construcción", "Integración", "Configuración", "Commissioning"],

//     metric: "EPC",
//     metricLabel: "Ejecución coordinada",

//     visualTitle: "Project Deployment",
//     visualSubtitle: "Construcción e integración",
//   },

//   {
//     id: "operacion",
//     number: "04",
//     code: "OPERATE",
//     label: "Operación",
//     title: "El sistema empieza a aprender.",
//     description:
//       "Monitoreamos el comportamiento energético y acompañamos la operación para mantener desempeño, disponibilidad y valor durante el ciclo de vida.",
//     icon: PlayCircle,

//     details: ["Monitoreo", "Optimización", "Disponibilidad", "Desempeño"],

//     metric: "LIVE",
//     metricLabel: "Sistema en operación",

//     visualTitle: "Energy Intelligence",
//     visualSubtitle: "Monitoreo y optimización",
//   },
// ];

// /* =========================================================
//    VISUAL 01 · DIAGNOSTIC
// ========================================================= */

// function DiagnosticVisual() {
//   const bars = [34, 48, 41, 67, 58, 83, 72, 91, 68, 54, 71, 43];

//   return (
//     <div className="relative h-full min-h-[350px] overflow-hidden">
//       {/* GRID */}

//       <div
//         className="
//           absolute
//           inset-0
//           opacity-[0.16]
//           [background-image:linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)]
//           [background-size:42px_42px]
//         "
//       />

//       {/* RADAR */}

//       <div
//         className="
//           absolute
//           right-[8%]
//           top-[12%]
//           h-[210px]
//           w-[210px]
//           rounded-full
//           border
//           border-[#B8F23A]/20
//         ">
//         <div
//           className="
//             absolute
//             inset-[18%]
//             rounded-full
//             border
//             border-white/10
//           "
//         />

//         <div
//           className="
//             absolute
//             inset-[36%]
//             rounded-full
//             border
//             border-[#B8F23A]/15
//           "
//         />

//         <motion.div
//           animate={{
//             rotate: 360,
//           }}
//           transition={{
//             duration: 5,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//           className="
//             absolute
//             left-1/2
//             top-1/2
//             h-[1px]
//             w-[50%]
//             origin-left
//             bg-gradient-to-r
//             from-[#B8F23A]
//             to-transparent
//           "
//         />

//         <span
//           className="
//             absolute
//             left-[32%]
//             top-[28%]
//             h-2
//             w-2
//             rounded-full
//             bg-[#B8F23A]
//             shadow-[0_0_14px_rgba(184,242,58,.85)]
//           "
//         />

//         <span
//           className="
//             absolute
//             bottom-[26%]
//             right-[22%]
//             h-1.5
//             w-1.5
//             rounded-full
//             bg-white/50
//           "
//         />
//       </div>

//       {/* CHART */}

//       <div
//         className="
//           absolute
//           bottom-[9%]
//           left-[7%]
//           right-[7%]
//         ">
//         <div
//           className="
//             mb-5
//             flex
//             items-center
//             justify-between
//           ">
//           <div className="flex items-center gap-3">
//             <Activity size={14} strokeWidth={1.6} className="text-[#B8F23A]" />

//             <span
//               className="
//                 text-[7px]
//                 font-bold
//                 uppercase
//                 tracking-[0.17em]
//                 text-white/35
//               ">
//               Demand profile
//             </span>
//           </div>

//           <span
//             className="
//               text-[7px]
//               font-bold
//               uppercase
//               tracking-[0.15em]
//               text-[#B8F23A]
//             ">
//             ANALYZING
//           </span>
//         </div>

//         <div
//           className="
//             flex
//             h-[135px]
//             items-end
//             gap-2
//           ">
//           {bars.map((height, index) => (
//             <motion.div
//               key={index}
//               initial={{ height: 0 }}
//               animate={{
//                 height: `${height}%`,
//               }}
//               transition={{
//                 duration: 0.7,
//                 delay: index * 0.035,
//                 ease: [0.22, 1, 0.36, 1],
//               }}
//               className="
//                 relative
//                 flex-1
//                 overflow-hidden
//                 rounded-t-[3px]
//                 bg-white/[0.07]
//               ">
//               <div
//                 className="
//                   absolute
//                   bottom-0
//                   left-0
//                   right-0
//                   h-[45%]
//                   bg-gradient-to-t
//                   from-[#B8F23A]/50
//                   to-[#B8F23A]/5
//                 "
//               />
//             </motion.div>
//           ))}
//         </div>

//         <div
//           className="
//             mt-3
//             flex
//             justify-between
//             text-[6px]
//             font-semibold
//             uppercase
//             tracking-[0.12em]
//             text-white/20
//           ">
//           <span>00:00</span>
//           <span>06:00</span>
//           <span>12:00</span>
//           <span>18:00</span>
//           <span>24:00</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* =========================================================
//    VISUAL 02 · ENGINEERING
// ========================================================= */

// function EngineeringVisual() {
//   return (
//     <div className="relative flex h-full min-h-[350px] items-center justify-center">
//       <div
//         className="
//           absolute
//           inset-0
//           opacity-[0.16]
//           [background-image:linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)]
//           [background-size:42px_42px]
//         "
//       />

//       {/* CONNECTIONS */}

//       <div
//         className="
//           absolute
//           left-[20%]
//           right-[20%]
//           top-1/2
//           h-px
//           bg-[#B8F23A]/25
//         "
//       />

//       <div
//         className="
//           absolute
//           bottom-[20%]
//           left-1/2
//           top-[20%]
//           w-px
//           bg-[#B8F23A]/20
//         "
//       />

//       {/* CENTER */}

//       <div
//         className="
//           relative
//           z-10
//           flex
//           h-[150px]
//           w-[150px]
//           items-center
//           justify-center
//           rounded-full
//           border
//           border-[#B8F23A]/30
//           bg-[#123C32]
//         ">
//         <motion.span
//           animate={{ rotate: 360 }}
//           transition={{
//             duration: 18,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//           className="
//             absolute
//             inset-3
//             rounded-full
//             border
//             border-dashed
//             border-[#B8F23A]/20
//           "
//         />

//         <div className="text-center">
//           <Layers3
//             size={25}
//             strokeWidth={1.5}
//             className="mx-auto text-[#B8F23A]"
//           />

//           <p
//             className="
//               mt-3
//               text-[7px]
//               font-bold
//               uppercase
//               tracking-[0.16em]
//               text-[#B8F23A]
//             ">
//             ENERGY
//           </p>

//           <p
//             className="
//               mt-1
//               text-[6px]
//               uppercase
//               tracking-[0.12em]
//               text-white/25
//             ">
//             Architecture
//           </p>
//         </div>
//       </div>

//       {/* SOLAR */}

//       <VisualNode
//         className="left-[8%] top-[16%]"
//         icon={SolarPanel}
//         label="Solar"
//         code="PV"
//       />

//       {/* BESS */}

//       <VisualNode
//         className="right-[8%] top-[17%]"
//         icon={BatteryCharging}
//         label="Storage"
//         code="BESS"
//       />

//       {/* EMS */}

//       <VisualNode
//         className="bottom-[10%] left-[14%]"
//         icon={Cpu}
//         label="Control"
//         code="EMS"
//       />

//       {/* LOAD */}

//       <VisualNode
//         className="bottom-[10%] right-[14%]"
//         icon={Zap}
//         label="Demand"
//         code="LOAD"
//       />
//     </div>
//   );
// }

// /* =========================================================
//    VISUAL NODE
// ========================================================= */

// function VisualNode({ icon: Icon, label, code, className = "" }) {
//   return (
//     <motion.div
//       initial={{
//         opacity: 0,
//         scale: 0.8,
//       }}
//       animate={{
//         opacity: 1,
//         scale: 1,
//       }}
//       transition={{
//         duration: 0.55,
//         delay: 0.15,
//       }}
//       className={`
//         absolute
//         flex
//         min-w-[115px]
//         items-center
//         gap-3
//         rounded-[12px]
//         border
//         border-white/[0.08]
//         bg-white/[0.045]
//         p-3
//         backdrop-blur-md
//         ${className}
//       `}>
//       <span
//         className="
//           flex
//           h-9
//           w-9
//           shrink-0
//           items-center
//           justify-center
//           rounded-[9px]
//           bg-[#B8F23A]/10
//           text-[#B8F23A]
//         ">
//         <Icon size={16} strokeWidth={1.6} />
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
//             font-medium
//             text-white/60
//           ">
//           {label}
//         </p>
//       </div>
//     </motion.div>
//   );
// }

// /* =========================================================
//    VISUAL 03 · BUILD
// ========================================================= */

// function BuildVisual() {
//   const phases = [
//     ["01", "Civil"],
//     ["02", "Electrical"],
//     ["03", "Integration"],
//     ["04", "Commissioning"],
//   ];

//   return (
//     <div className="relative h-full min-h-[350px] overflow-hidden">
//       <div
//         className="
//           absolute
//           inset-0
//           opacity-[0.16]
//           [background-image:linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)]
//           [background-size:42px_42px]
//         "
//       />

//       {/* PROGRESS */}

//       <div
//         className="
//           absolute
//           left-[8%]
//           right-[8%]
//           top-[13%]
//         ">
//         <div
//           className="
//             flex
//             items-center
//             justify-between
//           ">
//           <div>
//             <p
//               className="
//                 text-[7px]
//                 font-bold
//                 uppercase
//                 tracking-[0.17em]
//                 text-white/30
//               ">
//               Project deployment
//             </p>

//             <p
//               className="
//                 mt-2
//                 text-[22px]
//                 font-light
//                 tracking-[-0.04em]
//                 text-[#B8F23A]
//               ">
//               03 / 04
//             </p>
//           </div>

//           <Hammer size={28} strokeWidth={1.4} className="text-[#B8F23A]/65" />
//         </div>

//         <div
//           className="
//             mt-5
//             h-1
//             overflow-hidden
//             rounded-full
//             bg-white/[0.06]
//           ">
//           <motion.div
//             initial={{ width: "0%" }}
//             animate={{ width: "75%" }}
//             transition={{
//               duration: 1.2,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="
//               h-full
//               rounded-full
//               bg-[#B8F23A]
//             "
//           />
//         </div>
//       </div>

//       {/* PHASES */}

//       <div
//         className="
//           absolute
//           bottom-[9%]
//           left-[8%]
//           right-[8%]
//           grid
//           grid-cols-4
//           gap-3
//         ">
//         {phases.map(([number, label], index) => (
//           <motion.div
//             key={number}
//             initial={{
//               opacity: 0,
//               y: 15,
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//             }}
//             transition={{
//               duration: 0.5,
//               delay: index * 0.08,
//             }}
//             className={`
//               relative
//               min-h-[125px]
//               overflow-hidden
//               rounded-[12px]
//               border
//               p-4

//               ${
//                 index <= 2
//                   ? `
//                     border-[#B8F23A]/20
//                     bg-[#B8F23A]/[0.06]
//                   `
//                   : `
//                     border-white/[0.06]
//                     bg-white/[0.025]
//                   `
//               }
//             `}>
//             <span
//               className="
//                 absolute
//                 -right-1
//                 -top-4
//                 text-[58px]
//                 font-light
//                 tracking-[-0.08em]
//                 text-white/[0.035]
//               ">
//               {number}
//             </span>

//             <div className="relative z-10">
//               <span
//                 className={`
//                   flex
//                   h-7
//                   w-7
//                   items-center
//                   justify-center
//                   rounded-full

//                   ${
//                     index <= 2
//                       ? "bg-[#B8F23A] text-[#10372E]"
//                       : "border border-white/10 text-white/25"
//                   }
//                 `}>
//                 {index <= 2 ? (
//                   <Check size={12} strokeWidth={2} />
//                 ) : (
//                   <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
//                 )}
//               </span>

//               <p
//                 className="
//                   mt-7
//                   text-[7px]
//                   font-bold
//                   uppercase
//                   tracking-[0.14em]
//                   text-white/50
//                 ">
//                 {label}
//               </p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// }

// /* =========================================================
//    VISUAL 04 · OPERATION
// ========================================================= */

// function OperationVisual() {
//   const signals = [44, 58, 49, 67, 63, 77, 72, 86, 78, 82];

//   return (
//     <div className="relative h-full min-h-[350px] overflow-hidden">
//       <div
//         className="
//           absolute
//           inset-0
//           opacity-[0.16]
//           [background-image:linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)]
//           [background-size:42px_42px]
//         "
//       />

//       {/* LIVE */}

//       <div
//         className="
//           absolute
//           left-[7%]
//           right-[7%]
//           top-[11%]
//           flex
//           items-center
//           justify-between
//         ">
//         <div>
//           <div className="flex items-center gap-3">
//             <span className="relative flex h-2.5 w-2.5">
//               <span
//                 className="
//                   absolute
//                   inset-0
//                   animate-ping
//                   rounded-full
//                   bg-[#B8F23A]/40
//                 "
//               />

//               <span
//                 className="
//                   relative
//                   h-2.5
//                   w-2.5
//                   rounded-full
//                   bg-[#B8F23A]
//                 "
//               />
//             </span>

//             <span
//               className="
//                 text-[7px]
//                 font-bold
//                 uppercase
//                 tracking-[0.18em]
//                 text-[#B8F23A]
//               ">
//               Live System
//             </span>
//           </div>

//           <p
//             className="
//               mt-3
//               text-[21px]
//               font-light
//               tracking-[-0.04em]
//               text-white
//             ">
//             Energy intelligence
//           </p>
//         </div>

//         <Radar size={27} strokeWidth={1.4} className="text-[#B8F23A]/60" />
//       </div>

//       {/* SIGNAL */}

//       <div
//         className="
//           absolute
//           bottom-[24%]
//           left-[7%]
//           right-[7%]
//           flex
//           h-[110px]
//           items-end
//           gap-2
//         ">
//         {signals.map((height, index) => (
//           <motion.span
//             key={index}
//             animate={{
//               height: [
//                 `${Math.max(height - 15, 20)}%`,
//                 `${height}%`,
//                 `${Math.max(height - 8, 25)}%`,
//               ],
//             }}
//             transition={{
//               duration: 2 + index * 0.12,
//               repeat: Infinity,
//               repeatType: "mirror",
//             }}
//             className="
//               flex-1
//               rounded-t-[3px]
//               bg-gradient-to-t
//               from-[#B8F23A]/15
//               to-[#B8F23A]/75
//             "
//           />
//         ))}
//       </div>

//       {/* STATUS */}

//       <div
//         className="
//           absolute
//           bottom-[7%]
//           left-[7%]
//           right-[7%]
//           grid
//           grid-cols-3
//           divide-x
//           divide-white/[0.08]
//           border-t
//           border-white/[0.08]
//           pt-5
//         ">
//         {[
//           ["SYSTEM", "Online"],
//           ["CONTROL", "Active"],
//           ["STATUS", "Optimized"],
//         ].map(([label, value]) => (
//           <div
//             key={label}
//             className="
//               px-5
//               first:pl-0
//             ">
//             <p
//               className="
//                 text-[6px]
//                 font-semibold
//                 uppercase
//                 tracking-[0.14em]
//                 text-white/25
//               ">
//               {label}
//             </p>

//             <p
//               className="
//                 mt-1
//                 text-[9px]
//                 font-bold
//                 uppercase
//                 tracking-[0.11em]
//                 text-[#B8F23A]
//               ">
//               {value}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// /* =========================================================
//    ACTIVE VISUAL
// ========================================================= */

// function ActiveVisual({ id }) {
//   switch (id) {
//     case "diagnostico":
//       return <DiagnosticVisual />;

//     case "ingenieria":
//       return <EngineeringVisual />;

//     case "implementacion":
//       return <BuildVisual />;

//     case "operacion":
//       return <OperationVisual />;

//     default:
//       return <DiagnosticVisual />;
//   }
// }

// /* =========================================================
//    MAIN
// ========================================================= */

// function SolarProcessSection() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const activeStep = processSteps[activeIndex];

//   const ActiveIcon = activeStep.icon;

//   const previousStep = () => {
//     setActiveIndex((current) =>
//       current === 0 ? processSteps.length - 1 : current - 1,
//     );
//   };

//   const nextStep = () => {
//     setActiveIndex((current) =>
//       current === processSteps.length - 1 ? 0 : current + 1,
//     );
//   };

//   return (
//     <section
//       id="solar-proceso"
//       className="
//         relative
//         overflow-hidden
//         bg-[#F4F7F0]
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
//           opacity-[0.3]
//           [background-image:linear-gradient(rgba(20,62,51,.032)_1px,transparent_1px),linear-gradient(90deg,rgba(20,62,51,.032)_1px,transparent_1px)]
//           [background-size:72px_72px]
//         "
//       />

//       <div
//         className="
//           pointer-events-none
//           absolute
//           -right-[180px]
//           -top-[200px]
//           h-[520px]
//           w-[520px]
//           rounded-full
//           bg-[#9DD827]/10
//           blur-[110px]
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
//             SMALL INTRO
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
//             amount: 0.3,
//           }}
//           transition={{
//             duration: 0.7,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="
//             mb-10
//             flex
//             flex-col
//             gap-6

//             md:flex-row
//             md:items-end
//             md:justify-between
//           ">
//           <div>
//             <div className="flex items-center gap-4">
//               <span className="h-px w-9 bg-[#9DD827]" />

//               <p
//                 className="
//                   text-[8px]
//                   font-bold
//                   uppercase
//                   tracking-[0.22em]
//                   text-[#76A400]
//                 ">
//                 GRUNER · Project Journey
//               </p>
//             </div>

//             <h2
//               className="
//                 mt-4
//                 max-w-[800px]
//                 text-[clamp(2.3rem,3.5vw,4.2rem)]
//                 font-normal
//                 leading-[0.95]
//                 tracking-[-0.055em]
//               ">
//               De una oportunidad energética
//               <span className="text-[#83B500]">
//                 {" "}
//                 a un sistema en operación.
//               </span>
//             </h2>
//           </div>

//           <p
//             className="
//               max-w-[390px]
//               text-[11px]
//               leading-6
//               text-[#143E33]/45

//               md:text-right
//             ">
//             Un mismo equipo conecta análisis, ingeniería, ejecución y operación
//             durante todo el proyecto.
//           </p>
//         </motion.div>

//         {/* ===================================================
//             MAIN CINEMATIC FRAME
//         =================================================== */}

//         <div
//           className="
//             overflow-hidden
//             rounded-[20px]
//             border
//             border-[#143E33]/[0.08]
//             bg-white
//             shadow-[0_25px_80px_rgba(20,62,51,.08)]
//           ">
//           <div
//             className="
//               grid

//               lg:grid-cols-[.82fr_1.18fr]
//             ">
//             {/* =================================================
//                 LEFT CONTENT
//             ================================================= */}

//             <div
//               className="
//                 relative
//                 overflow-hidden
//                 p-7

//                 sm:p-9
//                 lg:min-h-[610px]
//                 lg:p-10
//                 xl:p-12
//               ">
//               {/* number background */}

//               <AnimatePresence mode="wait">
//                 <motion.span
//                   key={`number-${activeStep.number}`}
//                   initial={{
//                     opacity: 0,
//                     x: -30,
//                   }}
//                   animate={{
//                     opacity: 1,
//                     x: 0,
//                   }}
//                   exit={{
//                     opacity: 0,
//                     x: 20,
//                   }}
//                   transition={{
//                     duration: 0.4,
//                   }}
//                   className="
//                     pointer-events-none
//                     absolute
//                     -left-4
//                     -top-5
//                     select-none
//                     text-[clamp(9rem,14vw,15rem)]
//                     font-light
//                     leading-none
//                     tracking-[-0.095em]
//                     text-[#7FAE00]/[0.055]
//                   ">
//                   {activeStep.number}
//                 </motion.span>
//               </AnimatePresence>

//               <div
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
//                     items-center
//                     justify-between
//                     gap-5
//                   ">
//                   <div className="flex items-center gap-4">
//                     <span
//                       className="
//                         flex
//                         h-11
//                         w-11
//                         items-center
//                         justify-center
//                         rounded-[11px]
//                         bg-[#9DD827]
//                         text-[#143E33]
//                       ">
//                       <ActiveIcon size={18} strokeWidth={1.6} />
//                     </span>

//                     <div>
//                       <p
//                         className="
//                           text-[7px]
//                           font-bold
//                           uppercase
//                           tracking-[0.2em]
//                           text-[#76A400]
//                         ">
//                         {activeStep.code}
//                       </p>

//                       <p
//                         className="
//                           mt-1
//                           text-[7px]
//                           uppercase
//                           tracking-[0.13em]
//                           text-[#143E33]/30
//                         ">
//                         Etapa {activeStep.number} / 04
//                       </p>
//                     </div>
//                   </div>

//                   <div
//                     className="
//                       flex
//                       items-center
//                       gap-2
//                     ">
//                     <button
//                       type="button"
//                       onClick={previousStep}
//                       className="
//                         flex
//                         h-9
//                         w-9
//                         items-center
//                         justify-center
//                         rounded-full
//                         border
//                         border-[#143E33]/10
//                         text-[#143E33]/45
//                         transition-all
//                         duration-300

//                         hover:border-[#9DD827]
//                         hover:bg-[#9DD827]
//                         hover:text-[#143E33]
//                       ">
//                       <ArrowLeft size={14} strokeWidth={1.5} />
//                     </button>

//                     <button
//                       type="button"
//                       onClick={nextStep}
//                       className="
//                         flex
//                         h-9
//                         w-9
//                         items-center
//                         justify-center
//                         rounded-full
//                         bg-[#143E33]
//                         text-white
//                         transition-all
//                         duration-300

//                         hover:bg-[#9DD827]
//                         hover:text-[#143E33]
//                       ">
//                       <ArrowRight size={14} strokeWidth={1.5} />
//                     </button>
//                   </div>
//                 </div>

//                 {/* MAIN TEXT */}

//                 <AnimatePresence mode="wait">
//                   <motion.div
//                     key={activeStep.id}
//                     initial={{
//                       opacity: 0,
//                       y: 15,
//                     }}
//                     animate={{
//                       opacity: 1,
//                       y: 0,
//                     }}
//                     exit={{
//                       opacity: 0,
//                       y: -10,
//                     }}
//                     transition={{
//                       duration: 0.42,
//                       ease: [0.22, 1, 0.36, 1],
//                     }}
//                     className="mt-16">
//                     <p
//                       className="
//                         text-[8px]
//                         font-bold
//                         uppercase
//                         tracking-[0.2em]
//                         text-[#76A400]
//                       ">
//                       {activeStep.label}
//                     </p>

//                     <h3
//                       className="
//                         mt-4
//                         max-w-[660px]
//                         text-[clamp(2.4rem,3.8vw,4.8rem)]
//                         font-normal
//                         leading-[0.92]
//                         tracking-[-0.06em]
//                         text-[#143E33]
//                       ">
//                       {activeStep.title}
//                     </h3>

//                     <p
//                       className="
//                         mt-6
//                         max-w-[580px]
//                         text-[12px]
//                         leading-7
//                         text-[#143E33]/50
//                       ">
//                       {activeStep.description}
//                     </p>

//                     {/* DETAILS */}

//                     <div
//                       className="
//                         mt-8
//                         grid
//                         gap-x-5
//                         gap-y-3
//                         border-t
//                         border-[#143E33]/[0.08]
//                         pt-6

//                         sm:grid-cols-2
//                       ">
//                       {activeStep.details.map((detail) => (
//                         <div
//                           key={detail}
//                           className="
//                             flex
//                             items-center
//                             gap-3
//                           ">
//                           <span
//                             className="
//                               flex
//                               h-5
//                               w-5
//                               items-center
//                               justify-center
//                               rounded-full
//                               bg-[#EDF5DF]
//                               text-[#78A500]
//                             ">
//                             <Check size={10} strokeWidth={2} />
//                           </span>

//                           <span
//                             className="
//                               text-[8px]
//                               font-semibold
//                               uppercase
//                               tracking-[0.12em]
//                               text-[#143E33]/45
//                             ">
//                             {detail}
//                           </span>
//                         </div>
//                       ))}
//                     </div>
//                   </motion.div>
//                 </AnimatePresence>

//                 {/* BOTTOM */}

//                 <div
//                   className="
//                     mt-auto
//                     flex
//                     items-end
//                     justify-between
//                     gap-5
//                     pt-10
//                   ">
//                   <div>
//                     <p
//                       className="
//                         text-[7px]
//                         font-bold
//                         uppercase
//                         tracking-[0.16em]
//                         text-[#143E33]/25
//                       ">
//                       {activeStep.metricLabel}
//                     </p>

//                     <p
//                       className="
//                         mt-2
//                         text-[22px]
//                         font-light
//                         tracking-[-0.04em]
//                         text-[#78A500]
//                       ">
//                       {activeStep.metric}
//                     </p>
//                   </div>

//                   <div
//                     className="
//                       hidden
//                       items-center
//                       gap-3
//                       sm:flex
//                     ">
//                     <span className="h-px w-8 bg-[#9DD827]" />

//                     <span
//                       className="
//                         text-[6px]
//                         font-bold
//                         uppercase
//                         tracking-[0.18em]
//                         text-[#76A400]
//                       ">
//                       GRUNER ENERGY
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* =================================================
//                 RIGHT VISUAL CANVAS
//             ================================================= */}

//             <div
//               className="
//                 relative
//                 min-h-[430px]
//                 overflow-hidden
//                 bg-[#10372E]
//                 text-white

//                 lg:min-h-[610px]
//               ">
//               {/* glow */}

//               <div
//                 className="
//                   pointer-events-none
//                   absolute
//                   -right-[120px]
//                   -top-[120px]
//                   h-[360px]
//                   w-[360px]
//                   rounded-full
//                   bg-[#9DD827]/12
//                   blur-[90px]
//                 "
//               />

//               {/* giant code */}

//               <AnimatePresence mode="wait">
//                 <motion.span
//                   key={`visual-number-${activeStep.number}`}
//                   initial={{
//                     opacity: 0,
//                     x: 25,
//                   }}
//                   animate={{
//                     opacity: 1,
//                     x: 0,
//                   }}
//                   exit={{
//                     opacity: 0,
//                     x: -15,
//                   }}
//                   className="
//                     pointer-events-none
//                     absolute
//                     -right-3
//                     -top-8
//                     text-[150px]
//                     font-light
//                     leading-none
//                     tracking-[-0.09em]
//                     text-[#B8F23A]/[0.04]

//                     sm:text-[190px]
//                   ">
//                   {activeStep.number}
//                 </motion.span>
//               </AnimatePresence>

//               {/* TOP */}

//               <div
//                 className="
//                   absolute
//                   left-6
//                   right-6
//                   top-6
//                   z-20
//                   flex
//                   items-center
//                   justify-between

//                   sm:left-8
//                   sm:right-8
//                   sm:top-8
//                 ">
//                 <div className="flex items-center gap-3">
//                   <span className="relative flex h-2 w-2">
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
//                         h-2
//                         w-2
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
//                       tracking-[0.17em]
//                       text-[#B8F23A]
//                     ">
//                     {activeStep.visualTitle}
//                   </span>
//                 </div>

//                 <span
//                   className="
//                     text-[6px]
//                     font-semibold
//                     uppercase
//                     tracking-[0.15em]
//                     text-white/25
//                   ">
//                   {activeStep.visualSubtitle}
//                 </span>
//               </div>

//               {/* ACTIVE VISUAL */}

//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={`visual-${activeStep.id}`}
//                   initial={{
//                     opacity: 0,
//                     scale: 0.985,
//                   }}
//                   animate={{
//                     opacity: 1,
//                     scale: 1,
//                   }}
//                   exit={{
//                     opacity: 0,
//                     scale: 1.01,
//                   }}
//                   transition={{
//                     duration: 0.45,
//                   }}
//                   className="
//                     absolute
//                     inset-x-0
//                     bottom-0
//                     top-[75px]
//                   ">
//                   <ActiveVisual id={activeStep.id} />
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//           </div>

//           {/* =================================================
//               PROCESS NAVIGATION
//           ================================================= */}

//           <div
//             className="
//               grid
//               border-t
//               border-[#143E33]/[0.08]

//               sm:grid-cols-2
//               lg:grid-cols-4
//             ">
//             {processSteps.map((step, index) => {
//               const Icon = step.icon;

//               const isActive = activeIndex === index;
//               const isPast = index < activeIndex;

//               return (
//                 <button
//                   key={step.id}
//                   type="button"
//                   onClick={() => setActiveIndex(index)}
//                   className={`
//                     group
//                     relative
//                     flex
//                     min-h-[92px]
//                     items-center
//                     gap-4
//                     border-b
//                     border-[#143E33]/[0.07]
//                     px-5
//                     text-left
//                     transition-all
//                     duration-400

//                     sm:border-r
//                     lg:border-b-0
//                     lg:last:border-r-0

//                     ${
//                       isActive
//                         ? "bg-[#143E33] text-white"
//                         : "bg-white text-[#143E33] hover:bg-[#EEF4E6]"
//                     }
//                   `}>
//                   {/* progress */}

//                   {isActive && (
//                     <motion.span
//                       layoutId="process-active-indicator"
//                       className="
//                         absolute
//                         left-0
//                         right-0
//                         top-0
//                         h-[3px]
//                         bg-[#B8F23A]
//                       "
//                     />
//                   )}

//                   {/* ICON */}

//                   <span
//                     className={`
//                       flex
//                       h-10
//                       w-10
//                       shrink-0
//                       items-center
//                       justify-center
//                       rounded-[10px]
//                       transition-all
//                       duration-300

//                       ${
//                         isActive
//                           ? "bg-[#B8F23A] text-[#143E33]"
//                           : isPast
//                             ? "bg-[#E6F0D8] text-[#78A500]"
//                             : "bg-[#F0F3EC] text-[#143E33]/35"
//                       }
//                     `}>
//                     <Icon size={16} strokeWidth={1.6} />
//                   </span>

//                   {/* INFO */}

//                   <div className="min-w-0 flex-1">
//                     <div className="flex items-center gap-2">
//                       <span
//                         className={`
//                           text-[6px]
//                           font-bold
//                           tracking-[0.15em]

//                           ${isActive ? "text-[#B8F23A]" : "text-[#78A500]"}
//                         `}>
//                         {step.number}
//                       </span>

//                       <span
//                         className={`
//                           text-[6px]
//                           font-bold
//                           uppercase
//                           tracking-[0.14em]

//                           ${isActive ? "text-white/35" : "text-[#143E33]/25"}
//                         `}>
//                         {step.code}
//                       </span>
//                     </div>

//                     <p
//                       className="
//                         mt-1.5
//                         truncate
//                         text-[11px]
//                         font-semibold
//                       ">
//                       {step.label}
//                     </p>
//                   </div>

//                   <ChevronRight
//                     size={13}
//                     strokeWidth={1.5}
//                     className={`
//                       transition-all
//                       duration-300

//                       ${
//                         isActive
//                           ? "text-[#B8F23A]"
//                           : "text-[#143E33]/20 group-hover:translate-x-0.5 group-hover:text-[#78A500]"
//                       }
//                     `}
//                   />
//                 </button>
//               );
//             })}
//           </div>
//         </div>

//         {/* ===================================================
//             BOTTOM STATEMENT
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
//             <Sparkles size={12} strokeWidth={1.5} className="text-[#83B500]" />

//             <span
//               className="
//                 text-[7px]
//                 font-semibold
//                 uppercase
//                 tracking-[0.17em]
//                 text-[#143E33]/30
//               ">
//               Un proceso continuo. Un solo equipo. Una misma visión energética.
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
//               Discover · Design · Build · Operate
//             </span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default SolarProcessSection;

import { AnimatePresence, motion } from "motion/react";
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  BatteryCharging,
  Check,
  ChevronRight,
  ClipboardCheck,
  Cpu,
  Gauge,
  Hammer,
  Layers3,
  PlayCircle,
  Radar,
  SearchCheck,
  SolarPanel,
  Sparkles,
  Zap,
} from "lucide-react";
import { useState } from "react";

/* =========================================================
   DATA
========================================================= */

const processSteps = [
  {
    id: "diagnostico",
    number: "01",
    code: "DISCOVER",
    label: "Diagnóstico",
    title: "Primero entendemos la energía.",
    description:
      "Analizamos cómo consume energía la operación, dónde están los puntos críticos y qué oportunidades existen antes de definir cualquier solución.",
    icon: SearchCheck,

    details: [
      "Perfil de consumo",
      "Demanda máxima",
      "Infraestructura existente",
      "Restricciones técnicas",
    ],

    metric: "BASE",
    metricLabel: "Línea de referencia",

    visualTitle: "Energy Mapping",
    visualSubtitle: "Lectura inicial de la operación",
  },

  {
    id: "ingenieria",
    number: "02",
    code: "DESIGN",
    label: "Ingeniería",
    title: "Diseñamos cómo debe comportarse.",
    description:
      "Desarrollamos ingeniería conceptual, básica y de detalle para definir la arquitectura fotovoltaica, BESS, integración eléctrica y estrategia de control.",
    icon: ClipboardCheck,

    details: [
      "Ingeniería conceptual",
      "Ingeniería básica",
      "Ingeniería de detalle",
      "Integración eléctrica",
    ],

    metric: "SYS",
    metricLabel: "Arquitectura energética",

    visualTitle: "System Architecture",
    visualSubtitle: "Solar · BESS · EMS · Load",
  },

  {
    id: "implementacion",
    number: "03",
    code: "BUILD",
    label: "Implementación",
    title: "La ingeniería se convierte en infraestructura.",
    description:
      "Coordinamos suministro de equipos, instalación electromecánica, obra civil, permisos e interconexión, integración eléctrica y puesta en marcha del sistema.",
    icon: Hammer,

    details: [
      "Suministro de equipos",
      "Instalación electromecánica",
      "Obra civil",
      "Permisos e interconexión",
    ],

    metric: "EPC",
    metricLabel: "Ejecución coordinada",

    visualTitle: "Project Deployment",
    visualSubtitle: "Construcción e integración",
  },

  {
    id: "operacion",
    number: "04",
    code: "OPERATE",
    label: "Operación",
    title: "El sistema empieza a aprender.",
    description:
      "Acompañamos la operación y mantenimiento del sistema, monitoreando su comportamiento para conservar desempeño, disponibilidad y valor durante el ciclo de vida.",
    icon: PlayCircle,

    details: ["Operación", "Mantenimiento", "Monitoreo", "Optimización"],

    metric: "LIVE",
    metricLabel: "Sistema en operación",

    visualTitle: "Energy Intelligence",
    visualSubtitle: "Monitoreo y optimización",
  },
];

/* =========================================================
   VISUAL 01 · DIAGNOSTIC
========================================================= */

function DiagnosticVisual() {
  const bars = [34, 48, 41, 67, 58, 83, 72, 91, 68, 54, 71, 43];

  return (
    <div className="relative h-full min-h-[350px] overflow-hidden">
      {/* GRID */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.16]
          [background-image:linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)]
          [background-size:42px_42px]
        "
      />

      {/* RADAR */}

      <div
        className="
          absolute
          right-[8%]
          top-[12%]
          h-[210px]
          w-[210px]
          rounded-full
          border
          border-[#B8F23A]/20
        ">
        <div
          className="
            absolute
            inset-[18%]
            rounded-full
            border
            border-white/10
          "
        />

        <div
          className="
            absolute
            inset-[36%]
            rounded-full
            border
            border-[#B8F23A]/15
          "
        />

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            left-1/2
            top-1/2
            h-[1px]
            w-[50%]
            origin-left
            bg-gradient-to-r
            from-[#B8F23A]
            to-transparent
          "
        />

        <span
          className="
            absolute
            left-[32%]
            top-[28%]
            h-2
            w-2
            rounded-full
            bg-[#B8F23A]
            shadow-[0_0_14px_rgba(184,242,58,.85)]
          "
        />

        <span
          className="
            absolute
            bottom-[26%]
            right-[22%]
            h-1.5
            w-1.5
            rounded-full
            bg-white/50
          "
        />
      </div>

      {/* CHART */}

      <div
        className="
          absolute
          bottom-[9%]
          left-[7%]
          right-[7%]
        ">
        <div
          className="
            mb-5
            flex
            items-center
            justify-between
          ">
          <div className="flex items-center gap-3">
            <Activity size={14} strokeWidth={1.6} className="text-[#B8F23A]" />

            <span
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.17em]
                text-white/35
              ">
              Demand profile
            </span>
          </div>

          <span
            className="
              text-[11px]
              font-bold
              uppercase
              tracking-[0.15em]
              text-[#B8F23A]
            ">
            ANALYZING
          </span>
        </div>

        <div
          className="
            flex
            h-[135px]
            items-end
            gap-2
          ">
          {bars.map((height, index) => (
            <motion.div
              key={index}
              initial={{ height: 0 }}
              animate={{
                height: `${height}%`,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.035,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                flex-1
                overflow-hidden
                rounded-t-[3px]
                bg-white/[0.07]
              ">
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  h-[45%]
                  bg-gradient-to-t
                  from-[#B8F23A]/50
                  to-[#B8F23A]/5
                "
              />
            </motion.div>
          ))}
        </div>

        <div
          className="
            mt-3
            flex
            justify-between
            text-[11px]
            font-semibold
            uppercase
            tracking-[0.12em]
            text-white/20
          ">
          <span>00:00</span>
          <span>06:00</span>
          <span>12:00</span>
          <span>18:00</span>
          <span>24:00</span>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   VISUAL 02 · ENGINEERING
========================================================= */

function EngineeringVisual() {
  return (
    <div className="relative flex h-full min-h-[350px] items-center justify-center">
      <div
        className="
          absolute
          inset-0
          opacity-[0.16]
          [background-image:linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)]
          [background-size:42px_42px]
        "
      />

      {/* CONNECTIONS */}

      <div
        className="
          absolute
          left-[20%]
          right-[20%]
          top-1/2
          h-px
          bg-[#B8F23A]/25
        "
      />

      <div
        className="
          absolute
          bottom-[20%]
          left-1/2
          top-[20%]
          w-px
          bg-[#B8F23A]/20
        "
      />

      {/* CENTER */}

      <div
        className="
          relative
          z-10
          flex
          h-[150px]
          w-[150px]
          items-center
          justify-center
          rounded-full
          border
          border-[#B8F23A]/30
          bg-[#123C32]
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
            inset-3
            rounded-full
            border
            border-dashed
            border-[#B8F23A]/20
          "
        />

        <div className="text-center">
          <Layers3
            size={25}
            strokeWidth={1.5}
            className="mx-auto text-[#B8F23A]"
          />

          <p
            className="
              mt-3
              text-[11px]
              font-bold
              uppercase
              tracking-[0.16em]
              text-[#B8F23A]
            ">
            ENERGY
          </p>

          <p
            className="
              mt-1
              text-[11px]
              uppercase
              tracking-[0.12em]
              text-white/25
            ">
            Architecture
          </p>
        </div>
      </div>

      {/* SOLAR */}

      <VisualNode
        className="left-[8%] top-[16%]"
        icon={SolarPanel}
        label="Solar"
        code="PV"
      />

      {/* BESS */}

      <VisualNode
        className="right-[8%] top-[17%]"
        icon={BatteryCharging}
        label="Storage"
        code="BESS"
      />

      {/* EMS */}

      <VisualNode
        className="bottom-[10%] left-[14%]"
        icon={Cpu}
        label="Control"
        code="EMS"
      />

      {/* LOAD */}

      <VisualNode
        className="bottom-[10%] right-[14%]"
        icon={Zap}
        label="Demand"
        code="LOAD"
      />
    </div>
  );
}

/* =========================================================
   VISUAL NODE
========================================================= */

function VisualNode({ icon: Icon, label, code, className = "" }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.55,
        delay: 0.15,
      }}
      className={`
        absolute
        flex
        min-w-[115px]
        items-center
        gap-3
        rounded-[12px]
        border
        border-white/[0.08]
        bg-white/[0.045]
        p-3
        backdrop-blur-md
        ${className}
      `}>
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
        <Icon size={16} strokeWidth={1.6} />
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
            font-medium
            text-white/60
          ">
          {label}
        </p>
      </div>
    </motion.div>
  );
}

/* =========================================================
   VISUAL 03 · BUILD
========================================================= */

function BuildVisual() {
  const phases = [
    ["01", "Civil"],
    ["02", "Electrical"],
    ["03", "Integration"],
    ["04", "Commissioning"],
  ];

  return (
    <div className="relative h-full min-h-[350px] overflow-hidden">
      <div
        className="
          absolute
          inset-0
          opacity-[0.16]
          [background-image:linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)]
          [background-size:42px_42px]
        "
      />

      {/* PROGRESS */}

      <div
        className="
          absolute
          left-[8%]
          right-[8%]
          top-[13%]
        ">
        <div
          className="
            flex
            items-center
            justify-between
          ">
          <div>
            <p
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.17em]
                text-white/30
              ">
              Project deployment
            </p>

            <p
              className="
                mt-2
                text-[22px]
                font-light
                tracking-[-0.04em]
                text-[#B8F23A]
              ">
              03 / 04
            </p>
          </div>

          <Hammer size={28} strokeWidth={1.4} className="text-[#B8F23A]/65" />
        </div>

        <div
          className="
            mt-5
            h-1
            overflow-hidden
            rounded-full
            bg-white/[0.06]
          ">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "75%" }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              h-full
              rounded-full
              bg-[#B8F23A]
            "
          />
        </div>
      </div>

      {/* PHASES */}

      <div
        className="
          absolute
          bottom-[9%]
          left-[8%]
          right-[8%]
          grid
          grid-cols-4
          gap-3
        ">
        {phases.map(([number, label], index) => (
          <motion.div
            key={number}
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
            }}
            className={`
              relative
              min-h-[125px]
              overflow-hidden
              rounded-[12px]
              border
              p-4

              ${
                index <= 2
                  ? `
                    border-[#B8F23A]/20
                    bg-[#B8F23A]/[0.06]
                  `
                  : `
                    border-white/[0.06]
                    bg-white/[0.025]
                  `
              }
            `}>
            <span
              className="
                absolute
                -right-1
                -top-4
                text-[58px]
                font-light
                tracking-[-0.08em]
                text-white/[0.035]
              ">
              {number}
            </span>

            <div className="relative z-10">
              <span
                className={`
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full

                  ${
                    index <= 2
                      ? "bg-[#B8F23A] text-[#10372E]"
                      : "border border-white/10 text-white/25"
                  }
                `}>
                {index <= 2 ? (
                  <Check size={12} strokeWidth={2} />
                ) : (
                  <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
                )}
              </span>

              <p
                className="
                  mt-7
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.14em]
                  text-white/50
                ">
                {label}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   VISUAL 04 · OPERATION
========================================================= */

function OperationVisual() {
  const signals = [44, 58, 49, 67, 63, 77, 72, 86, 78, 82];

  return (
    <div className="relative h-full min-h-[350px] overflow-hidden">
      <div
        className="
          absolute
          inset-0
          opacity-[0.16]
          [background-image:linear-gradient(rgba(255,255,255,.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.1)_1px,transparent_1px)]
          [background-size:42px_42px]
        "
      />

      {/* LIVE */}

      <div
        className="
          absolute
          left-[7%]
          right-[7%]
          top-[11%]
          flex
          items-center
          justify-between
        ">
        <div>
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
              Live System
            </span>
          </div>

          <p
            className="
              mt-3
              text-[21px]
              font-light
              tracking-[-0.04em]
              text-white
            ">
            Energy intelligence
          </p>
        </div>

        <Radar size={27} strokeWidth={1.4} className="text-[#B8F23A]/60" />
      </div>

      {/* SIGNAL */}

      <div
        className="
          absolute
          bottom-[24%]
          left-[7%]
          right-[7%]
          flex
          h-[110px]
          items-end
          gap-2
        ">
        {signals.map((height, index) => (
          <motion.span
            key={index}
            animate={{
              height: [
                `${Math.max(height - 15, 20)}%`,
                `${height}%`,
                `${Math.max(height - 8, 25)}%`,
              ],
            }}
            transition={{
              duration: 2 + index * 0.12,
              repeat: Infinity,
              repeatType: "mirror",
            }}
            className="
              flex-1
              rounded-t-[3px]
              bg-gradient-to-t
              from-[#B8F23A]/15
              to-[#B8F23A]/75
            "
          />
        ))}
      </div>

      {/* STATUS */}

      <div
        className="
          absolute
          bottom-[7%]
          left-[7%]
          right-[7%]
          grid
          grid-cols-3
          divide-x
          divide-white/[0.08]
          border-t
          border-white/[0.08]
          pt-5
        ">
        {[
          ["SYSTEM", "Online"],
          ["CONTROL", "Active"],
          ["STATUS", "Optimized"],
        ].map(([label, value]) => (
          <div
            key={label}
            className="
              px-5
              first:pl-0
            ">
            <p
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.14em]
                text-white/25
              ">
              {label}
            </p>

            <p
              className="
                mt-1
                text-[12px]
                font-bold
                uppercase
                tracking-[0.11em]
                text-[#B8F23A]
              ">
              {value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   ACTIVE VISUAL
========================================================= */

function ActiveVisual({ id }) {
  switch (id) {
    case "diagnostico":
      return <DiagnosticVisual />;

    case "ingenieria":
      return <EngineeringVisual />;

    case "implementacion":
      return <BuildVisual />;

    case "operacion":
      return <OperationVisual />;

    default:
      return <DiagnosticVisual />;
  }
}

/* =========================================================
   MAIN
========================================================= */

function SolarProcessSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeStep = processSteps[activeIndex];

  const ActiveIcon = activeStep.icon;

  const previousStep = () => {
    setActiveIndex((current) =>
      current === 0 ? processSteps.length - 1 : current - 1,
    );
  };

  const nextStep = () => {
    setActiveIndex((current) =>
      current === processSteps.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section
      id="solar-proceso"
      className="
        relative
        overflow-hidden
        bg-[#F4F7F0]
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
          opacity-[0.3]
          [background-image:linear-gradient(rgba(20,62,51,.032)_1px,transparent_1px),linear-gradient(90deg,rgba(20,62,51,.032)_1px,transparent_1px)]
          [background-size:72px_72px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[180px]
          -top-[200px]
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#9DD827]/10
          blur-[110px]
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
            SMALL INTRO
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mb-10
            flex
            flex-col
            gap-6

            md:flex-row
            md:items-end
            md:justify-between
          ">
          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-9 bg-[#9DD827]" />

              <p
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-[#76A400]
                ">
                GRUNER · Project Journey
              </p>
            </div>

            <h2
              className="
                mt-4
                max-w-[800px]
                text-[clamp(2.3rem,3.5vw,4.2rem)]
                font-normal
                leading-[0.95]
                tracking-[-0.055em]
              ">
              De una oportunidad energética
              <span className="text-[#83B500]">
                {" "}
                a un sistema en operación.
              </span>
            </h2>
          </div>

          <p
            className="
              max-w-[390px]
              text-[13px]
              leading-6
              text-[#143E33]/45

              md:text-right
            ">
            Un mismo equipo conecta análisis, ingeniería, suministro,
            instalación, puesta en marcha y operación dentro de un proyecto
            llave en mano.
          </p>
        </motion.div>

        {/* ===================================================
            MAIN CINEMATIC FRAME
        =================================================== */}

        <div
          className="
            overflow-hidden
            rounded-[20px]
            border
            border-[#143E33]/[0.08]
            bg-white
            shadow-[0_25px_80px_rgba(20,62,51,.08)]
          ">
          <div
            className="
              grid

              lg:grid-cols-[.82fr_1.18fr]
            ">
            {/* =================================================
                LEFT CONTENT
            ================================================= */}

            <div
              className="
                relative
                overflow-hidden
                p-7

                sm:p-9
                lg:min-h-[610px]
                lg:p-10
                xl:p-12
              ">
              {/* number background */}

              <AnimatePresence mode="wait">
                <motion.span
                  key={`number-${activeStep.number}`}
                  initial={{
                    opacity: 0,
                    x: -30,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: 20,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                  className="
                    pointer-events-none
                    absolute
                    -left-4
                    -top-5
                    select-none
                    text-[clamp(9rem,14vw,15rem)]
                    font-light
                    leading-none
                    tracking-[-0.095em]
                    text-[#7FAE00]/[0.055]
                  ">
                  {activeStep.number}
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
                        rounded-[11px]
                        bg-[#9DD827]
                        text-[#143E33]
                      ">
                      <ActiveIcon size={18} strokeWidth={1.6} />
                    </span>

                    <div>
                      <p
                        className="
                          text-[11px]
                          font-bold
                          uppercase
                          tracking-[0.2em]
                          text-[#76A400]
                        ">
                        {activeStep.code}
                      </p>

                      <p
                        className="
                          mt-1
                          text-[11px]
                          uppercase
                          tracking-[0.13em]
                          text-[#143E33]/30
                        ">
                        Etapa {activeStep.number} / 04
                      </p>
                    </div>
                  </div>

                  <div
                    className="
                      flex
                      items-center
                      gap-2
                    ">
                    <button
                      type="button"
                      onClick={previousStep}
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-[#143E33]/10
                        text-[#143E33]/45
                        transition-all
                        duration-300

                        hover:border-[#9DD827]
                        hover:bg-[#9DD827]
                        hover:text-[#143E33]
                      ">
                      <ArrowLeft size={14} strokeWidth={1.5} />
                    </button>

                    <button
                      type="button"
                      onClick={nextStep}
                      className="
                        flex
                        h-9
                        w-9
                        items-center
                        justify-center
                        rounded-full
                        bg-[#143E33]
                        text-white
                        transition-all
                        duration-300

                        hover:bg-[#9DD827]
                        hover:text-[#143E33]
                      ">
                      <ArrowRight size={14} strokeWidth={1.5} />
                    </button>
                  </div>
                </div>

                {/* MAIN TEXT */}

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep.id}
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
                      duration: 0.42,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="mt-16">
                    <p
                      className="
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.2em]
                        text-[#76A400]
                      ">
                      {activeStep.label}
                    </p>

                    <h3
                      className="
                        mt-4
                        max-w-[660px]
                        text-[clamp(2.4rem,3.8vw,4.8rem)]
                        font-normal
                        leading-[0.92]
                        tracking-[-0.06em]
                        text-[#143E33]
                      ">
                      {activeStep.title}
                    </h3>

                    <p
                      className="
                        mt-6
                        max-w-[580px]
                        text-[12px]
                        leading-7
                        text-[#143E33]/50
                      ">
                      {activeStep.description}
                    </p>

                    {/* DETAILS */}

                    <div
                      className="
                        mt-8
                        grid
                        gap-x-5
                        gap-y-3
                        border-t
                        border-[#143E33]/[0.08]
                        pt-6

                        sm:grid-cols-2
                      ">
                      {activeStep.details.map((detail) => (
                        <div
                          key={detail}
                          className="
                            flex
                            items-center
                            gap-3
                          ">
                          <span
                            className="
                              flex
                              h-5
                              w-5
                              items-center
                              justify-center
                              rounded-full
                              bg-[#EDF5DF]
                              text-[#78A500]
                            ">
                            <Check size={10} strokeWidth={2} />
                          </span>

                          <span
                            className="
                              text-[11px]
                              font-semibold
                              uppercase
                              tracking-[0.12em]
                              text-[#143E33]/45
                            ">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* BOTTOM */}

                <div
                  className="
                    mt-auto
                    flex
                    items-end
                    justify-between
                    gap-5
                    pt-10
                  ">
                  <div>
                    <p
                      className="
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.16em]
                        text-[#143E33]/25
                      ">
                      {activeStep.metricLabel}
                    </p>

                    <p
                      className="
                        mt-2
                        text-[22px]
                        font-light
                        tracking-[-0.04em]
                        text-[#78A500]
                      ">
                      {activeStep.metric}
                    </p>
                  </div>

                  <div
                    className="
                      hidden
                      items-center
                      gap-3
                      sm:flex
                    ">
                    <span className="h-px w-8 bg-[#9DD827]" />

                    <span
                      className="
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        text-[#76A400]
                      ">
                      GRUNER ENERGY
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                RIGHT VISUAL CANVAS
            ================================================= */}

            <div
              className="
                relative
                min-h-[430px]
                overflow-hidden
                bg-[#10372E]
                text-white

                lg:min-h-[610px]
              ">
              {/* glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-[120px]
                  -top-[120px]
                  h-[360px]
                  w-[360px]
                  rounded-full
                  bg-[#9DD827]/12
                  blur-[90px]
                "
              />

              {/* giant code */}

              <AnimatePresence mode="wait">
                <motion.span
                  key={`visual-number-${activeStep.number}`}
                  initial={{
                    opacity: 0,
                    x: 25,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: -15,
                  }}
                  className="
                    pointer-events-none
                    absolute
                    -right-3
                    -top-8
                    text-[150px]
                    font-light
                    leading-none
                    tracking-[-0.09em]
                    text-[#B8F23A]/[0.04]

                    sm:text-[190px]
                  ">
                  {activeStep.number}
                </motion.span>
              </AnimatePresence>

              {/* TOP */}

              <div
                className="
                  absolute
                  left-6
                  right-6
                  top-6
                  z-20
                  flex
                  items-center
                  justify-between

                  sm:left-8
                  sm:right-8
                  sm:top-8
                ">
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
                      tracking-[0.17em]
                      text-[#B8F23A]
                    ">
                    {activeStep.visualTitle}
                  </span>
                </div>

                <span
                  className="
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.15em]
                    text-white/25
                  ">
                  {activeStep.visualSubtitle}
                </span>
              </div>

              {/* ACTIVE VISUAL */}

              <AnimatePresence mode="wait">
                <motion.div
                  key={`visual-${activeStep.id}`}
                  initial={{
                    opacity: 0,
                    scale: 0.985,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 1.01,
                  }}
                  transition={{
                    duration: 0.45,
                  }}
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    top-[75px]
                  ">
                  <ActiveVisual id={activeStep.id} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* =================================================
              PROCESS NAVIGATION
          ================================================= */}

          <div
            className="
              grid
              border-t
              border-[#143E33]/[0.08]

              sm:grid-cols-2
              lg:grid-cols-4
            ">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              const isActive = activeIndex === index;
              const isPast = index < activeIndex;

              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`
                    group
                    relative
                    flex
                    min-h-[92px]
                    items-center
                    gap-4
                    border-b
                    border-[#143E33]/[0.07]
                    px-5
                    text-left
                    transition-all
                    duration-400

                    sm:border-r
                    lg:border-b-0
                    lg:last:border-r-0

                    ${
                      isActive
                        ? "bg-[#143E33] text-white"
                        : "bg-white text-[#143E33] hover:bg-[#EEF4E6]"
                    }
                  `}>
                  {/* progress */}

                  {isActive && (
                    <motion.span
                      layoutId="process-active-indicator"
                      className="
                        absolute
                        left-0
                        right-0
                        top-0
                        h-[3px]
                        bg-[#B8F23A]
                      "
                    />
                  )}

                  {/* ICON */}

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
                          ? "bg-[#B8F23A] text-[#143E33]"
                          : isPast
                            ? "bg-[#E6F0D8] text-[#78A500]"
                            : "bg-[#F0F3EC] text-[#143E33]/35"
                      }
                    `}>
                    <Icon size={16} strokeWidth={1.6} />
                  </span>

                  {/* INFO */}

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span
                        className={`
                          text-[11px]
                          font-bold
                          tracking-[0.15em]

                          ${isActive ? "text-[#B8F23A]" : "text-[#78A500]"}
                        `}>
                        {step.number}
                      </span>

                      <span
                        className={`
                          text-[11px]
                          font-bold
                          uppercase
                          tracking-[0.14em]

                          ${isActive ? "text-white/35" : "text-[#143E33]/25"}
                        `}>
                        {step.code}
                      </span>
                    </div>

                    <p
                      className="
                        mt-1.5
                        truncate
                        text-[11px]
                        font-semibold
                      ">
                      {step.label}
                    </p>
                  </div>

                  <ChevronRight
                    size={13}
                    strokeWidth={1.5}
                    className={`
                      transition-all
                      duration-300

                      ${
                        isActive
                          ? "text-[#B8F23A]"
                          : "text-[#143E33]/20 group-hover:translate-x-0.5 group-hover:text-[#78A500]"
                      }
                    `}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* ===================================================
            BOTTOM STATEMENT
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
            <Sparkles size={12} strokeWidth={1.5} className="text-[#83B500]" />

            <span
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.17em]
                text-[#143E33]/30
              ">
              Un proceso continuo. Un solo equipo. Una misma visión energética.
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
              Discover · Design · Build · Operate
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SolarProcessSection;
