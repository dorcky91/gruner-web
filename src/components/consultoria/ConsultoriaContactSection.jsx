// import { motion } from "motion/react";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   Mail,
//   MessageCircle,
//   Phone,
//   Sparkles,
// } from "lucide-react";

// /* =========================================================
//    DATA
// ========================================================= */

// const contactActions = [
//   {
//     icon: Mail,
//     number: "01",
//     label: "Correo",
//     value: "info@gruner.mx",
//     href: "mailto:info@gruner.mx",
//     helper: "Escríbenos",
//   },
//   {
//     icon: Phone,
//     number: "02",
//     label: "Teléfono",
//     value: "+52 33 3330 7267",
//     href: "tel:+523333307267",
//     helper: "Llámanos",
//   },
//   {
//     icon: MessageCircle,
//     number: "03",
//     label: "WhatsApp",
//     value: "+52 55 3013 1106",
//     href: "https://wa.me/525530131106",
//     helper: "Conversemos",
//   },
// ];

// /* =========================================================
//    CONTACT SECTION
// ========================================================= */

// function ConsultoriaContactSection() {
//   return (
//     <section
//       id="contacto"
//       className="
//         relative
//         overflow-hidden
//         bg-white
//         py-16
//         sm:py-20
//         lg:py-24
//         xl:py-28
//       ">
//       {/* =====================================================
//           AMBIENT BACKGROUND
//       ===================================================== */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           -left-[250px]
//           top-[5%]
//           h-[600px]
//           w-[600px]
//           rounded-full
//           bg-[#9DD827]/[0.045]
//           blur-[150px]
//         "
//       />

//       <div
//         className="
//           pointer-events-none
//           -right-[220px]
//           bottom-[-280px]
//           absolute
//           h-[600px]
//           w-[600px]
//           rounded-full
//           bg-[#123F34]/[0.025]
//           blur-[150px]
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
//           px-5
//           sm:px-8
//           lg:px-12
//           xl:px-16
//           2xl:px-20
//         ">
//         {/* ===================================================
//             MAIN COMPOSITION
//         =================================================== */}

//         <div
//           className="
//             relative
//             overflow-hidden
//             rounded-[22px]
//             border
//             border-[#123F34]/[0.07]
//             bg-white
//             shadow-[0_28px_90px_rgba(18,63,52,0.075)]
//           ">
//           {/* TOP ACCENT */}

//           <div className="absolute left-0 top-0 h-[3px] w-full bg-[#123F34]/[0.05]">
//             <div className="h-full w-[22%] bg-[#9DD827]" />
//           </div>

//           {/* DECORATIVE NUMBER */}

//           <span
//             className="
//               pointer-events-none
//               absolute
//               -right-3
//               -top-16
//               hidden
//               select-none
//               text-[250px]
//               font-medium
//               leading-none
//               tracking-[-0.09em]
//               text-[#123F34]/[0.018]
//               xl:block
//             ">
//             04
//           </span>

//           {/* =================================================
//               GRID
//           ================================================= */}

//           <div
//             className="
//               grid
//               lg:grid-cols-[1.12fr_.88fr]
//             ">
//             {/* =================================================
//                 LEFT
//             ================================================= */}

//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.25 }}
//               transition={{
//                 duration: 0.85,
//                 ease: [0.22, 1, 0.36, 1],
//               }}
//               className="
//                 relative
//                 flex
//                 min-h-[680px]
//                 flex-col
//                 justify-between
//                 p-8
//                 sm:p-10
//                 lg:p-12
//                 xl:p-16
//                 2xl:p-20
//               ">
//               {/* =============================
//                   TOP
//               ============================= */}

//               <div>
//                 {/* EYEBROW */}

//                 <div className="flex items-center gap-4">
//                   <span
//                     className="
//                       flex
//                       h-12
//                       w-12
//                       items-center
//                       justify-center
//                       rounded-full
//                       bg-[#9DD827]
//                       text-[#123F34]
//                       shadow-[0_12px_30px_rgba(157,216,39,.18)]
//                     ">
//                     <Sparkles size={18} strokeWidth={1.6} />
//                   </span>

//                   <div>
//                     <p
//                       className="
//                         text-[10px]
//                         font-bold
//                         uppercase
//                         tracking-[0.2em]
//                         text-[#75A600]
//                       ">
//                       Hablemos
//                     </p>

//                     <p
//                       className="
//                         mt-1
//                         text-[9px]
//                         uppercase
//                         tracking-[0.14em]
//                         text-[#123F34]/35
//                       ">
//                       El siguiente paso
//                     </p>
//                   </div>
//                 </div>

//                 {/* TITLE */}

//                 <h2
//                   className="
//                     mt-12
//                     max-w-[900px]
//                     text-[clamp(3.4rem,5.2vw,6.8rem)]
//                     font-normal
//                     leading-[0.88]
//                     tracking-[-0.068em]
//                     text-[#123F34]
//                   ">
//                   Una estrategia
//                   <br />
//                   sostenible
//                   <span className="mt-2 block text-[#86B900]">
//                     empieza con una
//                     <br />
//                     conversación.
//                   </span>
//                 </h2>

//                 {/* COPY */}

//                 <p
//                   className="
//                     mt-9
//                     max-w-[680px]
//                     text-[15px]
//                     leading-7
//                     text-[#123F34]/58
//                     sm:text-[17px]
//                     sm:leading-8
//                   ">
//                   Cuéntanos qué reto estás enfrentando. Nuestro equipo puede
//                   ayudarte a identificar prioridades, oportunidades y el camino
//                   adecuado para avanzar.
//                 </p>
//               </div>

//               {/* =============================
//                   BOTTOM
//               ============================= */}

//               <div className="mt-12">
//                 <div className="flex flex-wrap items-center gap-5">
//                   <a
//                     href="/contacto"
//                     className="
//                       group
//                       inline-flex
//                       min-h-[56px]
//                       items-center
//                       gap-8
//                       rounded-full
//                       bg-[#123F34]
//                       px-7
//                       text-[13px]
//                       font-semibold
//                       text-white!
//                       shadow-[0_14px_32px_rgba(18,63,52,.14)]
//                       transition-all
//                       duration-300
//                       hover:-translate-y-1
//                       hover:bg-[#9DD827]
//                       hover:text-[#123F34]
//                       hover:shadow-[0_18px_38px_rgba(157,216,39,.2)]
//                     ">
//                     Iniciar conversación
//                     <span
//                       className="
//                         flex
//                         h-8
//                         w-8
//                         items-center
//                         justify-center
//                         rounded-full
//                         bg-white/10
//                         transition-all
//                         duration-300
//                         group-hover:bg-[#123F34]/10
//                       ">
//                       <ArrowUpRight
//                         size={15}
//                         strokeWidth={1.6}
//                         className="
//                           transition-transform
//                           duration-300
//                           group-hover:-translate-y-0.5
//                           group-hover:translate-x-0.5
//                         "
//                       />
//                     </span>
//                   </a>

//                   <p
//                     className="
//                       text-[9px]
//                       uppercase
//                       tracking-[0.15em]
//                       text-[#123F34]/35
//                     ">
//                     Sin compromiso · Atención personalizada
//                   </p>
//                 </div>

//                 {/* META */}

//                 <div
//                   className="
//                     mt-10
//                     flex
//                     max-w-[760px]
//                     items-center
//                     gap-4
//                     border-t
//                     border-[#123F34]/[0.08]
//                     pt-6
//                   ">
//                   <span className="h-2 w-2 rounded-full bg-[#9DD827]" />

//                   <span
//                     className="
//                       text-[9px]
//                       uppercase
//                       tracking-[0.15em]
//                       text-[#123F34]/35
//                     ">
//                     Estrategia
//                   </span>

//                   <span className="h-px w-5 bg-[#123F34]/15" />

//                   <span
//                     className="
//                       text-[9px]
//                       uppercase
//                       tracking-[0.15em]
//                       text-[#123F34]/35
//                     ">
//                     Sostenibilidad
//                   </span>

//                   <span className="h-px w-5 bg-[#123F34]/15" />

//                   <span
//                     className="
//                       text-[9px]
//                       uppercase
//                       tracking-[0.15em]
//                       text-[#123F34]/35
//                     ">
//                     Implementación
//                   </span>
//                 </div>
//               </div>
//             </motion.div>

//             {/* =================================================
//                 RIGHT
//             ================================================= */}

//             <motion.div
//               initial={{ opacity: 0, x: 25 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true, amount: 0.2 }}
//               transition={{
//                 duration: 0.85,
//                 delay: 0.08,
//                 ease: [0.22, 1, 0.36, 1],
//               }}
//               className="
//                 relative
//                 border-t
//                 border-[#123F34]/[0.07]
//                 bg-[#F7FAF2]
//                 p-8
//                 sm:p-10
//                 lg:border-l
//                 lg:border-t-0
//                 lg:p-12
//                 xl:p-14
//                 2xl:p-16
//               ">
//               {/* GREEN CORNER GLOW */}

//               <div
//                 className="
//                   pointer-events-none
//                   absolute
//                   -right-[100px]
//                   -top-[100px]
//                   h-[280px]
//                   w-[280px]
//                   rounded-full
//                   bg-[#9DD827]/[0.08]
//                   blur-[100px]
//                 "
//               />

//               <div className="relative z-10">
//                 {/* HEADER */}

//                 <div
//                   className="
//                     flex
//                     items-end
//                     justify-between
//                     gap-6
//                     border-b
//                     border-[#123F34]/[0.08]
//                     pb-8
//                   ">
//                   <div>
//                     <span
//                       className="
//                         text-[9px]
//                         font-bold
//                         uppercase
//                         tracking-[0.2em]
//                         text-[#7AA700]
//                       ">
//                       Contacto directo
//                     </span>

//                     <h3
//                       className="
//                         mt-4
//                         max-w-[420px]
//                         text-[clamp(1.8rem,2.4vw,2.7rem)]
//                         font-normal
//                         leading-[1.05]
//                         tracking-[-0.045em]
//                         text-[#123F34]
//                       ">
//                       Elige cómo quieres
//                       <span className="block text-[#123F34]/45">empezar.</span>
//                     </h3>
//                   </div>

//                   <span
//                     className="
//                       hidden
//                       h-3
//                       w-3
//                       shrink-0
//                       rounded-full
//                       bg-[#9DD827]
//                       shadow-[0_0_0_7px_rgba(157,216,39,.10)]
//                       sm:block
//                     "
//                   />
//                 </div>

//                 {/* =============================================
//                     CONTACT ROWS
//                 ============================================= */}

//                 <div className="mt-3">
//                   {contactActions.map((item) => {
//                     const Icon = item.icon;

//                     return (
//                       <a
//                         key={item.label}
//                         href={item.href}
//                         className="
//                           group
//                           relative
//                           flex
//                           items-center
//                           gap-5
//                           border-b
//                           border-[#123F34]/[0.08]
//                           py-7
//                           transition-all
//                           duration-300
//                         ">
//                         {/* hover bg */}

//                         <span
//                           className="
//                             pointer-events-none
//                             absolute
//                             -inset-x-4
//                             inset-y-2
//                             rounded-[14px]
//                             bg-white
//                             opacity-0
//                             shadow-[0_12px_30px_rgba(18,63,52,.055)]
//                             transition-all
//                             duration-300
//                             group-hover:opacity-100
//                           "
//                         />

//                         {/* NUMBER */}

//                         <span
//                           className="
//                             relative
//                             z-10
//                             hidden
//                             w-7
//                             text-[8px]
//                             font-bold
//                             tracking-[0.16em]
//                             text-[#123F34]/25
//                             xl:block
//                           ">
//                           {item.number}
//                         </span>

//                         {/* ICON */}

//                         <span
//                           className="
//                             relative
//                             z-10
//                             flex
//                             h-12
//                             w-12
//                             shrink-0
//                             items-center
//                             justify-center
//                             rounded-[14px]
//                             bg-[#EAF2DB]
//                             text-[#7EAF00]
//                             transition-all
//                             duration-300
//                             group-hover:bg-[#9DD827]
//                             group-hover:text-[#123F34]
//                             group-hover:rotate-[-3deg]
//                             group-hover:scale-105
//                           ">
//                           <Icon size={19} strokeWidth={1.55} />
//                         </span>

//                         {/* INFO */}

//                         <div className="relative z-10 min-w-0 flex-1">
//                           <div className="flex items-center gap-3">
//                             <span
//                               className="
//                                 text-[8px]
//                                 font-bold
//                                 uppercase
//                                 tracking-[0.16em]
//                                 text-[#123F34]/35
//                               ">
//                               {item.label}
//                             </span>

//                             <span
//                               className="
//                                 h-px
//                                 w-4
//                                 bg-[#9DD827]
//                                 transition-all
//                                 duration-300
//                                 group-hover:w-8
//                               "
//                             />
//                           </div>

//                           <p
//                             className="
//                               mt-2
//                               truncate
//                               text-[15px]
//                               font-medium
//                               text-[#123F34]
//                               sm:text-[16px]
//                             ">
//                             {item.value}
//                           </p>

//                           <p
//                             className="
//                               mt-1
//                               text-[10px]
//                               text-[#123F34]/38
//                             ">
//                             {item.helper}
//                           </p>
//                         </div>

//                         {/* ARROW */}

//                         <span
//                           className="
//                             relative
//                             z-10
//                             flex
//                             h-10
//                             w-10
//                             shrink-0
//                             items-center
//                             justify-center
//                             rounded-full
//                             border
//                             border-[#123F34]/10
//                             text-[#123F34]/40
//                             transition-all
//                             duration-300
//                             group-hover:border-[#123F34]
//                             group-hover:bg-[#123F34]
//                             group-hover:text-white
//                           ">
//                           <ArrowUpRight
//                             size={15}
//                             strokeWidth={1.5}
//                             className="
//                               transition-transform
//                               duration-300
//                               group-hover:-translate-y-0.5
//                               group-hover:translate-x-0.5
//                             "
//                           />
//                         </span>
//                       </a>
//                     );
//                   })}
//                 </div>

//                 {/* =============================================
//                     PERSONALIZED ASSISTANCE
//                 ============================================= */}

//                 <div
//                   className="
//                     mt-10
//                     rounded-[18px]
//                     bg-[#123F34]
//                     p-6
//                     text-white
//                     shadow-[0_16px_35px_rgba(18,63,52,.12)]
//                     sm:p-7
//                   ">
//                   <div className="flex items-start gap-4">
//                     <span
//                       className="
//                         mt-1
//                         h-2.5
//                         w-2.5
//                         shrink-0
//                         rounded-full
//                         bg-[#9DD827]
//                         shadow-[0_0_0_6px_rgba(157,216,39,.10)]
//                       "
//                     />

//                     <div>
//                       <p
//                         className="
//                           text-[9px]
//                           font-bold
//                           uppercase
//                           tracking-[0.17em]
//                           text-[#B8EB50]
//                         ">
//                         Atención personalizada
//                       </p>

//                       <p
//                         className="
//                           mt-3
//                           max-w-[450px]
//                           text-[13px]
//                           leading-6
//                           text-white/60
//                         ">
//                         Nuestro equipo revisará tu necesidad y te orientará
//                         hacia la solución o especialidad adecuada.
//                       </p>
//                     </div>
//                   </div>

//                   <a
//                     href="/contacto"
//                     className="
//                       group
//                       mt-6
//                       flex
//                       items-center
//                       justify-between
//                       border-t
//                       border-white/10
//                       pt-5
//                       text-[11px]
//                       font-medium
//                       text-white/70
//                       transition-colors
//                       hover:text-white
//                     ">
//                     Cuéntanos sobre tu proyecto
//                     <ArrowRight
//                       size={15}
//                       className="
//                         transition-transform
//                         duration-300
//                         group-hover:translate-x-1
//                       "
//                     />
//                   </a>
//                 </div>

//                 {/* FOOT */}

//                 <div
//                   className="
//                     mt-8
//                     flex
//                     items-center
//                     justify-between
//                     gap-5
//                   ">
//                   <p
//                     className="
//                       text-[8px]
//                       uppercase
//                       tracking-[0.16em]
//                       text-[#123F34]/28
//                     ">
//                     GRUNER · México
//                   </p>

//                   <div className="flex items-center gap-2">
//                     <span className="h-1.5 w-1.5 rounded-full bg-[#9DD827]" />
//                     <span className="h-1.5 w-1.5 rounded-full bg-[#123F34]/15" />
//                     <span className="h-1.5 w-1.5 rounded-full bg-[#123F34]/15" />
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ConsultoriaContactSection;

import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const contactActions = [
  {
    icon: Mail,
    number: "01",
    label: "Correo",
    value: "info@gruner.mx",
    href: "mailto:info@gruner.mx",
    helper: "Escríbenos",
  },
  {
    icon: Phone,
    number: "02",
    label: "Teléfono",
    value: "+52 33 3330 7267",
    href: "tel:+523333307267",
    helper: "Llámanos",
  },
  {
    icon: MessageCircle,
    number: "03",
    label: "WhatsApp",
    value: "+52 55 3013 1106",
    href: "https://wa.me/525530131106",
    helper: "Conversemos",
  },
];

/* =========================================================
   CONTACT SECTION
========================================================= */

function ConsultoriaContactSection() {
  return (
    <section
      id="contacto"
      className="
        relative
        overflow-hidden
        bg-white
        py-16
        sm:py-20
        lg:py-24
        xl:py-28
      ">
      {/* =====================================================
          AMBIENT BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          -left-[250px]
          top-[5%]
          h-[600px]
          w-[600px]
          rounded-full
          bg-[#9DD827]/[0.045]
          blur-[150px]
        "
      />

      <div
        className="
          pointer-events-none
          -right-[220px]
          bottom-[-280px]
          absolute
          h-[600px]
          w-[600px]
          rounded-full
          bg-[#123F34]/[0.025]
          blur-[150px]
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
          px-5
          sm:px-8
          lg:px-12
          xl:px-16
          2xl:px-20
        ">
        {/* ===================================================
            MAIN COMPOSITION
        =================================================== */}

        <div
          className="
            relative
            overflow-hidden
            rounded-[22px]
            border
            border-[#123F34]/[0.07]
            bg-white
            shadow-[0_28px_90px_rgba(18,63,52,0.075)]
          ">
          {/* TOP ACCENT */}

          <div className="absolute left-0 top-0 h-[3px] w-full bg-[#123F34]/[0.05]">
            <div className="h-full w-[22%] bg-[#9DD827]" />
          </div>

          {/* =================================================
              GRID
          ================================================= */}

          <div
            className="
              grid
              lg:grid-cols-[1.12fr_.88fr]
            ">
            {/* =================================================
                LEFT
            ================================================= */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.85,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                flex
                min-h-[680px]
                flex-col
                justify-between
                p-8
                sm:p-10
                lg:p-12
                xl:p-16
                2xl:p-20
              ">
              {/* =============================
                  TOP
              ============================= */}

              <div>
                {/* EYEBROW */}

                <div className="flex items-center gap-4">
                  <span
                    className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-full
                      bg-[#9DD827]
                      text-[#123F34]
                      shadow-[0_12px_30px_rgba(157,216,39,.18)]
                    ">
                    <Sparkles size={18} strokeWidth={1.6} />
                  </span>

                  <div>
                    <p
                      className="
                        text-[12px]
                        font-bold
                        uppercase
                        tracking-[0.2em]
                        text-[#75A600]
                      ">
                      Hablemos
                    </p>

                    <p
                      className="
                        mt-1
                        text-[11px]
                        uppercase
                        tracking-[0.14em]
                        text-[#123F34]/35
                      ">
                      El siguiente paso
                    </p>
                  </div>
                </div>

                {/* TITLE */}

                <h2
                  className="
                    mt-12
                    max-w-[900px]
                    text-[clamp(3.4rem,5.2vw,6.8rem)]
                    font-normal
                    leading-[0.88]
                    tracking-[-0.068em]
                    text-[#123F34]
                  ">
                  Una estrategia
                  <br />
                  sostenible
                  <span className="mt-2 block text-[#86B900]">
                    empieza con una
                    <br />
                    conversación.
                  </span>
                </h2>

                {/* COPY */}

                <p
                  className="
                    mt-9
                    max-w-[680px]
                    text-[15px]
                    leading-7
                    text-[#123F34]/58
                    sm:text-[17px]
                    sm:leading-8
                  ">
                  Cuéntanos qué reto estás enfrentando. Desde consultoría e
                  ingeniería hasta el desarrollo de proyectos, nuestro equipo
                  puede ayudarte a identificar prioridades, oportunidades y el
                  camino adecuado para avanzar.
                </p>
              </div>

              {/* =============================
                  BOTTOM
              ============================= */}

              <div className="mt-12">
                <div className="flex flex-wrap items-center gap-5">
                  <a
                    href="/contacto"
                    className="
                      group
                      inline-flex
                      min-h-[56px]
                      items-center
                      gap-8
                      rounded-full
                      bg-[#123F34]
                      px-7
                      text-[13px]
                      font-semibold
                      text-white!
                      shadow-[0_14px_32px_rgba(18,63,52,.14)]
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:bg-[#9DD827]
                      hover:text-[#123F34]
                      hover:shadow-[0_18px_38px_rgba(157,216,39,.2)]
                    ">
                    Iniciar conversación
                    <span
                      className="
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-full
                        bg-white/10
                        transition-all
                        duration-300
                        group-hover:bg-[#123F34]/10
                      ">
                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.6}
                        className="
                          transition-transform
                          duration-300
                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                        "
                      />
                    </span>
                  </a>

                  <p
                    className="
                      text-[11px]
                      uppercase
                      tracking-[0.15em]
                      text-[#123F34]/35
                    ">
                    Sin compromiso · Atención personalizada
                  </p>
                </div>

                {/* META */}

                <div
                  className="
                    mt-10
                    flex
                    max-w-[760px]
                    items-center
                    gap-4
                    border-t
                    border-[#123F34]/[0.08]
                    pt-6
                  ">
                  <span className="h-2 w-2 rounded-full bg-[#9DD827]" />

                  <span
                    className="
                      text-[11px]
                      uppercase
                      tracking-[0.15em]
                      text-[#123F34]/35
                    ">
                    Estrategia
                  </span>

                  <span className="h-px w-5 bg-[#123F34]/15" />

                  <span
                    className="
                      text-[11px]
                      uppercase
                      tracking-[0.15em]
                      text-[#123F34]/35
                    ">
                    Sostenibilidad
                  </span>

                  <span className="h-px w-5 bg-[#123F34]/15" />

                  <span
                    className="
                      text-[11px]
                      uppercase
                      tracking-[0.15em]
                      text-[#123F34]/35
                    ">
                    Implementación
                  </span>
                </div>
              </div>
            </motion.div>

            {/* =================================================
                RIGHT
            ================================================= */}

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.85,
                delay: 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                border-t
                border-[#123F34]/[0.07]
                bg-[#F7FAF2]
                p-8
                sm:p-10
                lg:border-l
                lg:border-t-0
                lg:p-12
                xl:p-14
                2xl:p-16
              ">
              {/* GREEN CORNER GLOW */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-[100px]
                  -top-[100px]
                  h-[280px]
                  w-[280px]
                  rounded-full
                  bg-[#9DD827]/[0.08]
                  blur-[100px]
                "
              />

              <div className="relative z-10">
                {/* HEADER */}

                <div
                  className="
                    flex
                    items-end
                    justify-between
                    gap-6
                    border-b
                    border-[#123F34]/[0.08]
                    pb-8
                  ">
                  <div>
                    <span
                      className="
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.2em]
                        text-[#7AA700]
                      ">
                      Contacto directo
                    </span>

                    <h3
                      className="
                        mt-4
                        max-w-[420px]
                        text-[clamp(1.8rem,2.4vw,2.7rem)]
                        font-normal
                        leading-[1.05]
                        tracking-[-0.045em]
                        text-[#123F34]
                      ">
                      Elige cómo quieres
                      <span className="block text-[#123F34]/45">empezar.</span>
                    </h3>
                  </div>

                  <span
                    className="
                      hidden
                      h-3
                      w-3
                      shrink-0
                      rounded-full
                      bg-[#9DD827]
                      shadow-[0_0_0_7px_rgba(157,216,39,.10)]
                      sm:block
                    "
                  />
                </div>

                {/* =============================================
                    CONTACT ROWS
                ============================================= */}

                <div className="mt-3">
                  {contactActions.map((item) => {
                    const Icon = item.icon;

                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target={
                          item.label === "WhatsApp" ? "_blank" : undefined
                        }
                        rel={
                          item.label === "WhatsApp"
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="
                          group
                          relative
                          flex
                          items-center
                          gap-5
                          border-b
                          border-[#123F34]/[0.08]
                          py-7
                          transition-all
                          duration-300
                        ">
                        {/* hover bg */}

                        <span
                          className="
                            pointer-events-none
                            absolute
                            -inset-x-4
                            inset-y-2
                            rounded-[14px]
                            bg-white
                            opacity-0
                            shadow-[0_12px_30px_rgba(18,63,52,.055)]
                            transition-all
                            duration-300
                            group-hover:opacity-100
                          "
                        />

                        {/* NUMBER */}

                        <span
                          className="
                            relative
                            z-10
                            hidden
                            w-7
                            text-[11px]
                            font-bold
                            tracking-[0.16em]
                            text-[#123F34]/25
                            xl:block
                          ">
                          {item.number}
                        </span>

                        {/* ICON */}

                        <span
                          className="
                            relative
                            z-10
                            flex
                            h-12
                            w-12
                            shrink-0
                            items-center
                            justify-center
                            rounded-[14px]
                            bg-[#EAF2DB]
                            text-[#7EAF00]
                            transition-all
                            duration-300
                            group-hover:bg-[#9DD827]
                            group-hover:text-[#123F34]
                            group-hover:rotate-[-3deg]
                            group-hover:scale-105
                          ">
                          <Icon size={19} strokeWidth={1.55} />
                        </span>

                        {/* INFO */}

                        <div className="relative z-10 min-w-0 flex-1">
                          <div className="flex items-center gap-3">
                            <span
                              className="
                                text-[11px]
                                font-bold
                                uppercase
                                tracking-[0.16em]
                                text-[#123F34]/35
                              ">
                              {item.label}
                            </span>

                            <span
                              className="
                                h-px
                                w-4
                                bg-[#9DD827]
                                transition-all
                                duration-300
                                group-hover:w-8
                              "
                            />
                          </div>

                          <p
                            className="
                              mt-2
                              truncate
                              text-[15px]
                              font-medium
                              text-[#123F34]
                              sm:text-[16px]
                            ">
                            {item.value}
                          </p>

                          <p
                            className="
                              mt-1
                              text-[12px]
                              text-[#123F34]/45
                            ">
                            {item.helper}
                          </p>
                        </div>

                        {/* ARROW */}

                        <span
                          className="
                            relative
                            z-10
                            flex
                            h-10
                            w-10
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-[#123F34]/10
                            text-[#123F34]/40
                            transition-all
                            duration-300
                            group-hover:border-[#123F34]
                            group-hover:bg-[#123F34]
                            group-hover:text-white
                          ">
                          <ArrowUpRight
                            size={15}
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
                    );
                  })}
                </div>

                {/* =============================================
                    PERSONALIZED ASSISTANCE
                ============================================= */}

                <div
                  className="
                    mt-10
                    rounded-[18px]
                    bg-[#123F34]
                    p-6
                    text-white
                    shadow-[0_16px_35px_rgba(18,63,52,.12)]
                    sm:p-7
                  ">
                  <div className="flex items-start gap-4">
                    <span
                      className="
                        mt-1
                        h-2.5
                        w-2.5
                        shrink-0
                        rounded-full
                        bg-[#9DD827]
                        shadow-[0_0_0_6px_rgba(157,216,39,.10)]
                      "
                    />

                    <div>
                      <p
                        className="
                          text-[11px]
                          font-bold
                          uppercase
                          tracking-[0.17em]
                          text-[#B8EB50]
                        ">
                        Atención personalizada
                      </p>

                      <p
                        className="
                          mt-3
                          max-w-[450px]
                          text-[13px]
                          leading-6
                          text-white/60
                        ">
                        Nuestro equipo revisará tu necesidad y te orientará
                        hacia la solución o especialidad adecuada.
                      </p>
                    </div>
                  </div>

                  <a
                    href="/contacto"
                    className="
                      group
                      mt-6
                      flex
                      items-center
                      justify-between
                      border-t
                      border-white/10
                      pt-5
                      text-[13px]
                      font-medium
                      text-white/75
                      transition-colors
                      hover:text-white
                    ">
                    Cuéntanos sobre tu proyecto
                    <ArrowRight
                      size={15}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  </a>
                </div>

                {/* FOOT */}

                <div
                  className="
                    mt-8
                    flex
                    items-center
                    justify-between
                    gap-5
                  ">
                  <p
                    className="
                      text-[11px]
                      uppercase
                      tracking-[0.16em]
                      text-[#123F34]/28
                    ">
                    GRUNER · México
                  </p>

                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#9DD827]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-[#123F34]/15" />
                    <span className="h-1.5 w-1.5 rounded-full bg-[#123F34]/15" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ConsultoriaContactSection;
