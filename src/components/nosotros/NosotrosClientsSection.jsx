import { motion } from "motion/react";

import aeroportuario from "../../assets/images/logos/aeroportuario.png";
import agroScience from "../../assets/images/logos/AgroScience.png";
import agrovision from "../../assets/images/logos/agrovision.png";
import arboledas from "../../assets/images/logos/arboleadas.png";
import azteca from "../../assets/images/logos/azteca.png";
import bid from "../../assets/images/logos/BID.png";
import carsol from "../../assets/images/logos/carsol.png";
import casther from "../../assets/images/logos/casther.png";
import chevrolet from "../../assets/images/logos/Chevrolet.png";
import comeVerde from "../../assets/images/logos/come-verde.png";
import coppel from "../../assets/images/logos/Coppel.png";
import dalton from "../../assets/images/logos/Dalton.png";
import diana from "../../assets/images/logos/diana.png";
import disosa from "../../assets/images/logos/disosa.png";
import driscolls from "../../assets/images/logos/driscolls.png";
import ecoTrm from "../../assets/images/logos/eco-trm.png";
import elTaray from "../../assets/images/logos/eltaray.png";
import fibraMacquarie from "../../assets/images/logos/fibra-macquarie.png";
import forrajes from "../../assets/images/logos/forrajes.png";
import gepp from "../../assets/images/logos/gepp.png";
import gm from "../../assets/images/logos/gm.png";
import grupoMh from "../../assets/images/logos/grupomh.png";
import imasa from "../../assets/images/logos/imasa.png";
import imss from "../../assets/images/logos/IMSS.png";
import joseCuervo from "../../assets/images/logos/jose-cuervo.png";
import jr from "../../assets/images/logos/jr.png";
import lpet from "../../assets/images/logos/lpet.png";
import magna from "../../assets/images/logos/magna.png";
import magnoCampo from "../../assets/images/logos/magno-campo.png";
import nestle from "../../assets/images/logos/nestle.png";
import neufeld from "../../assets/images/logos/neufeld.png";
import oleofinos from "../../assets/images/logos/oleofinos.png";
import oleomex from "../../assets/images/logos/oleomex.png";
import philipMorris from "../../assets/images/logos/Philip-Morris.png";
import proan from "../../assets/images/logos/proan.png";
import productosTrigo from "../../assets/images/logos/productos-trigo.png";
import radial from "../../assets/images/logos/radial.png";
import rattan from "../../assets/images/logos/rattan.png";
import sanGabriel from "../../assets/images/logos/sangabriel.png";
import santaAnita from "../../assets/images/logos/santa-anita.png";
import skf from "../../assets/images/logos/SKF.png";
import stJoseph from "../../assets/images/logos/st-joseph.png";
import stockman from "../../assets/images/logos/stockman.png";
import tecnoGlobal from "../../assets/images/logos/tecno-global.png";
import tequila from "../../assets/images/logos/tequila.png";
import tmaz from "../../assets/images/logos/tmaz.png";
import toyotaTsusho from "../../assets/images/logos/toyota-tsusho.png";
import vimifos from "../../assets/images/logos/vimifos.png";
import volvo from "../../assets/images/logos/volvo.png";

const clients = [
  { name: "Grupo Aeroportuario del Pacífico", logo: aeroportuario },
  { name: "AgroScience", logo: agroScience },
  { name: "Agrovision", logo: agrovision },
  { name: "Refaccionaria Arboledas", logo: arboledas },
  { name: "Azteca", logo: azteca },
  { name: "BID", logo: bid },
  { name: "Carsol", logo: carsol },
  { name: "Casther", logo: casther },
  { name: "Chevrolet", logo: chevrolet },
  { name: "Come Verde", logo: comeVerde },
  { name: "Coppel", logo: coppel },
  { name: "Dalton", logo: dalton },
  { name: "Diana", logo: diana },
  { name: "Disosa", logo: disosa },
  { name: "Driscoll's", logo: driscolls },
  { name: "ecoTRM", logo: ecoTrm },
  { name: "El Taray", logo: elTaray },
  { name: "Fibra Macquarie", logo: fibraMacquarie },
  { name: "Forrajes Barragán", logo: forrajes },
  { name: "GEPP", logo: gepp },
  { name: "GM", logo: gm },
  { name: "Grupo MH", logo: grupoMh },
  { name: "IMASA", logo: imasa },
  { name: "IMSS", logo: imss },
  { name: "José Cuervo", logo: joseCuervo },
  { name: "JR", logo: jr },
  { name: "LPET", logo: lpet },
  { name: "Magna", logo: magna },
  { name: "Magnocampo", logo: magnoCampo },
  { name: "Nestlé", logo: nestle },
  { name: "Pastelería Neufeld", logo: neufeld },
  { name: "Oleofinos", logo: oleofinos },
  { name: "Oleomex", logo: oleomex },
  { name: "Philip Morris International", logo: philipMorris },
  { name: "PROAN", logo: proan },
  { name: "Productos de Trigo", logo: productosTrigo },
  { name: "Radial", logo: radial },
  { name: "Rattan", logo: rattan },
  { name: "San Gabriel", logo: sanGabriel },
  { name: "Santa Anita", logo: santaAnita },
  { name: "SKF", logo: skf },
  { name: "St. Joseph", logo: stJoseph },
  { name: "Alta Stockman", logo: stockman },
  { name: "Tecno Global", logo: tecnoGlobal },
  { name: "Tequila", logo: tequila },
  { name: "TMAZ", logo: tmaz },
  { name: "Toyota Tsusho", logo: toyotaTsusho },
  { name: "Vimifos", logo: vimifos },
  { name: "Volvo", logo: volvo },
];

const rows = [clients.slice(0, 17), clients.slice(17, 33), clients.slice(33)];

const ease = [0.22, 1, 0.36, 1];

function LogoItem({ client }) {
  return (
    <div
      className="
        group flex h-[96px] w-[190px] shrink-0 items-center justify-center
        px-7 sm:h-[108px] sm:w-[220px] sm:px-8
        lg:h-[118px] lg:w-[242px]
      "
      title={client.name}>
      <img
        src={client.logo}
        alt={client.name}
        loading="lazy"
        className="
          max-h-[54px] max-w-[138px] object-contain
          opacity-[0.48] grayscale
          transition-all duration-500 ease-out
          group-hover:scale-[1.04] group-hover:opacity-100 group-hover:grayscale-0
          sm:max-h-[60px] sm:max-w-[154px]
          lg:max-h-[64px] lg:max-w-[168px]
        "
      />
    </div>
  );
}

function LogoRow({ clients: rowClients, reverse = false, duration = 42 }) {
  const doubled = [...rowClients, ...rowClients];

  return (
    <div className="clients-marquee group relative overflow-hidden">
      <div
        className={[
          "clients-marquee-track flex w-max",
          reverse ? "clients-marquee-reverse" : "",
        ].join(" ")}
        style={{ "--marquee-duration": `${duration}s` }}>
        {doubled.map((client, index) => (
          <LogoItem key={`${client.name}-${index}`} client={client} />
        ))}
      </div>
    </div>
  );
}

function NosotrosClientsSection() {
  return (
    <section
      id="clientes"
      className="
        relative overflow-hidden bg-[#F4F5F0]
        px-5 py-24 text-[#153A2F]
        sm:px-8 lg:px-12 lg:py-32 xl:px-16 2xl:px-20
      ">
      <style>{`
        @keyframes clients-marquee-left {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }

        @keyframes clients-marquee-right {
          from { transform: translate3d(-50%, 0, 0); }
          to { transform: translate3d(0, 0, 0); }
        }

        .clients-marquee-track {
          animation: clients-marquee-left var(--marquee-duration) linear infinite;
          will-change: transform;
        }

        .clients-marquee-reverse {
          animation-name: clients-marquee-right;
        }

        .clients-marquee:hover .clients-marquee-track {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .clients-marquee-track,
          .clients-marquee-reverse {
            animation: none !important;
            transform: none !important;
          }

          .clients-marquee {
            overflow-x: auto;
            scrollbar-width: none;
          }

          .clients-marquee::-webkit-scrollbar {
            display: none;
          }
        }
      `}</style>

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute -right-44 top-10
          h-[520px] w-[520px] rounded-full
          bg-[#B8F23A]/[0.065] blur-[150px]
        "
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute inset-0 opacity-[0.14]
          [background-image:linear-gradient(rgba(21,58,47,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(21,58,47,.03)_1px,transparent_1px)]
          [background-size:108px_108px]
        "
      />

      <div className="relative z-10 mx-auto max-w-[1760px]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.75, ease }}
          className="
            grid gap-10 border-b border-[#153A2F]/10 pb-10
            lg:grid-cols-[.36fr_1.64fr] lg:gap-16 lg:pb-14
          ">
          <div className="flex items-start gap-4 pt-2">
            <span className="mt-2 h-px w-10 bg-[#7EA51F]" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#6F921D]">
              Confían en nosotros
            </p>
          </div>

          <div className="flex flex-col gap-7 xl:flex-row xl:items-end xl:justify-between">
            <h2
              className="
                max-w-[930px]
                text-[clamp(3.3rem,5.8vw,7rem)]
                font-normal leading-[0.9] tracking-[-0.072em]
              ">
              Relaciones construidas
              <span className="block text-[#789F20]">proyecto a proyecto.</span>
            </h2>

            <p className="max-w-[440px] text-[15px] leading-7 text-[#667A72]">
              Organizaciones de distintos sectores han confiado en GRUNER para
              acompañar retos de sostenibilidad, energía y operación.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.85, delay: 0.08, ease }}
          className="relative mt-12 lg:mt-16">
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute inset-y-0 left-0 z-20 w-12
              bg-gradient-to-r from-[#F4F5F0] to-transparent
              sm:w-20 lg:w-28
            "
          />
          <div
            aria-hidden="true"
            className="
              pointer-events-none absolute inset-y-0 right-0 z-20 w-12
              bg-gradient-to-l from-[#F4F5F0] to-transparent
              sm:w-20 lg:w-28
            "
          />

          <div className="border-y border-[#153A2F]/10">
            <LogoRow clients={rows[0]} duration={46} />

            <div className="border-t border-[#153A2F]/10">
              <LogoRow clients={rows[1]} reverse duration={52} />
            </div>

            <div className="border-t border-[#153A2F]/10">
              <LogoRow clients={rows[2]} duration={48} />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease }}
          className="
            mt-9 flex flex-col gap-5
            border-b border-[#153A2F]/10 pb-8
            sm:flex-row sm:items-center sm:justify-between
            lg:mt-11
          ">
          <p className="max-w-[700px] text-[13px] leading-6 text-[#647970]">
            Una muestra de organizaciones que forman parte de la trayectoria de
            GRUNER.
          </p>

          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#8CB524]" />
            <p className="text-[12px] font-semibold uppercase tracking-[0.15em] text-[#153A2F]/45">
              Sectores diversos · Retos distintos
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default NosotrosClientsSection;
