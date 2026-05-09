import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

import { MockDataService } from '../../data/mock-data.service';

@Component({
  selector: 'app-progetti',
  standalone: true,
  imports: [AsyncPipe, NgFor, NgIf, RouterLink],
  template: `
    <section class="page-header">
      <div class="demo-container">
        <h1>I nostri progetti</h1>
        <p>Sei aree di intervento, 30 anni di esperienza, centinaia di famiglie raggiunte ogni anno.</p>
      </div>
    </section>

    <article class="demo-container content" *ngIf="progetti$ | async as data">
      <ul class="progetti-list">
        <li *ngFor="let p of data.progetti" class="progetto-item">
          <div class="progetto-item__header">
            <span class="progetto-item__icon" aria-hidden="true">{{ p.icon }}</span>
            <div>
              <p class="progetto-item__cat">{{ p.categoria }}</p>
              <h2>{{ p.nome }}</h2>
              <p class="progetto-item__tagline">{{ p.tagline }}</p>
            </div>
          </div>
          <p class="progetto-item__desc">{{ p.descrizione }}</p>
          <div class="progetto-item__meta">
            <div class="meta-block">
              <span class="meta-label">Beneficiari</span>
              <span class="meta-value">{{ p.beneficiari }}</span>
            </div>
            <div class="meta-block">
              <span class="meta-label">Persone/anno</span>
              <span class="meta-value">{{ p.beneficiariAnno }}</span>
            </div>
            <div class="meta-block">
              <span class="meta-label">Volontari coinvolti</span>
              <span class="meta-value">{{ p.volontariCoinvolti }}</span>
            </div>
            <div class="meta-block">
              <span class="meta-label">Attivo dal</span>
              <span class="meta-value">{{ p.annioAvvio }}</span>
            </div>
          </div>
          <div class="progetto-item__impatto">
            <span class="impatto-label">Impatto</span>
            <span class="impatto-value">{{ p.impatto }}</span>
          </div>
        </li>
      </ul>

      <aside class="cta-volontario">
        <h2>Vuoi contribuire?</h2>
        <p>I nostri progetti vivono grazie all'impegno dei volontari e al sostegno dei donatori. Puoi fare la differenza.</p>
        <div class="cta-actions">
          <a routerLink="/donare" class="btn btn-primary">Dona ora</a>
          <a routerLink="/diventa-volontario" class="btn btn-secondary">Diventa volontario</a>
        </div>
      </aside>
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
      .progetti-list {
        list-style: none;
        margin: 0 0 4rem;
        padding: 0;
        display: flex;
        flex-direction: column;
        gap: 2rem;
      }
      .progetto-item {
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        padding: 2rem;
      }
      .progetto-item__header {
        display: flex;
        align-items: flex-start;
        gap: 1.25rem;
        margin-bottom: 1.25rem;
      }
      .progetto-item__icon {
        font-size: 2.5rem;
        flex-shrink: 0;
        margin-top: 0.15rem;
      }
      .progetto-item__cat {
        font-size: 0.75rem;
        font-weight: 600;
        color: var(--color-accent);
        text-transform: uppercase;
        letter-spacing: 0.04em;
        margin: 0 0 0.25rem;
      }
      .progetto-item h2 {
        margin: 0 0 0.25rem;
        font-size: 1.3rem;
      }
      .progetto-item__tagline {
        color: var(--color-fg-muted);
        margin: 0;
        font-size: 0.95rem;
      }
      .progetto-item__desc {
        color: var(--color-fg-muted);
        line-height: 1.7;
        margin: 0 0 1.5rem;
        font-size: 0.95rem;
      }
      .progetto-item__meta {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
        gap: 1rem;
        background: var(--color-bg-subtle);
        border-radius: var(--radius-md);
        padding: 1rem;
        margin-bottom: 1rem;
      }
      .meta-block {
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
      }
      .meta-label {
        font-size: 0.75rem;
        color: var(--color-fg-muted);
        text-transform: uppercase;
        letter-spacing: 0.04em;
      }
      .meta-value {
        font-weight: 600;
        font-size: 0.95rem;
      }
      .progetto-item__impatto {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        background: #ccfbf1;
        border-radius: var(--radius-sm);
        padding: 0.6rem 0.9rem;
      }
      .impatto-label {
        font-size: 0.75rem;
        font-weight: 700;
        color: #0f766e;
        text-transform: uppercase;
        letter-spacing: 0.04em;
        flex-shrink: 0;
      }
      .impatto-value {
        font-size: 0.9rem;
        color: #134e4a;
      }
      .cta-volontario {
        background: var(--color-bg-subtle);
        border-radius: var(--radius-lg);
        padding: 2.5rem;
        text-align: center;
      }
      .cta-volontario h2 { margin: 0 0 0.75rem; }
      .cta-volontario p { color: var(--color-fg-muted); margin: 0 0 1.5rem; }
      .cta-actions {
        display: flex;
        gap: 0.75rem;
        justify-content: center;
        flex-wrap: wrap;
      }
      .btn {
        display: inline-block;
        padding: 0.65rem 1.4rem;
        border-radius: var(--radius-md);
        text-decoration: none;
        font-weight: 600;
        font-size: 0.95rem;
        transition: all 0.15s ease;
      }
      .btn-primary { background: var(--color-accent); color: #ffffff; }
      .btn-primary:hover { background: #0f766e; text-decoration: none; }
      .btn-secondary {
        background: #ffffff;
        color: var(--color-fg-default);
        border: 1px solid var(--color-border);
      }
      .btn-secondary:hover { background: var(--color-bg-subtle); text-decoration: none; }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProgettiComponent {
  private readonly mockData = inject(MockDataService);

  readonly progetti$ = this.mockData.progetti$;
}
