// import { AnimatePresence, motion } from "motion/react";
// import { useEffect, useState } from "react";
// import { BatteryCharging, Recycle, Sun, Zap } from "lucide-react";

// import projectBess from "../../assets/images/projects/project-bess.jpg";
// import projectEv from "../../assets/images/projects/project-ev.jpg";
// import projectResiduos from "../../assets/images/projects/project-residuos.jpg";
// import projectSolar from "../../assets/images/projects/project-solar.jpg";

// /* =========================================================
//    DATA
// ========================================================= */

// const projects = [
//   {
//     id: "solar",
//     number: "01",
//     category: "Energía solar",
//     icon: Sun,
//     title: "Infraestructura solar para transformar la operación energética.",
//     description:
//       "Diseño, ingeniería e implementación de sistemas fotovoltaicos para proyectos industriales y comerciales.",
//     image: projectSolar,
//     metrics: [
//       {
//         label: "Solución",
//         value: "Solar FV",
//       },
//       {
//         label: "Modalidad",
//         value: "EPC",
//       },
//       {
//         label: "Impacto",
//         value: "Descarbonización",
//       },
//     ],
//   },
//   {
//     id: "ev",
//     number: "02",
//     category: "Electromovilidad",
//     icon: Zap,
//     title: "Carga rápida preparada para una nueva generación de movilidad.",
//     description:
//       "Infraestructura inteligente de carga rápida para flotillas, industria, comercio y desarrollos inmobiliarios.",
//     image: projectEv,
//     metrics: [
//       {
//         label: "Solución",
//         value: "DC Fast",
//       },
//       {
//         label: "Aplicación",
//         value: "Flotillas",
//       },
//       {
//         label: "Ecosistema",
//         value: "Smart charging",
//       },
//     ],
//   },
//   {
//     id: "bess",
//     number: "03",
//     category: "Solar + BESS",
//     icon: BatteryCharging,
//     title: "Energía disponible cuando la operación realmente la necesita.",
//     description:
//       "Integración de generación solar y almacenamiento para optimizar consumo, resiliencia y desempeño energético.",
//     image: projectBess,
//     metrics: [
//       {
//         label: "Solución",
//         value: "BESS",
//       },
//       {
//         label: "Objetivo",
//         value: "Resiliencia",
//       },
//       {
//         label: "Integración",
//         value: "Solar + storage",
//       },
//     ],
//   },
//   {
//     id: "residuos",
//     number: "04",
//     category: "Valorización",
//     icon: Recycle,
//     title: "Convertimos residuos en recursos con valor ambiental y energético.",
//     description:
//       "Desarrollo de soluciones para tratamiento, valorización y aprovechamiento de residuos urbanos y agroindustriales.",
//     image: projectResiduos,
//     metrics: [
//       {
//         label: "Solución",
//         value: "Valorización",
//       },
//       {
//         label: "Enfoque",
//         value: "Circularidad",
//       },
//       {
//         label: "Resultado",
//         value: "Recuperación",
//       },
//     ],
//   },
// ];

// /* =========================================================
//    ICONS
// ========================================================= */

// const ArrowLeftIcon = ({ size = 22, className = "" }) => (
//   <svg
//     width={size}
//     height={size}
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.5"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className={className}
//     aria-hidden="true">
//     <path d="M19 12H5" />
//     <path d="m11 18-6-6 6-6" />
//   </svg>
// );

// const ArrowRightIcon = ({ size = 22, className = "" }) => (
//   <svg
//     width={size}
//     height={size}
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.5"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className={className}
//     aria-hidden="true">
//     <path d="M5 12h14" />
//     <path d="m13 6 6 6-6 6" />
//   </svg>
// );

// const ArrowUpRightIcon = ({ size = 19, className = "" }) => (
//   <svg
//     width={size}
//     height={size}
//     viewBox="0 0 24 24"
//     fill="none"
//     stroke="currentColor"
//     strokeWidth="1.5"
//     strokeLinecap="round"
//     strokeLinejoin="round"
//     className={className}
//     aria-hidden="true">
//     <path d="M7 17 17 7" />
//     <path d="M7 7h10v10" />
//   </svg>
// );

// /* =========================================================
//    PROJECTS
// ========================================================= */

// function ProjectsSection() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [direction, setDirection] = useState(1);

//   const activeProject = projects[activeIndex];

//   /* =======================================================
//      NAVIGATION
//   ======================================================= */

//   const goNext = () => {
//     setDirection(1);

//     setActiveIndex((current) =>
//       current === projects.length - 1 ? 0 : current + 1,
//     );
//   };

//   const goPrev = () => {
//     setDirection(-1);

//     setActiveIndex((current) =>
//       current === 0 ? projects.length - 1 : current - 1,
//     );
//   };

//   const goToProject = (index) => {
//     if (index === activeIndex) {
//       return;
//     }

//     setDirection(index > activeIndex ? 1 : -1);
//     setActiveIndex(index);
//   };

//   /* =======================================================
//      KEYBOARD
//   ======================================================= */

//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.key === "ArrowRight") {
//         goNext();
//       }

//       if (event.key === "ArrowLeft") {
//         goPrev();
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, []);

//   return (
//     <section
//       id="proyectos"
//       className="
//         relative
//         overflow-hidden
//         bg-[#F1F5E9]
//         py-24
//         text-[#17392E]

//         lg:py-32
//       ">
//       {/* =====================================================
//           BACKGROUND
//       ===================================================== */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           inset-0
//           bg-[radial-gradient(circle_at_16%_40%,rgba(157,216,39,.15),transparent_27%),radial-gradient(circle_at_88%_72%,rgba(127,165,28,.10),transparent_24%)]
//         "
//       />

//       {/* GRID */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           inset-0
//           opacity-[0.05]
//           [background-image:linear-gradient(rgba(45,82,65,.30)_1px,transparent_1px),linear-gradient(90deg,rgba(45,82,65,.30)_1px,transparent_1px)]
//           [background-size:42px_42px]
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
//             HEADER
//         =================================================== */}

//         <div
//           className="
//             grid
//             gap-10

//             lg:grid-cols-[.55fr_1.45fr]
//             lg:items-end
//           ">
//           {/* LEFT */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 20,
//             }}
//             whileInView={{
//               opacity: 1,
//               y: 0,
//             }}
//             viewport={{
//               once: true,
//               amount: 0.4,
//             }}
//             transition={{
//               duration: 0.7,
//             }}>
//             <div className="flex items-center gap-4">
//               <span className="h-px w-10 bg-[#7FA51C]" />

//               <p
//                 className="
//                   text-[10px]
//                   font-semibold
//                   uppercase
//                   tracking-[0.2em]
//                   text-[#688A1B]
//                 ">
//                 Proyectos
//               </p>
//             </div>

//             <p
//               className="
//                 mt-7
//                 max-w-[390px]
//                 text-sm
//                 leading-7
//                 text-[#61786E]

//                 sm:text-base
//               ">
//               Capacidades que conectan estrategia, ingeniería y ejecución para
//               convertir retos en resultados.
//             </p>
//           </motion.div>

//           {/* TITLE */}

//           <motion.h2
//             initial={{
//               opacity: 0,
//               y: 34,
//             }}
//             whileInView={{
//               opacity: 1,
//               y: 0,
//             }}
//             viewport={{
//               once: true,
//               amount: 0.3,
//             }}
//             transition={{
//               duration: 0.85,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="
//               max-w-[1100px]
//               text-[clamp(3.4rem,6vw,7.8rem)]
//               font-normal
//               leading-[0.9]
//               tracking-[-0.07em]
//             ">
//             Lo que hacemos
//             <span className="block text-[#7FA51C]">también se puede ver.</span>
//           </motion.h2>
//         </div>

//         {/* =====================================================
//             MAIN PROJECT
//         ===================================================== */}

//         <div
//           className="
//             mt-16

//             lg:mt-20
//           ">
//           <div
//             className="
//               relative
//               grid
//               overflow-hidden
//               rounded-[32px]
//               bg-[#17392E]
//               shadow-[0_35px_110px_rgba(38,67,53,.16)]

//               lg:grid-cols-[1.18fr_.82fr]

//               xl:rounded-[40px]
//             ">
//             {/* =================================================
//                 IMAGE
//             ================================================= */}

//             <div
//               className="
//                 relative
//                 min-h-[500px]
//                 overflow-hidden

//                 lg:min-h-[720px]
//               ">
//               <AnimatePresence initial={false} custom={direction}>
//                 <motion.div
//                   key={activeProject.id}
//                   custom={direction}
//                   initial={{
//                     opacity: 0,
//                     x: direction > 0 ? 90 : -90,
//                     scale: 1.04,
//                   }}
//                   animate={{
//                     opacity: 1,
//                     x: 0,
//                     scale: 1,
//                   }}
//                   exit={{
//                     opacity: 0,
//                     x: direction > 0 ? -70 : 70,
//                     scale: 1.02,
//                   }}
//                   transition={{
//                     duration: 0.7,
//                     ease: [0.22, 1, 0.36, 1],
//                   }}
//                   className="
//                     absolute
//                     inset-0
//                   ">
//                   <img
//                     src={activeProject.image}
//                     alt={activeProject.title}
//                     className="
//                       h-full
//                       w-full
//                       object-cover
//                     "
//                   />

//                   {/* GREEN OVERLAY */}

//                   <div
//                     className="
//                       absolute
//                       inset-0
//                       bg-[#183C2E]/10
//                     "
//                   />

//                   {/* RIGHT GRADIENT */}

//                   <div
//                     className="
//                       absolute
//                       inset-0
//                       bg-gradient-to-r
//                       from-transparent
//                       via-transparent
//                       to-[#17392E]/45
//                     "
//                   />

//                   {/* BOTTOM GRADIENT */}

//                   <div
//                     className="
//                       absolute
//                       inset-0
//                       bg-gradient-to-t
//                       from-[#122D24]/52
//                       via-transparent
//                       to-transparent
//                     "
//                   />
//                 </motion.div>
//               </AnimatePresence>

//               {/* PROJECT INDEX */}

//               <div
//                 className="
//                   absolute
//                   left-7
//                   top-7
//                   z-20
//                   flex
//                   items-center
//                   gap-3

//                   sm:left-9
//                   sm:top-9
//                 ">
//                 <span
//                   className="
//                     flex
//                     h-12
//                     min-w-12
//                     items-center
//                     justify-center
//                     rounded-full
//                     bg-[#7FA51C]
//                     px-3
//                     text-[11px]
//                     font-semibold
//                     text-white
//                     shadow-lg
//                     backdrop-blur-xl
//                   ">
//                   {activeProject.number}
//                 </span>

//                 <span
//                   className="
//                     rounded-full
//                     bg-white/90
//                     px-4
//                     py-3
//                     text-[10px]
//                     font-semibold
//                     uppercase
//                     tracking-[0.12em]
//                     text-[#17392E]
//                     backdrop-blur-xl
//                   ">
//                   {activeProject.category}
//                 </span>
//               </div>

//               {/* IMAGE COUNTER */}

//               <div
//                 className="
//                   absolute
//                   bottom-7
//                   left-7
//                   z-20
//                   text-[11px]
//                   font-semibold
//                   tracking-[0.14em]
//                   text-white

//                   sm:bottom-9
//                   sm:left-9
//                 ">
//                 {String(activeIndex + 1).padStart(2, "0")}

//                 <span className="mx-3 text-white/30">/</span>

//                 <span className="text-white/55">
//                   {String(projects.length).padStart(2, "0")}
//                 </span>
//               </div>
//             </div>

//             {/* =================================================
//                 INFORMATION
//             ================================================= */}

//             <div
//               className="
//                 relative
//                 flex
//                 min-h-[500px]
//                 flex-col
//                 bg-[#17392E]
//                 p-8
//                 text-white

//                 sm:p-10
//                 lg:min-h-[720px]
//                 xl:p-12
//               ">
//               {/* GLOW */}

//               <div
//                 className="
//                   pointer-events-none
//                   absolute
//                   -right-24
//                   -top-24
//                   h-[360px]
//                   w-[360px]
//                   rounded-full
//                   bg-[#9DD827]/12
//                   blur-[115px]
//                 "
//               />

//               <AnimatePresence mode="wait" initial={false}>
//                 <motion.div
//                   key={activeProject.id}
//                   initial={{
//                     opacity: 0,
//                     y: 24,
//                   }}
//                   animate={{
//                     opacity: 1,
//                     y: 0,
//                   }}
//                   exit={{
//                     opacity: 0,
//                     y: -18,
//                   }}
//                   transition={{
//                     duration: 0.45,
//                   }}
//                   className="
//                     relative
//                     z-10
//                     flex
//                     h-full
//                     flex-col
//                   ">
//                   <div>
//                     <p
//                       className="
//                         text-[10px]
//                         font-semibold
//                         uppercase
//                         tracking-[0.18em]
//                         text-[#9DD827]
//                       ">
//                       Solución en acción
//                     </p>

//                     <h3
//                       className="
//                         mt-7
//                         max-w-[620px]
//                         text-[clamp(2rem,3vw,4rem)]
//                         font-normal
//                         leading-[1.02]
//                         tracking-[-0.055em]
//                         text-white
//                       ">
//                       {activeProject.title}
//                     </h3>

//                     <p
//                       className="
//                         mt-7
//                         max-w-[620px]
//                         text-sm
//                         leading-7
//                         text-white/62

//                         sm:text-base
//                       ">
//                       {activeProject.description}
//                     </p>
//                   </div>

//                   {/* METRICS */}

//                   <div
//                     className="
//                       mt-10
//                       grid
//                       grid-cols-1
//                       border-y
//                       border-white/10

//                       sm:grid-cols-3
//                     ">
//                     {activeProject.metrics.map((metric, index) => (
//                       <div
//                         key={metric.label}
//                         className={[
//                           `
//                               py-5
//                             `,
//                           index !== activeProject.metrics.length - 1
//                             ? "border-b border-white/10 sm:border-b-0 sm:border-r sm:px-5"
//                             : "sm:pl-5",
//                           index === 0 ? "sm:pr-5" : "",
//                         ].join(" ")}>
//                         <span
//                           className="
//                               block
//                               text-[9px]
//                               font-semibold
//                               uppercase
//                               tracking-[0.14em]
//                               text-white/35
//                             ">
//                           {metric.label}
//                         </span>

//                         <span
//                           className="
//                               mt-2
//                               block
//                               text-[14px]
//                               font-medium
//                               text-white
//                             ">
//                           {metric.value}
//                         </span>
//                       </div>
//                     ))}
//                   </div>

//                   {/* CTA + CONTROLS */}

//                   <div
//                     className="
//                       mt-auto
//                       flex
//                       flex-wrap
//                       items-end
//                       justify-between
//                       gap-7
//                       pt-10
//                     ">
//                     <a
//                       href="#contacto"
//                       className="
//                         group
//                         inline-flex
//                         items-center
//                         gap-4
//                       ">
//                       <span
//                         className="
//                           flex
//                           h-12
//                           w-12
//                           items-center
//                           justify-center
//                           rounded-full
//                           bg-[#7FA51C]
//                           text-white
//                           transition-all
//                           duration-300

//                           group-hover:rotate-45
//                           group-hover:bg-[#9DD827]
//                           group-hover:text-[#17392E]
//                         ">
//                         <ArrowUpRightIcon />
//                       </span>

//                       <span
//                         className="
//                           text-sm
//                           font-medium
//                           text-white
//                         ">
//                         Conocer solución
//                       </span>
//                     </a>

//                     {/* ARROWS */}

//                     <div className="flex items-center gap-2">
//                       <button
//                         type="button"
//                         onClick={goPrev}
//                         aria-label="Proyecto anterior"
//                         className="
//                           flex
//                           h-12
//                           w-12
//                           items-center
//                           justify-center
//                           rounded-full
//                           border
//                           border-white/15
//                           text-white
//                           transition-all
//                           duration-300

//                           hover:border-[#9DD827]
//                           hover:bg-[#9DD827]
//                           hover:text-[#17392E]
//                         ">
//                         <ArrowLeftIcon />
//                       </button>

//                       <button
//                         type="button"
//                         onClick={goNext}
//                         aria-label="Siguiente proyecto"
//                         className="
//                           flex
//                           h-12
//                           w-12
//                           items-center
//                           justify-center
//                           rounded-full
//                           bg-[#7FA51C]
//                           text-white
//                           transition-all
//                           duration-300

//                           hover:bg-[#9DD827]
//                           hover:text-[#17392E]
//                         ">
//                         <ArrowRightIcon />
//                       </button>
//                     </div>
//                   </div>
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//           </div>
//         </div>

//         {/* =====================================================
//             PROJECT SELECTOR
//         ===================================================== */}

//         <div
//           className="
//             mt-7
//             grid
//             gap-3

//             sm:grid-cols-2
//             lg:grid-cols-4
//           ">
//           {projects.map((project, index) => {
//             const isActive = index === activeIndex;
//             const Icon = project.icon;

//             return (
//               <button
//                 key={project.id}
//                 type="button"
//                 onClick={() => goToProject(index)}
//                 className={[
//                   `
//                     group
//                     relative
//                     overflow-hidden
//                     rounded-[18px]
//                     border
//                     px-5
//                     py-5
//                     text-left
//                     transition-all
//                     duration-300
//                   `,
//                   isActive
//                     ? `
//                         border-[#7FA51C]
//                         bg-[#7FA51C]
//                         text-white
//                         shadow-[0_14px_40px_rgba(127,165,28,.15)]
//                       `
//                     : `
//                         border-[#355E4A]/10
//                         bg-[#EAF0DF]/75
//                         text-[#17392E]

//                         hover:border-[#7FA51C]/35
//                         hover:bg-[#E2EBD5]
//                       `,
//                 ].join(" ")}>
//                 {/* TOP */}

//                 <div
//                   className="
//                     flex
//                     items-start
//                     justify-between
//                     gap-5
//                   ">
//                   <span
//                     className={[
//                       `
//                         text-[10px]
//                         font-semibold
//                         tracking-[0.14em]
//                       `,
//                       isActive ? "text-white/65" : "text-[#7FA51C]",
//                     ].join(" ")}>
//                     {project.number}
//                   </span>

//                   {/* ICON */}

//                   <span
//                     className={[
//                       `
//                         flex
//                         h-10
//                         w-10
//                         items-center
//                         justify-center
//                         rounded-[12px]
//                         transition-all
//                         duration-300
//                       `,
//                       isActive
//                         ? `
//                             bg-white/12
//                             text-white
//                           `
//                         : `
//                             bg-[#7FA51C]/8
//                             text-[#7FA51C]

//                             group-hover:bg-[#7FA51C]
//                             group-hover:text-white
//                           `,
//                     ].join(" ")}>
//                     <Icon
//                       size={19}
//                       strokeWidth={1.6}
//                       className="
//                         transition-transform
//                         duration-300

//                         group-hover:scale-110
//                       "
//                     />
//                   </span>
//                 </div>

//                 {/* TITLE */}

//                 <div
//                   className="
//                     mt-7
//                     flex
//                     items-end
//                     justify-between
//                     gap-5
//                   ">
//                   <p
//                     className="
//                       text-[16px]
//                       font-medium
//                       leading-5
//                       tracking-[-0.025em]
//                     ">
//                     {project.category}
//                   </p>
//                 </div>

//                 {/* LINE */}

//                 <span
//                   className={[
//                     `
//                       mt-5
//                       block
//                       h-[2px]
//                       transition-all
//                       duration-500
//                     `,
//                     isActive
//                       ? `
//                           w-full
//                           bg-white
//                         `
//                       : `
//                           w-7
//                           bg-[#7FA51C]

//                           group-hover:w-full
//                         `,
//                   ].join(" ")}
//                 />
//               </button>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ProjectsSection;

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { BatteryCharging, Recycle, Sun, Zap } from "lucide-react";

import projectBess from "../../assets/images/projects/project-bess.jpg";
import projectEv from "../../assets/images/projects/project-ev.jpg";
import projectResiduos from "../../assets/images/projects/project-residuos.jpg";
import projectSolar from "../../assets/images/projects/project-solar.jpg";

/* =========================================================
   DATA
========================================================= */

const projects = [
  {
    id: "solar",
    number: "01",
    category: "Energía solar",
    icon: Sun,
    title: "Infraestructura solar para transformar la operación energética.",
    description:
      "Diseño, ingeniería e implementación de sistemas fotovoltaicos para proyectos industriales y comerciales.",
    image: projectSolar,
    metrics: [
      {
        label: "Solución",
        value: "Solar FV",
      },
      {
        label: "Alcance",
        value: "Ingeniería e implementación",
      },
      {
        label: "Objetivo",
        value: "Desempeño energético",
      },
    ],
  },
  {
    id: "ev",
    number: "02",
    category: "Movilidad eléctrica",
    icon: Zap,
    title: "Carga rápida preparada para una nueva generación de movilidad.",
    description:
      "Infraestructura de carga para flotillas, industria, comercio y desarrollos inmobiliarios, diseñada según la operación y la demanda energética.",
    image: projectEv,
    metrics: [
      {
        label: "Solución",
        value: "Infraestructura de carga",
      },
      {
        label: "Aplicación",
        value: "Flotillas",
      },
      {
        label: "Enfoque",
        value: "Gestión de carga",
      },
    ],
  },
  {
    id: "bess",
    number: "03",
    category: "Solar + BESS",
    icon: BatteryCharging,
    title: "Energía disponible cuando la operación realmente la necesita.",
    description:
      "Integración de generación solar y almacenamiento para optimizar consumo, resiliencia y desempeño energético.",
    image: projectBess,
    metrics: [
      {
        label: "Solución",
        value: "BESS",
      },
      {
        label: "Objetivo",
        value: "Resiliencia",
      },
      {
        label: "Integración",
        value: "Solar + almacenamiento",
      },
    ],
  },
  {
    id: "residuos",
    number: "04",
    category: "Valorización",
    icon: Recycle,
    title: "Convertimos residuos en recursos con valor ambiental y energético.",
    description:
      "Desarrollo de soluciones para valorización y aprovechamiento de residuos sólidos urbanos, agroindustriales y de manejo especial.",
    image: projectResiduos,
    metrics: [
      {
        label: "Solución",
        value: "Valorización",
      },
      {
        label: "Enfoque",
        value: "Circularidad",
      },
      {
        label: "Resultado",
        value: "Recuperación",
      },
    ],
  },
];

/* =========================================================
   ICONS
========================================================= */

const ArrowLeftIcon = ({ size = 22, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true">
    <path d="M19 12H5" />
    <path d="m11 18-6-6 6-6" />
  </svg>
);

const ArrowRightIcon = ({ size = 22, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true">
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

const ArrowUpRightIcon = ({ size = 19, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true">
    <path d="M7 17 17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

/* =========================================================
   PROJECTS
========================================================= */

function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const activeProject = projects[activeIndex];

  /* =======================================================
     NAVIGATION
  ======================================================= */

  const goNext = () => {
    setDirection(1);

    setActiveIndex((current) =>
      current === projects.length - 1 ? 0 : current + 1,
    );
  };

  const goPrev = () => {
    setDirection(-1);

    setActiveIndex((current) =>
      current === 0 ? projects.length - 1 : current - 1,
    );
  };

  const goToProject = (index) => {
    if (index === activeIndex) {
      return;
    }

    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  /* =======================================================
     KEYBOARD
  ======================================================= */

  useEffect(() => {
    const handleKeyDown = (event) => {
      const section = document.getElementById("proyectos");

      if (!section?.contains(document.activeElement)) {
        return;
      }

      if (event.key === "ArrowRight") {
        goNext();
      }

      if (event.key === "ArrowLeft") {
        goPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <section
      id="proyectos"
      aria-roledescription="carrusel"
      aria-label="Soluciones en acción"
      className="
        relative
        overflow-hidden
        bg-[#F1F5E9]
        py-24
        text-[#17392E]

        lg:py-32
      ">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_16%_40%,rgba(157,216,39,.15),transparent_27%),radial-gradient(circle_at_88%_72%,rgba(127,165,28,.10),transparent_24%)]
        "
      />

      {/* GRID */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.05]
          [background-image:linear-gradient(rgba(45,82,65,.30)_1px,transparent_1px),linear-gradient(90deg,rgba(45,82,65,.30)_1px,transparent_1px)]
          [background-size:42px_42px]
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
            HEADER
        =================================================== */}

        <div
          className="
            grid
            gap-10

            lg:grid-cols-[.55fr_1.45fr]
            lg:items-end
          ">
          {/* LEFT */}

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
              amount: 0.4,
            }}
            transition={{
              duration: 0.7,
            }}>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#7FA51C]" />

              <p
                className="
                  text-[12px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#688A1B]
                ">
                Soluciones en acción
              </p>
            </div>

            <p
              className="
                mt-7
                max-w-[390px]
                text-sm
                leading-7
                text-[#61786E]

                sm:text-base
              ">
              Una mirada a cómo nuestras capacidades se traducen en soluciones
              para energía, movilidad eléctrica y valorización de residuos.
            </p>
          </motion.div>

          {/* TITLE */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 34,
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
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              max-w-[1100px]
              text-[clamp(3.4rem,6vw,7.8rem)]
              font-normal
              leading-[0.9]
              tracking-[-0.07em]
            ">
            De la capacidad
            <span className="block text-[#7FA51C]">a la solución.</span>
          </motion.h2>
        </div>

        {/* =====================================================
            MAIN PROJECT
        ===================================================== */}

        <div
          className="
            mt-16

            lg:mt-20
          ">
          <div
            className="
              relative
              grid
              overflow-hidden
              rounded-[32px]
              bg-[#17392E]
              shadow-[0_35px_110px_rgba(38,67,53,.16)]

              lg:grid-cols-[1.18fr_.82fr]

              xl:rounded-[40px]
            ">
            {/* =================================================
                IMAGE
            ================================================= */}

            <div
              className="
                relative
                min-h-[500px]
                overflow-hidden

                lg:min-h-[720px]
              ">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={activeProject.id}
                  custom={direction}
                  initial={{
                    opacity: 0,
                    x: direction > 0 ? 90 : -90,
                    scale: 1.04,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    x: direction > 0 ? -70 : 70,
                    scale: 1.02,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    absolute
                    inset-0
                  ">
                  <img
                    src={activeProject.image}
                    alt={`Solución de ${activeProject.category}`}
                    className="
                      h-full
                      w-full
                      object-cover
                    "
                  />

                  {/* GREEN OVERLAY */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-[#183C2E]/10
                    "
                  />

                  {/* RIGHT GRADIENT */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-r
                      from-transparent
                      via-transparent
                      to-[#17392E]/45
                    "
                  />

                  {/* BOTTOM GRADIENT */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-t
                      from-[#122D24]/52
                      via-transparent
                      to-transparent
                    "
                  />
                </motion.div>
              </AnimatePresence>

              {/* PROJECT INDEX */}

              <div
                className="
                  absolute
                  left-7
                  top-7
                  z-20
                  flex
                  items-center
                  gap-3

                  sm:left-9
                  sm:top-9
                ">
                <span
                  className="
                    flex
                    h-12
                    min-w-12
                    items-center
                    justify-center
                    rounded-full
                    bg-[#7FA51C]
                    px-3
                    text-[11px]
                    font-semibold
                    text-white
                    shadow-lg
                    backdrop-blur-xl
                  ">
                  {activeProject.number}
                </span>

                <span
                  className="
                    rounded-full
                    bg-white/90
                    px-4
                    py-3
                    text-[12px]
                    font-semibold
                    uppercase
                    tracking-[0.12em]
                    text-[#17392E]
                    backdrop-blur-xl
                  ">
                  {activeProject.category}
                </span>
              </div>

              {/* IMAGE COUNTER */}

              <div
                className="
                  absolute
                  bottom-7
                  left-7
                  z-20
                  text-[11px]
                  font-semibold
                  tracking-[0.14em]
                  text-white

                  sm:bottom-9
                  sm:left-9
                ">
                {String(activeIndex + 1).padStart(2, "0")}

                <span className="mx-3 text-white/30">/</span>

                <span className="text-white/55">
                  {String(projects.length).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* =================================================
                INFORMATION
            ================================================= */}

            <div
              className="
                relative
                flex
                min-h-[500px]
                flex-col
                bg-[#17392E]
                p-8
                text-white

                sm:p-10
                lg:min-h-[720px]
                xl:p-12
              ">
              {/* GLOW */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -right-24
                  -top-24
                  h-[360px]
                  w-[360px]
                  rounded-full
                  bg-[#9DD827]/12
                  blur-[115px]
                "
              />

              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={activeProject.id}
                  initial={{
                    opacity: 0,
                    y: 24,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -18,
                  }}
                  transition={{
                    duration: 0.45,
                  }}
                  className="
                    relative
                    z-10
                    flex
                    h-full
                    flex-col
                  ">
                  <div>
                    <p
                      className="
                        text-[12px]
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        text-[#9DD827]
                      ">
                      Capacidad aplicada
                    </p>

                    <h3
                      className="
                        mt-7
                        max-w-[620px]
                        text-[clamp(2rem,3vw,4rem)]
                        font-normal
                        leading-[1.02]
                        tracking-[-0.055em]
                        text-white
                      ">
                      {activeProject.title}
                    </h3>

                    <p
                      className="
                        mt-7
                        max-w-[620px]
                        text-sm
                        leading-7
                        text-white/62

                        sm:text-base
                      ">
                      {activeProject.description}
                    </p>
                  </div>

                  {/* METRICS */}

                  <div
                    className="
                      mt-10
                      grid
                      grid-cols-1
                      border-y
                      border-white/10

                      sm:grid-cols-3
                    ">
                    {activeProject.metrics.map((metric, index) => (
                      <div
                        key={metric.label}
                        className={[
                          `
                              py-5
                            `,
                          index !== activeProject.metrics.length - 1
                            ? "border-b border-white/10 sm:border-b-0 sm:border-r sm:px-5"
                            : "sm:pl-5",
                          index === 0 ? "sm:pr-5" : "",
                        ].join(" ")}>
                        <span
                          className="
                              block
                              text-[11px]
                              font-semibold
                              uppercase
                              tracking-[0.14em]
                              text-white/35
                            ">
                          {metric.label}
                        </span>

                        <span
                          className="
                              mt-2
                              block
                              text-[14px]
                              font-medium
                              text-white
                            ">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA + CONTROLS */}

                  <div
                    className="
                      mt-auto
                      flex
                      flex-wrap
                      items-end
                      justify-between
                      gap-7
                      pt-10
                    ">
                    <a
                      href="#contacto"
                      className="
                        group
                        inline-flex
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
                          bg-[#7FA51C]
                          text-white
                          transition-all
                          duration-300

                          group-hover:rotate-45
                          group-hover:bg-[#9DD827]
                          group-hover:text-[#17392E]
                        ">
                        <ArrowUpRightIcon />
                      </span>

                      <span
                        className="
                          text-sm
                          font-medium
                          text-white
                        ">
                        Hablemos de esta solución
                      </span>
                    </a>

                    {/* ARROWS */}

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={goPrev}
                        aria-label="Solución anterior"
                        className="
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/15
                          text-white
                          transition-all
                          duration-300

                          hover:border-[#9DD827]
                          hover:bg-[#9DD827]
                          hover:text-[#17392E]
                        ">
                        <ArrowLeftIcon />
                      </button>

                      <button
                        type="button"
                        onClick={goNext}
                        aria-label="Siguiente solución"
                        className="
                          flex
                          h-12
                          w-12
                          items-center
                          justify-center
                          rounded-full
                          bg-[#7FA51C]
                          text-white
                          transition-all
                          duration-300

                          hover:bg-[#9DD827]
                          hover:text-[#17392E]
                        ">
                        <ArrowRightIcon />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* =====================================================
            PROJECT SELECTOR
        ===================================================== */}

        <div
          className="
            mt-7
            grid
            gap-3

            sm:grid-cols-2
            lg:grid-cols-4
          ">
          {projects.map((project, index) => {
            const isActive = index === activeIndex;
            const Icon = project.icon;

            return (
              <button
                key={project.id}
                type="button"
                onClick={() => goToProject(index)}
                aria-pressed={isActive}
                aria-label={`Mostrar solución ${project.number}: ${project.category}`}
                className={[
                  `
                    group
                    relative
                    overflow-hidden
                    rounded-[18px]
                    border
                    px-5
                    py-5
                    text-left
                    transition-all
                    duration-300
                  `,
                  isActive
                    ? `
                        border-[#7FA51C]
                        bg-[#7FA51C]
                        text-white
                        shadow-[0_14px_40px_rgba(127,165,28,.15)]
                      `
                    : `
                        border-[#355E4A]/10
                        bg-[#EAF0DF]/75
                        text-[#17392E]

                        hover:border-[#7FA51C]/35
                        hover:bg-[#E2EBD5]
                      `,
                ].join(" ")}>
                {/* TOP */}

                <div
                  className="
                    flex
                    items-start
                    justify-between
                    gap-5
                  ">
                  <span
                    className={[
                      `
                        text-[12px]
                        font-semibold
                        tracking-[0.14em]
                      `,
                      isActive ? "text-white/65" : "text-[#7FA51C]",
                    ].join(" ")}>
                    {project.number}
                  </span>

                  {/* ICON */}

                  <span
                    className={[
                      `
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-[12px]
                        transition-all
                        duration-300
                      `,
                      isActive
                        ? `
                            bg-white/12
                            text-white
                          `
                        : `
                            bg-[#7FA51C]/8
                            text-[#7FA51C]

                            group-hover:bg-[#7FA51C]
                            group-hover:text-white
                          `,
                    ].join(" ")}>
                    <Icon
                      size={19}
                      strokeWidth={1.6}
                      className="
                        transition-transform
                        duration-300

                        group-hover:scale-110
                      "
                    />
                  </span>
                </div>

                {/* TITLE */}

                <div
                  className="
                    mt-7
                    flex
                    items-end
                    justify-between
                    gap-5
                  ">
                  <p
                    className="
                      text-[16px]
                      font-medium
                      leading-5
                      tracking-[-0.025em]
                    ">
                    {project.category}
                  </p>
                </div>

                {/* LINE */}

                <span
                  className={[
                    `
                      mt-5
                      block
                      h-[2px]
                      transition-all
                      duration-500
                    `,
                    isActive
                      ? `
                          w-full
                          bg-white
                        `
                      : `
                          w-7
                          bg-[#7FA51C]

                          group-hover:w-full
                        `,
                  ].join(" ")}
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
