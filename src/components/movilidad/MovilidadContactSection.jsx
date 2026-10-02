import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CarFront,
  Check,
  Mail,
  MapPin,
  MessageSquareText,
  Route,
  Sparkles,
  Zap,
} from "lucide-react";

/* =========================================================
   DATA
========================================================= */

const projectQuestions = [
  {
    number: "01",
    title: "Vehículos",
    text: "¿Cuántos deben cargar?",
    icon: CarFront,
  },
  {
    number: "02",
    title: "Operación",
    text: "¿Cuándo deben volver a salir?",
    icon: Route,
  },
  {
    number: "03",
    title: "Sitio",
    text: "¿Dónde estará la infraestructura?",
    icon: MapPin,
  },
];

/* =========================================================
   MAIN
========================================================= */

function MovilidadContactSection() {
  return (
    <section
      id="movilidad-contacto"
      className="
        relative
        overflow-hidden
        bg-white
        py-18
        text-[#143E33]

        lg:py-22
      ">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.23]
          [background-image:linear-gradient(rgba(20,62,51,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(20,62,51,.025)_1px,transparent_1px)]
          [background-size:72px_72px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-[190px]
          -top-[210px]
          h-[520px]
          w-[520px]
          rounded-full
          bg-[#B8F23A]/10
          blur-[115px]
        "
      />

      <span
        className="
          pointer-events-none
          absolute
          -right-6
          bottom-[-32px]
          hidden
          select-none
          text-[clamp(9rem,17vw,20rem)]
          font-semibold
          leading-none
          tracking-[-0.09em]
          text-[#143E33]/[0.018]

          xl:block
        ">
        START
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
            MAIN STAGE
        =================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            grid
            overflow-hidden
            rounded-[24px]
            border
            border-[#143E33]/[0.07]
            bg-[#F7F9F4]
            shadow-[0_28px_80px_rgba(20,62,51,.08)]

            lg:grid-cols-[1.08fr_.92fr]
          ">
          {/* =================================================
              LEFT / EDITORIAL
          ================================================= */}

          <div
            className="
              relative
              overflow-hidden
              bg-white
              p-7

              sm:p-9
              lg:min-h-[610px]
              lg:p-11
              xl:p-13
            ">
            <div
              className="
                pointer-events-none
                absolute
                -left-[90px]
                -top-[100px]
                h-[300px]
                w-[300px]
                rounded-full
                bg-[#B8F23A]/[0.11]
                blur-[90px]
              "
            />

            <span
              className="
                pointer-events-none
                absolute
                -left-4
                bottom-[-24px]
                hidden
                select-none
                text-[clamp(8rem,13vw,14rem)]
                font-semibold
                leading-none
                tracking-[-0.09em]
                text-[#143E33]/[0.025]

                xl:block
              ">
              GO
            </span>

            <div
              className="
                relative
                z-10
                flex
                h-full
                flex-col
              ">
              {/* EYEBROW */}

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
                  <Zap size={17} strokeWidth={1.7} />
                </span>

                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-[#83B500]" />

                  <p
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.21em]
                      text-[#76A400]
                    ">
                    Hablemos de movilidad
                  </p>
                </div>
              </div>

              {/* MAIN MESSAGE */}

              <div className="my-auto py-10">
                <p
                  className="
                    text-[11px]
                    font-bold
                    uppercase
                    tracking-[0.18em]
                    text-[#143E33]/28
                  ">
                  Tu próximo proyecto
                </p>

                <h2
                  className="
                    mt-4
                    max-w-[820px]
                    text-[clamp(2.8rem,4.4vw,5.3rem)]
                    font-normal
                    leading-[0.92]
                    tracking-[-0.065em]
                  ">
                  Tu estación no empieza
                  <span className="block">con el cargador.</span>
                  <span className="block text-[#83B500]">
                    Empieza con tu operación.
                  </span>
                </h2>

                <p
                  className="
                    mt-6
                    max-w-[650px]
                    text-[11px]
                    leading-7
                    text-[#143E33]/45
                  ">
                  Cuéntanos cómo se mueven tus vehículos, qué disponibilidad
                  necesitas y dónde quieres implementar la infraestructura.
                  Desde ahí podemos construir la estrategia correcta.
                </p>
              </div>

              {/* QUESTIONS */}

              <div
                className="
                  grid
                  gap-3

                  sm:grid-cols-3
                ">
                {projectQuestions.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.number}
                      className="
                        group
                        rounded-[13px]
                        border
                        border-[#143E33]/[0.07]
                        bg-[#F7F9F4]
                        p-4
                        transition-all
                        duration-300

                        hover:-translate-y-0.5
                        hover:border-[#9DD827]/45
                        hover:bg-white
                        hover:shadow-[0_12px_30px_rgba(20,62,51,.06)]
                      ">
                      <div
                        className="
                          flex
                          items-start
                          justify-between
                          gap-3
                        ">
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
                            transition-all
                            duration-300

                            group-hover:bg-[#B8F23A]
                            group-hover:text-[#10372E]
                          ">
                          <Icon size={15} strokeWidth={1.6} />
                        </span>

                        <span
                          className="
                            text-[11px]
                            font-bold
                            tracking-[0.14em]
                            text-[#78A500]
                          ">
                          {item.number}
                        </span>
                      </div>

                      <p
                        className="
                          mt-4
                          text-[11px]
                          font-bold
                          uppercase
                          tracking-[0.12em]
                          text-[#143E33]/60
                        ">
                        {item.title}
                      </p>

                      <p
                        className="
                          mt-1.5
                          text-[11px]
                          leading-5
                          text-[#143E33]/35
                        ">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT / DARK PROJECT BRIEF
          ================================================= */}

          <div
            className="
              relative
              overflow-hidden
              bg-[#10372E]
              p-7
              text-white

              sm:p-9
              lg:p-10
              xl:p-11
            ">
            {/* grid */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                opacity-[0.13]
                [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)]
                [background-size:40px_40px]
              "
            />

            {/* glow */}

            <div
              className="
                pointer-events-none
                absolute
                -right-[100px]
                -top-[100px]
                h-[350px]
                w-[350px]
                rounded-full
                bg-[#B8F23A]/15
                blur-[90px]
              "
            />

            {/* circles */}

            <div
              className="
                pointer-events-none
                absolute
                -bottom-[180px]
                -right-[160px]
                h-[430px]
                w-[430px]
                rounded-full
                border
                border-[#B8F23A]/10
              ">
              <div
                className="
                  absolute
                  inset-[17%]
                  rounded-full
                  border
                  border-white/[0.05]
                "
              />

              <div
                className="
                  absolute
                  inset-[35%]
                  rounded-full
                  border
                  border-[#B8F23A]/10
                "
              />
            </div>

            <div
              className="
                relative
                z-10
                flex
                h-full
                flex-col
              ">
              {/* TOP */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  gap-5
                ">
                <div>
                  <p
                    className="
                      text-[11px]
                      font-bold
                      uppercase
                      tracking-[0.19em]
                      text-[#B8F23A]
                    ">
                    Project Brief
                  </p>

                  <p
                    className="
                      mt-1
                      text-[11px]
                      uppercase
                      tracking-[0.12em]
                      text-white/25
                    ">
                    Mobility infrastructure
                  </p>
                </div>

                <span className="relative flex h-2.5 w-2.5">
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
                      h-2.5
                      w-2.5
                      rounded-full
                      bg-[#B8F23A]
                    "
                  />
                </span>
              </div>

              {/* BRIEF */}

              <div className="mt-10">
                <span
                  className="
                    flex
                    h-13
                    w-13
                    items-center
                    justify-center
                    rounded-[13px]
                    bg-[#B8F23A]
                    text-[#10372E]
                  ">
                  <MessageSquareText size={20} strokeWidth={1.6} />
                </span>

                <h3
                  className="
                    mt-6
                    max-w-[520px]
                    text-[clamp(2rem,3vw,3.5rem)]
                    font-normal
                    leading-[0.95]
                    tracking-[-0.05em]
                  ">
                  Tres datos pueden iniciar
                  <span className="block text-[#B8F23A]">
                    una conversación útil.
                  </span>
                </h3>

                <p
                  className="
                    mt-5
                    max-w-[500px]
                    text-[13px]
                    leading-6
                    text-white/40
                  ">
                  No necesitas tener definido el cargador, la potencia ni la
                  arquitectura. Podemos partir de tu operación.
                </p>
              </div>

              {/* CHECKLIST */}

              <div className="mt-8 space-y-3">
                {[
                  "Cantidad y tipo de vehículos",
                  "Horario o ventana disponible para cargar",
                  "Ubicación donde operará la infraestructura",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="
                      group
                      flex
                      items-center
                      gap-4
                      rounded-[11px]
                      border
                      border-white/[0.07]
                      bg-white/[0.035]
                      px-4
                      py-4
                      transition-all
                      duration-300

                      hover:border-[#B8F23A]/25
                      hover:bg-white/[0.055]
                    ">
                    <span
                      className="
                        flex
                        h-8
                        w-8
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#B8F23A]/10
                        text-[#B8F23A]
                      ">
                      <Check size={12} strokeWidth={1.9} />
                    </span>

                    <div className="flex-1">
                      <span
                        className="
                          text-[11px]
                          font-bold
                          tracking-[0.14em]
                          text-[#B8F23A]
                        ">
                        0{index + 1}
                      </span>

                      <p
                        className="
                          mt-1
                          text-[11px]
                          font-semibold
                          tracking-[-0.01em]
                          text-white/60
                        ">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}

              <div
                className="
                  mt-auto
                  border-t
                  border-white/[0.08]
                  pt-7
                ">
                <a
                  href="/contacto"
                  className="
                    group
                    flex
                    min-h-[56px]
                    w-full
                    items-center
                    justify-between
                    gap-6
                    rounded-full
                    bg-[#B8F23A]
                    px-6
                    text-[12px]
                    font-bold
                    uppercase
                    tracking-[0.11em]
                    text-[#10372E]
                    transition-all
                    duration-300

                    hover:-translate-y-0.5
                    hover:bg-white
                    hover:shadow-[0_14px_35px_rgba(0,0,0,.15)]
                  ">
                  Hablar con un especialista
                  <span
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      bg-[#10372E]
                      text-[#B8F23A]
                    ">
                    <ArrowUpRight
                      size={13}
                      strokeWidth={1.6}
                      className="
                        transition-transform
                        duration-300

                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                      "
                    />
                  </span>
                </a>

                <a
                  href="mailto:info@gruner.mx"
                  className="
                    group
                    mt-4
                    flex
                    items-center
                    justify-center
                    gap-3
                    text-[11px]
                    font-semibold
                    text-white/35
                    transition-colors
                    duration-300

                    hover:text-white
                  ">
                  <Mail
                    size={13}
                    strokeWidth={1.5}
                    className="text-[#B8F23A]"
                  />
                  info@gruner.mx
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ===================================================
            BOTTOM MICRO
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
            <Building2 size={12} strokeWidth={1.5} className="text-[#83B500]" />

            <span
              className="
                text-[11px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-[#143E33]/30
              ">
              Transporte · Flotillas · Comercio · Real Estate
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
              Let's move forward
            </span>

            <ArrowRight
              size={13}
              strokeWidth={1.5}
              className="text-[#83B500]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MovilidadContactSection;
