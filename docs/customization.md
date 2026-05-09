# Customization

## Cambiare i dati mock

Edita i file in `src/assets/mock/`. Vedi [Mock Data](/mock-data).

## Cambiare i colori

I design tokens sono in `src/styles.css`:

```css
:root {
  --color-accent: #0969da;        /* Cambia qui per il colore primario */
  --color-bg-default: #ffffff;
  --color-fg-default: #1f2328;
  /* ... */
}
```

## Cambiare il logo

Sostituisci `public/favicon.ico` e aggiungi il logo SVG in `public/logo.svg`.

## Aggiungere route

1. Crea il componente in `src/app/pages/{nome}/`
2. Aggiungi la route in `src/app/app.routes.ts`:

```typescript
{
  path: 'servizi',
  loadComponent: () => import('./pages/servizi/servizi.component').then((m) => m.ServiziComponent),
  title: 'Servizi — Associazione No-profit'
}
```

## Cambiare i metadati SEO

Edita `src/index.html` per:
- `<title>` globale
- `<meta name="description">`
- Open Graph

Per metadati per-route usa `Title` e `Meta` di `@angular/platform-browser`.

## Disabilitare il prerender

In `angular.json`:

```json
"prerender": false
```

In questo caso il sito gira solo in modalità SSR runtime (più lento al cold start, più dinamico).

## White-label per cliente

1. Fork del repo o copia in nuova cartella
2. Sostituisci `associazione-no-profit` con nome cliente (`acme-pizzeria`)
3. Sostituisci footer rimuovendo riferimento a Federico (modifica `footer.component.ts`)
4. Personalizza `vercel.json` con domain custom cliente
5. Deploy su Vercel cliente con loro account

---

## Possibili sviluppi customizzabili

Il template No-profit supporta ampie estensioni per il fundraising e l'engagement:

### Fundraising e Donazioni
1. **Donor segmentation engine** — profili donatori (persona, capacity, interest), targeting automatico campagne (Tier Avanzato+)
2. **Recurring donation management** — pausare/riprendere, change amount, history tracking (Tier Intermedio+)
3. **Tax receipt PDF autogeneration** — conforme Agenzia Entrate per detraibilità (Tier Intermedio+)
4. **Grant management system** — tracking contributi pubblici (bandi, timing, scadenze) (custom)
5. **Matching gift tracking** — employer match campaigns ("il tuo employer raddoppia") (custom)

### Community e Volunteer
6. **Volunteer skill marketplace** — volontari offrono skill, ente matching con task (Tier Avanzato)
7. **Community forum tematico** — beneficiari, donatori, volontari discussione (Tier Avanzato)
8. **Volunteer leaderboard gamified** — ore donate, impact points, badges (Tier Avanzato+)
9. **Mentorship matching** — esperti matched a beneficiari per guidance 1-1 (custom)

### Impact e Analytics
10. **Impact storytelling AI** — auto-generate caption foto beneficiari (privacy-first) (Tier Avanzato+)
11. **Beneficiary outcomes tracking** — progress form (health, education, income) → auto-populate impact metrics (custom)
12. **ROI calculator** — "€1 donation = X outcome" con visual chart, shareable (Tier Intermedio+)
13. **Donor dashboard personale** — "your impact" (projects supported, beneficiary outcomes, social proof) (Tier Avanzato+)

### E-Commerce e Fundraiser
14. **E-commerce solidale completo** — merchandise, ticket, subscription box, partnerships (Tier Avanzato)
15. **Peer-to-peer fundraiser** — fundraiser individuale crea campaign (es. "corro 5k, sponsor mi"), social sharing (custom)

**Nota**: Contatta Federico per costi e timeline di ogni feature custom.
