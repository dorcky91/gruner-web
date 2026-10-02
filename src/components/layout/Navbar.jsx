// import { AnimatePresence, motion } from "motion/react";
// import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
// import { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router";

// import logoMovil from "../../assets/images/logos/logo-movil.png";
// import logoWeb from "../../assets/images/logos/logo-web.png";

// /* =========================================================
//    SERVICIOS
// ========================================================= */

// const services = [
//   {
//     number: "01",
//     title: "Consultoría de Sostenibilidad",
//     description: "ESG · Carbono · Circularidad",
//     to: "/servicios/consultoria",
//   },
//   {
//     number: "02",
//     title: "Solar Fotovoltaica & BESS",
//     description: "Desarrollo · Construcción · Operación",
//     to: "/energia/solar-fotovoltaico",
//   },
//   {
//     number: "03",
//     title: "Movilidad Eléctrica",
//     description: "Infraestructura de carga · Gestión energética",
//     to: "/energia/carga-rapida-de-vehiculos-electricos",
//   },
//   {
//     number: "04",
//     title: "Valorización de Residuos",
//     description: "Tratamiento · Valorización · Energía",
//     to: "/valorizacion-residuos-industriales",
//   },
// ];

// /* =========================================================
//    LINKS PRINCIPALES
// ========================================================= */

// const navigation = [
//   {
//     id: "nosotros",
//     label: "Nosotros",
//     to: "/nosotros",
//   },
//   {
//     id: "proyectos",
//     label: "Proyectos",
//     to: "/proyectos",
//   },
//   {
//     id: "contacto",
//     label: "Contacto",
//     to: "/#contacto",
//   },
// ];

// /* =========================================================
//    NAVBAR
// ========================================================= */

// function Navbar() {
//   const location = useLocation();

//   const [servicesOpen, setServicesOpen] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

//   const [scrolled, setScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState("inicio");
//   const [language, setLanguage] = useState("es");

//   const isHomePage = location.pathname === "/";

//   const isServicesRoute =
//     location.pathname.startsWith("/servicios") ||
//     location.pathname.startsWith("/energia") ||
//     location.pathname.startsWith("/residuos");

//   /* =======================================================
//      SCROLL NAVBAR
//   ======================================================= */

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };

//     handleScroll();

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   /* =======================================================
//      ACTIVO SEGÚN RUTA
//   ======================================================= */

//   useEffect(() => {
//     if (isServicesRoute) {
//       setActiveSection("servicios");
//       return;
//     }

//     if (!isHomePage) {
//       setActiveSection("");
//       return;
//     }

//     const hash = location.hash.replace("#", "");

//     if (
//       hash === "servicios" ||
//       hash === "energia" ||
//       hash === "electromovilidad" ||
//       hash === "residuos"
//     ) {
//       setActiveSection("servicios");
//       return;
//     }

//     if (hash === "nosotros" || hash === "proyectos" || hash === "contacto") {
//       setActiveSection(hash);
//       return;
//     }

//     if (!hash) {
//       setActiveSection("inicio");
//     }
//   }, [location.pathname, location.hash, isHomePage, isServicesRoute]);

//   /* =======================================================
//      SECCIÓN ACTIVA DEL HOME
//   ======================================================= */

//   useEffect(() => {
//     if (!isHomePage) {
//       return;
//     }

//     const sectionIds = ["servicios", "nosotros", "proyectos", "contacto"];

//     const sections = sectionIds
//       .map((id) => document.getElementById(id))
//       .filter(Boolean);

//     if (!sections.length) {
//       return;
//     }

//     const observer = new IntersectionObserver(
//       (entries) => {
//         const visibleEntries = entries
//           .filter((entry) => entry.isIntersecting)
//           .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

//         if (visibleEntries.length > 0) {
//           setActiveSection(visibleEntries[0].target.id);
//         }
//       },
//       {
//         root: null,
//         rootMargin: "-25% 0px -60% 0px",
//         threshold: [0, 0.1, 0.25, 0.5],
//       },
//     );

//     sections.forEach((section) => {
//       observer.observe(section);
//     });

//     return () => {
//       observer.disconnect();
//     };
//   }, [isHomePage]);

//   /* =======================================================
//      BLOQUEAR SCROLL MOBILE
//   ======================================================= */

//   useEffect(() => {
//     document.body.style.overflow = mobileOpen ? "hidden" : "";

//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [mobileOpen]);

//   /* =======================================================
//      CERRAR MENÚ AL CAMBIAR DE RUTA
//   ======================================================= */

//   useEffect(() => {
//     setServicesOpen(false);
//     setMobileOpen(false);
//     setMobileServicesOpen(false);
//   }, [location.pathname, location.hash]);

//   /* =======================================================
//      HELPERS
//   ======================================================= */

//   const closeMobileMenu = () => {
//     setMobileOpen(false);
//     setMobileServicesOpen(false);
//   };

//   const desktopNavClass = (section) => {
//     const isActive = activeSection === section;

//     return [
//       `
//         flex
//         h-11
//         items-center
//         rounded-full
//         px-5
//         text-[14px]
//         font-medium
//         transition-all
//         duration-300
//       `,
//       isActive
//         ? `
//             bg-[#7FA51C]
//             text-white
//           `
//         : `
//             text-[#29493D]
//             hover:bg-[#E5EEDB]
//             hover:text-[#668C19]
//           `,
//     ].join(" ");
//   };

//   /* =======================================================
//      RENDER
//   ======================================================= */

//   return (
//     <>
//       {/* =====================================================
//           HEADER
//       ===================================================== */}

//       <header
//         className={[
//           `
//             fixed
//             inset-x-0
//             top-0
//             z-50
//             transition-all
//             duration-500
//           `,
//           scrolled || !isHomePage
//             ? `
//                 bg-[#EEF3E6]/90
//                 shadow-[0_10px_35px_rgba(45,75,58,.06)]
//                 backdrop-blur-2xl
//               `
//             : "bg-transparent",
//         ].join(" ")}>
//         <div
//           className="
//             mx-auto
//             flex
//             h-[88px]
//             max-w-[1760px]
//             items-center
//             justify-between
//             px-5

//             sm:px-8
//             lg:px-12
//             xl:px-16
//             2xl:px-20
//           ">
//           {/* =================================================
//               LOGO
//           ================================================= */}

//           <Link
//             to="/"
//             aria-label="GRUNER - Inicio"
//             onClick={() => {
//               setActiveSection("inicio");
//             }}
//             className="
//               relative
//               z-50
//               flex
//               shrink-0
//               items-center
//             ">
//             <picture>
//               <source media="(min-width: 768px)" srcSet={logoWeb} />

//               <img
//                 src={logoMovil}
//                 alt="GRUNER"
//                 className="
//                   h-[30px]
//                   w-auto
//                   object-contain

//                   md:h-[32px]
//                 "
//               />
//             </picture>
//           </Link>

//           {/* =================================================
//               DESKTOP
//           ================================================= */}

//           <div
//             className="
//               hidden
//               items-center
//               gap-5

//               xl:flex
//             ">
//             {/* ===============================================
//                 NAVEGACIÓN
//             =============================================== */}

//             <nav
//               className="
//                 flex
//                 items-center
//                 gap-1
//                 rounded-full
//                 border
//                 border-[#496656]/10
//                 bg-[#F5F8EF]/72
//                 p-1.5
//                 shadow-[0_10px_35px_rgba(48,75,61,.045)]
//                 backdrop-blur-xl
//               ">
//               {/* =============================================
//                   SERVICIOS
//               ============================================= */}

//               <div
//                 className="relative"
//                 onMouseEnter={() => setServicesOpen(true)}
//                 onMouseLeave={() => setServicesOpen(false)}>
//                 <button
//                   type="button"
//                   aria-expanded={servicesOpen}
//                   onClick={() => setServicesOpen((value) => !value)}
//                   className={[
//                     `
//                       flex
//                       h-11
//                       items-center
//                       gap-2
//                       rounded-full
//                       px-5
//                       text-[14px]
//                       font-medium
//                       transition-all
//                       duration-300
//                     `,
//                     activeSection === "servicios"
//                       ? `
//                           bg-[#7FA51C]
//                           text-white
//                         `
//                       : `
//                           text-[#29493D]
//                           hover:bg-[#E5EEDB]
//                           hover:text-[#668C19]
//                         `,
//                   ].join(" ")}>
//                   Servicios
//                   <ChevronDown
//                     size={14}
//                     strokeWidth={1.8}
//                     className={[
//                       "transition-transform duration-300",
//                       servicesOpen ? "rotate-180" : "",
//                       activeSection === "servicios"
//                         ? "text-white"
//                         : "text-[#70847A]",
//                     ].join(" ")}
//                   />
//                 </button>

//                 {/* ===========================================
//                     SUBMENU
//                 =========================================== */}

//                 <AnimatePresence>
//                   {servicesOpen && (
//                     <motion.div
//                       initial={{
//                         opacity: 0,
//                         y: 12,
//                         scale: 0.985,
//                       }}
//                       animate={{
//                         opacity: 1,
//                         y: 0,
//                         scale: 1,
//                       }}
//                       exit={{
//                         opacity: 0,
//                         y: 8,
//                         scale: 0.985,
//                       }}
//                       transition={{
//                         duration: 0.22,
//                         ease: [0.22, 1, 0.36, 1],
//                       }}
//                       className="
//                         absolute
//                         left-1/2
//                         top-[58px]
//                         w-[430px]
//                         -translate-x-1/2
//                         overflow-hidden
//                         rounded-[28px]
//                         border
//                         border-[#385A4A]/10
//                         bg-[#F3F7EC]/97
//                         shadow-[0_28px_80px_rgba(42,69,55,.14)]
//                         backdrop-blur-2xl
//                       ">
//                       {/* HEADER */}

//                       <div className="px-6 pb-4 pt-6">
//                         <div className="flex items-center gap-3">
//                           <span className="h-px w-7 bg-[#7FA51C]" />

//                           <p
//                             className="
//                               text-[9px]
//                               font-semibold
//                               uppercase
//                               tracking-[0.18em]
//                               text-[#7FA51C]
//                             ">
//                             Soluciones GRUNER
//                           </p>
//                         </div>

//                         <p
//                           className="
//                             mt-2
//                             max-w-[300px]
//                             text-[12px]
//                             leading-5
//                             text-[#657D72]
//                           ">
//                           Soluciones integrales para impulsar una transición
//                           sostenible.
//                         </p>
//                       </div>

//                       {/* ITEMS */}

//                       <div className="px-3 pb-3">
//                         {services.map((service) => (
//                           <Link
//                             key={service.number}
//                             to={service.to}
//                             onClick={() => {
//                               setActiveSection("servicios");
//                               setServicesOpen(false);
//                             }}
//                             className="
//                               group
//                               grid
//                               grid-cols-[34px_1fr_auto]
//                               items-center
//                               gap-3
//                               rounded-[18px]
//                               px-3
//                               py-3.5
//                               transition-all
//                               duration-300

//                               hover:bg-[#E3ECD6]
//                             ">
//                             <span
//                               className="
//                                 text-[9px]
//                                 font-semibold
//                                 text-[#7FA51C]
//                               ">
//                               {service.number}
//                             </span>

//                             <div>
//                               <p
//                                 className="
//                                   text-[14px]
//                                   font-medium
//                                   text-[#17392E]
//                                 ">
//                                 {service.title}
//                               </p>

//                               <p
//                                 className="
//                                   mt-1
//                                   text-[11px]
//                                   text-[#6A8176]
//                                 ">
//                                 {service.description}
//                               </p>
//                             </div>

//                             <span
//                               className="
//                                 flex
//                                 h-8
//                                 w-8
//                                 items-center
//                                 justify-center
//                                 rounded-full
//                                 border
//                                 border-[#708C7E]/15
//                                 text-[#82958B]
//                                 transition-all
//                                 duration-300

//                                 group-hover:border-[#7FA51C]
//                                 group-hover:bg-[#7FA51C]
//                                 group-hover:text-white
//                               ">
//                               <ArrowUpRight size={14} strokeWidth={1.7} />
//                             </span>
//                           </Link>
//                         ))}
//                       </div>

//                       {/* FOOTER SUBMENU */}

//                       <Link
//                         to="/#servicios"
//                         onClick={() => {
//                           setActiveSection("servicios");
//                           setServicesOpen(false);
//                         }}
//                         className="
//                           group
//                           flex
//                           items-center
//                           justify-between
//                           border-t
//                           border-[#315443]/10
//                           bg-[#E7EFDC]
//                           px-6
//                           py-5
//                           text-[10px]
//                           font-semibold
//                           uppercase
//                           tracking-[0.14em]
//                           text-[#7FA51C]
//                           transition-all

//                           hover:bg-[#DDE9CE]
//                         ">
//                         Ver todas las soluciones
//                         <ArrowUpRight
//                           size={15}
//                           strokeWidth={1.7}
//                           className="
//                             transition-transform
//                             duration-300

//                             group-hover:-translate-y-0.5
//                             group-hover:translate-x-0.5
//                           "
//                         />
//                       </Link>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </div>

//               {/* =============================================
//                   LINKS PRINCIPALES
//               ============================================= */}

//               {navigation.map((item) => (
//                 <Link
//                   key={item.id}
//                   to={item.to}
//                   onClick={() => setActiveSection(item.id)}
//                   className={desktopNavClass(item.id)}>
//                   {item.label}
//                 </Link>
//               ))}
//             </nav>

//             {/* ===============================================
//                 IDIOMA
//             =============================================== */}

//             <div
//               className="
//                 flex
//                 items-center
//                 rounded-full
//                 border
//                 border-[#496656]/10
//                 bg-[#F5F8EF]/72
//                 p-1
//                 text-[10px]
//                 font-semibold
//                 uppercase
//                 tracking-[0.08em]
//                 shadow-[0_10px_35px_rgba(48,75,61,.04)]
//                 backdrop-blur-xl
//               ">
//               <button
//                 type="button"
//                 onClick={() => setLanguage("es")}
//                 className={[
//                   `
//                     rounded-full
//                     px-3.5
//                     py-2.5
//                     transition-all
//                     duration-300
//                   `,
//                   language === "es"
//                     ? `
//                         bg-[#7FA51C]
//                         text-white
//                       `
//                     : `
//                         text-[#687F74]
//                         hover:bg-[#E5EEDB]
//                       `,
//                 ].join(" ")}>
//                 ES
//               </button>

//               <button
//                 type="button"
//                 onClick={() => setLanguage("en")}
//                 className={[
//                   `
//                     rounded-full
//                     px-3.5
//                     py-2.5
//                     transition-all
//                     duration-300
//                   `,
//                   language === "en"
//                     ? `
//                         bg-[#7FA51C]
//                         text-white
//                       `
//                     : `
//                         text-[#687F74]
//                         hover:bg-[#E5EEDB]
//                       `,
//                 ].join(" ")}>
//                 EN
//               </button>
//             </div>
//           </div>

//           {/* =================================================
//               MOBILE BUTTON
//           ================================================= */}

//           <button
//             type="button"
//             aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
//             aria-expanded={mobileOpen}
//             onClick={() => setMobileOpen((value) => !value)}
//             className="
//               relative
//               z-50
//               flex
//               h-11
//               w-11
//               items-center
//               justify-center
//               rounded-full
//               border
//               border-[#385A49]/12
//               bg-[#F5F8EF]/85
//               text-[#244738]
//               shadow-[0_10px_35px_rgba(42,70,56,.08)]
//               backdrop-blur-xl
//               transition

//               hover:border-[#7FA51C]/40
//               hover:bg-[#E5EEDB]
//               hover:text-[#7FA51C]

//               xl:hidden
//             ">
//             {mobileOpen ? (
//               <X size={19} strokeWidth={1.7} />
//             ) : (
//               <Menu size={20} strokeWidth={1.7} />
//             )}
//           </button>
//         </div>
//       </header>

//       {/* =====================================================
//           MOBILE MENU
//       ===================================================== */}

//       <AnimatePresence>
//         {mobileOpen && (
//           <motion.div
//             initial={{
//               opacity: 0,
//             }}
//             animate={{
//               opacity: 1,
//             }}
//             exit={{
//               opacity: 0,
//             }}
//             transition={{
//               duration: 0.28,
//             }}
//             className="
//               fixed
//               inset-0
//               z-40
//               overflow-y-auto
//               bg-[#EEF3E6]

//               xl:hidden
//             ">
//             {/* BACKGROUND */}

//             <div
//               className="
//                 pointer-events-none
//                 absolute
//                 inset-0
//                 bg-[radial-gradient(circle_at_80%_20%,rgba(151,190,35,.18),transparent_30%),linear-gradient(145deg,#F3F7EB_0%,#E7EFD9_100%)]
//               "
//             />

//             <div
//               className="
//                 relative
//                 flex
//                 min-h-screen
//                 flex-col
//                 px-6
//                 pb-8
//                 pt-[105px]

//                 sm:px-8
//               ">
//               <nav className="flex-1">
//                 {/* ===========================================
//                     SERVICIOS MOBILE
//                 =========================================== */}

//                 <button
//                   type="button"
//                   onClick={() => setMobileServicesOpen((value) => !value)}
//                   className={[
//                     `
//                       flex
//                       w-full
//                       items-center
//                       justify-between
//                       rounded-[18px]
//                       px-4
//                       py-5
//                       text-left
//                       text-[28px]
//                       font-normal
//                       tracking-[-0.04em]
//                       transition-all
//                       duration-300
//                     `,
//                     activeSection === "servicios"
//                       ? `
//                           bg-[#7FA51C]
//                           text-white
//                         `
//                       : `
//                           text-[#17392E]
//                           hover:bg-[#E3ECD6]
//                         `,
//                   ].join(" ")}>
//                   Servicios
//                   <span
//                     className={[
//                       `
//                         flex
//                         h-9
//                         w-9
//                         items-center
//                         justify-center
//                         rounded-full
//                       `,
//                       activeSection === "servicios"
//                         ? `
//                             bg-white/15
//                             text-white
//                           `
//                         : `
//                             bg-[#E1EBD4]
//                             text-[#7FA51C]
//                           `,
//                     ].join(" ")}>
//                     <ChevronDown
//                       size={17}
//                       strokeWidth={1.7}
//                       className={[
//                         "transition-transform duration-300",
//                         mobileServicesOpen ? "rotate-180" : "",
//                       ].join(" ")}
//                     />
//                   </span>
//                 </button>

//                 {/* ===========================================
//                     SUBMENU MOBILE
//                 =========================================== */}

//                 <AnimatePresence>
//                   {mobileServicesOpen && (
//                     <motion.div
//                       initial={{
//                         height: 0,
//                         opacity: 0,
//                       }}
//                       animate={{
//                         height: "auto",
//                         opacity: 1,
//                       }}
//                       exit={{
//                         height: 0,
//                         opacity: 0,
//                       }}
//                       transition={{
//                         duration: 0.3,
//                       }}
//                       className="overflow-hidden">
//                       <div className="py-3">
//                         {services.map((service) => (
//                           <Link
//                             key={service.number}
//                             to={service.to}
//                             onClick={() => {
//                               setActiveSection("servicios");
//                               closeMobileMenu();
//                             }}
//                             className="
//                               grid
//                               grid-cols-[30px_1fr_auto]
//                               items-center
//                               gap-3
//                               rounded-[18px]
//                               px-4
//                               py-4
//                               transition

//                               hover:bg-[#E3ECD6]
//                             ">
//                             <span
//                               className="
//                                 text-[9px]
//                                 font-semibold
//                                 text-[#7FA51C]
//                               ">
//                               {service.number}
//                             </span>

//                             <div>
//                               <p
//                                 className="
//                                   text-[14px]
//                                   font-medium
//                                   text-[#183A2F]
//                                 ">
//                                 {service.title}
//                               </p>

//                               <p
//                                 className="
//                                   mt-1
//                                   text-[11px]
//                                   leading-5
//                                   text-[#668076]
//                                 ">
//                                 {service.description}
//                               </p>
//                             </div>

//                             <ArrowUpRight
//                               size={15}
//                               className="text-[#7FA51C]"
//                             />
//                           </Link>
//                         ))}
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>

//                 {/* ===========================================
//                     LINKS MOBILE
//                 =========================================== */}

//                 <div className="mt-2 space-y-2">
//                   {navigation.map((item) => (
//                     <Link
//                       key={item.id}
//                       to={item.to}
//                       onClick={() => {
//                         setActiveSection(item.id);
//                         closeMobileMenu();
//                       }}
//                       className={[
//                         `
//                           block
//                           rounded-[18px]
//                           px-4
//                           py-5
//                           text-[28px]
//                           font-normal
//                           tracking-[-0.04em]
//                           transition-all
//                           duration-300
//                         `,
//                         activeSection === item.id
//                           ? `
//                               bg-[#7FA51C]
//                               text-white
//                             `
//                           : `
//                               text-[#17392E]
//                               hover:bg-[#E3ECD6]
//                             `,
//                       ].join(" ")}>
//                       {item.label}
//                     </Link>
//                   ))}
//                 </div>
//               </nav>

//               {/* =============================================
//                   IDIOMA MOBILE
//               ============================================= */}

//               <div
//                 className="
//                   flex
//                   items-center
//                   justify-between
//                   border-t
//                   border-[#365A49]/12
//                   pt-6
//                 ">
//                 <p
//                   className="
//                     text-[10px]
//                     font-semibold
//                     uppercase
//                     tracking-[0.14em]
//                     text-[#62796E]
//                   ">
//                   Idioma
//                 </p>

//                 <div
//                   className="
//                     flex
//                     rounded-full
//                     border
//                     border-[#456151]/10
//                     bg-[#F4F7EF]/70
//                     p-1
//                     text-[10px]
//                     font-semibold
//                     uppercase
//                     tracking-[0.08em]
//                   ">
//                   <button
//                     type="button"
//                     onClick={() => setLanguage("es")}
//                     className={[
//                       `
//                         rounded-full
//                         px-4
//                         py-2.5
//                         transition-all
//                         duration-300
//                       `,
//                       language === "es"
//                         ? `
//                             bg-[#7FA51C]
//                             text-white
//                           `
//                         : `
//                             text-[#6D8177]
//                           `,
//                     ].join(" ")}>
//                     ES
//                   </button>

//                   <button
//                     type="button"
//                     onClick={() => setLanguage("en")}
//                     className={[
//                       `
//                         rounded-full
//                         px-4
//                         py-2.5
//                         transition-all
//                         duration-300
//                       `,
//                       language === "en"
//                         ? `
//                             bg-[#7FA51C]
//                             text-white
//                           `
//                         : `
//                             text-[#6D8177]
//                           `,
//                     ].join(" ")}>
//                     EN
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

// export default Navbar;

import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";

import logoMovil from "../../assets/images/logos/logo-movil.png";
import logoWeb from "../../assets/images/logos/logo-web.png";

/* =========================================================
   DATA
========================================================= */

const services = [
  {
    number: "01",
    title: "Consultoría de Sostenibilidad",
    description: "ESG · Carbono · Circularidad",
    to: "/servicios/consultoria",
  },
  {
    number: "02",
    title: "Solar Fotovoltaica & BESS",
    description: "Desarrollo · Construcción · Operación",
    to: "/energia/solar-fotovoltaico",
  },
  {
    number: "03",
    title: "Movilidad Eléctrica",
    description: "Infraestructura de carga · Gestión energética",
    to: "/energia/carga-rapida-de-vehiculos-electricos",
  },
  {
    number: "04",
    title: "Valorización de Residuos",
    description: "Tratamiento · Valorización · Energía",
    to: "/valorizacion-residuos-industriales",
  },
];

const navigation = [
  {
    id: "nosotros",
    label: "Nosotros",
    to: "/nosotros",
  },
  {
    id: "proyectos",
    label: "Proyectos",
    to: "/proyectos",
  },
  {
    id: "contacto",
    label: "Contacto",
    to: "/contacto",
  },
];

const ease = [0.22, 1, 0.36, 1];

/* =========================================================
   NAVBAR
========================================================= */

function Navbar() {
  const location = useLocation();

  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("inicio");
  const [language, setLanguage] = useState("es");

  const isHomePage = location.pathname === "/";

  const isServicesRoute =
    location.pathname.startsWith("/servicios") ||
    location.pathname.startsWith("/energia") ||
    location.pathname === "/valorizacion-residuos-industriales";

  const isNosotrosRoute = location.pathname === "/nosotros";

  const isProyectosRoute = location.pathname === "/proyectos";

  const isContactoRoute = location.pathname === "/contacto";

  /* =======================================================
     ACTIVE ROUTE
  ======================================================= */

  useEffect(() => {
    if (isServicesRoute) {
      setActiveSection("servicios");
      return;
    }

    if (isNosotrosRoute) {
      setActiveSection("nosotros");
      return;
    }

    if (isProyectosRoute) {
      setActiveSection("proyectos");
      return;
    }

    if (isContactoRoute) {
      setActiveSection("contacto");
      return;
    }

    if (!isHomePage) {
      setActiveSection("");
      return;
    }

    const hash = location.hash.replace("#", "");

    if (
      hash === "servicios" ||
      hash === "energia" ||
      hash === "electromovilidad" ||
      hash === "residuos"
    ) {
      setActiveSection("servicios");
      return;
    }

    if (hash === "nosotros" || hash === "proyectos" || hash === "contacto") {
      setActiveSection(hash);
      return;
    }

    if (!hash) {
      setActiveSection("inicio");
    }
  }, [
    location.pathname,
    location.hash,
    isHomePage,
    isServicesRoute,
    isNosotrosRoute,
    isProyectosRoute,
    isContactoRoute,
  ]);

  /* =======================================================
     SCROLL TO TOP ON PAGE CHANGE
  ======================================================= */

  useEffect(() => {
    if (location.hash) {
      return;
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [location.pathname, location.hash]);

  /* =======================================================
     ACTIVE HOME SECTION
  ======================================================= */

  useEffect(() => {
    if (!isHomePage) {
      return;
    }

    const sectionIds = ["servicios", "nosotros", "proyectos", "contacto"];

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: "-25% 0px -60% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, [isHomePage]);

  /* =======================================================
     BLOCK BODY SCROLL ON MOBILE
  ======================================================= */

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* =======================================================
     CLOSE MENUS WHEN ROUTE CHANGES
  ======================================================= */

  useEffect(() => {
    setServicesOpen(false);
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }, [location.pathname, location.hash]);

  /* =======================================================
     HELPERS
  ======================================================= */

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  };

  const desktopNavClass = (section) => {
    const isActive = activeSection === section;

    return [
      `
      flex
      h-11
      items-center
      rounded-full
      px-5
      text-[14px]
      font-medium
      transition-all
      duration-300
    `,
      isActive
        ? `
          bg-[#7FA51C]
          text-white!
          shadow-[0_6px_18px_rgba(92,126,26,.18)]
        `
        : `
          text-[#244738]!
          hover:bg-white/45
          hover:text-[#668C19]!
        `,
    ].join(" ");
  };

  return (
    <>
      {/* =====================================================
          HEADER
      ===================================================== */}

      <header
        className="
          pointer-events-none
          fixed
          inset-x-0
          top-0
          z-50
          bg-transparent
        ">
        <div
          className="
            mx-auto
            flex
            h-[88px]
            max-w-[1760px]
            items-center
            justify-between
            px-5
            sm:px-8
            lg:px-12
            xl:px-16
            2xl:px-20
          ">
          {/* =================================================
              LOGO GLASS
          ================================================= */}

          <Link
            to="/"
            aria-label="GRUNER - Inicio"
            onClick={() => {
              setActiveSection("inicio");
              closeMobileMenu();
            }}
            className="
              pointer-events-auto
              relative
              z-50
              flex
              shrink-0
              items-center
              rounded-full
              px-4
              py-3
              shadow-[0_8px_30px_rgba(18,54,43,.06)]
              backdrop-blur-md
              backdrop-saturate-150
              transition-all
              duration-300
            ">
            <picture>
              <source media="(min-width: 768px)" srcSet={logoWeb} />

              <img
                src={logoMovil}
                alt="GRUNER"
                className="
                  h-[27px]
                  w-auto
                  object-contain
                  md:h-[29px]
                "
              />
            </picture>
          </Link>

          {/* =================================================
              DESKTOP
          ================================================= */}

          <div
            className="
              pointer-events-auto
              hidden
              items-center
              gap-4
              xl:flex
            ">
            {/* =================================================
                GLASS NAV
            ================================================= */}

            <nav
              className="
                flex
                items-center
                gap-1
                rounded-full
                border
                border-white/35
                bg-white/55
                p-1.5
                shadow-[0_10px_35px_rgba(20,56,46,.06)]
                backdrop-blur-md
                backdrop-saturate-150
              ">
              {/* ===============================================
                  SERVICES
              =============================================== */}

              <div
                className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}>
                <button
                  type="button"
                  aria-expanded={servicesOpen}
                  onClick={() => setServicesOpen((value) => !value)}
                  className={[
                    `
                      flex
                      h-11
                      items-center
                      gap-2
                      rounded-full
                      px-5
                      text-[14px]
                      font-medium!
                      transition-all
                      duration-300
                    `,
                    activeSection === "servicios"
                      ? `
                          bg-[#7FA51C]
                          text-white
                          shadow-[0_6px_18px_rgba(92,126,26,.18)]
                        `
                      : `
                          text-[#244738]
                          hover:bg-white/45
                          hover:text-[#668C19]
                        `,
                  ].join(" ")}>
                  Servicios
                  <ChevronDown
                    size={14}
                    strokeWidth={1.8}
                    className={[
                      "transition-transform duration-300",
                      servicesOpen ? "rotate-180" : "",
                      activeSection === "servicios"
                        ? "text-white"
                        : "text-[#70847A]",
                    ].join(" ")}
                  />
                </button>

                {/* =============================================
                    SERVICES DROPDOWN
                ============================================= */}

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 12,
                        scale: 0.985,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        y: 8,
                        scale: 0.985,
                      }}
                      transition={{
                        duration: 0.22,
                        ease,
                      }}
                      className="
                        absolute
                        left-1/2
                        top-[58px]
                        w-[430px]
                        -translate-x-1/2
                        overflow-hidden
                        rounded-[26px]
                        border
                        border-white/50
                        bg-[#F6F8F1]/88
                        shadow-[0_28px_80px_rgba(28,61,48,.15)]
                        backdrop-blur-xl
                        backdrop-saturate-150
                      ">
                      <div className="px-6 pb-4 pt-6">
                        <div className="flex items-center gap-3">
                          <span className="h-px w-7 bg-[#7FA51C]" />

                          <p
                            className="
                              text-[11px]
                              font-semibold
                              uppercase
                              tracking-[0.17em]
                              text-[#7FA51C]
                            ">
                            Soluciones GRUNER
                          </p>
                        </div>

                        <p
                          className="
                            mt-2
                            max-w-[310px]
                            text-[13px]
                            leading-5
                            text-[#657D72]
                          ">
                          Soluciones integrales para impulsar una transición
                          sostenible.
                        </p>
                      </div>

                      <div className="px-3 pb-3">
                        {services.map((service) => (
                          <Link
                            key={service.number}
                            to={service.to}
                            onClick={() => {
                              setActiveSection("servicios");
                              setServicesOpen(false);
                            }}
                            className="
                              group
                              grid
                              grid-cols-[34px_1fr_auto]
                              items-center
                              gap-3
                              rounded-[18px]
                              px-3
                              py-3.5
                              transition-all
                              duration-300
                              hover:bg-white/60
                            ">
                            <span
                              className="
                                text-[11px]
                                font-semibold
                                text-[#7FA51C]
                              ">
                              {service.number}
                            </span>

                            <div>
                              <p
                                className="
                                  text-[14px]
                                  font-medium
                                  text-[#17392E]
                                ">
                                {service.title}
                              </p>

                              <p
                                className="
                                  mt-1
                                  text-[12px]
                                  leading-5
                                  text-[#6A8176]
                                ">
                                {service.description}
                              </p>
                            </div>

                            <span
                              className="
                                flex
                                h-8
                                w-8
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-[#708C7E]/15
                                text-[#82958B]
                                transition-all
                                duration-300
                                group-hover:border-[#7FA51C]
                                group-hover:bg-[#7FA51C]
                                group-hover:text-white
                              ">
                              <ArrowUpRight size={14} strokeWidth={1.7} />
                            </span>
                          </Link>
                        ))}
                      </div>

                      <Link
                        to="/#servicios"
                        onClick={() => {
                          setActiveSection("servicios");
                          setServicesOpen(false);
                        }}
                        className="
                          group
                          flex
                          items-center
                          justify-between
                          border-t
                          border-[#315443]/10
                          bg-white/35
                          px-6
                          py-5
                          text-[11px]
                          font-semibold
                          uppercase
                          tracking-[0.14em]
                          text-[#7FA51C]
                          transition-all
                          hover:bg-white/55
                        ">
                        Ver todas las soluciones
                        <ArrowUpRight
                          size={15}
                          strokeWidth={1.7}
                          className="
                            transition-transform
                            duration-300
                            group-hover:-translate-y-0.5
                            group-hover:translate-x-0.5
                          "
                        />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* =================================================
                  MAIN LINKS
              ================================================= */}

              {navigation.map((item) => (
                <Link
                  key={item.id}
                  to={item.to}
                  onClick={() => setActiveSection(item.id)}
                  className={desktopNavClass(item.id)}>
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* =================================================
                LANGUAGE
            ================================================= */}

            <div
              className="
                flex
                items-center
                rounded-full
                border
                border-white/35
                bg-white/55
                p-1
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.08em]
                shadow-[0_10px_35px_rgba(20,56,46,.05)]
                backdrop-blur-md
                backdrop-saturate-150
              ">
              <button
                type="button"
                onClick={() => setLanguage("es")}
                className={[
                  `
                    rounded-full
                    px-3.5
                    py-2.5
                    transition-all
                    duration-300
                  `,
                  language === "es"
                    ? `
                        bg-[#7FA51C]
                        text-white
                      `
                    : `
                        text-[#687F74]
                        hover:bg-white/45
                      `,
                ].join(" ")}>
                ES
              </button>

              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={[
                  `
                    rounded-full
                    px-3.5
                    py-2.5
                    transition-all
                    duration-300
                  `,
                  language === "en"
                    ? `
                        bg-[#7FA51C]
                        text-white
                      `
                    : `
                        text-[#687F74]
                        hover:bg-white/45
                      `,
                ].join(" ")}>
                EN
              </button>
            </div>
          </div>

          {/* =================================================
              MOBILE BUTTON
          ================================================= */}

          <button
            type="button"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((value) => !value)}
            className={`
              pointer-events-auto
              relative
              z-50
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-full
              border
              shadow-[0_10px_30px_rgba(20,56,46,.06)]
              backdrop-blur-md
              backdrop-saturate-150
              transition-all
              duration-300
              xl:hidden

              ${
                mobileOpen
                  ? `
                      border-white/15
                      bg-white/10
                      text-white
                    `
                  : `
                      border-white/35
                      bg-white/60
                      text-[#244738]
                    `
              }
            `}>
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span
                  key="close"
                  initial={{
                    opacity: 0,
                    rotate: -30,
                    scale: 0.85,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 30,
                    scale: 0.85,
                  }}
                  transition={{
                    duration: 0.18,
                  }}>
                  <X size={19} strokeWidth={1.7} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{
                    opacity: 0,
                    rotate: 30,
                    scale: 0.85,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: -30,
                    scale: 0.85,
                  }}
                  transition={{
                    duration: 0.18,
                  }}>
                  <Menu size={20} strokeWidth={1.7} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* =====================================================
          MOBILE MENU
      ===================================================== */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.28,
              ease,
            }}
            className="
              fixed
              inset-0
              z-40
              overflow-hidden
              bg-[#102C23]
              xl:hidden
            ">
            {/* =================================================
                SUBTLE BACKGROUND
            ================================================= */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-0
                bg-[radial-gradient(circle_at_85%_10%,rgba(168,202,55,.13),transparent_30%),radial-gradient(circle_at_10%_90%,rgba(113,148,63,.08),transparent_34%)]
              "
            />

            <div
              aria-hidden="true"
              className="
                pointer-events-none
                absolute
                inset-y-0
                left-[24px]
                w-px
                bg-white/[0.035]
                sm:left-[32px]
              "
            />

            {/* =================================================
                MOBILE CONTENT
            ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                y: 18,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: 12,
              }}
              transition={{
                duration: 0.42,
                delay: 0.04,
                ease,
              }}
              className="
                relative
                flex
                h-[100svh]
                flex-col
                px-5
                pb-5
                pt-[104px]
                sm:px-8
              ">
              {/* =================================================
                  MOBILE INTRO
              ================================================= */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  border-t
                  border-white/10
                  pb-5
                  pt-4
                ">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#A3CA37]" />

                  <p
                    className="
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.17em]
                      text-[#B1D84B]
                    ">
                    Navegación
                  </p>
                </div>

                <p
                  className="
                    text-[11px]
                    uppercase
                    tracking-[0.12em]
                    text-white/30
                  ">
                  GRUNER
                </p>
              </div>

              {/* =================================================
                  MOBILE NAV
              ================================================= */}

              <nav
                className="
                  flex-1
                  overflow-y-auto
                  overscroll-contain
                  pr-1
                ">
                {/* ===============================================
                    MOBILE SERVICES
                =============================================== */}

                <div
                  className="
                    border-b
                    border-white/10
                  ">
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((value) => !value)}
                    className="
                      group
                      flex
                      w-full
                      items-center
                      justify-between
                      gap-4
                      py-5
                      text-left
                    ">
                    <div
                      className="
                        flex
                        items-center
                        gap-4
                      ">
                      <span
                        className="
                          w-6
                          text-[11px]
                          font-semibold
                          tracking-[0.12em]
                          text-[#A3CA37]
                        ">
                        01
                      </span>

                      <span
                        className={`
                          text-[clamp(1.8rem,8vw,2.5rem)]
                          font-normal
                          leading-none
                          tracking-[-0.045em]
                          transition-colors
                          duration-300

                          ${
                            activeSection === "servicios"
                              ? "text-[#B1D84B]"
                              : "text-white"
                          }
                        `}>
                        Servicios
                      </span>
                    </div>

                    <span
                      className="
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/12
                        bg-white/[0.04]
                        text-white/70
                      ">
                      <ChevronDown
                        size={16}
                        strokeWidth={1.6}
                        className={`
                          transition-transform
                          duration-300

                          ${mobileServicesOpen ? "rotate-180" : ""}
                        `}
                      />
                    </span>
                  </button>

                  {/* =============================================
                      MOBILE SERVICES ACCORDION
                  ============================================= */}

                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{
                          height: 0,
                          opacity: 0,
                        }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.35,
                          ease,
                        }}
                        className="overflow-hidden">
                        <div className="pb-5 pl-10">
                          {services.map((service, index) => (
                            <motion.div
                              key={service.number}
                              initial={{
                                opacity: 0,
                                x: -8,
                              }}
                              animate={{
                                opacity: 1,
                                x: 0,
                              }}
                              transition={{
                                delay: index * 0.035,
                              }}>
                              <Link
                                to={service.to}
                                onClick={() => {
                                  setActiveSection("servicios");
                                  closeMobileMenu();
                                }}
                                className="
                                    group
                                    grid
                                    grid-cols-[1fr_auto]
                                    items-center
                                    gap-4
                                    border-t
                                    border-white/[0.08]
                                    py-3.5
                                  ">
                                <div>
                                  <p
                                    className="
                                        text-[14px]
                                        font-medium
                                        leading-5
                                        text-white/88
                                        transition-colors
                                        group-hover:text-[#B1D84B]
                                      ">
                                    {service.title}
                                  </p>

                                  <p
                                    className="
                                        mt-1
                                        text-[12px]
                                        leading-5
                                        text-white/40
                                      ">
                                    {service.description}
                                  </p>
                                </div>

                                <ArrowUpRight
                                  size={15}
                                  strokeWidth={1.6}
                                  className="
                                      text-[#A3CA37]
                                      transition-transform
                                      duration-300
                                      group-hover:-translate-y-0.5
                                      group-hover:translate-x-0.5
                                    "
                                />
                              </Link>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* ===============================================
                    MOBILE MAIN LINKS
                =============================================== */}

                {navigation.map((item, index) => {
                  const number = String(index + 2).padStart(2, "0");

                  const isActive = activeSection === item.id;

                  return (
                    <Link
                      key={item.id}
                      to={item.to}
                      onClick={() => {
                        setActiveSection(item.id);
                        closeMobileMenu();
                      }}
                      className="
                          group
                          flex
                          items-center
                          justify-between
                          gap-4
                          border-b
                          border-white/10
                          py-5
                        ">
                      <div
                        className="
                            flex
                            items-center
                            gap-4
                          ">
                        <span
                          className="
                              w-6
                              text-[11px]
                              font-semibold
                              tracking-[0.12em]
                              text-[#A3CA37]
                            ">
                          {number}
                        </span>

                        <span
                          className={`
                              text-[clamp(1.8rem,8vw,2.5rem)]
                              font-normal
                              leading-none
                              tracking-[-0.045em]
                              transition-colors
                              duration-300

                              ${isActive ? "text-[#B1D84B]" : "text-white"}
                            `}>
                          {item.label}
                        </span>
                      </div>

                      <ArrowUpRight
                        size={18}
                        strokeWidth={1.5}
                        className={`
                            transition-all
                            duration-300

                            ${
                              isActive
                                ? "text-[#B1D84B]"
                                : `
                                    text-white/30
                                    group-hover:-translate-y-0.5
                                    group-hover:translate-x-0.5
                                    group-hover:text-[#A3CA37]
                                  `
                            }
                          `}
                      />
                    </Link>
                  );
                })}

                {/* ===============================================
                    MOBILE STATEMENT
                =============================================== */}

                <div className="py-7">
                  <p
                    className="
                      max-w-[320px]
                      text-[13px]
                      leading-6
                      text-white/42
                    ">
                    Estrategia, ingeniería y tecnología para impulsar soluciones
                    sostenibles.
                  </p>
                </div>
              </nav>

              {/* =================================================
                  MOBILE LANGUAGE
              ================================================= */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-5
                  border-t
                  border-white/10
                  pt-4
                ">
                <p
                  className="
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.15em]
                    text-white/35
                  ">
                  Idioma
                </p>

                <div
                  className="
                    flex
                    items-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.05]
                    p-1
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.08em]
                  ">
                  <button
                    type="button"
                    onClick={() => setLanguage("es")}
                    className={`
                      rounded-full
                      px-4
                      py-2.5
                      transition-all
                      duration-300

                      ${
                        language === "es"
                          ? `
                              bg-[#A3CA37]
                              text-[#102C23]
                            `
                          : `
                              text-white/45
                              hover:text-white
                            `
                      }
                    `}>
                    ES
                  </button>

                  <button
                    type="button"
                    onClick={() => setLanguage("en")}
                    className={`
                      rounded-full
                      px-4
                      py-2.5
                      transition-all
                      duration-300

                      ${
                        language === "en"
                          ? `
                              bg-[#A3CA37]
                              text-[#102C23]
                            `
                          : `
                              text-white/45
                              hover:text-white
                            `
                      }
                    `}>
                    EN
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
