// import { motion } from "motion/react";
// import {
//   ArrowUpRight,
//   BatteryCharging,
//   Clock3,
//   Gauge,
//   Route,
//   ShieldCheck,
//   Sparkles,
//   Zap,
// } from "lucide-react";

// const benefits = [
//   {
//     number: "01",
//     icon: Clock3,
//     eyebrow: "Tiempo",
//     title: "Menos tiempo detenido.",
//     description:
//       "La potencia y la estrategia de carga se definen alrededor del tiempo real disponible para cargar cada vehículo.",
//     metric: "FAST",
//     metricLabel: "Charging strategy",
//   },
//   {
//     number: "02",
//     icon: Gauge,
//     eyebrow: "Demanda",
//     title: "Más control sobre la potencia.",
//     description:
//       "La gestión energética permite coordinar múltiples cargadores sin tratar cada punto de carga como una instalación aislada.",
//     metric: "EMS",
//     metricLabel: "Energy control",
//   },
//   {
//     number: "03",
//     icon: BatteryCharging,
//     eyebrow: "Flexibilidad",
//     title: "Más capacidad para crecer.",
//     description:
//       "Una arquitectura preparada desde el inicio puede incorporar almacenamiento, nuevos cargadores y mayor demanda conforme evoluciona la operación.",
//     metric: "BESS",
//     metricLabel: "Flexible capacity",
//   },
//   {
//     number: "04",
//     icon: ShieldCheck,
//     eyebrow: "Continuidad",
//     title: "Infraestructura lista para operar.",
//     description:
//       "Diseñamos la solución pensando en disponibilidad, confiabilidad y comportamiento energético durante la operación diaria.",
//     metric: "24/7",
//     metricLabel: "Operational readiness",
//   },
// ];

// function MovilidadPerformanceSection() {
//   return (
//     <section
//       id="movilidad-performance"
//       className="
//         relative
//         overflow-hidden
//         bg-white
//         py-20
//         text-[#143E33]

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
//           opacity-[0.22]
//           [background-image:linear-gradient(rgba(20,62,51,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(20,62,51,.025)_1px,transparent_1px)]
//           [background-size:72px_72px]
//         "
//       />

//       <div
//         className="
//           pointer-events-none
//           absolute
//           -right-[180px]
//           -top-[190px]
//           h-[500px]
//           w-[500px]
//           rounded-full
//           bg-[#9DD827]/10
//           blur-[110px]
//         "
//       />

//       <span
//         className="
//           pointer-events-none
//           absolute
//           -right-6
//           bottom-[-30px]
//           hidden
//           select-none
//           text-[clamp(9rem,17vw,19rem)]
//           font-semibold
//           leading-none
//           tracking-[-0.09em]
//           text-[#143E33]/[0.018]

//           xl:block
//         ">
//         VALUE
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
//             INTRO
//         =================================================== */}

//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 20,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//             amount: 0.3,
//           }}
//           transition={{
//             duration: 0.7,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="
//             mb-12
//             flex
//             flex-col
//             gap-6

//             lg:flex-row
//             lg:items-end
//             lg:justify-between
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
//                 Valor operativo
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
//               No se trata solamente
//               <span className="block">de cargar vehículos.</span>
//               <span className="block text-[#83B500]">
//                 Se trata de mantenerlos en movimiento.
//               </span>
//             </h2>
//           </div>

//           <p
//             className="
//               max-w-[420px]
//               text-[12px]
//               leading-7
//               text-[#143E33]/45

//               lg:pb-2
//             ">
//             Una buena infraestructura debe equilibrar tiempo, potencia,
//             disponibilidad y capacidad de crecimiento sin perder de vista la
//             operación.
//           </p>
//         </motion.div>

//         {/* ===================================================
//             MAIN STAGE
//         =================================================== */}

//         <div
//           className="
//             grid
//             overflow-hidden
//             rounded-[24px]
//             border
//             border-[#143E33]/[0.07]
//             bg-white
//             shadow-[0_28px_80px_rgba(20,62,51,.07)]

//             lg:grid-cols-[.82fr_1.18fr]
//           ">
//           {/* =================================================
//               LEFT STATEMENT
//           ================================================= */}

//           <motion.div
//             initial={{
//               opacity: 0,
//               x: -25,
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
//               duration: 0.8,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="
//               relative
//               min-h-[560px]
//               overflow-hidden
//               bg-[#10372E]
//               p-7
//               text-white

//               sm:p-9
//               lg:min-h-[680px]
//               lg:p-10
//               xl:p-12
//             ">
//             {/* GRID */}

//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 inset-0
//                 opacity-[0.13]
//                 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)]
//                 [background-size:44px_44px]
//               "
//             />

//             {/* GLOW */}

//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 -right-[120px]
//                 -top-[120px]
//                 h-[390px]
//                 w-[390px]
//                 rounded-full
//                 bg-[#B8F23A]/15
//                 blur-[95px]
//               "
//             />

//             {/* ORBITS */}

//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 -bottom-[180px]
//                 -right-[160px]
//                 h-[470px]
//                 w-[470px]
//                 rounded-full
//                 border
//                 border-[#B8F23A]/10
//               ">
//               <div
//                 className="
//                   absolute
//                   inset-[14%]
//                   rounded-full
//                   border
//                   border-white/[0.05]
//                 "
//               />

//               <div
//                 className="
//                   absolute
//                   inset-[30%]
//                   rounded-full
//                   border
//                   border-[#B8F23A]/10
//                 "
//               />
//             </div>

//             <div
//               className="
//                 relative
//                 z-10
//                 flex
//                 h-full
//                 flex-col
//               ">
//               {/* TOP */}

//               <div
//                 className="
//                   flex
//                   items-center
//                   justify-between
//                   gap-5
//                 ">
//                 <div className="flex items-center gap-4">
//                   <span
//                     className="
//                       flex
//                       h-11
//                       w-11
//                       items-center
//                       justify-center
//                       rounded-[11px]
//                       bg-[#B8F23A]
//                       text-[#10372E]
//                     ">
//                     <Route size={18} strokeWidth={1.6} />
//                   </span>

//                   <div>
//                     <p
//                       className="
//                         text-[7px]
//                         font-bold
//                         uppercase
//                         tracking-[0.19em]
//                         text-[#B8F23A]
//                       ">
//                       Mobility performance
//                     </p>

//                     <p
//                       className="
//                         mt-1
//                         text-[6px]
//                         uppercase
//                         tracking-[0.13em]
//                         text-white/25
//                       ">
//                       Energy behind movement
//                     </p>
//                   </div>
//                 </div>

//                 <span className="relative flex h-2.5 w-2.5">
//                   <span
//                     className="
//                       absolute
//                       inset-0
//                       animate-ping
//                       rounded-full
//                       bg-[#B8F23A]/40
//                     "
//                   />

//                   <span
//                     className="
//                       relative
//                       h-2.5
//                       w-2.5
//                       rounded-full
//                       bg-[#B8F23A]
//                     "
//                   />
//                 </span>
//               </div>

//               {/* MAIN MESSAGE */}

//               <div
//                 className="
//                   my-auto
//                   py-12
//                 ">
//                 <p
//                   className="
//                     text-[7px]
//                     font-bold
//                     uppercase
//                     tracking-[0.18em]
//                     text-white/28
//                   ">
//                   La verdadera métrica
//                 </p>

//                 <h3
//                   className="
//                     mt-4
//                     max-w-[620px]
//                     text-[clamp(2.6rem,4vw,5rem)]
//                     font-normal
//                     leading-[0.91]
//                     tracking-[-0.06em]
//                   ">
//                   El cargador puede
//                   <span className="block">estar disponible.</span>
//                   <span className="block text-[#B8F23A]">
//                     El vehículo también debe estarlo.
//                   </span>
//                 </h3>

//                 <p
//                   className="
//                     mt-7
//                     max-w-[540px]
//                     text-[11px]
//                     leading-6
//                     text-white/43
//                   ">
//                   Diseñamos la estrategia de carga alrededor de las horas en que
//                   el vehículo debe volver a estar disponible para la operación.
//                 </p>
//               </div>

//               {/* MINI SIGNAL */}

//               <div
//                 className="
//                   grid
//                   grid-cols-3
//                   gap-2
//                   border-t
//                   border-white/[0.08]
//                   pt-6
//                 ">
//                 {[
//                   ["01", "Vehicle"],
//                   ["02", "Energy"],
//                   ["03", "Operation"],
//                 ].map(([number, label]) => (
//                   <div
//                     key={number}
//                     className="
//                       rounded-[10px]
//                       border
//                       border-white/[0.06]
//                       bg-white/[0.03]
//                       p-3
//                     ">
//                     <span
//                       className="
//                         text-[7px]
//                         font-bold
//                         tracking-[0.14em]
//                         text-[#B8F23A]
//                       ">
//                       {number}
//                     </span>

//                     <p
//                       className="
//                         mt-2
//                         text-[6px]
//                         font-semibold
//                         uppercase
//                         tracking-[0.12em]
//                         text-white/30
//                       ">
//                       {label}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>

//           {/* =================================================
//               RIGHT BENEFIT RAIL
//           ================================================= */}

//           <div
//             className="
//               relative
//               bg-[#F8FAF5]
//             ">
//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 inset-0
//                 opacity-[0.25]
//                 [background-image:linear-gradient(rgba(20,62,51,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(20,62,51,.025)_1px,transparent_1px)]
//                 [background-size:38px_38px]
//               "
//             />

//             <div className="relative z-10">
//               {benefits.map((benefit, index) => {
//                 const Icon = benefit.icon;

//                 return (
//                   <motion.article
//                     key={benefit.number}
//                     initial={{
//                       opacity: 0,
//                       x: 22,
//                     }}
//                     whileInView={{
//                       opacity: 1,
//                       x: 0,
//                     }}
//                     viewport={{
//                       once: true,
//                       amount: 0.3,
//                     }}
//                     transition={{
//                       duration: 0.6,
//                       delay: index * 0.07,
//                       ease: [0.22, 1, 0.36, 1],
//                     }}
//                     className={`
//                       group
//                       relative
//                       grid
//                       min-h-[170px]
//                       gap-5
//                       overflow-hidden
//                       px-6
//                       py-7
//                       transition-all
//                       duration-400

//                       hover:bg-white

//                       sm:grid-cols-[58px_1fr_auto]
//                       sm:items-center

//                       lg:px-8
//                       xl:px-10

//                       ${index > 0 ? "border-t border-[#143E33]/[0.07]" : ""}
//                     `}>
//                     {/* BIG NUMBER */}

//                     <span
//                       className="
//                         pointer-events-none
//                         absolute
//                         -right-2
//                         -top-6
//                         text-[100px]
//                         font-light
//                         leading-none
//                         tracking-[-0.09em]
//                         text-[#7FAE00]/[0.04]
//                         transition-colors
//                         duration-400

//                         group-hover:text-[#7FAE00]/[0.075]
//                       ">
//                       {benefit.number}
//                     </span>

//                     {/* ICON */}

//                     <span
//                       className="
//                         relative
//                         z-10
//                         flex
//                         h-12
//                         w-12
//                         items-center
//                         justify-center
//                         rounded-[12px]
//                         bg-[#EAF3DC]
//                         text-[#78A500]
//                         transition-all
//                         duration-300

//                         group-hover:bg-[#B8F23A]
//                         group-hover:text-[#10372E]
//                       ">
//                       <Icon size={18} strokeWidth={1.6} />
//                     </span>

//                     {/* CONTENT */}

//                     <div className="relative z-10">
//                       <div className="flex items-center gap-3">
//                         <span
//                           className="
//                             text-[6px]
//                             font-bold
//                             tracking-[0.14em]
//                             text-[#78A500]
//                           ">
//                           {benefit.number}
//                         </span>

//                         <span className="h-px w-6 bg-[#9DD827]" />

//                         <span
//                           className="
//                             text-[6px]
//                             font-bold
//                             uppercase
//                             tracking-[0.15em]
//                             text-[#78A500]
//                           ">
//                           {benefit.eyebrow}
//                         </span>
//                       </div>

//                       <h3
//                         className="
//                           mt-3
//                           text-[clamp(1.4rem,2vw,2.1rem)]
//                           font-medium
//                           leading-[1]
//                           tracking-[-0.04em]
//                         ">
//                         {benefit.title}
//                       </h3>

//                       <p
//                         className="
//                           mt-3
//                           max-w-[600px]
//                           text-[9px]
//                           leading-5
//                           text-[#143E33]/42
//                         ">
//                         {benefit.description}
//                       </p>
//                     </div>

//                     {/* METRIC */}

//                     <div
//                       className="
//                         relative
//                         z-10
//                         flex
//                         items-center
//                         gap-4

//                         sm:flex-col
//                         sm:items-end
//                       ">
//                       <p
//                         className="
//                           text-[19px]
//                           font-light
//                           tracking-[-0.04em]
//                           text-[#78A500]
//                         ">
//                         {benefit.metric}
//                       </p>

//                       <p
//                         className="
//                           text-[6px]
//                           font-bold
//                           uppercase
//                           tracking-[0.12em]
//                           text-[#143E33]/25

//                           sm:text-right
//                         ">
//                         {benefit.metricLabel}
//                       </p>

//                       <span
//                         className="
//                           hidden
//                           h-8
//                           w-8
//                           items-center
//                           justify-center
//                           rounded-full
//                           border
//                           border-[#143E33]/10
//                           text-[#78A500]
//                           transition-all
//                           duration-300

//                           group-hover:border-[#B8F23A]
//                           group-hover:bg-[#B8F23A]
//                           group-hover:text-[#10372E]

//                           sm:flex
//                         ">
//                         <ArrowUpRight size={12} strokeWidth={1.5} />
//                       </span>
//                     </div>

//                     {/* HOVER LINE */}

//                     <span
//                       className="
//                         absolute
//                         bottom-0
//                         left-0
//                         h-[2px]
//                         w-0
//                         bg-[#9DD827]
//                         transition-all
//                         duration-500

//                         group-hover:w-full
//                       "
//                     />
//                   </motion.article>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* ===================================================
//             BOTTOM STATEMENT
//         =================================================== */}

//         <motion.div
//           initial={{
//             opacity: 0,
//             y: 15,
//           }}
//           whileInView={{
//             opacity: 1,
//             y: 0,
//           }}
//           viewport={{
//             once: true,
//             amount: 0.3,
//           }}
//           transition={{
//             duration: 0.65,
//             delay: 0.1,
//           }}
//           className="
//             mt-7
//             flex
//             flex-col
//             gap-5
//             rounded-[16px]
//             border
//             border-[#143E33]/[0.07]
//             bg-white
//             px-6
//             py-5
//             shadow-[0_10px_30px_rgba(20,62,51,.035)]

//             sm:flex-row
//             sm:items-center
//             sm:justify-between
//           ">
//           <div className="flex items-center gap-4">
//             <span
//               className="
//                 flex
//                 h-9
//                 w-9
//                 items-center
//                 justify-center
//                 rounded-full
//                 bg-[#EDF5DF]
//                 text-[#78A500]
//               ">
//               <Zap size={14} strokeWidth={1.6} />
//             </span>

//             <div>
//               <p
//                 className="
//                   text-[7px]
//                   font-bold
//                   uppercase
//                   tracking-[0.16em]
//                   text-[#143E33]/35
//                 ">
//                 El objetivo
//               </p>

//               <p
//                 className="
//                   mt-1
//                   text-[10px]
//                   font-medium
//                   tracking-[-0.015em]
//                   text-[#143E33]/65
//                 ">
//                 Energía disponible cuando la movilidad la necesita.
//               </p>
//             </div>
//           </div>

//           <div
//             className="
//               flex
//               items-center
//               gap-3
//             ">
//             <Sparkles size={11} strokeWidth={1.5} className="text-[#83B500]" />

//             <span
//               className="
//                 text-[7px]
//                 font-bold
//                 uppercase
//                 tracking-[0.17em]
//                 text-[#76A400]
//               ">
//               Availability · Control · Scalability
//             </span>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default MovilidadPerformanceSection;

import { motion } from "motion/react";
import {
  Activity,
  ArrowRight,
  BatteryCharging,
  CarFront,
  Check,
  Clock3,
  Gauge,
  Route,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const operationalMoments = [
  {
    number: "01",
    time: "Regreso",
    eyebrow: "Regreso",
    title: "El vehículo vuelve.",
    description:
      "La infraestructura identifica qué unidades regresaron y cuánto tiempo estarán disponibles.",
    icon: CarFront,
  },
  {
    number: "02",
    time: "Carga",
    eyebrow: "Carga",
    title: "La energía empieza a fluir.",
    description:
      "La potencia se distribuye según prioridad, estado de carga y ventana operativa.",
    icon: BatteryCharging,
  },
  {
    number: "03",
    time: "Gestión",
    eyebrow: "Gestión",
    title: "El sistema decide.",
    description:
      "La gestión energética coordina demanda, cargadores y almacenamiento.",
    icon: Gauge,
  },
  {
    number: "04",
    time: "Salida",
    eyebrow: "Salida",
    title: "La operación continúa.",
    description:
      "Los vehículos vuelven a estar disponibles antes de comenzar una nueva jornada.",
    icon: Route,
  },
];

const performanceSignals = [
  {
    label: "Disponibilidad",
    value: "READY",
  },
  {
    label: "Carga",
    value: "SMART",
  },
  {
    label: "Potencia",
    value: "CONTROL",
  },
  {
    label: "Operación",
    value: "COORDINADA",
  },
];

/* =========================================================
   MOVING VEHICLE
========================================================= */

function MovingVehicle() {
  return (
    <motion.div
      animate={{
        left: ["2%", "94%"],
      }}
      transition={{
        duration: 8.5,
        repeat: Infinity,
        repeatDelay: 1,
        ease: [0.45, 0, 0.55, 1],
      }}
      className="
        absolute
        top-1/2
        z-40
        -translate-x-1/2
        -translate-y-1/2
      ">
      <div
        className="
          relative
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          bg-[#B8F23A]
          text-[#10372E]
          shadow-[0_0_34px_rgba(184,242,58,.42)]
        ">
        <CarFront size={17} strokeWidth={1.7} />

        <span
          className="
            absolute
            inset-[-6px]
            rounded-full
            border
            border-[#B8F23A]/25
          "
        />
      </div>
    </motion.div>
  );
}

/* =========================================================
   FLOW PULSE
========================================================= */

function FlowPulse({ delay = 0 }) {
  return (
    <motion.span
      animate={{
        left: ["3%", "97%"],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 3.8,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
      className="
        absolute
        top-1/2
        h-2
        w-2
        -translate-y-1/2
        rounded-full
        bg-[#B8F23A]
        shadow-[0_0_14px_rgba(184,242,58,.9)]
      "
    />
  );
}

/* =========================================================
   MAIN
========================================================= */

function MovilidadPerformanceSection() {
  return (
    <section
      id="movilidad-performance"
      className="
        relative
        overflow-hidden
        bg-[#F6F8F3]
        py-16
        text-[#143E33]

        lg:py-20
        xl:py-24
      ">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.25]
          [background-image:linear-gradient(rgba(20,62,51,.028)_1px,transparent_1px),linear-gradient(90deg,rgba(20,62,51,.028)_1px,transparent_1px)]
          [background-size:72px_72px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[180px]
          -top-[200px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#B8F23A]/10
          blur-[115px]
        "
      />

      <span
        className="
          pointer-events-none
          absolute
          -right-7
          bottom-[-25px]
          hidden
          select-none
          text-[clamp(9rem,17vw,19rem)]
          font-semibold
          leading-none
          tracking-[-0.09em]
          text-[#143E33]/[0.018]

          xl:block
        ">
        READY
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            grid
            gap-7

            lg:grid-cols-[1fr_400px]
            lg:items-end
          ">
          <div>
            <div className="flex items-center gap-4">
              <span
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-[#B8F23A]
                  text-[#143E33]
                ">
                <Clock3 size={17} strokeWidth={1.6} />
              </span>

              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#83B500]" />

                <p
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.22em]
                    text-[#76A400]
                  ">
                  Disponibilidad operativa
                </p>
              </div>
            </div>

            <h2
              className="
                mt-5
                max-w-[980px]
                text-[clamp(2.6rem,4.2vw,5rem)]
                font-normal
                leading-[0.92]
                tracking-[-0.065em]
              ">
              La pregunta no es
              <span className="block">cuánto tarda en cargar.</span>
              <span className="block text-[#83B500]">
                Es cuándo debe volver a salir.
              </span>
            </h2>
          </div>

          <div className="lg:pb-1">
            <p
              className="
                max-w-[400px]
                text-[13px]
                leading-6
                text-[#143E33]/46
              ">
              Diseñamos potencia, prioridades y estrategia energética alrededor
              de la disponibilidad real que necesita cada vehículo, coordinando
              cargadores, almacenamiento y demanda eléctrica.
            </p>

            <div className="mt-4 flex items-center gap-3">
              <span className="relative flex h-2.5 w-2.5">
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
                    h-2.5
                    w-2.5
                    rounded-full
                    bg-[#83B500]
                  "
                />
              </span>

              <span
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.17em]
                  text-[#143E33]/32
                ">
                Vehicle availability first
              </span>
            </div>
          </div>
        </motion.div>

        {/* ===================================================
            OPERATIONAL STAGE
        =================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 0.8,
            delay: 0.06,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mt-11
            overflow-hidden
            rounded-[22px]
            bg-[#10372E]
            text-white
            shadow-[0_28px_80px_rgba(20,62,51,.15)]
          ">
          {/* GRID */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-[0.13]
              [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)]
              [background-size:42px_42px]
            "
          />

          {/* CENTER GLOW */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-[48%]
              h-[430px]
              w-[820px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#B8F23A]/[0.065]
              blur-[105px]
            "
          />

          {/* =================================================
              TOP CONTROL BAR
          ================================================= */}

          <div
            className="
              relative
              z-20
              flex
              flex-col
              gap-4
              border-b
              border-white/[0.08]
              px-6
              py-4

              sm:flex-row
              sm:items-center
              sm:justify-between

              lg:px-8
            ">
            <div className="flex items-center gap-4">
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
                <Activity size={15} strokeWidth={1.7} />
              </span>

              <div>
                <p
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.19em]
                    text-[#B8F23A]
                  ">
                  Operational Strategy
                </p>

                <p
                  className="
                    mt-1
                    text-[11px]
                    uppercase
                    tracking-[0.13em]
                    text-white/25
                  ">
                  Arrival · Charging · Management · Departure
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="relative flex h-2 w-2">
                <span
                  className="
                    absolute
                    inset-0
                    animate-ping
                    rounded-full
                    bg-[#B8F23A]/40
                  "
                />

                <span
                  className="
                    relative
                    h-2
                    w-2
                    rounded-full
                    bg-[#B8F23A]
                  "
                />
              </span>

              <span
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.14em]
                  text-white/32
                ">
                Illustrative flow
              </span>

              <span className="hidden h-4 w-px bg-white/10 sm:block" />

              <span
                className="
                  hidden
                  text-[11px]
                  font-semibold
                  tracking-[0.14em]
                  text-white/20

                  sm:block
                ">
                GRN / MOB-24
              </span>
            </div>
          </div>

          {/* =================================================
              INTRO + QUICK STATUS
          ================================================= */}

          <div
            className="
              relative
              z-10
              grid
              gap-6
              px-6
              pb-6
              pt-7

              lg:grid-cols-[1fr_1.1fr]
              lg:items-center
              lg:px-8
            ">
            <div>
              <p
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-white/28
                ">
                Ciclo operativo ilustrativo
              </p>

              <h3
                className="
                  mt-3
                  max-w-[570px]
                  text-[clamp(2rem,3.1vw,3.8rem)]
                  font-normal
                  leading-[0.94]
                  tracking-[-0.055em]
                ">
                El vehículo regresa.
                <span className="block text-[#B8F23A]">
                  La infraestructura entra en acción.
                </span>
              </h3>
            </div>

            <div
              className="
                grid
                gap-2

                sm:grid-cols-3
              ">
              {[
                ["Regreso", "Arrival", CarFront],
                ["Carga", "Charging", BatteryCharging],
                ["Salida", "Ready", Route],
              ].map(([value, label, Icon]) => (
                <div
                  key={label}
                  className="
                    rounded-[11px]
                    border
                    border-white/[0.07]
                    bg-white/[0.035]
                    p-4
                  ">
                  <div className="flex items-center justify-between gap-3">
                    <Icon
                      size={14}
                      strokeWidth={1.6}
                      className="text-[#B8F23A]"
                    />

                    <span
                      className="
                        text-[13px]
                        font-medium
                        tracking-[-0.02em]
                        text-[#B8F23A]
                      ">
                      {value}
                    </span>
                  </div>

                  <p
                    className="
                      mt-3
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.13em]
                      text-white/28
                    ">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* =================================================
              DESKTOP JOURNEY
          ================================================= */}

          <div
            className="
              relative
              z-10
              hidden
              px-8
              pb-8

              lg:block
            ">
            {/* ===============================================
                ROUTE STAGE
            =============================================== */}

            <div
              className="
                relative
                h-[155px]
                rounded-[17px]
                border
                border-white/[0.07]
                bg-[#0D3028]/65
                px-[5%]
                backdrop-blur-sm
              ">
              {/* TIME LABELS */}

              <div
                className="
                  absolute
                  left-[5%]
                  right-[5%]
                  top-5
                  flex
                  justify-between
                ">
                {["Regreso", "Prioridad", "Carga", "Gestión", "Salida"].map(
                  (time) => (
                    <span
                      key={time}
                      className="
                        text-[11px]
                        font-bold
                        tracking-[0.14em]
                        text-white/22
                      ">
                      {time}
                    </span>
                  ),
                )}
              </div>

              {/* ROAD */}

              <div
                className="
                  absolute
                  left-[5%]
                  right-[5%]
                  top-[74px]
                  h-[44px]
                ">
                <div
                  className="
                    absolute
                    left-0
                    right-0
                    top-1/2
                    h-[2px]
                    -translate-y-1/2
                    bg-gradient-to-r
                    from-white/10
                    via-[#B8F23A]/75
                    to-white/10
                  ">
                  <FlowPulse delay={0} />
                  <FlowPulse delay={1.2} />
                  <FlowPulse delay={2.4} />

                  <MovingVehicle />
                </div>

                {/* CHARGING WINDOW */}

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "54%" }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 1.1,
                    delay: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    absolute
                    bottom-0
                    left-[18%]
                    top-0
                    overflow-hidden
                    rounded-full
                    border
                    border-[#B8F23A]/20
                    bg-[#B8F23A]/[0.06]
                  ">
                  <motion.div
                    animate={{
                      x: ["-100%", "180%"],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="
                      absolute
                      bottom-0
                      top-0
                      w-[35%]
                      bg-gradient-to-r
                      from-transparent
                      via-[#B8F23A]/10
                      to-transparent
                    "
                  />

                  <span
                    className="
                      absolute
                      left-5
                      top-1/2
                      -translate-y-1/2
                      whitespace-nowrap
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.14em]
                      text-[#B8F23A]/65
                    ">
                    Managed charging window
                  </span>
                </motion.div>

                {/* START */}

                <span
                  className="
                    absolute
                    left-0
                    top-1/2
                    z-30
                    flex
                    h-4
                    w-4
                    -translate-x-1/2
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#B8F23A]/50
                    bg-[#10372E]
                  ">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#B8F23A]" />
                </span>

                {/* FINISH */}

                <span
                  className="
                    absolute
                    right-0
                    top-1/2
                    z-30
                    flex
                    h-4
                    w-4
                    translate-x-1/2
                    -translate-y-1/2
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#B8F23A]/50
                    bg-[#10372E]
                  ">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#B8F23A]" />
                </span>
              </div>

              {/* LOWER LABELS */}

              <div
                className="
                  absolute
                  bottom-4
                  left-[5%]
                  right-[5%]
                  flex
                  items-center
                  justify-between
                ">
                <div className="flex items-center gap-2">
                  <CarFront
                    size={11}
                    strokeWidth={1.5}
                    className="text-[#B8F23A]"
                  />

                  <span
                    className="
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.13em]
                      text-white/28
                    ">
                    Vehicle arrives
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Route
                    size={11}
                    strokeWidth={1.5}
                    className="text-[#B8F23A]"
                  />

                  <span
                    className="
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.13em]
                      text-white/28
                    ">
                    Vehicle ready
                  </span>
                </div>
              </div>
            </div>

            {/* ===============================================
                MOMENTS
            =============================================== */}

            <div
              className="
                mt-4
                grid
                grid-cols-4
                gap-3
              ">
              {operationalMoments.map((moment, index) => {
                const Icon = moment.icon;

                return (
                  <motion.article
                    key={moment.number}
                    initial={{
                      opacity: 0,
                      y: 14,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2 + index * 0.07,
                    }}
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-[14px]
                      border
                      border-white/[0.07]
                      bg-white/[0.035]
                      p-4
                      transition-all
                      duration-300

                      hover:-translate-y-1
                      hover:border-[#B8F23A]/25
                      hover:bg-white/[0.055]
                    ">
                    <span
                      className="
                        pointer-events-none
                        absolute
                        -right-1
                        -top-5
                        text-[80px]
                        font-light
                        leading-none
                        tracking-[-0.08em]
                        text-[#B8F23A]/[0.035]
                      ">
                      {moment.number}
                    </span>

                    <div className="relative z-10">
                      <div
                        className="
                          flex
                          items-start
                          justify-between
                          gap-3
                        ">
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
                            transition-all
                            duration-300

                            group-hover:bg-[#B8F23A]
                            group-hover:text-[#10372E]
                          ">
                          <Icon size={15} strokeWidth={1.6} />
                        </span>

                        <span
                          className="
                            text-[11px]
                            font-medium
                            text-[#B8F23A]
                          ">
                          {moment.time}
                        </span>
                      </div>

                      <div className="mt-4">
                        <p
                          className="
                            text-[11px]
                            font-bold
                            uppercase
                            tracking-[0.14em]
                            text-[#B8F23A]
                          ">
                          {moment.number} · {moment.eyebrow}
                        </p>

                        <h4
                          className="
                            mt-2
                            text-[15px]
                            font-medium
                            leading-[1.05]
                            tracking-[-0.035em]
                            text-white/85
                          ">
                          {moment.title}
                        </h4>

                        <p
                          className="
                            mt-2
                            text-[11px]
                            leading-5
                            text-white/30
                          ">
                          {moment.description}
                        </p>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>

          {/* =================================================
              MOBILE
          ================================================= */}

          <div
            className="
              relative
              z-10
              px-5
              pb-5

              lg:hidden
            ">
            <div className="space-y-3">
              {operationalMoments.map((moment, index) => {
                const Icon = moment.icon;

                return (
                  <motion.div
                    key={moment.number}
                    initial={{
                      opacity: 0,
                      x: 12,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.45,
                      delay: index * 0.06,
                    }}
                    className="
                      relative
                      rounded-[13px]
                      border
                      border-white/[0.07]
                      bg-white/[0.035]
                      p-4
                    ">
                    <div
                      className="
                        flex
                        items-start
                        gap-4
                      ">
                      <span
                        className="
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-[10px]
                          bg-[#B8F23A]/10
                          text-[#B8F23A]
                        ">
                        <Icon size={16} strokeWidth={1.6} />
                      </span>

                      <div className="min-w-0 flex-1">
                        <div
                          className="
                            flex
                            items-center
                            justify-between
                            gap-4
                          ">
                          <p
                            className="
                              text-[11px]
                              font-bold
                              uppercase
                              tracking-[0.14em]
                              text-[#B8F23A]
                            ">
                            {moment.number} · {moment.eyebrow}
                          </p>

                          <span
                            className="
                              text-[11px]
                              font-medium
                              text-[#B8F23A]
                            ">
                            {moment.time}
                          </span>
                        </div>

                        <h4
                          className="
                            mt-2
                            text-[17px]
                            font-medium
                            tracking-[-0.035em]
                          ">
                          {moment.title}
                        </h4>

                        <p
                          className="
                            mt-2
                            text-[11px]
                            leading-5
                            text-white/35
                          ">
                          {moment.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* =================================================
              PERFORMANCE SIGNALS
          ================================================= */}

          <div
            className="
              relative
              z-20
              grid
              border-t
              border-white/[0.08]
              bg-[#0D3028]

              sm:grid-cols-2
              lg:grid-cols-4
            ">
            {performanceSignals.map((signal, index) => (
              <div
                key={signal.label}
                className={`
                  group
                  flex
                  items-center
                  justify-between
                  gap-4
                  px-5
                  py-4
                  transition-colors
                  duration-300

                  hover:bg-white/[0.025]

                  ${
                    index > 0
                      ? "border-t border-white/[0.06] sm:border-l sm:border-t-0"
                      : ""
                  }
                `}>
                <div>
                  <p
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.14em]
                      text-white/25
                    ">
                    {signal.label}
                  </p>

                  <p
                    className="
                      mt-1.5
                      text-[13px]
                      font-semibold
                      uppercase
                      tracking-[0.11em]
                      text-[#B8F23A]
                    ">
                    {signal.value}
                  </p>
                </div>

                <span
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#B8F23A]/20
                    bg-[#B8F23A]/[0.06]
                    text-[#B8F23A]
                    transition-all
                    duration-300

                    group-hover:bg-[#B8F23A]
                    group-hover:text-[#10372E]
                  ">
                  <Check size={11} strokeWidth={1.8} />
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ===================================================
            FINAL PUNCHLINE
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 14,
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
            duration: 0.6,
            delay: 0.08,
          }}
          className="
            mt-6
            flex
            flex-col
            gap-5
            rounded-[15px]
            border
            border-[#143E33]/[0.07]
            bg-white
            px-5
            py-5
            shadow-[0_10px_30px_rgba(20,62,51,.035)]

            sm:flex-row
            sm:items-center
            sm:justify-between
          ">
          <div className="flex items-center gap-4">
            <span
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#EAF3DC]
                text-[#78A500]
              ">
              <ShieldCheck size={14} strokeWidth={1.6} />
            </span>

            <div>
              <p
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-[#143E33]/30
                ">
                La métrica que importa
              </p>

              <p
                className="
                  mt-1
                  text-[13px]
                  font-medium
                  tracking-[-0.015em]
                  text-[#143E33]/68
                ">
                Cada vehículo listo cuando la operación lo necesita.
              </p>
            </div>
          </div>

          <div
            className="
              flex
              items-center
              gap-3
            ">
            <Sparkles size={11} strokeWidth={1.5} className="text-[#83B500]" />

            <span
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.17em]
                text-[#76A400]
              ">
              Charge · Manage · Move · Repeat
            </span>

            <ArrowRight
              size={13}
              strokeWidth={1.5}
              className="text-[#83B500]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default MovilidadPerformanceSection;
