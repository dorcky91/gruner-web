import { motion } from "motion/react";
import {
  Activity,
  ArrowRight,
  Check,
  ClipboardCheck,
  Construction,
  Gauge,
  PlugZap,
  Radar,
  ShieldCheck,
  Sparkles,
  Wrench,
  Zap,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const deploymentSteps = [
  {
    number: "01",
    code: "ASSESS",
    title: "Diagnóstico",
    subtitle: "Entender antes de diseñar",
    description:
      "Analizamos operación, vehículos, ventanas de carga, potencia disponible y restricciones del sitio.",
    icon: Radar,
    result: "Base de diseño",
  },
  {
    number: "02",
    code: "ENGINEER",
    title: "Ingeniería",
    subtitle: "Convertir demanda en infraestructura",
    description:
      "Definimos cargadores, capacidad eléctrica, protecciones, comunicaciones e integración con la infraestructura eléctrica y la estrategia energética.",
    icon: ClipboardCheck,
    result: "Arquitectura",
  },
  {
    number: "03",
    code: "PREPARE",
    title: "Preparación",
    subtitle: "Preparar sólo lo necesario",
    description:
      "Coordinamos las adecuaciones civiles, eléctricas y de infraestructura que el sitio requiera para integrar el sistema.",
    icon: Construction,
    result: "Sitio listo",
  },
  {
    number: "04",
    code: "DEPLOY",
    title: "Instalación",
    subtitle: "La solución toma forma",
    description:
      "Integramos cargadores, alimentación eléctrica, almacenamiento cuando aplica, comunicaciones y sistemas de control.",
    icon: Wrench,
    result: "Sistema integrado",
  },
  {
    number: "05",
    code: "COMMISSION",
    title: "Puesta en marcha",
    subtitle: "La infraestructura empieza a operar",
    description:
      "Realizamos pruebas y puesta en marcha para validar funcionamiento, seguridad, potencia, comunicaciones y sistemas de control antes de la operación.",
    icon: PlugZap,
    result: "Sistema validado",
  },
];

/* =========================================================
   SIGNAL PULSE
========================================================= */

function SignalPulse({ delay = 0 }) {
  return (
    <motion.span
      animate={{
        left: ["-2%", "102%"],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
      className="
        absolute
        top-1/2
        h-2
        w-2
        -translate-y-1/2
        rounded-full
        bg-[#B8F23A]
        shadow-[0_0_16px_rgba(184,242,58,.95)]
      "
    />
  );
}

/* =========================================================
   MAIN
========================================================= */

function MovilidadDeploymentSection() {
  return (
    <section
      id="movilidad-deployment"
      className="
        relative
        overflow-hidden
        bg-[#F5F8F1]
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
          opacity-[0.25]
          [background-image:linear-gradient(rgba(20,62,51,.026)_1px,transparent_1px),linear-gradient(90deg,rgba(20,62,51,.026)_1px,transparent_1px)]
          [background-size:72px_72px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[180px]
          -top-[180px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-[#B8F23A]/10
          blur-[110px]
        "
      />

      <span
        className="
          pointer-events-none
          absolute
          -right-6
          bottom-[-30px]
          hidden
          select-none
          text-[clamp(9rem,17vw,19rem)]
          font-semibold
          leading-none
          tracking-[-0.09em]
          text-[#143E33]/[0.018]
          xl:block
        ">
        BUILD
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
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
                <Construction size={17} strokeWidth={1.6} />
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
                  Implementación
                </p>
              </div>
            </div>

            <h2
              className="
                mt-6
                max-w-[980px]
                text-[clamp(2.8rem,4.5vw,5.4rem)]
                font-normal
                leading-[0.92]
                tracking-[-0.065em]
              ">
              Instalar un cargador
              <span className="block">es solo una parte.</span>
              <span className="block text-[#83B500]">
                Integrarlo bien es el proyecto.
              </span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p
              className="
                max-w-[420px]
                text-[14px]
                leading-7
                text-[#143E33]/46
              ">
              Llevamos la solución desde el análisis inicial hasta una
              infraestructura validada, segura y lista para operar.
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
                From assessment to operation
              </span>
            </div>
          </div>
        </motion.div>

        {/* ===================================================
            BLUEPRINT
        =================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
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
            bg-[#10372E]
            text-white
            shadow-[0_30px_90px_rgba(20,62,51,.15)]
          ">
          {/* GRID */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              opacity-[0.13]
              [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)]
              [background-size:38px_38px]
            "
          />

          {/* GLOW */}

          <div
            className="
              pointer-events-none
              absolute
              left-[54%]
              top-[43%]
              h-[500px]
              w-[760px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#B8F23A]/[0.06]
              blur-[115px]
            "
          />

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
              border-white/[0.08]
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
                  bg-[#B8F23A]/10
                  text-[#B8F23A]
                ">
                <Activity size={15} strokeWidth={1.7} />
              </span>

              <div>
                <p
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.19em]
                    text-[#B8F23A]
                  ">
                  Deployment Blueprint
                </p>

                <p
                  className="
                    mt-1
                    text-[11px]
                    uppercase
                    tracking-[0.13em]
                    text-white/25
                  ">
                  Assess · Engineer · Prepare · Deploy · Commission
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
                    bg-[#B8F23A]/40
                  "
                />

                <span
                  className="
                    relative
                    h-2
                    w-2
                    rounded-full
                    bg-[#B8F23A]
                  "
                />
              </span>

              <span
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.14em]
                  text-white/30
                ">
                Project workflow
              </span>
            </div>
          </div>

          {/* =================================================
              MAIN CONTENT
          ================================================= */}

          <div
            className="
              relative
              z-10
              grid
              lg:grid-cols-[330px_1fr]
            ">
            {/* ===============================================
                LEFT PROJECT STATEMENT
            =============================================== */}

            <div
              className="
                relative
                border-b
                border-white/[0.08]
                p-6

                lg:border-b-0
                lg:border-r
                lg:p-8
              ">
              <span
                className="
                  pointer-events-none
                  absolute
                  -left-3
                  -top-6
                  text-[150px]
                  font-light
                  leading-none
                  tracking-[-0.09em]
                  text-[#B8F23A]/[0.04]
                ">
                05
              </span>

              <div
                className="
                  relative
                  z-10
                  flex
                  h-full
                  flex-col
                ">
                <div>
                  <p
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.17em]
                      text-[#B8F23A]
                    ">
                    Un solo proyecto
                  </p>

                  <h3
                    className="
                      mt-4
                      text-[clamp(2.1rem,2.8vw,3.4rem)]
                      font-normal
                      leading-[0.94]
                      tracking-[-0.055em]
                    ">
                    Cinco decisiones
                    <span className="block">conectadas.</span>
                  </h3>

                  <p
                    className="
                      mt-5
                      max-w-[280px]
                      text-[12px]
                      leading-5
                      text-white/38
                    ">
                    Cada etapa prepara la siguiente. La ingeniería condiciona el
                    sitio, el sitio condiciona la instalación y la instalación
                    debe terminar en una operación validada.
                  </p>
                </div>

                <div className="mt-8 space-y-3">
                  {[
                    ["SITE", "Infraestructura"],
                    ["POWER", "Capacidad eléctrica"],
                    ["EV", "Necesidad de carga"],
                    ["CTRL", "Operación"],
                  ].map(([code, label]) => (
                    <div
                      key={code}
                      className="
                        flex
                        items-center
                        justify-between
                        gap-4
                        border-b
                        border-white/[0.06]
                        pb-3
                        last:border-b-0
                      ">
                      <span
                        className="
                          text-[11px]
                          font-bold
                          uppercase
                          tracking-[0.14em]
                          text-[#B8F23A]
                        ">
                        {code}
                      </span>

                      <span
                        className="
                          text-[11px]
                          font-semibold
                          text-white/30
                        ">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>

                <div
                  className="
                    mt-auto
                    flex
                    items-center
                    gap-3
                    border-t
                    border-white/[0.08]
                    pt-5
                  ">
                  <ShieldCheck
                    size={13}
                    strokeWidth={1.6}
                    className="text-[#B8F23A]"
                  />

                  <span
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.14em]
                      text-white/25
                    ">
                    Integrated project delivery
                  </span>
                </div>
              </div>
            </div>

            {/* ===============================================
                RIGHT BLUEPRINT
            =============================================== */}

            <div
              className="
                relative
                p-5
                sm:p-7
                lg:p-8
              ">
              {/* FLOW LINE DESKTOP */}

              <div
                className="
                  pointer-events-none
                  absolute
                  left-[8%]
                  right-[8%]
                  top-[83px]
                  hidden
                  h-px
                  bg-gradient-to-r
                  from-white/[0.06]
                  via-[#B8F23A]/60
                  to-white/[0.06]

                  xl:block
                ">
                <SignalPulse delay={0} />
                <SignalPulse delay={1.3} />
                <SignalPulse delay={2.6} />
              </div>

              <div
                className="
                  grid
                  gap-3

                  sm:grid-cols-2
                  xl:grid-cols-5
                ">
                {deploymentSteps.map((step, index) => {
                  const Icon = step.icon;
                  const isFinal = index === deploymentSteps.length - 1;

                  return (
                    <motion.article
                      key={step.number}
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
                        duration: 0.55,
                        delay: index * 0.07,
                      }}
                      className={`
                        group
                        relative
                        min-h-[330px]
                        overflow-hidden
                        rounded-[15px]
                        border
                        p-4
                        transition-all
                        duration-350

                        ${
                          isFinal
                            ? `
                              border-[#B8F23A]/30
                              bg-[#B8F23A]
                              text-[#10372E]
                            `
                            : `
                              border-white/[0.07]
                              bg-white/[0.035]
                              text-white

                              hover:-translate-y-1
                              hover:border-[#B8F23A]/25
                              hover:bg-white/[0.055]
                            `
                        }
                      `}>
                      <span
                        className={`
                          pointer-events-none
                          absolute
                          -right-2
                          -top-6
                          text-[90px]
                          font-light
                          leading-none
                          tracking-[-0.09em]

                          ${
                            isFinal
                              ? "text-[#10372E]/[0.07]"
                              : "text-[#B8F23A]/[0.035]"
                          }
                        `}>
                        {step.number}
                      </span>

                      <div
                        className="
                          relative
                          z-10
                          flex
                          h-full
                          flex-col
                        ">
                        <div
                          className="
                            flex
                            items-center
                            justify-between
                            gap-3
                          ">
                          <span
                            className={`
                              flex
                              h-10
                              w-10
                              items-center
                              justify-center
                              rounded-[10px]

                              ${
                                isFinal
                                  ? "bg-[#10372E] text-[#B8F23A]"
                                  : "bg-[#B8F23A]/10 text-[#B8F23A]"
                              }
                            `}>
                            <Icon size={16} strokeWidth={1.6} />
                          </span>

                          <span
                            className={`
                              text-[11px]
                              font-bold
                              uppercase
                              tracking-[0.14em]

                              ${
                                isFinal ? "text-[#10372E]/50" : "text-[#B8F23A]"
                              }
                            `}>
                            {step.code}
                          </span>
                        </div>

                        <div className="mt-6">
                          <span
                            className={`
                              text-[11px]
                              font-bold
                              tracking-[0.14em]

                              ${
                                isFinal ? "text-[#10372E]/45" : "text-[#B8F23A]"
                              }
                            `}>
                            {step.number}
                          </span>

                          <h4
                            className="
                              mt-2
                              text-[17px]
                              font-medium
                              leading-[1]
                              tracking-[-0.035em]
                            ">
                            {step.title}
                          </h4>

                          <p
                            className={`
                              mt-1.5
                              text-[11px]
                              font-bold
                              uppercase
                              tracking-[0.12em]

                              ${isFinal ? "text-[#10372E]/40" : "text-white/24"}
                            `}>
                            {step.subtitle}
                          </p>

                          <p
                            className={`
                              mt-4
                              text-[11px]
                              leading-5

                              ${isFinal ? "text-[#10372E]/55" : "text-white/32"}
                            `}>
                            {step.description}
                          </p>
                        </div>

                        <div
                          className={`
                            mt-auto
                            border-t
                            pt-4

                            ${
                              isFinal
                                ? "border-[#10372E]/10"
                                : "border-white/[0.07]"
                            }
                          `}>
                          <p
                            className={`
                              text-[11px]
                              font-bold
                              uppercase
                              tracking-[0.13em]

                              ${isFinal ? "text-[#10372E]/45" : "text-white/22"}
                            `}>
                            Resultado
                          </p>

                          <div className="mt-2 flex items-center gap-2">
                            <Check
                              size={11}
                              strokeWidth={1.8}
                              className={
                                isFinal ? "text-[#10372E]" : "text-[#B8F23A]"
                              }
                            />

                            <span
                              className={`
                                text-[11px]
                                font-bold
                                uppercase
                                tracking-[0.11em]

                                ${isFinal ? "text-[#10372E]" : "text-[#B8F23A]"}
                              `}>
                              {step.result}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </div>

              {/* ===============================================
                  BOTTOM STATUS
              =============================================== */}

              <div
                className="
                  mt-5
                  grid
                  overflow-hidden
                  rounded-[13px]
                  border
                  border-white/[0.07]
                  bg-[#0D3028]

                  sm:grid-cols-3
                ">
                {[
                  ["01", "Seguridad", "Validada"],
                  ["02", "Infraestructura", "Integrada"],
                  ["03", "Operación", "Lista"],
                ].map(([number, title, value], index) => (
                  <div
                    key={number}
                    className={`
                      flex
                      items-center
                      justify-between
                      gap-4
                      px-5
                      py-4

                      ${
                        index > 0
                          ? "border-t border-white/[0.06] sm:border-l sm:border-t-0"
                          : ""
                      }
                    `}>
                    <div className="flex items-center gap-3">
                      <span
                        className="
                          text-[11px]
                          font-bold
                          tracking-[0.14em]
                          text-[#B8F23A]
                        ">
                        {number}
                      </span>

                      <span
                        className="
                          text-[11px]
                          font-semibold
                          uppercase
                          tracking-[0.12em]
                          text-white/35
                        ">
                        {title}
                      </span>
                    </div>

                    <span
                      className="
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.13em]
                        text-[#B8F23A]
                      ">
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* =================================================
              FINAL STATUS BAR
          ================================================= */}

          <div
            className="
              relative
              z-20
              flex
              flex-col
              gap-4
              border-t
              border-white/[0.08]
              bg-[#0C2E27]
              px-6
              py-5

              sm:flex-row
              sm:items-center
              sm:justify-between
              lg:px-8
            ">
            <div className="flex items-center gap-3">
              <Gauge size={13} strokeWidth={1.6} className="text-[#B8F23A]" />

              <span
                className="
                  text-[11px]
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-white/28
                ">
                Una sola secuencia desde análisis hasta operación
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                  text-[#B8F23A]
                ">
                Assess · Build · Validate · Operate
              </span>

              <ArrowRight
                size={13}
                strokeWidth={1.5}
                className="text-[#B8F23A]"
              />
            </div>
          </div>
        </motion.div>

        {/* ===================================================
            FINAL MICRO
        =================================================== */}

        <div
          className="
            mt-7
            flex
            flex-col
            gap-4

            sm:flex-row
            sm:items-center
            sm:justify-between
          ">
          <div className="flex items-center gap-3">
            <ShieldCheck
              size={12}
              strokeWidth={1.5}
              className="text-[#83B500]"
            />

            <span
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-[#143E33]/30
              ">
              Ingeniería · Construcción · Integración · Commissioning
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="h-px w-9 bg-[#9DD827]" />

            <span
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.18em]
                text-[#76A400]
              ">
              From concept to charging
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MovilidadDeploymentSection;
