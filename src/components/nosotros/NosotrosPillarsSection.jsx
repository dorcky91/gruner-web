import { motion } from "motion/react";

import pillarsImage from "../../assets/images/nosotros/nosotros-pilares.jpg";

const principles = [
  {
    title: "Alianzas",
    lead: "Los mejores del mundo a tu disposición.",
    description:
      "El principal valor de nuestra empresa es la selección y la vinculación con los mejores especialistas del mundo para que tu proyecto sea el mejor.",
  },
  {
    title: "Un modelo de gestión ágil y cercano",
    description:
      "Nuestro objetivo es encontrar la solución adecuada y hacerla realidad. Sabemos que una gestión ágil y cercana es la clave del éxito.",
  },
  {
    title: "Proyectos a la medida",
    description:
      "Desde una consultoría para un proyecto particular, la gestión y valorización de residuos, la instalación de sistemas fotovoltaicos en tu empresa o desarrollar una estrategia corporativa de sostenibilidad. Encontramos una solución para cada problema.",
  },
  {
    title: "Calidad",
    description:
      "Nos comprometemos a ofrecer las mejores tecnologías disponibles en el mundo y de realizar los proyectos de ingeniería con los más altos estándares de la industria.",
  },
  {
    title: "Innovación",
    description:
      "Te aseguramos que nuestros proyectos están a la vanguardia de la sostenibilidad, siempre buscando nuevas y mejores soluciones para tus necesidades.",
  },
];

const ease = [0.22, 1, 0.36, 1];

function NosotrosPillarsSection() {
  return (
    <section
      id="nosotros-pilares"
      className="relative overflow-hidden bg-[#0E2E26] px-5 py-24 text-white sm:px-8 lg:px-12 lg:py-32 xl:px-16 2xl:px-20">
      {/* Background atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(184,242,58,.08),transparent_30%),radial-gradient(circle_at_90%_82%,rgba(255,255,255,.035),transparent_34%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] [background-size:96px_96px]"
      />

      <div className="relative z-10 mx-auto max-w-[1680px]">
        {/* =====================================================
            SECTION LABEL
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease }}
          className="mb-14 flex items-center gap-4 border-b border-white/10 pb-6 lg:mb-18">
          <span className="h-px w-10 bg-[#B8F23A]" />
          <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#B8F23A]">
            Nuestra forma de trabajar
          </p>
        </motion.div>

        {/* =====================================================
            MAIN COMPOSITION
        ===================================================== */}
        <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20 xl:gap-24">
          {/* LEFT / HEADING + IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8, ease }}
            className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="max-w-[690px] text-[clamp(3.35rem,5.4vw,6.35rem)] font-normal leading-[0.89] tracking-[-0.072em]">
              Cinco principios.
              <span className="mt-2 block text-[#B8F23A]">
                Una misma exigencia.
              </span>
            </h2>

            <p className="mt-8 max-w-[520px] text-[16px] leading-8 text-white/58">
              Cada proyecto reúne conocimiento, tecnología y capacidad de
              ejecución alrededor de una necesidad concreta.
            </p>

            {/* IMAGE FILLS THE PREVIOUS EMPTY SPACE */}
            <div className="relative mt-10 overflow-hidden rounded-[24px] border border-white/10 bg-white/5 shadow-[0_26px_70px_rgba(0,0,0,.18)] lg:mt-12">
              <motion.img
                src={pillarsImage}
                alt="Equipo y proyectos de sostenibilidad de GRUNER"
                initial={{ scale: 1.04 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease }}
                className="aspect-[4/3] w-full object-cover"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,36,29,.02)_20%,rgba(9,36,29,.28)_100%)]"
              />

              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4">
                <span className="text-[11px] font-semibold uppercase tracking-[0.17em] text-white/72">
                  Estrategia · Ingeniería · Implementación
                </span>
                <span className="h-2 w-2 shrink-0 rounded-full bg-[#B8F23A]" />
              </div>
            </div>
          </motion.div>

          {/* RIGHT / PRINCIPLES */}
          <div className="relative">
            {/* vertical guide */}
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-0 top-0 hidden w-px bg-white/10 md:block"
            />

            <motion.div
              aria-hidden="true"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 1.25, ease }}
              className="absolute left-0 top-0 hidden h-full w-px origin-top bg-[#B8F23A]/85 md:block"
            />

            <div>
              {principles.map((principle, index) => (
                <motion.article
                  key={principle.title}
                  initial={{ opacity: 0, x: 22 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    duration: 0.68,
                    delay: index * 0.04,
                    ease,
                  }}
                  className={[
                    "group relative py-9 md:pl-12 lg:py-10 lg:pl-14 xl:pl-16",
                    index !== 0 ? "border-t border-white/10" : "",
                  ].join(" ")}>
                  <span
                    aria-hidden="true"
                    className="absolute -left-[4px] top-[47px] hidden h-[9px] w-[9px] rounded-full border-2 border-[#0E2E26] bg-[#B8F23A] md:block"
                  />

                  <div className="grid gap-5 xl:grid-cols-[0.72fr_1.28fr] xl:gap-12">
                    <div>
                      <h3 className="max-w-[410px] text-[clamp(1.65rem,2vw,2.45rem)] font-normal leading-[1.06] tracking-[-0.043em] text-white">
                        {principle.title}
                      </h3>
                    </div>

                    <div className="max-w-[690px]">
                      {principle.lead && (
                        <p className="mb-2 text-[15px] font-medium leading-7 text-white/76">
                          {principle.lead}
                        </p>
                      )}

                      <p className="text-[14px] leading-7 text-white/54 sm:text-[15px]">
                        {principle.description}
                      </p>
                    </div>
                  </div>

                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-px w-0 bg-[#B8F23A]/70 transition-[width] duration-700 ease-out group-hover:w-full"
                  />
                </motion.article>
              ))}
            </div>
          </div>
        </div>

        {/* =====================================================
            CLOSING SIGNATURE
        ===================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease }}
          className="mt-14 border-t border-white/10 pt-7 lg:mt-18">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-[12px] font-medium uppercase tracking-[0.16em] text-white/32">
              GRUNER
            </p>

            <div className="flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B8F23A]" />
              <p className="text-[12px] text-white/52">
                Soluciones construidas alrededor de cada proyecto.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default NosotrosPillarsSection;
