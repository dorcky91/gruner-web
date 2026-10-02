import { motion } from "motion/react";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import nosotrosHero from "../../assets/images/nosotros/nosotros-hero.jpg";

function NosotrosHero() {
  const scrollToManifesto = () => {
    document
      .getElementById("nosotros-manifiesto")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      className="
        relative
        min-h-[86svh]
        overflow-hidden
        bg-[#0B241E]
        pt-[88px]
        text-white
      ">
      {/* =====================================================
          IMAGE
      ===================================================== */}

      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.06 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          src={nosotrosHero}
          alt="Paisaje natural que representa la visión sostenible de GRUNER"
          className="
            h-full
            w-full
            object-cover
            object-center
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(90deg,rgba(5,25,20,.92)_0%,rgba(5,25,20,.68)_42%,rgba(5,25,20,.28)_72%,rgba(5,25,20,.12)_100%)]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-[linear-gradient(180deg,rgba(5,25,20,.10)_0%,rgba(5,25,20,.08)_48%,rgba(5,25,20,.76)_100%)]
          "
        />
      </div>

      {/* =====================================================
          BACKGROUND DETAILS
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.12]
          [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)]
          [background-size:80px_80px]
        "
      />

      <span
        className="
          pointer-events-none
          absolute
          -right-[1vw]
          top-[92px]
          hidden
          select-none
          text-[clamp(9rem,17vw,19rem)]
          font-semibold
          leading-none
          tracking-[-0.09em]
          text-white/[0.035]

          2xl:block
        ">
        ABOUT
      </span>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[calc(86svh-88px)]
          max-w-[1760px]
          flex-col
          justify-end
          px-5
          pb-10

          sm:px-8
          lg:px-12
          lg:pb-12
          xl:px-16
          2xl:px-20
        ">
        <div
          className="
            grid
            gap-10

            lg:grid-cols-[1.08fr_.92fr]
            lg:items-end
            lg:gap-16
          ">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <div className="flex items-center gap-4">
              <span className="h-px w-10 bg-[#B8F23A]" />

              <p
                className="
                  text-[12px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]
                  text-[#B8F23A]
                ">
                Nosotros
              </p>
            </div>

            <h1
              className="
                mt-7
                max-w-[980px]
                text-[clamp(4.6rem,7.2vw,9.8rem)]
                font-normal
                leading-[0.84]
                tracking-[-0.08em]
              ">
              Un futuro seguro
              <span className="block">y sostenible</span>
              <span className="block text-[#B8F23A]">para todos.</span>
            </h1>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.18,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              max-w-[540px]
              lg:justify-self-end
            ">
            <p
              className="
                text-[18px]
                font-medium
                leading-8
                text-white/88
              ">
              La sostenibilidad del planeta no es negociable.
            </p>

            <p
              className="
                mt-4
                text-[15px]
                leading-7
                text-white/58
              ">
              Facilitamos soluciones sostenibles orientadas a la regeneración de
              recursos, la electrificación y la mitigación de emisiones.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={scrollToManifesto}
                className="
                  group
                  inline-flex
                  h-12
                  items-center
                  gap-3
                  rounded-full
                  bg-[#B8F23A]
                  px-5
                  text-[13px]
                  font-medium
                  text-[#102E27]
                  transition-all
                  duration-300

                  hover:bg-white
                ">
                Conocer nuestra visión
                <ArrowDownRight
                  size={16}
                  strokeWidth={1.7}
                  className="
                    transition-transform
                    duration-300

                    group-hover:translate-x-0.5
                    group-hover:translate-y-0.5
                  "
                />
              </button>

              <a
                href="#contacto"
                className="
                  group
                  inline-flex
                  h-12
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-white/15
                  bg-white/[0.03]
                  px-5
                  text-[13px]
                  font-medium
                  text-white
                  backdrop-blur-sm
                  transition-all

                  hover:border-[#B8F23A]/50
                  hover:bg-white/[0.05]
                ">
                Hablemos
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.6}
                  className="
                    text-[#B8F23A]
                    transition-transform

                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </a>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM LINE
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="
            mt-10
            flex
            flex-col
            gap-4
            border-t
            border-white/10
            pt-5

            sm:flex-row
            sm:items-center
            sm:justify-between
          ">
          <p
            className="
              text-[11px]
              uppercase
              tracking-[0.16em]
              text-white/35
            ">
            Regeneración · Electrificación · Descarbonización
          </p>

          <p
            className="
              text-[11px]
              uppercase
              tracking-[0.16em]
              text-[#B8F23A]
            ">
            GRUNER / Soluciones sostenibles
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default NosotrosHero;
