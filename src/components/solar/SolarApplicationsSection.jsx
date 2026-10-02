// import { AnimatePresence, motion } from "motion/react";
// import {
//   ArrowUpRight,
//   Building2,
//   Factory,
//   Layers3,
//   Warehouse,
// } from "lucide-react";
// import { useState } from "react";

// import solarMain from "../../assets/images/solar/solar-main.jpg";
// import solarDetail01 from "../../assets/images/solar/solar-detail-01.jpg";
// import solarDetail02 from "../../assets/images/solar/solar-detail-02.jpg";

// /* =========================================================
//    DATA
// ========================================================= */

// const applications = [
//   {
//     id: "industria",
//     number: "01",
//     eyebrow: "Industria",
//     title: "Operaciones industriales",
//     description:
//       "Integramos generación fotovoltaica y almacenamiento en instalaciones con demandas energéticas intensivas y perfiles de consumo complejos.",
//     detail:
//       "Una arquitectura diseñada alrededor de procesos productivos, continuidad operativa y aprovechamiento estratégico de la energía.",
//     icon: Factory,
//     image: solarMain,
//     tags: ["Autoconsumo", "Demanda", "Continuidad"],
//   },
//   {
//     id: "comercial",
//     number: "02",
//     eyebrow: "Comercial",
//     title: "Edificios y centros comerciales",
//     description:
//       "Soluciones para reducir dependencia de la red y aprovechar superficies disponibles como cubiertas, estacionamientos y áreas técnicas.",
//     detail:
//       "Generación local, almacenamiento y gestión energética coordinados para responder a patrones variables de consumo.",
//     icon: Building2,
//     image: solarDetail01,
//     tags: ["Rooftop", "BESS", "Gestión energética"],
//   },
//   {
//     id: "logistica",
//     number: "03",
//     eyebrow: "Logística",
//     title: "Centros de distribución",
//     description:
//       "Infraestructura energética preparada para instalaciones de gran superficie, operación continua y futuras necesidades de electrificación.",
//     detail:
//       "Una base energética flexible para almacenes, centros logísticos y operaciones con cargas crecientes.",
//     icon: Warehouse,
//     image: solarDetail02,
//     tags: ["Gran superficie", "Flexibilidad", "Electrificación"],
//   },
//   {
//     id: "hibridos",
//     number: "04",
//     eyebrow: "Integración",
//     title: "Sistemas híbridos",
//     description:
//       "Combinamos generación, almacenamiento y gestión para construir soluciones adaptadas a condiciones energéticas específicas.",
//     detail:
//       "Solar + BESS + EMS trabajando como una infraestructura única, escalable y preparada para evolucionar.",
//     icon: Layers3,
//     image: solarMain,
//     tags: ["Solar", "Storage", "EMS"],
//   },
// ];

// /* =========================================================
//    COMPONENT
// ========================================================= */

// function SolarApplicationsSection() {
//   const [activeId, setActiveId] = useState(applications[0].id);

//   const activeApplication =
//     applications.find((item) => item.id === activeId) || applications[0];

//   const ActiveIcon = activeApplication.icon;

//   return (
//     <section
//       id="solar-aplicaciones"
//       className="
//         relative
//         overflow-hidden
//         bg-white
//         py-20
//         text-[#143E33]

//         lg:py-24
//         xl:py-28
//       ">
//       {/* =====================================================
//           BACKGROUND
//       ===================================================== */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           inset-0
//           opacity-[0.27]
//           [background-image:linear-gradient(rgba(20,62,51,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(20,62,51,.035)_1px,transparent_1px)]
//           [background-size:72px_72px]
//         "
//       />

//       <div
//         className="
//           pointer-events-none
//           absolute
//           -left-[160px]
//           top-[20%]
//           h-[420px]
//           w-[420px]
//           rounded-full
//           bg-[#9DD827]/[0.06]
//           blur-[110px]
//         "
//       />

//       <span
//         className="
//           pointer-events-none
//           absolute
//           -right-6
//           top-8
//           hidden
//           select-none
//           text-[clamp(9rem,16vw,18rem)]
//           font-semibold
//           leading-none
//           tracking-[-0.09em]
//           text-[#143E33]/[0.018]

//           xl:block
//         ">
//         USE
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
//           initial={{ opacity: 0, y: 22 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.25 }}
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
//               <span className="h-px w-9 bg-[#9DD827]" />

//               <p
//                 className="
//                   text-[8px]
//                   font-bold
//                   uppercase
//                   tracking-[0.22em]
//                   text-[#76A400]
//                 ">
//                 Aplicaciones
//               </p>
//             </div>

//             <h2
//               className="
//                 mt-5
//                 max-w-[900px]
//                 text-[clamp(2.7rem,4.3vw,5rem)]
//                 font-normal
//                 leading-[0.94]
//                 tracking-[-0.06em]
//               ">
//               Una solución energética
//               <span className="block text-[#83B500]">para cada operación.</span>
//             </h2>
//           </div>

//           <p
//             className="
//               max-w-[420px]
//               text-[13px]
//               leading-7
//               text-[#143E33]/48

//               lg:pb-2
//             ">
//             Cada instalación tiene una demanda distinta. Diseñamos la
//             arquitectura energética alrededor de la operación, su
//             infraestructura y sus objetivos.
//           </p>
//         </motion.div>

//         {/* ===================================================
//             MAIN EXPERIENCE
//         =================================================== */}

//         <div
//           className="
//             mt-14
//             grid
//             gap-6

//             lg:grid-cols-[.72fr_1.28fr]
//             lg:items-stretch

//             xl:gap-8
//           ">
//           {/* =================================================
//               NAVIGATION
//           ================================================= */}

//           <div
//             className="
//               overflow-hidden
//               rounded-[18px]
//               border
//               border-[#143E33]/[0.08]
//               bg-[#F6F8F2]
//             ">
//             <div
//               className="
//                 flex
//                 items-center
//                 justify-between
//                 border-b
//                 border-[#143E33]/[0.07]
//                 px-6
//                 py-5
//               ">
//               <span
//                 className="
//                   text-[7px]
//                   font-bold
//                   uppercase
//                   tracking-[0.18em]
//                   text-[#143E33]/35
//                 ">
//                 Selecciona una aplicación
//               </span>

//               <span
//                 className="
//                   text-[7px]
//                   font-bold
//                   tracking-[0.14em]
//                   text-[#78A500]
//                 ">
//                 01—04
//               </span>
//             </div>

//             <div>
//               {applications.map((item) => {
//                 const Icon = item.icon;
//                 const isActive = item.id === activeId;

//                 return (
//                   <button
//                     key={item.id}
//                     type="button"
//                     onClick={() => setActiveId(item.id)}
//                     className={`
//                       group
//                       relative
//                       grid
//                       w-full
//                       grid-cols-[42px_1fr_auto]
//                       items-center
//                       gap-4
//                       border-b
//                       border-[#143E33]/[0.065]
//                       px-5
//                       py-5
//                       text-left
//                       transition-all
//                       duration-400

//                       last:border-b-0

//                       ${
//                         isActive
//                           ? "bg-[#143E33] text-white"
//                           : "text-[#143E33] hover:bg-[#EDF3E3]"
//                       }
//                     `}>
//                     {/* ICON */}

//                     <span
//                       className={`
//                         flex
//                         h-10
//                         w-10
//                         items-center
//                         justify-center
//                         rounded-[10px]
//                         transition-all
//                         duration-300

//                         ${
//                           isActive
//                             ? "bg-[#B8F23A] text-[#143E33]"
//                             : "bg-[#E9F1DC] text-[#78A500] group-hover:bg-[#9DD827] group-hover:text-[#143E33]"
//                         }
//                       `}>
//                       <Icon size={17} strokeWidth={1.6} />
//                     </span>

//                     {/* TEXT */}

//                     <div>
//                       <div className="flex items-center gap-3">
//                         <span
//                           className={`
//                             text-[6px]
//                             font-bold
//                             tracking-[0.16em]

//                             ${isActive ? "text-[#B8F23A]" : "text-[#143E33]/25"}
//                           `}>
//                           {item.number}
//                         </span>

//                         <span
//                           className={`
//                             text-[7px]
//                             font-bold
//                             uppercase
//                             tracking-[0.16em]

//                             ${isActive ? "text-[#B8F23A]" : "text-[#78A500]"}
//                           `}>
//                           {item.eyebrow}
//                         </span>
//                       </div>

//                       <p
//                         className="
//                           mt-1.5
//                           text-[14px]
//                           font-medium
//                           tracking-[-0.025em]
//                         ">
//                         {item.title}
//                       </p>
//                     </div>

//                     <span
//                       className={`
//                         flex
//                         h-8
//                         w-8
//                         items-center
//                         justify-center
//                         rounded-full
//                         border
//                         transition-all
//                         duration-300

//                         ${
//                           isActive
//                             ? "border-white/15 text-[#B8F23A]"
//                             : "border-[#143E33]/10 text-[#143E33]/30"
//                         }
//                       `}>
//                       <ArrowUpRight
//                         size={13}
//                         strokeWidth={1.5}
//                         className="
//                           transition-transform
//                           duration-300

//                           group-hover:-translate-y-0.5
//                           group-hover:translate-x-0.5
//                         "
//                       />
//                     </span>

//                     {/* ACTIVE LINE */}

//                     {isActive && (
//                       <motion.span
//                         layoutId="solar-application-active"
//                         className="
//                           absolute
//                           bottom-0
//                           left-0
//                           top-0
//                           w-[3px]
//                           bg-[#B8F23A]
//                         "
//                       />
//                     )}
//                   </button>
//                 );
//               })}
//             </div>
//           </div>

//           {/* =================================================
//               VISUAL
//           ================================================= */}

//           <div
//             className="
//               relative
//               min-h-[520px]
//               overflow-hidden
//               rounded-[18px]
//               bg-[#DCE5D4]
//               shadow-[0_22px_60px_rgba(20,62,51,.09)]

//               sm:min-h-[580px]
//               lg:min-h-full
//             ">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeApplication.id}
//                 initial={{
//                   opacity: 0,
//                   scale: 1.025,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   scale: 1,
//                 }}
//                 exit={{
//                   opacity: 0,
//                   scale: 0.99,
//                 }}
//                 transition={{
//                   duration: 0.55,
//                   ease: [0.22, 1, 0.36, 1],
//                 }}
//                 className="absolute inset-0">
//                 <img
//                   src={activeApplication.image}
//                   alt={activeApplication.title}
//                   className="
//                     h-full
//                     w-full
//                     object-cover
//                   "
//                 />

//                 <div
//                   className="
//                     absolute
//                     inset-0
//                     bg-gradient-to-t
//                     from-[#0B3027]/90
//                     via-[#0B3027]/22
//                     to-[#0B3027]/5
//                   "
//                 />

//                 <div
//                   className="
//                     absolute
//                     inset-0
//                     bg-gradient-to-r
//                     from-[#0B3027]/30
//                     via-transparent
//                     to-transparent
//                   "
//                 />
//               </motion.div>
//             </AnimatePresence>

//             {/* ===============================================
//                 TOP DATA
//             =============================================== */}

//             <div
//               className="
//                 absolute
//                 left-5
//                 right-5
//                 top-5
//                 z-20
//                 flex
//                 items-start
//                 justify-between
//                 gap-4

//                 sm:left-7
//                 sm:right-7
//                 sm:top-7
//               ">
//               <div
//                 className="
//                   flex
//                   items-center
//                   gap-3
//                   rounded-full
//                   border
//                   border-white/20
//                   bg-white/90
//                   px-4
//                   py-2.5
//                   backdrop-blur-xl
//                 ">
//                 <span
//                   className="
//                     flex
//                     h-6
//                     w-6
//                     items-center
//                     justify-center
//                     rounded-full
//                     bg-[#EAF3DB]
//                     text-[#78A500]
//                   ">
//                   <ActiveIcon size={12} strokeWidth={1.7} />
//                 </span>

//                 <span
//                   className="
//                     text-[7px]
//                     font-bold
//                     uppercase
//                     tracking-[0.16em]
//                     text-[#143E33]
//                   ">
//                   {activeApplication.eyebrow}
//                 </span>
//               </div>

//               <div
//                 className="
//                   rounded-full
//                   border
//                   border-white/20
//                   bg-[#143E33]/65
//                   px-4
//                   py-2.5
//                   backdrop-blur-lg
//                 ">
//                 <span
//                   className="
//                     text-[7px]
//                     font-bold
//                     uppercase
//                     tracking-[0.16em]
//                     text-[#B8F23A]
//                   ">
//                   GRUNER Energy / {activeApplication.number}
//                 </span>
//               </div>
//             </div>

//             {/* ===============================================
//                 TECH DOT
//             =============================================== */}

//             <div
//               className="
//                 absolute
//                 right-[12%]
//                 top-[39%]
//                 z-20
//                 hidden

//                 xl:block
//               ">
//               <span className="relative flex h-4 w-4">
//                 <span
//                   className="
//                     absolute
//                     inset-0
//                     animate-ping
//                     rounded-full
//                     bg-[#B8F23A]/45
//                   "
//                 />

//                 <span
//                   className="
//                     relative
//                     m-auto
//                     h-2.5
//                     w-2.5
//                     rounded-full
//                     border-2
//                     border-white
//                     bg-[#B8F23A]
//                     shadow-[0_0_18px_rgba(184,242,58,.8)]
//                   "
//                 />
//               </span>

//               <span
//                 className="
//                   absolute
//                   right-3
//                   top-2
//                   h-px
//                   w-16
//                   bg-white/35
//                 "
//               />

//               <span
//                 className="
//                   absolute
//                   right-[76px]
//                   top-[-5px]
//                   whitespace-nowrap
//                   text-[6px]
//                   font-bold
//                   uppercase
//                   tracking-[0.16em]
//                   text-white/55
//                 ">
//                 Energy infrastructure
//               </span>
//             </div>

//             {/* ===============================================
//                 CONTENT
//             =============================================== */}

//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={`content-${activeApplication.id}`}
//                 initial={{
//                   opacity: 0,
//                   y: 18,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 exit={{
//                   opacity: 0,
//                   y: 10,
//                 }}
//                 transition={{
//                   duration: 0.45,
//                   delay: 0.08,
//                 }}
//                 className="
//                   absolute
//                   bottom-0
//                   left-0
//                   right-0
//                   z-20
//                   p-6

//                   sm:p-8
//                   xl:p-10
//                 ">
//                 <div
//                   className="
//                     grid
//                     gap-7

//                     xl:grid-cols-[1fr_370px]
//                     xl:items-end
//                   ">
//                   <div>
//                     <div className="flex items-center gap-3">
//                       <span className="h-px w-8 bg-[#B8F23A]" />

//                       <span
//                         className="
//                           text-[7px]
//                           font-bold
//                           uppercase
//                           tracking-[0.2em]
//                           text-[#B8F23A]
//                         ">
//                         {activeApplication.number} · {activeApplication.eyebrow}
//                       </span>
//                     </div>

//                     <h3
//                       className="
//                         mt-4
//                         max-w-[700px]
//                         text-[clamp(2rem,3.4vw,4rem)]
//                         font-normal
//                         leading-[0.94]
//                         tracking-[-0.055em]
//                         text-white
//                       ">
//                       {activeApplication.title}
//                     </h3>

//                     <p
//                       className="
//                         mt-4
//                         max-w-[650px]
//                         text-[11px]
//                         leading-6
//                         text-white/55
//                       ">
//                       {activeApplication.description}
//                     </p>
//                   </div>

//                   <div
//                     className="
//                       border-t
//                       border-white/15
//                       pt-5

//                       xl:border-l
//                       xl:border-t-0
//                       xl:pl-7
//                       xl:pt-0
//                     ">
//                     <p
//                       className="
//                         text-[8px]
//                         font-bold
//                         uppercase
//                         tracking-[0.17em]
//                         text-[#B8F23A]
//                       ">
//                       Enfoque
//                     </p>

//                     <p
//                       className="
//                         mt-3
//                         text-[10px]
//                         leading-6
//                         text-white/45
//                       ">
//                       {activeApplication.detail}
//                     </p>

//                     <div
//                       className="
//                         mt-5
//                         flex
//                         flex-wrap
//                         gap-2
//                       ">
//                       {activeApplication.tags.map((tag) => (
//                         <span
//                           key={tag}
//                           className="
//                             rounded-full
//                             border
//                             border-white/15
//                             bg-white/[0.06]
//                             px-3
//                             py-1.5
//                             text-[6px]
//                             font-semibold
//                             uppercase
//                             tracking-[0.13em]
//                             text-white/55
//                             backdrop-blur-md
//                           ">
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </div>

//         {/* ===================================================
//             BOTTOM
//         =================================================== */}

//         <div
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
//             <span className="relative flex h-2 w-2">
//               <span
//                 className="
//                   absolute
//                   inset-0
//                   animate-ping
//                   rounded-full
//                   bg-[#9DD827]/35
//                 "
//               />

//               <span
//                 className="
//                   relative
//                   h-2
//                   w-2
//                   rounded-full
//                   bg-[#83B500]
//                 "
//               />
//             </span>

//             <p
//               className="
//                 text-[7px]
//                 font-semibold
//                 uppercase
//                 tracking-[0.17em]
//                 text-[#143E33]/35
//               ">
//               Infraestructura adaptada a cada operación
//             </p>
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
//               Diseño · Integración · Operación
//             </span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default SolarApplicationsSection;

import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUpRight,
  Building2,
  Factory,
  Layers3,
  Warehouse,
} from "lucide-react";
import { useState } from "react";

import solarMain from "../../assets/images/solar/solar-main.jpg";
import solarDetail01 from "../../assets/images/solar/solar-detail-01.jpg";
import solarDetail02 from "../../assets/images/solar/solar-detail-02.jpg";

/* =========================================================
   DATA
========================================================= */

const applications = [
  {
    id: "industria",
    number: "01",
    eyebrow: "Industria",
    title: "Operaciones industriales",
    description:
      "Integramos generación fotovoltaica y almacenamiento en instalaciones con demandas energéticas intensivas y perfiles de consumo complejos.",
    detail:
      "Una arquitectura diseñada alrededor de procesos productivos, continuidad operativa y aprovechamiento estratégico de la energía.",
    icon: Factory,
    image: solarMain,
    tags: ["Autoconsumo", "Demanda", "Continuidad"],
  },
  {
    id: "comercial",
    number: "02",
    eyebrow: "Comercial",
    title: "Edificios, centros comerciales & Carports",
    description:
      "Soluciones para reducir dependencia de la red y aprovechar cubiertas, estacionamientos, áreas técnicas y estructuras tipo Carport.",
    detail:
      "Generación local, almacenamiento y gestión energética coordinados para responder a patrones variables de consumo y aprovechar mejor la infraestructura disponible.",
    icon: Building2,
    image: solarDetail01,
    tags: ["Rooftop", "Carport", "BESS"],
  },
  {
    id: "logistica",
    number: "03",
    eyebrow: "Logística",
    title: "Centros de distribución",
    description:
      "Infraestructura energética preparada para instalaciones de gran superficie, operación continua y futuras necesidades de electrificación.",
    detail:
      "Una base energética flexible para almacenes, centros logísticos y operaciones con cargas crecientes.",
    icon: Warehouse,
    image: solarDetail02,
    tags: ["Gran superficie", "Flexibilidad", "Electrificación"],
  },
  {
    id: "hibridos",
    number: "04",
    eyebrow: "Integración",
    title: "Sistemas híbridos o aislados",
    description:
      "Combinamos generación fotovoltaica, baterías y gestión energética para construir soluciones híbridas o aisladas adaptadas a condiciones específicas.",
    detail:
      "Solar + BESS + EMS trabajando como una infraestructura única, escalable y preparada para operar incluso donde la configuración energética requiere mayor autonomía.",
    icon: Layers3,
    image: solarMain,
    tags: ["Solar", "BESS", "Híbrido / aislado"],
  },
];

/* =========================================================
   COMPONENT
========================================================= */

function SolarApplicationsSection() {
  const [activeId, setActiveId] = useState(applications[0].id);

  const activeApplication =
    applications.find((item) => item.id === activeId) || applications[0];

  const ActiveIcon = activeApplication.icon;

  return (
    <section
      id="solar-aplicaciones"
      className="
        relative
        overflow-hidden
        bg-white
        py-20
        text-[#143E33]

        lg:py-24
        xl:py-28
      ">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.27]
          [background-image:linear-gradient(rgba(20,62,51,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(20,62,51,.035)_1px,transparent_1px)]
          [background-size:72px_72px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-[160px]
          top-[20%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#9DD827]/[0.06]
          blur-[110px]
        "
      />

      <span
        className="
          pointer-events-none
          absolute
          -right-6
          top-8
          hidden
          select-none
          text-[clamp(9rem,16vw,18rem)]
          font-semibold
          leading-none
          tracking-[-0.09em]
          text-[#143E33]/[0.018]

          xl:block
        ">
        USE
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
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
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
              <span className="h-px w-9 bg-[#9DD827]" />

              <p
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-[#76A400]
                ">
                Aplicaciones
              </p>
            </div>

            <h2
              className="
                mt-5
                max-w-[900px]
                text-[clamp(2.7rem,4.3vw,5rem)]
                font-normal
                leading-[0.94]
                tracking-[-0.06em]
              ">
              Una solución energética
              <span className="block text-[#83B500]">para cada operación.</span>
            </h2>
          </div>

          <p
            className="
              max-w-[420px]
              text-[13px]
              leading-7
              text-[#143E33]/48

              lg:pb-2
            ">
            Cada instalación tiene una demanda distinta. Diseñamos soluciones
            para aplicaciones industriales y comerciales alrededor de la
            operación, su infraestructura y sus objetivos energéticos.
          </p>
        </motion.div>

        {/* ===================================================
            MAIN EXPERIENCE
        =================================================== */}

        <div
          className="
            mt-14
            grid
            gap-6

            lg:grid-cols-[.72fr_1.28fr]
            lg:items-stretch

            xl:gap-8
          ">
          {/* =================================================
              NAVIGATION
          ================================================= */}

          <div
            className="
              overflow-hidden
              rounded-[18px]
              border
              border-[#143E33]/[0.08]
              bg-[#F6F8F2]
            ">
            <div
              className="
                flex
                items-center
                justify-between
                border-b
                border-[#143E33]/[0.07]
                px-6
                py-5
              ">
              <span
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#143E33]/35
                ">
                Selecciona una aplicación
              </span>

              <span
                className="
                  text-[11px]
                  font-bold
                  tracking-[0.14em]
                  text-[#78A500]
                ">
                01—04
              </span>
            </div>

            <div>
              {applications.map((item) => {
                const Icon = item.icon;
                const isActive = item.id === activeId;

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveId(item.id)}
                    className={`
                      group
                      relative
                      grid
                      w-full
                      grid-cols-[42px_1fr_auto]
                      items-center
                      gap-4
                      border-b
                      border-[#143E33]/[0.065]
                      px-5
                      py-5
                      text-left
                      transition-all
                      duration-400

                      last:border-b-0

                      ${
                        isActive
                          ? "bg-[#143E33] text-white"
                          : "text-[#143E33] hover:bg-[#EDF3E3]"
                      }
                    `}>
                    {/* ICON */}

                    <span
                      className={`
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-[10px]
                        transition-all
                        duration-300

                        ${
                          isActive
                            ? "bg-[#B8F23A] text-[#143E33]"
                            : "bg-[#E9F1DC] text-[#78A500] group-hover:bg-[#9DD827] group-hover:text-[#143E33]"
                        }
                      `}>
                      <Icon size={17} strokeWidth={1.6} />
                    </span>

                    {/* TEXT */}

                    <div>
                      <div className="flex items-center gap-3">
                        <span
                          className={`
                            text-[11px]
                            font-bold
                            tracking-[0.16em]

                            ${isActive ? "text-[#B8F23A]" : "text-[#143E33]/25"}
                          `}>
                          {item.number}
                        </span>

                        <span
                          className={`
                            text-[11px]
                            font-bold
                            uppercase
                            tracking-[0.16em]

                            ${isActive ? "text-[#B8F23A]" : "text-[#78A500]"}
                          `}>
                          {item.eyebrow}
                        </span>
                      </div>

                      <p
                        className="
                          mt-1.5
                          text-[14px]
                          font-medium
                          tracking-[-0.025em]
                        ">
                        {item.title}
                      </p>
                    </div>

                    <span
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
                          isActive
                            ? "border-white/15 text-[#B8F23A]"
                            : "border-[#143E33]/10 text-[#143E33]/30"
                        }
                      `}>
                      <ArrowUpRight
                        size={13}
                        strokeWidth={1.5}
                        className="
                          transition-transform
                          duration-300

                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                        "
                      />
                    </span>

                    {/* ACTIVE LINE */}

                    {isActive && (
                      <motion.span
                        layoutId="solar-application-active"
                        className="
                          absolute
                          bottom-0
                          left-0
                          top-0
                          w-[3px]
                          bg-[#B8F23A]
                        "
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* =================================================
              VISUAL
          ================================================= */}

          <div
            className="
              relative
              min-h-[520px]
              overflow-hidden
              rounded-[18px]
              bg-[#DCE5D4]
              shadow-[0_22px_60px_rgba(20,62,51,.09)]

              sm:min-h-[580px]
              lg:min-h-full
            ">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeApplication.id}
                initial={{
                  opacity: 0,
                  scale: 1.025,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.99,
                }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute inset-0">
                <img
                  src={activeApplication.image}
                  alt={activeApplication.title}
                  className="
                    h-full
                    w-full
                    object-cover
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#0B3027]/90
                    via-[#0B3027]/22
                    to-[#0B3027]/5
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-[#0B3027]/30
                    via-transparent
                    to-transparent
                  "
                />
              </motion.div>
            </AnimatePresence>

            {/* ===============================================
                TOP DATA
            =============================================== */}

            <div
              className="
                absolute
                left-5
                right-5
                top-5
                z-20
                flex
                items-start
                justify-between
                gap-4

                sm:left-7
                sm:right-7
                sm:top-7
              ">
              <div
                className="
                  flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-white/20
                  bg-white/90
                  px-4
                  py-2.5
                  backdrop-blur-xl
                ">
                <span
                  className="
                    flex
                    h-6
                    w-6
                    items-center
                    justify-center
                    rounded-full
                    bg-[#EAF3DB]
                    text-[#78A500]
                  ">
                  <ActiveIcon size={12} strokeWidth={1.7} />
                </span>

                <span
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-[#143E33]
                  ">
                  {activeApplication.eyebrow}
                </span>
              </div>

              <div
                className="
                  rounded-full
                  border
                  border-white/20
                  bg-[#143E33]/65
                  px-4
                  py-2.5
                  backdrop-blur-lg
                ">
                <span
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-[#B8F23A]
                  ">
                  GRUNER Energy / {activeApplication.number}
                </span>
              </div>
            </div>

            {/* ===============================================
                TECH DOT
            =============================================== */}

            <div
              className="
                absolute
                right-[12%]
                top-[39%]
                z-20
                hidden

                xl:block
              ">
              <span className="relative flex h-4 w-4">
                <span
                  className="
                    absolute
                    inset-0
                    animate-ping
                    rounded-full
                    bg-[#B8F23A]/45
                  "
                />

                <span
                  className="
                    relative
                    m-auto
                    h-2.5
                    w-2.5
                    rounded-full
                    border-2
                    border-white
                    bg-[#B8F23A]
                    shadow-[0_0_18px_rgba(184,242,58,.8)]
                  "
                />
              </span>

              <span
                className="
                  absolute
                  right-3
                  top-2
                  h-px
                  w-16
                  bg-white/35
                "
              />

              <span
                className="
                  absolute
                  right-[76px]
                  top-[-5px]
                  whitespace-nowrap
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-white/55
                ">
                Energy infrastructure
              </span>
            </div>

            {/* ===============================================
                CONTENT
            =============================================== */}

            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${activeApplication.id}`}
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                }}
                transition={{
                  duration: 0.45,
                  delay: 0.08,
                }}
                className="
                  absolute
                  bottom-0
                  left-0
                  right-0
                  z-20
                  p-6

                  sm:p-8
                  xl:p-10
                ">
                <div
                  className="
                    grid
                    gap-7

                    xl:grid-cols-[1fr_370px]
                    xl:items-end
                  ">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="h-px w-8 bg-[#B8F23A]" />

                      <span
                        className="
                          text-[11px]
                          font-bold
                          uppercase
                          tracking-[0.2em]
                          text-[#B8F23A]
                        ">
                        {activeApplication.number} · {activeApplication.eyebrow}
                      </span>
                    </div>

                    <h3
                      className="
                        mt-4
                        max-w-[700px]
                        text-[clamp(2rem,3.4vw,4rem)]
                        font-normal
                        leading-[0.94]
                        tracking-[-0.055em]
                        text-white
                      ">
                      {activeApplication.title}
                    </h3>

                    <p
                      className="
                        mt-4
                        max-w-[650px]
                        text-[11px]
                        leading-6
                        text-white/55
                      ">
                      {activeApplication.description}
                    </p>
                  </div>

                  <div
                    className="
                      border-t
                      border-white/15
                      pt-5

                      xl:border-l
                      xl:border-t-0
                      xl:pl-7
                      xl:pt-0
                    ">
                    <p
                      className="
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.17em]
                        text-[#B8F23A]
                      ">
                      Enfoque
                    </p>

                    <p
                      className="
                        mt-3
                        text-[13px]
                        leading-6
                        text-white/45
                      ">
                      {activeApplication.detail}
                    </p>

                    <div
                      className="
                        mt-5
                        flex
                        flex-wrap
                        gap-2
                      ">
                      {activeApplication.tags.map((tag) => (
                        <span
                          key={tag}
                          className="
                            rounded-full
                            border
                            border-white/15
                            bg-white/[0.06]
                            px-3
                            py-1.5
                            text-[11px]
                            font-semibold
                            uppercase
                            tracking-[0.13em]
                            text-white/55
                            backdrop-blur-md
                          ">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ===================================================
            BOTTOM
        =================================================== */}

        <div
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
            <span className="relative flex h-2 w-2">
              <span
                className="
                  absolute
                  inset-0
                  animate-ping
                  rounded-full
                  bg-[#9DD827]/35
                "
              />

              <span
                className="
                  relative
                  h-2
                  w-2
                  rounded-full
                  bg-[#83B500]
                "
              />
            </span>

            <p
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.17em]
                text-[#143E33]/35
              ">
              Infraestructura adaptada a cada operación
            </p>
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
              Diseño · Integración · Operación
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SolarApplicationsSection;
