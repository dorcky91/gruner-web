import { motion } from "motion/react";

/* =========================================================
   DATA
========================================================= */

const principles = [
  {
    number: "01",
    title: "Estrategia",
    description:
      "Consultoría de sostenibilidad para definir prioridades, rutas de acción y objetivos medibles.",
  },
  {
    number: "02",
    title: "Ingeniería",
    description:
      "Diseño e integración de soluciones técnicas adaptadas a las necesidades de cada proyecto.",
  },
  {
    number: "03",
    title: "Implementación",
    description:
      "Desarrollo de proyectos de energía, movilidad eléctrica y valorización de residuos.",
  },
  {
    number: "04",
    title: "Impacto",
    description:
      "Soluciones orientadas a reducir impactos, optimizar recursos y generar valor sostenible.",
  },
];

/* =========================================================
   ARROW
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
   ABOUT
========================================================= */

function AboutSection() {
  return (
    <section
      id="nosotros"
      className="
        relative
        overflow-hidden
        bg-[#F2F5ED]
        px-5
        py-24
        text-[#17392E]

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
          opacity-[0.33]
          [background-image:linear-gradient(rgba(23,57,46,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(23,57,46,.035)_1px,transparent_1px)]
          [background-size:72px_72px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[180px]
          top-[8%]
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#9DD827]/10
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -left-[180px]
          bottom-[4%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#17392E]/[0.035]
          blur-[110px]
        "
      />

      {/* GIANT TYPE */}

      <span
        className="
          pointer-events-none
          absolute
          -right-[1vw]
          top-[4%]
          hidden
          select-none
          text-[clamp(9rem,16vw,18rem)]
          font-semibold
          leading-none
          tracking-[-0.09em]
          text-[#17392E]/[0.018]

          2xl:block
        ">
        GRUNER
      </span>

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
            INTRO
        =================================================== */}

        <div
          className="
            grid
            gap-12

            lg:grid-cols-[.72fr_1.28fr]
            lg:gap-20

            xl:gap-28
          ">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              flex
              flex-col
              justify-between
              gap-10
              lg:min-h-[420px]
            ">
            <div>
              <div className="flex items-center gap-4">
                <span className="h-px w-10 bg-[#7FA51C]" />

                <p
                  className="
                    text-[12px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#6C901A]
                  ">
                  Quiénes somos
                </p>
              </div>

              <p
                className="
                  mt-8
                  max-w-[430px]
                  text-[15px]
                  leading-7
                  text-[#5A7168]

                  sm:text-[16px]
                  sm:leading-8
                ">
                Integramos estrategia, ingeniería y tecnología para llevar
                objetivos de sostenibilidad a soluciones concretas,
                implementables y adaptadas a cada operación.
              </p>
            </div>

            <div
              className="
                max-w-[420px]
                border-t
                border-[#17392E]/10
                pt-6
              ">
              <p
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-[#7FA51C]
                ">
                Nuestra forma de trabajar
              </p>

              <p
                className="
                  mt-3
                  text-[20px]
                  leading-7
                  tracking-[-0.025em]
                  text-[#284D40]
                ">
                De la definición del reto a la implementación de la solución.
              </p>
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}>
            <p
              className="
                max-w-[1120px]
                text-[clamp(3.6rem,6.4vw,8.7rem)]
                font-normal
                leading-[0.88]
                tracking-[-0.075em]
                text-[#17392E]
              ">
              Pensamos
              <span className="block">en sistemas,</span>
              <span className="block text-[#7FA51C]">
                no en piezas aisladas.
              </span>
            </p>

            <div
              className="
                mt-10
                grid
                gap-6
                border-t
                border-[#17392E]/10
                pt-7

                sm:grid-cols-[1fr_auto]
                sm:items-end
              ">
              <p
                className="
                  max-w-[720px]
                  text-[15px]
                  leading-7
                  text-[#61786E]

                  sm:text-[16px]
                  sm:leading-8
                ">
                Cada proyecto parte de una lectura integral del contexto:
                objetivos, operación, infraestructura y capacidad de
                implementación.
              </p>

              <a
                href="#proyectos"
                className="
                  group
                  inline-flex
                  w-fit
                  items-center
                  gap-3
                  text-[13px]
                  font-medium
                  text-[#24483A]
                ">
                Explorar soluciones
                <ArrowUpRight
                  size={16}
                  className="
                    text-[#7FA51C]
                    transition-transform
                    duration-300

                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </a>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            OPERATING MODEL
        ===================================================== */}

        <div className="mt-20 lg:mt-28">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              overflow-hidden
              rounded-[30px]
              border
              border-[#17392E]/[0.08]
              bg-[#15382D]
              shadow-[0_30px_90px_rgba(23,57,46,.14)]

              xl:rounded-[36px]
            ">
            {/* TOP BAR */}

            <div
              className="
                flex
                flex-col
                gap-5
                border-b
                border-white/[0.08]
                px-6
                py-6

                sm:flex-row
                sm:items-center
                sm:justify-between
                sm:px-8

                xl:px-10
              ">
              <div className="flex items-center gap-4">
                <span
                  className="
                    h-2
                    w-2
                    rounded-full
                    bg-[#B8F23A]
                    shadow-[0_0_14px_rgba(184,242,58,.65)]
                  "
                />

                <p
                  className="
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[0.17em]
                    text-[#B8F23A]
                  ">
                  Modelo de trabajo
                </p>
              </div>

              <p
                className="
                  text-[11px]
                  uppercase
                  tracking-[0.14em]
                  text-white/28
                ">
                Estrategia → Ingeniería → Implementación → Impacto
              </p>
            </div>

            {/* PRINCIPLES */}

            <div
              className="
                grid

                sm:grid-cols-2
                xl:grid-cols-4
              ">
              {principles.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={[
                    `
                      group
                      relative
                      min-h-[300px]
                      overflow-hidden
                      px-6
                      py-7
                      transition-all
                      duration-500

                      hover:bg-white/[0.045]

                      sm:min-h-[320px]
                      sm:px-8
                      sm:py-8

                      xl:min-h-[360px]
                    `,
                    index !== principles.length - 1
                      ? "border-b border-white/[0.07] sm:border-r xl:border-b-0"
                      : "",
                    index === 1 ? "sm:border-r-0 xl:border-r" : "",
                  ].join(" ")}>
                  {/* HOVER GLOW */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      -right-20
                      -top-20
                      h-[220px]
                      w-[220px]
                      rounded-full
                      bg-[#B8F23A]/0
                      blur-[80px]
                      transition-all
                      duration-500

                      group-hover:bg-[#B8F23A]/[0.07]
                    "
                  />

                  {/* NUMBER */}

                  <div className="relative z-10 flex items-start justify-between">
                    <span
                      className="
                        text-[11px]
                        font-semibold
                        tracking-[0.16em]
                        text-[#B8F23A]
                      ">
                      {item.number}
                    </span>

                    <span
                      className="
                        h-2
                        w-2
                        rounded-full
                        bg-[#B8F23A]
                        opacity-25
                        transition-all
                        duration-300

                        group-hover:scale-150
                        group-hover:opacity-100
                      "
                    />
                  </div>

                  {/* CONTENT */}

                  <div
                    className="
                      relative
                      z-10
                      mt-20

                      xl:mt-24
                    ">
                    <h3
                      className="
                        text-[28px]
                        font-normal
                        tracking-[-0.045em]
                        text-white

                        xl:text-[32px]
                      ">
                      {item.title}
                    </h3>

                    <p
                      className="
                        mt-5
                        max-w-[300px]
                        text-[14px]
                        leading-7
                        text-white/44
                      ">
                      {item.description}
                    </p>
                  </div>

                  {/* BOTTOM LINE */}

                  <span
                    className="
                      absolute
                      bottom-0
                      left-0
                      h-[3px]
                      w-0
                      bg-[#B8F23A]
                      transition-all
                      duration-500

                      group-hover:w-full
                    "
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            CLOSING
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            mt-14
            grid
            gap-5
            border-t
            border-[#17392E]/10
            pt-7

            md:grid-cols-[.35fr_1.65fr]
            md:items-start
          ">
          <p
            className="
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.17em]
              text-[#7FA51C]
            ">
            Una visión integral
          </p>

          <p
            className="
              max-w-[980px]
              text-[clamp(1.55rem,2.5vw,2.6rem)]
              font-normal
              leading-[1.22]
              tracking-[-0.04em]
              text-[#284D40]
            ">
            La estrategia define el rumbo. La ingeniería lo hace posible. La
            implementación convierte la intención en resultados.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutSection;
