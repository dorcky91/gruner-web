// import { motion } from "motion/react";
// import {
//   ArrowUpRight,
//   BatteryCharging,
//   Gauge,
//   Leaf,
//   ShieldCheck,
//   Sun,
//   TrendingDown,
//   Zap,
// } from "lucide-react";

// const benefits = [
//   {
//     number: "01",
//     title: "Reducir costos",
//     description:
//       "Aprovecha generación local y almacenamiento para disminuir dependencia de la red y gestionar mejor los periodos de mayor demanda.",
//     icon: TrendingDown,
//   },
//   {
//     number: "02",
//     title: "Aumentar resiliencia",
//     description:
//       "El almacenamiento energético permite responder mejor ante variaciones de demanda y fortalecer la continuidad de la operación.",
//     icon: ShieldCheck,
//   },
//   {
//     number: "03",
//     title: "Aprovechar más la energía solar",
//     description:
//       "La energía generada puede almacenarse y utilizarse estratégicamente en otros momentos de la operación.",
//     icon: Sun,
//   },
//   {
//     number: "04",
//     title: "Gestionar la demanda",
//     description:
//       "Integramos control y almacenamiento para responder de forma más inteligente a los patrones reales de consumo.",
//     icon: Gauge,
//   },
// ];

// const pillars = [
//   {
//     label: "Generación",
//     value: "Solar",
//     icon: Sun,
//   },
//   {
//     label: "Almacenamiento",
//     value: "BESS",
//     icon: BatteryCharging,
//   },
//   {
//     label: "Gestión",
//     value: "EMS",
//     icon: Zap,
//   },
// ];

// function SolarBenefitsSection() {
//   return (
//     <section
//       className="
//         relative
//         overflow-hidden
//         bg-[#F5F7F1]
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
//           opacity-[0.35]
//           [background-image:linear-gradient(rgba(20,62,51,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(20,62,51,.035)_1px,transparent_1px)]
//           [background-size:72px_72px]
//         "
//       />

//       <div
//         className="
//           pointer-events-none
//           absolute
//           -right-[180px]
//           -top-[180px]
//           h-[520px]
//           w-[520px]
//           rounded-full
//           bg-[#9DD827]/10
//           blur-[100px]
//         "
//       />

//       <div
//         className="
//           pointer-events-none
//           absolute
//           -bottom-[180px]
//           -left-[120px]
//           h-[420px]
//           w-[420px]
//           rounded-full
//           bg-[#143E33]/[0.035]
//           blur-[100px]
//         "
//       />

//       <span
//         className="
//           pointer-events-none
//           absolute
//           -right-8
//           top-[45px]
//           hidden
//           select-none
//           text-[clamp(9rem,16vw,18rem)]
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
//             HEADER
//         =================================================== */}

//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
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
//               <span
//                 className="
//                   flex
//                   h-10
//                   w-10
//                   items-center
//                   justify-center
//                   rounded-full
//                   bg-[#9DD827]
//                   text-[#143E33]
//                 ">
//                 <Leaf size={17} strokeWidth={1.6} />
//               </span>

//               <div className="flex items-center gap-3">
//                 <span className="h-px w-8 bg-[#83B500]" />

//                 <p
//                   className="
//                     text-[8px]
//                     font-bold
//                     uppercase
//                     tracking-[0.22em]
//                     text-[#75A300]
//                   ">
//                   Valor energético
//                 </p>
//               </div>
//             </div>

//             <h2
//               className="
//                 mt-6
//                 max-w-[900px]
//                 text-[clamp(2.7rem,4.3vw,5rem)]
//                 font-normal
//                 leading-[0.94]
//                 tracking-[-0.06em]
//               ">
//               Más control sobre
//               <span className="block">cómo consumes</span>
//               <span className="block text-[#83B500]">
//                 y cómo utilizas tu energía.
//               </span>
//             </h2>
//           </div>

//           <div className="lg:pb-2">
//             <p
//               className="
//                 max-w-[420px]
//                 text-[13px]
//                 leading-7
//                 text-[#143E33]/50
//               ">
//               Una solución integrada permite que generación, almacenamiento y
//               gestión trabajen juntos para mejorar el desempeño energético de la
//               operación.
//             </p>

//             <div
//               className="
//                 mt-5
//                 flex
//                 items-center
//                 gap-3
//               ">
//               <span className="h-2 w-2 rounded-full bg-[#9DD827]" />

//               <span
//                 className="
//                   text-[7px]
//                   font-bold
//                   uppercase
//                   tracking-[0.17em]
//                   text-[#143E33]/35
//                 ">
//                 Solar + almacenamiento + inteligencia
//               </span>
//             </div>
//           </div>
//         </motion.div>

//         {/* ===================================================
//             MAIN LAYOUT
//         =================================================== */}

//         <div
//           className="
//             mt-14
//             grid
//             gap-5
//             lg:grid-cols-[.8fr_1.2fr]
//             xl:gap-6
//           ">
//           {/* =================================================
//               FEATURED VALUE
//           ================================================= */}

//           <motion.div
//             initial={{ opacity: 0, x: -24 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, amount: 0.2 }}
//             transition={{
//               duration: 0.75,
//               ease: [0.22, 1, 0.36, 1],
//             }}
//             className="
//               relative
//               min-h-[440px]
//               overflow-hidden
//               rounded-[18px]
//               bg-[#143E33]
//               p-7
//               text-white
//               shadow-[0_24px_60px_rgba(20,62,51,.12)]

//               sm:p-8
//               lg:min-h-full
//               xl:p-9
//             ">
//             {/* grid */}

//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 inset-0
//                 opacity-[0.13]
//                 [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)]
//                 [background-size:42px_42px]
//               "
//             />

//             {/* glow */}

//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 -right-24
//                 -top-24
//                 h-[320px]
//                 w-[320px]
//                 rounded-full
//                 bg-[#9DD827]/15
//                 blur-[80px]
//               "
//             />

//             <span
//               className="
//                 pointer-events-none
//                 absolute
//                 -right-2
//                 -top-7
//                 text-[160px]
//                 font-light
//                 leading-none
//                 tracking-[-0.09em]
//                 text-[#B8F23A]/[0.06]
//               ">
//               01
//             </span>

//             <div
//               className="
//                 relative
//                 z-10
//                 flex
//                 h-full
//                 flex-col
//               ">
//               <div className="flex items-start justify-between gap-5">
//                 <span
//                   className="
//                     flex
//                     h-12
//                     w-12
//                     items-center
//                     justify-center
//                     rounded-[12px]
//                     bg-[#B8F23A]
//                     text-[#143E33]
//                   ">
//                   <Zap size={20} strokeWidth={1.7} />
//                 </span>

//                 <span
//                   className="
//                     text-[7px]
//                     font-bold
//                     uppercase
//                     tracking-[0.2em]
//                     text-[#B8F23A]
//                   ">
//                   Integración energética
//                 </span>
//               </div>

//               <div className="mt-12">
//                 <p
//                   className="
//                     text-[8px]
//                     font-bold
//                     uppercase
//                     tracking-[0.19em]
//                     text-white/35
//                   ">
//                   El objetivo
//                 </p>

//                 <h3
//                   className="
//                     mt-4
//                     max-w-[560px]
//                     text-[clamp(2.2rem,3.3vw,4rem)]
//                     font-normal
//                     leading-[0.95]
//                     tracking-[-0.055em]
//                   ">
//                   Que cada kWh tenga
//                   <span className="block text-[#B8F23A]">un propósito.</span>
//                 </h3>

//                 <p
//                   className="
//                     mt-5
//                     max-w-[500px]
//                     text-[11px]
//                     leading-6
//                     text-white/45
//                   ">
//                   La energía puede generarse, almacenarse, dirigirse y
//                   utilizarse estratégicamente según las prioridades de la
//                   operación.
//                 </p>
//               </div>

//               {/* pillars */}

//               <div
//                 className="
//                   mt-auto
//                   grid
//                   grid-cols-3
//                   gap-2
//                   border-t
//                   border-white/10
//                   pt-6
//                 ">
//                 {pillars.map((item) => {
//                   const Icon = item.icon;

//                   return (
//                     <div
//                       key={item.value}
//                       className="
//                         rounded-[11px]
//                         border
//                         border-white/[0.07]
//                         bg-white/[0.035]
//                         p-4
//                       ">
//                       <Icon
//                         size={15}
//                         strokeWidth={1.6}
//                         className="text-[#B8F23A]"
//                       />

//                       <p
//                         className="
//                           mt-3
//                           text-[11px]
//                           font-medium
//                           tracking-[-0.02em]
//                         ">
//                         {item.value}
//                       </p>

//                       <p
//                         className="
//                           mt-1
//                           text-[6px]
//                           uppercase
//                           tracking-[0.12em]
//                           text-white/25
//                         ">
//                         {item.label}
//                       </p>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </motion.div>

//           {/* =================================================
//               BENEFITS
//           ================================================= */}

//           <div
//             className="
//               grid
//               gap-4
//               sm:grid-cols-2
//             ">
//             {benefits.map((item, index) => {
//               const Icon = item.icon;

//               return (
//                 <motion.article
//                   key={item.number}
//                   initial={{ opacity: 0, y: 22 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, amount: 0.2 }}
//                   transition={{
//                     duration: 0.65,
//                     delay: index * 0.06,
//                     ease: [0.22, 1, 0.36, 1],
//                   }}
//                   className="
//                     group
//                     relative
//                     overflow-hidden
//                     rounded-[16px]
//                     border
//                     border-[#143E33]/[0.08]
//                     bg-white
//                     p-6
//                     shadow-[0_8px_28px_rgba(20,62,51,.035)]
//                     transition-all
//                     duration-500

//                     hover:-translate-y-1
//                     hover:border-[#9DD827]/55
//                     hover:shadow-[0_20px_45px_rgba(20,62,51,.075)]
//                   ">
//                   <span
//                     className="
//                       pointer-events-none
//                       absolute
//                       -right-2
//                       -top-6
//                       text-[105px]
//                       font-light
//                       leading-none
//                       tracking-[-0.09em]
//                       text-[#7FAE00]/[0.055]
//                       transition-colors
//                       duration-500

//                       group-hover:text-[#7FAE00]/[0.10]
//                     ">
//                     {item.number}
//                   </span>

//                   <div className="relative z-10">
//                     <div className="flex items-start justify-between gap-5">
//                       <span
//                         className="
//                           flex
//                           h-11
//                           w-11
//                           items-center
//                           justify-center
//                           rounded-[11px]
//                           bg-[#EDF5DF]
//                           text-[#78A600]
//                           transition-all
//                           duration-300

//                           group-hover:bg-[#9DD827]
//                           group-hover:text-[#143E33]
//                         ">
//                         <Icon size={18} strokeWidth={1.6} />
//                       </span>

//                       <span
//                         className="
//                           flex
//                           h-8
//                           w-8
//                           items-center
//                           justify-center
//                           rounded-full
//                           border
//                           border-[#143E33]/10
//                           text-[#7FAE00]
//                           transition-all
//                           duration-300

//                           group-hover:border-[#9DD827]
//                           group-hover:bg-[#9DD827]
//                           group-hover:text-[#143E33]
//                         ">
//                         <ArrowUpRight
//                           size={13}
//                           strokeWidth={1.6}
//                           className="
//                             transition-transform
//                             duration-300
//                             group-hover:-translate-y-0.5
//                             group-hover:translate-x-0.5
//                           "
//                         />
//                       </span>
//                     </div>

//                     <div className="mt-8">
//                       <div className="flex items-center gap-3">
//                         <span
//                           className="
//                             text-[7px]
//                             font-bold
//                             tracking-[0.16em]
//                             text-[#143E33]/25
//                           ">
//                           {item.number}
//                         </span>

//                         <span className="h-px w-7 bg-[#9DD827]" />

//                         <span
//                           className="
//                             text-[7px]
//                             font-bold
//                             uppercase
//                             tracking-[0.17em]
//                             text-[#78A500]
//                           ">
//                           Beneficio
//                         </span>
//                       </div>

//                       <h3
//                         className="
//                           mt-4
//                           text-[clamp(1.4rem,1.8vw,2rem)]
//                           font-medium
//                           leading-[1]
//                           tracking-[-0.04em]
//                           text-[#143E33]
//                         ">
//                         {item.title}
//                       </h3>

//                       <p
//                         className="
//                           mt-4
//                           max-w-[390px]
//                           text-[10px]
//                           leading-6
//                           text-[#143E33]/47
//                         ">
//                         {item.description}
//                       </p>
//                     </div>

//                     <div
//                       className="
//                         mt-7
//                         h-px
//                         w-full
//                         overflow-hidden
//                         bg-[#143E33]/[0.07]
//                       ">
//                       <span
//                         className="
//                           block
//                           h-full
//                           w-10
//                           bg-[#9DD827]
//                           transition-all
//                           duration-500

//                           group-hover:w-full
//                         "
//                       />
//                     </div>
//                   </div>
//                 </motion.article>
//               );
//             })}
//           </div>
//         </div>

//         {/* ===================================================
//             BOTTOM MESSAGE
//         =================================================== */}

//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.75, delay: 0.15 }}
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

//             <span
//               className="
//                 text-[7px]
//                 font-semibold
//                 uppercase
//                 tracking-[0.17em]
//                 text-[#143E33]/35
//               ">
//               Energía diseñada alrededor de la operación
//             </span>
//           </div>

//           <div className="flex items-center gap-3">
//             <span className="h-px w-10 bg-[#9DD827]" />

//             <span
//               className="
//                 text-[7px]
//                 font-bold
//                 uppercase
//                 tracking-[0.19em]
//                 text-[#75A300]
//               ">
//               Performance · Resilience · Control
//             </span>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

// export default SolarBenefitsSection;

import { motion } from "motion/react";
import {
  ArrowUpRight,
  BatteryCharging,
  Gauge,
  Leaf,
  ShieldCheck,
  Sun,
  TrendingDown,
  Zap,
} from "lucide-react";

const benefits = [
  {
    number: "01",
    title: "Reducir costos",
    description:
      "Aprovecha generación solar local y almacenamiento BESS para disminuir dependencia de la red y gestionar mejor los periodos de mayor demanda.",
    icon: TrendingDown,
  },
  {
    number: "02",
    title: "Aumentar resiliencia",
    description:
      "El almacenamiento BESS permite responder mejor ante variaciones de demanda y fortalecer la continuidad de la operación.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Aprovechar más la energía solar",
    description:
      "La energía generada puede almacenarse y utilizarse estratégicamente en otros momentos de la operación.",
    icon: Sun,
  },
  {
    number: "04",
    title: "Gestionar la demanda",
    description:
      "Integramos control y almacenamiento para responder de forma más inteligente a los patrones reales de consumo.",
    icon: Gauge,
  },
];

const pillars = [
  {
    label: "Generación",
    value: "Solar",
    icon: Sun,
  },
  {
    label: "Almacenamiento",
    value: "BESS",
    icon: BatteryCharging,
  },
  {
    label: "Gestión",
    value: "EMS",
    icon: Zap,
  },
];

function SolarBenefitsSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#F5F7F1]
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
          opacity-[0.35]
          [background-image:linear-gradient(rgba(20,62,51,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(20,62,51,.035)_1px,transparent_1px)]
          [background-size:72px_72px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[180px]
          -top-[180px]
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#9DD827]/10
          blur-[100px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-[180px]
          -left-[120px]
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#143E33]/[0.035]
          blur-[100px]
        "
      />

      <span
        className="
          pointer-events-none
          absolute
          -right-8
          top-[45px]
          hidden
          select-none
          text-[clamp(9rem,16vw,18rem)]
          font-semibold
          leading-none
          tracking-[-0.09em]
          text-[#143E33]/[0.018]
          xl:block
        ">
        VALUE
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
          initial={{ opacity: 0, y: 24 }}
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
              <span
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-[#9DD827]
                  text-[#143E33]
                ">
                <Leaf size={17} strokeWidth={1.6} />
              </span>

              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#83B500]" />

                <p
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.22em]
                    text-[#75A300]
                  ">
                  Valor energético
                </p>
              </div>
            </div>

            <h2
              className="
                mt-6
                max-w-[900px]
                text-[clamp(2.7rem,4.3vw,5rem)]
                font-normal
                leading-[0.94]
                tracking-[-0.06em]
              ">
              Más control sobre
              <span className="block">cómo consumes</span>
              <span className="block text-[#83B500]">
                y cómo utilizas tu energía.
              </span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p
              className="
                max-w-[420px]
                text-[13px]
                leading-7
                text-[#143E33]/50
              ">
              Una solución integrada permite que generación fotovoltaica,
              almacenamiento BESS y gestión energética trabajen juntos para
              mejorar el desempeño de la operación.
            </p>

            <div
              className="
                mt-5
                flex
                items-center
                gap-3
              ">
              <span className="h-2 w-2 rounded-full bg-[#9DD827]" />

              <span
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.17em]
                  text-[#143E33]/35
                ">
                Solar + almacenamiento + inteligencia
              </span>
            </div>
          </div>
        </motion.div>

        {/* ===================================================
            MAIN LAYOUT
        =================================================== */}

        <div
          className="
            mt-14
            grid
            gap-5
            lg:grid-cols-[.8fr_1.2fr]
            xl:gap-6
          ">
          {/* =================================================
              FEATURED VALUE
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              min-h-[440px]
              overflow-hidden
              rounded-[18px]
              bg-[#143E33]
              p-7
              text-white
              shadow-[0_24px_60px_rgba(20,62,51,.12)]

              sm:p-8
              lg:min-h-full
              xl:p-9
            ">
            {/* grid */}

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

            {/* glow */}

            <div
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-[320px]
                w-[320px]
                rounded-full
                bg-[#9DD827]/15
                blur-[80px]
              "
            />

            <span
              className="
                pointer-events-none
                absolute
                -right-2
                -top-7
                text-[160px]
                font-light
                leading-none
                tracking-[-0.09em]
                text-[#B8F23A]/[0.06]
              ">
              01
            </span>

            <div
              className="
                relative
                z-10
                flex
                h-full
                flex-col
              ">
              <div className="flex items-start justify-between gap-5">
                <span
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-[12px]
                    bg-[#B8F23A]
                    text-[#143E33]
                  ">
                  <Zap size={20} strokeWidth={1.7} />
                </span>

                <span
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.2em]
                    text-[#B8F23A]
                  ">
                  Integración energética
                </span>
              </div>

              <div className="mt-12">
                <p
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.19em]
                    text-white/35
                  ">
                  El objetivo
                </p>

                <h3
                  className="
                    mt-4
                    max-w-[560px]
                    text-[clamp(2.2rem,3.3vw,4rem)]
                    font-normal
                    leading-[0.95]
                    tracking-[-0.055em]
                  ">
                  Que cada kWh tenga
                  <span className="block text-[#B8F23A]">un propósito.</span>
                </h3>

                <p
                  className="
                    mt-5
                    max-w-[500px]
                    text-[13px]
                    leading-6
                    text-white/45
                  ">
                  La energía puede generarse, almacenarse, dirigirse y
                  utilizarse estratégicamente según las prioridades de la
                  operación.
                </p>
              </div>

              {/* pillars */}

              <div
                className="
                  mt-auto
                  grid
                  grid-cols-3
                  gap-2
                  border-t
                  border-white/10
                  pt-6
                ">
                {pillars.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.value}
                      className="
                        rounded-[11px]
                        border
                        border-white/[0.07]
                        bg-white/[0.035]
                        p-4
                      ">
                      <Icon
                        size={15}
                        strokeWidth={1.6}
                        className="text-[#B8F23A]"
                      />

                      <p
                        className="
                          mt-3
                          text-[11px]
                          font-medium
                          tracking-[-0.02em]
                        ">
                        {item.value}
                      </p>

                      <p
                        className="
                          mt-1
                          text-[11px]
                          uppercase
                          tracking-[0.12em]
                          text-white/25
                        ">
                        {item.label}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* =================================================
              BENEFITS
          ================================================= */}

          <div
            className="
              grid
              gap-4
              sm:grid-cols-2
            ">
            {benefits.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.number}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-[16px]
                    border
                    border-[#143E33]/[0.08]
                    bg-white
                    p-6
                    shadow-[0_8px_28px_rgba(20,62,51,.035)]
                    transition-all
                    duration-500

                    hover:-translate-y-1
                    hover:border-[#9DD827]/55
                    hover:shadow-[0_20px_45px_rgba(20,62,51,.075)]
                  ">
                  <span
                    className="
                      pointer-events-none
                      absolute
                      -right-2
                      -top-6
                      text-[105px]
                      font-light
                      leading-none
                      tracking-[-0.09em]
                      text-[#7FAE00]/[0.055]
                      transition-colors
                      duration-500

                      group-hover:text-[#7FAE00]/[0.10]
                    ">
                    {item.number}
                  </span>

                  <div className="relative z-10">
                    <div className="flex items-start justify-between gap-5">
                      <span
                        className="
                          flex
                          h-11
                          w-11
                          items-center
                          justify-center
                          rounded-[11px]
                          bg-[#EDF5DF]
                          text-[#78A600]
                          transition-all
                          duration-300

                          group-hover:bg-[#9DD827]
                          group-hover:text-[#143E33]
                        ">
                        <Icon size={18} strokeWidth={1.6} />
                      </span>

                      <span
                        className="
                          flex
                          h-8
                          w-8
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-[#143E33]/10
                          text-[#7FAE00]
                          transition-all
                          duration-300

                          group-hover:border-[#9DD827]
                          group-hover:bg-[#9DD827]
                          group-hover:text-[#143E33]
                        ">
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
                      </span>
                    </div>

                    <div className="mt-8">
                      <div className="flex items-center gap-3">
                        <span
                          className="
                            text-[11px]
                            font-bold
                            tracking-[0.16em]
                            text-[#143E33]/25
                          ">
                          {item.number}
                        </span>

                        <span className="h-px w-7 bg-[#9DD827]" />

                        <span
                          className="
                            text-[11px]
                            font-bold
                            uppercase
                            tracking-[0.17em]
                            text-[#78A500]
                          ">
                          Beneficio
                        </span>
                      </div>

                      <h3
                        className="
                          mt-4
                          text-[clamp(1.4rem,1.8vw,2rem)]
                          font-medium
                          leading-[1]
                          tracking-[-0.04em]
                          text-[#143E33]
                        ">
                        {item.title}
                      </h3>

                      <p
                        className="
                          mt-4
                          max-w-[390px]
                          text-[13px]
                          leading-6
                          text-[#143E33]/47
                        ">
                        {item.description}
                      </p>
                    </div>

                    <div
                      className="
                        mt-7
                        h-px
                        w-full
                        overflow-hidden
                        bg-[#143E33]/[0.07]
                      ">
                      <span
                        className="
                          block
                          h-full
                          w-10
                          bg-[#9DD827]
                          transition-all
                          duration-500

                          group-hover:w-full
                        "
                      />
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* ===================================================
            BOTTOM MESSAGE
        =================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.15 }}
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

            <span
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.17em]
                text-[#143E33]/35
              ">
              Energía diseñada alrededor de la operación
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-[#9DD827]" />

            <span
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.19em]
                text-[#75A300]
              ">
              Performance · Resilience · Control
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default SolarBenefitsSection;
