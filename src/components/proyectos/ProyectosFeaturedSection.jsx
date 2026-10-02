import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Images, MapPin } from "lucide-react";

import ProjectGallery from "./ProjectGallery";
import { projects } from "../../data/projects";

const ease = [0.22, 1, 0.36, 1];

const featuredProjects = projects
  .filter((project) => project.featured)
  .slice(0, 2);

/* =========================================================
   PROJECT DETAIL
========================================================= */

function ProjectMeta({ label, value }) {
  if (!value) {
    return null;
  }

  return (
    <div>
      <p
        className="
          text-[11px]
          font-semibold
          uppercase
          tracking-[0.14em]
          text-gruner-charcoal/40
        ">
        {label}
      </p>

      <p
        className="
          mt-2
          text-[13px]
          font-medium
          leading-5
          text-gruner-charcoal/80
        ">
        {value}
      </p>
    </div>
  );
}

/* =========================================================
   FEATURED PROJECT
========================================================= */

function FeaturedProject({ project, index, onOpen }) {
  const isReversed = index % 2 === 1;
  const imageCount = project.gallery?.length ?? 0;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 32,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.18,
      }}
      transition={{
        duration: 0.85,
        delay: index * 0.08,
        ease,
      }}
      className="
        grid
        overflow-hidden
        border
        border-gruner-charcoal/10
        bg-white

        lg:min-h-[620px]
        lg:grid-cols-12
      ">
      {/* =====================================================
          IMAGE
      ===================================================== */}

      <button
        type="button"
        onClick={() => onOpen(project)}
        aria-label={`Abrir galería de ${project.title}`}
        className={[
          `
            group
            relative
            min-h-[420px]
            overflow-hidden
            text-left

            lg:min-h-full
            lg:col-span-7
          `,
          isReversed ? "lg:order-2" : "lg:order-1",
        ].join(" ")}>
        <img
          src={project.cover}
          alt={project.title}
          loading="lazy"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover

            transition-transform
            duration-[1200ms]
            ease-[cubic-bezier(.22,1,.36,1)]

            group-hover:scale-[1.035]
          "
        />

        <div
          aria-hidden="true"
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#2D2926]/55
            via-transparent
            to-transparent
          "
        />

        {/* IMAGE COUNTER */}

        {imageCount > 0 && (
          <div
            className="
              absolute
              bottom-5
              left-5
              z-10

              flex
              items-center
              gap-2

              rounded-full
              border
              border-white/20

              bg-[#2D2926]/35

              px-3.5
              py-2.5

              text-[12px]
              font-medium
              text-white

              backdrop-blur-md

              sm:bottom-6
              sm:left-6
            ">
            <Images size={15} strokeWidth={1.6} />

            <span>
              {String(imageCount).padStart(2, "0")}{" "}
              {imageCount === 1 ? "fotografía" : "fotografías"}
            </span>
          </div>
        )}

        {/* HOVER BUTTON */}

        <div
          className="
            absolute
            right-5
            top-5
            z-10

            flex
            h-12
            w-12
            items-center
            justify-center

            rounded-full
            border
            border-white/25

            bg-[#2D2926]/25

            text-white

            backdrop-blur-md

            transition-all
            duration-300

            group-hover:border-gruner
            group-hover:bg-gruner

            sm:right-6
            sm:top-6
          ">
          <ArrowUpRight
            size={18}
            strokeWidth={1.6}
            className="
              transition-transform
              duration-300

              group-hover:-translate-y-0.5
              group-hover:translate-x-0.5
            "
          />
        </div>
      </button>

      {/* =====================================================
          INFORMATION
      ===================================================== */}

      <div
        className={[
          `
            flex
            flex-col
            justify-between

            p-6

            sm:p-8

            lg:col-span-5
            lg:p-10

            xl:p-12
          `,
          isReversed ? "lg:order-1" : "lg:order-2",
        ].join(" ")}>
        <div>
          {/* CATEGORY */}

          <div
            className="
              flex
              items-center
              gap-3
            ">
            <span
              className="
                h-px
                w-8
                bg-gruner
              "
            />

            <p
              className="
                text-[12px]
                font-semibold
                uppercase
                tracking-[0.16em]
                text-gruner
              ">
              {project.categoryLabel}
            </p>
          </div>

          {/* TITLE */}

          <h3
            className="
              mt-8
              max-w-[620px]

              text-[clamp(2.3rem,3.5vw,4.5rem)]
              font-normal
              leading-[0.95]
              tracking-[-0.055em]

              text-gruner-charcoal
            ">
            {project.title}
          </h3>

          {/* SUBTITLE */}

          {project.subtitle && (
            <p
              className="
                mt-4

                text-[13px]
                font-medium
                text-gruner-dark
              ">
              {project.subtitle}
            </p>
          )}

          {/* LOCATION */}

          {project.location && (
            <div
              className="
                mt-7

                flex
                items-center
                gap-2

                text-[13px]
                text-gruner-charcoal/55
              ">
              <MapPin size={15} strokeWidth={1.6} />

              <span>{project.location}</span>
            </div>
          )}

          {/* DESCRIPTION */}

          {project.description && (
            <p
              className="
                mt-6
                max-w-[600px]

                text-[14px]
                leading-7

                text-gruner-charcoal/62
              ">
              {project.description}
            </p>
          )}
        </div>

        {/* =====================================================
            BOTTOM INFORMATION
        ===================================================== */}

        <div className="mt-12">
          <div
            className="
              grid
              grid-cols-2
              gap-x-6
              gap-y-7

              border-t
              border-gruner-charcoal/10

              pt-6
            ">
            <ProjectMeta label="Año" value={project.year} />

            <ProjectMeta label="Capacidad" value={project.capacity} />

            <ProjectMeta label="Cliente" value={project.client} />

            <ProjectMeta label="Solución" value={project.solution} />
          </div>

          {/* CTA */}

          <button
            type="button"
            onClick={() => onOpen(project)}
            className="
              group

              mt-9

              inline-flex
              items-center
              gap-4

              text-[13px]
              font-semibold
              text-gruner-charcoal

              transition-colors
              duration-300

              hover:text-gruner-dark
            ">
            <span>Explorar proyecto</span>

            <span
              className="
                flex
                h-10
                w-10
                items-center
                justify-center

                rounded-full

                bg-gruner
                text-white

                transition-all
                duration-300

                group-hover:bg-gruner-dark
              ">
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
            </span>
          </button>
        </div>
      </div>
    </motion.article>
  );
}

/* =========================================================
   FEATURED SECTION
========================================================= */

function ProyectosFeaturedSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  if (!featuredProjects.length) {
    return null;
  }

  return (
    <>
      <section
        className="
          relative
          overflow-hidden

          bg-[#F1F2EF]

          px-5
          py-24

          sm:px-8

          lg:px-12
          lg:py-32

          xl:px-16

          2xl:px-20
        ">
        {/* =====================================================
            AMBIENT DETAIL
        ===================================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none

            absolute
            left-[-220px]
            top-[180px]

            h-[520px]
            w-[520px]

            rounded-full

            bg-gruner/[0.035]

            blur-[150px]
          "
        />

        <div
          className="
            relative
            z-10

            mx-auto
            max-w-[1760px]
          ">
          {/* =====================================================
              HEADER
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 22,
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
              duration: 0.75,
              ease,
            }}
            className="
              grid
              gap-10

              border-b
              border-gruner-charcoal/10

              pb-12

              lg:grid-cols-[0.34fr_1.66fr]
              lg:gap-16
              lg:pb-16
            ">
            <div
              className="
                flex
                items-start
                gap-4
                pt-2
              ">
              <span
                className="
                  mt-2
                  h-px
                  w-10

                  bg-gruner
                "
              />

              <p
                className="
                  text-[12px]
                  font-semibold
                  uppercase
                  tracking-[0.18em]

                  text-gruner
                ">
                Proyectos destacados
              </p>
            </div>

            <div
              className="
                flex
                flex-col
                gap-7

                xl:flex-row
                xl:items-end
                xl:justify-between
              ">
              <h2
                className="
                  max-w-[980px]

                  text-[clamp(3rem,5.1vw,6rem)]
                  font-normal
                  leading-[0.92]
                  tracking-[-0.065em]

                  text-gruner-charcoal
                ">
                Soluciones que pasan de la estrategia{" "}
                <span className="text-gruner">a la realidad.</span>
              </h2>

              <p
                className="
                  max-w-[390px]

                  text-[15px]
                  leading-7

                  text-gruner-charcoal/60
                ">
                Una selección de proyectos que muestra cómo distintas
                capacidades convergen en soluciones implementadas.
              </p>
            </div>
          </motion.div>

          {/* =====================================================
              FEATURED PROJECTS
          ===================================================== */}

          <div
            className="
              mt-10

              flex
              flex-col
              gap-6

              lg:mt-14
              lg:gap-8
            ">
            {featuredProjects.map((project, index) => (
              <FeaturedProject
                key={project.id}
                project={project}
                index={index}
                onOpen={setSelectedProject}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SAME LIGHT GALLERY AS PORTFOLIO
      ========================================================= */}

      <ProjectGallery
        project={selectedProject}
        open={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}

export default ProyectosFeaturedSection;
