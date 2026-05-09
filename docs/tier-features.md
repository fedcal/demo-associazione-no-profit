# Piano Tariffario e Tier di Funzionalità

## Panorama Tier

Il template **Associazione No-profit (ONLUS/ETS/APS)** è disponibile in 3 livelli di funzionalità, progettati per amplificare l'impatto della tua missione:

| Tier | Prezzo | Ore sviluppo | Pubblico ideale |
|------|--------|-------------|-----------------|
| **Base** | €500–800 | 80h | Piccoli enti, visibilità impact |
| **Intermedio** | €1.500–2.200 | 250h | Enti medi, fundraising online + donatori |
| **Avanzato** | €4.000–6.000 | 500h | Enti grandi, AI insights + community + e-commerce solidale |

---

## Tier Base — €500–800 (80h)

**Obiettivo**: Sito vetrina credibile, trasparenza missione, SEO locale.

### Funzionalità incluse

- **Hero section** con mission/vision, foto beneficiari (privacy-first)
- **Attività e programmi** — descrizione interventi, aree geografiche coperte
- **Team volontari** — nomi, foto, ruoli, expertise
- **Gallery eventi/beneficiari** — foto attività, engagement story (anonymizzate se minori)
- **Calendario campagne** — raccolta fondi stagionali, anniversari, iniziative
- **Contatti + Iscrizione** — form contatti, email, telefono, iscrizione newsletter
- **Blog impatto** — articoli su risultati, storie beneficiari, aggiornamenti progettuale
- **Schema.org NGO + Organization** — JSON-LD SEO specializzato non-profit
- **Design system** — CSS tokens light theme (GitHub Primer)
- **Prerender statico** — fast, 99.9% uptime
- **Responsive mobile** — Lighthouse target ≥90 SEO

### Cosa NON è incluso

- Area riservata donatori/soci
- Donation form
- Newsletter tracking
- Campaign management
- E-commerce

---

## Tier Intermedio — €1.500–2.200 (250h)

**Obiettivo**: Portale donatori, fundraising online, trasparenza impatto.

### Funzionalità incluse (Tier Base +)

- **Login soci/donatori** — area riservata con cronologia contributi
- **Donation form semplice** — Stripe + PayPal + Satispay integrati
  - Importo libero o preset (€5, €10, €50, €100)
  - Ricorrenza: una-volta, mensile, annuale
  - Causa specifica o generale
  - Ricevuta automatica PDF (tax receipt per detraibilità IT)

- **Dashboard donazioni live** — per staff
  - Raccolta complessiva vs target mensile/annuale
  - Donor retention rate
  - Frequency plot (donatori 1-time vs ricorrenti)
  - Next milestone visualizer

- **Campaign management base** — raccolta fondi per progetto
  - Page campagna con descrizione, foto, goal €
  - Progress bar interattiva
  - Storie aggiornamento campo (foto, testo, video)
  - Sharing social buttons

- **Goal tracker** — "€1 raccolto = X impatto"
  - Es. €100 = 1 kit scolastico per bimbo
  - Es. €500 = 1 corso formazione adulto disoccupato
  - Visualizzazione numero beneficiari raggiunti grazie a donazione

- **Newsletter segmentata** — GDPR-compliant bulk email
  - Donatori attuali
  - Volontari
  - Soci RUNTS
  - Segmentazione per interesse (educazione, ambiente, salute)

- **Multi-lingua IT/EN** — sito bilingue, attracker donatori internazionali

- **GDPR completo** — cookie banner, informativa, consensi dati

### Cosa NON è incluso

- Volunteer skill matching
- AI predictive insights (churn, lifetime value)
- Community forum
- E-commerce solidale
- Advanced analytics

---

## Tier Avanzato — €4.000–6.000 (500h)

**Obiettivo**: Ecosistema digitale no-profit completo, AI-driven insights, community engagement.

### Funzionalità incluse (Tier Base + Intermedio +)

- **Campaign management avanzato** — impact reporting
  - Racconti multi-media (foto gallery, video testimonial, mappe interattive)
  - Update in real-time (volontari upload foto campo via mobile app)
  - Impact metrics dashboard (es. "500 bimbi vaccinati", "10.000m² foresta piantata")
  - Geolocalizzazione progetti (mappa mondo con pin impact)

- **AI Fundraising Insights** — powered by Ollama on-prem
  - **Donor Lifetime Value prediction** — stima valore futuro donatore (storia donazioni, frequency, amount)
  - **Churn prediction** — identifica donatori a rischio abbandono → alert staff per re-engagement
  - **Campaign recommendation** — suggeri campagna a donatore storico base su pattern (chi dona a educazione → mostra anche ambiente)
  - **Personalized ask amount** — per donatore, suggerisci importo probabile (upgrade €10 → €25 based on capacity signals)

- **Volunteer management** — skill matching + scheduling
  - Volontari profilo (skills: insegnante, meccanico, infermiere, developer)
  - Task catalogue — ogni progetto ha task (insegnamento, manutenzione, coding, etc.)
  - Smart match: task X → suggeri volontari con skill Y
  - Scheduling: blocchi disponibilità volontari vs task timeline
  - Time tracking automatico (badge entry, push notification out, log ore)
  - Feedback/rating post-task (impatto, puntualità, affidabilità)

- **Community forum tematico** — beneficiari + donatori + volontari
  - Forum per area intervento (salute, educazione, ambiente)
  - Q&A moderata (staff appruva post sensibili)
  - Success story sharing (beneficiari raccontano progresso)
  - Volunteer peer support (esperti rispondono domande)

- **E-commerce solidale** — merchandise + ticket + fundraiser
  - Shop gadget con logo ente (magliette, tazze, adesivi) — margine 30–50%
  - Ticketing eventi (cena beneficenza, 5k run, workshop)
  - Merchandise per progetto (es. "adotta distretto" → ricevi kit)
  - Subscription box mensile (curated items + impact update)
  - Payment gateway: Stripe (fee min), Satispay
  - Shipment: Wix Ship o manual per small orders

- **Advanced Analytics + ROI Dashboard** — per direttivo
  - Costo per euro raccolto (overhead vs fundraising spend)
  - Donor acquisition cost (cost to find, convert, onboard donor)
  - Revenue retention cohort (donatori per year recruited, retention %)
  - Impact per euro (€1 raccolto → X outcome in field)
  - LTV vs CAC ratio (lifetime value vs acquisition cost)
  - Monthly recurring revenue (MRR) — base donatori ricorrenti

- **Social media auto-post** — integration LinkedIn, Facebook, Instagram
  - Impact story auto-post settimanale (foto + caption AI-generated)
  - Campaign update auto-share (progress bar, new milestone)
  - Volunteer spotlight auto-post
  - Donor thank-you social mention (opzionale, opt-in)
  - Analytics integrazione: click-through from social vs sito

---

## Dettagli implementativi per Tier

### Tier Base: Stack semplice

```
Frontend: Angular 21 SSR prerender-only
Backend: API REST mock (no DB)
Hosting: Vercel CDN
Docs: VitePress GitHub Pages
```

### Tier Intermedio: Stack full-stack leggero

```
Frontend: Angular 21 SSR + login, donation form
Backend: Spring Boot 3.4 + PostgreSQL + Redis
Auth: JWT proprietario
Payments: Stripe SDK + Satispay SDK
Email: Brevo / Resend SMTP (bulk email)
Hosting: Vercel (frontend) + VPS own (backend)
```

### Tier Avanzato: Stack complete + AI

```
Frontend: Angular 21 SSR + Signals + dashboard analytics
Backend: Spring Boot clean-arch 4-layer
AI: Ollama on-prem (llama3.1:8b) per insights + email copywriting
Community: Forum custom (Spring + PostgreSQL)
E-commerce: WooCommerce headless o custom (Spring + Stripe)
DB: PostgreSQL 16 + Redis Stack
Auth: JWT + opt-in OAuth
Hosting: VPS Hetzner CCX23 (3 microservizi) + Nginx SSL
```

---

## Scegliere il Tier

### **Base** se:
- Ente piccolo (<100 soci)
- Budget <€1k
- Obiettivo primario: credibilità web + visibilità
- No aspettativa fundraising online

### **Intermedio** se:
- Ente medio (100–500 soci)
- Voglia digitalizzare donazioni (reduce cash donation burden)
- Budget €1.500–2.200
- Donatori già interessati, need online button

### **Avanzato** se:
- Ente grande (500+ soci, 20+ volontari attivi)
- Missione ambizione (multi-country impact)
- Budget €4k–6k, ROI stimato 12–18 mesi (incremento donazioni 25–40%)
- Staff willing to learn analytics + volunteer CRM
- Visione: sito è fundraising engine, not brochure

---

## Costi aggiuntivi (extra-tier)

| Servizio | Costo mensile | Note |
|----------|---------------|------|
| Brevo email marketing | €20–100 | Bulk email >5k contatti, GDPR compliance |
| Stripe fee | 1.4% + €0.25 | Per transazione donazione |
| Satispay fee | 1.5% | Per transazione |
| Zoom webinar (50+ per mese) | €150–300 | Per training volontari, fundraiser event streaming |
| Social media scheduler | €20 | Buffer, Later, HubSpot (auto-post) |
| Backup cloud | €20–50 | Storage donor data 5 anni (retention legale) |
| SSL Let's Encrypt | €0 | Automatico |
| Consulenza GDPR | €500–1.500 | Uno-time, highly recommended |

---

## Timeline tipica per Tier

| Fase | Base | Intermedio | Avanzato |
|------|------|-----------|----------|
| Discovery | 1 sett | 1 sett | 2 sett |
| Sviluppo | 2–2.5 sett | 6–7 sett | 12–13 sett |
| Testing + UAT | 0.5 sett | 1–1.5 sett | 2–3 sett |
| Deploy + training | 0.5 sett | 1 sett | 1–2 sett |
| **Totale** | **4 sett** | **9–10 sett** | **17–20 sett** |

---

## GDPR e Privacy — Conformità per Tier

### Tier Base
- Informativa privacy footer
- Cookie banner
- NO raccolta dati sensibili donatori

### Tier Intermedio
- GDPR completo (Data Protection Policy)
- Crittografia password donatori
- DPA con Stripe/Satispay
- Consent form per newsletter
- Retention policy: dati donatori 5 anni (obbligo fiscale detraibilità)
- Diritto oblio (delete account → scrub donation record anonimizzato)

### Tier Avanzato (aggiunto)
- Registro trattamenti (Data Protection Impact Assessment)
- DPA esteso (Brevo, Zoom, social media provider)
- Video beneficiari: consenso esplicito per each video
- Anonimizzazione foto beneficiari minori (no volti se possibile)
- Audit trail: chi accede dati donatori, quando, perché

---

## Case: Tier Base → Intermedio → Avanzato

### Esempio: ONLUS educazione malaria Africa

**Tier Base** (2025): Sito vetrina con storie beneficiari
→ **Tier Intermedio** (2025-Q4): Aggiunto donation form, campaign "500 zanzariere" con goal tracker
→ **Tier Avanzato** (2026): AI predicts churn donatori, volunteer skill-matching, e-shop magliette "sponsored village"

---

## Prossimi step

1. **Contatta Federico** — dimensione ente, budget, causa prioritaria (salute/educazione/ambiente)
2. **Demo live** — accesso Tier Base con dati mock tua associazione
3. **Proposta personalizzata** — timeline, SLA uptime 99.5%, training staff donazioni
4. **Contratto e kickoff** — discovery call, mapping volunteer workflow
