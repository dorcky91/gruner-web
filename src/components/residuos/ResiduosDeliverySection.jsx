// // import { motion } from "motion/react";
// // import {
// //   ArrowRight,
// //   Boxes,
// //   Flame,
// //   Leaf,
// //   Recycle,
// //   Sparkles,
// //   Zap,
// // } from "lucide-react";

// // /* =========================================================
// //    MATERIAL PARTICLES
// // ========================================================= */

// // const particles = [
// //   {
// //     left: "5%",
// //     top: "13%",
// //     size: 12,
// //     rotate: -12,
// //     delay: 0,
// //   },
// //   {
// //     left: "19%",
// //     top: "7%",
// //     size: 8,
// //     rotate: 18,
// //     delay: 0.08,
// //   },
// //   {
// //     left: "32%",
// //     top: "20%",
// //     size: 14,
// //     rotate: 8,
// //     delay: 0.16,
// //   },
// //   {
// //     left: "11%",
// //     top: "38%",
// //     size: 9,
// //     rotate: 24,
// //     delay: 0.24,
// //   },
// //   {
// //     left: "26%",
// //     top: "45%",
// //     size: 11,
// //     rotate: -20,
// //     delay: 0.32,
// //   },
// //   {
// //     left: "4%",
// //     top: "65%",
// //     size: 14,
// //     rotate: 12,
// //     delay: 0.4,
// //   },
// //   {
// //     left: "20%",
// //     top: "73%",
// //     size: 8,
// //     rotate: -8,
// //     delay: 0.48,
// //   },
// //   {
// //     left: "34%",
// //     top: "62%",
// //     size: 10,
// //     rotate: 16,
// //     delay: 0.56,
// //   },
// // ];

// // /* =========================================================
// //    INPUT MATERIAL
// // ========================================================= */

// // function InputMatter() {
// //   return (
// //     <div className="relative h-[260px] w-full">
// //       {/* orbit */}

// //       <motion.div
// //         animate={{
// //           rotate: 360,
// //         }}
// //         transition={{
// //           duration: 28,
// //           repeat: Infinity,
// //           ease: "linear",
// //         }}
// //         className="
// //           absolute
// //           left-[12%]
// //           top-1/2
// //           h-[190px]
// //           w-[190px]
// //           -translate-y-1/2
// //           rounded-full
// //           border
// //           border-dashed
// //           border-[#B8F23A]/20
// //         "
// //       />

// //       <div
// //         className="
// //           absolute
// //           left-[18%]
// //           top-1/2
// //           h-[135px]
// //           w-[135px]
// //           -translate-y-1/2
// //           rounded-full
// //           bg-[#B8F23A]/[0.05]
// //           blur-[5px]
// //         "
// //       />

// //       {/* particles */}

// //       {particles.map((particle, index) => (
// //         <motion.span
// //           key={index}
// //           initial={{
// //             opacity: 0,
// //             scale: 0.4,
// //           }}
// //           whileInView={{
// //             opacity: 1,
// //             scale: 1,
// //           }}
// //           animate={{
// //             y: [0, -7, 0],
// //             rotate: [particle.rotate, particle.rotate + 7, particle.rotate],
// //           }}
// //           viewport={{ once: true }}
// //           transition={{
// //             opacity: {
// //               duration: 0.5,
// //               delay: particle.delay,
// //             },
// //             scale: {
// //               duration: 0.5,
// //               delay: particle.delay,
// //             },
// //             y: {
// //               duration: 4 + index * 0.25,
// //               repeat: Infinity,
// //               ease: "easeInOut",
// //             },
// //             rotate: {
// //               duration: 5 + index * 0.2,
// //               repeat: Infinity,
// //               ease: "easeInOut",
// //             },
// //           }}
// //           style={{
// //             left: particle.left,
// //             top: particle.top,
// //             width: particle.size,
// //             height: particle.size,
// //           }}
// //           className={`
// //             absolute

// //             ${
// //               index % 3 === 0
// //                 ? "rounded-full bg-[#B8F23A]"
// //                 : index % 3 === 1
// //                   ? "rounded-[2px] border border-white/25 bg-white/[0.08]"
// //                   : "rounded-[3px] bg-[#86B92B]/60"
// //             }
// //           `}
// //         />
// //       ))}

// //       {/* main mass */}

// //       <motion.div
// //         initial={{
// //           opacity: 0,
// //           scale: 0.8,
// //         }}
// //         whileInView={{
// //           opacity: 1,
// //           scale: 1,
// //         }}
// //         viewport={{ once: true }}
// //         transition={{
// //           duration: 0.8,
// //           ease: [0.22, 1, 0.36, 1],
// //         }}
// //         className="
// //           absolute
// //           left-[15%]
// //           top-1/2
// //           flex
// //           h-[150px]
// //           w-[150px]
// //           -translate-y-1/2
// //           items-center
// //           justify-center
// //           rounded-[45%_55%_52%_48%/52%_43%_57%_48%]
// //           border
// //           border-white/[0.08]
// //           bg-white/[0.035]
// //           shadow-[inset_0_0_45px_rgba(184,242,58,.035)]
// //         ">
// //         <Recycle size={42} strokeWidth={1.1} className="text-[#B8F23A]" />
// //       </motion.div>

// //       {/* movement lines */}

// //       <div
// //         className="
// //           absolute
// //           right-[4%]
// //           top-[43%]
// //           h-px
// //           w-[43%]
// //           bg-gradient-to-r
// //           from-[#B8F23A]/5
// //           via-[#B8F23A]/50
// //           to-[#B8F23A]
// //         "
// //       />

// //       <div
// //         className="
// //           absolute
// //           right-[4%]
// //           top-[50%]
// //           h-px
// //           w-[35%]
// //           bg-gradient-to-r
// //           from-transparent
// //           via-white/10
// //           to-[#B8F23A]/55
// //         "
// //       />

// //       <div
// //         className="
// //           absolute
// //           right-[4%]
// //           top-[57%]
// //           h-px
// //           w-[28%]
// //           bg-gradient-to-r
// //           from-transparent
// //           to-[#B8F23A]/30
// //         "
// //       />
// //     </div>
// //   );
// // }

// // /* =========================================================
// //    TRANSFORMATION CORE
// // ========================================================= */

// // function TransformationCore() {
// //   return (
// //     <div
// //       className="
// //         relative
// //         flex
// //         h-[280px]
// //         items-center
// //         justify-center
// //       ">
// //       {/* outer rings */}

// //       <motion.span
// //         animate={{
// //           rotate: 360,
// //         }}
// //         transition={{
// //           duration: 20,
// //           repeat: Infinity,
// //           ease: "linear",
// //         }}
// //         className="
// //           absolute
// //           h-[230px]
// //           w-[230px]
// //           rounded-full
// //           border
// //           border-dashed
// //           border-[#143E33]/10
// //         "
// //       />

// //       <motion.span
// //         animate={{
// //           rotate: -360,
// //         }}
// //         transition={{
// //           duration: 28,
// //           repeat: Infinity,
// //           ease: "linear",
// //         }}
// //         className="
// //           absolute
// //           h-[190px]
// //           w-[190px]
// //           rounded-full
// //           border
// //           border-[#83B500]/15
// //         "
// //       />

// //       <div
// //         className="
// //           absolute
// //           h-[165px]
// //           w-[165px]
// //           rounded-full
// //           bg-[#B8F23A]/15
// //           blur-[38px]
// //         "
// //       />

// //       {/* center */}

// //       <motion.div
// //         initial={{
// //           opacity: 0,
// //           scale: 0.7,
// //         }}
// //         whileInView={{
// //           opacity: 1,
// //           scale: 1,
// //         }}
// //         viewport={{ once: true }}
// //         transition={{
// //           duration: 0.7,
// //           delay: 0.15,
// //           ease: [0.22, 1, 0.36, 1],
// //         }}
// //         className="
// //           relative
// //           z-10
// //           flex
// //           h-[145px]
// //           w-[145px]
// //           flex-col
// //           items-center
// //           justify-center
// //           rounded-full
// //           bg-[#B8F23A]
// //           text-center
// //           text-[#10372E]
// //           shadow-[0_22px_50px_rgba(112,154,25,.18)]
// //         ">
// //         <Sparkles size={21} strokeWidth={1.5} />

// //         <span
// //           className="
// //             mt-3
// //             text-[7px]
// //             font-bold
// //             uppercase
// //             tracking-[0.17em]
// //           ">
// //           Transformación
// //         </span>

// //         <span
// //           className="
// //             mt-1
// //             text-[6px]
// //             uppercase
// //             tracking-[0.11em]
// //             text-[#10372E]/50
// //           ">
// //           Residuo → Recurso
// //         </span>
// //       </motion.div>

// //       {/* orbit nodes */}

// //       {[
// //         "left-[2%] top-[48%]",
// //         "right-[5%] top-[20%]",
// //         "right-[3%] bottom-[20%]",
// //       ].map((position, index) => (
// //         <motion.span
// //           key={position}
// //           animate={{
// //             scale: [1, 1.3, 1],
// //             opacity: [0.45, 1, 0.45],
// //           }}
// //           transition={{
// //             duration: 2.4,
// //             delay: index * 0.6,
// //             repeat: Infinity,
// //           }}
// //           className={`
// //             absolute
// //             h-2
// //             w-2
// //             rounded-full
// //             bg-[#83B500]
// //             ${position}
// //           `}
// //         />
// //       ))}
// //     </div>
// //   );
// // }

// // /* =========================================================
// //    OUTPUT COMPOSITION
// // ========================================================= */

// // function OutputMatter() {
// //   const outputs = [
// //     {
// //       icon: Boxes,
// //       label: "Materiales",
// //       sub: "valorizables",
// //     },
// //     {
// //       icon: Zap,
// //       label: "Biogás",
// //       sub: "y energía",
// //     },
// //     {
// //       icon: Leaf,
// //       label: "Composta",
// //       sub: "biofertilizante",
// //     },
// //   ];

// //   return (
// //     <div className="relative h-[260px] w-full">
// //       {/* guide lines */}

// //       <div
// //         className="
// //           absolute
// //           left-0
// //           top-1/2
// //           h-px
// //           w-[22%]
// //           bg-gradient-to-r
// //           from-[#83B500]
// //           to-[#83B500]/10
// //         "
// //       />

// //       <div
// //         className="
// //           absolute
// //           left-[18%]
// //           right-[7%]
// //           top-1/2
// //           h-px
// //           bg-[#143E33]/[0.06]
// //         "
// //       />

// //       {/* ordered output */}

// //       <div
// //         className="
// //           absolute
// //           inset-y-0
// //           left-[22%]
// //           right-[3%]
// //           flex
// //           items-center
// //           justify-between
// //           gap-4
// //         ">
// //         {outputs.map((output, index) => {
// //           const Icon = output.icon;

// //           return (
// //             <motion.div
// //               key={output.label}
// //               initial={{
// //                 opacity: 0,
// //                 y: 18,
// //                 scale: 0.9,
// //               }}
// //               whileInView={{
// //                 opacity: 1,
// //                 y: 0,
// //                 scale: 1,
// //               }}
// //               viewport={{ once: true }}
// //               transition={{
// //                 duration: 0.55,
// //                 delay: 0.2 + index * 0.12,
// //               }}
// //               className="
// //                 relative
// //                 flex
// //                 flex-1
// //                 flex-col
// //                 items-center
// //                 text-center
// //               ">
// //               {/* vertical stem */}

// //               <span
// //                 className="
// //                   absolute
// //                   left-1/2
// //                   top-1/2
// //                   h-[105px]
// //                   w-px
// //                   -translate-x-1/2
// //                   -translate-y-1/2
// //                   bg-gradient-to-b
// //                   from-transparent
// //                   via-[#143E33]/10
// //                   to-transparent
// //                 "
// //               />

// //               <motion.span
// //                 whileHover={{
// //                   y: -4,
// //                 }}
// //                 className="
// //                   relative
// //                   z-10
// //                   flex
// //                   h-[76px]
// //                   w-[76px]
// //                   items-center
// //                   justify-center
// //                   rounded-[22px]
// //                   border
// //                   border-[#143E33]/[0.07]
// //                   bg-white
// //                   text-[#78A500]
// //                   shadow-[0_14px_35px_rgba(20,62,51,.07)]
// //                 ">
// //                 <Icon size={24} strokeWidth={1.45} />
// //               </motion.span>

// //               <p
// //                 className="
// //                   relative
// //                   z-10
// //                   mt-4
// //                   text-[9px]
// //                   font-bold
// //                   uppercase
// //                   tracking-[0.12em]
// //                   text-[#143E33]
// //                 ">
// //                 {output.label}
// //               </p>

// //               <p
// //                 className="
// //                   relative
// //                   z-10
// //                   mt-1
// //                   text-[7px]
// //                   uppercase
// //                   tracking-[0.1em]
// //                   text-[#143E33]/30
// //                 ">
// //                 {output.sub}
// //               </p>
// //             </motion.div>
// //           );
// //         })}
// //       </div>
// //     </div>
// //   );
// // }

// // /* =========================================================
// //    MAIN
// // ========================================================= */

// // function ResiduosDeliverySection() {
// //   return (
// //     <section
// //       id="residuos-delivery"
// //       className="
// //         relative
// //         overflow-hidden
// //         bg-[#F4F7F1]
// //         py-16
// //         text-[#143E33]

// //         lg:py-20
// //       ">
// //       {/* =====================================================
// //           BACKGROUND
// //       ===================================================== */}

// //       <div
// //         className="
// //           pointer-events-none
// //           absolute
// //           inset-0
// //           opacity-[0.22]
// //           [background-image:linear-gradient(rgba(20,62,51,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(20,62,51,.025)_1px,transparent_1px)]
// //           [background-size:72px_72px]
// //         "
// //       />

// //       <div
// //         className="
// //           pointer-events-none
// //           absolute
// //           -right-[200px]
// //           top-[-200px]
// //           h-[520px]
// //           w-[520px]
// //           rounded-full
// //           bg-[#B8F23A]/10
// //           blur-[130px]
// //         "
// //       />

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
// //             duration: 0.7,
// //             ease: [0.22, 1, 0.36, 1],
// //           }}
// //           className="
// //             grid
// //             gap-8

// //             lg:grid-cols-[1fr_390px]
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
// //                   bg-[#B8F23A]
// //                   text-[#143E33]
// //                 ">
// //                 <Recycle size={17} strokeWidth={1.65} />
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
// //                   Transformación
// //                 </p>
// //               </div>
// //             </div>

// //             <h2
// //               className="
// //                 mt-5
// //                 max-w-[1050px]
// //                 text-[clamp(2.8rem,4.7vw,5.6rem)]
// //                 font-normal
// //                 leading-[0.91]
// //                 tracking-[-0.065em]
// //               ">
// //               El residuo cambia
// //               <span className="block">cuando cambia</span>
// //               <span className="block text-[#83B500]">
// //                 lo que hacemos con él.
// //               </span>
// //             </h2>
// //           </div>

// //           <div className="lg:pb-1">
// //             <p
// //               className="
// //                 max-w-[390px]
// //                 text-[11px]
// //                 leading-6
// //                 text-[#143E33]/46
// //               ">
// //               Selección, tratamiento y valorización permiten recuperar
// //               materiales y aprovechar distintas corrientes de residuos.
// //             </p>
// //           </div>
// //         </motion.div>

// //         {/* ===================================================
// //             TRANSFORMATION CANVAS
// //         =================================================== */}

// //         <motion.div
// //           initial={{
// //             opacity: 0,
// //             y: 30,
// //           }}
// //           whileInView={{
// //             opacity: 1,
// //             y: 0,
// //           }}
// //           viewport={{
// //             once: true,
// //             amount: 0.08,
// //           }}
// //           transition={{
// //             duration: 0.85,
// //             delay: 0.08,
// //             ease: [0.22, 1, 0.36, 1],
// //           }}
// //           className="
// //             relative
// //             mt-11
// //             overflow-hidden
// //             rounded-[30px]
// //             border
// //             border-[#143E33]/[0.07]
// //             bg-white
// //             shadow-[0_30px_90px_rgba(20,62,51,.08)]
// //           ">
// //           {/* ===============================================
// //               DESKTOP
// //           =============================================== */}

// //           <div
// //             className="
// //               relative
// //               hidden
// //               min-h-[620px]

// //               lg:grid
// //               lg:grid-cols-[0.92fr_0.42fr_1.05fr]
// //             ">
// //             {/* =============================================
// //                 LEFT DARK WORLD
// //             ============================================= */}

// //             <div
// //               className="
// //                 relative
// //                 overflow-hidden
// //                 bg-[#10372E]
// //                 px-9
// //                 py-9
// //                 text-white
// //               ">
// //               {/* grid */}

// //               <div
// //                 className="
// //                   pointer-events-none
// //                   absolute
// //                   inset-0
// //                   opacity-[0.13]
// //                   [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)]
// //                   [background-size:40px_40px]
// //                 "
// //               />

// //               {/* giant word */}

// //               <span
// //                 className="
// //                   pointer-events-none
// //                   absolute
// //                   -left-3
// //                   bottom-[-18px]
// //                   select-none
// //                   text-[clamp(7rem,10vw,12rem)]
// //                   font-semibold
// //                   leading-[0.75]
// //                   tracking-[-0.09em]
// //                   text-white/[0.035]
// //                 ">
// //                 RESIDUO
// //               </span>

// //               <div className="relative z-10">
// //                 <div className="flex items-center justify-between">
// //                   <div>
// //                     <p
// //                       className="
// //                         text-[7px]
// //                         font-bold
// //                         uppercase
// //                         tracking-[0.18em]
// //                         text-[#B8F23A]
// //                       ">
// //                       Punto de partida
// //                     </p>

// //                     <h3
// //                       className="
// //                         mt-3
// //                         text-[42px]
// //                         font-medium
// //                         leading-[0.92]
// //                         tracking-[-0.055em]
// //                       ">
// //                       Materia
// //                       <span className="block text-white/42">
// //                         por gestionar.
// //                       </span>
// //                     </h3>
// //                   </div>

// //                   <span
// //                     className="
// //                       flex
// //                       h-12
// //                       w-12
// //                       items-center
// //                       justify-center
// //                       rounded-full
// //                       border
// //                       border-white/[0.08]
// //                       bg-white/[0.04]
// //                       text-[#B8F23A]
// //                     ">
// //                     <Recycle size={19} strokeWidth={1.5} />
// //                   </span>
// //                 </div>

// //                 <div className="mt-5">
// //                   <InputMatter />
// //                 </div>

// //                 <div
// //                   className="
// //                     mt-2
// //                     flex
// //                     items-center
// //                     gap-3
// //                   ">
// //                   <span className="h-px w-9 bg-[#B8F23A]" />

// //                   <span
// //                     className="
// //                       text-[6px]
// //                       font-bold
// //                       uppercase
// //                       tracking-[0.15em]
// //                       text-white/32
// //                     ">
// //                     El proceso comienza aquí
// //                   </span>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* =============================================
// //                 CENTER TRANSFORMATION
// //             ============================================= */}

// //             <div
// //               className="
// //                 relative
// //                 z-20
// //                 flex
// //                 flex-col
// //                 justify-center
// //                 bg-[#EFF4EA]
// //                 px-3
// //                 py-8
// //               ">
// //               {/* diagonal entrances */}

// //               <div
// //                 className="
// //                   pointer-events-none
// //                   absolute
// //                   -left-[1px]
// //                   top-0
// //                   h-full
// //                   w-[55px]
// //                   -translate-x-[54px]
// //                   bg-[#EFF4EA]
// //                   [clip-path:polygon(100%_0,100%_100%,0_100%)]
// //                 "
// //               />

// //               <div
// //                 className="
// //                   pointer-events-none
// //                   absolute
// //                   -right-[54px]
// //                   top-0
// //                   h-full
// //                   w-[55px]
// //                   bg-[#EFF4EA]
// //                   [clip-path:polygon(0_0,100%_0,0_100%)]
// //                 "
// //               />

// //               <div className="relative z-10">
// //                 <p
// //                   className="
// //                     text-center
// //                     text-[6px]
// //                     font-bold
// //                     uppercase
// //                     tracking-[0.17em]
// //                     text-[#78A500]
// //                   ">
// //                   El punto de cambio
// //                 </p>

// //                 <TransformationCore />

// //                 <div className="mx-auto max-w-[210px]">
// //                   <div
// //                     className="
// //                       flex
// //                       flex-wrap
// //                       justify-center
// //                       gap-x-3
// //                       gap-y-2
// //                     ">
// //                     {[
// //                       "Selección",
// //                       "Biogás",
// //                       "Termovalorización",
// //                       "Compostaje",
// //                       "Desgasificación",
// //                     ].map((item) => (
// //                       <span
// //                         key={item}
// //                         className="
// //                           text-[5.5px]
// //                           font-bold
// //                           uppercase
// //                           tracking-[0.1em]
// //                           text-[#143E33]/32
// //                         ">
// //                         {item}
// //                       </span>
// //                     ))}
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* =============================================
// //                 RIGHT VALUE WORLD
// //             ============================================= */}

// //             <div
// //               className="
// //                 relative
// //                 overflow-hidden
// //                 bg-white
// //                 px-10
// //                 py-9
// //               ">
// //               <span
// //                 className="
// //                   pointer-events-none
// //                   absolute
// //                   -right-4
// //                   bottom-[-20px]
// //                   select-none
// //                   text-[clamp(8rem,12vw,14rem)]
// //                   font-semibold
// //                   leading-[0.75]
// //                   tracking-[-0.09em]
// //                   text-[#143E33]/[0.025]
// //                 ">
// //                 VALOR
// //               </span>

// //               <div className="relative z-10">
// //                 <div className="flex items-start justify-between gap-6">
// //                   <div>
// //                     <p
// //                       className="
// //                         text-[7px]
// //                         font-bold
// //                         uppercase
// //                         tracking-[0.18em]
// //                         text-[#78A500]
// //                       ">
// //                       Aprovechamiento
// //                     </p>

// //                     <h3
// //                       className="
// //                         mt-3
// //                         text-[42px]
// //                         font-medium
// //                         leading-[0.92]
// //                         tracking-[-0.055em]
// //                       ">
// //                       El residuo
// //                       <span className="block text-[#83B500]">
// //                         encuentra valor.
// //                       </span>
// //                     </h3>
// //                   </div>

// //                   <span
// //                     className="
// //                       flex
// //                       h-12
// //                       w-12
// //                       shrink-0
// //                       items-center
// //                       justify-center
// //                       rounded-full
// //                       bg-[#B8F23A]
// //                       text-[#10372E]
// //                     ">
// //                     <Sparkles size={19} strokeWidth={1.5} />
// //                   </span>
// //                 </div>

// //                 <div className="mt-7">
// //                   <OutputMatter />
// //                 </div>

// //                 <div
// //                   className="
// //                     mt-4
// //                     grid
// //                     grid-cols-[1fr_auto]
// //                     items-center
// //                     gap-5
// //                     border-t
// //                     border-[#143E33]/[0.07]
// //                     pt-5
// //                   ">
// //                   <p
// //                     className="
// //                       max-w-[380px]
// //                       text-[8px]
// //                       leading-5
// //                       text-[#143E33]/38
// //                     ">
// //                     Diferentes tecnologías permiten recuperar materiales,
// //                     producir biogás, generar energía o transformar residuos
// //                     biodegradables.
// //                   </p>

// //                   <ArrowRight
// //                     size={15}
// //                     strokeWidth={1.5}
// //                     className="text-[#83B500]"
// //                   />
// //                 </div>
// //               </div>
// //             </div>

// //             {/* =============================================
// //                 FLOW ACROSS ENTIRE COMPOSITION
// //             ============================================= */}

// //             <div
// //               className="
// //                 pointer-events-none
// //                 absolute
// //                 left-[32%]
// //                 right-[31%]
// //                 top-1/2
// //                 z-30
// //                 h-px
// //                 -translate-y-1/2
// //               ">
// //               <motion.span
// //                 animate={{
// //                   left: ["0%", "100%"],
// //                   opacity: [0, 1, 1, 0],
// //                 }}
// //                 transition={{
// //                   duration: 3.8,
// //                   repeat: Infinity,
// //                   ease: "linear",
// //                 }}
// //                 className="
// //                   absolute
// //                   top-1/2
// //                   h-2
// //                   w-2
// //                   -translate-y-1/2
// //                   rounded-full
// //                   bg-[#B8F23A]
// //                   shadow-[0_0_16px_rgba(184,242,58,.8)]
// //                 "
// //               />
// //             </div>
// //           </div>

// //           {/* ===============================================
// //               MOBILE
// //           =============================================== */}

// //           <div className="lg:hidden">
// //             {/* RESIDUE */}

// //             <div
// //               className="
// //                 relative
// //                 overflow-hidden
// //                 bg-[#10372E]
// //                 p-6
// //                 text-white
// //               ">
// //               <span
// //                 className="
// //                   absolute
// //                   -bottom-4
// //                   -right-2
// //                   text-[85px]
// //                   font-semibold
// //                   leading-none
// //                   tracking-[-0.08em]
// //                   text-white/[0.035]
// //                 ">
// //                 R
// //               </span>

// //               <div className="relative z-10">
// //                 <p
// //                   className="
// //                     text-[6px]
// //                     font-bold
// //                     uppercase
// //                     tracking-[0.17em]
// //                     text-[#B8F23A]
// //                   ">
// //                   Punto de partida
// //                 </p>

// //                 <h3
// //                   className="
// //                     mt-2
// //                     text-[28px]
// //                     font-medium
// //                     leading-[0.95]
// //                     tracking-[-0.045em]
// //                   ">
// //                   Materia por gestionar.
// //                 </h3>

// //                 <div className="mt-4 h-[170px]">
// //                   <InputMatter />
// //                 </div>
// //               </div>
// //             </div>

// //             {/* TRANSFORMATION */}

// //             <div
// //               className="
// //                 relative
// //                 bg-[#EFF4EA]
// //                 px-5
// //                 py-7
// //               ">
// //               <p
// //                 className="
// //                   text-center
// //                   text-[6px]
// //                   font-bold
// //                   uppercase
// //                   tracking-[0.16em]
// //                   text-[#78A500]
// //                 ">
// //                 Transformación
// //               </p>

// //               <div className="mx-auto max-w-[270px]">
// //                 <TransformationCore />
// //               </div>

// //               <div
// //                 className="
// //                   flex
// //                   flex-wrap
// //                   justify-center
// //                   gap-2
// //                 ">
// //                 {[
// //                   "Selección",
// //                   "Biogás",
// //                   "Termovalorización",
// //                   "Compostaje",
// //                   "Desgasificación",
// //                 ].map((item) => (
// //                   <span
// //                     key={item}
// //                     className="
// //                       rounded-full
// //                       border
// //                       border-[#143E33]/[0.07]
// //                       bg-white
// //                       px-3
// //                       py-2
// //                       text-[5.5px]
// //                       font-bold
// //                       uppercase
// //                       tracking-[0.1em]
// //                       text-[#143E33]/38
// //                     ">
// //                     {item}
// //                   </span>
// //                 ))}
// //               </div>
// //             </div>

// //             {/* VALUE */}

// //             <div
// //               className="
// //                 relative
// //                 overflow-hidden
// //                 bg-white
// //                 p-6
// //               ">
// //               <span
// //                 className="
// //                   absolute
// //                   -bottom-4
// //                   -right-2
// //                   text-[85px]
// //                   font-semibold
// //                   leading-none
// //                   tracking-[-0.08em]
// //                   text-[#143E33]/[0.025]
// //                 ">
// //                 V
// //               </span>

// //               <div className="relative z-10">
// //                 <p
// //                   className="
// //                     text-[6px]
// //                     font-bold
// //                     uppercase
// //                     tracking-[0.17em]
// //                     text-[#78A500]
// //                   ">
// //                   Aprovechamiento
// //                 </p>

// //                 <h3
// //                   className="
// //                     mt-2
// //                     text-[28px]
// //                     font-medium
// //                     leading-[0.95]
// //                     tracking-[-0.045em]
// //                   ">
// //                   El residuo
// //                   <span className="block text-[#83B500]">encuentra valor.</span>
// //                 </h3>

// //                 <div className="mt-5 h-[190px]">
// //                   <OutputMatter />
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* ===============================================
// //               BOTTOM SIGNATURE
// //           =============================================== */}

// //           <div
// //             className="
// //               relative
// //               z-40
// //               flex
// //               flex-col
// //               gap-4
// //               border-t
// //               border-white/[0.07]
// //               bg-[#0D3028]
// //               px-6
// //               py-5
// //               text-white

// //               sm:flex-row
// //               sm:items-center
// //               sm:justify-between

// //               lg:px-8
// //             ">
// //             <div className="flex items-center gap-4">
// //               <span
// //                 className="
// //                   flex
// //                   h-9
// //                   w-9
// //                   items-center
// //                   justify-center
// //                   rounded-full
// //                   bg-[#B8F23A]
// //                   text-[#10372E]
// //                 ">
// //                 <Flame size={14} strokeWidth={1.6} />
// //               </span>

// //               <div>
// //                 <p
// //                   className="
// //                     text-[7px]
// //                     font-bold
// //                     uppercase
// //                     tracking-[0.16em]
// //                     text-[#B8F23A]
// //                   ">
// //                   Valorización
// //                 </p>

// //                 <p
// //                   className="
// //                     mt-1
// //                     text-[8px]
// //                     tracking-[-0.01em]
// //                     text-white/42
// //                   ">
// //                   Convertir una corriente de residuos en una oportunidad de
// //                   aprovechamiento.
// //                 </p>
// //               </div>
// //             </div>

// //             <div className="flex items-center gap-3">
// //               <span
// //                 className="
// //                   text-[6px]
// //                   font-bold
// //                   uppercase
// //                   tracking-[0.16em]
// //                   text-white/28
// //                 ">
// //                 Residuo
// //               </span>

// //               <span className="h-px w-8 bg-[#B8F23A]/40" />

// //               <ArrowRight
// //                 size={12}
// //                 strokeWidth={1.5}
// //                 className="text-[#B8F23A]"
// //               />

// //               <span className="h-px w-8 bg-[#B8F23A]/40" />

// //               <span
// //                 className="
// //                   text-[6px]
// //                   font-bold
// //                   uppercase
// //                   tracking-[0.16em]
// //                   text-[#B8F23A]
// //                 ">
// //                 Valor
// //               </span>
// //             </div>
// //           </div>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // }

// // export default ResiduosDeliverySection;

// import { motion } from "motion/react";
// import {
//   ArrowRight,
//   Boxes,
//   BrainCircuit,
//   Building2,
//   CirclePlay,
//   Leaf,
//   Power,
//   Recycle,
//   Settings,
//   Sparkles,
//   Zap,
// } from "lucide-react";

// /* =========================================================
//    DATA
// ========================================================= */

// const outputs = [
//   {
//     icon: Boxes,
//     title: "Materiales",
//     subtitle: "Valorizables",
//   },
//   {
//     icon: Zap,
//     title: "Biogás",
//     subtitle: "Y energía",
//   },
//   {
//     icon: Leaf,
//     title: "Composta",
//     subtitle: "Biofertilizante",
//   },
// ];

// const capabilities = [
//   {
//     icon: BrainCircuit,
//     title: "Conceptualización",
//   },
//   {
//     icon: Building2,
//     title: "Construcción",
//   },
//   {
//     icon: CirclePlay,
//     title: "Puesta en marcha",
//   },
//   {
//     icon: Settings,
//     title: "Operación",
//   },
// ];

// /* =========================================================
//    RESIDUE PARTICLES
// ========================================================= */

// function ResidueParticles() {
//   const particles = [
//     ["left-[46%] top-[12%] h-3 w-3 rotate-12", 0],
//     ["left-[57%] top-[18%] h-4 w-4 -rotate-12", 0.08],
//     ["left-[67%] top-[11%] h-2.5 w-2.5 rotate-45", 0.16],
//     ["left-[40%] top-[28%] h-5 w-4 -rotate-6", 0.24],
//     ["left-[53%] top-[31%] h-3 w-5 rotate-12", 0.32],
//     ["left-[63%] top-[26%] h-5 w-5 rotate-45", 0.4],
//     ["left-[72%] top-[35%] h-3 w-3 -rotate-12", 0.48],
//     ["left-[44%] top-[44%] h-4 w-6 rotate-6", 0.56],
//     ["left-[58%] top-[48%] h-5 w-4 rotate-12", 0.64],
//     ["left-[70%] top-[50%] h-3 w-5 -rotate-12", 0.72],
//     ["left-[38%] top-[62%] h-3 w-3 rotate-45", 0.8],
//     ["left-[49%] top-[68%] h-5 w-5 rotate-12", 0.88],
//     ["left-[62%] top-[65%] h-3 w-4 -rotate-12", 0.96],
//     ["left-[74%] top-[72%] h-4 w-4 rotate-45", 1.04],
//   ];

//   return (
//     <div className="pointer-events-none absolute inset-0">
//       {particles.map(([position, delay], index) => (
//         <motion.span
//           key={position}
//           initial={{
//             opacity: 0,
//             scale: 0.4,
//           }}
//           whileInView={{
//             opacity: 1,
//             scale: 1,
//           }}
//           animate={{
//             y: [0, -6, 0],
//             x: [0, index % 2 === 0 ? 4 : -4, 0],
//           }}
//           viewport={{ once: true }}
//           transition={{
//             opacity: {
//               duration: 0.45,
//               delay,
//             },
//             scale: {
//               duration: 0.45,
//               delay,
//             },
//             y: {
//               duration: 3.5 + index * 0.15,
//               repeat: Infinity,
//               ease: "easeInOut",
//             },
//             x: {
//               duration: 4.3 + index * 0.1,
//               repeat: Infinity,
//               ease: "easeInOut",
//             },
//           }}
//           className={`
//             absolute
//             rounded-[2px]
//             ${
//               index % 3 === 0
//                 ? "bg-[#C8F000]"
//                 : index % 3 === 1
//                   ? "bg-white/40"
//                   : "bg-[#7E9C43]"
//             }
//             ${position}
//           `}
//         />
//       ))}
//     </div>
//   );
// }

// /* =========================================================
//    RESIDUE MASS
// ========================================================= */

// function ResidueMass() {
//   return (
//     <div
//       className="
//         pointer-events-none
//         absolute
//         bottom-[14%]
//         left-[18%]
//         right-[3%]
//         top-[17%]
//       ">
//       {/* glow */}

//       <div
//         className="
//           absolute
//           left-[54%]
//           top-[50%]
//           h-[320px]
//           w-[360px]
//           -translate-x-1/2
//           -translate-y-1/2
//           rounded-full
//           bg-[#B8F23A]/[0.065]
//           blur-[90px]
//         "
//       />

//       {/* debris cloud */}

//       <ResidueParticles />

//       {/* irregular abstract mass */}

//       <motion.div
//         initial={{
//           opacity: 0,
//           scale: 0.82,
//         }}
//         whileInView={{
//           opacity: 1,
//           scale: 1,
//         }}
//         viewport={{ once: true }}
//         transition={{
//           duration: 0.9,
//           ease: [0.22, 1, 0.36, 1],
//         }}
//         className="
//           absolute
//           left-[38%]
//           top-[47%]
//           h-[210px]
//           w-[270px]
//           -translate-x-1/2
//           -translate-y-1/2
//         ">
//         {[
//           "left-[8%] top-[20%] h-12 w-16 rotate-[14deg]",
//           "left-[26%] top-[7%] h-16 w-10 -rotate-[18deg]",
//           "left-[46%] top-[19%] h-10 w-20 rotate-[7deg]",
//           "left-[65%] top-[9%] h-14 w-12 -rotate-[9deg]",
//           "left-[17%] top-[51%] h-11 w-11 rounded-full",
//           "left-[37%] top-[52%] h-16 w-13 rotate-[11deg]",
//           "left-[59%] top-[48%] h-12 w-17 -rotate-[8deg]",
//           "left-[72%] top-[62%] h-9 w-13 rotate-[14deg]",
//         ].map((item, index) => (
//           <motion.span
//             key={item}
//             animate={{
//               y: [0, -4, 0],
//               rotate: index % 2 === 0 ? [0, 3, 0] : [0, -3, 0],
//             }}
//             transition={{
//               duration: 4 + index * 0.25,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//             className={`
//               absolute
//               border
//               border-white/[0.08]
//               bg-white/[0.05]
//               shadow-[0_10px_30px_rgba(0,0,0,.12)]
//               ${item}
//             `}
//           />
//         ))}
//       </motion.div>

//       {/* converging lines */}

//       <svg
//         viewBox="0 0 700 360"
//         preserveAspectRatio="none"
//         className="
//           absolute
//           inset-0
//           h-full
//           w-full
//           overflow-visible
//         ">
//         {[
//           "M 205 70 C 315 95, 395 150, 660 180",
//           "M 150 135 C 290 145, 390 165, 660 180",
//           "M 125 205 C 260 195, 390 185, 660 180",
//           "M 180 285 C 330 250, 430 205, 660 180",
//           "M 285 330 C 390 280, 470 220, 660 180",
//         ].map((path, index) => (
//           <motion.path
//             key={path}
//             d={path}
//             fill="none"
//             stroke={index === 2 ? "#C8F000" : "rgba(200,240,0,.38)"}
//             strokeWidth={index === 2 ? 2 : 1}
//             initial={{ pathLength: 0 }}
//             whileInView={{ pathLength: 1 }}
//             viewport={{ once: true }}
//             transition={{
//               duration: 1.2,
//               delay: 0.2 + index * 0.09,
//             }}
//           />
//         ))}
//       </svg>
//     </div>
//   );
// }

// /* =========================================================
//    TRANSFORMATION CORE
// ========================================================= */

// function TransformationCore() {
//   return (
//     <div
//       className="
//         relative
//         flex
//         h-[315px]
//         w-[315px]
//         items-center
//         justify-center
//       ">
//       {/* glow */}

//       <motion.div
//         animate={{
//           scale: [1, 1.08, 1],
//           opacity: [0.12, 0.25, 0.12],
//         }}
//         transition={{
//           duration: 3,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//         className="
//           absolute
//           inset-[50px]
//           rounded-full
//           bg-[#C8F000]
//           blur-[28px]
//         "
//       />

//       {/* rings */}

//       <motion.span
//         animate={{ rotate: 360 }}
//         transition={{
//           duration: 28,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//         className="
//           absolute
//           inset-0
//           rounded-full
//           border
//           border-dashed
//           border-[#A6CD38]/20
//         "
//       />

//       <motion.span
//         animate={{ rotate: -360 }}
//         transition={{
//           duration: 22,
//           repeat: Infinity,
//           ease: "linear",
//         }}
//         className="
//           absolute
//           inset-[26px]
//           rounded-full
//           border
//           border-[#A7CA45]/28
//         "
//       />

//       <span
//         className="
//           absolute
//           inset-[51px]
//           rounded-full
//           border
//           border-[#A6D232]/35
//         "
//       />

//       <span
//         className="
//           absolute
//           inset-[70px]
//           rounded-full
//           border
//           border-[#B1DE32]/35
//         "
//       />

//       {/* central orb */}

//       <motion.div
//         initial={{
//           opacity: 0,
//           scale: 0.7,
//         }}
//         whileInView={{
//           opacity: 1,
//           scale: 1,
//         }}
//         viewport={{ once: true }}
//         transition={{
//           duration: 0.75,
//           delay: 0.15,
//           ease: [0.22, 1, 0.36, 1],
//         }}
//         className="
//           relative
//           z-10
//           flex
//           h-[168px]
//           w-[168px]
//           flex-col
//           items-center
//           justify-center
//           rounded-full
//           bg-[#C8F000]
//           text-[#0C3328]
//           shadow-[0_18px_55px_rgba(139,183,18,.23)]
//         ">
//         <Sparkles size={25} strokeWidth={1.45} />

//         <p
//           className="
//             mt-4
//             text-[7px]
//             font-bold
//             uppercase
//             tracking-[0.13em]
//           ">
//           Transformación
//         </p>

//         <p
//           className="
//             mt-1.5
//             text-[7px]
//             font-medium
//             text-[#0C3328]/55
//           ">
//           Residuo → Recurso
//         </p>
//       </motion.div>
//     </div>
//   );
// }

// /* =========================================================
//    OUTPUT BRANCHES
// ========================================================= */

// function OutputBranches() {
//   return (
//     <div
//       className="
//         relative
//         h-[360px]
//         w-full
//       ">
//       {/* curved routes */}

//       <svg
//         viewBox="0 0 760 360"
//         preserveAspectRatio="none"
//         className="
//           pointer-events-none
//           absolute
//           inset-0
//           h-full
//           w-full
//           overflow-visible
//         ">
//         <motion.path
//           d="M 0 180 C 135 180, 145 80, 335 80"
//           fill="none"
//           stroke="#80AF12"
//           strokeWidth="2.5"
//           strokeLinecap="round"
//           initial={{ pathLength: 0 }}
//           whileInView={{ pathLength: 1 }}
//           viewport={{ once: true }}
//           transition={{
//             duration: 1,
//             delay: 0.35,
//           }}
//         />

//         <motion.path
//           d="M 0 180 C 150 180, 175 180, 335 180"
//           fill="none"
//           stroke="#A9D637"
//           strokeWidth="2"
//           strokeLinecap="round"
//           initial={{ pathLength: 0 }}
//           whileInView={{ pathLength: 1 }}
//           viewport={{ once: true }}
//           transition={{
//             duration: 1,
//             delay: 0.5,
//           }}
//         />

//         <motion.path
//           d="M 0 180 C 140 180, 145 280, 335 280"
//           fill="none"
//           stroke="#C8F000"
//           strokeWidth="2.3"
//           strokeLinecap="round"
//           initial={{ pathLength: 0 }}
//           whileInView={{ pathLength: 1 }}
//           viewport={{ once: true }}
//           transition={{
//             duration: 1,
//             delay: 0.65,
//           }}
//         />

//         <circle cx="335" cy="80" r="5" fill="#8CB90D" />
//         <circle cx="335" cy="180" r="5" fill="#B4DB42" />
//         <circle cx="335" cy="280" r="5" fill="#C8F000" />
//       </svg>

//       <div
//         className="
//           absolute
//           right-[1%]
//           top-1/2
//           flex
//           w-[55%]
//           -translate-y-1/2
//           flex-col
//           gap-6
//         ">
//         {outputs.map((output, index) => {
//           const Icon = output.icon;

//           return (
//             <motion.div
//               key={output.title}
//               initial={{
//                 opacity: 0,
//                 x: 22,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 x: 0,
//               }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 0.5,
//                 delay: 0.35 + index * 0.12,
//               }}
//               className="
//                 flex
//                 items-center
//                 gap-6
//               ">
//               <span
//                 className="
//                   flex
//                   h-[76px]
//                   w-[76px]
//                   shrink-0
//                   items-center
//                   justify-center
//                   rounded-full
//                   border
//                   border-[#143E33]/[0.07]
//                   bg-white
//                   text-[#80B000]
//                   shadow-[0_15px_36px_rgba(20,62,51,.09)]
//                 ">
//                 <Icon size={27} strokeWidth={1.5} />
//               </span>

//               <div>
//                 <p
//                   className="
//                     text-[11px]
//                     font-bold
//                     uppercase
//                     tracking-[0.13em]
//                     text-[#143E33]
//                   ">
//                   {output.title}
//                 </p>

//                 <p
//                   className="
//                     mt-1.5
//                     text-[8px]
//                     font-bold
//                     uppercase
//                     tracking-[0.12em]
//                     text-[#84B500]
//                   ">
//                   {output.subtitle}
//                 </p>
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// /* =========================================================
//    CAPABILITIES
// ========================================================= */

// function Capabilities() {
//   return (
//     <div
//       className="
//         grid
//         grid-cols-4
//         items-end
//         gap-5
//       ">
//       {capabilities.map((capability, index) => {
//         const Icon = capability.icon;

//         return (
//           <motion.div
//             key={capability.title}
//             initial={{
//               opacity: 0,
//               y: 12,
//             }}
//             whileInView={{
//               opacity: 1,
//               y: 0,
//             }}
//             viewport={{ once: true }}
//             transition={{
//               duration: 0.45,
//               delay: 0.25 + index * 0.08,
//             }}
//             className="
//               relative
//               text-center
//             ">
//             <span
//               className="
//                 mx-auto
//                 flex
//                 h-11
//                 w-11
//                 items-center
//                 justify-center
//                 text-[#123A30]/75
//               ">
//               <Icon size={27} strokeWidth={1.35} />
//             </span>

//             <p
//               className="
//                 mt-2
//                 whitespace-nowrap
//                 text-[6px]
//                 font-bold
//                 uppercase
//                 tracking-[0.1em]
//                 text-[#123A30]/70
//               ">
//               {capability.title}
//             </p>

//             <span
//               className="
//                 mx-auto
//                 mt-3
//                 block
//                 h-px
//                 w-7
//                 bg-[#9DC91F]
//               "
//             />
//           </motion.div>
//         );
//       })}
//     </div>
//   );
// }

// /* =========================================================
//    MAIN
// ========================================================= */

// function ResiduosDeliverySection() {
//   return (
//     <section
//       id="residuos-delivery"
//       className="
//         relative
//         overflow-hidden
//         bg-[#F3F6EE]
//         py-14
//         text-[#143E33]

//         lg:py-18
//       ">
//       {/* subtle page glow */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           -right-[220px]
//           -top-[160px]
//           h-[520px]
//           w-[520px]
//           rounded-full
//           bg-[#C8F000]/10
//           blur-[130px]
//         "
//       />

//       <div
//         className="
//           relative
//           z-10
//           mx-auto
//           max-w-[1800px]
//           px-5

//           sm:px-8
//           lg:px-12
//           xl:px-14
//         ">
//         {/* ===================================================
//             HEADER
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
//             amount: 0.25,
//           }}
//           transition={{
//             duration: 0.7,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="
//             mb-8
//             grid
//             gap-6

//             lg:grid-cols-[1fr_410px]
//             lg:items-end
//           ">
//           <div>
//             <p
//               className="
//                 text-[8px]
//                 font-bold
//                 uppercase
//                 tracking-[0.2em]
//                 text-[#7DA700]
//               ">
//               Transformación
//             </p>

//             <h2
//               className="
//                 mt-3
//                 max-w-[920px]
//                 text-[clamp(2.7rem,4.2vw,5rem)]
//                 font-normal
//                 leading-[0.92]
//                 tracking-[-0.06em]
//               ">
//               El residuo cambia cuando cambia
//               <span className="block text-[#83B500]">
//                 lo que hacemos con él.
//               </span>
//             </h2>
//           </div>

//           <p
//             className="
//               max-w-[410px]
//               text-[10px]
//               leading-6
//               text-[#143E33]/44
//             ">
//             Selección, tratamiento y valorización permiten recuperar materiales
//             y aprovechar distintas corrientes de residuos.
//           </p>
//         </motion.div>

//         {/* ===================================================
//             MASTER CANVAS
//         =================================================== */}

//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 26,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//             amount: 0.06,
//           }}
//           transition={{
//             duration: 0.85,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="
//             relative
//             overflow-hidden
//             rounded-[28px]
//             border
//             border-[#143E33]/[0.07]
//             bg-white
//             shadow-[0_28px_80px_rgba(20,62,51,.09)]
//           ">
//           {/* =================================================
//               DESKTOP
//           ================================================= */}

//           <div
//             className="
//               relative
//               hidden
//               min-h-[720px]

//               lg:block
//             ">
//             {/* ===============================================
//                 LEFT DARK ZONE
//             =============================================== */}

//             <div
//               className="
//                 absolute
//                 bottom-[76px]
//                 left-0
//                 top-0
//                 w-[47%]
//                 overflow-hidden
//                 bg-[#06372E]
//                 text-white
//                 [clip-path:polygon(0_0,100%_0,88%_100%,0_100%)]
//               ">
//               {/* dark texture */}

//               <div
//                 className="
//                   pointer-events-none
//                   absolute
//                   inset-0
//                   opacity-[0.11]
//                   [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)]
//                   [background-size:46px_46px]
//                 "
//               />

//               <div
//                 className="
//                   pointer-events-none
//                   absolute
//                   -right-[70px]
//                   top-[70px]
//                   h-[500px]
//                   w-[500px]
//                   rounded-full
//                   bg-[#C8F000]/[0.04]
//                   blur-[100px]
//                 "
//               />

//               {/* RESIDUO WORD */}

//               <span
//                 className="
//                   pointer-events-none
//                   absolute
//                   left-[3%]
//                   top-[105px]
//                   select-none
//                   text-[clamp(9rem,12vw,13rem)]
//                   font-semibold
//                   leading-[0.72]
//                   tracking-[-0.085em]
//                   text-white/[0.23]
//                 ">
//                 RESIDUO
//               </span>

//               {/* copy */}

//               <div
//                 className="
//                   absolute
//                   left-[5%]
//                   top-[70px]
//                   z-10
//                 ">
//                 <div className="flex items-center gap-4">
//                   <span className="h-px w-8 bg-[#C8F000]" />

//                   <p
//                     className="
//                       text-[7px]
//                       font-bold
//                       uppercase
//                       tracking-[0.17em]
//                       text-[#C8F000]
//                     ">
//                     Punto de partida
//                   </p>
//                 </div>
//               </div>

//               <div
//                 className="
//                   absolute
//                   bottom-[156px]
//                   left-[5%]
//                   z-20
//                   max-w-[290px]
//                 ">
//                 <h3
//                   className="
//                     text-[32px]
//                     font-medium
//                     leading-[0.95]
//                     tracking-[-0.045em]
//                   ">
//                   Materia
//                   <span className="block text-white/55">por gestionar.</span>
//                 </h3>

//                 <p
//                   className="
//                     mt-4
//                     max-w-[260px]
//                     text-[9px]
//                     leading-5
//                     text-white/48
//                   ">
//                   Cada residuo tiene características únicas que requieren el
//                   proceso adecuado.
//                 </p>
//               </div>

//               {/* matter */}

//               <ResidueMass />

//               {/* process label */}

//               <div
//                 className="
//                   absolute
//                   bottom-[45px]
//                   left-[5%]
//                   z-20
//                   flex
//                   items-center
//                   gap-4
//                 ">
//                 <span
//                   className="
//                     flex
//                     h-12
//                     w-12
//                     items-center
//                     justify-center
//                     rounded-full
//                     border
//                     border-white/10
//                     text-[#C8F000]
//                   ">
//                   <Recycle size={18} strokeWidth={1.5} />
//                 </span>

//                 <span className="h-px w-8 bg-[#C8F000]" />

//                 <div>
//                   <p
//                     className="
//                       text-[6px]
//                       font-bold
//                       uppercase
//                       tracking-[0.14em]
//                       text-[#C8F000]
//                     ">
//                     El proceso
//                   </p>

//                   <p
//                     className="
//                       mt-1
//                       text-[6px]
//                       font-bold
//                       uppercase
//                       tracking-[0.14em]
//                       text-white/42
//                     ">
//                     Comienza aquí
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* ===============================================
//                 WHITE / VALUE WORLD
//             =============================================== */}

//             <div
//               className="
//                 absolute
//                 bottom-[76px]
//                 right-0
//                 top-0
//                 w-[58%]
//                 overflow-hidden
//                 bg-white
//               ">
//               {/* tiny dots */}

//               <div
//                 className="
//                   pointer-events-none
//                   absolute
//                   bottom-[100px]
//                   right-[4%]
//                   h-[360px]
//                   w-[420px]
//                   opacity-[0.22]
//                   [background-image:radial-gradient(rgba(130,176,12,.23)_1px,transparent_1px)]
//                   [background-size:11px_11px]
//                 "
//               />

//               {/* huge VALUE */}

//               <span
//                 className="
//                   pointer-events-none
//                   absolute
//                   -bottom-[28px]
//                   right-[-25px]
//                   select-none
//                   text-[clamp(9rem,13vw,14rem)]
//                   font-semibold
//                   leading-[0.72]
//                   tracking-[-0.085em]
//                   text-[#143E33]/[0.05]
//                 ">
//                 VALOR
//               </span>

//               {/* header */}

//               <div
//                 className="
//                   absolute
//                   right-[7%]
//                   top-[70px]
//                   z-10
//                   w-[47%]
//                 ">
//                 <div className="flex items-center gap-4">
//                   <p
//                     className="
//                       text-[7px]
//                       font-bold
//                       uppercase
//                       tracking-[0.17em]
//                       text-[#80AA00]
//                     ">
//                     Aprovechamiento
//                   </p>

//                   <span className="h-px w-8 bg-[#9FCC21]" />
//                 </div>

//                 <h3
//                   className="
//                     mt-4
//                     text-[clamp(2.3rem,3vw,3.55rem)]
//                     font-medium
//                     leading-[0.93]
//                     tracking-[-0.05em]
//                   ">
//                   El residuo
//                   <span className="block text-[#83B500]">encuentra valor.</span>
//                 </h3>

//                 <p
//                   className="
//                     mt-4
//                     max-w-[390px]
//                     text-[9px]
//                     leading-5
//                     text-[#143E33]/46
//                   ">
//                   Diferentes tecnologías permiten recuperar materiales, producir
//                   biogás, generar energía o transformar residuos biodegradables.
//                 </p>
//               </div>

//               {/* output network */}

//               <div
//                 className="
//                   absolute
//                   bottom-[145px]
//                   right-[3%]
//                   top-[235px]
//                   w-[86%]
//                 ">
//                 <OutputBranches />
//               </div>
//             </div>

//             {/* ===============================================
//                 CENTRAL LIGHT WEDGE
//             =============================================== */}

//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 bottom-[76px]
//                 left-[39%]
//                 top-0
//                 z-10
//                 w-[22%]
//                 bg-[linear-gradient(110deg,rgba(227,235,219,.92)_0%,rgba(248,250,245,.98)_55%,rgba(255,255,255,.9)_100%)]
//                 [clip-path:polygon(20%_0,100%_0,76%_100%,0_100%)]
//               "
//             />

//             {/* ===============================================
//                 CENTRAL HUB
//             =============================================== */}

//             <div
//               className="
//                 absolute
//                 left-[50.2%]
//                 top-[44%]
//                 z-30
//                 -translate-x-1/2
//                 -translate-y-1/2
//               ">
//               <div className="mb-2 text-center">
//                 <p
//                   className="
//                     text-[6px]
//                     font-bold
//                     uppercase
//                     tracking-[0.16em]
//                     text-[#173C32]/70
//                   ">
//                   El punto de cambio
//                 </p>

//                 <span
//                   className="
//                     mx-auto
//                     mt-3
//                     block
//                     h-7
//                     w-px
//                     bg-[#9BC51F]
//                   "
//                 />
//               </div>

//               <TransformationCore />
//             </div>

//             {/* ===============================================
//                 PROJECT CAPABILITIES
//             =============================================== */}

//             <div
//               className="
//                 absolute
//                 bottom-[103px]
//                 left-[34%]
//                 z-40
//                 w-[38%]
//               ">
//               <Capabilities />

//               <p
//                 className="
//                   mt-4
//                   text-center
//                   text-[6px]
//                   font-bold
//                   uppercase
//                   tracking-[0.16em]
//                   text-[#82AC00]
//                 ">
//                 Capacidad integral en todo el ciclo del proyecto
//               </p>
//             </div>

//             {/* ===============================================
//                 FOOTER
//             =============================================== */}

//             <div
//               className="
//                 absolute
//                 bottom-0
//                 left-0
//                 right-0
//                 z-50
//                 flex
//                 h-[76px]
//                 items-center
//                 justify-between
//                 bg-[#06372E]
//                 px-7
//                 text-white
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
//                     bg-[#C8F000]
//                     text-[#10372E]
//                   ">
//                   <Power size={15} strokeWidth={1.7} />
//                 </span>

//                 <div>
//                   <p
//                     className="
//                       text-[6px]
//                       font-bold
//                       uppercase
//                       tracking-[0.15em]
//                       text-[#C8F000]
//                     ">
//                     Valorización
//                   </p>

//                   <p
//                     className="
//                       mt-1
//                       text-[7px]
//                       text-white/44
//                     ">
//                     Convertir una corriente de residuos en una oportunidad de
//                     aprovechamiento.
//                   </p>
//                 </div>
//               </div>

//               <div className="flex items-center gap-4">
//                 <span
//                   className="
//                     text-[6px]
//                     font-bold
//                     uppercase
//                     tracking-[0.14em]
//                     text-white/28
//                   ">
//                   Residuo
//                 </span>

//                 <span className="h-px w-8 bg-[#C8F000]/45" />

//                 <ArrowRight
//                   size={13}
//                   strokeWidth={1.6}
//                   className="text-[#C8F000]"
//                 />

//                 <span className="h-px w-8 bg-[#C8F000]/45" />

//                 <span
//                   className="
//                     text-[6px]
//                     font-bold
//                     uppercase
//                     tracking-[0.14em]
//                     text-[#C8F000]
//                   ">
//                   Valor
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* =================================================
//               MOBILE
//           ================================================= */}

//           <div className="lg:hidden">
//             {/* LEFT */}

//             <div
//               className="
//                 relative
//                 overflow-hidden
//                 bg-[#06372E]
//                 px-6
//                 py-8
//                 text-white
//               ">
//               <span
//                 className="
//                   pointer-events-none
//                   absolute
//                   -left-3
//                   top-[70px]
//                   text-[95px]
//                   font-semibold
//                   leading-[0.75]
//                   tracking-[-0.08em]
//                   text-white/[0.13]
//                 ">
//                 RESIDUO
//               </span>

//               <div className="relative z-10">
//                 <p
//                   className="
//                     text-[6px]
//                     font-bold
//                     uppercase
//                     tracking-[0.16em]
//                     text-[#C8F000]
//                   ">
//                   Punto de partida
//                 </p>

//                 <h3
//                   className="
//                     mt-28
//                     text-[30px]
//                     font-medium
//                     leading-[0.95]
//                     tracking-[-0.045em]
//                   ">
//                   Materia
//                   <span className="block text-white/50">por gestionar.</span>
//                 </h3>

//                 <p
//                   className="
//                     mt-4
//                     max-w-[300px]
//                     text-[9px]
//                     leading-5
//                     text-white/45
//                   ">
//                   Cada residuo tiene características únicas que requieren el
//                   proceso adecuado.
//                 </p>

//                 <div
//                   className="
//                     relative
//                     mt-3
//                     h-[230px]
//                   ">
//                   <ResidueMass />
//                 </div>
//               </div>
//             </div>

//             {/* CORE */}

//             <div
//               className="
//                 bg-[#F3F6ED]
//                 px-5
//                 py-8
//               ">
//               <p
//                 className="
//                   text-center
//                   text-[6px]
//                   font-bold
//                   uppercase
//                   tracking-[0.16em]
//                   text-[#173C32]/60
//                 ">
//                 El punto de cambio
//               </p>

//               <div
//                 className="
//                   mx-auto
//                   mt-3
//                   flex
//                   max-w-[315px]
//                   justify-center
//                 ">
//                 <TransformationCore />
//               </div>

//               <div
//                 className="
//                   mt-2
//                   grid
//                   grid-cols-2
//                   gap-3
//                 ">
//                 {capabilities.map((capability) => {
//                   const Icon = capability.icon;

//                   return (
//                     <div
//                       key={capability.title}
//                       className="
//                         flex
//                         items-center
//                         gap-3
//                         rounded-[12px]
//                         border
//                         border-[#143E33]/[0.07]
//                         bg-white
//                         p-3
//                       ">
//                       <Icon
//                         size={16}
//                         strokeWidth={1.45}
//                         className="text-[#79A600]"
//                       />

//                       <span
//                         className="
//                           text-[6px]
//                           font-bold
//                           uppercase
//                           tracking-[0.1em]
//                           text-[#143E33]/48
//                         ">
//                         {capability.title}
//                       </span>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>

//             {/* VALUE */}

//             <div
//               className="
//                 relative
//                 overflow-hidden
//                 bg-white
//                 px-6
//                 py-8
//               ">
//               <span
//                 className="
//                   pointer-events-none
//                   absolute
//                   -bottom-5
//                   right-0
//                   text-[100px]
//                   font-semibold
//                   leading-[0.75]
//                   tracking-[-0.08em]
//                   text-[#143E33]/[0.035]
//                 ">
//                 VALOR
//               </span>

//               <div className="relative z-10">
//                 <p
//                   className="
//                     text-[6px]
//                     font-bold
//                     uppercase
//                     tracking-[0.16em]
//                     text-[#80AA00]
//                   ">
//                   Aprovechamiento
//                 </p>

//                 <h3
//                   className="
//                     mt-3
//                     text-[30px]
//                     font-medium
//                     leading-[0.94]
//                     tracking-[-0.045em]
//                   ">
//                   El residuo
//                   <span className="block text-[#83B500]">encuentra valor.</span>
//                 </h3>

//                 <p
//                   className="
//                     mt-4
//                     max-w-[340px]
//                     text-[9px]
//                     leading-5
//                     text-[#143E33]/42
//                   ">
//                   Diferentes tecnologías permiten recuperar materiales, producir
//                   biogás, generar energía o transformar residuos biodegradables.
//                 </p>

//                 <div className="mt-7 space-y-4">
//                   {outputs.map((output) => {
//                     const Icon = output.icon;

//                     return (
//                       <div
//                         key={output.title}
//                         className="
//                           flex
//                           items-center
//                           gap-4
//                         ">
//                         <span
//                           className="
//                             flex
//                             h-[58px]
//                             w-[58px]
//                             shrink-0
//                             items-center
//                             justify-center
//                             rounded-full
//                             border
//                             border-[#143E33]/[0.07]
//                             bg-white
//                             text-[#83B500]
//                             shadow-[0_10px_25px_rgba(20,62,51,.07)]
//                           ">
//                           <Icon size={21} strokeWidth={1.5} />
//                         </span>

//                         <div>
//                           <p
//                             className="
//                               text-[8px]
//                               font-bold
//                               uppercase
//                               tracking-[0.12em]
//                             ">
//                             {output.title}
//                           </p>

//                           <p
//                             className="
//                               mt-1
//                               text-[6px]
//                               font-bold
//                               uppercase
//                               tracking-[0.11em]
//                               text-[#83B500]
//                             ">
//                             {output.subtitle}
//                           </p>
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//             </div>

//             {/* MOBILE FOOTER */}

//             <div
//               className="
//                 flex
//                 items-center
//                 justify-between
//                 gap-5
//                 bg-[#06372E]
//                 px-6
//                 py-5
//                 text-white
//               ">
//               <div>
//                 <p
//                   className="
//                     text-[6px]
//                     font-bold
//                     uppercase
//                     tracking-[0.14em]
//                     text-[#C8F000]
//                   ">
//                   Valorización
//                 </p>

//                 <p
//                   className="
//                     mt-1
//                     text-[7px]
//                     text-white/38
//                   ">
//                   Residuo → aprovechamiento
//                 </p>
//               </div>

//               <div className="flex items-center gap-3">
//                 <span
//                   className="
//                     text-[6px]
//                     font-bold
//                     uppercase
//                     tracking-[0.13em]
//                     text-white/30
//                   ">
//                   Residuo
//                 </span>

//                 <ArrowRight
//                   size={13}
//                   strokeWidth={1.6}
//                   className="text-[#C8F000]"
//                 />

//                 <span
//                   className="
//                     text-[6px]
//                     font-bold
//                     uppercase
//                     tracking-[0.13em]
//                     text-[#C8F000]
//                   ">
//                   Valor
//                 </span>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default ResiduosDeliverySection;

import { motion } from "motion/react";
import {
  ArrowRight,
  Boxes,
  BrainCircuit,
  Building2,
  CirclePlay,
  Leaf,
  Power,
  Recycle,
  Settings,
  Sparkles,
  Zap,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const outputs = [
  {
    icon: Boxes,
    title: "Materiales",
    subtitle: "Valorizables",
  },
  {
    icon: Zap,
    title: "Biogás",
    subtitle: "Y energía",
  },
  {
    icon: Leaf,
    title: "Composta",
    subtitle: "Biofertilizante",
  },
];

const capabilities = [
  {
    icon: BrainCircuit,
    title: "Conceptualización y diseño",
  },
  {
    icon: Boxes,
    title: "Tecnología y equipos",
  },
  {
    icon: Building2,
    title: "Construcción y puesta en marcha",
  },
  {
    icon: Settings,
    title: "Operación y mantenimiento",
  },
];

/* =========================================================
   RESIDUE PARTICLES
========================================================= */

function ResidueParticles() {
  const particles = [
    ["left-[46%] top-[12%] h-3 w-3 rotate-12", 0],
    ["left-[57%] top-[18%] h-4 w-4 -rotate-12", 0.08],
    ["left-[67%] top-[11%] h-2.5 w-2.5 rotate-45", 0.16],
    ["left-[40%] top-[28%] h-5 w-4 -rotate-6", 0.24],
    ["left-[53%] top-[31%] h-3 w-5 rotate-12", 0.32],
    ["left-[63%] top-[26%] h-5 w-5 rotate-45", 0.4],
    ["left-[72%] top-[35%] h-3 w-3 -rotate-12", 0.48],
    ["left-[44%] top-[44%] h-4 w-6 rotate-6", 0.56],
    ["left-[58%] top-[48%] h-5 w-4 rotate-12", 0.64],
    ["left-[70%] top-[50%] h-3 w-5 -rotate-12", 0.72],
    ["left-[38%] top-[62%] h-3 w-3 rotate-45", 0.8],
    ["left-[49%] top-[68%] h-5 w-5 rotate-12", 0.88],
    ["left-[62%] top-[65%] h-3 w-4 -rotate-12", 0.96],
    ["left-[74%] top-[72%] h-4 w-4 rotate-45", 1.04],
  ];

  return (
    <div className="pointer-events-none absolute inset-0">
      {particles.map(([position, delay], index) => (
        <motion.span
          key={position}
          initial={{
            opacity: 0,
            scale: 0.4,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          animate={{
            y: [0, -6, 0],
            x: [0, index % 2 === 0 ? 4 : -4, 0],
          }}
          viewport={{ once: true }}
          transition={{
            opacity: {
              duration: 0.45,
              delay,
            },
            scale: {
              duration: 0.45,
              delay,
            },
            y: {
              duration: 3.5 + index * 0.15,
              repeat: Infinity,
              ease: "easeInOut",
            },
            x: {
              duration: 4.3 + index * 0.1,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className={`
            absolute
            rounded-[2px]
            ${
              index % 3 === 0
                ? "bg-[#C8F000]"
                : index % 3 === 1
                  ? "bg-white/40"
                  : "bg-[#7E9C43]"
            }
            ${position}
          `}
        />
      ))}
    </div>
  );
}

/* =========================================================
   RESIDUE MASS
========================================================= */

function ResidueMass() {
  return (
    <div
      className="
        pointer-events-none
        absolute
        bottom-[14%]
        left-[18%]
        right-[3%]
        top-[17%]
      ">
      {/* glow */}

      <div
        className="
          absolute
          left-[54%]
          top-[50%]
          h-[320px]
          w-[360px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#B8F23A]/[0.065]
          blur-[90px]
        "
      />

      {/* debris cloud */}

      <ResidueParticles />

      {/* irregular abstract mass */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.82,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          left-[38%]
          top-[47%]
          h-[210px]
          w-[270px]
          -translate-x-1/2
          -translate-y-1/2
        ">
        {[
          "left-[8%] top-[20%] h-12 w-16 rotate-[14deg]",
          "left-[26%] top-[7%] h-16 w-10 -rotate-[18deg]",
          "left-[46%] top-[19%] h-10 w-20 rotate-[7deg]",
          "left-[65%] top-[9%] h-14 w-12 -rotate-[9deg]",
          "left-[17%] top-[51%] h-11 w-11 rounded-full",
          "left-[37%] top-[52%] h-16 w-13 rotate-[11deg]",
          "left-[59%] top-[48%] h-12 w-17 -rotate-[8deg]",
          "left-[72%] top-[62%] h-9 w-13 rotate-[14deg]",
        ].map((item, index) => (
          <motion.span
            key={item}
            animate={{
              y: [0, -4, 0],
              rotate: index % 2 === 0 ? [0, 3, 0] : [0, -3, 0],
            }}
            transition={{
              duration: 4 + index * 0.25,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`
              absolute
              border
              border-white/[0.08]
              bg-white/[0.05]
              shadow-[0_10px_30px_rgba(0,0,0,.12)]
              ${item}
            `}
          />
        ))}
      </motion.div>

      {/* converging lines */}

      <svg
        viewBox="0 0 700 360"
        preserveAspectRatio="none"
        className="
          absolute
          inset-0
          h-full
          w-full
          overflow-visible
        ">
        {[
          "M 205 70 C 315 95, 395 150, 660 180",
          "M 150 135 C 290 145, 390 165, 660 180",
          "M 125 205 C 260 195, 390 185, 660 180",
          "M 180 285 C 330 250, 430 205, 660 180",
          "M 285 330 C 390 280, 470 220, 660 180",
        ].map((path, index) => (
          <motion.path
            key={path}
            d={path}
            fill="none"
            stroke={index === 2 ? "#C8F000" : "rgba(200,240,0,.38)"}
            strokeWidth={index === 2 ? 2 : 1}
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              delay: 0.2 + index * 0.09,
            }}
          />
        ))}
      </svg>
    </div>
  );
}

/* =========================================================
   TRANSFORMATION CORE
========================================================= */

function TransformationCore() {
  return (
    <div
      className="
        relative
        flex
        h-[315px]
        w-[315px]
        items-center
        justify-center
      ">
      {/* glow */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.12, 0.25, 0.12],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          inset-[50px]
          rounded-full
          bg-[#C8F000]
          blur-[28px]
        "
      />

      {/* rings */}

      <motion.span
        animate={{ rotate: 360 }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          inset-0
          rounded-full
          border
          border-dashed
          border-[#A6CD38]/20
        "
      />

      <motion.span
        animate={{ rotate: -360 }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          inset-[26px]
          rounded-full
          border
          border-[#A7CA45]/28
        "
      />

      <span
        className="
          absolute
          inset-[51px]
          rounded-full
          border
          border-[#A6D232]/35
        "
      />

      <span
        className="
          absolute
          inset-[70px]
          rounded-full
          border
          border-[#B1DE32]/35
        "
      />

      {/* central orb */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.7,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        viewport={{ once: true }}
        transition={{
          duration: 0.75,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          z-10
          flex
          h-[168px]
          w-[168px]
          flex-col
          items-center
          justify-center
          rounded-full
          bg-[#C8F000]
          text-[#0C3328]
          shadow-[0_18px_55px_rgba(139,183,18,.23)]
        ">
        <Sparkles size={25} strokeWidth={1.45} />

        <p
          className="
            mt-4
            text-[11px]
            font-bold
            uppercase
            tracking-[0.13em]
          ">
          Transformación
        </p>

        <p
          className="
            mt-1.5
            text-[11px]
            font-medium
            text-[#0C3328]/55
          ">
          Residuo → Recurso
        </p>
      </motion.div>
    </div>
  );
}

/* =========================================================
   OUTPUT BRANCHES
========================================================= */

function OutputBranches() {
  return (
    <div
      className="
        relative
        h-[360px]
        w-full
      ">
      {/* curved routes */}

      <svg
        viewBox="0 0 760 360"
        preserveAspectRatio="none"
        className="
          pointer-events-none
          absolute
          inset-0
          h-full
          w-full
          overflow-visible
        ">
        <motion.path
          d="M 0 180 C 135 180, 145 80, 335 80"
          fill="none"
          stroke="#80AF12"
          strokeWidth="2.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.35,
          }}
        />

        <motion.path
          d="M 0 180 C 150 180, 175 180, 335 180"
          fill="none"
          stroke="#A9D637"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
        />

        <motion.path
          d="M 0 180 C 140 180, 145 280, 335 280"
          fill="none"
          stroke="#C8F000"
          strokeWidth="2.3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.65,
          }}
        />

        <circle cx="335" cy="80" r="5" fill="#8CB90D" />
        <circle cx="335" cy="180" r="5" fill="#B4DB42" />
        <circle cx="335" cy="280" r="5" fill="#C8F000" />
      </svg>

      <div
        className="
          absolute
          right-[1%]
          top-1/2
          flex
          w-[55%]
          -translate-y-1/2
          flex-col
          gap-6
        ">
        {outputs.map((output, index) => {
          const Icon = output.icon;

          return (
            <motion.div
              key={output.title}
              initial={{
                opacity: 0,
                x: 22,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: 0.35 + index * 0.12,
              }}
              className="
                flex
                items-center
                gap-6
              ">
              <span
                className="
                  flex
                  h-[76px]
                  w-[76px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#143E33]/[0.07]
                  bg-white
                  text-[#80B000]
                  shadow-[0_15px_36px_rgba(20,62,51,.09)]
                ">
                <Icon size={27} strokeWidth={1.5} />
              </span>

              <div>
                <p
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.13em]
                    text-[#143E33]
                  ">
                  {output.title}
                </p>

                <p
                  className="
                    mt-1.5
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-[#84B500]
                  ">
                  {output.subtitle}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

/* =========================================================
   CAPABILITIES
========================================================= */

function Capabilities() {
  return (
    <div
      className="
        grid
        grid-cols-4
        items-end
        gap-5
      ">
      {capabilities.map((capability, index) => {
        const Icon = capability.icon;

        return (
          <motion.div
            key={capability.title}
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
              duration: 0.45,
              delay: 0.25 + index * 0.08,
            }}
            className="
              relative
              text-center
            ">
            <span
              className="
                mx-auto
                flex
                h-11
                w-11
                items-center
                justify-center
                text-[#123A30]/75
              ">
              <Icon size={27} strokeWidth={1.35} />
            </span>

            <p
              className="
                mt-2
                whitespace-nowrap
                text-[11px]
                font-bold
                uppercase
                tracking-[0.1em]
                text-[#123A30]/70
              ">
              {capability.title}
            </p>

            <span
              className="
                mx-auto
                mt-3
                block
                h-px
                w-7
                bg-[#9DC91F]
              "
            />
          </motion.div>
        );
      })}
    </div>
  );
}

/* =========================================================
   MAIN
========================================================= */

function ResiduosDeliverySection() {
  return (
    <section
      id="residuos-delivery"
      className="
        relative
        overflow-hidden
        bg-[#F3F6EE]
        py-14
        text-[#143E33]

        lg:py-18
      ">
      {/* subtle page glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[220px]
          -top-[160px]
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#C8F000]/10
          blur-[130px]
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1800px]
          px-5

          sm:px-8
          lg:px-12
          xl:px-14
        ">
        {/* ===================================================
            HEADER
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
            amount: 0.25,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mb-8
            grid
            gap-6

            lg:grid-cols-[1fr_410px]
            lg:items-end
          ">
          <div>
            <p
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#7DA700]
              ">
              Transformación
            </p>

            <h2
              className="
                mt-3
                max-w-[920px]
                text-[clamp(2.7rem,4.2vw,5rem)]
                font-normal
                leading-[0.92]
                tracking-[-0.06em]
              ">
              El residuo cambia cuando cambia
              <span className="block text-[#83B500]">
                lo que hacemos con él.
              </span>
            </h2>
          </div>

          <p
            className="
              max-w-[410px]
              text-[13px]
              leading-6
              text-[#143E33]/44
            ">
            Selección, tratamiento y valorización permiten recuperar materiales
            y aprovechar distintas corrientes de residuos.
          </p>
        </motion.div>

        {/* ===================================================
            MASTER CANVAS
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 26,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.06,
          }}
          transition={{
            duration: 0.85,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            overflow-hidden
            rounded-[28px]
            border
            border-[#143E33]/[0.07]
            bg-white
            shadow-[0_28px_80px_rgba(20,62,51,.09)]
          ">
          {/* =================================================
              DESKTOP
          ================================================= */}

          <div
            className="
              relative
              hidden
              min-h-[720px]

              lg:block
            ">
            {/* ===============================================
                LEFT DARK ZONE
            =============================================== */}

            <div
              className="
                absolute
                bottom-[76px]
                left-0
                top-0
                w-[47%]
                overflow-hidden
                bg-[#06372E]
                text-white
                [clip-path:polygon(0_0,100%_0,88%_100%,0_100%)]
              ">
              {/* dark texture */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  opacity-[0.11]
                  [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)]
                  [background-size:46px_46px]
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-[70px]
                  top-[70px]
                  h-[500px]
                  w-[500px]
                  rounded-full
                  bg-[#C8F000]/[0.04]
                  blur-[100px]
                "
              />

              {/* RESIDUO WORD */}

              <span
                className="
                  pointer-events-none
                  absolute
                  left-[3%]
                  top-[105px]
                  select-none
                  text-[clamp(9rem,12vw,13rem)]
                  font-semibold
                  leading-[0.72]
                  tracking-[-0.085em]
                  text-white/[0.23]
                ">
                RESIDUO
              </span>

              {/* copy */}

              <div
                className="
                  absolute
                  left-[5%]
                  top-[70px]
                  z-10
                ">
                <div className="flex items-center gap-4">
                  <span className="h-px w-8 bg-[#C8F000]" />

                  <p
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.17em]
                      text-[#C8F000]
                    ">
                    Punto de partida
                  </p>
                </div>
              </div>

              <div
                className="
                  absolute
                  bottom-[156px]
                  left-[5%]
                  z-20
                  max-w-[290px]
                ">
                <h3
                  className="
                    text-[32px]
                    font-medium
                    leading-[0.95]
                    tracking-[-0.045em]
                  ">
                  Materia
                  <span className="block text-white/55">por gestionar.</span>
                </h3>

                <p
                  className="
                    mt-4
                    max-w-[260px]
                    text-[12px]
                    leading-5
                    text-white/48
                  ">
                  Cada residuo tiene características únicas que requieren el
                  proceso adecuado.
                </p>
              </div>

              {/* matter */}

              <ResidueMass />

              {/* process label */}

              <div
                className="
                  absolute
                  bottom-[45px]
                  left-[5%]
                  z-20
                  flex
                  items-center
                  gap-4
                ">
                <span
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    text-[#C8F000]
                  ">
                  <Recycle size={18} strokeWidth={1.5} />
                </span>

                <span className="h-px w-8 bg-[#C8F000]" />

                <div>
                  <p
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.14em]
                      text-[#C8F000]
                    ">
                    El proceso
                  </p>

                  <p
                    className="
                      mt-1
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.14em]
                      text-white/42
                    ">
                    Comienza aquí
                  </p>
                </div>
              </div>
            </div>

            {/* ===============================================
                WHITE / VALUE WORLD
            =============================================== */}

            <div
              className="
                absolute
                bottom-[76px]
                right-0
                top-0
                w-[58%]
                overflow-hidden
                bg-white
              ">
              {/* tiny dots */}

              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-[100px]
                  right-[4%]
                  h-[360px]
                  w-[420px]
                  opacity-[0.22]
                  [background-image:radial-gradient(rgba(130,176,12,.23)_1px,transparent_1px)]
                  [background-size:11px_11px]
                "
              />

              {/* huge VALUE */}

              <span
                className="
                  pointer-events-none
                  absolute
                  -bottom-[28px]
                  right-[-25px]
                  select-none
                  text-[clamp(9rem,13vw,14rem)]
                  font-semibold
                  leading-[0.72]
                  tracking-[-0.085em]
                  text-[#143E33]/[0.05]
                ">
                VALOR
              </span>

              {/* header */}

              <div
                className="
                  absolute
                  right-[7%]
                  top-[70px]
                  z-10
                  w-[47%]
                ">
                <div className="flex items-center gap-4">
                  <p
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.17em]
                      text-[#80AA00]
                    ">
                    Aprovechamiento
                  </p>

                  <span className="h-px w-8 bg-[#9FCC21]" />
                </div>

                <h3
                  className="
                    mt-4
                    text-[clamp(2.3rem,3vw,3.55rem)]
                    font-medium
                    leading-[0.93]
                    tracking-[-0.05em]
                  ">
                  El residuo
                  <span className="block text-[#83B500]">encuentra valor.</span>
                </h3>

                <p
                  className="
                    mt-4
                    max-w-[390px]
                    text-[12px]
                    leading-5
                    text-[#143E33]/46
                  ">
                  Diferentes tecnologías permiten recuperar materiales, producir
                  biogás, generar energía o transformar residuos biodegradables.
                </p>
              </div>

              {/* output network */}

              <div
                className="
                  absolute
                  bottom-[145px]
                  right-[3%]
                  top-[235px]
                  w-[86%]
                ">
                <OutputBranches />
              </div>
            </div>

            {/* ===============================================
                CENTRAL LIGHT WEDGE
            =============================================== */}

            <div
              className="
                pointer-events-none
                absolute
                bottom-[76px]
                left-[39%]
                top-0
                z-10
                w-[22%]
                bg-[linear-gradient(110deg,rgba(227,235,219,.92)_0%,rgba(248,250,245,.98)_55%,rgba(255,255,255,.9)_100%)]
                [clip-path:polygon(20%_0,100%_0,76%_100%,0_100%)]
              "
            />

            {/* ===============================================
                CENTRAL HUB
            =============================================== */}

            <div
              className="
                absolute
                left-[50.2%]
                top-[44%]
                z-30
                -translate-x-1/2
                -translate-y-1/2
              ">
              <div className="mb-2 text-center">
                <p
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-[#173C32]/70
                  ">
                  El punto de cambio
                </p>

                <span
                  className="
                    mx-auto
                    mt-3
                    block
                    h-7
                    w-px
                    bg-[#9BC51F]
                  "
                />
              </div>

              <TransformationCore />
            </div>

            {/* ===============================================
                PROJECT CAPABILITIES
            =============================================== */}

            <div
              className="
                absolute
                bottom-[103px]
                left-[34%]
                z-40
                w-[38%]
              ">
              <Capabilities />

              <p
                className="
                  mt-4
                  text-center
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-[#82AC00]
                ">
                Capacidad integral en todo el ciclo del proyecto
              </p>
            </div>

            {/* ===============================================
                FOOTER
            =============================================== */}

            <div
              className="
                absolute
                bottom-0
                left-0
                right-0
                z-50
                flex
                h-[76px]
                items-center
                justify-between
                bg-[#06372E]
                px-7
                text-white
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
                    bg-[#C8F000]
                    text-[#10372E]
                  ">
                  <Power size={15} strokeWidth={1.7} />
                </span>

                <div>
                  <p
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-[#C8F000]
                    ">
                    Valorización
                  </p>

                  <p
                    className="
                      mt-1
                      text-[11px]
                      text-white/44
                    ">
                    Convertir una corriente de residuos en una oportunidad de
                    aprovechamiento.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <span
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.14em]
                    text-white/28
                  ">
                  Residuo
                </span>

                <span className="h-px w-8 bg-[#C8F000]/45" />

                <ArrowRight
                  size={13}
                  strokeWidth={1.6}
                  className="text-[#C8F000]"
                />

                <span className="h-px w-8 bg-[#C8F000]/45" />

                <span
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.14em]
                    text-[#C8F000]
                  ">
                  Valor
                </span>
              </div>
            </div>
          </div>

          {/* =================================================
              MOBILE
          ================================================= */}

          <div className="lg:hidden">
            {/* LEFT */}

            <div
              className="
                relative
                overflow-hidden
                bg-[#06372E]
                px-6
                py-8
                text-white
              ">
              <span
                className="
                  pointer-events-none
                  absolute
                  -left-3
                  top-[70px]
                  text-[95px]
                  font-semibold
                  leading-[0.75]
                  tracking-[-0.08em]
                  text-white/[0.13]
                ">
                RESIDUO
              </span>

              <div className="relative z-10">
                <p
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-[#C8F000]
                  ">
                  Punto de partida
                </p>

                <h3
                  className="
                    mt-28
                    text-[30px]
                    font-medium
                    leading-[0.95]
                    tracking-[-0.045em]
                  ">
                  Materia
                  <span className="block text-white/50">por gestionar.</span>
                </h3>

                <p
                  className="
                    mt-4
                    max-w-[300px]
                    text-[12px]
                    leading-5
                    text-white/45
                  ">
                  Cada residuo tiene características únicas que requieren el
                  proceso adecuado.
                </p>

                <div
                  className="
                    relative
                    mt-3
                    h-[230px]
                  ">
                  <ResidueMass />
                </div>
              </div>
            </div>

            {/* CORE */}

            <div
              className="
                bg-[#F3F6ED]
                px-5
                py-8
              ">
              <p
                className="
                  text-center
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-[#173C32]/60
                ">
                El punto de cambio
              </p>

              <div
                className="
                  mx-auto
                  mt-3
                  flex
                  max-w-[315px]
                  justify-center
                ">
                <TransformationCore />
              </div>

              <div
                className="
                  mt-2
                  grid
                  grid-cols-2
                  gap-3
                ">
                {capabilities.map((capability) => {
                  const Icon = capability.icon;

                  return (
                    <div
                      key={capability.title}
                      className="
                        flex
                        items-center
                        gap-3
                        rounded-[12px]
                        border
                        border-[#143E33]/[0.07]
                        bg-white
                        p-3
                      ">
                      <Icon
                        size={16}
                        strokeWidth={1.45}
                        className="text-[#79A600]"
                      />

                      <span
                        className="
                          text-[11px]
                          font-bold
                          uppercase
                          tracking-[0.1em]
                          text-[#143E33]/48
                        ">
                        {capability.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* VALUE */}

            <div
              className="
                relative
                overflow-hidden
                bg-white
                px-6
                py-8
              ">
              <span
                className="
                  pointer-events-none
                  absolute
                  -bottom-5
                  right-0
                  text-[100px]
                  font-semibold
                  leading-[0.75]
                  tracking-[-0.08em]
                  text-[#143E33]/[0.035]
                ">
                VALOR
              </span>

              <div className="relative z-10">
                <p
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-[#80AA00]
                  ">
                  Aprovechamiento
                </p>

                <h3
                  className="
                    mt-3
                    text-[30px]
                    font-medium
                    leading-[0.94]
                    tracking-[-0.045em]
                  ">
                  El residuo
                  <span className="block text-[#83B500]">encuentra valor.</span>
                </h3>

                <p
                  className="
                    mt-4
                    max-w-[340px]
                    text-[12px]
                    leading-5
                    text-[#143E33]/42
                  ">
                  Diferentes tecnologías permiten recuperar materiales, producir
                  biogás, generar energía o transformar residuos biodegradables.
                </p>

                <div className="mt-7 space-y-4">
                  {outputs.map((output) => {
                    const Icon = output.icon;

                    return (
                      <div
                        key={output.title}
                        className="
                          flex
                          items-center
                          gap-4
                        ">
                        <span
                          className="
                            flex
                            h-[58px]
                            w-[58px]
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-[#143E33]/[0.07]
                            bg-white
                            text-[#83B500]
                            shadow-[0_10px_25px_rgba(20,62,51,.07)]
                          ">
                          <Icon size={21} strokeWidth={1.5} />
                        </span>

                        <div>
                          <p
                            className="
                              text-[11px]
                              font-bold
                              uppercase
                              tracking-[0.12em]
                            ">
                            {output.title}
                          </p>

                          <p
                            className="
                              mt-1
                              text-[11px]
                              font-bold
                              uppercase
                              tracking-[0.11em]
                              text-[#83B500]
                            ">
                            {output.subtitle}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* MOBILE FOOTER */}

            <div
              className="
                flex
                items-center
                justify-between
                gap-5
                bg-[#06372E]
                px-6
                py-5
                text-white
              ">
              <div>
                <p
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.14em]
                    text-[#C8F000]
                  ">
                  Valorización
                </p>

                <p
                  className="
                    mt-1
                    text-[11px]
                    text-white/38
                  ">
                  Residuo → aprovechamiento
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.13em]
                    text-white/30
                  ">
                  Residuo
                </span>

                <ArrowRight
                  size={13}
                  strokeWidth={1.6}
                  className="text-[#C8F000]"
                />

                <span
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.13em]
                    text-[#C8F000]
                  ">
                  Valor
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ResiduosDeliverySection;
