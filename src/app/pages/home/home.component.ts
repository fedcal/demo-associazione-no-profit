import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { map } from 'rxjs';

import { MockDataService } from '../../data/mock-data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf, RouterLink],
  template: `
    <section class="hero">
      <div class="demo-container">
        <p class="hero-badge">APS iscritta al RUNTS · Torino dal 1995</p>
        <h1>Sostegno alle famiglie fragili dal 1995</h1>
        <p class="hero-tagline">
          Doposcuola gratuito, sportello psicologico, food bank e molto altro.<br />
          Ogni giorno accanto a chi ha più bisogno nel territorio torinese.
        </p>
        <div class="hero-actions">
          <a routerLink="/donare" class="btn btn-primary">Dona ora</a>
          <a routerLink="/diventa-volontario" class="btn btn-secondary">Diventa volontario</a>
        </div>
      </div>
    </section>

    <section class="stats" *ngIf="info$ | async as info">
      <div class="demo-container">
        <ul class="stats-grid">
          <li>
            <span class="stats-number">{{ info.stats.anniAttivita }}</span>
            <span class="stats-label">anni di attività</span>
          </li>
          <li>
            <span class="stats-number">{{ info.stats.famiglieAiutate | number }}</span>
            <span class="stats-label">famiglie aiutate</span>
          </li>
          <li>
            <span class="stats-number">{{ info.stats.volontariAttivi }}</span>
            <span class="stats-label">volontari attivi</span>
          </li>
          <li>
            <span class="stats-number">{{ info.stats.progettiAttivi }}</span>
            <span class="stats-label">progetti attivi</span>
          </li>
        </ul>
      </div>
    </section>

    <section class="progetti-featured demo-container" *ngIf="progettiFeature$ | async as progetti">
      <div class="section-header">
        <h2>I nostri progetti</h2>
        <a routerLink="/progetti" class="link-more">Tutti i progetti →</a>
      </div>
      <ul class="progetti-grid">
        <li *ngFor="let p of progetti" class="progetto-card">
          <span class="progetto-card__icon" aria-hidden="true">{{ p.icon }}</span>
          <h3>{{ p.nome }}</h3>
          <p class="progetto-card__cat">{{ p.categoria }}</p>
          <p class="progetto-card__tagline">{{ p.tagline }}</p>
          <p class="progetto-card__impatto">{{ p.impatto }}</p>
        </li>
      </ul>
    </section>

    <section class="cta-5x1000">
      <div class="demo-container cta-5x1000__inner">
        <div class="cta-5x1000__text">
          <h2>Devolvi il tuo 5x1000</h2>
          <p>
            Non ti costa nulla: firma nella casella "Enti del Terzo Settore" e scrivi il nostro codice fiscale.
            Il 5 per mille è una scelta che fa la differenza per decine di famiglie torinesi.
          </p>
        </div>
        <div class="cta-5x1000__cf">
          <p class="cta-5x1000__cf-label">Codice fiscale</p>
          <p class="cta-5x1000__cf-code">97043210014</p>
          <a routerLink="/donare" class="btn btn-primary">Come funziona →</a>
        </div>
      </div>
    </section>

    <section class="valori demo-container">
      <h2>Perché siamo diversi</h2>
      <ul class="valori-grid">
        <li>
          <span class="valori-icon" aria-hidden="true">🏛️</span>
          <h3>Iscritti al RUNTS</h3>
          <p>Ente del Terzo Settore con piena trasparenza: bilancio sociale e rendiconti pubblici ogni anno.</p>
        </li>
        <li>
          <span class="valori-icon" aria-hidden="true">📊</span>
          <h3>Trasparenza totale</h3>
          <p>Ogni euro donato viene rendicontato. Pubblichiamo annualmente dove vanno le risorse ricevute.</p>
        </li>
        <li>
          <span class="valori-icon" aria-hidden="true">🤝</span>
          <h3>Radicati nel territorio</h3>
          <p>Lavoriamo con i servizi sociali del Comune, le scuole e le parrocchie di Torino dal 1995.</p>
        </li>
        <li>
          <span class="valori-icon" aria-hidden="true">❤️</span>
          <h3>Servizi sempre gratuiti</h3>
          <p>Nessuna famiglia viene mai esclusa per ragioni economiche. I nostri servizi sono sempre gratuiti.</p>
        </li>
      </ul>
    </section>
  `,
  styles: [
    `
      .hero {
        padding: 5rem 1rem;
        text-align: center;
        background: linear-gradient(180deg, #f0fdfa 0%, #ffffff 100%);
        border-bottom: 1px solid var(--color-border);
      }
      .hero-badge {
        display: inline-block;
        background: #ccfbf1;
        color: #0f766e;
        font-size: 0.8rem;
        font-weight: 600;
        padding: 0.3rem 0.8rem;
        border-radius: 9999px;
        margin-bottom: 1.25rem;
      }
      .hero h1 {
        font-size: clamp(2rem, 5vw, 3.25rem);
        margin: 0 0 1rem;
        color: var(--color-fg-default);
        line-height: 1.2;
      }
      .hero-tagline {
        font-size: 1.1rem;
        color: var(--color-fg-muted);
        margin: 0 0 2rem;
        line-height: 1.6;
      }
      .hero-actions {
        display: flex;
        gap: 0.75rem;
        justify-content: center;
        flex-wrap: wrap;
      }
      .btn {
        display: inline-block;
        padding: 0.7rem 1.5rem;
        border-radius: var(--radius-md);
        text-decoration: none;
        font-weight: 600;
        font-size: 0.95rem;
        transition: all 0.15s ease;
      }
      .btn-primary {
        background: var(--color-accent);
        color: #ffffff;
      }
      .btn-primary:hover {
        background: #0f766e;
        text-decoration: none;
      }
      .btn-secondary {
        background: #ffffff;
        color: var(--color-fg-default);
        border: 1px solid var(--color-border);
      }
      .btn-secondary:hover {
        background: var(--color-bg-subtle);
        text-decoration: none;
      }
      .stats {
        background: var(--color-accent);
        color: #ffffff;
        padding: 3rem 1rem;
      }
      .stats-grid {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
        gap: 2rem;
        text-align: center;
      }
      .stats-number {
        display: block;
        font-size: 2.75rem;
        font-weight: 700;
        line-height: 1;
        margin-bottom: 0.4rem;
      }
      .stats-label {
        font-size: 0.9rem;
        opacity: 0.9;
      }
      .progetti-featured {
        padding: 4rem 1rem;
      }
      .section-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 2rem;
        flex-wrap: wrap;
        gap: 0.5rem;
      }
      .section-header h2 {
        margin: 0;
      }
      .link-more {
        color: var(--color-accent);
        text-decoration: none;
        font-weight: 600;
      }
      .link-more:hover {
        text-decoration: underline;
      }
      .progetti-grid {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: 1.25rem;
      }
      .progetto-card {
        background: var(--color-bg-subtle);
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        padding: 1.5rem;
      }
      .progetto-card__icon {
        font-size: 2rem;
        display: block;
        margin-bottom: 0.75rem;
      }
      .progetto-card h3 {
        margin: 0 0 0.25rem;
        font-size: 1.05rem;
      }
      .progetto-card__cat {
        font-size: 0.75rem;
        font-weight: 600;
        color: var(--color-accent);
        text-transform: uppercase;
        letter-spacing: 0.04em;
        margin: 0 0 0.5rem;
      }
      .progetto-card__tagline {
        font-size: 0.9rem;
        color: var(--color-fg-muted);
        margin: 0 0 0.75rem;
      }
      .progetto-card__impatto {
        font-size: 0.8rem;
        font-weight: 600;
        color: var(--color-fg-default);
        background: #ccfbf1;
        padding: 0.35rem 0.6rem;
        border-radius: var(--radius-sm);
        margin: 0;
      }
      .cta-5x1000 {
        background: var(--color-fg-default);
        color: #ffffff;
        padding: 4rem 1rem;
      }
      .cta-5x1000__inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
        flex-wrap: wrap;
      }
      .cta-5x1000__text {
        flex: 1;
        min-width: 260px;
      }
      .cta-5x1000__text h2 {
        color: #ffffff;
        margin: 0 0 0.75rem;
      }
      .cta-5x1000__text p {
        color: rgba(255,255,255,0.8);
        margin: 0;
        line-height: 1.6;
      }
      .cta-5x1000__cf {
        text-align: center;
        flex-shrink: 0;
      }
      .cta-5x1000__cf-label {
        font-size: 0.8rem;
        color: rgba(255,255,255,0.7);
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin: 0 0 0.35rem;
      }
      .cta-5x1000__cf-code {
        font-size: 1.6rem;
        font-weight: 700;
        font-family: var(--font-mono);
        color: #5eead4;
        margin: 0 0 1.25rem;
        letter-spacing: 0.05em;
      }
      .valori {
        padding: 4rem 1rem;
      }
      .valori h2 {
        text-align: center;
        margin-bottom: 2rem;
      }
      .valori-grid {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 1.5rem;
      }
      .valori-grid li {
        text-align: center;
        padding: 1.5rem;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
      }
      .valori-icon {
        font-size: 2.25rem;
        display: block;
        margin-bottom: 0.75rem;
      }
      .valori-grid h3 {
        margin: 0 0 0.5rem;
        font-size: 1rem;
      }
      .valori-grid p {
        margin: 0;
        color: var(--color-fg-muted);
        font-size: 0.9rem;
        line-height: 1.5;
      }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  private readonly mockData = inject(MockDataService);

  readonly info$ = this.mockData.info$;

  readonly progettiFeature$ = this.mockData.progetti$.pipe(
    map((data) => data.progetti.slice(0, 3))
  );
}
