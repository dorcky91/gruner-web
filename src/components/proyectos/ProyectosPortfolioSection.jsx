import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowDown } from "lucide-react";

import ProjectCard from "./ProjectCard";
import ProjectGallery from "./ProjectGallery";

import { PROJECT_CATEGORIES, projects } from "../../data/projects";

const ease = [0.22, 1, 0.36, 1];

const INITIAL_PROJECTS = 4;
const PROJECTS_PER_LOAD = 4;

/* =========================================================
   HELPERS
========================================================= */

function chunkProjects(items, size = 4) {
  const groups = [];

  for (let index = 0; index < items.length; index += size) {
    groups.push(items.slice(index, index + size));
  }

  return groups;
}

/* =========================================================
   PROJECT GROUP
========================================================= */

function ProjectGroup({ projects: groupProjects, groupIndex, onOpen }) {
  const [projectOne, projectTwo, projectThree, projectFour] = groupProjects;

  /*
   * =======================================================
   * COMPLETE GROUP — 4 PROJECTS
   *
   * DESKTOP:
   *
   * ┌──────────────┬──────────────┬──────────────────────┐
   * │              │              │          03          │
   * │              │              │                      │
   * │      01      │      02      ├──────────────────────┤
   * │              │              │                      │
   * │              │              │          04          │
   * └──────────────┴──────────────┴──────────────────────┘
   *
   * 25%            25%                     50%
   *
   * Todas las columnas comparten exactamente
   * la misma altura total.
   * =======================================================
   */

  if (groupProjects.length === 4) {
    return (
      <motion.div
        initial={{
          opacity: 0,
          y: 22,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
          delay: Math.min(groupIndex * 0.06, 0.18),
          ease,
        }}
        className="
          grid
          grid-cols-1
          gap-4

          md:grid-cols-2

          xl:h-[680px]
          xl:grid-cols-4
        ">
        {/* ===================================================
            PROJECT 01 — VERTICAL
        =================================================== */}

        <div
          className="
            min-h-[420px]

            md:min-h-[500px]

            xl:col-span-1
            xl:h-full
            xl:min-h-0
          ">
          <ProjectCard project={projectOne} index={0} onOpen={onOpen} />
        </div>

        {/* ===================================================
            PROJECT 02 — VERTICAL
        =================================================== */}

        <div
          className="
            min-h-[420px]

            md:min-h-[500px]

            xl:col-span-1
            xl:h-full
            xl:min-h-0
          ">
          <ProjectCard project={projectTwo} index={1} onOpen={onOpen} />
        </div>

        {/* ===================================================
            PROJECTS 03 + 04 — HORIZONTAL
        =================================================== */}

        <div
          className="
            grid
            gap-4

            md:col-span-2
            md:grid-cols-2

            xl:col-span-2
            xl:h-full
            xl:grid-cols-1
            xl:grid-rows-2
          ">
          {/* PROJECT 03 */}

          <div
            className="
              min-h-[400px]

              md:min-h-[440px]

              xl:h-full
              xl:min-h-0
            ">
            <ProjectCard project={projectThree} index={2} onOpen={onOpen} />
          </div>

          {/* PROJECT 04 */}

          <div
            className="
              min-h-[400px]

              md:min-h-[440px]

              xl:h-full
              xl:min-h-0
            ">
            <ProjectCard project={projectFour} index={3} onOpen={onOpen} />
          </div>
        </div>
      </motion.div>
    );
  }

  /*
   * =======================================================
   * INCOMPLETE GROUP
   *
   * Esto ocurre en filtros como:
   *
   * BESS        → 2 proyectos
   * Movilidad   → 3 proyectos
   * Valorización→ 3 proyectos
   *
   * No dejamos huecos artificiales.
   * =======================================================
   */

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 18,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.55,
        ease,
      }}
      className={[
        "grid grid-cols-1 gap-4",
        groupProjects.length === 2 ? "md:grid-cols-2" : "",
        groupProjects.length === 3 ? "md:grid-cols-2 xl:grid-cols-3" : "",
      ].join(" ")}>
      {groupProjects.map((project, index) => (
        <div
          key={project.id}
          className={[
            "min-h-[420px]",
            "md:min-h-[480px]",
            groupProjects.length === 3 && index === 2
              ? "md:col-span-2 xl:col-span-1"
              : "",
          ].join(" ")}>
          <ProjectCard project={project} index={index} onOpen={onOpen} />
        </div>
      ))}
    </motion.div>
  );
}

/* =========================================================
   PORTFOLIO
========================================================= */

function ProyectosPortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const [visibleProjects, setVisibleProjects] = useState(INITIAL_PROJECTS);

  const [selectedProject, setSelectedProject] = useState(null);

  /* =======================================================
     FILTERED PROJECTS
  ======================================================= */

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") {
      return projects;
    }

    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  /* =======================================================
     VISIBLE PROJECTS
  ======================================================= */

  const projectsToShow = filteredProjects.slice(0, visibleProjects);

  const projectGroups = useMemo(
    () => chunkProjects(projectsToShow, 4),
    [projectsToShow],
  );

  const hasMoreProjects = visibleProjects < filteredProjects.length;

  /* =======================================================
     CATEGORY COUNT
  ======================================================= */

  const getCategoryCount = (categoryId) => {
    if (categoryId === "all") {
      return projects.length;
    }

    return projects.filter((project) => project.category === categoryId).length;
  };

  /* =======================================================
     CATEGORY CHANGE
  ======================================================= */

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    setVisibleProjects(INITIAL_PROJECTS);
  };

  /* =======================================================
     LOAD MORE
  ======================================================= */

  const handleLoadMore = () => {
    setVisibleProjects((current) => current + PROJECTS_PER_LOAD);
  };

  return (
    <>
      <section
        id="proyectos-portafolio"
        className="
          relative
          overflow-hidden

          bg-[#F7F8F5]

          px-5
          py-24

          text-gruner-charcoal

          sm:px-8

          lg:px-12
          lg:py-32

          xl:px-16

          2xl:px-20
        ">
        {/* =====================================================
            AMBIENT BACKGROUND
        ===================================================== */}

        <div
          aria-hidden="true"
          className="
            pointer-events-none

            absolute
            right-[-180px]
            top-20

            h-[520px]
            w-[520px]

            rounded-full

            bg-gruner/[0.035]

            blur-[160px]
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
              amount: 0.35,
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
            {/* LABEL */}

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
                Portafolio
              </p>
            </div>

            {/* HEADING */}

            <div
              className="
                flex
                flex-col
                gap-8

                xl:flex-row
                xl:items-end
                xl:justify-between
              ">
              <h2
                className="
                  max-w-[1020px]

                  text-[clamp(3.2rem,5.5vw,6.7rem)]
                  font-normal
                  leading-[0.91]
                  tracking-[-0.07em]
                ">
                Distintos retos.
                <span
                  className="
                    block
                    text-gruner
                  ">
                  Una misma capacidad para hacerlos realidad.
                </span>
              </h2>

              <p
                className="
                  max-w-[420px]

                  text-[15px]
                  leading-7

                  text-gruner-charcoal/65
                ">
                Proyectos e infraestructura desarrollados para atender retos de
                energía, movilidad y aprovechamiento de recursos.
              </p>
            </div>
          </motion.div>

          {/* =====================================================
              FILTERS
          ===================================================== */}

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
              amount: 0.4,
            }}
            transition={{
              duration: 0.65,
              delay: 0.08,
              ease,
            }}
            className="
              mt-8

              flex
              flex-wrap
              items-center
              gap-2

              lg:mt-10
            ">
            {PROJECT_CATEGORIES.map((category) => {
              const isActive = activeCategory === category.id;

              const count = getCategoryCount(category.id);

              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => handleCategoryChange(category.id)}
                  className={[
                    `
                        flex
                        items-center
                        gap-2.5

                        rounded-full
                        border

                        px-4
                        py-2.5

                        text-[13px]
                        font-medium

                        transition-all
                        duration-300
                      `,
                    isActive
                      ? `
                            border-gruner
                            bg-gruner
                            text-white
                          `
                      : `
                            border-gruner-charcoal/10
                            bg-white/55
                            text-gruner-charcoal/65

                            hover:border-gruner/30
                            hover:bg-white
                            hover:text-gruner-dark
                          `,
                  ].join(" ")}>
                  <span>{category.label}</span>

                  <span
                    className={[
                      `
                          text-[11px]
                          transition-colors
                        `,
                      isActive ? "text-white/65" : "text-gruner-gray",
                    ].join(" ")}>
                    {String(count).padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </motion.div>

          {/* =====================================================
              PROJECT GROUPS
          ===================================================== */}

          <div className="mt-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -8,
                }}
                transition={{
                  duration: 0.35,
                  ease,
                }}
                className="
                  flex
                  flex-col
                  gap-4
                ">
                {projectGroups.map((group, groupIndex) => (
                  <ProjectGroup
                    key={`${activeCategory}-${groupIndex}`}
                    projects={group}
                    groupIndex={groupIndex}
                    onOpen={setSelectedProject}
                  />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* =====================================================
              LOAD MORE
          ===================================================== */}

          {hasMoreProjects && (
            <div
              className="
                mt-12

                flex
                justify-center

                lg:mt-16
              ">
              <button
                type="button"
                onClick={handleLoadMore}
                className="
                  group

                  flex
                  items-center
                  gap-3

                  rounded-full
                  border
                  border-gruner-charcoal/12

                  bg-white

                  px-6
                  py-3.5

                  text-[13px]
                  font-semibold
                  text-gruner-charcoal

                  shadow-[0_12px_35px_rgba(55,58,54,.05)]

                  transition-all
                  duration-300

                  hover:border-gruner
                  hover:text-gruner-dark
                ">
                Ver más proyectos
                <span
                  className="
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center

                    rounded-full

                    bg-gruner
                    text-white

                    transition-transform
                    duration-300

                    group-hover:translate-y-1
                  ">
                  <ArrowDown size={15} strokeWidth={1.7} />
                </span>
              </button>
            </div>
          )}

          {/* =====================================================
              CAPACITY BLOCK
          ===================================================== */}

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
              amount: 0.25,
            }}
            transition={{
              duration: 0.8,
              ease,
            }}
            className="
              relative

              mt-16

              overflow-hidden

              border
              border-gruner-charcoal/10

              bg-[#F1F2EF]

              p-6

              lg:mt-20
              lg:p-8
            ">
            {/* DECORATION */}

            <div
              aria-hidden="true"
              className="
                pointer-events-none

                absolute
                right-[-100px]
                top-[-140px]

                h-[340px]
                w-[340px]

                rounded-full

                border
                border-gruner/10
              "
            />

            <div
              aria-hidden="true"
              className="
                pointer-events-none

                absolute
                right-[-25px]
                top-[-60px]

                h-[200px]
                w-[200px]

                rounded-full

                border
                border-gruner/10
              "
            />

            {/* CONTENT */}

            <div className="relative z-10">
              <div
                className="
                  flex
                  items-center
                  gap-3
                ">
                <span
                  className="
                    h-1.5
                    w-1.5

                    rounded-full

                    bg-gruner
                  "
                />

                <p
                  className="
                    text-[12px]
                    font-semibold
                    uppercase
                    tracking-[0.16em]

                    text-gruner-charcoal/45
                  ">
                  Capacidad integral
                </p>
              </div>

              <p
                className="
                  mt-8

                  max-w-[900px]

                  text-[clamp(1.9rem,3.1vw,3.7rem)]
                  font-normal
                  leading-[1.03]
                  tracking-[-0.05em]

                  text-gruner-charcoal
                ">
                Cada proyecto conecta estrategia, ingeniería, implementación y
                operación.
              </p>
            </div>

            {/* CAPABILITIES */}

            <div
              className="
                relative
                z-10

                mt-10

                grid
                gap-5

                border-t
                border-gruner-charcoal/10

                pt-5

                sm:grid-cols-2
                lg:grid-cols-4
              ">
              {["Estrategia", "Ingeniería", "Implementación", "Operación"].map(
                (item, index) => (
                  <div key={item}>
                    <span
                      className="
                      text-[12px]
                      font-semibold
                      tracking-[0.14em]

                      text-gruner
                    ">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p
                      className="
                      mt-2

                      text-[13px]
                      font-medium

                      text-gruner-charcoal/65
                    ">
                      {item}
                    </p>
                  </div>
                ),
              )}
            </div>
          </motion.div>

          {/* =====================================================
              BOTTOM NOTE
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="
              mt-8

              flex
              flex-col
              gap-4

              border-b
              border-gruner-charcoal/10

              pb-7

              sm:flex-row
              sm:items-center
              sm:justify-between
            ">
            <p
              className="
                max-w-[680px]

                text-[13px]
                leading-6

                text-gruner-charcoal/60
              ">
              Una selección visual de las áreas en las que GRUNER desarrolla e
              implementa soluciones.
            </p>

            <p
              className="
                text-[12px]
                font-semibold
                uppercase
                tracking-[0.15em]

                text-gruner-charcoal/40
              ">
              Energía · Movilidad · Circularidad
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          LIGHT GALLERY
      ========================================================= */}

      <ProjectGallery
        project={selectedProject}
        open={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}

export default ProyectosPortfolioSection;
