import { motion } from "motion/react";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

/* =========================================================
   CONTACT INFO
========================================================= */

const contactInfo = [
  {
    icon: Mail,
    label: "Escríbenos",
    value: "info@gruner.mx",
    href: "mailto:info@gruner.mx",
  },
  {
    icon: Phone,
    label: "Llámanos",
    value: "+52 33 3330 7267",
    href: "tel:+523333307267",
  },
  {
    icon: MapPin,
    label: "Estamos en",
    value: "Guadalajara, Jalisco",
    href: null,
  },
];

/* =========================================================
   CONTACT SECTION
========================================================= */

function ContactSection() {
  return (
    <section
      id="contacto"
      className="
        relative
        overflow-hidden
        bg-[#EEF4E6]
        py-24
        text-[#17392E]

        lg:py-32
      ">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_14%_18%,rgba(157,216,39,.19),transparent_26%),radial-gradient(circle_at_88%_75%,rgba(127,165,28,.12),transparent_22%)]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.045]
          [background-image:linear-gradient(rgba(45,82,65,.30)_1px,transparent_1px),linear-gradient(90deg,rgba(45,82,65,.30)_1px,transparent_1px)]
          [background-size:42px_42px]
        "
      />
      {/* =====================================================
          WRAPPER
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
            TOP
        =================================================== */}

        <div
          className="
            grid
            gap-12

            lg:grid-cols-[1.08fr_.92fr]
            lg:items-end
            lg:gap-20
          ">
          {/* ===============================================
              TITLE
          =============================================== */}

          <div>
            <motion.div
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
                duration: 0.7,
              }}
              className="
                flex
                items-center
                gap-4
              ">
              <span className="h-px w-10 bg-[#7FA51C]" />

              <p
                className="
                  text-[12px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#688A1B]
                ">
                Contacto
              </p>
            </motion.div>

            <motion.h2
              initial={{
                opacity: 0,
                y: 38,
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
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-10
                max-w-[1000px]
                text-[clamp(3.7rem,6.5vw,8.6rem)]
                font-normal
                leading-[0.87]
                tracking-[-0.075em]
              ">
              Las grandes ideas
              <span className="block text-[#7FA51C]">empiezan hablando.</span>
            </motion.h2>
          </div>

          {/* ===============================================
              INTRO
          =============================================== */}

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
              amount: 0.3,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="
              max-w-[540px]
              lg:pb-3
            ">
            <p
              className="
                text-[20px]
                leading-8
                tracking-[-0.025em]
                text-[#355E4F]

                sm:text-[23px]
              ">
              Cuéntanos qué quieres transformar. Nosotros te ayudamos a
              encontrar el camino.
            </p>

            <p
              className="
                mt-5
                text-sm
                leading-7
                text-[#6A8077]
              ">
              Desde consultoría de sostenibilidad hasta proyectos de energía,
              movilidad eléctrica y valorización de residuos, integramos
              soluciones pensadas para cada reto.
            </p>
          </motion.div>
        </div>

        {/* =====================================================
            MAIN CONTACT BLOCK
        ===================================================== */}

        <div
          className="
            mt-16
            grid
            overflow-hidden
            rounded-[32px]
            bg-[#17392E]
            shadow-[0_35px_100px_rgba(38,67,53,.15)]

            lg:grid-cols-[1.12fr_.88fr]

            xl:rounded-[38px]
          ">
          {/* =================================================
              LEFT
          ================================================= */}

          <div
            className="
              relative
              min-h-[520px]
              overflow-hidden
              p-8
              text-white

              sm:p-10
              lg:p-12
              xl:p-14
            ">
            {/* GLOW */}

            <div
              className="
                pointer-events-none
                absolute
                -left-28
                bottom-[-100px]
                h-[420px]
                w-[420px]
                rounded-full
                bg-[#9DD827]/18
                blur-[125px]
              "
            />

            {/* RING */}

            <div
              className="
                pointer-events-none
                absolute
                -right-[180px]
                -top-[180px]
                h-[440px]
                w-[440px]
                rounded-full
                border
                border-[#9DD827]/12
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
              <div>
                <p
                  className="
                    text-[12px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-[#A7D62B]
                  ">
                  Empecemos
                </p>

                <h3
                  className="
                    mt-7
                    max-w-[690px]
                    text-[clamp(2.6rem,4.2vw,5.6rem)]
                    font-normal
                    leading-[0.95]
                    tracking-[-0.06em]
                  ">
                  El siguiente proyecto puede ser
                  <span className="text-[#9DD827]"> el tuyo.</span>
                </h3>
              </div>

              {/* INFO */}

              <div
                className="
                  mt-auto
                  grid
                  gap-3
                  pt-14

                  sm:grid-cols-3
                ">
                {contactInfo.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="
                        group
                        rounded-[18px]
                        border
                        border-white/10
                        bg-white/[0.045]
                        p-5
                        transition-all
                        duration-300

                        hover:border-[#9DD827]/30
                        hover:bg-white/[0.08]
                      ">
                      <span
                        className="
                          flex
                          h-10
                          w-10
                          items-center
                          justify-center
                          rounded-[11px]
                          bg-[#7FA51C]
                          text-white
                          transition-all
                          duration-300

                          group-hover:bg-[#9DD827]
                          group-hover:text-[#17392E]
                        ">
                        <Icon size={17} strokeWidth={1.6} />
                      </span>

                      <span
                        className="
                          mt-5
                          block
                          text-[11px]
                          font-semibold
                          uppercase
                          tracking-[0.13em]
                          text-white/35
                        ">
                        {item.label}
                      </span>

                      <span
                        className="
                          mt-2
                          block
                          text-[13px]
                          leading-5
                          text-white/90
                        ">
                        {item.href ? (
                          <a href={item.href} className="hover:text-[#9DD827]">
                            {item.value}
                          </a>
                        ) : (
                          item.value
                        )}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* =================================================
              COMPACT FORM
          ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 0.85,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              flex
              items-center
              bg-[#F7F9F3]
              p-7

              sm:p-9
              lg:p-10
              xl:p-12
            ">
            <div className="w-full">
              {/* FORM HEADER */}

              <div
                className="
                  flex
                  items-start
                  justify-between
                  gap-8
                ">
                <div>
                  <p
                    className="
                      text-[12px]
                      font-semibold
                      uppercase
                      tracking-[0.17em]
                      text-[#7FA51C]
                    ">
                    Escríbenos
                  </p>

                  <h4
                    className="
                      mt-3
                      text-[29px]
                      font-normal
                      leading-tight
                      tracking-[-0.045em]
                      text-[#17392E]

                      sm:text-[34px]
                    ">
                    Cuéntanos sobre
                    <br />
                    tu proyecto.
                  </h4>
                </div>

                <span
                  className="
                    hidden
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    bg-[#E4EED5]
                    text-[#7FA51C]

                    sm:flex
                  ">
                  <ArrowUpRight size={17} strokeWidth={1.6} />
                </span>
              </div>

              {/* FORM */}

              <form
                onSubmit={(event) => event.preventDefault()}
                className="
                  mt-8
                  space-y-4
                ">
                {/* NAME + LAST NAME */}

                <div
                  className="
                    grid
                    gap-4

                    sm:grid-cols-2
                  ">
                  <input
                    type="text"
                    name="nombre"
                    aria-label="Nombre"
                    required
                    autoComplete="given-name"
                    placeholder="Nombre"
                    className="
                      h-13
                      w-full
                      rounded-[12px]
                      border
                      border-[#355E4A]/10
                      bg-white
                      px-4
                      text-sm
                      text-[#17392E]
                      outline-none
                      transition-all

                      placeholder:text-[#84968D]

                      focus:border-[#7FA51C]
                      focus:ring-4
                      focus:ring-[#7FA51C]/10
                    "
                  />

                  <input
                    type="text"
                    name="apellido"
                    aria-label="Apellido"
                    autoComplete="family-name"
                    placeholder="Apellido"
                    className="
                      h-13
                      w-full
                      rounded-[12px]
                      border
                      border-[#355E4A]/10
                      bg-white
                      px-4
                      text-sm
                      text-[#17392E]
                      outline-none
                      transition-all

                      placeholder:text-[#84968D]

                      focus:border-[#7FA51C]
                      focus:ring-4
                      focus:ring-[#7FA51C]/10
                    "
                  />
                </div>

                {/* EMAIL + PHONE */}

                <div
                  className="
                    grid
                    gap-4

                    sm:grid-cols-2
                  ">
                  <input
                    type="email"
                    name="correo"
                    aria-label="Correo electrónico"
                    required
                    autoComplete="email"
                    placeholder="Correo electrónico"
                    className="
                      h-13
                      w-full
                      rounded-[12px]
                      border
                      border-[#355E4A]/10
                      bg-white
                      px-4
                      text-sm
                      text-[#17392E]
                      outline-none
                      transition-all

                      placeholder:text-[#84968D]

                      focus:border-[#7FA51C]
                      focus:ring-4
                      focus:ring-[#7FA51C]/10
                    "
                  />

                  <input
                    type="tel"
                    name="telefono"
                    aria-label="Teléfono"
                    autoComplete="tel"
                    placeholder="Teléfono"
                    className="
                      h-13
                      w-full
                      rounded-[12px]
                      border
                      border-[#355E4A]/10
                      bg-white
                      px-4
                      text-sm
                      text-[#17392E]
                      outline-none
                      transition-all

                      placeholder:text-[#84968D]

                      focus:border-[#7FA51C]
                      focus:ring-4
                      focus:ring-[#7FA51C]/10
                    "
                  />
                </div>

                {/* COMPANY + SERVICE */}

                <div
                  className="
                    grid
                    gap-4

                    sm:grid-cols-2
                  ">
                  <input
                    type="text"
                    name="empresa"
                    aria-label="Empresa"
                    autoComplete="organization"
                    placeholder="Empresa"
                    className="
                      h-13
                      w-full
                      rounded-[12px]
                      border
                      border-[#355E4A]/10
                      bg-white
                      px-4
                      text-sm
                      text-[#17392E]
                      outline-none
                      transition-all

                      placeholder:text-[#84968D]

                      focus:border-[#7FA51C]
                      focus:ring-4
                      focus:ring-[#7FA51C]/10
                    "
                  />

                  <select
                    name="servicio"
                    aria-label="Servicio de interés"
                    defaultValue=""
                    className="
                      h-13
                      w-full
                      rounded-[12px]
                      border
                      border-[#355E4A]/10
                      bg-white
                      px-4
                      text-sm
                      text-[#17392E]
                      outline-none
                      transition-all

                      focus:border-[#7FA51C]
                      focus:ring-4
                      focus:ring-[#7FA51C]/10
                    ">
                    <option value="" disabled>
                      Servicio
                    </option>
                    <option value="consultoria-sostenibilidad">
                      Consultoría de Sostenibilidad
                    </option>
                    <option value="solar-bess">
                      Solar Fotovoltaico & BESS
                    </option>
                    <option value="movilidad-electrica">
                      Movilidad Eléctrica
                    </option>
                    <option value="valorizacion-residuos">
                      Valorización de Residuos
                    </option>
                  </select>
                </div>

                {/* MESSAGE */}

                <textarea
                  rows={4}
                  name="mensaje"
                  aria-label="Mensaje"
                  required
                  placeholder="¿En qué podemos ayudarte?"
                  className="
                    w-full
                    resize-none
                    rounded-[12px]
                    border
                    border-[#355E4A]/10
                    bg-white
                    px-4
                    py-4
                    text-sm
                    leading-6
                    text-[#17392E]
                    outline-none
                    transition-all

                    placeholder:text-[#84968D]

                    focus:border-[#7FA51C]
                    focus:ring-4
                    focus:ring-[#7FA51C]/10
                  "
                />

                {/* FOOT */}

                <div
                  className="
                    flex
                    flex-col
                    gap-5
                    pt-2

                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                  ">
                  <p
                    className="
                      max-w-[260px]
                      text-[12px]
                      leading-4
                      text-[#82938B]
                    ">
                    Completa tus datos para iniciar la conversación.
                  </p>

                  <button
                    type="submit"
                    disabled
                    aria-disabled="true"
                    title="Formulario en proceso de conexión"
                    className="
                      group
                      inline-flex
                      h-12
                      items-center
                      justify-center
                      gap-3
                      rounded-full
                      bg-[#7FA51C]
                      px-6
                      text-[13px]
                      font-medium
                      text-white
                      transition-all
                      duration-300

                      disabled:cursor-not-allowed
                      disabled:opacity-55
                    ">
                    Próximamente
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.7}
                      className="
                        transition-transform
                        duration-300

                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                      "
                    />
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            FINAL LINE
        ===================================================== */}

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
          }}
          transition={{
            duration: 0.7,
          }}
          className="
            mt-12
            flex
            flex-col
            gap-5
            border-t
            border-[#355E4A]/10
            pt-7

            sm:flex-row
            sm:items-center
            sm:justify-between
          ">
          <p
            className="
              text-[11px]
              uppercase
              tracking-[0.14em]
              text-[#71867B]
            ">
            Consultoría · Solar & BESS · Movilidad eléctrica · Valorización
          </p>

          <a
            href="mailto:info@gruner.mx"
            aria-label="Escribir a GRUNER por correo electrónico"
            className="
              group
              inline-flex
              items-center
              gap-3
              text-sm
              font-medium
              text-[#17392E]
            ">
            Escribir por correo
            <ArrowUpRight
              size={16}
              strokeWidth={1.6}
              className="
                text-[#7FA51C]
                transition-transform
                duration-300

                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection;
