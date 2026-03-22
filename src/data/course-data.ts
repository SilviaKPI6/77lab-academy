import type { Fase, Modulo, Lezione } from "@/types";

export const lezioni: Record<string, Lezione> = {
  // Modulo 1
  "lezione-1-1": { id: "lezione-1-1", numero: 1, titolo: "Segmentazione del mercato", obiettivo: "Comprendere come suddividere il mercato in segmenti omogenei", contenuti: ["Criteri di segmentazione", "Segmentazione demografica e psicografica", "Segmentazione comportamentale"], durata: "25 min", moduloId: "modulo-1", contentPath: "lezioni/modulo-1-lezione-1.mdx" },
  "lezione-1-2": { id: "lezione-1-2", numero: 2, titolo: "Costruire Buyer Personas", obiettivo: "Creare profili dettagliati del cliente ideale", contenuti: ["Cos'è una buyer persona", "Raccolta dati e interviste", "Template per la persona"], durata: "30 min", moduloId: "modulo-1", contentPath: "lezioni/modulo-1-lezione-2.mdx" },
  "lezione-1-3": { id: "lezione-1-3", numero: 3, titolo: "Customer Journey Mapping", obiettivo: "Mappare il percorso del cliente dal primo contatto all'acquisto", contenuti: ["Le fasi del customer journey", "Touchpoint e pain point", "Come costruire una journey map"], durata: "35 min", moduloId: "modulo-1", contentPath: "lezioni/modulo-1-lezione-3.mdx" },
  "lezione-1-4": { id: "lezione-1-4", numero: 4, titolo: "Jobs-to-be-Done Framework", obiettivo: "Capire i compiti funzionali ed emotivi che i clienti vogliono svolgere", contenuti: ["Il concetto di JTBD", "Interviste JTBD", "Applicazione pratica"], durata: "30 min", moduloId: "modulo-1", contentPath: "lezioni/modulo-1-lezione-4.mdx" },

  // Modulo 2
  "lezione-2-1": { id: "lezione-2-1", numero: 1, titolo: "Market Sizing e Trend", obiettivo: "Dimensionare il mercato e identificare i trend emergenti", contenuti: ["TAM SAM SOM", "Fonti di dati di mercato", "Trend analysis"], durata: "30 min", moduloId: "modulo-2", contentPath: "lezioni/modulo-2-lezione-1.mdx" },
  "lezione-2-2": { id: "lezione-2-2", numero: 2, titolo: "Social Listening e Web Analytics", obiettivo: "Usare i dati digitali per capire il mercato", contenuti: ["Strumenti di social listening", "Google Trends e Search Console", "Analisi dei dati web"], durata: "35 min", moduloId: "modulo-2", contentPath: "lezioni/modulo-2-lezione-2.mdx" },
  "lezione-2-3": { id: "lezione-2-3", numero: 3, titolo: "Dati Sintetici per il Marketing", obiettivo: "Sfruttare i dati sintetici per ricerche di mercato avanzate", contenuti: ["Cosa sono i dati sintetici", "Use case nel marketing", "Tool disponibili"], durata: "25 min", moduloId: "modulo-2", contentPath: "lezioni/modulo-2-lezione-3.mdx" },
  "lezione-2-4": { id: "lezione-2-4", numero: 4, titolo: "SWOT Analysis Strategica", obiettivo: "Applicare la SWOT per decisioni strategiche di marketing", contenuti: ["Struttura della SWOT", "Da SWOT a strategie", "Esempi pratici"], durata: "30 min", moduloId: "modulo-2", contentPath: "lezioni/modulo-2-lezione-4.mdx" },

  // Modulo 3
  "lezione-3-1": { id: "lezione-3-1", numero: 1, titolo: "Mappatura Competitiva", obiettivo: "Identificare e classificare i principali competitor", contenuti: ["Competitor diretti e indiretti", "Framework di analisi", "Strumenti di ricerca"], durata: "30 min", moduloId: "modulo-3", contentPath: "lezioni/modulo-3-lezione-1.mdx" },
  "lezione-3-2": { id: "lezione-3-2", numero: 2, titolo: "Gap Analysis e Blue Ocean", obiettivo: "Trovare spazi di mercato non presidiati", contenuti: ["Gap analysis step by step", "Strategy canvas", "Come creare uno spazio blu"], durata: "35 min", moduloId: "modulo-3", contentPath: "lezioni/modulo-3-lezione-2.mdx" },
  "lezione-3-3": { id: "lezione-3-3", numero: 3, titolo: "Benchmark della Comunicazione", obiettivo: "Analizzare come comunicano i competitor per differenziarsi", contenuti: ["Cosa benchmarkare", "Analisi dei canali", "Matrice comparativa"], durata: "25 min", moduloId: "modulo-3", contentPath: "lezioni/modulo-3-lezione-3.mdx" },

  // Modulo 4
  "lezione-4-1": { id: "lezione-4-1", numero: 1, titolo: "I 7 Principi di Cialdini", obiettivo: "Applicare i principi di persuasione al marketing", contenuti: ["Reciprocità", "Impegno e coerenza", "Riprova sociale", "Autorità", "Simpatia", "Scarsità", "Unità"], durata: "40 min", moduloId: "modulo-4", contentPath: "lezioni/modulo-4-lezione-1.mdx" },
  "lezione-4-2": { id: "lezione-4-2", numero: 2, titolo: "Neuroscienze e Decision-Making", obiettivo: "Capire come il cervello prende decisioni d'acquisto", contenuti: ["Sistema 1 e Sistema 2", "Bias cognitivi nel marketing", "Leve emotive"], durata: "35 min", moduloId: "modulo-4", contentPath: "lezioni/modulo-4-lezione-2.mdx" },
  "lezione-4-3": { id: "lezione-4-3", numero: 3, titolo: "Copywriting Persuasivo (Cashvertising)", obiettivo: "Scrivere testi che vendono applicando i principi di Whitman", contenuti: ["Life Force 8", "Secondary desires", "Struttura dell'annuncio persuasivo"], durata: "40 min", moduloId: "modulo-4", contentPath: "lezioni/modulo-4-lezione-3.mdx" },

  // Modulo 5
  "lezione-5-1": { id: "lezione-5-1", numero: 1, titolo: "Start With Why", obiettivo: "Definire il perché profondo del brand", contenuti: ["Il Golden Circle", "Come trovare il proprio Why", "Esempi di brand guidati dal Why"], durata: "30 min", moduloId: "modulo-5", contentPath: "lezioni/modulo-5-lezione-1.mdx" },
  "lezione-5-2": { id: "lezione-5-2", numero: 2, titolo: "Mission Vision e Valori", obiettivo: "Formulare mission, vision e valori aziendali", contenuti: ["Differenza tra mission e vision", "Come scrivere i valori", "Allineamento interno"], durata: "30 min", moduloId: "modulo-5", contentPath: "lezioni/modulo-5-lezione-2.mdx" },
  "lezione-5-3": { id: "lezione-5-3", numero: 3, titolo: "Unique Value Proposition", obiettivo: "Costruire una UVP chiara e differenziante", contenuti: ["Cos'è la UVP", "Value Proposition Canvas", "Test e validazione"], durata: "35 min", moduloId: "modulo-5", contentPath: "lezioni/modulo-5-lezione-3.mdx" },

  // Modulo 6
  "lezione-6-1": { id: "lezione-6-1", numero: 1, titolo: "I 12 Archetipi del Brand", obiettivo: "Scegliere l'archetipo giusto per la personalità del brand", contenuti: ["Cosa sono gli archetipi", "I 12 archetipi di Jung nel marketing", "Come scegliere il tuo archetipo"], durata: "35 min", moduloId: "modulo-6", contentPath: "lezioni/modulo-6-lezione-1.mdx" },
  "lezione-6-2": { id: "lezione-6-2", numero: 2, titolo: "Verbal Identity e Tone of Voice", obiettivo: "Definire la voce e il tono del brand", contenuti: ["Brand voice vs tone", "Linee guida editoriali", "Esempi pratici"], durata: "30 min", moduloId: "modulo-6", contentPath: "lezioni/modulo-6-lezione-2.mdx" },
  "lezione-6-3": { id: "lezione-6-3", numero: 3, titolo: "Visual Identity", obiettivo: "Creare un sistema visivo coerente e riconoscibile", contenuti: ["Logo e palette colori", "Tipografia e layout", "Brand guidelines"], durata: "35 min", moduloId: "modulo-6", contentPath: "lezioni/modulo-6-lezione-3.mdx" },

  // Modulo 7
  "lezione-7-1": { id: "lezione-7-1", numero: 1, titolo: "Strategia di Posizionamento", obiettivo: "Posizionare il brand nella mente del consumatore", contenuti: ["Cos'è il posizionamento", "Perceptual map", "Strategie di riposizionamento"], durata: "35 min", moduloId: "modulo-7", contentPath: "lezioni/modulo-7-lezione-1.mdx" },
  "lezione-7-2": { id: "lezione-7-2", numero: 2, titolo: "Le 22 Leggi Parte 1", obiettivo: "Applicare le prime 11 leggi immutabili del marketing", contenuti: ["Legge della leadership", "Legge della categoria", "Legge della mente", "Legge della percezione"], durata: "40 min", moduloId: "modulo-7", contentPath: "lezioni/modulo-7-lezione-2.mdx" },
  "lezione-7-3": { id: "lezione-7-3", numero: 3, titolo: "Le 22 Leggi Parte 2", obiettivo: "Applicare le ultime 11 leggi immutabili del marketing", contenuti: ["Legge della dualità", "Legge dell'opposto", "Legge della divisione", "Legge del fallimento"], durata: "40 min", moduloId: "modulo-7", contentPath: "lezioni/modulo-7-lezione-3.mdx" },

  // Modulo 8 (NUOVO)
  "lezione-8-1": { id: "lezione-8-1", numero: 1, titolo: "Fondamenti di Personal Branding", obiettivo: "Capire cos'è il personal brand e perché è strategico", contenuti: ["Personal brand vs brand aziendale", "Autenticità e coerenza", "Audit del personal brand attuale"], durata: "30 min", moduloId: "modulo-8", contentPath: "lezioni/modulo-8-lezione-1.mdx" },
  "lezione-8-2": { id: "lezione-8-2", numero: 2, titolo: "LinkedIn come Piattaforma Strategica", obiettivo: "Costruire e ottimizzare la presenza su LinkedIn", contenuti: ["Ottimizzazione profilo", "Content strategy su LinkedIn", "Social selling"], durata: "35 min", moduloId: "modulo-8", contentPath: "lezioni/modulo-8-lezione-2.mdx" },
  "lezione-8-3": { id: "lezione-8-3", numero: 3, titolo: "Personal Brand Multicanale", obiettivo: "Estendere il personal brand su più piattaforme", contenuti: ["Newsletter personale", "Podcast e video", "Ecosistema multicanale"], durata: "30 min", moduloId: "modulo-8", contentPath: "lezioni/modulo-8-lezione-3.mdx" },

  // Modulo 9
  "lezione-9-1": { id: "lezione-9-1", numero: 1, titolo: "Architettura per la Conversione", obiettivo: "Progettare siti web e landing page che convertono", contenuti: ["Struttura della landing page", "Above the fold", "CTA efficaci"], durata: "35 min", moduloId: "modulo-9", contentPath: "lezioni/modulo-9-lezione-1.mdx" },
  "lezione-9-2": { id: "lezione-9-2", numero: 2, titolo: "Copywriting per il Web (Halbert)", obiettivo: "Scrivere testi web persuasivi applicando i principi di Halbert", contenuti: ["Le Boron Letters applicate al web", "Headline formula", "Struttura AIDA"], durata: "40 min", moduloId: "modulo-9", contentPath: "lezioni/modulo-9-lezione-2.mdx" },
  "lezione-9-3": { id: "lezione-9-3", numero: 3, titolo: "UX/UI e Ottimizzazione", obiettivo: "Migliorare l'esperienza utente per aumentare le conversioni", contenuti: ["Principi base di UX", "Test A/B", "Heatmap e analisi comportamentale"], durata: "35 min", moduloId: "modulo-9", contentPath: "lezioni/modulo-9-lezione-3.mdx" },

  // Modulo 10
  "lezione-10-1": { id: "lezione-10-1", numero: 1, titolo: "SEO Fondamentale", obiettivo: "Capire le basi della SEO e ottimizzare i contenuti", contenuti: ["On-page SEO", "Keyword research", "Technical SEO basics"], durata: "40 min", moduloId: "modulo-10", contentPath: "lezioni/modulo-10-lezione-1.mdx" },
  "lezione-10-2": { id: "lezione-10-2", numero: 2, titolo: "Content Strategy per Search", obiettivo: "Creare contenuti ottimizzati per i motori di ricerca", contenuti: ["Cluster di contenuti", "Search intent", "Link building"], durata: "35 min", moduloId: "modulo-10", contentPath: "lezioni/modulo-10-lezione-2.mdx" },
  "lezione-10-3": { id: "lezione-10-3", numero: 3, titolo: "SEO for AI (AEO)", obiettivo: "Ottimizzare i contenuti per i motori di risposta AI", contenuti: ["Cos'è l'AEO", "Ottimizzazione per ChatGPT e Perplexity", "Featured snippets e SGE"], durata: "35 min", moduloId: "modulo-10", contentPath: "lezioni/modulo-10-lezione-3.mdx" },

  // Modulo 11
  "lezione-11-1": { id: "lezione-11-1", numero: 1, titolo: "Strategia di Content Marketing", obiettivo: "Costruire una strategia di contenuto efficace", contenuti: ["Obiettivi del content marketing", "Audience e formati", "Content funnel"], durata: "35 min", moduloId: "modulo-11", contentPath: "lezioni/modulo-11-lezione-1.mdx" },
  "lezione-11-2": { id: "lezione-11-2", numero: 2, titolo: "Piano Editoriale Operativo", obiettivo: "Creare e gestire un piano editoriale sostenibile", contenuti: ["Template piano editoriale", "Frequenza e canali", "Workflow di produzione"], durata: "30 min", moduloId: "modulo-11", contentPath: "lezioni/modulo-11-lezione-2.mdx" },
  "lezione-11-3": { id: "lezione-11-3", numero: 3, titolo: "Storytelling e Formati", obiettivo: "Raccontare storie che coinvolgono e convertono", contenuti: ["Struttura narrativa", "StoryBrand framework", "Formati multicanale"], durata: "35 min", moduloId: "modulo-11", contentPath: "lezioni/modulo-11-lezione-3.mdx" },

  // Modulo 12 (NUOVO)
  "lezione-12-1": { id: "lezione-12-1", numero: 1, titolo: "AI Landscape per Marketer", obiettivo: "Orientarsi nel panorama degli strumenti AI per il marketing", contenuti: ["Panoramica tool AI", "ChatGPT, Claude, Gemini", "Strumenti verticali per il marketing"], durata: "30 min", moduloId: "modulo-12", contentPath: "lezioni/modulo-12-lezione-1.mdx" },
  "lezione-12-2": { id: "lezione-12-2", numero: 2, titolo: "Prompt Engineering per Marketer", obiettivo: "Scrivere prompt efficaci per ottenere output di qualità", contenuti: ["Struttura del prompt", "Tecniche avanzate", "Prompt per casi d'uso marketing"], durata: "40 min", moduloId: "modulo-12", contentPath: "lezioni/modulo-12-lezione-2.mdx" },
  "lezione-12-3": { id: "lezione-12-3", numero: 3, titolo: "AI Content Creation Workflow", obiettivo: "Costruire un workflow di produzione contenuti con AI", contenuti: ["From brief to publish", "Quality control", "Voce del brand nell'AI"], durata: "35 min", moduloId: "modulo-12", contentPath: "lezioni/modulo-12-lezione-3.mdx" },
  "lezione-12-4": { id: "lezione-12-4", numero: 4, titolo: "AI per Automazione e Analisi", obiettivo: "Automatizzare task ripetitivi e analizzare dati con AI", contenuti: ["Automazione marketing con AI", "Analisi dati e report", "Tool di AI analytics"], durata: "35 min", moduloId: "modulo-12", contentPath: "lezioni/modulo-12-lezione-4.mdx" },

  // Modulo 13
  "lezione-13-1": { id: "lezione-13-1", numero: 1, titolo: "Google Analytics 4", obiettivo: "Usare GA4 per analizzare il comportamento degli utenti", contenuti: ["Setup GA4", "Report principali", "Conversioni e obiettivi"], durata: "40 min", moduloId: "modulo-13", contentPath: "lezioni/modulo-13-lezione-1.mdx" },
  "lezione-13-2": { id: "lezione-13-2", numero: 2, titolo: "Social Media Analytics", obiettivo: "Misurare le performance sui social media", contenuti: ["KPI per piattaforma", "Native analytics", "Tool di terze parti"], durata: "35 min", moduloId: "modulo-13", contentPath: "lezioni/modulo-13-lezione-2.mdx" },
  "lezione-13-3": { id: "lezione-13-3", numero: 3, titolo: "Attribution e KPI", obiettivo: "Attribuire correttamente i risultati alle campagne", contenuti: ["Modelli di attribuzione", "KPI per ogni fase del funnel", "Dashboard unificata"], durata: "35 min", moduloId: "modulo-13", contentPath: "lezioni/modulo-13-lezione-3.mdx" },

  // Modulo 14
  "lezione-14-1": { id: "lezione-14-1", numero: 1, titolo: "Strategia per Piattaforma", obiettivo: "Definire la strategia social per ogni canale", contenuti: ["Instagram, TikTok, LinkedIn, YouTube", "Scelta dei canali", "Tone of voice per piattaforma"], durata: "40 min", moduloId: "modulo-14", contentPath: "lezioni/modulo-14-lezione-1.mdx" },
  "lezione-14-2": { id: "lezione-14-2", numero: 2, titolo: "Piano Editoriale Social", obiettivo: "Creare un piano editoriale social efficace e sostenibile", contenuti: ["Content mix", "Frequenza ottimale", "Pianificazione e tool"], durata: "35 min", moduloId: "modulo-14", contentPath: "lezioni/modulo-14-lezione-2.mdx" },
  "lezione-14-3": { id: "lezione-14-3", numero: 3, titolo: "Community Management", obiettivo: "Costruire e gestire una community attiva", contenuti: ["Engagement e moderazione", "Gestione crisi social", "Community building"], durata: "30 min", moduloId: "modulo-14", contentPath: "lezioni/modulo-14-lezione-3.mdx" },

  // Modulo 15
  "lezione-15-1": { id: "lezione-15-1", numero: 1, titolo: "Short-Form Video Strategy", obiettivo: "Creare contenuti video brevi ad alto engagement", contenuti: ["Reels, TikTok, Shorts", "Hook dei primi 3 secondi", "Format che funzionano"], durata: "35 min", moduloId: "modulo-15", contentPath: "lezioni/modulo-15-lezione-1.mdx" },
  "lezione-15-2": { id: "lezione-15-2", numero: 2, titolo: "Video Storytelling e Long-Form", obiettivo: "Produrre video lunghi che tengono l'attenzione", contenuti: ["Struttura narrativa video", "YouTube strategy", "Produzione low budget"], durata: "40 min", moduloId: "modulo-15", contentPath: "lezioni/modulo-15-lezione-2.mdx" },
  "lezione-15-3": { id: "lezione-15-3", numero: 3, titolo: "Sound Design e Marketing Sensoriale", obiettivo: "Usare suono e sensi per rafforzare il brand", contenuti: ["Audio branding", "Marketing sensoriale", "Podcast marketing"], durata: "30 min", moduloId: "modulo-15", contentPath: "lezioni/modulo-15-lezione-3.mdx" },

  // Modulo 16
  "lezione-16-1": { id: "lezione-16-1", numero: 1, titolo: "I 6 Principi STEPPS", obiettivo: "Applicare i principi del contagio virale di Jonah Berger", contenuti: ["Social Currency", "Triggers", "Emotion", "Public", "Practical Value", "Stories"], durata: "40 min", moduloId: "modulo-16", contentPath: "lezioni/modulo-16-lezione-1.mdx" },
  "lezione-16-2": { id: "lezione-16-2", numero: 2, titolo: "Meccaniche Virali", obiettivo: "Costruire meccanismi che favoriscono la diffusione organica", contenuti: ["Loop virali", "Referral e condivisione", "Gamification"], durata: "35 min", moduloId: "modulo-16", contentPath: "lezioni/modulo-16-lezione-2.mdx" },
  "lezione-16-3": { id: "lezione-16-3", numero: 3, titolo: "Da Virale a Strategia", obiettivo: "Trasformare un momento virale in crescita sostenibile", contenuti: ["Capitalizzare la viralità", "Retention dopo il picco", "Case study"], durata: "30 min", moduloId: "modulo-16", contentPath: "lezioni/modulo-16-lezione-3.mdx" },

  // Modulo 17
  "lezione-17-1": { id: "lezione-17-1", numero: 1, titolo: "Fondamenti E-commerce", obiettivo: "Costruire le basi di un e-commerce efficace", contenuti: ["Piattaforme e-commerce", "Product page optimization", "Checkout optimization"], durata: "40 min", moduloId: "modulo-17", contentPath: "lezioni/modulo-17-lezione-1.mdx" },
  "lezione-17-2": { id: "lezione-17-2", numero: 2, titolo: "Social Commerce", obiettivo: "Vendere direttamente sui social media", contenuti: ["TikTok Shop", "Instagram Shopping", "Live commerce"], durata: "35 min", moduloId: "modulo-17", contentPath: "lezioni/modulo-17-lezione-2.mdx" },
  "lezione-17-3": { id: "lezione-17-3", numero: 3, titolo: "CRO e Marketplace", obiettivo: "Ottimizzare le conversioni e vendere sui marketplace", contenuti: ["Conversion Rate Optimization", "Amazon strategy", "Marketplace listing"], durata: "35 min", moduloId: "modulo-17", contentPath: "lezioni/modulo-17-lezione-3.mdx" },

  // Modulo 18
  "lezione-18-1": { id: "lezione-18-1", numero: 1, titolo: "Meta Ads", obiettivo: "Creare campagne pubblicitarie efficaci su Meta", contenuti: ["Struttura campagna Meta", "Targeting avanzato", "Creative testing"], durata: "45 min", moduloId: "modulo-18", contentPath: "lezioni/modulo-18-lezione-1.mdx" },
  "lezione-18-2": { id: "lezione-18-2", numero: 2, titolo: "Google Ads e TikTok Ads", obiettivo: "Gestire campagne su Google e TikTok", contenuti: ["Google Search e Display", "TikTok Ads Manager", "Confronto piattaforme"], durata: "45 min", moduloId: "modulo-18", contentPath: "lezioni/modulo-18-lezione-2.mdx" },
  "lezione-18-3": { id: "lezione-18-3", numero: 3, titolo: "Performance e ROAS", obiettivo: "Misurare e ottimizzare il ritorno sulla spesa pubblicitaria", contenuti: ["ROAS e CAC", "Ottimizzazione budget", "Scaling delle campagne"], durata: "40 min", moduloId: "modulo-18", contentPath: "lezioni/modulo-18-lezione-3.mdx" },

  // Modulo 19
  "lezione-19-1": { id: "lezione-19-1", numero: 1, titolo: "Growth Hacking Framework", obiettivo: "Comprendere e applicare il mindset del growth hacking", contenuti: ["Cos'è il growth hacking", "Product-market fit", "Esperimenti di crescita"], durata: "35 min", moduloId: "modulo-19", contentPath: "lezioni/modulo-19-lezione-1.mdx" },
  "lezione-19-2": { id: "lezione-19-2", numero: 2, titolo: "Pirate Metrics (AARRR)", obiettivo: "Misurare la crescita con le Pirate Metrics", contenuti: ["Acquisition", "Activation", "Retention", "Revenue", "Referral"], durata: "40 min", moduloId: "modulo-19", contentPath: "lezioni/modulo-19-lezione-2.mdx" },
  "lezione-19-3": { id: "lezione-19-3", numero: 3, titolo: "Scaling e Retention", obiettivo: "Scalare la crescita e trattenere i clienti", contenuti: ["Scalabilità dei canali", "Churn reduction", "Loyalty program"], durata: "35 min", moduloId: "modulo-19", contentPath: "lezioni/modulo-19-lezione-3.mdx" },

  // Modulo 20
  "lezione-20-1": { id: "lezione-20-1", numero: 1, titolo: "Strategia Influencer", obiettivo: "Costruire una strategia influencer efficace", contenuti: ["Tipologie di influencer", "Selezione e outreach", "Contratti e brief"], durata: "35 min", moduloId: "modulo-20", contentPath: "lezioni/modulo-20-lezione-1.mdx" },
  "lezione-20-2": { id: "lezione-20-2", numero: 2, titolo: "Esecuzione e ROI", obiettivo: "Gestire le campagne influencer e misurarne il ROI", contenuti: ["Gestione della campagna", "KPI e misurazione", "Case study"], durata: "35 min", moduloId: "modulo-20", contentPath: "lezioni/modulo-20-lezione-2.mdx" },

  // Modulo 21 (NUOVO)
  "lezione-21-1": { id: "lezione-21-1", numero: 1, titolo: "Fondamenti di PR per il Marketing", obiettivo: "Capire come le PR supportano la strategia di marketing", contenuti: ["PR tradizionali vs digitali", "Media relations", "Comunicati stampa efficaci"], durata: "35 min", moduloId: "modulo-21", contentPath: "lezioni/modulo-21-lezione-1.mdx" },
  "lezione-21-2": { id: "lezione-21-2", numero: 2, titolo: "Digital PR e Link Building", obiettivo: "Usare le PR digitali per guadagnare link e visibilità", contenuti: ["Digital PR strategy", "Newsjacking", "Link building editoriale"], durata: "35 min", moduloId: "modulo-21", contentPath: "lezioni/modulo-21-lezione-2.mdx" },
  "lezione-21-3": { id: "lezione-21-3", numero: 3, titolo: "Crisis Communication", obiettivo: "Gestire una crisi di comunicazione in modo efficace", contenuti: ["Crisis management framework", "Social media crisis", "Comunicazione trasparente"], durata: "40 min", moduloId: "modulo-21", contentPath: "lezioni/modulo-21-lezione-3.mdx" },

  // Modulo 22
  "lezione-22-1": { id: "lezione-22-1", numero: 1, titolo: "Partnership e Co-Branding", obiettivo: "Costruire partnership strategiche e campagne co-brand", contenuti: ["Tipologie di partnership", "Come selezionare il partner", "Esempi di co-branding"], durata: "35 min", moduloId: "modulo-22", contentPath: "lezioni/modulo-22-lezione-1.mdx" },
  "lezione-22-2": { id: "lezione-22-2", numero: 2, titolo: "Product Placement e Branded Content", obiettivo: "Integrare il brand in contenuti editoriali e intrattenimento", contenuti: ["Product placement", "Branded content strategy", "Native advertising"], durata: "35 min", moduloId: "modulo-22", contentPath: "lezioni/modulo-22-lezione-2.mdx" },

  // Modulo 23
  "lezione-23-1": { id: "lezione-23-1", numero: 1, titolo: "Guerrilla e Ambient Marketing", obiettivo: "Creare campagne non convenzionali ad alto impatto", contenuti: ["Guerrilla marketing", "Ambient advertising", "Viral stunts"], durata: "30 min", moduloId: "modulo-23", contentPath: "lezioni/modulo-23-lezione-1.mdx" },
  "lezione-23-2": { id: "lezione-23-2", numero: 2, titolo: "Experiential Marketing", obiettivo: "Creare esperienze memorabili che rafforzano il brand", contenuti: ["Event marketing", "Pop-up e installazioni", "Misurazione dell'esperienza"], durata: "35 min", moduloId: "modulo-23", contentPath: "lezioni/modulo-23-lezione-2.mdx" },

  // Modulo 24
  "lezione-24-1": { id: "lezione-24-1", numero: 1, titolo: "Email Marketing Avanzato", obiettivo: "Creare campagne email ad alto tasso di apertura e conversione", contenuti: ["Segmentazione lista", "Subject line e preview text", "Sequenze automatizzate"], durata: "40 min", moduloId: "modulo-24", contentPath: "lezioni/modulo-24-lezione-1.mdx" },
  "lezione-24-2": { id: "lezione-24-2", numero: 2, titolo: "Funnel e Automation", obiettivo: "Costruire funnel di marketing automatizzati", contenuti: ["Marketing automation", "CRM e integrations", "Lead nurturing"], durata: "40 min", moduloId: "modulo-24", contentPath: "lezioni/modulo-24-lezione-2.mdx" },

  // Modulo 25
  "lezione-25-1": { id: "lezione-25-1", numero: 1, titolo: "Funnel Completo (TOFU-MOFU-BOFU)", obiettivo: "Ottimizzare ogni fase del funnel di acquisizione", contenuti: ["Top of funnel", "Middle of funnel", "Bottom of funnel", "Ottimizzazione conversioni"], durata: "45 min", moduloId: "modulo-25", contentPath: "lezioni/modulo-25-lezione-1.mdx" },
  "lezione-25-2": { id: "lezione-25-2", numero: 2, titolo: "Retention e Loyalty", obiettivo: "Costruire programmi di fedeltà che riducono il churn", contenuti: ["Customer lifetime value", "Loyalty program", "NPS e customer success"], durata: "40 min", moduloId: "modulo-25", contentPath: "lezioni/modulo-25-lezione-2.mdx" },

  // Modulo 26
  "lezione-26-1": { id: "lezione-26-1", numero: 1, titolo: "Marketing nel Contesto Sociale", obiettivo: "Capire il ruolo del marketing nella società contemporanea", contenuti: ["Marketing e responsabilità sociale", "Cultura della cancellazione", "Diversità e inclusione"], durata: "35 min", moduloId: "modulo-26", contentPath: "lezioni/modulo-26-lezione-1.mdx" },
  "lezione-26-2": { id: "lezione-26-2", numero: 2, titolo: "Sostenibilità e Trasparenza", obiettivo: "Integrare sostenibilità e trasparenza nella strategia di marketing", contenuti: ["Greenwashing vs green marketing", "Reporting di sostenibilità", "Comunicare i valori"], durata: "35 min", moduloId: "modulo-26", contentPath: "lezioni/modulo-26-lezione-2.mdx" },
  "lezione-26-3": { id: "lezione-26-3", numero: 3, titolo: "Il Futuro del Marketing", obiettivo: "Anticipare i trend che plasmeranno il marketing dei prossimi anni", contenuti: ["AI e personalizzazione", "Web3 e metaverso", "Privacy e cookieless world"], durata: "40 min", moduloId: "modulo-26", contentPath: "lezioni/modulo-26-lezione-3.mdx" },
};

export const moduli: Record<string, Modulo> = {
  "modulo-1": { id: "modulo-1", numero: 1, titolo: "Target & Buyer Personas", descrizione: "Impara a segmentare il mercato e costruire profili dettagliati del cliente ideale con i framework più avanzati.", faseId: "fase-0", isNew: false, lezioni: ["lezione-1-1", "lezione-1-2", "lezione-1-3", "lezione-1-4"] },
  "modulo-2": { id: "modulo-2", numero: 2, titolo: "Analisi di Mercato & Dati", descrizione: "Tecniche e strumenti per analizzare mercato, competitor e dati per prendere decisioni informate.", faseId: "fase-0", isNew: false, lezioni: ["lezione-2-1", "lezione-2-2", "lezione-2-3", "lezione-2-4"] },
  "modulo-3": { id: "modulo-3", numero: 3, titolo: "Competitor Intelligence", descrizione: "Mappa il panorama competitivo, individua i gap e costruisci vantaggi differenziali.", faseId: "fase-0", isNew: false, lezioni: ["lezione-3-1", "lezione-3-2", "lezione-3-3"] },
  "modulo-4": { id: "modulo-4", numero: 4, titolo: "Neuromarketing & Psicologia della Persuasione", descrizione: "Applica i principi di Cialdini e le neuroscienze per influenzare le decisioni d'acquisto.", faseId: "fase-0", isNew: false, lezioni: ["lezione-4-1", "lezione-4-2", "lezione-4-3"] },
  "modulo-5": { id: "modulo-5", numero: 5, titolo: "Brand Strategy & Purpose", descrizione: "Costruisci una strategia di brand solida partendo dal perché profondo della tua organizzazione.", faseId: "fase-1", isNew: false, lezioni: ["lezione-5-1", "lezione-5-2", "lezione-5-3"] },
  "modulo-6": { id: "modulo-6", numero: 6, titolo: "Brand Identity & Archetipi", descrizione: "Definisci la personalità del brand attraverso gli archetipi e costruisci un'identità visiva coerente.", faseId: "fase-1", isNew: false, lezioni: ["lezione-6-1", "lezione-6-2", "lezione-6-3"] },
  "modulo-7": { id: "modulo-7", numero: 7, titolo: "Positioning & Le 22 Leggi del Marketing", descrizione: "Posiziona il brand nella mente del consumatore applicando le leggi immutabili del marketing.", faseId: "fase-1", isNew: false, lezioni: ["lezione-7-1", "lezione-7-2", "lezione-7-3"] },
  "modulo-8": { id: "modulo-8", numero: 8, titolo: "Personal Branding", descrizione: "Costruisci un personal brand autentico e strategico su LinkedIn e oltre.", faseId: "fase-1", isNew: true, lezioni: ["lezione-8-1", "lezione-8-2", "lezione-8-3"] },
  "modulo-9": { id: "modulo-9", numero: 9, titolo: "Sito Web Landing Pages & UX", descrizione: "Progetta siti e landing page che convertono, con copywriting persuasivo e UX ottimizzata.", faseId: "fase-2", isNew: false, lezioni: ["lezione-9-1", "lezione-9-2", "lezione-9-3"] },
  "modulo-10": { id: "modulo-10", numero: 10, titolo: "SEO & Answer Engine Optimization", descrizione: "Ottimizza per Google e per i nuovi motori AI con tecniche SEO e AEO avanzate.", faseId: "fase-2", isNew: false, lezioni: ["lezione-10-1", "lezione-10-2", "lezione-10-3"] },
  "modulo-11": { id: "modulo-11", numero: 11, titolo: "Content Marketing & Piano Editoriale", descrizione: "Costruisci una strategia di contenuto efficace con un piano editoriale operativo.", faseId: "fase-2", isNew: false, lezioni: ["lezione-11-1", "lezione-11-2", "lezione-11-3"] },
  "modulo-12": { id: "modulo-12", numero: 12, titolo: "AI per il Marketing Operativo", descrizione: "Usa l'intelligenza artificiale per accelerare la produzione di contenuti e automatizzare processi.", faseId: "fase-2", isNew: true, lezioni: ["lezione-12-1", "lezione-12-2", "lezione-12-3", "lezione-12-4"] },
  "modulo-13": { id: "modulo-13", numero: 13, titolo: "Marketing Analytics & Data-Driven Decision", descrizione: "Misura, analizza e ottimizza le performance con GA4 e framework di attribuzione.", faseId: "fase-2", isNew: false, lezioni: ["lezione-13-1", "lezione-13-2", "lezione-13-3"] },
  "modulo-14": { id: "modulo-14", numero: 14, titolo: "Social Media Strategy Multicanale", descrizione: "Definisci strategie su misura per ogni piattaforma social e gestisci la community.", faseId: "fase-3", isNew: false, lezioni: ["lezione-14-1", "lezione-14-2", "lezione-14-3"] },
  "modulo-15": { id: "modulo-15", numero: 15, titolo: "Video Sound & Contenuti Multisensoriali", descrizione: "Crea contenuti video e audio che catturano l'attenzione e rafforzano il brand.", faseId: "fase-3", isNew: false, lezioni: ["lezione-15-1", "lezione-15-2", "lezione-15-3"] },
  "modulo-16": { id: "modulo-16", numero: 16, titolo: "Viral Marketing & Contagioso", descrizione: "Applica i principi STEPPS di Jonah Berger per creare contenuti virali e strategie contagiose.", faseId: "fase-3", isNew: false, lezioni: ["lezione-16-1", "lezione-16-2", "lezione-16-3"] },
  "modulo-17": { id: "modulo-17", numero: 17, titolo: "E-commerce Strategy & TikTok Shop", descrizione: "Costruisci e ottimizza un e-commerce, dai fondamentali al social commerce.", faseId: "fase-4", isNew: false, lezioni: ["lezione-17-1", "lezione-17-2", "lezione-17-3"] },
  "modulo-18": { id: "modulo-18", numero: 18, titolo: "Paid Advertising & Performance Marketing", descrizione: "Gestisci campagne a pagamento su Meta, Google e TikTok massimizzando il ROAS.", faseId: "fase-4", isNew: false, lezioni: ["lezione-18-1", "lezione-18-2", "lezione-18-3"] },
  "modulo-19": { id: "modulo-19", numero: 19, titolo: "Growth Hacking & Scalabilità", descrizione: "Applica il growth hacking framework e le Pirate Metrics per scalare la crescita.", faseId: "fase-4", isNew: false, lezioni: ["lezione-19-1", "lezione-19-2", "lezione-19-3"] },
  "modulo-20": { id: "modulo-20", numero: 20, titolo: "Influencer Marketing Strategy", descrizione: "Costruisci e gestisci campagne influencer con selezione strategica e misurazione del ROI.", faseId: "fase-5", isNew: false, lezioni: ["lezione-20-1", "lezione-20-2"] },
  "modulo-21": { id: "modulo-21", numero: 21, titolo: "PR & Media Relations", descrizione: "Costruisci relazioni con i media, gestisci le PR digitali e le crisi di comunicazione.", faseId: "fase-5", isNew: true, lezioni: ["lezione-21-1", "lezione-21-2", "lezione-21-3"] },
  "modulo-22": { id: "modulo-22", numero: 22, titolo: "Partnership Co-Branding & Product Placement", descrizione: "Crea partnership strategiche e integra il brand in contenuti editoriali.", faseId: "fase-5", isNew: false, lezioni: ["lezione-22-1", "lezione-22-2"] },
  "modulo-23": { id: "modulo-23", numero: 23, titolo: "Marketing Invisibile & Esperienziale", descrizione: "Usa guerrilla marketing ed esperienze memorabili per un impatto fuori dal comune.", faseId: "fase-5", isNew: false, lezioni: ["lezione-23-1", "lezione-23-2"] },
  "modulo-24": { id: "modulo-24", numero: 24, titolo: "Email Marketing & Marketing Automation", descrizione: "Costruisci funnel automatizzati e campagne email ad alto tasso di conversione.", faseId: "fase-6", isNew: false, lezioni: ["lezione-24-1", "lezione-24-2"] },
  "modulo-25": { id: "modulo-25", numero: 25, titolo: "Funnel Optimization & Customer Retention", descrizione: "Ottimizza ogni fase del funnel e costruisci programmi di loyalty che riducono il churn.", faseId: "fase-6", isNew: false, lezioni: ["lezione-25-1", "lezione-25-2"] },
  "modulo-26": { id: "modulo-26", numero: 26, titolo: "Marketing Contemporaneo Sostenibile & Inclusivo", descrizione: "Naviga il marketing del futuro con etica, sostenibilità e inclusione come leve strategiche.", faseId: "fase-7", isNew: false, lezioni: ["lezione-26-1", "lezione-26-2", "lezione-26-3"] },
};

export const fasi: Record<string, Fase> = {
  "fase-0": { id: "fase-0", numero: 0, titolo: "Analisi Strategica e Ricerca", descrizione: "Il punto di partenza: capire il mercato, il cliente e la psicologia della persuasione prima di costruire qualsiasi strategia.", moduli: ["modulo-1", "modulo-2", "modulo-3", "modulo-4"] },
  "fase-1": { id: "fase-1", numero: 1, titolo: "Fondamenta del Brand", descrizione: "Costruisci le fondamenta solide del tuo brand: purpose, identità, posizionamento e personal branding.", moduli: ["modulo-5", "modulo-6", "modulo-7", "modulo-8"] },
  "fase-2": { id: "fase-2", numero: 2, titolo: "Presenza Digitale & Contenuti", descrizione: "Crea una presenza digitale dominante con SEO, content marketing, AI e analytics.", moduli: ["modulo-9", "modulo-10", "modulo-11", "modulo-12", "modulo-13"] },
  "fase-3": { id: "fase-3", numero: 3, titolo: "Social Media & Viral Marketing", descrizione: "Padroneggia i social media e crea contenuti virali che si diffondono organicamente.", moduli: ["modulo-14", "modulo-15", "modulo-16"] },
  "fase-4": { id: "fase-4", numero: 4, titolo: "E-commerce & Monetizzazione", descrizione: "Costruisci e scala un business e-commerce con paid advertising e growth hacking.", moduli: ["modulo-17", "modulo-18", "modulo-19"] },
  "fase-5": { id: "fase-5", numero: 5, titolo: "Partnership, Influencer & Marketing Invisibile", descrizione: "Amplifica la tua reach attraverso influencer, PR, partnership e strategie non convenzionali.", moduli: ["modulo-20", "modulo-21", "modulo-22", "modulo-23"] },
  "fase-6": { id: "fase-6", numero: 6, titolo: "Automation & Retention", descrizione: "Automatizza il marketing e costruisci sistemi di retention per massimizzare il lifetime value.", moduli: ["modulo-24", "modulo-25"] },
  "fase-7": { id: "fase-7", numero: 7, titolo: "Marketing Contemporaneo & Etica", descrizione: "Il marketing del futuro: sostenibilità, etica, inclusione e le tendenze emergenti.", moduli: ["modulo-26"] },
};

// Helper functions
export function getFaseById(id: string): Fase | undefined {
  return fasi[id];
}

export function getModuloById(id: string): Modulo | undefined {
  return moduli[id];
}

export function getLezioneById(id: string): Lezione | undefined {
  return lezioni[id];
}

export function getModuliFase(faseId: string): Modulo[] {
  const fase = fasi[faseId];
  if (!fase) return [];
  return fase.moduli.map((id) => moduli[id]).filter(Boolean) as Modulo[];
}

export function getLessoniModulo(moduloId: string): Lezione[] {
  const modulo = moduli[moduloId];
  if (!modulo) return [];
  return modulo.lezioni.map((id) => lezioni[id]).filter(Boolean) as Lezione[];
}

export function getNextLezione(lezioneId: string): Lezione | undefined {
  const lezione = lezioni[lezioneId];
  if (!lezione) return undefined;
  const modulo = moduli[lezione.moduloId];
  if (!modulo) return undefined;
  const idx = modulo.lezioni.indexOf(lezioneId);
  if (idx < modulo.lezioni.length - 1) {
    return lezioni[modulo.lezioni[idx + 1]];
  }
  // Vai al prossimo modulo
  const fase = Object.values(fasi).find((f) => f.moduli.includes(modulo.id));
  if (!fase) return undefined;
  const moduloIdx = fase.moduli.indexOf(modulo.id);
  if (moduloIdx < fase.moduli.length - 1) {
    const nextModulo = moduli[fase.moduli[moduloIdx + 1]];
    if (nextModulo && nextModulo.lezioni.length > 0) {
      return lezioni[nextModulo.lezioni[0]];
    }
  }
  // Vai alla prossima fase
  const fasiList = Object.values(fasi).sort((a, b) => a.numero - b.numero);
  const faseIdx = fasiList.findIndex((f) => f.id === fase.id);
  if (faseIdx < fasiList.length - 1) {
    const nextFase = fasiList[faseIdx + 1];
    if (nextFase.moduli.length > 0) {
      const firstModulo = moduli[nextFase.moduli[0]];
      if (firstModulo && firstModulo.lezioni.length > 0) {
        return lezioni[firstModulo.lezioni[0]];
      }
    }
  }
  return undefined;
}

export function getPrevLezione(lezioneId: string): Lezione | undefined {
  const lezione = lezioni[lezioneId];
  if (!lezione) return undefined;
  const modulo = moduli[lezione.moduloId];
  if (!modulo) return undefined;
  const idx = modulo.lezioni.indexOf(lezioneId);
  if (idx > 0) {
    return lezioni[modulo.lezioni[idx - 1]];
  }
  // Vai al modulo precedente
  const fase = Object.values(fasi).find((f) => f.moduli.includes(modulo.id));
  if (!fase) return undefined;
  const moduloIdx = fase.moduli.indexOf(modulo.id);
  if (moduloIdx > 0) {
    const prevModulo = moduli[fase.moduli[moduloIdx - 1]];
    if (prevModulo && prevModulo.lezioni.length > 0) {
      return lezioni[prevModulo.lezioni[prevModulo.lezioni.length - 1]];
    }
  }
  // Vai alla fase precedente
  const fasiList = Object.values(fasi).sort((a, b) => a.numero - b.numero);
  const faseIdx = fasiList.findIndex((f) => f.id === fase.id);
  if (faseIdx > 0) {
    const prevFase = fasiList[faseIdx - 1];
    if (prevFase.moduli.length > 0) {
      const lastModulo = moduli[prevFase.moduli[prevFase.moduli.length - 1]];
      if (lastModulo && lastModulo.lezioni.length > 0) {
        return lezioni[lastModulo.lezioni[lastModulo.lezioni.length - 1]];
      }
    }
  }
  return undefined;
}

export function getAllFasi(): Fase[] {
  return Object.values(fasi).sort((a, b) => a.numero - b.numero);
}

export function getAllModuli(): Modulo[] {
  return Object.values(moduli).sort((a, b) => a.numero - b.numero);
}
