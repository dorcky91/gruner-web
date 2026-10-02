import { motion } from "motion/react";
import {
  ArrowRight,
  Building2,
  CarFront,
  Network,
  PlugZap,
  Route,
  Sparkles,
  Zap,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const scaleSteps = [
  {
    number: "01",
    code: "POINT",
    title: "Un punto",
    subtitle: "Primer cargador",
    description:
      "Una necesidad puntual puede comenzar con una infraestructura simple y bien dimensionada.",
    chargers: 1,
    metric: "PUNTO",
    metricLabel: "Escala ilustrativa",
    icon: PlugZap,
  },
  {
    number: "02",
    code: "STATION",
    title: "Una estación",
    subtitle: "Múltiples posiciones",
    description:
      "Conforme crece la demanda, la infraestructura empieza a coordinar varios vehículos y puntos de carga.",
    chargers: 4,
    metric: "ESTACIÓN",
    metricLabel: "Escala ilustrativa",
    icon: Building2,
  },
  {
    number: "03",
    code: "HUB",
    title: "Un hub",
    subtitle: "Alta utilización",
    description:
      "La operación requiere más potencia, mayor disponibilidad y una estrategia energética más sofisticada.",
    chargers: 9,
    metric: "HUB",
    metricLabel: "Escala ilustrativa",
    icon: CarFront,
  },
  {
    number: "04",
    code: "NETWORK",
    title: "Una red",
    subtitle: "Infraestructura conectada",
    description:
      "La movilidad se convierte en una red distribuida con múltiples ubicaciones, usuarios y necesidades de operación.",
    chargers: 15,
    metric: "RED",
    metricLabel: "Escala ilustrativa",
    icon: Network,
  },
];

/* =========================================================
   CHARGER DOT
========================================================= */

function ChargerDot({ index, total }) {
  const delay = index * 0.045;

  return (
    <motion.span
      initial={{
        opacity: 0,
        scale: 0.4,
      }}
      whileInView={{
        opacity: 1,
        scale: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.35,
        delay,
      }}
      className={`
        relative
        flex
        items-center
        justify-center
        rounded-[6px]
        border
        border-[#9DD827]/30
        bg-[#EAF3DC]
        text-[#78A500]

        ${total <= 4 ? "h-9 w-9" : total <= 9 ? "h-7 w-7" : "h-6 w-6"}
      `}>
      <Zap size={total <= 4 ? 12 : 9} strokeWidth={1.8} />

      <span
        className="
          absolute
          -right-0.5
          -top-0.5
          h-1.5
          w-1.5
          rounded-full
          bg-[#9DD827]
        "
      />
    </motion.span>
  );
}

/* =========================================================
   SCALE VISUAL
========================================================= */

function ScaleVisual({ step }) {
  return (
    <div
      className="
        relative
        min-h-[170px]
        overflow-hidden
        rounded-[15px]
        border
        border-[#143E33]/[0.07]
        bg-white
        p-5
        shadow-[0_12px_30px_rgba(20,62,51,.04)]
      ">
      <span
        className="
          pointer-events-none
          absolute
          -right-2
          -top-7
          text-[100px]
          font-light
          leading-none
          tracking-[-0.09em]
          text-[#7FAE00]/[0.045]
        ">
        {step.number}
      </span>

      <div className="relative z-10">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.15em]
                text-[#78A500]
              ">
              {step.code}
            </p>

            <p
              className="
                mt-1
                text-[11px]
                uppercase
                tracking-[0.11em]
                text-[#143E33]/25
              ">
              Infrastructure scale
            </p>
          </div>

          <span
            className="
              text-[22px]
              font-light
              tracking-[-0.04em]
              text-[#78A500]
            ">
            {step.metric}
          </span>
        </div>

        <div
          className="
            mt-6
            flex
            min-h-[68px]
            flex-wrap
            content-start
            gap-2
          ">
          {Array.from({ length: step.chargers }).map((_, index) => (
            <ChargerDot key={index} index={index} total={step.chargers} />
          ))}
        </div>

        <div
          className="
            mt-5
            border-t
            border-[#143E33]/[0.07]
            pt-4
          ">
          <span
            className="
              text-[11px]
              font-semibold
              uppercase
              tracking-[0.13em]
              text-[#143E33]/28
            ">
            {step.metricLabel}
          </span>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   MAIN
========================================================= */

function MovilidadScaleSection() {
  return (
    <section
      id="movilidad-scale"
      className="
        relative
        overflow-hidden
        bg-white
        py-20
        text-[#143E33]

        lg:py-24
      ">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.24]
          [background-image:linear-gradient(rgba(20,62,51,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(20,62,51,.025)_1px,transparent_1px)]
          [background-size:72px_72px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[180px]
          -top-[190px]
          h-[510px]
          w-[510px]
          rounded-full
          bg-[#B8F23A]/10
          blur-[115px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -bottom-[220px]
          -left-[170px]
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#143E33]/[0.03]
          blur-[110px]
        "
      />

      <span
        className="
          pointer-events-none
          absolute
          -right-5
          bottom-[-30px]
          hidden
          select-none
          text-[clamp(9rem,17vw,20rem)]
          font-semibold
          leading-none
          tracking-[-0.09em]
          text-[#143E33]/[0.018]

          xl:block
        ">
        SCALE
      </span>

      {/* =====================================================
          CONTAINER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1760px]
          px-5

          sm:px-8
          lg:px-12
          xl:px-16
          2xl:px-20
        ">
        {/* ===================================================
            HEADER
        =================================================== */}

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
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            grid
            gap-8

            lg:grid-cols-[1fr_420px]
            lg:items-end
          ">
          <div>
            <div className="flex items-center gap-4">
              <span
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-[#B8F23A]
                  text-[#143E33]
                ">
                <Network size={17} strokeWidth={1.6} />
              </span>

              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#83B500]" />

                <p
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.22em]
                    text-[#76A400]
                  ">
                  Escalabilidad
                </p>
              </div>
            </div>

            <h2
              className="
                mt-6
                max-w-[1000px]
                text-[clamp(2.8rem,4.5vw,5.4rem)]
                font-normal
                leading-[0.92]
                tracking-[-0.065em]
              ">
              Puede comenzar
              <span className="block">con un solo cargador.</span>
              <span className="block text-[#83B500]">
                No tiene que terminar ahí.
              </span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p
              className="
                max-w-[420px]
                text-[12px]
                leading-7
                text-[#143E33]/46
              ">
              Diseñamos una arquitectura modular para responder a la necesidad
              actual y permitir que la infraestructura evolucione conforme
              crecen la demanda, los vehículos y los sitios conectados.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <Sparkles
                size={11}
                strokeWidth={1.5}
                className="text-[#83B500]"
              />

              <span
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-[#143E33]/30
                ">
                Modular · Escalable · Conectado
              </span>
            </div>
          </div>
        </motion.div>

        {/* ===================================================
            MAIN SCALE EXPERIENCE
        =================================================== */}

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
            amount: 0.1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            relative
            mt-14
            overflow-hidden
            rounded-[24px]
            border
            border-[#143E33]/[0.07]
            bg-[#F5F8F1]
            shadow-[0_26px_75px_rgba(20,62,51,.065)]
          ">
          {/* =================================================
              TOP BAR
          ================================================= */}

          <div
            className="
              relative
              z-20
              flex
              flex-col
              gap-4
              border-b
              border-[#143E33]/[0.07]
              px-6
              py-5

              sm:flex-row
              sm:items-center
              sm:justify-between

              lg:px-8
            ">
            <div className="flex items-center gap-4">
              <span
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-[9px]
                  bg-[#EAF3DC]
                  text-[#78A500]
                ">
                <Route size={15} strokeWidth={1.7} />
              </span>

              <div>
                <p
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-[#78A500]
                  ">
                  Growth Path
                </p>

                <p
                  className="
                    mt-1
                    text-[11px]
                    uppercase
                    tracking-[0.12em]
                    text-[#143E33]/24
                  ">
                  Point → Station → Hub → Network · recorrido conceptual
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span
                  className="
                    absolute
                    inset-0
                    animate-ping
                    rounded-full
                    bg-[#9DD827]/35
                  "
                />

                <span
                  className="
                    relative
                    h-2
                    w-2
                    rounded-full
                    bg-[#83B500]
                  "
                />
              </span>

              <span
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.14em]
                  text-[#143E33]/28
                ">
                Arquitectura escalable
              </span>
            </div>
          </div>

          {/* =================================================
              DESKTOP
          ================================================= */}

          <div
            className="
              relative
              hidden
              min-h-[650px]
              overflow-hidden
              px-8
              pb-8
              pt-10

              lg:block
            ">
            {/* =================================================
                DIAGONAL PATH
            ================================================= */}

            <svg
              viewBox="0 0 1400 520"
              preserveAspectRatio="none"
              className="
                pointer-events-none
                absolute
                inset-x-[4%]
                top-[82px]
                h-[470px]
                w-[92%]
                overflow-visible
              ">
              <path
                d="M40 410 C 270 390, 335 330, 470 315 C 660 292, 700 220, 855 205 C 1040 188, 1110 105, 1360 70"
                fill="none"
                stroke="rgba(20,62,51,.09)"
                strokeWidth="2"
              />

              <motion.path
                d="M40 410 C 270 390, 335 330, 470 315 C 660 292, 700 220, 855 205 C 1040 188, 1110 105, 1360 70"
                fill="none"
                stroke="#9DD827"
                strokeWidth="2"
                initial={{
                  pathLength: 0,
                }}
                whileInView={{
                  pathLength: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 1.8,
                  delay: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />

              <motion.circle
                r="5"
                fill="#B8F23A"
                initial={{
                  offsetDistance: "0%",
                  opacity: 0,
                }}
                animate={{
                  offsetDistance: "100%",
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  offsetPath:
                    "path('M40 410 C 270 390, 335 330, 470 315 C 660 292, 700 220, 855 205 C 1040 188, 1110 105, 1360 70')",
                }}
              />
            </svg>

            {/* =================================================
                STEP 01
            ================================================= */}

            <div
              className="
                absolute
                bottom-[45px]
                left-[4%]
                w-[22%]
              ">
              <ScaleVisual step={scaleSteps[0]} />

              <div className="mt-4">
                <p
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-[#78A500]
                  ">
                  01 · {scaleSteps[0].title}
                </p>

                <h3
                  className="
                    mt-2
                    text-[18px]
                    font-medium
                    tracking-[-0.035em]
                  ">
                  {scaleSteps[0].subtitle}
                </h3>

                <p
                  className="
                    mt-2
                    max-w-[270px]
                    text-[11px]
                    leading-5
                    text-[#143E33]/38
                  ">
                  {scaleSteps[0].description}
                </p>
              </div>
            </div>

            {/* =================================================
                STEP 02
            ================================================= */}

            <div
              className="
                absolute
                bottom-[115px]
                left-[27%]
                w-[22%]
              ">
              <ScaleVisual step={scaleSteps[1]} />

              <div className="mt-4">
                <p
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-[#78A500]
                  ">
                  02 · {scaleSteps[1].title}
                </p>

                <h3
                  className="
                    mt-2
                    text-[18px]
                    font-medium
                    tracking-[-0.035em]
                  ">
                  {scaleSteps[1].subtitle}
                </h3>

                <p
                  className="
                    mt-2
                    max-w-[270px]
                    text-[11px]
                    leading-5
                    text-[#143E33]/38
                  ">
                  {scaleSteps[1].description}
                </p>
              </div>
            </div>

            {/* =================================================
                STEP 03
            ================================================= */}

            <div
              className="
                absolute
                bottom-[185px]
                left-[50%]
                w-[22%]
              ">
              <ScaleVisual step={scaleSteps[2]} />

              <div className="mt-4">
                <p
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-[#78A500]
                  ">
                  03 · {scaleSteps[2].title}
                </p>

                <h3
                  className="
                    mt-2
                    text-[18px]
                    font-medium
                    tracking-[-0.035em]
                  ">
                  {scaleSteps[2].subtitle}
                </h3>

                <p
                  className="
                    mt-2
                    max-w-[270px]
                    text-[11px]
                    leading-5
                    text-[#143E33]/38
                  ">
                  {scaleSteps[2].description}
                </p>
              </div>
            </div>

            {/* =================================================
                STEP 04
            ================================================= */}

            <div
              className="
                absolute
                right-[4%]
                top-[45px]
                w-[22%]
              ">
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[18px]
                  bg-[#10372E]
                  p-5
                  text-white
                  shadow-[0_20px_50px_rgba(20,62,51,.14)]
                ">
                <div
                  className="
                    pointer-events-none
                    absolute
                    inset-0
                    opacity-[0.13]
                    [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)]
                    [background-size:32px_32px]
                  "
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-12
                    -top-12
                    h-40
                    w-40
                    rounded-full
                    bg-[#B8F23A]/15
                    blur-[55px]
                  "
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-4">
                    <span
                      className="
                        flex
                        h-11
                        w-11
                        items-center
                        justify-center
                        rounded-[11px]
                        bg-[#B8F23A]
                        text-[#10372E]
                      ">
                      <Network size={17} strokeWidth={1.7} />
                    </span>

                    <span
                      className="
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.15em]
                        text-[#B8F23A]
                      ">
                      NETWORK
                    </span>
                  </div>

                  <div
                    className="
                      mt-6
                      grid
                      grid-cols-5
                      gap-2
                    ">
                    {Array.from({ length: 15 }).map((_, index) => (
                      <motion.span
                        key={index}
                        initial={{
                          opacity: 0,
                          scale: 0.5,
                        }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.035,
                        }}
                        className="
                          flex
                          aspect-square
                          items-center
                          justify-center
                          rounded-[6px]
                          border
                          border-[#B8F23A]/15
                          bg-[#B8F23A]/[0.07]
                          text-[#B8F23A]
                        ">
                        <Zap size={8} strokeWidth={1.8} />
                      </motion.span>
                    ))}
                  </div>

                  <div
                    className="
                      mt-5
                      border-t
                      border-white/[0.08]
                      pt-4
                    ">
                    <p
                      className="
                        text-[16px]
                        font-medium
                        tracking-[-0.03em]
                        text-[#B8F23A]
                      ">
                      RED
                    </p>

                    <p
                      className="
                        mt-1
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.13em]
                        text-white/24
                      ">
                      Sitios conectados
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <p
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-[#78A500]
                  ">
                  04 · {scaleSteps[3].title}
                </p>

                <h3
                  className="
                    mt-2
                    text-[18px]
                    font-medium
                    tracking-[-0.035em]
                  ">
                  {scaleSteps[3].subtitle}
                </h3>

                <p
                  className="
                    mt-2
                    max-w-[280px]
                    text-[11px]
                    leading-5
                    text-[#143E33]/38
                  ">
                  {scaleSteps[3].description}
                </p>
              </div>
            </div>

            {/* =================================================
                SCALE LABELS
            ================================================= */}

            <div
              className="
                absolute
                left-[7%]
                top-[42px]
                flex
                items-center
                gap-3
              ">
              <span className="h-px w-9 bg-[#9DD827]" />

              <span
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-[#78A500]
                ">
                Escala ilustrativa
              </span>
            </div>

            <div
              className="
                absolute
                bottom-[32px]
                right-[31%]
                flex
                items-center
                gap-3
              ">
              <span
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-[#143E33]/25
                ">
                La arquitectura evoluciona
              </span>

              <ArrowRight
                size={13}
                strokeWidth={1.5}
                className="text-[#83B500]"
              />
            </div>
          </div>

          {/* =================================================
              MOBILE
          ================================================= */}

          <div
            className="
              relative
              px-5
              py-6

              lg:hidden
            ">
            <div
              className="
                relative
                ml-5
                border-l
                border-[#9DD827]/30
                pl-7
              ">
              {scaleSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.number}
                    initial={{
                      opacity: 0,
                      x: 14,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.07,
                    }}
                    className="
                      relative
                      pb-7
                      last:pb-0
                    ">
                    <span
                      className="
                        absolute
                        -left-[34px]
                        top-5
                        h-3
                        w-3
                        rounded-full
                        border-[3px]
                        border-[#F5F8F1]
                        bg-[#9DD827]
                      "
                    />

                    <div
                      className={`
                        overflow-hidden
                        rounded-[15px]
                        border
                        p-5

                        ${
                          index === scaleSteps.length - 1
                            ? "border-[#10372E] bg-[#10372E] text-white"
                            : "border-[#143E33]/[0.07] bg-white text-[#143E33]"
                        }
                      `}>
                      <div
                        className="
                          flex
                          items-start
                          gap-4
                        ">
                        <span
                          className={`
                            flex
                            h-11
                            w-11
                            shrink-0
                            items-center
                            justify-center
                            rounded-[11px]

                            ${
                              index === scaleSteps.length - 1
                                ? "bg-[#B8F23A] text-[#10372E]"
                                : "bg-[#EAF3DC] text-[#78A500]"
                            }
                          `}>
                          <Icon size={17} strokeWidth={1.6} />
                        </span>

                        <div className="flex-1">
                          <div
                            className="
                              flex
                              items-center
                              justify-between
                              gap-4
                            ">
                            <p
                              className={`
                                text-[11px]
                                font-bold
                                uppercase
                                tracking-[0.15em]

                                ${
                                  index === scaleSteps.length - 1
                                    ? "text-[#B8F23A]"
                                    : "text-[#78A500]"
                                }
                              `}>
                              {step.number} · {step.code}
                            </p>

                            <span
                              className={`
                                text-[18px]
                                font-light

                                ${
                                  index === scaleSteps.length - 1
                                    ? "text-[#B8F23A]"
                                    : "text-[#78A500]"
                                }
                              `}>
                              {step.metric}
                            </span>
                          </div>

                          <h3
                            className="
                              mt-2
                              text-[19px]
                              font-medium
                              tracking-[-0.035em]
                            ">
                            {step.title}
                          </h3>

                          <p
                            className={`
                              mt-1
                              text-[11px]
                              font-bold
                              uppercase
                              tracking-[0.12em]

                              ${
                                index === scaleSteps.length - 1
                                  ? "text-white/28"
                                  : "text-[#143E33]/28"
                              }
                            `}>
                            {step.subtitle}
                          </p>

                          <p
                            className={`
                              mt-3
                              text-[11px]
                              leading-5

                              ${
                                index === scaleSteps.length - 1
                                  ? "text-white/38"
                                  : "text-[#143E33]/40"
                              }
                            `}>
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* =================================================
              FINAL STRIP
          ================================================= */}

          <div
            className="
              relative
              z-20
              grid
              border-t
              border-[#143E33]/[0.07]
              bg-white

              sm:grid-cols-3
            ">
            {[
              ["01", "Modular", "Crece por etapas"],
              ["02", "Escalable", "Aumenta capacidad"],
              ["03", "Conectado", "Opera como red"],
            ].map(([number, title, text], index) => (
              <div
                key={number}
                className={`
                  flex
                  items-center
                  gap-4
                  px-5
                  py-5

                  ${
                    index > 0
                      ? "border-t border-[#143E33]/[0.07] sm:border-l sm:border-t-0"
                      : ""
                  }
                `}>
                <span
                  className="
                    text-[11px]
                    font-bold
                    tracking-[0.14em]
                    text-[#78A500]
                  ">
                  {number}
                </span>

                <div>
                  <p
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.13em]
                      text-[#143E33]/65
                    ">
                    {title}
                  </p>

                  <p
                    className="
                      mt-1
                      text-[11px]
                      uppercase
                      tracking-[0.11em]
                      text-[#143E33]/24
                    ">
                    {text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ===================================================
            FINAL STATEMENT
        =================================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
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
            delay: 0.1,
          }}
          className="
            mt-7
            flex
            flex-col
            gap-5
            rounded-[16px]
            bg-[#10372E]
            px-6
            py-5
            text-white
            shadow-[0_14px_40px_rgba(20,62,51,.08)]

            sm:flex-row
            sm:items-center
            sm:justify-between
          ">
          <div className="flex items-center gap-4">
            <span
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#B8F23A]
                text-[#10372E]
              ">
              <Network size={14} strokeWidth={1.6} />
            </span>

            <div>
              <p
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.15em]
                  text-[#B8F23A]
                ">
                Designed to evolve
              </p>

              <p
                className="
                  mt-1
                  text-[13px]
                  font-medium
                  tracking-[-0.015em]
                  text-white/70
                ">
                La infraestructura de hoy no debería limitar la movilidad de
                mañana.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Sparkles size={11} strokeWidth={1.5} className="text-[#B8F23A]" />

            <span
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.17em]
                text-[#B8F23A]
              ">
              Point · Station · Hub · Network
            </span>

            <ArrowRight
              size={13}
              strokeWidth={1.5}
              className="text-[#B8F23A]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default MovilidadScaleSection;
