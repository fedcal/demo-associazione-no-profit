import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';

import { MockDataService } from '../../data/mock-data.service';

@Component({
  selector: 'app-chi-siamo',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf],
  template: `
    <section class="page-header">
      <div class="demo-container">
        <h1>Chi siamo</h1>
        <p>Trent'anni di impegno per le famiglie fragili del territorio torinese.</p>
      </div>
    </section>

    <article class="demo-container content">
      <section class="storia">
        <h2>La nostra storia</h2>
        <p>
          Associazione Famiglie Insieme APS nasce nel 1995 dall'intuizione di un gruppo di assistenti sociali
          e volontari torinesi che avevano capito quanto il confine tra fragilità e resilienza fosse sottile.
          L'idea era semplice: creare un presidio stabile nel quartiere che sapesse fare rete con le istituzioni
          senza sostituirle.
        </p>
        <p>
          In trent'anni abbiamo accompagnato oltre 1.240 famiglie, lanciato sei progetti strutturati, costruito
          una rete di 35 volontari e ottenuto l'iscrizione al Registro Unico Nazionale del Terzo Settore (RUNTS)
          nella sezione delle Associazioni di Promozione Sociale.
        </p>
        <p>
          Oggi gestiamo il doposcuola gratuito, lo sportello psicologico, il food bank, il progetto di sostegno
          minori, le visite domiciliari agli anziani soli e i corsi di formazione per adulti in difficoltà.
          Ogni progetto nasce dall'ascolto del territorio e viene rendicontato pubblicamente ogni anno.
        </p>
      </section>

      <section class="valori">
        <h2>I nostri valori fondanti</h2>
        <ul class="valori-grid">
          <li>
            <h3>Prossimità</h3>
            <p>Siamo presenti dove vivono le persone, non solo negli uffici. I nostri servizi vanno a domicilio.</p>
          </li>
          <li>
            <h3>Gratuità</h3>
            <p>Nessun servizio viene mai negato per ragioni economiche. La gratuità è un principio irrinunciabile.</p>
          </li>
          <li>
            <h3>Trasparenza</h3>
            <p>Pubblichiamo ogni anno bilancio di esercizio, bilancio sociale e rendiconto 5x1000 sul portale RUNTS.</p>
          </li>
          <li>
            <h3>Collaborazione istituzionale</h3>
            <p>Lavoriamo con i servizi sociali comunali, le scuole e l'ASL To1. Non sostituiamo, integriamo.</p>
          </li>
        </ul>
      </section>

      <section class="runts-block">
        <h2>Iscrizione al RUNTS</h2>
        <p>
          Siamo un Ente del Terzo Settore iscritto al Registro Unico Nazionale del Terzo Settore (RUNTS) nella
          sezione "Associazioni di Promozione Sociale" dal 15 marzo 2022. L'iscrizione al RUNTS garantisce
          ai nostri donatori le agevolazioni fiscali previste dal Codice del Terzo Settore (D.Lgs. 117/2017).
        </p>
        <div class="runts-details">
          <div class="runts-item">
            <span class="runts-label">Codice RUNTS</span>
            <span class="runts-value">TS-PI-00142/2022</span>
          </div>
          <div class="runts-item">
            <span class="runts-label">Sezione</span>
            <span class="runts-value">Associazioni di Promozione Sociale (APS)</span>
          </div>
          <div class="runts-item">
            <span class="runts-label">Codice fiscale</span>
            <span class="runts-value mono">97043210014</span>
          </div>
          <div class="runts-item">
            <span class="runts-label">Data iscrizione</span>
            <span class="runts-value">15 marzo 2022</span>
          </div>
        </div>
      </section>

      <section class="team-section" *ngIf="team$ | async as team">
        <h2>Il team</h2>
        <ul class="team-grid">
          <li *ngFor="let m of team.dipendenti" class="team-card">
            <div class="team-card__avatar" aria-hidden="true">{{ m.nome.charAt(0) }}</div>
            <h3>{{ m.nome }}</h3>
            <p class="team-card__role">{{ m.ruolo }}</p>
            <p class="team-card__bio">{{ m.bio }}</p>
            <p class="team-card__exp">{{ m.anniEsperienza }} anni di esperienza</p>
            <ul class="team-card__skills">
              <li *ngFor="let s of m.specialita">{{ s }}</li>
            </ul>
          </li>
        </ul>

        <div class="volontari-block">
          <h2>La rete dei volontari</h2>
          <div class="volontari-stats">
            <div class="vol-stat">
              <span class="vol-num">{{ team.volontari.totale }}</span>
              <span class="vol-label">volontari iscritti</span>
            </div>
            <div class="vol-stat">
              <span class="vol-num">{{ team.volontari.attivi }}</span>
              <span class="vol-label">attivi nel 2025</span>
            </div>
            <div class="vol-stat">
              <span class="vol-num">{{ team.volontari.neoIscritti }}</span>
              <span class="vol-label">nuovi nel 2025</span>
            </div>
          </div>
          <div class="aree-grid">
            <div>
              <h4>Area di impegno</h4>
              <ul class="aree-list">
                <li *ngFor="let a of team.volontari.areeDiImpegno">
                  <span>{{ a.area }}</span>
                  <span class="area-num">{{ a.numero }}</span>
                </li>
              </ul>
            </div>
            <div>
              <h4>Fasce d'età</h4>
              <ul class="aree-list">
                <li *ngFor="let f of team.volontari.fasceEta">
                  <span>{{ f.fascia }}</span>
                  <span class="area-num">{{ f.numero }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="faq-section" *ngIf="faq$ | async as faq">
        <h2>Domande frequenti</h2>
        <ul class="faq-list">
          <li *ngFor="let item of faq.faq" class="faq-item">
            <h3>{{ item.domanda }}</h3>
            <p>{{ item.risposta }}</p>
          </li>
        </ul>
      </section>
    </article>
  `,
  styles: [
    `
      .page-header {
        padding: 4rem 1rem 3rem;
        background: var(--color-bg-subtle);
        text-align: center;
        border-bottom: 1px solid var(--color-border);
      }
      .page-header h1 { margin: 0 0 0.5rem; }
      .page-header p { color: var(--color-fg-muted); margin: 0; }
      .content { padding: 3rem 1rem; }
      .storia {
        max-width: 720px;
        margin: 0 auto 4rem;
      }
      .storia h2 { margin-bottom: 1rem; }
      .storia p { line-height: 1.7; margin-bottom: 1rem; color: var(--color-fg-muted); }
      .storia p:last-child { margin-bottom: 0; }
      .valori { margin-bottom: 4rem; }
      .valori h2 { text-align: center; margin-bottom: 2rem; }
      .valori-grid {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 1.5rem;
      }
      .valori-grid li {
        padding: 1.5rem;
        background: var(--color-bg-subtle);
        border-radius: var(--radius-md);
      }
      .valori-grid h3 { margin: 0 0 0.5rem; color: var(--color-accent); }
      .valori-grid p { margin: 0; color: var(--color-fg-muted); font-size: 0.9rem; line-height: 1.5; }
      .runts-block {
        background: #f0fdfa;
        border: 1px solid #99f6e4;
        border-radius: var(--radius-lg);
        padding: 2rem;
        margin-bottom: 4rem;
      }
      .runts-block h2 { margin: 0 0 0.75rem; }
      .runts-block p { color: var(--color-fg-muted); margin: 0 0 1.5rem; line-height: 1.6; }
      .runts-details {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 1rem;
      }
      .runts-item { display: flex; flex-direction: column; gap: 0.2rem; }
      .runts-label { font-size: 0.75rem; color: var(--color-fg-muted); text-transform: uppercase; letter-spacing: 0.04em; }
      .runts-value { font-weight: 600; }
      .mono { font-family: var(--font-mono); }
      .team-section { margin-bottom: 4rem; }
      .team-section > h2 { text-align: center; margin-bottom: 2rem; }
      .team-grid {
        list-style: none;
        padding: 0;
        margin: 0 0 3rem;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
        gap: 1.5rem;
      }
      .team-card {
        padding: 1.5rem;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        text-align: center;
      }
      .team-card__avatar {
        width: 72px;
        height: 72px;
        border-radius: 50%;
        background: var(--color-accent);
        color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.75rem;
        font-weight: 700;
        margin: 0 auto 1rem;
      }
      .team-card h3 { margin: 0 0 0.25rem; }
      .team-card__role { margin: 0 0 0.75rem; color: var(--color-accent); font-weight: 600; font-size: 0.85rem; }
      .team-card__bio { font-size: 0.88rem; color: var(--color-fg-muted); margin-bottom: 0.5rem; text-align: left; line-height: 1.5; }
      .team-card__exp { font-size: 0.8rem; font-weight: 600; margin-bottom: 0.75rem; }
      .team-card__skills {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        gap: 0.35rem;
        flex-wrap: wrap;
        justify-content: center;
      }
      .team-card__skills li {
        font-size: 0.7rem;
        background: var(--color-bg-subtle);
        padding: 0.2rem 0.5rem;
        border-radius: 9999px;
        color: var(--color-fg-muted);
      }
      .volontari-block {
        background: var(--color-bg-subtle);
        border-radius: var(--radius-lg);
        padding: 2rem;
      }
      .volontari-block h2 { margin: 0 0 1.5rem; }
      .volontari-stats {
        display: flex;
        gap: 2rem;
        flex-wrap: wrap;
        margin-bottom: 2rem;
      }
      .vol-stat { display: flex; flex-direction: column; align-items: center; }
      .vol-num { font-size: 2.5rem; font-weight: 700; color: var(--color-accent); line-height: 1; }
      .vol-label { font-size: 0.85rem; color: var(--color-fg-muted); }
      .aree-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
        gap: 1.5rem;
      }
      .aree-grid h4 { margin: 0 0 0.75rem; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.04em; color: var(--color-fg-muted); }
      .aree-list { list-style: none; padding: 0; margin: 0; }
      .aree-list li {
        display: flex;
        justify-content: space-between;
        padding: 0.4rem 0;
        border-bottom: 1px dashed var(--color-border);
        font-size: 0.9rem;
      }
      .aree-list li:last-child { border-bottom: none; }
      .area-num { font-weight: 600; color: var(--color-accent); }
      .faq-section { margin-top: 2rem; }
      .faq-section h2 { margin-bottom: 2rem; }
      .faq-list { list-style: none; padding: 0; margin: 0; }
      .faq-item {
        border-bottom: 1px solid var(--color-border);
        padding: 1.5rem 0;
      }
      .faq-item:first-child { padding-top: 0; }
      .faq-item h3 { margin: 0 0 0.5rem; font-size: 1rem; }
      .faq-item p { margin: 0; color: var(--color-fg-muted); line-height: 1.6; font-size: 0.95rem; }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChiSiamoComponent {
  private readonly mockData = inject(MockDataService);

  readonly team$ = this.mockData.team$;
  readonly faq$ = this.mockData.faq$;
}
