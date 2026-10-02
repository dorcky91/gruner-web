import { motion } from "motion/react";

/* =========================================================
   ICON
========================================================= */

const ArrowUpRight = ({ size = 20, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true">
    <path d="M7 17 17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

/* =========================================================
   ANTHESIS
========================================================= */

function AnthesisSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#17392E]
        px-5
        py-24
        text-white

        sm:px-8
        lg:px-12
        lg:py-32
        xl:px-16
        2xl:px-20
      ">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_76%_42%,rgba(157,216,39,.20),transparent_30%),radial-gradient(circle_at_18%_78%,rgba(127,165,28,.13),transparent_27%)]
        "
      />

      {/* GRID */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.055]
          [background-image:linear-gradient(rgba(255,255,255,.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.16)_1px,transparent_1px)]
          [background-size:42px_42px]
        "
      />

      {/* GIANT TEXT */}

      <div
        className="
          pointer-events-none
          absolute
          -right-[3%]
          top-[2%]
          select-none
          text-[clamp(8rem,20vw,23rem)]
          font-semibold
          leading-none
          tracking-[-0.08em]
          text-white/[0.025]
        ">
        GLOBAL
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
        ">
        {/* ===================================================
            TOP LABEL
        =================================================== */}

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
            amount: 0.5,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mb-14
            flex
            items-center
            gap-4
          ">
          <span className="h-px w-10 bg-[#9DD827]" />

          <p
            className="
              text-[12px]
              font-semibold
              uppercase
              tracking-[0.2em]
              text-[#B7DB64]
            ">
            Alianza estratégica
          </p>
        </motion.div>

        {/* ===================================================
            MAIN
        =================================================== */}

        <div
          className="
            grid
            gap-16

            lg:grid-cols-[1.15fr_.85fr]
            lg:items-center
            lg:gap-20

            xl:gap-28
          ">
          {/* =================================================
              LEFT
          ================================================= */}

          <div>
            <motion.p
              initial={{
                opacity: 0,
                y: 34,
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
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                max-w-[980px]
                text-[clamp(3.4rem,6.2vw,8rem)]
                font-normal
                leading-[0.88]
                tracking-[-0.07em]
              ">
              Alcance local.
              <span className="block text-[#9DD827]">Experiencia global.</span>
            </motion.p>

            <motion.p
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
                amount: 0.35,
              }}
              transition={{
                duration: 0.8,
                delay: 0.12,
              }}
              className="
                mt-9
                max-w-[700px]
                text-base
                leading-8
                text-white/68

                sm:text-lg
              ">
              GRUNER amplía su capacidad en sostenibilidad y transformación
              climática mediante su alianza estratégica con Anthesis, combinando
              ejecución local con conocimiento y experiencia internacional.
            </motion.p>

            <motion.a
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
              }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              href="#contacto"
              aria-label="Ir a contacto para conversar sobre un proyecto"
              className="
                group
                mt-10
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
                  bg-[#7FA51C]
                  text-white
                  transition-all
                  duration-300

                  group-hover:rotate-45
                  group-hover:bg-[#9DD827]
                  group-hover:text-[#17392E]
                ">
                <ArrowUpRight size={19} />
              </span>

              <span
                className="
                  text-sm
                  font-medium
                  text-white
                ">
                Conversemos sobre tu proyecto
              </span>
            </motion.a>
          </div>

          {/* =================================================
              RIGHT CARD
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 40,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              relative
              overflow-hidden
              rounded-[48px]
              border
              border-white/10
              bg-white/[0.055]
              p-8
              backdrop-blur-xl

              sm:p-10
              xl:p-12
            ">
            {/* GLOW */}

            <div
              className="
                pointer-events-none
                absolute
                -right-24
                -top-20
                h-[340px]
                w-[340px]
                rounded-full
                bg-[#9DD827]/16
                blur-[100px]
              "
            />

            <div className="relative z-10">
              <p
                className="
                  text-[12px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#B7DB64]
                ">
                GRUNER × ANTHESIS
              </p>

              <div
                className="
                  mt-14
                  flex
                  items-end
                  gap-3
                ">
                <span
                  className="
                    text-[clamp(4.8rem,8vw,9rem)]
                    font-semibold
                    leading-none
                    tracking-[-0.08em]
                    text-white
                  ">
                  +
                </span>

                <span
                  className="
                    pb-3
                    text-[22px]
                    font-medium
                    leading-tight
                    tracking-[-0.035em]
                    text-white/90

                    sm:text-[28px]
                  ">
                  capacidad
                  <br />
                  internacional
                </span>
              </div>

              <div
                className="
                  mt-14
                  grid
                  gap-6
                  border-t
                  border-white/10
                  pt-7

                  sm:grid-cols-2
                ">
                <div>
                  <span
                    className="
                      block
                      text-[12px]
                      font-semibold
                      uppercase
                      tracking-[0.15em]
                      text-[#9DD827]
                    ">
                    GRUNER
                  </span>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-6
                      text-white/60
                    ">
                    Conocimiento del contexto local, ingeniería y ejecución de
                    proyectos.
                  </p>
                </div>

                <div>
                  <span
                    className="
                      block
                      text-[12px]
                      font-semibold
                      uppercase
                      tracking-[0.15em]
                      text-[#9DD827]
                    ">
                    ANTHESIS
                  </span>

                  <p
                    className="
                      mt-3
                      text-sm
                      leading-6
                      text-white/60
                    ">
                    Experiencia internacional en sostenibilidad y transformación
                    climática.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ===================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
            duration: 0.8,
            delay: 0.1,
          }}
          className="
            mt-20
            border-t
            border-white/10
            pt-10

            lg:mt-28
          ">
          <div
            className="
              grid
              gap-8

              lg:grid-cols-[.45fr_1.55fr]
            ">
            <p
              className="
                text-[12px]
                font-semibold
                uppercase
                tracking-[0.2em]
                text-[#9DD827]
              ">
              Una misma visión
            </p>

            <p
              className="
                max-w-[1050px]
                text-[clamp(2rem,3.5vw,4.4rem)]
                font-normal
                leading-[1.04]
                tracking-[-0.05em]
                text-white
              ">
              Combinar conocimiento local, experiencia internacional e
              implementación para acelerar soluciones sostenibles.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AnthesisSection;
