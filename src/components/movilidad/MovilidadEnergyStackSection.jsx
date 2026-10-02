import { motion } from "motion/react";
import {
  ArrowRight,
  BatteryCharging,
  Cpu,
  PlugZap,
  SolarPanel,
  Sparkles,
  Zap,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const stack = [
  {
    number: "01",
    code: "PV / WIND",
    title: "Renovables",
    subtitle: "Generación",
    description:
      "Integra generación solar o eólica en sitio para aprovechar la energía renovable disponible, reducir emisiones y disminuir el costo energético.",
    icon: SolarPanel,
  },
  {
    number: "02",
    code: "BESS",
    title: "Storage",
    subtitle: "Flexibilidad",
    description:
      "Permite administrar picos de potencia, desplazar energía y soportar operaciones de carga exigentes.",
    icon: BatteryCharging,
  },
  {
    number: "03",
    code: "EV",
    title: "Charging",
    subtitle: "Movilidad",
    description:
      "Entrega la energía al vehículo con la potencia y velocidad requeridas por la operación.",
    icon: PlugZap,
  },
  {
    number: "04",
    code: "EMS / VPP",
    title: "Control",
    subtitle: "Inteligencia",
    description:
      "Coordina generación, almacenamiento y carga; además habilita una Central de Energía Virtual (VPP) para gestionar los recursos energéticos como un sistema conectado.",
    icon: Cpu,
  },
];

/* =========================================================
   STACK LAYER
========================================================= */

function StackLayer({ item, index }) {
  const Icon = item.icon;

  const offset = index * 18;

  return (
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
        amount: 0.25,
      }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        marginLeft: `${offset}px`,
        marginRight: `${offset}px`,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[15px]
        border
        border-[#143E33]/[0.07]
        bg-white
        p-5
        shadow-[0_12px_32px_rgba(20,62,51,.045)]
        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-[#9DD827]/45
        hover:shadow-[0_18px_40px_rgba(20,62,51,.075)]
      ">
      <span
        className="
          pointer-events-none
          absolute
          -right-2
          -top-6
          text-[90px]
          font-light
          leading-none
          tracking-[-0.09em]
          text-[#7FAE00]/[0.045]
        ">
        {item.number}
      </span>

      <div
        className="
          relative
          z-10
          flex
          items-start
          gap-4
        ">
        <span
          className="
            flex
            h-11
            w-11
            shrink-0
            items-center
            justify-center
            rounded-[11px]
            bg-[#EDF5DF]
            text-[#78A500]
            transition-all
            duration-300

            group-hover:bg-[#B8F23A]
            group-hover:text-[#10372E]
          ">
          <Icon size={17} strokeWidth={1.6} />
        </span>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-3">
            <span
              className="
                text-[11px]
                font-bold
                tracking-[0.14em]
                text-[#78A500]
              ">
              {item.number}
            </span>

            <span
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.15em]
                text-[#78A500]
              ">
              {item.code}
            </span>
          </div>

          <div
            className="
              mt-2
              flex
              flex-col
              gap-1

              sm:flex-row
              sm:items-end
              sm:justify-between
              sm:gap-4
            ">
            <div>
              <h3
                className="
                  text-[17px]
                  font-medium
                  tracking-[-0.035em]
                ">
                {item.title}
              </h3>

              <p
                className="
                  mt-1
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.13em]
                  text-[#143E33]/25
                ">
                {item.subtitle}
              </p>
            </div>

            <p
              className="
                max-w-[410px]
                text-[11px]
                leading-5
                text-[#143E33]/38
              ">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* =========================================================
   MAIN
========================================================= */

function MovilidadEnergyStackSection() {
  return (
    <section
      id="movilidad-energy-stack"
      className="
        relative
        overflow-hidden
        bg-[#F5F8F1]
        py-20
        text-[#143E33]

        lg:py-24
      ">
      {/* BACKGROUND */}

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
          -top-[200px]
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
          -right-5
          bottom-[-28px]
          hidden
          select-none
          text-[clamp(9rem,17vw,19rem)]
          font-semibold
          leading-none
          tracking-[-0.09em]
          text-[#143E33]/[0.018]

          xl:block
        ">
        STACK
      </span>

      {/* CONTAINER */}

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
        {/* HEADER */}

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
                <Zap size={17} strokeWidth={1.6} />
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
                  Energy Stack
                </p>
              </div>
            </div>

            <h2
              className="
                mt-6
                max-w-[950px]
                text-[clamp(2.8rem,4.4vw,5.2rem)]
                font-normal
                leading-[0.93]
                tracking-[-0.06em]
              ">
              La infraestructura de carga
              <span className="block">puede hacer mucho más</span>
              <span className="block text-[#83B500]">
                cuando la energía trabaja en capas.
              </span>
            </h2>
          </div>

          <div className="lg:pb-2">
            <p
              className="
                max-w-[420px]
                text-[12px]
                leading-7
                text-[#143E33]/45
              ">
              Solar, almacenamiento, carga y control pueden integrarse dentro de
              una misma arquitectura para responder a la demanda y habilitar una
              gestión energética coordinada.
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
                Integrated mobility energy
              </span>
            </div>
          </div>
        </motion.div>

        {/* ===================================================
            MAIN EXPERIENCE
        =================================================== */}

        <div
          className="
            mt-14
            grid
            gap-6

            lg:grid-cols-[.95fr_1.05fr]
            lg:items-stretch
          ">
          {/* =================================================
              LEFT STACK
          ================================================= */}

          <div
            className="
              relative
              overflow-hidden
              rounded-[22px]
              border
              border-[#143E33]/[0.07]
              bg-[#EDF3E7]
              p-6
              shadow-[0_18px_55px_rgba(20,62,51,.05)]

              sm:p-8
              lg:p-9
            ">
            {/* grid */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                opacity-[0.22]
                [background-image:linear-gradient(rgba(20,62,51,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(20,62,51,.025)_1px,transparent_1px)]
                [background-size:38px_38px]
              "
            />

            <div className="relative z-10">
              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-5
                  pb-6
                ">
                <div>
                  <p
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-[#78A500]
                    ">
                    Integrated architecture
                  </p>

                  <p
                    className="
                      mt-1
                      text-[11px]
                      uppercase
                      tracking-[0.12em]
                      text-[#143E33]/25
                    ">
                    Four connected layers
                  </p>
                </div>

                <span className="relative flex h-2.5 w-2.5">
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
                      h-2.5
                      w-2.5
                      rounded-full
                      bg-[#83B500]
                    "
                  />
                </span>
              </div>

              <div className="space-y-3">
                {stack.map((item, index) => (
                  <StackLayer key={item.number} item={item} index={index} />
                ))}
              </div>

              <div
                className="
                  mx-auto
                  mt-6
                  flex
                  max-w-[520px]
                  items-center
                  justify-center
                  gap-3
                  rounded-full
                  border
                  border-[#143E33]/[0.07]
                  bg-white
                  px-5
                  py-3
                  shadow-[0_8px_22px_rgba(20,62,51,.04)]
                ">
                <span className="h-px flex-1 bg-[#9DD827]/35" />

                <span
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-[#78A500]
                  ">
                  One connected energy system
                </span>

                <span className="h-px flex-1 bg-[#9DD827]/35" />
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT VALUE PANEL
          ================================================= */}

          <div
            className="
              relative
              overflow-hidden
              rounded-[22px]
              bg-[#10372E]
              p-7
              text-white
              shadow-[0_26px_70px_rgba(20,62,51,.13)]

              sm:p-9
              lg:p-10
              xl:p-12
            ">
            {/* grid */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                opacity-[0.13]
                [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)]
                [background-size:42px_42px]
              "
            />

            {/* glow */}

            <div
              className="
                pointer-events-none
                absolute
                -right-[100px]
                -top-[110px]
                h-[360px]
                w-[360px]
                rounded-full
                bg-[#B8F23A]/15
                blur-[90px]
              "
            />

            <div
              className="
                relative
                z-10
                flex
                h-full
                flex-col
              ">
              {/* top */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-5
                ">
                <div className="flex items-center gap-4">
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
                    <Cpu size={18} strokeWidth={1.6} />
                  </span>

                  <div>
                    <p
                      className="
                        text-[11px]
                        font-bold
                        uppercase
                        tracking-[0.18em]
                        text-[#B8F23A]
                      ">
                      Smart Integration
                    </p>

                    <p
                      className="
                        mt-1
                        text-[11px]
                        uppercase
                        tracking-[0.12em]
                        text-white/25
                      ">
                      Energy orchestration
                    </p>
                  </div>
                </div>
              </div>

              {/* statement */}

              <div
                className="
                  my-auto
                  py-10
                ">
                <p
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.17em]
                    text-white/28
                  ">
                  Cuando las capas trabajan juntas
                </p>

                <h3
                  className="
                    mt-4
                    max-w-[670px]
                    text-[clamp(2.4rem,3.6vw,4.5rem)]
                    font-normal
                    leading-[0.92]
                    tracking-[-0.06em]
                  ">
                  La energía deja de ser
                  <span className="block">solamente suministro.</span>
                  <span className="block text-[#B8F23A]">
                    Se vuelve estrategia.
                  </span>
                </h3>

                <p
                  className="
                    mt-6
                    max-w-[600px]
                    text-[13px]
                    leading-6
                    text-white/42
                  ">
                  La combinación de generación renovable, almacenamiento y
                  control permite gestionar picos de potencia, respuesta a la
                  demanda, horarios de carga y crecimiento futuro.
                </p>
              </div>

              {/* RESULTS */}

              <div
                className="
                  grid
                  gap-2

                  sm:grid-cols-2
                ">
                {[
                  ["01", "Reduce presión", "Sobre la red"],
                  ["02", "Desplaza energía", "Cuando conviene"],
                  ["03", "Gestiona potencia", "Entre cargadores"],
                  ["04", "Orquesta recursos", "EMS + VPP"],
                ].map(([number, title, text]) => (
                  <div
                    key={number}
                    className="
                      group
                      rounded-[11px]
                      border
                      border-white/[0.07]
                      bg-white/[0.035]
                      p-4
                      transition-all
                      duration-300

                      hover:border-[#B8F23A]/25
                      hover:bg-white/[0.055]
                    ">
                    <span
                      className="
                        text-[11px]
                        font-bold
                        tracking-[0.14em]
                        text-[#B8F23A]
                      ">
                      {number}
                    </span>

                    <p
                      className="
                        mt-3
                        text-[12px]
                        font-semibold
                        tracking-[-0.015em]
                        text-white/75
                      ">
                      {title}
                    </p>

                    <p
                      className="
                        mt-1
                        text-[11px]
                        font-semibold
                        uppercase
                        tracking-[0.11em]
                        text-white/23
                      ">
                      {text}
                    </p>
                  </div>
                ))}
              </div>

              {/* bottom */}

              <div
                className="
                  mt-7
                  flex
                  flex-col
                  gap-5
                  border-t
                  border-white/[0.08]
                  pt-5

                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                ">
                <div className="flex items-center gap-3">
                  <Zap size={12} strokeWidth={1.5} className="text-[#B8F23A]" />

                  <span
                    className="
                      text-[11px]
                      font-semibold
                      uppercase
                      tracking-[0.14em]
                      text-white/25
                    ">
                    PV · BESS · Charging · EMS / VPP
                  </span>
                </div>

                <span
                  className="
                    inline-flex
                    items-center
                    gap-3
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.15em]
                    text-[#B8F23A]
                  ">
                  Integrated energy
                  <ArrowRight size={12} strokeWidth={1.5} />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
            MICRO FOOTER
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
            <BatteryCharging
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
              Generation · Storage · Charging · EMS / VPP
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Sparkles size={11} strokeWidth={1.5} className="text-[#83B500]" />

            <span
              className="
                text-[11px]
                font-bold
                uppercase
                tracking-[0.17em]
                text-[#76A400]
              ">
              Energy built for mobility
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MovilidadEnergyStackSection;
