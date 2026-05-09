import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

const SKILLS_DISPONIBILI = [
  'Insegnamento / tutoring',
  'Psicologia / counseling',
  'Cucina / distribuzione alimentare',
  'Assistenza anziani',
  'Informatica',
  'Comunicazione / social media',
  'Amministrazione / contabilità',
  'Guida autoveicolo',
  'Lingue straniere',
  'Artigianato / laboratori creativi'
] as const;

const DISPONIBILITA = [
  'Mattina (lun-ven)',
  'Pomeriggio (lun-ven)',
  'Sera (lun-ven)',
  'Sabato mattina',
  'Sabato pomeriggio',
  'Domenica'
] as const;

@Component({
  selector: 'app-diventa-volontario',
  standalone: true,
  imports: [NgFor, NgIf, ReactiveFormsModule],
  template: `
    <section class="page-header">
      <div class="demo-container">
        <h1>Diventa volontario</h1>
        <p>Unisciti ai nostri 35 volontari e contribuisci a fare la differenza per le famiglie torinesi.</p>
      </div>
    </section>

    <article class="demo-container content">
      <div class="volontario-grid">
        <section class="form-block">
          <h2>Candidatura volontario</h2>

          <form [formGroup]="form" (ngSubmit)="onSubmit()" *ngIf="!submitted(); else thankyou">
            <div class="field-row">
              <div class="field">
                <label for="nome">Nome</label>
                <input id="nome" type="text" formControlName="nome" required />
              </div>
              <div class="field">
                <label for="cognome">Cognome</label>
                <input id="cognome" type="text" formControlName="cognome" required />
              </div>
            </div>
            <div class="field">
              <label for="email">Email</label>
              <input id="email" type="email" formControlName="email" required />
            </div>
            <div class="field">
              <label for="telefono">Telefono</label>
              <input id="telefono" type="tel" formControlName="telefono" />
            </div>
            <div class="field">
              <label for="eta">Età</label>
              <input id="eta" type="number" formControlName="eta" min="16" max="100" required />
            </div>

            <fieldset class="fieldset-skills">
              <legend>Competenze e ambiti di interesse (scegli tutte quelle che ti riguardano)</legend>
              <div class="checkbox-grid">
                <label *ngFor="let skill of skillsDisponibili" class="checkbox-option">
                  <input
                    type="checkbox"
                    [value]="skill"
                    (change)="toggleSkill(skill, $event)"
                  />
                  <span>{{ skill }}</span>
                </label>
              </div>
            </fieldset>

            <fieldset class="fieldset-disponibilita">
              <legend>Disponibilità settimanale (scegli tutti i tuoi slot)</legend>
              <div class="checkbox-grid">
                <label *ngFor="let d of disponibilitaOptions" class="checkbox-option">
                  <input
                    type="checkbox"
                    [value]="d"
                    (change)="toggleDisponibilita(d, $event)"
                  />
                  <span>{{ d }}</span>
                </label>
              </div>
            </fieldset>

            <div class="field">
              <label for="motivazione">Perché vuoi fare volontariato con noi? (opzionale)</label>
              <textarea id="motivazione" formControlName="motivazione" rows="4"></textarea>
            </div>

            <div class="field field--checkbox">
              <input id="privacy" type="checkbox" formControlName="privacy" />
              <label for="privacy">
                Accetto la privacy policy e il trattamento dei dati per la gestione della candidatura volontario.
              </label>
            </div>

            <button type="submit" class="btn btn-primary btn-full" [disabled]="form.invalid">
              Invia candidatura
            </button>

            <p class="form-disclaimer">
              Demo non funzionale: nessun dato viene inviato.
              In un sito reale riceveresti una email di conferma entro 5 giorni lavorativi.
            </p>
          </form>

          <ng-template #thankyou>
            <div class="thankyou">
              <span class="thankyou-icon" aria-hidden="true">🤝</span>
              <h3>Grazie, {{ form.value.nome }}!</h3>
              <p>
                La tua candidatura come volontario è stata registrata.
                Il coordinatore ti contatterà entro 5 giorni lavorativi per un colloquio conoscitivo.
              </p>
              <p class="thankyou-note">
                Per le attività a contatto con minori sarà necessario un certificato penale del casellario
                giudiziario (rilascio gratuito, procedura guidata all'incontro).
              </p>
              <button type="button" class="btn btn-secondary" (click)="reset()">Torna al modulo</button>
            </div>
          </ng-template>
        </section>

        <aside class="info-block">
          <section class="perche">
            <h2>Perché fare volontariato con noi</h2>
            <ul class="perche-list">
              <li>
                <span class="perche-icon" aria-hidden="true">📚</span>
                <div>
                  <h4>Impatto reale e misurabile</h4>
                  <p>Ogni anno pubblichiamo i numeri di impatto di ogni progetto. Vedrai i risultati del tuo impegno.</p>
                </div>
              </li>
              <li>
                <span class="perche-icon" aria-hidden="true">🎓</span>
                <div>
                  <h4>Formazione continua</h4>
                  <p>Organizziamo corsi di formazione per i volontari: tutoring, primo soccorso, comunicazione non violenta.</p>
                </div>
              </li>
              <li>
                <span class="perche-icon" aria-hidden="true">🤝</span>
                <div>
                  <h4>Comunità accogliente</h4>
                  <p>Oltre 35 volontari di età e background diversi. Troverai un ambiente rispettoso e motivante.</p>
                </div>
              </li>
              <li>
                <span class="perche-icon" aria-hidden="true">📄</span>
                <div>
                  <h4>Attestato di volontariato</h4>
                  <p>Dopo 6 mesi di attività continuativa, rilasciamo attestato ufficiale valido per curriculum e concorsi.</p>
                </div>
              </li>
            </ul>
          </section>

          <section class="iter">
            <h2>Come funziona il percorso</h2>
            <ol class="iter-steps">
              <li>
                <span class="step-num">1</span>
                <div>
                  <h4>Compila il modulo</h4>
                  <p>Indica competenze e disponibilità. Rispondiamo entro 5 giorni lavorativi.</p>
                </div>
              </li>
              <li>
                <span class="step-num">2</span>
                <div>
                  <h4>Colloquio conoscitivo</h4>
                  <p>Un incontro informale con il coordinatore per conoscersi e capire dove puoi dare il contributo maggiore.</p>
                </div>
              </li>
              <li>
                <span class="step-num">3</span>
                <div>
                  <h4>Corso di accoglienza</h4>
                  <p>4 ore di formazione iniziale obbligatoria per tutti i nuovi volontari. Online o in presenza.</p>
                </div>
              </li>
              <li>
                <span class="step-num">4</span>
                <div>
                  <h4>Inizio attività</h4>
                  <p>Affiancamento graduale con un volontario senior nelle prime settimane di servizio.</p>
                </div>
              </li>
            </ol>
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
      .volontario-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        align-items: start;
      }
      @media (max-width: 760px) {
        .volontario-grid { grid-template-columns: 1fr; }
      }
      .form-block {
        background: var(--color-bg-subtle);
        border-radius: var(--radius-lg);
        padding: 2rem;
      }
      .form-block h2 { margin: 0 0 1.5rem; }
      .field-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.75rem;
      }
      @media (max-width: 480px) {
        .field-row { grid-template-columns: 1fr; }
      }
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
      .field input,
      .field textarea {
        padding: 0.5rem 0.75rem;
        border: 1px solid var(--color-border);
        border-radius: var(--radius-sm);
        font-family: inherit;
        font-size: 0.95rem;
      }
      .field input:focus,
      .field textarea:focus {
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
      fieldset { border: none; padding: 0; margin: 0 0 1.25rem; }
      legend {
        font-size: 0.85rem;
        font-weight: 600;
        margin-bottom: 0.75rem;
        color: var(--color-fg-default);
      }
      .checkbox-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 0.4rem;
      }
      .checkbox-option {
        display: flex;
        align-items: flex-start;
        gap: 0.4rem;
        font-size: 0.88rem;
        cursor: pointer;
        padding: 0.3rem 0;
      }
      .checkbox-option input { accent-color: var(--color-accent); margin-top: 0.15rem; flex-shrink: 0; }
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
      .btn-secondary { background: #ffffff; color: var(--color-fg-default); border: 1px solid var(--color-border); }
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
      .thankyou-note {
        font-size: 0.85rem;
        background: #fff8c5;
        border-radius: var(--radius-sm);
        padding: 0.6rem 0.9rem;
        text-align: left;
        margin-bottom: 1rem !important;
      }
      .thankyou button { margin-top: 0.5rem; }
      .info-block { display: flex; flex-direction: column; gap: 2rem; }
      .perche h2 { margin: 0 0 1.25rem; }
      .perche-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 1.25rem; }
      .perche-list li { display: flex; align-items: flex-start; gap: 1rem; }
      .perche-icon { font-size: 1.75rem; flex-shrink: 0; margin-top: 0.1rem; }
      .perche-list h4 { margin: 0 0 0.25rem; font-size: 0.95rem; }
      .perche-list p { margin: 0; color: var(--color-fg-muted); font-size: 0.88rem; line-height: 1.5; }
      .iter {
        background: var(--color-bg-subtle);
        border-radius: var(--radius-lg);
        padding: 1.5rem;
      }
      .iter h2 { margin: 0 0 1.25rem; }
      .iter-steps {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }
      .iter-steps li { display: flex; align-items: flex-start; gap: 1rem; }
      .step-num {
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background: var(--color-accent);
        color: #ffffff;
        font-size: 0.8rem;
        font-weight: 700;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        margin-top: 0.05rem;
      }
      .iter-steps h4 { margin: 0 0 0.2rem; font-size: 0.95rem; }
      .iter-steps p { margin: 0; color: var(--color-fg-muted); font-size: 0.88rem; line-height: 1.5; }
    `
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiventaVolontarioComponent {
  private readonly fb = inject(FormBuilder);

  readonly skillsDisponibili = SKILLS_DISPONIBILI;
  readonly disponibilitaOptions = DISPONIBILITA;
  readonly submitted = signal(false);

  private readonly skillsSelezionate = signal<string[]>([]);
  private readonly disponibilitaSelezionate = signal<string[]>([]);

  readonly form: FormGroup = this.fb.nonNullable.group({
    nome: ['', [Validators.required, Validators.minLength(2)]],
    cognome: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    telefono: [''],
    eta: [null as number | null, [Validators.required, Validators.min(16), Validators.max(100)]],
    motivazione: [''],
    privacy: [false, Validators.requiredTrue]
  });

  toggleSkill(skill: string, event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
    const current = this.skillsSelezionate();
    if (checked) {
      this.skillsSelezionate.set([...current, skill]);
    } else {
      this.skillsSelezionate.set(current.filter((s) => s !== skill));
    }
  }

  toggleDisponibilita(slot: string, event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
    const current = this.disponibilitaSelezionate();
    if (checked) {
      this.disponibilitaSelezionate.set([...current, slot]);
    } else {
      this.disponibilitaSelezionate.set(current.filter((s) => s !== slot));
    }
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.submitted.set(true);
    }
  }

  reset(): void {
    this.form.reset({ privacy: false });
    this.skillsSelezionate.set([]);
    this.disponibilitaSelezionate.set([]);
    this.submitted.set(false);
  }
}
