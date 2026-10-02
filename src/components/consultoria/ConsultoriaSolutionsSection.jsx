// import { motion, AnimatePresence } from "motion/react";
// import {
//   ArrowUpRight,
//   BarChart3,
//   BookOpen,
//   Boxes,
//   BriefcaseBusiness,
//   CircleDollarSign,
//   CloudSun,
//   Factory,
//   GraduationCap,
//   Handshake,
//   Leaf,
//   LineChart,
//   Recycle,
//   ShieldCheck,
//   Target,
//   Users,
// } from "lucide-react";
// import { useState } from "react";

// /* =========================================================
//    SOLUTIONS
// ========================================================= */

// const solutions = [
//   {
//     number: "01",
//     icon: Leaf,
//     short: "ESG",
//     title: "Estrategias ESG",
//     eyebrow: "Estrategia & sostenibilidad",
//     description:
//       "Ayudamos a las organizaciones a navegar la complejidad de la sostenibilidad mediante estrategias que fortalecen la transparencia, la resiliencia y la toma de decisiones.",
//     items: [
//       "Materialidad",
//       "Reporting e informes ESG",
//       "Estrategia de sostenibilidad",
//       "Diseño de programas ESG",
//       "Recopilación y gestión de datos ESG",
//     ],
//     outcome: "Convertir sostenibilidad en una ventaja estratégica.",
//   },
//   {
//     number: "02",
//     icon: CloudSun,
//     short: "Net Zero",
//     title: "Net Zero & Descarbonización",
//     eyebrow: "Transición climática",
//     description:
//       "Desarrollamos estrategias de descarbonización y hojas de ruta para reducir emisiones, gestionar riesgos climáticos y avanzar hacia objetivos de carbono neto cero.",
//     items: [
//       "Huella de carbono e inventarios GEI",
//       "Estrategia Net Zero",
//       "Objetivos basados en ciencia",
//       "Riesgos climáticos y resiliencia",
//       "Rutas de descarbonización",
//       "Compensación y créditos de carbono",
//     ],
//     outcome: "Una ruta medible hacia una operación baja en carbono.",
//   },
//   {
//     number: "03",
//     icon: Boxes,
//     short: "Supply Chain",
//     title: "Cadena de suministro responsable",
//     eyebrow: "Abasto & proveedores",
//     description:
//       "Construimos cadenas de suministro responsables, éticas y resilientes mediante trazabilidad, debida diligencia, cumplimiento y colaboración con proveedores.",
//     items: [
//       "Riesgo y cumplimiento",
//       "Debida diligencia",
//       "Vinculación con proveedores",
//       "Certificación ECOVADIS",
//       "Estrategia y gobernanza",
//     ],
//     outcome: "Más trazabilidad, control y resiliencia en la cadena de valor.",
//   },
//   {
//     number: "04",
//     icon: BarChart3,
//     short: "Reporting",
//     title: "Reporting & Información",
//     eyebrow: "Medición & comunicación",
//     description:
//       "Acompañamos a las organizaciones en la recopilación, estructuración y comunicación de información de sostenibilidad de forma clara, confiable y estratégica.",
//     items: [
//       "Marcos de sostenibilidad",
//       "Centralización de datos",
//       "Informes de sostenibilidad",
//       "Materialidad",
//       "Indicadores y divulgaciones",
//     ],
//     outcome: "Información confiable para tomar mejores decisiones.",
//   },
//   {
//     number: "05",
//     icon: CircleDollarSign,
//     short: "Finanzas",
//     title: "Finanzas & inversiones sostenibles",
//     eyebrow: "Capital responsable",
//     description:
//       "Integramos criterios ESG y de sostenibilidad en decisiones de inversión, captación de capital, operaciones financieras y gestión de activos.",
//     items: [
//       "Due diligence de inversiones",
//       "Crédito y deuda",
//       "Inversión responsable",
//       "Normativa e informes",
//       "Apoyo al ciclo de vida de inversiones",
//     ],
//     outcome: "Capital alineado con desempeño sostenible.",
//   },
//   {
//     number: "06",
//     icon: Recycle,
//     short: "Circularidad",
//     title: "Circularidad & productos sostenibles",
//     eyebrow: "Economía circular",
//     description:
//       "Transformamos producción, consumo y gestión de residuos para avanzar hacia modelos circulares más eficientes, resilientes y sostenibles.",
//     items: [
//       "Análisis de ciclo de vida",
//       "Modelos de negocio circulares",
//       "Packaging sostenible",
//       "Recuperación de residuos",
//       "Gestión circular de materiales",
//     ],
//     outcome: "Recursos que permanecen más tiempo generando valor.",
//   },
//   {
//     number: "07",
//     icon: LineChart,
//     short: "Carbono",
//     title: "Créditos & proyectos de carbono",
//     eyebrow: "Mercados de carbono",
//     description:
//       "Apoyamos el desarrollo y gestión de proyectos de carbono para organizaciones que buscan reducir, compensar y gestionar emisiones residuales.",
//     items: [
//       "Créditos de carbono",
//       "Proyectos de carbono",
//       "Certificados de energía renovable",
//       "Mercados de carbono",
//       "Climate Activator",
//       "Insetting en cadena de valor",
//     ],
//     outcome: "Acciones verificables para emisiones difíciles de abatir.",
//   },
//   {
//     number: "08",
//     icon: GraduationCap,
//     short: "Educación",
//     title: "Educación & engagement",
//     eyebrow: "Cultura sostenible",
//     description:
//       "Empoderamos a personas y organizaciones mediante capacitación, educación y programas que convierten sostenibilidad en una cultura compartida.",
//     items: [
//       "Formación y capacitación",
//       "Educación ambiental",
//       "Servicios educativos",
//       "Campañas de concientización",
//       "Engagement interno",
//     ],
//     outcome: "Personas capaces de impulsar el cambio desde dentro.",
//   },
//   {
//     number: "09",
//     icon: Target,
//     short: "Propósito",
//     title: "Estrategia de propósito",
//     eyebrow: "Marca & reputación",
//     description:
//       "Construimos marcas con propósito y estrategias capaces de conectar desempeño sostenible, reputación, cultura y posicionamiento.",
//     items: [
//       "Arquitectura del propósito",
//       "Reputación sostenible",
//       "Posicionamiento de marca",
//       "Valores corporativos",
//       "Transformación del marketing",
//     ],
//     outcome: "Un propósito creíble conectado con el negocio.",
//   },
//   {
//     number: "10",
//     icon: Factory,
//     short: "Ambiental",
//     title: "Gestión ambiental",
//     eyebrow: "Operación responsable",
//     description:
//       "Fortalecemos la gestión ambiental de organizaciones, ciudades y territorios mediante sistemas, auditorías y herramientas de mejora continua.",
//     items: [
//       "Sistemas de gestión ambiental",
//       "ISO 14001",
//       "Auditorías energéticas",
//       "ISO 50001",
//       "Debida diligencia ambiental",
//       "Certificaciones ambientales",
//     ],
//     outcome: "Gestión ambiental integrada a la operación.",
//   },
//   {
//     number: "11",
//     icon: ShieldCheck,
//     short: "Clima",
//     title: "Clima & naturaleza",
//     eyebrow: "Naturaleza positiva",
//     description:
//       "Ayudamos a alinear objetivos empresariales con los límites del sistema natural y las nuevas exigencias de resiliencia climática.",
//     items: [
//       "Agricultura regenerativa",
//       "Gestión del agua",
//       "Forest Positive",
//       "Ocean Positive",
//       "Servicios de naturaleza",
//     ],
//     outcome: "Negocios más resilientes dentro de los límites del planeta.",
//   },
//   {
//     number: "12",
//     icon: Users,
//     short: "Impacto social",
//     title: "Derechos humanos & impacto social",
//     eyebrow: "Personas & sociedad",
//     description:
//       "Asesoramos a organizaciones para proteger derechos humanos, gestionar riesgos sociales y construir estrategias de impacto más equitativas.",
//     items: [
//       "Debida diligencia en derechos humanos",
//       "Abastecimiento responsable",
//       "Comercio ético",
//       "Estrategias de impacto social",
//       "Evaluación y métricas de impacto",
//     ],
//     outcome: "Impacto social gestionado con rigor y responsabilidad.",
//   },
// ];

// /* =========================================================
//    NAV ITEM
// ========================================================= */

// function SolutionNavItem({ item, active, onClick }) {
//   const Icon = item.icon;

//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       className={[
//         `
//           group
//           relative
//           flex
//           w-full
//           items-center
//           gap-4
//           border-b
//           px-1
//           py-4
//           text-left
//           transition-all
//           duration-300
//         `,
//         active
//           ? "border-[#7FA51C]/45"
//           : "border-[#355E4A]/10 hover:border-[#7FA51C]/25",
//       ].join(" ")}>
//       <span
//         className={[
//           `
//             flex
//             h-10
//             w-10
//             shrink-0
//             items-center
//             justify-center
//             rounded-[11px]
//             transition-all
//             duration-300
//           `,
//           active
//             ? "bg-[#7FA51C] text-white"
//             : "bg-[#7FA51C]/9 text-[#73991B] group-hover:bg-[#7FA51C]/14",
//         ].join(" ")}>
//         <Icon size={17} strokeWidth={1.6} />
//       </span>

//       <div className="min-w-0 flex-1">
//         <span
//           className={[
//             `
//               block
//               text-[8px]
//               font-semibold
//               tracking-[0.14em]
//             `,
//             active ? "text-[#7FA51C]" : "text-[#7FA51C]/55",
//           ].join(" ")}>
//           {item.number}
//         </span>

//         <p
//           className={[
//             `
//               mt-0.5
//               truncate
//               text-[13px]
//               font-medium
//               transition-colors
//               duration-300
//             `,
//             active
//               ? "text-[#17392E]"
//               : "text-[#516D60] group-hover:text-[#17392E]",
//           ].join(" ")}>
//           {item.short}
//         </p>
//       </div>

//       <span
//         className={[
//           `
//             h-1.5
//             w-1.5
//             shrink-0
//             rounded-full
//             transition-all
//             duration-300
//           `,
//           active ? "scale-100 bg-[#7FA51C]" : "scale-75 bg-[#7FA51C]/20",
//         ].join(" ")}
//       />
//     </button>
//   );
// }

// /* =========================================================
//    SOLUTIONS SECTION
// ========================================================= */

// function ConsultoriaSolutionsSection() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const activeSolution = solutions[activeIndex];
//   const ActiveIcon = activeSolution.icon;

//   return (
//     <section
//       id="soluciones-consultoria"
//       className="
//         relative
//         overflow-hidden
//         bg-[#EEF3E7]
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
//           bg-[radial-gradient(circle_at_82%_25%,rgba(157,216,39,.15),transparent_24%),radial-gradient(circle_at_12%_88%,rgba(127,165,28,.08),transparent_25%)]
//         "
//       />

//       <div
//         className="
//           pointer-events-none
//           absolute
//           inset-0
//           opacity-[0.035]
//           [background-image:linear-gradient(rgba(45,82,65,.25)_1px,transparent_1px),linear-gradient(90deg,rgba(45,82,65,.25)_1px,transparent_1px)]
//           [background-size:44px_44px]
//         "
//       />

//       <div
//         className="
//           pointer-events-none
//           absolute
//           -right-[4%]
//           top-[2%]
//           hidden
//           select-none
//           text-[clamp(11rem,20vw,23rem)]
//           font-semibold
//           leading-none
//           tracking-[-0.1em]
//           text-[#7FA51C]/[0.035]

//           lg:block
//         ">
//         12
//       </div>

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

//             lg:grid-cols-[.75fr_1.25fr]
//             lg:items-end
//             lg:gap-16
//           ">
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
//               <span
//                 className="
//                   flex
//                   h-10
//                   w-10
//                   items-center
//                   justify-center
//                   rounded-full
//                   bg-[#7FA51C]
//                   text-[10px]
//                   font-semibold
//                   text-white
//                 ">
//                 02
//               </span>

//               <span className="h-px w-10 bg-[#7FA51C]" />

//               <span
//                 className="
//                   text-[10px]
//                   font-semibold
//                   uppercase
//                   tracking-[0.18em]
//                   text-[#688A1B]
//                 ">
//                 Capacidades
//               </span>
//             </div>

//             <p
//               className="
//                 mt-7
//                 max-w-[460px]
//                 text-[14px]
//                 leading-7
//                 text-[#657C71]
//               ">
//               Una oferta multidisciplinaria para acompañar desde el diagnóstico
//               hasta la ejecución.
//             </p>
//           </motion.div>

//           <motion.h2
//             initial={{
//               opacity: 0,
//               y: 30,
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
//               max-w-[1050px]
//               text-[clamp(3.1rem,5vw,6.5rem)]
//               font-normal
//               leading-[0.91]
//               tracking-[-0.065em]
//             ">
//             Soluciones para convertir
//             <span className="block text-[#7FA51C]">complejidad en acción.</span>
//           </motion.h2>
//         </div>

//         {/* =====================================================
//             INTERACTIVE AREA
//         ===================================================== */}

//         <div
//           className="
//             mt-16
//             grid
//             gap-6

//             lg:grid-cols-[300px_1fr]
//             xl:grid-cols-[330px_1fr]
//             xl:gap-8
//           ">
//           {/* =================================================
//               NAVIGATION
//           ================================================= */}

//           <motion.aside
//             initial={{
//               opacity: 0,
//               x: -20,
//             }}
//             whileInView={{
//               opacity: 1,
//               x: 0,
//             }}
//             viewport={{
//               once: true,
//               amount: 0.2,
//             }}
//             transition={{
//               duration: 0.75,
//             }}
//             className="
//               rounded-[20px]
//               border
//               border-[#355E4A]/10
//               bg-[#F6F9F1]/70
//               p-5
//               backdrop-blur-xl

//               lg:max-h-[720px]
//               lg:overflow-y-auto
//             ">
//             <div
//               className="
//                 mb-3
//                 flex
//                 items-center
//                 justify-between
//                 border-b
//                 border-[#355E4A]/10
//                 pb-4
//               ">
//               <span
//                 className="
//                   text-[9px]
//                   font-semibold
//                   uppercase
//                   tracking-[0.16em]
//                   text-[#6F857A]
//                 ">
//                 Áreas de especialidad
//               </span>

//               <span
//                 className="
//                   text-[10px]
//                   font-semibold
//                   text-[#7FA51C]
//                 ">
//                 {activeIndex + 1}/{solutions.length}
//               </span>
//             </div>

//             {solutions.map((item, index) => (
//               <SolutionNavItem
//                 key={item.number}
//                 item={item}
//                 active={activeIndex === index}
//                 onClick={() => setActiveIndex(index)}
//               />
//             ))}
//           </motion.aside>

//           {/* =================================================
//               ACTIVE PANEL
//           ================================================= */}

//           <div
//             className="
//               relative
//               min-h-[660px]
//               overflow-hidden
//               rounded-[24px]
//               bg-[#17392E]
//               text-white
//               shadow-[0_28px_80px_rgba(38,66,52,.13)]
//             ">
//             {/* BACKGROUND */}

//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 inset-0
//                 bg-[radial-gradient(circle_at_80%_24%,rgba(157,216,39,.20),transparent_24%),radial-gradient(circle_at_30%_100%,rgba(157,216,39,.07),transparent_30%)]
//               "
//             />

//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 inset-0
//                 opacity-[0.045]
//                 [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)]
//                 [background-size:46px_46px]
//               "
//             />

//             {/* GIANT NUMBER */}

//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={`number-${activeSolution.number}`}
//                 initial={{
//                   opacity: 0,
//                   scale: 0.9,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   scale: 1,
//                 }}
//                 exit={{
//                   opacity: 0,
//                 }}
//                 transition={{
//                   duration: 0.4,
//                 }}
//                 className="
//                   pointer-events-none
//                   absolute
//                   -right-[2%]
//                   -top-[6%]
//                   select-none
//                   text-[clamp(11rem,17vw,20rem)]
//                   font-semibold
//                   leading-none
//                   tracking-[-0.1em]
//                   text-white/[0.035]
//                 ">
//                 {activeSolution.number}
//               </motion.div>
//             </AnimatePresence>

//             {/* DECORATIVE ORBITS */}

//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 right-[7%]
//                 top-[13%]
//                 h-[300px]
//                 w-[300px]
//                 rounded-full
//                 border
//                 border-[#9DD827]/10
//               "
//             />

//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 right-[11%]
//                 top-[18%]
//                 h-[220px]
//                 w-[220px]
//                 rounded-full
//                 border
//                 border-[#9DD827]/8
//               "
//             />

//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeSolution.number}
//                 initial={{
//                   opacity: 0,
//                   y: 24,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 exit={{
//                   opacity: 0,
//                   y: -16,
//                 }}
//                 transition={{
//                   duration: 0.42,
//                   ease: [0.22, 1, 0.36, 1],
//                 }}
//                 className="
//                   relative
//                   z-10
//                   flex
//                   min-h-[660px]
//                   flex-col
//                   p-7

//                   sm:p-9
//                   lg:p-10
//                   xl:p-12
//                 ">
//                 {/* TOP */}

//                 <div
//                   className="
//                     flex
//                     flex-col
//                     gap-8

//                     sm:flex-row
//                     sm:items-start
//                     sm:justify-between
//                   ">
//                   <div>
//                     <span
//                       className="
//                         inline-flex
//                         rounded-full
//                         border
//                         border-[#9DD827]/18
//                         bg-[#9DD827]/8
//                         px-4
//                         py-2
//                         text-[9px]
//                         font-semibold
//                         uppercase
//                         tracking-[0.17em]
//                         text-[#B8EB50]
//                       ">
//                       {activeSolution.eyebrow}
//                     </span>

//                     <p
//                       className="
//                         mt-4
//                         text-[10px]
//                         font-semibold
//                         tracking-[0.17em]
//                         text-white/30
//                       ">
//                       SOLUCIÓN {activeSolution.number}
//                     </p>
//                   </div>

//                   <span
//                     className="
//                       flex
//                       h-14
//                       w-14
//                       shrink-0
//                       items-center
//                       justify-center
//                       rounded-[16px]
//                       border
//                       border-white/10
//                       bg-white/[0.055]
//                       text-[#B8EB50]
//                       backdrop-blur-xl
//                     ">
//                     <ActiveIcon size={23} strokeWidth={1.5} />
//                   </span>
//                 </div>

//                 {/* TITLE */}

//                 <h3
//                   className="
//                     mt-10
//                     max-w-[950px]
//                     text-[clamp(2.8rem,4.4vw,5.7rem)]
//                     font-normal
//                     leading-[0.94]
//                     tracking-[-0.06em]
//                   ">
//                   {activeSolution.title}
//                 </h3>

//                 {/* DESCRIPTION */}

//                 <div
//                   className="
//                     mt-8
//                     grid
//                     gap-10

//                     xl:grid-cols-[1fr_.85fr]
//                     xl:gap-16
//                   ">
//                   <div>
//                     <p
//                       className="
//                         max-w-[750px]
//                         text-[15px]
//                         leading-7
//                         text-white/58

//                         sm:text-[17px]
//                         sm:leading-8
//                       ">
//                       {activeSolution.description}
//                     </p>

//                     {/* OUTCOME */}

//                     <div
//                       className="
//                         mt-9
//                         max-w-[720px]
//                         border-l-2
//                         border-[#9DD827]
//                         pl-5
//                       ">
//                       <p
//                         className="
//                           text-[9px]
//                           font-semibold
//                           uppercase
//                           tracking-[0.16em]
//                           text-[#9DD827]
//                         ">
//                         Resultado
//                       </p>

//                       <p
//                         className="
//                           mt-3
//                           text-[19px]
//                           leading-7
//                           tracking-[-0.025em]
//                           text-white/85
//                         ">
//                         {activeSolution.outcome}
//                       </p>
//                     </div>
//                   </div>

//                   {/* ITEMS */}

//                   <div>
//                     <p
//                       className="
//                         text-[9px]
//                         font-semibold
//                         uppercase
//                         tracking-[0.16em]
//                         text-white/30
//                       ">
//                       Capacidades
//                     </p>

//                     <div
//                       className="
//                         mt-5
//                         grid
//                         gap-2
//                       ">
//                       {activeSolution.items.map((item, index) => (
//                         <motion.div
//                           key={item}
//                           initial={{
//                             opacity: 0,
//                             x: 12,
//                           }}
//                           animate={{
//                             opacity: 1,
//                             x: 0,
//                           }}
//                           transition={{
//                             duration: 0.35,
//                             delay: index * 0.035,
//                           }}
//                           className="
//                             group
//                             flex
//                             items-center
//                             gap-4
//                             rounded-[13px]
//                             border
//                             border-white/[0.07]
//                             bg-white/[0.035]
//                             px-4
//                             py-3
//                             transition-all
//                             duration-300

//                             hover:border-[#9DD827]/20
//                             hover:bg-[#9DD827]/7
//                           ">
//                           <span
//                             className="
//                               h-1.5
//                               w-1.5
//                               shrink-0
//                               rounded-full
//                               bg-[#9DD827]
//                             "
//                           />

//                           <span
//                             className="
//                               text-[12px]
//                               leading-5
//                               text-white/65
//                               transition-colors
//                               duration-300

//                               group-hover:text-white
//                             ">
//                             {item}
//                           </span>
//                         </motion.div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 {/* FOOT */}

//                 <div
//                   className="
//                     mt-auto
//                     flex
//                     flex-col
//                     gap-5
//                     border-t
//                     border-white/[0.07]
//                     pt-7

//                     sm:flex-row
//                     sm:items-center
//                     sm:justify-between
//                   ">
//                   <div
//                     className="
//                       flex
//                       items-center
//                       gap-3
//                     ">
//                     <span
//                       className="
//                         h-2
//                         w-2
//                         rounded-full
//                         bg-[#9DD827]
//                       "
//                     />

//                     <span
//                       className="
//                         text-[9px]
//                         uppercase
//                         tracking-[0.14em]
//                         text-white/35
//                       ">
//                       Consultoría especializada GRUNER
//                     </span>
//                   </div>

//                   <a
//                     href="#contacto"
//                     className="
//                       group
//                       inline-flex
//                       items-center
//                       gap-3
//                     ">
//                     <span
//                       className="
//                         text-[12px]
//                         font-medium
//                         text-white
//                       ">
//                       Hablar con un especialista
//                     </span>

//                     <span
//                       className="
//                         flex
//                         h-11
//                         w-11
//                         items-center
//                         justify-center
//                         rounded-full
//                         bg-[#9DD827]
//                         text-[#17392E]
//                         transition-all
//                         duration-300

//                         group-hover:rotate-45
//                         group-hover:bg-white
//                       ">
//                       <ArrowUpRight size={16} strokeWidth={1.6} />
//                     </span>
//                   </a>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </div>

//         {/* =====================================================
//             MOBILE QUICK NAV
//         ===================================================== */}

//         <div
//           className="
//             mt-5
//             flex
//             gap-2
//             overflow-x-auto
//             pb-2

//             lg:hidden
//           ">
//           {solutions.map((item, index) => (
//             <button
//               key={item.number}
//               type="button"
//               onClick={() => setActiveIndex(index)}
//               className={[
//                 `
//                   shrink-0
//                   rounded-full
//                   border
//                   px-4
//                   py-2.5
//                   text-[10px]
//                   font-medium
//                   transition-all
//                   duration-300
//                 `,
//                 activeIndex === index
//                   ? `
//                       border-[#7FA51C]
//                       bg-[#7FA51C]
//                       text-white
//                     `
//                   : `
//                       border-[#355E4A]/10
//                       bg-[#F6F9F1]/75
//                       text-[#526D60]
//                     `,
//               ].join(" ")}>
//               {item.short}
//             </button>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ConsultoriaSolutionsSection;

import { motion, AnimatePresence } from "motion/react";
import {
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Boxes,
  CircleDollarSign,
  CloudSun,
  Factory,
  Leaf,
  LineChart,
  Recycle,
  ShieldCheck,
  Target,
  Users,
} from "lucide-react";
import { useState } from "react";

/* =========================================================
   SOLUTIONS
========================================================= */

const solutions = [
  {
    number: "01",
    icon: Leaf,
    short: "ESG",
    title: "Estrategias ESG",
    eyebrow: "Estrategia & sostenibilidad",
    description:
      "Ayudamos a las organizaciones a navegar la complejidad de la sostenibilidad mediante estrategias que fortalecen la transparencia, la resiliencia y la toma de decisiones.",
    items: [
      "Materialidad",
      "Reporting e informes ESG",
      "Estrategia de sostenibilidad",
      "Diseño de programas ESG",
      "Recopilación y gestión de datos ESG",
    ],
    outcome: "Convertir sostenibilidad en una ventaja estratégica.",
  },
  {
    number: "02",
    icon: CloudSun,
    short: "Net Zero",
    title: "Net Zero & Descarbonización",
    eyebrow: "Transición climática",
    description:
      "Desarrollamos estrategias de descarbonización y hojas de ruta para reducir emisiones, gestionar riesgos climáticos y avanzar hacia objetivos de carbono neto cero.",
    items: [
      "Huella de carbono e inventarios GEI",
      "Estrategia Net Zero",
      "Objetivos basados en ciencia",
      "Riesgos climáticos y resiliencia",
      "Rutas de descarbonización",
      "Compensación y créditos de carbono",
    ],
    outcome: "Una ruta medible hacia una operación baja en carbono.",
  },
  {
    number: "03",
    icon: Boxes,
    short: "Supply Chain",
    title: "Cadena de Suministro & Abasto Responsable",
    eyebrow: "Abasto & proveedores",
    description:
      "Construimos cadenas de suministro responsables, éticas y resilientes mediante trazabilidad, debida diligencia, cumplimiento y colaboración con proveedores.",
    items: [
      "Riesgo y cumplimiento",
      "Debida diligencia",
      "Proveedores",
      "ECOVADIS",
      "Estrategia y gobernanza",
    ],
    outcome: "Más trazabilidad, control y resiliencia en la cadena de valor.",
  },
  {
    number: "04",
    icon: BarChart3,
    short: "Reporting",
    title: "Reporting",
    eyebrow: "Medición & comunicación",
    description:
      "Acompañamos a las organizaciones en la recopilación, estructuración y comunicación de información de sostenibilidad de forma clara, confiable y estratégica.",
    items: [
      "Marcos de sostenibilidad",
      "Digitalización y centralización de datos",
      "Informes de sostenibilidad",
      "Materialidad",
    ],
    outcome: "Información confiable para tomar mejores decisiones.",
  },
  {
    number: "05",
    icon: CircleDollarSign,
    short: "Finanzas",
    title: "Finanzas & inversiones sostenibles",
    eyebrow: "Capital responsable",
    description:
      "Integramos criterios ESG y de sostenibilidad en decisiones de inversión, captación de capital, operaciones financieras y gestión de activos.",
    items: [
      "Due diligence",
      "Crédito y deuda",
      "Inversión responsable",
      "ESMA/ICMA",
      "Normativa, datos e informes",
      "Ciclo de vida de inversiones",
    ],
    outcome: "Capital alineado con desempeño sostenible.",
  },
  {
    number: "06",
    icon: Recycle,
    short: "Circularidad",
    title: "Circularidad & productos sostenibles",
    eyebrow: "Economía circular",
    description:
      "Transformamos producción, consumo y gestión de residuos para avanzar hacia modelos circulares más eficientes, resilientes y sostenibles.",
    items: [
      "ACV",
      "Modelos circulares",
      "Packaging sostenible",
      "Recuperación de residuos",
      "Gestión de residuos",
    ],
    outcome: "Recursos que permanecen más tiempo generando valor.",
  },
  {
    number: "07",
    icon: LineChart,
    short: "Carbono",
    title: "Créditos & proyectos de carbono",
    eyebrow: "Formación",
    description:
      "Apoyamos el desarrollo y gestión de proyectos de carbono para organizaciones que buscan reducir, compensar y gestionar emisiones residuales.",
    items: [
      "Créditos de carbono",
      "Desarrollo de proyectos de carbono",
      "IREC/EAC",
      "Formación",
      "Climate Activator",
      "Insetting",
    ],
    outcome: "Acciones verificables para emisiones difíciles de abatir.",
  },
  {
    number: "08",
    icon: Factory,
    short: "Ambiental",
    title: "Gestión ambiental",
    eyebrow: "Operación responsable",
    description:
      "Fortalecemos la gestión ambiental de organizaciones, ciudades y territorios mediante sistemas, auditorías y herramientas de mejora continua.",
    items: [
      "ISO 14001",
      "Auditorías energéticas ISO 50001",
      "Debida diligencia ambiental",
      "Certificaciones ambientales",
    ],
    outcome: "Gestión ambiental integrada a la operación.",
  },
  {
    number: "09",
    icon: ShieldCheck,
    short: "Clima",
    title: "Clima & naturaleza",
    eyebrow: "Naturaleza positiva",
    description:
      "Ayudamos a alinear objetivos empresariales con los límites del sistema natural y las nuevas exigencias de resiliencia climática.",
    items: [
      "Agricultura regenerativa",
      "Agua",
      "Forest Positive",
      "Ocean Positive",
      "Servicios de naturaleza",
    ],
    outcome: "Negocios más resilientes dentro de los límites del planeta.",
  },
  {
    number: "10",
    icon: Users,
    short: "Impacto social",
    title: "Derechos humanos & impacto social",
    eyebrow: "Personas & sociedad",
    description:
      "Asesoramos a organizaciones para proteger derechos humanos, gestionar riesgos sociales y construir estrategias de impacto más equitativas.",
    items: [
      "DDHH",
      "Abastecimiento responsable",
      "Estrategias de impacto social",
      "Evaluación y métricas de impacto",
    ],
    outcome: "Impacto social gestionado con rigor y responsabilidad.",
  },
];

/* =========================================================
   NAV ITEM
========================================================= */

function SolutionNavItem({ item, active, onClick }) {
  const Icon = item.icon;

  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        `
          group
          relative
          flex
          w-full
          items-center
          gap-4
          border-b
          px-1
          py-4
          text-left
          transition-all
          duration-300
        `,
        active
          ? "border-[#7FA51C]/45"
          : "border-[#355E4A]/10 hover:border-[#7FA51C]/25",
      ].join(" ")}>
      <span
        className={[
          `
            flex
            h-10
            w-10
            shrink-0
            items-center
            justify-center
            rounded-[11px]
            transition-all
            duration-300
          `,
          active
            ? "bg-[#7FA51C] text-white"
            : "bg-[#7FA51C]/9 text-[#73991B] group-hover:bg-[#7FA51C]/14",
        ].join(" ")}>
        <Icon size={17} strokeWidth={1.6} />
      </span>

      <div className="min-w-0 flex-1">
        <span
          className={[
            `
              block
              text-[11px]
              font-semibold
              tracking-[0.14em]
            `,
            active ? "text-[#7FA51C]" : "text-[#7FA51C]/55",
          ].join(" ")}>
          {item.number}
        </span>

        <p
          className={[
            `
              mt-0.5
              truncate
              text-[13px]
              font-medium
              transition-colors
              duration-300
            `,
            active
              ? "text-[#17392E]"
              : "text-[#516D60] group-hover:text-[#17392E]",
          ].join(" ")}>
          {item.short}
        </p>
      </div>

      <span
        className={[
          `
            h-1.5
            w-1.5
            shrink-0
            rounded-full
            transition-all
            duration-300
          `,
          active ? "scale-100 bg-[#7FA51C]" : "scale-75 bg-[#7FA51C]/20",
        ].join(" ")}
      />
    </button>
  );
}

/* =========================================================
   SOLUTIONS SECTION
========================================================= */

function ConsultoriaSolutionsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSolution = solutions[activeIndex];
  const ActiveIcon = activeSolution.icon;

  return (
    <section
      id="soluciones-consultoria"
      className="
        relative
        overflow-hidden
        bg-[#EEF3E7]
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
          bg-[radial-gradient(circle_at_82%_25%,rgba(157,216,39,.15),transparent_24%),radial-gradient(circle_at_12%_88%,rgba(127,165,28,.08),transparent_25%)]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.035]
          [background-image:linear-gradient(rgba(45,82,65,.25)_1px,transparent_1px),linear-gradient(90deg,rgba(45,82,65,.25)_1px,transparent_1px)]
          [background-size:44px_44px]
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

            lg:grid-cols-[.75fr_1.25fr]
            lg:items-end
            lg:gap-16
          ">
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

              <span
                className="
                  text-[12px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#688A1B]
                ">
                Capacidades
              </span>
            </div>

            <p
              className="
                mt-7
                max-w-[460px]
                text-[14px]
                leading-7
                text-[#657C71]
              ">
              Una oferta multidisciplinaria para acompañar desde el diagnóstico
              hasta la ejecución.
            </p>
          </motion.div>

          <motion.h2
            initial={{
              opacity: 0,
              y: 30,
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
              max-w-[1050px]
              text-[clamp(3.1rem,5vw,6.5rem)]
              font-normal
              leading-[0.91]
              tracking-[-0.065em]
            ">
            Soluciones para convertir
            <span className="block text-[#7FA51C]">complejidad en acción.</span>
          </motion.h2>
        </div>

        {/* =====================================================
            INTERACTIVE AREA
        ===================================================== */}

        <div
          className="
            mt-16
            grid
            gap-6

            lg:grid-cols-[300px_1fr]
            xl:grid-cols-[330px_1fr]
            xl:gap-8
          ">
          {/* =================================================
              NAVIGATION
          ================================================= */}

          <motion.aside
            initial={{
              opacity: 0,
              x: -20,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.75,
            }}
            className="
              rounded-[20px]
              border
              border-[#355E4A]/10
              bg-[#F6F9F1]/70
              p-5
              backdrop-blur-xl

              lg:max-h-[720px]
              lg:overflow-y-auto
            ">
            <div
              className="
                mb-3
                flex
                items-center
                justify-between
                border-b
                border-[#355E4A]/10
                pb-4
              ">
              <span
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-[#6F857A]
                ">
                Áreas de especialidad
              </span>

              <span
                className="
                  text-[12px]
                  font-semibold
                  text-[#7FA51C]
                ">
                {activeIndex + 1}/{solutions.length}
              </span>
            </div>

            {solutions.map((item, index) => (
              <SolutionNavItem
                key={item.number}
                item={item}
                active={activeIndex === index}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </motion.aside>

          {/* =================================================
              ACTIVE PANEL
          ================================================= */}

          <div
            className="
              relative
              min-h-[660px]
              overflow-hidden
              rounded-[24px]
              bg-[#17392E]
              text-white
              shadow-[0_28px_80px_rgba(38,66,52,.13)]
            ">
            {/* BACKGROUND */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-[radial-gradient(circle_at_80%_24%,rgba(157,216,39,.20),transparent_24%),radial-gradient(circle_at_30%_100%,rgba(157,216,39,.07),transparent_30%)]
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                opacity-[0.045]
                [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)]
                [background-size:46px_46px]
              "
            />

            {/* GIANT NUMBER */}

            <AnimatePresence mode="wait">
              <motion.div
                key={`number-${activeSolution.number}`}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="
                  pointer-events-none
                  absolute
                  -right-[2%]
                  -top-[6%]
                  select-none
                  text-[clamp(11rem,17vw,20rem)]
                  font-semibold
                  leading-none
                  tracking-[-0.1em]
                  text-white/[0.035]
                ">
                {activeSolution.number}
              </motion.div>
            </AnimatePresence>

            {/* DECORATIVE ORBITS */}

            <div
              className="
                pointer-events-none
                absolute
                right-[7%]
                top-[13%]
                h-[300px]
                w-[300px]
                rounded-full
                border
                border-[#9DD827]/10
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                right-[11%]
                top-[18%]
                h-[220px]
                w-[220px]
                rounded-full
                border
                border-[#9DD827]/8
              "
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeSolution.number}
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
                  y: -16,
                }}
                transition={{
                  duration: 0.42,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="
                  relative
                  z-10
                  flex
                  min-h-[660px]
                  flex-col
                  p-7

                  sm:p-9
                  lg:p-10
                  xl:p-12
                ">
                {/* TOP */}

                <div
                  className="
                    flex
                    flex-col
                    gap-8

                    sm:flex-row
                    sm:items-start
                    sm:justify-between
                  ">
                  <div>
                    <span
                      className="
                        inline-flex
                        rounded-full
                        border
                        border-[#9DD827]/18
                        bg-[#9DD827]/8
                        px-4
                        py-2
                        text-[11px]
                        font-semibold
                        uppercase
                        tracking-[0.17em]
                        text-[#B8EB50]
                      ">
                      {activeSolution.eyebrow}
                    </span>

                    <p
                      className="
                        mt-4
                        text-[11px]
                        font-semibold
                        tracking-[0.17em]
                        text-white/30
                      ">
                      SOLUCIÓN {activeSolution.number}
                    </p>
                  </div>

                  <span
                    className="
                      flex
                      h-14
                      w-14
                      shrink-0
                      items-center
                      justify-center
                      rounded-[16px]
                      border
                      border-white/10
                      bg-white/[0.055]
                      text-[#B8EB50]
                      backdrop-blur-xl
                    ">
                    <ActiveIcon size={23} strokeWidth={1.5} />
                  </span>
                </div>

                {/* TITLE */}

                <h3
                  className="
                    mt-10
                    max-w-[950px]
                    text-[clamp(2.8rem,4.4vw,5.7rem)]
                    font-normal
                    leading-[0.94]
                    tracking-[-0.06em]
                  ">
                  {activeSolution.title}
                </h3>

                {/* DESCRIPTION */}

                <div
                  className="
                    mt-8
                    grid
                    gap-10

                    xl:grid-cols-[1fr_.85fr]
                    xl:gap-16
                  ">
                  <div>
                    <p
                      className="
                        max-w-[750px]
                        text-[15px]
                        leading-7
                        text-white/58

                        sm:text-[17px]
                        sm:leading-8
                      ">
                      {activeSolution.description}
                    </p>

                    {/* OUTCOME */}

                    <div
                      className="
                        mt-9
                        max-w-[720px]
                        border-l-2
                        border-[#9DD827]
                        pl-5
                      ">
                      <p
                        className="
                          text-[11px]
                          font-semibold
                          uppercase
                          tracking-[0.16em]
                          text-[#9DD827]
                        ">
                        Resultado
                      </p>

                      <p
                        className="
                          mt-3
                          text-[19px]
                          leading-7
                          tracking-[-0.025em]
                          text-white/85
                        ">
                        {activeSolution.outcome}
                      </p>
                    </div>
                  </div>

                  {/* ITEMS */}

                  <div>
                    <p
                      className="
                        text-[11px]
                        font-semibold
                        uppercase
                        tracking-[0.16em]
                        text-white/30
                      ">
                      Capacidades
                    </p>

                    <div
                      className="
                        mt-5
                        grid
                        gap-2
                      ">
                      {activeSolution.items.map((item, index) => (
                        <motion.div
                          key={item}
                          initial={{
                            opacity: 0,
                            x: 12,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                          }}
                          transition={{
                            duration: 0.35,
                            delay: index * 0.035,
                          }}
                          className="
                            group
                            flex
                            items-center
                            gap-4
                            rounded-[13px]
                            border
                            border-white/[0.07]
                            bg-white/[0.035]
                            px-4
                            py-3
                            transition-all
                            duration-300

                            hover:border-[#9DD827]/20
                            hover:bg-[#9DD827]/7
                          ">
                          <span
                            className="
                              h-1.5
                              w-1.5
                              shrink-0
                              rounded-full
                              bg-[#9DD827]
                            "
                          />

                          <span
                            className="
                              text-[13px]
                              leading-5
                              text-white/70
                              transition-colors
                              duration-300

                              group-hover:text-white
                            ">
                            {item}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* FOOT */}

                <div
                  className="
                    mt-auto
                    flex
                    flex-col
                    gap-5
                    border-t
                    border-white/[0.07]
                    pt-7

                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                  ">
                  <div
                    className="
                      flex
                      items-center
                      gap-3
                    ">
                    <span
                      className="
                        h-2
                        w-2
                        rounded-full
                        bg-[#9DD827]
                      "
                    />

                    <span
                      className="
                        text-[11px]
                        uppercase
                        tracking-[0.14em]
                        text-white/35
                      ">
                      Consultoría especializada GRUNER
                    </span>
                  </div>

                  <a
                    href="#contacto"
                    className="
                      group
                      inline-flex
                      items-center
                      gap-3
                    ">
                    <span
                      className="
                        text-[13px]
                        font-medium
                        text-white
                      ">
                      Hablar con un especialista
                    </span>

                    <span
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        bg-[#9DD827]
                        text-[#17392E]
                        transition-all
                        duration-300

                        group-hover:rotate-45
                        group-hover:bg-white
                      ">
                      <ArrowUpRight size={16} strokeWidth={1.6} />
                    </span>
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* =====================================================
            MOBILE QUICK NAV
        ===================================================== */}

        <div
          className="
            mt-5
            flex
            gap-2
            overflow-x-auto
            pb-2

            lg:hidden
          ">
          {solutions.map((item, index) => (
            <button
              key={item.number}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={[
                `
                  shrink-0
                  rounded-full
                  border
                  px-4
                  py-2.5
                  text-[12px]
                  font-medium
                  transition-all
                  duration-300
                `,
                activeIndex === index
                  ? `
                      border-[#7FA51C]
                      bg-[#7FA51C]
                      text-white
                    `
                  : `
                      border-[#355E4A]/10
                      bg-[#F6F9F1]/75
                      text-[#526D60]
                    `,
              ].join(" ")}>
              {item.short}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ConsultoriaSolutionsSection;
