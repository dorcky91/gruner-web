import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

import aeej from "../../assets/images/logos/afiliaciones/aeej.png";
import alianzaEmpresarial from "../../assets/images/logos/afiliaciones/alianza-empresarial.png";
import amive from "../../assets/images/logos/afiliaciones/AMIVE.png";
import asolmex from "../../assets/images/logos/afiliaciones/asolmex.png";
import certified from "../../assets/images/logos/afiliaciones/certified.png";
import cmbiogas from "../../assets/images/logos/afiliaciones/cmbiogas.png";
import holland from "../../assets/images/logos/afiliaciones/holland.png";

const affiliations = [
  {
    name: "ASOLMEX",
    description: "Asociación Mexicana de Energía Solar",
    logo: asolmex,
  },
  {
    name: "AMIVE",
    description:
      "Asociación Mexicana de Infraestructura para Vehículos Eléctricos",
    logo: amive,
  },
  {
    name: "CNBiogás",
    description: "Consejo Nacional de Biogás",
    logo: cmbiogas,
  },
  {
    name: "AEEJ",
    description: "Agencia de Energía del Estado de Jalisco",
    logo: aeej,
  },
  {
    name: "B Corp Climate Collective",
    description: "Comunidad empresarial por la acción climática",
    logo: certified,
  },
  {
    name: "Holland House México",
    description: "Red empresarial México–Países Bajos",
    logo: holland,
  },
  {
    name: "Alianza Empresarial por el Clima",
    description: "Colaboración empresarial frente al cambio climático",
    logo: alianzaEmpresarial,
  },
];

const ease = [0.22, 1, 0.36, 1];

function NosotrosAffiliationsSection() {
  return (
    <section
      id="afiliaciones"
      className="
        relative overflow-hidden
        bg-[#FCFCF9]
        px-5 py-24
        text-[#153A2F]
        sm:px-8
        lg:px-12 lg:py-32
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
          absolute -left-48 top-20
          h-[520px] w-[520px]
          rounded-full
          bg-[#A9D52B]/[0.055]
          blur-[160px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute right-[-180px] bottom-[-180px]
          h-[480px] w-[480px]
          rounded-full
          bg-[#0E4937]/[0.035]
          blur-[150px]
        "
      />

      <div className="relative z-10 mx-auto max-w-[1760px]">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.75,
            ease,
          }}
          className="
            grid gap-10
            border-b border-[#153A2F]/10
            pb-12
            lg:grid-cols-[0.36fr_1.64fr]
            lg:gap-16
            lg:pb-16
          ">
          {/* Eyebrow */}

          <div className="flex items-start gap-4 pt-2">
            <span className="mt-2 h-px w-10 bg-[#7EA51F]" />

            <p
              className="
                text-[12px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#6F921D]
              ">
              Afiliaciones
            </p>
          </div>

          {/* Main copy */}

          <div
            className="
              flex flex-col gap-8
              xl:flex-row
              xl:items-end
              xl:justify-between
            ">
            <h2
              className="
                max-w-[950px]
                text-[clamp(3.1rem,5.4vw,6.6rem)]
                font-normal
                leading-[0.91]
                tracking-[-0.07em]
              ">
              Conectados con el
              <span className="block text-[#789F20]">
                ecosistema que transforma.
              </span>
            </h2>

            <p
              className="
                max-w-[420px]
                text-[15px]
                leading-7
                text-[#687A73]
              ">
              Participamos en organizaciones y alianzas que impulsan la
              sostenibilidad, la transición energética, la movilidad y la acción
              climática.
            </p>
          </div>
        </motion.div>

        {/* =====================================================
            AFFILIATIONS
        ===================================================== */}

        <div className="mt-6">
          {affiliations.map((affiliation, index) => (
            <motion.article
              key={affiliation.name}
              initial={{
                opacity: 0,
                y: 22,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.45,
              }}
              transition={{
                duration: 0.65,
                delay: Math.min(index * 0.05, 0.25),
                ease,
              }}
              className="
                group
                relative
                grid
                min-h-[150px]
                items-center
                gap-6
                border-b
                border-[#153A2F]/10
                py-7
                sm:min-h-[165px]
                sm:grid-cols-[72px_190px_1fr_48px]
                sm:gap-8
                lg:grid-cols-[90px_260px_1fr_56px]
                lg:gap-12
                lg:py-8
              ">
              {/* Hover background */}

              <div
                aria-hidden="true"
                className="
                  pointer-events-none
                  absolute inset-0
                  origin-left
                  scale-x-0
                  bg-[#F3F5ED]
                  transition-transform
                  duration-500
                  ease-out
                  group-hover:scale-x-100
                "
              />

              {/* Number */}

              <div
                className="
                  relative z-10
                  hidden
                  sm:block
                ">
                <span
                  className="
                    text-[12px]
                    font-semibold
                    tracking-[0.14em]
                    text-[#153A2F]/30
                    transition-colors
                    duration-300
                    group-hover:text-[#789F20]
                  ">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Logo */}

              <div
                className="
                  relative z-10
                  flex h-[76px]
                  w-full
                  items-center
                  justify-start
                  sm:h-[82px]
                ">
                <img
                  src={affiliation.logo}
                  alt={affiliation.name}
                  loading="lazy"
                  className="
                    max-h-[64px]
                    max-w-[190px]
                    object-contain
                    object-left
                    opacity-[0.72]
                    grayscale
                    transition-all
                    duration-500
                    ease-out
                    group-hover:scale-[1.025]
                    group-hover:opacity-100
                    group-hover:grayscale-0
                    sm:max-h-[68px]
                    sm:max-w-[210px]
                    lg:max-w-[235px]
                  "
                />
              </div>

              {/* Information */}

              <div
                className="
                  relative z-10
                  flex flex-col gap-2
                  lg:grid
                  lg:grid-cols-[0.7fr_1fr]
                  lg:items-center
                  lg:gap-12
                ">
                <h3
                  className="
                    text-[20px]
                    font-medium
                    leading-tight
                    tracking-[-0.025em]
                    text-[#153A2F]
                    sm:text-[22px]
                    lg:text-[24px]
                  ">
                  {affiliation.name}
                </h3>

                <p
                  className="
                    max-w-[540px]
                    text-[14px]
                    leading-6
                    text-[#708079]
                    sm:text-[15px]
                  ">
                  {affiliation.description}
                </p>
              </div>

              {/* Arrow */}

              <div
                className="
                  relative z-10
                  hidden
                  h-11 w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#153A2F]/10
                  transition-all
                  duration-400
                  group-hover:border-[#789F20]/40
                  group-hover:bg-[#789F20]
                  group-hover:text-white
                  sm:flex
                ">
                <ArrowUpRight
                  size={17}
                  strokeWidth={1.7}
                  className="
                    transition-transform
                    duration-400
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </div>
            </motion.article>
          ))}
        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.7,
            ease,
          }}
          className="
            mt-14
            grid gap-8
            lg:mt-20
            lg:grid-cols-[0.36fr_1.64fr]
            lg:gap-16
          ">
          <div className="hidden lg:block" />

          <div
            className="
              flex flex-col
              gap-6
              border-l-2
              border-[#8BAF2A]
              pl-6
              sm:pl-8
              lg:max-w-[900px]
            ">
            <p
              className="
                text-[clamp(1.5rem,2.1vw,2.4rem)]
                font-normal
                leading-[1.18]
                tracking-[-0.04em]
                text-[#153A2F]
              ">
              La colaboración amplía nuestra capacidad para convertir
              conocimiento, tecnología y compromiso en soluciones sostenibles.
            </p>

            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#8BAF2A]" />

              <span
                className="
                  text-[12px]
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-[#153A2F]/45
                ">
                Colaboración · Conocimiento · Acción
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default NosotrosAffiliationsSection;
