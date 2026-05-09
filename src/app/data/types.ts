// Tipi TypeScript per i dati mock di Associazione Famiglie Insieme APS

export interface Indirizzo {
  via: string;
  citta: string;
  provincia: string;
  cap: string;
  regione: string;
  paese: string;
  lat: number;
  lng: number;
}

export interface Contatti {
  telefono: string;
  email: string;
  emailDonazioni: string;
  social: {
    facebook?: string;
    instagram?: string;
  };
}

export interface OrariApertura {
  lunedi: string;
  martedi: string;
  mercoledi: string;
  giovedi: string;
  venerdi: string;
  sabato: string;
  domenica: string;
}

export interface Stats {
  anniAttivita: number;
  famiglieAiutate: number;
  volontariAttivi: number;
  progettiAttivi: number;
}

export interface RuntsInfo {
  codice: string;
  sezione: string;
  dataIscrizione: string;
}

export interface MetaSeo {
  title: string;
  description: string;
  keywords: string[];
}

export interface InfoAttivita {
  ragioneSociale: string;
  nomeCommerciale: string;
  tagline: string;
  runts: RuntsInfo;
  codiceFiscale: string;
  piva: string | null;
  fondazione: number;
  indirizzo: Indirizzo;
  contatti: Contatti;
  orari: OrariApertura;
  stats: Stats;
  metaSeo: MetaSeo;
}

export interface Progetto {
  id: number;
  slug: string;
  nome: string;
  categoria: string;
  tagline: string;
  descrizione: string;
  beneficiari: string;
  beneficiariAnno: number;
  volontariCoinvolti: number;
  annioAvvio: number;
  stato: 'attivo' | 'concluso' | 'sospeso';
  icon: string;
  impatto: string;
}

export interface Progetti {
  progetti: Progetto[];
}

export interface Dipendente {
  id: number;
  nome: string;
  ruolo: string;
  bio: string;
  anniEsperienza: number;
  specialita: string[];
}

export interface FasciaEta {
  fascia: string;
  numero: number;
}

export interface AreaImpegno {
  area: string;
  numero: number;
}

export interface Volontari {
  totale: number;
  attivi: number;
  neoIscritti: number;
  fasceEta: FasciaEta[];
  areeDiImpegno: AreaImpegno[];
}

export interface Team {
  dipendenti: Dipendente[];
  volontari: Volontari;
}

export interface FaqItem {
  domanda: string;
  risposta: string;
  categoria: string;
}

export interface Faq {
  faq: FaqItem[];
}
