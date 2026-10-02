import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import empresaCertificada from "../../assets/images/logos/empresa-certificada.png";

/* =========================================================
   INLINE SOCIAL ICONS
========================================================= */

const LinkedinIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true">
    <path
      d="M6.5 8.4V18"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />

    <path
      d="M6.5 5.4V5.45"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
    />

    <path
      d="M10.7 18V12.6C10.7 10.6 12 9.4 13.8 9.4C15.6 9.4 16.9 10.5 16.9 12.8V18"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InstagramIcon = ({ size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true">
    <rect
      x="4"
      y="4"
      width="16"
      height="16"
      rx="5"
      stroke="currentColor"
      strokeWidth="1.7"
    />

    <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.7" />

    <circle cx="17.3" cy="6.8" r="1" fill="currentColor" />
  </svg>
);

/* =========================================================
   DATA
========================================================= */

const services = [
  {
    label: "Consultoría",
    href: "/consultoria",
  },
  {
    label: "Energía",
    href: "/energia",
  },
  {
    label: "Solar Fotovoltaico & BESS",
    href: "/energia/solar-fotovoltaico",
  },
  {
    label: "Carga de vehículos eléctricos",
    href: "/energia/carga-rapida-de-vehiculos-electricos",
  },
  {
    label: "Residuos",
    href: "/residuos",
  },
];

const companyLinks = [
  {
    label: "Inicio",
    href: "/",
  },
  {
    label: "Nosotros",
    href: "/nosotros",
  },
  {
    label: "Proyectos",
    href: "/#proyectos",
  },
  {
    label: "Contacto",
    href: "/contacto",
  },
];

const legalLinks = [
  {
    label: "Aviso de privacidad",
    href: "/aviso-de-privacidad",
    external: false,
  },
  {
    label: "Ética y canal de denuncias",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSeKz032Wb3TP7RwbG8L4MAHCohIszw0jJjZbMT4ojkmC3NC9g/viewform?usp=header",
    external: true,
  },
];

/* =========================================================
   FOOTER
========================================================= */

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-[#15382D]
        text-white
      ">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-[radial-gradient(circle_at_13%_30%,rgba(157,216,39,.13),transparent_25%),radial-gradient(circle_at_88%_78%,rgba(127,165,28,.12),transparent_24%)]
        "
      />

      {/* GRID */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.04]
          [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)]
          [background-size:42px_42px]
        "
      />

      {/* GIANT WORD */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-[4vw]
          -left-[1vw]
          select-none
          whitespace-nowrap
          text-[clamp(7rem,18vw,20rem)]
          font-semibold
          leading-none
          tracking-[-0.09em]
          text-white/[0.025]
        ">
        GRUNER
      </div>

      {/* =====================================================
          MAIN WRAPPER
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-[1760px]
          px-5
          pb-8
          pt-20

          sm:px-8
          lg:px-12
          lg:pt-24
          xl:px-16
          2xl:px-20
        ">
        {/* ===================================================
            TOP STATEMENT
        =================================================== */}

        <div
          className="
            grid
            gap-10
            border-b
            border-white/10
            pb-16

            lg:grid-cols-[1.25fr_.75fr]
            lg:items-end
            lg:pb-20
          ">
          {/* LEFT */}

          <div>
            <div
              className="
                flex
                items-center
                gap-4
              ">
              <span className="h-px w-10 bg-[#9DD827]" />

              <p
                className="
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-[#A7D62B]
                ">
                El futuro se construye hoy
              </p>
            </div>

            <h2
              className="
                mt-8
                max-w-[1050px]
                text-[clamp(3.1rem,5.6vw,7rem)]
                font-normal
                leading-[0.9]
                tracking-[-0.07em]
              ">
              Creando un futuro
              <span className="block text-[#9DD827]">sostenible.</span>
            </h2>
          </div>

          {/* CTA */}

          <div
            className="
              lg:flex
              lg:justify-end
              lg:pb-2
            ">
            <a
              href="/contacto"
              className="
                group
                inline-flex
                items-center
                gap-4
              ">
              <span
                className="
                  text-[16px]
                  font-medium
                  text-white
                ">
                Hablemos
              </span>

              <span
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full
                  bg-[#7FA51C]
                  text-white
                  transition-all
                  duration-300

                  group-hover:rotate-45
                  group-hover:bg-[#9DD827]
                  group-hover:text-[#17392E]
                ">
                <ArrowUpRight size={20} strokeWidth={1.6} />
              </span>
            </a>
          </div>
        </div>

        {/* ===================================================
            MAIN CONTENT
        =================================================== */}

        <div
          className="
            grid
            gap-14
            py-16

            md:grid-cols-2

            lg:grid-cols-[1.15fr_.75fr_.75fr_.95fr]
            lg:gap-10
            lg:py-20
          ">
          {/* =================================================
              BRAND
          ================================================= */}

          <div>
            {/* WORDMARK */}

            <a
              href="/"
              className="
                inline-flex
                items-start
                gap-2
              ">
              <span
                className="
                  text-[36px]
                  font-bold
                  leading-none
                  tracking-[-0.055em]
                  text-white
                ">
                GRUNER
              </span>

              <span
                className="
                  mt-0.5
                  h-4
                  w-4
                  border-r-[6px]
                  border-t-[6px]
                  border-[#9DD827]
                "
              />
            </a>

            <p
              className="
                mt-7
                max-w-[360px]
                text-sm
                leading-7
                text-white/50
              ">
              Consultoría, ingeniería y desarrollo de soluciones para acelerar
              la transición hacia un futuro más sostenible.
            </p>

            {/* SOCIAL */}

            <div
              className="
                mt-9
                flex
                items-center
                gap-3
              ">
              <a
                href="#"
                aria-label="LinkedIn"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/12
                  bg-white/[0.035]
                  text-white
                  transition-all
                  duration-300

                  hover:border-[#9DD827]
                  hover:bg-[#9DD827]
                  hover:text-[#17392E]
                ">
                <LinkedinIcon size={20} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/12
                  bg-white/[0.035]
                  text-white
                  transition-all
                  duration-300

                  hover:border-[#9DD827]
                  hover:bg-[#9DD827]
                  hover:text-[#17392E]
                ">
                <InstagramIcon size={20} />
              </a>

              {/* LANGUAGE */}

              <a
                href="https://www.gruner.global/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  ml-2
                  inline-flex
                  h-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/12
                  px-4
                  text-[11px]
                  font-semibold
                  tracking-[0.1em]
                  text-white/70
                  transition-all
                  duration-300

                  hover:border-[#9DD827]
                  hover:text-[#9DD827]
                ">
                ES / EN
              </a>
            </div>
          </div>

          {/* =================================================
              SERVICES
          ================================================= */}

          <div>
            <p
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#9DD827]
              ">
              Servicios
            </p>

            <nav
              className="
                mt-7
                flex
                flex-col
                gap-4
              ">
              {services.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="
                    group
                    inline-flex
                    w-fit
                    items-center
                    gap-2
                    text-[13px]
                    leading-5
                    text-white/56
                    transition-colors
                    duration-300

                    hover:text-white
                  ">
                  <span
                    className="
                      h-1
                      w-1
                      rounded-full
                      bg-[#9DD827]
                      opacity-0
                      transition-all
                      duration-300

                      group-hover:opacity-100
                    "
                  />

                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* =================================================
              COMPANY
          ================================================= */}

          <div>
            <p
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#9DD827]
              ">
              GRUNER
            </p>

            <nav
              className="
                mt-7
                flex
                flex-col
                gap-4
              ">
              {companyLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="
                    group
                    inline-flex
                    w-fit
                    items-center
                    gap-2
                    text-[13px]
                    text-white/56
                    transition-colors
                    duration-300

                    hover:text-white
                  ">
                  <span
                    className="
                      h-1
                      w-1
                      rounded-full
                      bg-[#9DD827]
                      opacity-0
                      transition-all
                      duration-300

                      group-hover:opacity-100
                    "
                  />

                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* =================================================
              CONTACT
          ================================================= */}

          <div>
            <p
              className="
                text-[10px]
                font-semibold
                uppercase
                tracking-[0.18em]
                text-[#9DD827]
              ">
              Contacto
            </p>

            <div
              className="
                mt-7
                space-y-5
              ">
              {/* EMAIL */}

              <a
                href="mailto:info@gruner.mx"
                className="
                  group
                  flex
                  items-start
                  gap-3
                ">
                <Mail
                  size={17}
                  strokeWidth={1.5}
                  className="
                    mt-0.5
                    shrink-0
                    text-[#9DD827]
                  "
                />

                <span
                  className="
                    text-[13px]
                    text-white/62
                    transition-colors

                    group-hover:text-white
                  ">
                  info@gruner.mx
                </span>
              </a>

              {/* PHONE */}

              <a
                href="tel:+523333307267"
                className="
                  group
                  flex
                  items-start
                  gap-3
                ">
                <Phone
                  size={17}
                  strokeWidth={1.5}
                  className="
                    mt-0.5
                    shrink-0
                    text-[#9DD827]
                  "
                />

                <span
                  className="
                    text-[13px]
                    text-white/62
                    transition-colors

                    group-hover:text-white
                  ">
                  +52 33 3330 7267
                </span>
              </a>

              {/* WHATSAPP */}

              <a
                href="https://api.whatsapp.com/send/?phone=525530131106"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  items-start
                  gap-3
                ">
                <Phone
                  size={17}
                  strokeWidth={1.5}
                  className="
                    mt-0.5
                    shrink-0
                    text-[#9DD827]
                  "
                />

                <div>
                  <span
                    className="
                      block
                      text-[9px]
                      uppercase
                      tracking-[0.1em]
                      text-white/30
                    ">
                    WhatsApp
                  </span>

                  <span
                    className="
                      mt-1
                      block
                      text-[13px]
                      text-white/62
                      transition-colors

                      group-hover:text-white
                    ">
                    +52 55 3013 1106
                  </span>
                </div>
              </a>

              {/* LOCATION */}

              <div
                className="
                  flex
                  items-start
                  gap-3
                ">
                <MapPin
                  size={17}
                  strokeWidth={1.5}
                  className="
                    mt-0.5
                    shrink-0
                    text-[#9DD827]
                  "
                />

                <p
                  className="
                    max-w-[270px]
                    text-[13px]
                    leading-6
                    text-white/52
                  ">
                  Justo Sierra 1814
                  <br />
                  Col. Americana, C.P. 44160
                  <br />
                  Guadalajara, Jalisco, México
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
            CERTIFICATION BAND
        =================================================== */}

        {/* ===================================================
    CERTIFICATION BAND
=================================================== */}

        <div
          className="
    grid
    gap-6
    border-y
    border-white/10
    py-7

    sm:grid-cols-[1fr_auto]
    sm:items-center
  ">
          <a
            href="https://www.bcorporation.net/en-us/find-a-b-corp/company/g-r-u-n-e-r/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver certificación de GRUNER como Empresa B"
            className="
      group
      flex
      w-fit
      items-center
      
    ">
            {/* OFFICIAL B CORP BADGE */}

            <div
              className="
        flex
        h-25
        w-25
        shrink-0
        items-center
        justify-center
        transition-transform
        duration-300

        group-hover:scale-[1.04]
      ">
              <img
                src={empresaCertificada}
                alt="Empresa B Certificada"
                className="
          h-full
          w-full
          object-contain
        "
              />
            </div>

            {/* CERTIFICATION COPY */}

            <div>
              <div className="flex items-center gap-2">
                <p
                  className="
            text-[12px]
            font-medium
            text-white
          ">
                  Empresa B Certificada
                </p>

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.6}
                  className="
            text-[#9DD827]
            transition-transform
            duration-300

            group-hover:-translate-y-0.5
            group-hover:translate-x-0.5
          "
                />
              </div>

              <p
                className="
          mt-1
          text-[10px]
          text-white/40
          transition-colors
          duration-300

          group-hover:text-white/60
        ">
                Compromiso con impacto social y ambiental.
              </p>
            </div>
          </a>

          <p
            className="
      text-[10px]
      uppercase
      tracking-[0.13em]
      text-white/28
    ">
            Ingeniería · Energía · Sostenibilidad
          </p>
        </div>

        {/* ===================================================
            BOTTOM
        =================================================== */}

        <div
          className="
            flex
            flex-col
            gap-5
            pt-8

            md:flex-row
            md:items-center
            md:justify-between
          ">
          <p
            className="
              text-[11px]
              text-white/32
            ">
            GRUNER® {currentYear} · Todos los derechos reservados.
          </p>

          <nav
            className="
              flex
              flex-wrap
              gap-x-6
              gap-y-3
            ">
            {legalLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="
                  text-[11px]
                  text-white/38
                  transition-colors
                  duration-300

                  hover:text-[#9DD827]
                ">
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
