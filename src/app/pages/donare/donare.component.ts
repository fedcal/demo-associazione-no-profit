import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NgFor, NgIf, NgClass } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

const IMPORTI_PRESET = [10, 25, 50, 100] as const;
type ImportoPreset = (typeof IMPORTI_PRESET)[number];

@Component({
  selector: 'app-donare',
  standalone: true,
  imports: [NgFor, NgIf, NgClass, ReactiveFormsModule],
  template: `
    <section class="page-header">
      <div class="demo-container">
        <h1>Sostieni Famiglie Insieme</h1>
        <p>Ogni donazione contribuisce concretamente ai nostri sei progetti sul territorio torinese.</p>
      </div>
    </section>

    <article class="demo-container content">
      <div class="donazione-grid">
        <section class="form-block">
          <h2>Donazione online</h2>

          <form [formGroup]="form" (ngSubmit)="onSubmit()" *ngIf="!submitted(); else thankyou">
            <fieldset class="fieldset-importo">
              <legend>Scegli importo</legend>
              <div class="preset-buttons">
                <button
                  *ngFor="let imp of presetImporti"
                  type="button"
                  class="preset-btn"
                  [class.is-selected]="importoSelezionato() === imp"
                  (click)="selezionaPreset(imp)"
                >
                  €{{ imp }}
                </button>
                <button
                  type="button"
                  class="preset-btn"
                  [class.is-selected]="importoSelezionato() === 'custom'"
                  (click)="selezionaPreset('custom')"
                >
                  Altro
                </button>
              </div>
              <div class="field" *ngIf="importoSelezionato() === 'custom'">
                <label for="importoCustom">Importo personalizzato (€)</label>
                <input
                  id="importoCustom"
                  type="number"
                  formControlName="importoCustom"
                  min="1"
                  max="10000"
                  placeholder="Es. 30"
                />
              </div>
            </fieldset>

            <fieldset class="fieldset-ricorrenza">
              <legend>Frequenza</legend>
              <div class="radio-group">
                <label class="radio-option" [class.is-selected]="form.value.ricorrenza === 'una-tantum'">
                  <input type="radio" formControlName="ricorrenza" value="una-tantum" />
                  <span>Una tantum</span>
                </label>
                <label class="radio-option" [class.is-selected]="form.value.ricorrenza === 'mensile'">
                  <input type="radio" formControlName="ricorrenza" value="mensile" />
                  <span>Mensile</span>
                </label>
                <label class="radio-option" [class.is-selected]="form.value.ricorrenza === 'annuale'">
                  <input type="radio" formControlName="ricorrenza" value="annuale" />
                  <span>Annuale</span>
                </label>
              </div>
            </fieldset>

            <div class="field">
              <label for="nome">Nome e cognome</label>
              <input id="nome" type="text" formControlName="nome" required />
            </div>
            <div class="field">
              <label for="email">Email</label>
              <input id="email" type="email" formControlName="email" required />
            </div>

            <div class="field field--checkbox">
              <input id="ricevutaFiscale" type="checkbox" formControlName="ricevutaFiscale" />
              <label for="ricevutaFiscale">
                Richiedo ricevuta fiscale per la detrazione IRPEF (35% per APS iscritte al RUNTS)
              </label>
            </div>

            <div class="field field--checkbox">
              <input id="privacy" type="checkbox" formControlName="privacy" />
              <label for="privacy">
                Accetto la privacy policy e il trattamento dei miei dati per la gestione della donazione.
              </label>
            </div>

            <button type="submit" class="btn btn-primary btn-full" [disabled]="form.invalid">
              Dona {{ importoLabel() }}
            </button>

            <p class="form-disclaimer">
              Demo non funzionale: nessun pagamento reale viene elaborato.
              Per donare davvero, utilizza le istruzioni di bonifico in questa pagina.
            </p>
          </form>

          <ng-template #thankyou>
            <div class="thankyou">
              <span class="thankyou-icon" aria-hidden="true">🤝</span>
              <h3>Grazie, {{ form.value.nome }}!</h3>
              <p>
                La tua donazione simulata di {{ importoLabel() }}
                <span *ngIf="form.value.ricorrenza !== 'una-tantum'"> ({{ form.value.ricorrenza }})</span>
                è stata registrata.
              </p>
              <p>In un sito reale riceveresti una email di conferma con la ricevuta fiscale.</p>
              <button type="button" class="btn btn-secondary" (click)="reset()">Nuova donazione</button>
            </div>
          </ng-template>
        </section>

        <aside class="info-block">
          <section class="cinque-per-mille">
            <h2>5x1000 — non ti costa nulla</h2>
            <p>
              Firma nel riquadro "Enti del Terzo Settore" della tua dichiarazione dei redditi e inserisci il nostro
              codice fiscale. Il 5 per mille non è una tassa aggiuntiva: è solo decidere dove vanno quelle risorse.
            </p>
            <div class="cf-box">
              <p class="cf-label">Codice fiscale per il 5x1000</p>
              <p class="cf-code">97043210014</p>
            </div>
          </section>

          <section class="bonifico">
            <h2>Donazione tramite bonifico</h2>
            <ul class="bonifico-list">
              <li>
                <span class="b-label">Intestato a</span>
                <span class="b-value">Associazione Famiglie Insieme APS</span>
              </li>
              <li>
                <span class="b-label">IBAN</span>
                <span class="b-value mono">IT60 G030 6909 6061 0000 0013 900</span>
              </li>
              <li>
                <span class="b-label">Causale</span>
                <span class="b-value">Donazione liberale</span>
              </li>
            </ul>
          </section>

          <section class="detraibilita">
            <h2>Detraibilità fiscale</h2>
            <p>
              Le donazioni a Associazioni di Promozione Sociale iscritte al RUNTS sono <strong>detraibili
              dall'IRPEF al 35%</strong> fino a €30.000 annui (art. 83 D.Lgs. 117/2017).
            </p>
            <p>
              Per donazioni superiori a €2.500 emettiamo automaticamente ricevuta fiscale.
              Per importi inferiori la ricevuta è disponibile su richiesta.
            </p>
          </section>
        </aside>
      </div>
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
      .donazione-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        align-items: start;
      }
      @media (max-width: 760px) {
        .donazione-grid { grid-template-columns: 1fr; }
      }
      .form-block {
        background: var(--color-bg-subtle);
        border-radius: var(--radius-lg);
        padding: 2rem;
      }
      .form-block h2 { margin: 0 0 1.5rem; }
      fieldset {
        border: none;
        padding: 0;
        margin: 0 0 1.5rem;
      }
      legend {
        font-size: 0.85rem;
        font-weight: 600;
        margin-bottom: 0.75rem;
        color: var(--color-fg-default);
      }
      .preset-buttons {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
        margin-bottom: 0.75rem;
      }
      .preset-btn {
        padding: 0.5rem 1rem;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        background: #ffffff;
        font-size: 0.9rem;
        font-weight: 600;
        color: var(--color-fg-default);
        cursor: pointer;
        transition: all 0.15s ease;
      }
      .preset-btn:hover { border-color: var(--color-accent); color: var(--color-accent); }
      .preset-btn.is-selected {
        background: var(--color-accent);
        border-color: var(--color-accent);
        color: #ffffff;
      }
      .radio-group {
        display: flex;
        gap: 0.75rem;
        flex-wrap: wrap;
      }
      .radio-option {
        display: flex;
        align-items: center;
        gap: 0.4rem;
        padding: 0.45rem 0.9rem;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-md);
        cursor: pointer;
        font-size: 0.9rem;
        transition: all 0.15s ease;
      }
      .radio-option.is-selected {
        border-color: var(--color-accent);
        background: #f0fdfa;
        color: var(--color-accent);
        font-weight: 600;
      }
      .radio-option input { accent-color: var(--color-accent); }
      .field {
        margin-bottom: 1rem;
        display: flex;
        flex-direction: column;
      }
      .field label {
        font-size: 0.85rem;
        font-weight: 600;
        margin-bottom: 0.25rem;
      }
      .field input {
        padding: 0.5rem 0.75rem;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-sm);
        font-family: inherit;
        font-size: 0.95rem;
      }
      .field input:focus {
        outline: 2px solid var(--color-accent);
        outline-offset: 1px;
        border-color: var(--color-accent);
      }
      .field--checkbox {
        flex-direction: row;
        align-items: flex-start;
        gap: 0.5rem;
      }
      .field--checkbox label { font-weight: 400; font-size: 0.85rem; color: var(--color-fg-muted); }
      .field--checkbox input { margin-top: 0.15rem; flex-shrink: 0; accent-color: var(--color-accent); }
      .btn {
        display: inline-block;
        padding: 0.7rem 1.5rem;
        border-radius: var(--radius-md);
        text-decoration: none;
        font-weight: 600;
        border: none;
        cursor: pointer;
        font-size: 0.95rem;
        transition: all 0.15s ease;
      }
      .btn-primary { background: var(--color-accent); color: #ffffff; }
      .btn-primary:hover { background: #0f766e; }
      .btn-primary:disabled { opacity: 0.5; cursor: not-allowed; }
      .btn-secondary {
        background: #ffffff;
        color: var(--color-fg-default);
        border: 1px solid var(--color-border);
      }
      .btn-full { width: 100%; text-align: center; }
      .form-disclaimer {
        font-size: 0.8rem;
        color: var(--color-fg-muted);
        font-style: italic;
        margin-top: 0.75rem;
        text-align: center;
      }
      .thankyou { text-align: center; padding: 1rem 0; }
      .thankyou-icon { font-size: 3rem; display: block; margin-bottom: 1rem; }
      .thankyou h3 { color: var(--color-success); margin: 0 0 0.75rem; }
      .thankyou p { color: var(--color-fg-muted); margin-bottom: 0.5rem; }
      .thankyou button { margin-top: 1.25rem; }
      .info-block { display: flex; flex-direction: column; gap: 2rem; }
      .cinque-per-mille {
        background: #f0fdfa;
        border: 1px solid #99f6e4;
        border-radius: var(--radius-lg);
        padding: 1.5rem;
      }
      .cinque-per-mille h2 { margin: 0 0 0.75rem; font-size: 1.15rem; }
      .cinque-per-mille p { color: var(--color-fg-muted); margin: 0 0 1rem; font-size: 0.9rem; line-height: 1.6; }
      .cf-box {
        background: #ffffff;
        border: 1px solid #99f6e4;
        border-radius: var(--radius-md);
        padding: 1rem;
        text-align: center;
      }
      .cf-label { font-size: 0.75rem; color: var(--color-fg-muted); margin: 0 0 0.25rem; text-transform: uppercase; letter-spacing: 0.04em; }
      .cf-code { font-size: 1.5rem; font-weight: 700; font-family: var(--font-mono); color: #0f766e; margin: 0; letter-spacing: 0.08em; }
      .bonifico {
        background: var(--color-bg-subtle);
        border-radius: var(--radius-lg);
        padding: 1.5rem;
      }
      .bonifico h2 { margin: 0 0 1rem; font-size: 1.15rem; }
      .bonifico-list { list-style: none; padding: 0; margin: 0; }
      .bonifico-list li {
        display: flex;
        flex-direction: column;
        gap: 0.15rem;
        padding: 0.6rem 0;
        border-bottom: 1px dashed var(--color-border);
      }
      .bonifico-list li:last-child { border-bottom: none; }
      .b-label { font-size: 0.75rem; color: var(--color-fg-muted); text-transform: uppercase; letter-spacing: 0.04em; }
      .b-value { font-weight: 600; font-size: 0.9rem; }
      .mono { font-family: var(--font-mono); }
      .detraibilita {
        border: 1px solid var(--color-border);
        border-radius: var(--radius-lg);
        padding: 1.5rem;
      }
      .detraibilita h2 { margin: 0 0 0.75rem; font-size: 1.15rem; }
      .detraibilita p { color: var(--color-fg-muted); margin: 0 0 0.75rem; font-size: 0.9rem; line-height: 1.6; }
      .detraibilita p:last-child { margin-bottom: 0; }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DonareComponent {
  private readonly fb = inject(FormBuilder);

  readonly presetImporti = IMPORTI_PRESET;
  readonly importoSelezionato = signal<ImportoPreset | 'custom'>(25);
  readonly submitted = signal(false);

  readonly form: FormGroup = this.fb.nonNullable.group({
    importoCustom: [null as number | null],
    ricorrenza: ['una-tantum', Validators.required],
    nome: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    ricevutaFiscale: [false],
    privacy: [false, Validators.requiredTrue]
  });

  selezionaPreset(imp: ImportoPreset | 'custom'): void {
    this.importoSelezionato.set(imp);
    if (imp !== 'custom') {
      this.form.patchValue({ importoCustom: null });
    }
  }

  importoLabel(): string {
    const sel = this.importoSelezionato();
    if (sel === 'custom') {
      const v = this.form.value.importoCustom as number | null;
      return v ? `€${v}` : '€?';
    }
    return `€${sel}`;
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.submitted.set(true);
    }
  }

  reset(): void {
    this.form.reset({ ricorrenza: 'una-tantum', ricevutaFiscale: false, privacy: false });
    this.importoSelezionato.set(25);
    this.submitted.set(false);
  }
}
