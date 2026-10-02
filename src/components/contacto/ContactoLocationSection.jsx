import { motion } from "motion/react";

import { FiArrowUpRight, FiMapPin } from "react-icons/fi";

import GrunerMap from "./GrunerMap";

const ease = [0.22, 1, 0.36, 1];

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Justo+Sierra+1814+Colonia+Americana+Guadalajara+Jalisco+44160";

function ContactoLocationSection() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-[#EEEFE8]
        text-[#12362D]
      ">
      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-[220px]
          bottom-[-240px]
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#A8CF46]/[0.05]
          blur-[130px]
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-[1760px]
          px-5
          py-16
          sm:px-8
          sm:py-20
          lg:px-12
          lg:py-24
          xl:px-16
          2xl:px-20
        ">
        {/* ===================================================
            TOP
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 14,
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
          }}
          className="
            flex
            items-center
            justify-between
            gap-6
            border-b
            border-[#12362D]/10
            pb-5
          ">
          <div className="flex items-center gap-3">
            <span className="h-px w-9 bg-[#7FA51C]" />

            <p
              className="
                text-[12px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-[#6E951B]
              ">
              Nuestra ubicación
            </p>
          </div>

          <p
            className="
              hidden
              text-[12px]
              font-medium
              uppercase
              tracking-[0.12em]
              text-[#12362D]/45
              sm:block
            ">
            Guadalajara · México
          </p>
        </motion.div>

        {/* ===================================================
            GRID 6 / 6
        =================================================== */}

        <div
          className="
            mt-10
            grid
            gap-10
            lg:grid-cols-2
            lg:items-stretch
            lg:gap-12
            xl:gap-16
          ">
          {/* =================================================
              LEFT
          ================================================= */}

          <motion.div
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
              duration: 0.75,
              ease,
            }}
            className="
              flex
              min-h-[520px]
              flex-col
              justify-between
              py-2
              lg:py-4
              lg:pr-6
              xl:pr-10
            ">
            <div>
              <div className="flex items-center gap-3">
                <span
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#12362D]
                    text-[#A8CF46]
                  ">
                  <FiMapPin size={16} />
                </span>

                <p
                  className="
                    text-[12px]
                    font-semibold
                    uppercase
                    tracking-[0.15em]
                    text-[#7FA51C]
                  ">
                  Guadalajara, Jalisco
                </p>
              </div>

              <h2
                className="
                  mt-8
                  max-w-[650px]
                  text-[clamp(3rem,5vw,6rem)]
                  font-normal
                  leading-[0.92]
                  tracking-[-0.06em]
                ">
                Encuéntranos
                <span className="block">en el corazón de</span>
                <span className="block text-[#7FA51C]">Guadalajara.</span>
              </h2>

              <p
                className="
                  mt-8
                  max-w-[500px]
                  text-[15px]
                  leading-7
                  text-[#687A71]
                ">
                Nuestro espacio en Guadalajara es un punto de encuentro para
                conversar, conectar ideas y construir soluciones.
              </p>
            </div>

            {/* =================================================
                CTA
            ================================================= */}

            <div
              className="
                mt-10
                border-t
                border-[#12362D]/10
                pt-7
              ">
              <div
                className="
                  flex
                  flex-col
                  gap-5
                  sm:flex-row
                  sm:items-end
                  sm:justify-between
                ">
                <div>
                  <p
                    className="
                      text-[12px]
                      font-semibold
                      uppercase
                      tracking-[0.13em]
                      text-[#839189]
                    ">
                    ¿Vienes a visitarnos?
                  </p>

                  <p
                    className="
                      mt-2
                      max-w-[330px]
                      text-[13px]
                      leading-6
                      text-[#60736A]
                    ">
                    Consulta la mejor ruta desde donde te encuentres.
                  </p>
                </div>

                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    group
                    inline-flex
                    min-h-[50px]
                    w-fit
                    shrink-0
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    bg-[#12362D]
                    px-6
                    text-[13px]
                    font-semibold
                    text-white
                    shadow-[0_12px_28px_rgba(18,54,45,.16)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:bg-[#7FA51C]
                  ">
                  Abrir en Maps
                  <FiArrowUpRight
                    size={15}
                    className="
                      transition-transform
                      duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                    "
                  />
                </a>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              MAP
          ================================================= */}

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
              amount: 0.12,
            }}
            transition={{
              duration: 0.85,
              delay: 0.08,
              ease,
            }}
            className="
              min-h-[500px]
              lg:min-h-[540px]
            ">
            <GrunerMap />
          </motion.div>
        </div>

        {/* ===================================================
            BOTTOM
        =================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: 0.18,
          }}
          className="
            mt-12
            flex
            flex-col
            gap-3
            border-t
            border-[#12362D]/10
            pt-5
            sm:flex-row
            sm:items-center
            sm:justify-between
          ">
          <p className="text-[12px] text-[#75867D]">GRUNER · Guadalajara</p>

          <div className="flex items-center gap-2">
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-[#7FA51C]
              "
            />

            <p
              className="
                text-[12px]
                font-medium
                uppercase
                tracking-[0.11em]
                text-[#65776E]
              ">
              Jalisco · México
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactoLocationSection;
