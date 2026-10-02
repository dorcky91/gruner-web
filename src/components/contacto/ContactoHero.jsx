import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

import contactoHero from "../../assets/images/contacto/contacto-hero.jpg";

const ease = [0.22, 1, 0.36, 1];

function ContactoHero() {
  const scrollToContact = () => {
    document.getElementById("contacto-conversacion")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="contacto-inicio"
      className="
        relative
        min-h-[86svh]
        overflow-hidden
        bg-[#12362D]
        text-white
      ">
      {/* =====================================================
          FULL BACKGROUND IMAGE
      ===================================================== */}

      <motion.div
        initial={{ scale: 1.04, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 1.25,
          ease,
        }}
        className="absolute inset-0">
        <img
          src={contactoHero}
          alt=""
          className="
            h-full
            w-full
            object-cover
            object-center
          "
        />
      </motion.div>

      {/* =====================================================
          CINEMATIC OVERLAYS
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[#0C2A21]/45
        "
      />

      {/* Stronger left side for text readability */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-r
          from-[#0A291F]/95
          via-[#0A291F]/70
          to-[#0A291F]/15
        "
      />

      {/* Bottom depth */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-t
          from-[#071D17]/75
          via-transparent
          to-[#071D17]/20
        "
      />

      {/* GRUNER green atmosphere */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-32
          bottom-[-180px]
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#7FA51C]/10
          blur-[130px]
        "
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          min-h-[86svh]
          max-w-[1760px]
          flex-col
          px-5
          pb-8
          pt-28
          sm:px-8
          sm:pb-10
          sm:pt-32
          lg:px-12
          lg:pb-10
          lg:pt-36
          xl:px-16
          2xl:px-20
        ">
        {/* ===================================================
            TOP
        =================================================== */}

        <div
          className="
            flex
            items-center
            justify-between
            gap-6
            border-b
            border-white/15
            pb-5
          ">
          <motion.div
            initial={{
              opacity: 0,
              x: -14,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              ease,
            }}
            className="
              flex
              items-center
              gap-3
            ">
            <span className="h-px w-9 bg-[#A8CF46]" />

            <p
              className="
                text-[12px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-[#B7DB61]
              ">
              Contacto
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.12,
            }}
            className="
              text-[12px]
              font-medium
              uppercase
              tracking-[0.13em]
              text-white/60
            ">
            Guadalajara · México
          </motion.p>
        </div>

        {/* ===================================================
            MAIN CONTENT
        =================================================== */}

        <div
          className="
            flex
            flex-1
            items-center
            py-10
            sm:py-12
            lg:py-10
          ">
          <div
            className="
              w-full
              max-w-[1100px]
            ">
            {/* SMALL LABEL */}

            <motion.p
              initial={{
                opacity: 0,
                y: 16,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.08,
                ease,
              }}
              className="
                mb-5
                text-[12px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-white/60
              ">
              ¿Tienes un reto?
            </motion.p>

            {/* TITLE */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 32,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.9,
                delay: 0.12,
                ease,
              }}
              className="
                max-w-[1050px]
                text-[clamp(3.8rem,7.3vw,8.8rem)]
                font-normal
                leading-[0.84]
                tracking-[-0.065em]
                text-white
              ">
              Hablemos de
              <span
                className="
                  block
                  text-[#A8CF46]
                ">
                lo que quieres
              </span>
              <span className="block">transformar.</span>
            </motion.h1>

            {/* COPY + CTA */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.75,
                delay: 0.28,
                ease,
              }}
              className="
                mt-8
                flex
                flex-col
                gap-7
                sm:mt-9
                lg:max-w-[820px]
                lg:flex-row
                lg:items-end
                lg:justify-between
                lg:gap-12
              ">
              <p
                className="
                  max-w-[520px]
                  text-[15px]
                  leading-7
                  text-white/70
                  sm:text-[16px]
                ">
                Cuéntanos el reto. Empecemos por entenderlo y explorar cómo
                convertirlo en una solución concreta.
              </p>

              <button
                type="button"
                onClick={scrollToContact}
                className="
                  group
                  inline-flex
                  min-h-[56px]
                  w-fit
                  shrink-0
                  items-center
                  justify-center
                  gap-4
                  rounded-full
                  bg-[#A8CF46]
                  px-6
                  text-[13px]
                  font-semibold
                  text-[#12362D]
                  shadow-[0_14px_34px_rgba(0,0,0,.15)]
                  transition-all
                  duration-300
                  hover:bg-white
                ">
                Hablemos de tu proyecto
                <ArrowDown
                  size={16}
                  strokeWidth={1.7}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-y-1
                  "
                />
              </button>
            </motion.div>
          </div>
        </div>

        {/* ===================================================
            BOTTOM
        =================================================== */}

        <div
          className="
            flex
            flex-col
            gap-5
            border-t
            border-white/15
            pt-5
            sm:flex-row
            sm:items-center
            sm:justify-between
          ">
          {/* AREAS */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.48,
            }}
            className="
              flex
              flex-wrap
              items-center
              gap-x-3
              gap-y-2
              text-[12px]
              font-medium
              text-white/65
            ">
            <span>Energía</span>

            <span className="text-[#A8CF46]">·</span>

            <span>Movilidad</span>

            <span className="text-[#A8CF46]">·</span>

            <span>Circularidad</span>

            <span className="text-[#A8CF46]">·</span>

            <span>Sostenibilidad</span>
          </motion.div>

          {/* EMAIL */}

          <motion.a
            href="mailto:info@gruner.mx"
            initial={{
              opacity: 0,
              x: 12,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.52,
              ease,
            }}
            className="
              group
              flex
              w-fit
              items-center
              gap-3
              text-[12px]
              font-semibold
              text-white/65
              transition-colors
              duration-300
              hover:text-white
            ">
            info@gruner.mx
            <ArrowUpRight
              size={15}
              strokeWidth={1.6}
              className="
                text-[#A8CF46]
                transition-transform
                duration-300
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </motion.a>
        </div>
      </div>
    </section>
  );
}

export default ContactoHero;
