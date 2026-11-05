/**
 * Todo el contenido editable del sitio vive en este archivo:
 * teléfono de WhatsApp, dirección, departamentos y fotos.
 */

export const SITE = {
  name: "Totoras 750",
  city: "Pinamar",
  // Formato internacional sin "+" ni espacios: 54 9 + característica (sin 0) + número (sin 15).
  // Verificá que este sea tu número de WhatsApp.
  whatsapp: "5492246580576",
  whatsappDisplay: "2246 58-0576",
  address: "Totoras 750, entre Mengacho y De La Trucha, Pinamar",
  mapsUrl: "https://maps.app.goo.gl/3c557F2UeQ1p8Dss6",
  mapsEmbed:
    "https://www.google.com/maps?q=Totoras+750,+Pinamar,+Buenos+Aires,+Argentina&output=embed",
};

export const MAX_STAY_DAYS = 15;

export function waLink(message: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const GENERIC_MESSAGE =
  "Hola! Quisiera consultar disponibilidad y precios para alquilar en Totoras 750, Pinamar.";

export interface Photo {
  src: string;
  alt: string;
}

export const BASE = import.meta.env.BASE_URL.endsWith("/")
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`;

const img = (file: string, alt: string): Photo => ({
  src: `${BASE}images/${file}`,
  alt,
});

const photos = {
  monoCamasSimples: img("01-monoambiente-camas-simples.jpg", "Monoambiente con dos camas simples, mesa de luz y ventana"),
  banoMarmolLavatorio: img("02-bano-marmol-lavatorio.jpg", "Baño con revestimiento símil mármol, lavatorio y espejo redondo"),
  banoMarmolInodoro: img("03-bano-marmol-inodoro.jpg", "Baño con inodoro y bidet"),
  kitchinetteMono: img("04-kitchenette-monoambiente.jpg", "Cocina equipada con bacha, anafe, pava eléctrica, microondas y frigobar"),
  pasilloMono: img("05-pasillo-monoambiente.jpg", "Monoambiente con mesa rebatible, sillas, Smart TV y aire acondicionado"),
  monoCamaDoble: img("06-monoambiente-cama-doble.jpg", "Monoambiente con cama doble, aire acondicionado y Smart TV"),
  comedor: img("07-comedor.jpg", "Comedor con mesa y seis sillas, banquetas y cortinas azules"),
  dormitorioCuchetasBalcon: img("08-dormitorio-cuchetas-balcon.jpg", "Dormitorio con cucheta y cama individual"),
  banoMadera: img("09-bano-lavatorio-madera.jpg", "Baño con lavatorio sobre mueble de madera y espejo"),
  banoInodoro: img("10-bano-inodoro.jpg", "Baño con inodoro, bidet y cortina de ducha"),
  living: img("11-living-comedor.jpg", "Living comedor con mesa, Smart TV y mesa auxiliar"),
  dormitorioKing: img("12-dormitorio-king-balcon.jpg", "Dormitorio con cama king-size y aire acondicionado"),
  cocinaAngulo: img("13-cocina-angulo.jpg", "Cocina con bacha, anafe, microondas, horno eléctrico y heladera"),
  dormitorioCuchetas: img("14-dormitorio-cuchetas.jpg", "Dormitorio con cucheta y cama individual"),
  entrada: img("15-entrada-totoras-750.jpg", "Entrada del edificio Totoras 750 con escalera y plantas"),
  cocina: img("16-cocina.jpg", "Cocina equipada con bacha, anafe, microondas, horno eléctrico y heladera"),
};

export const heroPhoto = photos.dormitorioKing;
export const entrancePhoto = photos.entrada;

export interface Unit {
  id: string;
  name: string;
  type: string;
  capacity: string;
  beds: string;
  description: string;
  features: string[];
  photos: Photo[];
  whatsappMessage: string;
}

export const units: Unit[] = [
  {
    id: "totoras-1",
    name: "Totoras 1",
    type: "Monoambiente",
    capacity: "1 o 2 personas",
    beds: "Cama simple o doble",
    description:
      "Un monoambiente luminoso para una escapada corta, con la cama armada como simple o doble según lo que necesiten.",
    features: ["Cocina equipada", "Smart TV con Netflix", "Aire acondicionado"],
    photos: [
      photos.monoCamaDoble,
      photos.pasilloMono,
      photos.kitchinetteMono,
      photos.banoMarmolLavatorio,
      photos.banoMarmolInodoro,
    ],
    whatsappMessage:
      "Hola! Quisiera consultar disponibilidad y precio del monoambiente Totoras 1 (1 o 2 personas), en Totoras 750, Pinamar.",
  },
  {
    id: "totoras-2",
    name: "Totoras 2",
    type: "Monoambiente",
    capacity: "3 personas",
    beds: "Camas simples individuales",
    description:
      "Monoambiente con camas simples individuales, pensado para tres personas que viajan juntas.",
    features: ["Cocina equipada", "Smart TV con Netflix", "Aire acondicionado"],
    photos: [
      photos.monoCamasSimples,
      photos.pasilloMono,
      photos.kitchinetteMono,
      photos.banoMarmolLavatorio,
      photos.banoMarmolInodoro,
    ],
    whatsappMessage:
      "Hola! Quisiera consultar disponibilidad y precio del monoambiente Totoras 2 (3 personas), en Totoras 750, Pinamar.",
  },
  {
    id: "totoras-3",
    name: "Totoras 3",
    type: "Departamento",
    capacity: "4 o 5 personas",
    beds: "Camas individuales y una cama king-size",
    description:
      "El departamento más grande, pensado para familias con 2 o 3 hijos y también para grupos de jóvenes. Tiene living comedor y cocina.",
    features: ["Living comedor con mesa y sillas", "Cocina equipada"],
    photos: [
      photos.living,
      photos.dormitorioKing,
      photos.comedor,
      photos.cocina,
      photos.cocinaAngulo,
      photos.dormitorioCuchetasBalcon,
      photos.dormitorioCuchetas,
      photos.banoMadera,
      photos.banoInodoro,
    ],
    whatsappMessage:
      "Hola! Quisiera consultar disponibilidad y precio del departamento Totoras 3 (4 o 5 personas), en Totoras 750, Pinamar.",
  },
];

export const unitOptions = [
  "Todavía no sé",
  "Totoras 1 (monoambiente, 1 o 2 personas)",
  "Totoras 2 (monoambiente, 3 personas)",
  "Totoras 3 (departamento, 4 o 5 personas)",
];
