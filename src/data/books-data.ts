import type { Book } from "@/types";

export const books: Book[] = [
  {
    id: "cialdini-armi-persuasione",
    titolo: "Le armi della persuasione",
    autore: "Robert Cialdini",
    descrizione: "Il testo fondamentale sulla psicologia della persuasione. Cialdini identifica i 6 principi universali che guidano il comportamento umano nelle decisioni.",
    tags: ["persuasione", "psicologia"],
    moduliCollegati: ["modulo-4"],
  },
  {
    id: "whitman-cashvertising",
    titolo: "Cashvertising",
    autore: "Drew Eric Whitman",
    descrizione: "Come usare le ricerche sulla psicologia del consumatore per creare pubblicità e copywriting irresistibili. Il manuale del copywriter professionista.",
    tags: ["copywriting", "persuasione"],
    moduliCollegati: ["modulo-4", "modulo-9"],
  },
  {
    id: "halbert-boron-letters",
    titolo: "The Boron Letters",
    autore: "Gary Halbert",
    descrizione: "Le lettere che il leggendario copywriter scrisse al figlio dalla prigione. Una masterclass senza filtri su copywriting, marketing e vita.",
    tags: ["copywriting", "direct-response"],
    moduliCollegati: ["modulo-9", "modulo-24"],
  },
  {
    id: "kotler-marketing-40",
    titolo: "Marketing 4.0",
    autore: "Philip Kotler",
    descrizione: "Il padre del marketing moderno esplora la transizione dal marketing tradizionale al digitale nell'era della connettività.",
    tags: ["strategia", "marketing-contemporaneo"],
    moduliCollegati: ["modulo-2", "modulo-5", "modulo-26"],
  },
  {
    id: "ries-trout-22-leggi",
    titolo: "Le 22 immutabili leggi del marketing",
    autore: "Al Ries & Jack Trout",
    descrizione: "Violate queste leggi a vostro rischio e pericolo. Le 22 leggi che governano il successo o il fallimento di qualsiasi prodotto o servizio.",
    tags: ["positioning", "strategia"],
    moduliCollegati: ["modulo-3", "modulo-7"],
  },
  {
    id: "kim-mauborgne-oceano-blu",
    titolo: "Strategia Oceano Blu",
    autore: "W. Chan Kim & Renée Mauborgne",
    descrizione: "Come creare nuovi spazi di mercato inesplorati rendendo irrilevante la concorrenza. Il framework per la strategia di innovazione.",
    tags: ["strategia", "innovazione"],
    moduliCollegati: ["modulo-3"],
  },
  {
    id: "berger-contagioso",
    titolo: "Contagioso",
    autore: "Jonah Berger",
    descrizione: "Perché alcune idee, prodotti e comportamenti si diffondono e altri no? I 6 principi STEPPS che rendono qualcosa contagioso.",
    tags: ["viral-marketing", "passaparola"],
    moduliCollegati: ["modulo-16"],
  },
  {
    id: "ellis-brown-growth-hacking",
    titolo: "Growth Hacking Marketing",
    autore: "Sean Ellis & Morgan Brown",
    descrizione: "Il manuale definitivo del growth hacking. Come costruire team e processi per una crescita rapida e sostenibile.",
    tags: ["growth", "scaling"],
    moduliCollegati: ["modulo-19"],
  },
  {
    id: "sinek-partire-dal-perche",
    titolo: "Partire dal perché",
    autore: "Simon Sinek",
    descrizione: "Il libro che ha introdotto il concetto di Golden Circle. Come i leader ispiranti comunicano partendo dal perché.",
    tags: ["brand", "purpose"],
    moduliCollegati: ["modulo-5"],
  },
  {
    id: "sinek-trova-tuo-perche",
    titolo: "Trova il tuo perché",
    autore: "Simon Sinek",
    descrizione: "La guida pratica per trovare il proprio WHY personale e aziendale. Esercizi e framework applicabili immediatamente.",
    tags: ["brand", "purpose"],
    moduliCollegati: ["modulo-5"],
  },
  {
    id: "sinek-infinite-game",
    titolo: "The Infinite Game",
    autore: "Simon Sinek",
    descrizione: "Come costruire organizzazioni che pensano al lungo periodo, ispirate da un obiettivo più grande del semplice profitto.",
    tags: ["strategia", "leadership"],
    moduliCollegati: ["modulo-5"],
  },
  {
    id: "mark-hero-outlaw",
    titolo: "The Hero and the Outlaw",
    autore: "Margaret Mark",
    descrizione: "Come usare il potere degli archetipi per costruire brand straordinari con significato, scopo e identità duratura.",
    tags: ["branding", "archetipi"],
    moduliCollegati: ["modulo-6"],
  },
  {
    id: "miller-storybrand",
    titolo: "Building a StoryBrand",
    autore: "Donald Miller",
    descrizione: "Il framework narrativo per chiarire il messaggio di brand. Il cliente è l'eroe, il brand è la guida.",
    tags: ["storytelling", "branding"],
    moduliCollegati: ["modulo-6"],
  },
  {
    id: "pulizzi-content-inc",
    titolo: "Content Inc",
    autore: "Joe Pulizzi",
    descrizione: "Come costruire un business partendo dalla creazione di contenuti di valore prima ancora di avere un prodotto.",
    tags: ["content-marketing"],
    moduliCollegati: ["modulo-11"],
  },
  {
    id: "handley-everybody-writes",
    titolo: "Everybody Writes",
    autore: "Ann Handley",
    descrizione: "La guida definitiva per scrivere contenuti digitali di qualità. Perché nel marketing digitale tutti siamo scrittori.",
    tags: ["content-marketing", "writing"],
    moduliCollegati: ["modulo-11"],
  },
  {
    id: "kahneman-pensieri-lenti-veloci",
    titolo: "Pensieri lenti e veloci",
    autore: "Daniel Kahneman",
    descrizione: "Il libro che ha rivoluzionato la nostra comprensione della mente umana. Sistema 1 e Sistema 2 applicati al marketing.",
    tags: ["psicologia", "decision-making"],
    moduliCollegati: ["modulo-4"],
  },
  {
    id: "godin-mucca-viola",
    titolo: "La mucca viola",
    autore: "Seth Godin",
    descrizione: "In un mondo pieno di vacche marroni, solo le mucche viola attirano attenzione. Il manifesto del marketing dell'eccezionale.",
    tags: ["marketing", "differenziazione"],
    moduliCollegati: ["modulo-23"],
  },
  {
    id: "sharp-how-brands-grow",
    titolo: "How Brands Grow",
    autore: "Byron Sharp",
    descrizione: "Cosa la scienza ci dice veramente su come crescono i brand. Sfida molte credenze comuni del marketing con dati e ricerche.",
    tags: ["branding", "crescita"],
    moduliCollegati: ["modulo-7"],
  },
  {
    id: "vaynerchuk-jab-jab",
    titolo: "Jab Jab Jab Right Hook",
    autore: "Gary Vaynerchuk",
    descrizione: "Come dare valore continuamente sui social media prima di chiedere qualcosa al pubblico. La filosofia del marketing moderno.",
    tags: ["social-media"],
    moduliCollegati: ["modulo-14"],
  },
];

export function getBookById(id: string): Book | undefined {
  return books.find((b) => b.id === id);
}

export function getBooksByModulo(moduloId: string): Book[] {
  return books.filter((b) => b.moduliCollegati.includes(moduloId));
}

export function getAllBookTags(): string[] {
  const tags = new Set<string>();
  books.forEach((b) => b.tags.forEach((t) => tags.add(t)));
  return [...tags].sort();
}
