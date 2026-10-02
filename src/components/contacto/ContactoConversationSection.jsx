import { motion } from "motion/react";
import { useState } from "react";

import { FiArrowUpRight, FiCheck, FiMail, FiPhone } from "react-icons/fi";

import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

const ease = [0.22, 1, 0.36, 1];

const initialForm = {
  nombre: "",
  empresa: "",
  correo: "",
  telefono: "",
  mensaje: "",
};

const projectAreas = [
  "Consultoría",
  "Energía",
  "Movilidad",
  "Circularidad",
  "Otro",
];

function ContactoConversationSection() {
  const [form, setForm] = useState(initialForm);
  const [selectedArea, setSelectedArea] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.nombre.trim() || !form.correo.trim() || !form.mensaje.trim()) {
      return;
    }

    const subject = encodeURIComponent(
      `Nuevo contacto GRUNER${selectedArea ? ` · ${selectedArea}` : ""}`,
    );

    const body = encodeURIComponent(
      [
        `Nombre: ${form.nombre}`,
        `Empresa: ${form.empresa || "No especificada"}`,
        `Correo: ${form.correo}`,
        `Teléfono: ${form.telefono || "No especificado"}`,
        `Área de interés: ${selectedArea || "No especificada"}`,
        "",
        "Proyecto / reto:",
        form.mensaje,
      ].join("\n"),
    );

    window.location.href = `mailto:info@gruner.mx?subject=${subject}&body=${body}`;
  };

  const isReady =
    form.nombre.trim() && form.correo.trim() && form.mensaje.trim();

  return (
    <section
      id="contacto-conversacion"
      className="
        relative
        overflow-hidden
        bg-[#F4F5EF]
        text-[#12362D]
      ">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-[180px]
          top-[120px]
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#A8CF46]/[0.05]
          blur-[110px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -right-[160px]
          bottom-[40px]
          h-[360px]
          w-[360px]
          rounded-full
          bg-[#12362D]/[0.025]
          blur-[100px]
        "
      />

      {/* =====================================================
          CONTAINER
      ===================================================== */}

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
            MAIN GRID
            MOBILE: 12
            DESKTOP: 6 + 6
        =================================================== */}

        <div
          className="
            grid
            grid-cols-1
            gap-12
            lg:grid-cols-2
            lg:gap-12
            xl:gap-16
          ">
          {/* =================================================
              LEFT — COL 6
          ================================================= */}

          <motion.aside
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
              amount: 0.2,
            }}
            transition={{
              duration: 0.7,
              ease,
            }}
            className="
              flex
              h-full
              flex-col
              lg:pr-4
              xl:pr-8
            ">
            {/* LABEL */}

            <div className="flex items-center gap-3">
              <span className="h-px w-9 bg-[#7FA51C]" />

              <p
                className="
                  text-[12px]
                  font-semibold
                  uppercase
                  tracking-[0.15em]
                  text-[#6E951B]
                ">
                Empecemos
              </p>
            </div>

            {/* TITLE */}

            <h2
              className="
                mt-5
                max-w-[620px]
                text-[clamp(2.8rem,4.5vw,5.6rem)]
                font-normal
                leading-[0.91]
                tracking-[-0.06em]
              ">
              Cuéntanos sobre
              <span className="block text-[#7FA51C]">tu proyecto.</span>
            </h2>

            {/* DESCRIPTION */}

            <p
              className="
                mt-7
                max-w-[500px]
                text-[15px]
                leading-7
                text-[#687A71]
              ">
              Queremos entender el reto, el contexto y hacia dónde quieres
              avanzar. No necesitas tener todas las respuestas para comenzar.
            </p>

            {/* =================================================
                CONTACT + SOCIAL
            ================================================= */}

            <div
              className="
                mt-10
                grid
                max-w-[580px]
                gap-8
                border-t
                border-[#12362D]/10
                pt-7
                sm:grid-cols-2
              ">
              {/* ===============================================
                  DIRECT CONTACT
              =============================================== */}

              <div>
                <p
                  className="
                    text-[12px]
                    font-semibold
                    uppercase
                    tracking-[0.14em]
                    text-[#839189]
                  ">
                  Contacto directo
                </p>

                <div className="mt-4 space-y-3.5">
                  {/* EMAIL */}

                  <a
                    href="mailto:info@gruner.mx"
                    className="
                      group
                      flex
                      w-fit
                      items-center
                      gap-3
                      text-[13px]
                      font-medium
                      text-[#244738]
                      transition-colors
                      duration-300
                      hover:text-[#7FA51C]
                    ">
                    <FiMail
                      size={16}
                      className="
                        shrink-0
                        text-[#7FA51C]
                      "
                    />

                    <span>info@gruner.mx</span>

                    <FiArrowUpRight
                      size={13}
                      className="
                        opacity-0
                        transition-all
                        duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                        group-hover:opacity-100
                      "
                    />
                  </a>

                  {/* PHONE */}

                  <a
                    href="tel:+523333307267"
                    className="
                      group
                      flex
                      w-fit
                      items-center
                      gap-3
                      text-[13px]
                      font-medium
                      text-[#244738]
                      transition-colors
                      duration-300
                      hover:text-[#7FA51C]
                    ">
                    <FiPhone
                      size={16}
                      className="
                        shrink-0
                        text-[#7FA51C]
                      "
                    />

                    <span>+52 33 3330 7267</span>
                  </a>
                </div>
              </div>

              {/* ===============================================
                  SOCIAL NETWORKS
              =============================================== */}

              <div>
                <p
                  className="
                    text-[12px]
                    font-semibold
                    uppercase
                    tracking-[0.14em]
                    text-[#839189]
                  ">
                  Síguenos
                </p>

                <div
                  className="
                    mt-4
                    flex
                    flex-wrap
                    gap-2
                  ">
                  {/* LINKEDIN */}

                  <a
                    href="https://www.linkedin.com/company/grunermx"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GRUNER en LinkedIn"
                    className="
                      group
                      inline-flex
                      min-h-[40px]
                      items-center
                      gap-2.5
                      rounded-full
                      border
                      border-[#12362D]/10
                      bg-white/70
                      px-3.5
                      text-[12px]
                      font-medium
                      text-[#244738]
                      transition-all
                      duration-300
                      hover:border-[#7FA51C]/35
                      hover:bg-white
                      hover:text-[#7FA51C]
                    ">
                    <FaLinkedinIn size={14} />

                    <span>LinkedIn</span>

                    <FiArrowUpRight
                      size={12}
                      className="
                        transition-transform
                        duration-300
                        group-hover:-translate-y-0.5
                        group-hover:translate-x-0.5
                      "
                    />
                  </a>

                  {/* INSTAGRAM */}

                  <div
                    className="
                      inline-flex
                      min-h-[40px]
                      items-center
                      gap-2.5
                      rounded-full
                      border
                      border-[#12362D]/10
                      bg-white/50
                      px-3.5
                      text-[12px]
                      font-medium
                      text-[#6F7F77]
                    ">
                    <FaInstagram size={15} />

                    <span>Instagram</span>
                  </div>
                </div>
              </div>
            </div>

            {/* =================================================
                SMALL BOTTOM MESSAGE
            ================================================= */}

            <div
              className="
                mt-10
                max-w-[580px]
                border-t
                border-[#12362D]/10
                pt-6
              ">
              <div className="flex gap-4">
                <span
                  className="
                    mt-[8px]
                    h-2
                    w-2
                    shrink-0
                    rounded-full
                    bg-[#7FA51C]
                  "
                />

                <p
                  className="
                    max-w-[440px]
                    text-[13px]
                    leading-6
                    text-[#7A8A82]
                  ">
                  Una conversación puede ser el punto de partida para convertir
                  una necesidad en una solución concreta.
                </p>
              </div>
            </div>
          </motion.aside>

          {/* =================================================
              RIGHT — COL 6
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
              amount: 0.12,
            }}
            transition={{
              duration: 0.75,
              delay: 0.06,
              ease,
            }}
            className="min-w-0">
            <form
              onSubmit={handleSubmit}
              className="
                rounded-[26px]
                border
                border-[#12362D]/[0.08]
                bg-white
                p-6
                shadow-[0_22px_60px_rgba(18,54,45,.05)]
                sm:p-8
                xl:p-9
              ">
              {/* ===============================================
                  FORM HEADER
              =============================================== */}

              <div
                className="
                  flex
                  flex-col
                  gap-3
                  border-b
                  border-[#12362D]/10
                  pb-5
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
                      text-[#7FA51C]
                    ">
                    Tu información
                  </p>

                  <p
                    className="
                      mt-1
                      text-[18px]
                      font-medium
                      tracking-[-0.025em]
                      text-[#12362D]
                    ">
                    Comencemos por conocerte.
                  </p>
                </div>

                <span
                  className="
                    text-[12px]
                    text-[#98A39D]
                  ">
                  * Campos requeridos
                </span>
              </div>

              {/* ===============================================
                  FORM GRID
                  6 + 6
              =============================================== */}

              <div
                className="
                  mt-7
                  grid
                  grid-cols-1
                  gap-x-8
                  gap-y-7
                  md:grid-cols-2
                ">
                {/* ROW 1 */}

                <Field
                  label="Nombre"
                  required
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  autoComplete="name"
                  placeholder="Tu nombre"
                />

                <Field
                  label="Empresa"
                  name="empresa"
                  value={form.empresa}
                  onChange={handleChange}
                  autoComplete="organization"
                  placeholder="Nombre de la empresa"
                />

                {/* ROW 2 */}

                <Field
                  label="Correo electrónico"
                  required
                  type="email"
                  name="correo"
                  value={form.correo}
                  onChange={handleChange}
                  autoComplete="email"
                  placeholder="nombre@empresa.com"
                />

                <Field
                  label="Teléfono"
                  type="tel"
                  name="telefono"
                  value={form.telefono}
                  onChange={handleChange}
                  autoComplete="tel"
                  placeholder="+52"
                />
              </div>

              {/* ===============================================
                  PROJECT AREA
              =============================================== */}

              <div
                className="
                  mt-8
                  border-t
                  border-[#12362D]/10
                  pt-6
                ">
                <div
                  className="
                    flex
                    items-center
                    justify-between
                    gap-5
                  ">
                  <p
                    className="
                      text-[13px]
                      font-semibold
                      text-[#244738]
                    ">
                    Área del proyecto
                  </p>

                  <span
                    className="
                      text-[12px]
                      text-[#98A39D]
                    ">
                    Opcional
                  </span>
                </div>

                <div
                  className="
                    mt-3
                    flex
                    flex-wrap
                    gap-2
                  ">
                  {projectAreas.map((area) => {
                    const isSelected = selectedArea === area;

                    return (
                      <button
                        key={area}
                        type="button"
                        onClick={() => setSelectedArea(isSelected ? "" : area)}
                        className={`
                          inline-flex
                          min-h-[38px]
                          items-center
                          gap-1.5
                          rounded-full
                          border
                          px-3.5
                          text-[12px]
                          font-medium
                          transition-all
                          duration-300

                          ${
                            isSelected
                              ? `
                                  border-[#7FA51C]
                                  bg-[#7FA51C]
                                  text-white
                                `
                              : `
                                  border-[#12362D]/10
                                  bg-[#F7F8F4]
                                  text-[#5D7067]
                                  hover:border-[#7FA51C]/40
                                  hover:bg-[#F1F5E7]
                                  hover:text-[#668C19]
                                `
                          }
                        `}>
                        {isSelected && <FiCheck size={12} />}

                        {area}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* ===============================================
                  MESSAGE
              =============================================== */}

              <div
                className="
                  mt-8
                  border-t
                  border-[#12362D]/10
                  pt-6
                ">
                <div
                  className="
                    flex
                    flex-col
                    gap-1
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                  ">
                  <label
                    htmlFor="contacto-mensaje"
                    className="
                      text-[13px]
                      font-semibold
                      text-[#244738]
                    ">
                    Háblanos del proyecto{" "}
                    <span className="text-[#7FA51C]">*</span>
                  </label>

                  <span
                    className="
                      text-[12px]
                      text-[#98A39D]
                    ">
                    Cuéntanos lo esencial.
                  </span>
                </div>

                <div
                  className="
                    mt-3
                    overflow-hidden
                    rounded-[17px]
                    border
                    border-[#12362D]/10
                    bg-[#F7F8F4]
                    transition-all
                    duration-300
                    focus-within:border-[#7FA51C]/60
                    focus-within:bg-white
                    focus-within:shadow-[0_0_0_4px_rgba(127,165,28,.07)]
                  ">
                  <textarea
                    id="contacto-mensaje"
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Cuéntanos brevemente sobre el reto, proyecto o necesidad..."
                    className="
                      min-h-[120px]
                      w-full
                      resize-none
                      bg-transparent
                      px-5
                      py-4
                      text-[14px]
                      leading-6
                      text-[#12362D]
                      outline-none
                      placeholder:text-[#9CA8A2]
                    "
                  />
                </div>
              </div>

              {/* ===============================================
                  FORM FOOTER
              =============================================== */}

              <div
                className="
                  mt-5
                  flex
                  flex-col
                  gap-4
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                ">
                <p
                  className="
                    max-w-[320px]
                    text-[12px]
                    leading-5
                    text-[#98A39D]
                  ">
                  Nombre, correo y mensaje son necesarios.
                </p>

                <button
                  type="submit"
                  disabled={!isReady}
                  className={`
                    group
                    inline-flex
                    min-h-[48px]
                    shrink-0
                    items-center
                    justify-center
                    gap-3
                    rounded-full
                    px-5
                    text-[13px]
                    font-semibold
                    transition-all
                    duration-300

                    ${
                      isReady
                        ? `
                            bg-[#7FA51C]
                            text-white
                            shadow-[0_10px_24px_rgba(127,165,28,.17)]
                            hover:bg-[#12362D]
                          `
                        : `
                            cursor-not-allowed
                            bg-[#E5E9E1]
                            text-[#9AA59F]
                          `
                    }
                  `}>
                  Enviar mensaje
                  <FiArrowUpRight
                    size={15}
                    className={`
                      transition-transform
                      duration-300

                      ${
                        isReady
                          ? `
                              group-hover:-translate-y-0.5
                              group-hover:translate-x-0.5
                            `
                          : ""
                      }
                    `}
                  />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   FIELD
========================================================= */

function Field({
  label,
  required = false,
  type = "text",
  name,
  value,
  onChange,
  placeholder,
  autoComplete,
}) {
  return (
    <div className="min-w-0">
      <label
        htmlFor={`contacto-${name}`}
        className="
          block
          text-[12px]
          font-semibold
          text-[#244738]
        ">
        {label}

        {required && <span className="ml-1 text-[#7FA51C]">*</span>}
      </label>

      <input
        id={`contacto-${name}`}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className="
          mt-2.5
          w-full
          border-0
          border-b
          border-[#12362D]/15
          bg-transparent
          px-0
          pb-3
          text-[14px]
          text-[#12362D]
          outline-none
          transition-colors
          duration-300
          placeholder:text-[#A2ACA7]
          focus:border-[#7FA51C]
        "
      />
    </div>
  );
}

export default ContactoConversationSection;
