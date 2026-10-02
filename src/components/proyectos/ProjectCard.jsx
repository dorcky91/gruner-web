import { motion } from "motion/react";
import { ArrowUpRight, Images, MapPin } from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

function ProjectCard({ project, index = 0, onOpen }) {
  const imageCount = project.gallery?.length ?? 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay: Math.min(index * 0.04, 0.2),
        ease,
      }}
      className="
        group
        relative
        h-full
        min-h-[380px]
        overflow-hidden
        bg-gruner-charcoal

        md:min-h-[430px]

        xl:min-h-0
      ">
      {/* =====================================================
          CLICK AREA
      ===================================================== */}

      <button
        type="button"
        onClick={() => onOpen(project)}
        aria-label={`Abrir proyecto ${project.title}`}
        className="
          absolute
          inset-0
          z-20
          cursor-pointer
          text-left
        ">
        <span className="sr-only">Ver proyecto {project.title}</span>
      </button>

      {/* =====================================================
          IMAGE
      ===================================================== */}

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
          duration-[1100ms]
          ease-[cubic-bezier(.22,1,.36,1)]

          group-hover:scale-[1.045]
        "
      />

      {/* =====================================================
          DARK GRADIENT
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          absolute
          inset-0

          bg-gradient-to-t
          from-[#2D2926]/95
          via-[#2D2926]/30
          to-transparent
        "
      />

      {/* =====================================================
          GREEN HOVER TINT
      ===================================================== */}

      <div
        aria-hidden="true"
        className="
          absolute
          inset-0

          bg-gruner/0

          transition-colors
          duration-500

          group-hover:bg-gruner/[0.06]
        "
      />

      {/* =====================================================
          TOP META
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          z-10

          flex
          items-start
          justify-between
          gap-4

          p-5

          sm:p-6
        ">
        {/* CATEGORY */}

        <div
          className="
            rounded-full
            border
            border-white/20

            bg-[#2D2926]/25

            px-3
            py-2

            text-[11px]
            font-semibold
            uppercase
            tracking-[0.14em]
            text-white/85

            backdrop-blur-md
          ">
          {project.categoryLabel}
        </div>

        {/* IMAGE COUNT */}

        {imageCount > 1 && (
          <div
            className="
              flex
              items-center
              gap-2

              rounded-full
              border
              border-white/20

              bg-[#2D2926]/25

              px-3
              py-2

              text-[12px]
              font-medium
              text-white

              backdrop-blur-md
            ">
            <Images size={14} strokeWidth={1.6} />

            <span>{imageCount}</span>
          </div>
        )}
      </div>

      {/* =====================================================
          PROJECT INFORMATION
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-10

          p-5

          sm:p-6
          lg:p-7
        ">
        {/* LOCATION */}

        {project.location && (
          <div
            className="
              mb-4

              flex
              items-center
              gap-2

              text-[12px]
              text-white/60
            ">
            <MapPin size={14} strokeWidth={1.6} />

            <span>{project.location}</span>
          </div>
        )}

        {/* CONTENT */}

        <div
          className="
            flex
            items-end
            justify-between
            gap-6
          ">
          <div className="min-w-0">
            <h3
              className="
                max-w-[620px]

                text-[clamp(1.65rem,2.4vw,2.8rem)]
                font-normal
                leading-[1.02]
                tracking-[-0.045em]
                text-white
              ">
              {project.title}
            </h3>

            {project.subtitle && (
              <p
                className="
                  mt-3

                  text-[13px]
                  leading-5
                  text-white/55
                ">
                {project.subtitle}
              </p>
            )}
          </div>

          {/* ARROW */}

          <div
            className="
              flex
              h-11
              w-11
              shrink-0
              items-center
              justify-center

              rounded-full
              border
              border-white/25

              bg-white/[0.04]

              text-white

              backdrop-blur-sm

              transition-all
              duration-300

              group-hover:border-gruner
              group-hover:bg-gruner
            ">
            <ArrowUpRight
              size={17}
              strokeWidth={1.6}
              className="
                transition-transform
                duration-300

                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
