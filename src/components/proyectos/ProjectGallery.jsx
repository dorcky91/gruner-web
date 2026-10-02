import { useEffect, useMemo, useRef } from "react";

import LightGallery from "lightgallery/react";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";

function escapeHtml(value) {
  if (value === null || value === undefined) {
    return "";
  }

  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function createDetailItem(label, value) {
  if (!value) {
    return "";
  }

  return `
    <div class="gruner-project-detail">
      <span class="gruner-project-detail__label">
        ${escapeHtml(label)}
      </span>

      <span class="gruner-project-detail__value">
        ${escapeHtml(value)}
      </span>
    </div>
  `;
}

function ProjectGallery({ project, open, onClose }) {
  const galleryRef = useRef(null);

  const images = useMemo(() => {
    if (!project?.gallery?.length) {
      return [];
    }

    const details = [
      createDetailItem("Ubicación", project.location),
      createDetailItem("Año", project.year),
      createDetailItem("Cliente", project.client),
      createDetailItem("Capacidad", project.capacity),
      createDetailItem("Solución", project.solution),
    ]
      .filter(Boolean)
      .join("");

    return project.gallery.map((image, index) => ({
      src: image,
      thumb: image,

      subHtml: `
        <div class="gruner-project-info">

          <div class="gruner-project-info__heading">

            <div>
              <p class="gruner-project-info__category">
                ${escapeHtml(project.categoryLabel)}
              </p>

              <h3 class="gruner-project-info__title">
                ${escapeHtml(project.title)}
              </h3>
            </div>

            <p class="gruner-project-info__image-count">
              ${String(index + 1).padStart(2, "0")}
              /
              ${String(project.gallery.length).padStart(2, "0")}
            </p>

          </div>

          ${
            project.description
              ? `
                <p class="gruner-project-info__description">
                  ${escapeHtml(project.description)}
                </p>
              `
              : ""
          }

          ${
            details
              ? `
                <div class="gruner-project-info__details">
                  ${details}
                </div>
              `
              : ""
          }

        </div>
      `,

      alt: `${project.title} — imagen ${index + 1}`,
    }));
  }, [project]);

  useEffect(() => {
    if (!open || !images.length) {
      return;
    }

    const timer = window.setTimeout(() => {
      galleryRef.current?.openGallery(0);
    }, 0);

    return () => {
      window.clearTimeout(timer);
    };
  }, [open, images]);

  if (!project || !images.length) {
    return null;
  }

  return (
    <LightGallery
      key={project.id}
      dynamic
      dynamicEl={images}
      plugins={[lgThumbnail, lgZoom]}
      speed={450}
      download={false}
      counter={false}
      closable
      escKey
      hideBarsDelay={5000}
      mobileSettings={{
        controls: true,
        showCloseIcon: true,
        download: false,
      }}
      onInit={(detail) => {
        galleryRef.current = detail.instance;
      }}
      onAfterClose={() => {
        onClose();
      }}
    />
  );
}

export default ProjectGallery;
