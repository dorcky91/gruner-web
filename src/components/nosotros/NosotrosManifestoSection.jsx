// import { motion } from "motion/react";
// import {
//   ArrowUpRight,
//   CircleDot,
//   Leaf,
//   Recycle,
//   Sprout,
//   Zap,
// } from "lucide-react";

// import manifestoImage from "../../assets/images/nosotros/nosotros-manifiesto.jpg";

// /* =========================================================
//    DATA
// ========================================================= */

// const manifestoTags = [
//   {
//     number: "01",
//     label: "Economía baja en carbono",
//     icon: Leaf,
//   },
//   {
//     number: "02",
//     label: "Regeneración de recursos",
//     icon: Recycle,
//   },
//   {
//     number: "03",
//     label: "Electrificación",
//     icon: Zap,
//   },
//   {
//     number: "04",
//     label: "Capital natural",
//     icon: Sprout,
//   },
//   {
//     number: "05",
//     label: "Inclusión social",
//     icon: CircleDot,
//   },
// ];

// /* =========================================================
//    MANIFESTO
// ========================================================= */

// function NosotrosManifestoSection() {
//   return (
//     <section
//       id="nosotros-manifiesto"
//       className="
//         relative
//         overflow-hidden
//         bg-[#F2F5ED]
//         px-5
//         py-24
//         text-[#17392E]

//         sm:px-8
//         lg:px-12
//         lg:py-32
//         xl:px-16
//         2xl:px-20
//       ">
//       {/* =====================================================
//           AMBIENT BACKGROUND
//       ===================================================== */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           inset-0
//           opacity-[0.28]
//           [background-image:linear-gradient(rgba(23,57,46,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(23,57,46,.03)_1px,transparent_1px)]
//           [background-size:78px_78px]
//         "
//       />

//       <div
//         className="
//           pointer-events-none
//           absolute
//           -right-[200px]
//           top-[8%]
//           h-[560px]
//           w-[560px]
//           rounded-full
//           bg-[#B8F23A]/10
//           blur-[130px]
//         "
//       />

//       <div
//         className="
//           pointer-events-none
//           absolute
//           -left-[200px]
//           bottom-[0%]
//           h-[440px]
//           w-[440px]
//           rounded-full
//           bg-[#17392E]/[0.035]
//           blur-[120px]
//         "
//       />

//       {/* =====================================================
//           WRAPPER
//       ===================================================== */}

//       <div
//         className="
//           relative
//           z-10
//           mx-auto
//           max-w-[1760px]
//         ">
//         {/* ===================================================
//             INTRO LINE
//         =================================================== */}

//         <motion.div
//           initial={{ opacity: 0, y: 18 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.5 }}
//           transition={{
//             duration: 0.7,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="
//             flex
//             flex-col
//             gap-5
//             border-b
//             border-[#17392E]/10
//             pb-6

//             sm:flex-row
//             sm:items-center
//             sm:justify-between
//           ">
//           <div className="flex items-center gap-4">
//             <span className="h-px w-10 bg-[#7FA51C]" />

//             <p
//               className="
//                 text-[12px]
//                 font-semibold
//                 uppercase
//                 tracking-[0.18em]
//                 text-[#6C901A]
//               ">
//               Nuestra visión
//             </p>
//           </div>

//           <p
//             className="
//               text-[11px]
//               uppercase
//               tracking-[0.15em]
//               text-[#6B8177]
//             ">
//             Ambiental · Energético · Operativo · Social
//           </p>
//         </motion.div>

//         {/* ===================================================
//             MAIN MANIFESTO
//         =================================================== */}

//         <div
//           className="
//             mt-10
//             grid
//             gap-12

//             lg:grid-cols-[.92fr_1.08fr]
//             lg:items-stretch
//             lg:gap-14

//             xl:gap-20
//           ">
//           {/* =================================================
//               LEFT / STATEMENT
//           ================================================= */}

//           <motion.div
//             initial={{ opacity: 0, y: 34 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, amount: 0.3 }}
//             transition={{
//               duration: 0.9,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="
//               flex
//               min-h-[620px]
//               flex-col
//               justify-between

//               lg:min-h-[760px]
//             ">
//             <div>
//               <p
//                 className="
//                   max-w-[900px]
//                   text-[clamp(4rem,7.5vw,10rem)]
//                   font-normal
//                   leading-[0.82]
//                   tracking-[-0.085em]
//                   text-[#17392E]
//                 ">
//                 La sostenibilidad
//                 <span className="block">del planeta</span>
//                 <span className="block text-[#7FA51C]">no es negociable.</span>
//               </p>
//             </div>

//             <div
//               className="
//                 grid
//                 gap-7
//                 border-t
//                 border-[#17392E]/10
//                 pt-7

//                 sm:grid-cols-2
//               ">
//               <p
//                 className="
//                   max-w-[440px]
//                   text-[15px]
//                   leading-7
//                   text-[#61786E]

//                   sm:text-[16px]
//                   sm:leading-8
//                 ">
//                 Trabajamos para avanzar hacia una economía baja en carbono,
//                 regenerativa y eficiente en el uso de recursos.
//               </p>

//               <p
//                 className="
//                   max-w-[440px]
//                   text-[15px]
//                   leading-7
//                   text-[#61786E]

//                   sm:text-[16px]
//                   sm:leading-8
//                 ">
//                 Conectamos electrificación, mitigación de emisiones,
//                 conservación del capital natural e inclusión social.
//               </p>
//             </div>
//           </motion.div>

//           {/* =================================================
//               RIGHT / IMAGE COMPOSITION
//           ================================================= */}

//           <motion.div
//             initial={{ opacity: 0, x: 32 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.25 }}
//             transition={{
//               duration: 1,
//               delay: 0.08,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="
//               relative
//               min-h-[640px]
//               overflow-hidden
//               rounded-[34px]
//               bg-[#17392E]
//               shadow-[0_34px_90px_rgba(23,57,46,.16)]

//               lg:min-h-[760px]
//               xl:rounded-[40px]
//             ">
//             {/* IMAGE */}

//             <img
//               src={manifestoImage}
//               alt="Paisaje e infraestructura como expresión de una transición sostenible"
//               className="
//                 absolute
//                 inset-0
//                 h-full
//                 w-full
//                 object-cover
//                 object-center
//               "
//             />

//             <div
//               className="
//                 absolute
//                 inset-0
//                 bg-[linear-gradient(180deg,rgba(12,42,34,.10)_0%,rgba(12,42,34,.15)_38%,rgba(12,42,34,.84)_100%)]
//               "
//             />

//             <div
//               className="
//                 absolute
//                 inset-0
//                 bg-[linear-gradient(90deg,rgba(12,42,34,.20)_0%,rgba(12,42,34,.06)_55%,rgba(12,42,34,.20)_100%)]
//               "
//             />

//             {/* MICRO GRID */}

//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 inset-0
//                 opacity-[0.12]
//                 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)]
//                 [background-size:54px_54px]
//               "
//             />

//             {/* TOP LABEL */}

//             <div
//               className="
//                 absolute
//                 left-6
//                 right-6
//                 top-6
//                 flex
//                 items-center
//                 justify-between
//                 gap-5

//                 sm:left-8
//                 sm:right-8
//                 sm:top-8
//               ">
//               <div className="flex items-center gap-3">
//                 <span
//                   className="
//                     h-2
//                     w-2
//                     rounded-full
//                     bg-[#B8F23A]
//                     shadow-[0_0_14px_rgba(184,242,58,.65)]
//                   "
//                 />

//                 <span
//                   className="
//                     text-[11px]
//                     font-semibold
//                     uppercase
//                     tracking-[0.17em]
//                     text-[#B8F23A]
//                   ">
//                   GRUNER / Vision
//                 </span>
//               </div>

//               <span
//                 className="
//                   text-[11px]
//                   uppercase
//                   tracking-[0.15em]
//                   text-white/40
//                 ">
//                 360°
//               </span>
//             </div>

//             {/* TAGS */}

//             <div
//               className="
//                 absolute
//                 left-5
//                 right-5
//                 top-[20%]
//                 grid
//                 gap-3

//                 sm:left-8
//                 sm:right-8
//                 sm:grid-cols-2

//                 xl:left-10
//                 xl:right-10
//               ">
//               {manifestoTags.map((item, index) => {
//                 const Icon = item.icon;

//                 return (
//                   <motion.div
//                     key={item.number}
//                     initial={{ opacity: 0, y: 18 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{
//                       duration: 0.65,
//                       delay: 0.15 + index * 0.07,
//                     }}
//                     className={[
//                       `
//                         flex
//                         items-center
//                         gap-3
//                         rounded-[15px]
//                         border
//                         border-white/10
//                         bg-[#0D3028]/58
//                         px-4
//                         py-3
//                         backdrop-blur-xl
//                       `,
//                       index === manifestoTags.length - 1
//                         ? "sm:col-span-2 sm:max-w-[48%]"
//                         : "",
//                     ].join(" ")}>
//                     <span
//                       className="
//                         flex
//                         h-9
//                         w-9
//                         shrink-0
//                         items-center
//                         justify-center
//                         rounded-[10px]
//                         bg-[#B8F23A]/10
//                         text-[#B8F23A]
//                       ">
//                       <Icon size={16} strokeWidth={1.5} />
//                     </span>

//                     <div>
//                       <span
//                         className="
//                           text-[10px]
//                           font-semibold
//                           tracking-[0.14em]
//                           text-[#B8F23A]
//                         ">
//                         {item.number}
//                       </span>

//                       <p
//                         className="
//                           mt-0.5
//                           text-[13px]
//                           font-medium
//                           text-white/90
//                         ">
//                         {item.label}
//                       </p>
//                     </div>
//                   </motion.div>
//                 );
//               })}
//             </div>

//             {/* BOTTOM MESSAGE */}

//             <div
//               className="
//                 absolute
//                 bottom-0
//                 left-0
//                 right-0
//                 border-t
//                 border-white/10
//                 bg-[#0C3028]/78
//                 px-6
//                 py-6
//                 backdrop-blur-xl

//                 sm:px-8
//                 sm:py-7
//               ">
//               <p
//                 className="
//                   max-w-[720px]
//                   text-[clamp(1.8rem,3.2vw,3.6rem)]
//                   font-normal
//                   leading-[1.04]
//                   tracking-[-0.05em]
//                   text-white
//                 ">
//                 Un modelo de desarrollo capaz de regenerar, electrificar y
//                 reducir impactos.
//               </p>

//               <div
//                 className="
//                   mt-6
//                   flex
//                   flex-col
//                   gap-4
//                   border-t
//                   border-white/[0.08]
//                   pt-5

//                   sm:flex-row
//                   sm:items-center
//                   sm:justify-between
//                 ">
//                 <p
//                   className="
//                     text-[11px]
//                     uppercase
//                     tracking-[0.15em]
//                     text-white/35
//                   ">
//                   Regeneración · Electrificación · Descarbonización
//                 </p>

//                 <a
//                   href="#nosotros-pilares"
//                   className="
//                     group
//                     inline-flex
//                     items-center
//                     gap-2
//                     text-[12px]
//                     font-medium
//                     text-[#B8F23A]
//                   ">
//                   Cómo trabajamos
//                   <ArrowUpRight
//                     size={15}
//                     strokeWidth={1.6}
//                     className="
//                       transition-transform
//                       duration-300

//                       group-hover:-translate-y-0.5
//                       group-hover:translate-x-0.5
//                     "
//                   />
//                 </a>
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* =====================================================
//             CLOSING STATEMENT
//         ===================================================== */}

//         <motion.div
//           initial={{ opacity: 0, y: 22 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{
//             duration: 0.75,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="
//             mt-16
//             grid
//             gap-5
//             border-t
//             border-[#17392E]/10
//             pt-7

//             md:grid-cols-[.3fr_1.7fr]
//             md:items-start

//             lg:mt-20
//           ">
//           <p
//             className="
//               text-[11px]
//               font-semibold
//               uppercase
//               tracking-[0.17em]
//               text-[#7FA51C]
//             ">
//             Nuestro compromiso
//           </p>

//           <p
//             className="
//               max-w-[1120px]
//               text-[clamp(1.7rem,3vw,3.3rem)]
//               font-normal
//               leading-[1.18]
//               tracking-[-0.045em]
//               text-[#284D40]
//             ">
//             Diseñamos soluciones que buscan generar valor ambiental, social y
//             operativo sin perder de vista la viabilidad de cada proyecto.
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default NosotrosManifestoSection;

import { motion } from "motion/react";
import { ArrowDownRight } from "lucide-react";

import manifestoImage from "../../assets/images/nosotros/nosotros-manifiesto.jpg";

/* =========================================================
   DATA
========================================================= */

const manifestoTags = [
  "Economía baja en carbono",
  "Regeneración de recursos",
  "Electrificación",
  "Mitigación de emisiones",
  "Capital natural",
  "Inclusión social",
];

/* =========================================================
   MANIFESTO
========================================================= */

function NosotrosManifestoSection() {
  return (
    <section
      id="nosotros-manifiesto"
      className="
        relative
        overflow-hidden
        bg-[#F2F5ED]
        px-5
        py-24
        text-[#17392E]

        sm:px-8
        lg:px-12
        lg:py-32
        xl:px-16
        2xl:px-20
      ">
      {/* =====================================================
          AMBIENT BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.28]
          [background-image:linear-gradient(rgba(23,57,46,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(23,57,46,.03)_1px,transparent_1px)]
          [background-size:78px_78px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[200px]
          top-[8%]
          h-[560px]
          w-[560px]
          rounded-full
          bg-[#B8F23A]/10
          blur-[130px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-[200px]
          bottom-[0%]
          h-[440px]
          w-[440px]
          rounded-full
          bg-[#17392E]/[0.035]
          blur-[120px]
        "
      />

      {/* =====================================================
          WRAPPER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1760px]
        ">
        {/* ===================================================
            INTRO LINE
        =================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            flex
            flex-col
            gap-5
            border-b
            border-[#17392E]/10
            pb-6

            sm:flex-row
            sm:items-center
            sm:justify-between
          ">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[#7FA51C]" />

            <p
              className="
                text-[12px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#6C901A]
              ">
              Nuestra visión
            </p>
          </div>

          <p
            className="
              text-[11px]
              uppercase
              tracking-[0.15em]
              text-[#6B8177]
            ">
            Ambiental · Energético · Operativo · Social
          </p>
        </motion.div>

        {/* ===================================================
            MAIN MANIFESTO
        =================================================== */}

        <div
          className="
            mt-10
            grid
            gap-12

            lg:grid-cols-[.92fr_1.08fr]
            lg:items-stretch
            lg:gap-14

            xl:gap-20
          ">
          {/* =================================================
              LEFT / STATEMENT
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              flex
              min-h-[620px]
              flex-col
              justify-between

              lg:min-h-[760px]
            ">
            <div>
              <p
                className="
                  max-w-[900px]
                  text-[clamp(4rem,7.1vw,9.4rem)]
                  font-normal
                  leading-[0.82]
                  tracking-[-0.085em]
                  text-[#17392E]
                ">
                La sostenibilidad
                <span className="block">del planeta</span>
                <span className="block text-[#7FA51C]">no es negociable.</span>
              </p>
            </div>

            <div
              className="
                grid
                gap-7
                border-t
                border-[#17392E]/10
                pt-7

                sm:grid-cols-2
              ">
              <p
                className="
                  max-w-[440px]
                  text-[15px]
                  leading-7
                  text-[#61786E]

                  sm:text-[16px]
                  sm:leading-8
                ">
                Trabajamos para avanzar hacia una economía baja en carbono,
                regenerativa y eficiente en el uso de recursos.
              </p>

              <p
                className="
                  max-w-[440px]
                  text-[15px]
                  leading-7
                  text-[#61786E]

                  sm:text-[16px]
                  sm:leading-8
                ">
                Conectamos electrificación, mitigación de emisiones,
                conservación del capital natural e inclusión social.
              </p>
            </div>
          </motion.div>

          {/* =================================================
              RIGHT / IMAGE COMPOSITION
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 1,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              min-h-[640px]
              overflow-hidden
              rounded-[24px]
              bg-[#17392E]
              shadow-[0_28px_80px_rgba(23,57,46,.11)]

              lg:min-h-[760px]
              xl:rounded-[28px]
            ">
            {/* IMAGE */}

            <img
              src={manifestoImage}
              alt="Paisaje e infraestructura como expresión de una transición sostenible"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                object-center
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-[linear-gradient(180deg,rgba(12,42,34,.10)_0%,rgba(12,42,34,.15)_38%,rgba(12,42,34,.84)_100%)]
              "
            />

            <div
              className="
                absolute
                inset-0
                bg-[linear-gradient(90deg,rgba(12,42,34,.20)_0%,rgba(12,42,34,.06)_55%,rgba(12,42,34,.20)_100%)]
              "
            />

            {/* MICRO GRID */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                opacity-[0.12]
                [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)]
                [background-size:54px_54px]
              "
            />

            {/* TOP LABEL */}

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
                <span
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-[#B8F23A]
                    shadow-[0_0_14px_rgba(184,242,58,.65)]
                  "
                />

                <span
                  className="
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.17em]
                    text-[#B8F23A]
                  ">
                  GRUNER / Vision
                </span>
              </div>
            </div>

            {/* EDITORIAL THEMES */}

            <div
              className="
                absolute
                left-6
                right-6
                top-[18%]
                flex
                max-w-[720px]
                flex-wrap
                gap-2.5

                sm:left-8
                sm:right-8
                xl:left-10
                xl:right-10
              ">
              {manifestoTags.map((item, index) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: 0.12 + index * 0.06,
                  }}
                  className="
                    rounded-full
                    border
                    border-white/14
                    bg-[#0D3028]/38
                    px-4
                    py-2.5
                    text-[11px]
                    font-medium
                    tracking-[0.04em]
                    text-white/78
                    backdrop-blur-lg
                  ">
                  {item}
                </motion.span>
              ))}
            </div>

            {/* BOTTOM MESSAGE */}

            <div
              className="
                absolute
                bottom-0
                left-0
                right-0
                border-t
                border-white/10
                bg-[#0C3028]/78
                px-6
                py-6
                backdrop-blur-xl

                sm:px-8
                sm:py-7
              ">
              <p
                className="
                  max-w-[720px]
                  text-[clamp(1.8rem,3.2vw,3.6rem)]
                  font-normal
                  leading-[1.04]
                  tracking-[-0.05em]
                  text-white
                ">
                Un modelo de desarrollo capaz de regenerar, electrificar y
                reducir impactos.
              </p>

              <div
                className="
                  mt-6
                  flex
                  flex-col
                  gap-4
                  border-t
                  border-white/[0.08]
                  pt-5

                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                ">
                <p
                  className="
                    text-[11px]
                    uppercase
                    tracking-[0.15em]
                    text-white/35
                  ">
                  Regeneración · Electrificación · Descarbonización
                </p>

                <a
                  href="#nosotros-pilares"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    text-[12px]
                    font-medium
                    text-[#B8F23A]
                  ">
                  Cómo trabajamos
                  <ArrowDownRight
                    size={15}
                    strokeWidth={1.6}
                    className="
                      transition-transform
                      duration-300

                      group-hover:translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            CLOSING STATEMENT
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-16
            grid
            gap-5
            border-t
            border-[#17392E]/10
            pt-7

            md:grid-cols-[.3fr_1.7fr]
            md:items-start

            lg:mt-20
          ">
          <p
            className="
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.17em]
              text-[#7FA51C]
            ">
            Nuestro compromiso
          </p>

          <p
            className="
              max-w-[1120px]
              text-[clamp(1.7rem,3vw,3.3rem)]
              font-normal
              leading-[1.18]
              tracking-[-0.045em]
              text-[#284D40]
            ">
            Diseñamos soluciones que buscan generar valor ambiental, social y
            operativo sin perder de vista la viabilidad de cada proyecto.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default NosotrosManifestoSection;
