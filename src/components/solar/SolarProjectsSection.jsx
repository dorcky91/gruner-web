// import { AnimatePresence, motion } from "motion/react";
// import {
//   ArrowLeft,
//   ArrowRight,
//   ArrowUpRight,
//   BatteryCharging,
//   Factory,
//   Gauge,
//   MapPin,
//   SolarPanel,
//   Zap,
// } from "lucide-react";
// import { useState } from "react";

// import solarMain from "../../assets/images/solar/solar-main.jpg";
// import solarDetail01 from "../../assets/images/solar/solar-detail-01.jpg";
// import solarDetail02 from "../../assets/images/solar/solar-detail-02.jpg";

// const projects = [
//   {
//     id: "project-01",
//     number: "01",
//     category: "Solar industrial",
//     title: "Infraestructura solar para operaciones de alta demanda",
//     location: "México",
//     image: solarMain,
//     description:
//       "Soluciones fotovoltaicas integradas a instalaciones industriales donde eficiencia, continuidad y reducción de consumo de red forman parte de una misma estrategia energética.",
//     metrics: [
//       {
//         label: "Tecnología",
//         value: "Solar PV",
//         icon: SolarPanel,
//       },
//       {
//         label: "Aplicación",
//         value: "Industrial",
//         icon: Factory,
//       },
//       {
//         label: "Gestión",
//         value: "Energy Flow",
//         icon: Gauge,
//       },
//     ],
//     tags: ["Autoconsumo", "Industria", "Generación distribuida"],
//   },
//   {
//     id: "project-02",
//     number: "02",
//     category: "Solar + BESS",
//     title: "Generación y almacenamiento como una sola infraestructura",
//     location: "México",
//     image: solarDetail01,
//     description:
//       "La incorporación de almacenamiento permite extender el valor de la generación solar y responder de forma más flexible a las necesidades energéticas de la operación.",
//     metrics: [
//       {
//         label: "Tecnología",
//         value: "PV + BESS",
//         icon: BatteryCharging,
//       },
//       {
//         label: "Aplicación",
//         value: "Storage",
//         icon: Zap,
//       },
//       {
//         label: "Control",
//         value: "EMS",
//         icon: Gauge,
//       },
//     ],
//     tags: ["BESS", "Flexibilidad", "Gestión energética"],
//   },
//   {
//     id: "project-03",
//     number: "03",
//     category: "Infraestructura energética",
//     title: "Energía preparada para crecer con la operación",
//     location: "México",
//     image: solarDetail02,
//     description:
//       "Diseñamos sistemas escalables que pueden acompañar cambios en demanda, electrificación de procesos y nuevas necesidades de infraestructura.",
//     metrics: [
//       {
//         label: "Sistema",
//         value: "Integrated",
//         icon: SolarPanel,
//       },
//       {
//         label: "Escala",
//         value: "Expandable",
//         icon: BatteryCharging,
//       },
//       {
//         label: "Control",
//         value: "Smart",
//         icon: Gauge,
//       },
//     ],
//     tags: ["Escalabilidad", "Electrificación", "Resiliencia"],
//   },
// ];

// function SolarProjectsSection() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const activeProject = projects[activeIndex];

//   const previousProject = () => {
//     setActiveIndex((current) =>
//       current === 0 ? projects.length - 1 : current - 1,
//     );
//   };

//   const nextProject = () => {
//     setActiveIndex((current) =>
//       current === projects.length - 1 ? 0 : current + 1,
//     );
//   };

//   return (
//     <section
//       id="solar-proyectos"
//       className="
//         relative
//         overflow-hidden
//         bg-[#0F352C]
//         py-20
//         text-white
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
//           opacity-[0.18]
//           [background-image:linear-gradient(rgba(255,255,255,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.055)_1px,transparent_1px)]
//           [background-size:72px_72px]
//         "
//       />

//       <div
//         className="
//           pointer-events-none
//           absolute
//           -right-[160px]
//           -top-[180px]
//           h-[520px]
//           w-[520px]
//           rounded-full
//           bg-[#9DD827]/10
//           blur-[110px]
//         "
//       />

//       <span
//         className="
//           pointer-events-none
//           absolute
//           -right-4
//           bottom-[-30px]
//           hidden
//           select-none
//           text-[clamp(10rem,18vw,21rem)]
//           font-semibold
//           leading-none
//           tracking-[-0.09em]
//           text-white/[0.018]
//           xl:block
//         ">
//         WORK
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
//               <span className="h-px w-9 bg-[#B8F23A]" />

//               <p
//                 className="
//                   text-[8px]
//                   font-bold
//                   uppercase
//                   tracking-[0.22em]
//                   text-[#B8F23A]
//                 ">
//                 Proyectos
//               </p>
//             </div>

//             <h2
//               className="
//                 mt-5
//                 max-w-[850px]
//                 text-[clamp(2.7rem,4.4vw,5.2rem)]
//                 font-normal
//                 leading-[0.93]
//                 tracking-[-0.06em]
//               ">
//               La estrategia se vuelve
//               <span className="block text-[#B8F23A]">
//                 infraestructura real.
//               </span>
//             </h2>
//           </div>

//           <p
//             className="
//               max-w-[420px]
//               text-[12px]
//               leading-7
//               text-white/45
//               lg:pb-2
//             ">
//             Cada proyecto responde a una combinación distinta de demanda,
//             infraestructura, tecnología y objetivos de operación.
//           </p>
//         </motion.div>

//         {/* ===================================================
//             PROJECT STAGE
//         =================================================== */}

//         <div
//           className="
//             mt-14
//             overflow-hidden
//             rounded-[20px]
//             border
//             border-white/[0.08]
//             bg-[#0B2D25]
//             shadow-[0_30px_80px_rgba(0,0,0,.16)]
//           ">
//           <div
//             className="
//               grid
//               lg:grid-cols-[1.25fr_.75fr]
//             ">
//             {/* =================================================
//                 IMAGE
//             ================================================= */}

//             <div
//               className="
//                 relative
//                 min-h-[520px]
//                 overflow-hidden
//                 sm:min-h-[600px]
//                 lg:min-h-[650px]
//               ">
//               <AnimatePresence mode="wait">
//                 <motion.img
//                   key={activeProject.id}
//                   src={activeProject.image}
//                   alt={activeProject.title}
//                   initial={{
//                     opacity: 0,
//                     scale: 1.04,
//                   }}
//                   animate={{
//                     opacity: 1,
//                     scale: 1,
//                   }}
//                   exit={{
//                     opacity: 0,
//                     scale: 0.99,
//                   }}
//                   transition={{
//                     duration: 0.65,
//                     ease: [0.22, 1, 0.36, 1],
//                   }}
//                   className="
//                     absolute
//                     inset-0
//                     h-full
//                     w-full
//                     object-cover
//                   "
//                 />
//               </AnimatePresence>

//               <div
//                 className="
//                   pointer-events-none
//                   absolute
//                   inset-0
//                   bg-gradient-to-t
//                   from-[#09271F]/85
//                   via-[#09271F]/15
//                   to-transparent
//                 "
//               />

//               <div
//                 className="
//                   pointer-events-none
//                   absolute
//                   inset-0
//                   bg-gradient-to-r
//                   from-transparent
//                   via-transparent
//                   to-[#09271F]/18
//                 "
//               />

//               {/* top */}

//               <div
//                 className="
//                   absolute
//                   left-6
//                   right-6
//                   top-6
//                   z-20
//                   flex
//                   items-start
//                   justify-between
//                   gap-4
//                   sm:left-8
//                   sm:right-8
//                   sm:top-8
//                 ">
//                 <div
//                   className="
//                     flex
//                     items-center
//                     gap-3
//                     rounded-full
//                     border
//                     border-white/20
//                     bg-white/90
//                     px-4
//                     py-2.5
//                     text-[#143E33]
//                     backdrop-blur-xl
//                   ">
//                   <span className="h-2 w-2 rounded-full bg-[#83B500]" />

//                   <span
//                     className="
//                       text-[7px]
//                       font-bold
//                       uppercase
//                       tracking-[0.16em]
//                     ">
//                     {activeProject.category}
//                   </span>
//                 </div>

//                 <span
//                   className="
//                     rounded-full
//                     border
//                     border-white/20
//                     bg-[#143E33]/65
//                     px-4
//                     py-2.5
//                     text-[7px]
//                     font-bold
//                     uppercase
//                     tracking-[0.16em]
//                     text-[#B8F23A]
//                     backdrop-blur-lg
//                   ">
//                   {activeProject.number} / 0{projects.length}
//                 </span>
//               </div>

//               {/* bottom text */}

//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={`image-text-${activeProject.id}`}
//                   initial={{
//                     opacity: 0,
//                     y: 15,
//                   }}
//                   animate={{
//                     opacity: 1,
//                     y: 0,
//                   }}
//                   exit={{
//                     opacity: 0,
//                     y: 8,
//                   }}
//                   transition={{
//                     duration: 0.45,
//                   }}
//                   className="
//                     absolute
//                     bottom-0
//                     left-0
//                     right-0
//                     z-20
//                     p-6
//                     sm:p-8
//                     xl:p-10
//                   ">
//                   <div className="flex items-center gap-3">
//                     <MapPin
//                       size={12}
//                       strokeWidth={1.6}
//                       className="text-[#B8F23A]"
//                     />

//                     <span
//                       className="
//                         text-[7px]
//                         font-bold
//                         uppercase
//                         tracking-[0.17em]
//                         text-white/55
//                       ">
//                       {activeProject.location}
//                     </span>
//                   </div>

//                   <h3
//                     className="
//                       mt-4
//                       max-w-[800px]
//                       text-[clamp(2rem,3.5vw,4.2rem)]
//                       font-normal
//                       leading-[0.94]
//                       tracking-[-0.055em]
//                     ">
//                     {activeProject.title}
//                   </h3>
//                 </motion.div>
//               </AnimatePresence>
//             </div>

//             {/* =================================================
//                 INFORMATION PANEL
//             ================================================= */}

//             <div
//               className="
//                 relative
//                 flex
//                 min-h-[520px]
//                 flex-col
//                 overflow-hidden
//                 bg-[#123A31]
//                 p-7
//                 sm:p-8
//                 lg:min-h-[650px]
//                 xl:p-10
//               ">
//               <span
//                 className="
//                   pointer-events-none
//                   absolute
//                   -right-3
//                   -top-8
//                   text-[150px]
//                   font-light
//                   leading-none
//                   tracking-[-0.09em]
//                   text-[#B8F23A]/[0.045]
//                 ">
//                 {activeProject.number}
//               </span>

//               <div
//                 className="
//                   relative
//                   z-10
//                   flex
//                   items-center
//                   justify-between
//                   gap-5
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
//                     Project intelligence
//                   </p>

//                   <p
//                     className="
//                       mt-1
//                       text-[7px]
//                       uppercase
//                       tracking-[0.13em]
//                       text-white/25
//                     ">
//                     GRUNER Energy
//                   </p>
//                 </div>

//                 <div className="flex items-center gap-2">
//                   <button
//                     type="button"
//                     onClick={previousProject}
//                     className="
//                       flex
//                       h-9
//                       w-9
//                       items-center
//                       justify-center
//                       rounded-full
//                       border
//                       border-white/10
//                       text-white/45
//                       transition-all
//                       duration-300

//                       hover:border-[#B8F23A]
//                       hover:bg-[#B8F23A]
//                       hover:text-[#10372E]
//                     ">
//                     <ArrowLeft size={14} strokeWidth={1.5} />
//                   </button>

//                   <button
//                     type="button"
//                     onClick={nextProject}
//                     className="
//                       flex
//                       h-9
//                       w-9
//                       items-center
//                       justify-center
//                       rounded-full
//                       bg-[#B8F23A]
//                       text-[#10372E]
//                       transition-all
//                       duration-300

//                       hover:scale-105
//                     ">
//                     <ArrowRight size={14} strokeWidth={1.5} />
//                   </button>
//                 </div>
//               </div>

//               {/* description */}

//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={`info-${activeProject.id}`}
//                   initial={{
//                     opacity: 0,
//                     y: 14,
//                   }}
//                   animate={{
//                     opacity: 1,
//                     y: 0,
//                   }}
//                   exit={{
//                     opacity: 0,
//                     y: -8,
//                   }}
//                   transition={{
//                     duration: 0.42,
//                   }}
//                   className="relative z-10 mt-12">
//                   <div className="flex items-center gap-3">
//                     <span className="h-px w-8 bg-[#B8F23A]" />

//                     <p
//                       className="
//                         text-[7px]
//                         font-bold
//                         uppercase
//                         tracking-[0.17em]
//                         text-[#B8F23A]
//                       ">
//                       {activeProject.category}
//                     </p>
//                   </div>

//                   <p
//                     className="
//                       mt-5
//                       text-[12px]
//                       leading-7
//                       text-white/48
//                     ">
//                     {activeProject.description}
//                   </p>

//                   <div
//                     className="
//                       mt-7
//                       flex
//                       flex-wrap
//                       gap-2
//                     ">
//                     {activeProject.tags.map((tag) => (
//                       <span
//                         key={tag}
//                         className="
//                           rounded-full
//                           border
//                           border-white/[0.08]
//                           bg-white/[0.035]
//                           px-3
//                           py-2
//                           text-[6px]
//                           font-semibold
//                           uppercase
//                           tracking-[0.13em]
//                           text-white/35
//                         ">
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 </motion.div>
//               </AnimatePresence>

//               {/* metrics */}

//               <div
//                 className="
//                   relative
//                   z-10
//                   mt-auto
//                   border-t
//                   border-white/[0.08]
//                   pt-7
//                 ">
//                 <p
//                   className="
//                     text-[7px]
//                     font-bold
//                     uppercase
//                     tracking-[0.18em]
//                     text-white/25
//                   ">
//                   System profile
//                 </p>

//                 <div className="mt-5 space-y-3">
//                   {activeProject.metrics.map((metric) => {
//                     const Icon = metric.icon;

//                     return (
//                       <div
//                         key={metric.label}
//                         className="
//                           group
//                           flex
//                           items-center
//                           justify-between
//                           gap-5
//                           rounded-[11px]
//                           border
//                           border-white/[0.06]
//                           bg-white/[0.025]
//                           px-4
//                           py-4
//                           transition-all
//                           duration-300

//                           hover:border-[#B8F23A]/25
//                           hover:bg-white/[0.04]
//                         ">
//                         <div className="flex items-center gap-3">
//                           <span
//                             className="
//                               flex
//                               h-9
//                               w-9
//                               items-center
//                               justify-center
//                               rounded-[9px]
//                               bg-[#B8F23A]/10
//                               text-[#B8F23A]
//                             ">
//                             <Icon size={15} strokeWidth={1.6} />
//                           </span>

//                           <span
//                             className="
//                               text-[7px]
//                               font-semibold
//                               uppercase
//                               tracking-[0.13em]
//                               text-white/30
//                             ">
//                             {metric.label}
//                           </span>
//                         </div>

//                         <span
//                           className="
//                             text-[8px]
//                             font-bold
//                             uppercase
//                             tracking-[0.12em]
//                             text-[#B8F23A]
//                           ">
//                           {metric.value}
//                         </span>
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* =================================================
//               PROJECT SELECTOR
//           ================================================= */}

//           <div
//             className="
//               grid
//               border-t
//               border-white/[0.08]
//               md:grid-cols-3
//             ">
//             {projects.map((project, index) => {
//               const isActive = activeIndex === index;

//               return (
//                 <button
//                   key={project.id}
//                   type="button"
//                   onClick={() => setActiveIndex(index)}
//                   className={`
//                     group
//                     relative
//                     flex
//                     min-h-[90px]
//                     items-center
//                     justify-between
//                     gap-5
//                     border-b
//                     border-white/[0.07]
//                     px-5
//                     text-left
//                     transition-all
//                     duration-400

//                     md:border-b-0
//                     md:border-r
//                     md:last:border-r-0

//                     ${
//                       isActive
//                         ? "bg-[#B8F23A] text-[#10372E]"
//                         : "bg-[#0D3028] text-white hover:bg-[#123A31]"
//                     }
//                   `}>
//                   <div>
//                     <div className="flex items-center gap-3">
//                       <span
//                         className={`
//                           text-[6px]
//                           font-bold
//                           tracking-[0.15em]

//                           ${isActive ? "text-[#10372E]/50" : "text-[#B8F23A]"}
//                         `}>
//                         {project.number}
//                       </span>

//                       <span
//                         className={`
//                           text-[6px]
//                           font-bold
//                           uppercase
//                           tracking-[0.14em]

//                           ${isActive ? "text-[#10372E]/45" : "text-white/25"}
//                         `}>
//                         {project.category}
//                       </span>
//                     </div>

//                     <p
//                       className="
//                         mt-2
//                         max-w-[330px]
//                         text-[10px]
//                         font-semibold
//                         leading-5
//                       ">
//                       {project.title}
//                     </p>
//                   </div>

//                   <ArrowUpRight
//                     size={14}
//                     strokeWidth={1.5}
//                     className={`
//                       shrink-0
//                       transition-transform
//                       duration-300

//                       group-hover:-translate-y-0.5
//                       group-hover:translate-x-0.5

//                       ${isActive ? "text-[#10372E]" : "text-[#B8F23A]"}
//                     `}
//                   />
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default SolarProjectsSection;

import { AnimatePresence, motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BatteryCharging,
  Factory,
  Gauge,
  Layers3,
  SolarPanel,
  Zap,
} from "lucide-react";
import { useState } from "react";

import solarMain from "../../assets/images/solar/solar-main.jpg";
import solarDetail01 from "../../assets/images/solar/solar-detail-01.jpg";
import solarDetail02 from "../../assets/images/solar/solar-detail-02.jpg";

const projects = [
  {
    id: "project-01",
    number: "01",
    category: "Escenario · Solar industrial",
    title: "Infraestructura solar para operaciones de alta demanda",
    scope: "Aplicación industrial",
    image: solarMain,
    description:
      "Soluciones fotovoltaicas integradas a instalaciones industriales donde eficiencia, continuidad y reducción de consumo de red forman parte de una misma estrategia energética.",
    metrics: [
      {
        label: "Tecnología",
        value: "Solar PV",
        icon: SolarPanel,
      },
      {
        label: "Aplicación",
        value: "Industrial",
        icon: Factory,
      },
      {
        label: "Gestión",
        value: "Energy Flow",
        icon: Gauge,
      },
    ],
    tags: ["Autoconsumo", "Industria", "Generación distribuida"],
  },
  {
    id: "project-02",
    number: "02",
    category: "Escenario · Solar + BESS",
    title: "Generación y almacenamiento como una sola infraestructura",
    scope: "Sistema integrado",
    image: solarDetail01,
    description:
      "La incorporación de almacenamiento permite extender el valor de la generación solar y responder de forma más flexible a las necesidades energéticas de la operación.",
    metrics: [
      {
        label: "Tecnología",
        value: "PV + BESS",
        icon: BatteryCharging,
      },
      {
        label: "Aplicación",
        value: "Storage",
        icon: Zap,
      },
      {
        label: "Control",
        value: "EMS",
        icon: Gauge,
      },
    ],
    tags: ["BESS", "Flexibilidad", "Gestión energética"],
  },
  {
    id: "project-03",
    number: "03",
    category: "Escenario · Infraestructura energética",
    title: "Energía preparada para crecer con la operación",
    scope: "Infraestructura escalable",
    image: solarDetail02,
    description:
      "Diseñamos sistemas escalables que pueden acompañar cambios en demanda, electrificación de procesos y nuevas necesidades de infraestructura.",
    metrics: [
      {
        label: "Sistema",
        value: "Integrated",
        icon: SolarPanel,
      },
      {
        label: "Escala",
        value: "Expandable",
        icon: BatteryCharging,
      },
      {
        label: "Control",
        value: "Smart",
        icon: Gauge,
      },
    ],
    tags: ["Escalabilidad", "Electrificación", "Resiliencia"],
  },
];

function SolarProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProject = projects[activeIndex];

  const previousProject = () => {
    setActiveIndex((current) =>
      current === 0 ? projects.length - 1 : current - 1,
    );
  };

  const nextProject = () => {
    setActiveIndex((current) =>
      current === projects.length - 1 ? 0 : current + 1,
    );
  };

  return (
    <section
      id="solar-proyectos"
      className="
        relative
        overflow-hidden
        bg-[#0F352C]
        py-20
        text-white
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
          opacity-[0.18]
          [background-image:linear-gradient(rgba(255,255,255,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.055)_1px,transparent_1px)]
          [background-size:72px_72px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[160px]
          -top-[180px]
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#9DD827]/10
          blur-[110px]
        "
      />

      <span
        className="
          pointer-events-none
          absolute
          -right-4
          bottom-[-30px]
          hidden
          select-none
          text-[clamp(10rem,18vw,21rem)]
          font-semibold
          leading-none
          tracking-[-0.09em]
          text-white/[0.018]
          xl:block
        ">
        WORK
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
              <span className="h-px w-9 bg-[#B8F23A]" />

              <p
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.22em]
                  text-[#B8F23A]
                ">
                Configuraciones de proyecto
              </p>
            </div>

            <h2
              className="
                mt-5
                max-w-[850px]
                text-[clamp(2.7rem,4.4vw,5.2rem)]
                font-normal
                leading-[0.93]
                tracking-[-0.06em]
              ">
              La estrategia se vuelve
              <span className="block text-[#B8F23A]">
                infraestructura real.
              </span>
            </h2>
          </div>

          <p
            className="
              max-w-[420px]
              text-[12px]
              leading-7
              text-white/45
              lg:pb-2
            ">
            Estas configuraciones muestran distintas formas de integrar
            tecnología, infraestructura y operación. Se presentan como
            escenarios de solución, no como fichas de proyectos específicos.
          </p>
        </motion.div>

        {/* ===================================================
            PROJECT STAGE
        =================================================== */}

        <div
          className="
            mt-14
            overflow-hidden
            rounded-[20px]
            border
            border-white/[0.08]
            bg-[#0B2D25]
            shadow-[0_30px_80px_rgba(0,0,0,.16)]
          ">
          <div
            className="
              grid
              lg:grid-cols-[1.25fr_.75fr]
            ">
            {/* =================================================
                IMAGE
            ================================================= */}

            <div
              className="
                relative
                min-h-[520px]
                overflow-hidden
                sm:min-h-[600px]
                lg:min-h-[650px]
              ">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeProject.id}
                  src={activeProject.image}
                  alt={activeProject.title}
                  initial={{
                    opacity: 0,
                    scale: 1.04,
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
                    duration: 0.65,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    absolute
                    inset-0
                    h-full
                    w-full
                    object-cover
                  "
                />
              </AnimatePresence>

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-[#09271F]/85
                  via-[#09271F]/15
                  to-transparent
                "
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-transparent
                  via-transparent
                  to-[#09271F]/18
                "
              />

              {/* top */}

              <div
                className="
                  absolute
                  left-6
                  right-6
                  top-6
                  z-20
                  flex
                  items-start
                  justify-between
                  gap-4
                  sm:left-8
                  sm:right-8
                  sm:top-8
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
                    text-[#143E33]
                    backdrop-blur-xl
                  ">
                  <span className="h-2 w-2 rounded-full bg-[#83B500]" />

                  <span
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.16em]
                    ">
                    {activeProject.category}
                  </span>
                </div>

                <span
                  className="
                    rounded-full
                    border
                    border-white/20
                    bg-[#143E33]/65
                    px-4
                    py-2.5
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-[#B8F23A]
                    backdrop-blur-lg
                  ">
                  {activeProject.number} / 0{projects.length}
                </span>
              </div>

              {/* bottom text */}

              <AnimatePresence mode="wait">
                <motion.div
                  key={`image-text-${activeProject.id}`}
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
                    y: 8,
                  }}
                  transition={{
                    duration: 0.45,
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
                  <div className="flex items-center gap-3">
                    <Layers3
                      size={12}
                      strokeWidth={1.6}
                      className="text-[#B8F23A]"
                    />

                    <span
                      className="
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.17em]
                        text-white/55
                      ">
                      {activeProject.scope}
                    </span>
                  </div>

                  <h3
                    className="
                      mt-4
                      max-w-[800px]
                      text-[clamp(2rem,3.5vw,4.2rem)]
                      font-normal
                      leading-[0.94]
                      tracking-[-0.055em]
                    ">
                    {activeProject.title}
                  </h3>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* =================================================
                INFORMATION PANEL
            ================================================= */}

            <div
              className="
                relative
                flex
                min-h-[520px]
                flex-col
                overflow-hidden
                bg-[#123A31]
                p-7
                sm:p-8
                lg:min-h-[650px]
                xl:p-10
              ">
              <span
                className="
                  pointer-events-none
                  absolute
                  -right-3
                  -top-8
                  text-[150px]
                  font-light
                  leading-none
                  tracking-[-0.09em]
                  text-[#B8F23A]/[0.045]
                ">
                {activeProject.number}
              </span>

              <div
                className="
                  relative
                  z-10
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
                      tracking-[0.19em]
                      text-[#B8F23A]
                    ">
                    Configuración energética
                  </p>

                  <p
                    className="
                      mt-1
                      text-[11px]
                      uppercase
                      tracking-[0.13em]
                      text-white/25
                    ">
                    GRUNER Energy
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={previousProject}
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/10
                      text-white/45
                      transition-all
                      duration-300

                      hover:border-[#B8F23A]
                      hover:bg-[#B8F23A]
                      hover:text-[#10372E]
                    ">
                    <ArrowLeft size={14} strokeWidth={1.5} />
                  </button>

                  <button
                    type="button"
                    onClick={nextProject}
                    className="
                      flex
                      h-9
                      w-9
                      items-center
                      justify-center
                      rounded-full
                      bg-[#B8F23A]
                      text-[#10372E]
                      transition-all
                      duration-300

                      hover:scale-105
                    ">
                    <ArrowRight size={14} strokeWidth={1.5} />
                  </button>
                </div>
              </div>

              {/* description */}

              <AnimatePresence mode="wait">
                <motion.div
                  key={`info-${activeProject.id}`}
                  initial={{
                    opacity: 0,
                    y: 14,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -8,
                  }}
                  transition={{
                    duration: 0.42,
                  }}
                  className="relative z-10 mt-12">
                  <div className="flex items-center gap-3">
                    <span className="h-px w-8 bg-[#B8F23A]" />

                    <p
                      className="
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.17em]
                        text-[#B8F23A]
                      ">
                      {activeProject.category}
                    </p>
                  </div>

                  <p
                    className="
                      mt-5
                      text-[12px]
                      leading-7
                      text-white/48
                    ">
                    {activeProject.description}
                  </p>

                  <div
                    className="
                      mt-7
                      flex
                      flex-wrap
                      gap-2
                    ">
                    {activeProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="
                          rounded-full
                          border
                          border-white/[0.08]
                          bg-white/[0.035]
                          px-3
                          py-2
                          text-[11px]
                          font-semibold
                          uppercase
                          tracking-[0.13em]
                          text-white/35
                        ">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* metrics */}

              <div
                className="
                  relative
                  z-10
                  mt-auto
                  border-t
                  border-white/[0.08]
                  pt-7
                ">
                <p
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-white/25
                  ">
                  System profile
                </p>

                <div className="mt-5 space-y-3">
                  {activeProject.metrics.map((metric) => {
                    const Icon = metric.icon;

                    return (
                      <div
                        key={metric.label}
                        className="
                          group
                          flex
                          items-center
                          justify-between
                          gap-5
                          rounded-[11px]
                          border
                          border-white/[0.06]
                          bg-white/[0.025]
                          px-4
                          py-4
                          transition-all
                          duration-300

                          hover:border-[#B8F23A]/25
                          hover:bg-white/[0.04]
                        ">
                        <div className="flex items-center gap-3">
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
                            <Icon size={15} strokeWidth={1.6} />
                          </span>

                          <span
                            className="
                              text-[11px]
                              font-semibold
                              uppercase
                              tracking-[0.13em]
                              text-white/30
                            ">
                            {metric.label}
                          </span>
                        </div>

                        <span
                          className="
                            text-[11px]
                            font-bold
                            uppercase
                            tracking-[0.12em]
                            text-[#B8F23A]
                          ">
                          {metric.value}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              PROJECT SELECTOR
          ================================================= */}

          <div
            className="
              grid
              border-t
              border-white/[0.08]
              md:grid-cols-3
            ">
            {projects.map((project, index) => {
              const isActive = activeIndex === index;

              return (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`
                    group
                    relative
                    flex
                    min-h-[90px]
                    items-center
                    justify-between
                    gap-5
                    border-b
                    border-white/[0.07]
                    px-5
                    text-left
                    transition-all
                    duration-400

                    md:border-b-0
                    md:border-r
                    md:last:border-r-0

                    ${
                      isActive
                        ? "bg-[#B8F23A] text-[#10372E]"
                        : "bg-[#0D3028] text-white hover:bg-[#123A31]"
                    }
                  `}>
                  <div>
                    <div className="flex items-center gap-3">
                      <span
                        className={`
                          text-[11px]
                          font-bold
                          tracking-[0.15em]

                          ${isActive ? "text-[#10372E]/50" : "text-[#B8F23A]"}
                        `}>
                        {project.number}
                      </span>

                      <span
                        className={`
                          text-[11px]
                          font-bold
                          uppercase
                          tracking-[0.14em]

                          ${isActive ? "text-[#10372E]/45" : "text-white/25"}
                        `}>
                        {project.category}
                      </span>
                    </div>

                    <p
                      className="
                        mt-2
                        max-w-[330px]
                        text-[13px]
                        font-semibold
                        leading-5
                      ">
                      {project.title}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.5}
                    className={`
                      shrink-0
                      transition-transform
                      duration-300

                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5

                      ${isActive ? "text-[#10372E]" : "text-[#B8F23A]"}
                    `}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SolarProjectsSection;
