// import { motion } from "motion/react";
// import { ArrowUpRight, MessageCircle, Recycle, Sparkles } from "lucide-react";

// function ResiduosCTASection() {
//   return (
//     <section
//       id="residuos-contacto"
//       className="
//         relative
//         overflow-hidden
//         bg-[#F3F6EF]
//         px-5
//         py-16
//         text-[#123D32]

//         sm:px-8
//         lg:px-12
//         lg:py-20
//         xl:px-16
//         2xl:px-20
//       ">
//       {/* =====================================================
//           BACKGROUND AMBIENCE
//       ===================================================== */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           inset-0
//           opacity-[0.16]
//           [background-image:radial-gradient(rgba(20,62,51,.10)_1px,transparent_1px)]
//           [background-size:22px_22px]
//         "
//       />

//       <div
//         className="
//           pointer-events-none
//           absolute
//           left-1/2
//           top-1/2
//           h-[680px]
//           w-[1100px]
//           -translate-x-1/2
//           -translate-y-1/2
//           rounded-full
//           bg-[#C8F000]/[0.055]
//           blur-[140px]
//         "
//       />

//       {/* =====================================================
//           MAIN CARD
//       ===================================================== */}

//       <motion.div
//         initial={{
//           opacity: 0,
//           y: 26,
//         }}
//         whileInView={{
//           opacity: 1,
//           y: 0,
//         }}
//         viewport={{
//           once: true,
//           amount: 0.12,
//         }}
//         transition={{
//           duration: 0.8,
//           ease: [0.22, 1, 0.36, 1],
//         }}
//         className="
//           relative
//           mx-auto
//           max-w-[1760px]
//           overflow-hidden
//           rounded-[34px]
//           border
//           border-[#123D32]/[0.065]
//           bg-white
//           shadow-[0_32px_90px_rgba(17,55,45,.12)]
//         ">
//         {/* ===================================================
//             TOP BAR
//         =================================================== */}

//         <div
//           className="
//             relative
//             z-30
//             flex
//             min-h-[98px]
//             items-center
//             justify-between
//             gap-6
//             border-b
//             border-[#123D32]/[0.07]
//             bg-white
//             px-6
//             py-5

//             sm:px-8
//             lg:px-10
//           ">
//           <div className="flex items-center gap-5">
//             <span
//               className="
//                 flex
//                 h-12
//                 w-12
//                 shrink-0
//                 items-center
//                 justify-center
//                 rounded-full
//                 bg-[#C8F000]
//                 text-[#123D32]
//                 shadow-[0_10px_26px_rgba(155,195,0,.14)]
//               ">
//               <MessageCircle size={19} strokeWidth={1.55} />
//             </span>

//             <span className="h-px w-10 bg-[#82B000]" />

//             <p
//               className="
//                 text-[7px]
//                 font-bold
//                 uppercase
//                 tracking-[0.2em]
//                 text-[#72A000]
//               ">
//               Hablemos de tu proyecto
//             </p>
//           </div>

//           <div
//             className="
//               hidden
//               items-center
//               gap-4

//               sm:flex
//             ">
//             <Recycle size={12} strokeWidth={1.45} className="text-[#83B500]" />

//             <span
//               className="
//                 text-[6px]
//                 font-bold
//                 uppercase
//                 tracking-[0.16em]
//                 text-[#123D32]/28
//               ">
//               Residuos · Valorización
//             </span>
//           </div>
//         </div>

//         {/* ===================================================
//             BODY
//         =================================================== */}

//         <div
//           className="
//             relative
//             grid

//             lg:grid-cols-[1.12fr_.88fr]
//           ">
//           {/* =================================================
//               LEFT PANEL
//           ================================================= */}

//           <div
//             className="
//               relative
//               min-h-[590px]
//               overflow-hidden
//               bg-white
//               px-6
//               py-10

//               sm:px-8
//               lg:min-h-[640px]
//               lg:px-10
//               lg:py-12
//               xl:px-12
//             ">
//             {/* GIANT RUTA */}

//             <span
//               className="
//                 pointer-events-none
//                 absolute
//                 -bottom-[20px]
//                 -left-[15px]
//                 select-none
//                 text-[clamp(8rem,14vw,16rem)]
//                 font-semibold
//                 uppercase
//                 leading-[0.7]
//                 tracking-[-0.09em]
//                 text-[#123D32]/[0.028]
//               ">
//               RUTA
//             </span>

//             {/* subtle dot field */}

//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 bottom-[2%]
//                 right-[5%]
//                 h-[180px]
//                 w-[240px]
//                 opacity-[0.22]
//                 [background-image:radial-gradient(rgba(132,181,0,.45)_1px,transparent_1px)]
//                 [background-size:11px_11px]
//               "
//             />

//             <div
//               className="
//                 relative
//                 z-10
//                 flex
//                 h-full
//                 flex-col
//               ">
//               {/* eyebrow */}

//               <div className="flex items-center gap-3">
//                 <Sparkles
//                   size={13}
//                   strokeWidth={1.5}
//                   className="text-[#83B500]"
//                 />

//                 <span
//                   className="
//                     text-[7px]
//                     font-bold
//                     uppercase
//                     tracking-[0.18em]
//                     text-[#123D32]/38
//                   ">
//                   Cada proyecto comienza distinto
//                 </span>
//               </div>

//               {/* statement */}

//               <motion.h2
//                 initial={{
//                   opacity: 0,
//                   y: 18,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 viewport={{
//                   once: true,
//                 }}
//                 transition={{
//                   duration: 0.7,
//                   delay: 0.08,
//                   ease: [0.22, 1, 0.36, 1],
//                 }}
//                 className="
//                   mt-10
//                   max-w-[1050px]
//                   text-[clamp(3.5rem,5.7vw,6.9rem)]
//                   font-semibold
//                   uppercase
//                   leading-[0.84]
//                   tracking-[-0.07em]
//                 ">
//                 Cada corriente
//                 <span className="block">tiene una</span>
//                 <span className="block text-[#7DB500]">ruta distinta.</span>
//               </motion.h2>

//               {/* supporting line */}

//               <div
//                 className="
//                   mt-10
//                   flex
//                   items-center
//                   gap-5
//                 ">
//                 <span className="h-[2px] w-14 bg-[#C8F000]" />

//                 <p
//                   className="
//                     text-[7px]
//                     font-bold
//                     uppercase
//                     tracking-[0.17em]
//                     text-[#123D32]/38
//                   ">
//                   Diseñemos la adecuada para la tuya
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* =================================================
//               RIGHT PANEL
//           ================================================= */}

//           <div
//             className="
//               relative
//               min-h-[590px]
//               overflow-hidden
//               border-t
//               border-[#123D32]/[0.07]
//               bg-[#F1F6E9]
//               px-6
//               py-10

//               sm:px-8

//               lg:min-h-[640px]
//               lg:border-l
//               lg:border-t-0
//               lg:px-10
//               lg:py-12

//               xl:px-12
//             ">
//             {/* =================================================
//                 TOPOGRAPHIC LINES
//             ================================================= */}

//             <svg
//               viewBox="0 0 700 700"
//               preserveAspectRatio="none"
//               className="
//                 pointer-events-none
//                 absolute
//                 inset-0
//                 h-full
//                 w-full
//                 opacity-55
//               ">
//               {[
//                 "M 500 -30 C 430 40, 470 90, 555 105 C 650 120, 605 195, 540 210 C 470 230, 520 305, 630 310",
//                 "M 545 -20 C 475 45, 515 105, 585 120 C 665 135, 635 210, 570 230 C 500 250, 555 325, 690 330",
//                 "M 590 -10 C 525 55, 555 115, 620 135 C 685 155, 665 230, 610 250 C 550 275, 600 350, 720 370",
//                 "M -30 650 C 55 590, 85 535, 160 525 C 245 515, 225 450, 170 430",
//                 "M -20 690 C 80 625, 110 570, 190 555 C 270 540, 255 475, 205 450",
//               ].map((path) => (
//                 <path
//                   key={path}
//                   d={path}
//                   fill="none"
//                   stroke="#86AE18"
//                   strokeOpacity="0.16"
//                   strokeWidth="1"
//                 />
//               ))}
//             </svg>

//             {/* little nodes */}

//             <span
//               className="
//                 pointer-events-none
//                 absolute
//                 right-[9%]
//                 top-[14%]
//                 h-1.5
//                 w-1.5
//                 rounded-full
//                 bg-[#91C020]/60
//               "
//             />

//             <span
//               className="
//                 pointer-events-none
//                 absolute
//                 right-[5%]
//                 top-[26%]
//                 h-1.5
//                 w-1.5
//                 rounded-full
//                 bg-[#91C020]/45
//               "
//             />

//             <div
//               className="
//                 relative
//                 z-10
//                 flex
//                 h-full
//                 flex-col
//               ">
//               {/* heading */}

//               <div>
//                 <p
//                   className="
//                     text-[7px]
//                     font-bold
//                     uppercase
//                     tracking-[0.17em]
//                     text-[#78A500]
//                   ">
//                   El siguiente paso
//                 </p>

//                 <h3
//                   className="
//                     mt-8
//                     max-w-[610px]
//                     text-[clamp(2.5rem,3.6vw,4.3rem)]
//                     font-semibold
//                     leading-[0.96]
//                     tracking-[-0.055em]
//                   ">
//                   Cuéntanos qué necesitas
//                   <span className="block text-[#7DB500]">resolver.</span>
//                 </h3>

//                 <p
//                   className="
//                     mt-7
//                     max-w-[510px]
//                     text-[10px]
//                     leading-6
//                     text-[#123D32]/48
//                   ">
//                   Partimos de tus residuos, operación y objetivos para
//                   identificar una ruta adecuada de aprovechamiento.
//                 </p>

//                 {/* pre CTA */}

//                 <div
//                   className="
//                     mt-8
//                     flex
//                     items-center
//                     gap-4
//                   ">
//                   <span
//                     className="
//                       h-2
//                       w-2
//                       shrink-0
//                       rounded-full
//                       bg-[#92C000]
//                     "
//                   />

//                   <span
//                     className="
//                       text-[7px]
//                       font-bold
//                       uppercase
//                       tracking-[0.17em]
//                       text-[#123D32]/42
//                     ">
//                     Empecemos por entender tu operación
//                   </span>
//                 </div>
//               </div>

//               {/* =================================================
//                   CTA BUTTON
//               ================================================= */}

//               <motion.a
//                 href="/contacto"
//                 initial="rest"
//                 whileHover="hover"
//                 className="
//                   group
//                   relative
//                   mt-10
//                   block
//                   overflow-hidden
//                   rounded-[19px]
//                   bg-[#0C4034]
//                   text-white
//                   shadow-[0_20px_45px_rgba(12,64,52,.17)]
//                 ">
//                 {/* hover fill */}

//                 <motion.span
//                   variants={{
//                     rest: {
//                       scaleX: 0,
//                     },
//                     hover: {
//                       scaleX: 1,
//                     },
//                   }}
//                   transition={{
//                     duration: 0.45,
//                     ease: [0.22, 1, 0.36, 1],
//                   }}
//                   style={{
//                     transformOrigin: "left center",
//                   }}
//                   className="
//                     absolute
//                     inset-0
//                     bg-[#C8F000]
//                   "
//                 />

//                 {/* CTA dot texture */}

//                 <div
//                   className="
//                     pointer-events-none
//                     absolute
//                     bottom-0
//                     right-0
//                     h-full
//                     w-[42%]
//                     opacity-[0.20]
//                     [background-image:radial-gradient(rgba(200,240,0,.8)_1px,transparent_1px)]
//                     [background-size:10px_10px]
//                   "
//                 />

//                 <div
//                   className="
//                     relative
//                     z-20
//                     flex
//                     min-h-[150px]
//                     items-center
//                     justify-between
//                     gap-6
//                     px-7
//                     py-6

//                     sm:px-8
//                   ">
//                   {/* CTA TEXT */}

//                   <div>
//                     <span
//                       className="
//                         block
//                         text-[7px]
//                         font-bold
//                         uppercase
//                         tracking-[0.18em]
//                         text-[#C8F000]
//                         transition-colors
//                         duration-300

//                         group-hover:text-[#123D32]/65
//                       ">
//                       ¿Hablamos?
//                     </span>

//                     <span
//                       className="
//                         mt-3
//                         block
//                         text-[clamp(1.35rem,2vw,2rem)]
//                         font-semibold
//                         leading-none
//                         tracking-[-0.035em]
//                         text-white
//                         transition-colors
//                         duration-300

//                         group-hover:text-[#123D32]
//                       ">
//                       Iniciar una conversación
//                     </span>

//                     <span
//                       className="
//                         mt-3
//                         block
//                         text-[9px]
//                         text-white/50
//                         transition-colors
//                         duration-300

//                         group-hover:text-[#123D32]/60
//                       ">
//                       Cuéntanos sobre tu proyecto.
//                     </span>
//                   </div>

//                   {/* CTA ICON */}

//                   <span
//                     className="
//                       relative
//                       flex
//                       h-[64px]
//                       w-[64px]
//                       shrink-0
//                       items-center
//                       justify-center
//                       rounded-full
//                       bg-[#C8F000]
//                       text-[#123D32]
//                       shadow-[0_10px_28px_rgba(0,0,0,.10)]
//                       transition-all
//                       duration-300

//                       group-hover:rotate-45
//                       group-hover:bg-[#123D32]
//                       group-hover:text-[#C8F000]
//                     ">
//                     <ArrowUpRight size={22} strokeWidth={1.65} />
//                   </span>
//                 </div>
//               </motion.a>

//               {/* capabilities */}

//               <div
//                 className="
//                   mt-7
//                   flex
//                   items-center
//                   gap-4
//                 ">
//                 <span className="h-px w-8 bg-[#83B500]/55" />

//                 <span
//                   className="
//                     text-[6px]
//                     font-bold
//                     uppercase
//                     tracking-[0.15em]
//                     text-[#123D32]/30
//                   ">
//                   Ingeniería · Valorización · Operación
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ===================================================
//             BOTTOM BAR
//         =================================================== */}

//         <div
//           className="
//             relative
//             z-30
//             flex
//             flex-col
//             gap-5
//             border-t
//             border-[#123D32]/[0.07]
//             bg-white
//             px-6
//             py-5

//             sm:flex-row
//             sm:items-center
//             sm:justify-between
//             sm:px-8

//             lg:px-10
//           ">
//           <div className="flex items-center gap-4">
//             <span
//               className="
//                 flex
//                 h-8
//                 w-8
//                 shrink-0
//                 items-center
//                 justify-center
//                 rounded-full
//                 border
//                 border-[#83B500]/20
//                 text-[#83B500]
//               ">
//               <Recycle size={13} strokeWidth={1.5} />
//             </span>

//             <p
//               className="
//                 text-[6px]
//                 font-bold
//                 uppercase
//                 tracking-[0.15em]
//                 text-[#123D32]/33
//               ">
//               Del residuo a una solución diseñada para tu operación
//             </p>
//           </div>

//           <div
//             className="
//               flex
//               flex-wrap
//               items-center
//               gap-5
//             ">
//             <span
//               className="
//                 hidden
//                 text-[6px]
//                 font-bold
//                 uppercase
//                 tracking-[0.15em]
//                 text-[#123D32]/25

//                 sm:block
//               ">
//               Ingeniería · Valorización · Operación
//             </span>

//             <span className="h-px w-10 bg-[#83B500]/45" />

//             <span
//               className="
//                 text-[6px]
//                 font-bold
//                 uppercase
//                 tracking-[0.16em]
//                 text-[#78A500]
//               ">
//               Hablemos
//             </span>

//             <ArrowUpRight
//               size={14}
//               strokeWidth={1.6}
//               className="text-[#83B500]"
//             />
//           </div>
//         </div>
//       </motion.div>
//     </section>
//   );
// }

// export default ResiduosCTASection;

import { motion } from "motion/react";
import { ArrowUpRight, MessageCircle, Recycle, Sparkles } from "lucide-react";

function ResiduosCTASection() {
  return (
    <section
      id="residuos-contacto"
      className="
        relative
        overflow-hidden
        bg-[#F3F6EF]
        px-5
        py-16
        text-[#123D32]

        sm:px-8
        lg:px-12
        lg:py-20
        xl:px-16
        2xl:px-20
      ">
      {/* =====================================================
          BACKGROUND AMBIENCE
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.16]
          [background-image:radial-gradient(rgba(20,62,51,.10)_1px,transparent_1px)]
          [background-size:22px_22px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[680px]
          w-[1100px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#C8F000]/[0.055]
          blur-[140px]
        "
      />

      {/* =====================================================
          MAIN CARD
      ===================================================== */}

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
          amount: 0.12,
        }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          relative
          mx-auto
          max-w-[1760px]
          overflow-hidden
          rounded-[34px]
          border
          border-[#123D32]/[0.065]
          bg-white
          shadow-[0_32px_90px_rgba(17,55,45,.12)]
        ">
        {/* ===================================================
            TOP BAR
        =================================================== */}

        <div
          className="
            relative
            z-30
            flex
            min-h-[98px]
            items-center
            justify-between
            gap-6
            border-b
            border-[#123D32]/[0.07]
            bg-white
            px-6
            py-5

            sm:px-8
            lg:px-10
          ">
          <div className="flex items-center gap-5">
            <span
              className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#C8F000]
                text-[#123D32]
                shadow-[0_10px_26px_rgba(155,195,0,.14)]
              ">
              <MessageCircle size={19} strokeWidth={1.55} />
            </span>

            <span className="h-px w-10 bg-[#82B000]" />

            <p
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.2em]
                text-[#72A000]
              ">
              Hablemos de tu proyecto
            </p>
          </div>

          <div
            className="
              hidden
              items-center
              gap-4

              sm:flex
            ">
            <Recycle size={12} strokeWidth={1.45} className="text-[#83B500]" />

            <span
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#123D32]/28
              ">
              Residuos · Valorización
            </span>
          </div>
        </div>

        {/* ===================================================
            BODY
        =================================================== */}

        <div
          className="
            relative
            grid

            lg:grid-cols-[1.12fr_.88fr]
          ">
          {/* =================================================
              LEFT PANEL
          ================================================= */}

          <div
            className="
              relative
              min-h-[590px]
              overflow-hidden
              bg-white
              px-6
              py-10

              sm:px-8
              lg:min-h-[640px]
              lg:px-10
              lg:py-12
              xl:px-12
            ">
            {/* GIANT RUTA */}

            <span
              className="
                pointer-events-none
                absolute
                -bottom-[20px]
                -left-[15px]
                select-none
                text-[clamp(8rem,14vw,16rem)]
                font-semibold
                uppercase
                leading-[0.7]
                tracking-[-0.09em]
                text-[#123D32]/[0.028]
              ">
              RUTA
            </span>

            {/* subtle dot field */}

            <div
              className="
                pointer-events-none
                absolute
                bottom-[2%]
                right-[5%]
                h-[180px]
                w-[240px]
                opacity-[0.22]
                [background-image:radial-gradient(rgba(132,181,0,.45)_1px,transparent_1px)]
                [background-size:11px_11px]
              "
            />

            <div
              className="
                relative
                z-10
                flex
                h-full
                flex-col
              ">
              {/* eyebrow */}

              <div className="flex items-center gap-3">
                <Sparkles
                  size={13}
                  strokeWidth={1.5}
                  className="text-[#83B500]"
                />

                <span
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-[#123D32]/38
                  ">
                  Cada proyecto comienza distinto
                </span>
              </div>

              {/* statement */}

              <motion.h2
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
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  mt-10
                  max-w-[1050px]
                  text-[clamp(3.5rem,5.7vw,6.9rem)]
                  font-semibold
                  uppercase
                  leading-[0.84]
                  tracking-[-0.07em]
                ">
                Cada corriente
                <span className="block">tiene una</span>
                <span className="block text-[#7DB500]">ruta distinta.</span>
              </motion.h2>

              {/* supporting line */}

              <div
                className="
                  mt-10
                  flex
                  items-center
                  gap-5
                ">
                <span className="h-[2px] w-14 bg-[#C8F000]" />

                <p
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.17em]
                    text-[#123D32]/38
                  ">
                  Diseñemos la adecuada para la tuya
                </p>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT PANEL
          ================================================= */}

          <div
            className="
              relative
              min-h-[590px]
              overflow-hidden
              border-t
              border-[#123D32]/[0.07]
              bg-[#F1F6E9]
              px-6
              py-10

              sm:px-8

              lg:min-h-[640px]
              lg:border-l
              lg:border-t-0
              lg:px-10
              lg:py-12

              xl:px-12
            ">
            {/* =================================================
                TOPOGRAPHIC LINES
            ================================================= */}

            <svg
              viewBox="0 0 700 700"
              preserveAspectRatio="none"
              className="
                pointer-events-none
                absolute
                inset-0
                h-full
                w-full
                opacity-55
              ">
              {[
                "M 500 -30 C 430 40, 470 90, 555 105 C 650 120, 605 195, 540 210 C 470 230, 520 305, 630 310",
                "M 545 -20 C 475 45, 515 105, 585 120 C 665 135, 635 210, 570 230 C 500 250, 555 325, 690 330",
                "M 590 -10 C 525 55, 555 115, 620 135 C 685 155, 665 230, 610 250 C 550 275, 600 350, 720 370",
                "M -30 650 C 55 590, 85 535, 160 525 C 245 515, 225 450, 170 430",
                "M -20 690 C 80 625, 110 570, 190 555 C 270 540, 255 475, 205 450",
              ].map((path) => (
                <path
                  key={path}
                  d={path}
                  fill="none"
                  stroke="#86AE18"
                  strokeOpacity="0.16"
                  strokeWidth="1"
                />
              ))}
            </svg>

            {/* little nodes */}

            <span
              className="
                pointer-events-none
                absolute
                right-[9%]
                top-[14%]
                h-1.5
                w-1.5
                rounded-full
                bg-[#91C020]/60
              "
            />

            <span
              className="
                pointer-events-none
                absolute
                right-[5%]
                top-[26%]
                h-1.5
                w-1.5
                rounded-full
                bg-[#91C020]/45
              "
            />

            <div
              className="
                relative
                z-10
                flex
                h-full
                flex-col
              ">
              {/* heading */}

              <div>
                <p
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.17em]
                    text-[#78A500]
                  ">
                  El siguiente paso
                </p>

                <h3
                  className="
                    mt-8
                    max-w-[610px]
                    text-[clamp(2.5rem,3.6vw,4.3rem)]
                    font-semibold
                    leading-[0.96]
                    tracking-[-0.055em]
                  ">
                  Cuéntanos qué necesitas
                  <span className="block text-[#7DB500]">resolver.</span>
                </h3>

                <p
                  className="
                    mt-7
                    max-w-[510px]
                    text-[13px]
                    leading-6
                    text-[#123D32]/48
                  ">
                  Partimos de tus residuos, operación y objetivos para
                  identificar la ruta tecnológica y el alcance de implementación
                  adecuados para tu proyecto.
                </p>

                {/* pre CTA */}

                <div
                  className="
                    mt-8
                    flex
                    items-center
                    gap-4
                  ">
                  <span
                    className="
                      h-2
                      w-2
                      shrink-0
                      rounded-full
                      bg-[#92C000]
                    "
                  />

                  <span
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.17em]
                      text-[#123D32]/42
                    ">
                    Empecemos por entender tu residuo y tu operación
                  </span>
                </div>
              </div>

              {/* =================================================
                  CTA BUTTON
              ================================================= */}

              <motion.a
                href="/contacto"
                initial="rest"
                whileHover="hover"
                className="
                  group
                  relative
                  mt-10
                  block
                  overflow-hidden
                  rounded-[19px]
                  bg-[#0C4034]
                  text-white
                  shadow-[0_20px_45px_rgba(12,64,52,.17)]
                ">
                {/* hover fill */}

                <motion.span
                  variants={{
                    rest: {
                      scaleX: 0,
                    },
                    hover: {
                      scaleX: 1,
                    },
                  }}
                  transition={{
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{
                    transformOrigin: "left center",
                  }}
                  className="
                    absolute
                    inset-0
                    bg-[#C8F000]
                  "
                />

                {/* CTA dot texture */}

                <div
                  className="
                    pointer-events-none
                    absolute
                    bottom-0
                    right-0
                    h-full
                    w-[42%]
                    opacity-[0.20]
                    [background-image:radial-gradient(rgba(200,240,0,.8)_1px,transparent_1px)]
                    [background-size:10px_10px]
                  "
                />

                <div
                  className="
                    relative
                    z-20
                    flex
                    min-h-[150px]
                    items-center
                    justify-between
                    gap-6
                    px-7
                    py-6

                    sm:px-8
                  ">
                  {/* CTA TEXT */}

                  <div>
                    <span
                      className="
                        block
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        text-[#C8F000]
                        transition-colors
                        duration-300

                        group-hover:text-[#123D32]/65
                      ">
                      ¿Hablamos?
                    </span>

                    <span
                      className="
                        mt-3
                        block
                        text-[clamp(1.35rem,2vw,2rem)]
                        font-semibold
                        leading-none
                        tracking-[-0.035em]
                        text-white
                        transition-colors
                        duration-300

                        group-hover:text-[#123D32]
                      ">
                      Iniciar una conversación
                    </span>

                    <span
                      className="
                        mt-3
                        block
                        text-[12px]
                        text-white/50
                        transition-colors
                        duration-300

                        group-hover:text-[#123D32]/60
                      ">
                      Cuéntanos sobre tu proyecto.
                    </span>
                  </div>

                  {/* CTA ICON */}

                  <span
                    className="
                      relative
                      flex
                      h-[64px]
                      w-[64px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#C8F000]
                      text-[#123D32]
                      shadow-[0_10px_28px_rgba(0,0,0,.10)]
                      transition-all
                      duration-300

                      group-hover:rotate-45
                      group-hover:bg-[#123D32]
                      group-hover:text-[#C8F000]
                    ">
                    <ArrowUpRight size={22} strokeWidth={1.65} />
                  </span>
                </div>
              </motion.a>

              {/* capabilities */}

              <div
                className="
                  mt-7
                  flex
                  items-center
                  gap-4
                ">
                <span className="h-px w-8 bg-[#83B500]/55" />

                <span
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-[#123D32]/30
                  ">
                  Diseño · Tecnología · Construcción · Operación
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
            BOTTOM BAR
        =================================================== */}

        <div
          className="
            relative
            z-30
            flex
            flex-col
            gap-5
            border-t
            border-[#123D32]/[0.07]
            bg-white
            px-6
            py-5

            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:px-8

            lg:px-10
          ">
          <div className="flex items-center gap-4">
            <span
              className="
                flex
                h-8
                w-8
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[#83B500]/20
                text-[#83B500]
              ">
              <Recycle size={13} strokeWidth={1.5} />
            </span>

            <p
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.15em]
                text-[#123D32]/33
              ">
              Del residuo a una solución diseñada, implementada y operada para
              tu proyecto
            </p>
          </div>

          <div
            className="
              flex
              flex-wrap
              items-center
              gap-5
            ">
            <span
              className="
                hidden
                text-[11px]
                font-bold
                uppercase
                tracking-[0.15em]
                text-[#123D32]/25

                sm:block
              ">
              Diseño · Tecnología · Construcción · Operación
            </span>

            <span className="h-px w-10 bg-[#83B500]/45" />

            <span
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.16em]
                text-[#78A500]
              ">
              Hablemos
            </span>

            <ArrowUpRight
              size={14}
              strokeWidth={1.6}
              className="text-[#83B500]"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default ResiduosCTASection;
