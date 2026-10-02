import L from "leaflet";

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  ZoomControl,
} from "react-leaflet";

import { FiArrowUpRight, FiMapPin } from "react-icons/fi";

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Justo+Sierra+1814+Colonia+Americana+Guadalajara+Jalisco+44160";

/*
 * Posición temporal.
 *
 * IMPORTANTE:
 * Actualmente usamos una coordenada aproximada.
 * Cuando tengamos la coordenada exacta del inmueble,
 * solamente tendremos que reemplazar estos dos valores.
 */
const GRUNER_POSITION = [20.6755, -103.3675];

/* =========================================================
   CUSTOM GRUNER MARKER
========================================================= */

const grunerIcon = L.divIcon({
  className: "gruner-marker-wrapper",

  html: `
    <div class="gruner-marker">
      <span class="gruner-marker-pulse"></span>

      <span class="gruner-marker-pin">
        <span class="gruner-marker-dot"></span>
      </span>
    </div>
  `,

  iconSize: [58, 58],
  iconAnchor: [29, 48],
  popupAnchor: [0, -42],
});

/* =========================================================
   MAP
========================================================= */

function GrunerMap() {
  return (
    <div className="gruner-map">
      {/* =====================================================
          LEAFLET MAP
      ===================================================== */}

      <MapContainer
        center={GRUNER_POSITION}
        zoom={15}
        zoomControl={false}
        scrollWheelZoom={false}
        doubleClickZoom
        dragging
        attributionControl
        style={{
          width: "100%",
          height: "100%",
        }}
        className="gruner-map__canvas">
        {/* ===================================================
            OPENSTREETMAP

            No requiere API key.

            Dejamos de utilizar CARTO para evitar el problema
            "API KEY REQUIRED" que está apareciendo actualmente.
        =================================================== */}

        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          maxZoom={19}
        />

        {/* ===================================================
            ZOOM
        =================================================== */}

        <ZoomControl position="topright" />

        {/* ===================================================
            GRUNER MARKER
        =================================================== */}

        <Marker position={GRUNER_POSITION} icon={grunerIcon}>
          <Popup closeButton={false} className="gruner-popup">
            <div className="gruner-popup__content">
              {/* HEADER */}

              <div className="gruner-popup__head">
                <span className="gruner-popup__icon">
                  <FiMapPin size={15} />
                </span>

                <div>
                  <p className="gruner-popup__eyebrow">Nuestra oficina</p>

                  <p className="gruner-popup__title">GRUNER</p>
                </div>
              </div>

              {/* CITY */}

              <p className="gruner-popup__city">Guadalajara · México</p>

              {/* ROUTE */}

              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="gruner-popup__link">
                Ver ruta
                <FiArrowUpRight size={13} />
              </a>
            </div>
          </Popup>
        </Marker>
      </MapContainer>

      {/* =====================================================
          FLOATING BRAND
      ===================================================== */}

      <div className="gruner-map__brand">
        <span className="gruner-map__brand-dot" />

        <div>
          <p className="gruner-map__brand-name">GRUNER</p>

          <p className="gruner-map__brand-city">Guadalajara · México</p>
        </div>
      </div>

      {/* =====================================================
          BOTTOM GLASS PANEL
      ===================================================== */}

      <div className="gruner-map__bottom">
        <div className="gruner-map__bottom-info">
          <p className="gruner-map__bottom-label">Nuestra oficina</p>

          <p className="gruner-map__bottom-title">Guadalajara, Jalisco</p>
        </div>

        <a
          href={mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="gruner-map__route">
          Ver ruta
          <FiArrowUpRight size={15} />
        </a>
      </div>
    </div>
  );
}

export default GrunerMap;
