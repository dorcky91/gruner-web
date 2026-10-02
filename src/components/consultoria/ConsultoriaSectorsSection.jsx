// import { AnimatePresence, motion } from "motion/react";
// import {
//   ArrowUpRight,
//   Building2,
//   Factory,
//   HeartPulse,
//   Landmark,
//   Laptop2,
//   ShoppingBag,
//   Sparkles,
//   Utensils,
//   Zap,
// } from "lucide-react";
// import { useState } from "react";

// /* =========================================================
//    SECTORS
// ========================================================= */

// const sectors = [
//   {
//     number: "01",
//     icon: Utensils,
//     short: "Alimentos",
//     title: "Alimentos & bebidas",
//     description:
//       "Acompañamos a organizaciones del sector en estrategia ESG, gestión de emisiones, circularidad, abastecimiento responsable y transformación de cadenas de valor.",
//     focus: ["Cadena de suministro", "Carbono", "Agua", "Circularidad"],
//     accent: "FOOD",
//   },
//   {
//     number: "02",
//     icon: Landmark,
//     short: "Finanzas",
//     title: "Servicios financieros",
//     description:
//       "Integramos sostenibilidad y criterios ESG en inversión, riesgo, reporting, financiamiento sostenible y toma de decisiones.",
//     focus: ["ESG", "Riesgo", "Reporting", "Finanzas sostenibles"],
//     accent: "CAPITAL",
//   },
//   {
//     number: "03",
//     icon: ShoppingBag,
//     short: "Retail",
//     title: "Retail & consumo",
//     description:
//       "Ayudamos a transformar operaciones, productos, empaques y cadenas de suministro para responder a nuevas expectativas de consumidores y regulación.",
//     focus: ["Circularidad", "Packaging", "Supply Chain", "Clima"],
//     accent: "RETAIL",
//   },
//   {
//     number: "04",
//     icon: Laptop2,
//     short: "Tecnología",
//     title: "Tecnología & servicios",
//     description:
//       "Diseñamos estrategias de sostenibilidad y clima para empresas digitales, tecnológicas y de servicios con operaciones y cadenas de valor globales.",
//     focus: ["Net Zero", "ESG", "Datos", "Energía"],
//     accent: "TECH",
//   },
//   {
//     number: "05",
//     icon: HeartPulse,
//     short: "Salud",
//     title: "Salud & farmacéutica",
//     description:
//       "Fortalecemos la gestión ambiental, social y de cadena de suministro en organizaciones donde cumplimiento, resiliencia y confianza son críticos.",
//     focus: ["Compliance", "Supply Chain", "ESG", "Impacto social"],
//     accent: "HEALTH",
//   },
//   {
//     number: "06",
//     icon: Factory,
//     short: "Industria",
//     title: "Manufactura & industria",
//     description:
//       "Conectamos eficiencia operacional, descarbonización, energía, circularidad y gestión ambiental para construir operaciones más resilientes.",
//     focus: ["Descarbonización", "Energía", "ISO", "Circularidad"],
//     accent: "INDUSTRY",
//   },
//   {
//     number: "07",
//     icon: Zap,
//     short: "Energía",
//     title: "Energía & infraestructura",
//     description:
//       "Apoyamos la transición energética mediante estrategia, análisis climático, desarrollo de proyectos y soluciones para reducir emisiones.",
//     focus: ["Transición energética", "Clima", "Carbono", "Infraestructura"],
//     accent: "ENERGY",
//   },
//   {
//     number: "08",
//     icon: Building2,
//     short: "Inmobiliario",
//     title: "Real estate & construcción",
//     description:
//       "Integramos sostenibilidad, energía, materiales, certificaciones y resiliencia en activos inmobiliarios y proyectos de infraestructura.",
//     focus: ["Edificios", "Energía", "Materiales", "Certificaciones"],
//     accent: "BUILT",
//   },
// ];

// /* =========================================================
//    SECTOR BUTTON
// ========================================================= */

// function SectorButton({ sector, active, onClick }) {
//   const Icon = sector.icon;

//   return (
//     <button
//       type="button"
//       onClick={onClick}
//       onMouseEnter={onClick}
//       className={[
//         `
//           group
//           relative
//           grid
//           w-full
//           grid-cols-[44px_1fr_auto]
//           items-center
//           gap-4
//           border-b
//           px-1
//           py-5
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
//             h-11
//             w-11
//             items-center
//             justify-center
//             rounded-[12px]
//             transition-all
//             duration-300
//           `,
//           active
//             ? "bg-[#7FA51C] text-white"
//             : "bg-[#7FA51C]/9 text-[#759A1B] group-hover:bg-[#7FA51C]/14",
//         ].join(" ")}>
//         <Icon size={18} strokeWidth={1.6} />
//       </span>

//       <div>
//         <span
//           className={[
//             `
//               text-[8px]
//               font-semibold
//               tracking-[0.14em]
//             `,
//             active ? "text-[#7FA51C]" : "text-[#7FA51C]/50",
//           ].join(" ")}>
//           {sector.number}
//         </span>

//         <p
//           className={[
//             `
//               mt-1
//               text-[15px]
//               font-medium
//               tracking-[-0.025em]
//               transition-colors
//             `,
//             active
//               ? "text-[#17392E]"
//               : "text-[#597267] group-hover:text-[#17392E]",
//           ].join(" ")}>
//           {sector.short}
//         </p>
//       </div>

//       <span
//         className={[
//           `
//             h-2
//             w-2
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
//    SECTORS SECTION
// ========================================================= */

// function ConsultoriaSectorsSection() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   const activeSector = sectors[activeIndex];
//   const ActiveIcon = activeSector.icon;

//   return (
//     <section
//       className="
//         relative
//         overflow-hidden
//         bg-[#F6F8F1]
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
//           bg-[radial-gradient(circle_at_15%_30%,rgba(157,216,39,.12),transparent_23%),radial-gradient(circle_at_89%_76%,rgba(127,165,28,.09),transparent_26%)]
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

//             lg:grid-cols-[.62fr_1.38fr]
//             lg:items-end
//             lg:gap-20
//           ">
//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 18,
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
//                 03
//               </span>

//               <span className="h-px w-10 bg-[#7FA51C]" />

//               <p
//                 className="
//                   text-[10px]
//                   font-semibold
//                   uppercase
//                   tracking-[0.18em]
//                   text-[#688A1B]
//                 ">
//                 Sectores
//               </p>
//             </div>

//             <p
//               className="
//                 mt-8
//                 max-w-[430px]
//                 text-sm
//                 leading-7
//                 text-[#657C71]

//                 sm:text-base
//               ">
//               La sostenibilidad cambia según el contexto. Por eso adaptamos
//               estrategia, metodología y ejecución a cada industria.
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
//               max-w-[1120px]
//               text-[clamp(3.1rem,5.2vw,6.8rem)]
//               font-normal
//               leading-[0.9]
//               tracking-[-0.065em]
//             ">
//             Cada industria tiene
//             <span className="block text-[#7FA51C]">un reto diferente.</span>
//           </motion.h2>
//         </div>

//         {/* =====================================================
//             INTERACTIVE CONTENT
//         ===================================================== */}

//         <div
//           className="
//             mt-16
//             grid
//             gap-7

//             lg:grid-cols-[320px_1fr]

//             xl:grid-cols-[350px_1fr]
//             xl:gap-10
//           ">
//           {/* =================================================
//               SECTOR LIST
//           ================================================= */}

//           <motion.div
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
//               bg-[#EEF3E7]/76
//               p-5
//               backdrop-blur-xl
//             ">
//             <div
//               className="
//                 mb-2
//                 flex
//                 items-center
//                 justify-between
//                 border-b
//                 border-[#355E4A]/10
//                 pb-4
//               ">
//               <p
//                 className="
//                   text-[9px]
//                   font-semibold
//                   uppercase
//                   tracking-[0.16em]
//                   text-[#70857A]
//                 ">
//                 Selecciona una industria
//               </p>

//               <span
//                 className="
//                   text-[10px]
//                   font-semibold
//                   text-[#7FA51C]
//                 ">
//                 {activeIndex + 1}/{sectors.length}
//               </span>
//             </div>

//             {sectors.map((sector, index) => (
//               <SectorButton
//                 key={sector.number}
//                 sector={sector}
//                 active={index === activeIndex}
//                 onClick={() => setActiveIndex(index)}
//               />
//             ))}
//           </motion.div>

//           {/* =================================================
//               ACTIVE INDUSTRY
//           ================================================= */}

//           <div
//             className="
//               relative
//               min-h-[700px]
//               overflow-hidden
//               rounded-[26px]
//               bg-[#E7EFD9]
//               shadow-[0_25px_70px_rgba(43,71,57,.08)]
//             ">
//             {/* =================================================
//                 GRAPHIC BACKGROUND
//             ================================================= */}

//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 inset-0
//                 bg-[radial-gradient(circle_at_72%_36%,rgba(157,216,39,.24),transparent_27%),linear-gradient(135deg,#EDF3E6_0%,#E4EDD7_100%)]
//               "
//             />

//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={`accent-${activeSector.number}`}
//                 initial={{
//                   opacity: 0,
//                   x: 60,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   x: 0,
//                 }}
//                 exit={{
//                   opacity: 0,
//                   x: -30,
//                 }}
//                 transition={{
//                   duration: 0.45,
//                 }}
//                 className="
//                   pointer-events-none
//                   absolute
//                   -right-[5%]
//                   top-[5%]
//                   select-none
//                   text-[clamp(8rem,15vw,17rem)]
//                   font-semibold
//                   leading-none
//                   tracking-[-0.09em]
//                   text-[#7FA51C]/[0.055]
//                 ">
//                 {activeSector.accent}
//               </motion.div>
//             </AnimatePresence>

//             {/* LARGE ARC */}

//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 right-[-12%]
//                 top-[7%]
//                 h-[560px]
//                 w-[560px]
//                 rounded-full
//                 border
//                 border-[#7FA51C]/14
//               "
//             />

//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 right-[2%]
//                 top-[19%]
//                 h-[360px]
//                 w-[360px]
//                 rounded-full
//                 border
//                 border-[#7FA51C]/10
//               "
//             />

//             {/* DIAGONAL */}

//             <motion.div
//               key={`band-${activeSector.number}`}
//               initial={{
//                 opacity: 0,
//                 x: 80,
//                 rotate: 17,
//               }}
//               animate={{
//                 opacity: 1,
//                 x: 0,
//                 rotate: 17,
//               }}
//               transition={{
//                 duration: 0.65,
//               }}
//               className="
//                 pointer-events-none
//                 absolute
//                 -right-[10%]
//                 top-[10%]
//                 h-[110%]
//                 w-[34%]
//                 rounded-[45%]
//                 bg-gradient-to-b
//                 from-[#9DD827]/24
//                 via-[#7FA51C]/10
//                 to-transparent
//               "
//             />

//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeSector.number}
//                 initial={{
//                   opacity: 0,
//                   y: 22,
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
//                   min-h-[700px]
//                   flex-col
//                   p-8

//                   sm:p-10
//                   lg:p-12
//                   xl:p-14
//                 ">
//                 {/* TOP */}

//                 <div
//                   className="
//                     flex
//                     items-start
//                     justify-between
//                     gap-8
//                   ">
//                   <div>
//                     <p
//                       className="
//                         text-[9px]
//                         font-semibold
//                         uppercase
//                         tracking-[0.17em]
//                         text-[#708D1C]
//                       ">
//                       Industria {activeSector.number}
//                     </p>

//                     <p
//                       className="
//                         mt-2
//                         text-[11px]
//                         uppercase
//                         tracking-[0.13em]
//                         text-[#74877E]
//                       ">
//                       Consultoría especializada
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
//                       bg-[#7FA51C]
//                       text-white
//                       shadow-[0_16px_40px_rgba(127,165,28,.17)]
//                     ">
//                     <ActiveIcon size={23} strokeWidth={1.5} />
//                   </span>
//                 </div>

//                 {/* TITLE */}

//                 <h3
//                   className="
//                     mt-16
//                     max-w-[940px]
//                     text-[clamp(3rem,4.8vw,6rem)]
//                     font-normal
//                     leading-[0.92]
//                     tracking-[-0.065em]
//                     text-[#17392E]
//                   ">
//                   {activeSector.title}
//                 </h3>

//                 {/* BODY */}

//                 <div
//                   className="
//                     mt-9
//                     grid
//                     gap-10

//                     xl:grid-cols-[1.1fr_.9fr]
//                     xl:gap-20
//                   ">
//                   <div>
//                     <p
//                       className="
//                         max-w-[760px]
//                         text-[16px]
//                         leading-8
//                         text-[#516E60]

//                         sm:text-[18px]
//                       ">
//                       {activeSector.description}
//                     </p>

//                     <div
//                       className="
//                         mt-10
//                         flex
//                         items-start
//                         gap-4
//                         border-t
//                         border-[#355E4A]/10
//                         pt-6
//                       ">
//                       <Sparkles
//                         size={17}
//                         strokeWidth={1.5}
//                         className="
//                           mt-1
//                           shrink-0
//                           text-[#7FA51C]
//                         "
//                       />

//                       <p
//                         className="
//                           max-w-[590px]
//                           text-[13px]
//                           leading-6
//                           text-[#6B8076]
//                         ">
//                         Diseñamos la estrategia según la regulación, cadena de
//                         valor, exposición climática y madurez de cada industria.
//                       </p>
//                     </div>
//                   </div>

//                   {/* FOCUS */}

//                   <div>
//                     <p
//                       className="
//                         text-[9px]
//                         font-semibold
//                         uppercase
//                         tracking-[0.16em]
//                         text-[#70857A]
//                       ">
//                       Prioridades frecuentes
//                     </p>

//                     <div
//                       className="
//                         mt-5
//                         grid
//                         grid-cols-2
//                         gap-3
//                       ">
//                       {activeSector.focus.map((item, index) => (
//                         <motion.div
//                           key={item}
//                           initial={{
//                             opacity: 0,
//                             y: 10,
//                           }}
//                           animate={{
//                             opacity: 1,
//                             y: 0,
//                           }}
//                           transition={{
//                             delay: index * 0.04,
//                           }}
//                           className="
//                             group
//                             rounded-[15px]
//                             border
//                             border-[#355E4A]/10
//                             bg-[#F4F7EE]/65
//                             p-4
//                             backdrop-blur-xl
//                             transition-all
//                             duration-300

//                             hover:border-[#7FA51C]/30
//                             hover:bg-[#EDF3E4]
//                           ">
//                           <span
//                             className="
//                               text-[8px]
//                               font-semibold
//                               tracking-[0.13em]
//                               text-[#7FA51C]/60
//                             ">
//                             0{index + 1}
//                           </span>

//                           <p
//                             className="
//                               mt-3
//                               text-[13px]
//                               font-medium
//                               leading-5
//                               text-[#17392E]
//                             ">
//                             {item}
//                           </p>

//                           <span
//                             className="
//                               mt-5
//                               block
//                               h-[2px]
//                               w-6
//                               bg-[#7FA51C]
//                               transition-all
//                               duration-300

//                               group-hover:w-12
//                             "
//                           />
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
//                     border-[#355E4A]/10
//                     pt-7

//                     sm:flex-row
//                     sm:items-center
//                     sm:justify-between
//                   ">
//                   <p
//                     className="
//                       text-[10px]
//                       uppercase
//                       tracking-[0.14em]
//                       text-[#768980]
//                     ">
//                     Soluciones adaptadas al contexto de cada industria
//                   </p>

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
//                         text-[#17392E]
//                       ">
//                       Hablar con nuestro equipo
//                     </span>

//                     <span
//                       className="
//                         flex
//                         h-11
//                         w-11
//                         items-center
//                         justify-center
//                         rounded-full
//                         bg-[#7FA51C]
//                         text-white
//                         transition-all
//                         duration-300

//                         group-hover:rotate-45
//                         group-hover:bg-[#17392E]
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
//             MOBILE NAV
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
//           {sectors.map((sector, index) => (
//             <button
//               key={sector.number}
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
//                 index === activeIndex
//                   ? `
//                       border-[#7FA51C]
//                       bg-[#7FA51C]
//                       text-white
//                     `
//                   : `
//                       border-[#355E4A]/10
//                       bg-[#EEF3E7]
//                       text-[#587166]
//                     `,
//               ].join(" ")}>
//               {sector.short}
//             </button>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ConsultoriaSectorsSection;

import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUpRight,
  Factory,
  HeartPulse,
  Landmark,
  Laptop2,
  ShoppingBag,
  Shirt,
  Sparkles,
  Utensils,
  Zap,
} from "lucide-react";
import { useState } from "react";

/* =========================================================
   SECTORS
========================================================= */

const sectors = [
  {
    number: "01",
    icon: Utensils,
    short: "Alimentos",
    title: "Alimentos & bebidas",
    description:
      "Acompañamos a organizaciones del sector en estrategia ESG, gestión de emisiones, circularidad, abastecimiento responsable y transformación de cadenas de valor.",
    focus: ["Cadena de suministro", "Carbono", "Agua", "Circularidad"],
    accent: "FOOD",
  },
  {
    number: "02",
    icon: Landmark,
    short: "Finanzas",
    title: "Servicios financieros",
    description:
      "Integramos sostenibilidad y criterios ESG en inversión, riesgo, reporting, financiamiento sostenible y toma de decisiones.",
    focus: ["ESG", "Riesgo", "Reporting", "Finanzas sostenibles"],
    accent: "CAPITAL",
  },
  {
    number: "03",
    icon: Shirt,
    short: "Moda",
    title: "Moda & sector textil",
    description:
      "Acompañamos a marcas y organizaciones del sector textil en trazabilidad, abastecimiento responsable, circularidad, materiales, clima y gestión del impacto social.",
    focus: ["Trazabilidad", "Circularidad", "Materiales", "Impacto social"],
    accent: "FASHION",
  },
  {
    number: "04",
    icon: Laptop2,
    short: "Tecnología",
    title: "Tecnología",
    description:
      "Diseñamos estrategias de sostenibilidad y clima para empresas tecnológicas con operaciones, infraestructura digital y cadenas de valor de alcance global.",
    focus: ["Net Zero", "ESG", "Datos", "Energía"],
    accent: "TECH",
  },
  {
    number: "05",
    icon: HeartPulse,
    short: "Salud",
    title: "Salud & farmacéuticos",
    description:
      "Fortalecemos la gestión ambiental, social y de cadena de suministro en organizaciones donde cumplimiento, resiliencia y confianza son críticos.",
    focus: ["Compliance", "Supply Chain", "ESG", "Impacto social"],
    accent: "HEALTH",
  },
  {
    number: "06",
    icon: ShoppingBag,
    short: "Retail",
    title: "Retail & distribución",
    description:
      "Ayudamos a transformar operaciones, productos, empaques y cadenas de suministro para responder a nuevas expectativas de consumidores, clientes y regulación.",
    focus: ["Circularidad", "Packaging", "Supply Chain", "Clima"],
    accent: "RETAIL",
  },
  {
    number: "07",
    icon: Factory,
    short: "Manufactura",
    title: "Manufactura",
    description:
      "Conectamos eficiencia operacional, descarbonización, energía, circularidad y gestión ambiental para construir operaciones más resilientes.",
    focus: ["Descarbonización", "Energía", "ISO", "Circularidad"],
    accent: "INDUSTRY",
  },
  {
    number: "08",
    icon: Zap,
    short: "Energía",
    title: "Energía & infraestructura",
    description:
      "Apoyamos la transición energética mediante estrategia, análisis climático, desarrollo de proyectos y soluciones para reducir emisiones.",
    focus: ["Transición energética", "Clima", "Carbono", "Infraestructura"],
    accent: "ENERGY",
  },
];

/* =========================================================
   SECTOR BUTTON
========================================================= */

function SectorButton({ sector, active, onClick }) {
  const Icon = sector.icon;

  return (
    <button
      type="button"
      onClick={onClick}
      onMouseEnter={onClick}
      className={[
        `
          group
          relative
          grid
          w-full
          grid-cols-[44px_1fr_auto]
          items-center
          gap-4
          border-b
          px-1
          py-5
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
            h-11
            w-11
            items-center
            justify-center
            rounded-[12px]
            transition-all
            duration-300
          `,
          active
            ? "bg-[#7FA51C] text-white"
            : "bg-[#7FA51C]/9 text-[#759A1B] group-hover:bg-[#7FA51C]/14",
        ].join(" ")}>
        <Icon size={18} strokeWidth={1.6} />
      </span>

      <div>
        <span
          className={[
            `
              text-[11px]
              font-semibold
              tracking-[0.14em]
            `,
            active ? "text-[#7FA51C]" : "text-[#7FA51C]/50",
          ].join(" ")}>
          {sector.number}
        </span>

        <p
          className={[
            `
              mt-1
              text-[15px]
              font-medium
              tracking-[-0.025em]
              transition-colors
            `,
            active
              ? "text-[#17392E]"
              : "text-[#597267] group-hover:text-[#17392E]",
          ].join(" ")}>
          {sector.short}
        </p>
      </div>

      <span
        className={[
          `
            h-2
            w-2
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
   SECTORS SECTION
========================================================= */

function ConsultoriaSectorsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSector = sectors[activeIndex];
  const ActiveIcon = activeSector.icon;

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F6F8F1]
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
          bg-[radial-gradient(circle_at_15%_30%,rgba(157,216,39,.12),transparent_23%),radial-gradient(circle_at_89%_76%,rgba(127,165,28,.09),transparent_26%)]
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

            lg:grid-cols-[.62fr_1.38fr]
            lg:items-end
            lg:gap-20
          ">
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
                  tracking-[0.18em]
                  text-[#688A1B]
                ">
                Sectores
              </p>
            </div>

            <p
              className="
                mt-8
                max-w-[430px]
                text-sm
                leading-7
                text-[#657C71]

                sm:text-base
              ">
              La sostenibilidad cambia según el contexto. Por eso adaptamos
              estrategia, metodología y ejecución a cada industria.
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
              max-w-[1120px]
              text-[clamp(3.1rem,5.2vw,6.8rem)]
              font-normal
              leading-[0.9]
              tracking-[-0.065em]
            ">
            Cada industria tiene
            <span className="block text-[#7FA51C]">un reto diferente.</span>
          </motion.h2>
        </div>

        {/* =====================================================
            INTERACTIVE CONTENT
        ===================================================== */}

        <div
          className="
            mt-16
            grid
            gap-7

            lg:grid-cols-[320px_1fr]

            xl:grid-cols-[350px_1fr]
            xl:gap-10
          ">
          {/* =================================================
              SECTOR LIST
          ================================================= */}

          <motion.div
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
              bg-[#EEF3E7]/76
              p-5
              backdrop-blur-xl
            ">
            <div
              className="
                mb-2
                flex
                items-center
                justify-between
                border-b
                border-[#355E4A]/10
                pb-4
              ">
              <p
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-[#70857A]
                ">
                Selecciona una industria
              </p>

              <span
                className="
                  text-[12px]
                  font-semibold
                  text-[#7FA51C]
                ">
                {activeIndex + 1}/{sectors.length}
              </span>
            </div>

            {sectors.map((sector, index) => (
              <SectorButton
                key={sector.number}
                sector={sector}
                active={index === activeIndex}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </motion.div>

          {/* =================================================
              ACTIVE INDUSTRY
          ================================================= */}

          <div
            className="
              relative
              min-h-[700px]
              overflow-hidden
              rounded-[26px]
              bg-[#E7EFD9]
              shadow-[0_25px_70px_rgba(43,71,57,.08)]
            ">
            {/* =================================================
                GRAPHIC BACKGROUND
            ================================================= */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                bg-[radial-gradient(circle_at_72%_36%,rgba(157,216,39,.24),transparent_27%),linear-gradient(135deg,#EDF3E6_0%,#E4EDD7_100%)]
              "
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={`accent-${activeSector.number}`}
                initial={{
                  opacity: 0,
                  x: 60,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: -30,
                }}
                transition={{
                  duration: 0.45,
                }}
                className="
                  pointer-events-none
                  absolute
                  -right-[5%]
                  top-[5%]
                  select-none
                  text-[clamp(8rem,15vw,17rem)]
                  font-semibold
                  leading-none
                  tracking-[-0.09em]
                  text-[#7FA51C]/[0.055]
                ">
                {activeSector.accent}
              </motion.div>
            </AnimatePresence>

            {/* LARGE ARC */}

            <div
              className="
                pointer-events-none
                absolute
                right-[-12%]
                top-[7%]
                h-[560px]
                w-[560px]
                rounded-full
                border
                border-[#7FA51C]/14
              "
            />

            <div
              className="
                pointer-events-none
                absolute
                right-[2%]
                top-[19%]
                h-[360px]
                w-[360px]
                rounded-full
                border
                border-[#7FA51C]/10
              "
            />

            {/* DIAGONAL */}

            <motion.div
              key={`band-${activeSector.number}`}
              initial={{
                opacity: 0,
                x: 80,
                rotate: 17,
              }}
              animate={{
                opacity: 1,
                x: 0,
                rotate: 17,
              }}
              transition={{
                duration: 0.65,
              }}
              className="
                pointer-events-none
                absolute
                -right-[10%]
                top-[10%]
                h-[110%]
                w-[34%]
                rounded-[45%]
                bg-gradient-to-b
                from-[#9DD827]/24
                via-[#7FA51C]/10
                to-transparent
              "
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeSector.number}
                initial={{
                  opacity: 0,
                  y: 22,
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
                  min-h-[700px]
                  flex-col
                  p-8

                  sm:p-10
                  lg:p-12
                  xl:p-14
                ">
                {/* TOP */}

                <div
                  className="
                    flex
                    items-start
                    justify-between
                    gap-8
                  ">
                  <div>
                    <p
                      className="
                        text-[11px]
                        font-semibold
                        uppercase
                        tracking-[0.17em]
                        text-[#708D1C]
                      ">
                      Industria {activeSector.number}
                    </p>

                    <p
                      className="
                        mt-2
                        text-[12px]
                        uppercase
                        tracking-[0.13em]
                        text-[#74877E]
                      ">
                      Consultoría especializada
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
                      bg-[#7FA51C]
                      text-white
                      shadow-[0_16px_40px_rgba(127,165,28,.17)]
                    ">
                    <ActiveIcon size={23} strokeWidth={1.5} />
                  </span>
                </div>

                {/* TITLE */}

                <h3
                  className="
                    mt-16
                    max-w-[940px]
                    text-[clamp(3rem,4.8vw,6rem)]
                    font-normal
                    leading-[0.92]
                    tracking-[-0.065em]
                    text-[#17392E]
                  ">
                  {activeSector.title}
                </h3>

                {/* BODY */}

                <div
                  className="
                    mt-9
                    grid
                    gap-10

                    xl:grid-cols-[1.1fr_.9fr]
                    xl:gap-20
                  ">
                  <div>
                    <p
                      className="
                        max-w-[760px]
                        text-[16px]
                        leading-8
                        text-[#516E60]

                        sm:text-[18px]
                      ">
                      {activeSector.description}
                    </p>

                    <div
                      className="
                        mt-10
                        flex
                        items-start
                        gap-4
                        border-t
                        border-[#355E4A]/10
                        pt-6
                      ">
                      <Sparkles
                        size={17}
                        strokeWidth={1.5}
                        className="
                          mt-1
                          shrink-0
                          text-[#7FA51C]
                        "
                      />

                      <p
                        className="
                          max-w-[590px]
                          text-[13px]
                          leading-6
                          text-[#6B8076]
                        ">
                        Diseñamos la estrategia según la regulación, cadena de
                        valor, exposición climática y madurez de cada industria.
                      </p>
                    </div>
                  </div>

                  {/* FOCUS */}

                  <div>
                    <p
                      className="
                        text-[11px]
                        font-semibold
                        uppercase
                        tracking-[0.16em]
                        text-[#70857A]
                      ">
                      Prioridades frecuentes
                    </p>

                    <div
                      className="
                        mt-5
                        grid
                        grid-cols-2
                        gap-3
                      ">
                      {activeSector.focus.map((item, index) => (
                        <motion.div
                          key={item}
                          initial={{
                            opacity: 0,
                            y: 10,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            delay: index * 0.04,
                          }}
                          className="
                            group
                            rounded-[15px]
                            border
                            border-[#355E4A]/10
                            bg-[#F4F7EE]/65
                            p-4
                            backdrop-blur-xl
                            transition-all
                            duration-300

                            hover:border-[#7FA51C]/30
                            hover:bg-[#EDF3E4]
                          ">
                          <span
                            className="
                              text-[11px]
                              font-semibold
                              tracking-[0.13em]
                              text-[#7FA51C]/70
                            ">
                            0{index + 1}
                          </span>

                          <p
                            className="
                              mt-3
                              text-[14px]
                              font-medium
                              leading-5
                              text-[#17392E]
                            ">
                            {item}
                          </p>

                          <span
                            className="
                              mt-5
                              block
                              h-[2px]
                              w-6
                              bg-[#7FA51C]
                              transition-all
                              duration-300

                              group-hover:w-12
                            "
                          />
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
                    border-[#355E4A]/10
                    pt-7

                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                  ">
                  <p
                    className="
                      text-[11px]
                      uppercase
                      tracking-[0.14em]
                      text-[#768980]
                    ">
                    Soluciones adaptadas al contexto de cada industria
                  </p>

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
                        text-[#17392E]
                      ">
                      Hablar con nuestro equipo
                    </span>

                    <span
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-full
                        bg-[#7FA51C]
                        text-white
                        transition-all
                        duration-300

                        group-hover:rotate-45
                        group-hover:bg-[#17392E]
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
            MOBILE NAV
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
          {sectors.map((sector, index) => (
            <button
              key={sector.number}
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
                index === activeIndex
                  ? `
                      border-[#7FA51C]
                      bg-[#7FA51C]
                      text-white
                    `
                  : `
                      border-[#355E4A]/10
                      bg-[#EEF3E7]
                      text-[#587166]
                    `,
              ].join(" ")}>
              {sector.short}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ConsultoriaSectorsSection;
