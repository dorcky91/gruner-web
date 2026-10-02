import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

import projectSolar from "../../assets/images/projects/project-solar.jpg";
import projectBess from "../../assets/images/projects/project-bess.jpg";
import projectEv from "../../assets/images/projects/project-ev.jpg";
import projectResiduos from "../../assets/images/projects/project-residuos.jpg";

const stages = [
  {
    number: "01",
    title: "Definición",
    eyebrow: "Entender el reto",
    description:
      "Conceptualización, diagnóstico y definición de una solución adecuada para cada necesidad.",
    capabilities: ["Conceptualización", "Diagnóstico", "Diseño de solución"],
    image: projectSolar,
  },
  {
    number: "02",
    title: "Ingeniería",
    eyebrow: "Convertir la estrategia en proyecto",
    description:
      "Desarrollo técnico, integración e ingeniería para llevar la solución a una etapa ejecutable.",
    capabilities: ["Ingeniería", "Integración", "Desarrollo técnico"],
    image: projectBess,
  },
  {
    number: "03",
    title: "Implementación",
    eyebrow: "Hacerlo realidad",
    description:
      "Suministro, construcción, instalación y puesta en marcha de infraestructura y soluciones.",
    capabilities: ["Suministro", "Construcción", "Puesta en marcha"],
    image: projectEv,
  },
  {
    number: "04",
    title: "Operación",
    eyebrow: "Mantener su desempeño",
    description:
      "Capacidades de operación, mantenimiento y seguimiento posteriores a la implementación.",
    capabilities: ["Operación", "Mantenimiento", "Seguimiento"],
    image: projectResiduos,
  },
];

const ease = [0.22, 1, 0.36, 1];

function ProyectosCapabilitiesSection() {
  const [activeStage, setActiveStage] = useState(0);

  const currentStage = stages[activeStage];

  return (
    <section
      id="proyectos-capacidades"
      className="
        relative
        overflow-hidden
        bg-[#12362D]
        px-5
        py-24
        sm:px-8
        sm:py-28
        lg:px-12
        lg:py-32
        xl:px-16
        2xl:px-20
      ">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_92%_8%,rgba(174,207,70,.12),transparent_24%),radial-gradient(circle_at_8%_92%,rgba(255,255,255,.035),transparent_30%)]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-px
          bg-white/10
        "
      />

      <div className="relative mx-auto max-w-[1760px]">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div
          className="
            grid
            gap-10
            border-b
            border-white/10
            pb-14
            lg:grid-cols-[0.78fr_1.22fr]
            lg:items-end
            lg:gap-20
            lg:pb-16
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
              amount: 0.3,
            }}
            transition={{
              duration: 0.65,
              ease,
            }}>
            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#A8CF46]" />

              <p
                className="
                  text-[12px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-[#B4D75C]
                ">
                Capacidad de ejecución
              </p>
            </div>

            <p
              className="
                mt-5
                max-w-[350px]
                text-[13px]
                leading-6
                text-white/45
              ">
              Del entendimiento del reto a la implementación de una solución.
            </p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 26,
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
              duration: 0.75,
              delay: 0.06,
              ease,
            }}>
            <h2
              className="
                max-w-[1050px]
                text-[clamp(3rem,5.4vw,6.8rem)]
                font-normal
                leading-[0.9]
                tracking-[-0.055em]
                text-white
              ">
              De la idea
              <br />
              <span className="text-[#A8CF46]">a la operación.</span>
            </h2>
          </motion.div>
        </div>

        {/* =====================================================
            DESKTOP EXPERIENCE
        ===================================================== */}

        <div
          className="
            hidden
            grid-cols-[0.88fr_1.12fr]
            gap-16
            pt-16
            lg:grid
            xl:gap-24
            xl:pt-20
          ">
          {/* ===================================================
              LEFT — STAGE INDEX
          =================================================== */}

          <div className="flex flex-col justify-between">
            <div>
              <p
                className="
                  max-w-[500px]
                  text-[clamp(1.35rem,1.9vw,2.1rem)]
                  leading-[1.3]
                  tracking-[-0.03em]
                  text-white/72
                ">
                Nuestra capacidad puede acompañar un proyecto desde su
                definición hasta su implementación y operación.
              </p>
            </div>

            <div className="mt-16">
              {stages.map((stage, index) => {
                const isActive = index === activeStage;

                return (
                  <button
                    key={stage.number}
                    type="button"
                    onMouseEnter={() => setActiveStage(index)}
                    onFocus={() => setActiveStage(index)}
                    onClick={() => setActiveStage(index)}
                    className="
                      group
                      relative
                      grid
                      w-full
                      grid-cols-[52px_1fr_auto]
                      items-center
                      gap-4
                      border-t
                      border-white/10
                      py-5
                      text-left
                    ">
                    <span
                      className={`
                        text-[12px]
                        font-semibold
                        tracking-[0.14em]
                        transition-colors
                        duration-300

                        ${isActive ? "text-[#B4D75C]" : "text-white/30"}
                      `}>
                      {stage.number}
                    </span>

                    <div>
                      <p
                        className={`
                          text-[clamp(1.45rem,2vw,2.2rem)]
                          leading-none
                          tracking-[-0.04em]
                          transition-colors
                          duration-300

                          ${
                            isActive
                              ? "text-white"
                              : "text-white/48 group-hover:text-white/80"
                          }
                        `}>
                        {stage.title}
                      </p>
                    </div>

                    <span
                      className={`
                        h-[7px]
                        w-[7px]
                        rounded-full
                        transition-all
                        duration-300

                        ${
                          isActive
                            ? "scale-100 bg-[#A8CF46]"
                            : "scale-75 bg-white/18"
                        }
                      `}
                    />

                    {isActive && (
                      <motion.span
                        layoutId="activeStageLine"
                        className="
                          absolute
                          bottom-[-1px]
                          left-0
                          h-[2px]
                          w-full
                          bg-[#A8CF46]
                        "
                        transition={{
                          duration: 0.35,
                          ease,
                        }}
                      />
                    )}
                  </button>
                );
              })}

              <div
                className="
                  border-t
                  border-white/10
                "
              />
            </div>
          </div>

          {/* ===================================================
              RIGHT — VISUAL
          =================================================== */}

          <div>
            <div
              className="
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
                bg-[#0D2C24]
                shadow-[0_30px_80px_rgba(0,0,0,.16)]
              ">
              {/* IMAGE */}

              <div
                className="
                  relative
                  aspect-[1.34/1]
                  overflow-hidden
                ">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentStage.number}
                    src={currentStage.image}
                    alt=""
                    initial={{
                      opacity: 0,
                      scale: 1.04,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 1.02,
                    }}
                    transition={{
                      duration: 0.55,
                      ease,
                    }}
                    className="
                      absolute
                      inset-0
                      h-full
                      w-full
                      object-cover
                    "
                  />
                </AnimatePresence>

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#0D2C24]
                    via-[#0D2C24]/18
                    to-transparent
                  "
                />

                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    flex
                    items-end
                    justify-between
                    gap-8
                    p-8
                    xl:p-10
                  ">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`${currentStage.number}-title`}
                      initial={{
                        opacity: 0,
                        y: 16,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{
                        opacity: 0,
                        y: 10,
                      }}
                      transition={{
                        duration: 0.35,
                        ease,
                      }}>
                      <p
                        className="
                          text-[12px]
                          font-semibold
                          uppercase
                          tracking-[0.15em]
                          text-[#B4D75C]
                        ">
                        {currentStage.eyebrow}
                      </p>

                      <h3
                        className="
                          mt-3
                          text-[clamp(2.7rem,4vw,5rem)]
                          leading-[0.95]
                          tracking-[-0.05em]
                          text-white
                        ">
                        {currentStage.title}
                      </h3>
                    </motion.div>
                  </AnimatePresence>

                  <div
                    className="
                      flex
                      h-12
                      w-12
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-white/20
                      bg-white/10
                      text-white
                      backdrop-blur-md
                    ">
                    <ArrowUpRight size={18} strokeWidth={1.6} />
                  </div>
                </div>
              </div>

              {/* =================================================
                  STAGE DETAILS
              ================================================= */}

              <div
                className="
                  grid
                  gap-8
                  border-t
                  border-white/10
                  px-8
                  py-7
                  xl:grid-cols-[1fr_auto]
                  xl:items-end
                  xl:px-10
                  xl:py-8
                ">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={`${currentStage.number}-description`}
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
                      y: 8,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="
                      max-w-[620px]
                      text-[14px]
                      leading-6
                      text-white/60
                    ">
                    {currentStage.description}
                  </motion.p>
                </AnimatePresence>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${currentStage.number}-caps`}
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
                      duration: 0.3,
                    }}
                    className="
                      flex
                      flex-wrap
                      gap-2
                      xl:justify-end
                    ">
                    {currentStage.capabilities.map((capability) => (
                      <span
                        key={capability}
                        className="
                            rounded-full
                            border
                            border-white/10
                            bg-white/[0.05]
                            px-3.5
                            py-2
                            text-[12px]
                            text-white/58
                          ">
                        {capability}
                      </span>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* =================================================
                PROGRESS
            ================================================= */}

            <div className="mt-8">
              <div
                className="
                  relative
                  h-px
                  bg-white/10
                ">
                <motion.div
                  animate={{
                    width: `${((activeStage + 1) / stages.length) * 100}%`,
                  }}
                  transition={{
                    duration: 0.45,
                    ease,
                  }}
                  className="
                    absolute
                    left-0
                    top-0
                    h-px
                    bg-[#A8CF46]
                  "
                />
              </div>

              <div
                className="
                  mt-4
                  flex
                  items-center
                  justify-between
                ">
                <p
                  className="
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.14em]
                    text-white/28
                  ">
                  Idea
                </p>

                <p
                  className="
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.14em]
                    text-white/28
                  ">
                  Operación
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            MOBILE
        ===================================================== */}

        <div
          className="
            mt-14
            space-y-12
            lg:hidden
          ">
          <motion.p
            initial={{
              opacity: 0,
              y: 16,
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
            }}
            className="
              max-w-[620px]
              text-[20px]
              leading-8
              tracking-[-0.025em]
              text-white/68
            ">
            Nuestra capacidad puede acompañar un proyecto desde su definición
            hasta su implementación y operación.
          </motion.p>

          {stages.map((stage, index) => (
            <motion.article
              key={stage.number}
              initial={{
                opacity: 0,
                y: 24,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.65,
                delay: index * 0.04,
                ease,
              }}
              className="
                overflow-hidden
                rounded-[24px]
                border
                border-white/10
                bg-[#0D2C24]
              ">
              <div
                className="
                  relative
                  aspect-[1.2/1]
                  overflow-hidden
                ">
                <img
                  src={stage.image}
                  alt=""
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
                    from-[#0D2C24]
                    via-[#0D2C24]/15
                    to-transparent
                  "
                />

                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    p-6
                  ">
                  <div
                    className="
                      flex
                      items-center
                      justify-between
                      gap-5
                    ">
                    <div>
                      <p
                        className="
                          text-[11px]
                          font-semibold
                          uppercase
                          tracking-[0.15em]
                          text-[#B4D75C]
                        ">
                        {stage.number} · {stage.eyebrow}
                      </p>

                      <h3
                        className="
                          mt-3
                          text-[clamp(2.2rem,10vw,3.5rem)]
                          leading-none
                          tracking-[-0.05em]
                          text-white
                        ">
                        {stage.title}
                      </h3>
                    </div>

                    <span
                      className="
                        flex
                        h-10
                        w-10
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-white/20
                        bg-white/10
                        text-white
                        backdrop-blur-md
                      ">
                      <ArrowUpRight size={16} strokeWidth={1.6} />
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p
                  className="
                    text-[14px]
                    leading-6
                    text-white/58
                  ">
                  {stage.description}
                </p>

                <div
                  className="
                    mt-6
                    flex
                    flex-wrap
                    gap-2
                  ">
                  {stage.capabilities.map((capability) => (
                    <span
                      key={capability}
                      className="
                          rounded-full
                          border
                          border-white/10
                          bg-white/[0.05]
                          px-3
                          py-2
                          text-[12px]
                          text-white/58
                        ">
                      {capability}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* =====================================================
            CLOSING
        ===================================================== */}

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
            amount: 0.25,
          }}
          transition={{
            duration: 0.65,
          }}
          className="
            mt-16
            flex
            flex-col
            gap-8
            border-t
            border-white/10
            pt-8
            sm:flex-row
            sm:items-end
            sm:justify-between
            lg:mt-24
          ">
          <div>
            <p
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.15em]
                text-[#B4D75C]
              ">
              Capacidad integrada
            </p>

            <p
              className="
                mt-3
                max-w-[620px]
                text-[18px]
                leading-7
                tracking-[-0.02em]
                text-white/72
                sm:text-[20px]
              ">
              Estrategia, ingeniería e implementación conectadas alrededor de un
              mismo reto.
            </p>
          </div>

          <button
            type="button"
            onClick={() => {
              document.getElementById("proyectos-destacados")?.scrollIntoView({
                behavior: "smooth",
              });
            }}
            className="
              group
              inline-flex
              w-fit
              items-center
              gap-3
              text-[13px]
              font-medium
              text-white
            ">
            Seguir explorando
            <span
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/15
                bg-white/[0.04]
                transition-all
                duration-300
                group-hover:border-[#A8CF46]
                group-hover:bg-[#A8CF46]
                group-hover:text-[#12362D]
              ">
              <ArrowUpRight size={15} strokeWidth={1.6} />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default ProyectosCapabilitiesSection;
