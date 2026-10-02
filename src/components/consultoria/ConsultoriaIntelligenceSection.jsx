// import { motion } from "motion/react";
// import {
//   ArrowUpRight,
//   BookOpen,
//   BrainCircuit,
//   ChartNoAxesCombined,
//   Globe2,
//   Radar,
//   Sparkles,
// } from "lucide-react";

// /* =========================================================
//    INSIGHTS
// ========================================================= */

// const insights = [
//   {
//     number: "01",
//     icon: ChartNoAxesCombined,
//     category: "Clima",
//     title: "Anticipar el cambio antes de que se convierta en riesgo.",
//     text: "Análisis, regulación, tendencias y señales que ayudan a preparar mejores decisiones.",
//   },
//   {
//     number: "02",
//     icon: Globe2,
//     category: "Sostenibilidad",
//     title: "Entender hacia dónde se mueve el mercado.",
//     text: "Perspectivas internacionales aplicadas al contexto real de cada organización.",
//   },
//   {
//     number: "03",
//     icon: BrainCircuit,
//     category: "Estrategia",
//     title: "Convertir información compleja en ventaja.",
//     text: "Conocimiento especializado para conectar riesgos, oportunidades y acción.",
//   },
// ];

// /* =========================================================
//    INTELLIGENCE ORBIT
// ========================================================= */

// function IntelligenceOrbit() {
//   return (
//     <div
//       className="
//         relative
//         mx-auto
//         aspect-square
//         w-full
//         max-w-[620px]
//       ">
//       {/* GLOW */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           left-1/2
//           top-1/2
//           h-[72%]
//           w-[72%]
//           -translate-x-1/2
//           -translate-y-1/2
//           rounded-full
//           bg-[#9DD827]/12
//           blur-[100px]
//         "
//       />

//       {/* ORBITS */}

//       {[92, 72, 52].map((size, index) => (
//         <motion.div
//           key={size}
//           initial={{
//             opacity: 0,
//             scale: 0.82,
//           }}
//           whileInView={{
//             opacity: 1,
//             scale: 1,
//           }}
//           viewport={{
//             once: true,
//             amount: 0.4,
//           }}
//           transition={{
//             duration: 0.9,
//             delay: index * 0.1,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="
//             pointer-events-none
//             absolute
//             left-1/2
//             top-1/2
//             -translate-x-1/2
//             -translate-y-1/2
//             rounded-full
//             border
//             border-[#9DD827]/12
//           "
//           style={{
//             width: `${size}%`,
//             height: `${size}%`,
//           }}
//         />
//       ))}

//       {/* DIAGONAL */}

//       <motion.div
//         initial={{
//           scaleY: 0,
//         }}
//         whileInView={{
//           scaleY: 1,
//         }}
//         viewport={{
//           once: true,
//         }}
//         transition={{
//           duration: 1.2,
//           delay: 0.25,
//           ease: [0.22, 1, 0.36, 1],
//         }}
//         className="
//           pointer-events-none
//           absolute
//           left-1/2
//           top-[4%]
//           h-[92%]
//           w-px
//           origin-bottom
//           rotate-[36deg]
//           bg-gradient-to-b
//           from-transparent
//           via-[#9DD827]/55
//           to-transparent
//         "
//       />

//       {/* CORE */}

//       <motion.div
//         initial={{
//           opacity: 0,
//           scale: 0.8,
//         }}
//         whileInView={{
//           opacity: 1,
//           scale: 1,
//         }}
//         viewport={{
//           once: true,
//           amount: 0.5,
//         }}
//         transition={{
//           duration: 0.8,
//           delay: 0.25,
//           ease: [0.22, 1, 0.36, 1],
//         }}
//         className="
//           absolute
//           left-1/2
//           top-1/2
//           z-10
//           flex
//           h-[180px]
//           w-[180px]
//           -translate-x-1/2
//           -translate-y-1/2
//           flex-col
//           items-center
//           justify-center
//           rounded-full
//           bg-[#7FA51C]
//           text-center
//           text-white
//           shadow-[0_25px_70px_rgba(127,165,28,.24)]

//           sm:h-[210px]
//           sm:w-[210px]
//         ">
//         <Radar size={25} strokeWidth={1.4} className="text-[#E3F7AD]" />

//         <span
//           className="
//             mt-4
//             text-[8px]
//             font-semibold
//             uppercase
//             tracking-[0.18em]
//             text-white/55
//           ">
//           Intelligence
//         </span>

//         <p
//           className="
//             mt-2
//             text-[26px]
//             font-normal
//             leading-[0.95]
//             tracking-[-0.05em]

//             sm:text-[30px]
//           ">
//           Detectar
//           <span className="block text-[#E3F7AD]">antes.</span>
//         </p>
//       </motion.div>

//       {/* FLOATING SIGNALS */}

//       <motion.div
//         initial={{
//           opacity: 0,
//           x: -16,
//         }}
//         whileInView={{
//           opacity: 1,
//           x: 0,
//         }}
//         viewport={{ once: true }}
//         transition={{
//           duration: 0.6,
//           delay: 0.65,
//         }}
//         className="
//           absolute
//           left-[0%]
//           top-[20%]
//           z-20
//           rounded-full
//           border
//           border-white/10
//           bg-white/[0.055]
//           px-4
//           py-2.5
//           text-[9px]
//           uppercase
//           tracking-[0.14em]
//           text-white/55
//           backdrop-blur-xl

//           sm:left-[4%]
//         ">
//         Tendencias
//       </motion.div>

//       <motion.div
//         initial={{
//           opacity: 0,
//           x: 16,
//         }}
//         whileInView={{
//           opacity: 1,
//           x: 0,
//         }}
//         viewport={{ once: true }}
//         transition={{
//           duration: 0.6,
//           delay: 0.75,
//         }}
//         className="
//           absolute
//           right-[0%]
//           top-[27%]
//           z-20
//           rounded-full
//           border
//           border-white/10
//           bg-white/[0.055]
//           px-4
//           py-2.5
//           text-[9px]
//           uppercase
//           tracking-[0.14em]
//           text-white/55
//           backdrop-blur-xl

//           sm:right-[3%]
//         ">
//         Regulación
//       </motion.div>

//       <motion.div
//         initial={{
//           opacity: 0,
//           x: -16,
//         }}
//         whileInView={{
//           opacity: 1,
//           x: 0,
//         }}
//         viewport={{ once: true }}
//         transition={{
//           duration: 0.6,
//           delay: 0.85,
//         }}
//         className="
//           absolute
//           bottom-[19%]
//           left-[4%]
//           z-20
//           rounded-full
//           border
//           border-white/10
//           bg-white/[0.055]
//           px-4
//           py-2.5
//           text-[9px]
//           uppercase
//           tracking-[0.14em]
//           text-white/55
//           backdrop-blur-xl
//         ">
//         Riesgos
//       </motion.div>

//       <motion.div
//         initial={{
//           opacity: 0,
//           x: 16,
//         }}
//         whileInView={{
//           opacity: 1,
//           x: 0,
//         }}
//         viewport={{ once: true }}
//         transition={{
//           duration: 0.6,
//           delay: 0.95,
//         }}
//         className="
//           absolute
//           bottom-[14%]
//           right-[3%]
//           z-20
//           rounded-full
//           border
//           border-[#9DD827]/20
//           bg-[#9DD827]/10
//           px-4
//           py-2.5
//           text-[9px]
//           uppercase
//           tracking-[0.14em]
//           text-[#C5ED70]
//           backdrop-blur-xl
//         ">
//         Oportunidades
//       </motion.div>
//     </div>
//   );
// }

// /* =========================================================
//    CONSULTORIA INTELLIGENCE
// ========================================================= */

// function ConsultoriaIntelligenceSection() {
//   return (
//     <section
//       className="
//         relative
//         overflow-hidden
//         bg-[#102F27]
//         py-24
//         text-white

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
//           bg-[radial-gradient(circle_at_75%_35%,rgba(157,216,39,.13),transparent_29%),radial-gradient(circle_at_10%_88%,rgba(127,165,28,.08),transparent_25%)]
//         "
//       />

//       <div
//         className="
//           pointer-events-none
//           absolute
//           inset-0
//           opacity-[0.045]
//           [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)]
//           [background-size:44px_44px]
//         "
//       />

//       {/* GIANT WORD */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           -right-[4%]
//           top-[0%]
//           hidden
//           select-none
//           text-[clamp(8rem,16vw,18rem)]
//           font-semibold
//           leading-none
//           tracking-[-0.08em]
//           text-white/[0.025]

//           lg:block
//         ">
//         INSIGHT
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
//             MAIN HERO
//         =================================================== */}

//         <div
//           className="
//             grid
//             gap-16

//             lg:grid-cols-[1.02fr_.98fr]
//             lg:items-center
//             lg:gap-14

//             xl:gap-20
//           ">
//           {/* =================================================
//               LEFT
//           ================================================= */}

//           <div>
//             <motion.div
//               initial={{
//                 opacity: 0,
//                 y: 18,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               viewport={{
//                 once: true,
//                 amount: 0.4,
//               }}
//               transition={{
//                 duration: 0.7,
//               }}
//               className="
//                 flex
//                 items-center
//                 gap-4
//               ">
//               <span
//                 className="
//                   flex
//                   h-10
//                   w-10
//                   items-center
//                   justify-center
//                   rounded-full
//                   bg-[#9DD827]
//                   text-[10px]
//                   font-semibold
//                   text-[#17392E]
//                 ">
//                 04
//               </span>

//               <span className="h-px w-10 bg-[#9DD827]" />

//               <p
//                 className="
//                   text-[10px]
//                   font-semibold
//                   uppercase
//                   tracking-[0.18em]
//                   text-[#B8EB50]
//                 ">
//                 Intelligence
//               </p>
//             </motion.div>

//             <motion.h2
//               initial={{
//                 opacity: 0,
//                 y: 34,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               viewport={{
//                 once: true,
//                 amount: 0.3,
//               }}
//               transition={{
//                 duration: 0.85,
//                 ease: [0.22, 1, 0.36, 1],
//               }}
//               className="
//                 mt-10
//                 max-w-[970px]
//                 text-[clamp(3.4rem,5.7vw,7.2rem)]
//                 font-normal
//                 leading-[0.88]
//                 tracking-[-0.068em]
//               ">
//               Saber qué viene
//               <span className="block text-[#B8EB50]">
//                 cambia lo que haces hoy.
//               </span>
//             </motion.h2>

//             <motion.p
//               initial={{
//                 opacity: 0,
//                 y: 22,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               viewport={{
//                 once: true,
//                 amount: 0.3,
//               }}
//               transition={{
//                 duration: 0.75,
//                 delay: 0.1,
//               }}
//               className="
//                 mt-8
//                 max-w-[680px]
//                 text-[16px]
//                 leading-8
//                 text-white/58

//                 sm:text-[18px]
//               ">
//               La sostenibilidad evoluciona rápido. Regulación, mercados,
//               tecnología, clima y expectativas sociales cambian constantemente.
//               Convertimos esas señales en conocimiento útil para decidir antes.
//             </motion.p>

//             {/* VALUE */}

//             <motion.div
//               initial={{
//                 opacity: 0,
//                 y: 18,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 0.7,
//                 delay: 0.18,
//               }}
//               className="
//                 mt-9
//                 flex
//                 max-w-[670px]
//                 items-start
//                 gap-4
//                 border-t
//                 border-white/[0.08]
//                 pt-6
//               ">
//               <Sparkles
//                 size={17}
//                 strokeWidth={1.5}
//                 className="
//                   mt-1
//                   shrink-0
//                   text-[#9DD827]
//                 "
//               />

//               <p
//                 className="
//                   text-[13px]
//                   leading-6
//                   text-white/45
//                 ">
//                 Inteligencia aplicada para detectar riesgos, tendencias y
//                 oportunidades antes de que impacten la estrategia.
//               </p>
//             </motion.div>

//             {/* CTA */}

//             <motion.a
//               initial={{
//                 opacity: 0,
//                 y: 16,
//               }}
//               whileInView={{
//                 opacity: 1,
//                 y: 0,
//               }}
//               viewport={{ once: true }}
//               transition={{
//                 duration: 0.7,
//                 delay: 0.25,
//               }}
//               href="#contacto"
//               className="
//                 group
//                 mt-9
//                 inline-flex
//                 items-center
//                 gap-4
//               ">
//               <span
//                 className="
//                   flex
//                   h-12
//                   w-12
//                   items-center
//                   justify-center
//                   rounded-full
//                   bg-[#9DD827]
//                   text-[#17392E]
//                   transition-all
//                   duration-300

//                   group-hover:rotate-45
//                   group-hover:bg-white
//                 ">
//                 <ArrowUpRight size={17} strokeWidth={1.6} />
//               </span>

//               <span
//                 className="
//                   text-[13px]
//                   font-medium
//                   text-white
//                 ">
//                 Conocer más
//               </span>
//             </motion.a>
//           </div>

//           {/* =================================================
//               VISUAL
//           ================================================= */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               x: 35,
//             }}
//             whileInView={{
//               opacity: 1,
//               x: 0,
//             }}
//             viewport={{
//               once: true,
//               amount: 0.25,
//             }}
//             transition={{
//               duration: 0.9,
//               ease: [0.22, 1, 0.36, 1],
//             }}>
//             <IntelligenceOrbit />
//           </motion.div>
//         </div>

//         {/* =====================================================
//             INSIGHTS
//         ===================================================== */}

//         <div
//           className="
//             mt-20
//             grid
//             border-t
//             border-white/[0.08]

//             lg:mt-24
//             lg:grid-cols-3
//           ">
//           {insights.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <motion.div
//                 key={item.number}
//                 initial={{
//                   opacity: 0,
//                   y: 22,
//                 }}
//                 whileInView={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 viewport={{
//                   once: true,
//                   amount: 0.3,
//                 }}
//                 transition={{
//                   duration: 0.7,
//                   delay: index * 0.08,
//                 }}
//                 className={[
//                   `
//                     group
//                     relative
//                     min-h-[330px]
//                     overflow-hidden
//                     border-white/[0.08]
//                     px-2
//                     py-8

//                     sm:px-5

//                     lg:p-8
//                   `,
//                   index < insights.length - 1
//                     ? "border-b lg:border-b-0 lg:border-r"
//                     : "",
//                 ].join(" ")}>
//                 {/* HOVER */}

//                 <div
//                   className="
//                     pointer-events-none
//                     absolute
//                     inset-0
//                     translate-y-full
//                     bg-[#9DD827]/[0.055]
//                     transition-transform
//                     duration-500
//                     ease-out

//                     group-hover:translate-y-0
//                   "
//                 />

//                 <div
//                   className="
//                     relative
//                     z-10
//                     flex
//                     h-full
//                     flex-col
//                   ">
//                   <div
//                     className="
//                       flex
//                       items-start
//                       justify-between
//                       gap-5
//                     ">
//                     <span
//                       className="
//                         text-[9px]
//                         font-semibold
//                         tracking-[0.15em]
//                         text-[#9DD827]
//                       ">
//                       {item.number}
//                     </span>

//                     <span
//                       className="
//                         flex
//                         h-11
//                         w-11
//                         items-center
//                         justify-center
//                         rounded-[12px]
//                         border
//                         border-white/10
//                         bg-white/[0.045]
//                         text-[#9DD827]
//                         transition-all
//                         duration-300

//                         group-hover:bg-[#9DD827]
//                         group-hover:text-[#17392E]
//                       ">
//                       <Icon size={18} strokeWidth={1.5} />
//                     </span>
//                   </div>

//                   <div className="mt-auto">
//                     <p
//                       className="
//                         text-[9px]
//                         font-semibold
//                         uppercase
//                         tracking-[0.16em]
//                         text-white/32
//                       ">
//                       {item.category}
//                     </p>

//                     <h3
//                       className="
//                         mt-4
//                         max-w-[420px]
//                         text-[24px]
//                         font-normal
//                         leading-[1.08]
//                         tracking-[-0.045em]
//                         text-white

//                         xl:text-[28px]
//                       ">
//                       {item.title}
//                     </h3>

//                     <p
//                       className="
//                         mt-5
//                         max-w-[400px]
//                         text-[13px]
//                         leading-6
//                         text-white/44
//                       ">
//                       {item.text}
//                     </p>

//                     <span
//                       className="
//                         mt-8
//                         block
//                         h-[2px]
//                         w-8
//                         bg-[#9DD827]
//                         transition-all
//                         duration-500

//                         group-hover:w-full
//                       "
//                     />
//                   </div>
//                 </div>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* =====================================================
//             BOTTOM
//         ===================================================== */}

//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 20,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{ once: true }}
//           transition={{
//             duration: 0.7,
//           }}
//           className="
//             mt-12
//             flex
//             flex-col
//             gap-5
//             border-t
//             border-white/[0.08]
//             pt-7

//             sm:flex-row
//             sm:items-center
//             sm:justify-between
//           ">
//           <div className="flex items-center gap-3">
//             <BookOpen size={15} strokeWidth={1.5} className="text-[#9DD827]" />

//             <span
//               className="
//                 text-[9px]
//                 uppercase
//                 tracking-[0.15em]
//                 text-white/35
//               ">
//               Conocimiento para tomar decisiones con anticipación
//             </span>
//           </div>

//           <a
//             href="#contacto"
//             className="
//               group
//               inline-flex
//               items-center
//               gap-3
//               text-[11px]
//               font-medium
//               text-white
//             ">
//             Hablar con nuestro equipo
//             <ArrowUpRight
//               size={15}
//               strokeWidth={1.6}
//               className="
//                 text-[#9DD827]
//                 transition-transform
//                 duration-300

//                 group-hover:-translate-y-0.5
//                 group-hover:translate-x-0.5
//               "
//             />
//           </a>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default ConsultoriaIntelligenceSection;

import { motion } from "motion/react";
import {
  ArrowUpRight,
  BarChart3,
  Building2,
  Database,
  Globe2,
  Layers3,
  Radar,
  Sparkles,
} from "lucide-react";

/* =========================================================
   METRICS
========================================================= */

const metrics = [
  {
    value: "+12,000",
    label: "Usuarios",
    description:
      "Personas utilizando la plataforma para gestionar información y desempeño de sostenibilidad.",
    icon: Globe2,
  },
  {
    value: "+450 M",
    label: "Toneladas de CO₂ gestionadas",
    description:
      "Información climática y de carbono gestionada a través del ecosistema de Anthesis Intelligence.",
    icon: BarChart3,
  },
  {
    value: "+1 billón",
    label: "Puntos de datos analizados",
    description:
      "Datos conectados para transformar información compleja en una visión útil para la organización.",
    icon: Database,
  },
  {
    value: "+530",
    label: "Compañías",
    description:
      "Organizaciones que utilizan capacidades de Anthesis Intelligence para impulsar su desempeño sostenible.",
    icon: Building2,
  },
];

/* =========================================================
   PLATFORM SIGNALS
========================================================= */

const platformSignals = [
  {
    label: "Datos",
    className: "left-[2%] top-[18%] sm:left-[5%]",
  },
  {
    label: "Carbono",
    className: "right-[0%] top-[26%] sm:right-[4%]",
  },
  {
    label: "Desempeño",
    className: "bottom-[17%] left-[4%]",
  },
  {
    label: "Decisiones",
    className: "bottom-[12%] right-[2%]",
    accent: true,
  },
];

/* =========================================================
   INTELLIGENCE ORBIT
========================================================= */

function IntelligenceOrbit() {
  return (
    <div
      className="
        relative
        mx-auto
        aspect-square
        w-full
        max-w-[620px]
      ">
      {/* AMBIENT GLOW */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          h-[74%]
          w-[74%]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#9DD827]/12
          blur-[110px]
        "
      />

      {/* ORBITS */}

      {[92, 73, 54].map((size, index) => (
        <motion.div
          key={size}
          initial={{ opacity: 0, scale: 0.82 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            duration: 0.9,
            delay: index * 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            pointer-events-none
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-[#9DD827]/12
          "
          style={{
            width: `${size}%`,
            height: `${size}%`,
          }}
        />
      ))}

      {/* DIAGONAL DATA AXIS */}

      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
          delay: 0.25,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-[4%]
          h-[92%]
          w-px
          origin-bottom
          rotate-[36deg]
          bg-gradient-to-b
          from-transparent
          via-[#9DD827]/55
          to-transparent
        "
      />

      {/* SECONDARY AXIS */}

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.25,
          delay: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          pointer-events-none
          absolute
          left-[7%]
          top-1/2
          h-px
          w-[86%]
          origin-left
          -rotate-[17deg]
          bg-gradient-to-r
          from-transparent
          via-white/20
          to-transparent
        "
      />

      {/* DATA POINTS */}

      {[
        ["22%", "32%", 0.55],
        ["37%", "58%", 0.72],
        ["54%", "43%", 0.9],
        ["66%", "63%", 1.08],
        ["78%", "34%", 1.26],
      ].map(([left, top, delay], index) => (
        <motion.span
          key={`${left}-${top}`}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay }}
          className={[
            `
              pointer-events-none
              absolute
              z-10
              rounded-full
              bg-[#B8EB50]
              shadow-[0_0_18px_rgba(184,235,80,.45)]
            `,
            index === 2 ? "h-3 w-3" : "h-2 w-2",
          ].join(" ")}
          style={{ left, top }}
        />
      ))}

      {/* CORE */}

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{
          duration: 0.8,
          delay: 0.25,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          absolute
          left-1/2
          top-1/2
          z-20
          flex
          h-[188px]
          w-[188px]
          -translate-x-1/2
          -translate-y-1/2
          flex-col
          items-center
          justify-center
          rounded-full
          border
          border-white/12
          bg-[#7FA51C]
          px-6
          text-center
          text-white
          shadow-[0_25px_70px_rgba(127,165,28,.26)]

          sm:h-[220px]
          sm:w-[220px]
        ">
        <Radar size={27} strokeWidth={1.4} className="text-[#E3F7AD]" />

        <span
          className="
            mt-4
            text-[11px]
            font-semibold
            uppercase
            tracking-[0.17em]
            text-white/70
          ">
          Anthesis Intelligence
        </span>

        <p
          className="
            mt-3
            text-[25px]
            font-normal
            leading-[0.98]
            tracking-[-0.05em]

            sm:text-[30px]
          ">
          Sustainable
          <span className="block text-[#E3F7AD]">Performance</span>
        </p>
      </motion.div>

      {/* SIGNALS */}

      {platformSignals.map((signal, index) => (
        <motion.div
          key={signal.label}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            delay: 0.68 + index * 0.09,
          }}
          className={[
            `
              absolute
              z-30
              rounded-full
              border
              px-4
              py-2.5
              text-[11px]
              font-medium
              uppercase
              tracking-[0.13em]
              backdrop-blur-xl
            `,
            signal.accent
              ? "border-[#9DD827]/25 bg-[#9DD827]/12 text-[#D4F58A]"
              : "border-white/10 bg-white/[0.055] text-white/60",
            signal.className,
          ].join(" ")}>
          {signal.label}
        </motion.div>
      ))}
    </div>
  );
}

/* =========================================================
   CONSULTORIA INTELLIGENCE
========================================================= */

function ConsultoriaIntelligenceSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#102F27]
        py-24
        text-white

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
          bg-[radial-gradient(circle_at_75%_35%,rgba(157,216,39,.13),transparent_29%),radial-gradient(circle_at_10%_88%,rgba(127,165,28,.08),transparent_25%)]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.045]
          [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)]
          [background-size:44px_44px]
        "
      />

      {/* GIANT WORD */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[4%]
          top-[0%]
          hidden
          select-none
          text-[clamp(8rem,16vw,18rem)]
          font-semibold
          leading-none
          tracking-[-0.08em]
          text-white/[0.025]

          lg:block
        ">
        DATA
      </div>

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
            MAIN HERO
        =================================================== */}

        <div
          className="
            grid
            gap-16

            lg:grid-cols-[1.02fr_.98fr]
            lg:items-center
            lg:gap-14

            xl:gap-20
          ">
          {/* LEFT */}

          <div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7 }}
              className="
                flex
                items-center
                gap-4
              ">
              <span className="h-px w-10 bg-[#9DD827]" />

              <div>
                <p
                  className="
                    text-[12px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#B8EB50]
                  ">
                  Anthesis Intelligence
                </p>

                <p
                  className="
                    mt-1.5
                    text-[12px]
                    font-medium
                    text-white/42
                  ">
                  Sustainable Performance Platform
                </p>
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.85,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-10
                max-w-[970px]
                text-[clamp(3.25rem,5.45vw,6.9rem)]
                font-normal
                leading-[0.9]
                tracking-[-0.067em]
              ">
              Datos que conectan
              <span className="block text-[#B8EB50]">
                sostenibilidad y desempeño.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.75,
                delay: 0.1,
              }}
              className="
                mt-8
                max-w-[720px]
                text-[16px]
                leading-8
                text-white/60

                sm:text-[18px]
              ">
              Anthesis Intelligence conecta distintos motores de datos de
              sostenibilidad en una plataforma diseñada para evolucionar con las
              prioridades y el nivel de madurez de cada organización.
            </motion.p>

            {/* VALUE */}

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.18,
              }}
              className="
                mt-9
                flex
                max-w-[700px]
                items-start
                gap-4
                border-t
                border-white/[0.08]
                pt-6
              ">
              <Layers3
                size={18}
                strokeWidth={1.5}
                className="
                  mt-1
                  shrink-0
                  text-[#9DD827]
                "
              />

              <p
                className="
                  text-[14px]
                  leading-6
                  text-white/50
                ">
                Una infraestructura digital para centralizar, analizar y
                convertir información de sostenibilidad en una visión útil para
                la gestión y la toma de decisiones.
              </p>
            </motion.div>

            {/* CTA */}

            <motion.a
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.25,
              }}
              href="#contacto"
              className="
                group
                mt-9
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
                  bg-[#9DD827]
                  text-[#17392E]
                  transition-all
                  duration-300

                  group-hover:rotate-45
                  group-hover:bg-white
                ">
                <ArrowUpRight size={17} strokeWidth={1.6} />
              </span>

              <span
                className="
                  text-[14px]
                  font-medium
                  text-white
                ">
                Hablar con nuestro equipo
              </span>
            </motion.a>
          </div>

          {/* VISUAL */}

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <IntelligenceOrbit />
          </motion.div>
        </div>

        {/* =====================================================
            METRICS
        ===================================================== */}

        <div
          className="
            mt-20
            grid
            overflow-hidden
            rounded-[24px]
            border
            border-white/[0.08]
            bg-white/[0.025]

            sm:grid-cols-2
            lg:mt-24
            lg:grid-cols-4
          ">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;

            return (
              <motion.article
                key={metric.value}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={[
                  `
                    group
                    relative
                    min-h-[320px]
                    overflow-hidden
                    p-7

                    sm:p-8
                    lg:p-9
                  `,
                  index < metrics.length - 1
                    ? "border-b border-white/[0.08] sm:odd:border-r lg:border-b-0 lg:border-r"
                    : "",
                  index === 1 ? "sm:border-r-0 lg:border-r" : "",
                  index === 2 ? "sm:border-b-0 sm:border-r" : "",
                ].join(" ")}>
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    translate-y-full
                    bg-[#9DD827]/[0.055]
                    transition-transform
                    duration-500
                    ease-out

                    group-hover:translate-y-0
                  "
                />

                <div className="relative z-10 flex h-full flex-col">
                  <div className="flex items-start justify-between gap-5">
                    <span
                      className="
                        text-[11px]
                        font-semibold
                        uppercase
                        tracking-[0.15em]
                        text-[#9DD827]
                      ">
                      Anthesis Intelligence
                    </span>

                    <span
                      className="
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-[13px]
                        border
                        border-white/10
                        bg-white/[0.045]
                        text-[#9DD827]
                        transition-all
                        duration-300

                        group-hover:bg-[#9DD827]
                        group-hover:text-[#17392E]
                      ">
                      <Icon size={19} strokeWidth={1.5} />
                    </span>
                  </div>

                  <div className="mt-auto pt-12">
                    <p
                      className="
                        text-[clamp(2.6rem,4.1vw,4.8rem)]
                        font-normal
                        leading-none
                        tracking-[-0.06em]
                        text-white
                      ">
                      {metric.value}
                    </p>

                    <p
                      className="
                        mt-4
                        max-w-[280px]
                        text-[15px]
                        font-medium
                        leading-6
                        text-[#D7F59A]
                      ">
                      {metric.label}
                    </p>

                    <p
                      className="
                        mt-4
                        max-w-[330px]
                        text-[13px]
                        leading-6
                        text-white/45
                      ">
                      {metric.description}
                    </p>

                    <span
                      className="
                        mt-7
                        block
                        h-[2px]
                        w-8
                        bg-[#9DD827]
                        transition-all
                        duration-500

                        group-hover:w-16
                      "
                    />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* =====================================================
            BOTTOM
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            mt-10
            flex
            flex-col
            gap-5
            border-t
            border-white/[0.08]
            pt-7

            sm:flex-row
            sm:items-center
            sm:justify-between
          ">
          <div className="flex items-center gap-3">
            <Sparkles size={16} strokeWidth={1.5} className="text-[#9DD827]" />

            <span
              className="
                text-[11px]
                uppercase
                tracking-[0.15em]
                text-white/40
              ">
              Datos · sostenibilidad · desempeño
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span
              className="
                relative
                flex
                h-2
                w-2
              ">
              <span
                className="
                  absolute
                  inset-0
                  animate-ping
                  rounded-full
                  bg-[#9DD827]/40
                "
              />

              <span
                className="
                  relative
                  h-2
                  w-2
                  rounded-full
                  bg-[#9DD827]
                "
              />
            </span>

            <span
              className="
                text-[11px]
                uppercase
                tracking-[0.14em]
                text-white/40
              ">
              Plataforma de desempeño sostenible
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ConsultoriaIntelligenceSection;
