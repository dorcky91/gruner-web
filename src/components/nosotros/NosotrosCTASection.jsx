import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

const ease = [0.22, 1, 0.36, 1];

function NosotrosCTASection() {
  return (
    <section
      id="nosotros-cta"
      className="
        relative overflow-hidden
        bg-[#F1F2EC]
        px-5 py-24
        text-[#12392E]
        sm:px-8 sm:py-28
        lg:px-12 lg:py-32
        xl:px-16 xl:py-36
        2xl:px-20
      ">
      {/* Línea arquitectónica */}
      <motion.div
        aria-hidden="true"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.1, ease }}
        className="
          pointer-events-none
          absolute right-[8%] top-0
          hidden h-[42%] w-px
          origin-top bg-[#8DAF31]/40
          lg:block
        "
      />

      <div className="relative mx-auto max-w-[1760px]">
        {/* =====================================================
            TOP
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease }}
          className="
            flex items-center justify-between
            border-t border-[#12392E]/15
            pt-6
          ">
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-[#84A92B]" />

            <span
              className="
                text-[12px] font-semibold uppercase
                tracking-[0.18em] text-[#769422]
              ">
              El siguiente paso
            </span>
          </div>

          <span
            className="
              hidden text-[12px] font-medium uppercase
              tracking-[0.15em] text-[#12392E]/35
              sm:block
            ">
            GRUNER · Soluciones sostenibles
          </span>
        </motion.div>

        {/* =====================================================
            STATEMENT
        ===================================================== */}

        <div
          className="
            grid gap-14
            pb-20 pt-20
            lg:grid-cols-[0.27fr_1.73fr]
            lg:gap-16
            lg:pb-28 lg:pt-28
          ">
          {/* Marca lateral */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="hidden lg:flex lg:items-end">
            <div>
              <p
                className="
                  text-[13px] font-semibold
                  tracking-[-0.01em]
                  text-[#12392E]
                ">
                GRUNER
              </p>

              <p
                className="
                  mt-2 max-w-[180px]
                  text-[12px] leading-5
                  text-[#12392E]/45
                ">
                Facilitadores de soluciones sostenibles.
              </p>
            </div>
          </motion.div>

          {/* Headline */}

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease }}>
            <h2
              className="
                max-w-[1250px]
                text-[clamp(3.2rem,6.4vw,7.7rem)]
                font-normal
                leading-[0.91]
                tracking-[-0.07em]
              ">
              Las grandes transformaciones
              <span className="block text-[#799C25]">
                empiezan con una decisión.
              </span>
            </h2>

            <div
              className="
                mt-12 grid gap-8
                border-t border-[#12392E]/10
                pt-8
                sm:grid-cols-[1fr_auto]
                sm:items-start
                lg:mt-16 lg:pt-10
              ">
              <p
                className="
                  max-w-[540px]
                  text-[15px] leading-7
                  text-[#65766F]
                  sm:text-[16px]
                ">
                Si existe un reto de sostenibilidad, energía, movilidad o
                valorización por resolver, podemos empezar por entenderlo.
              </p>

              <span
                className="
                  text-[12px] font-semibold uppercase
                  tracking-[0.15em]
                  text-[#12392E]/35
                ">
                Estrategia · Ingeniería · Acción
              </span>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            MAIN INTERACTION
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.8, ease }}>
          <Link
            to="/#contacto"
            className="
              group relative block
              overflow-hidden
              border-y border-[#12392E]/15
            ">
            {/* Fondo hover */}
            <span
              aria-hidden="true"
              className="
                absolute inset-0
                origin-left scale-x-0
                bg-[#12392E]
                transition-transform duration-700
                ease-[cubic-bezier(.22,1,.36,1)]
                group-hover:scale-x-100
              "
            />

            <div
              className="
                relative z-10
                flex min-h-[132px]
                items-center justify-between
                gap-8 py-8
                sm:min-h-[148px]
                lg:min-h-[164px]
              ">
              <div className="flex items-center gap-5 sm:gap-8">
                <span
                  className="
                    hidden text-[12px] font-semibold
                    tracking-[0.14em]
                    text-[#799C25]
                    transition-colors duration-500
                    group-hover:text-[#A9D13E]
                    sm:block
                  ">
                  01
                </span>

                <span
                  className="
                    text-[clamp(1.8rem,3.4vw,4.1rem)]
                    font-normal leading-none
                    tracking-[-0.055em]
                    text-[#12392E]
                    transition-colors duration-500
                    group-hover:text-white
                  ">
                  Cuéntanos qué quieres transformar
                </span>
              </div>

              <span
                className="
                  flex h-14 w-14 shrink-0
                  items-center justify-center
                  rounded-full
                  border border-[#12392E]/20
                  text-[#12392E]
                  transition-all duration-500
                  group-hover:rotate-45
                  group-hover:border-[#A6CE39]
                  group-hover:bg-[#A6CE39]
                  group-hover:text-[#12392E]
                  sm:h-16 sm:w-16
                  lg:h-[72px] lg:w-[72px]
                ">
                <ArrowUpRight size={25} strokeWidth={1.5} />
              </span>
            </div>
          </Link>
        </motion.div>

        {/* =====================================================
            SIGNATURE
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="
            flex flex-col gap-6
            pt-8
            sm:flex-row sm:items-center
            sm:justify-between
          ">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#89AD2E]" />

            <span
              className="
                text-[12px] font-medium
                uppercase tracking-[0.15em]
                text-[#12392E]/45
              ">
              Un futuro seguro y sostenible para todos
            </span>
          </div>

          <span className="text-[13px] text-[#12392E]/40">GRUNER</span>
        </motion.div>
      </div>
    </section>
  );
}

export default NosotrosCTASection;
