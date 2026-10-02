// import { motion } from "motion/react";
// import {
//   ArrowUpRight,
//   Cog,
//   Leaf,
//   Lightbulb,
//   Recycle,
//   RefreshCw,
//   Trash2,
//   TrendingUp,
// } from "lucide-react";

// import residuosHeroImage from "../../assets/images/residuos/residuos-hero.jpg";

// /* =========================================================
//    BENEFICIOS
// ========================================================= */

// const benefits = [
//   {
//     icon: Leaf,
//     title: "Economía circular",
//     description: "Impulsamos ciclos de valor sostenibles.",
//   },
//   {
//     icon: Cog,
//     title: "Tecnología avanzada",
//     description: "Procesos eficientes para máxima recuperación.",
//   },
//   {
//     icon: Lightbulb,
//     title: "Energía limpia",
//     description: "Aprovechamos el potencial energético de los residuos.",
//   },
//   {
//     icon: TrendingUp,
//     title: "Impacto positivo",
//     description: "Menos residuos, más recursos, mejor futuro.",
//   },
// ];

// /* =========================================================
//    HERO
// ========================================================= */

// function ResiduosHero() {
//   const handleExplore = () => {
//     document
//       .getElementById("residuos-flow")
//       ?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <section
//       className="
//         relative
//         min-h-[900px]
//         overflow-hidden
//         bg-[#031d17]
//         text-white

//         lg:min-h-[920px]
//       ">
//       {/* =====================================================
//           FONDO
//       ===================================================== */}

//       <div className="absolute inset-0">
//         <img
//           src={residuosHeroImage}
//           alt="Planta de valorización de residuos"
//           className="
//             h-full
//             w-full
//             object-cover
//             object-[66%_center]

//             lg:object-center
//           "
//         />

//         {/* OSCURECER LADO IZQUIERDO */}

//         <div
//           className="
//             absolute
//             inset-0
//             bg-[linear-gradient(90deg,#021b15_0%,rgba(2,27,21,.98)_21%,rgba(2,27,21,.90)_36%,rgba(2,27,21,.58)_51%,rgba(2,27,21,.20)_70%,rgba(2,27,21,.03)_100%)]
//           "
//         />

//         {/* PROFUNDIDAD INFERIOR */}

//         <div
//           className="
//             absolute
//             inset-0
//             bg-[linear-gradient(180deg,rgba(2,25,20,.24)_0%,rgba(2,25,20,.03)_42%,rgba(2,25,20,.16)_62%,rgba(2,25,20,.78)_100%)]
//           "
//         />

//         {/* SOMBRA SUPERIOR */}

//         <div
//           className="
//             absolute
//             inset-x-0
//             top-0
//             h-[190px]
//             bg-gradient-to-b
//             from-[#021812]/60
//             to-transparent
//           "
//         />

//         {/* GLOW */}

//         <div
//           className="
//             absolute
//             -left-[180px]
//             top-[210px]
//             h-[500px]
//             w-[500px]
//             rounded-full
//             bg-[#c8ef00]/[0.045]
//             blur-[130px]
//           "
//         />
//       </div>

//       {/* =====================================================
//           CONTENEDOR
//       ===================================================== */}

//       <div
//         className="
//           relative
//           z-10
//           mx-auto
//           flex
//           min-h-[900px]
//           max-w-[1840px]
//           flex-col
//           px-5
//           pb-7
//           pt-[118px]

//           sm:px-8

//           lg:min-h-[920px]
//           lg:px-12
//           lg:pt-[130px]

//           xl:px-16
//           2xl:px-20
//         ">
//         {/* ===================================================
//             ÁREA PRINCIPAL
//         =================================================== */}

//         <div
//           className="
//             relative
//             flex
//             flex-1
//             items-center
//             pb-7

//             lg:pb-10
//           ">
//           {/* =================================================
//               TEXTO IZQUIERDO
//           ================================================= */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 28,
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//             }}
//             transition={{
//               duration: 0.85,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="
//               relative
//               z-20
//               w-full
//               max-w-[750px]

//               xl:max-w-[820px]
//             ">
//             {/* EYEBROW */}

//             <div className="flex items-center gap-4">
//               <span
//                 className="
//                   flex
//                   h-10
//                   w-10
//                   items-center
//                   justify-center
//                   rounded-full
//                   border
//                   border-[#c8ef00]/55
//                   text-[#c8ef00]
//                   backdrop-blur-md
//                 ">
//                 <Leaf size={17} strokeWidth={1.6} />
//               </span>

//               <div>
//                 <p
//                   className="
//                     text-[9px]
//                     font-bold
//                     uppercase
//                     tracking-[0.24em]
//                     text-[#c8ef00]

//                     sm:text-[10px]
//                   ">
//                   Valorización de residuos
//                 </p>

//                 <span
//                   className="
//                     mt-3
//                     block
//                     h-px
//                     w-10
//                     bg-[#c8ef00]
//                   "
//                 />
//               </div>
//             </div>

//             {/* TITULAR */}

//             <h1
//               className="
//                 mt-9
//                 max-w-[780px]
//                 text-[clamp(3.8rem,6vw,7.6rem)]
//                 font-semibold
//                 uppercase
//                 leading-[0.82]
//                 tracking-[-0.055em]
//                 text-white
//               ">
//               Lo que parece
//               <span className="block">el final</span>
//               <span
//                 className="
//                   mt-3
//                   block
//                   text-[#c8ef00]
//                 ">
//                 puede ser
//               </span>
//               <span className="block text-[#c8ef00]">el principio.</span>
//             </h1>

//             {/* DESCRIPCIÓN */}

//             <p
//               className="
//                 mt-7
//                 max-w-[610px]
//                 text-[14px]
//                 leading-7
//                 text-white/75

//                 sm:text-[15px]

//                 lg:text-[16px]
//                 lg:leading-8
//               ">
//               Convertimos residuos en recursos valiosos a través de tecnología,
//               ingeniería y{" "}
//               <span className="font-semibold text-[#c8ef00]">
//                 visión circular.
//               </span>
//             </p>

//             {/* CTA */}

//             <motion.button
//               type="button"
//               onClick={handleExplore}
//               whileHover={{
//                 y: -2,
//               }}
//               whileTap={{
//                 scale: 0.98,
//               }}
//               className="
//                 group
//                 mt-8
//                 inline-flex
//                 min-h-[60px]
//                 items-center
//                 gap-9
//                 rounded-[10px]
//                 bg-[#c8ef00]
//                 px-8
//                 text-[10px]
//                 font-bold
//                 uppercase
//                 tracking-[0.045em]
//                 text-[#082b22]
//                 shadow-[0_20px_50px_rgba(200,239,0,.16)]
//                 transition-colors
//                 duration-300

//                 hover:bg-white
//               ">
//               Explorar soluciones
//               <ArrowUpRight
//                 size={19}
//                 strokeWidth={1.7}
//                 className="
//                   transition-transform
//                   duration-300

//                   group-hover:-translate-y-0.5
//                   group-hover:translate-x-0.5
//                 "
//               />
//             </motion.button>
//           </motion.div>

//           {/* =================================================
//               PROCESO VISUAL DESKTOP

//               RESIDUO → TRANSFORMACIÓN → VALOR
//           ================================================= */}

//           <motion.div
//             initial={{
//               opacity: 0,
//             }}
//             animate={{
//               opacity: 1,
//             }}
//             transition={{
//               duration: 0.8,
//               delay: 0.35,
//             }}
//             className="
//               pointer-events-none
//               absolute
//               bottom-[38px]
//               left-[40%]
//               right-[1%]
//               hidden
//               h-[390px]

//               lg:block
//             ">
//             {/* ===============================================
//                 GRAN CURVA
//             =============================================== */}

//             <svg
//               viewBox="0 0 1100 400"
//               preserveAspectRatio="none"
//               className="
//                 absolute
//                 inset-0
//                 h-full
//                 w-full
//                 overflow-visible
//               ">
//               {/* SOMBRA */}

//               <path
//                 d="
//                   M 80 320
//                   C 260 350, 385 350, 510 324
//                   C 665 292, 700 220, 785 150
//                   C 875 76, 950 49, 1030 67
//                 "
//                 fill="none"
//                 stroke="rgba(0,0,0,.34)"
//                 strokeWidth="11"
//                 strokeLinecap="round"
//               />

//               {/* CURVA LIMA */}

//               <motion.path
//                 d="
//                   M 80 320
//                   C 260 350, 385 350, 510 324
//                   C 665 292, 700 220, 785 150
//                   C 875 76, 950 49, 1030 67
//                 "
//                 fill="none"
//                 stroke="#c8ef00"
//                 strokeWidth="6"
//                 strokeLinecap="round"
//                 initial={{
//                   pathLength: 0,
//                 }}
//                 animate={{
//                   pathLength: 1,
//                 }}
//                 transition={{
//                   duration: 1.7,
//                   delay: 0.55,
//                   ease: [0.22, 1, 0.36, 1],
//                 }}
//               />

//               {/* FLECHA */}

//               <motion.path
//                 d="
//                   M 983 29
//                   L 1042 68
//                   L 979 107
//                 "
//                 fill="none"
//                 stroke="#c8ef00"
//                 strokeWidth="9"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 initial={{
//                   opacity: 0,
//                 }}
//                 animate={{
//                   opacity: 1,
//                 }}
//                 transition={{
//                   duration: 0.35,
//                   delay: 1.85,
//                 }}
//               />
//             </svg>

//             {/* ===============================================
//                 01 · RESIDUO
//             =============================================== */}

//             <div
//               className="
//                 absolute
//                 bottom-[1px]
//                 left-[7%]
//                 -translate-x-1/2
//                 text-center
//               ">
//               {/* CÍRCULO GRANDE */}

//               <motion.div
//                 initial={{
//                   opacity: 0,
//                   scale: 0.65,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   scale: 1,
//                 }}
//                 transition={{
//                   duration: 0.55,
//                   delay: 0.6,
//                 }}
//                 className="
//                   relative
//                   mx-auto
//                   flex
//                   h-[88px]
//                   w-[88px]
//                   items-center
//                   justify-center
//                   rounded-full
//                   border-[2px]
//                   border-[#c8ef00]
//                   bg-white
//                   text-[#75a300]
//                   shadow-[0_15px_40px_rgba(0,0,0,.22)]
//                 ">
//                 <Trash2 size={38} strokeWidth={1.6} />

//                 <span
//                   className="
//                     absolute
//                     -inset-[8px]
//                     rounded-full
//                     border
//                     border-[#c8ef00]/20
//                   "
//                 />
//               </motion.div>

//               <p
//                 className="
//                   mt-4
//                   text-[15px]
//                   font-bold
//                   uppercase
//                   tracking-[0.02em]
//                   text-white
//                   [text-shadow:0_2px_10px_rgba(0,0,0,.75)]
//                 ">
//                 Residuo
//               </p>

//               <span
//                 className="
//                   mx-auto
//                   mt-3
//                   block
//                   h-[3px]
//                   w-10
//                   bg-[#c8ef00]
//                 "
//               />
//             </div>

//             {/* ===============================================
//                 02 · TRANSFORMACIÓN
//             =============================================== */}

//             <div
//               className="
//                 absolute
//                 bottom-[-6px]
//                 left-[47%]
//                 -translate-x-1/2
//                 text-center
//               ">
//               <motion.div
//                 initial={{
//                   opacity: 0,
//                   scale: 0.65,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   scale: 1,
//                 }}
//                 transition={{
//                   duration: 0.55,
//                   delay: 0.78,
//                 }}
//                 className="
//                   relative
//                   mx-auto
//                   flex
//                   h-[96px]
//                   w-[96px]
//                   items-center
//                   justify-center
//                   rounded-full
//                   border-[2px]
//                   border-[#c8ef00]
//                   bg-white
//                   text-[#75a300]
//                   shadow-[0_15px_40px_rgba(0,0,0,.23)]
//                 ">
//                 <RefreshCw size={42} strokeWidth={1.65} />

//                 <span
//                   className="
//                     absolute
//                     -inset-[8px]
//                     rounded-full
//                     border
//                     border-[#c8ef00]/20
//                   "
//                 />
//               </motion.div>

//               <p
//                 className="
//                   mt-4
//                   whitespace-nowrap
//                   text-[15px]
//                   font-bold
//                   uppercase
//                   tracking-[0.02em]
//                   text-white
//                   [text-shadow:0_2px_10px_rgba(0,0,0,.75)]
//                 ">
//                 Transformación
//               </p>

//               <span
//                 className="
//                   mx-auto
//                   mt-3
//                   block
//                   h-[3px]
//                   w-10
//                   bg-[#c8ef00]
//                 "
//               />
//             </div>

//             {/* ===============================================
//                 03 · VALOR
//             =============================================== */}

//             <div
//               className="
//                 absolute
//                 right-[12%]
//                 top-[45px]
//                 text-center
//               ">
//               <motion.div
//                 initial={{
//                   opacity: 0,
//                   scale: 0.65,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   scale: 1,
//                 }}
//                 transition={{
//                   duration: 0.55,
//                   delay: 0.96,
//                 }}
//                 className="
//                   relative
//                   mx-auto
//                   flex
//                   h-[92px]
//                   w-[92px]
//                   items-center
//                   justify-center
//                   rounded-full
//                   border-[2px]
//                   border-[#c8ef00]
//                   bg-white
//                   text-[#75a300]
//                   shadow-[0_15px_40px_rgba(0,0,0,.23)]
//                 ">
//                 <Leaf size={40} strokeWidth={1.6} />

//                 <span
//                   className="
//                     absolute
//                     -inset-[8px]
//                     rounded-full
//                     border
//                     border-[#c8ef00]/20
//                   "
//                 />
//               </motion.div>

//               <p
//                 className="
//                   mt-4
//                   text-[15px]
//                   font-bold
//                   uppercase
//                   tracking-[0.02em]
//                   text-white
//                   [text-shadow:0_2px_10px_rgba(0,0,0,.75)]
//                 ">
//                 Valor
//               </p>

//               <span
//                 className="
//                   mx-auto
//                   mt-3
//                   block
//                   h-[3px]
//                   w-10
//                   bg-[#c8ef00]
//                 "
//               />
//             </div>
//           </motion.div>
//         </div>

//         {/* ===================================================
//             PROCESO EN MÓVIL
//         =================================================== */}

//         <div
//           className="
//             mb-5
//             grid
//             grid-cols-3
//             gap-2

//             lg:hidden
//           ">
//           {[
//             {
//               icon: Trash2,
//               title: "Residuo",
//             },
//             {
//               icon: RefreshCw,
//               title: "Transformación",
//             },
//             {
//               icon: Leaf,
//               title: "Valor",
//             },
//           ].map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <div
//                 key={item.title}
//                 className="
//                   relative
//                   flex
//                   flex-col
//                   items-center
//                   text-center
//                 ">
//                 <span
//                   className="
//                     flex
//                     h-14
//                     w-14
//                     items-center
//                     justify-center
//                     rounded-full
//                     border
//                     border-[#c8ef00]
//                     bg-white
//                     text-[#75a300]
//                     shadow-[0_8px_25px_rgba(0,0,0,.18)]
//                   ">
//                   <Icon size={23} strokeWidth={1.6} />
//                 </span>

//                 <p
//                   className="
//                     mt-3
//                     text-[7px]
//                     font-bold
//                     uppercase
//                     tracking-[0.05em]
//                     text-white
//                   ">
//                   {item.title}
//                 </p>

//                 <span
//                   className="
//                     mt-2
//                     h-[2px]
//                     w-7
//                     bg-[#c8ef00]
//                   "
//                 />

//                 {index < 2 && (
//                   <span
//                     className="
//                       absolute
//                       right-[-8px]
//                       top-[20px]
//                       text-[17px]
//                       text-[#c8ef00]
//                     ">
//                     →
//                   </span>
//                 )}
//               </div>
//             );
//           })}
//         </div>

//         {/* ===================================================
//             BARRA INFERIOR
//         =================================================== */}

//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 20,
//           }}
//           animate={{
//             opacity: 1,
//             y: 0,
//           }}
//           transition={{
//             duration: 0.8,
//             delay: 0.28,
//           }}
//           className="
//             relative
//             z-30
//             grid
//             overflow-hidden
//             rounded-[17px]
//             border
//             border-white/[0.11]
//             bg-[#05261e]/92
//             shadow-[0_24px_65px_rgba(0,0,0,.24)]
//             backdrop-blur-xl

//             sm:grid-cols-2
//             xl:grid-cols-4
//           ">
//           {benefits.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <div
//                 key={item.title}
//                 className={`
//                   group
//                   relative
//                   flex
//                   min-h-[145px]
//                   items-center
//                   gap-5
//                   px-6
//                   py-5
//                   transition-all
//                   duration-300

//                   hover:bg-white/[0.04]

//                   ${
//                     index > 0
//                       ? `
//                         border-t
//                         border-white/[0.08]

//                         sm:[&:nth-child(even)]:border-l

//                         xl:border-l
//                         xl:border-t-0
//                       `
//                       : ""
//                   }
//                 `}>
//                 {/* ICONO */}

//                 <span
//                   className="
//                     flex
//                     h-[72px]
//                     w-[72px]
//                     shrink-0
//                     items-center
//                     justify-center
//                     rounded-full
//                     border-[2px]
//                     border-[#c8ef00]/75
//                     text-[#c8ef00]
//                     transition-all
//                     duration-300

//                     group-hover:scale-105
//                     group-hover:bg-[#c8ef00]
//                     group-hover:text-[#082b22]
//                   ">
//                   <Icon size={30} strokeWidth={1.5} />
//                 </span>

//                 {/* TEXTO */}

//                 <div>
//                   <p
//                     className="
//                       text-[10px]
//                       font-bold
//                       uppercase
//                       tracking-[0.035em]
//                       text-white

//                       lg:text-[11px]
//                     ">
//                     {item.title}
//                   </p>

//                   <p
//                     className="
//                       mt-2
//                       max-w-[240px]
//                       text-[9px]
//                       leading-5
//                       text-white/54
//                     ">
//                     {item.description}
//                   </p>
//                 </div>

//                 {/* HOVER LINE */}

//                 <span
//                   className="
//                     absolute
//                     bottom-0
//                     left-0
//                     h-[2px]
//                     w-0
//                     bg-[#c8ef00]
//                     transition-all
//                     duration-500

//                     group-hover:w-full
//                   "
//                 />
//               </div>
//             );
//           })}
//         </motion.div>
//       </div>

//       {/* =====================================================
//           LÍNEA INFERIOR
//       ===================================================== */}

//       <div
//         className="
//           pointer-events-none
//           absolute
//           bottom-0
//           left-0
//           right-0
//           h-px
//           bg-gradient-to-r
//           from-transparent
//           via-[#c8ef00]/55
//           to-transparent
//         "
//       />
//     </section>
//   );
// }

// export default ResiduosHero;

import { motion } from "motion/react";
import {
  ArrowUpRight,
  Cog,
  Leaf,
  Lightbulb,
  Recycle,
  RefreshCw,
  Trash2,
  TrendingUp,
} from "lucide-react";

import residuosHeroImage from "../../assets/images/residuos/residuos-hero.jpg";

/* =========================================================
   BENEFICIOS
========================================================= */

const benefits = [
  {
    icon: Leaf,
    title: "Economía circular",
    description:
      "Recuperamos valor antes de enviar recursos a disposición final.",
  },
  {
    icon: Cog,
    title: "Tecnología avanzada",
    description:
      "Integramos tecnología e ingeniería según cada corriente de residuos.",
  },
  {
    icon: Lightbulb,
    title: "Energía limpia",
    description:
      "Aprovechamos materiales, biogás y energía cuando la corriente lo permite.",
  },
  {
    icon: TrendingUp,
    title: "Impacto positivo",
    description:
      "Reducimos descarte y reincorporamos recursos a nuevos ciclos de uso.",
  },
];

/* =========================================================
   HERO
========================================================= */

function ResiduosHero() {
  const handleExplore = () => {
    document
      .getElementById("residuos-flow")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="
        relative
        min-h-[900px]
        overflow-hidden
        bg-[#031d17]
        text-white

        lg:min-h-[920px]
      ">
      {/* =====================================================
          FONDO
      ===================================================== */}

      <div className="absolute inset-0">
        <img
          src={residuosHeroImage}
          alt="Planta de valorización de residuos"
          className="
            h-full
            w-full
            object-cover
            object-[66%_center]

            lg:object-center
          "
        />

        {/* OSCURECER LADO IZQUIERDO */}

        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(90deg,#021b15_0%,rgba(2,27,21,.98)_21%,rgba(2,27,21,.90)_36%,rgba(2,27,21,.58)_51%,rgba(2,27,21,.20)_70%,rgba(2,27,21,.03)_100%)]
          "
        />

        {/* PROFUNDIDAD INFERIOR */}

        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(180deg,rgba(2,25,20,.24)_0%,rgba(2,25,20,.03)_42%,rgba(2,25,20,.16)_62%,rgba(2,25,20,.78)_100%)]
          "
        />

        {/* SOMBRA SUPERIOR */}

        <div
          className="
            absolute
            inset-x-0
            top-0
            h-[190px]
            bg-gradient-to-b
            from-[#021812]/60
            to-transparent
          "
        />

        {/* GLOW */}

        <div
          className="
            absolute
            -left-[180px]
            top-[210px]
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#c8ef00]/[0.045]
            blur-[130px]
          "
        />
      </div>

      {/* =====================================================
          CONTENEDOR
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[900px]
          max-w-[1840px]
          flex-col
          px-5
          pb-7
          pt-[118px]

          sm:px-8

          lg:min-h-[920px]
          lg:px-12
          lg:pt-[130px]

          xl:px-16
          2xl:px-20
        ">
        {/* ===================================================
            ÁREA PRINCIPAL
        =================================================== */}

        <div
          className="
            relative
            flex
            flex-1
            items-center
            pb-7

            lg:pb-10
          ">
          {/* =================================================
              TEXTO IZQUIERDO
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 28,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              z-20
              w-full
              max-w-[750px]

              xl:max-w-[820px]
            ">
            {/* EYEBROW */}

            <div className="flex items-center gap-4">
              <span
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#c8ef00]/55
                  text-[#c8ef00]
                  backdrop-blur-md
                ">
                <Leaf size={17} strokeWidth={1.6} />
              </span>

              <div>
                <p
                  className="
                    text-[12px]
                    font-bold
                    uppercase
                    tracking-[0.24em]
                    text-[#c8ef00]

                    sm:text-[13px]
                  ">
                  Valorización de residuos
                </p>

                <span
                  className="
                    mt-3
                    block
                    h-px
                    w-10
                    bg-[#c8ef00]
                  "
                />
              </div>
            </div>

            {/* TITULAR */}

            <h1
              className="
                mt-9
                max-w-[780px]
                text-[clamp(3.8rem,6vw,7.6rem)]
                font-semibold
                uppercase
                leading-[0.82]
                tracking-[-0.055em]
                text-white
              ">
              Lo que parece
              <span className="block">el final</span>
              <span
                className="
                  mt-3
                  block
                  text-[#c8ef00]
                ">
                puede ser
              </span>
              <span className="block text-[#c8ef00]">el principio.</span>
            </h1>

            {/* DESCRIPCIÓN */}

            <p
              className="
                mt-7
                max-w-[610px]
                text-[14px]
                leading-7
                text-white/75

                sm:text-[15px]

                lg:text-[16px]
                lg:leading-8
              ">
              Diseñamos soluciones para valorizar residuos sólidos urbanos,
              agroindustriales y de manejo especial a través de tecnología,
              ingeniería y{" "}
              <span className="font-semibold text-[#c8ef00]">
                visión circular.
              </span>
            </p>

            {/* CTA */}

            <motion.button
              type="button"
              onClick={handleExplore}
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="
                group
                mt-8
                inline-flex
                min-h-[60px]
                items-center
                gap-9
                rounded-[10px]
                bg-[#c8ef00]
                px-8
                text-[13px]
                font-bold
                uppercase
                tracking-[0.045em]
                text-[#082b22]
                shadow-[0_20px_50px_rgba(200,239,0,.16)]
                transition-colors
                duration-300

                hover:bg-white
              ">
              Explorar soluciones
              <ArrowUpRight
                size={19}
                strokeWidth={1.7}
                className="
                  transition-transform
                  duration-300

                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </motion.button>
          </motion.div>

          {/* =================================================
              PROCESO VISUAL DESKTOP

              RESIDUO → TRANSFORMACIÓN → VALOR
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.35,
            }}
            className="
              pointer-events-none
              absolute
              bottom-[38px]
              left-[40%]
              right-[1%]
              hidden
              h-[390px]

              lg:block
            ">
            {/* ===============================================
                GRAN CURVA
            =============================================== */}

            <svg
              viewBox="0 0 1100 400"
              preserveAspectRatio="none"
              className="
                absolute
                inset-0
                h-full
                w-full
                overflow-visible
              ">
              {/* SOMBRA */}

              <path
                d="
                  M 80 320
                  C 260 350, 385 350, 510 324
                  C 665 292, 700 220, 785 150
                  C 875 76, 950 49, 1030 67
                "
                fill="none"
                stroke="rgba(0,0,0,.34)"
                strokeWidth="11"
                strokeLinecap="round"
              />

              {/* CURVA LIMA */}

              <motion.path
                d="
                  M 80 320
                  C 260 350, 385 350, 510 324
                  C 665 292, 700 220, 785 150
                  C 875 76, 950 49, 1030 67
                "
                fill="none"
                stroke="#c8ef00"
                strokeWidth="6"
                strokeLinecap="round"
                initial={{
                  pathLength: 0,
                }}
                animate={{
                  pathLength: 1,
                }}
                transition={{
                  duration: 1.7,
                  delay: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />

              {/* FLECHA */}

              <motion.path
                d="
                  M 983 29
                  L 1042 68
                  L 979 107
                "
                fill="none"
                stroke="#c8ef00"
                strokeWidth="9"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  duration: 0.35,
                  delay: 1.85,
                }}
              />
            </svg>

            {/* ===============================================
                01 · RESIDUO
            =============================================== */}

            <div
              className="
                absolute
                bottom-[1px]
                left-[7%]
                -translate-x-1/2
                text-center
              ">
              {/* CÍRCULO GRANDE */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.65,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.55,
                  delay: 0.6,
                }}
                className="
                  relative
                  mx-auto
                  flex
                  h-[88px]
                  w-[88px]
                  items-center
                  justify-center
                  rounded-full
                  border-[2px]
                  border-[#c8ef00]
                  bg-white
                  text-[#75a300]
                  shadow-[0_15px_40px_rgba(0,0,0,.22)]
                ">
                <Trash2 size={38} strokeWidth={1.6} />

                <span
                  className="
                    absolute
                    -inset-[8px]
                    rounded-full
                    border
                    border-[#c8ef00]/20
                  "
                />
              </motion.div>

              <p
                className="
                  mt-4
                  text-[15px]
                  font-bold
                  uppercase
                  tracking-[0.02em]
                  text-white
                  [text-shadow:0_2px_10px_rgba(0,0,0,.75)]
                ">
                Residuo
              </p>

              <span
                className="
                  mx-auto
                  mt-3
                  block
                  h-[3px]
                  w-10
                  bg-[#c8ef00]
                "
              />
            </div>

            {/* ===============================================
                02 · TRANSFORMACIÓN
            =============================================== */}

            <div
              className="
                absolute
                bottom-[-6px]
                left-[47%]
                -translate-x-1/2
                text-center
              ">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.65,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.55,
                  delay: 0.78,
                }}
                className="
                  relative
                  mx-auto
                  flex
                  h-[96px]
                  w-[96px]
                  items-center
                  justify-center
                  rounded-full
                  border-[2px]
                  border-[#c8ef00]
                  bg-white
                  text-[#75a300]
                  shadow-[0_15px_40px_rgba(0,0,0,.23)]
                ">
                <RefreshCw size={42} strokeWidth={1.65} />

                <span
                  className="
                    absolute
                    -inset-[8px]
                    rounded-full
                    border
                    border-[#c8ef00]/20
                  "
                />
              </motion.div>

              <p
                className="
                  mt-4
                  whitespace-nowrap
                  text-[15px]
                  font-bold
                  uppercase
                  tracking-[0.02em]
                  text-white
                  [text-shadow:0_2px_10px_rgba(0,0,0,.75)]
                ">
                Transformación
              </p>

              <span
                className="
                  mx-auto
                  mt-3
                  block
                  h-[3px]
                  w-10
                  bg-[#c8ef00]
                "
              />
            </div>

            {/* ===============================================
                03 · VALOR
            =============================================== */}

            <div
              className="
                absolute
                right-[12%]
                top-[45px]
                text-center
              ">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.65,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.55,
                  delay: 0.96,
                }}
                className="
                  relative
                  mx-auto
                  flex
                  h-[92px]
                  w-[92px]
                  items-center
                  justify-center
                  rounded-full
                  border-[2px]
                  border-[#c8ef00]
                  bg-white
                  text-[#75a300]
                  shadow-[0_15px_40px_rgba(0,0,0,.23)]
                ">
                <Leaf size={40} strokeWidth={1.6} />

                <span
                  className="
                    absolute
                    -inset-[8px]
                    rounded-full
                    border
                    border-[#c8ef00]/20
                  "
                />
              </motion.div>

              <p
                className="
                  mt-4
                  text-[15px]
                  font-bold
                  uppercase
                  tracking-[0.02em]
                  text-white
                  [text-shadow:0_2px_10px_rgba(0,0,0,.75)]
                ">
                Valor
              </p>

              <span
                className="
                  mx-auto
                  mt-3
                  block
                  h-[3px]
                  w-10
                  bg-[#c8ef00]
                "
              />
            </div>
          </motion.div>
        </div>

        {/* ===================================================
            PROCESO EN MÓVIL
        =================================================== */}

        <div
          className="
            mb-5
            grid
            grid-cols-3
            gap-2

            lg:hidden
          ">
          {[
            {
              icon: Trash2,
              title: "Residuo",
            },
            {
              icon: RefreshCw,
              title: "Transformación",
            },
            {
              icon: Leaf,
              title: "Valor",
            },
          ].map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  relative
                  flex
                  flex-col
                  items-center
                  text-center
                ">
                <span
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#c8ef00]
                    bg-white
                    text-[#75a300]
                    shadow-[0_8px_25px_rgba(0,0,0,.18)]
                  ">
                  <Icon size={23} strokeWidth={1.6} />
                </span>

                <p
                  className="
                    mt-3
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.05em]
                    text-white
                  ">
                  {item.title}
                </p>

                <span
                  className="
                    mt-2
                    h-[2px]
                    w-7
                    bg-[#c8ef00]
                  "
                />

                {index < 2 && (
                  <span
                    className="
                      absolute
                      right-[-8px]
                      top-[20px]
                      text-[17px]
                      text-[#c8ef00]
                    ">
                    →
                  </span>
                )}
              </div>
            );
          })}
        </div>

        {/* ===================================================
            BARRA INFERIOR
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.28,
          }}
          className="
            relative
            z-30
            grid
            overflow-hidden
            rounded-[17px]
            border
            border-white/[0.11]
            bg-[#05261e]/92
            shadow-[0_24px_65px_rgba(0,0,0,.24)]
            backdrop-blur-xl

            sm:grid-cols-2
            xl:grid-cols-4
          ">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className={`
                  group
                  relative
                  flex
                  min-h-[145px]
                  items-center
                  gap-5
                  px-6
                  py-5
                  transition-all
                  duration-300

                  hover:bg-white/[0.04]

                  ${
                    index > 0
                      ? `
                        border-t
                        border-white/[0.08]

                        sm:[&:nth-child(even)]:border-l

                        xl:border-l
                        xl:border-t-0
                      `
                      : ""
                  }
                `}>
                {/* ICONO */}

                <span
                  className="
                    flex
                    h-[72px]
                    w-[72px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border-[2px]
                    border-[#c8ef00]/75
                    text-[#c8ef00]
                    transition-all
                    duration-300

                    group-hover:scale-105
                    group-hover:bg-[#c8ef00]
                    group-hover:text-[#082b22]
                  ">
                  <Icon size={30} strokeWidth={1.5} />
                </span>

                {/* TEXTO */}

                <div>
                  <p
                    className="
                      text-[13px]
                      font-bold
                      uppercase
                      tracking-[0.035em]
                      text-white

                      lg:text-[11px]
                    ">
                    {item.title}
                  </p>

                  <p
                    className="
                      mt-2
                      max-w-[240px]
                      text-[13px]
                      leading-5
                      text-white/54
                    ">
                    {item.description}
                  </p>
                </div>

                {/* HOVER LINE */}

                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-[2px]
                    w-0
                    bg-[#c8ef00]
                    transition-all
                    duration-500

                    group-hover:w-full
                  "
                />
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* =====================================================
          LÍNEA INFERIOR
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          right-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-[#c8ef00]/55
          to-transparent
        "
      />
    </section>
  );
}

export default ResiduosHero;
