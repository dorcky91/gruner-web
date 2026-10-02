// import { motion } from "motion/react";
// import {
//   BatteryCharging,
//   CarFront,
//   Gauge,
//   PlugZap,
//   RadioTower,
//   Zap,
// } from "lucide-react";

// const nodes = [
//   {
//     number: "01",
//     code: "GRID",
//     title: "Red eléctrica",
//     subtitle: "Suministro",
//     description:
//       "La solución se integra a la infraestructura eléctrica existente y transforma la conexión a red disponible en una fuente capaz de responder a necesidades de carga de alta potencia.",
//     icon: RadioTower,
//   },
//   {
//     number: "02",
//     code: "BESS",
//     title: "Almacenamiento",
//     subtitle: "Flexibilidad",
//     description:
//       "El almacenamiento inteligente funciona como soporte central: aporta respaldo, ayuda a abatir altas demandas eléctricas y habilita estrategias de respuesta a la demanda.",
//     icon: BatteryCharging,
//   },
//   {
//     number: "03",
//     code: "DCFC",
//     title: "Carga rápida",
//     subtitle: "Potencia",
//     description:
//       "La arquitectura DCFC habilita carga rápida Nivel 3 y Nivel 4, con soluciones de alta potencia de hasta 600 kW.",
//     icon: PlugZap,
//   },
//   {
//     number: "04",
//     code: "EV",
//     title: "Vehículo",
//     subtitle: "Movilidad",
//     description:
//       "La energía llega al vehículo de forma segura, controlada y coordinada con la infraestructura.",
//     icon: CarFront,
//   },
//   {
//     number: "05",
//     code: "EMS",
//     title: "Gestión",
//     subtitle: "EMS + BMS",
//     description:
//       "La gestión energética coordina potencia y operación e integra el sistema de gestión de baterías (BMS) patentado para optimizar demanda, almacenamiento y desempeño de la estación.",
//     icon: Gauge,
//   },
// ];

// function FlowPulse({ delay = 0 }) {
//   return (
//     <motion.span
//       animate={{
//         left: ["-3%", "103%"],
//         opacity: [0, 1, 1, 0],
//       }}
//       transition={{
//         duration: 3.2,
//         delay,
//         repeat: Infinity,
//         repeatDelay: 0.5,
//         ease: "linear",
//       }}
//       className="
//         absolute
//         top-1/2
//         h-2
//         w-2
//         -translate-y-1/2
//         rounded-full
//         bg-[#B8F23A]
//         shadow-[0_0_16px_rgba(184,242,58,.9)]
//       "
//     />
//   );
// }

// function MovilidadInfrastructureSection() {
//   return (
//     <section
//       id="movilidad-capabilities"
//       className="
//         relative
//         overflow-hidden
//         bg-white
//         py-20
//         text-[#143E33]
//         lg:py-24
//       ">
//       {/* background */}
//       <div
//         className="
//           pointer-events-none
//           absolute
//           inset-0
//           opacity-[0.28]
//           [background-image:linear-gradient(rgba(20,62,51,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(20,62,51,.025)_1px,transparent_1px)]
//           [background-size:72px_72px]
//         "
//       />

//       <div
//         className="
//           pointer-events-none
//           absolute
//           -right-[160px]
//           -top-[180px]
//           h-[480px]
//           w-[480px]
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
//           bottom-[-25px]
//           hidden
//           select-none
//           text-[clamp(9rem,17vw,19rem)]
//           font-semibold
//           leading-none
//           tracking-[-0.09em]
//           text-[#143E33]/[0.018]
//           xl:block
//         ">
//         FLOW
//       </span>

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
//         {/* header */}
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
//                 <Zap size={17} strokeWidth={1.7} />
//               </span>

//               <div className="flex items-center gap-3">
//                 <span className="h-px w-8 bg-[#83B500]" />

//                 <p
//                   className="
//                     text-[11px]
//                     font-bold
//                     uppercase
//                     tracking-[0.22em]
//                     text-[#76A400]
//                   ">
//                   Infraestructura de carga
//                 </p>
//               </div>
//             </div>

//             <h2
//               className="
//                 mt-6
//                 max-w-[920px]
//                 text-[clamp(2.7rem,4.3vw,5rem)]
//                 font-normal
//                 leading-[0.94]
//                 tracking-[-0.06em]
//               ">
//               La carga rápida no es
//               <span className="block">solo un cargador.</span>
//               <span className="block text-[#83B500]">
//                 Es un sistema completo.
//               </span>
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
//             Red, almacenamiento, potencia, vehículo y gestión energética deben
//             trabajar juntos para que la infraestructura sea eficiente, escalable
//             y confiable.
//           </p>
//         </motion.div>

//         {/* main flow */}
//         <div
//           className="
//             relative
//             mt-14
//             overflow-hidden
//             rounded-[20px]
//             border
//             border-[#143E33]/[0.08]
//             bg-[#F6F8F2]
//             p-5
//             shadow-[0_24px_70px_rgba(20,62,51,.06)]
//             sm:p-7
//             lg:p-9
//           ">
//           {/* flow line desktop */}
//           <div
//             className="
//               pointer-events-none
//               absolute
//               left-[8%]
//               right-[8%]
//               top-[146px]
//               hidden
//               h-px
//               bg-gradient-to-r
//               from-[#143E33]/10
//               via-[#9DD827]/65
//               to-[#143E33]/10
//               lg:block
//             ">
//             <FlowPulse delay={0} />
//             <FlowPulse delay={1.3} />
//           </div>

//           <div
//             className="
//               relative
//               z-10
//               grid
//               gap-4
//               sm:grid-cols-2
//               lg:grid-cols-5
//             ">
//             {nodes.map((node, index) => {
//               const Icon = node.icon;

//               return (
//                 <motion.article
//                   key={node.code}
//                   initial={{ opacity: 0, y: 18 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{
//                     duration: 0.6,
//                     delay: index * 0.06,
//                   }}
//                   className="
//                     group
//                     relative
//                     min-h-[285px]
//                     overflow-hidden
//                     rounded-[16px]
//                     border
//                     border-[#143E33]/[0.07]
//                     bg-white
//                     p-5
//                     transition-all
//                     duration-400
//                     hover:-translate-y-1
//                     hover:border-[#9DD827]/45
//                     hover:shadow-[0_18px_40px_rgba(20,62,51,.07)]
//                   ">
//                   <span
//                     className="
//                       pointer-events-none
//                       absolute
//                       -right-2
//                       -top-6
//                       text-[92px]
//                       font-light
//                       leading-none
//                       tracking-[-0.09em]
//                       text-[#7FAE00]/[0.05]
//                     ">
//                     {node.number}
//                   </span>

//                   <div className="relative z-10">
//                     <span
//                       className="
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
//                         group-hover:bg-[#9DD827]
//                         group-hover:text-[#143E33]
//                       ">
//                       <Icon size={19} strokeWidth={1.6} />
//                     </span>

//                     <div className="mt-6">
//                       <div className="flex items-center gap-3">
//                         <span
//                           className="
//                             text-[11px]
//                             font-bold
//                             tracking-[0.14em]
//                             text-[#78A500]
//                           ">
//                           {node.number}
//                         </span>

//                         <span className="h-px w-6 bg-[#9DD827]" />

//                         <span
//                           className="
//                             text-[11px]
//                             font-bold
//                             uppercase
//                             tracking-[0.14em]
//                             text-[#78A500]
//                           ">
//                           {node.code}
//                         </span>
//                       </div>

//                       <h3
//                         className="
//                           mt-3
//                           text-[18px]
//                           font-medium
//                           tracking-[-0.035em]
//                         ">
//                         {node.title}
//                       </h3>

//                       <p
//                         className="
//                           mt-1
//                           text-[11px]
//                           font-bold
//                           uppercase
//                           tracking-[0.12em]
//                           text-[#143E33]/28
//                         ">
//                         {node.subtitle}
//                       </p>

//                       <p
//                         className="
//                           mt-4
//                           text-[12px]
//                           leading-5
//                           text-[#143E33]/42
//                         ">
//                         {node.description}
//                       </p>
//                     </div>
//                   </div>
//                 </motion.article>
//               );
//             })}
//           </div>

//           {/* bottom summary */}
//           <div
//             className="
//               mt-6
//               grid
//               overflow-hidden
//               rounded-[14px]
//               bg-[#10372E]
//               text-white
//               sm:grid-cols-3
//             ">
//             {[
//               ["01", "Potencia", "Carga rápida"],
//               ["02", "Flexibilidad", "Storage"],
//               ["03", "Control", "Energy Management"],
//             ].map(([number, title, text], index) => (
//               <div
//                 key={number}
//                 className={`
//                   flex
//                   items-center
//                   gap-4
//                   px-5
//                   py-5

//                   ${
//                     index > 0
//                       ? "border-t border-white/[0.07] sm:border-l sm:border-t-0"
//                       : ""
//                   }
//                 `}>
//                 <span
//                   className="
//                     text-[11px]
//                     font-bold
//                     tracking-[0.14em]
//                     text-[#B8F23A]
//                   ">
//                   {number}
//                 </span>

//                 <div>
//                   <p
//                     className="
//                       text-[11px]
//                       font-bold
//                       uppercase
//                       tracking-[0.13em]
//                       text-white/75
//                     ">
//                     {title}
//                   </p>

//                   <p
//                     className="
//                       mt-1
//                       text-[11px]
//                       uppercase
//                       tracking-[0.11em]
//                       text-white/25
//                     ">
//                     {text}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default MovilidadInfrastructureSection;

import { motion } from "motion/react";
import {
  Activity,
  ArrowRight,
  BatteryCharging,
  CarFront,
  Gauge,
  PlugZap,
  RadioTower,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const infrastructure = {
  grid: {
    number: "01",
    code: "GRID",
    title: "Red eléctrica",
    subtitle: "Suministro",
    description:
      "La solución se integra a la infraestructura eléctrica existente y transforma la conexión a red disponible en una fuente capaz de responder a necesidades de carga de alta potencia.",
    icon: RadioTower,
  },

  bess: {
    number: "02",
    code: "BESS",
    title: "Almacenamiento",
    subtitle: "Flexibilidad",
    description:
      "El almacenamiento inteligente funciona como soporte central: aporta respaldo, ayuda a abatir altas demandas eléctricas y habilita estrategias de respuesta a la demanda.",
    icon: BatteryCharging,
  },

  charging: {
    number: "03",
    code: "DCFC",
    title: "Carga rápida",
    subtitle: "Alta potencia",
    description:
      "La estación convierte la energía disponible en potencia de carga rápida para reducir tiempos y mantener la operación en movimiento.",
    icon: PlugZap,
  },

  vehicle: {
    number: "04",
    code: "EV",
    title: "Vehículo",
    subtitle: "Movilidad",
    description:
      "La energía llega al vehículo de forma segura, controlada y coordinada con la infraestructura.",
    icon: CarFront,
  },

  ems: {
    number: "05",
    code: "EMS",
    title: "Gestión energética",
    subtitle: "EMS + BMS",
    description:
      "El EMS observa demanda, almacenamiento y carga para coordinar cómo responde toda la infraestructura.",
    icon: Gauge,
  },
};

/* =========================================================
   ENERGY PULSE
========================================================= */

function FlowPulse({ delay = 0, reverse = false }) {
  return (
    <motion.span
      animate={{
        left: reverse ? ["102%", "-2%"] : ["-2%", "102%"],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 3.4,
        delay,
        repeat: Infinity,
        repeatDelay: 0.45,
        ease: "linear",
      }}
      className="
        absolute
        top-1/2
        z-20
        h-2
        w-2
        -translate-y-1/2
        rounded-full
        bg-[#B8F23A]
        shadow-[0_0_16px_rgba(184,242,58,.95)]
      "
    />
  );
}

/* =========================================================
   SIDE MODULE
========================================================= */

function SideModule({ data }) {
  const Icon = data.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group
        relative
        min-h-[235px]
        overflow-hidden
        rounded-[17px]
        border
        border-[#143E33]/[0.075]
        bg-white
        p-5
        shadow-[0_10px_30px_rgba(20,62,51,.04)]
        transition-all
        duration-400

        hover:-translate-y-1
        hover:border-[#9DD827]/45
        hover:shadow-[0_20px_45px_rgba(20,62,51,.08)]
      ">
      <span
        className="
          pointer-events-none
          absolute
          -right-2
          -top-7
          text-[100px]
          font-light
          leading-none
          tracking-[-0.09em]
          text-[#7FAE00]/[0.055]
        ">
        {data.number}
      </span>

      <div className="relative z-10">
        <div className="flex items-start justify-between gap-5">
          <span
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-[12px]
              bg-[#EDF5DF]
              text-[#78A500]
              transition-all
              duration-300

              group-hover:bg-[#B8F23A]
              group-hover:text-[#10372E]
            ">
            <Icon size={19} strokeWidth={1.6} />
          </span>

          <span
            className="
              text-[11px]
              font-bold
              uppercase
              tracking-[0.15em]
              text-[#78A500]
            ">
            {data.code}
          </span>
        </div>

        <h3
          className="
            mt-6
            text-[21px]
            font-medium
            tracking-[-0.04em]
          ">
          {data.title}
        </h3>

        <p
          className="
            mt-1
            text-[11px]
            font-bold
            uppercase
            tracking-[0.13em]
            text-[#143E33]/28
          ">
          {data.subtitle}
        </p>

        <p
          className="
            mt-4
            max-w-[330px]
            text-[12px]
            leading-5
            text-[#143E33]/42
          ">
          {data.description}
        </p>
      </div>
    </motion.div>
  );
}

/* =========================================================
   MAIN
========================================================= */

function MovilidadInfrastructureSection() {
  const ChargingIcon = infrastructure.charging.icon;
  const EmsIcon = infrastructure.ems.icon;

  return (
    <section
      id="movilidad-capabilities"
      className="
        relative
        overflow-hidden
        bg-white
        py-20
        text-[#143E33]
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
          opacity-[0.24]
          [background-image:linear-gradient(rgba(20,62,51,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(20,62,51,.025)_1px,transparent_1px)]
          [background-size:72px_72px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[170px]
          -top-[180px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#9DD827]/10
          blur-[110px]
        "
      />

      <span
        className="
          pointer-events-none
          absolute
          -right-5
          bottom-[-28px]
          hidden
          select-none
          text-[clamp(9rem,17vw,19rem)]
          font-semibold
          leading-none
          tracking-[-0.09em]
          text-[#143E33]/[0.018]
          xl:block
        ">
        FLOW
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
                <Zap size={17} strokeWidth={1.7} />
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
                  Infraestructura de carga
                </p>
              </div>
            </div>

            <h2
              className="
                mt-6
                max-w-[930px]
                text-[clamp(2.7rem,4.3vw,5rem)]
                font-normal
                leading-[0.94]
                tracking-[-0.06em]
              ">
              De la red al vehículo.
              <span className="block">Todo debe trabajar</span>
              <span className="block text-[#83B500]">
                como una sola infraestructura.
              </span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p
              className="
                max-w-[420px]
                text-[12px]
                leading-7
                text-[#143E33]/46
              ">
              La carga rápida depende de cómo se conectan suministro,
              almacenamiento, potencia, vehículo y control energético.
            </p>

            <div className="mt-5 flex items-center gap-3">
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
                  text-[#143E33]/35
                ">
                Integrated charging infrastructure
              </span>
            </div>
          </div>
        </motion.div>

        {/* ===================================================
            MAIN STAGE
        =================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{
            duration: 0.8,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mt-14
            overflow-hidden
            rounded-[22px]
            border
            border-[#143E33]/[0.075]
            bg-[#F5F8F1]
            p-5
            shadow-[0_24px_70px_rgba(20,62,51,.06)]

            sm:p-7
            lg:p-8
            xl:p-9
          ">
          {/* =================================================
              TOP MICRO HEADER
          ================================================= */}

          <div
            className="
              relative
              z-20
              flex
              flex-col
              gap-4
              border-b
              border-[#143E33]/[0.07]
              pb-5

              sm:flex-row
              sm:items-center
              sm:justify-between
            ">
            <div className="flex items-center gap-3">
              <Activity
                size={14}
                strokeWidth={1.6}
                className="text-[#78A500]"
              />

              <span
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.17em]
                  text-[#143E33]/35
                ">
                Energy path
              </span>
            </div>

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
                  font-bold
                  uppercase
                  tracking-[0.14em]
                  text-[#143E33]/28
                ">
                Charging system active
              </span>
            </div>
          </div>

          {/* =================================================
              DESKTOP FLOW
          ================================================= */}

          <div className="relative hidden py-10 lg:block">
            <div
              className="
                grid
                grid-cols-[1fr_85px_1fr_95px_1.35fr_95px_1fr]
                items-center
              ">
              {/* GRID */}

              <SideModule data={infrastructure.grid} />

              {/* LINE */}

              <div className="relative flex items-center px-2">
                <div
                  className="
                    relative
                    h-px
                    w-full
                    bg-gradient-to-r
                    from-[#143E33]/10
                    via-[#9DD827]/80
                    to-[#9DD827]
                  ">
                  <FlowPulse delay={0} />

                  <ArrowRight
                    size={12}
                    strokeWidth={1.6}
                    className="
                      absolute
                      -right-1.5
                      top-1/2
                      -translate-y-1/2
                      text-[#83B500]
                    "
                  />
                </div>
              </div>

              {/* BESS */}

              <SideModule data={infrastructure.bess} />

              {/* LINE */}

              <div className="relative flex items-center px-2">
                <div
                  className="
                    relative
                    h-px
                    w-full
                    bg-gradient-to-r
                    from-[#143E33]/10
                    via-[#9DD827]/80
                    to-[#9DD827]
                  ">
                  <FlowPulse delay={0.8} />

                  <ArrowRight
                    size={12}
                    strokeWidth={1.6}
                    className="
                      absolute
                      -right-1.5
                      top-1/2
                      -translate-y-1/2
                      text-[#83B500]
                    "
                  />
                </div>
              </div>

              {/* =============================================
                  CHARGING PROTAGONIST
              ============================================= */}

              <div
                className="
                  relative
                  min-h-[330px]
                  overflow-hidden
                  rounded-[19px]
                  bg-[#10372E]
                  p-6
                  text-white
                  shadow-[0_24px_55px_rgba(16,55,46,.15)]
                ">
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-[0.14]
                    [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)]
                    [background-size:34px_34px]
                  "
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16
                    h-52
                    w-52
                    rounded-full
                    bg-[#B8F23A]/15
                    blur-[65px]
                  "
                />

                <span
                  className="
                    pointer-events-none
                    absolute
                    -right-3
                    -top-8
                    text-[140px]
                    font-light
                    leading-none
                    tracking-[-0.09em]
                    text-[#B8F23A]/[0.05]
                  ">
                  03
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
                        h-13
                        w-13
                        items-center
                        justify-center
                        rounded-[13px]
                        bg-[#B8F23A]
                        text-[#10372E]
                      ">
                      <ChargingIcon size={21} strokeWidth={1.7} />
                    </span>

                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        rounded-full
                        border
                        border-white/10
                        bg-white/[0.045]
                        px-3
                        py-2
                      ">
                      <span className="relative flex h-1.5 w-1.5">
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
                            h-1.5
                            w-1.5
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
                          text-white/40
                        ">
                        DCFC Active
                      </span>
                    </div>
                  </div>

                  <div className="mt-7">
                    <div className="flex items-center gap-3">
                      <span className="h-px w-7 bg-[#B8F23A]" />

                      <span
                        className="
                          text-[11px]
                          font-bold
                          uppercase
                          tracking-[0.17em]
                          text-[#B8F23A]
                        ">
                        03 · DC Fast Charging
                      </span>
                    </div>

                    <h3
                      className="
                        mt-4
                        text-[32px]
                        font-normal
                        leading-[0.95]
                        tracking-[-0.05em]
                      ">
                      Alta potencia
                      <span className="block text-[#B8F23A]">
                        donde importa.
                      </span>
                    </h3>

                    <p
                      className="
                        mt-4
                        max-w-[430px]
                        text-[12px]
                        leading-5
                        text-white/42
                      ">
                      {infrastructure.charging.description}
                    </p>
                  </div>

                  <div
                    className="
                      mt-auto
                      grid
                      grid-cols-3
                      gap-2
                      border-t
                      border-white/[0.08]
                      pt-5
                    ">
                    {[
                      ["DCFC", "Tecnología"],
                      ["600 kW", "Potencia"],
                      ["FAST", "Carga"],
                    ].map(([value, label]) => (
                      <div
                        key={value}
                        className="
                          rounded-[9px]
                          border
                          border-white/[0.06]
                          bg-white/[0.035]
                          p-3
                        ">
                        <p
                          className="
                            text-[13px]
                            font-medium
                            tracking-[-0.02em]
                            text-[#B8F23A]
                          ">
                          {value}
                        </p>

                        <p
                          className="
                            mt-1
                            text-[11px]
                            uppercase
                            tracking-[0.11em]
                            text-white/22
                          ">
                          {label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* LINE */}

              <div className="relative flex items-center px-2">
                <div
                  className="
                    relative
                    h-px
                    w-full
                    bg-gradient-to-r
                    from-[#9DD827]
                    via-[#9DD827]/75
                    to-[#143E33]/10
                  ">
                  <FlowPulse delay={1.5} />

                  <ArrowRight
                    size={12}
                    strokeWidth={1.6}
                    className="
                      absolute
                      -right-1.5
                      top-1/2
                      -translate-y-1/2
                      text-[#83B500]
                    "
                  />
                </div>
              </div>

              {/* VEHICLE */}

              <SideModule data={infrastructure.vehicle} />
            </div>

            {/* =================================================
                EMS CONTROL LAYER
            ================================================= */}

            <div
              className="
                relative
                mx-auto
                mt-8
                max-w-[1080px]
              ">
              <div
                className="
                  absolute
                  left-1/2
                  top-[-32px]
                  h-8
                  w-px
                  -translate-x-1/2
                  bg-gradient-to-b
                  from-[#9DD827]
                  to-[#9DD827]/20
                ">
                <motion.span
                  animate={{
                    top: ["0%", "90%"],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="
                    absolute
                    left-1/2
                    h-2
                    w-2
                    -translate-x-1/2
                    rounded-full
                    bg-[#9DD827]
                    shadow-[0_0_14px_rgba(157,216,39,.8)]
                  "
                />
              </div>

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[17px]
                  border
                  border-[#143E33]/[0.07]
                  bg-white
                  p-5
                  shadow-[0_14px_35px_rgba(20,62,51,.045)]
                ">
                <div
                  className="
                    grid
                    gap-6
                    xl:grid-cols-[1fr_auto_1fr]
                    xl:items-center
                  ">
                  {/* EMS */}

                  <div className="flex items-start gap-4">
                    <span
                      className="
                        flex
                        h-12
                        w-12
                        shrink-0
                        items-center
                        justify-center
                        rounded-[12px]
                        bg-[#EDF5DF]
                        text-[#78A500]
                      ">
                      <EmsIcon size={19} strokeWidth={1.6} />
                    </span>

                    <div>
                      <div className="flex items-center gap-3">
                        <span
                          className="
                            text-[11px]
                            font-bold
                            tracking-[0.14em]
                            text-[#78A500]
                          ">
                          05
                        </span>

                        <span
                          className="
                            text-[11px]
                            font-bold
                            uppercase
                            tracking-[0.15em]
                            text-[#78A500]
                          ">
                          EMS
                        </span>
                      </div>

                      <h3
                        className="
                          mt-2
                          text-[20px]
                          font-medium
                          tracking-[-0.035em]
                        ">
                        Gestión energética
                      </h3>

                      <p
                        className="
                          mt-2
                          max-w-[470px]
                          text-[12px]
                          leading-5
                          text-[#143E33]/40
                        ">
                        {infrastructure.ems.description}
                      </p>
                    </div>
                  </div>

                  <div
                    className="
                      hidden
                      h-16
                      w-px
                      bg-[#143E33]/[0.07]
                      xl:block
                    "
                  />

                  {/* STATUS */}

                  <div
                    className="
                      grid
                      grid-cols-3
                      gap-2
                    ">
                    {[
                      ["Demanda", "Coordinada"],
                      ["Potencia", "Gestionada"],
                      ["Carga", "Optimizada"],
                    ].map(([label, value]) => (
                      <div
                        key={label}
                        className="
                          rounded-[10px]
                          bg-[#F4F7EF]
                          p-3
                        ">
                        <p
                          className="
                            text-[11px]
                            font-semibold
                            uppercase
                            tracking-[0.11em]
                            text-[#143E33]/28
                          ">
                          {label}
                        </p>

                        <p
                          className="
                            mt-2
                            text-[11px]
                            font-bold
                            uppercase
                            tracking-[0.11em]
                            text-[#78A500]
                          ">
                          {value}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              MOBILE
          ================================================= */}

          <div className="relative py-6 lg:hidden">
            <div className="space-y-4">
              <SideModule data={infrastructure.grid} />

              <div className="mx-auto h-8 w-px bg-[#9DD827]/50" />

              <SideModule data={infrastructure.bess} />

              <div className="mx-auto h-8 w-px bg-[#9DD827]/50" />

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[18px]
                  bg-[#10372E]
                  p-6
                  text-white
                ">
                <span
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-[12px]
                    bg-[#B8F23A]
                    text-[#10372E]
                  ">
                  <ChargingIcon size={20} strokeWidth={1.7} />
                </span>

                <p
                  className="
                    mt-6
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.17em]
                    text-[#B8F23A]
                  ">
                  03 · DC Fast Charging
                </p>

                <h3
                  className="
                    mt-3
                    text-[30px]
                    font-normal
                    leading-none
                    tracking-[-0.05em]
                  ">
                  Alta potencia.
                </h3>

                <p
                  className="
                    mt-4
                    text-[12px]
                    leading-5
                    text-white/42
                  ">
                  {infrastructure.charging.description}
                </p>

                <div
                  className="
                    mt-6
                    grid
                    grid-cols-3
                    gap-2
                  ">
                  {[
                    ["DCFC", "Tecnología"],
                    ["600 kW", "Potencia"],
                    ["FAST", "Carga"],
                  ].map(([value, label]) => (
                    <div
                      key={value}
                      className="
                        rounded-[9px]
                        border
                        border-white/[0.07]
                        bg-white/[0.035]
                        p-3
                      ">
                      <p
                        className="
                          text-[12px]
                          font-medium
                          text-[#B8F23A]
                        ">
                        {value}
                      </p>

                      <p
                        className="
                          mt-1
                          text-[11px]
                          uppercase
                          tracking-[0.1em]
                          text-white/22
                        ">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mx-auto h-8 w-px bg-[#9DD827]/50" />

              <SideModule data={infrastructure.vehicle} />

              <div className="mx-auto h-8 w-px bg-[#9DD827]/50" />

              <div
                className="
                  rounded-[17px]
                  border
                  border-[#143E33]/[0.07]
                  bg-white
                  p-5
                ">
                <div className="flex items-start gap-4">
                  <span
                    className="
                      flex
                      h-11
                      w-11
                      shrink-0
                      items-center
                      justify-center
                      rounded-[11px]
                      bg-[#EDF5DF]
                      text-[#78A500]
                    ">
                    <EmsIcon size={18} strokeWidth={1.6} />
                  </span>

                  <div>
                    <p
                      className="
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.14em]
                        text-[#78A500]
                      ">
                      05 · EMS
                    </p>

                    <h3
                      className="
                        mt-2
                        text-[19px]
                        font-medium
                        tracking-[-0.035em]
                      ">
                      Gestión energética
                    </h3>

                    <p
                      className="
                        mt-2
                        text-[12px]
                        leading-5
                        text-[#143E33]/40
                      ">
                      {infrastructure.ems.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =================================================
              FOOTER STRIP
          ================================================= */}

          <div
            className="
              relative
              z-20
              grid
              overflow-hidden
              rounded-[14px]
              bg-[#10372E]
              text-white
              sm:grid-cols-3
            ">
            {[
              ["01", "Potencia", "Carga rápida"],
              ["02", "Flexibilidad", "Storage"],
              ["03", "Control", "Energy Management"],
            ].map(([number, title, text], index) => (
              <div
                key={number}
                className={`
                  flex
                  items-center
                  gap-4
                  px-5
                  py-5

                  ${
                    index > 0
                      ? "border-t border-white/[0.07] sm:border-l sm:border-t-0"
                      : ""
                  }
                `}>
                <span
                  className="
                    text-[11px]
                    font-bold
                    tracking-[0.14em]
                    text-[#B8F23A]
                  ">
                  {number}
                </span>

                <div>
                  <p
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.13em]
                      text-white/75
                    ">
                    {title}
                  </p>

                  <p
                    className="
                      mt-1
                      text-[11px]
                      uppercase
                      tracking-[0.11em]
                      text-white/25
                    ">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ===================================================
            BOTTOM MICRO
        =================================================== */}

        <div
          className="
            mt-7
            flex
            flex-col
            gap-4
            sm:flex-row
            sm:items-center
            sm:justify-between
          ">
          <div className="flex items-center gap-3">
            <ShieldCheck
              size={12}
              strokeWidth={1.5}
              className="text-[#83B500]"
            />

            <span
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-[#143E33]/30
              ">
              Grid · Storage · Charging · Vehicle · Control
            </span>
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
              One connected infrastructure
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MovilidadInfrastructureSection;
