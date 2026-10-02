import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

function ProyectosCTASection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#E4E8DE]
        px-5
        py-20
        sm:px-8
        sm:py-24
        lg:px-12
        lg:py-28
        xl:px-16
        2xl:px-20
      ">
      {/* =====================================================
          SUBTLE BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          right-[-10%]
          top-[-40%]
          h-[620px]
          w-[620px]
          rounded-full
          bg-[#A7C64A]/[0.08]
          blur-[100px]
        "
      />

      <div className="relative mx-auto max-w-[1760px]">
        {/* =====================================================
            TOP
        ===================================================== */}

        <div
          className="
            flex
            items-center
            justify-between
            gap-8
            border-t
            border-[#17382E]/15
            pt-6
          ">
          <motion.div
            initial={{
              opacity: 0,
              x: -14,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.5,
            }}
            transition={{
              duration: 0.6,
              ease,
            }}
            className="
              flex
              items-center
              gap-3
            ">
            <span className="h-px w-9 bg-[#7FA51C]" />

            <p
              className="
                text-[12px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-[#6D921E]
              ">
              El siguiente proyecto
            </p>
          </motion.div>

          <motion.span
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
            className="
              hidden
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.15em]
              text-[#718078]
              sm:block
            ">
            GRUNER
          </motion.span>
        </div>

        {/* =====================================================
            MAIN STATEMENT
        ===================================================== */}

        <div
          className="
            grid
            gap-12
            pb-10
            pt-16
            lg:grid-cols-[1fr_0.34fr]
            lg:items-end
            lg:gap-16
            lg:pb-14
            lg:pt-20
          ">
          <motion.div
            initial={{
              opacity: 0,
              y: 28,
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
              duration: 0.8,
              ease,
            }}>
            <p
              className="
                mb-6
                max-w-[560px]
                text-[14px]
                leading-6
                text-[#607169]
              ">
              Cada proyecto comienza con un reto concreto y una conversación
              para entenderlo.
            </p>

            <h2
              className="
                max-w-[1250px]
                text-[clamp(3.2rem,7vw,8.7rem)]
                font-normal
                leading-[0.84]
                tracking-[-0.065em]
                text-[#15382D]
              ">
              ¿Qué podemos
              <br />
              <span
                className="
                  inline-flex
                  items-center
                  gap-[0.15em]
                  text-[#7FA51C]
                ">
                construir
              </span>
              <br />
              <span className="text-[#15382D]">juntos?</span>
            </h2>
          </motion.div>

          {/* =================================================
              SIDE COPY
          ================================================= */}

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
              amount: 0.35,
            }}
            transition={{
              duration: 0.7,
              delay: 0.1,
              ease,
            }}
            className="
              max-w-[390px]
              lg:justify-self-end
            ">
            <p
              className="
                text-[16px]
                leading-7
                tracking-[-0.015em]
                text-[#415B50]
              ">
              Conversemos sobre el reto, el contexto y las posibilidades para
              convertirlo en una solución ejecutable.
            </p>

            <div
              className="
                mt-8
                flex
                flex-wrap
                gap-x-5
                gap-y-2
                text-[12px]
                text-[#708078]
              ">
              <span>Energía</span>
              <span className="text-[#7FA51C]">·</span>
              <span>Movilidad</span>
              <span className="text-[#7FA51C]">·</span>
              <span>Circularidad</span>
              <span className="text-[#7FA51C]">·</span>
              <span>Sostenibilidad</span>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            BIG CTA
        ===================================================== */}

        <motion.a
          href="/#contacto"
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
            amount: 0.4,
          }}
          transition={{
            duration: 0.7,
            delay: 0.08,
            ease,
          }}
          className="
            group
            relative
            flex
            min-h-[104px]
            items-center
            justify-between
            gap-6
            overflow-hidden
            border-y
            border-[#17382E]/15
            py-6
            text-[#15382D]
            transition-colors
            duration-500
            sm:min-h-[120px]
            lg:min-h-[132px]
          ">
          {/* HOVER FILL */}

          <span
            aria-hidden="true"
            className="
              absolute
              inset-0
              origin-bottom
              scale-y-0
              bg-[#15382D]
              transition-transform
              duration-500
              ease-out
              group-hover:scale-y-100
            "
          />

          <span
            className="
              relative
              z-10
              text-[clamp(1.65rem,3vw,3.6rem)]
              font-normal
              leading-none
              tracking-[-0.045em]
              transition-colors
              duration-500
              group-hover:text-white
            ">
            Cuéntanos sobre tu próximo proyecto
          </span>

          <span
            className="
              relative
              z-10
              flex
              h-12
              w-12
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[#7FA51C]
              text-white
              transition-all
              duration-500
              group-hover:rotate-[-8deg]
              group-hover:bg-[#A8CF46]
              group-hover:text-[#15382D]
              sm:h-14
              sm:w-14
              lg:h-16
              lg:w-16
            ">
            <ArrowUpRight size={21} strokeWidth={1.6} />
          </span>
        </motion.a>

        {/* =====================================================
            BOTTOM SIGNATURE
        ===================================================== */}

        <div
          className="
            flex
            flex-col
            gap-5
            pt-7
            sm:flex-row
            sm:items-center
            sm:justify-between
          ">
          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.15,
            }}
            className="
              text-[12px]
              leading-5
              text-[#6A7B72]
            ">
            Estrategia · Ingeniería · Implementación
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              x: -10,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="
              flex
              items-center
              gap-3
              text-[12px]
              font-medium
              text-[#496158]
            ">
            <span>Del reto a la solución</span>

            <ArrowRight
              size={14}
              strokeWidth={1.6}
              className="text-[#7FA51C]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default ProyectosCTASection;
