export interface Fase {
  id: string;
  numero: number;
  titolo: string;
  descrizione: string;
  moduli: string[];
}

export interface Modulo {
  id: string;
  numero: number;
  titolo: string;
  descrizione: string;
  faseId: string;
  isNew: boolean;
  lezioni: string[];
}

export interface Lezione {
  id: string;
  numero: number;
  titolo: string;
  obiettivo: string;
  contenuti: string[];
  durata: string;
  moduloId: string;
  contentPath: string;
}

export interface BlogPost {
  slug: string;
  titolo: string;
  descrizione: string;
  data: string;
  tags: string[];
  moduloCollegato?: string;
  contentPath: string;
}

export interface Book {
  id: string;
  titolo: string;
  autore: string;
  descrizione: string;
  tags: string[];
  moduliCollegati: string[];
  immagineUrl?: string;
  linkAcquisto?: string;
}

export interface NewsItem {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet?: string;
  source: string;
}
