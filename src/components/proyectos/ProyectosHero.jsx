import { AnimatePresence, motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { useState } from "react";

import projectSolar from "../../assets/images/projects/project-solar.jpg";
import projectBess from "../../assets/images/projects/project-bess.jpg";
import projectEv from "../../assets/images/projects/project-ev.jpg";
import projectResiduos from "../../assets/images/projects/project-residuos.jpg";

const ease = [0.22, 1, 0.36, 1];

const projectAreas = [
  {
    id: "solar",
    number: "01",
    label: "Solar",
    eyebrow: "Generación distribuida",
    image: projectSolar,
  },
  {
    id: "bess",
    number: "02",
    label: "BESS",
    eyebrow: "Almacenamiento energético",
    image: projectBess,
  },
  {
    id: "movilidad",
    number: "03",
    label: "Movilidad",
    eyebrow: "Infraestructura eléctrica",
    image: projectEv,
  },
  {
    id: "residuos",
    number: "04",
    label: "Valorización",
    eyebrow: "Circularidad industrial",
    image: projectResiduos,
  },
];

function ProyectosHero() {
  const [activeProject, setActiveProject] = useState(projectAreas[0]);

  const scrollToPortfolio = () => {
    document
      .getElementById("proyectos-portafolio")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="
        relative isolate
        min-h-[76svh]
        overflow-hidden
        bg-[#071712]
        text-white
      ">
      {/* =====================================================
          ATMOSPHERE
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-0
          bg-[radial-gradient(circle_at_74%_36%,rgba(133,169,43,.09),transparent_28%)]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-y-0 left-[7%]
          hidden w-px
          bg-white/[0.045]
          lg:block
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute inset-y-0 right-[30%]
          hidden w-px
          bg-white/[0.04]
          xl:block
        "
      />

      {/* =====================================================
          MAIN CONTAINER
      ===================================================== */}

      <div
        className="
          relative z-10
          mx-auto flex
          min-h-[76svh]
          max-w-[1760px]
          flex-col
          px-5
          pb-5
          pt-24
          sm:px-8
          sm:pt-28
          lg:px-12
          lg:pb-6
          lg:pt-28
          xl:px-16
          2xl:px-20
        ">
        {/* =====================================================
            TOP BAR
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.65,
            ease,
          }}
          className="
            flex items-center
            justify-between
            border-t
            border-white/10
            pt-4
          ">
          <div className="flex items-center gap-4">
            <span className="h-px w-9 bg-[#A6CF3A]" />

            <span
              className="
                text-[12px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#A6CF3A]
              ">
              Proyectos
            </span>
          </div>

          <span
            className="
              hidden
              text-[12px]
              font-medium
              uppercase
              tracking-[0.15em]
              text-white/30
              sm:block
            ">
            Estrategia · Ingeniería · Implementación
          </span>
        </motion.div>

        {/* =====================================================
            HERO BODY
        ===================================================== */}

        <div
          className="
            grid flex-1
            gap-8
            py-8
            lg:grid-cols-[1.02fr_1.18fr]
            lg:items-center
            lg:gap-10
            xl:gap-12
          ">
          {/* ===================================================
              LEFT
          =================================================== */}

          <div className="relative z-20">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.08,
                ease,
              }}
              className="
                mb-5
                max-w-[360px]
                text-[14px]
                leading-6
                text-white/48
                sm:text-[15px]
              ">
              Infraestructura y soluciones desarrolladas para convertir retos
              complejos en proyectos concretos.
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.16,
                ease,
              }}
              className="
                max-w-[900px]
                text-[clamp(3.4rem,6.2vw,7.4rem)]
                font-normal
                leading-[0.86]
                tracking-[-0.072em]
              ">
              Proyectos que
              <span className="block">convierten visión</span>
              <span className="block text-[#A3CA37]">en realidad.</span>
            </motion.h1>

            <motion.button
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.34,
                ease,
              }}
              onClick={scrollToPortfolio}
              className="
                group
                mt-7
                flex items-center
                gap-4
                text-[13px]
                font-semibold
                uppercase
                tracking-[0.14em]
                text-white
              ">
              <span
                className="
                  flex h-10 w-10
                  items-center justify-center
                  rounded-full
                  border border-white/20
                  transition-all
                  duration-300
                  group-hover:border-[#A3CA37]
                  group-hover:bg-[#A3CA37]
                  group-hover:text-[#0A2018]
                ">
                <ArrowDown
                  size={16}
                  strokeWidth={1.6}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-y-1
                  "
                />
              </span>
              Explorar proyectos
            </motion.button>
          </div>

          {/* ===================================================
              RIGHT — PROJECT WINDOW
          =================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 24,
              scale: 0.99,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.9,
              delay: 0.1,
              ease,
            }}
            className="relative">
            <div
              className="
                relative
                aspect-[1.45/1]
                overflow-hidden
                border border-white/[0.08]
                bg-[#0A2119]
                sm:aspect-[1.55/1]
                lg:aspect-[1.38/1]
                xl:aspect-[1.5/1]
              ">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeProject.id}
                  src={activeProject.image}
                  alt={`Proyecto de referencia ${activeProject.label}`}
                  initial={{
                    opacity: 0,
                    scale: 1.045,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 1.015,
                  }}
                  transition={{
                    duration: 0.6,
                    ease,
                  }}
                  className="
                    absolute inset-0
                    h-full w-full
                    object-cover
                  "
                />
              </AnimatePresence>

              <div
                className="
                  absolute inset-0
                  bg-gradient-to-t
                  from-[#061610]/68
                  via-transparent
                  to-[#061610]/8
                "
              />

              <div
                className="
                  absolute inset-0
                  bg-gradient-to-r
                  from-[#071712]/14
                  via-transparent
                  to-transparent
                "
              />

              {/* IMAGE META */}

              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeProject.id}-meta`}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -6,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="
                    absolute
                    bottom-5
                    left-5
                    right-5
                    flex items-end
                    justify-between
                    gap-5
                    sm:bottom-6
                    sm:left-6
                    sm:right-6
                  ">
                  <div>
                    <p
                      className="
                        text-[12px]
                        font-semibold
                        uppercase
                        tracking-[0.16em]
                        text-[#B0D953]
                      ">
                      {activeProject.number}
                    </p>

                    <p
                      className="
                        mt-1.5
                        text-[20px]
                        font-medium
                        tracking-[-0.03em]
                        text-white
                        sm:text-[23px]
                      ">
                      {activeProject.label}
                    </p>
                  </div>

                  <p
                    className="
                      max-w-[210px]
                      text-right
                      text-[12px]
                      leading-5
                      text-white/42
                    ">
                    {activeProject.eyebrow}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* CORNER DETAIL */}

              <div
                aria-hidden="true"
                className="
                  absolute right-0 top-0
                  h-16 w-16
                  border-b border-l
                  border-white/[0.07]
                "
              />
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            PROJECT INDEX
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 18,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.75,
            delay: 0.42,
            ease,
          }}
          className="
            border-y
            border-white/10
          ">
          <div
            className="
              grid
              sm:grid-cols-2
              lg:grid-cols-4
            ">
            {projectAreas.map((project) => {
              const isActive = activeProject.id === project.id;

              return (
                <button
                  key={project.id}
                  type="button"
                  onMouseEnter={() => setActiveProject(project)}
                  onFocus={() => setActiveProject(project)}
                  onClick={() => setActiveProject(project)}
                  className={`
                    group relative
                    flex min-h-[72px]
                    items-center justify-between
                    overflow-hidden
                    border-white/10
                    px-4 py-4
                    text-left
                    transition-colors
                    duration-400
                    sm:px-5
                    lg:min-h-[78px]
                    lg:border-r
                    lg:last:border-r-0
                    ${isActive ? "bg-white/[0.055]" : "hover:bg-white/[0.03]"}
                  `}>
                  <span
                    aria-hidden="true"
                    className={`
                      absolute
                      bottom-0 left-0
                      h-[2px]
                      bg-[#A3CA37]
                      transition-all
                      duration-500
                      ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                    `}
                  />

                  <div>
                    <span
                      className={`
                        text-[12px]
                        font-semibold
                        tracking-[0.14em]
                        transition-colors
                        duration-300
                        ${isActive ? "text-[#A3CA37]" : "text-white/28"}
                      `}>
                      {project.number}
                    </span>

                    <p
                      className={`
                        mt-1
                        text-[14px]
                        font-medium
                        transition-colors
                        duration-300
                        ${
                          isActive
                            ? "text-white"
                            : "text-white/52 group-hover:text-white"
                        }
                      `}>
                      {project.label}
                    </p>
                  </div>

                  <span
                    className={`
                      h-1.5 w-1.5
                      rounded-full
                      transition-all
                      duration-300
                      ${
                        isActive
                          ? "bg-[#A3CA37] shadow-[0_0_12px_rgba(163,202,55,.65)]"
                          : "bg-white/18"
                      }
                    `}
                  />
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* =====================================================
            BOTTOM SIGNATURE
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.75,
            delay: 0.55,
          }}
          className="
            flex flex-col
            gap-3
            pt-4
            sm:flex-row
            sm:items-center
            sm:justify-between
          ">
          <p
            className="
              text-[12px]
              font-semibold
              uppercase
              tracking-[0.15em]
              text-white/32
            ">
            Estrategia → Ingeniería → Implementación → Operación
          </p>

          <p
            className="
              text-[12px]
              text-white/22
            ">
            GRUNER · Soluciones sostenibles
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default ProyectosHero;
