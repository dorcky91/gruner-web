// import { AnimatePresence, motion } from "motion/react";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   Building2,
//   BusFront,
//   CarFront,
//   Check,
//   Clock3,
//   Factory,
//   Gauge,
//   MapPin,
//   PlugZap,
//   ShoppingBag,
//   Sparkles,
//   Zap,
// } from "lucide-react";
// import { useState } from "react";

// import commercialImage from "../../assets/images/movilidad/movilidad-commercial.jpg";
// import fleetImage from "../../assets/images/movilidad/movilidad-fleet.jpg";
// import hubImage from "../../assets/images/movilidad/movilidad-hub.jpg";
// import realEstateImage from "../../assets/images/movilidad/movilidad-real-estate.jpg";

// /* =========================================================
//    DATA
// ========================================================= */

// const scenarios = [
//   {
//     id: "flotillas",
//     number: "01",
//     code: "FLEET",
//     eyebrow: "Flotillas",
//     title: "La operación no puede esperar a que el vehículo cargue.",
//     description:
//       "Electrificar una flotilla implica coordinar vehículos, rutas, ventanas de carga y potencia disponible sin comprometer la continuidad operativa.",
//     statement:
//       "La infraestructura se diseña alrededor del horario de la flotilla, no al revés.",
//     icon: BusFront,
//     image: fleetImage,

//     profile: {
//       label: "Perfil operativo",
//       value: "Alta utilización",
//     },

//     charging: {
//       label: "Estrategia",
//       value: "Depot Charging",
//     },

//     priorities: [
//       "Ventanas de carga",
//       "Gestión de potencia",
//       "Disponibilidad vehicular",
//     ],

//     tags: ["Logística", "Transporte", "Flotillas corporativas"],
//   },

//   {
//     id: "comercial",
//     number: "02",
//     code: "RETAIL",
//     eyebrow: "Comercial",
//     title: "La carga puede convertirse en parte de la experiencia.",
//     description:
//       "Centros comerciales, hoteles, restaurantes y espacios de servicio pueden integrar infraestructura de carga para generar valor adicional durante la permanencia del usuario.",
//     statement:
//       "La velocidad de carga debe responder al tiempo real que el usuario permanece en el lugar.",
//     icon: ShoppingBag,
//     image: commercialImage,

//     profile: {
//       label: "Perfil operativo",
//       value: "Carga pública",
//     },

//     charging: {
//       label: "Estrategia",
//       value: "Destination",
//     },

//     priorities: ["Experiencia de usuario", "Disponibilidad", "Escalabilidad"],

//     tags: ["Retail", "Hotelería", "Estacionamientos"],
//   },

//   {
//     id: "hubs",
//     number: "03",
//     code: "HUB",
//     eyebrow: "Charging Hubs",
//     title: "Más vehículos. Más potencia. Menos tiempo detenido.",
//     description:
//       "Los hubs de carga rápida concentran múltiples cargadores y altas demandas de potencia dentro de una misma infraestructura.",
//     statement:
//       "Aquí, administrar la potencia es tan importante como instalar los cargadores.",
//     icon: PlugZap,
//     image: hubImage,

//     profile: {
//       label: "Perfil operativo",
//       value: "Alta potencia",
//     },

//     charging: {
//       label: "Estrategia",
//       value: "DC Fast",
//     },

//     priorities: ["Carga simultánea", "Peak management", "Alta disponibilidad"],

//     tags: ["DCFC", "BESS", "Carga pública"],
//   },

//   {
//     id: "real-estate",
//     number: "04",
//     code: "REAL ESTATE",
//     eyebrow: "Desarrollos",
//     title: "Los edificios también tienen que prepararse para moverse.",
//     description:
//       "La movilidad eléctrica empieza a formar parte de la infraestructura base de desarrollos residenciales, corporativos e inmobiliarios.",
//     statement:
//       "Preparar hoy la infraestructura evita reconstruirla conforme aumenta la adopción de vehículos eléctricos.",
//     icon: Building2,
//     image: realEstateImage,

//     profile: {
//       label: "Perfil operativo",
//       value: "Crecimiento",
//     },

//     charging: {
//       label: "Estrategia",
//       value: "EV Ready",
//     },

//     priorities: [
//       "Load management",
//       "Expansión futura",
//       "Infraestructura común",
//     ],

//     tags: ["Residencial", "Corporativo", "Mixed-use"],
//   },
// ];

// /* =========================================================
//    MAIN
// ========================================================= */

// function MovilidadScenariosSection() {
//   const [activeId, setActiveId] = useState(scenarios[0].id);

//   const activeScenario =
//     scenarios.find((scenario) => scenario.id === activeId) || scenarios[0];

//   const ActiveIcon = activeScenario.icon;

//   return (
//     <section
//       id="movilidad-escenarios"
//       className="
//         relative
//         overflow-hidden
//         bg-[#F4F7F0]
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
//           opacity-[0.28]
//           [background-image:linear-gradient(rgba(20,62,51,.027)_1px,transparent_1px),linear-gradient(90deg,rgba(20,62,51,.027)_1px,transparent_1px)]
//           [background-size:72px_72px]
//         "
//       />

//       <div
//         className="
//           pointer-events-none
//           absolute
//           -left-[180px]
//           top-[20%]
//           h-[470px]
//           w-[470px]
//           rounded-full
//           bg-[#9DD827]/[0.08]
//           blur-[115px]
//         "
//       />

//       <span
//         className="
//           pointer-events-none
//           absolute
//           -right-7
//           top-[45px]
//           hidden
//           select-none
//           text-[clamp(9rem,17vw,19rem)]
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
//                 <CarFront size={17} strokeWidth={1.6} />
//               </span>

//               <div className="flex items-center gap-3">
//                 <span className="h-px w-8 bg-[#83B500]" />

//                 <p
//                   className="
//                     text-[8px]
//                     font-bold
//                     uppercase
//                     tracking-[0.22em]
//                     text-[#76A400]
//                   ">
//                   Escenarios de movilidad
//                 </p>
//               </div>
//             </div>

//             <h2
//               className="
//                 mt-6
//                 max-w-[930px]
//                 text-[clamp(2.8rem,4.4vw,5.2rem)]
//                 font-normal
//                 leading-[0.93]
//                 tracking-[-0.06em]
//               ">
//               No todos cargan igual.
//               <span className="block">No deberían tener</span>
//               <span className="block text-[#83B500]">
//                 la misma infraestructura.
//               </span>
//             </h2>
//           </div>

//           <div className="lg:pb-2">
//             <p
//               className="
//                 max-w-[420px]
//                 text-[12px]
//                 leading-7
//                 text-[#143E33]/46
//               ">
//               El número de vehículos, tiempo disponible, ubicación y perfil de
//               uso determinan cómo debe diseñarse cada solución de carga.
//             </p>

//             <div className="mt-5 flex items-center gap-3">
//               <Sparkles
//                 size={12}
//                 strokeWidth={1.5}
//                 className="text-[#83B500]"
//               />

//               <span
//                 className="
//                   text-[7px]
//                   font-bold
//                   uppercase
//                   tracking-[0.17em]
//                   text-[#143E33]/32
//                 ">
//                 Designed around mobility
//               </span>
//             </div>
//           </div>
//         </motion.div>

//         {/* ===================================================
//             EXPERIENCE
//         =================================================== */}

//         <motion.div
//           initial={{ opacity: 0, y: 28 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, amount: 0.1 }}
//           transition={{
//             duration: 0.8,
//             delay: 0.08,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="
//             mt-14
//             grid
//             overflow-hidden
//             rounded-[24px]
//             border
//             border-[#143E33]/[0.07]
//             bg-white
//             shadow-[0_28px_80px_rgba(20,62,51,.08)]

//             lg:grid-cols-[1.25fr_.75fr]
//           ">
//           {/* =================================================
//               LEFT VISUAL
//           ================================================= */}

//           <div
//             className="
//               relative
//               min-h-[610px]
//               overflow-hidden

//               sm:min-h-[680px]
//               lg:min-h-[720px]
//             ">
//             {/* IMAGE */}

//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeScenario.id}
//                 initial={{
//                   opacity: 0,
//                   scale: 1.035,
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
//                   duration: 0.65,
//                   ease: [0.22, 1, 0.36, 1],
//                 }}
//                 className="absolute inset-0">
//                 <img
//                   src={activeScenario.image}
//                   alt={activeScenario.title}
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
//                     from-[#092B23]/95
//                     via-[#092B23]/20
//                     to-[#092B23]/5
//                   "
//                 />

//                 <div
//                   className="
//                     absolute
//                     inset-0
//                     bg-gradient-to-r
//                     from-[#092B23]/25
//                     via-transparent
//                     to-transparent
//                   "
//                 />
//               </motion.div>
//             </AnimatePresence>

//             {/* BIG NUMBER */}

//             <AnimatePresence mode="wait">
//               <motion.span
//                 key={`number-${activeScenario.number}`}
//                 initial={{ opacity: 0, x: -30 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: 20 }}
//                 transition={{ duration: 0.45 }}
//                 className="
//                   pointer-events-none
//                   absolute
//                   -left-4
//                   top-[100px]
//                   z-10
//                   hidden
//                   select-none
//                   text-[clamp(9rem,14vw,16rem)]
//                   font-light
//                   leading-none
//                   tracking-[-0.095em]
//                   text-white/[0.065]

//                   xl:block
//                 ">
//                 {activeScenario.number}
//               </motion.span>
//             </AnimatePresence>

//             {/* TOP BAR */}

//             <div
//               className="
//                 absolute
//                 left-6
//                 right-6
//                 top-6
//                 z-20
//                 flex
//                 items-start
//                 justify-between
//                 gap-4

//                 sm:left-8
//                 sm:right-8
//                 sm:top-8
//               ">
//               <div
//                 className="
//                   flex
//                   items-center
//                   gap-3
//                   rounded-full
//                   border
//                   border-white/20
//                   bg-white/92
//                   px-4
//                   py-2.5
//                   text-[#143E33]
//                   shadow-[0_8px_25px_rgba(0,0,0,.06)]
//                   backdrop-blur-xl
//                 ">
//                 <span
//                   className="
//                     flex
//                     h-7
//                     w-7
//                     items-center
//                     justify-center
//                     rounded-full
//                     bg-[#EAF3DC]
//                     text-[#78A500]
//                   ">
//                   <ActiveIcon size={13} strokeWidth={1.7} />
//                 </span>

//                 <span
//                   className="
//                     text-[7px]
//                     font-bold
//                     uppercase
//                     tracking-[0.16em]
//                   ">
//                   {activeScenario.eyebrow}
//                 </span>
//               </div>

//               <div
//                 className="
//                   flex
//                   items-center
//                   gap-3
//                   rounded-full
//                   border
//                   border-white/15
//                   bg-[#10372E]/65
//                   px-4
//                   py-2.5
//                   backdrop-blur-xl
//                 ">
//                 <span className="relative flex h-2 w-2">
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
//                       h-2
//                       w-2
//                       rounded-full
//                       bg-[#B8F23A]
//                     "
//                   />
//                 </span>

//                 <span
//                   className="
//                     text-[6px]
//                     font-bold
//                     uppercase
//                     tracking-[0.15em]
//                     text-[#B8F23A]
//                   ">
//                   {activeScenario.code}
//                 </span>
//               </div>
//             </div>

//             {/* =================================================
//                 FLOATING INFO
//             ================================================= */}

//             <div
//               className="
//                 absolute
//                 right-7
//                 top-[30%]
//                 z-20
//                 hidden
//                 w-[220px]
//                 rounded-[14px]
//                 border
//                 border-white/15
//                 bg-[#10372E]/70
//                 p-4
//                 text-white
//                 shadow-[0_14px_35px_rgba(0,0,0,.12)]
//                 backdrop-blur-xl

//                 xl:block
//               ">
//               <div className="flex items-center gap-3">
//                 <Clock3
//                   size={14}
//                   strokeWidth={1.6}
//                   className="text-[#B8F23A]"
//                 />

//                 <span
//                   className="
//                     text-[6px]
//                     font-bold
//                     uppercase
//                     tracking-[0.15em]
//                     text-white/35
//                   ">
//                   {activeScenario.profile.label}
//                 </span>
//               </div>

//               <p
//                 className="
//                   mt-4
//                   text-[17px]
//                   font-medium
//                   tracking-[-0.03em]
//                   text-white
//                 ">
//                 {activeScenario.profile.value}
//               </p>

//               <div
//                 className="
//                   mt-4
//                   border-t
//                   border-white/10
//                   pt-4
//                 ">
//                 <div className="flex items-center gap-3">
//                   <Gauge
//                     size={13}
//                     strokeWidth={1.6}
//                     className="text-[#B8F23A]"
//                   />

//                   <span
//                     className="
//                       text-[6px]
//                       font-bold
//                       uppercase
//                       tracking-[0.14em]
//                       text-white/30
//                     ">
//                     {activeScenario.charging.label}
//                   </span>
//                 </div>

//                 <p
//                   className="
//                     mt-2
//                     text-[9px]
//                     font-bold
//                     uppercase
//                     tracking-[0.12em]
//                     text-[#B8F23A]
//                   ">
//                   {activeScenario.charging.value}
//                 </p>
//               </div>
//             </div>

//             {/* =================================================
//                 BOTTOM CONTENT
//             ================================================= */}

//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={`content-${activeScenario.id}`}
//                 initial={{ opacity: 0, y: 18 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: 8 }}
//                 transition={{
//                   duration: 0.45,
//                   delay: 0.07,
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
//                 <div className="flex items-center gap-3">
//                   <span className="h-px w-8 bg-[#B8F23A]" />

//                   <span
//                     className="
//                       text-[7px]
//                       font-bold
//                       uppercase
//                       tracking-[0.19em]
//                       text-[#B8F23A]
//                     ">
//                     {activeScenario.number} · {activeScenario.eyebrow}
//                   </span>
//                 </div>

//                 <h3
//                   className="
//                     mt-4
//                     max-w-[850px]
//                     text-[clamp(2.3rem,3.9vw,4.7rem)]
//                     font-normal
//                     leading-[0.92]
//                     tracking-[-0.06em]
//                     text-white
//                   ">
//                   {activeScenario.title}
//                 </h3>

//                 <div
//                   className="
//                     mt-6
//                     grid
//                     gap-6

//                     xl:grid-cols-[1fr_330px]
//                     xl:items-end
//                   ">
//                   <p
//                     className="
//                       max-w-[700px]
//                       text-[11px]
//                       leading-6
//                       text-white/52
//                     ">
//                     {activeScenario.description}
//                   </p>

//                   <div
//                     className="
//                       border-t
//                       border-white/15
//                       pt-5

//                       xl:border-l
//                       xl:border-t-0
//                       xl:pl-6
//                       xl:pt-0
//                     ">
//                     <p
//                       className="
//                         text-[7px]
//                         font-bold
//                         uppercase
//                         tracking-[0.16em]
//                         text-[#B8F23A]
//                       ">
//                       Punto clave
//                     </p>

//                     <p
//                       className="
//                         mt-3
//                         text-[10px]
//                         leading-5
//                         text-white/45
//                       ">
//                       {activeScenario.statement}
//                     </p>
//                   </div>
//                 </div>

//                 {/* TAGS */}

//                 <div
//                   className="
//                     mt-6
//                     flex
//                     flex-wrap
//                     gap-2
//                   ">
//                   {activeScenario.tags.map((tag) => (
//                     <span
//                       key={tag}
//                       className="
//                         rounded-full
//                         border
//                         border-white/15
//                         bg-white/[0.06]
//                         px-3
//                         py-1.5
//                         text-[6px]
//                         font-semibold
//                         uppercase
//                         tracking-[0.12em]
//                         text-white/55
//                         backdrop-blur-md
//                       ">
//                       {tag}
//                     </span>
//                   ))}
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>

//           {/* =================================================
//               RIGHT SELECTOR
//           ================================================= */}

//           <div
//             className="
//               relative
//               flex
//               flex-col
//               bg-white
//             ">
//             {/* SELECTOR HEADER */}

//             <div
//               className="
//                 flex
//                 items-center
//                 justify-between
//                 gap-5
//                 border-b
//                 border-[#143E33]/[0.07]
//                 px-6
//                 py-6
//               ">
//               <div>
//                 <p
//                   className="
//                     text-[7px]
//                     font-bold
//                     uppercase
//                     tracking-[0.18em]
//                     text-[#143E33]/35
//                   ">
//                   Selecciona una operación
//                 </p>

//                 <p
//                   className="
//                     mt-1
//                     text-[6px]
//                     uppercase
//                     tracking-[0.12em]
//                     text-[#143E33]/20
//                   ">
//                   Charging scenarios
//                 </p>
//               </div>

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

//             {/* SELECTORS */}

//             <div className="flex-1">
//               {scenarios.map((scenario) => {
//                 const Icon = scenario.icon;
//                 const isActive = activeId === scenario.id;

//                 return (
//                   <button
//                     key={scenario.id}
//                     type="button"
//                     onClick={() => setActiveId(scenario.id)}
//                     className={`
//                       group
//                       relative
//                       flex
//                       w-full
//                       items-center
//                       gap-4
//                       border-b
//                       border-[#143E33]/[0.065]
//                       px-5
//                       py-6
//                       text-left
//                       transition-all
//                       duration-400

//                       last:border-b-0

//                       ${
//                         isActive
//                           ? `
//                             bg-[#10372E]
//                             text-white
//                           `
//                           : `
//                             bg-white
//                             text-[#143E33]

//                             hover:bg-[#EDF4E5]
//                           `
//                       }
//                     `}>
//                     {/* ACTIVE BAR */}

//                     {isActive && (
//                       <motion.span
//                         layoutId="mobility-scenario-indicator"
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

//                     {/* ICON */}

//                     <span
//                       className={`
//                         flex
//                         h-11
//                         w-11
//                         shrink-0
//                         items-center
//                         justify-center
//                         rounded-[11px]
//                         transition-all
//                         duration-300

//                         ${
//                           isActive
//                             ? `
//                               bg-[#B8F23A]
//                               text-[#10372E]
//                             `
//                             : `
//                               bg-[#EDF5DF]
//                               text-[#78A500]

//                               group-hover:bg-[#B8F23A]
//                               group-hover:text-[#10372E]
//                             `
//                         }
//                       `}>
//                       <Icon size={17} strokeWidth={1.6} />
//                     </span>

//                     {/* CONTENT */}

//                     <div className="min-w-0 flex-1">
//                       <div className="flex items-center gap-3">
//                         <span
//                           className={`
//                             text-[6px]
//                             font-bold
//                             tracking-[0.14em]

//                             ${isActive ? "text-[#B8F23A]" : "text-[#143E33]/25"}
//                           `}>
//                           {scenario.number}
//                         </span>

//                         <span
//                           className={`
//                             text-[6px]
//                             font-bold
//                             uppercase
//                             tracking-[0.14em]

//                             ${isActive ? "text-[#B8F23A]" : "text-[#78A500]"}
//                           `}>
//                           {scenario.code}
//                         </span>
//                       </div>

//                       <p
//                         className="
//                           mt-2
//                           text-[14px]
//                           font-semibold
//                           tracking-[-0.02em]
//                         ">
//                         {scenario.eyebrow}
//                       </p>

//                       <p
//                         className={`
//                           mt-1
//                           max-w-[300px]
//                           text-[8px]
//                           leading-4

//                           ${isActive ? "text-white/35" : "text-[#143E33]/35"}
//                         `}>
//                         {scenario.title}
//                       </p>
//                     </div>

//                     <span
//                       className={`
//                         flex
//                         h-8
//                         w-8
//                         shrink-0
//                         items-center
//                         justify-center
//                         rounded-full
//                         border
//                         transition-all
//                         duration-300

//                         ${
//                           isActive
//                             ? `
//                               border-white/15
//                               text-[#B8F23A]
//                             `
//                             : `
//                               border-[#143E33]/10
//                               text-[#143E33]/25
//                             `
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
//                   </button>
//                 );
//               })}
//             </div>

//             {/* =================================================
//                 BOTTOM PANEL
//             ================================================= */}

//             <div
//               className="
//                 relative
//                 overflow-hidden
//                 bg-[#EDF4E5]
//                 p-6
//               ">
//               <div
//                 className="
//                   pointer-events-none
//                   absolute
//                   -right-12
//                   -top-12
//                   h-36
//                   w-36
//                   rounded-full
//                   bg-[#B8F23A]/20
//                   blur-[50px]
//                 "
//               />

//               <div className="relative z-10">
//                 <div className="flex items-center gap-3">
//                   <MapPin
//                     size={14}
//                     strokeWidth={1.6}
//                     className="text-[#78A500]"
//                   />

//                   <span
//                     className="
//                       text-[7px]
//                       font-bold
//                       uppercase
//                       tracking-[0.16em]
//                       text-[#143E33]/40
//                     ">
//                     Una pregunta primero
//                   </span>
//                 </div>

//                 <p
//                   className="
//                     mt-4
//                     max-w-[330px]
//                     text-[17px]
//                     font-medium
//                     leading-[1.15]
//                     tracking-[-0.03em]
//                   ">
//                   ¿Cómo se mueven realmente tus vehículos?
//                 </p>

//                 <p
//                   className="
//                     mt-3
//                     max-w-[330px]
//                     text-[9px]
//                     leading-5
//                     text-[#143E33]/40
//                   ">
//                   Esa respuesta define potencia, cantidad de cargadores,
//                   horarios y estrategia energética.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </motion.div>

//         {/* ===================================================
//             PRIORITIES
//         =================================================== */}

//         <div
//           className="
//             mt-7
//             grid
//             overflow-hidden
//             rounded-[15px]
//             border
//             border-[#143E33]/[0.07]
//             bg-white
//             shadow-[0_10px_35px_rgba(20,62,51,.04)]

//             sm:grid-cols-3
//           ">
//           <AnimatePresence mode="wait">
//             {activeScenario.priorities.map((priority, index) => (
//               <motion.div
//                 key={`${activeScenario.id}-${priority}`}
//                 initial={{
//                   opacity: 0,
//                   y: 8,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 transition={{
//                   duration: 0.35,
//                   delay: index * 0.06,
//                 }}
//                 className={`
//                   flex
//                   items-center
//                   gap-4
//                   px-5
//                   py-5

//                   ${
//                     index > 0
//                       ? "border-t border-[#143E33]/[0.07] sm:border-l sm:border-t-0"
//                       : ""
//                   }
//                 `}>
//                 <span
//                   className="
//                     flex
//                     h-9
//                     w-9
//                     items-center
//                     justify-center
//                     rounded-full
//                     bg-[#EDF5DF]
//                     text-[#78A500]
//                   ">
//                   <Check size={13} strokeWidth={1.8} />
//                 </span>

//                 <div>
//                   <p
//                     className="
//                       text-[6px]
//                       font-bold
//                       uppercase
//                       tracking-[0.14em]
//                       text-[#78A500]
//                     ">
//                     0{index + 1}
//                   </p>

//                   <p
//                     className="
//                       mt-1
//                       text-[8px]
//                       font-semibold
//                       uppercase
//                       tracking-[0.11em]
//                       text-[#143E33]/55
//                     ">
//                     {priority}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </div>

//         {/* ===================================================
//             MICRO FOOTER
//         =================================================== */}

//         <div
//           className="
//             mt-7
//             flex
//             flex-col
//             gap-4

//             sm:flex-row
//             sm:items-center
//             sm:justify-between
//           ">
//           <div className="flex items-center gap-3">
//             <Zap size={12} strokeWidth={1.5} className="text-[#83B500]" />

//             <span
//               className="
//                 text-[7px]
//                 font-semibold
//                 uppercase
//                 tracking-[0.16em]
//                 text-[#143E33]/30
//               ">
//               La infraestructura sigue a la operación
//             </span>
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
//               Fleet · Retail · Hubs · Real Estate
//             </span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default MovilidadScenariosSection;

import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  BusFront,
  CarFront,
  Check,
  Clock3,
  Factory,
  Gauge,
  MapPin,
  PlugZap,
  ShoppingBag,
  Sparkles,
  Zap,
} from "lucide-react";
import { useState } from "react";

import commercialImage from "../../assets/images/movilidad/movilidad-commercial.jpg";
import fleetImage from "../../assets/images/movilidad/movilidad-fleet.jpg";
import hubImage from "../../assets/images/movilidad/movilidad-hub.jpg";
import realEstateImage from "../../assets/images/movilidad/movilidad-real-estate.jpg";

/* =========================================================
   DATA
========================================================= */

const scenarios = [
  {
    id: "flotillas",
    number: "01",
    code: "FLEET",
    eyebrow: "Transporte & flotillas",
    title:
      "El transporte de personal y las flotillas no pueden detener la operación.",
    description:
      "Electrificar transporte de personal y flotillas implica coordinar vehículos, rutas, ventanas de carga y potencia disponible sin comprometer la continuidad operativa.",
    statement:
      "La infraestructura se diseña alrededor del horario de operación, contemplando cargadores de alta potencia en estaciones de autobuses o pantógrafos aéreos a lo largo de la ruta cuando la aplicación lo requiere.",
    icon: BusFront,
    image: fleetImage,

    profile: {
      label: "Perfil operativo",
      value: "Alta utilización",
    },

    charging: {
      label: "Estrategia",
      value: "Depot Charging",
    },

    priorities: [
      "Ventanas de carga",
      "Gestión de potencia",
      "Disponibilidad vehicular",
    ],

    tags: ["Transporte de personal", "Autobuses", "Flotillas"],
  },

  {
    id: "comercial",
    number: "02",
    code: "RETAIL",
    eyebrow: "Comercial",
    title: "La carga puede convertirse en parte de la experiencia.",
    description:
      "Centros comerciales, hoteles, restaurantes y espacios de servicio pueden integrar carga de alta velocidad como un servicio premium, con una experiencia de uso enfocada al cliente.",
    statement:
      "La velocidad de carga debe responder al tiempo real que el usuario permanece en el lugar, con soporte técnico disponible 24/7 como parte de la propuesta original.",
    icon: ShoppingBag,
    image: commercialImage,

    profile: {
      label: "Perfil operativo",
      value: "Carga pública",
    },

    charging: {
      label: "Estrategia",
      value: "Destination",
    },

    priorities: ["Experiencia de usuario", "Disponibilidad", "Escalabilidad"],

    tags: ["Retail", "Hotelería", "Estacionamientos"],
  },

  {
    id: "hubs",
    number: "03",
    code: "HUB",
    eyebrow: "Charging Hubs",
    title:
      "Más vehículos. Más potencia. Una infraestructura preparada para crecer.",
    description:
      "Los hubs de carga rápida concentran múltiples cargadores y altas demandas de potencia dentro de una misma infraestructura.",
    statement:
      "Aquí, administrar la potencia es tan importante como instalar los cargadores.",
    icon: PlugZap,
    image: hubImage,

    profile: {
      label: "Perfil operativo",
      value: "Alta potencia",
    },

    charging: {
      label: "Estrategia",
      value: "DC Fast",
    },

    priorities: ["Carga simultánea", "Peak management", "Alta disponibilidad"],

    tags: ["DCFC", "BESS", "Carga pública"],
  },

  {
    id: "real-estate",
    number: "04",
    code: "REAL ESTATE",
    eyebrow: "Desarrollos",
    title:
      "Los desarrollos deben nacer preparados para la movilidad eléctrica.",
    description:
      "La movilidad eléctrica forma parte de la infraestructura base de desarrollos residenciales, corporativos e inmobiliarios, con capacidad para facilitar cargadores Nivel 2 y Nivel 3.",
    statement:
      "La solución puede integrarse sin modificaciones extraordinarias cuando las condiciones del sitio lo permiten, preparando el desarrollo para usuarios actuales y futuros.",
    icon: Building2,
    image: realEstateImage,

    profile: {
      label: "Perfil operativo",
      value: "Crecimiento",
    },

    charging: {
      label: "Estrategia",
      value: "EV Ready",
    },

    priorities: [
      "Load management",
      "Expansión futura",
      "Infraestructura común",
    ],

    tags: ["Residencial", "Corporativo", "Mixed-use"],
  },
];

/* =========================================================
   MAIN
========================================================= */

function MovilidadScenariosSection() {
  const [activeId, setActiveId] = useState(scenarios[0].id);

  const activeScenario =
    scenarios.find((scenario) => scenario.id === activeId) || scenarios[0];

  const ActiveIcon = activeScenario.icon;

  return (
    <section
      id="movilidad-escenarios"
      className="
        relative
        overflow-hidden
        bg-[#F4F7F0]
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
          opacity-[0.28]
          [background-image:linear-gradient(rgba(20,62,51,.027)_1px,transparent_1px),linear-gradient(90deg,rgba(20,62,51,.027)_1px,transparent_1px)]
          [background-size:72px_72px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-[180px]
          top-[20%]
          h-[470px]
          w-[470px]
          rounded-full
          bg-[#9DD827]/[0.08]
          blur-[115px]
        "
      />

      <span
        className="
          pointer-events-none
          absolute
          -right-7
          top-[45px]
          hidden
          select-none
          text-[clamp(9rem,17vw,19rem)]
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
                <CarFront size={17} strokeWidth={1.6} />
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
                  Escenarios de movilidad
                </p>
              </div>
            </div>

            <h2
              className="
                mt-6
                max-w-[930px]
                text-[clamp(2.8rem,4.4vw,5.2rem)]
                font-normal
                leading-[0.93]
                tracking-[-0.06em]
              ">
              No todos cargan igual.
              <span className="block">No deberían tener</span>
              <span className="block text-[#83B500]">
                la misma infraestructura.
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
              El número de vehículos, tiempo disponible, ubicación y perfil de
              uso determinan cómo debe diseñarse cada solución de carga.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <Sparkles
                size={12}
                strokeWidth={1.5}
                className="text-[#83B500]"
              />

              <span
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.17em]
                  text-[#143E33]/32
                ">
                Designed around mobility
              </span>
            </div>
          </div>
        </motion.div>

        {/* ===================================================
            EXPERIENCE
        =================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{
            duration: 0.8,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-14
            grid
            overflow-hidden
            rounded-[24px]
            border
            border-[#143E33]/[0.07]
            bg-white
            shadow-[0_28px_80px_rgba(20,62,51,.08)]

            lg:grid-cols-[1.25fr_.75fr]
          ">
          {/* =================================================
              LEFT VISUAL
          ================================================= */}

          <div
            className="
              relative
              min-h-[610px]
              overflow-hidden

              sm:min-h-[680px]
              lg:min-h-[720px]
            ">
            {/* IMAGE */}

            <AnimatePresence mode="wait">
              <motion.div
                key={activeScenario.id}
                initial={{
                  opacity: 0,
                  scale: 1.035,
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
                className="absolute inset-0">
                <img
                  src={activeScenario.image}
                  alt={activeScenario.title}
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
                    from-[#092B23]/95
                    via-[#092B23]/20
                    to-[#092B23]/5
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-[#092B23]/25
                    via-transparent
                    to-transparent
                  "
                />
              </motion.div>
            </AnimatePresence>

            {/* BIG NUMBER */}

            <AnimatePresence mode="wait">
              <motion.span
                key={`number-${activeScenario.number}`}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.45 }}
                className="
                  pointer-events-none
                  absolute
                  -left-4
                  top-[100px]
                  z-10
                  hidden
                  select-none
                  text-[clamp(9rem,14vw,16rem)]
                  font-light
                  leading-none
                  tracking-[-0.095em]
                  text-white/[0.065]

                  xl:block
                ">
                {activeScenario.number}
              </motion.span>
            </AnimatePresence>

            {/* TOP BAR */}

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
                  bg-white/92
                  px-4
                  py-2.5
                  text-[#143E33]
                  shadow-[0_8px_25px_rgba(0,0,0,.06)]
                  backdrop-blur-xl
                ">
                <span
                  className="
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    bg-[#EAF3DC]
                    text-[#78A500]
                  ">
                  <ActiveIcon size={13} strokeWidth={1.7} />
                </span>

                <span
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                  ">
                  {activeScenario.eyebrow}
                </span>
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-white/15
                  bg-[#10372E]/65
                  px-4
                  py-2.5
                  backdrop-blur-xl
                ">
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
                    tracking-[0.15em]
                    text-[#B8F23A]
                  ">
                  {activeScenario.code}
                </span>
              </div>
            </div>

            {/* =================================================
                FLOATING INFO
            ================================================= */}

            <div
              className="
                absolute
                right-7
                top-[30%]
                z-20
                hidden
                w-[220px]
                rounded-[14px]
                border
                border-white/15
                bg-[#10372E]/70
                p-4
                text-white
                shadow-[0_14px_35px_rgba(0,0,0,.12)]
                backdrop-blur-xl

                xl:block
              ">
              <div className="flex items-center gap-3">
                <Clock3
                  size={14}
                  strokeWidth={1.6}
                  className="text-[#B8F23A]"
                />

                <span
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-white/35
                  ">
                  {activeScenario.profile.label}
                </span>
              </div>

              <p
                className="
                  mt-4
                  text-[17px]
                  font-medium
                  tracking-[-0.03em]
                  text-white
                ">
                {activeScenario.profile.value}
              </p>

              <div
                className="
                  mt-4
                  border-t
                  border-white/10
                  pt-4
                ">
                <div className="flex items-center gap-3">
                  <Gauge
                    size={13}
                    strokeWidth={1.6}
                    className="text-[#B8F23A]"
                  />

                  <span
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.14em]
                      text-white/30
                    ">
                    {activeScenario.charging.label}
                  </span>
                </div>

                <p
                  className="
                    mt-2
                    text-[12px]
                    font-bold
                    uppercase
                    tracking-[0.12em]
                    text-[#B8F23A]
                  ">
                  {activeScenario.charging.value}
                </p>
              </div>
            </div>

            {/* =================================================
                BOTTOM CONTENT
            ================================================= */}

            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${activeScenario.id}`}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{
                  duration: 0.45,
                  delay: 0.07,
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
                  <span className="h-px w-8 bg-[#B8F23A]" />

                  <span
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.19em]
                      text-[#B8F23A]
                    ">
                    {activeScenario.number} · {activeScenario.eyebrow}
                  </span>
                </div>

                <h3
                  className="
                    mt-4
                    max-w-[850px]
                    text-[clamp(2.3rem,3.9vw,4.7rem)]
                    font-normal
                    leading-[0.92]
                    tracking-[-0.06em]
                    text-white
                  ">
                  {activeScenario.title}
                </h3>

                <div
                  className="
                    mt-6
                    grid
                    gap-6

                    xl:grid-cols-[1fr_330px]
                    xl:items-end
                  ">
                  <p
                    className="
                      max-w-[700px]
                      text-[11px]
                      leading-6
                      text-white/52
                    ">
                    {activeScenario.description}
                  </p>

                  <div
                    className="
                      border-t
                      border-white/15
                      pt-5

                      xl:border-l
                      xl:border-t-0
                      xl:pl-6
                      xl:pt-0
                    ">
                    <p
                      className="
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.16em]
                        text-[#B8F23A]
                      ">
                      Punto clave
                    </p>

                    <p
                      className="
                        mt-3
                        text-[13px]
                        leading-5
                        text-white/45
                      ">
                      {activeScenario.statement}
                    </p>
                  </div>
                </div>

                {/* TAGS */}

                <div
                  className="
                    mt-6
                    flex
                    flex-wrap
                    gap-2
                  ">
                  {activeScenario.tags.map((tag) => (
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
                        tracking-[0.12em]
                        text-white/55
                        backdrop-blur-md
                      ">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* =================================================
              RIGHT SELECTOR
          ================================================= */}

          <div
            className="
              relative
              flex
              flex-col
              bg-white
            ">
            {/* SELECTOR HEADER */}

            <div
              className="
                flex
                items-center
                justify-between
                gap-5
                border-b
                border-[#143E33]/[0.07]
                px-6
                py-6
              ">
              <div>
                <p
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-[#143E33]/35
                  ">
                  Selecciona una operación
                </p>

                <p
                  className="
                    mt-1
                    text-[11px]
                    uppercase
                    tracking-[0.12em]
                    text-[#143E33]/20
                  ">
                  Charging scenarios
                </p>
              </div>

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

            {/* SELECTORS */}

            <div className="flex-1">
              {scenarios.map((scenario) => {
                const Icon = scenario.icon;
                const isActive = activeId === scenario.id;

                return (
                  <button
                    key={scenario.id}
                    type="button"
                    onClick={() => setActiveId(scenario.id)}
                    className={`
                      group
                      relative
                      flex
                      w-full
                      items-center
                      gap-4
                      border-b
                      border-[#143E33]/[0.065]
                      px-5
                      py-6
                      text-left
                      transition-all
                      duration-400

                      last:border-b-0

                      ${
                        isActive
                          ? `
                            bg-[#10372E]
                            text-white
                          `
                          : `
                            bg-white
                            text-[#143E33]

                            hover:bg-[#EDF4E5]
                          `
                      }
                    `}>
                    {/* ACTIVE BAR */}

                    {isActive && (
                      <motion.span
                        layoutId="mobility-scenario-indicator"
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

                    {/* ICON */}

                    <span
                      className={`
                        flex
                        h-11
                        w-11
                        shrink-0
                        items-center
                        justify-center
                        rounded-[11px]
                        transition-all
                        duration-300

                        ${
                          isActive
                            ? `
                              bg-[#B8F23A]
                              text-[#10372E]
                            `
                            : `
                              bg-[#EDF5DF]
                              text-[#78A500]

                              group-hover:bg-[#B8F23A]
                              group-hover:text-[#10372E]
                            `
                        }
                      `}>
                      <Icon size={17} strokeWidth={1.6} />
                    </span>

                    {/* CONTENT */}

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-3">
                        <span
                          className={`
                            text-[11px]
                            font-bold
                            tracking-[0.14em]

                            ${isActive ? "text-[#B8F23A]" : "text-[#143E33]/25"}
                          `}>
                          {scenario.number}
                        </span>

                        <span
                          className={`
                            text-[11px]
                            font-bold
                            uppercase
                            tracking-[0.14em]

                            ${isActive ? "text-[#B8F23A]" : "text-[#78A500]"}
                          `}>
                          {scenario.code}
                        </span>
                      </div>

                      <p
                        className="
                          mt-2
                          text-[14px]
                          font-semibold
                          tracking-[-0.02em]
                        ">
                        {scenario.eyebrow}
                      </p>

                      <p
                        className={`
                          mt-1
                          max-w-[300px]
                          text-[11px]
                          leading-4

                          ${isActive ? "text-white/35" : "text-[#143E33]/35"}
                        `}>
                        {scenario.title}
                      </p>
                    </div>

                    <span
                      className={`
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        transition-all
                        duration-300

                        ${
                          isActive
                            ? `
                              border-white/15
                              text-[#B8F23A]
                            `
                            : `
                              border-[#143E33]/10
                              text-[#143E33]/25
                            `
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
                  </button>
                );
              })}
            </div>

            {/* =================================================
                BOTTOM PANEL
            ================================================= */}

            <div
              className="
                relative
                overflow-hidden
                bg-[#EDF4E5]
                p-6
              ">
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-12
                  -top-12
                  h-36
                  w-36
                  rounded-full
                  bg-[#B8F23A]/20
                  blur-[50px]
                "
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3">
                  <MapPin
                    size={14}
                    strokeWidth={1.6}
                    className="text-[#78A500]"
                  />

                  <span
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.16em]
                      text-[#143E33]/40
                    ">
                    Una pregunta primero
                  </span>
                </div>

                <p
                  className="
                    mt-4
                    max-w-[330px]
                    text-[17px]
                    font-medium
                    leading-[1.15]
                    tracking-[-0.03em]
                  ">
                  ¿Cómo se mueven realmente tus vehículos?
                </p>

                <p
                  className="
                    mt-3
                    max-w-[330px]
                    text-[12px]
                    leading-5
                    text-[#143E33]/40
                  ">
                  Esa respuesta define potencia, cantidad de cargadores,
                  horarios y estrategia energética.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ===================================================
            PRIORITIES
        =================================================== */}

        <div
          className="
            mt-7
            grid
            overflow-hidden
            rounded-[15px]
            border
            border-[#143E33]/[0.07]
            bg-white
            shadow-[0_10px_35px_rgba(20,62,51,.04)]

            sm:grid-cols-3
          ">
          <AnimatePresence mode="wait">
            {activeScenario.priorities.map((priority, index) => (
              <motion.div
                key={`${activeScenario.id}-${priority}`}
                initial={{
                  opacity: 0,
                  y: 8,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.06,
                }}
                className={`
                  flex
                  items-center
                  gap-4
                  px-5
                  py-5

                  ${
                    index > 0
                      ? "border-t border-[#143E33]/[0.07] sm:border-l sm:border-t-0"
                      : ""
                  }
                `}>
                <span
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    bg-[#EDF5DF]
                    text-[#78A500]
                  ">
                  <Check size={13} strokeWidth={1.8} />
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
                    0{index + 1}
                  </p>

                  <p
                    className="
                      mt-1
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.11em]
                      text-[#143E33]/55
                    ">
                    {priority}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* ===================================================
            MICRO FOOTER
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
            <Zap size={12} strokeWidth={1.5} className="text-[#83B500]" />

            <span
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-[#143E33]/30
              ">
              La infraestructura sigue a la operación
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
              Fleet · Retail · Hubs · Real Estate
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MovilidadScenariosSection;
