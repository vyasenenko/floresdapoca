export type Lang = "en" | "pt";

export type Copy = {
  nav: { inicio: string; sobre: string; servicos: string; galeria: string; contactos: string };
  headerCta: string;
  openMenu: string;
  closeMenu: string;
  hero: {
    eyebrow: string;
    headingTop: string;
    headingBottom: string;
    paragraph: string;
    cta: string;
    signature: string;
    since: string;
    scroll: string;
  };
  about: { label: string; heading: string; p1: string; p2: string; imgAlt: string };
  clients: { label: string };
  services: { label: string; items: { title: string; desc: string }[] };
  quote: { line1: string; em: string; sub: string };
  gallery: {
    label: string;
    heading: string;
    intro: string;
    filters: { all: string; flores: string; plantas: string; eventos: string };
    loadMore: (n: number) => string;
    zoom: string;
  };
  contact: {
    label: string;
    heading: string;
    text: string;
    storeLabel: string;
    addressLines: string[];
    gardenLabel: string;
    gardenLines: string[];
    viewMap: string;
    whatsapp: string;
    imgAlt: string;
  };
  footer: (year: number) => string;
  lightbox: { close: string; prev: string; next: string };
};

export const COPY: Record<Lang, Copy> = {
  en: {
    nav: {
      inicio: "Home",
      sobre: "The Poça",
      servicos: "What We Do",
      galeria: "Work",
      contactos: "Find Us",
    },
    headerCta: "Talk to Us",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    hero: {
      eyebrow: "Florist & Garden Center · Estoril / Sintra",
      headingTop: "STRONG ROOTS,",
      headingBottom: "HONEST FLOWERS",
      paragraph:
        "A florist and garden center in Estoril and Sintra. Indoor and outdoor plants, hand-tied bouquets and fresh flowers — chosen, tended and delivered by the people who keep their hands in the soil.",
      cta: "See the Work",
      signature: "hands in the soil",
      since: "Estoril · Sintra",
      scroll: "Scroll to dig in",
    },
    about: {
      label: "The Poça",
      heading: "A HOUSE OF PLANTS, RUN BY PEOPLE WHO GROW THEM",
      p1: "Flores da Poça is one of the biggest flower and plant shops on the Cascais coast — a florist in Estoril and a full garden center in Sintra. No fuss, no showroom polish: just good stock, well kept, and a team that actually grows the thing.",
      p2: "You'll meet Francisco and the rest of the crew in the greenhouse, aprons on, moving trees and repotting all week long. Fresh deliveries land constantly, we ship across mainland Portugal, and — of course — we're pet friendly.",
      imgAlt: "Francisco from the Flores da Poça team in the greenhouse",
    },
    clients: { label: "Good to Know" },
    services: {
      label: "What We Do",
      items: [
        {
          title: "Indoor & Outdoor Plants",
          desc: "A full garden center in Sintra — houseplants, big statement greenery, trees and everything for the balcony or the garden.",
        },
        {
          title: "Bouquets & Arrangements",
          desc: "Hand-tied bouquets and arrangements built around the freshest flowers that came in this week. Straight, honest, no filler.",
        },
        {
          title: "Flowers for the Occasion",
          desc: "Mother's Day, birthdays, weddings, farewells — flowers that say the thing when you can't find the words.",
        },
        {
          title: "Delivery Across Portugal",
          desc: "Same-region delivery from the Estoril shop and shipping across mainland Portugal. Order by phone or straight through Instagram.",
        },
      ],
    },
    quote: {
      line1: "Flowers need no excuses.",
      em: "Just good hands.",
      sub: "— Flores da Poça · Estoril / Sintra",
    },
    gallery: {
      label: "The Work",
      heading: "STRAIGHT FROM THE BENCH",
      intro:
        "Pulled live from our Instagram — plants, flowers and the crew, exactly as they land in the shop.",
      filters: { all: "All", flores: "Flowers", plantas: "Plants", eventos: "Events" },
      loadMore: (n) => `Show more (${n})`,
      zoom: "Enlarge image",
    },
    contact: {
      label: "Find Us",
      heading: "COME BY THE SHOP",
      text: "Tell us about the occasion, place an order, or just walk in and look around. Two locations, deliveries across mainland Portugal, dogs welcome.",
      storeLabel: "Estoril Shop",
      addressLines: ["Largo Amália Rodrigues, 125 · loja 7", "2765-281 Estoril, Portugal"],
      gardenLabel: "Garden Center Sintra",
      gardenLines: ["Sintra", "Open Tuesday to Sunday"],
      viewMap: "Open in Google Maps",
      whatsapp: "WhatsApp",
      imgAlt: "Fresh dahlias at Flores da Poça",
    },
    footer: (year) =>
      `© ${year} Flores da Poça · Estoril / Sintra, Portugal. All rights reserved.`,
    lightbox: { close: "Close", prev: "Previous", next: "Next" },
  },
  pt: {
    nav: {
      inicio: "Início",
      sobre: "A Poça",
      servicos: "O Que Fazemos",
      galeria: "Trabalho",
      contactos: "Onde Estamos",
    },
    headerCta: "Fala Connosco",
    openMenu: "Abrir menu",
    closeMenu: "Fechar menu",
    hero: {
      eyebrow: "Florista & Garden Center · Estoril / Sintra",
      headingTop: "RAÍZES FORTES,",
      headingBottom: "FLORES HONESTAS",
      paragraph:
        "Uma florista e garden center no Estoril e em Sintra. Plantas de interior e exterior, ramos de mão e flores frescas — escolhidas, tratadas e entregues por quem mete as mãos na terra.",
      cta: "Ver o Trabalho",
      signature: "mãos na terra",
      since: "Estoril · Sintra",
      scroll: "Rola para ver",
    },
    about: {
      label: "A Poça",
      heading: "UMA CASA DE PLANTAS, FEITA POR QUEM AS TRATA",
      p1: "A Flores da Poça é uma das maiores lojas de flores e plantas da costa de Cascais — florista no Estoril e garden center em Sintra. Sem rodeios e sem verniz de montra: bom stock, bem tratado, por uma equipa que mete mesmo as mãos na terra.",
      p2: "Vais encontrar o Francisco e o resto da equipa na estufa, de avental vestido, a mudar árvores e a envasar a semana toda. Chegam novidades a toda a hora, entregamos em Portugal Continental e — claro — somos pet friendly.",
      imgAlt: "Francisco, da equipa da Flores da Poça, na estufa",
    },
    clients: { label: "Bom Saber" },
    services: {
      label: "O Que Fazemos",
      items: [
        {
          title: "Plantas de Interior & Exterior",
          desc: "Um garden center completo em Sintra — plantas de interior, verde de grande porte, árvores e tudo para a varanda ou o jardim.",
        },
        {
          title: "Ramos & Arranjos",
          desc: "Ramos de mão e arranjos feitos com as flores mais frescas que entraram esta semana. Diretos, honestos, sem enchimento.",
        },
        {
          title: "Flores para a Ocasião",
          desc: "Dia da Mãe, aniversários, casamentos, despedidas — flores que dizem o que é preciso quando faltam as palavras.",
        },
        {
          title: "Entregas em Portugal",
          desc: "Entregas na zona a partir da loja do Estoril e envios para todo o Portugal Continental. Encomenda por telefone ou direto no Instagram.",
        },
      ],
    },
    quote: {
      line1: "As flores não precisam de desculpas.",
      em: "Só de boas mãos.",
      sub: "— Flores da Poça · Estoril / Sintra",
    },
    gallery: {
      label: "O Trabalho",
      heading: "DIRETO DA BANCADA",
      intro:
        "Puxado ao vivo do nosso Instagram — plantas, flores e a equipa, tal como chegam à loja.",
      filters: { all: "Tudo", flores: "Flores", plantas: "Plantas", eventos: "Eventos" },
      loadMore: (n) => `Mostrar mais (${n})`,
      zoom: "Ampliar imagem",
    },
    contact: {
      label: "Onde Estamos",
      heading: "PASSA PELA LOJA",
      text: "Conta-nos a ocasião, faz a tua encomenda ou entra só para ver. Duas lojas, entregas em Portugal Continental, cães bem-vindos.",
      storeLabel: "Loja Estoril",
      addressLines: ["Largo Amália Rodrigues, 125 · loja 7", "2765-281 Estoril, Portugal"],
      gardenLabel: "Garden Center Sintra",
      gardenLines: ["Sintra", "Aberto de terça a domingo"],
      viewMap: "Abrir no Google Maps",
      whatsapp: "WhatsApp",
      imgAlt: "Dálias frescas na Flores da Poça",
    },
    footer: (year) =>
      `© ${year} Flores da Poça · Estoril / Sintra, Portugal. Todos os direitos reservados.`,
    lightbox: { close: "Fechar", prev: "Anterior", next: "Seguinte" },
  },
};

// Quick facts strip inside the About card.
export const FEATURES = [
  "Pet Friendly",
  "Loja Estoril",
  "Garden Center Sintra",
  "Entregas Portugal Continental",
];

export const CONTACT = {
  // Loja Estoril
  estoril: {
    phone: "961 219 420",
    phoneHref: "tel:+351961219420",
    whatsapp: "https://wa.me/351961219420",
    maps: "https://maps.app.goo.gl/n7ZEoAiuwedSzUaU7",
  },
  // Garden Center Sintra
  sintra: {
    phone: "964 338 508",
    phoneHref: "tel:+351964338508",
    whatsapp: "https://wa.me/351964338508",
    maps: "https://maps.app.goo.gl/wFFSENbJcbL67WBK7",
  },
  instagram: "https://www.instagram.com/floresdapoca/",
  facebook: "https://www.facebook.com/floresdapoca/",
};
