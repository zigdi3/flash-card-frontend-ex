import { Component, effect, signal } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { debounceTime } from 'rxjs';
import { CardProfile } from '../card-register/model/card-profile.model';
import { CardService } from '../../../core/services/card.service';
import { CommonModule } from '@angular/common';
import { QrCodeComponent } from 'ng-qrcode';
import { ZardButtonComponent } from '@app/shared/components/button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-view',
  standalone: true,
  imports: [QrCodeComponent, CommonModule, ZardButtonComponent],
  templateUrl: './card-view.component.html',
})
export class CardViewComponent {
  public cardList = signal<CardProfile[]>([]);
  public isLoading = signal(false);

  constructor(
    private cardService: CardService,
    private route: Router,
    private sanitizer: DomSanitizer
  ) // private themeService: ThemeService
  {
    // this.themeService.themeChange.subscribe({
    //   next: (theme: string) => {
    //     console.log("listen themes from app...");
    //   }
    // });
    this.setupEffects();
  }

  loadCards() {
    const cards$ = this.cardService.list().pipe(debounceTime(4000));

    cards$.subscribe({
      next: (cards: { data: CardProfile[] }) => {
        if (Array.isArray(cards.data)) {
          this.cardList.set(cards.data);
        } else {
          console.error('Expected an array but got:', cards);
        }
      },
      error: () => console.log('Erro ao listar cards'),
      complete: () => this.isLoading.set(false),
    });
  }

  private setupEffects() {
    effect(() => this.loadCards());
  }

  goToRegisterCard(): void {
    this.route.navigate(['card-register']);
  }

  cleanURL(oldURL: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(oldURL);
  }
}
