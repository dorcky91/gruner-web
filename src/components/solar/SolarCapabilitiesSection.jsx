// import { motion } from "motion/react";
// import { ArrowUpRight, BatteryCharging, Gauge, SolarPanel } from "lucide-react";

// const capabilities = [
//   {
//     number: "01",
//     code: "SOLAR",
//     title: "Generación fotovoltaica",
//     description:
//       "Diseñamos sistemas para transformar el recurso solar en energía limpia, competitiva y útil para cada operación.",
//     icon: SolarPanel,
//     featured: true,
//   },
//   {
//     number: "02",
//     code: "BESS",
//     title: "Almacenamiento energético",
//     description:
//       "Integramos almacenamiento para gestionar mejor la energía, reducir picos y aumentar la resiliencia operativa.",
//     icon: BatteryCharging,
//   },
//   {
//     number: "03",
//     code: "EMS",
//     title: "Gestión inteligente",
//     description:
//       "Conectamos generación, almacenamiento y consumo para optimizar el desempeño energético como un solo sistema.",
//     icon: Gauge,
//   },
// ];

// function SolarCapabilitiesSection() {
//   return (
//     <section
//       id="solar-capabilities"
//       className="
//         relative
//         overflow-hidden
//         bg-[#F7F9F3]
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
//           -right-[8%]
//           -top-[220px]
//           h-[520px]
//           w-[520px]
//           rounded-full
//           bg-[#9DD827]/10
//           blur-[110px]
//         "
//       />

//       <div
//         className="
//           pointer-events-none
//           absolute
//           -bottom-[280px]
//           left-[20%]
//           h-[500px]
//           w-[500px]
//           rounded-full
//           bg-[#7FB500]/[0.07]
//           blur-[120px]
//         "
//       />

//       <div
//         className="
//           pointer-events-none
//           absolute
//           left-0
//           top-0
//           h-px
//           w-full
//           bg-gradient-to-r
//           from-transparent
//           via-[#143E33]/10
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
//           initial={{ opacity: 0, y: 22 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.3 }}
//           transition={{
//             duration: 0.7,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="
//             mb-10
//             grid
//             gap-7
//             lg:grid-cols-[1fr_430px]
//             lg:items-end
//           ">
//           {/* LEFT */}

//           <div>
//             <div className="flex items-center gap-4">
//               <span className="h-px w-10 bg-[#8FC600]" />

//               <span
//                 className="
//                   text-[9px]
//                   font-bold
//                   uppercase
//                   tracking-[0.22em]
//                   text-[#75A300]
//                 ">
//                 Solar · BESS · EMS
//               </span>
//             </div>

//             <h2
//               className="
//                 mt-5
//                 max-w-[900px]
//                 text-[clamp(2.5rem,4vw,4.6rem)]
//                 font-normal
//                 leading-[0.94]
//                 tracking-[-0.055em]
//               ">
//               Energía diseñada para
//               <span className="block text-[#82B500]">
//                 trabajar en conjunto.
//               </span>
//             </h2>
//           </div>

//           {/* RIGHT */}

//           <div className="lg:pb-1">
//             <div
//               className="
//                 mb-4
//                 flex
//                 items-center
//                 gap-3
//               ">
//               <span
//                 className="
//                   flex
//                   h-7
//                   w-7
//                   items-center
//                   justify-center
//                   rounded-full
//                   bg-[#9DD827]
//                 ">
//                 <span className="h-1.5 w-1.5 rounded-full bg-[#143E33]" />
//               </span>

//               <span
//                 className="
//                   text-[8px]
//                   font-bold
//                   uppercase
//                   tracking-[0.18em]
//                   text-[#143E33]/40
//                 ">
//                 Ecosistema energético
//               </span>
//             </div>

//             <p
//               className="
//                 max-w-[420px]
//                 text-[12px]
//                 leading-6
//                 text-[#143E33]/50
//               ">
//               Generación, almacenamiento y gestión conectados para crear una
//               infraestructura energética más eficiente, resiliente e
//               inteligente.
//             </p>
//           </div>
//         </motion.div>

//         {/* ===================================================
//             CARDS
//         =================================================== */}

//         <div
//           className="
//             grid
//             gap-4
//             md:grid-cols-3
//             lg:gap-5
//           ">
//           {capabilities.map((item, index) => {
//             const Icon = item.icon;

//             const featured = item.featured;

//             return (
//               <motion.article
//                 key={item.number}
//                 initial={{ opacity: 0, y: 24 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.25 }}
//                 transition={{
//                   duration: 0.65,
//                   delay: index * 0.07,
//                   ease: [0.22, 1, 0.36, 1],
//                 }}
//                 className={`
//                   group
//                   relative
//                   overflow-hidden
//                   rounded-[16px]
//                   border
//                   p-6
//                   transition-all
//                   duration-500

//                   lg:p-7

//                   ${
//                     featured
//                       ? `
//                         border-[#143E33]
//                         bg-[#143E33]
//                         text-white
//                         shadow-[0_20px_50px_rgba(20,62,51,.13)]
//                       `
//                       : `
//                         border-[#143E33]/[0.08]
//                         bg-white
//                         text-[#143E33]
//                         shadow-[0_8px_28px_rgba(20,62,51,.035)]

//                         hover:-translate-y-1
//                         hover:border-[#9DD827]/60
//                         hover:shadow-[0_20px_45px_rgba(20,62,51,.08)]
//                       `
//                   }
//                 `}>
//                 {/* ===========================================
//                     GREEN GLOW
//                 =========================================== */}

//                 <div
//                   className={`
//                     pointer-events-none
//                     absolute
//                     right-[-80px]
//                     top-[-100px]
//                     h-[240px]
//                     w-[240px]
//                     rounded-full
//                     blur-[70px]
//                     transition-opacity
//                     duration-500

//                     ${
//                       featured
//                         ? "bg-[#9DD827]/20"
//                         : "bg-[#9DD827]/0 group-hover:bg-[#9DD827]/10"
//                     }
//                   `}
//                 />

//                 {/* ===========================================
//                     GIANT NUMBER
//                 =========================================== */}

//                 <span
//                   className={`
//                     pointer-events-none
//                     absolute
//                     right-4
//                     top-1
//                     select-none
//                     text-[88px]
//                     font-light
//                     leading-none
//                     tracking-[-0.09em]
//                     transition-all
//                     duration-500

//                     lg:text-[105px]

//                     ${
//                       featured
//                         ? "text-[#B6ED35]/20"
//                         : "text-[#7FB500]/[0.09] group-hover:text-[#7FB500]/[0.16]"
//                     }
//                   `}>
//                   {item.number}
//                 </span>

//                 {/* ===========================================
//                     TOP
//                 =========================================== */}

//                 <div
//                   className="
//                     relative
//                     z-10
//                     flex
//                     items-start
//                     justify-between
//                   ">
//                   <div
//                     className={`
//                       flex
//                       h-11
//                       w-11
//                       items-center
//                       justify-center
//                       rounded-[11px]
//                       transition-all
//                       duration-300

//                       ${
//                         featured
//                           ? "bg-[#9DD827] text-[#143E33]"
//                           : "bg-[#EDF5DF] text-[#79AA00] group-hover:bg-[#9DD827] group-hover:text-[#143E33]"
//                       }
//                     `}>
//                     <Icon size={18} strokeWidth={1.6} />
//                   </div>

//                   <div
//                     className={`
//                       flex
//                       h-8
//                       w-8
//                       items-center
//                       justify-center
//                       rounded-full
//                       border
//                       transition-all
//                       duration-300

//                       ${
//                         featured
//                           ? "border-white/15 text-[#B6ED35]"
//                           : "border-[#143E33]/10 text-[#7FAE00] group-hover:border-[#9DD827] group-hover:bg-[#9DD827] group-hover:text-[#143E33]"
//                       }
//                     `}>
//                     <ArrowUpRight
//                       size={13}
//                       strokeWidth={1.6}
//                       className="
//                         transition-transform
//                         duration-300
//                         group-hover:-translate-y-0.5
//                         group-hover:translate-x-0.5
//                       "
//                     />
//                   </div>
//                 </div>

//                 {/* ===========================================
//                     CONTENT
//                 =========================================== */}

//                 <div className="relative z-10 mt-14">
//                   {/* CODE */}

//                   <div className="flex items-center gap-3">
//                     <span
//                       className={`
//                         text-[8px]
//                         font-bold
//                         tracking-[0.16em]

//                         ${featured ? "text-white/35" : "text-[#143E33]/30"}
//                       `}>
//                       {item.number}
//                     </span>

//                     <span
//                       className="
//                         h-px
//                         w-7
//                         bg-[#9DD827]
//                         transition-all
//                         duration-500
//                         group-hover:w-11
//                       "
//                     />

//                     <span
//                       className={`
//                         text-[8px]
//                         font-bold
//                         uppercase
//                         tracking-[0.19em]

//                         ${featured ? "text-[#B6ED35]" : "text-[#78A600]"}
//                       `}>
//                       {item.code}
//                     </span>
//                   </div>

//                   {/* TITLE */}

//                   <h3
//                     className={`
//                       mt-4
//                       max-w-[330px]
//                       text-[clamp(1.35rem,1.7vw,1.85rem)]
//                       font-medium
//                       leading-[1.05]
//                       tracking-[-0.035em]

//                       ${featured ? "text-white" : "text-[#143E33]"}
//                     `}>
//                     {item.title}
//                   </h3>

//                   {/* DESCRIPTION */}

//                   <p
//                     className={`
//                       mt-4
//                       max-w-[390px]
//                       text-[10px]
//                       leading-[1.7]

//                       ${featured ? "text-white/52" : "text-[#143E33]/48"}
//                     `}>
//                     {item.description}
//                   </p>

//                   {/* BOTTOM */}

//                   <div
//                     className={`
//                       mt-6
//                       flex
//                       items-center
//                       justify-between
//                       border-t
//                       pt-4

//                       ${
//                         featured ? "border-white/10" : "border-[#143E33]/[0.07]"
//                       }
//                     `}>
//                     <span
//                       className={`
//                         text-[7px]
//                         font-bold
//                         uppercase
//                         tracking-[0.17em]

//                         ${featured ? "text-[#B6ED35]" : "text-[#78A600]"}
//                       `}>
//                       GRUNER Energy
//                     </span>

//                     <span
//                       className={`
//                         h-[2px]
//                         w-8
//                         transition-all
//                         duration-500
//                         group-hover:w-16

//                         ${featured ? "bg-[#B6ED35]" : "bg-[#9DD827]"}
//                       `}
//                     />
//                   </div>
//                 </div>
//               </motion.article>
//             );
//           })}
//         </div>

//         {/* ===================================================
//             BOTTOM
//         =================================================== */}

//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.7, delay: 0.15 }}
//           className="
//             mt-8
//             flex
//             flex-col
//             gap-5
//             border-t
//             border-[#143E33]/[0.08]
//             pt-6

//             sm:flex-row
//             sm:items-center
//             sm:justify-between
//           ">
//           <div className="flex items-center gap-3">
//             <span className="h-2 w-2 rounded-full bg-[#9DD827]" />

//             <p
//               className="
//                 text-[8px]
//                 font-semibold
//                 uppercase
//                 tracking-[0.17em]
//                 text-[#143E33]/40
//               ">
//               Una arquitectura energética conectada
//             </p>
//           </div>

//           <p
//             className="
//               text-[8px]
//               font-bold
//               uppercase
//               tracking-[0.18em]
//               text-[#78A600]
//             ">
//             Generar · Almacenar · Optimizar
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default SolarCapabilitiesSection;

import { motion } from "motion/react";
import { ArrowUpRight, BatteryCharging, Gauge, SolarPanel } from "lucide-react";

const capabilities = [
  {
    number: "01",
    code: "SOLAR",
    title: "Generación fotovoltaica",
    description:
      "Desarrollamos proyectos fotovoltaicos con ingeniería, suministro e instalación, desde la definición técnica hasta la integración del sistema en operaciones industriales y comerciales.",
    icon: SolarPanel,
    featured: true,
  },
  {
    number: "02",
    code: "BESS",
    title: "Almacenamiento energético",
    description:
      "Integramos almacenamiento BESS y soluciones híbridas o aisladas para gestionar energía, reducir picos, aumentar resiliencia y adaptar el sistema a cada operación.",
    icon: BatteryCharging,
  },
  {
    number: "03",
    code: "EMS",
    title: "Gestión inteligente",
    description:
      "Conectamos generación, almacenamiento y consumo mediante gestión inteligente para optimizar el desempeño energético, el control y la operación del sistema.",
    icon: Gauge,
  },
];

function SolarCapabilitiesSection() {
  return (
    <section
      id="solar-capabilities"
      className="
        relative
        overflow-hidden
        bg-[#F7F9F3]
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
          -right-[8%]
          -top-[220px]
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#9DD827]/10
          blur-[110px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-[280px]
          left-[20%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#7FB500]/[0.07]
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          left-0
          top-0
          h-px
          w-full
          bg-gradient-to-r
          from-transparent
          via-[#143E33]/10
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
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mb-10
            grid
            gap-7
            lg:grid-cols-[1fr_430px]
            lg:items-end
          ">
          {/* LEFT */}

          <div>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#8FC600]" />

              <span
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-[#75A300]
                ">
                Solar · BESS · EMS
              </span>
            </div>

            <h2
              className="
                mt-5
                max-w-[900px]
                text-[clamp(2.5rem,4vw,4.6rem)]
                font-normal
                leading-[0.94]
                tracking-[-0.055em]
              ">
              Energía diseñada para
              <span className="block text-[#82B500]">
                trabajar en conjunto.
              </span>
            </h2>
          </div>

          {/* RIGHT */}

          <div className="lg:pb-1">
            <div
              className="
                mb-4
                flex
                items-center
                gap-3
              ">
              <span
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  bg-[#9DD827]
                ">
                <span className="h-1.5 w-1.5 rounded-full bg-[#143E33]" />
              </span>

              <span
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#143E33]/40
                ">
                Ecosistema energético
              </span>
            </div>

            <p
              className="
                max-w-[420px]
                text-[12px]
                leading-6
                text-[#143E33]/50
              ">
              Generación, almacenamiento y gestión conectados para crear una
              infraestructura energética más eficiente, resiliente e
              inteligente.
            </p>
          </div>
        </motion.div>

        {/* ===================================================
            CARDS
        =================================================== */}

        <div
          className="
            grid
            gap-4
            md:grid-cols-3
            lg:gap-5
          ">
          {capabilities.map((item, index) => {
            const Icon = item.icon;

            const featured = item.featured;

            return (
              <motion.article
                key={item.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-[16px]
                  border
                  p-6
                  transition-all
                  duration-500

                  lg:p-7

                  ${
                    featured
                      ? `
                        border-[#143E33]
                        bg-[#143E33]
                        text-white
                        shadow-[0_20px_50px_rgba(20,62,51,.13)]
                      `
                      : `
                        border-[#143E33]/[0.08]
                        bg-white
                        text-[#143E33]
                        shadow-[0_8px_28px_rgba(20,62,51,.035)]

                        hover:-translate-y-1
                        hover:border-[#9DD827]/60
                        hover:shadow-[0_20px_45px_rgba(20,62,51,.08)]
                      `
                  }
                `}>
                {/* ===========================================
                    GREEN GLOW
                =========================================== */}

                <div
                  className={`
                    pointer-events-none
                    absolute
                    right-[-80px]
                    top-[-100px]
                    h-[240px]
                    w-[240px]
                    rounded-full
                    blur-[70px]
                    transition-opacity
                    duration-500

                    ${
                      featured
                        ? "bg-[#9DD827]/20"
                        : "bg-[#9DD827]/0 group-hover:bg-[#9DD827]/10"
                    }
                  `}
                />

                {/* ===========================================
                    GIANT NUMBER
                =========================================== */}

                <span
                  className={`
                    pointer-events-none
                    absolute
                    right-4
                    top-1
                    select-none
                    text-[88px]
                    font-light
                    leading-none
                    tracking-[-0.09em]
                    transition-all
                    duration-500

                    lg:text-[105px]

                    ${
                      featured
                        ? "text-[#B6ED35]/20"
                        : "text-[#7FB500]/[0.09] group-hover:text-[#7FB500]/[0.16]"
                    }
                  `}>
                  {item.number}
                </span>

                {/* ===========================================
                    TOP
                =========================================== */}

                <div
                  className="
                    relative
                    z-10
                    flex
                    items-start
                    justify-between
                  ">
                  <div
                    className={`
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-[11px]
                      transition-all
                      duration-300

                      ${
                        featured
                          ? "bg-[#9DD827] text-[#143E33]"
                          : "bg-[#EDF5DF] text-[#79AA00] group-hover:bg-[#9DD827] group-hover:text-[#143E33]"
                      }
                    `}>
                    <Icon size={18} strokeWidth={1.6} />
                  </div>

                  <div
                    className={`
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      border
                      transition-all
                      duration-300

                      ${
                        featured
                          ? "border-white/15 text-[#B6ED35]"
                          : "border-[#143E33]/10 text-[#7FAE00] group-hover:border-[#9DD827] group-hover:bg-[#9DD827] group-hover:text-[#143E33]"
                      }
                    `}>
                    <ArrowUpRight
                      size={13}
                      strokeWidth={1.6}
                      className="
                        transition-transform
                        duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                      "
                    />
                  </div>
                </div>

                {/* ===========================================
                    CONTENT
                =========================================== */}

                <div className="relative z-10 mt-14">
                  {/* CODE */}

                  <div className="flex items-center gap-3">
                    <span
                      className={`
                        text-[11px]
                        font-bold
                        tracking-[0.16em]

                        ${featured ? "text-white/35" : "text-[#143E33]/30"}
                      `}>
                      {item.number}
                    </span>

                    <span
                      className="
                        h-px
                        w-7
                        bg-[#9DD827]
                        transition-all
                        duration-500
                        group-hover:w-11
                      "
                    />

                    <span
                      className={`
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.19em]

                        ${featured ? "text-[#B6ED35]" : "text-[#78A600]"}
                      `}>
                      {item.code}
                    </span>
                  </div>

                  {/* TITLE */}

                  <h3
                    className={`
                      mt-4
                      max-w-[330px]
                      text-[clamp(1.35rem,1.7vw,1.85rem)]
                      font-medium
                      leading-[1.05]
                      tracking-[-0.035em]

                      ${featured ? "text-white" : "text-[#143E33]"}
                    `}>
                    {item.title}
                  </h3>

                  {/* DESCRIPTION */}

                  <p
                    className={`
                      mt-4
                      max-w-[390px]
                      text-[12px]
                      leading-[1.7]

                      ${featured ? "text-white/52" : "text-[#143E33]/48"}
                    `}>
                    {item.description}
                  </p>

                  {/* BOTTOM */}

                  <div
                    className={`
                      mt-6
                      flex
                      items-center
                      justify-between
                      border-t
                      pt-4

                      ${
                        featured ? "border-white/10" : "border-[#143E33]/[0.07]"
                      }
                    `}>
                    <span
                      className={`
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.17em]

                        ${featured ? "text-[#B6ED35]" : "text-[#78A600]"}
                      `}>
                      GRUNER Energy
                    </span>

                    <span
                      className={`
                        h-[2px]
                        w-8
                        transition-all
                        duration-500
                        group-hover:w-16

                        ${featured ? "bg-[#B6ED35]" : "bg-[#9DD827]"}
                      `}
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* ===================================================
            BOTTOM
        =================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="
            mt-8
            flex
            flex-col
            gap-5
            border-t
            border-[#143E33]/[0.08]
            pt-6

            sm:flex-row
            sm:items-center
            sm:justify-between
          ">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#9DD827]" />

            <p
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.17em]
                text-[#143E33]/40
              ">
              Una arquitectura energética conectada
            </p>
          </div>

          <p
            className="
              text-[11px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-[#78A600]
            ">
            Generar · Almacenar · Optimizar
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default SolarCapabilitiesSection;
