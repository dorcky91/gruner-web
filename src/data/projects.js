import projectSolar from "../assets/images/projects/project-solar.jpg";
import projectBess from "../assets/images/projects/project-bess.jpg";
import projectEv from "../assets/images/projects/project-ev.jpg";
import projectResiduos from "../assets/images/projects/project-residuos.jpg";

export const PROJECT_CATEGORIES = [
  {
    id: "all",
    label: "Todos",
  },
  {
    id: "solar",
    label: "Solar",
  },
  {
    id: "bess",
    label: "BESS",
  },
  {
    id: "movilidad",
    label: "Movilidad",
  },
  {
    id: "residuos",
    label: "Valorización",
  },
];

/*
 * =========================================================
 * CONTENIDO DEMO
 * =========================================================
 *
 * Estos proyectos permiten probar la arquitectura visual
 * del portafolio.
 *
 * Nombres, ubicaciones, años, capacidades, clientes y
 * descripciones deberán sustituirse posteriormente por
 * información real y validada de GRUNER.
 */

export const projects = [
  {
    id: "solar-01",

    category: "solar",
    categoryLabel: "Solar fotovoltaica",

    featured: true,

    title: "Sistema fotovoltaico industrial",
    subtitle: "Generación distribuida",

    cover: projectSolar,

    description:
      "Proyecto demostrativo de generación solar para visualizar cómo se presentará la información técnica, el contexto y el alcance de cada proyecto dentro del portafolio.",

    location: "Guadalajara, Jalisco",
    year: "2025",
    client: "Sector industrial",
    capacity: "850 kWp",
    solution: "Generación distribuida",

    gallery: [projectSolar, projectSolar, projectSolar, projectSolar],
  },

  {
    id: "bess-01",

    category: "bess",
    categoryLabel: "BESS",

    featured: true,

    title: "Sistema de almacenamiento energético",
    subtitle: "Gestión y respaldo de energía",

    cover: projectBess,

    description:
      "Proyecto demostrativo de almacenamiento energético diseñado para representar soluciones que integran gestión de demanda, respaldo y aprovechamiento eficiente de energía.",

    location: "Monterrey, Nuevo León",
    year: "2025",
    client: "Sector industrial",
    capacity: "2.4 MWh",
    solution: "Battery Energy Storage System",

    gallery: [projectBess, projectBess, projectBess],
  },

  {
    id: "movilidad-01",

    category: "movilidad",
    categoryLabel: "Movilidad eléctrica",

    featured: false,

    title: "Infraestructura de carga corporativa",
    subtitle: "Electromovilidad",

    cover: projectEv,

    description:
      "Proyecto demostrativo de infraestructura para vehículos eléctricos orientado a visualizar la integración de estaciones de carga, infraestructura eléctrica y gestión energética.",

    location: "Ciudad de México",
    year: "2026",
    client: "Sector corporativo",
    capacity: "12 puntos de carga",
    solution: "Infraestructura de carga",

    gallery: [projectEv, projectEv, projectEv, projectEv],
  },

  {
    id: "residuos-01",

    category: "residuos",
    categoryLabel: "Valorización",

    featured: false,

    title: "Valorización de residuos industriales",
    subtitle: "Circularidad industrial",

    cover: projectResiduos,

    description:
      "Proyecto demostrativo para presentar soluciones orientadas al aprovechamiento de residuos industriales y su reincorporación dentro de esquemas de economía circular.",

    location: "Querétaro, Querétaro",
    year: "2025",
    client: "Sector manufactura",
    capacity: "Proyecto integral",
    solution: "Valorización de residuos",

    gallery: [projectResiduos, projectResiduos, projectResiduos],
  },

  {
    id: "solar-02",

    category: "solar",
    categoryLabel: "Solar fotovoltaica",

    featured: false,

    title: "Generación solar para centro logístico",
    subtitle: "Energía renovable",

    cover: projectSolar,

    description:
      "Proyecto demostrativo para visualizar una solución de generación fotovoltaica aplicada a instalaciones logísticas con consumo energético continuo.",

    location: "Estado de México",
    year: "2026",
    client: "Sector logístico",
    capacity: "1.2 MWp",
    solution: "Solar fotovoltaica",

    gallery: [projectSolar, projectSolar, projectSolar],
  },

  {
    id: "movilidad-02",

    category: "movilidad",
    categoryLabel: "Movilidad eléctrica",

    featured: false,

    title: "Hub de carga para flota eléctrica",
    subtitle: "Infraestructura energética",

    cover: projectEv,

    description:
      "Proyecto demostrativo enfocado en mostrar una solución integral de infraestructura eléctrica destinada a la operación y carga de una flota de vehículos eléctricos.",

    location: "Puebla, Puebla",
    year: "2026",
    client: "Sector transporte",
    capacity: "20 posiciones de carga",
    solution: "Carga de flotas",

    gallery: [projectEv, projectEv, projectEv, projectEv],
  },

  {
    id: "bess-02",

    category: "bess",
    categoryLabel: "BESS",

    featured: false,

    title: "Almacenamiento para gestión de demanda",
    subtitle: "Optimización energética",

    cover: projectBess,

    description:
      "Proyecto demostrativo para visualizar sistemas de almacenamiento orientados a optimizar la demanda eléctrica y complementar otras soluciones energéticas.",

    location: "San Luis Potosí",
    year: "2025",
    client: "Sector manufactura",
    capacity: "1.8 MWh",
    solution: "Gestión energética",

    gallery: [projectBess, projectBess, projectBess],
  },

  {
    id: "solar-03",

    category: "solar",
    categoryLabel: "Solar fotovoltaica",

    featured: false,

    title: "Planta solar para operación industrial",
    subtitle: "Generación distribuida",

    cover: projectSolar,

    description:
      "Proyecto demostrativo que representa la implementación de infraestructura fotovoltaica para reducir el consumo energético proveniente de la red.",

    location: "León, Guanajuato",
    year: "2024",
    client: "Sector industrial",
    capacity: "650 kWp",
    solution: "Generación solar",

    gallery: [projectSolar, projectSolar, projectSolar, projectSolar],
  },

  {
    id: "residuos-02",

    category: "residuos",
    categoryLabel: "Valorización",

    featured: false,

    title: "Aprovechamiento de subproductos industriales",
    subtitle: "Economía circular",

    cover: projectResiduos,

    description:
      "Proyecto demostrativo para representar procesos de identificación, tratamiento y aprovechamiento de materiales derivados de operaciones industriales.",

    location: "Toluca, Estado de México",
    year: "2025",
    client: "Sector industrial",
    capacity: "Solución integral",
    solution: "Circularidad",

    gallery: [projectResiduos, projectResiduos, projectResiduos],
  },

  {
    id: "movilidad-03",

    category: "movilidad",
    categoryLabel: "Movilidad eléctrica",

    featured: false,

    title: "Red de carga de alta potencia",
    subtitle: "Carga rápida",

    cover: projectEv,

    description:
      "Proyecto demostrativo para visualizar infraestructura de carga de mayor potencia, integración eléctrica y operación de estaciones para movilidad eléctrica.",

    location: "Guadalajara, Jalisco",
    year: "2026",
    client: "Sector movilidad",
    capacity: "Carga rápida",
    solution: "Electromovilidad",

    gallery: [projectEv, projectEv, projectEv, projectEv],
  },

  {
    id: "solar-04",

    category: "solar",
    categoryLabel: "Solar fotovoltaica",

    featured: false,

    title: "Estrategia de generación renovable",
    subtitle: "Descarbonización energética",

    cover: projectSolar,

    description:
      "Proyecto demostrativo para mostrar cómo una intervención de generación renovable puede formar parte de una estrategia energética de mayor alcance.",

    location: "Aguascalientes, Aguascalientes",
    year: "2025",
    client: "Sector corporativo",
    capacity: "980 kWp",
    solution: "Energía renovable",

    gallery: [projectSolar, projectSolar, projectSolar],
  },

  {
    id: "residuos-03",

    category: "residuos",
    categoryLabel: "Valorización",

    featured: false,

    title: "Modelo de circularidad industrial",
    subtitle: "Aprovechamiento de recursos",

    cover: projectResiduos,

    description:
      "Proyecto demostrativo que permite visualizar la presentación de iniciativas relacionadas con circularidad, recuperación de materiales y aprovechamiento de recursos.",

    location: "Monterrey, Nuevo León",
    year: "2026",
    client: "Sector manufactura",
    capacity: "Proyecto integral",
    solution: "Economía circular",

    gallery: [
      projectResiduos,
      projectResiduos,
      projectResiduos,
      projectResiduos,
    ],
  },
];

export default projects;
