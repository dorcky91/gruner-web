// import { motion } from "motion/react";
// import { ArrowRight, Boxes, Leaf, Recycle, Sparkles, Zap } from "lucide-react";

// const outcomes = [
//   {
//     icon: Boxes,
//     title: "Materiales valorizables",
//     description: "Recuperación de materiales con potencial para nuevos usos.",
//   },
//   {
//     icon: Zap,
//     title: "Biogás y energía",
//     description: "Aprovechamiento energético de determinadas corrientes.",
//   },
//   {
//     icon: Leaf,
//     title: "Composta y biofertilizante",
//     description:
//       "Transformación de residuos biodegradables en nuevos productos.",
//   },
// ];

// function ResiduosValueStatementSection() {
//   return (
//     <section
//       id="residuos-value"
//       className="
//         relative
//         overflow-hidden
//         bg-[#F4F7F1]
//         py-16
//         text-[#143E33]

//         lg:py-20
//       ">
//       {/* background */}
//       <div
//         className="
//           pointer-events-none
//           absolute
//           inset-0
//           opacity-[0.18]
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
//           bg-[#C8F000]/10
//           blur-[120px]
//         "
//       />

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
//             EDITORIAL CANVAS
//         =================================================== */}

//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.08 }}
//           transition={{
//             duration: 0.8,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="
//             relative
//             overflow-hidden
//             rounded-[30px]
//             border
//             border-[#143E33]/[0.07]
//             bg-white
//             shadow-[0_30px_90px_rgba(20,62,51,.08)]
//           ">
//           {/* ===============================================
//               TOP HERO-LIKE BLOCK
//           =============================================== */}

//           <div
//             className="
//               relative
//               min-h-[500px]
//               overflow-hidden
//               bg-[#0A342B]
//               px-6
//               py-8
//               text-white

//               sm:px-8
//               lg:min-h-[560px]
//               lg:px-10
//               lg:py-10
//             ">
//             {/* grid */}
//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 inset-0
//                 opacity-[0.11]
//                 [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)]
//                 [background-size:46px_46px]
//               "
//             />

//             {/* glow */}
//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 right-[8%]
//                 top-[18%]
//                 h-[420px]
//                 w-[420px]
//                 rounded-full
//                 bg-[#C8F000]/[0.07]
//                 blur-[100px]
//               "
//             />

//             {/* giant word */}
//             <span
//               className="
//                 pointer-events-none
//                 absolute
//                 -right-5
//                 bottom-[-24px]
//                 select-none
//                 text-[clamp(8rem,14vw,16rem)]
//                 font-semibold
//                 leading-[0.7]
//                 tracking-[-0.09em]
//                 text-white/[0.035]
//               ">
//               VALOR
//             </span>

//             <div
//               className="
//                 relative
//                 z-10
//                 grid
//                 min-h-[440px]
//                 gap-10

//                 lg:grid-cols-[1.15fr_.85fr]
//                 lg:items-center
//               ">
//               {/* LEFT COPY */}
//               <div>
//                 <div className="flex items-center gap-4">
//                   <span
//                     className="
//                       flex
//                       h-10
//                       w-10
//                       items-center
//                       justify-center
//                       rounded-full
//                       bg-[#C8F000]
//                       text-[#10372E]
//                     ">
//                     <Recycle size={17} strokeWidth={1.6} />
//                   </span>

//                   <div className="flex items-center gap-3">
//                     <span className="h-px w-8 bg-[#C8F000]" />

//                     <p
//                       className="
//                         text-[8px]
//                         font-bold
//                         uppercase
//                         tracking-[0.21em]
//                         text-[#C8F000]
//                       ">
//                       Valorización de residuos
//                     </p>
//                   </div>
//                 </div>

//                 <h2
//                   className="
//                     mt-7
//                     max-w-[880px]
//                     text-[clamp(3.4rem,5.8vw,7rem)]
//                     font-medium
//                     uppercase
//                     leading-[0.84]
//                     tracking-[-0.065em]
//                   ">
//                   Lo que antes era
//                   <span className="block text-white/44">descarte.</span>
//                 </h2>

//                 <div
//                   className="
//                     mt-8
//                     flex
//                     items-center
//                     gap-4
//                   ">
//                   <span className="h-[2px] w-12 bg-[#C8F000]" />

//                   <p
//                     className="
//                       text-[8px]
//                       font-bold
//                       uppercase
//                       tracking-[0.15em]
//                       text-[#C8F000]
//                     ">
//                     Puede encontrar una nueva utilidad
//                   </p>
//                 </div>
//               </div>

//               {/* RIGHT ABSTRACT MASS */}
//               <div
//                 className="
//                   relative
//                   hidden
//                   min-h-[360px]

//                   lg:block
//                 ">
//                 <div
//                   className="
//                     absolute
//                     left-1/2
//                     top-1/2
//                     h-[320px]
//                     w-[320px]
//                     -translate-x-1/2
//                     -translate-y-1/2
//                     rounded-full
//                     border
//                     border-dashed
//                     border-[#C8F000]/20
//                   "
//                 />

//                 <div
//                   className="
//                     absolute
//                     left-1/2
//                     top-1/2
//                     h-[220px]
//                     w-[220px]
//                     -translate-x-1/2
//                     -translate-y-1/2
//                     rounded-full
//                     bg-[#C8F000]/[0.055]
//                     blur-[18px]
//                   "
//                 />

//                 {[
//                   "left-[19%] top-[19%] h-12 w-16 rotate-[11deg]",
//                   "left-[43%] top-[10%] h-16 w-10 -rotate-[14deg]",
//                   "left-[65%] top-[24%] h-10 w-18 rotate-[8deg]",
//                   "left-[27%] top-[53%] h-10 w-10 rounded-full",
//                   "left-[49%] top-[57%] h-14 w-16 -rotate-[6deg]",
//                   "left-[69%] top-[60%] h-10 w-12 rotate-[12deg]",
//                 ].map((shape, index) => (
//                   <motion.span
//                     key={shape}
//                     animate={{
//                       y: [0, -6, 0],
//                       rotate: index % 2 === 0 ? [0, 2, 0] : [0, -2, 0],
//                     }}
//                     transition={{
//                       duration: 4 + index * 0.25,
//                       repeat: Infinity,
//                       ease: "easeInOut",
//                     }}
//                     className={`
//                       absolute
//                       rounded-[4px]
//                       border
//                       border-white/[0.08]
//                       bg-white/[0.05]
//                       shadow-[0_12px_30px_rgba(0,0,0,.12)]
//                       ${shape}
//                     `}
//                   />
//                 ))}

//                 <motion.div
//                   animate={{
//                     rotate: 360,
//                   }}
//                   transition={{
//                     duration: 26,
//                     repeat: Infinity,
//                     ease: "linear",
//                   }}
//                   className="
//                     absolute
//                     left-1/2
//                     top-1/2
//                     h-[150px]
//                     w-[150px]
//                     -translate-x-1/2
//                     -translate-y-1/2
//                     rounded-full
//                     border
//                     border-[#C8F000]/25
//                   ">
//                   <span
//                     className="
//                       absolute
//                       left-1/2
//                       top-[-6px]
//                       h-3
//                       w-3
//                       -translate-x-1/2
//                       rounded-full
//                       bg-[#C8F000]
//                       shadow-[0_0_16px_rgba(200,240,0,.7)]
//                     "
//                   />
//                 </motion.div>

//                 <div
//                   className="
//                     absolute
//                     left-1/2
//                     top-1/2
//                     flex
//                     h-[105px]
//                     w-[105px]
//                     -translate-x-1/2
//                     -translate-y-1/2
//                     items-center
//                     justify-center
//                     rounded-full
//                     bg-[#C8F000]
//                     text-[#10372E]
//                     shadow-[0_18px_45px_rgba(200,240,0,.17)]
//                   ">
//                   <Sparkles size={29} strokeWidth={1.4} />
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* ===============================================
//               BOTTOM SPLIT
//           =============================================== */}

//           <div
//             className="
//               grid

//               lg:grid-cols-[0.9fr_1.1fr]
//             ">
//             {/* LEFT STATEMENT */}
//             <div
//               className="
//                 relative
//                 overflow-hidden
//                 bg-[#EAF1E2]
//                 px-6
//                 py-8

//                 sm:px-8
//                 lg:px-10
//                 lg:py-10
//               ">
//               <span
//                 className="
//                   pointer-events-none
//                   absolute
//                   -left-3
//                   -bottom-8
//                   text-[120px]
//                   font-semibold
//                   leading-none
//                   tracking-[-0.08em]
//                   text-[#143E33]/[0.035]
//                 ">
//                 NUEVO
//               </span>

//               <div className="relative z-10">
//                 <p
//                   className="
//                     text-[7px]
//                     font-bold
//                     uppercase
//                     tracking-[0.17em]
//                     text-[#78A500]
//                   ">
//                   Una nueva lectura del residuo
//                 </p>

//                 <h3
//                   className="
//                     mt-4
//                     max-w-[560px]
//                     text-[clamp(2.4rem,3.8vw,4.6rem)]
//                     font-medium
//                     uppercase
//                     leading-[0.9]
//                     tracking-[-0.055em]
//                   ">
//                   Puede convertirse en
//                   <span className="block text-[#83B500]">valor.</span>
//                 </h3>

//                 <p
//                   className="
//                     mt-6
//                     max-w-[500px]
//                     text-[10px]
//                     leading-6
//                     text-[#143E33]/44
//                   ">
//                   La valorización permite identificar oportunidades de
//                   recuperación y aprovechamiento dentro de distintas corrientes
//                   de residuos.
//                 </p>

//                 <div
//                   className="
//                     mt-8
//                     flex
//                     items-center
//                     gap-4
//                   ">
//                   <span className="h-[2px] w-10 bg-[#83B500]" />

//                   <span
//                     className="
//                       text-[7px]
//                       font-bold
//                       uppercase
//                       tracking-[0.14em]
//                       text-[#78A500]
//                     ">
//                     Recuperar antes de perder
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT OUTCOMES */}
//             <div
//               className="
//                 relative
//                 bg-white
//                 px-6
//                 py-8

//                 sm:px-8
//                 lg:px-10
//                 lg:py-10
//               ">
//               <div
//                 className="
//                   pointer-events-none
//                   absolute
//                   bottom-[20px]
//                   right-[4%]
//                   h-[220px]
//                   w-[280px]
//                   opacity-[0.2]
//                   [background-image:radial-gradient(rgba(130,176,12,.23)_1px,transparent_1px)]
//                   [background-size:11px_11px]
//                 "
//               />

//               <div
//                 className="
//                   relative
//                   z-10
//                   grid
//                   gap-5
//                 ">
//                 {outcomes.map((outcome, index) => {
//                   const Icon = outcome.icon;

//                   return (
//                     <motion.div
//                       key={outcome.title}
//                       initial={{
//                         opacity: 0,
//                         x: 18,
//                       }}
//                       whileInView={{
//                         opacity: 1,
//                         x: 0,
//                       }}
//                       viewport={{ once: true }}
//                       transition={{
//                         duration: 0.5,
//                         delay: 0.1 + index * 0.08,
//                       }}
//                       className="
//                         group
//                         flex
//                         items-center
//                         gap-5
//                         border-b
//                         border-[#143E33]/[0.07]
//                         pb-5
//                         last:border-b-0
//                         last:pb-0
//                       ">
//                       <span
//                         className="
//                           flex
//                           h-[64px]
//                           w-[64px]
//                           shrink-0
//                           items-center
//                           justify-center
//                           rounded-full
//                           border
//                           border-[#143E33]/[0.07]
//                           bg-[#F4F7F1]
//                           text-[#83B500]
//                           transition-all
//                           duration-300

//                           group-hover:bg-[#C8F000]
//                           group-hover:text-[#10372E]
//                         ">
//                         <Icon size={23} strokeWidth={1.5} />
//                       </span>

//                       <div className="min-w-0">
//                         <p
//                           className="
//                             text-[10px]
//                             font-bold
//                             uppercase
//                             tracking-[0.11em]
//                             text-[#143E33]
//                           ">
//                           {outcome.title}
//                         </p>

//                         <p
//                           className="
//                             mt-2
//                             max-w-[520px]
//                             text-[8px]
//                             leading-5
//                             text-[#143E33]/38
//                           ">
//                           {outcome.description}
//                         </p>
//                       </div>

//                       <ArrowRight
//                         size={14}
//                         strokeWidth={1.5}
//                         className="
//                           ml-auto
//                           shrink-0
//                           text-[#83B500]
//                           transition-transform
//                           duration-300
//                           group-hover:translate-x-1
//                         "
//                       />
//                     </motion.div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>

//           {/* ===============================================
//               SIGNATURE BAR
//           =============================================== */}

//           <div
//             className="
//               flex
//               flex-col
//               gap-4
//               border-t
//               border-white/[0.07]
//               bg-[#0A342B]
//               px-6
//               py-5
//               text-white

//               sm:flex-row
//               sm:items-center
//               sm:justify-between

//               lg:px-8
//             ">
//             <div className="flex items-center gap-4">
//               <span
//                 className="
//                   flex
//                   h-10
//                   w-10
//                   items-center
//                   justify-center
//                   rounded-full
//                   bg-[#C8F000]
//                   text-[#10372E]
//                 ">
//                 <Recycle size={15} strokeWidth={1.6} />
//               </span>

//               <div>
//                 <p
//                   className="
//                     text-[6px]
//                     font-bold
//                     uppercase
//                     tracking-[0.15em]
//                     text-[#C8F000]
//                   ">
//                   Valorización
//                 </p>

//                 <p
//                   className="
//                     mt-1
//                     text-[8px]
//                     text-white/40
//                   ">
//                   Encontrar una nueva utilidad dentro de una corriente que antes
//                   era tratada como descarte.
//                 </p>
//               </div>
//             </div>

//             <div className="flex items-center gap-4">
//               <span
//                 className="
//                   text-[6px]
//                   font-bold
//                   uppercase
//                   tracking-[0.14em]
//                   text-white/28
//                 ">
//                 Descarte
//               </span>

//               <span className="h-px w-8 bg-[#C8F000]/40" />

//               <ArrowRight
//                 size={13}
//                 strokeWidth={1.6}
//                 className="text-[#C8F000]"
//               />

//               <span className="h-px w-8 bg-[#C8F000]/40" />

//               <span
//                 className="
//                   text-[6px]
//                   font-bold
//                   uppercase
//                   tracking-[0.14em]
//                   text-[#C8F000]
//                 ">
//                 Valor
//               </span>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default ResiduosValueStatementSection;

import { motion } from "motion/react";
import { ArrowRight, Boxes, Leaf, Recycle, Sparkles, Zap } from "lucide-react";

const outcomes = [
  {
    icon: Boxes,
    title: "Menor disposición final",
    description:
      "Recuperar materiales y recursos permite reducir la fracción que termina como descarte.",
  },
  {
    icon: Zap,
    title: "Aprovechamiento energético",
    description:
      "Determinadas corrientes pueden convertirse en biogás o energía mediante la tecnología adecuada.",
  },
  {
    icon: Leaf,
    title: "Nuevos ciclos de uso",
    description:
      "Materiales, composta y otros recursos pueden reincorporarse a nuevas cadenas de valor.",
  },
];

function ResiduosValueStatementSection() {
  return (
    <section
      id="residuos-value"
      className="
        relative
        overflow-hidden
        bg-[#F4F7F1]
        py-16
        text-[#143E33]

        lg:py-20
      ">
      {/* background */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.18]
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
          bg-[#C8F000]/10
          blur-[120px]
        "
      />

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
            EDITORIAL CANVAS
        =================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.08 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            overflow-hidden
            rounded-[30px]
            border
            border-[#143E33]/[0.07]
            bg-white
            shadow-[0_30px_90px_rgba(20,62,51,.08)]
          ">
          {/* ===============================================
              TOP HERO-LIKE BLOCK
          =============================================== */}

          <div
            className="
              relative
              min-h-[500px]
              overflow-hidden
              bg-[#0A342B]
              px-6
              py-8
              text-white

              sm:px-8
              lg:min-h-[560px]
              lg:px-10
              lg:py-10
            ">
            {/* grid */}
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

            {/* glow */}
            <div
              className="
                pointer-events-none
                absolute
                right-[8%]
                top-[18%]
                h-[420px]
                w-[420px]
                rounded-full
                bg-[#C8F000]/[0.07]
                blur-[100px]
              "
            />

            {/* giant word */}
            <span
              className="
                pointer-events-none
                absolute
                -right-5
                bottom-[-24px]
                select-none
                text-[clamp(8rem,14vw,16rem)]
                font-semibold
                leading-[0.7]
                tracking-[-0.09em]
                text-white/[0.035]
              ">
              VALOR
            </span>

            <div
              className="
                relative
                z-10
                grid
                min-h-[440px]
                gap-10

                lg:grid-cols-[1.15fr_.85fr]
                lg:items-center
              ">
              {/* LEFT COPY */}
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
                      bg-[#C8F000]
                      text-[#10372E]
                    ">
                    <Recycle size={17} strokeWidth={1.6} />
                  </span>

                  <div className="flex items-center gap-3">
                    <span className="h-px w-8 bg-[#C8F000]" />

                    <p
                      className="
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.21em]
                        text-[#C8F000]
                      ">
                      Valorización de residuos
                    </p>
                  </div>
                </div>

                <h2
                  className="
                    mt-7
                    max-w-[880px]
                    text-[clamp(3.4rem,5.8vw,7rem)]
                    font-medium
                    uppercase
                    leading-[0.84]
                    tracking-[-0.065em]
                  ">
                  Lo que antes terminaba
                  <span className="block text-white/44">como descarte.</span>
                </h2>

                <div
                  className="
                    mt-8
                    flex
                    items-center
                    gap-4
                  ">
                  <span className="h-[2px] w-12 bg-[#C8F000]" />

                  <p
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.15em]
                      text-[#C8F000]
                    ">
                    Puede recuperar valor antes de perderlo
                  </p>
                </div>
              </div>

              {/* RIGHT ABSTRACT MASS */}
              <div
                className="
                  relative
                  hidden
                  min-h-[360px]

                  lg:block
                ">
                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    h-[320px]
                    w-[320px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    border
                    border-dashed
                    border-[#C8F000]/20
                  "
                />

                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    h-[220px]
                    w-[220px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-[#C8F000]/[0.055]
                    blur-[18px]
                  "
                />

                {[
                  "left-[19%] top-[19%] h-12 w-16 rotate-[11deg]",
                  "left-[43%] top-[10%] h-16 w-10 -rotate-[14deg]",
                  "left-[65%] top-[24%] h-10 w-18 rotate-[8deg]",
                  "left-[27%] top-[53%] h-10 w-10 rounded-full",
                  "left-[49%] top-[57%] h-14 w-16 -rotate-[6deg]",
                  "left-[69%] top-[60%] h-10 w-12 rotate-[12deg]",
                ].map((shape, index) => (
                  <motion.span
                    key={shape}
                    animate={{
                      y: [0, -6, 0],
                      rotate: index % 2 === 0 ? [0, 2, 0] : [0, -2, 0],
                    }}
                    transition={{
                      duration: 4 + index * 0.25,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`
                      absolute
                      rounded-[4px]
                      border
                      border-white/[0.08]
                      bg-white/[0.05]
                      shadow-[0_12px_30px_rgba(0,0,0,.12)]
                      ${shape}
                    `}
                  />
                ))}

                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 26,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    h-[150px]
                    w-[150px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    border
                    border-[#C8F000]/25
                  ">
                  <span
                    className="
                      absolute
                      left-1/2
                      top-[-6px]
                      h-3
                      w-3
                      -translate-x-1/2
                      rounded-full
                      bg-[#C8F000]
                      shadow-[0_0_16px_rgba(200,240,0,.7)]
                    "
                  />
                </motion.div>

                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    flex
                    h-[105px]
                    w-[105px]
                    -translate-x-1/2
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    bg-[#C8F000]
                    text-[#10372E]
                    shadow-[0_18px_45px_rgba(200,240,0,.17)]
                  ">
                  <Sparkles size={29} strokeWidth={1.4} />
                </div>
              </div>
            </div>
          </div>

          {/* ===============================================
              BOTTOM SPLIT
          =============================================== */}

          <div
            className="
              grid

              lg:grid-cols-[0.9fr_1.1fr]
            ">
            {/* LEFT STATEMENT */}
            <div
              className="
                relative
                overflow-hidden
                bg-[#EAF1E2]
                px-6
                py-8

                sm:px-8
                lg:px-10
                lg:py-10
              ">
              <span
                className="
                  pointer-events-none
                  absolute
                  -left-3
                  -bottom-8
                  text-[120px]
                  font-semibold
                  leading-none
                  tracking-[-0.08em]
                  text-[#143E33]/[0.035]
                ">
                NUEVO
              </span>

              <div className="relative z-10">
                <p
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.17em]
                    text-[#78A500]
                  ">
                  Una nueva lectura del residuo
                </p>

                <h3
                  className="
                    mt-4
                    max-w-[560px]
                    text-[clamp(2.4rem,3.8vw,4.6rem)]
                    font-medium
                    uppercase
                    leading-[0.9]
                    tracking-[-0.055em]
                  ">
                  Puede convertirse en
                  <span className="block text-[#83B500]">valor.</span>
                </h3>

                <p
                  className="
                    mt-6
                    max-w-[500px]
                    text-[13px]
                    leading-6
                    text-[#143E33]/44
                  ">
                  La valorización permite reducir disposición final, recuperar
                  recursos y reincorporar materiales o energía a nuevos ciclos
                  de uso cuando la corriente y la tecnología lo permiten.
                </p>

                <div
                  className="
                    mt-8
                    flex
                    items-center
                    gap-4
                  ">
                  <span className="h-[2px] w-10 bg-[#83B500]" />

                  <span
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.14em]
                      text-[#78A500]
                    ">
                    Recuperar · Reincorporar · Aprovechar
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT OUTCOMES */}
            <div
              className="
                relative
                bg-white
                px-6
                py-8

                sm:px-8
                lg:px-10
                lg:py-10
              ">
              <div
                className="
                  pointer-events-none
                  absolute
                  bottom-[20px]
                  right-[4%]
                  h-[220px]
                  w-[280px]
                  opacity-[0.2]
                  [background-image:radial-gradient(rgba(130,176,12,.23)_1px,transparent_1px)]
                  [background-size:11px_11px]
                "
              />

              <div
                className="
                  relative
                  z-10
                  grid
                  gap-5
                ">
                {outcomes.map((outcome, index) => {
                  const Icon = outcome.icon;

                  return (
                    <motion.div
                      key={outcome.title}
                      initial={{
                        opacity: 0,
                        x: 18,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: 0.1 + index * 0.08,
                      }}
                      className="
                        group
                        flex
                        items-center
                        gap-5
                        border-b
                        border-[#143E33]/[0.07]
                        pb-5
                        last:border-b-0
                        last:pb-0
                      ">
                      <span
                        className="
                          flex
                          h-[64px]
                          w-[64px]
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#143E33]/[0.07]
                          bg-[#F4F7F1]
                          text-[#83B500]
                          transition-all
                          duration-300

                          group-hover:bg-[#C8F000]
                          group-hover:text-[#10372E]
                        ">
                        <Icon size={23} strokeWidth={1.5} />
                      </span>

                      <div className="min-w-0">
                        <p
                          className="
                            text-[13px]
                            font-bold
                            uppercase
                            tracking-[0.11em]
                            text-[#143E33]
                          ">
                          {outcome.title}
                        </p>

                        <p
                          className="
                            mt-2
                            max-w-[520px]
                            text-[11px]
                            leading-5
                            text-[#143E33]/38
                          ">
                          {outcome.description}
                        </p>
                      </div>

                      <ArrowRight
                        size={14}
                        strokeWidth={1.5}
                        className="
                          ml-auto
                          shrink-0
                          text-[#83B500]
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ===============================================
              SIGNATURE BAR
          =============================================== */}

          <div
            className="
              flex
              flex-col
              gap-4
              border-t
              border-white/[0.07]
              bg-[#0A342B]
              px-6
              py-5
              text-white

              sm:flex-row
              sm:items-center
              sm:justify-between

              lg:px-8
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
                <Recycle size={15} strokeWidth={1.6} />
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
                    text-white/40
                  ">
                  Recuperar valor ambiental y productivo de corrientes que antes
                  terminaban como descarte.
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
                Descarte
              </span>

              <span className="h-px w-8 bg-[#C8F000]/40" />

              <ArrowRight
                size={13}
                strokeWidth={1.6}
                className="text-[#C8F000]"
              />

              <span className="h-px w-8 bg-[#C8F000]/40" />

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
        </motion.div>
      </div>
    </section>
  );
}

export default ResiduosValueStatementSection;
